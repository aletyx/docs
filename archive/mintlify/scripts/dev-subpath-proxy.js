#!/usr/bin/env node
// Local dev proxy that mirrors production subpath hosting (aletyx.ai/docs).
//
// `mint dev` serves the site at the root, but production serves it under
// /docs, so hardcoded /docs/... links (raw <a> tags) 404 locally. This
// proxy listens on PROXY_PORT, strips a leading /docs from incoming paths,
// and forwards everything (including Next.js assets and HMR websockets) to
// the mint dev server on TARGET_PORT.
//
// Usage:
//   mint dev --port 3333 &
//   node scripts/dev-subpath-proxy.js            # serves http://localhost:3000/docs
//   PROXY_PORT=3000 TARGET_PORT=3333 node scripts/dev-subpath-proxy.js

const http = require('http');
const net = require('net');

const PROXY_PORT = Number(process.env.PROXY_PORT || 3000);
const TARGET_PORT = Number(process.env.TARGET_PORT || 3333);
const TARGET_HOST = '127.0.0.1';

function rewritePath(url) {
  if (url === '/docs') return '/';
  if (url.startsWith('/docs/')) return url.slice('/docs'.length);
  return url;
}

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(302, { Location: '/docs/' });
    res.end();
    return;
  }
  const proxyReq = http.request(
    {
      host: TARGET_HOST,
      port: TARGET_PORT,
      method: req.method,
      path: rewritePath(req.url),
      headers: { ...req.headers, host: `${TARGET_HOST}:${TARGET_PORT}` },
    },
    (proxyRes) => {
      res.writeHead(proxyRes.statusCode, proxyRes.headers);
      proxyRes.pipe(res);
    }
  );
  proxyReq.on('error', (err) => {
    res.writeHead(502, { 'Content-Type': 'text/plain' });
    res.end(`dev-subpath-proxy: cannot reach mint dev on :${TARGET_PORT} (${err.message})\nStart it with: mint dev --port ${TARGET_PORT}`);
  });
  req.pipe(proxyReq);
});

// Proxy websocket upgrades so Next.js hot reload keeps working.
server.on('upgrade', (req, socket, head) => {
  const upstream = net.connect(TARGET_PORT, TARGET_HOST, () => {
    const path = rewritePath(req.url);
    const headers = Object.entries(req.headers)
      .map(([k, v]) => `${k}: ${v}`)
      .join('\r\n');
    upstream.write(`${req.method} ${path} HTTP/1.1\r\n${headers}\r\n\r\n`);
    if (head && head.length) upstream.write(head);
    upstream.pipe(socket);
    socket.pipe(upstream);
  });
  upstream.on('error', () => socket.destroy());
  socket.on('error', () => upstream.destroy());
});

server.listen(PROXY_PORT, () => {
  console.log(`dev-subpath-proxy: http://localhost:${PROXY_PORT}/docs -> http://${TARGET_HOST}:${TARGET_PORT}`);
});

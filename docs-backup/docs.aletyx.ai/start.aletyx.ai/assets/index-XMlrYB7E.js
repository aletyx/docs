var Bm=e=>{throw TypeError(e)};var Qu=(e,t,n)=>t.has(e)||Bm("Cannot "+n);var J=(e,t,n)=>(Qu(e,t,"read from private field"),n?n.call(e):t.get(e)),Re=(e,t,n)=>t.has(e)?Bm("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Ae=(e,t,n,r)=>(Qu(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),ct=(e,t,n)=>(Qu(e,t,"access private method"),n);var Ca=(e,t,n,r)=>({set _(i){Ae(e,t,i,n)},get _(){return J(e,t,r)}});function zE(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Zn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mv={exports:{}},fu={},hv={exports:{}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ca=Symbol.for("react.element"),$E=Symbol.for("react.portal"),UE=Symbol.for("react.fragment"),WE=Symbol.for("react.strict_mode"),qE=Symbol.for("react.profiler"),HE=Symbol.for("react.provider"),GE=Symbol.for("react.context"),ZE=Symbol.for("react.forward_ref"),KE=Symbol.for("react.suspense"),QE=Symbol.for("react.memo"),XE=Symbol.for("react.lazy"),Rm=Symbol.iterator;function YE(e){return e===null||typeof e!="object"?null:(e=Rm&&e[Rm]||e["@@iterator"],typeof e=="function"?e:null)}var gv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vv=Object.assign,yv={};function Ro(e,t,n){this.props=e,this.context=t,this.refs=yv,this.updater=n||gv}Ro.prototype.isReactComponent={};Ro.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ro.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xv(){}xv.prototype=Ro.prototype;function zp(e,t,n){this.props=e,this.context=t,this.refs=yv,this.updater=n||gv}var $p=zp.prototype=new xv;$p.constructor=zp;vv($p,Ro.prototype);$p.isPureReactComponent=!0;var Nm=Array.isArray,Ev=Object.prototype.hasOwnProperty,Up={current:null},_v={key:!0,ref:!0,__self:!0,__source:!0};function wv(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Ev.call(t,r)&&!_v.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ca,type:e,key:o,ref:s,props:i,_owner:Up.current}}function JE(e,t){return{$$typeof:ca,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wp(e){return typeof e=="object"&&e!==null&&e.$$typeof===ca}function e_(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Tm=/\/+/g;function Xu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?e_(""+e.key):t.toString(36)}function tl(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ca:case $E:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Xu(s,0):r,Nm(i)?(n="",e!=null&&(n=e.replace(Tm,"$&/")+"/"),tl(i,t,n,"",function(u){return u})):i!=null&&(Wp(i)&&(i=JE(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Tm,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Nm(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Xu(o,a);s+=tl(o,t,n,l,i)}else if(l=YE(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Xu(o,a++),s+=tl(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Aa(e,t,n){if(e==null)return e;var r=[],i=0;return tl(e,r,"","",function(o){return t.call(n,o,i++)}),r}function t_(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ct={current:null},nl={transition:null},n_={ReactCurrentDispatcher:Ct,ReactCurrentBatchConfig:nl,ReactCurrentOwner:Up};function bv(){throw Error("act(...) is not supported in production builds of React.")}Ie.Children={map:Aa,forEach:function(e,t,n){Aa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Aa(e,function(){t++}),t},toArray:function(e){return Aa(e,function(t){return t})||[]},only:function(e){if(!Wp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ie.Component=Ro;Ie.Fragment=UE;Ie.Profiler=qE;Ie.PureComponent=zp;Ie.StrictMode=WE;Ie.Suspense=KE;Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n_;Ie.act=bv;Ie.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vv({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Up.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Ev.call(t,l)&&!_v.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ca,type:e.type,key:i,ref:o,props:r,_owner:s}};Ie.createContext=function(e){return e={$$typeof:GE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:HE,_context:e},e.Consumer=e};Ie.createElement=wv;Ie.createFactory=function(e){var t=wv.bind(null,e);return t.type=e,t};Ie.createRef=function(){return{current:null}};Ie.forwardRef=function(e){return{$$typeof:ZE,render:e}};Ie.isValidElement=Wp;Ie.lazy=function(e){return{$$typeof:XE,_payload:{_status:-1,_result:e},_init:t_}};Ie.memo=function(e,t){return{$$typeof:QE,type:e,compare:t===void 0?null:t}};Ie.startTransition=function(e){var t=nl.transition;nl.transition={};try{e()}finally{nl.transition=t}};Ie.unstable_act=bv;Ie.useCallback=function(e,t){return Ct.current.useCallback(e,t)};Ie.useContext=function(e){return Ct.current.useContext(e)};Ie.useDebugValue=function(){};Ie.useDeferredValue=function(e){return Ct.current.useDeferredValue(e)};Ie.useEffect=function(e,t){return Ct.current.useEffect(e,t)};Ie.useId=function(){return Ct.current.useId()};Ie.useImperativeHandle=function(e,t,n){return Ct.current.useImperativeHandle(e,t,n)};Ie.useInsertionEffect=function(e,t){return Ct.current.useInsertionEffect(e,t)};Ie.useLayoutEffect=function(e,t){return Ct.current.useLayoutEffect(e,t)};Ie.useMemo=function(e,t){return Ct.current.useMemo(e,t)};Ie.useReducer=function(e,t,n){return Ct.current.useReducer(e,t,n)};Ie.useRef=function(e){return Ct.current.useRef(e)};Ie.useState=function(e){return Ct.current.useState(e)};Ie.useSyncExternalStore=function(e,t,n){return Ct.current.useSyncExternalStore(e,t,n)};Ie.useTransition=function(){return Ct.current.useTransition()};Ie.version="18.3.1";hv.exports=Ie;var S=hv.exports;const Fe=pu(S),Cv=zE({__proto__:null,default:Fe},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_=S,i_=Symbol.for("react.element"),o_=Symbol.for("react.fragment"),s_=Object.prototype.hasOwnProperty,a_=r_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l_={key:!0,ref:!0,__self:!0,__source:!0};function Av(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)s_.call(t,r)&&!l_.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:i_,type:e,key:o,ref:s,props:i,_owner:a_.current}}fu.Fragment=o_;fu.jsx=Av;fu.jsxs=Av;mv.exports=fu;var w=mv.exports,Sv={exports:{}},Wt={},Dv={exports:{}},kv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(W,V){var Y=W.length;W.push(V);e:for(;0<Y;){var L=Y-1>>>1,j=W[L];if(0<i(j,V))W[L]=V,W[Y]=j,Y=L;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var V=W[0],Y=W.pop();if(Y!==V){W[0]=Y;e:for(var L=0,j=W.length,ue=j>>>1;L<ue;){var re=2*(L+1)-1,ne=W[re],we=re+1,ae=W[we];if(0>i(ne,Y))we<j&&0>i(ae,ne)?(W[L]=ae,W[we]=Y,L=we):(W[L]=ne,W[re]=Y,L=re);else if(we<j&&0>i(ae,Y))W[L]=ae,W[we]=Y,L=we;else break e}}return V}function i(W,V){var Y=W.sortIndex-V.sortIndex;return Y!==0?Y:W.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,m=null,d=3,p=!1,f=!1,h=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(W){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=W)r(u),V.sortIndex=V.expirationTime,t(l,V);else break;V=n(u)}}function E(W){if(h=!1,x(W),!f)if(n(l)!==null)f=!0,X(_);else{var V=n(u);V!==null&&q(E,V.startTime-W)}}function _(W,V){f=!1,h&&(h=!1,v(P),P=-1),p=!0;var Y=d;try{for(x(V),m=n(l);m!==null&&(!(m.expirationTime>V)||W&&!G());){var L=m.callback;if(typeof L=="function"){m.callback=null,d=m.priorityLevel;var j=L(m.expirationTime<=V);V=e.unstable_now(),typeof j=="function"?m.callback=j:m===n(l)&&r(l),x(V)}else r(l);m=n(l)}if(m!==null)var ue=!0;else{var re=n(u);re!==null&&q(E,re.startTime-V),ue=!1}return ue}finally{m=null,d=Y,p=!1}}var F=!1,D=null,P=-1,N=5,M=-1;function G(){return!(e.unstable_now()-M<N)}function I(){if(D!==null){var W=e.unstable_now();M=W;var V=!0;try{V=D(!0,W)}finally{V?O():(F=!1,D=null)}}else F=!1}var O;if(typeof g=="function")O=function(){g(I)};else if(typeof MessageChannel<"u"){var C=new MessageChannel,U=C.port2;C.port1.onmessage=I,O=function(){U.postMessage(null)}}else O=function(){y(I,0)};function X(W){D=W,F||(F=!0,O())}function q(W,V){P=y(function(){W(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(W){W.callback=null},e.unstable_continueExecution=function(){f||p||(f=!0,X(_))},e.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<W?Math.floor(1e3/W):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(W){switch(d){case 1:case 2:case 3:var V=3;break;default:V=d}var Y=d;d=V;try{return W()}finally{d=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(W,V){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var Y=d;d=W;try{return V()}finally{d=Y}},e.unstable_scheduleCallback=function(W,V,Y){var L=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?L+Y:L):Y=L,W){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=Y+j,W={id:c++,callback:V,priorityLevel:W,startTime:Y,expirationTime:j,sortIndex:-1},Y>L?(W.sortIndex=Y,t(u,W),n(l)===null&&W===n(u)&&(h?(v(P),P=-1):h=!0,q(E,Y-L))):(W.sortIndex=j,t(l,W),f||p||(f=!0,X(_))),W},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(W){var V=d;return function(){var Y=d;d=V;try{return W.apply(this,arguments)}finally{d=Y}}}})(kv);Dv.exports=kv;var u_=Dv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_=S,Ut=u_;function ee(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fv=new Set,Ss={};function Fi(e,t){_o(e,t),_o(e+"Capture",t)}function _o(e,t){for(Ss[e]=t,e=0;e<t.length;e++)Fv.add(t[e])}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yc=Object.prototype.hasOwnProperty,d_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mm={},Om={};function p_(e){return Yc.call(Om,e)?!0:Yc.call(Mm,e)?!1:d_.test(e)?Om[e]=!0:(Mm[e]=!0,!1)}function f_(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function m_(e,t,n,r){if(t===null||typeof t>"u"||f_(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function At(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ut[e]=new At(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ut[t]=new At(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ut[e]=new At(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ut[e]=new At(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ut[e]=new At(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ut[e]=new At(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ut[e]=new At(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ut[e]=new At(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ut[e]=new At(e,5,!1,e.toLowerCase(),null,!1,!1)});var qp=/[\-:]([a-z])/g;function Hp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qp,Hp);ut[t]=new At(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qp,Hp);ut[t]=new At(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qp,Hp);ut[t]=new At(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ut[e]=new At(e,1,!1,e.toLowerCase(),null,!1,!1)});ut.xlinkHref=new At("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ut[e]=new At(e,1,!1,e.toLowerCase(),null,!0,!0)});function Gp(e,t,n,r){var i=ut.hasOwnProperty(t)?ut[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(m_(t,n,i,r)&&(n=null),r||i===null?p_(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var sr=c_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sa=Symbol.for("react.element"),$i=Symbol.for("react.portal"),Ui=Symbol.for("react.fragment"),Zp=Symbol.for("react.strict_mode"),Jc=Symbol.for("react.profiler"),Iv=Symbol.for("react.provider"),Pv=Symbol.for("react.context"),Kp=Symbol.for("react.forward_ref"),ed=Symbol.for("react.suspense"),td=Symbol.for("react.suspense_list"),Qp=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),Bv=Symbol.for("react.offscreen"),Lm=Symbol.iterator;function Uo(e){return e===null||typeof e!="object"?null:(e=Lm&&e[Lm]||e["@@iterator"],typeof e=="function"?e:null)}var Ze=Object.assign,Yu;function is(e){if(Yu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yu=t&&t[1]||""}return`
`+Yu+e}var Ju=!1;function ec(e,t){if(!e||Ju)return"";Ju=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ju=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?is(e):""}function h_(e){switch(e.tag){case 5:return is(e.type);case 16:return is("Lazy");case 13:return is("Suspense");case 19:return is("SuspenseList");case 0:case 2:case 15:return e=ec(e.type,!1),e;case 11:return e=ec(e.type.render,!1),e;case 1:return e=ec(e.type,!0),e;default:return""}}function nd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ui:return"Fragment";case $i:return"Portal";case Jc:return"Profiler";case Zp:return"StrictMode";case ed:return"Suspense";case td:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pv:return(e.displayName||"Context")+".Consumer";case Iv:return(e._context.displayName||"Context")+".Provider";case Kp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qp:return t=e.displayName||null,t!==null?t:nd(e.type)||"Memo";case gr:t=e._payload,e=e._init;try{return nd(e(t))}catch{}}return null}function g_(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nd(t);case 8:return t===Zp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Lr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function v_(e){var t=Rv(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Da(e){e._valueTracker||(e._valueTracker=v_(e))}function Nv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Rv(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _l(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function rd(e,t){var n=t.checked;return Ze({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function jm(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Lr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Tv(e,t){t=t.checked,t!=null&&Gp(e,"checked",t,!1)}function id(e,t){Tv(e,t);var n=Lr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?od(e,t.type,n):t.hasOwnProperty("defaultValue")&&od(e,t.type,Lr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function od(e,t,n){(t!=="number"||_l(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var os=Array.isArray;function to(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Lr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function sd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(ee(91));return Ze({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zm(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(ee(92));if(os(n)){if(1<n.length)throw Error(ee(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Lr(n)}}function Mv(e,t){var n=Lr(t.value),r=Lr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $m(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ov(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ad(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ov(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ka,Lv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ka=ka||document.createElement("div"),ka.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ka.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ds(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},y_=["Webkit","ms","Moz","O"];Object.keys(fs).forEach(function(e){y_.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fs[t]=fs[e]})});function jv(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||fs.hasOwnProperty(e)&&fs[e]?(""+t).trim():t+"px"}function Vv(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=jv(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var x_=Ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ld(e,t){if(t){if(x_[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(ee(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(ee(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(ee(61))}if(t.style!=null&&typeof t.style!="object")throw Error(ee(62))}}function ud(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cd=null;function Xp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dd=null,no=null,ro=null;function Um(e){if(e=fa(e)){if(typeof dd!="function")throw Error(ee(280));var t=e.stateNode;t&&(t=yu(t),dd(e.stateNode,e.type,t))}}function zv(e){no?ro?ro.push(e):ro=[e]:no=e}function $v(){if(no){var e=no,t=ro;if(ro=no=null,Um(e),t)for(e=0;e<t.length;e++)Um(t[e])}}function Uv(e,t){return e(t)}function Wv(){}var tc=!1;function qv(e,t,n){if(tc)return e(t,n);tc=!0;try{return Uv(e,t,n)}finally{tc=!1,(no!==null||ro!==null)&&(Wv(),$v())}}function ks(e,t){var n=e.stateNode;if(n===null)return null;var r=yu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(ee(231,t,typeof n));return n}var pd=!1;if(Jn)try{var Wo={};Object.defineProperty(Wo,"passive",{get:function(){pd=!0}}),window.addEventListener("test",Wo,Wo),window.removeEventListener("test",Wo,Wo)}catch{pd=!1}function E_(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var ms=!1,wl=null,bl=!1,fd=null,__={onError:function(e){ms=!0,wl=e}};function w_(e,t,n,r,i,o,s,a,l){ms=!1,wl=null,E_.apply(__,arguments)}function b_(e,t,n,r,i,o,s,a,l){if(w_.apply(this,arguments),ms){if(ms){var u=wl;ms=!1,wl=null}else throw Error(ee(198));bl||(bl=!0,fd=u)}}function Ii(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wm(e){if(Ii(e)!==e)throw Error(ee(188))}function C_(e){var t=e.alternate;if(!t){if(t=Ii(e),t===null)throw Error(ee(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Wm(i),e;if(o===r)return Wm(i),t;o=o.sibling}throw Error(ee(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(ee(189))}}if(n.alternate!==r)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?e:t}function Gv(e){return e=C_(e),e!==null?Zv(e):null}function Zv(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zv(e);if(t!==null)return t;e=e.sibling}return null}var Kv=Ut.unstable_scheduleCallback,qm=Ut.unstable_cancelCallback,A_=Ut.unstable_shouldYield,S_=Ut.unstable_requestPaint,Je=Ut.unstable_now,D_=Ut.unstable_getCurrentPriorityLevel,Yp=Ut.unstable_ImmediatePriority,Qv=Ut.unstable_UserBlockingPriority,Cl=Ut.unstable_NormalPriority,k_=Ut.unstable_LowPriority,Xv=Ut.unstable_IdlePriority,mu=null,Fn=null;function F_(e){if(Fn&&typeof Fn.onCommitFiberRoot=="function")try{Fn.onCommitFiberRoot(mu,e,void 0,(e.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:B_,I_=Math.log,P_=Math.LN2;function B_(e){return e>>>=0,e===0?32:31-(I_(e)/P_|0)|0}var Fa=64,Ia=4194304;function ss(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Al(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=ss(a):(o&=s,o!==0&&(r=ss(o)))}else s=n&~i,s!==0?r=ss(s):o!==0&&(r=ss(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pn(t),i=1<<n,r|=e[n],t&=~i;return r}function R_(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N_(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-pn(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=R_(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function md(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yv(){var e=Fa;return Fa<<=1,!(Fa&4194240)&&(Fa=64),e}function nc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function da(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pn(t),e[t]=n}function T_(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-pn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Jp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Te=0;function Jv(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var e0,ef,t0,n0,r0,hd=!1,Pa=[],Fr=null,Ir=null,Pr=null,Fs=new Map,Is=new Map,yr=[],M_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hm(e,t){switch(e){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":Ir=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":Fs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Is.delete(t.pointerId)}}function qo(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=fa(t),t!==null&&ef(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function O_(e,t,n,r,i){switch(t){case"focusin":return Fr=qo(Fr,e,t,n,r,i),!0;case"dragenter":return Ir=qo(Ir,e,t,n,r,i),!0;case"mouseover":return Pr=qo(Pr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Fs.set(o,qo(Fs.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Is.set(o,qo(Is.get(o)||null,e,t,n,r,i)),!0}return!1}function i0(e){var t=si(e.target);if(t!==null){var n=Ii(t);if(n!==null){if(t=n.tag,t===13){if(t=Hv(n),t!==null){e.blockedOn=t,r0(e.priority,function(){t0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cd=r,n.target.dispatchEvent(r),cd=null}else return t=fa(n),t!==null&&ef(t),e.blockedOn=n,!1;t.shift()}return!0}function Gm(e,t,n){rl(e)&&n.delete(t)}function L_(){hd=!1,Fr!==null&&rl(Fr)&&(Fr=null),Ir!==null&&rl(Ir)&&(Ir=null),Pr!==null&&rl(Pr)&&(Pr=null),Fs.forEach(Gm),Is.forEach(Gm)}function Ho(e,t){e.blockedOn===t&&(e.blockedOn=null,hd||(hd=!0,Ut.unstable_scheduleCallback(Ut.unstable_NormalPriority,L_)))}function Ps(e){function t(i){return Ho(i,e)}if(0<Pa.length){Ho(Pa[0],e);for(var n=1;n<Pa.length;n++){var r=Pa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Fr!==null&&Ho(Fr,e),Ir!==null&&Ho(Ir,e),Pr!==null&&Ho(Pr,e),Fs.forEach(t),Is.forEach(t),n=0;n<yr.length;n++)r=yr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yr.length&&(n=yr[0],n.blockedOn===null);)i0(n),n.blockedOn===null&&yr.shift()}var io=sr.ReactCurrentBatchConfig,Sl=!0;function j_(e,t,n,r){var i=Te,o=io.transition;io.transition=null;try{Te=1,tf(e,t,n,r)}finally{Te=i,io.transition=o}}function V_(e,t,n,r){var i=Te,o=io.transition;io.transition=null;try{Te=4,tf(e,t,n,r)}finally{Te=i,io.transition=o}}function tf(e,t,n,r){if(Sl){var i=gd(e,t,n,r);if(i===null)pc(e,t,r,Dl,n),Hm(e,r);else if(O_(i,e,t,n,r))r.stopPropagation();else if(Hm(e,r),t&4&&-1<M_.indexOf(e)){for(;i!==null;){var o=fa(i);if(o!==null&&e0(o),o=gd(e,t,n,r),o===null&&pc(e,t,r,Dl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else pc(e,t,r,null,n)}}var Dl=null;function gd(e,t,n,r){if(Dl=null,e=Xp(r),e=si(e),e!==null)if(t=Ii(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Dl=e,null}function o0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(D_()){case Yp:return 1;case Qv:return 4;case Cl:case k_:return 16;case Xv:return 536870912;default:return 16}default:return 16}}var Dr=null,nf=null,il=null;function s0(){if(il)return il;var e,t=nf,n=t.length,r,i="value"in Dr?Dr.value:Dr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return il=i.slice(e,1<r?1-r:void 0)}function ol(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ba(){return!0}function Zm(){return!1}function qt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ba:Zm,this.isPropagationStopped=Zm,this}return Ze(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ba)},persist:function(){},isPersistent:Ba}),t}var No={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rf=qt(No),pa=Ze({},No,{view:0,detail:0}),z_=qt(pa),rc,ic,Go,hu=Ze({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:of,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Go&&(Go&&e.type==="mousemove"?(rc=e.screenX-Go.screenX,ic=e.screenY-Go.screenY):ic=rc=0,Go=e),rc)},movementY:function(e){return"movementY"in e?e.movementY:ic}}),Km=qt(hu),$_=Ze({},hu,{dataTransfer:0}),U_=qt($_),W_=Ze({},pa,{relatedTarget:0}),oc=qt(W_),q_=Ze({},No,{animationName:0,elapsedTime:0,pseudoElement:0}),H_=qt(q_),G_=Ze({},No,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Z_=qt(G_),K_=Ze({},No,{data:0}),Qm=qt(K_),Q_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J_(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Y_[e])?!!t[e]:!1}function of(){return J_}var ew=Ze({},pa,{key:function(e){if(e.key){var t=Q_[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?X_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:of,charCode:function(e){return e.type==="keypress"?ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tw=qt(ew),nw=Ze({},hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xm=qt(nw),rw=Ze({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:of}),iw=qt(rw),ow=Ze({},No,{propertyName:0,elapsedTime:0,pseudoElement:0}),sw=qt(ow),aw=Ze({},hu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lw=qt(aw),uw=[9,13,27,32],sf=Jn&&"CompositionEvent"in window,hs=null;Jn&&"documentMode"in document&&(hs=document.documentMode);var cw=Jn&&"TextEvent"in window&&!hs,a0=Jn&&(!sf||hs&&8<hs&&11>=hs),Ym=" ",Jm=!1;function l0(e,t){switch(e){case"keyup":return uw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function u0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wi=!1;function dw(e,t){switch(e){case"compositionend":return u0(t);case"keypress":return t.which!==32?null:(Jm=!0,Ym);case"textInput":return e=t.data,e===Ym&&Jm?null:e;default:return null}}function pw(e,t){if(Wi)return e==="compositionend"||!sf&&l0(e,t)?(e=s0(),il=nf=Dr=null,Wi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return a0&&t.locale!=="ko"?null:t.data;default:return null}}var fw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fw[e.type]:t==="textarea"}function c0(e,t,n,r){zv(r),t=kl(t,"onChange"),0<t.length&&(n=new rf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var gs=null,Bs=null;function mw(e){_0(e,0)}function gu(e){var t=Gi(e);if(Nv(t))return e}function hw(e,t){if(e==="change")return t}var d0=!1;if(Jn){var sc;if(Jn){var ac="oninput"in document;if(!ac){var th=document.createElement("div");th.setAttribute("oninput","return;"),ac=typeof th.oninput=="function"}sc=ac}else sc=!1;d0=sc&&(!document.documentMode||9<document.documentMode)}function nh(){gs&&(gs.detachEvent("onpropertychange",p0),Bs=gs=null)}function p0(e){if(e.propertyName==="value"&&gu(Bs)){var t=[];c0(t,Bs,e,Xp(e)),qv(mw,t)}}function gw(e,t,n){e==="focusin"?(nh(),gs=t,Bs=n,gs.attachEvent("onpropertychange",p0)):e==="focusout"&&nh()}function vw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gu(Bs)}function yw(e,t){if(e==="click")return gu(t)}function xw(e,t){if(e==="input"||e==="change")return gu(t)}function Ew(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var hn=typeof Object.is=="function"?Object.is:Ew;function Rs(e,t){if(hn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Yc.call(t,i)||!hn(e[i],t[i]))return!1}return!0}function rh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ih(e,t){var n=rh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rh(n)}}function f0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?f0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function m0(){for(var e=window,t=_l();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_l(e.document)}return t}function af(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _w(e){var t=m0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&f0(n.ownerDocument.documentElement,n)){if(r!==null&&af(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ih(n,o);var s=ih(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ww=Jn&&"documentMode"in document&&11>=document.documentMode,qi=null,vd=null,vs=null,yd=!1;function oh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yd||qi==null||qi!==_l(r)||(r=qi,"selectionStart"in r&&af(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vs&&Rs(vs,r)||(vs=r,r=kl(vd,"onSelect"),0<r.length&&(t=new rf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qi)))}function Ra(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Hi={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionend:Ra("Transition","TransitionEnd")},lc={},h0={};Jn&&(h0=document.createElement("div").style,"AnimationEvent"in window||(delete Hi.animationend.animation,delete Hi.animationiteration.animation,delete Hi.animationstart.animation),"TransitionEvent"in window||delete Hi.transitionend.transition);function vu(e){if(lc[e])return lc[e];if(!Hi[e])return e;var t=Hi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in h0)return lc[e]=t[n];return e}var g0=vu("animationend"),v0=vu("animationiteration"),y0=vu("animationstart"),x0=vu("transitionend"),E0=new Map,sh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zr(e,t){E0.set(e,t),Fi(t,[e])}for(var uc=0;uc<sh.length;uc++){var cc=sh[uc],bw=cc.toLowerCase(),Cw=cc[0].toUpperCase()+cc.slice(1);Zr(bw,"on"+Cw)}Zr(g0,"onAnimationEnd");Zr(v0,"onAnimationIteration");Zr(y0,"onAnimationStart");Zr("dblclick","onDoubleClick");Zr("focusin","onFocus");Zr("focusout","onBlur");Zr(x0,"onTransitionEnd");_o("onMouseEnter",["mouseout","mouseover"]);_o("onMouseLeave",["mouseout","mouseover"]);_o("onPointerEnter",["pointerout","pointerover"]);_o("onPointerLeave",["pointerout","pointerover"]);Fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var as="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Aw=new Set("cancel close invalid load scroll toggle".split(" ").concat(as));function ah(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,b_(r,t,void 0,e),e.currentTarget=null}function _0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;ah(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;ah(i,a,u),o=l}}}if(bl)throw e=fd,bl=!1,fd=null,e}function ze(e,t){var n=t[bd];n===void 0&&(n=t[bd]=new Set);var r=e+"__bubble";n.has(r)||(w0(t,e,2,!1),n.add(r))}function dc(e,t,n){var r=0;t&&(r|=4),w0(n,e,r,t)}var Na="_reactListening"+Math.random().toString(36).slice(2);function Ns(e){if(!e[Na]){e[Na]=!0,Fv.forEach(function(n){n!=="selectionchange"&&(Aw.has(n)||dc(n,!1,e),dc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Na]||(t[Na]=!0,dc("selectionchange",!1,t))}}function w0(e,t,n,r){switch(o0(t)){case 1:var i=j_;break;case 4:i=V_;break;default:i=tf}n=i.bind(null,t,n,e),i=void 0,!pd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function pc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=si(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}qv(function(){var u=o,c=Xp(n),m=[];e:{var d=E0.get(e);if(d!==void 0){var p=rf,f=e;switch(e){case"keypress":if(ol(n)===0)break e;case"keydown":case"keyup":p=tw;break;case"focusin":f="focus",p=oc;break;case"focusout":f="blur",p=oc;break;case"beforeblur":case"afterblur":p=oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Km;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=U_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=iw;break;case g0:case v0:case y0:p=H_;break;case x0:p=sw;break;case"scroll":p=z_;break;case"wheel":p=lw;break;case"copy":case"cut":case"paste":p=Z_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Xm}var h=(t&4)!==0,y=!h&&e==="scroll",v=h?d!==null?d+"Capture":null:d;h=[];for(var g=u,x;g!==null;){x=g;var E=x.stateNode;if(x.tag===5&&E!==null&&(x=E,v!==null&&(E=ks(g,v),E!=null&&h.push(Ts(g,E,x)))),y)break;g=g.return}0<h.length&&(d=new p(d,f,null,n,c),m.push({event:d,listeners:h}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",d&&n!==cd&&(f=n.relatedTarget||n.fromElement)&&(si(f)||f[er]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(f=n.relatedTarget||n.toElement,p=u,f=f?si(f):null,f!==null&&(y=Ii(f),f!==y||f.tag!==5&&f.tag!==6)&&(f=null)):(p=null,f=u),p!==f)){if(h=Km,E="onMouseLeave",v="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(h=Xm,E="onPointerLeave",v="onPointerEnter",g="pointer"),y=p==null?d:Gi(p),x=f==null?d:Gi(f),d=new h(E,g+"leave",p,n,c),d.target=y,d.relatedTarget=x,E=null,si(c)===u&&(h=new h(v,g+"enter",f,n,c),h.target=x,h.relatedTarget=y,E=h),y=E,p&&f)t:{for(h=p,v=f,g=0,x=h;x;x=Mi(x))g++;for(x=0,E=v;E;E=Mi(E))x++;for(;0<g-x;)h=Mi(h),g--;for(;0<x-g;)v=Mi(v),x--;for(;g--;){if(h===v||v!==null&&h===v.alternate)break t;h=Mi(h),v=Mi(v)}h=null}else h=null;p!==null&&lh(m,d,p,h,!1),f!==null&&y!==null&&lh(m,y,f,h,!0)}}e:{if(d=u?Gi(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var _=hw;else if(eh(d))if(d0)_=xw;else{_=vw;var F=gw}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(_=yw);if(_&&(_=_(e,u))){c0(m,_,n,c);break e}F&&F(e,d,u),e==="focusout"&&(F=d._wrapperState)&&F.controlled&&d.type==="number"&&od(d,"number",d.value)}switch(F=u?Gi(u):window,e){case"focusin":(eh(F)||F.contentEditable==="true")&&(qi=F,vd=u,vs=null);break;case"focusout":vs=vd=qi=null;break;case"mousedown":yd=!0;break;case"contextmenu":case"mouseup":case"dragend":yd=!1,oh(m,n,c);break;case"selectionchange":if(ww)break;case"keydown":case"keyup":oh(m,n,c)}var D;if(sf)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Wi?l0(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(a0&&n.locale!=="ko"&&(Wi||P!=="onCompositionStart"?P==="onCompositionEnd"&&Wi&&(D=s0()):(Dr=c,nf="value"in Dr?Dr.value:Dr.textContent,Wi=!0)),F=kl(u,P),0<F.length&&(P=new Qm(P,e,null,n,c),m.push({event:P,listeners:F}),D?P.data=D:(D=u0(n),D!==null&&(P.data=D)))),(D=cw?dw(e,n):pw(e,n))&&(u=kl(u,"onBeforeInput"),0<u.length&&(c=new Qm("onBeforeInput","beforeinput",null,n,c),m.push({event:c,listeners:u}),c.data=D))}_0(m,t)})}function Ts(e,t,n){return{instance:e,listener:t,currentTarget:n}}function kl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ks(e,n),o!=null&&r.unshift(Ts(e,o,i)),o=ks(e,t),o!=null&&r.push(Ts(e,o,i))),e=e.return}return r}function Mi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function lh(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ks(n,o),l!=null&&s.unshift(Ts(n,l,a))):i||(l=ks(n,o),l!=null&&s.push(Ts(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Sw=/\r\n?/g,Dw=/\u0000|\uFFFD/g;function uh(e){return(typeof e=="string"?e:""+e).replace(Sw,`
`).replace(Dw,"")}function Ta(e,t,n){if(t=uh(t),uh(e)!==t&&n)throw Error(ee(425))}function Fl(){}var xd=null,Ed=null;function _d(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wd=typeof setTimeout=="function"?setTimeout:void 0,kw=typeof clearTimeout=="function"?clearTimeout:void 0,ch=typeof Promise=="function"?Promise:void 0,Fw=typeof queueMicrotask=="function"?queueMicrotask:typeof ch<"u"?function(e){return ch.resolve(null).then(e).catch(Iw)}:wd;function Iw(e){setTimeout(function(){throw e})}function fc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ps(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ps(t)}function Br(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function dh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var To=Math.random().toString(36).slice(2),Sn="__reactFiber$"+To,Ms="__reactProps$"+To,er="__reactContainer$"+To,bd="__reactEvents$"+To,Pw="__reactListeners$"+To,Bw="__reactHandles$"+To;function si(e){var t=e[Sn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[er]||n[Sn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=dh(e);e!==null;){if(n=e[Sn])return n;e=dh(e)}return t}e=n,n=e.parentNode}return null}function fa(e){return e=e[Sn]||e[er],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(ee(33))}function yu(e){return e[Ms]||null}var Cd=[],Zi=-1;function Kr(e){return{current:e}}function $e(e){0>Zi||(e.current=Cd[Zi],Cd[Zi]=null,Zi--)}function Le(e,t){Zi++,Cd[Zi]=e.current,e.current=t}var jr={},ht=Kr(jr),Bt=Kr(!1),yi=jr;function wo(e,t){var n=e.type.contextTypes;if(!n)return jr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Rt(e){return e=e.childContextTypes,e!=null}function Il(){$e(Bt),$e(ht)}function ph(e,t,n){if(ht.current!==jr)throw Error(ee(168));Le(ht,t),Le(Bt,n)}function b0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(ee(108,g_(e)||"Unknown",i));return Ze({},n,r)}function Pl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jr,yi=ht.current,Le(ht,e),Le(Bt,Bt.current),!0}function fh(e,t,n){var r=e.stateNode;if(!r)throw Error(ee(169));n?(e=b0(e,t,yi),r.__reactInternalMemoizedMergedChildContext=e,$e(Bt),$e(ht),Le(ht,e)):$e(Bt),Le(Bt,n)}var Wn=null,xu=!1,mc=!1;function C0(e){Wn===null?Wn=[e]:Wn.push(e)}function Rw(e){xu=!0,C0(e)}function Qr(){if(!mc&&Wn!==null){mc=!0;var e=0,t=Te;try{var n=Wn;for(Te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Wn=null,xu=!1}catch(i){throw Wn!==null&&(Wn=Wn.slice(e+1)),Kv(Yp,Qr),i}finally{Te=t,mc=!1}}return null}var Ki=[],Qi=0,Bl=null,Rl=0,Zt=[],Kt=0,xi=null,Kn=1,Qn="";function ri(e,t){Ki[Qi++]=Rl,Ki[Qi++]=Bl,Bl=e,Rl=t}function A0(e,t,n){Zt[Kt++]=Kn,Zt[Kt++]=Qn,Zt[Kt++]=xi,xi=e;var r=Kn;e=Qn;var i=32-pn(r)-1;r&=~(1<<i),n+=1;var o=32-pn(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Kn=1<<32-pn(t)+i|n<<i|r,Qn=o+e}else Kn=1<<o|n<<i|r,Qn=e}function lf(e){e.return!==null&&(ri(e,1),A0(e,1,0))}function uf(e){for(;e===Bl;)Bl=Ki[--Qi],Ki[Qi]=null,Rl=Ki[--Qi],Ki[Qi]=null;for(;e===xi;)xi=Zt[--Kt],Zt[Kt]=null,Qn=Zt[--Kt],Zt[Kt]=null,Kn=Zt[--Kt],Zt[Kt]=null}var Vt=null,jt=null,We=!1,un=null;function S0(e,t){var n=Qt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function mh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Vt=e,jt=Br(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Vt=e,jt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xi!==null?{id:Kn,overflow:Qn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Qt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Vt=e,jt=null,!0):!1;default:return!1}}function Ad(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Sd(e){if(We){var t=jt;if(t){var n=t;if(!mh(e,t)){if(Ad(e))throw Error(ee(418));t=Br(n.nextSibling);var r=Vt;t&&mh(e,t)?S0(r,n):(e.flags=e.flags&-4097|2,We=!1,Vt=e)}}else{if(Ad(e))throw Error(ee(418));e.flags=e.flags&-4097|2,We=!1,Vt=e}}}function hh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Vt=e}function Ma(e){if(e!==Vt)return!1;if(!We)return hh(e),We=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_d(e.type,e.memoizedProps)),t&&(t=jt)){if(Ad(e))throw D0(),Error(ee(418));for(;t;)S0(e,t),t=Br(t.nextSibling)}if(hh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(ee(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){jt=Br(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}jt=null}}else jt=Vt?Br(e.stateNode.nextSibling):null;return!0}function D0(){for(var e=jt;e;)e=Br(e.nextSibling)}function bo(){jt=Vt=null,We=!1}function cf(e){un===null?un=[e]:un.push(e)}var Nw=sr.ReactCurrentBatchConfig;function Zo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var r=n.stateNode}if(!r)throw Error(ee(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,e))}return e}function Oa(e,t){throw e=Object.prototype.toString.call(t),Error(ee(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gh(e){var t=e._init;return t(e._payload)}function k0(e){function t(v,g){if(e){var x=v.deletions;x===null?(v.deletions=[g],v.flags|=16):x.push(g)}}function n(v,g){if(!e)return null;for(;g!==null;)t(v,g),g=g.sibling;return null}function r(v,g){for(v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function i(v,g){return v=Mr(v,g),v.index=0,v.sibling=null,v}function o(v,g,x){return v.index=x,e?(x=v.alternate,x!==null?(x=x.index,x<g?(v.flags|=2,g):x):(v.flags|=2,g)):(v.flags|=1048576,g)}function s(v){return e&&v.alternate===null&&(v.flags|=2),v}function a(v,g,x,E){return g===null||g.tag!==6?(g=_c(x,v.mode,E),g.return=v,g):(g=i(g,x),g.return=v,g)}function l(v,g,x,E){var _=x.type;return _===Ui?c(v,g,x.props.children,E,x.key):g!==null&&(g.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===gr&&gh(_)===g.type)?(E=i(g,x.props),E.ref=Zo(v,g,x),E.return=v,E):(E=pl(x.type,x.key,x.props,null,v.mode,E),E.ref=Zo(v,g,x),E.return=v,E)}function u(v,g,x,E){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=wc(x,v.mode,E),g.return=v,g):(g=i(g,x.children||[]),g.return=v,g)}function c(v,g,x,E,_){return g===null||g.tag!==7?(g=hi(x,v.mode,E,_),g.return=v,g):(g=i(g,x),g.return=v,g)}function m(v,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=_c(""+g,v.mode,x),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Sa:return x=pl(g.type,g.key,g.props,null,v.mode,x),x.ref=Zo(v,null,g),x.return=v,x;case $i:return g=wc(g,v.mode,x),g.return=v,g;case gr:var E=g._init;return m(v,E(g._payload),x)}if(os(g)||Uo(g))return g=hi(g,v.mode,x,null),g.return=v,g;Oa(v,g)}return null}function d(v,g,x,E){var _=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return _!==null?null:a(v,g,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Sa:return x.key===_?l(v,g,x,E):null;case $i:return x.key===_?u(v,g,x,E):null;case gr:return _=x._init,d(v,g,_(x._payload),E)}if(os(x)||Uo(x))return _!==null?null:c(v,g,x,E,null);Oa(v,x)}return null}function p(v,g,x,E,_){if(typeof E=="string"&&E!==""||typeof E=="number")return v=v.get(x)||null,a(g,v,""+E,_);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Sa:return v=v.get(E.key===null?x:E.key)||null,l(g,v,E,_);case $i:return v=v.get(E.key===null?x:E.key)||null,u(g,v,E,_);case gr:var F=E._init;return p(v,g,x,F(E._payload),_)}if(os(E)||Uo(E))return v=v.get(x)||null,c(g,v,E,_,null);Oa(g,E)}return null}function f(v,g,x,E){for(var _=null,F=null,D=g,P=g=0,N=null;D!==null&&P<x.length;P++){D.index>P?(N=D,D=null):N=D.sibling;var M=d(v,D,x[P],E);if(M===null){D===null&&(D=N);break}e&&D&&M.alternate===null&&t(v,D),g=o(M,g,P),F===null?_=M:F.sibling=M,F=M,D=N}if(P===x.length)return n(v,D),We&&ri(v,P),_;if(D===null){for(;P<x.length;P++)D=m(v,x[P],E),D!==null&&(g=o(D,g,P),F===null?_=D:F.sibling=D,F=D);return We&&ri(v,P),_}for(D=r(v,D);P<x.length;P++)N=p(D,v,P,x[P],E),N!==null&&(e&&N.alternate!==null&&D.delete(N.key===null?P:N.key),g=o(N,g,P),F===null?_=N:F.sibling=N,F=N);return e&&D.forEach(function(G){return t(v,G)}),We&&ri(v,P),_}function h(v,g,x,E){var _=Uo(x);if(typeof _!="function")throw Error(ee(150));if(x=_.call(x),x==null)throw Error(ee(151));for(var F=_=null,D=g,P=g=0,N=null,M=x.next();D!==null&&!M.done;P++,M=x.next()){D.index>P?(N=D,D=null):N=D.sibling;var G=d(v,D,M.value,E);if(G===null){D===null&&(D=N);break}e&&D&&G.alternate===null&&t(v,D),g=o(G,g,P),F===null?_=G:F.sibling=G,F=G,D=N}if(M.done)return n(v,D),We&&ri(v,P),_;if(D===null){for(;!M.done;P++,M=x.next())M=m(v,M.value,E),M!==null&&(g=o(M,g,P),F===null?_=M:F.sibling=M,F=M);return We&&ri(v,P),_}for(D=r(v,D);!M.done;P++,M=x.next())M=p(D,v,P,M.value,E),M!==null&&(e&&M.alternate!==null&&D.delete(M.key===null?P:M.key),g=o(M,g,P),F===null?_=M:F.sibling=M,F=M);return e&&D.forEach(function(I){return t(v,I)}),We&&ri(v,P),_}function y(v,g,x,E){if(typeof x=="object"&&x!==null&&x.type===Ui&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Sa:e:{for(var _=x.key,F=g;F!==null;){if(F.key===_){if(_=x.type,_===Ui){if(F.tag===7){n(v,F.sibling),g=i(F,x.props.children),g.return=v,v=g;break e}}else if(F.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===gr&&gh(_)===F.type){n(v,F.sibling),g=i(F,x.props),g.ref=Zo(v,F,x),g.return=v,v=g;break e}n(v,F);break}else t(v,F);F=F.sibling}x.type===Ui?(g=hi(x.props.children,v.mode,E,x.key),g.return=v,v=g):(E=pl(x.type,x.key,x.props,null,v.mode,E),E.ref=Zo(v,g,x),E.return=v,v=E)}return s(v);case $i:e:{for(F=x.key;g!==null;){if(g.key===F)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(v,g.sibling),g=i(g,x.children||[]),g.return=v,v=g;break e}else{n(v,g);break}else t(v,g);g=g.sibling}g=wc(x,v.mode,E),g.return=v,v=g}return s(v);case gr:return F=x._init,y(v,g,F(x._payload),E)}if(os(x))return f(v,g,x,E);if(Uo(x))return h(v,g,x,E);Oa(v,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(v,g.sibling),g=i(g,x),g.return=v,v=g):(n(v,g),g=_c(x,v.mode,E),g.return=v,v=g),s(v)):n(v,g)}return y}var Co=k0(!0),F0=k0(!1),Nl=Kr(null),Tl=null,Xi=null,df=null;function pf(){df=Xi=Tl=null}function ff(e){var t=Nl.current;$e(Nl),e._currentValue=t}function Dd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function oo(e,t){Tl=e,df=Xi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pt=!0),e.firstContext=null)}function Yt(e){var t=e._currentValue;if(df!==e)if(e={context:e,memoizedValue:t,next:null},Xi===null){if(Tl===null)throw Error(ee(308));Xi=e,Tl.dependencies={lanes:0,firstContext:e}}else Xi=Xi.next=e;return t}var ai=null;function mf(e){ai===null?ai=[e]:ai.push(e)}function I0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,mf(t)):(n.next=i.next,i.next=n),t.interleaved=n,tr(e,r)}function tr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vr=!1;function hf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function P0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Be&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,tr(e,n)}return i=r.interleaved,i===null?(t.next=t,mf(r)):(t.next=i.next,i.next=t),r.interleaved=t,tr(e,n)}function sl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jp(e,n)}}function vh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ml(e,t,n,r){var i=e.updateQueue;vr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var m=i.baseState;s=0,c=u=l=null,a=o;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var f=e,h=a;switch(d=t,p=n,h.tag){case 1:if(f=h.payload,typeof f=="function"){m=f.call(p,m,d);break e}m=f;break e;case 3:f.flags=f.flags&-65537|128;case 0:if(f=h.payload,d=typeof f=="function"?f.call(p,m,d):f,d==null)break e;m=Ze({},m,d);break e;case 2:vr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=m):c=c.next=p,s|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(l=m),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);_i|=s,e.lanes=s,e.memoizedState=m}}function yh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(ee(191,i));i.call(r)}}}var ma={},In=Kr(ma),Os=Kr(ma),Ls=Kr(ma);function li(e){if(e===ma)throw Error(ee(174));return e}function gf(e,t){switch(Le(Ls,t),Le(Os,e),Le(In,ma),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ad(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ad(t,e)}$e(In),Le(In,t)}function Ao(){$e(In),$e(Os),$e(Ls)}function B0(e){li(Ls.current);var t=li(In.current),n=ad(t,e.type);t!==n&&(Le(Os,e),Le(In,n))}function vf(e){Os.current===e&&($e(In),$e(Os))}var He=Kr(0);function Ol(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hc=[];function yf(){for(var e=0;e<hc.length;e++)hc[e]._workInProgressVersionPrimary=null;hc.length=0}var al=sr.ReactCurrentDispatcher,gc=sr.ReactCurrentBatchConfig,Ei=0,Ge=null,rt=null,ot=null,Ll=!1,ys=!1,js=0,Tw=0;function dt(){throw Error(ee(321))}function xf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!hn(e[n],t[n]))return!1;return!0}function Ef(e,t,n,r,i,o){if(Ei=o,Ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,al.current=e===null||e.memoizedState===null?jw:Vw,e=n(r,i),ys){o=0;do{if(ys=!1,js=0,25<=o)throw Error(ee(301));o+=1,ot=rt=null,t.updateQueue=null,al.current=zw,e=n(r,i)}while(ys)}if(al.current=jl,t=rt!==null&&rt.next!==null,Ei=0,ot=rt=Ge=null,Ll=!1,t)throw Error(ee(300));return e}function _f(){var e=js!==0;return js=0,e}function wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?Ge.memoizedState=ot=e:ot=ot.next=e,ot}function Jt(){if(rt===null){var e=Ge.alternate;e=e!==null?e.memoizedState:null}else e=rt.next;var t=ot===null?Ge.memoizedState:ot.next;if(t!==null)ot=t,rt=e;else{if(e===null)throw Error(ee(310));rt=e,e={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},ot===null?Ge.memoizedState=ot=e:ot=ot.next=e}return ot}function Vs(e,t){return typeof t=="function"?t(e):t}function vc(e){var t=Jt(),n=t.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=e;var r=rt,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Ei&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=m,s=r):l=l.next=m,Ge.lanes|=c,_i|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,hn(r,t.memoizedState)||(Pt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ge.lanes|=o,_i|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function yc(e){var t=Jt(),n=t.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);hn(o,t.memoizedState)||(Pt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function R0(){}function N0(e,t){var n=Ge,r=Jt(),i=t(),o=!hn(r.memoizedState,i);if(o&&(r.memoizedState=i,Pt=!0),r=r.queue,wf(O0.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ot!==null&&ot.memoizedState.tag&1){if(n.flags|=2048,zs(9,M0.bind(null,n,r,i,t),void 0,null),st===null)throw Error(ee(349));Ei&30||T0(n,t,i)}return i}function T0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ge.updateQueue,t===null?(t={lastEffect:null,stores:null},Ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function M0(e,t,n,r){t.value=n,t.getSnapshot=r,L0(t)&&j0(e)}function O0(e,t,n){return n(function(){L0(t)&&j0(e)})}function L0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!hn(e,n)}catch{return!0}}function j0(e){var t=tr(e,1);t!==null&&fn(t,e,1,-1)}function xh(e){var t=wn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vs,lastRenderedState:e},t.queue=e,e=e.dispatch=Lw.bind(null,Ge,e),[t.memoizedState,e]}function zs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ge.updateQueue,t===null?(t={lastEffect:null,stores:null},Ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function V0(){return Jt().memoizedState}function ll(e,t,n,r){var i=wn();Ge.flags|=e,i.memoizedState=zs(1|t,n,void 0,r===void 0?null:r)}function Eu(e,t,n,r){var i=Jt();r=r===void 0?null:r;var o=void 0;if(rt!==null){var s=rt.memoizedState;if(o=s.destroy,r!==null&&xf(r,s.deps)){i.memoizedState=zs(t,n,o,r);return}}Ge.flags|=e,i.memoizedState=zs(1|t,n,o,r)}function Eh(e,t){return ll(8390656,8,e,t)}function wf(e,t){return Eu(2048,8,e,t)}function z0(e,t){return Eu(4,2,e,t)}function $0(e,t){return Eu(4,4,e,t)}function U0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function W0(e,t,n){return n=n!=null?n.concat([e]):null,Eu(4,4,U0.bind(null,t,e),n)}function bf(){}function q0(e,t){var n=Jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function H0(e,t){var n=Jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function G0(e,t,n){return Ei&21?(hn(n,t)||(n=Yv(),Ge.lanes|=n,_i|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pt=!0),e.memoizedState=n)}function Mw(e,t){var n=Te;Te=n!==0&&4>n?n:4,e(!0);var r=gc.transition;gc.transition={};try{e(!1),t()}finally{Te=n,gc.transition=r}}function Z0(){return Jt().memoizedState}function Ow(e,t,n){var r=Tr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},K0(e))Q0(t,n);else if(n=I0(e,t,n,r),n!==null){var i=wt();fn(n,e,r,i),X0(n,t,r)}}function Lw(e,t,n){var r=Tr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(K0(e))Q0(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,hn(a,s)){var l=t.interleaved;l===null?(i.next=i,mf(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=I0(e,t,i,r),n!==null&&(i=wt(),fn(n,e,r,i),X0(n,t,r))}}function K0(e){var t=e.alternate;return e===Ge||t!==null&&t===Ge}function Q0(e,t){ys=Ll=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function X0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jp(e,n)}}var jl={readContext:Yt,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},jw={readContext:Yt,useCallback:function(e,t){return wn().memoizedState=[e,t===void 0?null:t],e},useContext:Yt,useEffect:Eh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ll(4194308,4,U0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ll(4194308,4,e,t)},useInsertionEffect:function(e,t){return ll(4,2,e,t)},useMemo:function(e,t){var n=wn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ow.bind(null,Ge,e),[r.memoizedState,e]},useRef:function(e){var t=wn();return e={current:e},t.memoizedState=e},useState:xh,useDebugValue:bf,useDeferredValue:function(e){return wn().memoizedState=e},useTransition:function(){var e=xh(!1),t=e[0];return e=Mw.bind(null,e[1]),wn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ge,i=wn();if(We){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=t(),st===null)throw Error(ee(349));Ei&30||T0(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Eh(O0.bind(null,r,o,e),[e]),r.flags|=2048,zs(9,M0.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=wn(),t=st.identifierPrefix;if(We){var n=Qn,r=Kn;n=(r&~(1<<32-pn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=js++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Tw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Vw={readContext:Yt,useCallback:q0,useContext:Yt,useEffect:wf,useImperativeHandle:W0,useInsertionEffect:z0,useLayoutEffect:$0,useMemo:H0,useReducer:vc,useRef:V0,useState:function(){return vc(Vs)},useDebugValue:bf,useDeferredValue:function(e){var t=Jt();return G0(t,rt.memoizedState,e)},useTransition:function(){var e=vc(Vs)[0],t=Jt().memoizedState;return[e,t]},useMutableSource:R0,useSyncExternalStore:N0,useId:Z0,unstable_isNewReconciler:!1},zw={readContext:Yt,useCallback:q0,useContext:Yt,useEffect:wf,useImperativeHandle:W0,useInsertionEffect:z0,useLayoutEffect:$0,useMemo:H0,useReducer:yc,useRef:V0,useState:function(){return yc(Vs)},useDebugValue:bf,useDeferredValue:function(e){var t=Jt();return rt===null?t.memoizedState=e:G0(t,rt.memoizedState,e)},useTransition:function(){var e=yc(Vs)[0],t=Jt().memoizedState;return[e,t]},useMutableSource:R0,useSyncExternalStore:N0,useId:Z0,unstable_isNewReconciler:!1};function on(e,t){if(e&&e.defaultProps){t=Ze({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function kd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ze({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _u={isMounted:function(e){return(e=e._reactInternals)?Ii(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=wt(),i=Tr(e),o=Yn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Rr(e,o,i),t!==null&&(fn(t,e,i,r),sl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=wt(),i=Tr(e),o=Yn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Rr(e,o,i),t!==null&&(fn(t,e,i,r),sl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=wt(),r=Tr(e),i=Yn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Rr(e,i,r),t!==null&&(fn(t,e,r,n),sl(t,e,r))}};function _h(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Rs(n,r)||!Rs(i,o):!0}function Y0(e,t,n){var r=!1,i=jr,o=t.contextType;return typeof o=="object"&&o!==null?o=Yt(o):(i=Rt(t)?yi:ht.current,r=t.contextTypes,o=(r=r!=null)?wo(e,i):jr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_u,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function wh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_u.enqueueReplaceState(t,t.state,null)}function Fd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},hf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Yt(o):(o=Rt(t)?yi:ht.current,i.context=wo(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(kd(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&_u.enqueueReplaceState(i,i.state,null),Ml(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function So(e,t){try{var n="",r=t;do n+=h_(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function xc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Id(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $w=typeof WeakMap=="function"?WeakMap:Map;function J0(e,t,n){n=Yn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zl||(zl=!0,Vd=r),Id(e,t)},n}function ey(e,t,n){n=Yn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Id(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Id(e,t),typeof r!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function bh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $w;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=nb.bind(null,e,t,n),t.then(e,e))}function Ch(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ah(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Yn(-1,1),t.tag=2,Rr(n,t,1))),n.lanes|=1),e)}var Uw=sr.ReactCurrentOwner,Pt=!1;function xt(e,t,n,r){t.child=e===null?F0(t,null,n,r):Co(t,e.child,n,r)}function Sh(e,t,n,r,i){n=n.render;var o=t.ref;return oo(t,i),r=Ef(e,t,n,r,o,i),n=_f(),e!==null&&!Pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nr(e,t,i)):(We&&n&&lf(t),t.flags|=1,xt(e,t,r,i),t.child)}function Dh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Pf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ty(e,t,o,r,i)):(e=pl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Rs,n(s,r)&&e.ref===t.ref)return nr(e,t,i)}return t.flags|=1,e=Mr(o,r),e.ref=t.ref,e.return=t,t.child=e}function ty(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Rs(o,r)&&e.ref===t.ref)if(Pt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Pt=!0);else return t.lanes=e.lanes,nr(e,t,i)}return Pd(e,t,n,r,i)}function ny(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Le(Ji,Ot),Ot|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Le(Ji,Ot),Ot|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Le(Ji,Ot),Ot|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Le(Ji,Ot),Ot|=r;return xt(e,t,i,n),t.child}function ry(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pd(e,t,n,r,i){var o=Rt(n)?yi:ht.current;return o=wo(t,o),oo(t,i),n=Ef(e,t,n,r,o,i),r=_f(),e!==null&&!Pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nr(e,t,i)):(We&&r&&lf(t),t.flags|=1,xt(e,t,n,i),t.child)}function kh(e,t,n,r,i){if(Rt(n)){var o=!0;Pl(t)}else o=!1;if(oo(t,i),t.stateNode===null)ul(e,t),Y0(t,n,r),Fd(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Yt(u):(u=Rt(n)?yi:ht.current,u=wo(t,u));var c=n.getDerivedStateFromProps,m=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&wh(t,s,r,u),vr=!1;var d=t.memoizedState;s.state=d,Ml(t,r,s,i),l=t.memoizedState,a!==r||d!==l||Bt.current||vr?(typeof c=="function"&&(kd(t,n,c,r),l=t.memoizedState),(a=vr||_h(t,n,a,r,d,l,u))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,P0(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:on(t.type,a),s.props=u,m=t.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Yt(l):(l=Rt(n)?yi:ht.current,l=wo(t,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==m||d!==l)&&wh(t,s,r,l),vr=!1,d=t.memoizedState,s.state=d,Ml(t,r,s,i);var f=t.memoizedState;a!==m||d!==f||Bt.current||vr?(typeof p=="function"&&(kd(t,n,p,r),f=t.memoizedState),(u=vr||_h(t,n,u,r,d,f,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,f,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,f,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),s.props=r,s.state=f,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Bd(e,t,n,r,o,i)}function Bd(e,t,n,r,i,o){ry(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&fh(t,n,!1),nr(e,t,o);r=t.stateNode,Uw.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Co(t,e.child,null,o),t.child=Co(t,null,a,o)):xt(e,t,a,o),t.memoizedState=r.state,i&&fh(t,n,!0),t.child}function iy(e){var t=e.stateNode;t.pendingContext?ph(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ph(e,t.context,!1),gf(e,t.containerInfo)}function Fh(e,t,n,r,i){return bo(),cf(i),t.flags|=256,xt(e,t,n,r),t.child}var Rd={dehydrated:null,treeContext:null,retryLane:0};function Nd(e){return{baseLanes:e,cachePool:null,transitions:null}}function oy(e,t,n){var r=t.pendingProps,i=He.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Le(He,i&1),e===null)return Sd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Cu(s,r,0,null),e=hi(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Nd(n),t.memoizedState=Rd,e):Cf(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ww(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Mr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Mr(a,o):(o=hi(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Nd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Rd,r}return o=e.child,e=o.sibling,r=Mr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Cf(e,t){return t=Cu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function La(e,t,n,r){return r!==null&&cf(r),Co(t,e.child,null,n),e=Cf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ww(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=xc(Error(ee(422))),La(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Cu({mode:"visible",children:r.children},i,0,null),o=hi(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Co(t,e.child,null,s),t.child.memoizedState=Nd(s),t.memoizedState=Rd,o);if(!(t.mode&1))return La(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(ee(419)),r=xc(o,r,void 0),La(e,t,s,r)}if(a=(s&e.childLanes)!==0,Pt||a){if(r=st,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,tr(e,i),fn(r,e,i,-1))}return If(),r=xc(Error(ee(421))),La(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=rb.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,jt=Br(i.nextSibling),Vt=t,We=!0,un=null,e!==null&&(Zt[Kt++]=Kn,Zt[Kt++]=Qn,Zt[Kt++]=xi,Kn=e.id,Qn=e.overflow,xi=t),t=Cf(t,r.children),t.flags|=4096,t)}function Ih(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Dd(e.return,t,n)}function Ec(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function sy(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(xt(e,t,r.children,n),r=He.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ih(e,n,t);else if(e.tag===19)Ih(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Le(He,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ol(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ec(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ol(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ec(t,!0,n,null,o);break;case"together":Ec(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ul(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function nr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_i|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(ee(153));if(t.child!==null){for(e=t.child,n=Mr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qw(e,t,n){switch(t.tag){case 3:iy(t),bo();break;case 5:B0(t);break;case 1:Rt(t.type)&&Pl(t);break;case 4:gf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Le(Nl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Le(He,He.current&1),t.flags|=128,null):n&t.child.childLanes?oy(e,t,n):(Le(He,He.current&1),e=nr(e,t,n),e!==null?e.sibling:null);Le(He,He.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return sy(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Le(He,He.current),r)break;return null;case 22:case 23:return t.lanes=0,ny(e,t,n)}return nr(e,t,n)}var ay,Td,ly,uy;ay=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Td=function(){};ly=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,li(In.current);var o=null;switch(n){case"input":i=rd(e,i),r=rd(e,r),o=[];break;case"select":i=Ze({},i,{value:void 0}),r=Ze({},r,{value:void 0}),o=[];break;case"textarea":i=sd(e,i),r=sd(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fl)}ld(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ss.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ss.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ze("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};uy=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ko(e,t){if(!We)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hw(e,t,n){var r=t.pendingProps;switch(uf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(t),null;case 1:return Rt(t.type)&&Il(),pt(t),null;case 3:return r=t.stateNode,Ao(),$e(Bt),$e(ht),yf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ma(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,un!==null&&(Ud(un),un=null))),Td(e,t),pt(t),null;case 5:vf(t);var i=li(Ls.current);if(n=t.type,e!==null&&t.stateNode!=null)ly(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(ee(166));return pt(t),null}if(e=li(In.current),Ma(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Sn]=t,r[Ms]=o,e=(t.mode&1)!==0,n){case"dialog":ze("cancel",r),ze("close",r);break;case"iframe":case"object":case"embed":ze("load",r);break;case"video":case"audio":for(i=0;i<as.length;i++)ze(as[i],r);break;case"source":ze("error",r);break;case"img":case"image":case"link":ze("error",r),ze("load",r);break;case"details":ze("toggle",r);break;case"input":jm(r,o),ze("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ze("invalid",r);break;case"textarea":zm(r,o),ze("invalid",r)}ld(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ta(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ta(r.textContent,a,e),i=["children",""+a]):Ss.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ze("scroll",r)}switch(n){case"input":Da(r),Vm(r,o,!0);break;case"textarea":Da(r),$m(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Fl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ov(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Sn]=t,e[Ms]=r,ay(e,t,!1,!1),t.stateNode=e;e:{switch(s=ud(n,r),n){case"dialog":ze("cancel",e),ze("close",e),i=r;break;case"iframe":case"object":case"embed":ze("load",e),i=r;break;case"video":case"audio":for(i=0;i<as.length;i++)ze(as[i],e);i=r;break;case"source":ze("error",e),i=r;break;case"img":case"image":case"link":ze("error",e),ze("load",e),i=r;break;case"details":ze("toggle",e),i=r;break;case"input":jm(e,r),i=rd(e,r),ze("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ze({},r,{value:void 0}),ze("invalid",e);break;case"textarea":zm(e,r),i=sd(e,r),ze("invalid",e);break;default:i=r}ld(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Vv(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Lv(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ds(e,l):typeof l=="number"&&Ds(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ss.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ze("scroll",e):l!=null&&Gp(e,o,l,s))}switch(n){case"input":Da(e),Vm(e,r,!1);break;case"textarea":Da(e),$m(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Lr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?to(e,!!r.multiple,o,!1):r.defaultValue!=null&&to(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Fl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pt(t),null;case 6:if(e&&t.stateNode!=null)uy(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(ee(166));if(n=li(Ls.current),li(In.current),Ma(t)){if(r=t.stateNode,n=t.memoizedProps,r[Sn]=t,(o=r.nodeValue!==n)&&(e=Vt,e!==null))switch(e.tag){case 3:Ta(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ta(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Sn]=t,t.stateNode=r}return pt(t),null;case 13:if($e(He),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(We&&jt!==null&&t.mode&1&&!(t.flags&128))D0(),bo(),t.flags|=98560,o=!1;else if(o=Ma(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(ee(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ee(317));o[Sn]=t}else bo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pt(t),o=!1}else un!==null&&(Ud(un),un=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||He.current&1?it===0&&(it=3):If())),t.updateQueue!==null&&(t.flags|=4),pt(t),null);case 4:return Ao(),Td(e,t),e===null&&Ns(t.stateNode.containerInfo),pt(t),null;case 10:return ff(t.type._context),pt(t),null;case 17:return Rt(t.type)&&Il(),pt(t),null;case 19:if($e(He),o=t.memoizedState,o===null)return pt(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Ko(o,!1);else{if(it!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ol(e),s!==null){for(t.flags|=128,Ko(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Le(He,He.current&1|2),t.child}e=e.sibling}o.tail!==null&&Je()>Do&&(t.flags|=128,r=!0,Ko(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ol(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ko(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!We)return pt(t),null}else 2*Je()-o.renderingStartTime>Do&&n!==1073741824&&(t.flags|=128,r=!0,Ko(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Je(),t.sibling=null,n=He.current,Le(He,r?n&1|2:n&1),t):(pt(t),null);case 22:case 23:return Ff(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ot&1073741824&&(pt(t),t.subtreeFlags&6&&(t.flags|=8192)):pt(t),null;case 24:return null;case 25:return null}throw Error(ee(156,t.tag))}function Gw(e,t){switch(uf(t),t.tag){case 1:return Rt(t.type)&&Il(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ao(),$e(Bt),$e(ht),yf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vf(t),null;case 13:if($e(He),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(ee(340));bo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $e(He),null;case 4:return Ao(),null;case 10:return ff(t.type._context),null;case 22:case 23:return Ff(),null;case 24:return null;default:return null}}var ja=!1,mt=!1,Zw=typeof WeakSet=="function"?WeakSet:Set,ce=null;function Yi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Qe(e,t,r)}else n.current=null}function Md(e,t,n){try{n()}catch(r){Qe(e,t,r)}}var Ph=!1;function Kw(e,t){if(xd=Sl,e=m0(),af(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,m=e,d=null;t:for(;;){for(var p;m!==n||i!==0&&m.nodeType!==3||(a=s+i),m!==o||r!==0&&m.nodeType!==3||(l=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(p=m.firstChild)!==null;)d=m,m=p;for(;;){if(m===e)break t;if(d===n&&++u===i&&(a=s),d===o&&++c===r&&(l=s),(p=m.nextSibling)!==null)break;m=d,d=m.parentNode}m=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ed={focusedElem:e,selectionRange:n},Sl=!1,ce=t;ce!==null;)if(t=ce,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ce=e;else for(;ce!==null;){t=ce;try{var f=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(f!==null){var h=f.memoizedProps,y=f.memoizedState,v=t.stateNode,g=v.getSnapshotBeforeUpdate(t.elementType===t.type?h:on(t.type,h),y);v.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(E){Qe(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,ce=e;break}ce=t.return}return f=Ph,Ph=!1,f}function xs(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Md(t,n,o)}i=i.next}while(i!==r)}}function wu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Od(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function cy(e){var t=e.alternate;t!==null&&(e.alternate=null,cy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Sn],delete t[Ms],delete t[bd],delete t[Pw],delete t[Bw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dy(e){return e.tag===5||e.tag===3||e.tag===4}function Bh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ld(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fl));else if(r!==4&&(e=e.child,e!==null))for(Ld(e,t,n),e=e.sibling;e!==null;)Ld(e,t,n),e=e.sibling}function jd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(jd(e,t,n),e=e.sibling;e!==null;)jd(e,t,n),e=e.sibling}var at=null,ln=!1;function ar(e,t,n){for(n=n.child;n!==null;)py(e,t,n),n=n.sibling}function py(e,t,n){if(Fn&&typeof Fn.onCommitFiberUnmount=="function")try{Fn.onCommitFiberUnmount(mu,n)}catch{}switch(n.tag){case 5:mt||Yi(n,t);case 6:var r=at,i=ln;at=null,ar(e,t,n),at=r,ln=i,at!==null&&(ln?(e=at,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(ln?(e=at,n=n.stateNode,e.nodeType===8?fc(e.parentNode,n):e.nodeType===1&&fc(e,n),Ps(e)):fc(at,n.stateNode));break;case 4:r=at,i=ln,at=n.stateNode.containerInfo,ln=!0,ar(e,t,n),at=r,ln=i;break;case 0:case 11:case 14:case 15:if(!mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Md(n,t,s),i=i.next}while(i!==r)}ar(e,t,n);break;case 1:if(!mt&&(Yi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Qe(n,t,a)}ar(e,t,n);break;case 21:ar(e,t,n);break;case 22:n.mode&1?(mt=(r=mt)||n.memoizedState!==null,ar(e,t,n),mt=r):ar(e,t,n);break;default:ar(e,t,n)}}function Rh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Zw),t.forEach(function(r){var i=ib.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function nn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:at=a.stateNode,ln=!1;break e;case 3:at=a.stateNode.containerInfo,ln=!0;break e;case 4:at=a.stateNode.containerInfo,ln=!0;break e}a=a.return}if(at===null)throw Error(ee(160));py(o,s,i),at=null,ln=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Qe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fy(t,e),t=t.sibling}function fy(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nn(t,e),_n(e),r&4){try{xs(3,e,e.return),wu(3,e)}catch(h){Qe(e,e.return,h)}try{xs(5,e,e.return)}catch(h){Qe(e,e.return,h)}}break;case 1:nn(t,e),_n(e),r&512&&n!==null&&Yi(n,n.return);break;case 5:if(nn(t,e),_n(e),r&512&&n!==null&&Yi(n,n.return),e.flags&32){var i=e.stateNode;try{Ds(i,"")}catch(h){Qe(e,e.return,h)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Tv(i,o),ud(a,s);var u=ud(a,o);for(s=0;s<l.length;s+=2){var c=l[s],m=l[s+1];c==="style"?Vv(i,m):c==="dangerouslySetInnerHTML"?Lv(i,m):c==="children"?Ds(i,m):Gp(i,c,m,u)}switch(a){case"input":id(i,o);break;case"textarea":Mv(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?to(i,!!o.multiple,p,!1):d!==!!o.multiple&&(o.defaultValue!=null?to(i,!!o.multiple,o.defaultValue,!0):to(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ms]=o}catch(h){Qe(e,e.return,h)}}break;case 6:if(nn(t,e),_n(e),r&4){if(e.stateNode===null)throw Error(ee(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(h){Qe(e,e.return,h)}}break;case 3:if(nn(t,e),_n(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ps(t.containerInfo)}catch(h){Qe(e,e.return,h)}break;case 4:nn(t,e),_n(e);break;case 13:nn(t,e),_n(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Df=Je())),r&4&&Rh(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(mt=(u=mt)||c,nn(t,e),mt=u):nn(t,e),_n(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(ce=e,c=e.child;c!==null;){for(m=ce=c;ce!==null;){switch(d=ce,p=d.child,d.tag){case 0:case 11:case 14:case 15:xs(4,d,d.return);break;case 1:Yi(d,d.return);var f=d.stateNode;if(typeof f.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,f.props=t.memoizedProps,f.state=t.memoizedState,f.componentWillUnmount()}catch(h){Qe(r,n,h)}}break;case 5:Yi(d,d.return);break;case 22:if(d.memoizedState!==null){Th(m);continue}}p!==null?(p.return=d,ce=p):Th(m)}c=c.sibling}e:for(c=null,m=e;;){if(m.tag===5){if(c===null){c=m;try{i=m.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,l=m.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=jv("display",s))}catch(h){Qe(e,e.return,h)}}}else if(m.tag===6){if(c===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(h){Qe(e,e.return,h)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;c===m&&(c=null),m=m.return}c===m&&(c=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:nn(t,e),_n(e),r&4&&Rh(e);break;case 21:break;default:nn(t,e),_n(e)}}function _n(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(dy(n)){var r=n;break e}n=n.return}throw Error(ee(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ds(i,""),r.flags&=-33);var o=Bh(e);jd(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Bh(e);Ld(e,a,s);break;default:throw Error(ee(161))}}catch(l){Qe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qw(e,t,n){ce=e,my(e)}function my(e,t,n){for(var r=(e.mode&1)!==0;ce!==null;){var i=ce,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ja;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||mt;a=ja;var u=mt;if(ja=s,(mt=l)&&!u)for(ce=i;ce!==null;)s=ce,l=s.child,s.tag===22&&s.memoizedState!==null?Mh(i):l!==null?(l.return=s,ce=l):Mh(i);for(;o!==null;)ce=o,my(o),o=o.sibling;ce=i,ja=a,mt=u}Nh(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,ce=o):Nh(e)}}function Nh(e){for(;ce!==null;){var t=ce;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:mt||wu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!mt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:on(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&yh(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}yh(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var m=c.dehydrated;m!==null&&Ps(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}mt||t.flags&512&&Od(t)}catch(d){Qe(t,t.return,d)}}if(t===e){ce=null;break}if(n=t.sibling,n!==null){n.return=t.return,ce=n;break}ce=t.return}}function Th(e){for(;ce!==null;){var t=ce;if(t===e){ce=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ce=n;break}ce=t.return}}function Mh(e){for(;ce!==null;){var t=ce;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{wu(4,t)}catch(l){Qe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Qe(t,i,l)}}var o=t.return;try{Od(t)}catch(l){Qe(t,o,l)}break;case 5:var s=t.return;try{Od(t)}catch(l){Qe(t,s,l)}}}catch(l){Qe(t,t.return,l)}if(t===e){ce=null;break}var a=t.sibling;if(a!==null){a.return=t.return,ce=a;break}ce=t.return}}var Xw=Math.ceil,Vl=sr.ReactCurrentDispatcher,Af=sr.ReactCurrentOwner,Xt=sr.ReactCurrentBatchConfig,Be=0,st=null,tt=null,lt=0,Ot=0,Ji=Kr(0),it=0,$s=null,_i=0,bu=0,Sf=0,Es=null,It=null,Df=0,Do=1/0,Un=null,zl=!1,Vd=null,Nr=null,Va=!1,kr=null,$l=0,_s=0,zd=null,cl=-1,dl=0;function wt(){return Be&6?Je():cl!==-1?cl:cl=Je()}function Tr(e){return e.mode&1?Be&2&&lt!==0?lt&-lt:Nw.transition!==null?(dl===0&&(dl=Yv()),dl):(e=Te,e!==0||(e=window.event,e=e===void 0?16:o0(e.type)),e):1}function fn(e,t,n,r){if(50<_s)throw _s=0,zd=null,Error(ee(185));da(e,n,r),(!(Be&2)||e!==st)&&(e===st&&(!(Be&2)&&(bu|=n),it===4&&xr(e,lt)),Nt(e,r),n===1&&Be===0&&!(t.mode&1)&&(Do=Je()+500,xu&&Qr()))}function Nt(e,t){var n=e.callbackNode;N_(e,t);var r=Al(e,e===st?lt:0);if(r===0)n!==null&&qm(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&qm(n),t===1)e.tag===0?Rw(Oh.bind(null,e)):C0(Oh.bind(null,e)),Fw(function(){!(Be&6)&&Qr()}),n=null;else{switch(Jv(r)){case 1:n=Yp;break;case 4:n=Qv;break;case 16:n=Cl;break;case 536870912:n=Xv;break;default:n=Cl}n=wy(n,hy.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function hy(e,t){if(cl=-1,dl=0,Be&6)throw Error(ee(327));var n=e.callbackNode;if(so()&&e.callbackNode!==n)return null;var r=Al(e,e===st?lt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ul(e,r);else{t=r;var i=Be;Be|=2;var o=vy();(st!==e||lt!==t)&&(Un=null,Do=Je()+500,mi(e,t));do try{eb();break}catch(a){gy(e,a)}while(!0);pf(),Vl.current=o,Be=i,tt!==null?t=0:(st=null,lt=0,t=it)}if(t!==0){if(t===2&&(i=md(e),i!==0&&(r=i,t=$d(e,i))),t===1)throw n=$s,mi(e,0),xr(e,r),Nt(e,Je()),n;if(t===6)xr(e,r);else{if(i=e.current.alternate,!(r&30)&&!Yw(i)&&(t=Ul(e,r),t===2&&(o=md(e),o!==0&&(r=o,t=$d(e,o))),t===1))throw n=$s,mi(e,0),xr(e,r),Nt(e,Je()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(ee(345));case 2:ii(e,It,Un);break;case 3:if(xr(e,r),(r&130023424)===r&&(t=Df+500-Je(),10<t)){if(Al(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){wt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=wd(ii.bind(null,e,It,Un),t);break}ii(e,It,Un);break;case 4:if(xr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-pn(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Xw(r/1960))-r,10<r){e.timeoutHandle=wd(ii.bind(null,e,It,Un),r);break}ii(e,It,Un);break;case 5:ii(e,It,Un);break;default:throw Error(ee(329))}}}return Nt(e,Je()),e.callbackNode===n?hy.bind(null,e):null}function $d(e,t){var n=Es;return e.current.memoizedState.isDehydrated&&(mi(e,t).flags|=256),e=Ul(e,t),e!==2&&(t=It,It=n,t!==null&&Ud(t)),e}function Ud(e){It===null?It=e:It.push.apply(It,e)}function Yw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!hn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xr(e,t){for(t&=~Sf,t&=~bu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pn(t),r=1<<n;e[n]=-1,t&=~r}}function Oh(e){if(Be&6)throw Error(ee(327));so();var t=Al(e,0);if(!(t&1))return Nt(e,Je()),null;var n=Ul(e,t);if(e.tag!==0&&n===2){var r=md(e);r!==0&&(t=r,n=$d(e,r))}if(n===1)throw n=$s,mi(e,0),xr(e,t),Nt(e,Je()),n;if(n===6)throw Error(ee(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ii(e,It,Un),Nt(e,Je()),null}function kf(e,t){var n=Be;Be|=1;try{return e(t)}finally{Be=n,Be===0&&(Do=Je()+500,xu&&Qr())}}function wi(e){kr!==null&&kr.tag===0&&!(Be&6)&&so();var t=Be;Be|=1;var n=Xt.transition,r=Te;try{if(Xt.transition=null,Te=1,e)return e()}finally{Te=r,Xt.transition=n,Be=t,!(Be&6)&&Qr()}}function Ff(){Ot=Ji.current,$e(Ji)}function mi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,kw(n)),tt!==null)for(n=tt.return;n!==null;){var r=n;switch(uf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Il();break;case 3:Ao(),$e(Bt),$e(ht),yf();break;case 5:vf(r);break;case 4:Ao();break;case 13:$e(He);break;case 19:$e(He);break;case 10:ff(r.type._context);break;case 22:case 23:Ff()}n=n.return}if(st=e,tt=e=Mr(e.current,null),lt=Ot=t,it=0,$s=null,Sf=bu=_i=0,It=Es=null,ai!==null){for(t=0;t<ai.length;t++)if(n=ai[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}ai=null}return e}function gy(e,t){do{var n=tt;try{if(pf(),al.current=jl,Ll){for(var r=Ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ll=!1}if(Ei=0,ot=rt=Ge=null,ys=!1,js=0,Af.current=null,n===null||n.return===null){it=1,$s=t,tt=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=lt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,m=c.tag;if(!(c.mode&1)&&(m===0||m===11||m===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Ch(s);if(p!==null){p.flags&=-257,Ah(p,s,a,o,t),p.mode&1&&bh(o,u,t),t=p,l=u;var f=t.updateQueue;if(f===null){var h=new Set;h.add(l),t.updateQueue=h}else f.add(l);break e}else{if(!(t&1)){bh(o,u,t),If();break e}l=Error(ee(426))}}else if(We&&a.mode&1){var y=Ch(s);if(y!==null){!(y.flags&65536)&&(y.flags|=256),Ah(y,s,a,o,t),cf(So(l,a));break e}}o=l=So(l,a),it!==4&&(it=2),Es===null?Es=[o]:Es.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=J0(o,l,t);vh(o,v);break e;case 1:a=l;var g=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Nr===null||!Nr.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var E=ey(o,a,t);vh(o,E);break e}}o=o.return}while(o!==null)}xy(n)}catch(_){t=_,tt===n&&n!==null&&(tt=n=n.return);continue}break}while(!0)}function vy(){var e=Vl.current;return Vl.current=jl,e===null?jl:e}function If(){(it===0||it===3||it===2)&&(it=4),st===null||!(_i&268435455)&&!(bu&268435455)||xr(st,lt)}function Ul(e,t){var n=Be;Be|=2;var r=vy();(st!==e||lt!==t)&&(Un=null,mi(e,t));do try{Jw();break}catch(i){gy(e,i)}while(!0);if(pf(),Be=n,Vl.current=r,tt!==null)throw Error(ee(261));return st=null,lt=0,it}function Jw(){for(;tt!==null;)yy(tt)}function eb(){for(;tt!==null&&!A_();)yy(tt)}function yy(e){var t=_y(e.alternate,e,Ot);e.memoizedProps=e.pendingProps,t===null?xy(e):tt=t,Af.current=null}function xy(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Gw(n,t),n!==null){n.flags&=32767,tt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{it=6,tt=null;return}}else if(n=Hw(n,t,Ot),n!==null){tt=n;return}if(t=t.sibling,t!==null){tt=t;return}tt=t=e}while(t!==null);it===0&&(it=5)}function ii(e,t,n){var r=Te,i=Xt.transition;try{Xt.transition=null,Te=1,tb(e,t,n,r)}finally{Xt.transition=i,Te=r}return null}function tb(e,t,n,r){do so();while(kr!==null);if(Be&6)throw Error(ee(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(ee(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(T_(e,o),e===st&&(tt=st=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Va||(Va=!0,wy(Cl,function(){return so(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Xt.transition,Xt.transition=null;var s=Te;Te=1;var a=Be;Be|=4,Af.current=null,Kw(e,n),fy(n,e),_w(Ed),Sl=!!xd,Ed=xd=null,e.current=n,Qw(n),S_(),Be=a,Te=s,Xt.transition=o}else e.current=n;if(Va&&(Va=!1,kr=e,$l=i),o=e.pendingLanes,o===0&&(Nr=null),F_(n.stateNode),Nt(e,Je()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zl)throw zl=!1,e=Vd,Vd=null,e;return $l&1&&e.tag!==0&&so(),o=e.pendingLanes,o&1?e===zd?_s++:(_s=0,zd=e):_s=0,Qr(),null}function so(){if(kr!==null){var e=Jv($l),t=Xt.transition,n=Te;try{if(Xt.transition=null,Te=16>e?16:e,kr===null)var r=!1;else{if(e=kr,kr=null,$l=0,Be&6)throw Error(ee(331));var i=Be;for(Be|=4,ce=e.current;ce!==null;){var o=ce,s=o.child;if(ce.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ce=u;ce!==null;){var c=ce;switch(c.tag){case 0:case 11:case 15:xs(8,c,o)}var m=c.child;if(m!==null)m.return=c,ce=m;else for(;ce!==null;){c=ce;var d=c.sibling,p=c.return;if(cy(c),c===u){ce=null;break}if(d!==null){d.return=p,ce=d;break}ce=p}}}var f=o.alternate;if(f!==null){var h=f.child;if(h!==null){f.child=null;do{var y=h.sibling;h.sibling=null,h=y}while(h!==null)}}ce=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,ce=s;else e:for(;ce!==null;){if(o=ce,o.flags&2048)switch(o.tag){case 0:case 11:case 15:xs(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,ce=v;break e}ce=o.return}}var g=e.current;for(ce=g;ce!==null;){s=ce;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,ce=x;else e:for(s=g;ce!==null;){if(a=ce,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wu(9,a)}}catch(_){Qe(a,a.return,_)}if(a===s){ce=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,ce=E;break e}ce=a.return}}if(Be=i,Qr(),Fn&&typeof Fn.onPostCommitFiberRoot=="function")try{Fn.onPostCommitFiberRoot(mu,e)}catch{}r=!0}return r}finally{Te=n,Xt.transition=t}}return!1}function Lh(e,t,n){t=So(n,t),t=J0(e,t,1),e=Rr(e,t,1),t=wt(),e!==null&&(da(e,1,t),Nt(e,t))}function Qe(e,t,n){if(e.tag===3)Lh(e,e,n);else for(;t!==null;){if(t.tag===3){Lh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nr===null||!Nr.has(r))){e=So(n,e),e=ey(t,e,1),t=Rr(t,e,1),e=wt(),t!==null&&(da(t,1,e),Nt(t,e));break}}t=t.return}}function nb(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=wt(),e.pingedLanes|=e.suspendedLanes&n,st===e&&(lt&n)===n&&(it===4||it===3&&(lt&130023424)===lt&&500>Je()-Df?mi(e,0):Sf|=n),Nt(e,t)}function Ey(e,t){t===0&&(e.mode&1?(t=Ia,Ia<<=1,!(Ia&130023424)&&(Ia=4194304)):t=1);var n=wt();e=tr(e,t),e!==null&&(da(e,t,n),Nt(e,n))}function rb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ey(e,n)}function ib(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(ee(314))}r!==null&&r.delete(t),Ey(e,n)}var _y;_y=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Bt.current)Pt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pt=!1,qw(e,t,n);Pt=!!(e.flags&131072)}else Pt=!1,We&&t.flags&1048576&&A0(t,Rl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ul(e,t),e=t.pendingProps;var i=wo(t,ht.current);oo(t,n),i=Ef(null,t,r,e,i,n);var o=_f();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Rt(r)?(o=!0,Pl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hf(t),i.updater=_u,t.stateNode=i,i._reactInternals=t,Fd(t,r,e,n),t=Bd(null,t,r,!0,o,n)):(t.tag=0,We&&o&&lf(t),xt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ul(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=sb(r),e=on(r,e),i){case 0:t=Pd(null,t,r,e,n);break e;case 1:t=kh(null,t,r,e,n);break e;case 11:t=Sh(null,t,r,e,n);break e;case 14:t=Dh(null,t,r,on(r.type,e),n);break e}throw Error(ee(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:on(r,i),Pd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:on(r,i),kh(e,t,r,i,n);case 3:e:{if(iy(t),e===null)throw Error(ee(387));r=t.pendingProps,o=t.memoizedState,i=o.element,P0(e,t),Ml(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=So(Error(ee(423)),t),t=Fh(e,t,r,n,i);break e}else if(r!==i){i=So(Error(ee(424)),t),t=Fh(e,t,r,n,i);break e}else for(jt=Br(t.stateNode.containerInfo.firstChild),Vt=t,We=!0,un=null,n=F0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bo(),r===i){t=nr(e,t,n);break e}xt(e,t,r,n)}t=t.child}return t;case 5:return B0(t),e===null&&Sd(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,_d(r,i)?s=null:o!==null&&_d(r,o)&&(t.flags|=32),ry(e,t),xt(e,t,s,n),t.child;case 6:return e===null&&Sd(t),null;case 13:return oy(e,t,n);case 4:return gf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Co(t,null,r,n):xt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:on(r,i),Sh(e,t,r,i,n);case 7:return xt(e,t,t.pendingProps,n),t.child;case 8:return xt(e,t,t.pendingProps.children,n),t.child;case 12:return xt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Le(Nl,r._currentValue),r._currentValue=s,o!==null)if(hn(o.value,s)){if(o.children===i.children&&!Bt.current){t=nr(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Yn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Dd(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(ee(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Dd(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}xt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,oo(t,n),i=Yt(i),r=r(i),t.flags|=1,xt(e,t,r,n),t.child;case 14:return r=t.type,i=on(r,t.pendingProps),i=on(r.type,i),Dh(e,t,r,i,n);case 15:return ty(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:on(r,i),ul(e,t),t.tag=1,Rt(r)?(e=!0,Pl(t)):e=!1,oo(t,n),Y0(t,r,i),Fd(t,r,i,n),Bd(null,t,r,!0,e,n);case 19:return sy(e,t,n);case 22:return ny(e,t,n)}throw Error(ee(156,t.tag))};function wy(e,t){return Kv(e,t)}function ob(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(e,t,n,r){return new ob(e,t,n,r)}function Pf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sb(e){if(typeof e=="function")return Pf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Kp)return 11;if(e===Qp)return 14}return 2}function Mr(e,t){var n=e.alternate;return n===null?(n=Qt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function pl(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Pf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ui:return hi(n.children,i,o,t);case Zp:s=8,i|=8;break;case Jc:return e=Qt(12,n,t,i|2),e.elementType=Jc,e.lanes=o,e;case ed:return e=Qt(13,n,t,i),e.elementType=ed,e.lanes=o,e;case td:return e=Qt(19,n,t,i),e.elementType=td,e.lanes=o,e;case Bv:return Cu(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Iv:s=10;break e;case Pv:s=9;break e;case Kp:s=11;break e;case Qp:s=14;break e;case gr:s=16,r=null;break e}throw Error(ee(130,e==null?e:typeof e,""))}return t=Qt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function hi(e,t,n,r){return e=Qt(7,e,r,t),e.lanes=n,e}function Cu(e,t,n,r){return e=Qt(22,e,r,t),e.elementType=Bv,e.lanes=n,e.stateNode={isHidden:!1},e}function _c(e,t,n){return e=Qt(6,e,null,t),e.lanes=n,e}function wc(e,t,n){return t=Qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ab(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nc(0),this.expirationTimes=nc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bf(e,t,n,r,i,o,s,a,l){return e=new ab(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Qt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hf(o),e}function lb(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$i,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function by(e){if(!e)return jr;e=e._reactInternals;e:{if(Ii(e)!==e||e.tag!==1)throw Error(ee(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(ee(171))}if(e.tag===1){var n=e.type;if(Rt(n))return b0(e,n,t)}return t}function Cy(e,t,n,r,i,o,s,a,l){return e=Bf(n,r,!0,e,i,o,s,a,l),e.context=by(null),n=e.current,r=wt(),i=Tr(n),o=Yn(r,i),o.callback=t??null,Rr(n,o,i),e.current.lanes=i,da(e,i,r),Nt(e,r),e}function Au(e,t,n,r){var i=t.current,o=wt(),s=Tr(i);return n=by(n),t.context===null?t.context=n:t.pendingContext=n,t=Yn(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rr(i,t,s),e!==null&&(fn(e,i,s,o),sl(e,i,s)),s}function Wl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function jh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Rf(e,t){jh(e,t),(e=e.alternate)&&jh(e,t)}function ub(){return null}var Ay=typeof reportError=="function"?reportError:function(e){console.error(e)};function Nf(e){this._internalRoot=e}Su.prototype.render=Nf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(ee(409));Au(e,t,null,null)};Su.prototype.unmount=Nf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wi(function(){Au(null,e,null,null)}),t[er]=null}};function Su(e){this._internalRoot=e}Su.prototype.unstable_scheduleHydration=function(e){if(e){var t=n0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yr.length&&t!==0&&t<yr[n].priority;n++);yr.splice(n,0,e),n===0&&i0(e)}};function Tf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Du(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vh(){}function cb(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Wl(s);o.call(u)}}var s=Cy(t,r,e,0,null,!1,!1,"",Vh);return e._reactRootContainer=s,e[er]=s.current,Ns(e.nodeType===8?e.parentNode:e),wi(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Wl(l);a.call(u)}}var l=Bf(e,0,!1,null,null,!1,!1,"",Vh);return e._reactRootContainer=l,e[er]=l.current,Ns(e.nodeType===8?e.parentNode:e),wi(function(){Au(t,l,n,r)}),l}function ku(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Wl(s);a.call(l)}}Au(t,s,e,i)}else s=cb(n,t,e,i,r);return Wl(s)}e0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ss(t.pendingLanes);n!==0&&(Jp(t,n|1),Nt(t,Je()),!(Be&6)&&(Do=Je()+500,Qr()))}break;case 13:wi(function(){var r=tr(e,1);if(r!==null){var i=wt();fn(r,e,1,i)}}),Rf(e,1)}};ef=function(e){if(e.tag===13){var t=tr(e,134217728);if(t!==null){var n=wt();fn(t,e,134217728,n)}Rf(e,134217728)}};t0=function(e){if(e.tag===13){var t=Tr(e),n=tr(e,t);if(n!==null){var r=wt();fn(n,e,t,r)}Rf(e,t)}};n0=function(){return Te};r0=function(e,t){var n=Te;try{return Te=e,t()}finally{Te=n}};dd=function(e,t,n){switch(t){case"input":if(id(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=yu(r);if(!i)throw Error(ee(90));Nv(r),id(r,i)}}}break;case"textarea":Mv(e,n);break;case"select":t=n.value,t!=null&&to(e,!!n.multiple,t,!1)}};Uv=kf;Wv=wi;var db={usingClientEntryPoint:!1,Events:[fa,Gi,yu,zv,$v,kf]},Qo={findFiberByHostInstance:si,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pb={bundleType:Qo.bundleType,version:Qo.version,rendererPackageName:Qo.rendererPackageName,rendererConfig:Qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gv(e),e===null?null:e.stateNode},findFiberByHostInstance:Qo.findFiberByHostInstance||ub,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!za.isDisabled&&za.supportsFiber)try{mu=za.inject(pb),Fn=za}catch{}}Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=db;Wt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tf(t))throw Error(ee(200));return lb(e,t,null,n)};Wt.createRoot=function(e,t){if(!Tf(e))throw Error(ee(299));var n=!1,r="",i=Ay;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Bf(e,1,!1,null,null,n,!1,r,i),e[er]=t.current,Ns(e.nodeType===8?e.parentNode:e),new Nf(t)};Wt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(ee(188)):(e=Object.keys(e).join(","),Error(ee(268,e)));return e=Gv(t),e=e===null?null:e.stateNode,e};Wt.flushSync=function(e){return wi(e)};Wt.hydrate=function(e,t,n){if(!Du(t))throw Error(ee(200));return ku(null,e,t,!0,n)};Wt.hydrateRoot=function(e,t,n){if(!Tf(e))throw Error(ee(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Ay;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Cy(t,null,e,1,n??null,i,!1,o,s),e[er]=t.current,Ns(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Su(t)};Wt.render=function(e,t,n){if(!Du(t))throw Error(ee(200));return ku(null,e,t,!1,n)};Wt.unmountComponentAtNode=function(e){if(!Du(e))throw Error(ee(40));return e._reactRootContainer?(wi(function(){ku(null,null,e,!1,function(){e._reactRootContainer=null,e[er]=null})}),!0):!1};Wt.unstable_batchedUpdates=kf;Wt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Du(n))throw Error(ee(200));if(e==null||e._reactInternals===void 0)throw Error(ee(38));return ku(e,t,n,!1,r)};Wt.version="18.3.1-next-f1338f8080-20240426";function Sy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sy)}catch(e){console.error(e)}}Sy(),Sv.exports=Wt;var Pi=Sv.exports;const fb=pu(Pi);var Dy,zh=Pi;Dy=zh.createRoot,zh.hydrateRoot;function mb(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var n,r,i,o,s=[],a="",l=e.split("/");for(l[0]||l.shift();i=l.shift();)n=i[0],n==="*"?(s.push(n),a+=i[1]==="?"?"(?:/(.*))?":"/(.*)"):n===":"?(r=i.indexOf("?",1),o=i.indexOf(".",1),s.push(i.substring(1,~r?r:~o?o:i.length)),a+=~r&&!~o?"(?:/([^/]+?))?":"/([^/]+?)",~o&&(a+=(~r?"?":"")+"\\"+i.substring(o))):a+="/"+i;return{keys:s,pattern:new RegExp("^"+a+(t?"(?=$|/)":"/?$"),"i")}}var ky={exports:{}},Fy={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ko=S;function hb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gb=typeof Object.is=="function"?Object.is:hb,vb=ko.useState,yb=ko.useEffect,xb=ko.useLayoutEffect,Eb=ko.useDebugValue;function _b(e,t){var n=t(),r=vb({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return xb(function(){i.value=n,i.getSnapshot=t,bc(i)&&o({inst:i})},[e,n,t]),yb(function(){return bc(i)&&o({inst:i}),e(function(){bc(i)&&o({inst:i})})},[e]),Eb(n),n}function bc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gb(e,n)}catch{return!0}}function wb(e,t){return t()}var bb=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?wb:_b;Fy.useSyncExternalStore=ko.useSyncExternalStore!==void 0?ko.useSyncExternalStore:bb;ky.exports=Fy;var Cb=ky.exports;const Ab=Cv.useInsertionEffect,Sb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Db=Sb?S.useLayoutEffect:S.useEffect,kb=Ab||Db,Iy=e=>{const t=S.useRef([e,(...n)=>t[0](...n)]).current;return kb(()=>{t[0]=e}),t[1]},Fb="popstate",Mf="pushState",Of="replaceState",Ib="hashchange",$h=[Fb,Mf,Of,Ib],Pb=e=>{for(const t of $h)addEventListener(t,e);return()=>{for(const t of $h)removeEventListener(t,e)}},Py=(e,t)=>Cb.useSyncExternalStore(Pb,e,t),Bb=()=>location.search,Rb=({ssrSearch:e=""}={})=>Py(Bb,()=>e),Uh=()=>location.pathname,Nb=({ssrPath:e}={})=>Py(Uh,e?()=>e:Uh),Tb=(e,{replace:t=!1,state:n=null}={})=>history[t?Of:Mf](n,"",e),Mb=(e={})=>[Nb(e),Tb],Wh=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[Wh]>"u"){for(const e of[Mf,Of]){const t=history[e];history[e]=function(){const n=t.apply(this,arguments),r=new Event(e);return r.arguments=arguments,dispatchEvent(r),n}}Object.defineProperty(window,Wh,{value:!0})}const Ob=(e,t)=>t.toLowerCase().indexOf(e.toLowerCase())?"~"+t:t.slice(e.length)||"/",By=(e="")=>e==="/"?"":e,Lb=(e,t)=>e[0]==="~"?e.slice(1):By(t)+e,jb=(e="",t)=>Ob(qh(By(e)),qh(t)),qh=e=>{try{return decodeURI(e)}catch{return e}},Ry={hook:Mb,searchHook:Rb,parser:mb,base:"",ssrPath:void 0,ssrSearch:void 0,hrefs:e=>e},Ny=S.createContext(Ry),Fu=()=>S.useContext(Ny),Ty={},My=S.createContext(Ty),Vb=()=>S.useContext(My),Lf=e=>{const[t,n]=e.hook(e);return[jb(e.base,t),Iy((r,i)=>n(Lb(r,e.base),i))]},Oy=(e,t,n,r)=>{const{pattern:i,keys:o}=t instanceof RegExp?{keys:!1,pattern:t}:e(t||"*",r),s=i.exec(n)||[],[a,...l]=s;return a!==void 0?[!0,(()=>{const u=o!==!1?Object.fromEntries(o.map((m,d)=>[m,l[d]])):s.groups;let c={...l};return u&&Object.assign(c,u),c})(),...r?[a]:[]]:[!1,null]},zb=({children:e,...t})=>{var c,m;const n=Fu(),r=t.hook?Ry:n;let i=r;const[o,s]=((c=t.ssrPath)==null?void 0:c.split("?"))??[];s&&(t.ssrSearch=s,t.ssrPath=o),t.hrefs=t.hrefs??((m=t.hook)==null?void 0:m.hrefs);let a=S.useRef({}),l=a.current,u=l;for(let d in r){const p=d==="base"?r[d]+(t[d]||""):t[d]||r[d];l===u&&p!==u[d]&&(a.current=u={...u}),u[d]=p,p!==r[d]&&(i=u)}return S.createElement(Ny.Provider,{value:i,children:e})},Hh=({children:e,component:t},n)=>t?S.createElement(t,{params:n}):typeof e=="function"?e(n):e,$b=e=>{let t=S.useRef(Ty),n=t.current;for(const r in e)e[r]!==n[r]&&(n=e);return Object.keys(e).length===0&&(n=e),t.current=n},Gh=({path:e,nest:t,match:n,...r})=>{const i=Fu(),[o]=Lf(i),[s,a,l]=n??Oy(i.parser,e,o,t),u=$b({...Vb(),...a});if(!s)return null;const c=l?S.createElement(zb,{base:l},Hh(r,u)):Hh(r,u);return S.createElement(My.Provider,{value:u,children:c})};S.forwardRef((e,t)=>{const n=Fu(),[r,i]=Lf(n),{to:o="",href:s=o,onClick:a,asChild:l,children:u,className:c,replace:m,state:d,...p}=e,f=Iy(y=>{y.ctrlKey||y.metaKey||y.altKey||y.shiftKey||y.button!==0||(a==null||a(y),y.defaultPrevented||(y.preventDefault(),i(s,e)))}),h=n.hrefs(s[0]==="~"?s.slice(1):n.base+s,n);return l&&S.isValidElement(u)?S.cloneElement(u,{onClick:f,href:h}):S.createElement("a",{...p,onClick:f,href:h,className:c!=null&&c.call?c(r===s):c,children:u,ref:t})});const Ly=e=>Array.isArray(e)?e.flatMap(t=>Ly(t&&t.type===S.Fragment?t.props.children:t)):[e],Ub=({children:e,location:t})=>{const n=Fu(),[r]=Lf(n);for(const i of Ly(e)){let o=0;if(S.isValidElement(i)&&(o=Oy(n.parser,i.props.path,t||r,i.props.nest))[0])return S.cloneElement(i,{match:o})}return null};var Iu=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Pu=typeof window>"u"||"Deno"in globalThis;function sn(){}function Wb(e,t){return typeof e=="function"?e(t):e}function qb(e){return typeof e=="number"&&e>=0&&e!==1/0}function Hb(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Zh(e,t){return typeof e=="function"?e(t):e}function Gb(e,t){return typeof e=="function"?e(t):e}function Kh(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:o,queryKey:s,stale:a}=e;if(s){if(r){if(t.queryHash!==jf(s,t.options))return!1}else if(!Ws(t.queryKey,s))return!1}if(n!=="all"){const l=t.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&t.isStale()!==a||i&&i!==t.state.fetchStatus||o&&!o(t))}function Qh(e,t){const{exact:n,status:r,predicate:i,mutationKey:o}=e;if(o){if(!t.options.mutationKey)return!1;if(n){if(Us(t.options.mutationKey)!==Us(o))return!1}else if(!Ws(t.options.mutationKey,o))return!1}return!(r&&t.state.status!==r||i&&!i(t))}function jf(e,t){return((t==null?void 0:t.queryKeyHashFn)||Us)(e)}function Us(e){return JSON.stringify(e,(t,n)=>Wd(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function Ws(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(n=>!Ws(e[n],t[n])):!1}function jy(e,t){if(e===t)return e;const n=Xh(e)&&Xh(t);if(n||Wd(e)&&Wd(t)){const r=n?e:Object.keys(e),i=r.length,o=n?t:Object.keys(t),s=o.length,a=n?[]:{};let l=0;for(let u=0;u<s;u++){const c=n?u:o[u];(!n&&r.includes(c)||n)&&e[c]===void 0&&t[c]===void 0?(a[c]=void 0,l++):(a[c]=jy(e[c],t[c]),a[c]===e[c]&&e[c]!==void 0&&l++)}return i===s&&l===i?e:a}return t}function Xh(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Wd(e){if(!Yh(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!Yh(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Yh(e){return Object.prototype.toString.call(e)==="[object Object]"}function Zb(e){return new Promise(t=>{setTimeout(t,e)})}function Kb(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?jy(e,t):t}function Qb(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function Xb(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var Vf=Symbol();function Vy(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===Vf?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var ci,wr,po,sv,Yb=(sv=class extends Iu{constructor(){super();Re(this,ci);Re(this,wr);Re(this,po);Ae(this,po,t=>{if(!Pu&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){J(this,wr)||this.setEventListener(J(this,po))}onUnsubscribe(){var t;this.hasListeners()||((t=J(this,wr))==null||t.call(this),Ae(this,wr,void 0))}setEventListener(t){var n;Ae(this,po,t),(n=J(this,wr))==null||n.call(this),Ae(this,wr,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){J(this,ci)!==t&&(Ae(this,ci,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof J(this,ci)=="boolean"?J(this,ci):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},ci=new WeakMap,wr=new WeakMap,po=new WeakMap,sv),zy=new Yb,fo,br,mo,av,Jb=(av=class extends Iu{constructor(){super();Re(this,fo,!0);Re(this,br);Re(this,mo);Ae(this,mo,t=>{if(!Pu&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){J(this,br)||this.setEventListener(J(this,mo))}onUnsubscribe(){var t;this.hasListeners()||((t=J(this,br))==null||t.call(this),Ae(this,br,void 0))}setEventListener(t){var n;Ae(this,mo,t),(n=J(this,br))==null||n.call(this),Ae(this,br,t(this.setOnline.bind(this)))}setOnline(t){J(this,fo)!==t&&(Ae(this,fo,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return J(this,fo)}},fo=new WeakMap,br=new WeakMap,mo=new WeakMap,av),ql=new Jb;function e4(){let e,t;const n=new Promise((i,o)=>{e=i,t=o});n.status="pending",n.catch(()=>{});function r(i){Object.assign(n,i),delete n.resolve,delete n.reject}return n.resolve=i=>{r({status:"fulfilled",value:i}),e(i)},n.reject=i=>{r({status:"rejected",reason:i}),t(i)},n}function t4(e){return Math.min(1e3*2**e,3e4)}function $y(e){return(e??"online")==="online"?ql.isOnline():!0}var Uy=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function Cc(e){return e instanceof Uy}function Wy(e){let t=!1,n=0,r=!1,i;const o=e4(),s=h=>{var y;r||(d(new Uy(h)),(y=e.abort)==null||y.call(e))},a=()=>{t=!0},l=()=>{t=!1},u=()=>zy.isFocused()&&(e.networkMode==="always"||ql.isOnline())&&e.canRun(),c=()=>$y(e.networkMode)&&e.canRun(),m=h=>{var y;r||(r=!0,(y=e.onSuccess)==null||y.call(e,h),i==null||i(),o.resolve(h))},d=h=>{var y;r||(r=!0,(y=e.onError)==null||y.call(e,h),i==null||i(),o.reject(h))},p=()=>new Promise(h=>{var y;i=v=>{(r||u())&&h(v)},(y=e.onPause)==null||y.call(e)}).then(()=>{var h;i=void 0,r||(h=e.onContinue)==null||h.call(e)}),f=()=>{if(r)return;let h;const y=n===0?e.initialPromise:void 0;try{h=y??e.fn()}catch(v){h=Promise.reject(v)}Promise.resolve(h).then(m).catch(v=>{var F;if(r)return;const g=e.retry??(Pu?0:3),x=e.retryDelay??t4,E=typeof x=="function"?x(n,v):x,_=g===!0||typeof g=="number"&&n<g||typeof g=="function"&&g(n,v);if(t||!_){d(v);return}n++,(F=e.onFail)==null||F.call(e,n,v),Zb(E).then(()=>u()?void 0:p()).then(()=>{t?d(v):f()})})};return{promise:o,cancel:s,continue:()=>(i==null||i(),o),cancelRetry:a,continueRetry:l,canStart:c,start:()=>(c()?f():p().then(f),o)}}function n4(){let e=[],t=0,n=a=>{a()},r=a=>{a()},i=a=>setTimeout(a,0);const o=a=>{t?e.push(a):i(()=>{n(a)})},s=()=>{const a=e;e=[],a.length&&i(()=>{r(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;t++;try{l=a()}finally{t--,t||s()}return l},batchCalls:a=>(...l)=>{o(()=>{a(...l)})},schedule:o,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{r=a},setScheduler:a=>{i=a}}}var _t=n4(),di,lv,qy=(lv=class{constructor(){Re(this,di)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),qb(this.gcTime)&&Ae(this,di,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Pu?1/0:5*60*1e3))}clearGcTimeout(){J(this,di)&&(clearTimeout(J(this,di)),Ae(this,di,void 0))}},di=new WeakMap,lv),ho,go,Ht,ft,la,pi,an,zn,uv,r4=(uv=class extends qy{constructor(t){super();Re(this,an);Re(this,ho);Re(this,go);Re(this,Ht);Re(this,ft);Re(this,la);Re(this,pi);Ae(this,pi,!1),Ae(this,la,t.defaultOptions),this.setOptions(t.options),this.observers=[],Ae(this,Ht,t.cache),this.queryKey=t.queryKey,this.queryHash=t.queryHash,Ae(this,ho,o4(this.options)),this.state=t.state??J(this,ho),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=J(this,ft))==null?void 0:t.promise}setOptions(t){this.options={...J(this,la),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&J(this,Ht).remove(this)}setData(t,n){const r=Kb(this.state.data,t,this.options);return ct(this,an,zn).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){ct(this,an,zn).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,i;const n=(r=J(this,ft))==null?void 0:r.promise;return(i=J(this,ft))==null||i.cancel(t),n?n.then(sn).catch(sn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(J(this,ho))}isActive(){return this.observers.some(t=>Gb(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Vf||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(t=0){return this.state.isInvalidated||this.state.data===void 0||!Hb(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=J(this,ft))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=J(this,ft))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),J(this,Ht).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(J(this,ft)&&(J(this,pi)?J(this,ft).cancel({revert:!0}):J(this,ft).cancelRetry()),this.scheduleGc()),J(this,Ht).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||ct(this,an,zn).call(this,{type:"invalidate"})}fetch(t,n){var l,u,c;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(J(this,ft))return J(this,ft).continueRetry(),J(this,ft).promise}if(t&&this.setOptions(t),!this.options.queryFn){const m=this.observers.find(d=>d.options.queryFn);m&&this.setOptions(m.options)}const r=new AbortController,i=m=>{Object.defineProperty(m,"signal",{enumerable:!0,get:()=>(Ae(this,pi,!0),r.signal)})},o=()=>{const m=Vy(this.options,n),d={queryKey:this.queryKey,meta:this.meta};return i(d),Ae(this,pi,!1),this.options.persister?this.options.persister(m,d,this):m(d)},s={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:o};i(s),(l=this.options.behavior)==null||l.onFetch(s,this),Ae(this,go,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((u=s.fetchOptions)==null?void 0:u.meta))&&ct(this,an,zn).call(this,{type:"fetch",meta:(c=s.fetchOptions)==null?void 0:c.meta});const a=m=>{var d,p,f,h;Cc(m)&&m.silent||ct(this,an,zn).call(this,{type:"error",error:m}),Cc(m)||((p=(d=J(this,Ht).config).onError)==null||p.call(d,m,this),(h=(f=J(this,Ht).config).onSettled)==null||h.call(f,this.state.data,m,this)),this.scheduleGc()};return Ae(this,ft,Wy({initialPromise:n==null?void 0:n.initialPromise,fn:s.fetchFn,abort:r.abort.bind(r),onSuccess:m=>{var d,p,f,h;if(m===void 0){a(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(m)}catch(y){a(y);return}(p=(d=J(this,Ht).config).onSuccess)==null||p.call(d,m,this),(h=(f=J(this,Ht).config).onSettled)==null||h.call(f,m,this.state.error,this),this.scheduleGc()},onError:a,onFail:(m,d)=>{ct(this,an,zn).call(this,{type:"failed",failureCount:m,error:d})},onPause:()=>{ct(this,an,zn).call(this,{type:"pause"})},onContinue:()=>{ct(this,an,zn).call(this,{type:"continue"})},retry:s.options.retry,retryDelay:s.options.retryDelay,networkMode:s.options.networkMode,canRun:()=>!0})),J(this,ft).start()}},ho=new WeakMap,go=new WeakMap,Ht=new WeakMap,ft=new WeakMap,la=new WeakMap,pi=new WeakMap,an=new WeakSet,zn=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...i4(r.data,this.options),fetchMeta:t.meta??null};case"success":return{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=t.error;return Cc(i)&&i.revert&&J(this,go)?{...J(this,go),fetchStatus:"idle"}:{...r,error:i,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),_t.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),J(this,Ht).notify({query:this,type:"updated",action:t})})},uv);function i4(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:$y(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function o4(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var bn,cv,s4=(cv=class extends Iu{constructor(t={}){super();Re(this,bn);this.config=t,Ae(this,bn,new Map)}build(t,n,r){const i=n.queryKey,o=n.queryHash??jf(i,n);let s=this.get(o);return s||(s=new r4({cache:this,queryKey:i,queryHash:o,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(i)}),this.add(s)),s}add(t){J(this,bn).has(t.queryHash)||(J(this,bn).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=J(this,bn).get(t.queryHash);n&&(t.destroy(),n===t&&J(this,bn).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){_t.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return J(this,bn).get(t)}getAll(){return[...J(this,bn).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Kh(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>Kh(t,r)):n}notify(t){_t.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){_t.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){_t.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},bn=new WeakMap,cv),Cn,yt,fi,An,cr,dv,a4=(dv=class extends qy{constructor(t){super();Re(this,An);Re(this,Cn);Re(this,yt);Re(this,fi);this.mutationId=t.mutationId,Ae(this,yt,t.mutationCache),Ae(this,Cn,[]),this.state=t.state||l4(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){J(this,Cn).includes(t)||(J(this,Cn).push(t),this.clearGcTimeout(),J(this,yt).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){Ae(this,Cn,J(this,Cn).filter(n=>n!==t)),this.scheduleGc(),J(this,yt).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){J(this,Cn).length||(this.state.status==="pending"?this.scheduleGc():J(this,yt).remove(this))}continue(){var t;return((t=J(this,fi))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var i,o,s,a,l,u,c,m,d,p,f,h,y,v,g,x,E,_,F,D;Ae(this,fi,Wy({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(P,N)=>{ct(this,An,cr).call(this,{type:"failed",failureCount:P,error:N})},onPause:()=>{ct(this,An,cr).call(this,{type:"pause"})},onContinue:()=>{ct(this,An,cr).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>J(this,yt).canRun(this)}));const n=this.state.status==="pending",r=!J(this,fi).canStart();try{if(!n){ct(this,An,cr).call(this,{type:"pending",variables:t,isPaused:r}),await((o=(i=J(this,yt).config).onMutate)==null?void 0:o.call(i,t,this));const N=await((a=(s=this.options).onMutate)==null?void 0:a.call(s,t));N!==this.state.context&&ct(this,An,cr).call(this,{type:"pending",context:N,variables:t,isPaused:r})}const P=await J(this,fi).start();return await((u=(l=J(this,yt).config).onSuccess)==null?void 0:u.call(l,P,t,this.state.context,this)),await((m=(c=this.options).onSuccess)==null?void 0:m.call(c,P,t,this.state.context)),await((p=(d=J(this,yt).config).onSettled)==null?void 0:p.call(d,P,null,this.state.variables,this.state.context,this)),await((h=(f=this.options).onSettled)==null?void 0:h.call(f,P,null,t,this.state.context)),ct(this,An,cr).call(this,{type:"success",data:P}),P}catch(P){try{throw await((v=(y=J(this,yt).config).onError)==null?void 0:v.call(y,P,t,this.state.context,this)),await((x=(g=this.options).onError)==null?void 0:x.call(g,P,t,this.state.context)),await((_=(E=J(this,yt).config).onSettled)==null?void 0:_.call(E,void 0,P,this.state.variables,this.state.context,this)),await((D=(F=this.options).onSettled)==null?void 0:D.call(F,void 0,P,t,this.state.context)),P}finally{ct(this,An,cr).call(this,{type:"error",error:P})}}finally{J(this,yt).runNext(this)}}},Cn=new WeakMap,yt=new WeakMap,fi=new WeakMap,An=new WeakSet,cr=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),_t.batch(()=>{J(this,Cn).forEach(r=>{r.onMutationUpdate(t)}),J(this,yt).notify({mutation:this,type:"updated",action:t})})},dv);function l4(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Mt,ua,pv,u4=(pv=class extends Iu{constructor(t={}){super();Re(this,Mt);Re(this,ua);this.config=t,Ae(this,Mt,new Map),Ae(this,ua,Date.now())}build(t,n,r){const i=new a4({mutationCache:this,mutationId:++Ca(this,ua)._,options:t.defaultMutationOptions(n),state:r});return this.add(i),i}add(t){const n=$a(t),r=J(this,Mt).get(n)??[];r.push(t),J(this,Mt).set(n,r),this.notify({type:"added",mutation:t})}remove(t){var r;const n=$a(t);if(J(this,Mt).has(n)){const i=(r=J(this,Mt).get(n))==null?void 0:r.filter(o=>o!==t);i&&(i.length===0?J(this,Mt).delete(n):J(this,Mt).set(n,i))}this.notify({type:"removed",mutation:t})}canRun(t){var r;const n=(r=J(this,Mt).get($a(t)))==null?void 0:r.find(i=>i.state.status==="pending");return!n||n===t}runNext(t){var r;const n=(r=J(this,Mt).get($a(t)))==null?void 0:r.find(i=>i!==t&&i.state.isPaused);return(n==null?void 0:n.continue())??Promise.resolve()}clear(){_t.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}getAll(){return[...J(this,Mt).values()].flat()}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Qh(n,r))}findAll(t={}){return this.getAll().filter(n=>Qh(t,n))}notify(t){_t.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return _t.batch(()=>Promise.all(t.map(n=>n.continue().catch(sn))))}},Mt=new WeakMap,ua=new WeakMap,pv);function $a(e){var t;return((t=e.options.scope)==null?void 0:t.id)??String(e.mutationId)}function Jh(e){return{onFetch:(t,n)=>{var c,m,d,p,f;const r=t.options,i=(d=(m=(c=t.fetchOptions)==null?void 0:c.meta)==null?void 0:m.fetchMore)==null?void 0:d.direction,o=((p=t.state.data)==null?void 0:p.pages)||[],s=((f=t.state.data)==null?void 0:f.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const u=async()=>{let h=!1;const y=x=>{Object.defineProperty(x,"signal",{enumerable:!0,get:()=>(t.signal.aborted?h=!0:t.signal.addEventListener("abort",()=>{h=!0}),t.signal)})},v=Vy(t.options,t.fetchOptions),g=async(x,E,_)=>{if(h)return Promise.reject();if(E==null&&x.pages.length)return Promise.resolve(x);const F={queryKey:t.queryKey,pageParam:E,direction:_?"backward":"forward",meta:t.options.meta};y(F);const D=await v(F),{maxPages:P}=t.options,N=_?Xb:Qb;return{pages:N(x.pages,D,P),pageParams:N(x.pageParams,E,P)}};if(i&&o.length){const x=i==="backward",E=x?c4:eg,_={pages:o,pageParams:s},F=E(r,_);a=await g(_,F,x)}else{const x=e??o.length;do{const E=l===0?s[0]??r.initialPageParam:eg(r,a);if(l>0&&E==null)break;a=await g(a,E),l++}while(l<x)}return a};t.options.persister?t.fetchFn=()=>{var h,y;return(y=(h=t.options).persister)==null?void 0:y.call(h,u,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=u}}}function eg(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function c4(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var Ke,Cr,Ar,vo,yo,Sr,xo,Eo,fv,d4=(fv=class{constructor(e={}){Re(this,Ke);Re(this,Cr);Re(this,Ar);Re(this,vo);Re(this,yo);Re(this,Sr);Re(this,xo);Re(this,Eo);Ae(this,Ke,e.queryCache||new s4),Ae(this,Cr,e.mutationCache||new u4),Ae(this,Ar,e.defaultOptions||{}),Ae(this,vo,new Map),Ae(this,yo,new Map),Ae(this,Sr,0)}mount(){Ca(this,Sr)._++,J(this,Sr)===1&&(Ae(this,xo,zy.subscribe(async e=>{e&&(await this.resumePausedMutations(),J(this,Ke).onFocus())})),Ae(this,Eo,ql.subscribe(async e=>{e&&(await this.resumePausedMutations(),J(this,Ke).onOnline())})))}unmount(){var e,t;Ca(this,Sr)._--,J(this,Sr)===0&&((e=J(this,xo))==null||e.call(this),Ae(this,xo,void 0),(t=J(this,Eo))==null||t.call(this),Ae(this,Eo,void 0))}isFetching(e){return J(this,Ke).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return J(this,Cr).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=J(this,Ke).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.getQueryData(e.queryKey);if(t===void 0)return this.fetchQuery(e);{const n=this.defaultQueryOptions(e),r=J(this,Ke).build(this,n);return e.revalidateIfStale&&r.isStaleByTime(Zh(n.staleTime,r))&&this.prefetchQuery(n),Promise.resolve(t)}}getQueriesData(e){return J(this,Ke).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),i=J(this,Ke).get(r.queryHash),o=i==null?void 0:i.state.data,s=Wb(t,o);if(s!==void 0)return J(this,Ke).build(this,r).setData(s,{...n,manual:!0})}setQueriesData(e,t,n){return _t.batch(()=>J(this,Ke).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=J(this,Ke).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=J(this,Ke);_t.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=J(this,Ke),r={type:"active",...e};return _t.batch(()=>(n.findAll(e).forEach(i=>{i.reset()}),this.refetchQueries(r,t)))}cancelQueries(e={},t={}){const n={revert:!0,...t},r=_t.batch(()=>J(this,Ke).findAll(e).map(i=>i.cancel(n)));return Promise.all(r).then(sn).catch(sn)}invalidateQueries(e={},t={}){return _t.batch(()=>{if(J(this,Ke).findAll(e).forEach(r=>{r.invalidate()}),e.refetchType==="none")return Promise.resolve();const n={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(n,t)})}refetchQueries(e={},t){const n={...t,cancelRefetch:(t==null?void 0:t.cancelRefetch)??!0},r=_t.batch(()=>J(this,Ke).findAll(e).filter(i=>!i.isDisabled()).map(i=>{let o=i.fetch(void 0,n);return n.throwOnError||(o=o.catch(sn)),i.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(r).then(sn)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=J(this,Ke).build(this,t);return n.isStaleByTime(Zh(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(sn).catch(sn)}fetchInfiniteQuery(e){return e.behavior=Jh(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(sn).catch(sn)}ensureInfiniteQueryData(e){return e.behavior=Jh(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return ql.isOnline()?J(this,Cr).resumePausedMutations():Promise.resolve()}getQueryCache(){return J(this,Ke)}getMutationCache(){return J(this,Cr)}getDefaultOptions(){return J(this,Ar)}setDefaultOptions(e){Ae(this,Ar,e)}setQueryDefaults(e,t){J(this,vo).set(Us(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...J(this,vo).values()];let n={};return t.forEach(r=>{Ws(e,r.queryKey)&&(n={...n,...r.defaultOptions})}),n}setMutationDefaults(e,t){J(this,yo).set(Us(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...J(this,yo).values()];let n={};return t.forEach(r=>{Ws(e,r.mutationKey)&&(n={...n,...r.defaultOptions})}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...J(this,Ar).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=jf(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.enabled!==!0&&t.queryFn===Vf&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...J(this,Ar).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){J(this,Ke).clear(),J(this,Cr).clear()}},Ke=new WeakMap,Cr=new WeakMap,Ar=new WeakMap,vo=new WeakMap,yo=new WeakMap,Sr=new WeakMap,xo=new WeakMap,Eo=new WeakMap,fv),p4=S.createContext(void 0),f4=({client:e,children:t})=>(S.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),w.jsx(p4.Provider,{value:e,children:t}));async function m4(e){if(!e.ok){const t=await e.text()||e.statusText;throw new Error(`${e.status}: ${t}`)}}const h4=({on401:e})=>async({queryKey:t})=>{const n=await fetch(t[0],{credentials:"include"});return e==="returnNull"&&n.status===401?null:(await m4(n),await n.json())},g4=new d4({defaultOptions:{queries:{queryFn:h4({on401:"throw"}),refetchInterval:!1,refetchOnWindowFocus:!1,staleTime:1/0,retry:!1},mutations:{retry:!1}}}),v4=1,y4=1e6;let Ac=0;function x4(){return Ac=(Ac+1)%Number.MAX_SAFE_INTEGER,Ac.toString()}const Sc=new Map,tg=e=>{if(Sc.has(e))return;const t=setTimeout(()=>{Sc.delete(e),ws({type:"REMOVE_TOAST",toastId:e})},y4);Sc.set(e,t)},E4=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,v4)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?tg(n):e.toasts.forEach(r=>{tg(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},fl=[];let ml={toasts:[]};function ws(e){ml=E4(ml,e),fl.forEach(t=>{t(ml)})}function _4({...e}){const t=x4(),n=i=>ws({type:"UPDATE_TOAST",toast:{...i,id:t}}),r=()=>ws({type:"DISMISS_TOAST",toastId:t});return ws({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:i=>{i||r()}}}),{id:t,dismiss:r,update:n}}function zf(){const[e,t]=S.useState(ml);return S.useEffect(()=>(fl.push(t),()=>{const n=fl.indexOf(t);n>-1&&fl.splice(n,1)}),[e]),{...e,toast:_4,dismiss:n=>ws({type:"DISMISS_TOAST",toastId:n})}}function ye(e,t,{checkForDefaultPrevented:n=!0}={}){return function(i){if(e==null||e(i),n===!1||!i.defaultPrevented)return t==null?void 0:t(i)}}function w4(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function Hy(...e){return t=>e.forEach(n=>w4(n,t))}function Oe(...e){return S.useCallback(Hy(...e),e)}function b4(e,t=[]){let n=[];function r(o,s){const a=S.createContext(s),l=n.length;n=[...n,s];function u(m){const{scope:d,children:p,...f}=m,h=(d==null?void 0:d[e][l])||a,y=S.useMemo(()=>f,Object.values(f));return w.jsx(h.Provider,{value:y,children:p})}function c(m,d){const p=(d==null?void 0:d[e][l])||a,f=S.useContext(p);if(f)return f;if(s!==void 0)return s;throw new Error(`\`${m}\` must be used within \`${o}\``)}return u.displayName=o+"Provider",[u,c]}const i=()=>{const o=n.map(s=>S.createContext(s));return function(a){const l=(a==null?void 0:a[e])||o;return S.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return i.scopeName=e,[r,C4(i,...t)]}function C4(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const s=r.reduce((a,{useScope:l,scopeName:u})=>{const m=l(o)[`__scope${u}`];return{...a,...m}},{});return S.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}var Vr=S.forwardRef((e,t)=>{const{children:n,...r}=e,i=S.Children.toArray(n),o=i.find(S4);if(o){const s=o.props.children,a=i.map(l=>l===o?S.Children.count(s)>1?S.Children.only(null):S.isValidElement(s)?s.props.children:null:l);return w.jsx(qd,{...r,ref:t,children:S.isValidElement(s)?S.cloneElement(s,void 0,a):null})}return w.jsx(qd,{...r,ref:t,children:n})});Vr.displayName="Slot";var qd=S.forwardRef((e,t)=>{const{children:n,...r}=e;if(S.isValidElement(n)){const i=k4(n);return S.cloneElement(n,{...D4(r,n.props),ref:t?Hy(t,i):i})}return S.Children.count(n)>1?S.Children.only(null):null});qd.displayName="SlotClone";var A4=({children:e})=>w.jsx(w.Fragment,{children:e});function S4(e){return S.isValidElement(e)&&e.type===A4}function D4(e,t){const n={...t};for(const r in t){const i=e[r],o=t[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...a)=>{o(...a),i(...a)}:i&&(n[r]=i):r==="style"?n[r]={...i,...o}:r==="className"&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...e,...n}}function k4(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function $f(e){const t=e+"CollectionProvider",[n,r]=b4(t),[i,o]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=p=>{const{scope:f,children:h}=p,y=Fe.useRef(null),v=Fe.useRef(new Map).current;return w.jsx(i,{scope:f,itemMap:v,collectionRef:y,children:h})};s.displayName=t;const a=e+"CollectionSlot",l=Fe.forwardRef((p,f)=>{const{scope:h,children:y}=p,v=o(a,h),g=Oe(f,v.collectionRef);return w.jsx(Vr,{ref:g,children:y})});l.displayName=a;const u=e+"CollectionItemSlot",c="data-radix-collection-item",m=Fe.forwardRef((p,f)=>{const{scope:h,children:y,...v}=p,g=Fe.useRef(null),x=Oe(f,g),E=o(u,h);return Fe.useEffect(()=>(E.itemMap.set(g,{ref:g,...v}),()=>void E.itemMap.delete(g))),w.jsx(Vr,{[c]:"",ref:x,children:y})});m.displayName=u;function d(p){const f=o(e+"CollectionConsumer",p);return Fe.useCallback(()=>{const y=f.collectionRef.current;if(!y)return[];const v=Array.from(y.querySelectorAll(`[${c}]`));return Array.from(f.itemMap.values()).sort((E,_)=>v.indexOf(E.ref.current)-v.indexOf(_.ref.current))},[f.collectionRef,f.itemMap])}return[{Provider:s,Slot:l,ItemSlot:m},d,r]}function F4(e,t){const n=S.createContext(t),r=o=>{const{children:s,...a}=o,l=S.useMemo(()=>a,Object.values(a));return w.jsx(n.Provider,{value:l,children:s})};r.displayName=e+"Provider";function i(o){const s=S.useContext(n);if(s)return s;if(t!==void 0)return t;throw new Error(`\`${o}\` must be used within \`${e}\``)}return[r,i]}function Mo(e,t=[]){let n=[];function r(o,s){const a=S.createContext(s),l=n.length;n=[...n,s];const u=m=>{var v;const{scope:d,children:p,...f}=m,h=((v=d==null?void 0:d[e])==null?void 0:v[l])||a,y=S.useMemo(()=>f,Object.values(f));return w.jsx(h.Provider,{value:y,children:p})};u.displayName=o+"Provider";function c(m,d){var h;const p=((h=d==null?void 0:d[e])==null?void 0:h[l])||a,f=S.useContext(p);if(f)return f;if(s!==void 0)return s;throw new Error(`\`${m}\` must be used within \`${o}\``)}return[u,c]}const i=()=>{const o=n.map(s=>S.createContext(s));return function(a){const l=(a==null?void 0:a[e])||o;return S.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return i.scopeName=e,[r,I4(i,...t)]}function I4(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const s=r.reduce((a,{useScope:l,scopeName:u})=>{const m=l(o)[`__scope${u}`];return{...a,...m}},{});return S.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}var P4=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],ke=P4.reduce((e,t)=>{const n=S.forwardRef((r,i)=>{const{asChild:o,...s}=r,a=o?Vr:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),w.jsx(a,{...s,ref:i})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function Gy(e,t){e&&Pi.flushSync(()=>e.dispatchEvent(t))}function Tt(e){const t=S.useRef(e);return S.useEffect(()=>{t.current=e}),S.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function B4(e,t=globalThis==null?void 0:globalThis.document){const n=Tt(e);S.useEffect(()=>{const r=i=>{i.key==="Escape"&&n(i)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var R4="DismissableLayer",Hd="dismissableLayer.update",N4="dismissableLayer.pointerDownOutside",T4="dismissableLayer.focusOutside",ng,Zy=S.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Bu=S.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:o,onInteractOutside:s,onDismiss:a,...l}=e,u=S.useContext(Zy),[c,m]=S.useState(null),d=(c==null?void 0:c.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,p]=S.useState({}),f=Oe(t,D=>m(D)),h=Array.from(u.layers),[y]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),v=h.indexOf(y),g=c?h.indexOf(c):-1,x=u.layersWithOutsidePointerEventsDisabled.size>0,E=g>=v,_=O4(D=>{const P=D.target,N=[...u.branches].some(M=>M.contains(P));!E||N||(i==null||i(D),s==null||s(D),D.defaultPrevented||a==null||a())},d),F=L4(D=>{const P=D.target;[...u.branches].some(M=>M.contains(P))||(o==null||o(D),s==null||s(D),D.defaultPrevented||a==null||a())},d);return B4(D=>{g===u.layers.size-1&&(r==null||r(D),!D.defaultPrevented&&a&&(D.preventDefault(),a()))},d),S.useEffect(()=>{if(c)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(ng=d.body.style.pointerEvents,d.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(c)),u.layers.add(c),rg(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(d.body.style.pointerEvents=ng)}},[c,d,n,u]),S.useEffect(()=>()=>{c&&(u.layers.delete(c),u.layersWithOutsidePointerEventsDisabled.delete(c),rg())},[c,u]),S.useEffect(()=>{const D=()=>p({});return document.addEventListener(Hd,D),()=>document.removeEventListener(Hd,D)},[]),w.jsx(ke.div,{...l,ref:f,style:{pointerEvents:x?E?"auto":"none":void 0,...e.style},onFocusCapture:ye(e.onFocusCapture,F.onFocusCapture),onBlurCapture:ye(e.onBlurCapture,F.onBlurCapture),onPointerDownCapture:ye(e.onPointerDownCapture,_.onPointerDownCapture)})});Bu.displayName=R4;var M4="DismissableLayerBranch",Ky=S.forwardRef((e,t)=>{const n=S.useContext(Zy),r=S.useRef(null),i=Oe(t,r);return S.useEffect(()=>{const o=r.current;if(o)return n.branches.add(o),()=>{n.branches.delete(o)}},[n.branches]),w.jsx(ke.div,{...e,ref:i})});Ky.displayName=M4;function O4(e,t=globalThis==null?void 0:globalThis.document){const n=Tt(e),r=S.useRef(!1),i=S.useRef(()=>{});return S.useEffect(()=>{const o=a=>{if(a.target&&!r.current){let l=function(){Qy(N4,n,u,{discrete:!0})};const u={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",i.current),i.current=l,t.addEventListener("click",i.current,{once:!0})):l()}else t.removeEventListener("click",i.current);r.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",o),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function L4(e,t=globalThis==null?void 0:globalThis.document){const n=Tt(e),r=S.useRef(!1);return S.useEffect(()=>{const i=o=>{o.target&&!r.current&&Qy(T4,n,{originalEvent:o},{discrete:!1})};return t.addEventListener("focusin",i),()=>t.removeEventListener("focusin",i)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function rg(){const e=new CustomEvent(Hd);document.dispatchEvent(e)}function Qy(e,t,n,{discrete:r}){const i=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?Gy(i,o):i.dispatchEvent(o)}var j4=Bu,V4=Ky,gt=globalThis!=null&&globalThis.document?S.useLayoutEffect:()=>{},z4="Portal",Ru=S.forwardRef((e,t)=>{var a;const{container:n,...r}=e,[i,o]=S.useState(!1);gt(()=>o(!0),[]);const s=n||i&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return s?fb.createPortal(w.jsx(ke.div,{...r,ref:t}),s):null});Ru.displayName=z4;function $4(e,t){return S.useReducer((n,r)=>t[n][r]??n,e)}var Bi=e=>{const{present:t,children:n}=e,r=U4(t),i=typeof n=="function"?n({present:r.isPresent}):S.Children.only(n),o=Oe(r.ref,W4(i));return typeof n=="function"||r.isPresent?S.cloneElement(i,{ref:o}):null};Bi.displayName="Presence";function U4(e){const[t,n]=S.useState(),r=S.useRef({}),i=S.useRef(e),o=S.useRef("none"),s=e?"mounted":"unmounted",[a,l]=$4(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return S.useEffect(()=>{const u=Ua(r.current);o.current=a==="mounted"?u:"none"},[a]),gt(()=>{const u=r.current,c=i.current;if(c!==e){const d=o.current,p=Ua(u);e?l("MOUNT"):p==="none"||(u==null?void 0:u.display)==="none"?l("UNMOUNT"):l(c&&d!==p?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,l]),gt(()=>{if(t){let u;const c=t.ownerDocument.defaultView??window,m=p=>{const h=Ua(r.current).includes(p.animationName);if(p.target===t&&h&&(l("ANIMATION_END"),!i.current)){const y=t.style.animationFillMode;t.style.animationFillMode="forwards",u=c.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=y)})}},d=p=>{p.target===t&&(o.current=Ua(r.current))};return t.addEventListener("animationstart",d),t.addEventListener("animationcancel",m),t.addEventListener("animationend",m),()=>{c.clearTimeout(u),t.removeEventListener("animationstart",d),t.removeEventListener("animationcancel",m),t.removeEventListener("animationend",m)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:S.useCallback(u=>{u&&(r.current=getComputedStyle(u)),n(u)},[])}}function Ua(e){return(e==null?void 0:e.animationName)||"none"}function W4(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function bi({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,i]=q4({defaultProp:t,onChange:n}),o=e!==void 0,s=o?e:r,a=Tt(n),l=S.useCallback(u=>{if(o){const m=typeof u=="function"?u(e):u;m!==e&&a(m)}else i(u)},[o,e,i,a]);return[s,l]}function q4({defaultProp:e,onChange:t}){const n=S.useState(e),[r]=n,i=S.useRef(r),o=Tt(t);return S.useEffect(()=>{i.current!==r&&(o(r),i.current=r)},[r,i,o]),n}var H4="VisuallyHidden",Nu=S.forwardRef((e,t)=>w.jsx(ke.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));Nu.displayName=H4;var Uf="ToastProvider",[Wf,G4,Z4]=$f("Toast"),[Xy,kF]=Mo("Toast",[Z4]),[K4,Tu]=Xy(Uf),Yy=e=>{const{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:i="right",swipeThreshold:o=50,children:s}=e,[a,l]=S.useState(null),[u,c]=S.useState(0),m=S.useRef(!1),d=S.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${Uf}\`. Expected non-empty \`string\`.`),w.jsx(Wf.Provider,{scope:t,children:w.jsx(K4,{scope:t,label:n,duration:r,swipeDirection:i,swipeThreshold:o,toastCount:u,viewport:a,onViewportChange:l,onToastAdd:S.useCallback(()=>c(p=>p+1),[]),onToastRemove:S.useCallback(()=>c(p=>p-1),[]),isFocusedToastEscapeKeyDownRef:m,isClosePausedRef:d,children:s})})};Yy.displayName=Uf;var Jy="ToastViewport",Q4=["F8"],Gd="toast.viewportPause",Zd="toast.viewportResume",e1=S.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:r=Q4,label:i="Notifications ({hotkey})",...o}=e,s=Tu(Jy,n),a=G4(n),l=S.useRef(null),u=S.useRef(null),c=S.useRef(null),m=S.useRef(null),d=Oe(t,m,s.onViewportChange),p=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),f=s.toastCount>0;S.useEffect(()=>{const y=v=>{var x;r.length!==0&&r.every(E=>v[E]||v.code===E)&&((x=m.current)==null||x.focus())};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[r]),S.useEffect(()=>{const y=l.current,v=m.current;if(f&&y&&v){const g=()=>{if(!s.isClosePausedRef.current){const F=new CustomEvent(Gd);v.dispatchEvent(F),s.isClosePausedRef.current=!0}},x=()=>{if(s.isClosePausedRef.current){const F=new CustomEvent(Zd);v.dispatchEvent(F),s.isClosePausedRef.current=!1}},E=F=>{!y.contains(F.relatedTarget)&&x()},_=()=>{y.contains(document.activeElement)||x()};return y.addEventListener("focusin",g),y.addEventListener("focusout",E),y.addEventListener("pointermove",g),y.addEventListener("pointerleave",_),window.addEventListener("blur",g),window.addEventListener("focus",x),()=>{y.removeEventListener("focusin",g),y.removeEventListener("focusout",E),y.removeEventListener("pointermove",g),y.removeEventListener("pointerleave",_),window.removeEventListener("blur",g),window.removeEventListener("focus",x)}}},[f,s.isClosePausedRef]);const h=S.useCallback(({tabbingDirection:y})=>{const g=a().map(x=>{const E=x.ref.current,_=[E,...uC(E)];return y==="forwards"?_:_.reverse()});return(y==="forwards"?g.reverse():g).flat()},[a]);return S.useEffect(()=>{const y=m.current;if(y){const v=g=>{var _,F,D;const x=g.altKey||g.ctrlKey||g.metaKey;if(g.key==="Tab"&&!x){const P=document.activeElement,N=g.shiftKey;if(g.target===y&&N){(_=u.current)==null||_.focus();return}const I=h({tabbingDirection:N?"backwards":"forwards"}),O=I.findIndex(C=>C===P);Dc(I.slice(O+1))?g.preventDefault():N?(F=u.current)==null||F.focus():(D=c.current)==null||D.focus()}};return y.addEventListener("keydown",v),()=>y.removeEventListener("keydown",v)}},[a,h]),w.jsxs(V4,{ref:l,role:"region","aria-label":i.replace("{hotkey}",p),tabIndex:-1,style:{pointerEvents:f?void 0:"none"},children:[f&&w.jsx(Kd,{ref:u,onFocusFromOutsideViewport:()=>{const y=h({tabbingDirection:"forwards"});Dc(y)}}),w.jsx(Wf.Slot,{scope:n,children:w.jsx(ke.ol,{tabIndex:-1,...o,ref:d})}),f&&w.jsx(Kd,{ref:c,onFocusFromOutsideViewport:()=>{const y=h({tabbingDirection:"backwards"});Dc(y)}})]})});e1.displayName=Jy;var t1="ToastFocusProxy",Kd=S.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...i}=e,o=Tu(t1,n);return w.jsx(Nu,{"aria-hidden":!0,tabIndex:0,...i,ref:t,style:{position:"fixed"},onFocus:s=>{var u;const a=s.relatedTarget;!((u=o.viewport)!=null&&u.contains(a))&&r()}})});Kd.displayName=t1;var Mu="Toast",X4="toast.swipeStart",Y4="toast.swipeMove",J4="toast.swipeCancel",eC="toast.swipeEnd",n1=S.forwardRef((e,t)=>{const{forceMount:n,open:r,defaultOpen:i,onOpenChange:o,...s}=e,[a=!0,l]=bi({prop:r,defaultProp:i,onChange:o});return w.jsx(Bi,{present:n||a,children:w.jsx(rC,{open:a,...s,ref:t,onClose:()=>l(!1),onPause:Tt(e.onPause),onResume:Tt(e.onResume),onSwipeStart:ye(e.onSwipeStart,u=>{u.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:ye(e.onSwipeMove,u=>{const{x:c,y:m}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","move"),u.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${c}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${m}px`)}),onSwipeCancel:ye(e.onSwipeCancel,u=>{u.currentTarget.setAttribute("data-swipe","cancel"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:ye(e.onSwipeEnd,u=>{const{x:c,y:m}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","end"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${c}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${m}px`),l(!1)})})})});n1.displayName=Mu;var[tC,nC]=Xy(Mu,{onClose(){}}),rC=S.forwardRef((e,t)=>{const{__scopeToast:n,type:r="foreground",duration:i,open:o,onClose:s,onEscapeKeyDown:a,onPause:l,onResume:u,onSwipeStart:c,onSwipeMove:m,onSwipeCancel:d,onSwipeEnd:p,...f}=e,h=Tu(Mu,n),[y,v]=S.useState(null),g=Oe(t,C=>v(C)),x=S.useRef(null),E=S.useRef(null),_=i||h.duration,F=S.useRef(0),D=S.useRef(_),P=S.useRef(0),{onToastAdd:N,onToastRemove:M}=h,G=Tt(()=>{var U;(y==null?void 0:y.contains(document.activeElement))&&((U=h.viewport)==null||U.focus()),s()}),I=S.useCallback(C=>{!C||C===1/0||(window.clearTimeout(P.current),F.current=new Date().getTime(),P.current=window.setTimeout(G,C))},[G]);S.useEffect(()=>{const C=h.viewport;if(C){const U=()=>{I(D.current),u==null||u()},X=()=>{const q=new Date().getTime()-F.current;D.current=D.current-q,window.clearTimeout(P.current),l==null||l()};return C.addEventListener(Gd,X),C.addEventListener(Zd,U),()=>{C.removeEventListener(Gd,X),C.removeEventListener(Zd,U)}}},[h.viewport,_,l,u,I]),S.useEffect(()=>{o&&!h.isClosePausedRef.current&&I(_)},[o,_,h.isClosePausedRef,I]),S.useEffect(()=>(N(),()=>M()),[N,M]);const O=S.useMemo(()=>y?u1(y):null,[y]);return h.viewport?w.jsxs(w.Fragment,{children:[O&&w.jsx(iC,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:O}),w.jsx(tC,{scope:n,onClose:G,children:Pi.createPortal(w.jsx(Wf.ItemSlot,{scope:n,children:w.jsx(j4,{asChild:!0,onEscapeKeyDown:ye(a,()=>{h.isFocusedToastEscapeKeyDownRef.current||G(),h.isFocusedToastEscapeKeyDownRef.current=!1}),children:w.jsx(ke.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":o?"open":"closed","data-swipe-direction":h.swipeDirection,...f,ref:g,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:ye(e.onKeyDown,C=>{C.key==="Escape"&&(a==null||a(C.nativeEvent),C.nativeEvent.defaultPrevented||(h.isFocusedToastEscapeKeyDownRef.current=!0,G()))}),onPointerDown:ye(e.onPointerDown,C=>{C.button===0&&(x.current={x:C.clientX,y:C.clientY})}),onPointerMove:ye(e.onPointerMove,C=>{if(!x.current)return;const U=C.clientX-x.current.x,X=C.clientY-x.current.y,q=!!E.current,W=["left","right"].includes(h.swipeDirection),V=["left","up"].includes(h.swipeDirection)?Math.min:Math.max,Y=W?V(0,U):0,L=W?0:V(0,X),j=C.pointerType==="touch"?10:2,ue={x:Y,y:L},re={originalEvent:C,delta:ue};q?(E.current=ue,Wa(Y4,m,re,{discrete:!1})):ig(ue,h.swipeDirection,j)?(E.current=ue,Wa(X4,c,re,{discrete:!1}),C.target.setPointerCapture(C.pointerId)):(Math.abs(U)>j||Math.abs(X)>j)&&(x.current=null)}),onPointerUp:ye(e.onPointerUp,C=>{const U=E.current,X=C.target;if(X.hasPointerCapture(C.pointerId)&&X.releasePointerCapture(C.pointerId),E.current=null,x.current=null,U){const q=C.currentTarget,W={originalEvent:C,delta:U};ig(U,h.swipeDirection,h.swipeThreshold)?Wa(eC,p,W,{discrete:!0}):Wa(J4,d,W,{discrete:!0}),q.addEventListener("click",V=>V.preventDefault(),{once:!0})}})})})}),h.viewport)})]}):null}),iC=e=>{const{__scopeToast:t,children:n,...r}=e,i=Tu(Mu,t),[o,s]=S.useState(!1),[a,l]=S.useState(!1);return aC(()=>s(!0)),S.useEffect(()=>{const u=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(u)},[]),a?null:w.jsx(Ru,{asChild:!0,children:w.jsx(Nu,{...r,children:o&&w.jsxs(w.Fragment,{children:[i.label," ",n]})})})},oC="ToastTitle",r1=S.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return w.jsx(ke.div,{...r,ref:t})});r1.displayName=oC;var sC="ToastDescription",i1=S.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return w.jsx(ke.div,{...r,ref:t})});i1.displayName=sC;var o1="ToastAction",s1=S.forwardRef((e,t)=>{const{altText:n,...r}=e;return n.trim()?w.jsx(l1,{altText:n,asChild:!0,children:w.jsx(qf,{...r,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${o1}\`. Expected non-empty \`string\`.`),null)});s1.displayName=o1;var a1="ToastClose",qf=S.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e,i=nC(a1,n);return w.jsx(l1,{asChild:!0,children:w.jsx(ke.button,{type:"button",...r,ref:t,onClick:ye(e.onClick,i.onClose)})})});qf.displayName=a1;var l1=S.forwardRef((e,t)=>{const{__scopeToast:n,altText:r,...i}=e;return w.jsx(ke.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...i,ref:t})});function u1(e){const t=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&t.push(r.textContent),lC(r)){const i=r.ariaHidden||r.hidden||r.style.display==="none",o=r.dataset.radixToastAnnounceExclude==="";if(!i)if(o){const s=r.dataset.radixToastAnnounceAlt;s&&t.push(s)}else t.push(...u1(r))}}),t}function Wa(e,t,n,{discrete:r}){const i=n.originalEvent.currentTarget,o=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?Gy(i,o):i.dispatchEvent(o)}var ig=(e,t,n=0)=>{const r=Math.abs(e.x),i=Math.abs(e.y),o=r>i;return t==="left"||t==="right"?o&&r>n:!o&&i>n};function aC(e=()=>{}){const t=Tt(e);gt(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[t])}function lC(e){return e.nodeType===e.ELEMENT_NODE}function uC(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Dc(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}var cC=Yy,c1=e1,d1=n1,p1=r1,f1=i1,m1=s1,h1=qf;function g1(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=g1(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function dC(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=g1(e))&&(r&&(r+=" "),r+=t);return r}const og=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,sg=dC,Ou=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return sg(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:o}=t,s=Object.keys(i).map(u=>{const c=n==null?void 0:n[u],m=o==null?void 0:o[u];if(c===null)return null;const d=og(c)||og(m);return i[u][d]}),a=n&&Object.entries(n).reduce((u,c)=>{let[m,d]=c;return d===void 0||(u[m]=d),u},{}),l=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((u,c)=>{let{class:m,className:d,...p}=c;return Object.entries(p).every(f=>{let[h,y]=f;return Array.isArray(y)?y.includes({...o,...a}[h]):{...o,...a}[h]===y})?[...u,m,d]:u},[]);return sg(e,s,l,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pC=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),v1=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=S.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:s,...a},l)=>S.createElement("svg",{ref:l,...fC,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:v1("lucide",i),...a},[...s.map(([u,c])=>S.createElement(u,c)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=(e,t)=>{const n=S.forwardRef(({className:r,...i},o)=>S.createElement(mC,{ref:o,iconNode:t,className:v1(`lucide-${pC(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=Xr("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=Xr("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hC=Xr("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=Xr("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=Xr("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=Xr("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xC=Xr("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=Xr("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function E1(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=E1(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function EC(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=E1(e))&&(r&&(r+=" "),r+=t);return r}const Gf="-",_C=e=>{const t=bC(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:s=>{const a=s.split(Gf);return a[0]===""&&a.length!==1&&a.shift(),_1(a,t)||wC(s)},getConflictingClassGroupIds:(s,a)=>{const l=n[s]||[];return a&&r[s]?[...l,...r[s]]:l}}},_1=(e,t)=>{var s;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),i=r?_1(e.slice(1),r):void 0;if(i)return i;if(t.validators.length===0)return;const o=e.join(Gf);return(s=t.validators.find(({validator:a})=>a(o)))==null?void 0:s.classGroupId},ag=/^\[(.+)\]$/,wC=e=>{if(ag.test(e)){const t=ag.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},bC=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return AC(Object.entries(e.classGroups),n).forEach(([o,s])=>{Qd(s,r,o,t)}),r},Qd=(e,t,n,r)=>{e.forEach(i=>{if(typeof i=="string"){const o=i===""?t:lg(t,i);o.classGroupId=n;return}if(typeof i=="function"){if(CC(i)){Qd(i(r),t,n,r);return}t.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([o,s])=>{Qd(s,lg(t,o),n,r)})})},lg=(e,t)=>{let n=e;return t.split(Gf).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},CC=e=>e.isThemeGetter,AC=(e,t)=>t?e.map(([n,r])=>{const i=r.map(o=>typeof o=="string"?t+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([s,a])=>[t+s,a])):o);return[n,i]}):e,SC=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const i=(o,s)=>{n.set(o,s),t++,t>e&&(t=0,r=n,n=new Map)};return{get(o){let s=n.get(o);if(s!==void 0)return s;if((s=r.get(o))!==void 0)return i(o,s),s},set(o,s){n.has(o)?n.set(o,s):i(o,s)}}},w1="!",DC=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,i=t[0],o=t.length,s=a=>{const l=[];let u=0,c=0,m;for(let y=0;y<a.length;y++){let v=a[y];if(u===0){if(v===i&&(r||a.slice(y,y+o)===t)){l.push(a.slice(c,y)),c=y+o;continue}if(v==="/"){m=y;continue}}v==="["?u++:v==="]"&&u--}const d=l.length===0?a:a.substring(c),p=d.startsWith(w1),f=p?d.substring(1):d,h=m&&m>c?m-c:void 0;return{modifiers:l,hasImportantModifier:p,baseClassName:f,maybePostfixModifierPosition:h}};return n?a=>n({className:a,parseClassName:s}):s},kC=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},FC=e=>({cache:SC(e.cacheSize),parseClassName:DC(e),..._C(e)}),IC=/\s+/,PC=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=t,o=[],s=e.trim().split(IC);let a="";for(let l=s.length-1;l>=0;l-=1){const u=s[l],{modifiers:c,hasImportantModifier:m,baseClassName:d,maybePostfixModifierPosition:p}=n(u);let f=!!p,h=r(f?d.substring(0,p):d);if(!h){if(!f){a=u+(a.length>0?" "+a:a);continue}if(h=r(d),!h){a=u+(a.length>0?" "+a:a);continue}f=!1}const y=kC(c).join(":"),v=m?y+w1:y,g=v+h;if(o.includes(g))continue;o.push(g);const x=i(h,f);for(let E=0;E<x.length;++E){const _=x[E];o.push(v+_)}a=u+(a.length>0?" "+a:a)}return a};function BC(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=b1(t))&&(r&&(r+=" "),r+=n);return r}const b1=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=b1(e[r]))&&(n&&(n+=" "),n+=t);return n};function RC(e,...t){let n,r,i,o=s;function s(l){const u=t.reduce((c,m)=>m(c),e());return n=FC(u),r=n.cache.get,i=n.cache.set,o=a,a(l)}function a(l){const u=r(l);if(u)return u;const c=PC(l,n);return i(l,c),c}return function(){return o(BC.apply(null,arguments))}}const Ve=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},C1=/^\[(?:([a-z-]+):)?(.+)\]$/i,NC=/^\d+\/\d+$/,TC=new Set(["px","full","screen"]),MC=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,OC=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,LC=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,jC=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,VC=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,jn=e=>ao(e)||TC.has(e)||NC.test(e),lr=e=>Oo(e,"length",ZC),ao=e=>!!e&&!Number.isNaN(Number(e)),kc=e=>Oo(e,"number",ao),Xo=e=>!!e&&Number.isInteger(Number(e)),zC=e=>e.endsWith("%")&&ao(e.slice(0,-1)),Ce=e=>C1.test(e),ur=e=>MC.test(e),$C=new Set(["length","size","percentage"]),UC=e=>Oo(e,$C,A1),WC=e=>Oo(e,"position",A1),qC=new Set(["image","url"]),HC=e=>Oo(e,qC,QC),GC=e=>Oo(e,"",KC),Yo=()=>!0,Oo=(e,t,n)=>{const r=C1.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},ZC=e=>OC.test(e)&&!LC.test(e),A1=()=>!1,KC=e=>jC.test(e),QC=e=>VC.test(e),XC=()=>{const e=Ve("colors"),t=Ve("spacing"),n=Ve("blur"),r=Ve("brightness"),i=Ve("borderColor"),o=Ve("borderRadius"),s=Ve("borderSpacing"),a=Ve("borderWidth"),l=Ve("contrast"),u=Ve("grayscale"),c=Ve("hueRotate"),m=Ve("invert"),d=Ve("gap"),p=Ve("gradientColorStops"),f=Ve("gradientColorStopPositions"),h=Ve("inset"),y=Ve("margin"),v=Ve("opacity"),g=Ve("padding"),x=Ve("saturate"),E=Ve("scale"),_=Ve("sepia"),F=Ve("skew"),D=Ve("space"),P=Ve("translate"),N=()=>["auto","contain","none"],M=()=>["auto","hidden","clip","visible","scroll"],G=()=>["auto",Ce,t],I=()=>[Ce,t],O=()=>["",jn,lr],C=()=>["auto",ao,Ce],U=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],X=()=>["solid","dashed","dotted","double","none"],q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],W=()=>["start","end","center","between","around","evenly","stretch"],V=()=>["","0",Ce],Y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],L=()=>[ao,Ce];return{cacheSize:500,separator:":",theme:{colors:[Yo],spacing:[jn,lr],blur:["none","",ur,Ce],brightness:L(),borderColor:[e],borderRadius:["none","","full",ur,Ce],borderSpacing:I(),borderWidth:O(),contrast:L(),grayscale:V(),hueRotate:L(),invert:V(),gap:I(),gradientColorStops:[e],gradientColorStopPositions:[zC,lr],inset:G(),margin:G(),opacity:L(),padding:I(),saturate:L(),scale:L(),sepia:V(),skew:L(),space:I(),translate:I()},classGroups:{aspect:[{aspect:["auto","square","video",Ce]}],container:["container"],columns:[{columns:[ur]}],"break-after":[{"break-after":Y()}],"break-before":[{"break-before":Y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...U(),Ce]}],overflow:[{overflow:M()}],"overflow-x":[{"overflow-x":M()}],"overflow-y":[{"overflow-y":M()}],overscroll:[{overscroll:N()}],"overscroll-x":[{"overscroll-x":N()}],"overscroll-y":[{"overscroll-y":N()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[h]}],"inset-x":[{"inset-x":[h]}],"inset-y":[{"inset-y":[h]}],start:[{start:[h]}],end:[{end:[h]}],top:[{top:[h]}],right:[{right:[h]}],bottom:[{bottom:[h]}],left:[{left:[h]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Xo,Ce]}],basis:[{basis:G()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Ce]}],grow:[{grow:V()}],shrink:[{shrink:V()}],order:[{order:["first","last","none",Xo,Ce]}],"grid-cols":[{"grid-cols":[Yo]}],"col-start-end":[{col:["auto",{span:["full",Xo,Ce]},Ce]}],"col-start":[{"col-start":C()}],"col-end":[{"col-end":C()}],"grid-rows":[{"grid-rows":[Yo]}],"row-start-end":[{row:["auto",{span:[Xo,Ce]},Ce]}],"row-start":[{"row-start":C()}],"row-end":[{"row-end":C()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Ce]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Ce]}],gap:[{gap:[d]}],"gap-x":[{"gap-x":[d]}],"gap-y":[{"gap-y":[d]}],"justify-content":[{justify:["normal",...W()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...W(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...W(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[g]}],px:[{px:[g]}],py:[{py:[g]}],ps:[{ps:[g]}],pe:[{pe:[g]}],pt:[{pt:[g]}],pr:[{pr:[g]}],pb:[{pb:[g]}],pl:[{pl:[g]}],m:[{m:[y]}],mx:[{mx:[y]}],my:[{my:[y]}],ms:[{ms:[y]}],me:[{me:[y]}],mt:[{mt:[y]}],mr:[{mr:[y]}],mb:[{mb:[y]}],ml:[{ml:[y]}],"space-x":[{"space-x":[D]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[D]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Ce,t]}],"min-w":[{"min-w":[Ce,t,"min","max","fit"]}],"max-w":[{"max-w":[Ce,t,"none","full","min","max","fit","prose",{screen:[ur]},ur]}],h:[{h:[Ce,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Ce,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Ce,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Ce,t,"auto","min","max","fit"]}],"font-size":[{text:["base",ur,lr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",kc]}],"font-family":[{font:[Yo]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Ce]}],"line-clamp":[{"line-clamp":["none",ao,kc]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",jn,Ce]}],"list-image":[{"list-image":["none",Ce]}],"list-style-type":[{list:["none","disc","decimal",Ce]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[v]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[v]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...X(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",jn,lr]}],"underline-offset":[{"underline-offset":["auto",jn,Ce]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:I()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Ce]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Ce]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[v]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...U(),WC]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",UC]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},HC]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[f]}],"gradient-via-pos":[{via:[f]}],"gradient-to-pos":[{to:[f]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[v]}],"border-style":[{border:[...X(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[v]}],"divide-style":[{divide:X()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...X()]}],"outline-offset":[{"outline-offset":[jn,Ce]}],"outline-w":[{outline:[jn,lr]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:O()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[v]}],"ring-offset-w":[{"ring-offset":[jn,lr]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",ur,GC]}],"shadow-color":[{shadow:[Yo]}],opacity:[{opacity:[v]}],"mix-blend":[{"mix-blend":[...q(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":q()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",ur,Ce]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[m]}],saturate:[{saturate:[x]}],sepia:[{sepia:[_]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[v]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[_]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Ce]}],duration:[{duration:L()}],ease:[{ease:["linear","in","out","in-out",Ce]}],delay:[{delay:L()}],animate:[{animate:["none","spin","ping","pulse","bounce",Ce]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[E]}],"scale-x":[{"scale-x":[E]}],"scale-y":[{"scale-y":[E]}],rotate:[{rotate:[Xo,Ce]}],"translate-x":[{"translate-x":[P]}],"translate-y":[{"translate-y":[P]}],"skew-x":[{"skew-x":[F]}],"skew-y":[{"skew-y":[F]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Ce]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Ce]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":I()}],"scroll-mx":[{"scroll-mx":I()}],"scroll-my":[{"scroll-my":I()}],"scroll-ms":[{"scroll-ms":I()}],"scroll-me":[{"scroll-me":I()}],"scroll-mt":[{"scroll-mt":I()}],"scroll-mr":[{"scroll-mr":I()}],"scroll-mb":[{"scroll-mb":I()}],"scroll-ml":[{"scroll-ml":I()}],"scroll-p":[{"scroll-p":I()}],"scroll-px":[{"scroll-px":I()}],"scroll-py":[{"scroll-py":I()}],"scroll-ps":[{"scroll-ps":I()}],"scroll-pe":[{"scroll-pe":I()}],"scroll-pt":[{"scroll-pt":I()}],"scroll-pr":[{"scroll-pr":I()}],"scroll-pb":[{"scroll-pb":I()}],"scroll-pl":[{"scroll-pl":I()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Ce]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[jn,lr,kc]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},YC=RC(XC);function De(...e){return YC(EC(e))}const JC=cC,S1=S.forwardRef(({className:e,...t},n)=>w.jsx(c1,{ref:n,className:De("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));S1.displayName=c1.displayName;const e3=Ou("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),D1=S.forwardRef(({className:e,variant:t,...n},r)=>w.jsx(d1,{ref:r,className:De(e3({variant:t}),e),...n}));D1.displayName=d1.displayName;const t3=S.forwardRef(({className:e,...t},n)=>w.jsx(m1,{ref:n,className:De("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t}));t3.displayName=m1.displayName;const k1=S.forwardRef(({className:e,...t},n)=>w.jsx(h1,{ref:n,className:De("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:w.jsx(Hf,{className:"h-4 w-4"})}));k1.displayName=h1.displayName;const F1=S.forwardRef(({className:e,...t},n)=>w.jsx(p1,{ref:n,className:De("text-sm font-semibold",e),...t}));F1.displayName=p1.displayName;const I1=S.forwardRef(({className:e,...t},n)=>w.jsx(f1,{ref:n,className:De("text-sm opacity-90",e),...t}));I1.displayName=f1.displayName;function n3(){const{toasts:e}=zf();return w.jsxs(JC,{children:[e.map(function({id:t,title:n,description:r,action:i,...o}){return w.jsxs(D1,{...o,children:[w.jsxs("div",{className:"grid gap-1",children:[n&&w.jsx(F1,{children:n}),r&&w.jsx(I1,{children:r})]}),i,w.jsx(k1,{})]},t)}),w.jsx(S1,{})]})}const Zf=S.forwardRef(({className:e,...t},n)=>w.jsx("div",{ref:n,className:De("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));Zf.displayName="Card";const r3=S.forwardRef(({className:e,...t},n)=>w.jsx("div",{ref:n,className:De("flex flex-col space-y-1.5 p-6",e),...t}));r3.displayName="CardHeader";const i3=S.forwardRef(({className:e,...t},n)=>w.jsx("h3",{ref:n,className:De("text-2xl font-semibold leading-none tracking-tight",e),...t}));i3.displayName="CardTitle";const o3=S.forwardRef(({className:e,...t},n)=>w.jsx("p",{ref:n,className:De("text-sm text-muted-foreground",e),...t}));o3.displayName="CardDescription";const Kf=S.forwardRef(({className:e,...t},n)=>w.jsx("div",{ref:n,className:De("p-6 pt-0",e),...t}));Kf.displayName="CardContent";const s3=S.forwardRef(({className:e,...t},n)=>w.jsx("div",{ref:n,className:De("flex items-center p-6 pt-0",e),...t}));s3.displayName="CardFooter";const a3="/assets/aletyx-logo-TPPqjyzL.png";function l3(){return w.jsxs("div",{className:"min-h-screen w-full flex items-center justify-center bg-background",children:[w.jsx("div",{className:"absolute top-6 left-6 sm:left-10",children:w.jsx("a",{href:"/",className:"flex items-center",children:w.jsx("img",{src:a3,alt:"Aletyx Logo",className:"h-10"})})}),w.jsx(Zf,{className:"w-full max-w-md mx-4",children:w.jsxs(Kf,{className:"pt-6",children:[w.jsxs("div",{className:"flex mb-4 gap-2",children:[w.jsx(gC,{className:"h-8 w-8 text-destructive"}),w.jsx("h1",{className:"text-2xl font-bold text-foreground",children:"404 Page Not Found"})]}),w.jsx("p",{className:"mt-4 text-sm text-muted-foreground",children:"Did you forget to add the page to the router?"}),w.jsx("div",{className:"mt-6 text-center",children:w.jsx("a",{href:"/",className:"text-primary hover:text-primary/80",children:"Return to Home"})})]})})]})}var ha=e=>e.type==="checkbox",ui=e=>e instanceof Date,Et=e=>e==null;const P1=e=>typeof e=="object";var et=e=>!Et(e)&&!Array.isArray(e)&&P1(e)&&!ui(e),B1=e=>et(e)&&e.target?ha(e.target)?e.target.checked:e.target.value:e,u3=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,R1=(e,t)=>e.has(u3(t)),c3=e=>{const t=e.constructor&&e.constructor.prototype;return et(t)&&t.hasOwnProperty("isPrototypeOf")},Qf=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function kt(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Qf&&(e instanceof Blob||e instanceof FileList))&&(n||et(e)))if(t=n?[]:{},!n&&!c3(e))t=e;else for(const r in e)e.hasOwnProperty(r)&&(t[r]=kt(e[r]));else return e;return t}var Lu=e=>Array.isArray(e)?e.filter(Boolean):[],Xe=e=>e===void 0,ie=(e,t,n)=>{if(!t||!et(e))return n;const r=Lu(t.split(/[,[\].]+?/)).reduce((i,o)=>Et(i)?i:i[o],e);return Xe(r)||r===e?Xe(e[t])?n:e[t]:r},Gt=e=>typeof e=="boolean",Xf=e=>/^\w*$/.test(e),N1=e=>Lu(e.replace(/["|']|\]/g,"").split(/\.|\[/)),Ne=(e,t,n)=>{let r=-1;const i=Xf(t)?[t]:N1(t),o=i.length,s=o-1;for(;++r<o;){const a=i[r];let l=n;if(r!==s){const u=e[a];l=et(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}if(a==="__proto__")return;e[a]=l,e=e[a]}return e};const Hl={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},cn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Vn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},T1=Fe.createContext(null),ju=()=>Fe.useContext(T1),d3=e=>{const{children:t,...n}=e;return Fe.createElement(T1.Provider,{value:n},t)};var M1=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const s=o;return t._proxyFormState[s]!==cn.all&&(t._proxyFormState[s]=!r||cn.all),n&&(n[s]=!0),e[s]}});return i},Ft=e=>et(e)&&!Object.keys(e).length,O1=(e,t,n,r)=>{n(e);const{name:i,...o}=e;return Ft(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(s=>t[s]===(!r||cn.all))},bs=e=>Array.isArray(e)?e:[e],L1=(e,t,n)=>!e||!t||e===t||bs(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r)));function Yf(e){const t=Fe.useRef(e);t.current=e,Fe.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}function p3(e){const t=ju(),{control:n=t.control,disabled:r,name:i,exact:o}=e||{},[s,a]=Fe.useState(n._formState),l=Fe.useRef(!0),u=Fe.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),c=Fe.useRef(i);return c.current=i,Yf({disabled:r,next:m=>l.current&&L1(c.current,m.name,o)&&O1(m,u.current,n._updateFormState)&&a({...n._formState,...m}),subject:n._subjects.state}),Fe.useEffect(()=>(l.current=!0,u.current.isValid&&n._updateValid(!0),()=>{l.current=!1}),[n]),M1(s,n,u.current,!1)}var kn=e=>typeof e=="string",j1=(e,t,n,r,i)=>kn(e)?(r&&t.watch.add(e),ie(n,e,i)):Array.isArray(e)?e.map(o=>(r&&t.watch.add(o),ie(n,o))):(r&&(t.watchAll=!0),n);function f3(e){const t=ju(),{control:n=t.control,name:r,defaultValue:i,disabled:o,exact:s}=e||{},a=Fe.useRef(r);a.current=r,Yf({disabled:o,subject:n._subjects.values,next:c=>{L1(a.current,c.name,s)&&u(kt(j1(a.current,n._names,c.values||n._formValues,!1,i)))}});const[l,u]=Fe.useState(n._getWatch(r,i));return Fe.useEffect(()=>n._removeUnmounted()),l}function m3(e){const t=ju(),{name:n,disabled:r,control:i=t.control,shouldUnregister:o}=e,s=R1(i._names.array,n),a=f3({control:i,name:n,defaultValue:ie(i._formValues,n,ie(i._defaultValues,n,e.defaultValue)),exact:!0}),l=p3({control:i,name:n,exact:!0}),u=Fe.useRef(i.register(n,{...e.rules,value:a,...Gt(e.disabled)?{disabled:e.disabled}:{}}));return Fe.useEffect(()=>{const c=i._options.shouldUnregister||o,m=(d,p)=>{const f=ie(i._fields,d);f&&f._f&&(f._f.mount=p)};if(m(n,!0),c){const d=kt(ie(i._options.defaultValues,n));Ne(i._defaultValues,n,d),Xe(ie(i._formValues,n))&&Ne(i._formValues,n,d)}return()=>{(s?c&&!i._state.action:c)?i.unregister(n):m(n,!1)}},[n,i,s,o]),Fe.useEffect(()=>{ie(i._fields,n)&&i._updateDisabledField({disabled:r,fields:i._fields,name:n,value:ie(i._fields,n)._f.value})},[r,n,i]),{field:{name:n,value:a,...Gt(r)||l.disabled?{disabled:l.disabled||r}:{},onChange:Fe.useCallback(c=>u.current.onChange({target:{value:B1(c),name:n},type:Hl.CHANGE}),[n]),onBlur:Fe.useCallback(()=>u.current.onBlur({target:{value:ie(i._formValues,n),name:n},type:Hl.BLUR}),[n,i]),ref:Fe.useCallback(c=>{const m=ie(i._fields,n);m&&c&&(m._f.ref={focus:()=>c.focus(),select:()=>c.select(),setCustomValidity:d=>c.setCustomValidity(d),reportValidity:()=>c.reportValidity()})},[i._fields,n])},formState:l,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!ie(l.errors,n)},isDirty:{enumerable:!0,get:()=>!!ie(l.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!ie(l.touchedFields,n)},isValidating:{enumerable:!0,get:()=>!!ie(l.validatingFields,n)},error:{enumerable:!0,get:()=>ie(l.errors,n)}})}}const h3=e=>e.render(m3(e));var V1=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},ug=e=>({isOnSubmit:!e||e===cn.onSubmit,isOnBlur:e===cn.onBlur,isOnChange:e===cn.onChange,isOnAll:e===cn.all,isOnTouch:e===cn.onTouched}),cg=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const Cs=(e,t,n,r)=>{for(const i of n||Object.keys(e)){const o=ie(e,i);if(o){const{_f:s,...a}=o;if(s){if(s.refs&&s.refs[0]&&t(s.refs[0],i)&&!r)return!0;if(s.ref&&t(s.ref,s.name)&&!r)return!0;if(Cs(a,t))break}else if(et(a)&&Cs(a,t))break}}};var g3=(e,t,n)=>{const r=bs(ie(e,n));return Ne(r,"root",t[n]),Ne(e,n,r),e},Jf=e=>e.type==="file",Xn=e=>typeof e=="function",Gl=e=>{if(!Qf)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},hl=e=>kn(e),em=e=>e.type==="radio",Zl=e=>e instanceof RegExp;const dg={value:!1,isValid:!1},pg={value:!0,isValid:!0};var z1=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Xe(e[0].attributes.value)?Xe(e[0].value)||e[0].value===""?pg:{value:e[0].value,isValid:!0}:pg:dg}return dg};const fg={isValid:!1,value:null};var $1=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,fg):fg;function mg(e,t,n="validate"){if(hl(e)||Array.isArray(e)&&e.every(hl)||Gt(e)&&!e)return{type:n,message:hl(e)?e:"",ref:t}}var Oi=e=>et(e)&&!Zl(e)?e:{value:e,message:""},hg=async(e,t,n,r,i)=>{const{ref:o,refs:s,required:a,maxLength:l,minLength:u,min:c,max:m,pattern:d,validate:p,name:f,valueAsNumber:h,mount:y,disabled:v}=e._f,g=ie(t,f);if(!y||v)return{};const x=s?s[0]:o,E=I=>{r&&x.reportValidity&&(x.setCustomValidity(Gt(I)?"":I||""),x.reportValidity())},_={},F=em(o),D=ha(o),P=F||D,N=(h||Jf(o))&&Xe(o.value)&&Xe(g)||Gl(o)&&o.value===""||g===""||Array.isArray(g)&&!g.length,M=V1.bind(null,f,n,_),G=(I,O,C,U=Vn.maxLength,X=Vn.minLength)=>{const q=I?O:C;_[f]={type:I?U:X,message:q,ref:o,...M(I?U:X,q)}};if(i?!Array.isArray(g)||!g.length:a&&(!P&&(N||Et(g))||Gt(g)&&!g||D&&!z1(s).isValid||F&&!$1(s).isValid)){const{value:I,message:O}=hl(a)?{value:!!a,message:a}:Oi(a);if(I&&(_[f]={type:Vn.required,message:O,ref:x,...M(Vn.required,O)},!n))return E(O),_}if(!N&&(!Et(c)||!Et(m))){let I,O;const C=Oi(m),U=Oi(c);if(!Et(g)&&!isNaN(g)){const X=o.valueAsNumber||g&&+g;Et(C.value)||(I=X>C.value),Et(U.value)||(O=X<U.value)}else{const X=o.valueAsDate||new Date(g),q=Y=>new Date(new Date().toDateString()+" "+Y),W=o.type=="time",V=o.type=="week";kn(C.value)&&g&&(I=W?q(g)>q(C.value):V?g>C.value:X>new Date(C.value)),kn(U.value)&&g&&(O=W?q(g)<q(U.value):V?g<U.value:X<new Date(U.value))}if((I||O)&&(G(!!I,C.message,U.message,Vn.max,Vn.min),!n))return E(_[f].message),_}if((l||u)&&!N&&(kn(g)||i&&Array.isArray(g))){const I=Oi(l),O=Oi(u),C=!Et(I.value)&&g.length>+I.value,U=!Et(O.value)&&g.length<+O.value;if((C||U)&&(G(C,I.message,O.message),!n))return E(_[f].message),_}if(d&&!N&&kn(g)){const{value:I,message:O}=Oi(d);if(Zl(I)&&!g.match(I)&&(_[f]={type:Vn.pattern,message:O,ref:o,...M(Vn.pattern,O)},!n))return E(O),_}if(p){if(Xn(p)){const I=await p(g,t),O=mg(I,x);if(O&&(_[f]={...O,...M(Vn.validate,O.message)},!n))return E(O.message),_}else if(et(p)){let I={};for(const O in p){if(!Ft(I)&&!n)break;const C=mg(await p[O](g,t),x,O);C&&(I={...C,...M(O,C.message)},E(C.message),n&&(_[f]=I))}if(!Ft(I)&&(_[f]={ref:x,...I},!n))return _}}return E(!0),_};function v3(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=Xe(e)?r++:e[t[r++]];return e}function y3(e){for(const t in e)if(e.hasOwnProperty(t)&&!Xe(e[t]))return!1;return!0}function nt(e,t){const n=Array.isArray(t)?t:Xf(t)?[t]:N1(t),r=n.length===1?e:v3(e,n),i=n.length-1,o=n[i];return r&&delete r[o],i!==0&&(et(r)&&Ft(r)||Array.isArray(r)&&y3(r))&&nt(e,n.slice(0,-1)),e}var Fc=()=>{let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next&&o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}},Xd=e=>Et(e)||!P1(e);function Er(e,t){if(Xd(e)||Xd(t))return e===t;if(ui(e)&&ui(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const s=t[i];if(ui(o)&&ui(s)||et(o)&&et(s)||Array.isArray(o)&&Array.isArray(s)?!Er(o,s):o!==s)return!1}}return!0}var U1=e=>e.type==="select-multiple",x3=e=>em(e)||ha(e),Ic=e=>Gl(e)&&e.isConnected,W1=e=>{for(const t in e)if(Xn(e[t]))return!0;return!1};function Kl(e,t={}){const n=Array.isArray(e);if(et(e)||n)for(const r in e)Array.isArray(e[r])||et(e[r])&&!W1(e[r])?(t[r]=Array.isArray(e[r])?[]:{},Kl(e[r],t[r])):Et(e[r])||(t[r]=!0);return t}function q1(e,t,n){const r=Array.isArray(e);if(et(e)||r)for(const i in e)Array.isArray(e[i])||et(e[i])&&!W1(e[i])?Xe(t)||Xd(n[i])?n[i]=Array.isArray(e[i])?Kl(e[i],[]):{...Kl(e[i])}:q1(e[i],Et(t)?{}:t[i],n[i]):n[i]=!Er(e[i],t[i]);return n}var Jo=(e,t)=>q1(e,t,Kl(t)),H1=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>Xe(e)?e:t?e===""?NaN:e&&+e:n&&kn(e)?new Date(e):r?r(e):e;function Pc(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return Jf(t)?t.files:em(t)?$1(e.refs).value:U1(t)?[...t.selectedOptions].map(({value:n})=>n):ha(t)?z1(e.refs).value:H1(Xe(t.value)?e.ref.value:t.value,e)}var E3=(e,t,n,r)=>{const i={};for(const o of e){const s=ie(t,o);s&&Ne(i,o,s._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},es=e=>Xe(e)?e:Zl(e)?e.source:et(e)?Zl(e.value)?e.value.source:e.value:e;const gg="AsyncFunction";var _3=e=>(!e||!e.validate)&&!!(Xn(e.validate)&&e.validate.constructor.name===gg||et(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===gg)),w3=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function vg(e,t,n){const r=ie(e,n);if(r||Xf(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),s=ie(t,o),a=ie(e,o);if(s&&!Array.isArray(s)&&n!==o)return{name:n};if(a&&a.type)return{name:o,error:a};i.pop()}return{name:n}}var b3=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,C3=(e,t)=>!Lu(ie(e,t)).length&&nt(e,t);const A3={mode:cn.onSubmit,reValidateMode:cn.onChange,shouldFocusError:!0};function S3(e={}){let t={...A3,...e},n={submitCount:0,isDirty:!1,isLoading:Xn(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},r={},i=et(t.defaultValues)||et(t.values)?kt(t.defaultValues||t.values)||{}:{},o=t.shouldUnregister?{}:kt(i),s={action:!1,mount:!1,watch:!1},a={mount:new Set,unMount:new Set,array:new Set,watch:new Set},l,u=0;const c={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},m={values:Fc(),array:Fc(),state:Fc()},d=ug(t.mode),p=ug(t.reValidateMode),f=t.criteriaMode===cn.all,h=b=>k=>{clearTimeout(u),u=setTimeout(b,k)},y=async b=>{if(!e.disabled&&(c.isValid||b)){const k=t.resolver?Ft((await P()).errors):await M(r,!0);k!==n.isValid&&m.state.next({isValid:k})}},v=(b,k)=>{!e.disabled&&(c.isValidating||c.validatingFields)&&((b||Array.from(a.mount)).forEach(T=>{T&&(k?Ne(n.validatingFields,T,k):nt(n.validatingFields,T))}),m.state.next({validatingFields:n.validatingFields,isValidating:!Ft(n.validatingFields)}))},g=(b,k=[],T,$,R=!0,z=!0)=>{if($&&T&&!e.disabled){if(s.action=!0,z&&Array.isArray(ie(r,b))){const Q=T(ie(r,b),$.argA,$.argB);R&&Ne(r,b,Q)}if(z&&Array.isArray(ie(n.errors,b))){const Q=T(ie(n.errors,b),$.argA,$.argB);R&&Ne(n.errors,b,Q),C3(n.errors,b)}if(c.touchedFields&&z&&Array.isArray(ie(n.touchedFields,b))){const Q=T(ie(n.touchedFields,b),$.argA,$.argB);R&&Ne(n.touchedFields,b,Q)}c.dirtyFields&&(n.dirtyFields=Jo(i,o)),m.state.next({name:b,isDirty:I(b,k),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else Ne(o,b,k)},x=(b,k)=>{Ne(n.errors,b,k),m.state.next({errors:n.errors})},E=b=>{n.errors=b,m.state.next({errors:n.errors,isValid:!1})},_=(b,k,T,$)=>{const R=ie(r,b);if(R){const z=ie(o,b,Xe(T)?ie(i,b):T);Xe(z)||$&&$.defaultChecked||k?Ne(o,b,k?z:Pc(R._f)):U(b,z),s.mount&&y()}},F=(b,k,T,$,R)=>{let z=!1,Q=!1;const Z={name:b};if(!e.disabled){const se=!!(ie(r,b)&&ie(r,b)._f&&ie(r,b)._f.disabled);if(!T||$){c.isDirty&&(Q=n.isDirty,n.isDirty=Z.isDirty=I(),z=Q!==Z.isDirty);const xe=se||Er(ie(i,b),k);Q=!!(!se&&ie(n.dirtyFields,b)),xe||se?nt(n.dirtyFields,b):Ne(n.dirtyFields,b,!0),Z.dirtyFields=n.dirtyFields,z=z||c.dirtyFields&&Q!==!xe}if(T){const xe=ie(n.touchedFields,b);xe||(Ne(n.touchedFields,b,T),Z.touchedFields=n.touchedFields,z=z||c.touchedFields&&xe!==T)}z&&R&&m.state.next(Z)}return z?Z:{}},D=(b,k,T,$)=>{const R=ie(n.errors,b),z=c.isValid&&Gt(k)&&n.isValid!==k;if(e.delayError&&T?(l=h(()=>x(b,T)),l(e.delayError)):(clearTimeout(u),l=null,T?Ne(n.errors,b,T):nt(n.errors,b)),(T?!Er(R,T):R)||!Ft($)||z){const Q={...$,...z&&Gt(k)?{isValid:k}:{},errors:n.errors,name:b};n={...n,...Q},m.state.next(Q)}},P=async b=>{v(b,!0);const k=await t.resolver(o,t.context,E3(b||a.mount,r,t.criteriaMode,t.shouldUseNativeValidation));return v(b),k},N=async b=>{const{errors:k}=await P(b);if(b)for(const T of b){const $=ie(k,T);$?Ne(n.errors,T,$):nt(n.errors,T)}else n.errors=k;return k},M=async(b,k,T={valid:!0})=>{for(const $ in b){const R=b[$];if(R){const{_f:z,...Q}=R;if(z){const Z=a.array.has(z.name),se=R._f&&_3(R._f);se&&c.validatingFields&&v([$],!0);const xe=await hg(R,o,f,t.shouldUseNativeValidation&&!k,Z);if(se&&c.validatingFields&&v([$]),xe[z.name]&&(T.valid=!1,k))break;!k&&(ie(xe,z.name)?Z?g3(n.errors,xe,z.name):Ne(n.errors,z.name,xe[z.name]):nt(n.errors,z.name))}!Ft(Q)&&await M(Q,k,T)}}return T.valid},G=()=>{for(const b of a.unMount){const k=ie(r,b);k&&(k._f.refs?k._f.refs.every(T=>!Ic(T)):!Ic(k._f.ref))&&we(b)}a.unMount=new Set},I=(b,k)=>!e.disabled&&(b&&k&&Ne(o,b,k),!Er(L(),i)),O=(b,k,T)=>j1(b,a,{...s.mount?o:Xe(k)?i:kn(b)?{[b]:k}:k},T,k),C=b=>Lu(ie(s.mount?o:i,b,e.shouldUnregister?ie(i,b,[]):[])),U=(b,k,T={})=>{const $=ie(r,b);let R=k;if($){const z=$._f;z&&(!z.disabled&&Ne(o,b,H1(k,z)),R=Gl(z.ref)&&Et(k)?"":k,U1(z.ref)?[...z.ref.options].forEach(Q=>Q.selected=R.includes(Q.value)):z.refs?ha(z.ref)?z.refs.length>1?z.refs.forEach(Q=>(!Q.defaultChecked||!Q.disabled)&&(Q.checked=Array.isArray(R)?!!R.find(Z=>Z===Q.value):R===Q.value)):z.refs[0]&&(z.refs[0].checked=!!R):z.refs.forEach(Q=>Q.checked=Q.value===R):Jf(z.ref)?z.ref.value="":(z.ref.value=R,z.ref.type||m.values.next({name:b,values:{...o}})))}(T.shouldDirty||T.shouldTouch)&&F(b,R,T.shouldTouch,T.shouldDirty,!0),T.shouldValidate&&Y(b)},X=(b,k,T)=>{for(const $ in k){const R=k[$],z=`${b}.${$}`,Q=ie(r,z);(a.array.has(b)||et(R)||Q&&!Q._f)&&!ui(R)?X(z,R,T):U(z,R,T)}},q=(b,k,T={})=>{const $=ie(r,b),R=a.array.has(b),z=kt(k);Ne(o,b,z),R?(m.array.next({name:b,values:{...o}}),(c.isDirty||c.dirtyFields)&&T.shouldDirty&&m.state.next({name:b,dirtyFields:Jo(i,o),isDirty:I(b,z)})):$&&!$._f&&!Et(z)?X(b,z,T):U(b,z,T),cg(b,a)&&m.state.next({...n}),m.values.next({name:s.mount?b:void 0,values:{...o}})},W=async b=>{s.mount=!0;const k=b.target;let T=k.name,$=!0;const R=ie(r,T),z=()=>k.type?Pc(R._f):B1(b),Q=Z=>{$=Number.isNaN(Z)||ui(Z)&&isNaN(Z.getTime())||Er(Z,ie(o,T,Z))};if(R){let Z,se;const xe=z(),Ee=b.type===Hl.BLUR||b.type===Hl.FOCUS_OUT,St=!w3(R._f)&&!t.resolver&&!ie(n.errors,T)&&!R._f.deps||b3(Ee,ie(n.touchedFields,T),n.isSubmitted,p,d),On=cg(T,a,Ee);Ne(o,T,xe),Ee?(R._f.onBlur&&R._f.onBlur(b),l&&l(0)):R._f.onChange&&R._f.onChange(b);const Dt=F(T,xe,Ee,!1),ti=!Ft(Dt)||On;if(!Ee&&m.values.next({name:T,type:b.type,values:{...o}}),St)return c.isValid&&(e.mode==="onBlur"?Ee&&y():y()),ti&&m.state.next({name:T,...On?{}:Dt});if(!Ee&&On&&m.state.next({...n}),t.resolver){const{errors:Ue}=await P([T]);if(Q(xe),$){const Ni=vg(n.errors,r,T),Ti=vg(Ue,r,Ni.name||T);Z=Ti.error,T=Ti.name,se=Ft(Ue)}}else v([T],!0),Z=(await hg(R,o,f,t.shouldUseNativeValidation))[T],v([T]),Q(xe),$&&(Z?se=!1:c.isValid&&(se=await M(r,!0)));$&&(R._f.deps&&Y(R._f.deps),D(T,se,Z,Dt))}},V=(b,k)=>{if(ie(n.errors,k)&&b.focus)return b.focus(),1},Y=async(b,k={})=>{let T,$;const R=bs(b);if(t.resolver){const z=await N(Xe(b)?b:R);T=Ft(z),$=b?!R.some(Q=>ie(z,Q)):T}else b?($=(await Promise.all(R.map(async z=>{const Q=ie(r,z);return await M(Q&&Q._f?{[z]:Q}:Q)}))).every(Boolean),!(!$&&!n.isValid)&&y()):$=T=await M(r);return m.state.next({...!kn(b)||c.isValid&&T!==n.isValid?{}:{name:b},...t.resolver||!b?{isValid:T}:{},errors:n.errors}),k.shouldFocus&&!$&&Cs(r,V,b?R:a.mount),$},L=b=>{const k={...s.mount?o:i};return Xe(b)?k:kn(b)?ie(k,b):b.map(T=>ie(k,T))},j=(b,k)=>({invalid:!!ie((k||n).errors,b),isDirty:!!ie((k||n).dirtyFields,b),error:ie((k||n).errors,b),isValidating:!!ie(n.validatingFields,b),isTouched:!!ie((k||n).touchedFields,b)}),ue=b=>{b&&bs(b).forEach(k=>nt(n.errors,k)),m.state.next({errors:b?n.errors:{}})},re=(b,k,T)=>{const $=(ie(r,b,{_f:{}})._f||{}).ref,R=ie(n.errors,b)||{},{ref:z,message:Q,type:Z,...se}=R;Ne(n.errors,b,{...se,...k,ref:$}),m.state.next({name:b,errors:n.errors,isValid:!1}),T&&T.shouldFocus&&$&&$.focus&&$.focus()},ne=(b,k)=>Xn(b)?m.values.subscribe({next:T=>b(O(void 0,k),T)}):O(b,k,!0),we=(b,k={})=>{for(const T of b?bs(b):a.mount)a.mount.delete(T),a.array.delete(T),k.keepValue||(nt(r,T),nt(o,T)),!k.keepError&&nt(n.errors,T),!k.keepDirty&&nt(n.dirtyFields,T),!k.keepTouched&&nt(n.touchedFields,T),!k.keepIsValidating&&nt(n.validatingFields,T),!t.shouldUnregister&&!k.keepDefaultValue&&nt(i,T);m.values.next({values:{...o}}),m.state.next({...n,...k.keepDirty?{isDirty:I()}:{}}),!k.keepIsValid&&y()},ae=({disabled:b,name:k,field:T,fields:$,value:R})=>{if(Gt(b)&&s.mount||b){const z=b?void 0:Xe(R)?Pc(T?T._f:ie($,k)._f):R;Ne(o,k,z),F(k,z,!1,!1,!0)}},de=(b,k={})=>{let T=ie(r,b);const $=Gt(k.disabled)||Gt(e.disabled);return Ne(r,b,{...T||{},_f:{...T&&T._f?T._f:{ref:{name:b}},name:b,mount:!0,...k}}),a.mount.add(b),T?ae({field:T,disabled:Gt(k.disabled)?k.disabled:e.disabled,name:b,value:k.value}):_(b,!0,k.value),{...$?{disabled:k.disabled||e.disabled}:{},...t.progressive?{required:!!k.required,min:es(k.min),max:es(k.max),minLength:es(k.minLength),maxLength:es(k.maxLength),pattern:es(k.pattern)}:{},name:b,onChange:W,onBlur:W,ref:R=>{if(R){de(b,k),T=ie(r,b);const z=Xe(R.value)&&R.querySelectorAll&&R.querySelectorAll("input,select,textarea")[0]||R,Q=x3(z),Z=T._f.refs||[];if(Q?Z.find(se=>se===z):z===T._f.ref)return;Ne(r,b,{_f:{...T._f,...Q?{refs:[...Z.filter(Ic),z,...Array.isArray(ie(i,b))?[{}]:[]],ref:{type:z.type,name:b}}:{ref:z}}}),_(b,!1,void 0,z)}else T=ie(r,b,{}),T._f&&(T._f.mount=!1),(t.shouldUnregister||k.shouldUnregister)&&!(R1(a.array,b)&&s.action)&&a.unMount.add(b)}}},me=()=>t.shouldFocusError&&Cs(r,V,a.mount),ve=b=>{Gt(b)&&(m.state.next({disabled:b}),Cs(r,(k,T)=>{const $=ie(r,T);$&&(k.disabled=$._f.disabled||b,Array.isArray($._f.refs)&&$._f.refs.forEach(R=>{R.disabled=$._f.disabled||b}))},0,!1))},fe=(b,k)=>async T=>{let $;T&&(T.preventDefault&&T.preventDefault(),T.persist&&T.persist());let R=kt(o);if(m.state.next({isSubmitting:!0}),t.resolver){const{errors:z,values:Q}=await P();n.errors=z,R=Q}else await M(r);if(nt(n.errors,"root"),Ft(n.errors)){m.state.next({errors:{}});try{await b(R,T)}catch(z){$=z}}else k&&await k({...n.errors},T),me(),setTimeout(me);if(m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Ft(n.errors)&&!$,submitCount:n.submitCount+1,errors:n.errors}),$)throw $},be=(b,k={})=>{ie(r,b)&&(Xe(k.defaultValue)?q(b,kt(ie(i,b))):(q(b,k.defaultValue),Ne(i,b,kt(k.defaultValue))),k.keepTouched||nt(n.touchedFields,b),k.keepDirty||(nt(n.dirtyFields,b),n.isDirty=k.defaultValue?I(b,kt(ie(i,b))):I()),k.keepError||(nt(n.errors,b),c.isValid&&y()),m.state.next({...n}))},Me=(b,k={})=>{const T=b?kt(b):i,$=kt(T),R=Ft(b),z=R?i:$;if(k.keepDefaultValues||(i=T),!k.keepValues){if(k.keepDirtyValues){const Q=new Set([...a.mount,...Object.keys(Jo(i,o))]);for(const Z of Array.from(Q))ie(n.dirtyFields,Z)?Ne(z,Z,ie(o,Z)):q(Z,ie(z,Z))}else{if(Qf&&Xe(b))for(const Q of a.mount){const Z=ie(r,Q);if(Z&&Z._f){const se=Array.isArray(Z._f.refs)?Z._f.refs[0]:Z._f.ref;if(Gl(se)){const xe=se.closest("form");if(xe){xe.reset();break}}}}r={}}o=e.shouldUnregister?k.keepDefaultValues?kt(i):{}:kt(z),m.array.next({values:{...z}}),m.values.next({values:{...z}})}a={mount:k.keepDirtyValues?a.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},s.mount=!c.isValid||!!k.keepIsValid||!!k.keepDirtyValues,s.watch=!!e.shouldUnregister,m.state.next({submitCount:k.keepSubmitCount?n.submitCount:0,isDirty:R?!1:k.keepDirty?n.isDirty:!!(k.keepDefaultValues&&!Er(b,i)),isSubmitted:k.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:R?{}:k.keepDirtyValues?k.keepDefaultValues&&o?Jo(i,o):n.dirtyFields:k.keepDefaultValues&&b?Jo(i,b):k.keepDirty?n.dirtyFields:{},touchedFields:k.keepTouched?n.touchedFields:{},errors:k.keepErrors?n.errors:{},isSubmitSuccessful:k.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},A=(b,k)=>Me(Xn(b)?b(o):b,k);return{control:{register:de,unregister:we,getFieldState:j,handleSubmit:fe,setError:re,_executeSchema:P,_getWatch:O,_getDirty:I,_updateValid:y,_removeUnmounted:G,_updateFieldArray:g,_updateDisabledField:ae,_getFieldArray:C,_reset:Me,_resetDefaultValues:()=>Xn(t.defaultValues)&&t.defaultValues().then(b=>{A(b,t.resetOptions),m.state.next({isLoading:!1})}),_updateFormState:b=>{n={...n,...b}},_disableForm:ve,_subjects:m,_proxyFormState:c,_setErrors:E,get _fields(){return r},get _formValues(){return o},get _state(){return s},set _state(b){s=b},get _defaultValues(){return i},get _names(){return a},set _names(b){a=b},get _formState(){return n},set _formState(b){n=b},get _options(){return t},set _options(b){t={...t,...b}}},trigger:Y,register:de,handleSubmit:fe,watch:ne,setValue:q,getValues:L,reset:A,resetField:be,clearErrors:ue,unregister:we,setError:re,setFocus:(b,k={})=>{const T=ie(r,b),$=T&&T._f;if($){const R=$.refs?$.refs[0]:$.ref;R.focus&&(R.focus(),k.shouldSelect&&R.select())}},getFieldState:j}}function D3(e={}){const t=Fe.useRef(),n=Fe.useRef(),[r,i]=Fe.useState({isDirty:!1,isValidating:!1,isLoading:Xn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Xn(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...S3(e),formState:r});const o=t.current.control;return o._options=e,Yf({subject:o._subjects.state,next:s=>{O1(s,o._proxyFormState,o._updateFormState,!0)&&i({...o._formState})}}),Fe.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),Fe.useEffect(()=>{if(o._proxyFormState.isDirty){const s=o._getDirty();s!==r.isDirty&&o._subjects.state.next({isDirty:s})}},[o,r.isDirty]),Fe.useEffect(()=>{e.values&&!Er(e.values,n.current)?(o._reset(e.values,o._options.resetOptions),n.current=e.values,i(s=>({...s}))):o._resetDefaultValues()},[e.values,o]),Fe.useEffect(()=>{e.errors&&o._setErrors(e.errors)},[e.errors,o]),Fe.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),Fe.useEffect(()=>{e.shouldUnregister&&o._subjects.values.next({values:o._getWatch()})},[e.shouldUnregister,o]),Fe.useEffect(()=>{t.current&&(t.current.watch=t.current.watch.bind({}))},[r]),t.current.formState=M1(r,o),t.current}const yg=(e,t,n)=>{if(e&&"reportValidity"in e){const r=ie(n,t);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},G1=(e,t)=>{for(const n in t.fields){const r=t.fields[n];r&&r.ref&&"reportValidity"in r.ref?yg(r.ref,n,e):r.refs&&r.refs.forEach(i=>yg(i,n,e))}},k3=(e,t)=>{t.shouldUseNativeValidation&&G1(e,t);const n={};for(const r in e){const i=ie(t.fields,r),o=Object.assign(e[r]||{},{ref:i&&i.ref});if(F3(t.names||Object.keys(e),r)){const s=Object.assign({},ie(n,r));Ne(s,"root",o),Ne(n,r,s)}else Ne(n,r,o)}return n},F3=(e,t)=>e.some(n=>n.startsWith(t+"."));var I3=function(e,t){for(var n={};e.length;){var r=e[0],i=r.code,o=r.message,s=r.path.join(".");if(!n[s])if("unionErrors"in r){var a=r.unionErrors[0].errors[0];n[s]={message:a.message,type:a.code}}else n[s]={message:o,type:i};if("unionErrors"in r&&r.unionErrors.forEach(function(c){return c.errors.forEach(function(m){return e.push(m)})}),t){var l=n[s].types,u=l&&l[r.code];n[s]=V1(s,t,n,i,u?[].concat(u,r.message):r.message)}e.shift()}return n},P3=function(e,t,n){return n===void 0&&(n={}),function(r,i,o){try{return Promise.resolve(function(s,a){try{var l=Promise.resolve(e[n.mode==="sync"?"parse":"parseAsync"](r,t)).then(function(u){return o.shouldUseNativeValidation&&G1({},o),{errors:{},values:n.raw?r:u}})}catch(u){return a(u)}return l&&l.then?l.then(void 0,a):l}(0,function(s){if(function(a){return Array.isArray(a==null?void 0:a.errors)}(s))return{values:{},errors:k3(I3(s.errors,!o.shouldUseNativeValidation&&o.criteriaMode==="all"),o)};throw s}))}catch(s){return Promise.reject(s)}}},Pe;(function(e){e.assertEqual=i=>i;function t(i){}e.assertIs=t;function n(i){throw new Error}e.assertNever=n,e.arrayToEnum=i=>{const o={};for(const s of i)o[s]=s;return o},e.getValidEnumValues=i=>{const o=e.objectKeys(i).filter(a=>typeof i[i[a]]!="number"),s={};for(const a of o)s[a]=i[a];return e.objectValues(s)},e.objectValues=i=>e.objectKeys(i).map(function(o){return i[o]}),e.objectKeys=typeof Object.keys=="function"?i=>Object.keys(i):i=>{const o=[];for(const s in i)Object.prototype.hasOwnProperty.call(i,s)&&o.push(s);return o},e.find=(i,o)=>{for(const s of i)if(o(s))return s},e.isInteger=typeof Number.isInteger=="function"?i=>Number.isInteger(i):i=>typeof i=="number"&&isFinite(i)&&Math.floor(i)===i;function r(i,o=" | "){return i.map(s=>typeof s=="string"?`'${s}'`:s).join(o)}e.joinValues=r,e.jsonStringifyReplacer=(i,o)=>typeof o=="bigint"?o.toString():o})(Pe||(Pe={}));var Yd;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})(Yd||(Yd={}));const le=Pe.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),_r=e=>{switch(typeof e){case"undefined":return le.undefined;case"string":return le.string;case"number":return isNaN(e)?le.nan:le.number;case"boolean":return le.boolean;case"function":return le.function;case"bigint":return le.bigint;case"symbol":return le.symbol;case"object":return Array.isArray(e)?le.array:e===null?le.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?le.promise:typeof Map<"u"&&e instanceof Map?le.map:typeof Set<"u"&&e instanceof Set?le.set:typeof Date<"u"&&e instanceof Date?le.date:le.object;default:return le.unknown}},te=Pe.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),B3=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class zt extends Error{constructor(t){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const n=t||function(o){return o.message},r={_errors:[]},i=o=>{for(const s of o.issues)if(s.code==="invalid_union")s.unionErrors.map(i);else if(s.code==="invalid_return_type")i(s.returnTypeError);else if(s.code==="invalid_arguments")i(s.argumentsError);else if(s.path.length===0)r._errors.push(n(s));else{let a=r,l=0;for(;l<s.path.length;){const u=s.path[l];l===s.path.length-1?(a[u]=a[u]||{_errors:[]},a[u]._errors.push(n(s))):a[u]=a[u]||{_errors:[]},a=a[u],l++}}};return i(this),r}static assert(t){if(!(t instanceof zt))throw new Error(`Not a ZodError: ${t}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,Pe.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},r=[];for(const i of this.issues)i.path.length>0?(n[i.path[0]]=n[i.path[0]]||[],n[i.path[0]].push(t(i))):r.push(t(i));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}}zt.create=e=>new zt(e);const Fo=(e,t)=>{let n;switch(e.code){case te.invalid_type:e.received===le.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case te.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,Pe.jsonStringifyReplacer)}`;break;case te.unrecognized_keys:n=`Unrecognized key(s) in object: ${Pe.joinValues(e.keys,", ")}`;break;case te.invalid_union:n="Invalid input";break;case te.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Pe.joinValues(e.options)}`;break;case te.invalid_enum_value:n=`Invalid enum value. Expected ${Pe.joinValues(e.options)}, received '${e.received}'`;break;case te.invalid_arguments:n="Invalid function arguments";break;case te.invalid_return_type:n="Invalid function return type";break;case te.invalid_date:n="Invalid date";break;case te.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:Pe.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case te.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case te.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case te.custom:n="Invalid input";break;case te.invalid_intersection_types:n="Intersection results could not be merged";break;case te.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case te.not_finite:n="Number must be finite";break;default:n=t.defaultError,Pe.assertNever(e)}return{message:n}};let Z1=Fo;function R3(e){Z1=e}function Ql(){return Z1}const Xl=e=>{const{data:t,path:n,errorMaps:r,issueData:i}=e,o=[...n,...i.path||[]],s={...i,path:o};if(i.message!==void 0)return{...i,path:o,message:i.message};let a="";const l=r.filter(u=>!!u).slice().reverse();for(const u of l)a=u(s,{data:t,defaultError:a}).message;return{...i,path:o,message:a}},N3=[];function oe(e,t){const n=Ql(),r=Xl({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,n,n===Fo?void 0:Fo].filter(i=>!!i)});e.common.issues.push(r)}class vt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const r=[];for(const i of n){if(i.status==="aborted")return ge;i.status==="dirty"&&t.dirty(),r.push(i.value)}return{status:t.value,value:r}}static async mergeObjectAsync(t,n){const r=[];for(const i of n){const o=await i.key,s=await i.value;r.push({key:o,value:s})}return vt.mergeObjectSync(t,r)}static mergeObjectSync(t,n){const r={};for(const i of n){const{key:o,value:s}=i;if(o.status==="aborted"||s.status==="aborted")return ge;o.status==="dirty"&&t.dirty(),s.status==="dirty"&&t.dirty(),o.value!=="__proto__"&&(typeof s.value<"u"||i.alwaysSet)&&(r[o.value]=s.value)}return{status:t.value,value:r}}}const ge=Object.freeze({status:"aborted"}),eo=e=>({status:"dirty",value:e}),bt=e=>({status:"valid",value:e}),Jd=e=>e.status==="aborted",ep=e=>e.status==="dirty",qs=e=>e.status==="valid",Hs=e=>typeof Promise<"u"&&e instanceof Promise;function Yl(e,t,n,r){if(typeof t=="function"?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t.get(e)}function K1(e,t,n,r,i){if(typeof t=="function"?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return t.set(e,n),n}var pe;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t==null?void 0:t.message})(pe||(pe={}));var ls,us;class Rn{constructor(t,n,r,i){this._cachedPath=[],this.parent=t,this.data=n,this._path=r,this._key=i}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const xg=(e,t)=>{if(qs(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new zt(e.common.issues);return this._error=n,this._error}}};function _e(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:r,description:i}=e;if(t&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:i}:{errorMap:(s,a)=>{var l,u;const{message:c}=e;return s.code==="invalid_enum_value"?{message:c??a.defaultError}:typeof a.data>"u"?{message:(l=c??r)!==null&&l!==void 0?l:a.defaultError}:s.code!=="invalid_type"?{message:a.defaultError}:{message:(u=c??n)!==null&&u!==void 0?u:a.defaultError}},description:i}}class Se{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return _r(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:_r(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new vt,ctx:{common:t.parent.common,data:t.data,parsedType:_r(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(Hs(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const r=this.safeParse(t,n);if(r.success)return r.data;throw r.error}safeParse(t,n){var r;const i={common:{issues:[],async:(r=n==null?void 0:n.async)!==null&&r!==void 0?r:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:_r(t)},o=this._parseSync({data:t,path:i.path,parent:i});return xg(i,o)}async parseAsync(t,n){const r=await this.safeParseAsync(t,n);if(r.success)return r.data;throw r.error}async safeParseAsync(t,n){const r={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:_r(t)},i=this._parse({data:t,path:r.path,parent:r}),o=await(Hs(i)?i:Promise.resolve(i));return xg(r,o)}refine(t,n){const r=i=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(i):n;return this._refinement((i,o)=>{const s=t(i),a=()=>o.addIssue({code:te.custom,...r(i)});return typeof Promise<"u"&&s instanceof Promise?s.then(l=>l?!0:(a(),!1)):s?!0:(a(),!1)})}refinement(t,n){return this._refinement((r,i)=>t(r)?!0:(i.addIssue(typeof n=="function"?n(r,i):n),!1))}_refinement(t){return new gn({schema:this,typeName:he.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return Pn.create(this,this._def)}nullable(){return Wr.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return mn.create(this,this._def)}promise(){return Po.create(this,this._def)}or(t){return Qs.create([this,t],this._def)}and(t){return Xs.create(this,t,this._def)}transform(t){return new gn({..._e(this._def),schema:this,typeName:he.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new na({..._e(this._def),innerType:this,defaultValue:n,typeName:he.ZodDefault})}brand(){return new tm({typeName:he.ZodBranded,type:this,..._e(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new ra({..._e(this._def),innerType:this,catchValue:n,typeName:he.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return ga.create(this,t)}readonly(){return ia.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const T3=/^c[^\s-]{8,}$/i,M3=/^[0-9a-z]+$/,O3=/^[0-9A-HJKMNP-TV-Z]{26}$/,L3=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,j3=/^[a-z0-9_-]{21}$/i,V3=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,z3=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,$3="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Bc;const U3=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,W3=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,q3=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Q1="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",H3=new RegExp(`^${Q1}$`);function X1(e){let t="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return e.precision?t=`${t}\\.\\d{${e.precision}}`:e.precision==null&&(t=`${t}(\\.\\d+)?`),t}function G3(e){return new RegExp(`^${X1(e)}$`)}function Y1(e){let t=`${Q1}T${X1(e)}`;const n=[];return n.push(e.local?"Z?":"Z"),e.offset&&n.push("([+-]\\d{2}:?\\d{2})"),t=`${t}(${n.join("|")})`,new RegExp(`^${t}$`)}function Z3(e,t){return!!((t==="v4"||!t)&&U3.test(e)||(t==="v6"||!t)&&W3.test(e))}class dn extends Se{_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==le.string){const o=this._getOrReturnCtx(t);return oe(o,{code:te.invalid_type,expected:le.string,received:o.parsedType}),ge}const r=new vt;let i;for(const o of this._def.checks)if(o.kind==="min")t.data.length<o.value&&(i=this._getOrReturnCtx(t,i),oe(i,{code:te.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),r.dirty());else if(o.kind==="max")t.data.length>o.value&&(i=this._getOrReturnCtx(t,i),oe(i,{code:te.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),r.dirty());else if(o.kind==="length"){const s=t.data.length>o.value,a=t.data.length<o.value;(s||a)&&(i=this._getOrReturnCtx(t,i),s?oe(i,{code:te.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}):a&&oe(i,{code:te.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}),r.dirty())}else if(o.kind==="email")z3.test(t.data)||(i=this._getOrReturnCtx(t,i),oe(i,{validation:"email",code:te.invalid_string,message:o.message}),r.dirty());else if(o.kind==="emoji")Bc||(Bc=new RegExp($3,"u")),Bc.test(t.data)||(i=this._getOrReturnCtx(t,i),oe(i,{validation:"emoji",code:te.invalid_string,message:o.message}),r.dirty());else if(o.kind==="uuid")L3.test(t.data)||(i=this._getOrReturnCtx(t,i),oe(i,{validation:"uuid",code:te.invalid_string,message:o.message}),r.dirty());else if(o.kind==="nanoid")j3.test(t.data)||(i=this._getOrReturnCtx(t,i),oe(i,{validation:"nanoid",code:te.invalid_string,message:o.message}),r.dirty());else if(o.kind==="cuid")T3.test(t.data)||(i=this._getOrReturnCtx(t,i),oe(i,{validation:"cuid",code:te.invalid_string,message:o.message}),r.dirty());else if(o.kind==="cuid2")M3.test(t.data)||(i=this._getOrReturnCtx(t,i),oe(i,{validation:"cuid2",code:te.invalid_string,message:o.message}),r.dirty());else if(o.kind==="ulid")O3.test(t.data)||(i=this._getOrReturnCtx(t,i),oe(i,{validation:"ulid",code:te.invalid_string,message:o.message}),r.dirty());else if(o.kind==="url")try{new URL(t.data)}catch{i=this._getOrReturnCtx(t,i),oe(i,{validation:"url",code:te.invalid_string,message:o.message}),r.dirty()}else o.kind==="regex"?(o.regex.lastIndex=0,o.regex.test(t.data)||(i=this._getOrReturnCtx(t,i),oe(i,{validation:"regex",code:te.invalid_string,message:o.message}),r.dirty())):o.kind==="trim"?t.data=t.data.trim():o.kind==="includes"?t.data.includes(o.value,o.position)||(i=this._getOrReturnCtx(t,i),oe(i,{code:te.invalid_string,validation:{includes:o.value,position:o.position},message:o.message}),r.dirty()):o.kind==="toLowerCase"?t.data=t.data.toLowerCase():o.kind==="toUpperCase"?t.data=t.data.toUpperCase():o.kind==="startsWith"?t.data.startsWith(o.value)||(i=this._getOrReturnCtx(t,i),oe(i,{code:te.invalid_string,validation:{startsWith:o.value},message:o.message}),r.dirty()):o.kind==="endsWith"?t.data.endsWith(o.value)||(i=this._getOrReturnCtx(t,i),oe(i,{code:te.invalid_string,validation:{endsWith:o.value},message:o.message}),r.dirty()):o.kind==="datetime"?Y1(o).test(t.data)||(i=this._getOrReturnCtx(t,i),oe(i,{code:te.invalid_string,validation:"datetime",message:o.message}),r.dirty()):o.kind==="date"?H3.test(t.data)||(i=this._getOrReturnCtx(t,i),oe(i,{code:te.invalid_string,validation:"date",message:o.message}),r.dirty()):o.kind==="time"?G3(o).test(t.data)||(i=this._getOrReturnCtx(t,i),oe(i,{code:te.invalid_string,validation:"time",message:o.message}),r.dirty()):o.kind==="duration"?V3.test(t.data)||(i=this._getOrReturnCtx(t,i),oe(i,{validation:"duration",code:te.invalid_string,message:o.message}),r.dirty()):o.kind==="ip"?Z3(t.data,o.version)||(i=this._getOrReturnCtx(t,i),oe(i,{validation:"ip",code:te.invalid_string,message:o.message}),r.dirty()):o.kind==="base64"?q3.test(t.data)||(i=this._getOrReturnCtx(t,i),oe(i,{validation:"base64",code:te.invalid_string,message:o.message}),r.dirty()):Pe.assertNever(o);return{status:r.value,value:t.data}}_regex(t,n,r){return this.refinement(i=>t.test(i),{validation:n,code:te.invalid_string,...pe.errToObj(r)})}_addCheck(t){return new dn({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...pe.errToObj(t)})}url(t){return this._addCheck({kind:"url",...pe.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...pe.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...pe.errToObj(t)})}nanoid(t){return this._addCheck({kind:"nanoid",...pe.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...pe.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...pe.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...pe.errToObj(t)})}base64(t){return this._addCheck({kind:"base64",...pe.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...pe.errToObj(t)})}datetime(t){var n,r;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof(t==null?void 0:t.precision)>"u"?null:t==null?void 0:t.precision,offset:(n=t==null?void 0:t.offset)!==null&&n!==void 0?n:!1,local:(r=t==null?void 0:t.local)!==null&&r!==void 0?r:!1,...pe.errToObj(t==null?void 0:t.message)})}date(t){return this._addCheck({kind:"date",message:t})}time(t){return typeof t=="string"?this._addCheck({kind:"time",precision:null,message:t}):this._addCheck({kind:"time",precision:typeof(t==null?void 0:t.precision)>"u"?null:t==null?void 0:t.precision,...pe.errToObj(t==null?void 0:t.message)})}duration(t){return this._addCheck({kind:"duration",...pe.errToObj(t)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...pe.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n==null?void 0:n.position,...pe.errToObj(n==null?void 0:n.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...pe.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...pe.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...pe.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...pe.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...pe.errToObj(n)})}nonempty(t){return this.min(1,pe.errToObj(t))}trim(){return new dn({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new dn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new dn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isDate(){return!!this._def.checks.find(t=>t.kind==="date")}get isTime(){return!!this._def.checks.find(t=>t.kind==="time")}get isDuration(){return!!this._def.checks.find(t=>t.kind==="duration")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(t=>t.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get isBase64(){return!!this._def.checks.find(t=>t.kind==="base64")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}dn.create=e=>{var t;return new dn({checks:[],typeName:he.ZodString,coerce:(t=e==null?void 0:e.coerce)!==null&&t!==void 0?t:!1,..._e(e)})};function K3(e,t){const n=(e.toString().split(".")[1]||"").length,r=(t.toString().split(".")[1]||"").length,i=n>r?n:r,o=parseInt(e.toFixed(i).replace(".","")),s=parseInt(t.toFixed(i).replace(".",""));return o%s/Math.pow(10,i)}class zr extends Se{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==le.number){const o=this._getOrReturnCtx(t);return oe(o,{code:te.invalid_type,expected:le.number,received:o.parsedType}),ge}let r;const i=new vt;for(const o of this._def.checks)o.kind==="int"?Pe.isInteger(t.data)||(r=this._getOrReturnCtx(t,r),oe(r,{code:te.invalid_type,expected:"integer",received:"float",message:o.message}),i.dirty()):o.kind==="min"?(o.inclusive?t.data<o.value:t.data<=o.value)&&(r=this._getOrReturnCtx(t,r),oe(r,{code:te.too_small,minimum:o.value,type:"number",inclusive:o.inclusive,exact:!1,message:o.message}),i.dirty()):o.kind==="max"?(o.inclusive?t.data>o.value:t.data>=o.value)&&(r=this._getOrReturnCtx(t,r),oe(r,{code:te.too_big,maximum:o.value,type:"number",inclusive:o.inclusive,exact:!1,message:o.message}),i.dirty()):o.kind==="multipleOf"?K3(t.data,o.value)!==0&&(r=this._getOrReturnCtx(t,r),oe(r,{code:te.not_multiple_of,multipleOf:o.value,message:o.message}),i.dirty()):o.kind==="finite"?Number.isFinite(t.data)||(r=this._getOrReturnCtx(t,r),oe(r,{code:te.not_finite,message:o.message}),i.dirty()):Pe.assertNever(o);return{status:i.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,pe.toString(n))}gt(t,n){return this.setLimit("min",t,!1,pe.toString(n))}lte(t,n){return this.setLimit("max",t,!0,pe.toString(n))}lt(t,n){return this.setLimit("max",t,!1,pe.toString(n))}setLimit(t,n,r,i){return new zr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:pe.toString(i)}]})}_addCheck(t){return new zr({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:pe.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:pe.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:pe.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:pe.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:pe.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:pe.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:pe.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:pe.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:pe.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&Pe.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(t===null||r.value<t)&&(t=r.value)}return Number.isFinite(n)&&Number.isFinite(t)}}zr.create=e=>new zr({checks:[],typeName:he.ZodNumber,coerce:(e==null?void 0:e.coerce)||!1,..._e(e)});class $r extends Se{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==le.bigint){const o=this._getOrReturnCtx(t);return oe(o,{code:te.invalid_type,expected:le.bigint,received:o.parsedType}),ge}let r;const i=new vt;for(const o of this._def.checks)o.kind==="min"?(o.inclusive?t.data<o.value:t.data<=o.value)&&(r=this._getOrReturnCtx(t,r),oe(r,{code:te.too_small,type:"bigint",minimum:o.value,inclusive:o.inclusive,message:o.message}),i.dirty()):o.kind==="max"?(o.inclusive?t.data>o.value:t.data>=o.value)&&(r=this._getOrReturnCtx(t,r),oe(r,{code:te.too_big,type:"bigint",maximum:o.value,inclusive:o.inclusive,message:o.message}),i.dirty()):o.kind==="multipleOf"?t.data%o.value!==BigInt(0)&&(r=this._getOrReturnCtx(t,r),oe(r,{code:te.not_multiple_of,multipleOf:o.value,message:o.message}),i.dirty()):Pe.assertNever(o);return{status:i.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,pe.toString(n))}gt(t,n){return this.setLimit("min",t,!1,pe.toString(n))}lte(t,n){return this.setLimit("max",t,!0,pe.toString(n))}lt(t,n){return this.setLimit("max",t,!1,pe.toString(n))}setLimit(t,n,r,i){return new $r({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:pe.toString(i)}]})}_addCheck(t){return new $r({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:pe.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:pe.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:pe.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:pe.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:pe.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}$r.create=e=>{var t;return new $r({checks:[],typeName:he.ZodBigInt,coerce:(t=e==null?void 0:e.coerce)!==null&&t!==void 0?t:!1,..._e(e)})};class Gs extends Se{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==le.boolean){const r=this._getOrReturnCtx(t);return oe(r,{code:te.invalid_type,expected:le.boolean,received:r.parsedType}),ge}return bt(t.data)}}Gs.create=e=>new Gs({typeName:he.ZodBoolean,coerce:(e==null?void 0:e.coerce)||!1,..._e(e)});class Ci extends Se{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==le.date){const o=this._getOrReturnCtx(t);return oe(o,{code:te.invalid_type,expected:le.date,received:o.parsedType}),ge}if(isNaN(t.data.getTime())){const o=this._getOrReturnCtx(t);return oe(o,{code:te.invalid_date}),ge}const r=new vt;let i;for(const o of this._def.checks)o.kind==="min"?t.data.getTime()<o.value&&(i=this._getOrReturnCtx(t,i),oe(i,{code:te.too_small,message:o.message,inclusive:!0,exact:!1,minimum:o.value,type:"date"}),r.dirty()):o.kind==="max"?t.data.getTime()>o.value&&(i=this._getOrReturnCtx(t,i),oe(i,{code:te.too_big,message:o.message,inclusive:!0,exact:!1,maximum:o.value,type:"date"}),r.dirty()):Pe.assertNever(o);return{status:r.value,value:new Date(t.data.getTime())}}_addCheck(t){return new Ci({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:pe.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:pe.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}Ci.create=e=>new Ci({checks:[],coerce:(e==null?void 0:e.coerce)||!1,typeName:he.ZodDate,..._e(e)});class Jl extends Se{_parse(t){if(this._getType(t)!==le.symbol){const r=this._getOrReturnCtx(t);return oe(r,{code:te.invalid_type,expected:le.symbol,received:r.parsedType}),ge}return bt(t.data)}}Jl.create=e=>new Jl({typeName:he.ZodSymbol,..._e(e)});class Zs extends Se{_parse(t){if(this._getType(t)!==le.undefined){const r=this._getOrReturnCtx(t);return oe(r,{code:te.invalid_type,expected:le.undefined,received:r.parsedType}),ge}return bt(t.data)}}Zs.create=e=>new Zs({typeName:he.ZodUndefined,..._e(e)});class Ks extends Se{_parse(t){if(this._getType(t)!==le.null){const r=this._getOrReturnCtx(t);return oe(r,{code:te.invalid_type,expected:le.null,received:r.parsedType}),ge}return bt(t.data)}}Ks.create=e=>new Ks({typeName:he.ZodNull,..._e(e)});class Io extends Se{constructor(){super(...arguments),this._any=!0}_parse(t){return bt(t.data)}}Io.create=e=>new Io({typeName:he.ZodAny,..._e(e)});class gi extends Se{constructor(){super(...arguments),this._unknown=!0}_parse(t){return bt(t.data)}}gi.create=e=>new gi({typeName:he.ZodUnknown,..._e(e)});class rr extends Se{_parse(t){const n=this._getOrReturnCtx(t);return oe(n,{code:te.invalid_type,expected:le.never,received:n.parsedType}),ge}}rr.create=e=>new rr({typeName:he.ZodNever,..._e(e)});class eu extends Se{_parse(t){if(this._getType(t)!==le.undefined){const r=this._getOrReturnCtx(t);return oe(r,{code:te.invalid_type,expected:le.void,received:r.parsedType}),ge}return bt(t.data)}}eu.create=e=>new eu({typeName:he.ZodVoid,..._e(e)});class mn extends Se{_parse(t){const{ctx:n,status:r}=this._processInputParams(t),i=this._def;if(n.parsedType!==le.array)return oe(n,{code:te.invalid_type,expected:le.array,received:n.parsedType}),ge;if(i.exactLength!==null){const s=n.data.length>i.exactLength.value,a=n.data.length<i.exactLength.value;(s||a)&&(oe(n,{code:s?te.too_big:te.too_small,minimum:a?i.exactLength.value:void 0,maximum:s?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),r.dirty())}if(i.minLength!==null&&n.data.length<i.minLength.value&&(oe(n,{code:te.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),r.dirty()),i.maxLength!==null&&n.data.length>i.maxLength.value&&(oe(n,{code:te.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((s,a)=>i.type._parseAsync(new Rn(n,s,n.path,a)))).then(s=>vt.mergeArray(r,s));const o=[...n.data].map((s,a)=>i.type._parseSync(new Rn(n,s,n.path,a)));return vt.mergeArray(r,o)}get element(){return this._def.type}min(t,n){return new mn({...this._def,minLength:{value:t,message:pe.toString(n)}})}max(t,n){return new mn({...this._def,maxLength:{value:t,message:pe.toString(n)}})}length(t,n){return new mn({...this._def,exactLength:{value:t,message:pe.toString(n)}})}nonempty(t){return this.min(1,t)}}mn.create=(e,t)=>new mn({type:e,minLength:null,maxLength:null,exactLength:null,typeName:he.ZodArray,..._e(t)});function zi(e){if(e instanceof qe){const t={};for(const n in e.shape){const r=e.shape[n];t[n]=Pn.create(zi(r))}return new qe({...e._def,shape:()=>t})}else return e instanceof mn?new mn({...e._def,type:zi(e.element)}):e instanceof Pn?Pn.create(zi(e.unwrap())):e instanceof Wr?Wr.create(zi(e.unwrap())):e instanceof Nn?Nn.create(e.items.map(t=>zi(t))):e}class qe extends Se{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=Pe.objectKeys(t);return this._cached={shape:t,keys:n}}_parse(t){if(this._getType(t)!==le.object){const u=this._getOrReturnCtx(t);return oe(u,{code:te.invalid_type,expected:le.object,received:u.parsedType}),ge}const{status:r,ctx:i}=this._processInputParams(t),{shape:o,keys:s}=this._getCached(),a=[];if(!(this._def.catchall instanceof rr&&this._def.unknownKeys==="strip"))for(const u in i.data)s.includes(u)||a.push(u);const l=[];for(const u of s){const c=o[u],m=i.data[u];l.push({key:{status:"valid",value:u},value:c._parse(new Rn(i,m,i.path,u)),alwaysSet:u in i.data})}if(this._def.catchall instanceof rr){const u=this._def.unknownKeys;if(u==="passthrough")for(const c of a)l.push({key:{status:"valid",value:c},value:{status:"valid",value:i.data[c]}});else if(u==="strict")a.length>0&&(oe(i,{code:te.unrecognized_keys,keys:a}),r.dirty());else if(u!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const u=this._def.catchall;for(const c of a){const m=i.data[c];l.push({key:{status:"valid",value:c},value:u._parse(new Rn(i,m,i.path,c)),alwaysSet:c in i.data})}}return i.common.async?Promise.resolve().then(async()=>{const u=[];for(const c of l){const m=await c.key,d=await c.value;u.push({key:m,value:d,alwaysSet:c.alwaysSet})}return u}).then(u=>vt.mergeObjectSync(r,u)):vt.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(t){return pe.errToObj,new qe({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,r)=>{var i,o,s,a;const l=(s=(o=(i=this._def).errorMap)===null||o===void 0?void 0:o.call(i,n,r).message)!==null&&s!==void 0?s:r.defaultError;return n.code==="unrecognized_keys"?{message:(a=pe.errToObj(t).message)!==null&&a!==void 0?a:l}:{message:l}}}:{}})}strip(){return new qe({...this._def,unknownKeys:"strip"})}passthrough(){return new qe({...this._def,unknownKeys:"passthrough"})}extend(t){return new qe({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new qe({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:he.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new qe({...this._def,catchall:t})}pick(t){const n={};return Pe.objectKeys(t).forEach(r=>{t[r]&&this.shape[r]&&(n[r]=this.shape[r])}),new qe({...this._def,shape:()=>n})}omit(t){const n={};return Pe.objectKeys(this.shape).forEach(r=>{t[r]||(n[r]=this.shape[r])}),new qe({...this._def,shape:()=>n})}deepPartial(){return zi(this)}partial(t){const n={};return Pe.objectKeys(this.shape).forEach(r=>{const i=this.shape[r];t&&!t[r]?n[r]=i:n[r]=i.optional()}),new qe({...this._def,shape:()=>n})}required(t){const n={};return Pe.objectKeys(this.shape).forEach(r=>{if(t&&!t[r])n[r]=this.shape[r];else{let o=this.shape[r];for(;o instanceof Pn;)o=o._def.innerType;n[r]=o}}),new qe({...this._def,shape:()=>n})}keyof(){return J1(Pe.objectKeys(this.shape))}}qe.create=(e,t)=>new qe({shape:()=>e,unknownKeys:"strip",catchall:rr.create(),typeName:he.ZodObject,..._e(t)});qe.strictCreate=(e,t)=>new qe({shape:()=>e,unknownKeys:"strict",catchall:rr.create(),typeName:he.ZodObject,..._e(t)});qe.lazycreate=(e,t)=>new qe({shape:e,unknownKeys:"strip",catchall:rr.create(),typeName:he.ZodObject,..._e(t)});class Qs extends Se{_parse(t){const{ctx:n}=this._processInputParams(t),r=this._def.options;function i(o){for(const a of o)if(a.result.status==="valid")return a.result;for(const a of o)if(a.result.status==="dirty")return n.common.issues.push(...a.ctx.common.issues),a.result;const s=o.map(a=>new zt(a.ctx.common.issues));return oe(n,{code:te.invalid_union,unionErrors:s}),ge}if(n.common.async)return Promise.all(r.map(async o=>{const s={...n,common:{...n.common,issues:[]},parent:null};return{result:await o._parseAsync({data:n.data,path:n.path,parent:s}),ctx:s}})).then(i);{let o;const s=[];for(const l of r){const u={...n,common:{...n.common,issues:[]},parent:null},c=l._parseSync({data:n.data,path:n.path,parent:u});if(c.status==="valid")return c;c.status==="dirty"&&!o&&(o={result:c,ctx:u}),u.common.issues.length&&s.push(u.common.issues)}if(o)return n.common.issues.push(...o.ctx.common.issues),o.result;const a=s.map(l=>new zt(l));return oe(n,{code:te.invalid_union,unionErrors:a}),ge}}get options(){return this._def.options}}Qs.create=(e,t)=>new Qs({options:e,typeName:he.ZodUnion,..._e(t)});const $n=e=>e instanceof Js?$n(e.schema):e instanceof gn?$n(e.innerType()):e instanceof ea?[e.value]:e instanceof Ur?e.options:e instanceof ta?Pe.objectValues(e.enum):e instanceof na?$n(e._def.innerType):e instanceof Zs?[void 0]:e instanceof Ks?[null]:e instanceof Pn?[void 0,...$n(e.unwrap())]:e instanceof Wr?[null,...$n(e.unwrap())]:e instanceof tm||e instanceof ia?$n(e.unwrap()):e instanceof ra?$n(e._def.innerType):[];class Vu extends Se{_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==le.object)return oe(n,{code:te.invalid_type,expected:le.object,received:n.parsedType}),ge;const r=this.discriminator,i=n.data[r],o=this.optionsMap.get(i);return o?n.common.async?o._parseAsync({data:n.data,path:n.path,parent:n}):o._parseSync({data:n.data,path:n.path,parent:n}):(oe(n,{code:te.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),ge)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,r){const i=new Map;for(const o of n){const s=$n(o.shape[t]);if(!s.length)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const a of s){if(i.has(a))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(a)}`);i.set(a,o)}}return new Vu({typeName:he.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:i,..._e(r)})}}function tp(e,t){const n=_r(e),r=_r(t);if(e===t)return{valid:!0,data:e};if(n===le.object&&r===le.object){const i=Pe.objectKeys(t),o=Pe.objectKeys(e).filter(a=>i.indexOf(a)!==-1),s={...e,...t};for(const a of o){const l=tp(e[a],t[a]);if(!l.valid)return{valid:!1};s[a]=l.data}return{valid:!0,data:s}}else if(n===le.array&&r===le.array){if(e.length!==t.length)return{valid:!1};const i=[];for(let o=0;o<e.length;o++){const s=e[o],a=t[o],l=tp(s,a);if(!l.valid)return{valid:!1};i.push(l.data)}return{valid:!0,data:i}}else return n===le.date&&r===le.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class Xs extends Se{_parse(t){const{status:n,ctx:r}=this._processInputParams(t),i=(o,s)=>{if(Jd(o)||Jd(s))return ge;const a=tp(o.value,s.value);return a.valid?((ep(o)||ep(s))&&n.dirty(),{status:n.value,value:a.data}):(oe(r,{code:te.invalid_intersection_types}),ge)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([o,s])=>i(o,s)):i(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}Xs.create=(e,t,n)=>new Xs({left:e,right:t,typeName:he.ZodIntersection,..._e(n)});class Nn extends Se{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==le.array)return oe(r,{code:te.invalid_type,expected:le.array,received:r.parsedType}),ge;if(r.data.length<this._def.items.length)return oe(r,{code:te.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),ge;!this._def.rest&&r.data.length>this._def.items.length&&(oe(r,{code:te.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const o=[...r.data].map((s,a)=>{const l=this._def.items[a]||this._def.rest;return l?l._parse(new Rn(r,s,r.path,a)):null}).filter(s=>!!s);return r.common.async?Promise.all(o).then(s=>vt.mergeArray(n,s)):vt.mergeArray(n,o)}get items(){return this._def.items}rest(t){return new Nn({...this._def,rest:t})}}Nn.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Nn({items:e,typeName:he.ZodTuple,rest:null,..._e(t)})};class Ys extends Se{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==le.object)return oe(r,{code:te.invalid_type,expected:le.object,received:r.parsedType}),ge;const i=[],o=this._def.keyType,s=this._def.valueType;for(const a in r.data)i.push({key:o._parse(new Rn(r,a,r.path,a)),value:s._parse(new Rn(r,r.data[a],r.path,a)),alwaysSet:a in r.data});return r.common.async?vt.mergeObjectAsync(n,i):vt.mergeObjectSync(n,i)}get element(){return this._def.valueType}static create(t,n,r){return n instanceof Se?new Ys({keyType:t,valueType:n,typeName:he.ZodRecord,..._e(r)}):new Ys({keyType:dn.create(),valueType:t,typeName:he.ZodRecord,..._e(n)})}}class tu extends Se{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==le.map)return oe(r,{code:te.invalid_type,expected:le.map,received:r.parsedType}),ge;const i=this._def.keyType,o=this._def.valueType,s=[...r.data.entries()].map(([a,l],u)=>({key:i._parse(new Rn(r,a,r.path,[u,"key"])),value:o._parse(new Rn(r,l,r.path,[u,"value"]))}));if(r.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const l of s){const u=await l.key,c=await l.value;if(u.status==="aborted"||c.status==="aborted")return ge;(u.status==="dirty"||c.status==="dirty")&&n.dirty(),a.set(u.value,c.value)}return{status:n.value,value:a}})}else{const a=new Map;for(const l of s){const u=l.key,c=l.value;if(u.status==="aborted"||c.status==="aborted")return ge;(u.status==="dirty"||c.status==="dirty")&&n.dirty(),a.set(u.value,c.value)}return{status:n.value,value:a}}}}tu.create=(e,t,n)=>new tu({valueType:t,keyType:e,typeName:he.ZodMap,..._e(n)});class Ai extends Se{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==le.set)return oe(r,{code:te.invalid_type,expected:le.set,received:r.parsedType}),ge;const i=this._def;i.minSize!==null&&r.data.size<i.minSize.value&&(oe(r,{code:te.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),n.dirty()),i.maxSize!==null&&r.data.size>i.maxSize.value&&(oe(r,{code:te.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),n.dirty());const o=this._def.valueType;function s(l){const u=new Set;for(const c of l){if(c.status==="aborted")return ge;c.status==="dirty"&&n.dirty(),u.add(c.value)}return{status:n.value,value:u}}const a=[...r.data.values()].map((l,u)=>o._parse(new Rn(r,l,r.path,u)));return r.common.async?Promise.all(a).then(l=>s(l)):s(a)}min(t,n){return new Ai({...this._def,minSize:{value:t,message:pe.toString(n)}})}max(t,n){return new Ai({...this._def,maxSize:{value:t,message:pe.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}Ai.create=(e,t)=>new Ai({valueType:e,minSize:null,maxSize:null,typeName:he.ZodSet,..._e(t)});class lo extends Se{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==le.function)return oe(n,{code:te.invalid_type,expected:le.function,received:n.parsedType}),ge;function r(a,l){return Xl({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Ql(),Fo].filter(u=>!!u),issueData:{code:te.invalid_arguments,argumentsError:l}})}function i(a,l){return Xl({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Ql(),Fo].filter(u=>!!u),issueData:{code:te.invalid_return_type,returnTypeError:l}})}const o={errorMap:n.common.contextualErrorMap},s=n.data;if(this._def.returns instanceof Po){const a=this;return bt(async function(...l){const u=new zt([]),c=await a._def.args.parseAsync(l,o).catch(p=>{throw u.addIssue(r(l,p)),u}),m=await Reflect.apply(s,this,c);return await a._def.returns._def.type.parseAsync(m,o).catch(p=>{throw u.addIssue(i(m,p)),u})})}else{const a=this;return bt(function(...l){const u=a._def.args.safeParse(l,o);if(!u.success)throw new zt([r(l,u.error)]);const c=Reflect.apply(s,this,u.data),m=a._def.returns.safeParse(c,o);if(!m.success)throw new zt([i(c,m.error)]);return m.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new lo({...this._def,args:Nn.create(t).rest(gi.create())})}returns(t){return new lo({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,n,r){return new lo({args:t||Nn.create([]).rest(gi.create()),returns:n||gi.create(),typeName:he.ZodFunction,..._e(r)})}}class Js extends Se{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}Js.create=(e,t)=>new Js({getter:e,typeName:he.ZodLazy,..._e(t)});class ea extends Se{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return oe(n,{received:n.data,code:te.invalid_literal,expected:this._def.value}),ge}return{status:"valid",value:t.data}}get value(){return this._def.value}}ea.create=(e,t)=>new ea({value:e,typeName:he.ZodLiteral,..._e(t)});function J1(e,t){return new Ur({values:e,typeName:he.ZodEnum,..._e(t)})}class Ur extends Se{constructor(){super(...arguments),ls.set(this,void 0)}_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),r=this._def.values;return oe(n,{expected:Pe.joinValues(r),received:n.parsedType,code:te.invalid_type}),ge}if(Yl(this,ls)||K1(this,ls,new Set(this._def.values)),!Yl(this,ls).has(t.data)){const n=this._getOrReturnCtx(t),r=this._def.values;return oe(n,{received:n.data,code:te.invalid_enum_value,options:r}),ge}return bt(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t,n=this._def){return Ur.create(t,{...this._def,...n})}exclude(t,n=this._def){return Ur.create(this.options.filter(r=>!t.includes(r)),{...this._def,...n})}}ls=new WeakMap;Ur.create=J1;class ta extends Se{constructor(){super(...arguments),us.set(this,void 0)}_parse(t){const n=Pe.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(t);if(r.parsedType!==le.string&&r.parsedType!==le.number){const i=Pe.objectValues(n);return oe(r,{expected:Pe.joinValues(i),received:r.parsedType,code:te.invalid_type}),ge}if(Yl(this,us)||K1(this,us,new Set(Pe.getValidEnumValues(this._def.values))),!Yl(this,us).has(t.data)){const i=Pe.objectValues(n);return oe(r,{received:r.data,code:te.invalid_enum_value,options:i}),ge}return bt(t.data)}get enum(){return this._def.values}}us=new WeakMap;ta.create=(e,t)=>new ta({values:e,typeName:he.ZodNativeEnum,..._e(t)});class Po extends Se{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==le.promise&&n.common.async===!1)return oe(n,{code:te.invalid_type,expected:le.promise,received:n.parsedType}),ge;const r=n.parsedType===le.promise?n.data:Promise.resolve(n.data);return bt(r.then(i=>this._def.type.parseAsync(i,{path:n.path,errorMap:n.common.contextualErrorMap})))}}Po.create=(e,t)=>new Po({type:e,typeName:he.ZodPromise,..._e(t)});class gn extends Se{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===he.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:r}=this._processInputParams(t),i=this._def.effect||null,o={addIssue:s=>{oe(r,s),s.fatal?n.abort():n.dirty()},get path(){return r.path}};if(o.addIssue=o.addIssue.bind(o),i.type==="preprocess"){const s=i.transform(r.data,o);if(r.common.async)return Promise.resolve(s).then(async a=>{if(n.value==="aborted")return ge;const l=await this._def.schema._parseAsync({data:a,path:r.path,parent:r});return l.status==="aborted"?ge:l.status==="dirty"||n.value==="dirty"?eo(l.value):l});{if(n.value==="aborted")return ge;const a=this._def.schema._parseSync({data:s,path:r.path,parent:r});return a.status==="aborted"?ge:a.status==="dirty"||n.value==="dirty"?eo(a.value):a}}if(i.type==="refinement"){const s=a=>{const l=i.refinement(a,o);if(r.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(r.common.async===!1){const a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?ge:(a.status==="dirty"&&n.dirty(),s(a.value),{status:n.value,value:a.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>a.status==="aborted"?ge:(a.status==="dirty"&&n.dirty(),s(a.value).then(()=>({status:n.value,value:a.value}))))}if(i.type==="transform")if(r.common.async===!1){const s=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!qs(s))return s;const a=i.transform(s.value,o);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:a}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(s=>qs(s)?Promise.resolve(i.transform(s.value,o)).then(a=>({status:n.value,value:a})):s);Pe.assertNever(i)}}gn.create=(e,t,n)=>new gn({schema:e,typeName:he.ZodEffects,effect:t,..._e(n)});gn.createWithPreprocess=(e,t,n)=>new gn({schema:t,effect:{type:"preprocess",transform:e},typeName:he.ZodEffects,..._e(n)});class Pn extends Se{_parse(t){return this._getType(t)===le.undefined?bt(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}Pn.create=(e,t)=>new Pn({innerType:e,typeName:he.ZodOptional,..._e(t)});class Wr extends Se{_parse(t){return this._getType(t)===le.null?bt(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}Wr.create=(e,t)=>new Wr({innerType:e,typeName:he.ZodNullable,..._e(t)});class na extends Se{_parse(t){const{ctx:n}=this._processInputParams(t);let r=n.data;return n.parsedType===le.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}na.create=(e,t)=>new na({innerType:e,typeName:he.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,..._e(t)});class ra extends Se{_parse(t){const{ctx:n}=this._processInputParams(t),r={...n,common:{...n.common,issues:[]}},i=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return Hs(i)?i.then(o=>({status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new zt(r.common.issues)},input:r.data})})):{status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new zt(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}ra.create=(e,t)=>new ra({innerType:e,typeName:he.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,..._e(t)});class nu extends Se{_parse(t){if(this._getType(t)!==le.nan){const r=this._getOrReturnCtx(t);return oe(r,{code:te.invalid_type,expected:le.nan,received:r.parsedType}),ge}return{status:"valid",value:t.data}}}nu.create=e=>new nu({typeName:he.ZodNaN,..._e(e)});const Q3=Symbol("zod_brand");class tm extends Se{_parse(t){const{ctx:n}=this._processInputParams(t),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}}class ga extends Se{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.common.async)return(async()=>{const o=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return o.status==="aborted"?ge:o.status==="dirty"?(n.dirty(),eo(o.value)):this._def.out._parseAsync({data:o.value,path:r.path,parent:r})})();{const i=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?ge:i.status==="dirty"?(n.dirty(),{status:"dirty",value:i.value}):this._def.out._parseSync({data:i.value,path:r.path,parent:r})}}static create(t,n){return new ga({in:t,out:n,typeName:he.ZodPipeline})}}class ia extends Se{_parse(t){const n=this._def.innerType._parse(t),r=i=>(qs(i)&&(i.value=Object.freeze(i.value)),i);return Hs(n)?n.then(i=>r(i)):r(n)}unwrap(){return this._def.innerType}}ia.create=(e,t)=>new ia({innerType:e,typeName:he.ZodReadonly,..._e(t)});function e2(e,t={},n){return e?Io.create().superRefine((r,i)=>{var o,s;if(!e(r)){const a=typeof t=="function"?t(r):typeof t=="string"?{message:t}:t,l=(s=(o=a.fatal)!==null&&o!==void 0?o:n)!==null&&s!==void 0?s:!0,u=typeof a=="string"?{message:a}:a;i.addIssue({code:"custom",...u,fatal:l})}}):Io.create()}const X3={object:qe.lazycreate};var he;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"})(he||(he={}));const Y3=(e,t={message:`Input not instance of ${e.name}`})=>e2(n=>n instanceof e,t),t2=dn.create,n2=zr.create,J3=nu.create,eA=$r.create,r2=Gs.create,tA=Ci.create,nA=Jl.create,rA=Zs.create,iA=Ks.create,oA=Io.create,sA=gi.create,aA=rr.create,lA=eu.create,uA=mn.create,cA=qe.create,dA=qe.strictCreate,pA=Qs.create,fA=Vu.create,mA=Xs.create,hA=Nn.create,gA=Ys.create,vA=tu.create,yA=Ai.create,xA=lo.create,EA=Js.create,_A=ea.create,wA=Ur.create,bA=ta.create,CA=Po.create,Eg=gn.create,AA=Pn.create,SA=Wr.create,DA=gn.createWithPreprocess,kA=ga.create,FA=()=>t2().optional(),IA=()=>n2().optional(),PA=()=>r2().optional(),BA={string:e=>dn.create({...e,coerce:!0}),number:e=>zr.create({...e,coerce:!0}),boolean:e=>Gs.create({...e,coerce:!0}),bigint:e=>$r.create({...e,coerce:!0}),date:e=>Ci.create({...e,coerce:!0})},RA=ge;var Ye=Object.freeze({__proto__:null,defaultErrorMap:Fo,setErrorMap:R3,getErrorMap:Ql,makeIssue:Xl,EMPTY_PATH:N3,addIssueToContext:oe,ParseStatus:vt,INVALID:ge,DIRTY:eo,OK:bt,isAborted:Jd,isDirty:ep,isValid:qs,isAsync:Hs,get util(){return Pe},get objectUtil(){return Yd},ZodParsedType:le,getParsedType:_r,ZodType:Se,datetimeRegex:Y1,ZodString:dn,ZodNumber:zr,ZodBigInt:$r,ZodBoolean:Gs,ZodDate:Ci,ZodSymbol:Jl,ZodUndefined:Zs,ZodNull:Ks,ZodAny:Io,ZodUnknown:gi,ZodNever:rr,ZodVoid:eu,ZodArray:mn,ZodObject:qe,ZodUnion:Qs,ZodDiscriminatedUnion:Vu,ZodIntersection:Xs,ZodTuple:Nn,ZodRecord:Ys,ZodMap:tu,ZodSet:Ai,ZodFunction:lo,ZodLazy:Js,ZodLiteral:ea,ZodEnum:Ur,ZodNativeEnum:ta,ZodPromise:Po,ZodEffects:gn,ZodTransformer:gn,ZodOptional:Pn,ZodNullable:Wr,ZodDefault:na,ZodCatch:ra,ZodNaN:nu,BRAND:Q3,ZodBranded:tm,ZodPipeline:ga,ZodReadonly:ia,custom:e2,Schema:Se,ZodSchema:Se,late:X3,get ZodFirstPartyTypeKind(){return he},coerce:BA,any:oA,array:uA,bigint:eA,boolean:r2,date:tA,discriminatedUnion:fA,effect:Eg,enum:wA,function:xA,instanceof:Y3,intersection:mA,lazy:EA,literal:_A,map:vA,nan:J3,nativeEnum:bA,never:aA,null:iA,nullable:SA,number:n2,object:cA,oboolean:PA,onumber:IA,optional:AA,ostring:FA,pipeline:kA,preprocess:DA,promise:CA,record:gA,set:yA,strictObject:dA,string:t2,symbol:nA,transformer:Eg,tuple:hA,undefined:rA,union:pA,unknown:sA,void:lA,NEVER:RA,ZodIssueCode:te,quotelessJson:B3,ZodError:zt});Ye.object({id:Ye.string(),name:Ye.string(),description:Ye.string(),icon:Ye.string(),labels:Ye.array(Ye.string()),template:Ye.string(),longDescription:Ye.string().optional()});const NA=Ye.object({group:Ye.string().regex(/^[a-z][a-z0-9]*(\.[a-z][a-z0-9]*)*$/,"Must be a valid Java package name (e.g., myproject or org.example.project)"),artifact:Ye.string().regex(/^[a-z]([a-z]|[0-9])+((\.|-)[a-z]([a-z]|[0-9])*)*$/,"Must follow pattern: my-service or my.service"),version:Ye.string(),platform:Ye.enum(["Quarkus","SpringBoot"]),target:Ye.enum(["Aletyx","Apache KIE"]),targetVersion:Ye.string(),bomGroupId:Ye.string(),bomArtifactId:Ye.string(),mavenAccessToken:Ye.string().optional(),useCaseId:Ye.string().optional(),platformVersion:Ye.string().optional()});var TA="Label",i2=S.forwardRef((e,t)=>w.jsx(ke.label,{...e,ref:t,onMouseDown:n=>{var i;n.target.closest("button, input, select, textarea")||((i=e.onMouseDown)==null||i.call(e,n),!n.defaultPrevented&&n.detail>1&&n.preventDefault())}}));i2.displayName=TA;var o2=i2;const MA=Ou("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),s2=S.forwardRef(({className:e,...t},n)=>w.jsx(o2,{ref:n,className:De(MA(),e),...t}));s2.displayName=o2.displayName;const OA=d3,a2=S.createContext({}),ni=({...e})=>w.jsx(a2.Provider,{value:{name:e.name},children:w.jsx(h3,{...e})}),zu=()=>{const e=S.useContext(a2),t=S.useContext(l2),{getFieldState:n,formState:r}=ju(),i=n(e.name,r);if(!e)throw new Error("useFormField should be used within <FormField>");const{id:o}=t;return{id:o,name:e.name,formItemId:`${o}-form-item`,formDescriptionId:`${o}-form-item-description`,formMessageId:`${o}-form-item-message`,...i}},l2=S.createContext({}),dr=S.forwardRef(({className:e,...t},n)=>{const r=S.useId();return w.jsx(l2.Provider,{value:{id:r},children:w.jsx("div",{ref:n,className:De("space-y-2",e),...t})})});dr.displayName="FormItem";const pr=S.forwardRef(({className:e,...t},n)=>{const{error:r,formItemId:i}=zu();return w.jsx(s2,{ref:n,className:De(r&&"text-destructive",e),htmlFor:i,...t})});pr.displayName="FormLabel";const fr=S.forwardRef(({...e},t)=>{const{error:n,formItemId:r,formDescriptionId:i,formMessageId:o}=zu();return w.jsx(Vr,{ref:t,id:r,"aria-describedby":n?`${i} ${o}`:`${i}`,"aria-invalid":!!n,...e})});fr.displayName="FormControl";const LA=S.forwardRef(({className:e,...t},n)=>{const{formDescriptionId:r}=zu();return w.jsx("p",{ref:n,id:r,className:De("text-sm text-muted-foreground",e),...t})});LA.displayName="FormDescription";const mr=S.forwardRef(({className:e,children:t,...n},r)=>{const{error:i,formMessageId:o}=zu(),s=i?String(i==null?void 0:i.message):t;return s?w.jsx("p",{ref:r,id:o,className:De("text-sm font-medium text-destructive",e),...n,children:s}):null});mr.displayName="FormMessage";const cs=S.forwardRef(({className:e,type:t,...n},r)=>w.jsx("input",{type:t,className:De("flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:r,...n}));cs.displayName="Input";function _g(e,[t,n]){return Math.min(n,Math.max(t,e))}var jA=S.createContext(void 0);function nm(e){const t=S.useContext(jA);return e||t||"ltr"}var Rc=0;function u2(){S.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??wg()),document.body.insertAdjacentElement("beforeend",e[1]??wg()),Rc++,()=>{Rc===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),Rc--}},[])}function wg(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var Nc="focusScope.autoFocusOnMount",Tc="focusScope.autoFocusOnUnmount",bg={bubbles:!1,cancelable:!0},VA="FocusScope",rm=S.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:i,onUnmountAutoFocus:o,...s}=e,[a,l]=S.useState(null),u=Tt(i),c=Tt(o),m=S.useRef(null),d=Oe(t,h=>l(h)),p=S.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;S.useEffect(()=>{if(r){let h=function(x){if(p.paused||!a)return;const E=x.target;a.contains(E)?m.current=E:hr(m.current,{select:!0})},y=function(x){if(p.paused||!a)return;const E=x.relatedTarget;E!==null&&(a.contains(E)||hr(m.current,{select:!0}))},v=function(x){if(document.activeElement===document.body)for(const _ of x)_.removedNodes.length>0&&hr(a)};document.addEventListener("focusin",h),document.addEventListener("focusout",y);const g=new MutationObserver(v);return a&&g.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",h),document.removeEventListener("focusout",y),g.disconnect()}}},[r,a,p.paused]),S.useEffect(()=>{if(a){Ag.add(p);const h=document.activeElement;if(!a.contains(h)){const v=new CustomEvent(Nc,bg);a.addEventListener(Nc,u),a.dispatchEvent(v),v.defaultPrevented||(zA(HA(c2(a)),{select:!0}),document.activeElement===h&&hr(a))}return()=>{a.removeEventListener(Nc,u),setTimeout(()=>{const v=new CustomEvent(Tc,bg);a.addEventListener(Tc,c),a.dispatchEvent(v),v.defaultPrevented||hr(h??document.body,{select:!0}),a.removeEventListener(Tc,c),Ag.remove(p)},0)}}},[a,u,c,p]);const f=S.useCallback(h=>{if(!n&&!r||p.paused)return;const y=h.key==="Tab"&&!h.altKey&&!h.ctrlKey&&!h.metaKey,v=document.activeElement;if(y&&v){const g=h.currentTarget,[x,E]=$A(g);x&&E?!h.shiftKey&&v===E?(h.preventDefault(),n&&hr(x,{select:!0})):h.shiftKey&&v===x&&(h.preventDefault(),n&&hr(E,{select:!0})):v===g&&h.preventDefault()}},[n,r,p.paused]);return w.jsx(ke.div,{tabIndex:-1,...s,ref:d,onKeyDown:f})});rm.displayName=VA;function zA(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(hr(r,{select:t}),document.activeElement!==n)return}function $A(e){const t=c2(e),n=Cg(t,e),r=Cg(t.reverse(),e);return[n,r]}function c2(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Cg(e,t){for(const n of e)if(!UA(n,{upTo:t}))return n}function UA(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function WA(e){return e instanceof HTMLInputElement&&"select"in e}function hr(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&WA(e)&&t&&e.select()}}var Ag=qA();function qA(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Sg(e,t),e.unshift(t)},remove(t){var n;e=Sg(e,t),(n=e[0])==null||n.resume()}}}function Sg(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function HA(e){return e.filter(t=>t.tagName!=="A")}var GA=Cv.useId||(()=>{}),ZA=0;function vi(e){const[t,n]=S.useState(GA());return gt(()=>{n(r=>r??String(ZA++))},[e]),t?`radix-${t}`:""}const KA=["top","right","bottom","left"],qr=Math.min,Lt=Math.max,ru=Math.round,qa=Math.floor,Bn=e=>({x:e,y:e}),QA={left:"right",right:"left",bottom:"top",top:"bottom"},XA={start:"end",end:"start"};function np(e,t,n){return Lt(e,qr(t,n))}function ir(e,t){return typeof e=="function"?e(t):e}function or(e){return e.split("-")[0]}function Lo(e){return e.split("-")[1]}function im(e){return e==="x"?"y":"x"}function om(e){return e==="y"?"height":"width"}function Hr(e){return["top","bottom"].includes(or(e))?"y":"x"}function sm(e){return im(Hr(e))}function YA(e,t,n){n===void 0&&(n=!1);const r=Lo(e),i=sm(e),o=om(i);let s=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(s=iu(s)),[s,iu(s)]}function JA(e){const t=iu(e);return[rp(e),t,rp(t)]}function rp(e){return e.replace(/start|end/g,t=>XA[t])}function eS(e,t,n){const r=["left","right"],i=["right","left"],o=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?i:r:t?r:i;case"left":case"right":return t?o:s;default:return[]}}function tS(e,t,n,r){const i=Lo(e);let o=eS(or(e),n==="start",r);return i&&(o=o.map(s=>s+"-"+i),t&&(o=o.concat(o.map(rp)))),o}function iu(e){return e.replace(/left|right|bottom|top/g,t=>QA[t])}function nS(e){return{top:0,right:0,bottom:0,left:0,...e}}function d2(e){return typeof e!="number"?nS(e):{top:e,right:e,bottom:e,left:e}}function ou(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Dg(e,t,n){let{reference:r,floating:i}=e;const o=Hr(t),s=sm(t),a=om(s),l=or(t),u=o==="y",c=r.x+r.width/2-i.width/2,m=r.y+r.height/2-i.height/2,d=r[a]/2-i[a]/2;let p;switch(l){case"top":p={x:c,y:r.y-i.height};break;case"bottom":p={x:c,y:r.y+r.height};break;case"right":p={x:r.x+r.width,y:m};break;case"left":p={x:r.x-i.width,y:m};break;default:p={x:r.x,y:r.y}}switch(Lo(t)){case"start":p[s]-=d*(n&&u?-1:1);break;case"end":p[s]+=d*(n&&u?-1:1);break}return p}const rS=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:s}=n,a=o.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let u=await s.getElementRects({reference:e,floating:t,strategy:i}),{x:c,y:m}=Dg(u,r,l),d=r,p={},f=0;for(let h=0;h<a.length;h++){const{name:y,fn:v}=a[h],{x:g,y:x,data:E,reset:_}=await v({x:c,y:m,initialPlacement:r,placement:d,strategy:i,middlewareData:p,rects:u,platform:s,elements:{reference:e,floating:t}});c=g??c,m=x??m,p={...p,[y]:{...p[y],...E}},_&&f<=50&&(f++,typeof _=="object"&&(_.placement&&(d=_.placement),_.rects&&(u=_.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:i}):_.rects),{x:c,y:m}=Dg(u,d,l)),h=-1)}return{x:c,y:m,placement:d,strategy:i,middlewareData:p}};async function oa(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:o,rects:s,elements:a,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:m="floating",altBoundary:d=!1,padding:p=0}=ir(t,e),f=d2(p),y=a[d?m==="floating"?"reference":"floating":m],v=ou(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(y)))==null||n?y:y.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:u,rootBoundary:c,strategy:l})),g=m==="floating"?{x:r,y:i,width:s.floating.width,height:s.floating.height}:s.reference,x=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),E=await(o.isElement==null?void 0:o.isElement(x))?await(o.getScale==null?void 0:o.getScale(x))||{x:1,y:1}:{x:1,y:1},_=ou(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:g,offsetParent:x,strategy:l}):g);return{top:(v.top-_.top+f.top)/E.y,bottom:(_.bottom-v.bottom+f.bottom)/E.y,left:(v.left-_.left+f.left)/E.x,right:(_.right-v.right+f.right)/E.x}}const iS=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:i,rects:o,platform:s,elements:a,middlewareData:l}=t,{element:u,padding:c=0}=ir(e,t)||{};if(u==null)return{};const m=d2(c),d={x:n,y:r},p=sm(i),f=om(p),h=await s.getDimensions(u),y=p==="y",v=y?"top":"left",g=y?"bottom":"right",x=y?"clientHeight":"clientWidth",E=o.reference[f]+o.reference[p]-d[p]-o.floating[f],_=d[p]-o.reference[p],F=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let D=F?F[x]:0;(!D||!await(s.isElement==null?void 0:s.isElement(F)))&&(D=a.floating[x]||o.floating[f]);const P=E/2-_/2,N=D/2-h[f]/2-1,M=qr(m[v],N),G=qr(m[g],N),I=M,O=D-h[f]-G,C=D/2-h[f]/2+P,U=np(I,C,O),X=!l.arrow&&Lo(i)!=null&&C!==U&&o.reference[f]/2-(C<I?M:G)-h[f]/2<0,q=X?C<I?C-I:C-O:0;return{[p]:d[p]+q,data:{[p]:U,centerOffset:C-U-q,...X&&{alignmentOffset:q}},reset:X}}}),oS=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:i,middlewareData:o,rects:s,initialPlacement:a,platform:l,elements:u}=t,{mainAxis:c=!0,crossAxis:m=!0,fallbackPlacements:d,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:h=!0,...y}=ir(e,t);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const v=or(i),g=Hr(a),x=or(a)===a,E=await(l.isRTL==null?void 0:l.isRTL(u.floating)),_=d||(x||!h?[iu(a)]:JA(a)),F=f!=="none";!d&&F&&_.push(...tS(a,h,f,E));const D=[a,..._],P=await oa(t,y),N=[];let M=((r=o.flip)==null?void 0:r.overflows)||[];if(c&&N.push(P[v]),m){const C=YA(i,s,E);N.push(P[C[0]],P[C[1]])}if(M=[...M,{placement:i,overflows:N}],!N.every(C=>C<=0)){var G,I;const C=(((G=o.flip)==null?void 0:G.index)||0)+1,U=D[C];if(U)return{data:{index:C,overflows:M},reset:{placement:U}};let X=(I=M.filter(q=>q.overflows[0]<=0).sort((q,W)=>q.overflows[1]-W.overflows[1])[0])==null?void 0:I.placement;if(!X)switch(p){case"bestFit":{var O;const q=(O=M.filter(W=>{if(F){const V=Hr(W.placement);return V===g||V==="y"}return!0}).map(W=>[W.placement,W.overflows.filter(V=>V>0).reduce((V,Y)=>V+Y,0)]).sort((W,V)=>W[1]-V[1])[0])==null?void 0:O[0];q&&(X=q);break}case"initialPlacement":X=a;break}if(i!==X)return{reset:{placement:X}}}return{}}}};function kg(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Fg(e){return KA.some(t=>e[t]>=0)}const sS=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...i}=ir(e,t);switch(r){case"referenceHidden":{const o=await oa(t,{...i,elementContext:"reference"}),s=kg(o,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Fg(s)}}}case"escaped":{const o=await oa(t,{...i,altBoundary:!0}),s=kg(o,n.floating);return{data:{escapedOffsets:s,escaped:Fg(s)}}}default:return{}}}}};async function aS(e,t){const{placement:n,platform:r,elements:i}=e,o=await(r.isRTL==null?void 0:r.isRTL(i.floating)),s=or(n),a=Lo(n),l=Hr(n)==="y",u=["left","top"].includes(s)?-1:1,c=o&&l?-1:1,m=ir(t,e);let{mainAxis:d,crossAxis:p,alignmentAxis:f}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return a&&typeof f=="number"&&(p=a==="end"?f*-1:f),l?{x:p*c,y:d*u}:{x:d*u,y:p*c}}const lS=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:i,y:o,placement:s,middlewareData:a}=t,l=await aS(t,e);return s===((n=a.offset)==null?void 0:n.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:i+l.x,y:o+l.y,data:{...l,placement:s}}}}},uS=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:i}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:a={fn:y=>{let{x:v,y:g}=y;return{x:v,y:g}}},...l}=ir(e,t),u={x:n,y:r},c=await oa(t,l),m=Hr(or(i)),d=im(m);let p=u[d],f=u[m];if(o){const y=d==="y"?"top":"left",v=d==="y"?"bottom":"right",g=p+c[y],x=p-c[v];p=np(g,p,x)}if(s){const y=m==="y"?"top":"left",v=m==="y"?"bottom":"right",g=f+c[y],x=f-c[v];f=np(g,f,x)}const h=a.fn({...t,[d]:p,[m]:f});return{...h,data:{x:h.x-n,y:h.y-r,enabled:{[d]:o,[m]:s}}}}}},cS=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:i,rects:o,middlewareData:s}=t,{offset:a=0,mainAxis:l=!0,crossAxis:u=!0}=ir(e,t),c={x:n,y:r},m=Hr(i),d=im(m);let p=c[d],f=c[m];const h=ir(a,t),y=typeof h=="number"?{mainAxis:h,crossAxis:0}:{mainAxis:0,crossAxis:0,...h};if(l){const x=d==="y"?"height":"width",E=o.reference[d]-o.floating[x]+y.mainAxis,_=o.reference[d]+o.reference[x]-y.mainAxis;p<E?p=E:p>_&&(p=_)}if(u){var v,g;const x=d==="y"?"width":"height",E=["top","left"].includes(or(i)),_=o.reference[m]-o.floating[x]+(E&&((v=s.offset)==null?void 0:v[m])||0)+(E?0:y.crossAxis),F=o.reference[m]+o.reference[x]+(E?0:((g=s.offset)==null?void 0:g[m])||0)-(E?y.crossAxis:0);f<_?f=_:f>F&&(f=F)}return{[d]:p,[m]:f}}}},dS=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:i,rects:o,platform:s,elements:a}=t,{apply:l=()=>{},...u}=ir(e,t),c=await oa(t,u),m=or(i),d=Lo(i),p=Hr(i)==="y",{width:f,height:h}=o.floating;let y,v;m==="top"||m==="bottom"?(y=m,v=d===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(v=m,y=d==="end"?"top":"bottom");const g=h-c.top-c.bottom,x=f-c.left-c.right,E=qr(h-c[y],g),_=qr(f-c[v],x),F=!t.middlewareData.shift;let D=E,P=_;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(P=x),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(D=g),F&&!d){const M=Lt(c.left,0),G=Lt(c.right,0),I=Lt(c.top,0),O=Lt(c.bottom,0);p?P=f-2*(M!==0||G!==0?M+G:Lt(c.left,c.right)):D=h-2*(I!==0||O!==0?I+O:Lt(c.top,c.bottom))}await l({...t,availableWidth:P,availableHeight:D});const N=await s.getDimensions(a.floating);return f!==N.width||h!==N.height?{reset:{rects:!0}}:{}}}};function $u(){return typeof window<"u"}function jo(e){return p2(e)?(e.nodeName||"").toLowerCase():"#document"}function $t(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Mn(e){var t;return(t=(p2(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function p2(e){return $u()?e instanceof Node||e instanceof $t(e).Node:!1}function vn(e){return $u()?e instanceof Element||e instanceof $t(e).Element:!1}function Tn(e){return $u()?e instanceof HTMLElement||e instanceof $t(e).HTMLElement:!1}function Ig(e){return!$u()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof $t(e).ShadowRoot}function va(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=yn(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function pS(e){return["table","td","th"].includes(jo(e))}function Uu(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function am(e){const t=lm(),n=vn(e)?yn(e):e;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function fS(e){let t=Gr(e);for(;Tn(t)&&!Bo(t);){if(am(t))return t;if(Uu(t))return null;t=Gr(t)}return null}function lm(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Bo(e){return["html","body","#document"].includes(jo(e))}function yn(e){return $t(e).getComputedStyle(e)}function Wu(e){return vn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Gr(e){if(jo(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ig(e)&&e.host||Mn(e);return Ig(t)?t.host:t}function f2(e){const t=Gr(e);return Bo(t)?e.ownerDocument?e.ownerDocument.body:e.body:Tn(t)&&va(t)?t:f2(t)}function sa(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=f2(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),s=$t(i);if(o){const a=ip(s);return t.concat(s,s.visualViewport||[],va(i)?i:[],a&&n?sa(a):[])}return t.concat(i,sa(i,[],n))}function ip(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function m2(e){const t=yn(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Tn(e),o=i?e.offsetWidth:n,s=i?e.offsetHeight:r,a=ru(n)!==o||ru(r)!==s;return a&&(n=o,r=s),{width:n,height:r,$:a}}function um(e){return vn(e)?e:e.contextElement}function uo(e){const t=um(e);if(!Tn(t))return Bn(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=m2(t);let s=(o?ru(n.width):n.width)/r,a=(o?ru(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const mS=Bn(0);function h2(e){const t=$t(e);return!lm()||!t.visualViewport?mS:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function hS(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==$t(e)?!1:t}function Si(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=um(e);let s=Bn(1);t&&(r?vn(r)&&(s=uo(r)):s=uo(e));const a=hS(o,n,r)?h2(o):Bn(0);let l=(i.left+a.x)/s.x,u=(i.top+a.y)/s.y,c=i.width/s.x,m=i.height/s.y;if(o){const d=$t(o),p=r&&vn(r)?$t(r):r;let f=d,h=ip(f);for(;h&&r&&p!==f;){const y=uo(h),v=h.getBoundingClientRect(),g=yn(h),x=v.left+(h.clientLeft+parseFloat(g.paddingLeft))*y.x,E=v.top+(h.clientTop+parseFloat(g.paddingTop))*y.y;l*=y.x,u*=y.y,c*=y.x,m*=y.y,l+=x,u+=E,f=$t(h),h=ip(f)}}return ou({width:c,height:m,x:l,y:u})}function cm(e,t){const n=Wu(e).scrollLeft;return t?t.left+n:Si(Mn(e)).left+n}function g2(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=r.left+t.scrollLeft-(n?0:cm(e,r)),o=r.top+t.scrollTop;return{x:i,y:o}}function gS(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e;const o=i==="fixed",s=Mn(r),a=t?Uu(t.floating):!1;if(r===s||a&&o)return n;let l={scrollLeft:0,scrollTop:0},u=Bn(1);const c=Bn(0),m=Tn(r);if((m||!m&&!o)&&((jo(r)!=="body"||va(s))&&(l=Wu(r)),Tn(r))){const p=Si(r);u=uo(r),c.x=p.x+r.clientLeft,c.y=p.y+r.clientTop}const d=s&&!m&&!o?g2(s,l,!0):Bn(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-l.scrollLeft*u.x+c.x+d.x,y:n.y*u.y-l.scrollTop*u.y+c.y+d.y}}function vS(e){return Array.from(e.getClientRects())}function yS(e){const t=Mn(e),n=Wu(e),r=e.ownerDocument.body,i=Lt(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=Lt(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+cm(e);const a=-n.scrollTop;return yn(r).direction==="rtl"&&(s+=Lt(t.clientWidth,r.clientWidth)-i),{width:i,height:o,x:s,y:a}}function xS(e,t){const n=$t(e),r=Mn(e),i=n.visualViewport;let o=r.clientWidth,s=r.clientHeight,a=0,l=0;if(i){o=i.width,s=i.height;const u=lm();(!u||u&&t==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:o,height:s,x:a,y:l}}function ES(e,t){const n=Si(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,o=Tn(e)?uo(e):Bn(1),s=e.clientWidth*o.x,a=e.clientHeight*o.y,l=i*o.x,u=r*o.y;return{width:s,height:a,x:l,y:u}}function Pg(e,t,n){let r;if(t==="viewport")r=xS(e,n);else if(t==="document")r=yS(Mn(e));else if(vn(t))r=ES(t,n);else{const i=h2(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return ou(r)}function v2(e,t){const n=Gr(e);return n===t||!vn(n)||Bo(n)?!1:yn(n).position==="fixed"||v2(n,t)}function _S(e,t){const n=t.get(e);if(n)return n;let r=sa(e,[],!1).filter(a=>vn(a)&&jo(a)!=="body"),i=null;const o=yn(e).position==="fixed";let s=o?Gr(e):e;for(;vn(s)&&!Bo(s);){const a=yn(s),l=am(s);!l&&a.position==="fixed"&&(i=null),(o?!l&&!i:!l&&a.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||va(s)&&!l&&v2(e,s))?r=r.filter(c=>c!==s):i=a,s=Gr(s)}return t.set(e,r),r}function wS(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const s=[...n==="clippingAncestors"?Uu(t)?[]:_S(t,this._c):[].concat(n),r],a=s[0],l=s.reduce((u,c)=>{const m=Pg(t,c,i);return u.top=Lt(m.top,u.top),u.right=qr(m.right,u.right),u.bottom=qr(m.bottom,u.bottom),u.left=Lt(m.left,u.left),u},Pg(t,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function bS(e){const{width:t,height:n}=m2(e);return{width:t,height:n}}function CS(e,t,n){const r=Tn(t),i=Mn(t),o=n==="fixed",s=Si(e,!0,o,t);let a={scrollLeft:0,scrollTop:0};const l=Bn(0);if(r||!r&&!o)if((jo(t)!=="body"||va(i))&&(a=Wu(t)),r){const d=Si(t,!0,o,t);l.x=d.x+t.clientLeft,l.y=d.y+t.clientTop}else i&&(l.x=cm(i));const u=i&&!r&&!o?g2(i,a):Bn(0),c=s.left+a.scrollLeft-l.x-u.x,m=s.top+a.scrollTop-l.y-u.y;return{x:c,y:m,width:s.width,height:s.height}}function Mc(e){return yn(e).position==="static"}function Bg(e,t){if(!Tn(e)||yn(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return Mn(e)===n&&(n=n.ownerDocument.body),n}function y2(e,t){const n=$t(e);if(Uu(e))return n;if(!Tn(e)){let i=Gr(e);for(;i&&!Bo(i);){if(vn(i)&&!Mc(i))return i;i=Gr(i)}return n}let r=Bg(e,t);for(;r&&pS(r)&&Mc(r);)r=Bg(r,t);return r&&Bo(r)&&Mc(r)&&!am(r)?n:r||fS(e)||n}const AS=async function(e){const t=this.getOffsetParent||y2,n=this.getDimensions,r=await n(e.floating);return{reference:CS(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function SS(e){return yn(e).direction==="rtl"}const DS={convertOffsetParentRelativeRectToViewportRelativeRect:gS,getDocumentElement:Mn,getClippingRect:wS,getOffsetParent:y2,getElementRects:AS,getClientRects:vS,getDimensions:bS,getScale:uo,isElement:vn,isRTL:SS};function kS(e,t){let n=null,r;const i=Mn(e);function o(){var a;clearTimeout(r),(a=n)==null||a.disconnect(),n=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),o();const{left:u,top:c,width:m,height:d}=e.getBoundingClientRect();if(a||t(),!m||!d)return;const p=qa(c),f=qa(i.clientWidth-(u+m)),h=qa(i.clientHeight-(c+d)),y=qa(u),g={rootMargin:-p+"px "+-f+"px "+-h+"px "+-y+"px",threshold:Lt(0,qr(1,l))||1};let x=!0;function E(_){const F=_[0].intersectionRatio;if(F!==l){if(!x)return s();F?s(!1,F):r=setTimeout(()=>{s(!1,1e-7)},1e3)}x=!1}try{n=new IntersectionObserver(E,{...g,root:i.ownerDocument})}catch{n=new IntersectionObserver(E,g)}n.observe(e)}return s(!0),o}function FS(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,u=um(e),c=i||o?[...u?sa(u):[],...sa(t)]:[];c.forEach(v=>{i&&v.addEventListener("scroll",n,{passive:!0}),o&&v.addEventListener("resize",n)});const m=u&&a?kS(u,n):null;let d=-1,p=null;s&&(p=new ResizeObserver(v=>{let[g]=v;g&&g.target===u&&p&&(p.unobserve(t),cancelAnimationFrame(d),d=requestAnimationFrame(()=>{var x;(x=p)==null||x.observe(t)})),n()}),u&&!l&&p.observe(u),p.observe(t));let f,h=l?Si(e):null;l&&y();function y(){const v=Si(e);h&&(v.x!==h.x||v.y!==h.y||v.width!==h.width||v.height!==h.height)&&n(),h=v,f=requestAnimationFrame(y)}return n(),()=>{var v;c.forEach(g=>{i&&g.removeEventListener("scroll",n),o&&g.removeEventListener("resize",n)}),m==null||m(),(v=p)==null||v.disconnect(),p=null,l&&cancelAnimationFrame(f)}}const IS=lS,PS=uS,BS=oS,RS=dS,NS=sS,Rg=iS,TS=cS,MS=(e,t,n)=>{const r=new Map,i={platform:DS,...n},o={...i.platform,_c:r};return rS(e,t,{...i,platform:o})};var gl=typeof document<"u"?S.useLayoutEffect:S.useEffect;function su(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!su(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){const o=i[r];if(!(o==="_owner"&&e.$$typeof)&&!su(e[o],t[o]))return!1}return!0}return e!==e&&t!==t}function x2(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ng(e,t){const n=x2(e);return Math.round(t*n)/n}function Oc(e){const t=S.useRef(e);return gl(()=>{t.current=e}),t}function OS(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:i,elements:{reference:o,floating:s}={},transform:a=!0,whileElementsMounted:l,open:u}=e,[c,m]=S.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[d,p]=S.useState(r);su(d,r)||p(r);const[f,h]=S.useState(null),[y,v]=S.useState(null),g=S.useCallback(W=>{W!==F.current&&(F.current=W,h(W))},[]),x=S.useCallback(W=>{W!==D.current&&(D.current=W,v(W))},[]),E=o||f,_=s||y,F=S.useRef(null),D=S.useRef(null),P=S.useRef(c),N=l!=null,M=Oc(l),G=Oc(i),I=Oc(u),O=S.useCallback(()=>{if(!F.current||!D.current)return;const W={placement:t,strategy:n,middleware:d};G.current&&(W.platform=G.current),MS(F.current,D.current,W).then(V=>{const Y={...V,isPositioned:I.current!==!1};C.current&&!su(P.current,Y)&&(P.current=Y,Pi.flushSync(()=>{m(Y)}))})},[d,t,n,G,I]);gl(()=>{u===!1&&P.current.isPositioned&&(P.current.isPositioned=!1,m(W=>({...W,isPositioned:!1})))},[u]);const C=S.useRef(!1);gl(()=>(C.current=!0,()=>{C.current=!1}),[]),gl(()=>{if(E&&(F.current=E),_&&(D.current=_),E&&_){if(M.current)return M.current(E,_,O);O()}},[E,_,O,M,N]);const U=S.useMemo(()=>({reference:F,floating:D,setReference:g,setFloating:x}),[g,x]),X=S.useMemo(()=>({reference:E,floating:_}),[E,_]),q=S.useMemo(()=>{const W={position:n,left:0,top:0};if(!X.floating)return W;const V=Ng(X.floating,c.x),Y=Ng(X.floating,c.y);return a?{...W,transform:"translate("+V+"px, "+Y+"px)",...x2(X.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:V,top:Y}},[n,a,X.floating,c.x,c.y]);return S.useMemo(()=>({...c,update:O,refs:U,elements:X,floatingStyles:q}),[c,O,U,X,q])}const LS=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:i}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?Rg({element:r.current,padding:i}).fn(n):{}:r?Rg({element:r,padding:i}).fn(n):{}}}},jS=(e,t)=>({...IS(e),options:[e,t]}),VS=(e,t)=>({...PS(e),options:[e,t]}),zS=(e,t)=>({...TS(e),options:[e,t]}),$S=(e,t)=>({...BS(e),options:[e,t]}),US=(e,t)=>({...RS(e),options:[e,t]}),WS=(e,t)=>({...NS(e),options:[e,t]}),qS=(e,t)=>({...LS(e),options:[e,t]});var HS="Arrow",E2=S.forwardRef((e,t)=>{const{children:n,width:r=10,height:i=5,...o}=e;return w.jsx(ke.svg,{...o,ref:t,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:w.jsx("polygon",{points:"0,0 30,0 15,10"})})});E2.displayName=HS;var GS=E2;function ZS(e,t=[]){let n=[];function r(o,s){const a=S.createContext(s),l=n.length;n=[...n,s];function u(m){const{scope:d,children:p,...f}=m,h=(d==null?void 0:d[e][l])||a,y=S.useMemo(()=>f,Object.values(f));return w.jsx(h.Provider,{value:y,children:p})}function c(m,d){const p=(d==null?void 0:d[e][l])||a,f=S.useContext(p);if(f)return f;if(s!==void 0)return s;throw new Error(`\`${m}\` must be used within \`${o}\``)}return u.displayName=o+"Provider",[u,c]}const i=()=>{const o=n.map(s=>S.createContext(s));return function(a){const l=(a==null?void 0:a[e])||o;return S.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return i.scopeName=e,[r,KS(i,...t)]}function KS(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const s=r.reduce((a,{useScope:l,scopeName:u})=>{const m=l(o)[`__scope${u}`];return{...a,...m}},{});return S.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function dm(e){const[t,n]=S.useState(void 0);return gt(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const o=i[0];let s,a;if("borderBoxSize"in o){const l=o.borderBoxSize,u=Array.isArray(l)?l[0]:l;s=u.inlineSize,a=u.blockSize}else s=e.offsetWidth,a=e.offsetHeight;n({width:s,height:a})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var pm="Popper",[_2,w2]=ZS(pm),[QS,b2]=_2(pm),C2=e=>{const{__scopePopper:t,children:n}=e,[r,i]=S.useState(null);return w.jsx(QS,{scope:t,anchor:r,onAnchorChange:i,children:n})};C2.displayName=pm;var A2="PopperAnchor",S2=S.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...i}=e,o=b2(A2,n),s=S.useRef(null),a=Oe(t,s);return S.useEffect(()=>{o.onAnchorChange((r==null?void 0:r.current)||s.current)}),r?null:w.jsx(ke.div,{...i,ref:a})});S2.displayName=A2;var fm="PopperContent",[XS,YS]=_2(fm),D2=S.forwardRef((e,t)=>{var ae,de,me,ve,fe,be;const{__scopePopper:n,side:r="bottom",sideOffset:i=0,align:o="center",alignOffset:s=0,arrowPadding:a=0,avoidCollisions:l=!0,collisionBoundary:u=[],collisionPadding:c=0,sticky:m="partial",hideWhenDetached:d=!1,updatePositionStrategy:p="optimized",onPlaced:f,...h}=e,y=b2(fm,n),[v,g]=S.useState(null),x=Oe(t,Me=>g(Me)),[E,_]=S.useState(null),F=dm(E),D=(F==null?void 0:F.width)??0,P=(F==null?void 0:F.height)??0,N=r+(o!=="center"?"-"+o:""),M=typeof c=="number"?c:{top:0,right:0,bottom:0,left:0,...c},G=Array.isArray(u)?u:[u],I=G.length>0,O={padding:M,boundary:G.filter(eD),altBoundary:I},{refs:C,floatingStyles:U,placement:X,isPositioned:q,middlewareData:W}=OS({strategy:"fixed",placement:N,whileElementsMounted:(...Me)=>FS(...Me,{animationFrame:p==="always"}),elements:{reference:y.anchor},middleware:[jS({mainAxis:i+P,alignmentAxis:s}),l&&VS({mainAxis:!0,crossAxis:!1,limiter:m==="partial"?zS():void 0,...O}),l&&$S({...O}),US({...O,apply:({elements:Me,rects:A,availableWidth:K,availableHeight:H})=>{const{width:B,height:b}=A.reference,k=Me.floating.style;k.setProperty("--radix-popper-available-width",`${K}px`),k.setProperty("--radix-popper-available-height",`${H}px`),k.setProperty("--radix-popper-anchor-width",`${B}px`),k.setProperty("--radix-popper-anchor-height",`${b}px`)}}),E&&qS({element:E,padding:a}),tD({arrowWidth:D,arrowHeight:P}),d&&WS({strategy:"referenceHidden",...O})]}),[V,Y]=I2(X),L=Tt(f);gt(()=>{q&&(L==null||L())},[q,L]);const j=(ae=W.arrow)==null?void 0:ae.x,ue=(de=W.arrow)==null?void 0:de.y,re=((me=W.arrow)==null?void 0:me.centerOffset)!==0,[ne,we]=S.useState();return gt(()=>{v&&we(window.getComputedStyle(v).zIndex)},[v]),w.jsx("div",{ref:C.setFloating,"data-radix-popper-content-wrapper":"",style:{...U,transform:q?U.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ne,"--radix-popper-transform-origin":[(ve=W.transformOrigin)==null?void 0:ve.x,(fe=W.transformOrigin)==null?void 0:fe.y].join(" "),...((be=W.hide)==null?void 0:be.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:w.jsx(XS,{scope:n,placedSide:V,onArrowChange:_,arrowX:j,arrowY:ue,shouldHideArrow:re,children:w.jsx(ke.div,{"data-side":V,"data-align":Y,...h,ref:x,style:{...h.style,animation:q?void 0:"none"}})})})});D2.displayName=fm;var k2="PopperArrow",JS={top:"bottom",right:"left",bottom:"top",left:"right"},F2=S.forwardRef(function(t,n){const{__scopePopper:r,...i}=t,o=YS(k2,r),s=JS[o.placedSide];return w.jsx("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:w.jsx(GS,{...i,ref:n,style:{...i.style,display:"block"}})})});F2.displayName=k2;function eD(e){return e!==null}var tD=e=>({name:"transformOrigin",options:e,fn(t){var y,v,g;const{placement:n,rects:r,middlewareData:i}=t,s=((y=i.arrow)==null?void 0:y.centerOffset)!==0,a=s?0:e.arrowWidth,l=s?0:e.arrowHeight,[u,c]=I2(n),m={start:"0%",center:"50%",end:"100%"}[c],d=(((v=i.arrow)==null?void 0:v.x)??0)+a/2,p=(((g=i.arrow)==null?void 0:g.y)??0)+l/2;let f="",h="";return u==="bottom"?(f=s?m:`${d}px`,h=`${-l}px`):u==="top"?(f=s?m:`${d}px`,h=`${r.floating.height+l}px`):u==="right"?(f=`${-l}px`,h=s?m:`${p}px`):u==="left"&&(f=`${r.floating.width+l}px`,h=s?m:`${p}px`),{data:{x:f,y:h}}}});function I2(e){const[t,n="center"]=e.split("-");return[t,n]}var nD=C2,rD=S2,iD=D2,oD=F2;function mm(e){const t=S.useRef({value:e,previous:e});return S.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var sD=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Li=new WeakMap,Ha=new WeakMap,Ga={},Lc=0,P2=function(e){return e&&(e.host||P2(e.parentNode))},aD=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=P2(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},lD=function(e,t,n,r){var i=aD(t,Array.isArray(e)?e:[e]);Ga[n]||(Ga[n]=new WeakMap);var o=Ga[n],s=[],a=new Set,l=new Set(i),u=function(m){!m||a.has(m)||(a.add(m),u(m.parentNode))};i.forEach(u);var c=function(m){!m||l.has(m)||Array.prototype.forEach.call(m.children,function(d){if(a.has(d))c(d);else try{var p=d.getAttribute(r),f=p!==null&&p!=="false",h=(Li.get(d)||0)+1,y=(o.get(d)||0)+1;Li.set(d,h),o.set(d,y),s.push(d),h===1&&f&&Ha.set(d,!0),y===1&&d.setAttribute(n,"true"),f||d.setAttribute(r,"true")}catch(v){console.error("aria-hidden: cannot operate on ",d,v)}})};return c(t),a.clear(),Lc++,function(){s.forEach(function(m){var d=Li.get(m)-1,p=o.get(m)-1;Li.set(m,d),o.set(m,p),d||(Ha.has(m)||m.removeAttribute(r),Ha.delete(m)),p||m.removeAttribute(n)}),Lc--,Lc||(Li=new WeakMap,Li=new WeakMap,Ha=new WeakMap,Ga={})}},B2=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),i=sD(e);return i?(r.push.apply(r,Array.from(i.querySelectorAll("[aria-live]"))),lD(r,i,n,"aria-hidden")):function(){return null}},Dn=function(){return Dn=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Dn.apply(this,arguments)};function R2(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function uD(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var vl="right-scroll-bar-position",yl="width-before-scroll-bar",cD="with-scroll-bars-hidden",dD="--removed-body-scroll-bar-size";function jc(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function pD(e,t){var n=S.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var i=n.value;i!==r&&(n.value=r,n.callback(r,i))}}}})[0];return n.callback=t,n.facade}var fD=typeof window<"u"?S.useLayoutEffect:S.useEffect,Tg=new WeakMap;function mD(e,t){var n=pD(null,function(r){return e.forEach(function(i){return jc(i,r)})});return fD(function(){var r=Tg.get(n);if(r){var i=new Set(r),o=new Set(e),s=n.current;i.forEach(function(a){o.has(a)||jc(a,null)}),o.forEach(function(a){i.has(a)||jc(a,s)})}Tg.set(n,e)},[e]),n}function hD(e){return e}function gD(e,t){t===void 0&&(t=hD);var n=[],r=!1,i={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(o){var s=t(o,r);return n.push(s),function(){n=n.filter(function(a){return a!==s})}},assignSyncMedium:function(o){for(r=!0;n.length;){var s=n;n=[],s.forEach(o)}n={push:function(a){return o(a)},filter:function(){return n}}},assignMedium:function(o){r=!0;var s=[];if(n.length){var a=n;n=[],a.forEach(o),s=n}var l=function(){var c=s;s=[],c.forEach(o)},u=function(){return Promise.resolve().then(l)};u(),n={push:function(c){s.push(c),u()},filter:function(c){return s=s.filter(c),n}}}};return i}function vD(e){e===void 0&&(e={});var t=gD(null);return t.options=Dn({async:!0,ssr:!1},e),t}var N2=function(e){var t=e.sideCar,n=R2(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return S.createElement(r,Dn({},n))};N2.isSideCarExport=!0;function yD(e,t){return e.useMedium(t),N2}var T2=vD(),Vc=function(){},qu=S.forwardRef(function(e,t){var n=S.useRef(null),r=S.useState({onScrollCapture:Vc,onWheelCapture:Vc,onTouchMoveCapture:Vc}),i=r[0],o=r[1],s=e.forwardProps,a=e.children,l=e.className,u=e.removeScrollBar,c=e.enabled,m=e.shards,d=e.sideCar,p=e.noIsolation,f=e.inert,h=e.allowPinchZoom,y=e.as,v=y===void 0?"div":y,g=e.gapMode,x=R2(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),E=d,_=mD([n,t]),F=Dn(Dn({},x),i);return S.createElement(S.Fragment,null,c&&S.createElement(E,{sideCar:T2,removeScrollBar:u,shards:m,noIsolation:p,inert:f,setCallbacks:o,allowPinchZoom:!!h,lockRef:n,gapMode:g}),s?S.cloneElement(S.Children.only(a),Dn(Dn({},F),{ref:_})):S.createElement(v,Dn({},F,{className:l,ref:_}),a))});qu.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};qu.classNames={fullWidth:yl,zeroRight:vl};var xD=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function ED(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=xD();return t&&e.setAttribute("nonce",t),e}function _D(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function wD(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var bD=function(){var e=0,t=null;return{add:function(n){e==0&&(t=ED())&&(_D(t,n),wD(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},CD=function(){var e=bD();return function(t,n){S.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},M2=function(){var e=CD(),t=function(n){var r=n.styles,i=n.dynamic;return e(r,i),null};return t},AD={left:0,top:0,right:0,gap:0},zc=function(e){return parseInt(e||"",10)||0},SD=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],i=t[e==="padding"?"paddingRight":"marginRight"];return[zc(n),zc(r),zc(i)]},DD=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return AD;var t=SD(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},kD=M2(),co="data-scroll-locked",FD=function(e,t,n,r){var i=e.left,o=e.top,s=e.right,a=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(cD,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(a,"px ").concat(r,`;
  }
  body[`).concat(co,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(i,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(a,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(vl,` {
    right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(yl,` {
    margin-right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(vl," .").concat(vl,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(yl," .").concat(yl,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(co,`] {
    `).concat(dD,": ").concat(a,`px;
  }
`)},Mg=function(){var e=parseInt(document.body.getAttribute(co)||"0",10);return isFinite(e)?e:0},ID=function(){S.useEffect(function(){return document.body.setAttribute(co,(Mg()+1).toString()),function(){var e=Mg()-1;e<=0?document.body.removeAttribute(co):document.body.setAttribute(co,e.toString())}},[])},PD=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,i=r===void 0?"margin":r;ID();var o=S.useMemo(function(){return DD(i)},[i]);return S.createElement(kD,{styles:FD(o,!t,i,n?"":"!important")})},op=!1;if(typeof window<"u")try{var Za=Object.defineProperty({},"passive",{get:function(){return op=!0,!0}});window.addEventListener("test",Za,Za),window.removeEventListener("test",Za,Za)}catch{op=!1}var ji=op?{passive:!1}:!1,BD=function(e){return e.tagName==="TEXTAREA"},O2=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!BD(e)&&n[t]==="visible")},RD=function(e){return O2(e,"overflowY")},ND=function(e){return O2(e,"overflowX")},Og=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var i=L2(e,r);if(i){var o=j2(e,r),s=o[1],a=o[2];if(s>a)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},TD=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},MD=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},L2=function(e,t){return e==="v"?RD(t):ND(t)},j2=function(e,t){return e==="v"?TD(t):MD(t)},OD=function(e,t){return e==="h"&&t==="rtl"?-1:1},LD=function(e,t,n,r,i){var o=OD(e,window.getComputedStyle(t).direction),s=o*r,a=n.target,l=t.contains(a),u=!1,c=s>0,m=0,d=0;do{var p=j2(e,a),f=p[0],h=p[1],y=p[2],v=h-y-o*f;(f||v)&&L2(e,a)&&(m+=v,d+=f),a instanceof ShadowRoot?a=a.host:a=a.parentNode}while(!l&&a!==document.body||l&&(t.contains(a)||t===a));return(c&&(Math.abs(m)<1||!i)||!c&&(Math.abs(d)<1||!i))&&(u=!0),u},Ka=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Lg=function(e){return[e.deltaX,e.deltaY]},jg=function(e){return e&&"current"in e?e.current:e},jD=function(e,t){return e[0]===t[0]&&e[1]===t[1]},VD=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},zD=0,Vi=[];function $D(e){var t=S.useRef([]),n=S.useRef([0,0]),r=S.useRef(),i=S.useState(zD++)[0],o=S.useState(M2)[0],s=S.useRef(e);S.useEffect(function(){s.current=e},[e]),S.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i));var h=uD([e.lockRef.current],(e.shards||[]).map(jg),!0).filter(Boolean);return h.forEach(function(y){return y.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),h.forEach(function(y){return y.classList.remove("allow-interactivity-".concat(i))})}}},[e.inert,e.lockRef.current,e.shards]);var a=S.useCallback(function(h,y){if("touches"in h&&h.touches.length===2||h.type==="wheel"&&h.ctrlKey)return!s.current.allowPinchZoom;var v=Ka(h),g=n.current,x="deltaX"in h?h.deltaX:g[0]-v[0],E="deltaY"in h?h.deltaY:g[1]-v[1],_,F=h.target,D=Math.abs(x)>Math.abs(E)?"h":"v";if("touches"in h&&D==="h"&&F.type==="range")return!1;var P=Og(D,F);if(!P)return!0;if(P?_=D:(_=D==="v"?"h":"v",P=Og(D,F)),!P)return!1;if(!r.current&&"changedTouches"in h&&(x||E)&&(r.current=_),!_)return!0;var N=r.current||_;return LD(N,y,h,N==="h"?x:E,!0)},[]),l=S.useCallback(function(h){var y=h;if(!(!Vi.length||Vi[Vi.length-1]!==o)){var v="deltaY"in y?Lg(y):Ka(y),g=t.current.filter(function(_){return _.name===y.type&&(_.target===y.target||y.target===_.shadowParent)&&jD(_.delta,v)})[0];if(g&&g.should){y.cancelable&&y.preventDefault();return}if(!g){var x=(s.current.shards||[]).map(jg).filter(Boolean).filter(function(_){return _.contains(y.target)}),E=x.length>0?a(y,x[0]):!s.current.noIsolation;E&&y.cancelable&&y.preventDefault()}}},[]),u=S.useCallback(function(h,y,v,g){var x={name:h,delta:y,target:v,should:g,shadowParent:UD(v)};t.current.push(x),setTimeout(function(){t.current=t.current.filter(function(E){return E!==x})},1)},[]),c=S.useCallback(function(h){n.current=Ka(h),r.current=void 0},[]),m=S.useCallback(function(h){u(h.type,Lg(h),h.target,a(h,e.lockRef.current))},[]),d=S.useCallback(function(h){u(h.type,Ka(h),h.target,a(h,e.lockRef.current))},[]);S.useEffect(function(){return Vi.push(o),e.setCallbacks({onScrollCapture:m,onWheelCapture:m,onTouchMoveCapture:d}),document.addEventListener("wheel",l,ji),document.addEventListener("touchmove",l,ji),document.addEventListener("touchstart",c,ji),function(){Vi=Vi.filter(function(h){return h!==o}),document.removeEventListener("wheel",l,ji),document.removeEventListener("touchmove",l,ji),document.removeEventListener("touchstart",c,ji)}},[]);var p=e.removeScrollBar,f=e.inert;return S.createElement(S.Fragment,null,f?S.createElement(o,{styles:VD(i)}):null,p?S.createElement(PD,{gapMode:e.gapMode}):null)}function UD(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const WD=yD(T2,$D);var hm=S.forwardRef(function(e,t){return S.createElement(qu,Dn({},e,{ref:t,sideCar:WD}))});hm.classNames=qu.classNames;var qD=[" ","Enter","ArrowUp","ArrowDown"],HD=[" ","Enter"],ya="Select",[Hu,Gu,GD]=$f(ya),[Vo,FF]=Mo(ya,[GD,w2]),Zu=w2(),[ZD,Yr]=Vo(ya),[KD,QD]=Vo(ya),V2=e=>{const{__scopeSelect:t,children:n,open:r,defaultOpen:i,onOpenChange:o,value:s,defaultValue:a,onValueChange:l,dir:u,name:c,autoComplete:m,disabled:d,required:p,form:f}=e,h=Zu(t),[y,v]=S.useState(null),[g,x]=S.useState(null),[E,_]=S.useState(!1),F=nm(u),[D=!1,P]=bi({prop:r,defaultProp:i,onChange:o}),[N,M]=bi({prop:s,defaultProp:a,onChange:l}),G=S.useRef(null),I=y?f||!!y.closest("form"):!0,[O,C]=S.useState(new Set),U=Array.from(O).map(X=>X.props.value).join(";");return w.jsx(nD,{...h,children:w.jsxs(ZD,{required:p,scope:t,trigger:y,onTriggerChange:v,valueNode:g,onValueNodeChange:x,valueNodeHasChildren:E,onValueNodeHasChildrenChange:_,contentId:vi(),value:N,onValueChange:M,open:D,onOpenChange:P,dir:F,triggerPointerDownPosRef:G,disabled:d,children:[w.jsx(Hu.Provider,{scope:t,children:w.jsx(KD,{scope:e.__scopeSelect,onNativeOptionAdd:S.useCallback(X=>{C(q=>new Set(q).add(X))},[]),onNativeOptionRemove:S.useCallback(X=>{C(q=>{const W=new Set(q);return W.delete(X),W})},[]),children:n})}),I?w.jsxs(dx,{"aria-hidden":!0,required:p,tabIndex:-1,name:c,autoComplete:m,value:N,onChange:X=>M(X.target.value),disabled:d,form:f,children:[N===void 0?w.jsx("option",{value:""}):null,Array.from(O)]},U):null]})})};V2.displayName=ya;var z2="SelectTrigger",$2=S.forwardRef((e,t)=>{const{__scopeSelect:n,disabled:r=!1,...i}=e,o=Zu(n),s=Yr(z2,n),a=s.disabled||r,l=Oe(t,s.onTriggerChange),u=Gu(n),c=S.useRef("touch"),[m,d,p]=px(h=>{const y=u().filter(x=>!x.disabled),v=y.find(x=>x.value===s.value),g=fx(y,h,v);g!==void 0&&s.onValueChange(g.value)}),f=h=>{a||(s.onOpenChange(!0),p()),h&&(s.triggerPointerDownPosRef.current={x:Math.round(h.pageX),y:Math.round(h.pageY)})};return w.jsx(rD,{asChild:!0,...o,children:w.jsx(ke.button,{type:"button",role:"combobox","aria-controls":s.contentId,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed",disabled:a,"data-disabled":a?"":void 0,"data-placeholder":cx(s.value)?"":void 0,...i,ref:l,onClick:ye(i.onClick,h=>{h.currentTarget.focus(),c.current!=="mouse"&&f(h)}),onPointerDown:ye(i.onPointerDown,h=>{c.current=h.pointerType;const y=h.target;y.hasPointerCapture(h.pointerId)&&y.releasePointerCapture(h.pointerId),h.button===0&&h.ctrlKey===!1&&h.pointerType==="mouse"&&(f(h),h.preventDefault())}),onKeyDown:ye(i.onKeyDown,h=>{const y=m.current!=="";!(h.ctrlKey||h.altKey||h.metaKey)&&h.key.length===1&&d(h.key),!(y&&h.key===" ")&&qD.includes(h.key)&&(f(),h.preventDefault())})})})});$2.displayName=z2;var U2="SelectValue",W2=S.forwardRef((e,t)=>{const{__scopeSelect:n,className:r,style:i,children:o,placeholder:s="",...a}=e,l=Yr(U2,n),{onValueNodeHasChildrenChange:u}=l,c=o!==void 0,m=Oe(t,l.onValueNodeChange);return gt(()=>{u(c)},[u,c]),w.jsx(ke.span,{...a,ref:m,style:{pointerEvents:"none"},children:cx(l.value)?w.jsx(w.Fragment,{children:s}):o})});W2.displayName=U2;var XD="SelectIcon",q2=S.forwardRef((e,t)=>{const{__scopeSelect:n,children:r,...i}=e;return w.jsx(ke.span,{"aria-hidden":!0,...i,ref:t,children:r||"▼"})});q2.displayName=XD;var YD="SelectPortal",H2=e=>w.jsx(Ru,{asChild:!0,...e});H2.displayName=YD;var Di="SelectContent",G2=S.forwardRef((e,t)=>{const n=Yr(Di,e.__scopeSelect),[r,i]=S.useState();if(gt(()=>{i(new DocumentFragment)},[]),!n.open){const o=r;return o?Pi.createPortal(w.jsx(Z2,{scope:e.__scopeSelect,children:w.jsx(Hu.Slot,{scope:e.__scopeSelect,children:w.jsx("div",{children:e.children})})}),o):null}return w.jsx(K2,{...e,ref:t})});G2.displayName=Di;var rn=10,[Z2,Jr]=Vo(Di),JD="SelectContentImpl",K2=S.forwardRef((e,t)=>{const{__scopeSelect:n,position:r="item-aligned",onCloseAutoFocus:i,onEscapeKeyDown:o,onPointerDownOutside:s,side:a,sideOffset:l,align:u,alignOffset:c,arrowPadding:m,collisionBoundary:d,collisionPadding:p,sticky:f,hideWhenDetached:h,avoidCollisions:y,...v}=e,g=Yr(Di,n),[x,E]=S.useState(null),[_,F]=S.useState(null),D=Oe(t,ae=>E(ae)),[P,N]=S.useState(null),[M,G]=S.useState(null),I=Gu(n),[O,C]=S.useState(!1),U=S.useRef(!1);S.useEffect(()=>{if(x)return B2(x)},[x]),u2();const X=S.useCallback(ae=>{const[de,...me]=I().map(be=>be.ref.current),[ve]=me.slice(-1),fe=document.activeElement;for(const be of ae)if(be===fe||(be==null||be.scrollIntoView({block:"nearest"}),be===de&&_&&(_.scrollTop=0),be===ve&&_&&(_.scrollTop=_.scrollHeight),be==null||be.focus(),document.activeElement!==fe))return},[I,_]),q=S.useCallback(()=>X([P,x]),[X,P,x]);S.useEffect(()=>{O&&q()},[O,q]);const{onOpenChange:W,triggerPointerDownPosRef:V}=g;S.useEffect(()=>{if(x){let ae={x:0,y:0};const de=ve=>{var fe,be;ae={x:Math.abs(Math.round(ve.pageX)-(((fe=V.current)==null?void 0:fe.x)??0)),y:Math.abs(Math.round(ve.pageY)-(((be=V.current)==null?void 0:be.y)??0))}},me=ve=>{ae.x<=10&&ae.y<=10?ve.preventDefault():x.contains(ve.target)||W(!1),document.removeEventListener("pointermove",de),V.current=null};return V.current!==null&&(document.addEventListener("pointermove",de),document.addEventListener("pointerup",me,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",de),document.removeEventListener("pointerup",me,{capture:!0})}}},[x,W,V]),S.useEffect(()=>{const ae=()=>W(!1);return window.addEventListener("blur",ae),window.addEventListener("resize",ae),()=>{window.removeEventListener("blur",ae),window.removeEventListener("resize",ae)}},[W]);const[Y,L]=px(ae=>{const de=I().filter(fe=>!fe.disabled),me=de.find(fe=>fe.ref.current===document.activeElement),ve=fx(de,ae,me);ve&&setTimeout(()=>ve.ref.current.focus())}),j=S.useCallback((ae,de,me)=>{const ve=!U.current&&!me;(g.value!==void 0&&g.value===de||ve)&&(N(ae),ve&&(U.current=!0))},[g.value]),ue=S.useCallback(()=>x==null?void 0:x.focus(),[x]),re=S.useCallback((ae,de,me)=>{const ve=!U.current&&!me;(g.value!==void 0&&g.value===de||ve)&&G(ae)},[g.value]),ne=r==="popper"?sp:Q2,we=ne===sp?{side:a,sideOffset:l,align:u,alignOffset:c,arrowPadding:m,collisionBoundary:d,collisionPadding:p,sticky:f,hideWhenDetached:h,avoidCollisions:y}:{};return w.jsx(Z2,{scope:n,content:x,viewport:_,onViewportChange:F,itemRefCallback:j,selectedItem:P,onItemLeave:ue,itemTextRefCallback:re,focusSelectedItem:q,selectedItemText:M,position:r,isPositioned:O,searchRef:Y,children:w.jsx(hm,{as:Vr,allowPinchZoom:!0,children:w.jsx(rm,{asChild:!0,trapped:g.open,onMountAutoFocus:ae=>{ae.preventDefault()},onUnmountAutoFocus:ye(i,ae=>{var de;(de=g.trigger)==null||de.focus({preventScroll:!0}),ae.preventDefault()}),children:w.jsx(Bu,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:ae=>ae.preventDefault(),onDismiss:()=>g.onOpenChange(!1),children:w.jsx(ne,{role:"listbox",id:g.contentId,"data-state":g.open?"open":"closed",dir:g.dir,onContextMenu:ae=>ae.preventDefault(),...v,...we,onPlaced:()=>C(!0),ref:D,style:{display:"flex",flexDirection:"column",outline:"none",...v.style},onKeyDown:ye(v.onKeyDown,ae=>{const de=ae.ctrlKey||ae.altKey||ae.metaKey;if(ae.key==="Tab"&&ae.preventDefault(),!de&&ae.key.length===1&&L(ae.key),["ArrowUp","ArrowDown","Home","End"].includes(ae.key)){let ve=I().filter(fe=>!fe.disabled).map(fe=>fe.ref.current);if(["ArrowUp","End"].includes(ae.key)&&(ve=ve.slice().reverse()),["ArrowUp","ArrowDown"].includes(ae.key)){const fe=ae.target,be=ve.indexOf(fe);ve=ve.slice(be+1)}setTimeout(()=>X(ve)),ae.preventDefault()}})})})})})})});K2.displayName=JD;var e5="SelectItemAlignedPosition",Q2=S.forwardRef((e,t)=>{const{__scopeSelect:n,onPlaced:r,...i}=e,o=Yr(Di,n),s=Jr(Di,n),[a,l]=S.useState(null),[u,c]=S.useState(null),m=Oe(t,D=>c(D)),d=Gu(n),p=S.useRef(!1),f=S.useRef(!0),{viewport:h,selectedItem:y,selectedItemText:v,focusSelectedItem:g}=s,x=S.useCallback(()=>{if(o.trigger&&o.valueNode&&a&&u&&h&&y&&v){const D=o.trigger.getBoundingClientRect(),P=u.getBoundingClientRect(),N=o.valueNode.getBoundingClientRect(),M=v.getBoundingClientRect();if(o.dir!=="rtl"){const fe=M.left-P.left,be=N.left-fe,Me=D.left-be,A=D.width+Me,K=Math.max(A,P.width),H=window.innerWidth-rn,B=_g(be,[rn,Math.max(rn,H-K)]);a.style.minWidth=A+"px",a.style.left=B+"px"}else{const fe=P.right-M.right,be=window.innerWidth-N.right-fe,Me=window.innerWidth-D.right-be,A=D.width+Me,K=Math.max(A,P.width),H=window.innerWidth-rn,B=_g(be,[rn,Math.max(rn,H-K)]);a.style.minWidth=A+"px",a.style.right=B+"px"}const G=d(),I=window.innerHeight-rn*2,O=h.scrollHeight,C=window.getComputedStyle(u),U=parseInt(C.borderTopWidth,10),X=parseInt(C.paddingTop,10),q=parseInt(C.borderBottomWidth,10),W=parseInt(C.paddingBottom,10),V=U+X+O+W+q,Y=Math.min(y.offsetHeight*5,V),L=window.getComputedStyle(h),j=parseInt(L.paddingTop,10),ue=parseInt(L.paddingBottom,10),re=D.top+D.height/2-rn,ne=I-re,we=y.offsetHeight/2,ae=y.offsetTop+we,de=U+X+ae,me=V-de;if(de<=re){const fe=G.length>0&&y===G[G.length-1].ref.current;a.style.bottom="0px";const be=u.clientHeight-h.offsetTop-h.offsetHeight,Me=Math.max(ne,we+(fe?ue:0)+be+q),A=de+Me;a.style.height=A+"px"}else{const fe=G.length>0&&y===G[0].ref.current;a.style.top="0px";const Me=Math.max(re,U+h.offsetTop+(fe?j:0)+we)+me;a.style.height=Me+"px",h.scrollTop=de-re+h.offsetTop}a.style.margin=`${rn}px 0`,a.style.minHeight=Y+"px",a.style.maxHeight=I+"px",r==null||r(),requestAnimationFrame(()=>p.current=!0)}},[d,o.trigger,o.valueNode,a,u,h,y,v,o.dir,r]);gt(()=>x(),[x]);const[E,_]=S.useState();gt(()=>{u&&_(window.getComputedStyle(u).zIndex)},[u]);const F=S.useCallback(D=>{D&&f.current===!0&&(x(),g==null||g(),f.current=!1)},[x,g]);return w.jsx(n5,{scope:n,contentWrapper:a,shouldExpandOnScrollRef:p,onScrollButtonChange:F,children:w.jsx("div",{ref:l,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:E},children:w.jsx(ke.div,{...i,ref:m,style:{boxSizing:"border-box",maxHeight:"100%",...i.style}})})})});Q2.displayName=e5;var t5="SelectPopperPosition",sp=S.forwardRef((e,t)=>{const{__scopeSelect:n,align:r="start",collisionPadding:i=rn,...o}=e,s=Zu(n);return w.jsx(iD,{...s,...o,ref:t,align:r,collisionPadding:i,style:{boxSizing:"border-box",...o.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});sp.displayName=t5;var[n5,gm]=Vo(Di,{}),ap="SelectViewport",X2=S.forwardRef((e,t)=>{const{__scopeSelect:n,nonce:r,...i}=e,o=Jr(ap,n),s=gm(ap,n),a=Oe(t,o.onViewportChange),l=S.useRef(0);return w.jsxs(w.Fragment,{children:[w.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),w.jsx(Hu.Slot,{scope:n,children:w.jsx(ke.div,{"data-radix-select-viewport":"",role:"presentation",...i,ref:a,style:{position:"relative",flex:1,overflow:"hidden auto",...i.style},onScroll:ye(i.onScroll,u=>{const c=u.currentTarget,{contentWrapper:m,shouldExpandOnScrollRef:d}=s;if(d!=null&&d.current&&m){const p=Math.abs(l.current-c.scrollTop);if(p>0){const f=window.innerHeight-rn*2,h=parseFloat(m.style.minHeight),y=parseFloat(m.style.height),v=Math.max(h,y);if(v<f){const g=v+p,x=Math.min(f,g),E=g-x;m.style.height=x+"px",m.style.bottom==="0px"&&(c.scrollTop=E>0?E:0,m.style.justifyContent="flex-end")}}}l.current=c.scrollTop})})})]})});X2.displayName=ap;var Y2="SelectGroup",[r5,i5]=Vo(Y2),o5=S.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e,i=vi();return w.jsx(r5,{scope:n,id:i,children:w.jsx(ke.div,{role:"group","aria-labelledby":i,...r,ref:t})})});o5.displayName=Y2;var J2="SelectLabel",ex=S.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e,i=i5(J2,n);return w.jsx(ke.div,{id:i.id,...r,ref:t})});ex.displayName=J2;var au="SelectItem",[s5,tx]=Vo(au),nx=S.forwardRef((e,t)=>{const{__scopeSelect:n,value:r,disabled:i=!1,textValue:o,...s}=e,a=Yr(au,n),l=Jr(au,n),u=a.value===r,[c,m]=S.useState(o??""),[d,p]=S.useState(!1),f=Oe(t,g=>{var x;return(x=l.itemRefCallback)==null?void 0:x.call(l,g,r,i)}),h=vi(),y=S.useRef("touch"),v=()=>{i||(a.onValueChange(r),a.onOpenChange(!1))};if(r==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return w.jsx(s5,{scope:n,value:r,disabled:i,textId:h,isSelected:u,onItemTextChange:S.useCallback(g=>{m(x=>x||((g==null?void 0:g.textContent)??"").trim())},[]),children:w.jsx(Hu.ItemSlot,{scope:n,value:r,disabled:i,textValue:c,children:w.jsx(ke.div,{role:"option","aria-labelledby":h,"data-highlighted":d?"":void 0,"aria-selected":u&&d,"data-state":u?"checked":"unchecked","aria-disabled":i||void 0,"data-disabled":i?"":void 0,tabIndex:i?void 0:-1,...s,ref:f,onFocus:ye(s.onFocus,()=>p(!0)),onBlur:ye(s.onBlur,()=>p(!1)),onClick:ye(s.onClick,()=>{y.current!=="mouse"&&v()}),onPointerUp:ye(s.onPointerUp,()=>{y.current==="mouse"&&v()}),onPointerDown:ye(s.onPointerDown,g=>{y.current=g.pointerType}),onPointerMove:ye(s.onPointerMove,g=>{var x;y.current=g.pointerType,i?(x=l.onItemLeave)==null||x.call(l):y.current==="mouse"&&g.currentTarget.focus({preventScroll:!0})}),onPointerLeave:ye(s.onPointerLeave,g=>{var x;g.currentTarget===document.activeElement&&((x=l.onItemLeave)==null||x.call(l))}),onKeyDown:ye(s.onKeyDown,g=>{var E;((E=l.searchRef)==null?void 0:E.current)!==""&&g.key===" "||(HD.includes(g.key)&&v(),g.key===" "&&g.preventDefault())})})})})});nx.displayName=au;var ds="SelectItemText",rx=S.forwardRef((e,t)=>{const{__scopeSelect:n,className:r,style:i,...o}=e,s=Yr(ds,n),a=Jr(ds,n),l=tx(ds,n),u=QD(ds,n),[c,m]=S.useState(null),d=Oe(t,v=>m(v),l.onItemTextChange,v=>{var g;return(g=a.itemTextRefCallback)==null?void 0:g.call(a,v,l.value,l.disabled)}),p=c==null?void 0:c.textContent,f=S.useMemo(()=>w.jsx("option",{value:l.value,disabled:l.disabled,children:p},l.value),[l.disabled,l.value,p]),{onNativeOptionAdd:h,onNativeOptionRemove:y}=u;return gt(()=>(h(f),()=>y(f)),[h,y,f]),w.jsxs(w.Fragment,{children:[w.jsx(ke.span,{id:l.textId,...o,ref:d}),l.isSelected&&s.valueNode&&!s.valueNodeHasChildren?Pi.createPortal(o.children,s.valueNode):null]})});rx.displayName=ds;var ix="SelectItemIndicator",ox=S.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e;return tx(ix,n).isSelected?w.jsx(ke.span,{"aria-hidden":!0,...r,ref:t}):null});ox.displayName=ix;var lp="SelectScrollUpButton",sx=S.forwardRef((e,t)=>{const n=Jr(lp,e.__scopeSelect),r=gm(lp,e.__scopeSelect),[i,o]=S.useState(!1),s=Oe(t,r.onScrollButtonChange);return gt(()=>{if(n.viewport&&n.isPositioned){let a=function(){const u=l.scrollTop>0;o(u)};const l=n.viewport;return a(),l.addEventListener("scroll",a),()=>l.removeEventListener("scroll",a)}},[n.viewport,n.isPositioned]),i?w.jsx(lx,{...e,ref:s,onAutoScroll:()=>{const{viewport:a,selectedItem:l}=n;a&&l&&(a.scrollTop=a.scrollTop-l.offsetHeight)}}):null});sx.displayName=lp;var up="SelectScrollDownButton",ax=S.forwardRef((e,t)=>{const n=Jr(up,e.__scopeSelect),r=gm(up,e.__scopeSelect),[i,o]=S.useState(!1),s=Oe(t,r.onScrollButtonChange);return gt(()=>{if(n.viewport&&n.isPositioned){let a=function(){const u=l.scrollHeight-l.clientHeight,c=Math.ceil(l.scrollTop)<u;o(c)};const l=n.viewport;return a(),l.addEventListener("scroll",a),()=>l.removeEventListener("scroll",a)}},[n.viewport,n.isPositioned]),i?w.jsx(lx,{...e,ref:s,onAutoScroll:()=>{const{viewport:a,selectedItem:l}=n;a&&l&&(a.scrollTop=a.scrollTop+l.offsetHeight)}}):null});ax.displayName=up;var lx=S.forwardRef((e,t)=>{const{__scopeSelect:n,onAutoScroll:r,...i}=e,o=Jr("SelectScrollButton",n),s=S.useRef(null),a=Gu(n),l=S.useCallback(()=>{s.current!==null&&(window.clearInterval(s.current),s.current=null)},[]);return S.useEffect(()=>()=>l(),[l]),gt(()=>{var c;const u=a().find(m=>m.ref.current===document.activeElement);(c=u==null?void 0:u.ref.current)==null||c.scrollIntoView({block:"nearest"})},[a]),w.jsx(ke.div,{"aria-hidden":!0,...i,ref:t,style:{flexShrink:0,...i.style},onPointerDown:ye(i.onPointerDown,()=>{s.current===null&&(s.current=window.setInterval(r,50))}),onPointerMove:ye(i.onPointerMove,()=>{var u;(u=o.onItemLeave)==null||u.call(o),s.current===null&&(s.current=window.setInterval(r,50))}),onPointerLeave:ye(i.onPointerLeave,()=>{l()})})}),a5="SelectSeparator",ux=S.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e;return w.jsx(ke.div,{"aria-hidden":!0,...r,ref:t})});ux.displayName=a5;var cp="SelectArrow",l5=S.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e,i=Zu(n),o=Yr(cp,n),s=Jr(cp,n);return o.open&&s.position==="popper"?w.jsx(oD,{...i,...r,ref:t}):null});l5.displayName=cp;function cx(e){return e===""||e===void 0}var dx=S.forwardRef((e,t)=>{const{value:n,...r}=e,i=S.useRef(null),o=Oe(t,i),s=mm(n);return S.useEffect(()=>{const a=i.current,l=window.HTMLSelectElement.prototype,c=Object.getOwnPropertyDescriptor(l,"value").set;if(s!==n&&c){const m=new Event("change",{bubbles:!0});c.call(a,n),a.dispatchEvent(m)}},[s,n]),w.jsx(Nu,{asChild:!0,children:w.jsx("select",{...r,ref:o,defaultValue:n})})});dx.displayName="BubbleSelect";function px(e){const t=Tt(e),n=S.useRef(""),r=S.useRef(0),i=S.useCallback(s=>{const a=n.current+s;t(a),function l(u){n.current=u,window.clearTimeout(r.current),u!==""&&(r.current=window.setTimeout(()=>l(""),1e3))}(a)},[t]),o=S.useCallback(()=>{n.current="",window.clearTimeout(r.current)},[]);return S.useEffect(()=>()=>window.clearTimeout(r.current),[]),[n,i,o]}function fx(e,t,n){const i=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,o=n?e.indexOf(n):-1;let s=u5(e,Math.max(o,0));i.length===1&&(s=s.filter(u=>u!==n));const l=s.find(u=>u.textValue.toLowerCase().startsWith(i.toLowerCase()));return l!==n?l:void 0}function u5(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var c5=V2,mx=$2,d5=W2,p5=q2,f5=H2,hx=G2,m5=X2,gx=ex,vx=nx,h5=rx,g5=ox,yx=sx,xx=ax,Ex=ux;const Vg=c5,zg=d5,dp=S.forwardRef(({className:e,children:t,...n},r)=>w.jsxs(mx,{ref:r,className:De("flex h-10 w-full items-center justify-between rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...n,children:[t,w.jsx(p5,{asChild:!0,children:w.jsx(x1,{className:"h-4 w-4 opacity-50"})})]}));dp.displayName=mx.displayName;const _x=S.forwardRef(({className:e,...t},n)=>w.jsx(yx,{ref:n,className:De("flex cursor-default items-center justify-center py-1",e),...t,children:w.jsx(hC,{className:"h-4 w-4"})}));_x.displayName=yx.displayName;const wx=S.forwardRef(({className:e,...t},n)=>w.jsx(xx,{ref:n,className:De("flex cursor-default items-center justify-center py-1",e),...t,children:w.jsx(x1,{className:"h-4 w-4"})}));wx.displayName=xx.displayName;const pp=S.forwardRef(({className:e,children:t,position:n="popper",...r},i)=>w.jsx(f5,{children:w.jsxs(hx,{ref:i,className:De("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:n,...r,children:[w.jsx(_x,{}),w.jsx(m5,{className:De("p-1",n==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t}),w.jsx(wx,{})]})}));pp.displayName=hx.displayName;const v5=S.forwardRef(({className:e,...t},n)=>w.jsx(gx,{ref:n,className:De("py-1.5 pl-8 pr-2 text-sm font-semibold",e),...t}));v5.displayName=gx.displayName;const ps=S.forwardRef(({className:e,children:t,...n},r)=>w.jsxs(vx,{ref:r,className:De("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...n,children:[w.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:w.jsx(g5,{children:w.jsx(y1,{className:"h-4 w-4"})})}),w.jsx(h5,{children:t})]}));ps.displayName=vx.displayName;const y5=S.forwardRef(({className:e,...t},n)=>w.jsx(Ex,{ref:n,className:De("-mx-1 my-1 h-px bg-muted",e),...t}));y5.displayName=Ex.displayName;function x5(e,t=[]){let n=[];function r(o,s){const a=S.createContext(s),l=n.length;n=[...n,s];function u(m){const{scope:d,children:p,...f}=m,h=(d==null?void 0:d[e][l])||a,y=S.useMemo(()=>f,Object.values(f));return w.jsx(h.Provider,{value:y,children:p})}function c(m,d){const p=(d==null?void 0:d[e][l])||a,f=S.useContext(p);if(f)return f;if(s!==void 0)return s;throw new Error(`\`${m}\` must be used within \`${o}\``)}return u.displayName=o+"Provider",[u,c]}const i=()=>{const o=n.map(s=>S.createContext(s));return function(a){const l=(a==null?void 0:a[e])||o;return S.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return i.scopeName=e,[r,E5(i,...t)]}function E5(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const s=r.reduce((a,{useScope:l,scopeName:u})=>{const m=l(o)[`__scope${u}`];return{...a,...m}},{});return S.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}var $c="rovingFocusGroup.onEntryFocus",_5={bubbles:!1,cancelable:!0},Ku="RovingFocusGroup",[fp,bx,w5]=$f(Ku),[b5,Cx]=x5(Ku,[w5]),[C5,A5]=b5(Ku),Ax=S.forwardRef((e,t)=>w.jsx(fp.Provider,{scope:e.__scopeRovingFocusGroup,children:w.jsx(fp.Slot,{scope:e.__scopeRovingFocusGroup,children:w.jsx(S5,{...e,ref:t})})}));Ax.displayName=Ku;var S5=S.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:i=!1,dir:o,currentTabStopId:s,defaultCurrentTabStopId:a,onCurrentTabStopIdChange:l,onEntryFocus:u,preventScrollOnEntryFocus:c=!1,...m}=e,d=S.useRef(null),p=Oe(t,d),f=nm(o),[h=null,y]=bi({prop:s,defaultProp:a,onChange:l}),[v,g]=S.useState(!1),x=Tt(u),E=bx(n),_=S.useRef(!1),[F,D]=S.useState(0);return S.useEffect(()=>{const P=d.current;if(P)return P.addEventListener($c,x),()=>P.removeEventListener($c,x)},[x]),w.jsx(C5,{scope:n,orientation:r,dir:f,loop:i,currentTabStopId:h,onItemFocus:S.useCallback(P=>y(P),[y]),onItemShiftTab:S.useCallback(()=>g(!0),[]),onFocusableItemAdd:S.useCallback(()=>D(P=>P+1),[]),onFocusableItemRemove:S.useCallback(()=>D(P=>P-1),[]),children:w.jsx(ke.div,{tabIndex:v||F===0?-1:0,"data-orientation":r,...m,ref:p,style:{outline:"none",...e.style},onMouseDown:ye(e.onMouseDown,()=>{_.current=!0}),onFocus:ye(e.onFocus,P=>{const N=!_.current;if(P.target===P.currentTarget&&N&&!v){const M=new CustomEvent($c,_5);if(P.currentTarget.dispatchEvent(M),!M.defaultPrevented){const G=E().filter(X=>X.focusable),I=G.find(X=>X.active),O=G.find(X=>X.id===h),U=[I,O,...G].filter(Boolean).map(X=>X.ref.current);kx(U,c)}}_.current=!1}),onBlur:ye(e.onBlur,()=>g(!1))})})}),Sx="RovingFocusGroupItem",Dx=S.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:i=!1,tabStopId:o,...s}=e,a=vi(),l=o||a,u=A5(Sx,n),c=u.currentTabStopId===l,m=bx(n),{onFocusableItemAdd:d,onFocusableItemRemove:p}=u;return S.useEffect(()=>{if(r)return d(),()=>p()},[r,d,p]),w.jsx(fp.ItemSlot,{scope:n,id:l,focusable:r,active:i,children:w.jsx(ke.span,{tabIndex:c?0:-1,"data-orientation":u.orientation,...s,ref:t,onMouseDown:ye(e.onMouseDown,f=>{r?u.onItemFocus(l):f.preventDefault()}),onFocus:ye(e.onFocus,()=>u.onItemFocus(l)),onKeyDown:ye(e.onKeyDown,f=>{if(f.key==="Tab"&&f.shiftKey){u.onItemShiftTab();return}if(f.target!==f.currentTarget)return;const h=F5(f,u.orientation,u.dir);if(h!==void 0){if(f.metaKey||f.ctrlKey||f.altKey||f.shiftKey)return;f.preventDefault();let v=m().filter(g=>g.focusable).map(g=>g.ref.current);if(h==="last")v.reverse();else if(h==="prev"||h==="next"){h==="prev"&&v.reverse();const g=v.indexOf(f.currentTarget);v=u.loop?I5(v,g+1):v.slice(g+1)}setTimeout(()=>kx(v))}})})})});Dx.displayName=Sx;var D5={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function k5(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function F5(e,t,n){const r=k5(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return D5[r]}function kx(e,t=!1){const n=document.activeElement;for(const r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}function I5(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var P5=Ax,B5=Dx,vm="Radio",[R5,Fx]=Mo(vm),[N5,T5]=R5(vm),Ix=S.forwardRef((e,t)=>{const{__scopeRadio:n,name:r,checked:i=!1,required:o,disabled:s,value:a="on",onCheck:l,form:u,...c}=e,[m,d]=S.useState(null),p=Oe(t,y=>d(y)),f=S.useRef(!1),h=m?u||!!m.closest("form"):!0;return w.jsxs(N5,{scope:n,checked:i,disabled:s,children:[w.jsx(ke.button,{type:"button",role:"radio","aria-checked":i,"data-state":Rx(i),"data-disabled":s?"":void 0,disabled:s,value:a,...c,ref:p,onClick:ye(e.onClick,y=>{i||l==null||l(),h&&(f.current=y.isPropagationStopped(),f.current||y.stopPropagation())})}),h&&w.jsx(M5,{control:m,bubbles:!f.current,name:r,value:a,checked:i,required:o,disabled:s,form:u,style:{transform:"translateX(-100%)"}})]})});Ix.displayName=vm;var Px="RadioIndicator",Bx=S.forwardRef((e,t)=>{const{__scopeRadio:n,forceMount:r,...i}=e,o=T5(Px,n);return w.jsx(Bi,{present:r||o.checked,children:w.jsx(ke.span,{"data-state":Rx(o.checked),"data-disabled":o.disabled?"":void 0,...i,ref:t})})});Bx.displayName=Px;var M5=e=>{const{control:t,checked:n,bubbles:r=!0,...i}=e,o=S.useRef(null),s=mm(n),a=dm(t);return S.useEffect(()=>{const l=o.current,u=window.HTMLInputElement.prototype,m=Object.getOwnPropertyDescriptor(u,"checked").set;if(s!==n&&m){const d=new Event("click",{bubbles:r});m.call(l,n),l.dispatchEvent(d)}},[s,n,r]),w.jsx("input",{type:"radio","aria-hidden":!0,defaultChecked:n,...i,tabIndex:-1,ref:o,style:{...e.style,...a,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function Rx(e){return e?"checked":"unchecked"}var O5=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],ym="RadioGroup",[L5,IF]=Mo(ym,[Cx,Fx]),Nx=Cx(),Tx=Fx(),[j5,V5]=L5(ym),Mx=S.forwardRef((e,t)=>{const{__scopeRadioGroup:n,name:r,defaultValue:i,value:o,required:s=!1,disabled:a=!1,orientation:l,dir:u,loop:c=!0,onValueChange:m,...d}=e,p=Nx(n),f=nm(u),[h,y]=bi({prop:o,defaultProp:i,onChange:m});return w.jsx(j5,{scope:n,name:r,required:s,disabled:a,value:h,onValueChange:y,children:w.jsx(P5,{asChild:!0,...p,orientation:l,dir:f,loop:c,children:w.jsx(ke.div,{role:"radiogroup","aria-required":s,"aria-orientation":l,"data-disabled":a?"":void 0,dir:f,...d,ref:t})})})});Mx.displayName=ym;var Ox="RadioGroupItem",Lx=S.forwardRef((e,t)=>{const{__scopeRadioGroup:n,disabled:r,...i}=e,o=V5(Ox,n),s=o.disabled||r,a=Nx(n),l=Tx(n),u=S.useRef(null),c=Oe(t,u),m=o.value===i.value,d=S.useRef(!1);return S.useEffect(()=>{const p=h=>{O5.includes(h.key)&&(d.current=!0)},f=()=>d.current=!1;return document.addEventListener("keydown",p),document.addEventListener("keyup",f),()=>{document.removeEventListener("keydown",p),document.removeEventListener("keyup",f)}},[]),w.jsx(B5,{asChild:!0,...a,focusable:!s,active:m,children:w.jsx(Ix,{disabled:s,required:o.required,checked:m,...l,...i,name:o.name,ref:c,onCheck:()=>o.onValueChange(i.value),onKeyDown:ye(p=>{p.key==="Enter"&&p.preventDefault()}),onFocus:ye(i.onFocus,()=>{var p;d.current&&((p=u.current)==null||p.click())})})})});Lx.displayName=Ox;var z5="RadioGroupIndicator",jx=S.forwardRef((e,t)=>{const{__scopeRadioGroup:n,...r}=e,i=Tx(n);return w.jsx(Bx,{...i,...r,ref:t})});jx.displayName=z5;var Vx=Mx,zx=Lx,$5=jx;const $x=S.forwardRef(({className:e,...t},n)=>w.jsx(Vx,{className:De("grid gap-2",e),...t,ref:n}));$x.displayName=Vx.displayName;const mp=S.forwardRef(({className:e,...t},n)=>w.jsx(zx,{ref:n,className:De("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),...t,children:w.jsx($5,{className:"flex items-center justify-center",children:w.jsx(vC,{className:"h-2.5 w-2.5 fill-current text-current"})})}));mp.displayName=zx.displayName;const U5=Ou("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90 rounded-full",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-md",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md",ghost:"hover:bg-accent hover:text-accent-foreground rounded-md",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),lu=S.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...i},o)=>{const s=r?Vr:"button";return w.jsx(s,{className:De(U5({variant:t,size:n,className:e})),ref:o,...i})});lu.displayName="Button";const W5="/assets/aletyx-logo-symbol-DXSiFLt1.png",q5="/assets/kie-logo-C0-R0onS.png",H5={group:"org.acme",artifact:"start-with-aletyx",version:"1.0.0-SNAPSHOT",platform:"Quarkus",target:"Aletyx",targetVersion:"10.1.1-aletyx-innovator"},Qa={Aletyx:["10.1.0-aletyx-pioneer","10.1.1-aletyx-innovator","10.1.1-aletyx-horizon","10.1.1-aletyx-keystone"],"Apache KIE":["10.0.0","10.1.0"]};function G5({onSubmit:e,disabled:t,initialValues:n}){const r=D3({resolver:P3(NA),defaultValues:n||H5,mode:"onChange"}),i=r.watch("target");return S.useEffect(()=>{const s=Qa[i]||[];s.length>0&&r.setValue("targetVersion",s[0])},[i,r]),r.watch("targetVersion"),S.useEffect(()=>{n&&Object.entries(n).forEach(([o,s])=>{r.setValue(o,s)})},[n,r]),w.jsx(OA,{...r,children:w.jsxs("form",{onSubmit:r.handleSubmit(e),className:"space-y-6",children:[w.jsx(ni,{control:r.control,name:"group",render:({field:o})=>w.jsxs(dr,{children:[w.jsx(pr,{className:"text-foreground font-medium",children:"Group"}),w.jsx(fr,{children:w.jsx(cs,{...o,className:"focus-visible:ring-primary"})}),w.jsx("p",{className:"text-xs text-muted-foreground",children:"Example: myproject or org.acme.project"}),w.jsx(mr,{})]})}),w.jsx(ni,{control:r.control,name:"artifact",render:({field:o})=>w.jsxs(dr,{children:[w.jsx(pr,{className:"text-foreground font-medium",children:"Artifact"}),w.jsx(fr,{children:w.jsx(cs,{...o,className:"focus-visible:ring-primary"})}),w.jsx("p",{className:"text-xs text-muted-foreground",children:"Example: my-service or my.service"}),w.jsx(mr,{})]})}),w.jsx(ni,{control:r.control,name:"version",render:({field:o})=>w.jsxs(dr,{children:[w.jsx(pr,{className:"text-foreground font-medium",children:"Version"}),w.jsx(fr,{children:w.jsx(cs,{...o,className:"focus-visible:ring-primary"})}),w.jsx(mr,{})]})}),w.jsx(ni,{control:r.control,name:"target",render:({field:o})=>w.jsxs(dr,{className:"space-y-3",children:[w.jsx(pr,{className:"sr-only",children:"Target"}),w.jsx(fr,{children:w.jsxs($x,{onValueChange:s=>{o.onChange(s);const a=new CustomEvent("targetChanged",{detail:s});window.dispatchEvent(a)},value:o.value,className:"flex flex-col sm:flex-row justify-center items-center gap-6 mb-6",children:[w.jsxs("div",{className:`flex justify-center items-center space-x-2 border rounded-md p-3 px-4 hover:bg-accent cursor-pointer w-full sm:w-44 ${o.value==="Aletyx"?"border-primary bg-primary/5":""}`,children:[w.jsx(mp,{value:"Aletyx",id:"radio-aletyx",className:"border-primary text-primary"}),w.jsxs("label",{htmlFor:"radio-aletyx",className:"flex items-center cursor-pointer",children:[w.jsx("img",{src:W5,alt:"Aletyx",className:"w-6 h-6 mr-2"}),w.jsx("span",{className:o.value==="Aletyx"?"font-medium":"",children:"Aletyx"})]})]}),w.jsxs("div",{className:`flex justify-center items-center space-x-2 border rounded-md p-3 px-4 hover:bg-accent cursor-pointer w-full sm:w-44 ${o.value==="Apache KIE"?"border-primary bg-primary/5":""}`,children:[w.jsx(mp,{value:"Apache KIE",id:"radio-apache",className:"border-primary text-primary"}),w.jsxs("label",{htmlFor:"radio-apache",className:"flex items-center cursor-pointer",children:[w.jsx("img",{src:q5,alt:"Apache KIE",className:"w-6 h-6 mr-2"}),w.jsx("span",{className:o.value==="Apache KIE"?"font-medium":"",children:"KIE"})]})]})]})}),w.jsx(mr,{})]})}),w.jsx(ni,{control:r.control,name:"platform",render:({field:o})=>w.jsxs(dr,{children:[w.jsx(pr,{className:"text-foreground font-medium",children:"Runtime"}),w.jsxs(Vg,{onValueChange:s=>{o.onChange(s);const a=new CustomEvent("platformChanged",{detail:s});window.dispatchEvent(a)},value:o.value,children:[w.jsx(fr,{children:w.jsx(dp,{className:"focus-visible:ring-primary",children:w.jsx(zg,{placeholder:"Select runtime"})})}),w.jsxs(pp,{children:[w.jsx(ps,{value:"SpringBoot",children:"Spring Boot"}),w.jsx(ps,{value:"Quarkus",children:"Quarkus"})]})]}),w.jsx(mr,{})]})}),w.jsx(ni,{control:r.control,name:"targetVersion",render:({field:o})=>{var s,a;return w.jsxs(dr,{children:[w.jsx(pr,{className:"text-foreground font-medium",children:"Target Version"}),w.jsxs(Vg,{onValueChange:l=>{o.onChange(l);const u=new CustomEvent("targetVersionChanged",{detail:l});window.dispatchEvent(u)},value:o.value||((s=Qa[i])==null?void 0:s[0])||"",children:[w.jsx(fr,{children:w.jsx(dp,{className:"focus-visible:ring-primary",children:w.jsx(zg,{placeholder:"Select target version"})})}),w.jsx(pp,{children:(a=Qa[i])!=null&&a[0]?Qa[i].map(l=>w.jsx(ps,{value:l,children:l},l)):w.jsx(ps,{disabled:!0,value:"",children:"No versions available"})})]}),w.jsx(mr,{})]})}}),i==="Aletyx"&&w.jsx(ni,{control:r.control,name:"mavenAccessToken",render:({field:o})=>w.jsxs(dr,{children:[w.jsxs(pr,{className:"text-foreground font-medium",children:["Maven Access Token",w.jsx("span",{className:"ml-2 text-xs text-muted-foreground",children:"(Optional)"})]}),w.jsx(fr,{children:w.jsx(cs,{...o,type:"password",placeholder:"Enter your Maven access token",value:o.value||"",className:"focus-visible:ring-primary"})}),w.jsx("p",{className:"text-xs text-muted-foreground",children:"Used for Maven repository authentication with Aletyx"}),w.jsx(mr,{})]})}),w.jsxs(lu,{type:"submit",className:"w-full btn-primary-gradient text-white font-medium rounded-full py-6",disabled:t,children:[w.jsx(yC,{className:"h-5 w-5 mr-2"}),"Download Project"]})]})})}const Z5=Ou("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground",active:"border-transparent bg-primary/30 text-primary hover:bg-primary/20",blue:"border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200",green:"border-transparent bg-green-100 text-green-800 hover:bg-green-200",purple:"border-transparent bg-purple-100 text-purple-800 hover:bg-purple-200",pink:"border-transparent bg-pink-100 text-pink-800 hover:bg-pink-200",yellow:"border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200",indigo:"border-transparent bg-indigo-100 text-indigo-800 hover:bg-indigo-200",red:"border-transparent bg-red-100 text-red-800 hover:bg-red-200"},clickable:{true:"cursor-pointer",false:""}},defaultVariants:{variant:"default",clickable:!1}});function hp({className:e,variant:t,clickable:n,onClick:r,...i}){return w.jsx("div",{className:De(Z5({variant:t,clickable:n}),e),onClick:r,...i})}function K5({useCase:e,isSelected:t,onSelect:n,isDisabled:r=!1}){const i=()=>{r||n(e.id)};return w.jsxs(Zf,{className:De("overflow-hidden transition-all bg-muted/30",t&&"ring-2 ring-primary border-primary",r?"opacity-60 cursor-not-allowed":"cursor-pointer hover:shadow-lg"),onClick:i,children:[e.labels.includes("Aletyx")&&!e.labels.includes("Apache KIE")&&w.jsx("div",{className:"btn-primary-gradient text-white text-xs py-1 font-medium text-center",children:w.jsxs("span",{className:"flex items-center justify-center",children:[w.jsxs("svg",{className:"w-3 h-3 mr-1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[w.jsx("path",{d:"M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"}),w.jsx("path",{d:"M18.5 15V16.5H20"}),w.jsx("circle",{cx:"16.5",cy:"17.5",r:"3.5"})]}),"Aletyx Exclusive"]})}),w.jsxs(Kf,{className:"p-4 flex flex-col items-center relative",children:[w.jsx("div",{className:"w-16 h-16 mb-3 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full",children:w.jsx("div",{className:"text-primary",dangerouslySetInnerHTML:{__html:e.icon}})}),w.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:e.name}),w.jsx("div",{className:"flex flex-wrap gap-1 justify-center mb-2",children:e.labels.filter(o=>o!=="Aletyx"&&o!=="Apache KIE").map(o=>w.jsx(hp,{variant:"outline",className:"text-xs",children:o},o))})]}),t&&w.jsx("div",{className:"p-4 border-t",children:w.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:e.longDescription||e.description})})]})}const Xa=[{id:"mcp-dmn",name:"Intelligent Decision Service",description:"AI-ready decision service with seamless integration with AI assistants, agents, and copilots, backed by Model Context Protocol (MCP)",longDescription:"AI-ready decision service with seamless integration with AI assistants, agents, and copilots, backed by Model Context Protocol (MCP)",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>',labels:["DMN","AI","Quarkus","SpringBoot","Aletyx"],template:"mcp-dmn"},{id:"classic-ruleflow",name:"Classic Ruleflow",description:"Classic ruleflow using single KIESession triggering process wiht startProcess that will execute a BPMN model.",longDescription:"Classic ruleflow using single KIESession triggering process wiht startProcess that will execute a BPMN model.",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>',labels:["DRL","BPMN","SpringBoot","Quarkus","Aletyx"],template:"classic-ruleflow"},{id:"decision-service",name:"Decision Service",description:"Lightweight automation for DMN decisions with automatically generated REST endpoints and stateless execution.",longDescription:"Lightweight automation for DMN decisions with automatically generated REST endpoints and stateless execution.",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>',labels:["DMN","SpringBoot","Quarkus","Aletyx","Apache KIE"],template:"decision-service"},{id:"rules-service",name:"Rule Service",description:"High-performance rule engine powered by Drools and DRL for advanced conditional logic, pattern matching, and temporal constraints — ideal for complex business rules and policy automation.",longDescription:"High-performance rule engine powered by Drools and DRL for advanced conditional logic, pattern matching, and temporal constraints — ideal for complex business rules and policy automation.",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>',labels:["DRL","SpringBoot","Quarkus","Aletyx","Apache KIE"],template:"rules-service"},{id:"decision-orchestration",name:"Decision Orchestration",description:"Workflow automation that coordinates DMN and DRL logic within BPMN processes — combining decision modeling with event-aware rule execution and process flow control.",longDescription:"Workflow automation that coordinates DMN and DRL logic within BPMN processes — combining decision modeling with event-aware rule execution and process flow control.",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>',labels:["DRL","DMN","BPMN","SpringBoot","Quarkus"],template:"decision-orchestration"},{id:"statefull-workflow",name:"Workflow Automation",description:"Workflow automation.",longDescription:"Workflow automation.",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>',labels:["DRL","DMN","BPMN","Quarkus"],template:"statefull-workflow"}];function Q5({platform:e,target:t,onSelectUseCase:n,activeLabels:r=[],onLabelsChange:i}){const{toast:o}=zf(),[s,a]=S.useState(void 0),[l,u]=S.useState(r),c=Array.from(new Set(Xa.flatMap(f=>f.labels))).filter(f=>!["Quarkus","SpringBoot","Aletyx","Apache KIE"].includes(f));S.useEffect(()=>{JSON.stringify(l)!==JSON.stringify(r)&&u(r)},[r]);const m=f=>{const h=l.includes(f)?l.filter(y=>y!==f):[...l,f];u(h),i==null||i(h)},d=f=>{const h=s===f?void 0:f;a(h),n(h)},p=f=>{const h=e?f.labels.some(g=>g.toLowerCase()===e.toLowerCase()):!0,y=t?f.labels.some(g=>g.toLowerCase()===t.toLowerCase()):!0,v=l.length>0?l.every(g=>f.labels.includes(g)):!0;return h&&y&&v};return S.useEffect(()=>{if(s){const f=Xa.find(h=>h.id===s);f&&!p(f)&&(a(void 0),n(void 0),o({title:"Selection reset",description:"Your selection was reset due to filter changes."}))}},[e,t,l,s,n,o]),w.jsxs("div",{children:[w.jsxs("div",{className:"flex justify-between items-center mb-6",children:[w.jsx("h2",{className:"text-xl font-semibold text-foreground",children:"Select Use Case"}),w.jsxs("div",{className:"flex flex-wrap gap-2 items-center",children:[w.jsx(hp,{variant:l.length===0?"active":"outline",clickable:l.length>0,className:l.length===0?"btn-primary-gradient text-white":"bg-gray-100 hover:bg-gray-200 border-none",onClick:()=>{u([]),i==null||i([])},children:"All"}),c.map(f=>w.jsxs(hp,{variant:l.includes(f)?"active":"outline",clickable:!0,className:l.includes(f)?"btn-primary-gradient text-white inline-flex items-center":"bg-gray-100 hover:bg-gray-200 border-none",onClick:()=>m(f),children:[f,l.includes(f)&&w.jsx(Hf,{className:"h-3 w-3 ml-1"})]},f))]})]}),w.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Xa.length>0?Xa.map(f=>{const h=!p(f);return w.jsx(K5,{useCase:f,isSelected:f.id===s,onSelect:d,isDisabled:h},f.id)}):w.jsx("div",{className:"col-span-full text-center py-10 text-muted-foreground",children:"No use cases available."})})]})}var xm="Dialog",[Ux,PF]=Mo(xm),[X5,xn]=Ux(xm),Wx=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:i,onOpenChange:o,modal:s=!0}=e,a=S.useRef(null),l=S.useRef(null),[u=!1,c]=bi({prop:r,defaultProp:i,onChange:o});return w.jsx(X5,{scope:t,triggerRef:a,contentRef:l,contentId:vi(),titleId:vi(),descriptionId:vi(),open:u,onOpenChange:c,onOpenToggle:S.useCallback(()=>c(m=>!m),[c]),modal:s,children:n})};Wx.displayName=xm;var qx="DialogTrigger",Y5=S.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,i=xn(qx,n),o=Oe(t,i.triggerRef);return w.jsx(ke.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":wm(i.open),...r,ref:o,onClick:ye(e.onClick,i.onOpenToggle)})});Y5.displayName=qx;var Em="DialogPortal",[J5,Hx]=Ux(Em,{forceMount:void 0}),Gx=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:i}=e,o=xn(Em,t);return w.jsx(J5,{scope:t,forceMount:n,children:S.Children.map(r,s=>w.jsx(Bi,{present:n||o.open,children:w.jsx(Ru,{asChild:!0,container:i,children:s})}))})};Gx.displayName=Em;var uu="DialogOverlay",Zx=S.forwardRef((e,t)=>{const n=Hx(uu,e.__scopeDialog),{forceMount:r=n.forceMount,...i}=e,o=xn(uu,e.__scopeDialog);return o.modal?w.jsx(Bi,{present:r||o.open,children:w.jsx(ek,{...i,ref:t})}):null});Zx.displayName=uu;var ek=S.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,i=xn(uu,n);return w.jsx(hm,{as:Vr,allowPinchZoom:!0,shards:[i.contentRef],children:w.jsx(ke.div,{"data-state":wm(i.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),ki="DialogContent",Kx=S.forwardRef((e,t)=>{const n=Hx(ki,e.__scopeDialog),{forceMount:r=n.forceMount,...i}=e,o=xn(ki,e.__scopeDialog);return w.jsx(Bi,{present:r||o.open,children:o.modal?w.jsx(tk,{...i,ref:t}):w.jsx(nk,{...i,ref:t})})});Kx.displayName=ki;var tk=S.forwardRef((e,t)=>{const n=xn(ki,e.__scopeDialog),r=S.useRef(null),i=Oe(t,n.contentRef,r);return S.useEffect(()=>{const o=r.current;if(o)return B2(o)},[]),w.jsx(Qx,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:ye(e.onCloseAutoFocus,o=>{var s;o.preventDefault(),(s=n.triggerRef.current)==null||s.focus()}),onPointerDownOutside:ye(e.onPointerDownOutside,o=>{const s=o.detail.originalEvent,a=s.button===0&&s.ctrlKey===!0;(s.button===2||a)&&o.preventDefault()}),onFocusOutside:ye(e.onFocusOutside,o=>o.preventDefault())})}),nk=S.forwardRef((e,t)=>{const n=xn(ki,e.__scopeDialog),r=S.useRef(!1),i=S.useRef(!1);return w.jsx(Qx,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var s,a;(s=e.onCloseAutoFocus)==null||s.call(e,o),o.defaultPrevented||(r.current||(a=n.triggerRef.current)==null||a.focus(),o.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:o=>{var l,u;(l=e.onInteractOutside)==null||l.call(e,o),o.defaultPrevented||(r.current=!0,o.detail.originalEvent.type==="pointerdown"&&(i.current=!0));const s=o.target;((u=n.triggerRef.current)==null?void 0:u.contains(s))&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&i.current&&o.preventDefault()}})}),Qx=S.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:o,...s}=e,a=xn(ki,n),l=S.useRef(null),u=Oe(t,l);return u2(),w.jsxs(w.Fragment,{children:[w.jsx(rm,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:o,children:w.jsx(Bu,{role:"dialog",id:a.contentId,"aria-describedby":a.descriptionId,"aria-labelledby":a.titleId,"data-state":wm(a.open),...s,ref:u,onDismiss:()=>a.onOpenChange(!1)})}),w.jsxs(w.Fragment,{children:[w.jsx(rk,{titleId:a.titleId}),w.jsx(ok,{contentRef:l,descriptionId:a.descriptionId})]})]})}),_m="DialogTitle",Xx=S.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,i=xn(_m,n);return w.jsx(ke.h2,{id:i.titleId,...r,ref:t})});Xx.displayName=_m;var Yx="DialogDescription",Jx=S.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,i=xn(Yx,n);return w.jsx(ke.p,{id:i.descriptionId,...r,ref:t})});Jx.displayName=Yx;var eE="DialogClose",tE=S.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,i=xn(eE,n);return w.jsx(ke.button,{type:"button",...r,ref:t,onClick:ye(e.onClick,()=>i.onOpenChange(!1))})});tE.displayName=eE;function wm(e){return e?"open":"closed"}var nE="DialogTitleWarning",[BF,rE]=F4(nE,{contentName:ki,titleName:_m,docsSlug:"dialog"}),rk=({titleId:e})=>{const t=rE(nE),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return S.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},ik="DialogDescriptionWarning",ok=({contentRef:e,descriptionId:t})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${rE(ik).contentName}}.`;return S.useEffect(()=>{var o;const i=(o=e.current)==null?void 0:o.getAttribute("aria-describedby");t&&i&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null},sk=Wx,ak=Gx,iE=Zx,oE=Kx,sE=Xx,aE=Jx,lk=tE;const uk=sk,ck=ak,lE=S.forwardRef(({className:e,...t},n)=>w.jsx(iE,{ref:n,className:De("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));lE.displayName=iE.displayName;const uE=S.forwardRef(({className:e,children:t,...n},r)=>w.jsxs(ck,{children:[w.jsx(lE,{}),w.jsxs(oE,{ref:r,className:De("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...n,children:[t,w.jsxs(lk,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[w.jsx(Hf,{className:"h-4 w-4"}),w.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));uE.displayName=oE.displayName;const cE=({className:e,...t})=>w.jsx("div",{className:De("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});cE.displayName="DialogHeader";const dE=({className:e,...t})=>w.jsx("div",{className:De("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...t});dE.displayName="DialogFooter";const pE=S.forwardRef(({className:e,...t},n)=>w.jsx(sE,{ref:n,className:De("text-lg font-semibold leading-none tracking-tight",e),...t}));pE.displayName=sE.displayName;const gp=S.forwardRef(({className:e,...t},n)=>w.jsx(aE,{ref:n,className:De("text-sm text-muted-foreground",e),...t}));gp.displayName=aE.displayName;var bm="Checkbox",[dk,RF]=Mo(bm),[pk,fk]=dk(bm),fE=S.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:r,checked:i,defaultChecked:o,required:s,disabled:a,value:l="on",onCheckedChange:u,form:c,...m}=e,[d,p]=S.useState(null),f=Oe(t,E=>p(E)),h=S.useRef(!1),y=d?c||!!d.closest("form"):!0,[v=!1,g]=bi({prop:i,defaultProp:o,onChange:u}),x=S.useRef(v);return S.useEffect(()=>{const E=d==null?void 0:d.form;if(E){const _=()=>g(x.current);return E.addEventListener("reset",_),()=>E.removeEventListener("reset",_)}},[d,g]),w.jsxs(pk,{scope:n,state:v,disabled:a,children:[w.jsx(ke.button,{type:"button",role:"checkbox","aria-checked":Or(v)?"mixed":v,"aria-required":s,"data-state":gE(v),"data-disabled":a?"":void 0,disabled:a,value:l,...m,ref:f,onKeyDown:ye(e.onKeyDown,E=>{E.key==="Enter"&&E.preventDefault()}),onClick:ye(e.onClick,E=>{g(_=>Or(_)?!0:!_),y&&(h.current=E.isPropagationStopped(),h.current||E.stopPropagation())})}),y&&w.jsx(mk,{control:d,bubbles:!h.current,name:r,value:l,checked:v,required:s,disabled:a,form:c,style:{transform:"translateX(-100%)"},defaultChecked:Or(o)?!1:o})]})});fE.displayName=bm;var mE="CheckboxIndicator",hE=S.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...i}=e,o=fk(mE,n);return w.jsx(Bi,{present:r||Or(o.state)||o.state===!0,children:w.jsx(ke.span,{"data-state":gE(o.state),"data-disabled":o.disabled?"":void 0,...i,ref:t,style:{pointerEvents:"none",...e.style}})})});hE.displayName=mE;var mk=e=>{const{control:t,checked:n,bubbles:r=!0,defaultChecked:i,...o}=e,s=S.useRef(null),a=mm(n),l=dm(t);S.useEffect(()=>{const c=s.current,m=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(m,"checked").set;if(a!==n&&p){const f=new Event("click",{bubbles:r});c.indeterminate=Or(n),p.call(c,Or(n)?!1:n),c.dispatchEvent(f)}},[a,n,r]);const u=S.useRef(Or(n)?!1:n);return w.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:i??u.current,...o,tabIndex:-1,ref:s,style:{...e.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function Or(e){return e==="indeterminate"}function gE(e){return Or(e)?"indeterminate":e?"checked":"unchecked"}var vE=fE,hk=hE;const yE=S.forwardRef(({className:e,...t},n)=>w.jsx(vE,{ref:n,className:De("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",e),...t,children:w.jsx(hk,{className:De("flex items-center justify-center text-current"),children:w.jsx(y1,{className:"h-4 w-4"})})}));yE.displayName=vE.displayName;const xE="projectGenerator_";function gk(e,t){try{localStorage.setItem(`${xE}${e}`,t)}catch(n){console.warn(`Failed to save preference ${e}:`,n)}}function vk(e){try{return localStorage.getItem(`${xE}${e}`)}catch(t){return console.warn(`Failed to retrieve preference ${e}:`,t),null}}function yk({isOpen:e,onClose:t}){const[n,r]=S.useState(!1);S.useEffect(()=>{vk("hideAletyxModal")==="true"&&e&&t()},[e,t]);const i=()=>{n&&gk("hideAletyxModal","true"),t()};return w.jsx(uk,{open:e,onOpenChange:i,children:w.jsxs(uE,{className:"sm:max-w-md",children:[w.jsxs(cE,{children:[w.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[w.jsx("div",{className:"flex-shrink-0 bg-gradient-to-br from-primary/10 to-secondary/10 p-2 rounded-full",children:w.jsx(xC,{className:"h-6 w-6 text-primary"})}),w.jsx(pE,{className:"text-foreground text-xl",children:"Aletyx License Required"})]}),w.jsxs(gp,{className:"text-base mb-6 py-2",children:[w.jsx("strong",{children:"Heads up!"})," The project you're downloading includes enterprise dependencies that are only available through the ",w.jsx("a",{href:"https://maven.aletyx.services",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:underline",children:"Aletyx Maven repository"}),"."]}),w.jsxs(gp,{className:"text-base py-2",children:["To get started and unlock the full Aletyx Enterprise Experience, ",w.jsx("a",{href:"https://aletyx.ai/contact-us/",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:underline",children:"reach out"})," to us or email ",w.jsx("a",{href:"mailto:sales@aletyx.ai?subject=Interest in access to Aletyx Enterprise Experience",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:underline",children:"sales@aletyx.ai"}),"."]})]}),w.jsxs(dE,{className:"flex-col sm:flex-row sm:justify-between gap-2 mt-4",children:[w.jsxs("div",{className:"flex items-center space-x-2",children:[w.jsx(yE,{id:"dontShowAgain",checked:n,onCheckedChange:o=>r(o===!0),className:"border-primary text-primary data-[state=checked]:bg-primary data-[state=checked]:text-white"}),w.jsx("label",{htmlFor:"dontShowAgain",className:"text-sm font-medium leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"Don't show again"})]}),w.jsxs("div",{className:"flex gap-2 w-full sm:w-auto",children:[w.jsx(lu,{variant:"outline",className:"sm:w-auto w-full",onClick:i,children:"Close"}),w.jsx(lu,{className:"sm:w-auto w-full btn-primary-gradient text-white rounded-full",asChild:!0,children:w.jsx("a",{href:"https://aletyx.ai/contact-us/",target:"_blank",rel:"noopener noreferrer",children:"Request Access"})})]})]})]})})}function Ya(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var EE={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(e,t){(function(n){e.exports=n()})(function(){return function n(r,i,o){function s(u,c){if(!i[u]){if(!r[u]){var m=typeof Ya=="function"&&Ya;if(!c&&m)return m(u,!0);if(a)return a(u,!0);var d=new Error("Cannot find module '"+u+"'");throw d.code="MODULE_NOT_FOUND",d}var p=i[u]={exports:{}};r[u][0].call(p.exports,function(f){var h=r[u][1][f];return s(h||f)},p,p.exports,n,r,i,o)}return i[u].exports}for(var a=typeof Ya=="function"&&Ya,l=0;l<o.length;l++)s(o[l]);return s}({1:[function(n,r,i){var o=n("./utils"),s=n("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(l){for(var u,c,m,d,p,f,h,y=[],v=0,g=l.length,x=g,E=o.getTypeOf(l)!=="string";v<l.length;)x=g-v,m=E?(u=l[v++],c=v<g?l[v++]:0,v<g?l[v++]:0):(u=l.charCodeAt(v++),c=v<g?l.charCodeAt(v++):0,v<g?l.charCodeAt(v++):0),d=u>>2,p=(3&u)<<4|c>>4,f=1<x?(15&c)<<2|m>>6:64,h=2<x?63&m:64,y.push(a.charAt(d)+a.charAt(p)+a.charAt(f)+a.charAt(h));return y.join("")},i.decode=function(l){var u,c,m,d,p,f,h=0,y=0,v="data:";if(l.substr(0,v.length)===v)throw new Error("Invalid base64 input, it looks like a data url.");var g,x=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&x--,l.charAt(l.length-2)===a.charAt(64)&&x--,x%1!=0)throw new Error("Invalid base64 input, bad content length.");for(g=s.uint8array?new Uint8Array(0|x):new Array(0|x);h<l.length;)u=a.indexOf(l.charAt(h++))<<2|(d=a.indexOf(l.charAt(h++)))>>4,c=(15&d)<<4|(p=a.indexOf(l.charAt(h++)))>>2,m=(3&p)<<6|(f=a.indexOf(l.charAt(h++))),g[y++]=u,p!==64&&(g[y++]=c),f!==64&&(g[y++]=m);return g}},{"./support":30,"./utils":32}],2:[function(n,r,i){var o=n("./external"),s=n("./stream/DataWorker"),a=n("./stream/Crc32Probe"),l=n("./stream/DataLengthProbe");function u(c,m,d,p,f){this.compressedSize=c,this.uncompressedSize=m,this.crc32=d,this.compression=p,this.compressedContent=f}u.prototype={getContentWorker:function(){var c=new s(o.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),m=this;return c.on("end",function(){if(this.streamInfo.data_length!==m.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),c},getCompressedWorker:function(){return new s(o.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},u.createWorkerFrom=function(c,m,d){return c.pipe(new a).pipe(new l("uncompressedSize")).pipe(m.compressWorker(d)).pipe(new l("compressedSize")).withStreamInfo("compression",m)},r.exports=u},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(n,r,i){var o=n("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new o("STORE compression")},uncompressWorker:function(){return new o("STORE decompression")}},i.DEFLATE=n("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(n,r,i){var o=n("./utils"),s=function(){for(var a,l=[],u=0;u<256;u++){a=u;for(var c=0;c<8;c++)a=1&a?3988292384^a>>>1:a>>>1;l[u]=a}return l}();r.exports=function(a,l){return a!==void 0&&a.length?o.getTypeOf(a)!=="string"?function(u,c,m,d){var p=s,f=d+m;u^=-1;for(var h=d;h<f;h++)u=u>>>8^p[255&(u^c[h])];return-1^u}(0|l,a,a.length,0):function(u,c,m,d){var p=s,f=d+m;u^=-1;for(var h=d;h<f;h++)u=u>>>8^p[255&(u^c.charCodeAt(h))];return-1^u}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(n,r,i){i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(n,r,i){var o=null;o=typeof Promise<"u"?Promise:n("lie"),r.exports={Promise:o}},{lie:37}],7:[function(n,r,i){var o=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",s=n("pako"),a=n("./utils"),l=n("./stream/GenericWorker"),u=o?"uint8array":"array";function c(m,d){l.call(this,"FlateWorker/"+m),this._pako=null,this._pakoAction=m,this._pakoOptions=d,this.meta={}}i.magic="\b\0",a.inherits(c,l),c.prototype.processChunk=function(m){this.meta=m.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(u,m.data),!1)},c.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},c.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},c.prototype._createPako=function(){this._pako=new s[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var m=this;this._pako.onData=function(d){m.push({data:d,meta:m.meta})}},i.compressWorker=function(m){return new c("Deflate",m)},i.uncompressWorker=function(){return new c("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(n,r,i){function o(p,f){var h,y="";for(h=0;h<f;h++)y+=String.fromCharCode(255&p),p>>>=8;return y}function s(p,f,h,y,v,g){var x,E,_=p.file,F=p.compression,D=g!==u.utf8encode,P=a.transformTo("string",g(_.name)),N=a.transformTo("string",u.utf8encode(_.name)),M=_.comment,G=a.transformTo("string",g(M)),I=a.transformTo("string",u.utf8encode(M)),O=N.length!==_.name.length,C=I.length!==M.length,U="",X="",q="",W=_.dir,V=_.date,Y={crc32:0,compressedSize:0,uncompressedSize:0};f&&!h||(Y.crc32=p.crc32,Y.compressedSize=p.compressedSize,Y.uncompressedSize=p.uncompressedSize);var L=0;f&&(L|=8),D||!O&&!C||(L|=2048);var j=0,ue=0;W&&(j|=16),v==="UNIX"?(ue=798,j|=function(ne,we){var ae=ne;return ne||(ae=we?16893:33204),(65535&ae)<<16}(_.unixPermissions,W)):(ue=20,j|=function(ne){return 63&(ne||0)}(_.dosPermissions)),x=V.getUTCHours(),x<<=6,x|=V.getUTCMinutes(),x<<=5,x|=V.getUTCSeconds()/2,E=V.getUTCFullYear()-1980,E<<=4,E|=V.getUTCMonth()+1,E<<=5,E|=V.getUTCDate(),O&&(X=o(1,1)+o(c(P),4)+N,U+="up"+o(X.length,2)+X),C&&(q=o(1,1)+o(c(G),4)+I,U+="uc"+o(q.length,2)+q);var re="";return re+=`
\0`,re+=o(L,2),re+=F.magic,re+=o(x,2),re+=o(E,2),re+=o(Y.crc32,4),re+=o(Y.compressedSize,4),re+=o(Y.uncompressedSize,4),re+=o(P.length,2),re+=o(U.length,2),{fileRecord:m.LOCAL_FILE_HEADER+re+P+U,dirRecord:m.CENTRAL_FILE_HEADER+o(ue,2)+re+o(G.length,2)+"\0\0\0\0"+o(j,4)+o(y,4)+P+U+G}}var a=n("../utils"),l=n("../stream/GenericWorker"),u=n("../utf8"),c=n("../crc32"),m=n("../signature");function d(p,f,h,y){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=f,this.zipPlatform=h,this.encodeFileName=y,this.streamFiles=p,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(d,l),d.prototype.push=function(p){var f=p.meta.percent||0,h=this.entriesCount,y=this._sources.length;this.accumulate?this.contentBuffer.push(p):(this.bytesWritten+=p.data.length,l.prototype.push.call(this,{data:p.data,meta:{currentFile:this.currentFile,percent:h?(f+100*(h-y-1))/h:100}}))},d.prototype.openedSource=function(p){this.currentSourceOffset=this.bytesWritten,this.currentFile=p.file.name;var f=this.streamFiles&&!p.file.dir;if(f){var h=s(p,f,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:h.fileRecord,meta:{percent:0}})}else this.accumulate=!0},d.prototype.closedSource=function(p){this.accumulate=!1;var f=this.streamFiles&&!p.file.dir,h=s(p,f,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(h.dirRecord),f)this.push({data:function(y){return m.DATA_DESCRIPTOR+o(y.crc32,4)+o(y.compressedSize,4)+o(y.uncompressedSize,4)}(p),meta:{percent:100}});else for(this.push({data:h.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},d.prototype.flush=function(){for(var p=this.bytesWritten,f=0;f<this.dirRecords.length;f++)this.push({data:this.dirRecords[f],meta:{percent:100}});var h=this.bytesWritten-p,y=function(v,g,x,E,_){var F=a.transformTo("string",_(E));return m.CENTRAL_DIRECTORY_END+"\0\0\0\0"+o(v,2)+o(v,2)+o(g,4)+o(x,4)+o(F.length,2)+F}(this.dirRecords.length,h,p,this.zipComment,this.encodeFileName);this.push({data:y,meta:{percent:100}})},d.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},d.prototype.registerPrevious=function(p){this._sources.push(p);var f=this;return p.on("data",function(h){f.processChunk(h)}),p.on("end",function(){f.closedSource(f.previous.streamInfo),f._sources.length?f.prepareNextSource():f.end()}),p.on("error",function(h){f.error(h)}),this},d.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},d.prototype.error=function(p){var f=this._sources;if(!l.prototype.error.call(this,p))return!1;for(var h=0;h<f.length;h++)try{f[h].error(p)}catch{}return!0},d.prototype.lock=function(){l.prototype.lock.call(this);for(var p=this._sources,f=0;f<p.length;f++)p[f].lock()},r.exports=d},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(n,r,i){var o=n("../compressions"),s=n("./ZipFileWorker");i.generateWorker=function(a,l,u){var c=new s(l.streamFiles,u,l.platform,l.encodeFileName),m=0;try{a.forEach(function(d,p){m++;var f=function(g,x){var E=g||x,_=o[E];if(!_)throw new Error(E+" is not a valid compression method !");return _}(p.options.compression,l.compression),h=p.options.compressionOptions||l.compressionOptions||{},y=p.dir,v=p.date;p._compressWorker(f,h).withStreamInfo("file",{name:d,dir:y,date:v,comment:p.comment||"",unixPermissions:p.unixPermissions,dosPermissions:p.dosPermissions}).pipe(c)}),c.entriesCount=m}catch(d){c.error(d)}return c}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(n,r,i){function o(){if(!(this instanceof o))return new o;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var s=new o;for(var a in this)typeof this[a]!="function"&&(s[a]=this[a]);return s}}(o.prototype=n("./object")).loadAsync=n("./load"),o.support=n("./support"),o.defaults=n("./defaults"),o.version="3.10.1",o.loadAsync=function(s,a){return new o().loadAsync(s,a)},o.external=n("./external"),r.exports=o},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(n,r,i){var o=n("./utils"),s=n("./external"),a=n("./utf8"),l=n("./zipEntries"),u=n("./stream/Crc32Probe"),c=n("./nodejsUtils");function m(d){return new s.Promise(function(p,f){var h=d.decompressed.getContentWorker().pipe(new u);h.on("error",function(y){f(y)}).on("end",function(){h.streamInfo.crc32!==d.decompressed.crc32?f(new Error("Corrupted zip : CRC32 mismatch")):p()}).resume()})}r.exports=function(d,p){var f=this;return p=o.extend(p||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),c.isNode&&c.isStream(d)?s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):o.prepareContent("the loaded zip file",d,!0,p.optimizedBinaryString,p.base64).then(function(h){var y=new l(p);return y.load(h),y}).then(function(h){var y=[s.Promise.resolve(h)],v=h.files;if(p.checkCRC32)for(var g=0;g<v.length;g++)y.push(m(v[g]));return s.Promise.all(y)}).then(function(h){for(var y=h.shift(),v=y.files,g=0;g<v.length;g++){var x=v[g],E=x.fileNameStr,_=o.resolve(x.fileNameStr);f.file(_,x.decompressed,{binary:!0,optimizedBinaryString:!0,date:x.date,dir:x.dir,comment:x.fileCommentStr.length?x.fileCommentStr:null,unixPermissions:x.unixPermissions,dosPermissions:x.dosPermissions,createFolders:p.createFolders}),x.dir||(f.file(_).unsafeOriginalName=E)}return y.zipComment.length&&(f.comment=y.zipComment),f})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(n,r,i){var o=n("../utils"),s=n("../stream/GenericWorker");function a(l,u){s.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(u)}o.inherits(a,s),a.prototype._bindStream=function(l){var u=this;(this._stream=l).pause(),l.on("data",function(c){u.push({data:c,meta:{percent:0}})}).on("error",function(c){u.isPaused?this.generatedError=c:u.error(c)}).on("end",function(){u.isPaused?u._upstreamEnded=!0:u.end()})},a.prototype.pause=function(){return!!s.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},r.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(n,r,i){var o=n("readable-stream").Readable;function s(a,l,u){o.call(this,l),this._helper=a;var c=this;a.on("data",function(m,d){c.push(m)||c._helper.pause(),u&&u(d)}).on("error",function(m){c.emit("error",m)}).on("end",function(){c.push(null)})}n("../utils").inherits(s,o),s.prototype._read=function(){this._helper.resume()},r.exports=s},{"../utils":32,"readable-stream":16}],14:[function(n,r,i){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(o,s){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(o,s);if(typeof o=="number")throw new Error('The "data" argument must not be a number');return new Buffer(o,s)},allocBuffer:function(o){if(Buffer.alloc)return Buffer.alloc(o);var s=new Buffer(o);return s.fill(0),s},isBuffer:function(o){return Buffer.isBuffer(o)},isStream:function(o){return o&&typeof o.on=="function"&&typeof o.pause=="function"&&typeof o.resume=="function"}}},{}],15:[function(n,r,i){function o(_,F,D){var P,N=a.getTypeOf(F),M=a.extend(D||{},c);M.date=M.date||new Date,M.compression!==null&&(M.compression=M.compression.toUpperCase()),typeof M.unixPermissions=="string"&&(M.unixPermissions=parseInt(M.unixPermissions,8)),M.unixPermissions&&16384&M.unixPermissions&&(M.dir=!0),M.dosPermissions&&16&M.dosPermissions&&(M.dir=!0),M.dir&&(_=v(_)),M.createFolders&&(P=y(_))&&g.call(this,P,!0);var G=N==="string"&&M.binary===!1&&M.base64===!1;D&&D.binary!==void 0||(M.binary=!G),(F instanceof m&&F.uncompressedSize===0||M.dir||!F||F.length===0)&&(M.base64=!1,M.binary=!0,F="",M.compression="STORE",N="string");var I=null;I=F instanceof m||F instanceof l?F:f.isNode&&f.isStream(F)?new h(_,F):a.prepareContent(_,F,M.binary,M.optimizedBinaryString,M.base64);var O=new d(_,I,M);this.files[_]=O}var s=n("./utf8"),a=n("./utils"),l=n("./stream/GenericWorker"),u=n("./stream/StreamHelper"),c=n("./defaults"),m=n("./compressedObject"),d=n("./zipObject"),p=n("./generate"),f=n("./nodejsUtils"),h=n("./nodejs/NodejsStreamInputAdapter"),y=function(_){_.slice(-1)==="/"&&(_=_.substring(0,_.length-1));var F=_.lastIndexOf("/");return 0<F?_.substring(0,F):""},v=function(_){return _.slice(-1)!=="/"&&(_+="/"),_},g=function(_,F){return F=F!==void 0?F:c.createFolders,_=v(_),this.files[_]||o.call(this,_,null,{dir:!0,createFolders:F}),this.files[_]};function x(_){return Object.prototype.toString.call(_)==="[object RegExp]"}var E={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(_){var F,D,P;for(F in this.files)P=this.files[F],(D=F.slice(this.root.length,F.length))&&F.slice(0,this.root.length)===this.root&&_(D,P)},filter:function(_){var F=[];return this.forEach(function(D,P){_(D,P)&&F.push(P)}),F},file:function(_,F,D){if(arguments.length!==1)return _=this.root+_,o.call(this,_,F,D),this;if(x(_)){var P=_;return this.filter(function(M,G){return!G.dir&&P.test(M)})}var N=this.files[this.root+_];return N&&!N.dir?N:null},folder:function(_){if(!_)return this;if(x(_))return this.filter(function(N,M){return M.dir&&_.test(N)});var F=this.root+_,D=g.call(this,F),P=this.clone();return P.root=D.name,P},remove:function(_){_=this.root+_;var F=this.files[_];if(F||(_.slice(-1)!=="/"&&(_+="/"),F=this.files[_]),F&&!F.dir)delete this.files[_];else for(var D=this.filter(function(N,M){return M.name.slice(0,_.length)===_}),P=0;P<D.length;P++)delete this.files[D[P].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(_){var F,D={};try{if((D=a.extend(_||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:s.utf8encode})).type=D.type.toLowerCase(),D.compression=D.compression.toUpperCase(),D.type==="binarystring"&&(D.type="string"),!D.type)throw new Error("No output type specified.");a.checkSupport(D.type),D.platform!=="darwin"&&D.platform!=="freebsd"&&D.platform!=="linux"&&D.platform!=="sunos"||(D.platform="UNIX"),D.platform==="win32"&&(D.platform="DOS");var P=D.comment||this.comment||"";F=p.generateWorker(this,D,P)}catch(N){(F=new l("error")).error(N)}return new u(F,D.type||"string",D.mimeType)},generateAsync:function(_,F){return this.generateInternalStream(_).accumulate(F)},generateNodeStream:function(_,F){return(_=_||{}).type||(_.type="nodebuffer"),this.generateInternalStream(_).toNodejsStream(F)}};r.exports=E},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(n,r,i){r.exports=n("stream")},{stream:void 0}],17:[function(n,r,i){var o=n("./DataReader");function s(a){o.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}n("../utils").inherits(s,o),s.prototype.byteAt=function(a){return this.data[this.zero+a]},s.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),u=a.charCodeAt(1),c=a.charCodeAt(2),m=a.charCodeAt(3),d=this.length-4;0<=d;--d)if(this.data[d]===l&&this.data[d+1]===u&&this.data[d+2]===c&&this.data[d+3]===m)return d-this.zero;return-1},s.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),u=a.charCodeAt(1),c=a.charCodeAt(2),m=a.charCodeAt(3),d=this.readData(4);return l===d[0]&&u===d[1]&&c===d[2]&&m===d[3]},s.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=s},{"../utils":32,"./DataReader":18}],18:[function(n,r,i){var o=n("../utils");function s(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}s.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,u=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)u=(u<<8)+this.byteAt(l);return this.index+=a,u},readString:function(a){return o.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},r.exports=s},{"../utils":32}],19:[function(n,r,i){var o=n("./Uint8ArrayReader");function s(a){o.call(this,a)}n("../utils").inherits(s,o),s.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=s},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(n,r,i){var o=n("./DataReader");function s(a){o.call(this,a)}n("../utils").inherits(s,o),s.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},s.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},s.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},s.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=s},{"../utils":32,"./DataReader":18}],21:[function(n,r,i){var o=n("./ArrayReader");function s(a){o.call(this,a)}n("../utils").inherits(s,o),s.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=s},{"../utils":32,"./ArrayReader":17}],22:[function(n,r,i){var o=n("../utils"),s=n("../support"),a=n("./ArrayReader"),l=n("./StringReader"),u=n("./NodeBufferReader"),c=n("./Uint8ArrayReader");r.exports=function(m){var d=o.getTypeOf(m);return o.checkSupport(d),d!=="string"||s.uint8array?d==="nodebuffer"?new u(m):s.uint8array?new c(o.transformTo("uint8array",m)):new a(o.transformTo("array",m)):new l(m)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(n,r,i){i.LOCAL_FILE_HEADER="PK",i.CENTRAL_FILE_HEADER="PK",i.CENTRAL_DIRECTORY_END="PK",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",i.ZIP64_CENTRAL_DIRECTORY_END="PK",i.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(n,r,i){var o=n("./GenericWorker"),s=n("../utils");function a(l){o.call(this,"ConvertWorker to "+l),this.destType=l}s.inherits(a,o),a.prototype.processChunk=function(l){this.push({data:s.transformTo(this.destType,l.data),meta:l.meta})},r.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(n,r,i){var o=n("./GenericWorker"),s=n("../crc32");function a(){o.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}n("../utils").inherits(a,o),a.prototype.processChunk=function(l){this.streamInfo.crc32=s(l.data,this.streamInfo.crc32||0),this.push(l)},r.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(n,r,i){var o=n("../utils"),s=n("./GenericWorker");function a(l){s.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}o.inherits(a,s),a.prototype.processChunk=function(l){if(l){var u=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=u+l.data.length}s.prototype.processChunk.call(this,l)},r.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(n,r,i){var o=n("../utils"),s=n("./GenericWorker");function a(l){s.call(this,"DataWorker");var u=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(c){u.dataIsReady=!0,u.data=c,u.max=c&&c.length||0,u.type=o.getTypeOf(c),u.isPaused||u._tickAndRepeat()},function(c){u.error(c)})}o.inherits(a,s),a.prototype.cleanUp=function(){s.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,o.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(o.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,u=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,u);break;case"uint8array":l=this.data.subarray(this.index,u);break;case"array":case"nodebuffer":l=this.data.slice(this.index,u)}return this.index=u,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(n,r,i){function o(s){this.name=s||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}o.prototype={push:function(s){this.emit("data",s)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(s){this.emit("error",s)}return!0},error:function(s){return!this.isFinished&&(this.isPaused?this.generatedError=s:(this.isFinished=!0,this.emit("error",s),this.previous&&this.previous.error(s),this.cleanUp()),!0)},on:function(s,a){return this._listeners[s].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(s,a){if(this._listeners[s])for(var l=0;l<this._listeners[s].length;l++)this._listeners[s][l].call(this,a)},pipe:function(s){return s.registerPrevious(this)},registerPrevious:function(s){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=s.streamInfo,this.mergeStreamInfo(),this.previous=s;var a=this;return s.on("data",function(l){a.processChunk(l)}),s.on("end",function(){a.end()}),s.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var s=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),s=!0),this.previous&&this.previous.resume(),!s},flush:function(){},processChunk:function(s){this.push(s)},withStreamInfo:function(s,a){return this.extraStreamInfo[s]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var s in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,s)&&(this.streamInfo[s]=this.extraStreamInfo[s])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var s="Worker "+this.name;return this.previous?this.previous+" -> "+s:s}},r.exports=o},{}],29:[function(n,r,i){var o=n("../utils"),s=n("./ConvertWorker"),a=n("./GenericWorker"),l=n("../base64"),u=n("../support"),c=n("../external"),m=null;if(u.nodestream)try{m=n("../nodejs/NodejsStreamOutputAdapter")}catch{}function d(f,h){return new c.Promise(function(y,v){var g=[],x=f._internalType,E=f._outputType,_=f._mimeType;f.on("data",function(F,D){g.push(F),h&&h(D)}).on("error",function(F){g=[],v(F)}).on("end",function(){try{var F=function(D,P,N){switch(D){case"blob":return o.newBlob(o.transformTo("arraybuffer",P),N);case"base64":return l.encode(P);default:return o.transformTo(D,P)}}(E,function(D,P){var N,M=0,G=null,I=0;for(N=0;N<P.length;N++)I+=P[N].length;switch(D){case"string":return P.join("");case"array":return Array.prototype.concat.apply([],P);case"uint8array":for(G=new Uint8Array(I),N=0;N<P.length;N++)G.set(P[N],M),M+=P[N].length;return G;case"nodebuffer":return Buffer.concat(P);default:throw new Error("concat : unsupported type '"+D+"'")}}(x,g),_);y(F)}catch(D){v(D)}g=[]}).resume()})}function p(f,h,y){var v=h;switch(h){case"blob":case"arraybuffer":v="uint8array";break;case"base64":v="string"}try{this._internalType=v,this._outputType=h,this._mimeType=y,o.checkSupport(v),this._worker=f.pipe(new s(v)),f.lock()}catch(g){this._worker=new a("error"),this._worker.error(g)}}p.prototype={accumulate:function(f){return d(this,f)},on:function(f,h){var y=this;return f==="data"?this._worker.on(f,function(v){h.call(y,v.data,v.meta)}):this._worker.on(f,function(){o.delay(h,arguments,y)}),this},resume:function(){return o.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(f){if(o.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new m(this,{objectMode:this._outputType!=="nodebuffer"},f)}},r.exports=p},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(n,r,i){if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",i.nodebuffer=typeof Buffer<"u",i.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")i.blob=!1;else{var o=new ArrayBuffer(0);try{i.blob=new Blob([o],{type:"application/zip"}).size===0}catch{try{var s=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);s.append(o),i.blob=s.getBlob("application/zip").size===0}catch{i.blob=!1}}}try{i.nodestream=!!n("readable-stream").Readable}catch{i.nodestream=!1}},{"readable-stream":16}],31:[function(n,r,i){for(var o=n("./utils"),s=n("./support"),a=n("./nodejsUtils"),l=n("./stream/GenericWorker"),u=new Array(256),c=0;c<256;c++)u[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;u[254]=u[254]=1;function m(){l.call(this,"utf-8 decode"),this.leftOver=null}function d(){l.call(this,"utf-8 encode")}i.utf8encode=function(p){return s.nodebuffer?a.newBufferFrom(p,"utf-8"):function(f){var h,y,v,g,x,E=f.length,_=0;for(g=0;g<E;g++)(64512&(y=f.charCodeAt(g)))==55296&&g+1<E&&(64512&(v=f.charCodeAt(g+1)))==56320&&(y=65536+(y-55296<<10)+(v-56320),g++),_+=y<128?1:y<2048?2:y<65536?3:4;for(h=s.uint8array?new Uint8Array(_):new Array(_),g=x=0;x<_;g++)(64512&(y=f.charCodeAt(g)))==55296&&g+1<E&&(64512&(v=f.charCodeAt(g+1)))==56320&&(y=65536+(y-55296<<10)+(v-56320),g++),y<128?h[x++]=y:(y<2048?h[x++]=192|y>>>6:(y<65536?h[x++]=224|y>>>12:(h[x++]=240|y>>>18,h[x++]=128|y>>>12&63),h[x++]=128|y>>>6&63),h[x++]=128|63&y);return h}(p)},i.utf8decode=function(p){return s.nodebuffer?o.transformTo("nodebuffer",p).toString("utf-8"):function(f){var h,y,v,g,x=f.length,E=new Array(2*x);for(h=y=0;h<x;)if((v=f[h++])<128)E[y++]=v;else if(4<(g=u[v]))E[y++]=65533,h+=g-1;else{for(v&=g===2?31:g===3?15:7;1<g&&h<x;)v=v<<6|63&f[h++],g--;1<g?E[y++]=65533:v<65536?E[y++]=v:(v-=65536,E[y++]=55296|v>>10&1023,E[y++]=56320|1023&v)}return E.length!==y&&(E.subarray?E=E.subarray(0,y):E.length=y),o.applyFromCharCode(E)}(p=o.transformTo(s.uint8array?"uint8array":"array",p))},o.inherits(m,l),m.prototype.processChunk=function(p){var f=o.transformTo(s.uint8array?"uint8array":"array",p.data);if(this.leftOver&&this.leftOver.length){if(s.uint8array){var h=f;(f=new Uint8Array(h.length+this.leftOver.length)).set(this.leftOver,0),f.set(h,this.leftOver.length)}else f=this.leftOver.concat(f);this.leftOver=null}var y=function(g,x){var E;for((x=x||g.length)>g.length&&(x=g.length),E=x-1;0<=E&&(192&g[E])==128;)E--;return E<0||E===0?x:E+u[g[E]]>x?E:x}(f),v=f;y!==f.length&&(s.uint8array?(v=f.subarray(0,y),this.leftOver=f.subarray(y,f.length)):(v=f.slice(0,y),this.leftOver=f.slice(y,f.length))),this.push({data:i.utf8decode(v),meta:p.meta})},m.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=m,o.inherits(d,l),d.prototype.processChunk=function(p){this.push({data:i.utf8encode(p.data),meta:p.meta})},i.Utf8EncodeWorker=d},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(n,r,i){var o=n("./support"),s=n("./base64"),a=n("./nodejsUtils"),l=n("./external");function u(h){return h}function c(h,y){for(var v=0;v<h.length;++v)y[v]=255&h.charCodeAt(v);return y}n("setimmediate"),i.newBlob=function(h,y){i.checkSupport("blob");try{return new Blob([h],{type:y})}catch{try{var v=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return v.append(h),v.getBlob(y)}catch{throw new Error("Bug : can't construct the Blob.")}}};var m={stringifyByChunk:function(h,y,v){var g=[],x=0,E=h.length;if(E<=v)return String.fromCharCode.apply(null,h);for(;x<E;)y==="array"||y==="nodebuffer"?g.push(String.fromCharCode.apply(null,h.slice(x,Math.min(x+v,E)))):g.push(String.fromCharCode.apply(null,h.subarray(x,Math.min(x+v,E)))),x+=v;return g.join("")},stringifyByChar:function(h){for(var y="",v=0;v<h.length;v++)y+=String.fromCharCode(h[v]);return y},applyCanBeUsed:{uint8array:function(){try{return o.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return o.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function d(h){var y=65536,v=i.getTypeOf(h),g=!0;if(v==="uint8array"?g=m.applyCanBeUsed.uint8array:v==="nodebuffer"&&(g=m.applyCanBeUsed.nodebuffer),g)for(;1<y;)try{return m.stringifyByChunk(h,v,y)}catch{y=Math.floor(y/2)}return m.stringifyByChar(h)}function p(h,y){for(var v=0;v<h.length;v++)y[v]=h[v];return y}i.applyFromCharCode=d;var f={};f.string={string:u,array:function(h){return c(h,new Array(h.length))},arraybuffer:function(h){return f.string.uint8array(h).buffer},uint8array:function(h){return c(h,new Uint8Array(h.length))},nodebuffer:function(h){return c(h,a.allocBuffer(h.length))}},f.array={string:d,array:u,arraybuffer:function(h){return new Uint8Array(h).buffer},uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return a.newBufferFrom(h)}},f.arraybuffer={string:function(h){return d(new Uint8Array(h))},array:function(h){return p(new Uint8Array(h),new Array(h.byteLength))},arraybuffer:u,uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return a.newBufferFrom(new Uint8Array(h))}},f.uint8array={string:d,array:function(h){return p(h,new Array(h.length))},arraybuffer:function(h){return h.buffer},uint8array:u,nodebuffer:function(h){return a.newBufferFrom(h)}},f.nodebuffer={string:d,array:function(h){return p(h,new Array(h.length))},arraybuffer:function(h){return f.nodebuffer.uint8array(h).buffer},uint8array:function(h){return p(h,new Uint8Array(h.length))},nodebuffer:u},i.transformTo=function(h,y){if(y=y||"",!h)return y;i.checkSupport(h);var v=i.getTypeOf(y);return f[v][h](y)},i.resolve=function(h){for(var y=h.split("/"),v=[],g=0;g<y.length;g++){var x=y[g];x==="."||x===""&&g!==0&&g!==y.length-1||(x===".."?v.pop():v.push(x))}return v.join("/")},i.getTypeOf=function(h){return typeof h=="string"?"string":Object.prototype.toString.call(h)==="[object Array]"?"array":o.nodebuffer&&a.isBuffer(h)?"nodebuffer":o.uint8array&&h instanceof Uint8Array?"uint8array":o.arraybuffer&&h instanceof ArrayBuffer?"arraybuffer":void 0},i.checkSupport=function(h){if(!o[h.toLowerCase()])throw new Error(h+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(h){var y,v,g="";for(v=0;v<(h||"").length;v++)g+="\\x"+((y=h.charCodeAt(v))<16?"0":"")+y.toString(16).toUpperCase();return g},i.delay=function(h,y,v){setImmediate(function(){h.apply(v||null,y||[])})},i.inherits=function(h,y){function v(){}v.prototype=y.prototype,h.prototype=new v},i.extend=function(){var h,y,v={};for(h=0;h<arguments.length;h++)for(y in arguments[h])Object.prototype.hasOwnProperty.call(arguments[h],y)&&v[y]===void 0&&(v[y]=arguments[h][y]);return v},i.prepareContent=function(h,y,v,g,x){return l.Promise.resolve(y).then(function(E){return o.blob&&(E instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(E))!==-1)&&typeof FileReader<"u"?new l.Promise(function(_,F){var D=new FileReader;D.onload=function(P){_(P.target.result)},D.onerror=function(P){F(P.target.error)},D.readAsArrayBuffer(E)}):E}).then(function(E){var _=i.getTypeOf(E);return _?(_==="arraybuffer"?E=i.transformTo("uint8array",E):_==="string"&&(x?E=s.decode(E):v&&g!==!0&&(E=function(F){return c(F,o.uint8array?new Uint8Array(F.length):new Array(F.length))}(E))),E):l.Promise.reject(new Error("Can't read the data of '"+h+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(n,r,i){var o=n("./reader/readerFor"),s=n("./utils"),a=n("./signature"),l=n("./zipEntry"),u=n("./support");function c(m){this.files=[],this.loadOptions=m}c.prototype={checkSignature:function(m){if(!this.reader.readAndCheckSignature(m)){this.reader.index-=4;var d=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+s.pretty(d)+", expected "+s.pretty(m)+")")}},isSignature:function(m,d){var p=this.reader.index;this.reader.setIndex(m);var f=this.reader.readString(4)===d;return this.reader.setIndex(p),f},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var m=this.reader.readData(this.zipCommentLength),d=u.uint8array?"uint8array":"array",p=s.transformTo(d,m);this.zipComment=this.loadOptions.decodeFileName(p)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var m,d,p,f=this.zip64EndOfCentralSize-44;0<f;)m=this.reader.readInt(2),d=this.reader.readInt(4),p=this.reader.readData(d),this.zip64ExtensibleData[m]={id:m,length:d,value:p}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var m,d;for(m=0;m<this.files.length;m++)d=this.files[m],this.reader.setIndex(d.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),d.readLocalPart(this.reader),d.handleUTF8(),d.processAttributes()},readCentralDir:function(){var m;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(m=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(m);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var m=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(m<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(m);var d=m;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===s.MAX_VALUE_16BITS||this.diskWithCentralDirStart===s.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===s.MAX_VALUE_16BITS||this.centralDirRecords===s.MAX_VALUE_16BITS||this.centralDirSize===s.MAX_VALUE_32BITS||this.centralDirOffset===s.MAX_VALUE_32BITS){if(this.zip64=!0,(m=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(m),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var p=this.centralDirOffset+this.centralDirSize;this.zip64&&(p+=20,p+=12+this.zip64EndOfCentralSize);var f=d-p;if(0<f)this.isSignature(d,a.CENTRAL_FILE_HEADER)||(this.reader.zero=f);else if(f<0)throw new Error("Corrupted zip: missing "+Math.abs(f)+" bytes.")},prepareReader:function(m){this.reader=o(m)},load:function(m){this.prepareReader(m),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=c},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(n,r,i){var o=n("./reader/readerFor"),s=n("./utils"),a=n("./compressedObject"),l=n("./crc32"),u=n("./utf8"),c=n("./compressions"),m=n("./support");function d(p,f){this.options=p,this.loadOptions=f}d.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(p){var f,h;if(p.skip(22),this.fileNameLength=p.readInt(2),h=p.readInt(2),this.fileName=p.readData(this.fileNameLength),p.skip(h),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((f=function(y){for(var v in c)if(Object.prototype.hasOwnProperty.call(c,v)&&c[v].magic===y)return c[v];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,f,p.readData(this.compressedSize))},readCentralPart:function(p){this.versionMadeBy=p.readInt(2),p.skip(2),this.bitFlag=p.readInt(2),this.compressionMethod=p.readString(2),this.date=p.readDate(),this.crc32=p.readInt(4),this.compressedSize=p.readInt(4),this.uncompressedSize=p.readInt(4);var f=p.readInt(2);if(this.extraFieldsLength=p.readInt(2),this.fileCommentLength=p.readInt(2),this.diskNumberStart=p.readInt(2),this.internalFileAttributes=p.readInt(2),this.externalFileAttributes=p.readInt(4),this.localHeaderOffset=p.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");p.skip(f),this.readExtraFields(p),this.parseZIP64ExtraField(p),this.fileComment=p.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var p=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),p==0&&(this.dosPermissions=63&this.externalFileAttributes),p==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var p=o(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=p.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=p.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=p.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=p.readInt(4))}},readExtraFields:function(p){var f,h,y,v=p.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});p.index+4<v;)f=p.readInt(2),h=p.readInt(2),y=p.readData(h),this.extraFields[f]={id:f,length:h,value:y};p.setIndex(v)},handleUTF8:function(){var p=m.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=u.utf8decode(this.fileName),this.fileCommentStr=u.utf8decode(this.fileComment);else{var f=this.findExtraFieldUnicodePath();if(f!==null)this.fileNameStr=f;else{var h=s.transformTo(p,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(h)}var y=this.findExtraFieldUnicodeComment();if(y!==null)this.fileCommentStr=y;else{var v=s.transformTo(p,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(v)}}},findExtraFieldUnicodePath:function(){var p=this.extraFields[28789];if(p){var f=o(p.value);return f.readInt(1)!==1||l(this.fileName)!==f.readInt(4)?null:u.utf8decode(f.readData(p.length-5))}return null},findExtraFieldUnicodeComment:function(){var p=this.extraFields[25461];if(p){var f=o(p.value);return f.readInt(1)!==1||l(this.fileComment)!==f.readInt(4)?null:u.utf8decode(f.readData(p.length-5))}return null}},r.exports=d},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(n,r,i){function o(f,h,y){this.name=f,this.dir=y.dir,this.date=y.date,this.comment=y.comment,this.unixPermissions=y.unixPermissions,this.dosPermissions=y.dosPermissions,this._data=h,this._dataBinary=y.binary,this.options={compression:y.compression,compressionOptions:y.compressionOptions}}var s=n("./stream/StreamHelper"),a=n("./stream/DataWorker"),l=n("./utf8"),u=n("./compressedObject"),c=n("./stream/GenericWorker");o.prototype={internalStream:function(f){var h=null,y="string";try{if(!f)throw new Error("No output type specified.");var v=(y=f.toLowerCase())==="string"||y==="text";y!=="binarystring"&&y!=="text"||(y="string"),h=this._decompressWorker();var g=!this._dataBinary;g&&!v&&(h=h.pipe(new l.Utf8EncodeWorker)),!g&&v&&(h=h.pipe(new l.Utf8DecodeWorker))}catch(x){(h=new c("error")).error(x)}return new s(h,y,"")},async:function(f,h){return this.internalStream(f).accumulate(h)},nodeStream:function(f,h){return this.internalStream(f||"nodebuffer").toNodejsStream(h)},_compressWorker:function(f,h){if(this._data instanceof u&&this._data.compression.magic===f.magic)return this._data.getCompressedWorker();var y=this._decompressWorker();return this._dataBinary||(y=y.pipe(new l.Utf8EncodeWorker)),u.createWorkerFrom(y,f,h)},_decompressWorker:function(){return this._data instanceof u?this._data.getContentWorker():this._data instanceof c?this._data:new a(this._data)}};for(var m=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],d=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},p=0;p<m.length;p++)o.prototype[m[p]]=d;r.exports=o},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(n,r,i){(function(o){var s,a,l=o.MutationObserver||o.WebKitMutationObserver;if(l){var u=0,c=new l(f),m=o.document.createTextNode("");c.observe(m,{characterData:!0}),s=function(){m.data=u=++u%2}}else if(o.setImmediate||o.MessageChannel===void 0)s="document"in o&&"onreadystatechange"in o.document.createElement("script")?function(){var h=o.document.createElement("script");h.onreadystatechange=function(){f(),h.onreadystatechange=null,h.parentNode.removeChild(h),h=null},o.document.documentElement.appendChild(h)}:function(){setTimeout(f,0)};else{var d=new o.MessageChannel;d.port1.onmessage=f,s=function(){d.port2.postMessage(0)}}var p=[];function f(){var h,y;a=!0;for(var v=p.length;v;){for(y=p,p=[],h=-1;++h<v;)y[h]();v=p.length}a=!1}r.exports=function(h){p.push(h)!==1||a||s()}}).call(this,typeof Zn<"u"?Zn:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(n,r,i){var o=n("immediate");function s(){}var a={},l=["REJECTED"],u=["FULFILLED"],c=["PENDING"];function m(v){if(typeof v!="function")throw new TypeError("resolver must be a function");this.state=c,this.queue=[],this.outcome=void 0,v!==s&&h(this,v)}function d(v,g,x){this.promise=v,typeof g=="function"&&(this.onFulfilled=g,this.callFulfilled=this.otherCallFulfilled),typeof x=="function"&&(this.onRejected=x,this.callRejected=this.otherCallRejected)}function p(v,g,x){o(function(){var E;try{E=g(x)}catch(_){return a.reject(v,_)}E===v?a.reject(v,new TypeError("Cannot resolve promise with itself")):a.resolve(v,E)})}function f(v){var g=v&&v.then;if(v&&(typeof v=="object"||typeof v=="function")&&typeof g=="function")return function(){g.apply(v,arguments)}}function h(v,g){var x=!1;function E(D){x||(x=!0,a.reject(v,D))}function _(D){x||(x=!0,a.resolve(v,D))}var F=y(function(){g(_,E)});F.status==="error"&&E(F.value)}function y(v,g){var x={};try{x.value=v(g),x.status="success"}catch(E){x.status="error",x.value=E}return x}(r.exports=m).prototype.finally=function(v){if(typeof v!="function")return this;var g=this.constructor;return this.then(function(x){return g.resolve(v()).then(function(){return x})},function(x){return g.resolve(v()).then(function(){throw x})})},m.prototype.catch=function(v){return this.then(null,v)},m.prototype.then=function(v,g){if(typeof v!="function"&&this.state===u||typeof g!="function"&&this.state===l)return this;var x=new this.constructor(s);return this.state!==c?p(x,this.state===u?v:g,this.outcome):this.queue.push(new d(x,v,g)),x},d.prototype.callFulfilled=function(v){a.resolve(this.promise,v)},d.prototype.otherCallFulfilled=function(v){p(this.promise,this.onFulfilled,v)},d.prototype.callRejected=function(v){a.reject(this.promise,v)},d.prototype.otherCallRejected=function(v){p(this.promise,this.onRejected,v)},a.resolve=function(v,g){var x=y(f,g);if(x.status==="error")return a.reject(v,x.value);var E=x.value;if(E)h(v,E);else{v.state=u,v.outcome=g;for(var _=-1,F=v.queue.length;++_<F;)v.queue[_].callFulfilled(g)}return v},a.reject=function(v,g){v.state=l,v.outcome=g;for(var x=-1,E=v.queue.length;++x<E;)v.queue[x].callRejected(g);return v},m.resolve=function(v){return v instanceof this?v:a.resolve(new this(s),v)},m.reject=function(v){var g=new this(s);return a.reject(g,v)},m.all=function(v){var g=this;if(Object.prototype.toString.call(v)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=v.length,E=!1;if(!x)return this.resolve([]);for(var _=new Array(x),F=0,D=-1,P=new this(s);++D<x;)N(v[D],D);return P;function N(M,G){g.resolve(M).then(function(I){_[G]=I,++F!==x||E||(E=!0,a.resolve(P,_))},function(I){E||(E=!0,a.reject(P,I))})}},m.race=function(v){var g=this;if(Object.prototype.toString.call(v)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=v.length,E=!1;if(!x)return this.resolve([]);for(var _=-1,F=new this(s);++_<x;)D=v[_],g.resolve(D).then(function(P){E||(E=!0,a.resolve(F,P))},function(P){E||(E=!0,a.reject(F,P))});var D;return F}},{immediate:36}],38:[function(n,r,i){var o={};(0,n("./lib/utils/common").assign)(o,n("./lib/deflate"),n("./lib/inflate"),n("./lib/zlib/constants")),r.exports=o},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(n,r,i){var o=n("./zlib/deflate"),s=n("./utils/common"),a=n("./utils/strings"),l=n("./zlib/messages"),u=n("./zlib/zstream"),c=Object.prototype.toString,m=0,d=-1,p=0,f=8;function h(v){if(!(this instanceof h))return new h(v);this.options=s.assign({level:d,method:f,chunkSize:16384,windowBits:15,memLevel:8,strategy:p,to:""},v||{});var g=this.options;g.raw&&0<g.windowBits?g.windowBits=-g.windowBits:g.gzip&&0<g.windowBits&&g.windowBits<16&&(g.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var x=o.deflateInit2(this.strm,g.level,g.method,g.windowBits,g.memLevel,g.strategy);if(x!==m)throw new Error(l[x]);if(g.header&&o.deflateSetHeader(this.strm,g.header),g.dictionary){var E;if(E=typeof g.dictionary=="string"?a.string2buf(g.dictionary):c.call(g.dictionary)==="[object ArrayBuffer]"?new Uint8Array(g.dictionary):g.dictionary,(x=o.deflateSetDictionary(this.strm,E))!==m)throw new Error(l[x]);this._dict_set=!0}}function y(v,g){var x=new h(g);if(x.push(v,!0),x.err)throw x.msg||l[x.err];return x.result}h.prototype.push=function(v,g){var x,E,_=this.strm,F=this.options.chunkSize;if(this.ended)return!1;E=g===~~g?g:g===!0?4:0,typeof v=="string"?_.input=a.string2buf(v):c.call(v)==="[object ArrayBuffer]"?_.input=new Uint8Array(v):_.input=v,_.next_in=0,_.avail_in=_.input.length;do{if(_.avail_out===0&&(_.output=new s.Buf8(F),_.next_out=0,_.avail_out=F),(x=o.deflate(_,E))!==1&&x!==m)return this.onEnd(x),!(this.ended=!0);_.avail_out!==0&&(_.avail_in!==0||E!==4&&E!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(s.shrinkBuf(_.output,_.next_out))):this.onData(s.shrinkBuf(_.output,_.next_out)))}while((0<_.avail_in||_.avail_out===0)&&x!==1);return E===4?(x=o.deflateEnd(this.strm),this.onEnd(x),this.ended=!0,x===m):E!==2||(this.onEnd(m),!(_.avail_out=0))},h.prototype.onData=function(v){this.chunks.push(v)},h.prototype.onEnd=function(v){v===m&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=v,this.msg=this.strm.msg},i.Deflate=h,i.deflate=y,i.deflateRaw=function(v,g){return(g=g||{}).raw=!0,y(v,g)},i.gzip=function(v,g){return(g=g||{}).gzip=!0,y(v,g)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(n,r,i){var o=n("./zlib/inflate"),s=n("./utils/common"),a=n("./utils/strings"),l=n("./zlib/constants"),u=n("./zlib/messages"),c=n("./zlib/zstream"),m=n("./zlib/gzheader"),d=Object.prototype.toString;function p(h){if(!(this instanceof p))return new p(h);this.options=s.assign({chunkSize:16384,windowBits:0,to:""},h||{});var y=this.options;y.raw&&0<=y.windowBits&&y.windowBits<16&&(y.windowBits=-y.windowBits,y.windowBits===0&&(y.windowBits=-15)),!(0<=y.windowBits&&y.windowBits<16)||h&&h.windowBits||(y.windowBits+=32),15<y.windowBits&&y.windowBits<48&&!(15&y.windowBits)&&(y.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var v=o.inflateInit2(this.strm,y.windowBits);if(v!==l.Z_OK)throw new Error(u[v]);this.header=new m,o.inflateGetHeader(this.strm,this.header)}function f(h,y){var v=new p(y);if(v.push(h,!0),v.err)throw v.msg||u[v.err];return v.result}p.prototype.push=function(h,y){var v,g,x,E,_,F,D=this.strm,P=this.options.chunkSize,N=this.options.dictionary,M=!1;if(this.ended)return!1;g=y===~~y?y:y===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof h=="string"?D.input=a.binstring2buf(h):d.call(h)==="[object ArrayBuffer]"?D.input=new Uint8Array(h):D.input=h,D.next_in=0,D.avail_in=D.input.length;do{if(D.avail_out===0&&(D.output=new s.Buf8(P),D.next_out=0,D.avail_out=P),(v=o.inflate(D,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&N&&(F=typeof N=="string"?a.string2buf(N):d.call(N)==="[object ArrayBuffer]"?new Uint8Array(N):N,v=o.inflateSetDictionary(this.strm,F)),v===l.Z_BUF_ERROR&&M===!0&&(v=l.Z_OK,M=!1),v!==l.Z_STREAM_END&&v!==l.Z_OK)return this.onEnd(v),!(this.ended=!0);D.next_out&&(D.avail_out!==0&&v!==l.Z_STREAM_END&&(D.avail_in!==0||g!==l.Z_FINISH&&g!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(x=a.utf8border(D.output,D.next_out),E=D.next_out-x,_=a.buf2string(D.output,x),D.next_out=E,D.avail_out=P-E,E&&s.arraySet(D.output,D.output,x,E,0),this.onData(_)):this.onData(s.shrinkBuf(D.output,D.next_out)))),D.avail_in===0&&D.avail_out===0&&(M=!0)}while((0<D.avail_in||D.avail_out===0)&&v!==l.Z_STREAM_END);return v===l.Z_STREAM_END&&(g=l.Z_FINISH),g===l.Z_FINISH?(v=o.inflateEnd(this.strm),this.onEnd(v),this.ended=!0,v===l.Z_OK):g!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(D.avail_out=0))},p.prototype.onData=function(h){this.chunks.push(h)},p.prototype.onEnd=function(h){h===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},i.Inflate=p,i.inflate=f,i.inflateRaw=function(h,y){return(y=y||{}).raw=!0,f(h,y)},i.ungzip=f},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(n,r,i){var o=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";i.assign=function(l){for(var u=Array.prototype.slice.call(arguments,1);u.length;){var c=u.shift();if(c){if(typeof c!="object")throw new TypeError(c+"must be non-object");for(var m in c)c.hasOwnProperty(m)&&(l[m]=c[m])}}return l},i.shrinkBuf=function(l,u){return l.length===u?l:l.subarray?l.subarray(0,u):(l.length=u,l)};var s={arraySet:function(l,u,c,m,d){if(u.subarray&&l.subarray)l.set(u.subarray(c,c+m),d);else for(var p=0;p<m;p++)l[d+p]=u[c+p]},flattenChunks:function(l){var u,c,m,d,p,f;for(u=m=0,c=l.length;u<c;u++)m+=l[u].length;for(f=new Uint8Array(m),u=d=0,c=l.length;u<c;u++)p=l[u],f.set(p,d),d+=p.length;return f}},a={arraySet:function(l,u,c,m,d){for(var p=0;p<m;p++)l[d+p]=u[c+p]},flattenChunks:function(l){return[].concat.apply([],l)}};i.setTyped=function(l){l?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,s)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,a))},i.setTyped(o)},{}],42:[function(n,r,i){var o=n("./common"),s=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{s=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new o.Buf8(256),u=0;u<256;u++)l[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;function c(m,d){if(d<65537&&(m.subarray&&a||!m.subarray&&s))return String.fromCharCode.apply(null,o.shrinkBuf(m,d));for(var p="",f=0;f<d;f++)p+=String.fromCharCode(m[f]);return p}l[254]=l[254]=1,i.string2buf=function(m){var d,p,f,h,y,v=m.length,g=0;for(h=0;h<v;h++)(64512&(p=m.charCodeAt(h)))==55296&&h+1<v&&(64512&(f=m.charCodeAt(h+1)))==56320&&(p=65536+(p-55296<<10)+(f-56320),h++),g+=p<128?1:p<2048?2:p<65536?3:4;for(d=new o.Buf8(g),h=y=0;y<g;h++)(64512&(p=m.charCodeAt(h)))==55296&&h+1<v&&(64512&(f=m.charCodeAt(h+1)))==56320&&(p=65536+(p-55296<<10)+(f-56320),h++),p<128?d[y++]=p:(p<2048?d[y++]=192|p>>>6:(p<65536?d[y++]=224|p>>>12:(d[y++]=240|p>>>18,d[y++]=128|p>>>12&63),d[y++]=128|p>>>6&63),d[y++]=128|63&p);return d},i.buf2binstring=function(m){return c(m,m.length)},i.binstring2buf=function(m){for(var d=new o.Buf8(m.length),p=0,f=d.length;p<f;p++)d[p]=m.charCodeAt(p);return d},i.buf2string=function(m,d){var p,f,h,y,v=d||m.length,g=new Array(2*v);for(p=f=0;p<v;)if((h=m[p++])<128)g[f++]=h;else if(4<(y=l[h]))g[f++]=65533,p+=y-1;else{for(h&=y===2?31:y===3?15:7;1<y&&p<v;)h=h<<6|63&m[p++],y--;1<y?g[f++]=65533:h<65536?g[f++]=h:(h-=65536,g[f++]=55296|h>>10&1023,g[f++]=56320|1023&h)}return c(g,f)},i.utf8border=function(m,d){var p;for((d=d||m.length)>m.length&&(d=m.length),p=d-1;0<=p&&(192&m[p])==128;)p--;return p<0||p===0?d:p+l[m[p]]>d?p:d}},{"./common":41}],43:[function(n,r,i){r.exports=function(o,s,a,l){for(var u=65535&o|0,c=o>>>16&65535|0,m=0;a!==0;){for(a-=m=2e3<a?2e3:a;c=c+(u=u+s[l++]|0)|0,--m;);u%=65521,c%=65521}return u|c<<16|0}},{}],44:[function(n,r,i){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(n,r,i){var o=function(){for(var s,a=[],l=0;l<256;l++){s=l;for(var u=0;u<8;u++)s=1&s?3988292384^s>>>1:s>>>1;a[l]=s}return a}();r.exports=function(s,a,l,u){var c=o,m=u+l;s^=-1;for(var d=u;d<m;d++)s=s>>>8^c[255&(s^a[d])];return-1^s}},{}],46:[function(n,r,i){var o,s=n("../utils/common"),a=n("./trees"),l=n("./adler32"),u=n("./crc32"),c=n("./messages"),m=0,d=4,p=0,f=-2,h=-1,y=4,v=2,g=8,x=9,E=286,_=30,F=19,D=2*E+1,P=15,N=3,M=258,G=M+N+1,I=42,O=113,C=1,U=2,X=3,q=4;function W(A,K){return A.msg=c[K],K}function V(A){return(A<<1)-(4<A?9:0)}function Y(A){for(var K=A.length;0<=--K;)A[K]=0}function L(A){var K=A.state,H=K.pending;H>A.avail_out&&(H=A.avail_out),H!==0&&(s.arraySet(A.output,K.pending_buf,K.pending_out,H,A.next_out),A.next_out+=H,K.pending_out+=H,A.total_out+=H,A.avail_out-=H,K.pending-=H,K.pending===0&&(K.pending_out=0))}function j(A,K){a._tr_flush_block(A,0<=A.block_start?A.block_start:-1,A.strstart-A.block_start,K),A.block_start=A.strstart,L(A.strm)}function ue(A,K){A.pending_buf[A.pending++]=K}function re(A,K){A.pending_buf[A.pending++]=K>>>8&255,A.pending_buf[A.pending++]=255&K}function ne(A,K){var H,B,b=A.max_chain_length,k=A.strstart,T=A.prev_length,$=A.nice_match,R=A.strstart>A.w_size-G?A.strstart-(A.w_size-G):0,z=A.window,Q=A.w_mask,Z=A.prev,se=A.strstart+M,xe=z[k+T-1],Ee=z[k+T];A.prev_length>=A.good_match&&(b>>=2),$>A.lookahead&&($=A.lookahead);do if(z[(H=K)+T]===Ee&&z[H+T-1]===xe&&z[H]===z[k]&&z[++H]===z[k+1]){k+=2,H++;do;while(z[++k]===z[++H]&&z[++k]===z[++H]&&z[++k]===z[++H]&&z[++k]===z[++H]&&z[++k]===z[++H]&&z[++k]===z[++H]&&z[++k]===z[++H]&&z[++k]===z[++H]&&k<se);if(B=M-(se-k),k=se-M,T<B){if(A.match_start=K,$<=(T=B))break;xe=z[k+T-1],Ee=z[k+T]}}while((K=Z[K&Q])>R&&--b!=0);return T<=A.lookahead?T:A.lookahead}function we(A){var K,H,B,b,k,T,$,R,z,Q,Z=A.w_size;do{if(b=A.window_size-A.lookahead-A.strstart,A.strstart>=Z+(Z-G)){for(s.arraySet(A.window,A.window,Z,Z,0),A.match_start-=Z,A.strstart-=Z,A.block_start-=Z,K=H=A.hash_size;B=A.head[--K],A.head[K]=Z<=B?B-Z:0,--H;);for(K=H=Z;B=A.prev[--K],A.prev[K]=Z<=B?B-Z:0,--H;);b+=Z}if(A.strm.avail_in===0)break;if(T=A.strm,$=A.window,R=A.strstart+A.lookahead,z=b,Q=void 0,Q=T.avail_in,z<Q&&(Q=z),H=Q===0?0:(T.avail_in-=Q,s.arraySet($,T.input,T.next_in,Q,R),T.state.wrap===1?T.adler=l(T.adler,$,Q,R):T.state.wrap===2&&(T.adler=u(T.adler,$,Q,R)),T.next_in+=Q,T.total_in+=Q,Q),A.lookahead+=H,A.lookahead+A.insert>=N)for(k=A.strstart-A.insert,A.ins_h=A.window[k],A.ins_h=(A.ins_h<<A.hash_shift^A.window[k+1])&A.hash_mask;A.insert&&(A.ins_h=(A.ins_h<<A.hash_shift^A.window[k+N-1])&A.hash_mask,A.prev[k&A.w_mask]=A.head[A.ins_h],A.head[A.ins_h]=k,k++,A.insert--,!(A.lookahead+A.insert<N)););}while(A.lookahead<G&&A.strm.avail_in!==0)}function ae(A,K){for(var H,B;;){if(A.lookahead<G){if(we(A),A.lookahead<G&&K===m)return C;if(A.lookahead===0)break}if(H=0,A.lookahead>=N&&(A.ins_h=(A.ins_h<<A.hash_shift^A.window[A.strstart+N-1])&A.hash_mask,H=A.prev[A.strstart&A.w_mask]=A.head[A.ins_h],A.head[A.ins_h]=A.strstart),H!==0&&A.strstart-H<=A.w_size-G&&(A.match_length=ne(A,H)),A.match_length>=N)if(B=a._tr_tally(A,A.strstart-A.match_start,A.match_length-N),A.lookahead-=A.match_length,A.match_length<=A.max_lazy_match&&A.lookahead>=N){for(A.match_length--;A.strstart++,A.ins_h=(A.ins_h<<A.hash_shift^A.window[A.strstart+N-1])&A.hash_mask,H=A.prev[A.strstart&A.w_mask]=A.head[A.ins_h],A.head[A.ins_h]=A.strstart,--A.match_length!=0;);A.strstart++}else A.strstart+=A.match_length,A.match_length=0,A.ins_h=A.window[A.strstart],A.ins_h=(A.ins_h<<A.hash_shift^A.window[A.strstart+1])&A.hash_mask;else B=a._tr_tally(A,0,A.window[A.strstart]),A.lookahead--,A.strstart++;if(B&&(j(A,!1),A.strm.avail_out===0))return C}return A.insert=A.strstart<N-1?A.strstart:N-1,K===d?(j(A,!0),A.strm.avail_out===0?X:q):A.last_lit&&(j(A,!1),A.strm.avail_out===0)?C:U}function de(A,K){for(var H,B,b;;){if(A.lookahead<G){if(we(A),A.lookahead<G&&K===m)return C;if(A.lookahead===0)break}if(H=0,A.lookahead>=N&&(A.ins_h=(A.ins_h<<A.hash_shift^A.window[A.strstart+N-1])&A.hash_mask,H=A.prev[A.strstart&A.w_mask]=A.head[A.ins_h],A.head[A.ins_h]=A.strstart),A.prev_length=A.match_length,A.prev_match=A.match_start,A.match_length=N-1,H!==0&&A.prev_length<A.max_lazy_match&&A.strstart-H<=A.w_size-G&&(A.match_length=ne(A,H),A.match_length<=5&&(A.strategy===1||A.match_length===N&&4096<A.strstart-A.match_start)&&(A.match_length=N-1)),A.prev_length>=N&&A.match_length<=A.prev_length){for(b=A.strstart+A.lookahead-N,B=a._tr_tally(A,A.strstart-1-A.prev_match,A.prev_length-N),A.lookahead-=A.prev_length-1,A.prev_length-=2;++A.strstart<=b&&(A.ins_h=(A.ins_h<<A.hash_shift^A.window[A.strstart+N-1])&A.hash_mask,H=A.prev[A.strstart&A.w_mask]=A.head[A.ins_h],A.head[A.ins_h]=A.strstart),--A.prev_length!=0;);if(A.match_available=0,A.match_length=N-1,A.strstart++,B&&(j(A,!1),A.strm.avail_out===0))return C}else if(A.match_available){if((B=a._tr_tally(A,0,A.window[A.strstart-1]))&&j(A,!1),A.strstart++,A.lookahead--,A.strm.avail_out===0)return C}else A.match_available=1,A.strstart++,A.lookahead--}return A.match_available&&(B=a._tr_tally(A,0,A.window[A.strstart-1]),A.match_available=0),A.insert=A.strstart<N-1?A.strstart:N-1,K===d?(j(A,!0),A.strm.avail_out===0?X:q):A.last_lit&&(j(A,!1),A.strm.avail_out===0)?C:U}function me(A,K,H,B,b){this.good_length=A,this.max_lazy=K,this.nice_length=H,this.max_chain=B,this.func=b}function ve(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=g,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new s.Buf16(2*D),this.dyn_dtree=new s.Buf16(2*(2*_+1)),this.bl_tree=new s.Buf16(2*(2*F+1)),Y(this.dyn_ltree),Y(this.dyn_dtree),Y(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new s.Buf16(P+1),this.heap=new s.Buf16(2*E+1),Y(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new s.Buf16(2*E+1),Y(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function fe(A){var K;return A&&A.state?(A.total_in=A.total_out=0,A.data_type=v,(K=A.state).pending=0,K.pending_out=0,K.wrap<0&&(K.wrap=-K.wrap),K.status=K.wrap?I:O,A.adler=K.wrap===2?0:1,K.last_flush=m,a._tr_init(K),p):W(A,f)}function be(A){var K=fe(A);return K===p&&function(H){H.window_size=2*H.w_size,Y(H.head),H.max_lazy_match=o[H.level].max_lazy,H.good_match=o[H.level].good_length,H.nice_match=o[H.level].nice_length,H.max_chain_length=o[H.level].max_chain,H.strstart=0,H.block_start=0,H.lookahead=0,H.insert=0,H.match_length=H.prev_length=N-1,H.match_available=0,H.ins_h=0}(A.state),K}function Me(A,K,H,B,b,k){if(!A)return f;var T=1;if(K===h&&(K=6),B<0?(T=0,B=-B):15<B&&(T=2,B-=16),b<1||x<b||H!==g||B<8||15<B||K<0||9<K||k<0||y<k)return W(A,f);B===8&&(B=9);var $=new ve;return(A.state=$).strm=A,$.wrap=T,$.gzhead=null,$.w_bits=B,$.w_size=1<<$.w_bits,$.w_mask=$.w_size-1,$.hash_bits=b+7,$.hash_size=1<<$.hash_bits,$.hash_mask=$.hash_size-1,$.hash_shift=~~(($.hash_bits+N-1)/N),$.window=new s.Buf8(2*$.w_size),$.head=new s.Buf16($.hash_size),$.prev=new s.Buf16($.w_size),$.lit_bufsize=1<<b+6,$.pending_buf_size=4*$.lit_bufsize,$.pending_buf=new s.Buf8($.pending_buf_size),$.d_buf=1*$.lit_bufsize,$.l_buf=3*$.lit_bufsize,$.level=K,$.strategy=k,$.method=H,be(A)}o=[new me(0,0,0,0,function(A,K){var H=65535;for(H>A.pending_buf_size-5&&(H=A.pending_buf_size-5);;){if(A.lookahead<=1){if(we(A),A.lookahead===0&&K===m)return C;if(A.lookahead===0)break}A.strstart+=A.lookahead,A.lookahead=0;var B=A.block_start+H;if((A.strstart===0||A.strstart>=B)&&(A.lookahead=A.strstart-B,A.strstart=B,j(A,!1),A.strm.avail_out===0)||A.strstart-A.block_start>=A.w_size-G&&(j(A,!1),A.strm.avail_out===0))return C}return A.insert=0,K===d?(j(A,!0),A.strm.avail_out===0?X:q):(A.strstart>A.block_start&&(j(A,!1),A.strm.avail_out),C)}),new me(4,4,8,4,ae),new me(4,5,16,8,ae),new me(4,6,32,32,ae),new me(4,4,16,16,de),new me(8,16,32,32,de),new me(8,16,128,128,de),new me(8,32,128,256,de),new me(32,128,258,1024,de),new me(32,258,258,4096,de)],i.deflateInit=function(A,K){return Me(A,K,g,15,8,0)},i.deflateInit2=Me,i.deflateReset=be,i.deflateResetKeep=fe,i.deflateSetHeader=function(A,K){return A&&A.state?A.state.wrap!==2?f:(A.state.gzhead=K,p):f},i.deflate=function(A,K){var H,B,b,k;if(!A||!A.state||5<K||K<0)return A?W(A,f):f;if(B=A.state,!A.output||!A.input&&A.avail_in!==0||B.status===666&&K!==d)return W(A,A.avail_out===0?-5:f);if(B.strm=A,H=B.last_flush,B.last_flush=K,B.status===I)if(B.wrap===2)A.adler=0,ue(B,31),ue(B,139),ue(B,8),B.gzhead?(ue(B,(B.gzhead.text?1:0)+(B.gzhead.hcrc?2:0)+(B.gzhead.extra?4:0)+(B.gzhead.name?8:0)+(B.gzhead.comment?16:0)),ue(B,255&B.gzhead.time),ue(B,B.gzhead.time>>8&255),ue(B,B.gzhead.time>>16&255),ue(B,B.gzhead.time>>24&255),ue(B,B.level===9?2:2<=B.strategy||B.level<2?4:0),ue(B,255&B.gzhead.os),B.gzhead.extra&&B.gzhead.extra.length&&(ue(B,255&B.gzhead.extra.length),ue(B,B.gzhead.extra.length>>8&255)),B.gzhead.hcrc&&(A.adler=u(A.adler,B.pending_buf,B.pending,0)),B.gzindex=0,B.status=69):(ue(B,0),ue(B,0),ue(B,0),ue(B,0),ue(B,0),ue(B,B.level===9?2:2<=B.strategy||B.level<2?4:0),ue(B,3),B.status=O);else{var T=g+(B.w_bits-8<<4)<<8;T|=(2<=B.strategy||B.level<2?0:B.level<6?1:B.level===6?2:3)<<6,B.strstart!==0&&(T|=32),T+=31-T%31,B.status=O,re(B,T),B.strstart!==0&&(re(B,A.adler>>>16),re(B,65535&A.adler)),A.adler=1}if(B.status===69)if(B.gzhead.extra){for(b=B.pending;B.gzindex<(65535&B.gzhead.extra.length)&&(B.pending!==B.pending_buf_size||(B.gzhead.hcrc&&B.pending>b&&(A.adler=u(A.adler,B.pending_buf,B.pending-b,b)),L(A),b=B.pending,B.pending!==B.pending_buf_size));)ue(B,255&B.gzhead.extra[B.gzindex]),B.gzindex++;B.gzhead.hcrc&&B.pending>b&&(A.adler=u(A.adler,B.pending_buf,B.pending-b,b)),B.gzindex===B.gzhead.extra.length&&(B.gzindex=0,B.status=73)}else B.status=73;if(B.status===73)if(B.gzhead.name){b=B.pending;do{if(B.pending===B.pending_buf_size&&(B.gzhead.hcrc&&B.pending>b&&(A.adler=u(A.adler,B.pending_buf,B.pending-b,b)),L(A),b=B.pending,B.pending===B.pending_buf_size)){k=1;break}k=B.gzindex<B.gzhead.name.length?255&B.gzhead.name.charCodeAt(B.gzindex++):0,ue(B,k)}while(k!==0);B.gzhead.hcrc&&B.pending>b&&(A.adler=u(A.adler,B.pending_buf,B.pending-b,b)),k===0&&(B.gzindex=0,B.status=91)}else B.status=91;if(B.status===91)if(B.gzhead.comment){b=B.pending;do{if(B.pending===B.pending_buf_size&&(B.gzhead.hcrc&&B.pending>b&&(A.adler=u(A.adler,B.pending_buf,B.pending-b,b)),L(A),b=B.pending,B.pending===B.pending_buf_size)){k=1;break}k=B.gzindex<B.gzhead.comment.length?255&B.gzhead.comment.charCodeAt(B.gzindex++):0,ue(B,k)}while(k!==0);B.gzhead.hcrc&&B.pending>b&&(A.adler=u(A.adler,B.pending_buf,B.pending-b,b)),k===0&&(B.status=103)}else B.status=103;if(B.status===103&&(B.gzhead.hcrc?(B.pending+2>B.pending_buf_size&&L(A),B.pending+2<=B.pending_buf_size&&(ue(B,255&A.adler),ue(B,A.adler>>8&255),A.adler=0,B.status=O)):B.status=O),B.pending!==0){if(L(A),A.avail_out===0)return B.last_flush=-1,p}else if(A.avail_in===0&&V(K)<=V(H)&&K!==d)return W(A,-5);if(B.status===666&&A.avail_in!==0)return W(A,-5);if(A.avail_in!==0||B.lookahead!==0||K!==m&&B.status!==666){var $=B.strategy===2?function(R,z){for(var Q;;){if(R.lookahead===0&&(we(R),R.lookahead===0)){if(z===m)return C;break}if(R.match_length=0,Q=a._tr_tally(R,0,R.window[R.strstart]),R.lookahead--,R.strstart++,Q&&(j(R,!1),R.strm.avail_out===0))return C}return R.insert=0,z===d?(j(R,!0),R.strm.avail_out===0?X:q):R.last_lit&&(j(R,!1),R.strm.avail_out===0)?C:U}(B,K):B.strategy===3?function(R,z){for(var Q,Z,se,xe,Ee=R.window;;){if(R.lookahead<=M){if(we(R),R.lookahead<=M&&z===m)return C;if(R.lookahead===0)break}if(R.match_length=0,R.lookahead>=N&&0<R.strstart&&(Z=Ee[se=R.strstart-1])===Ee[++se]&&Z===Ee[++se]&&Z===Ee[++se]){xe=R.strstart+M;do;while(Z===Ee[++se]&&Z===Ee[++se]&&Z===Ee[++se]&&Z===Ee[++se]&&Z===Ee[++se]&&Z===Ee[++se]&&Z===Ee[++se]&&Z===Ee[++se]&&se<xe);R.match_length=M-(xe-se),R.match_length>R.lookahead&&(R.match_length=R.lookahead)}if(R.match_length>=N?(Q=a._tr_tally(R,1,R.match_length-N),R.lookahead-=R.match_length,R.strstart+=R.match_length,R.match_length=0):(Q=a._tr_tally(R,0,R.window[R.strstart]),R.lookahead--,R.strstart++),Q&&(j(R,!1),R.strm.avail_out===0))return C}return R.insert=0,z===d?(j(R,!0),R.strm.avail_out===0?X:q):R.last_lit&&(j(R,!1),R.strm.avail_out===0)?C:U}(B,K):o[B.level].func(B,K);if($!==X&&$!==q||(B.status=666),$===C||$===X)return A.avail_out===0&&(B.last_flush=-1),p;if($===U&&(K===1?a._tr_align(B):K!==5&&(a._tr_stored_block(B,0,0,!1),K===3&&(Y(B.head),B.lookahead===0&&(B.strstart=0,B.block_start=0,B.insert=0))),L(A),A.avail_out===0))return B.last_flush=-1,p}return K!==d?p:B.wrap<=0?1:(B.wrap===2?(ue(B,255&A.adler),ue(B,A.adler>>8&255),ue(B,A.adler>>16&255),ue(B,A.adler>>24&255),ue(B,255&A.total_in),ue(B,A.total_in>>8&255),ue(B,A.total_in>>16&255),ue(B,A.total_in>>24&255)):(re(B,A.adler>>>16),re(B,65535&A.adler)),L(A),0<B.wrap&&(B.wrap=-B.wrap),B.pending!==0?p:1)},i.deflateEnd=function(A){var K;return A&&A.state?(K=A.state.status)!==I&&K!==69&&K!==73&&K!==91&&K!==103&&K!==O&&K!==666?W(A,f):(A.state=null,K===O?W(A,-3):p):f},i.deflateSetDictionary=function(A,K){var H,B,b,k,T,$,R,z,Q=K.length;if(!A||!A.state||(k=(H=A.state).wrap)===2||k===1&&H.status!==I||H.lookahead)return f;for(k===1&&(A.adler=l(A.adler,K,Q,0)),H.wrap=0,Q>=H.w_size&&(k===0&&(Y(H.head),H.strstart=0,H.block_start=0,H.insert=0),z=new s.Buf8(H.w_size),s.arraySet(z,K,Q-H.w_size,H.w_size,0),K=z,Q=H.w_size),T=A.avail_in,$=A.next_in,R=A.input,A.avail_in=Q,A.next_in=0,A.input=K,we(H);H.lookahead>=N;){for(B=H.strstart,b=H.lookahead-(N-1);H.ins_h=(H.ins_h<<H.hash_shift^H.window[B+N-1])&H.hash_mask,H.prev[B&H.w_mask]=H.head[H.ins_h],H.head[H.ins_h]=B,B++,--b;);H.strstart=B,H.lookahead=N-1,we(H)}return H.strstart+=H.lookahead,H.block_start=H.strstart,H.insert=H.lookahead,H.lookahead=0,H.match_length=H.prev_length=N-1,H.match_available=0,A.next_in=$,A.input=R,A.avail_in=T,H.wrap=k,p},i.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(n,r,i){r.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(n,r,i){r.exports=function(o,s){var a,l,u,c,m,d,p,f,h,y,v,g,x,E,_,F,D,P,N,M,G,I,O,C,U;a=o.state,l=o.next_in,C=o.input,u=l+(o.avail_in-5),c=o.next_out,U=o.output,m=c-(s-o.avail_out),d=c+(o.avail_out-257),p=a.dmax,f=a.wsize,h=a.whave,y=a.wnext,v=a.window,g=a.hold,x=a.bits,E=a.lencode,_=a.distcode,F=(1<<a.lenbits)-1,D=(1<<a.distbits)-1;e:do{x<15&&(g+=C[l++]<<x,x+=8,g+=C[l++]<<x,x+=8),P=E[g&F];t:for(;;){if(g>>>=N=P>>>24,x-=N,(N=P>>>16&255)===0)U[c++]=65535&P;else{if(!(16&N)){if(!(64&N)){P=E[(65535&P)+(g&(1<<N)-1)];continue t}if(32&N){a.mode=12;break e}o.msg="invalid literal/length code",a.mode=30;break e}M=65535&P,(N&=15)&&(x<N&&(g+=C[l++]<<x,x+=8),M+=g&(1<<N)-1,g>>>=N,x-=N),x<15&&(g+=C[l++]<<x,x+=8,g+=C[l++]<<x,x+=8),P=_[g&D];n:for(;;){if(g>>>=N=P>>>24,x-=N,!(16&(N=P>>>16&255))){if(!(64&N)){P=_[(65535&P)+(g&(1<<N)-1)];continue n}o.msg="invalid distance code",a.mode=30;break e}if(G=65535&P,x<(N&=15)&&(g+=C[l++]<<x,(x+=8)<N&&(g+=C[l++]<<x,x+=8)),p<(G+=g&(1<<N)-1)){o.msg="invalid distance too far back",a.mode=30;break e}if(g>>>=N,x-=N,(N=c-m)<G){if(h<(N=G-N)&&a.sane){o.msg="invalid distance too far back",a.mode=30;break e}if(O=v,(I=0)===y){if(I+=f-N,N<M){for(M-=N;U[c++]=v[I++],--N;);I=c-G,O=U}}else if(y<N){if(I+=f+y-N,(N-=y)<M){for(M-=N;U[c++]=v[I++],--N;);if(I=0,y<M){for(M-=N=y;U[c++]=v[I++],--N;);I=c-G,O=U}}}else if(I+=y-N,N<M){for(M-=N;U[c++]=v[I++],--N;);I=c-G,O=U}for(;2<M;)U[c++]=O[I++],U[c++]=O[I++],U[c++]=O[I++],M-=3;M&&(U[c++]=O[I++],1<M&&(U[c++]=O[I++]))}else{for(I=c-G;U[c++]=U[I++],U[c++]=U[I++],U[c++]=U[I++],2<(M-=3););M&&(U[c++]=U[I++],1<M&&(U[c++]=U[I++]))}break}}break}}while(l<u&&c<d);l-=M=x>>3,g&=(1<<(x-=M<<3))-1,o.next_in=l,o.next_out=c,o.avail_in=l<u?u-l+5:5-(l-u),o.avail_out=c<d?d-c+257:257-(c-d),a.hold=g,a.bits=x}},{}],49:[function(n,r,i){var o=n("../utils/common"),s=n("./adler32"),a=n("./crc32"),l=n("./inffast"),u=n("./inftrees"),c=1,m=2,d=0,p=-2,f=1,h=852,y=592;function v(I){return(I>>>24&255)+(I>>>8&65280)+((65280&I)<<8)+((255&I)<<24)}function g(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new o.Buf16(320),this.work=new o.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function x(I){var O;return I&&I.state?(O=I.state,I.total_in=I.total_out=O.total=0,I.msg="",O.wrap&&(I.adler=1&O.wrap),O.mode=f,O.last=0,O.havedict=0,O.dmax=32768,O.head=null,O.hold=0,O.bits=0,O.lencode=O.lendyn=new o.Buf32(h),O.distcode=O.distdyn=new o.Buf32(y),O.sane=1,O.back=-1,d):p}function E(I){var O;return I&&I.state?((O=I.state).wsize=0,O.whave=0,O.wnext=0,x(I)):p}function _(I,O){var C,U;return I&&I.state?(U=I.state,O<0?(C=0,O=-O):(C=1+(O>>4),O<48&&(O&=15)),O&&(O<8||15<O)?p:(U.window!==null&&U.wbits!==O&&(U.window=null),U.wrap=C,U.wbits=O,E(I))):p}function F(I,O){var C,U;return I?(U=new g,(I.state=U).window=null,(C=_(I,O))!==d&&(I.state=null),C):p}var D,P,N=!0;function M(I){if(N){var O;for(D=new o.Buf32(512),P=new o.Buf32(32),O=0;O<144;)I.lens[O++]=8;for(;O<256;)I.lens[O++]=9;for(;O<280;)I.lens[O++]=7;for(;O<288;)I.lens[O++]=8;for(u(c,I.lens,0,288,D,0,I.work,{bits:9}),O=0;O<32;)I.lens[O++]=5;u(m,I.lens,0,32,P,0,I.work,{bits:5}),N=!1}I.lencode=D,I.lenbits=9,I.distcode=P,I.distbits=5}function G(I,O,C,U){var X,q=I.state;return q.window===null&&(q.wsize=1<<q.wbits,q.wnext=0,q.whave=0,q.window=new o.Buf8(q.wsize)),U>=q.wsize?(o.arraySet(q.window,O,C-q.wsize,q.wsize,0),q.wnext=0,q.whave=q.wsize):(U<(X=q.wsize-q.wnext)&&(X=U),o.arraySet(q.window,O,C-U,X,q.wnext),(U-=X)?(o.arraySet(q.window,O,C-U,U,0),q.wnext=U,q.whave=q.wsize):(q.wnext+=X,q.wnext===q.wsize&&(q.wnext=0),q.whave<q.wsize&&(q.whave+=X))),0}i.inflateReset=E,i.inflateReset2=_,i.inflateResetKeep=x,i.inflateInit=function(I){return F(I,15)},i.inflateInit2=F,i.inflate=function(I,O){var C,U,X,q,W,V,Y,L,j,ue,re,ne,we,ae,de,me,ve,fe,be,Me,A,K,H,B,b=0,k=new o.Buf8(4),T=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!I||!I.state||!I.output||!I.input&&I.avail_in!==0)return p;(C=I.state).mode===12&&(C.mode=13),W=I.next_out,X=I.output,Y=I.avail_out,q=I.next_in,U=I.input,V=I.avail_in,L=C.hold,j=C.bits,ue=V,re=Y,K=d;e:for(;;)switch(C.mode){case f:if(C.wrap===0){C.mode=13;break}for(;j<16;){if(V===0)break e;V--,L+=U[q++]<<j,j+=8}if(2&C.wrap&&L===35615){k[C.check=0]=255&L,k[1]=L>>>8&255,C.check=a(C.check,k,2,0),j=L=0,C.mode=2;break}if(C.flags=0,C.head&&(C.head.done=!1),!(1&C.wrap)||(((255&L)<<8)+(L>>8))%31){I.msg="incorrect header check",C.mode=30;break}if((15&L)!=8){I.msg="unknown compression method",C.mode=30;break}if(j-=4,A=8+(15&(L>>>=4)),C.wbits===0)C.wbits=A;else if(A>C.wbits){I.msg="invalid window size",C.mode=30;break}C.dmax=1<<A,I.adler=C.check=1,C.mode=512&L?10:12,j=L=0;break;case 2:for(;j<16;){if(V===0)break e;V--,L+=U[q++]<<j,j+=8}if(C.flags=L,(255&C.flags)!=8){I.msg="unknown compression method",C.mode=30;break}if(57344&C.flags){I.msg="unknown header flags set",C.mode=30;break}C.head&&(C.head.text=L>>8&1),512&C.flags&&(k[0]=255&L,k[1]=L>>>8&255,C.check=a(C.check,k,2,0)),j=L=0,C.mode=3;case 3:for(;j<32;){if(V===0)break e;V--,L+=U[q++]<<j,j+=8}C.head&&(C.head.time=L),512&C.flags&&(k[0]=255&L,k[1]=L>>>8&255,k[2]=L>>>16&255,k[3]=L>>>24&255,C.check=a(C.check,k,4,0)),j=L=0,C.mode=4;case 4:for(;j<16;){if(V===0)break e;V--,L+=U[q++]<<j,j+=8}C.head&&(C.head.xflags=255&L,C.head.os=L>>8),512&C.flags&&(k[0]=255&L,k[1]=L>>>8&255,C.check=a(C.check,k,2,0)),j=L=0,C.mode=5;case 5:if(1024&C.flags){for(;j<16;){if(V===0)break e;V--,L+=U[q++]<<j,j+=8}C.length=L,C.head&&(C.head.extra_len=L),512&C.flags&&(k[0]=255&L,k[1]=L>>>8&255,C.check=a(C.check,k,2,0)),j=L=0}else C.head&&(C.head.extra=null);C.mode=6;case 6:if(1024&C.flags&&(V<(ne=C.length)&&(ne=V),ne&&(C.head&&(A=C.head.extra_len-C.length,C.head.extra||(C.head.extra=new Array(C.head.extra_len)),o.arraySet(C.head.extra,U,q,ne,A)),512&C.flags&&(C.check=a(C.check,U,ne,q)),V-=ne,q+=ne,C.length-=ne),C.length))break e;C.length=0,C.mode=7;case 7:if(2048&C.flags){if(V===0)break e;for(ne=0;A=U[q+ne++],C.head&&A&&C.length<65536&&(C.head.name+=String.fromCharCode(A)),A&&ne<V;);if(512&C.flags&&(C.check=a(C.check,U,ne,q)),V-=ne,q+=ne,A)break e}else C.head&&(C.head.name=null);C.length=0,C.mode=8;case 8:if(4096&C.flags){if(V===0)break e;for(ne=0;A=U[q+ne++],C.head&&A&&C.length<65536&&(C.head.comment+=String.fromCharCode(A)),A&&ne<V;);if(512&C.flags&&(C.check=a(C.check,U,ne,q)),V-=ne,q+=ne,A)break e}else C.head&&(C.head.comment=null);C.mode=9;case 9:if(512&C.flags){for(;j<16;){if(V===0)break e;V--,L+=U[q++]<<j,j+=8}if(L!==(65535&C.check)){I.msg="header crc mismatch",C.mode=30;break}j=L=0}C.head&&(C.head.hcrc=C.flags>>9&1,C.head.done=!0),I.adler=C.check=0,C.mode=12;break;case 10:for(;j<32;){if(V===0)break e;V--,L+=U[q++]<<j,j+=8}I.adler=C.check=v(L),j=L=0,C.mode=11;case 11:if(C.havedict===0)return I.next_out=W,I.avail_out=Y,I.next_in=q,I.avail_in=V,C.hold=L,C.bits=j,2;I.adler=C.check=1,C.mode=12;case 12:if(O===5||O===6)break e;case 13:if(C.last){L>>>=7&j,j-=7&j,C.mode=27;break}for(;j<3;){if(V===0)break e;V--,L+=U[q++]<<j,j+=8}switch(C.last=1&L,j-=1,3&(L>>>=1)){case 0:C.mode=14;break;case 1:if(M(C),C.mode=20,O!==6)break;L>>>=2,j-=2;break e;case 2:C.mode=17;break;case 3:I.msg="invalid block type",C.mode=30}L>>>=2,j-=2;break;case 14:for(L>>>=7&j,j-=7&j;j<32;){if(V===0)break e;V--,L+=U[q++]<<j,j+=8}if((65535&L)!=(L>>>16^65535)){I.msg="invalid stored block lengths",C.mode=30;break}if(C.length=65535&L,j=L=0,C.mode=15,O===6)break e;case 15:C.mode=16;case 16:if(ne=C.length){if(V<ne&&(ne=V),Y<ne&&(ne=Y),ne===0)break e;o.arraySet(X,U,q,ne,W),V-=ne,q+=ne,Y-=ne,W+=ne,C.length-=ne;break}C.mode=12;break;case 17:for(;j<14;){if(V===0)break e;V--,L+=U[q++]<<j,j+=8}if(C.nlen=257+(31&L),L>>>=5,j-=5,C.ndist=1+(31&L),L>>>=5,j-=5,C.ncode=4+(15&L),L>>>=4,j-=4,286<C.nlen||30<C.ndist){I.msg="too many length or distance symbols",C.mode=30;break}C.have=0,C.mode=18;case 18:for(;C.have<C.ncode;){for(;j<3;){if(V===0)break e;V--,L+=U[q++]<<j,j+=8}C.lens[T[C.have++]]=7&L,L>>>=3,j-=3}for(;C.have<19;)C.lens[T[C.have++]]=0;if(C.lencode=C.lendyn,C.lenbits=7,H={bits:C.lenbits},K=u(0,C.lens,0,19,C.lencode,0,C.work,H),C.lenbits=H.bits,K){I.msg="invalid code lengths set",C.mode=30;break}C.have=0,C.mode=19;case 19:for(;C.have<C.nlen+C.ndist;){for(;me=(b=C.lencode[L&(1<<C.lenbits)-1])>>>16&255,ve=65535&b,!((de=b>>>24)<=j);){if(V===0)break e;V--,L+=U[q++]<<j,j+=8}if(ve<16)L>>>=de,j-=de,C.lens[C.have++]=ve;else{if(ve===16){for(B=de+2;j<B;){if(V===0)break e;V--,L+=U[q++]<<j,j+=8}if(L>>>=de,j-=de,C.have===0){I.msg="invalid bit length repeat",C.mode=30;break}A=C.lens[C.have-1],ne=3+(3&L),L>>>=2,j-=2}else if(ve===17){for(B=de+3;j<B;){if(V===0)break e;V--,L+=U[q++]<<j,j+=8}j-=de,A=0,ne=3+(7&(L>>>=de)),L>>>=3,j-=3}else{for(B=de+7;j<B;){if(V===0)break e;V--,L+=U[q++]<<j,j+=8}j-=de,A=0,ne=11+(127&(L>>>=de)),L>>>=7,j-=7}if(C.have+ne>C.nlen+C.ndist){I.msg="invalid bit length repeat",C.mode=30;break}for(;ne--;)C.lens[C.have++]=A}}if(C.mode===30)break;if(C.lens[256]===0){I.msg="invalid code -- missing end-of-block",C.mode=30;break}if(C.lenbits=9,H={bits:C.lenbits},K=u(c,C.lens,0,C.nlen,C.lencode,0,C.work,H),C.lenbits=H.bits,K){I.msg="invalid literal/lengths set",C.mode=30;break}if(C.distbits=6,C.distcode=C.distdyn,H={bits:C.distbits},K=u(m,C.lens,C.nlen,C.ndist,C.distcode,0,C.work,H),C.distbits=H.bits,K){I.msg="invalid distances set",C.mode=30;break}if(C.mode=20,O===6)break e;case 20:C.mode=21;case 21:if(6<=V&&258<=Y){I.next_out=W,I.avail_out=Y,I.next_in=q,I.avail_in=V,C.hold=L,C.bits=j,l(I,re),W=I.next_out,X=I.output,Y=I.avail_out,q=I.next_in,U=I.input,V=I.avail_in,L=C.hold,j=C.bits,C.mode===12&&(C.back=-1);break}for(C.back=0;me=(b=C.lencode[L&(1<<C.lenbits)-1])>>>16&255,ve=65535&b,!((de=b>>>24)<=j);){if(V===0)break e;V--,L+=U[q++]<<j,j+=8}if(me&&!(240&me)){for(fe=de,be=me,Me=ve;me=(b=C.lencode[Me+((L&(1<<fe+be)-1)>>fe)])>>>16&255,ve=65535&b,!(fe+(de=b>>>24)<=j);){if(V===0)break e;V--,L+=U[q++]<<j,j+=8}L>>>=fe,j-=fe,C.back+=fe}if(L>>>=de,j-=de,C.back+=de,C.length=ve,me===0){C.mode=26;break}if(32&me){C.back=-1,C.mode=12;break}if(64&me){I.msg="invalid literal/length code",C.mode=30;break}C.extra=15&me,C.mode=22;case 22:if(C.extra){for(B=C.extra;j<B;){if(V===0)break e;V--,L+=U[q++]<<j,j+=8}C.length+=L&(1<<C.extra)-1,L>>>=C.extra,j-=C.extra,C.back+=C.extra}C.was=C.length,C.mode=23;case 23:for(;me=(b=C.distcode[L&(1<<C.distbits)-1])>>>16&255,ve=65535&b,!((de=b>>>24)<=j);){if(V===0)break e;V--,L+=U[q++]<<j,j+=8}if(!(240&me)){for(fe=de,be=me,Me=ve;me=(b=C.distcode[Me+((L&(1<<fe+be)-1)>>fe)])>>>16&255,ve=65535&b,!(fe+(de=b>>>24)<=j);){if(V===0)break e;V--,L+=U[q++]<<j,j+=8}L>>>=fe,j-=fe,C.back+=fe}if(L>>>=de,j-=de,C.back+=de,64&me){I.msg="invalid distance code",C.mode=30;break}C.offset=ve,C.extra=15&me,C.mode=24;case 24:if(C.extra){for(B=C.extra;j<B;){if(V===0)break e;V--,L+=U[q++]<<j,j+=8}C.offset+=L&(1<<C.extra)-1,L>>>=C.extra,j-=C.extra,C.back+=C.extra}if(C.offset>C.dmax){I.msg="invalid distance too far back",C.mode=30;break}C.mode=25;case 25:if(Y===0)break e;if(ne=re-Y,C.offset>ne){if((ne=C.offset-ne)>C.whave&&C.sane){I.msg="invalid distance too far back",C.mode=30;break}we=ne>C.wnext?(ne-=C.wnext,C.wsize-ne):C.wnext-ne,ne>C.length&&(ne=C.length),ae=C.window}else ae=X,we=W-C.offset,ne=C.length;for(Y<ne&&(ne=Y),Y-=ne,C.length-=ne;X[W++]=ae[we++],--ne;);C.length===0&&(C.mode=21);break;case 26:if(Y===0)break e;X[W++]=C.length,Y--,C.mode=21;break;case 27:if(C.wrap){for(;j<32;){if(V===0)break e;V--,L|=U[q++]<<j,j+=8}if(re-=Y,I.total_out+=re,C.total+=re,re&&(I.adler=C.check=C.flags?a(C.check,X,re,W-re):s(C.check,X,re,W-re)),re=Y,(C.flags?L:v(L))!==C.check){I.msg="incorrect data check",C.mode=30;break}j=L=0}C.mode=28;case 28:if(C.wrap&&C.flags){for(;j<32;){if(V===0)break e;V--,L+=U[q++]<<j,j+=8}if(L!==(4294967295&C.total)){I.msg="incorrect length check",C.mode=30;break}j=L=0}C.mode=29;case 29:K=1;break e;case 30:K=-3;break e;case 31:return-4;case 32:default:return p}return I.next_out=W,I.avail_out=Y,I.next_in=q,I.avail_in=V,C.hold=L,C.bits=j,(C.wsize||re!==I.avail_out&&C.mode<30&&(C.mode<27||O!==4))&&G(I,I.output,I.next_out,re-I.avail_out)?(C.mode=31,-4):(ue-=I.avail_in,re-=I.avail_out,I.total_in+=ue,I.total_out+=re,C.total+=re,C.wrap&&re&&(I.adler=C.check=C.flags?a(C.check,X,re,I.next_out-re):s(C.check,X,re,I.next_out-re)),I.data_type=C.bits+(C.last?64:0)+(C.mode===12?128:0)+(C.mode===20||C.mode===15?256:0),(ue==0&&re===0||O===4)&&K===d&&(K=-5),K)},i.inflateEnd=function(I){if(!I||!I.state)return p;var O=I.state;return O.window&&(O.window=null),I.state=null,d},i.inflateGetHeader=function(I,O){var C;return I&&I.state&&2&(C=I.state).wrap?((C.head=O).done=!1,d):p},i.inflateSetDictionary=function(I,O){var C,U=O.length;return I&&I.state?(C=I.state).wrap!==0&&C.mode!==11?p:C.mode===11&&s(1,O,U,0)!==C.check?-3:G(I,O,U,U)?(C.mode=31,-4):(C.havedict=1,d):p},i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(n,r,i){var o=n("../utils/common"),s=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],u=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(c,m,d,p,f,h,y,v){var g,x,E,_,F,D,P,N,M,G=v.bits,I=0,O=0,C=0,U=0,X=0,q=0,W=0,V=0,Y=0,L=0,j=null,ue=0,re=new o.Buf16(16),ne=new o.Buf16(16),we=null,ae=0;for(I=0;I<=15;I++)re[I]=0;for(O=0;O<p;O++)re[m[d+O]]++;for(X=G,U=15;1<=U&&re[U]===0;U--);if(U<X&&(X=U),U===0)return f[h++]=20971520,f[h++]=20971520,v.bits=1,0;for(C=1;C<U&&re[C]===0;C++);for(X<C&&(X=C),I=V=1;I<=15;I++)if(V<<=1,(V-=re[I])<0)return-1;if(0<V&&(c===0||U!==1))return-1;for(ne[1]=0,I=1;I<15;I++)ne[I+1]=ne[I]+re[I];for(O=0;O<p;O++)m[d+O]!==0&&(y[ne[m[d+O]]++]=O);if(D=c===0?(j=we=y,19):c===1?(j=s,ue-=257,we=a,ae-=257,256):(j=l,we=u,-1),I=C,F=h,W=O=L=0,E=-1,_=(Y=1<<(q=X))-1,c===1&&852<Y||c===2&&592<Y)return 1;for(;;){for(P=I-W,M=y[O]<D?(N=0,y[O]):y[O]>D?(N=we[ae+y[O]],j[ue+y[O]]):(N=96,0),g=1<<I-W,C=x=1<<q;f[F+(L>>W)+(x-=g)]=P<<24|N<<16|M|0,x!==0;);for(g=1<<I-1;L&g;)g>>=1;if(g!==0?(L&=g-1,L+=g):L=0,O++,--re[I]==0){if(I===U)break;I=m[d+y[O]]}if(X<I&&(L&_)!==E){for(W===0&&(W=X),F+=C,V=1<<(q=I-W);q+W<U&&!((V-=re[q+W])<=0);)q++,V<<=1;if(Y+=1<<q,c===1&&852<Y||c===2&&592<Y)return 1;f[E=L&_]=X<<24|q<<16|F-h|0}}return L!==0&&(f[F+L]=I-W<<24|64<<16|0),v.bits=X,0}},{"../utils/common":41}],51:[function(n,r,i){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(n,r,i){var o=n("../utils/common"),s=0,a=1;function l(b){for(var k=b.length;0<=--k;)b[k]=0}var u=0,c=29,m=256,d=m+1+c,p=30,f=19,h=2*d+1,y=15,v=16,g=7,x=256,E=16,_=17,F=18,D=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],P=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],N=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],M=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],G=new Array(2*(d+2));l(G);var I=new Array(2*p);l(I);var O=new Array(512);l(O);var C=new Array(256);l(C);var U=new Array(c);l(U);var X,q,W,V=new Array(p);function Y(b,k,T,$,R){this.static_tree=b,this.extra_bits=k,this.extra_base=T,this.elems=$,this.max_length=R,this.has_stree=b&&b.length}function L(b,k){this.dyn_tree=b,this.max_code=0,this.stat_desc=k}function j(b){return b<256?O[b]:O[256+(b>>>7)]}function ue(b,k){b.pending_buf[b.pending++]=255&k,b.pending_buf[b.pending++]=k>>>8&255}function re(b,k,T){b.bi_valid>v-T?(b.bi_buf|=k<<b.bi_valid&65535,ue(b,b.bi_buf),b.bi_buf=k>>v-b.bi_valid,b.bi_valid+=T-v):(b.bi_buf|=k<<b.bi_valid&65535,b.bi_valid+=T)}function ne(b,k,T){re(b,T[2*k],T[2*k+1])}function we(b,k){for(var T=0;T|=1&b,b>>>=1,T<<=1,0<--k;);return T>>>1}function ae(b,k,T){var $,R,z=new Array(y+1),Q=0;for($=1;$<=y;$++)z[$]=Q=Q+T[$-1]<<1;for(R=0;R<=k;R++){var Z=b[2*R+1];Z!==0&&(b[2*R]=we(z[Z]++,Z))}}function de(b){var k;for(k=0;k<d;k++)b.dyn_ltree[2*k]=0;for(k=0;k<p;k++)b.dyn_dtree[2*k]=0;for(k=0;k<f;k++)b.bl_tree[2*k]=0;b.dyn_ltree[2*x]=1,b.opt_len=b.static_len=0,b.last_lit=b.matches=0}function me(b){8<b.bi_valid?ue(b,b.bi_buf):0<b.bi_valid&&(b.pending_buf[b.pending++]=b.bi_buf),b.bi_buf=0,b.bi_valid=0}function ve(b,k,T,$){var R=2*k,z=2*T;return b[R]<b[z]||b[R]===b[z]&&$[k]<=$[T]}function fe(b,k,T){for(var $=b.heap[T],R=T<<1;R<=b.heap_len&&(R<b.heap_len&&ve(k,b.heap[R+1],b.heap[R],b.depth)&&R++,!ve(k,$,b.heap[R],b.depth));)b.heap[T]=b.heap[R],T=R,R<<=1;b.heap[T]=$}function be(b,k,T){var $,R,z,Q,Z=0;if(b.last_lit!==0)for(;$=b.pending_buf[b.d_buf+2*Z]<<8|b.pending_buf[b.d_buf+2*Z+1],R=b.pending_buf[b.l_buf+Z],Z++,$===0?ne(b,R,k):(ne(b,(z=C[R])+m+1,k),(Q=D[z])!==0&&re(b,R-=U[z],Q),ne(b,z=j(--$),T),(Q=P[z])!==0&&re(b,$-=V[z],Q)),Z<b.last_lit;);ne(b,x,k)}function Me(b,k){var T,$,R,z=k.dyn_tree,Q=k.stat_desc.static_tree,Z=k.stat_desc.has_stree,se=k.stat_desc.elems,xe=-1;for(b.heap_len=0,b.heap_max=h,T=0;T<se;T++)z[2*T]!==0?(b.heap[++b.heap_len]=xe=T,b.depth[T]=0):z[2*T+1]=0;for(;b.heap_len<2;)z[2*(R=b.heap[++b.heap_len]=xe<2?++xe:0)]=1,b.depth[R]=0,b.opt_len--,Z&&(b.static_len-=Q[2*R+1]);for(k.max_code=xe,T=b.heap_len>>1;1<=T;T--)fe(b,z,T);for(R=se;T=b.heap[1],b.heap[1]=b.heap[b.heap_len--],fe(b,z,1),$=b.heap[1],b.heap[--b.heap_max]=T,b.heap[--b.heap_max]=$,z[2*R]=z[2*T]+z[2*$],b.depth[R]=(b.depth[T]>=b.depth[$]?b.depth[T]:b.depth[$])+1,z[2*T+1]=z[2*$+1]=R,b.heap[1]=R++,fe(b,z,1),2<=b.heap_len;);b.heap[--b.heap_max]=b.heap[1],function(Ee,St){var On,Dt,ti,Ue,Ni,Ti,Ln=St.dyn_tree,Im=St.max_code,LE=St.stat_desc.static_tree,jE=St.stat_desc.has_stree,VE=St.stat_desc.extra_bits,Pm=St.stat_desc.extra_base,$o=St.stat_desc.max_length,ba=0;for(Ue=0;Ue<=y;Ue++)Ee.bl_count[Ue]=0;for(Ln[2*Ee.heap[Ee.heap_max]+1]=0,On=Ee.heap_max+1;On<h;On++)$o<(Ue=Ln[2*Ln[2*(Dt=Ee.heap[On])+1]+1]+1)&&(Ue=$o,ba++),Ln[2*Dt+1]=Ue,Im<Dt||(Ee.bl_count[Ue]++,Ni=0,Pm<=Dt&&(Ni=VE[Dt-Pm]),Ti=Ln[2*Dt],Ee.opt_len+=Ti*(Ue+Ni),jE&&(Ee.static_len+=Ti*(LE[2*Dt+1]+Ni)));if(ba!==0){do{for(Ue=$o-1;Ee.bl_count[Ue]===0;)Ue--;Ee.bl_count[Ue]--,Ee.bl_count[Ue+1]+=2,Ee.bl_count[$o]--,ba-=2}while(0<ba);for(Ue=$o;Ue!==0;Ue--)for(Dt=Ee.bl_count[Ue];Dt!==0;)Im<(ti=Ee.heap[--On])||(Ln[2*ti+1]!==Ue&&(Ee.opt_len+=(Ue-Ln[2*ti+1])*Ln[2*ti],Ln[2*ti+1]=Ue),Dt--)}}(b,k),ae(z,xe,b.bl_count)}function A(b,k,T){var $,R,z=-1,Q=k[1],Z=0,se=7,xe=4;for(Q===0&&(se=138,xe=3),k[2*(T+1)+1]=65535,$=0;$<=T;$++)R=Q,Q=k[2*($+1)+1],++Z<se&&R===Q||(Z<xe?b.bl_tree[2*R]+=Z:R!==0?(R!==z&&b.bl_tree[2*R]++,b.bl_tree[2*E]++):Z<=10?b.bl_tree[2*_]++:b.bl_tree[2*F]++,z=R,xe=(Z=0)===Q?(se=138,3):R===Q?(se=6,3):(se=7,4))}function K(b,k,T){var $,R,z=-1,Q=k[1],Z=0,se=7,xe=4;for(Q===0&&(se=138,xe=3),$=0;$<=T;$++)if(R=Q,Q=k[2*($+1)+1],!(++Z<se&&R===Q)){if(Z<xe)for(;ne(b,R,b.bl_tree),--Z!=0;);else R!==0?(R!==z&&(ne(b,R,b.bl_tree),Z--),ne(b,E,b.bl_tree),re(b,Z-3,2)):Z<=10?(ne(b,_,b.bl_tree),re(b,Z-3,3)):(ne(b,F,b.bl_tree),re(b,Z-11,7));z=R,xe=(Z=0)===Q?(se=138,3):R===Q?(se=6,3):(se=7,4)}}l(V);var H=!1;function B(b,k,T,$){re(b,(u<<1)+($?1:0),3),function(R,z,Q,Z){me(R),ue(R,Q),ue(R,~Q),o.arraySet(R.pending_buf,R.window,z,Q,R.pending),R.pending+=Q}(b,k,T)}i._tr_init=function(b){H||(function(){var k,T,$,R,z,Q=new Array(y+1);for(R=$=0;R<c-1;R++)for(U[R]=$,k=0;k<1<<D[R];k++)C[$++]=R;for(C[$-1]=R,R=z=0;R<16;R++)for(V[R]=z,k=0;k<1<<P[R];k++)O[z++]=R;for(z>>=7;R<p;R++)for(V[R]=z<<7,k=0;k<1<<P[R]-7;k++)O[256+z++]=R;for(T=0;T<=y;T++)Q[T]=0;for(k=0;k<=143;)G[2*k+1]=8,k++,Q[8]++;for(;k<=255;)G[2*k+1]=9,k++,Q[9]++;for(;k<=279;)G[2*k+1]=7,k++,Q[7]++;for(;k<=287;)G[2*k+1]=8,k++,Q[8]++;for(ae(G,d+1,Q),k=0;k<p;k++)I[2*k+1]=5,I[2*k]=we(k,5);X=new Y(G,D,m+1,d,y),q=new Y(I,P,0,p,y),W=new Y(new Array(0),N,0,f,g)}(),H=!0),b.l_desc=new L(b.dyn_ltree,X),b.d_desc=new L(b.dyn_dtree,q),b.bl_desc=new L(b.bl_tree,W),b.bi_buf=0,b.bi_valid=0,de(b)},i._tr_stored_block=B,i._tr_flush_block=function(b,k,T,$){var R,z,Q=0;0<b.level?(b.strm.data_type===2&&(b.strm.data_type=function(Z){var se,xe=4093624447;for(se=0;se<=31;se++,xe>>>=1)if(1&xe&&Z.dyn_ltree[2*se]!==0)return s;if(Z.dyn_ltree[18]!==0||Z.dyn_ltree[20]!==0||Z.dyn_ltree[26]!==0)return a;for(se=32;se<m;se++)if(Z.dyn_ltree[2*se]!==0)return a;return s}(b)),Me(b,b.l_desc),Me(b,b.d_desc),Q=function(Z){var se;for(A(Z,Z.dyn_ltree,Z.l_desc.max_code),A(Z,Z.dyn_dtree,Z.d_desc.max_code),Me(Z,Z.bl_desc),se=f-1;3<=se&&Z.bl_tree[2*M[se]+1]===0;se--);return Z.opt_len+=3*(se+1)+5+5+4,se}(b),R=b.opt_len+3+7>>>3,(z=b.static_len+3+7>>>3)<=R&&(R=z)):R=z=T+5,T+4<=R&&k!==-1?B(b,k,T,$):b.strategy===4||z===R?(re(b,2+($?1:0),3),be(b,G,I)):(re(b,4+($?1:0),3),function(Z,se,xe,Ee){var St;for(re(Z,se-257,5),re(Z,xe-1,5),re(Z,Ee-4,4),St=0;St<Ee;St++)re(Z,Z.bl_tree[2*M[St]+1],3);K(Z,Z.dyn_ltree,se-1),K(Z,Z.dyn_dtree,xe-1)}(b,b.l_desc.max_code+1,b.d_desc.max_code+1,Q+1),be(b,b.dyn_ltree,b.dyn_dtree)),de(b),$&&me(b)},i._tr_tally=function(b,k,T){return b.pending_buf[b.d_buf+2*b.last_lit]=k>>>8&255,b.pending_buf[b.d_buf+2*b.last_lit+1]=255&k,b.pending_buf[b.l_buf+b.last_lit]=255&T,b.last_lit++,k===0?b.dyn_ltree[2*T]++:(b.matches++,k--,b.dyn_ltree[2*(C[T]+m+1)]++,b.dyn_dtree[2*j(k)]++),b.last_lit===b.lit_bufsize-1},i._tr_align=function(b){re(b,2,3),ne(b,x,G),function(k){k.bi_valid===16?(ue(k,k.bi_buf),k.bi_buf=0,k.bi_valid=0):8<=k.bi_valid&&(k.pending_buf[k.pending++]=255&k.bi_buf,k.bi_buf>>=8,k.bi_valid-=8)}(b)}},{"../utils/common":41}],53:[function(n,r,i){r.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(n,r,i){(function(o){(function(s,a){if(!s.setImmediate){var l,u,c,m,d=1,p={},f=!1,h=s.document,y=Object.getPrototypeOf&&Object.getPrototypeOf(s);y=y&&y.setTimeout?y:s,l={}.toString.call(s.process)==="[object process]"?function(E){process.nextTick(function(){g(E)})}:function(){if(s.postMessage&&!s.importScripts){var E=!0,_=s.onmessage;return s.onmessage=function(){E=!1},s.postMessage("","*"),s.onmessage=_,E}}()?(m="setImmediate$"+Math.random()+"$",s.addEventListener?s.addEventListener("message",x,!1):s.attachEvent("onmessage",x),function(E){s.postMessage(m+E,"*")}):s.MessageChannel?((c=new MessageChannel).port1.onmessage=function(E){g(E.data)},function(E){c.port2.postMessage(E)}):h&&"onreadystatechange"in h.createElement("script")?(u=h.documentElement,function(E){var _=h.createElement("script");_.onreadystatechange=function(){g(E),_.onreadystatechange=null,u.removeChild(_),_=null},u.appendChild(_)}):function(E){setTimeout(g,0,E)},y.setImmediate=function(E){typeof E!="function"&&(E=new Function(""+E));for(var _=new Array(arguments.length-1),F=0;F<_.length;F++)_[F]=arguments[F+1];var D={callback:E,args:_};return p[d]=D,l(d),d++},y.clearImmediate=v}function v(E){delete p[E]}function g(E){if(f)setTimeout(g,0,E);else{var _=p[E];if(_){f=!0;try{(function(F){var D=F.callback,P=F.args;switch(P.length){case 0:D();break;case 1:D(P[0]);break;case 2:D(P[0],P[1]);break;case 3:D(P[0],P[1],P[2]);break;default:D.apply(a,P)}})(_)}finally{v(E),f=!1}}}}function x(E){E.source===s&&typeof E.data=="string"&&E.data.indexOf(m)===0&&g(+E.data.slice(m.length))}})(typeof self>"u"?o===void 0?this:o:self)}).call(this,typeof Zn<"u"?Zn:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(EE);var xk=EE.exports;const Ek=pu(xk);var _E={exports:{}};(function(e,t){(function(n,r){r()})(Zn,function(){function n(u,c){return typeof c>"u"?c={autoBom:!1}:typeof c!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),c={autoBom:!c}),c.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(u.type)?new Blob(["\uFEFF",u],{type:u.type}):u}function r(u,c,m){var d=new XMLHttpRequest;d.open("GET",u),d.responseType="blob",d.onload=function(){l(d.response,c,m)},d.onerror=function(){console.error("could not download file")},d.send()}function i(u){var c=new XMLHttpRequest;c.open("HEAD",u,!1);try{c.send()}catch{}return 200<=c.status&&299>=c.status}function o(u){try{u.dispatchEvent(new MouseEvent("click"))}catch{var c=document.createEvent("MouseEvents");c.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),u.dispatchEvent(c)}}var s=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Zn=="object"&&Zn.global===Zn?Zn:void 0,a=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=s.saveAs||(typeof window!="object"||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(u,c,m){var d=s.URL||s.webkitURL,p=document.createElement("a");c=c||u.name||"download",p.download=c,p.rel="noopener",typeof u=="string"?(p.href=u,p.origin===location.origin?o(p):i(p.href)?r(u,c,m):o(p,p.target="_blank")):(p.href=d.createObjectURL(u),setTimeout(function(){d.revokeObjectURL(p.href)},4e4),setTimeout(function(){o(p)},0))}:"msSaveOrOpenBlob"in navigator?function(u,c,m){if(c=c||u.name||"download",typeof u!="string")navigator.msSaveOrOpenBlob(n(u,m),c);else if(i(u))r(u,c,m);else{var d=document.createElement("a");d.href=u,d.target="_blank",setTimeout(function(){o(d)})}}:function(u,c,m,d){if(d=d||open("","_blank"),d&&(d.document.title=d.document.body.innerText="downloading..."),typeof u=="string")return r(u,c,m);var p=u.type==="application/octet-stream",f=/constructor/i.test(s.HTMLElement)||s.safari,h=/CriOS\/[\d]+/.test(navigator.userAgent);if((h||p&&f||a)&&typeof FileReader<"u"){var y=new FileReader;y.onloadend=function(){var x=y.result;x=h?x:x.replace(/^data:[^;]*;/,"data:attachment/file;"),d?d.location.href=x:location=x,d=null},y.readAsDataURL(u)}else{var v=s.URL||s.webkitURL,g=v.createObjectURL(u);d?d.location=g:location.href=g,d=null,setTimeout(function(){v.revokeObjectURL(g)},4e4)}});s.saveAs=l.saveAs=l,e.exports=l})})(_E);var _k=_E.exports,vp={exports:{}},yp={exports:{}},en={},je={};je.__esModule=!0;je.extend=wE;je.indexOf=Sk;je.escapeExpression=Dk;je.isEmpty=kk;je.createFrame=Fk;je.blockParams=Ik;je.appendContextPath=Pk;var wk={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},bk=/[&<>"'`=]/g,Ck=/[&<>"'`=]/;function Ak(e){return wk[e]}function wE(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}var Cm=Object.prototype.toString;je.toString=Cm;var xp=function(t){return typeof t=="function"};xp(/x/)&&(je.isFunction=xp=function(e){return typeof e=="function"&&Cm.call(e)==="[object Function]"});je.isFunction=xp;var bE=Array.isArray||function(e){return e&&typeof e=="object"?Cm.call(e)==="[object Array]":!1};je.isArray=bE;function Sk(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1}function Dk(e){if(typeof e!="string"){if(e&&e.toHTML)return e.toHTML();if(e==null)return"";if(!e)return e+"";e=""+e}return Ck.test(e)?e.replace(bk,Ak):e}function kk(e){return!e&&e!==0?!0:!!(bE(e)&&e.length===0)}function Fk(e){var t=wE({},e);return t._parent=e,t}function Ik(e,t){return e.path=t,e}function Pk(e,t){return(e?e+".":"")+t}var Ep={exports:{}};(function(e,t){t.__esModule=!0;var n=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function r(i,o){var s=o&&o.loc,a=void 0,l=void 0,u=void 0,c=void 0;s&&(a=s.start.line,l=s.end.line,u=s.start.column,c=s.end.column,i+=" - "+a+":"+u);for(var m=Error.prototype.constructor.call(this,i),d=0;d<n.length;d++)this[n[d]]=m[n[d]];Error.captureStackTrace&&Error.captureStackTrace(this,r);try{s&&(this.lineNumber=a,this.endLineNumber=l,Object.defineProperty?(Object.defineProperty(this,"column",{value:u,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:c,enumerable:!0})):(this.column=u,this.endColumn=c))}catch{}}r.prototype=new Error,t.default=r,e.exports=t.default})(Ep,Ep.exports);var En=Ep.exports,xa={},_p={exports:{}};(function(e,t){t.__esModule=!0;var n=je;t.default=function(r){r.registerHelper("blockHelperMissing",function(i,o){var s=o.inverse,a=o.fn;if(i===!0)return a(this);if(i===!1||i==null)return s(this);if(n.isArray(i))return i.length>0?(o.ids&&(o.ids=[o.name]),r.helpers.each(i,o)):s(this);if(o.data&&o.ids){var l=n.createFrame(o.data);l.contextPath=n.appendContextPath(o.data.contextPath,o.name),o={data:l}}return a(i,o)})},e.exports=t.default})(_p,_p.exports);var Bk=_p.exports,wp={exports:{}};(function(e,t){t.__esModule=!0;function n(s){return s&&s.__esModule?s:{default:s}}var r=je,i=En,o=n(i);t.default=function(s){s.registerHelper("each",function(a,l){if(!l)throw new o.default("Must pass iterator to #each");var u=l.fn,c=l.inverse,m=0,d="",p=void 0,f=void 0;l.data&&l.ids&&(f=r.appendContextPath(l.data.contextPath,l.ids[0])+"."),r.isFunction(a)&&(a=a.call(this)),l.data&&(p=r.createFrame(l.data));function h(E,_,F){p&&(p.key=E,p.index=_,p.first=_===0,p.last=!!F,f&&(p.contextPath=f+E)),d=d+u(a[E],{data:p,blockParams:r.blockParams([a[E],E],[f+E,null])})}if(a&&typeof a=="object")if(r.isArray(a))for(var y=a.length;m<y;m++)m in a&&h(m,m,m===a.length-1);else if(typeof Symbol=="function"&&a[Symbol.iterator]){for(var v=[],g=a[Symbol.iterator](),x=g.next();!x.done;x=g.next())v.push(x.value);a=v;for(var y=a.length;m<y;m++)h(m,m,m===a.length-1)}else(function(){var E=void 0;Object.keys(a).forEach(function(_){E!==void 0&&h(E,m-1),E=_,m++}),E!==void 0&&h(E,m-1,!0)})();return m===0&&(d=c(this)),d})},e.exports=t.default})(wp,wp.exports);var Rk=wp.exports,bp={exports:{}};(function(e,t){t.__esModule=!0;function n(o){return o&&o.__esModule?o:{default:o}}var r=En,i=n(r);t.default=function(o){o.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new i.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},e.exports=t.default})(bp,bp.exports);var Nk=bp.exports,Cp={exports:{}};(function(e,t){t.__esModule=!0;function n(s){return s&&s.__esModule?s:{default:s}}var r=je,i=En,o=n(i);t.default=function(s){s.registerHelper("if",function(a,l){if(arguments.length!=2)throw new o.default("#if requires exactly one argument");return r.isFunction(a)&&(a=a.call(this)),!l.hash.includeZero&&!a||r.isEmpty(a)?l.inverse(this):l.fn(this)}),s.registerHelper("unless",function(a,l){if(arguments.length!=2)throw new o.default("#unless requires exactly one argument");return s.helpers.if.call(this,a,{fn:l.inverse,inverse:l.fn,hash:l.hash})})},e.exports=t.default})(Cp,Cp.exports);var Tk=Cp.exports,Ap={exports:{}};(function(e,t){t.__esModule=!0,t.default=function(n){n.registerHelper("log",function(){for(var r=[void 0],i=arguments[arguments.length-1],o=0;o<arguments.length-1;o++)r.push(arguments[o]);var s=1;i.hash.level!=null?s=i.hash.level:i.data&&i.data.level!=null&&(s=i.data.level),r[0]=s,n.log.apply(n,r)})},e.exports=t.default})(Ap,Ap.exports);var Mk=Ap.exports,Sp={exports:{}};(function(e,t){t.__esModule=!0,t.default=function(n){n.registerHelper("lookup",function(r,i,o){return r&&o.lookupProperty(r,i)})},e.exports=t.default})(Sp,Sp.exports);var Ok=Sp.exports,Dp={exports:{}};(function(e,t){t.__esModule=!0;function n(s){return s&&s.__esModule?s:{default:s}}var r=je,i=En,o=n(i);t.default=function(s){s.registerHelper("with",function(a,l){if(arguments.length!=2)throw new o.default("#with requires exactly one argument");r.isFunction(a)&&(a=a.call(this));var u=l.fn;if(r.isEmpty(a))return l.inverse(this);var c=l.data;return l.data&&l.ids&&(c=r.createFrame(l.data),c.contextPath=r.appendContextPath(l.data.contextPath,l.ids[0])),u(a,{data:c,blockParams:r.blockParams([a],[c&&c.contextPath])})})},e.exports=t.default})(Dp,Dp.exports);var Lk=Dp.exports;xa.__esModule=!0;xa.registerDefaultHelpers=Jk;xa.moveHelperToHooks=e8;function Ri(e){return e&&e.__esModule?e:{default:e}}var jk=Bk,Vk=Ri(jk),zk=Rk,$k=Ri(zk),Uk=Nk,Wk=Ri(Uk),qk=Tk,Hk=Ri(qk),Gk=Mk,Zk=Ri(Gk),Kk=Ok,Qk=Ri(Kk),Xk=Lk,Yk=Ri(Xk);function Jk(e){Vk.default(e),$k.default(e),Wk.default(e),Hk.default(e),Zk.default(e),Qk.default(e),Yk.default(e)}function e8(e,t,n){e.helpers[t]&&(e.hooks[t]=e.helpers[t],n||delete e.helpers[t])}var Am={},kp={exports:{}};(function(e,t){t.__esModule=!0;var n=je;t.default=function(r){r.registerDecorator("inline",function(i,o,s,a){var l=i;return o.partials||(o.partials={},l=function(u,c){var m=s.partials;s.partials=n.extend({},m,o.partials);var d=i(u,c);return s.partials=m,d}),o.partials[a.args[0]]=a.fn,l})},e.exports=t.default})(kp,kp.exports);var t8=kp.exports;Am.__esModule=!0;Am.registerDefaultDecorators=o8;function n8(e){return e&&e.__esModule?e:{default:e}}var r8=t8,i8=n8(r8);function o8(e){i8.default(e)}var Fp={exports:{}};(function(e,t){t.__esModule=!0;var n=je,r={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(o){if(typeof o=="string"){var s=n.indexOf(r.methodMap,o.toLowerCase());s>=0?o=s:o=parseInt(o,10)}return o},log:function(o){if(o=r.lookupLevel(o),typeof console<"u"&&r.lookupLevel(r.level)<=o){var s=r.methodMap[o];console[s]||(s="log");for(var a=arguments.length,l=Array(a>1?a-1:0),u=1;u<a;u++)l[u-1]=arguments[u];console[s].apply(console,l)}}};t.default=r,e.exports=t.default})(Fp,Fp.exports);var CE=Fp.exports,zo={},Sm={};Sm.__esModule=!0;Sm.createNewLookupObject=a8;var s8=je;function a8(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return s8.extend.apply(void 0,[Object.create(null)].concat(t))}zo.__esModule=!0;zo.createProtoAccessControl=d8;zo.resultIsAllowed=p8;zo.resetLoggedProperties=m8;function l8(e){return e&&e.__esModule?e:{default:e}}var $g=Sm,u8=CE,c8=l8(u8),cu=Object.create(null);function d8(e){var t=Object.create(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;var n=Object.create(null);return n.__proto__=!1,{properties:{whitelist:$g.createNewLookupObject(n,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:$g.createNewLookupObject(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}}function p8(e,t,n){return Ug(typeof e=="function"?t.methods:t.properties,n)}function Ug(e,t){return e.whitelist[t]!==void 0?e.whitelist[t]===!0:e.defaultValue!==void 0?e.defaultValue:(f8(t),!1)}function f8(e){cu[e]!==!0&&(cu[e]=!0,c8.default.log("error",'Handlebars: Access has been denied to resolve the property "'+e+`" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`))}function m8(){Object.keys(cu).forEach(function(e){delete cu[e]})}en.__esModule=!0;en.HandlebarsEnvironment=Ip;function AE(e){return e&&e.__esModule?e:{default:e}}var oi=je,h8=En,Uc=AE(h8),g8=xa,v8=Am,y8=CE,du=AE(y8),x8=zo,E8="4.7.8";en.VERSION=E8;var _8=8;en.COMPILER_REVISION=_8;var w8=7;en.LAST_COMPATIBLE_COMPILER_REVISION=w8;var b8={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};en.REVISION_CHANGES=b8;var Wc="[object Object]";function Ip(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},g8.registerDefaultHelpers(this),v8.registerDefaultDecorators(this)}Ip.prototype={constructor:Ip,logger:du.default,log:du.default.log,registerHelper:function(t,n){if(oi.toString.call(t)===Wc){if(n)throw new Uc.default("Arg not supported with multiple helpers");oi.extend(this.helpers,t)}else this.helpers[t]=n},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,n){if(oi.toString.call(t)===Wc)oi.extend(this.partials,t);else{if(typeof n>"u")throw new Uc.default('Attempting to register a partial called "'+t+'" as undefined');this.partials[t]=n}},unregisterPartial:function(t){delete this.partials[t]},registerDecorator:function(t,n){if(oi.toString.call(t)===Wc){if(n)throw new Uc.default("Arg not supported with multiple decorators");oi.extend(this.decorators,t)}else this.decorators[t]=n},unregisterDecorator:function(t){delete this.decorators[t]},resetLoggedPropertyAccesses:function(){x8.resetLoggedProperties()}};var C8=du.default.log;en.log=C8;en.createFrame=oi.createFrame;en.logger=du.default;var Pp={exports:{}};(function(e,t){t.__esModule=!0;function n(r){this.string=r}n.prototype.toString=n.prototype.toHTML=function(){return""+this.string},t.default=n,e.exports=t.default})(Pp,Pp.exports);var A8=Pp.exports,ei={},Dm={};Dm.__esModule=!0;Dm.wrapHelper=S8;function S8(e,t){if(typeof e!="function")return e;var n=function(){var i=arguments[arguments.length-1];return arguments[arguments.length-1]=t(i),e.apply(this,arguments)};return n}ei.__esModule=!0;ei.checkRevision=B8;ei.template=R8;ei.wrapProgram=xl;ei.resolvePartial=N8;ei.invokePartial=T8;ei.noop=SE;function D8(e){return e&&e.__esModule?e:{default:e}}function k8(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}var F8=je,qn=k8(F8),I8=En,Hn=D8(I8),Gn=en,Wg=xa,P8=Dm,qg=zo;function B8(e){var t=e&&e[0]||1,n=Gn.COMPILER_REVISION;if(!(t>=Gn.LAST_COMPATIBLE_COMPILER_REVISION&&t<=Gn.COMPILER_REVISION))if(t<Gn.LAST_COMPATIBLE_COMPILER_REVISION){var r=Gn.REVISION_CHANGES[n],i=Gn.REVISION_CHANGES[t];throw new Hn.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+i+").")}else throw new Hn.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}function R8(e,t){if(!t)throw new Hn.default("No environment passed to template");if(!e||!e.main)throw new Hn.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var n=e.compiler&&e.compiler[0]===7;function r(s,a,l){l.hash&&(a=qn.extend({},a,l.hash),l.ids&&(l.ids[0]=!0)),s=t.VM.resolvePartial.call(this,s,a,l);var u=qn.extend({},l,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),c=t.VM.invokePartial.call(this,s,a,u);if(c==null&&t.compile&&(l.partials[l.name]=t.compile(s,e.compilerOptions,t),c=l.partials[l.name](a,u)),c!=null){if(l.indent){for(var m=c.split(`
`),d=0,p=m.length;d<p&&!(!m[d]&&d+1===p);d++)m[d]=l.indent+m[d];c=m.join(`
`)}return c}else throw new Hn.default("The partial "+l.name+" could not be compiled when running in runtime-only mode")}var i={strict:function(a,l,u){if(!a||!(l in a))throw new Hn.default('"'+l+'" not defined in '+a,{loc:u});return i.lookupProperty(a,l)},lookupProperty:function(a,l){var u=a[l];if(u==null||Object.prototype.hasOwnProperty.call(a,l)||qg.resultIsAllowed(u,i.protoAccessControl,l))return u},lookup:function(a,l){for(var u=a.length,c=0;c<u;c++){var m=a[c]&&i.lookupProperty(a[c],l);if(m!=null)return a[c][l]}},lambda:function(a,l){return typeof a=="function"?a.call(l):a},escapeExpression:qn.escapeExpression,invokePartial:r,fn:function(a){var l=e[a];return l.decorator=e[a+"_d"],l},programs:[],program:function(a,l,u,c,m){var d=this.programs[a],p=this.fn(a);return l||m||c||u?d=xl(this,a,p,l,u,c,m):d||(d=this.programs[a]=xl(this,a,p)),d},data:function(a,l){for(;a&&l--;)a=a._parent;return a},mergeIfNeeded:function(a,l){var u=a||l;return a&&l&&a!==l&&(u=qn.extend({},l,a)),u},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function o(s){var a=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],l=a.data;o._setup(a),!a.partial&&e.useData&&(l=M8(s,l));var u=void 0,c=e.useBlockParams?[]:void 0;e.useDepths&&(a.depths?u=s!=a.depths[0]?[s].concat(a.depths):a.depths:u=[s]);function m(d){return""+e.main(i,d,i.helpers,i.partials,l,c,u)}return m=DE(e.main,m,i,a.depths||[],l,c),m(s,a)}return o.isTop=!0,o._setup=function(s){if(s.partial)i.protoAccessControl=s.protoAccessControl,i.helpers=s.helpers,i.partials=s.partials,i.decorators=s.decorators,i.hooks=s.hooks;else{var a=qn.extend({},t.helpers,s.helpers);O8(a,i),i.helpers=a,e.usePartial&&(i.partials=i.mergeIfNeeded(s.partials,t.partials)),(e.usePartial||e.useDecorators)&&(i.decorators=qn.extend({},t.decorators,s.decorators)),i.hooks={},i.protoAccessControl=qg.createProtoAccessControl(s);var l=s.allowCallsToHelperMissing||n;Wg.moveHelperToHooks(i,"helperMissing",l),Wg.moveHelperToHooks(i,"blockHelperMissing",l)}},o._child=function(s,a,l,u){if(e.useBlockParams&&!l)throw new Hn.default("must pass block params");if(e.useDepths&&!u)throw new Hn.default("must pass parent depths");return xl(i,s,e[s],a,0,l,u)},o}function xl(e,t,n,r,i,o,s){function a(l){var u=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],c=s;return s&&l!=s[0]&&!(l===e.nullContext&&s[0]===null)&&(c=[l].concat(s)),n(e,l,e.helpers,e.partials,u.data||r,o&&[u.blockParams].concat(o),c)}return a=DE(n,a,e,s,r,o),a.program=t,a.depth=s?s.length:0,a.blockParams=i||0,a}function N8(e,t,n){return e?!e.call&&!n.name&&(n.name=e,e=n.partials[e]):n.name==="@partial-block"?e=n.data["partial-block"]:e=n.partials[n.name],e}function T8(e,t,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var i=void 0;if(n.fn&&n.fn!==SE&&function(){n.data=Gn.createFrame(n.data);var o=n.fn;i=n.data["partial-block"]=function(a){var l=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];return l.data=Gn.createFrame(l.data),l.data["partial-block"]=r,o(a,l)},o.partials&&(n.partials=qn.extend({},n.partials,o.partials))}(),e===void 0&&i&&(e=i),e===void 0)throw new Hn.default("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)}function SE(){return""}function M8(e,t){return(!t||!("root"in t))&&(t=t?Gn.createFrame(t):{},t.root=e),t}function DE(e,t,n,r,i,o){if(e.decorator){var s={};t=e.decorator(t,s,n,r&&r[0],i,o,r),qn.extend(t,s)}return t}function O8(e,t){Object.keys(e).forEach(function(n){var r=e[n];e[n]=L8(r,t)})}function L8(e,t){var n=t.lookupProperty;return P8.wrapHelper(e,function(r){return qn.extend({lookupProperty:n},r)})}var Bp={exports:{}};(function(e,t){t.__esModule=!0,t.default=function(n){(function(){typeof globalThis!="object"&&(Object.prototype.__defineGetter__("__magic__",function(){return this}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__)})();var r=globalThis.Handlebars;n.noConflict=function(){return globalThis.Handlebars===n&&(globalThis.Handlebars=r),n}},e.exports=t.default})(Bp,Bp.exports);var kE=Bp.exports;(function(e,t){t.__esModule=!0;function n(g){return g&&g.__esModule?g:{default:g}}function r(g){if(g&&g.__esModule)return g;var x={};if(g!=null)for(var E in g)Object.prototype.hasOwnProperty.call(g,E)&&(x[E]=g[E]);return x.default=g,x}var i=en,o=r(i),s=A8,a=n(s),l=En,u=n(l),c=je,m=r(c),d=ei,p=r(d),f=kE,h=n(f);function y(){var g=new o.HandlebarsEnvironment;return m.extend(g,o),g.SafeString=a.default,g.Exception=u.default,g.Utils=m,g.escapeExpression=m.escapeExpression,g.VM=p,g.template=function(x){return p.template(x,g)},g}var v=y();v.create=y,h.default(v),v.default=v,t.default=v,e.exports=t.default})(yp,yp.exports);var j8=yp.exports,Rp={exports:{}};(function(e,t){t.__esModule=!0;var n={helpers:{helperExpression:function(i){return i.type==="SubExpression"||(i.type==="MustacheStatement"||i.type==="BlockStatement")&&!!(i.params&&i.params.length||i.hash)},scopedId:function(i){return/^\.|this\b/.test(i.original)},simpleId:function(i){return i.parts.length===1&&!n.helpers.scopedId(i)&&!i.depth}}};t.default=n,e.exports=t.default})(Rp,Rp.exports);var FE=Rp.exports,Ea={},Np={exports:{}};(function(e,t){t.__esModule=!0;var n=function(){var r={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(a,l,u,c,m,d,p){var f=d.length-1;switch(m){case 1:return d[f-1];case 2:this.$=c.prepareProgram(d[f]);break;case 3:this.$=d[f];break;case 4:this.$=d[f];break;case 5:this.$=d[f];break;case 6:this.$=d[f];break;case 7:this.$=d[f];break;case 8:this.$=d[f];break;case 9:this.$={type:"CommentStatement",value:c.stripComment(d[f]),strip:c.stripFlags(d[f],d[f]),loc:c.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:d[f],value:d[f],loc:c.locInfo(this._$)};break;case 11:this.$=c.prepareRawBlock(d[f-2],d[f-1],d[f],this._$);break;case 12:this.$={path:d[f-3],params:d[f-2],hash:d[f-1]};break;case 13:this.$=c.prepareBlock(d[f-3],d[f-2],d[f-1],d[f],!1,this._$);break;case 14:this.$=c.prepareBlock(d[f-3],d[f-2],d[f-1],d[f],!0,this._$);break;case 15:this.$={open:d[f-5],path:d[f-4],params:d[f-3],hash:d[f-2],blockParams:d[f-1],strip:c.stripFlags(d[f-5],d[f])};break;case 16:this.$={path:d[f-4],params:d[f-3],hash:d[f-2],blockParams:d[f-1],strip:c.stripFlags(d[f-5],d[f])};break;case 17:this.$={path:d[f-4],params:d[f-3],hash:d[f-2],blockParams:d[f-1],strip:c.stripFlags(d[f-5],d[f])};break;case 18:this.$={strip:c.stripFlags(d[f-1],d[f-1]),program:d[f]};break;case 19:var h=c.prepareBlock(d[f-2],d[f-1],d[f],d[f],!1,this._$),y=c.prepareProgram([h],d[f-1].loc);y.chained=!0,this.$={strip:d[f-2].strip,program:y,chain:!0};break;case 20:this.$=d[f];break;case 21:this.$={path:d[f-1],strip:c.stripFlags(d[f-2],d[f])};break;case 22:this.$=c.prepareMustache(d[f-3],d[f-2],d[f-1],d[f-4],c.stripFlags(d[f-4],d[f]),this._$);break;case 23:this.$=c.prepareMustache(d[f-3],d[f-2],d[f-1],d[f-4],c.stripFlags(d[f-4],d[f]),this._$);break;case 24:this.$={type:"PartialStatement",name:d[f-3],params:d[f-2],hash:d[f-1],indent:"",strip:c.stripFlags(d[f-4],d[f]),loc:c.locInfo(this._$)};break;case 25:this.$=c.preparePartialBlock(d[f-2],d[f-1],d[f],this._$);break;case 26:this.$={path:d[f-3],params:d[f-2],hash:d[f-1],strip:c.stripFlags(d[f-4],d[f])};break;case 27:this.$=d[f];break;case 28:this.$=d[f];break;case 29:this.$={type:"SubExpression",path:d[f-3],params:d[f-2],hash:d[f-1],loc:c.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:d[f],loc:c.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:c.id(d[f-2]),value:d[f],loc:c.locInfo(this._$)};break;case 32:this.$=c.id(d[f-1]);break;case 33:this.$=d[f];break;case 34:this.$=d[f];break;case 35:this.$={type:"StringLiteral",value:d[f],original:d[f],loc:c.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(d[f]),original:Number(d[f]),loc:c.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:d[f]==="true",original:d[f]==="true",loc:c.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:c.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:c.locInfo(this._$)};break;case 40:this.$=d[f];break;case 41:this.$=d[f];break;case 42:this.$=c.preparePath(!0,d[f],this._$);break;case 43:this.$=c.preparePath(!1,d[f],this._$);break;case 44:d[f-2].push({part:c.id(d[f]),original:d[f],separator:d[f-1]}),this.$=d[f-2];break;case 45:this.$=[{part:c.id(d[f]),original:d[f]}];break;case 46:this.$=[];break;case 47:d[f-1].push(d[f]);break;case 48:this.$=[];break;case 49:d[f-1].push(d[f]);break;case 50:this.$=[];break;case 51:d[f-1].push(d[f]);break;case 58:this.$=[];break;case 59:d[f-1].push(d[f]);break;case 64:this.$=[];break;case 65:d[f-1].push(d[f]);break;case 70:this.$=[];break;case 71:d[f-1].push(d[f]);break;case 78:this.$=[];break;case 79:d[f-1].push(d[f]);break;case 82:this.$=[];break;case 83:d[f-1].push(d[f]);break;case 86:this.$=[];break;case 87:d[f-1].push(d[f]);break;case 90:this.$=[];break;case 91:d[f-1].push(d[f]);break;case 94:this.$=[];break;case 95:d[f-1].push(d[f]);break;case 98:this.$=[d[f]];break;case 99:d[f-1].push(d[f]);break;case 100:this.$=[d[f]];break;case 101:d[f-1].push(d[f]);break}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(a,l){throw new Error(a)},parse:function(a){var l=this,u=[0],c=[null],m=[],d=this.table,p="",f=0,h=0;this.lexer.setInput(a),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var y=this.lexer.yylloc;m.push(y);var v=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function g(){var O;return O=l.lexer.lex()||1,typeof O!="number"&&(O=l.symbols_[O]||O),O}for(var x,E,_,F,D={},P,N,M,G;;){if(E=u[u.length-1],this.defaultActions[E]?_=this.defaultActions[E]:((x===null||typeof x>"u")&&(x=g()),_=d[E]&&d[E][x]),typeof _>"u"||!_.length||!_[0]){var I="";{G=[];for(P in d[E])this.terminals_[P]&&P>2&&G.push("'"+this.terminals_[P]+"'");this.lexer.showPosition?I="Parse error on line "+(f+1)+`:
`+this.lexer.showPosition()+`
Expecting `+G.join(", ")+", got '"+(this.terminals_[x]||x)+"'":I="Parse error on line "+(f+1)+": Unexpected "+(x==1?"end of input":"'"+(this.terminals_[x]||x)+"'"),this.parseError(I,{text:this.lexer.match,token:this.terminals_[x]||x,line:this.lexer.yylineno,loc:y,expected:G})}}if(_[0]instanceof Array&&_.length>1)throw new Error("Parse Error: multiple actions possible at state: "+E+", token: "+x);switch(_[0]){case 1:u.push(x),c.push(this.lexer.yytext),m.push(this.lexer.yylloc),u.push(_[1]),x=null,h=this.lexer.yyleng,p=this.lexer.yytext,f=this.lexer.yylineno,y=this.lexer.yylloc;break;case 2:if(N=this.productions_[_[1]][1],D.$=c[c.length-N],D._$={first_line:m[m.length-(N||1)].first_line,last_line:m[m.length-1].last_line,first_column:m[m.length-(N||1)].first_column,last_column:m[m.length-1].last_column},v&&(D._$.range=[m[m.length-(N||1)].range[0],m[m.length-1].range[1]]),F=this.performAction.call(D,p,h,f,this.yy,_[1],c,m),typeof F<"u")return F;N&&(u=u.slice(0,-1*N*2),c=c.slice(0,-1*N),m=m.slice(0,-1*N)),u.push(this.productions_[_[1]][0]),c.push(D.$),m.push(D._$),M=d[u[u.length-2]][u[u.length-1]],u.push(M);break;case 3:return!0}}return!0}},i=function(){var s={EOF:1,parseError:function(l,u){if(this.yy.parser)this.yy.parser.parseError(l,u);else throw new Error(l)},setInput:function(l){return this._input=l,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var l=this._input[0];this.yytext+=l,this.yyleng++,this.offset++,this.match+=l,this.matched+=l;var u=l.match(/(?:\r\n?|\n).*/g);return u?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),l},unput:function(l){var u=l.length,c=l.split(/(?:\r\n?|\n)/g);this._input=l+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-u-1),this.offset-=u;var m=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var d=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===m.length?this.yylloc.first_column:0)+m[m.length-c.length].length-c[0].length:this.yylloc.first_column-u},this.options.ranges&&(this.yylloc.range=[d[0],d[0]+this.yyleng-u]),this},more:function(){return this._more=!0,this},less:function(l){this.unput(this.match.slice(l))},pastInput:function(){var l=this.matched.substr(0,this.matched.length-this.match.length);return(l.length>20?"...":"")+l.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var l=this.match;return l.length<20&&(l+=this._input.substr(0,20-l.length)),(l.substr(0,20)+(l.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var l=this.pastInput(),u=new Array(l.length+1).join("-");return l+this.upcomingInput()+`
`+u+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var l,u,c,m,d;this._more||(this.yytext="",this.match="");for(var p=this._currentRules(),f=0;f<p.length&&(c=this._input.match(this.rules[p[f]]),!(c&&(!u||c[0].length>u[0].length)&&(u=c,m=f,!this.options.flex)));f++);return u?(d=u[0].match(/(?:\r\n?|\n).*/g),d&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+u[0].length},this.yytext+=u[0],this.match+=u[0],this.matches=u,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(u[0].length),this.matched+=u[0],l=this.performAction.call(this,this.yy,this,p[m],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),l||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var l=this.next();return typeof l<"u"?l:this.lex()},begin:function(l){this.conditionStack.push(l)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(l){this.begin(l)}};return s.options={},s.performAction=function(l,u,c,m){function d(p,f){return u.yytext=u.yytext.substring(p,u.yyleng-f+p)}switch(c){case 0:if(u.yytext.slice(-2)==="\\\\"?(d(0,1),this.begin("mu")):u.yytext.slice(-1)==="\\"?(d(0,1),this.begin("emu")):this.begin("mu"),u.yytext)return 15;break;case 1:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),this.conditionStack[this.conditionStack.length-1]==="raw"?15:(d(5,9),"END_RAW_BLOCK");case 5:return 15;case 6:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:return this.popState(),44;case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:return 48;case 21:this.unput(u.yytext),this.popState(),this.begin("com");break;case 22:return this.popState(),14;case 23:return 48;case 24:return 73;case 25:return 72;case 26:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return u.yytext=d(1,2).replace(/\\"/g,'"'),80;case 32:return u.yytext=d(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:return 82;case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 41:return 72;case 42:return u.yytext=u.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},s.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],s.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},s}();r.lexer=i;function o(){this.yy={}}return o.prototype=r,r.Parser=o,new o}();t.default=n,e.exports=t.default})(Np,Np.exports);var V8=Np.exports,Tp={exports:{}},Mp={exports:{}};(function(e,t){t.__esModule=!0;function n(u){return u&&u.__esModule?u:{default:u}}var r=En,i=n(r);function o(){this.parents=[]}o.prototype={constructor:o,mutating:!1,acceptKey:function(c,m){var d=this.accept(c[m]);if(this.mutating){if(d&&!o.prototype[d.type])throw new i.default('Unexpected node type "'+d.type+'" found when accepting '+m+" on "+c.type);c[m]=d}},acceptRequired:function(c,m){if(this.acceptKey(c,m),!c[m])throw new i.default(c.type+" requires "+m)},acceptArray:function(c){for(var m=0,d=c.length;m<d;m++)this.acceptKey(c,m),c[m]||(c.splice(m,1),m--,d--)},accept:function(c){if(c){if(!this[c.type])throw new i.default("Unknown type: "+c.type,c);this.current&&this.parents.unshift(this.current),this.current=c;var m=this[c.type](c);if(this.current=this.parents.shift(),!this.mutating||m)return m;if(m!==!1)return c}},Program:function(c){this.acceptArray(c.body)},MustacheStatement:s,Decorator:s,BlockStatement:a,DecoratorBlock:a,PartialStatement:l,PartialBlockStatement:function(c){l.call(this,c),this.acceptKey(c,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:s,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(c){this.acceptArray(c.pairs)},HashPair:function(c){this.acceptRequired(c,"value")}};function s(u){this.acceptRequired(u,"path"),this.acceptArray(u.params),this.acceptKey(u,"hash")}function a(u){s.call(this,u),this.acceptKey(u,"program"),this.acceptKey(u,"inverse")}function l(u){this.acceptRequired(u,"name"),this.acceptArray(u.params),this.acceptKey(u,"hash")}t.default=o,e.exports=t.default})(Mp,Mp.exports);var IE=Mp.exports;(function(e,t){t.__esModule=!0;function n(c){return c&&c.__esModule?c:{default:c}}var r=IE,i=n(r);function o(){var c=arguments.length<=0||arguments[0]===void 0?{}:arguments[0];this.options=c}o.prototype=new i.default,o.prototype.Program=function(c){var m=!this.options.ignoreStandalone,d=!this.isRootSeen;this.isRootSeen=!0;for(var p=c.body,f=0,h=p.length;f<h;f++){var y=p[f],v=this.accept(y);if(v){var g=s(p,f,d),x=a(p,f,d),E=v.openStandalone&&g,_=v.closeStandalone&&x,F=v.inlineStandalone&&g&&x;v.close&&l(p,f,!0),v.open&&u(p,f,!0),m&&F&&(l(p,f),u(p,f)&&y.type==="PartialStatement"&&(y.indent=/([ \t]+$)/.exec(p[f-1].original)[1])),m&&E&&(l((y.program||y.inverse).body),u(p,f)),m&&_&&(l(p,f),u((y.inverse||y.program).body))}}return c},o.prototype.BlockStatement=o.prototype.DecoratorBlock=o.prototype.PartialBlockStatement=function(c){this.accept(c.program),this.accept(c.inverse);var m=c.program||c.inverse,d=c.program&&c.inverse,p=d,f=d;if(d&&d.chained)for(p=d.body[0].program;f.chained;)f=f.body[f.body.length-1].program;var h={open:c.openStrip.open,close:c.closeStrip.close,openStandalone:a(m.body),closeStandalone:s((p||m).body)};if(c.openStrip.close&&l(m.body,null,!0),d){var y=c.inverseStrip;y.open&&u(m.body,null,!0),y.close&&l(p.body,null,!0),c.closeStrip.open&&u(f.body,null,!0),!this.options.ignoreStandalone&&s(m.body)&&a(p.body)&&(u(m.body),l(p.body))}else c.closeStrip.open&&u(m.body,null,!0);return h},o.prototype.Decorator=o.prototype.MustacheStatement=function(c){return c.strip},o.prototype.PartialStatement=o.prototype.CommentStatement=function(c){var m=c.strip||{};return{inlineStandalone:!0,open:m.open,close:m.close}};function s(c,m,d){m===void 0&&(m=c.length);var p=c[m-1],f=c[m-2];if(!p)return d;if(p.type==="ContentStatement")return(f||!d?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(p.original)}function a(c,m,d){m===void 0&&(m=-1);var p=c[m+1],f=c[m+2];if(!p)return d;if(p.type==="ContentStatement")return(f||!d?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(p.original)}function l(c,m,d){var p=c[m==null?0:m+1];if(!(!p||p.type!=="ContentStatement"||!d&&p.rightStripped)){var f=p.value;p.value=p.value.replace(d?/^\s+/:/^[ \t]*\r?\n?/,""),p.rightStripped=p.value!==f}}function u(c,m,d){var p=c[m==null?c.length-1:m-1];if(!(!p||p.type!=="ContentStatement"||!d&&p.leftStripped)){var f=p.value;return p.value=p.value.replace(d?/\s+$/:/[ \t]+$/,""),p.leftStripped=p.value!==f,p.leftStripped}}t.default=o,e.exports=t.default})(Tp,Tp.exports);var z8=Tp.exports,tn={};tn.__esModule=!0;tn.SourceLocation=W8;tn.id=q8;tn.stripFlags=H8;tn.stripComment=G8;tn.preparePath=Z8;tn.prepareMustache=K8;tn.prepareRawBlock=Q8;tn.prepareBlock=X8;tn.prepareProgram=Y8;tn.preparePartialBlock=J8;function $8(e){return e&&e.__esModule?e:{default:e}}var U8=En,km=$8(U8);function Fm(e,t){if(t=t.path?t.path.original:t,e.path.original!==t){var n={loc:e.path.loc};throw new km.default(e.path.original+" doesn't match "+t,n)}}function W8(e,t){this.source=e,this.start={line:t.first_line,column:t.first_column},this.end={line:t.last_line,column:t.last_column}}function q8(e){return/^\[.*\]$/.test(e)?e.substring(1,e.length-1):e}function H8(e,t){return{open:e.charAt(2)==="~",close:t.charAt(t.length-3)==="~"}}function G8(e){return e.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function Z8(e,t,n){n=this.locInfo(n);for(var r=e?"@":"",i=[],o=0,s=0,a=t.length;s<a;s++){var l=t[s].part,u=t[s].original!==l;if(r+=(t[s].separator||"")+l,!u&&(l===".."||l==="."||l==="this")){if(i.length>0)throw new km.default("Invalid path: "+r,{loc:n});l===".."&&o++}else i.push(l)}return{type:"PathExpression",data:e,depth:o,parts:i,original:r,loc:n}}function K8(e,t,n,r,i,o){var s=r.charAt(3)||r.charAt(2),a=s!=="{"&&s!=="&",l=/\*/.test(r);return{type:l?"Decorator":"MustacheStatement",path:e,params:t,hash:n,escaped:a,strip:i,loc:this.locInfo(o)}}function Q8(e,t,n,r){Fm(e,n),r=this.locInfo(r);var i={type:"Program",body:t,strip:{},loc:r};return{type:"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:i,openStrip:{},inverseStrip:{},closeStrip:{},loc:r}}function X8(e,t,n,r,i,o){r&&r.path&&Fm(e,r);var s=/\*/.test(e.open);t.blockParams=e.blockParams;var a=void 0,l=void 0;if(n){if(s)throw new km.default("Unexpected inverse block on decorator",n);n.chain&&(n.program.body[0].closeStrip=r.strip),l=n.strip,a=n.program}return i&&(i=a,a=t,t=i),{type:s?"DecoratorBlock":"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:t,inverse:a,openStrip:e.strip,inverseStrip:l,closeStrip:r&&r.strip,loc:this.locInfo(o)}}function Y8(e,t){if(!t&&e.length){var n=e[0].loc,r=e[e.length-1].loc;n&&r&&(t={source:n.source,start:{line:n.start.line,column:n.start.column},end:{line:r.end.line,column:r.end.column}})}return{type:"Program",body:e,strip:{},loc:t}}function J8(e,t,n,r){return Fm(e,n),{type:"PartialBlockStatement",name:e.path,params:e.params,hash:e.hash,program:t,openStrip:e.strip,closeStrip:n&&n.strip,loc:this.locInfo(r)}}Ea.__esModule=!0;Ea.parseWithoutProcessing=BE;Ea.parse=a6;function e6(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function PE(e){return e&&e.__esModule?e:{default:e}}var t6=V8,Op=PE(t6),n6=z8,r6=PE(n6),i6=tn,o6=e6(i6),s6=je;Ea.parser=Op.default;var El={};s6.extend(El,o6);function BE(e,t){if(e.type==="Program")return e;Op.default.yy=El,El.locInfo=function(r){return new El.SourceLocation(t&&t.srcName,r)};var n=Op.default.parse(e);return n}function a6(e,t){var n=BE(e,t),r=new r6.default(t);return r.accept(n)}var _a={};_a.__esModule=!0;_a.Compiler=Lp;_a.precompile=d6;_a.compile=p6;function RE(e){return e&&e.__esModule?e:{default:e}}var l6=En,As=RE(l6),aa=je,u6=FE,ts=RE(u6),c6=[].slice;function Lp(){}Lp.prototype={compiler:Lp,equals:function(t){var n=this.opcodes.length;if(t.opcodes.length!==n)return!1;for(var r=0;r<n;r++){var i=this.opcodes[r],o=t.opcodes[r];if(i.opcode!==o.opcode||!NE(i.args,o.args))return!1}n=this.children.length;for(var r=0;r<n;r++)if(!this.children[r].equals(t.children[r]))return!1;return!0},guid:0,compile:function(t,n){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=n,this.stringParams=n.stringParams,this.trackIds=n.trackIds,n.blockParams=n.blockParams||[],n.knownHelpers=aa.extend(Object.create(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},n.knownHelpers),this.accept(t)},compileProgram:function(t){var n=new this.compiler,r=n.compile(t,this.options),i=this.guid++;return this.usePartial=this.usePartial||r.usePartial,this.children[i]=r,this.useDepths=this.useDepths||r.useDepths,i},accept:function(t){if(!this[t.type])throw new As.default("Unknown type: "+t.type,t);this.sourceNode.unshift(t);var n=this[t.type](t);return this.sourceNode.shift(),n},Program:function(t){this.options.blockParams.unshift(t.blockParams);for(var n=t.body,r=n.length,i=0;i<r;i++)this.accept(n[i]);return this.options.blockParams.shift(),this.isSimple=r===1,this.blockParams=t.blockParams?t.blockParams.length:0,this},BlockStatement:function(t){Hg(t);var n=t.program,r=t.inverse;n=n&&this.compileProgram(n),r=r&&this.compileProgram(r);var i=this.classifySexpr(t);i==="helper"?this.helperSexpr(t,n,r):i==="simple"?(this.simpleSexpr(t),this.opcode("pushProgram",n),this.opcode("pushProgram",r),this.opcode("emptyHash"),this.opcode("blockValue",t.path.original)):(this.ambiguousSexpr(t,n,r),this.opcode("pushProgram",n),this.opcode("pushProgram",r),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(t){var n=t.program&&this.compileProgram(t.program),r=this.setupFullMustacheParams(t,n,void 0),i=t.path;this.useDecorators=!0,this.opcode("registerDecorator",r.length,i.original)},PartialStatement:function(t){this.usePartial=!0;var n=t.program;n&&(n=this.compileProgram(t.program));var r=t.params;if(r.length>1)throw new As.default("Unsupported number of partial arguments: "+r.length,t);r.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):r.push({type:"PathExpression",parts:[],depth:0}));var i=t.name.original,o=t.name.type==="SubExpression";o&&this.accept(t.name),this.setupFullMustacheParams(t,n,void 0,!0);var s=t.indent||"";this.options.preventIndent&&s&&(this.opcode("appendContent",s),s=""),this.opcode("invokePartial",o,i,s),this.opcode("append")},PartialBlockStatement:function(t){this.PartialStatement(t)},MustacheStatement:function(t){this.SubExpression(t),t.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(t){this.DecoratorBlock(t)},ContentStatement:function(t){t.value&&this.opcode("appendContent",t.value)},CommentStatement:function(){},SubExpression:function(t){Hg(t);var n=this.classifySexpr(t);n==="simple"?this.simpleSexpr(t):n==="helper"?this.helperSexpr(t):this.ambiguousSexpr(t)},ambiguousSexpr:function(t,n,r){var i=t.path,o=i.parts[0],s=n!=null||r!=null;this.opcode("getContext",i.depth),this.opcode("pushProgram",n),this.opcode("pushProgram",r),i.strict=!0,this.accept(i),this.opcode("invokeAmbiguous",o,s)},simpleSexpr:function(t){var n=t.path;n.strict=!0,this.accept(n),this.opcode("resolvePossibleLambda")},helperSexpr:function(t,n,r){var i=this.setupFullMustacheParams(t,n,r),o=t.path,s=o.parts[0];if(this.options.knownHelpers[s])this.opcode("invokeKnownHelper",i.length,s);else{if(this.options.knownHelpersOnly)throw new As.default("You specified knownHelpersOnly, but used the unknown helper "+s,t);o.strict=!0,o.falsy=!0,this.accept(o),this.opcode("invokeHelper",i.length,o.original,ts.default.helpers.simpleId(o))}},PathExpression:function(t){this.addDepth(t.depth),this.opcode("getContext",t.depth);var n=t.parts[0],r=ts.default.helpers.scopedId(t),i=!t.depth&&!r&&this.blockParamIndex(n);i?this.opcode("lookupBlockParam",i,t.parts):n?t.data?(this.options.data=!0,this.opcode("lookupData",t.depth,t.parts,t.strict)):this.opcode("lookupOnContext",t.parts,t.falsy,t.strict,r):this.opcode("pushContext")},StringLiteral:function(t){this.opcode("pushString",t.value)},NumberLiteral:function(t){this.opcode("pushLiteral",t.value)},BooleanLiteral:function(t){this.opcode("pushLiteral",t.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(t){var n=t.pairs,r=0,i=n.length;for(this.opcode("pushHash");r<i;r++)this.pushParam(n[r].value);for(;r--;)this.opcode("assignToHash",n[r].key);this.opcode("popHash")},opcode:function(t){this.opcodes.push({opcode:t,args:c6.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(t){t&&(this.useDepths=!0)},classifySexpr:function(t){var n=ts.default.helpers.simpleId(t.path),r=n&&!!this.blockParamIndex(t.path.parts[0]),i=!r&&ts.default.helpers.helperExpression(t),o=!r&&(i||n);if(o&&!i){var s=t.path.parts[0],a=this.options;a.knownHelpers[s]?i=!0:a.knownHelpersOnly&&(o=!1)}return i?"helper":o?"ambiguous":"simple"},pushParams:function(t){for(var n=0,r=t.length;n<r;n++)this.pushParam(t[n])},pushParam:function(t){var n=t.value!=null?t.value:t.original||"";if(this.stringParams)n.replace&&(n=n.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),t.depth&&this.addDepth(t.depth),this.opcode("getContext",t.depth||0),this.opcode("pushStringParam",n,t.type),t.type==="SubExpression"&&this.accept(t);else{if(this.trackIds){var r=void 0;if(t.parts&&!ts.default.helpers.scopedId(t)&&!t.depth&&(r=this.blockParamIndex(t.parts[0])),r){var i=t.parts.slice(1).join(".");this.opcode("pushId","BlockParam",r,i)}else n=t.original||n,n.replace&&(n=n.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",t.type,n)}this.accept(t)}},setupFullMustacheParams:function(t,n,r,i){var o=t.params;return this.pushParams(o),this.opcode("pushProgram",n),this.opcode("pushProgram",r),t.hash?this.accept(t.hash):this.opcode("emptyHash",i),o},blockParamIndex:function(t){for(var n=0,r=this.options.blockParams.length;n<r;n++){var i=this.options.blockParams[n],o=i&&aa.indexOf(i,t);if(i&&o>=0)return[n,o]}}};function d6(e,t,n){if(e==null||typeof e!="string"&&e.type!=="Program")throw new As.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+e);t=t||{},"data"in t||(t.data=!0),t.compat&&(t.useDepths=!0);var r=n.parse(e,t),i=new n.Compiler().compile(r,t);return new n.JavaScriptCompiler().compile(i,t)}function p6(e,t,n){if(t===void 0&&(t={}),e==null||typeof e!="string"&&e.type!=="Program")throw new As.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+e);t=aa.extend({},t),"data"in t||(t.data=!0),t.compat&&(t.useDepths=!0);var r=void 0;function i(){var s=n.parse(e,t),a=new n.Compiler().compile(s,t),l=new n.JavaScriptCompiler().compile(a,t,void 0,!0);return n.template(l)}function o(s,a){return r||(r=i()),r.call(this,s,a)}return o._setup=function(s){return r||(r=i()),r._setup(s)},o._child=function(s,a,l,u){return r||(r=i()),r._child(s,a,l,u)},o}function NE(e,t){if(e===t)return!0;if(aa.isArray(e)&&aa.isArray(t)&&e.length===t.length){for(var n=0;n<e.length;n++)if(!NE(e[n],t[n]))return!1;return!0}}function Hg(e){if(!e.path.parts){var t=e.path;e.path={type:"PathExpression",data:!1,depth:0,parts:[t.original+""],original:t.original+"",loc:t.loc}}}var jp={exports:{}},Vp={exports:{}},ns={},qc={},Ja={},el={},Gg;function f6(){if(Gg)return el;Gg=1;var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");return el.encode=function(t){if(0<=t&&t<e.length)return e[t];throw new TypeError("Must be between 0 and 63: "+t)},el.decode=function(t){var n=65,r=90,i=97,o=122,s=48,a=57,l=43,u=47,c=26,m=52;return n<=t&&t<=r?t-n:i<=t&&t<=o?t-i+c:s<=t&&t<=a?t-s+m:t==l?62:t==u?63:-1},el}var Zg;function TE(){if(Zg)return Ja;Zg=1;var e=f6(),t=5,n=1<<t,r=n-1,i=n;function o(a){return a<0?(-a<<1)+1:(a<<1)+0}function s(a){var l=(a&1)===1,u=a>>1;return l?-u:u}return Ja.encode=function(l){var u="",c,m=o(l);do c=m&r,m>>>=t,m>0&&(c|=i),u+=e.encode(c);while(m>0);return u},Ja.decode=function(l,u,c){var m=l.length,d=0,p=0,f,h;do{if(u>=m)throw new Error("Expected more digits in base 64 VLQ value.");if(h=e.decode(l.charCodeAt(u++)),h===-1)throw new Error("Invalid base64 digit: "+l.charAt(u-1));f=!!(h&i),h&=r,d=d+(h<<p),p+=t}while(f);c.value=s(d),c.rest=u},Ja}var Hc={},Kg;function wa(){return Kg||(Kg=1,function(e){function t(E,_,F){if(_ in E)return E[_];if(arguments.length===3)return F;throw new Error('"'+_+'" is a required argument.')}e.getArg=t;var n=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,r=/^data:.+\,.+$/;function i(E){var _=E.match(n);return _?{scheme:_[1],auth:_[2],host:_[3],port:_[4],path:_[5]}:null}e.urlParse=i;function o(E){var _="";return E.scheme&&(_+=E.scheme+":"),_+="//",E.auth&&(_+=E.auth+"@"),E.host&&(_+=E.host),E.port&&(_+=":"+E.port),E.path&&(_+=E.path),_}e.urlGenerate=o;function s(E){var _=E,F=i(E);if(F){if(!F.path)return E;_=F.path}for(var D=e.isAbsolute(_),P=_.split(/\/+/),N,M=0,G=P.length-1;G>=0;G--)N=P[G],N==="."?P.splice(G,1):N===".."?M++:M>0&&(N===""?(P.splice(G+1,M),M=0):(P.splice(G,2),M--));return _=P.join("/"),_===""&&(_=D?"/":"."),F?(F.path=_,o(F)):_}e.normalize=s;function a(E,_){E===""&&(E="."),_===""&&(_=".");var F=i(_),D=i(E);if(D&&(E=D.path||"/"),F&&!F.scheme)return D&&(F.scheme=D.scheme),o(F);if(F||_.match(r))return _;if(D&&!D.host&&!D.path)return D.host=_,o(D);var P=_.charAt(0)==="/"?_:s(E.replace(/\/+$/,"")+"/"+_);return D?(D.path=P,o(D)):P}e.join=a,e.isAbsolute=function(E){return E.charAt(0)==="/"||n.test(E)};function l(E,_){E===""&&(E="."),E=E.replace(/\/$/,"");for(var F=0;_.indexOf(E+"/")!==0;){var D=E.lastIndexOf("/");if(D<0||(E=E.slice(0,D),E.match(/^([^\/]+:\/)?\/*$/)))return _;++F}return Array(F+1).join("../")+_.substr(E.length+1)}e.relative=l;var u=function(){var E=Object.create(null);return!("__proto__"in E)}();function c(E){return E}function m(E){return p(E)?"$"+E:E}e.toSetString=u?c:m;function d(E){return p(E)?E.slice(1):E}e.fromSetString=u?c:d;function p(E){if(!E)return!1;var _=E.length;if(_<9||E.charCodeAt(_-1)!==95||E.charCodeAt(_-2)!==95||E.charCodeAt(_-3)!==111||E.charCodeAt(_-4)!==116||E.charCodeAt(_-5)!==111||E.charCodeAt(_-6)!==114||E.charCodeAt(_-7)!==112||E.charCodeAt(_-8)!==95||E.charCodeAt(_-9)!==95)return!1;for(var F=_-10;F>=0;F--)if(E.charCodeAt(F)!==36)return!1;return!0}function f(E,_,F){var D=y(E.source,_.source);return D!==0||(D=E.originalLine-_.originalLine,D!==0)||(D=E.originalColumn-_.originalColumn,D!==0||F)||(D=E.generatedColumn-_.generatedColumn,D!==0)||(D=E.generatedLine-_.generatedLine,D!==0)?D:y(E.name,_.name)}e.compareByOriginalPositions=f;function h(E,_,F){var D=E.generatedLine-_.generatedLine;return D!==0||(D=E.generatedColumn-_.generatedColumn,D!==0||F)||(D=y(E.source,_.source),D!==0)||(D=E.originalLine-_.originalLine,D!==0)||(D=E.originalColumn-_.originalColumn,D!==0)?D:y(E.name,_.name)}e.compareByGeneratedPositionsDeflated=h;function y(E,_){return E===_?0:E===null?1:_===null?-1:E>_?1:-1}function v(E,_){var F=E.generatedLine-_.generatedLine;return F!==0||(F=E.generatedColumn-_.generatedColumn,F!==0)||(F=y(E.source,_.source),F!==0)||(F=E.originalLine-_.originalLine,F!==0)||(F=E.originalColumn-_.originalColumn,F!==0)?F:y(E.name,_.name)}e.compareByGeneratedPositionsInflated=v;function g(E){return JSON.parse(E.replace(/^\)]}'[^\n]*\n/,""))}e.parseSourceMapInput=g;function x(E,_,F){if(_=_||"",E&&(E[E.length-1]!=="/"&&_[0]!=="/"&&(E+="/"),_=E+_),F){var D=i(F);if(!D)throw new Error("sourceMapURL could not be parsed");if(D.path){var P=D.path.lastIndexOf("/");P>=0&&(D.path=D.path.substring(0,P+1))}_=a(o(D),_)}return s(_)}e.computeSourceURL=x}(Hc)),Hc}var Gc={},Qg;function ME(){if(Qg)return Gc;Qg=1;var e=wa(),t=Object.prototype.hasOwnProperty,n=typeof Map<"u";function r(){this._array=[],this._set=n?new Map:Object.create(null)}return r.fromArray=function(o,s){for(var a=new r,l=0,u=o.length;l<u;l++)a.add(o[l],s);return a},r.prototype.size=function(){return n?this._set.size:Object.getOwnPropertyNames(this._set).length},r.prototype.add=function(o,s){var a=n?o:e.toSetString(o),l=n?this.has(o):t.call(this._set,a),u=this._array.length;(!l||s)&&this._array.push(o),l||(n?this._set.set(o,u):this._set[a]=u)},r.prototype.has=function(o){if(n)return this._set.has(o);var s=e.toSetString(o);return t.call(this._set,s)},r.prototype.indexOf=function(o){if(n){var s=this._set.get(o);if(s>=0)return s}else{var a=e.toSetString(o);if(t.call(this._set,a))return this._set[a]}throw new Error('"'+o+'" is not in the set.')},r.prototype.at=function(o){if(o>=0&&o<this._array.length)return this._array[o];throw new Error("No element indexed by "+o)},r.prototype.toArray=function(){return this._array.slice()},Gc.ArraySet=r,Gc}var Zc={},Xg;function m6(){if(Xg)return Zc;Xg=1;var e=wa();function t(r,i){var o=r.generatedLine,s=i.generatedLine,a=r.generatedColumn,l=i.generatedColumn;return s>o||s==o&&l>=a||e.compareByGeneratedPositionsInflated(r,i)<=0}function n(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}return n.prototype.unsortedForEach=function(i,o){this._array.forEach(i,o)},n.prototype.add=function(i){t(this._last,i)?(this._last=i,this._array.push(i)):(this._sorted=!1,this._array.push(i))},n.prototype.toArray=function(){return this._sorted||(this._array.sort(e.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},Zc.MappingList=n,Zc}var Yg;function OE(){if(Yg)return qc;Yg=1;var e=TE(),t=wa(),n=ME().ArraySet,r=m6().MappingList;function i(o){o||(o={}),this._file=t.getArg(o,"file",null),this._sourceRoot=t.getArg(o,"sourceRoot",null),this._skipValidation=t.getArg(o,"skipValidation",!1),this._sources=new n,this._names=new n,this._mappings=new r,this._sourcesContents=null}return i.prototype._version=3,i.fromSourceMap=function(s){var a=s.sourceRoot,l=new i({file:s.file,sourceRoot:a});return s.eachMapping(function(u){var c={generated:{line:u.generatedLine,column:u.generatedColumn}};u.source!=null&&(c.source=u.source,a!=null&&(c.source=t.relative(a,c.source)),c.original={line:u.originalLine,column:u.originalColumn},u.name!=null&&(c.name=u.name)),l.addMapping(c)}),s.sources.forEach(function(u){var c=u;a!==null&&(c=t.relative(a,u)),l._sources.has(c)||l._sources.add(c);var m=s.sourceContentFor(u);m!=null&&l.setSourceContent(u,m)}),l},i.prototype.addMapping=function(s){var a=t.getArg(s,"generated"),l=t.getArg(s,"original",null),u=t.getArg(s,"source",null),c=t.getArg(s,"name",null);this._skipValidation||this._validateMapping(a,l,u,c),u!=null&&(u=String(u),this._sources.has(u)||this._sources.add(u)),c!=null&&(c=String(c),this._names.has(c)||this._names.add(c)),this._mappings.add({generatedLine:a.line,generatedColumn:a.column,originalLine:l!=null&&l.line,originalColumn:l!=null&&l.column,source:u,name:c})},i.prototype.setSourceContent=function(s,a){var l=s;this._sourceRoot!=null&&(l=t.relative(this._sourceRoot,l)),a!=null?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[t.toSetString(l)]=a):this._sourcesContents&&(delete this._sourcesContents[t.toSetString(l)],Object.keys(this._sourcesContents).length===0&&(this._sourcesContents=null))},i.prototype.applySourceMap=function(s,a,l){var u=a;if(a==null){if(s.file==null)throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);u=s.file}var c=this._sourceRoot;c!=null&&(u=t.relative(c,u));var m=new n,d=new n;this._mappings.unsortedForEach(function(p){if(p.source===u&&p.originalLine!=null){var f=s.originalPositionFor({line:p.originalLine,column:p.originalColumn});f.source!=null&&(p.source=f.source,l!=null&&(p.source=t.join(l,p.source)),c!=null&&(p.source=t.relative(c,p.source)),p.originalLine=f.line,p.originalColumn=f.column,f.name!=null&&(p.name=f.name))}var h=p.source;h!=null&&!m.has(h)&&m.add(h);var y=p.name;y!=null&&!d.has(y)&&d.add(y)},this),this._sources=m,this._names=d,s.sources.forEach(function(p){var f=s.sourceContentFor(p);f!=null&&(l!=null&&(p=t.join(l,p)),c!=null&&(p=t.relative(c,p)),this.setSourceContent(p,f))},this)},i.prototype._validateMapping=function(s,a,l,u){if(a&&typeof a.line!="number"&&typeof a.column!="number")throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if(!(s&&"line"in s&&"column"in s&&s.line>0&&s.column>=0&&!a&&!l&&!u)){if(s&&"line"in s&&"column"in s&&a&&"line"in a&&"column"in a&&s.line>0&&s.column>=0&&a.line>0&&a.column>=0&&l)return;throw new Error("Invalid mapping: "+JSON.stringify({generated:s,source:l,original:a,name:u}))}},i.prototype._serializeMappings=function(){for(var s=0,a=1,l=0,u=0,c=0,m=0,d="",p,f,h,y,v=this._mappings.toArray(),g=0,x=v.length;g<x;g++){if(f=v[g],p="",f.generatedLine!==a)for(s=0;f.generatedLine!==a;)p+=";",a++;else if(g>0){if(!t.compareByGeneratedPositionsInflated(f,v[g-1]))continue;p+=","}p+=e.encode(f.generatedColumn-s),s=f.generatedColumn,f.source!=null&&(y=this._sources.indexOf(f.source),p+=e.encode(y-m),m=y,p+=e.encode(f.originalLine-1-u),u=f.originalLine-1,p+=e.encode(f.originalColumn-l),l=f.originalColumn,f.name!=null&&(h=this._names.indexOf(f.name),p+=e.encode(h-c),c=h)),d+=p}return d},i.prototype._generateSourcesContent=function(s,a){return s.map(function(l){if(!this._sourcesContents)return null;a!=null&&(l=t.relative(a,l));var u=t.toSetString(l);return Object.prototype.hasOwnProperty.call(this._sourcesContents,u)?this._sourcesContents[u]:null},this)},i.prototype.toJSON=function(){var s={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return this._file!=null&&(s.file=this._file),this._sourceRoot!=null&&(s.sourceRoot=this._sourceRoot),this._sourcesContents&&(s.sourcesContent=this._generateSourcesContent(s.sources,s.sourceRoot)),s},i.prototype.toString=function(){return JSON.stringify(this.toJSON())},qc.SourceMapGenerator=i,qc}var rs={},Kc={},Jg;function h6(){return Jg||(Jg=1,function(e){e.GREATEST_LOWER_BOUND=1,e.LEAST_UPPER_BOUND=2;function t(n,r,i,o,s,a){var l=Math.floor((r-n)/2)+n,u=s(i,o[l],!0);return u===0?l:u>0?r-l>1?t(l,r,i,o,s,a):a==e.LEAST_UPPER_BOUND?r<o.length?r:-1:l:l-n>1?t(n,l,i,o,s,a):a==e.LEAST_UPPER_BOUND?l:n<0?-1:n}e.search=function(r,i,o,s){if(i.length===0)return-1;var a=t(-1,i.length,r,i,o,s||e.GREATEST_LOWER_BOUND);if(a<0)return-1;for(;a-1>=0&&o(i[a],i[a-1],!0)===0;)--a;return a}}(Kc)),Kc}var Qc={},ev;function g6(){if(ev)return Qc;ev=1;function e(r,i,o){var s=r[i];r[i]=r[o],r[o]=s}function t(r,i){return Math.round(r+Math.random()*(i-r))}function n(r,i,o,s){if(o<s){var a=t(o,s),l=o-1;e(r,a,s);for(var u=r[s],c=o;c<s;c++)i(r[c],u)<=0&&(l+=1,e(r,l,c));e(r,l+1,c);var m=l+1;n(r,i,o,m-1),n(r,i,m+1,s)}}return Qc.quickSort=function(r,i){n(r,i,0,r.length-1)},Qc}var tv;function v6(){if(tv)return rs;tv=1;var e=wa(),t=h6(),n=ME().ArraySet,r=TE(),i=g6().quickSort;function o(u,c){var m=u;return typeof u=="string"&&(m=e.parseSourceMapInput(u)),m.sections!=null?new l(m,c):new s(m,c)}o.fromSourceMap=function(u,c){return s.fromSourceMap(u,c)},o.prototype._version=3,o.prototype.__generatedMappings=null,Object.defineProperty(o.prototype,"_generatedMappings",{configurable:!0,enumerable:!0,get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),o.prototype.__originalMappings=null,Object.defineProperty(o.prototype,"_originalMappings",{configurable:!0,enumerable:!0,get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),o.prototype._charIsMappingSeparator=function(c,m){var d=c.charAt(m);return d===";"||d===","},o.prototype._parseMappings=function(c,m){throw new Error("Subclasses must implement _parseMappings")},o.GENERATED_ORDER=1,o.ORIGINAL_ORDER=2,o.GREATEST_LOWER_BOUND=1,o.LEAST_UPPER_BOUND=2,o.prototype.eachMapping=function(c,m,d){var p=m||null,f=d||o.GENERATED_ORDER,h;switch(f){case o.GENERATED_ORDER:h=this._generatedMappings;break;case o.ORIGINAL_ORDER:h=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var y=this.sourceRoot;h.map(function(v){var g=v.source===null?null:this._sources.at(v.source);return g=e.computeSourceURL(y,g,this._sourceMapURL),{source:g,generatedLine:v.generatedLine,generatedColumn:v.generatedColumn,originalLine:v.originalLine,originalColumn:v.originalColumn,name:v.name===null?null:this._names.at(v.name)}},this).forEach(c,p)},o.prototype.allGeneratedPositionsFor=function(c){var m=e.getArg(c,"line"),d={source:e.getArg(c,"source"),originalLine:m,originalColumn:e.getArg(c,"column",0)};if(d.source=this._findSourceIndex(d.source),d.source<0)return[];var p=[],f=this._findMapping(d,this._originalMappings,"originalLine","originalColumn",e.compareByOriginalPositions,t.LEAST_UPPER_BOUND);if(f>=0){var h=this._originalMappings[f];if(c.column===void 0)for(var y=h.originalLine;h&&h.originalLine===y;)p.push({line:e.getArg(h,"generatedLine",null),column:e.getArg(h,"generatedColumn",null),lastColumn:e.getArg(h,"lastGeneratedColumn",null)}),h=this._originalMappings[++f];else for(var v=h.originalColumn;h&&h.originalLine===m&&h.originalColumn==v;)p.push({line:e.getArg(h,"generatedLine",null),column:e.getArg(h,"generatedColumn",null),lastColumn:e.getArg(h,"lastGeneratedColumn",null)}),h=this._originalMappings[++f]}return p},rs.SourceMapConsumer=o;function s(u,c){var m=u;typeof u=="string"&&(m=e.parseSourceMapInput(u));var d=e.getArg(m,"version"),p=e.getArg(m,"sources"),f=e.getArg(m,"names",[]),h=e.getArg(m,"sourceRoot",null),y=e.getArg(m,"sourcesContent",null),v=e.getArg(m,"mappings"),g=e.getArg(m,"file",null);if(d!=this._version)throw new Error("Unsupported version: "+d);h&&(h=e.normalize(h)),p=p.map(String).map(e.normalize).map(function(x){return h&&e.isAbsolute(h)&&e.isAbsolute(x)?e.relative(h,x):x}),this._names=n.fromArray(f.map(String),!0),this._sources=n.fromArray(p,!0),this._absoluteSources=this._sources.toArray().map(function(x){return e.computeSourceURL(h,x,c)}),this.sourceRoot=h,this.sourcesContent=y,this._mappings=v,this._sourceMapURL=c,this.file=g}s.prototype=Object.create(o.prototype),s.prototype.consumer=o,s.prototype._findSourceIndex=function(u){var c=u;if(this.sourceRoot!=null&&(c=e.relative(this.sourceRoot,c)),this._sources.has(c))return this._sources.indexOf(c);var m;for(m=0;m<this._absoluteSources.length;++m)if(this._absoluteSources[m]==u)return m;return-1},s.fromSourceMap=function(c,m){var d=Object.create(s.prototype),p=d._names=n.fromArray(c._names.toArray(),!0),f=d._sources=n.fromArray(c._sources.toArray(),!0);d.sourceRoot=c._sourceRoot,d.sourcesContent=c._generateSourcesContent(d._sources.toArray(),d.sourceRoot),d.file=c._file,d._sourceMapURL=m,d._absoluteSources=d._sources.toArray().map(function(F){return e.computeSourceURL(d.sourceRoot,F,m)});for(var h=c._mappings.toArray().slice(),y=d.__generatedMappings=[],v=d.__originalMappings=[],g=0,x=h.length;g<x;g++){var E=h[g],_=new a;_.generatedLine=E.generatedLine,_.generatedColumn=E.generatedColumn,E.source&&(_.source=f.indexOf(E.source),_.originalLine=E.originalLine,_.originalColumn=E.originalColumn,E.name&&(_.name=p.indexOf(E.name)),v.push(_)),y.push(_)}return i(d.__originalMappings,e.compareByOriginalPositions),d},s.prototype._version=3,Object.defineProperty(s.prototype,"sources",{get:function(){return this._absoluteSources.slice()}});function a(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}s.prototype._parseMappings=function(c,m){for(var d=1,p=0,f=0,h=0,y=0,v=0,g=c.length,x=0,E={},_={},F=[],D=[],P,N,M,G,I;x<g;)if(c.charAt(x)===";")d++,x++,p=0;else if(c.charAt(x)===",")x++;else{for(P=new a,P.generatedLine=d,G=x;G<g&&!this._charIsMappingSeparator(c,G);G++);if(N=c.slice(x,G),M=E[N],M)x+=N.length;else{for(M=[];x<G;)r.decode(c,x,_),I=_.value,x=_.rest,M.push(I);if(M.length===2)throw new Error("Found a source, but no line and column");if(M.length===3)throw new Error("Found a source and line, but no column");E[N]=M}P.generatedColumn=p+M[0],p=P.generatedColumn,M.length>1&&(P.source=y+M[1],y+=M[1],P.originalLine=f+M[2],f=P.originalLine,P.originalLine+=1,P.originalColumn=h+M[3],h=P.originalColumn,M.length>4&&(P.name=v+M[4],v+=M[4])),D.push(P),typeof P.originalLine=="number"&&F.push(P)}i(D,e.compareByGeneratedPositionsDeflated),this.__generatedMappings=D,i(F,e.compareByOriginalPositions),this.__originalMappings=F},s.prototype._findMapping=function(c,m,d,p,f,h){if(c[d]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+c[d]);if(c[p]<0)throw new TypeError("Column must be greater than or equal to 0, got "+c[p]);return t.search(c,m,f,h)},s.prototype.computeColumnSpans=function(){for(var c=0;c<this._generatedMappings.length;++c){var m=this._generatedMappings[c];if(c+1<this._generatedMappings.length){var d=this._generatedMappings[c+1];if(m.generatedLine===d.generatedLine){m.lastGeneratedColumn=d.generatedColumn-1;continue}}m.lastGeneratedColumn=1/0}},s.prototype.originalPositionFor=function(c){var m={generatedLine:e.getArg(c,"line"),generatedColumn:e.getArg(c,"column")},d=this._findMapping(m,this._generatedMappings,"generatedLine","generatedColumn",e.compareByGeneratedPositionsDeflated,e.getArg(c,"bias",o.GREATEST_LOWER_BOUND));if(d>=0){var p=this._generatedMappings[d];if(p.generatedLine===m.generatedLine){var f=e.getArg(p,"source",null);f!==null&&(f=this._sources.at(f),f=e.computeSourceURL(this.sourceRoot,f,this._sourceMapURL));var h=e.getArg(p,"name",null);return h!==null&&(h=this._names.at(h)),{source:f,line:e.getArg(p,"originalLine",null),column:e.getArg(p,"originalColumn",null),name:h}}}return{source:null,line:null,column:null,name:null}},s.prototype.hasContentsOfAllSources=function(){return this.sourcesContent?this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some(function(c){return c==null}):!1},s.prototype.sourceContentFor=function(c,m){if(!this.sourcesContent)return null;var d=this._findSourceIndex(c);if(d>=0)return this.sourcesContent[d];var p=c;this.sourceRoot!=null&&(p=e.relative(this.sourceRoot,p));var f;if(this.sourceRoot!=null&&(f=e.urlParse(this.sourceRoot))){var h=p.replace(/^file:\/\//,"");if(f.scheme=="file"&&this._sources.has(h))return this.sourcesContent[this._sources.indexOf(h)];if((!f.path||f.path=="/")&&this._sources.has("/"+p))return this.sourcesContent[this._sources.indexOf("/"+p)]}if(m)return null;throw new Error('"'+p+'" is not in the SourceMap.')},s.prototype.generatedPositionFor=function(c){var m=e.getArg(c,"source");if(m=this._findSourceIndex(m),m<0)return{line:null,column:null,lastColumn:null};var d={source:m,originalLine:e.getArg(c,"line"),originalColumn:e.getArg(c,"column")},p=this._findMapping(d,this._originalMappings,"originalLine","originalColumn",e.compareByOriginalPositions,e.getArg(c,"bias",o.GREATEST_LOWER_BOUND));if(p>=0){var f=this._originalMappings[p];if(f.source===d.source)return{line:e.getArg(f,"generatedLine",null),column:e.getArg(f,"generatedColumn",null),lastColumn:e.getArg(f,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},rs.BasicSourceMapConsumer=s;function l(u,c){var m=u;typeof u=="string"&&(m=e.parseSourceMapInput(u));var d=e.getArg(m,"version"),p=e.getArg(m,"sections");if(d!=this._version)throw new Error("Unsupported version: "+d);this._sources=new n,this._names=new n;var f={line:-1,column:0};this._sections=p.map(function(h){if(h.url)throw new Error("Support for url field in sections not implemented.");var y=e.getArg(h,"offset"),v=e.getArg(y,"line"),g=e.getArg(y,"column");if(v<f.line||v===f.line&&g<f.column)throw new Error("Section offsets must be ordered and non-overlapping.");return f=y,{generatedOffset:{generatedLine:v+1,generatedColumn:g+1},consumer:new o(e.getArg(h,"map"),c)}})}return l.prototype=Object.create(o.prototype),l.prototype.constructor=o,l.prototype._version=3,Object.defineProperty(l.prototype,"sources",{get:function(){for(var u=[],c=0;c<this._sections.length;c++)for(var m=0;m<this._sections[c].consumer.sources.length;m++)u.push(this._sections[c].consumer.sources[m]);return u}}),l.prototype.originalPositionFor=function(c){var m={generatedLine:e.getArg(c,"line"),generatedColumn:e.getArg(c,"column")},d=t.search(m,this._sections,function(f,h){var y=f.generatedLine-h.generatedOffset.generatedLine;return y||f.generatedColumn-h.generatedOffset.generatedColumn}),p=this._sections[d];return p?p.consumer.originalPositionFor({line:m.generatedLine-(p.generatedOffset.generatedLine-1),column:m.generatedColumn-(p.generatedOffset.generatedLine===m.generatedLine?p.generatedOffset.generatedColumn-1:0),bias:c.bias}):{source:null,line:null,column:null,name:null}},l.prototype.hasContentsOfAllSources=function(){return this._sections.every(function(c){return c.consumer.hasContentsOfAllSources()})},l.prototype.sourceContentFor=function(c,m){for(var d=0;d<this._sections.length;d++){var p=this._sections[d],f=p.consumer.sourceContentFor(c,!0);if(f)return f}if(m)return null;throw new Error('"'+c+'" is not in the SourceMap.')},l.prototype.generatedPositionFor=function(c){for(var m=0;m<this._sections.length;m++){var d=this._sections[m];if(d.consumer._findSourceIndex(e.getArg(c,"source"))!==-1){var p=d.consumer.generatedPositionFor(c);if(p){var f={line:p.line+(d.generatedOffset.generatedLine-1),column:p.column+(d.generatedOffset.generatedLine===p.line?d.generatedOffset.generatedColumn-1:0)};return f}}}return{line:null,column:null}},l.prototype._parseMappings=function(c,m){this.__generatedMappings=[],this.__originalMappings=[];for(var d=0;d<this._sections.length;d++)for(var p=this._sections[d],f=p.consumer._generatedMappings,h=0;h<f.length;h++){var y=f[h],v=p.consumer._sources.at(y.source);v=e.computeSourceURL(p.consumer.sourceRoot,v,this._sourceMapURL),this._sources.add(v),v=this._sources.indexOf(v);var g=null;y.name&&(g=p.consumer._names.at(y.name),this._names.add(g),g=this._names.indexOf(g));var x={source:v,generatedLine:y.generatedLine+(p.generatedOffset.generatedLine-1),generatedColumn:y.generatedColumn+(p.generatedOffset.generatedLine===y.generatedLine?p.generatedOffset.generatedColumn-1:0),originalLine:y.originalLine,originalColumn:y.originalColumn,name:g};this.__generatedMappings.push(x),typeof x.originalLine=="number"&&this.__originalMappings.push(x)}i(this.__generatedMappings,e.compareByGeneratedPositionsDeflated),i(this.__originalMappings,e.compareByOriginalPositions)},rs.IndexedSourceMapConsumer=l,rs}var Xc={},nv;function y6(){if(nv)return Xc;nv=1;var e=OE().SourceMapGenerator,t=wa(),n=/(\r?\n)/,r=10,i="$$$isSourceNode$$$";function o(s,a,l,u,c){this.children=[],this.sourceContents={},this.line=s??null,this.column=a??null,this.source=l??null,this.name=c??null,this[i]=!0,u!=null&&this.add(u)}return o.fromStringWithSourceMap=function(a,l,u){var c=new o,m=a.split(n),d=0,p=function(){var g=E(),x=E()||"";return g+x;function E(){return d<m.length?m[d++]:void 0}},f=1,h=0,y=null;return l.eachMapping(function(g){if(y!==null)if(f<g.generatedLine)v(y,p()),f++,h=0;else{var x=m[d]||"",E=x.substr(0,g.generatedColumn-h);m[d]=x.substr(g.generatedColumn-h),h=g.generatedColumn,v(y,E),y=g;return}for(;f<g.generatedLine;)c.add(p()),f++;if(h<g.generatedColumn){var x=m[d]||"";c.add(x.substr(0,g.generatedColumn)),m[d]=x.substr(g.generatedColumn),h=g.generatedColumn}y=g},this),d<m.length&&(y&&v(y,p()),c.add(m.splice(d).join(""))),l.sources.forEach(function(g){var x=l.sourceContentFor(g);x!=null&&(u!=null&&(g=t.join(u,g)),c.setSourceContent(g,x))}),c;function v(g,x){if(g===null||g.source===void 0)c.add(x);else{var E=u?t.join(u,g.source):g.source;c.add(new o(g.originalLine,g.originalColumn,E,x,g.name))}}},o.prototype.add=function(a){if(Array.isArray(a))a.forEach(function(l){this.add(l)},this);else if(a[i]||typeof a=="string")a&&this.children.push(a);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+a);return this},o.prototype.prepend=function(a){if(Array.isArray(a))for(var l=a.length-1;l>=0;l--)this.prepend(a[l]);else if(a[i]||typeof a=="string")this.children.unshift(a);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+a);return this},o.prototype.walk=function(a){for(var l,u=0,c=this.children.length;u<c;u++)l=this.children[u],l[i]?l.walk(a):l!==""&&a(l,{source:this.source,line:this.line,column:this.column,name:this.name})},o.prototype.join=function(a){var l,u,c=this.children.length;if(c>0){for(l=[],u=0;u<c-1;u++)l.push(this.children[u]),l.push(a);l.push(this.children[u]),this.children=l}return this},o.prototype.replaceRight=function(a,l){var u=this.children[this.children.length-1];return u[i]?u.replaceRight(a,l):typeof u=="string"?this.children[this.children.length-1]=u.replace(a,l):this.children.push("".replace(a,l)),this},o.prototype.setSourceContent=function(a,l){this.sourceContents[t.toSetString(a)]=l},o.prototype.walkSourceContents=function(a){for(var l=0,u=this.children.length;l<u;l++)this.children[l][i]&&this.children[l].walkSourceContents(a);for(var c=Object.keys(this.sourceContents),l=0,u=c.length;l<u;l++)a(t.fromSetString(c[l]),this.sourceContents[c[l]])},o.prototype.toString=function(){var a="";return this.walk(function(l){a+=l}),a},o.prototype.toStringWithSourceMap=function(a){var l={code:"",line:1,column:0},u=new e(a),c=!1,m=null,d=null,p=null,f=null;return this.walk(function(h,y){l.code+=h,y.source!==null&&y.line!==null&&y.column!==null?((m!==y.source||d!==y.line||p!==y.column||f!==y.name)&&u.addMapping({source:y.source,original:{line:y.line,column:y.column},generated:{line:l.line,column:l.column},name:y.name}),m=y.source,d=y.line,p=y.column,f=y.name,c=!0):c&&(u.addMapping({generated:{line:l.line,column:l.column}}),m=null,c=!1);for(var v=0,g=h.length;v<g;v++)h.charCodeAt(v)===r?(l.line++,l.column=0,v+1===g?(m=null,c=!1):c&&u.addMapping({source:y.source,original:{line:y.line,column:y.column},generated:{line:l.line,column:l.column},name:y.name})):l.column++}),this.walkSourceContents(function(h,y){u.setSourceContent(h,y)}),{code:l.code,map:u}},Xc.SourceNode=o,Xc}var rv;function x6(){return rv||(rv=1,ns.SourceMapGenerator=OE().SourceMapGenerator,ns.SourceMapConsumer=v6().SourceMapConsumer,ns.SourceNode=y6().SourceNode),ns}(function(e,t){t.__esModule=!0;var n=je,r=void 0;try{var i=x6();r=i.SourceNode}catch{}r||(r=function(a,l,u,c){this.src="",c&&this.add(c)},r.prototype={add:function(l){n.isArray(l)&&(l=l.join("")),this.src+=l},prepend:function(l){n.isArray(l)&&(l=l.join("")),this.src=l+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}});function o(a,l,u){if(n.isArray(a)){for(var c=[],m=0,d=a.length;m<d;m++)c.push(l.wrap(a[m],u));return c}else if(typeof a=="boolean"||typeof a=="number")return a+"";return a}function s(a){this.srcFile=a,this.source=[]}s.prototype={isEmpty:function(){return!this.source.length},prepend:function(l,u){this.source.unshift(this.wrap(l,u))},push:function(l,u){this.source.push(this.wrap(l,u))},merge:function(){var l=this.empty();return this.each(function(u){l.add(["  ",u,`
`])}),l},each:function(l){for(var u=0,c=this.source.length;u<c;u++)l(this.source[u])},empty:function(){var l=this.currentLocation||{start:{}};return new r(l.start.line,l.start.column,this.srcFile)},wrap:function(l){var u=arguments.length<=1||arguments[1]===void 0?this.currentLocation||{start:{}}:arguments[1];return l instanceof r?l:(l=o(l,this,u),new r(u.start.line,u.start.column,this.srcFile,l))},functionCall:function(l,u,c){return c=this.generateList(c),this.wrap([l,u?"."+u+"(":"(",c,")"])},quotedString:function(l){return'"'+(l+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(l){var u=this,c=[];Object.keys(l).forEach(function(d){var p=o(l[d],u);p!=="undefined"&&c.push([u.quotedString(d),":",p])});var m=this.generateList(c);return m.prepend("{"),m.add("}"),m},generateList:function(l){for(var u=this.empty(),c=0,m=l.length;c<m;c++)c&&u.add(","),u.add(o(l[c],this));return u},generateArray:function(l){var u=this.generateList(l);return u.prepend("["),u.add("]"),u}},t.default=s,e.exports=t.default})(Vp,Vp.exports);var E6=Vp.exports;(function(e,t){t.__esModule=!0;function n(d){return d&&d.__esModule?d:{default:d}}var r=en,i=En,o=n(i),s=je,a=E6,l=n(a);function u(d){this.value=d}function c(){}c.prototype={nameLookup:function(p,f){return this.internalNameLookup(p,f)},depthedLookup:function(p){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(p),")"]},compilerInfo:function(){var p=r.COMPILER_REVISION,f=r.REVISION_CHANGES[p];return[p,f]},appendToBuffer:function(p,f,h){return s.isArray(p)||(p=[p]),p=this.source.wrap(p,f),this.environment.isSimple?["return ",p,";"]:h?["buffer += ",p,";"]:(p.appendToBuffer=!0,p)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(p,f){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",p,",",JSON.stringify(f),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(p,f,h,y){this.environment=p,this.options=f,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!y,this.name=this.environment.name,this.isChild=!!h,this.context=h||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(p,f),this.useDepths=this.useDepths||p.useDepths||p.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||p.useBlockParams;var v=p.opcodes,g=void 0,x=void 0,E=void 0,_=void 0;for(E=0,_=v.length;E<_;E++)g=v[E],this.source.currentLocation=g.loc,x=x||g.loc,this[g.opcode].apply(this,g.args);if(this.source.currentLocation=x,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new o.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),`;
`]),this.decorators.push("return fn;"),y?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`),this.decorators.push(`}
`),this.decorators=this.decorators.merge()));var F=this.createFunctionContext(y);if(this.isChild)return F;var D={compiler:this.compilerInfo(),main:F};this.decorators&&(D.main_d=this.decorators,D.useDecorators=!0);var P=this.context,N=P.programs,M=P.decorators;for(E=0,_=N.length;E<_;E++)N[E]&&(D[E]=N[E],M[E]&&(D[E+"_d"]=M[E],D.useDecorators=!0));return this.environment.usePartial&&(D.usePartial=!0),this.options.data&&(D.useData=!0),this.useDepths&&(D.useDepths=!0),this.useBlockParams&&(D.useBlockParams=!0),this.options.compat&&(D.compat=!0),y?D.compilerOptions=this.options:(D.compiler=JSON.stringify(D.compiler),this.source.currentLocation={start:{line:1,column:0}},D=this.objectLiteral(D),f.srcName?(D=D.toStringWithSourceMap({file:f.destName}),D.map=D.map&&D.map.toString()):D=D.toString()),D},preamble:function(){this.lastContext=0,this.source=new l.default(this.options.srcName),this.decorators=new l.default(this.options.srcName)},createFunctionContext:function(p){var f=this,h="",y=this.stackVars.concat(this.registers.list);y.length>0&&(h+=", "+y.join(", "));var v=0;Object.keys(this.aliases).forEach(function(E){var _=f.aliases[E];_.children&&_.referenceCount>1&&(h+=", alias"+ ++v+"="+E,_.children[0]="alias"+v)}),this.lookupPropertyFunctionIsUsed&&(h+=", "+this.lookupPropertyFunctionVarDeclaration());var g=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&g.push("blockParams"),this.useDepths&&g.push("depths");var x=this.mergeSource(h);return p?(g.push(x),Function.apply(this,g)):this.source.wrap(["function(",g.join(","),`) {
  `,x,"}"])},mergeSource:function(p){var f=this.environment.isSimple,h=!this.forceBuffer,y=void 0,v=void 0,g=void 0,x=void 0;return this.source.each(function(E){E.appendToBuffer?(g?E.prepend("  + "):g=E,x=E):(g&&(v?g.prepend("buffer += "):y=!0,x.add(";"),g=x=void 0),v=!0,f||(h=!1))}),h?g?(g.prepend("return "),x.add(";")):v||this.source.push('return "";'):(p+=", buffer = "+(y?"":this.initializeBuffer()),g?(g.prepend("return buffer + "),x.add(";")):this.source.push("return buffer;")),p&&this.source.prepend("var "+p.substring(2)+(y?"":`;
`)),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return`
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim()},blockValue:function(p){var f=this.aliasable("container.hooks.blockHelperMissing"),h=[this.contextName(0)];this.setupHelperArgs(p,0,h);var y=this.popStack();h.splice(1,0,y),this.push(this.source.functionCall(f,"call",h))},ambiguousBlockValue:function(){var p=this.aliasable("container.hooks.blockHelperMissing"),f=[this.contextName(0)];this.setupHelperArgs("",0,f,!0),this.flushInline();var h=this.topStack();f.splice(1,0,h),this.pushSource(["if (!",this.lastHelper,") { ",h," = ",this.source.functionCall(p,"call",f),"}"])},appendContent:function(p){this.pendingContent?p=this.pendingContent+p:this.pendingLocation=this.source.currentLocation,this.pendingContent=p},append:function(){if(this.isInline())this.replaceStack(function(f){return[" != null ? ",f,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var p=this.popStack();this.pushSource(["if (",p," != null) { ",this.appendToBuffer(p,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(p){this.lastContext=p},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(p,f,h,y){var v=0;!y&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(p[v++])):this.pushContext(),this.resolvePath("context",p,v,f,h)},lookupBlockParam:function(p,f){this.useBlockParams=!0,this.push(["blockParams[",p[0],"][",p[1],"]"]),this.resolvePath("context",f,1)},lookupData:function(p,f,h){p?this.pushStackLiteral("container.data(data, "+p+")"):this.pushStackLiteral("data"),this.resolvePath("data",f,0,!0,h)},resolvePath:function(p,f,h,y,v){var g=this;if(this.options.strict||this.options.assumeObjects){this.push(m(this.options.strict&&v,this,f,h,p));return}for(var x=f.length;h<x;h++)this.replaceStack(function(E){var _=g.nameLookup(E,f[h],p);return y?[" && ",_]:[" != null ? ",_," : ",E]})},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(p,f){this.pushContext(),this.pushString(f),f!=="SubExpression"&&(typeof p=="string"?this.pushString(p):this.pushStackLiteral(p))},emptyHash:function(p){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(p?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var p=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(p.ids)),this.stringParams&&(this.push(this.objectLiteral(p.contexts)),this.push(this.objectLiteral(p.types))),this.push(this.objectLiteral(p.values))},pushString:function(p){this.pushStackLiteral(this.quotedString(p))},pushLiteral:function(p){this.pushStackLiteral(p)},pushProgram:function(p){p!=null?this.pushStackLiteral(this.programExpression(p)):this.pushStackLiteral(null)},registerDecorator:function(p,f){var h=this.nameLookup("decorators",f,"decorator"),y=this.setupHelperArgs(f,p);this.decorators.push(["fn = ",this.decorators.functionCall(h,"",["fn","props","container",y])," || fn;"])},invokeHelper:function(p,f,h){var y=this.popStack(),v=this.setupHelper(p,f),g=[];h&&g.push(v.name),g.push(y),this.options.strict||g.push(this.aliasable("container.hooks.helperMissing"));var x=["(",this.itemsSeparatedBy(g,"||"),")"],E=this.source.functionCall(x,"call",v.callParams);this.push(E)},itemsSeparatedBy:function(p,f){var h=[];h.push(p[0]);for(var y=1;y<p.length;y++)h.push(f,p[y]);return h},invokeKnownHelper:function(p,f){var h=this.setupHelper(p,f);this.push(this.source.functionCall(h.name,"call",h.callParams))},invokeAmbiguous:function(p,f){this.useRegister("helper");var h=this.popStack();this.emptyHash();var y=this.setupHelper(0,p,f),v=this.lastHelper=this.nameLookup("helpers",p,"helper"),g=["(","(helper = ",v," || ",h,")"];this.options.strict||(g[0]="(helper = ",g.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",g,y.paramsInit?["),(",y.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",y.callParams)," : helper))"])},invokePartial:function(p,f,h){var y=[],v=this.setupParams(f,1,y);p&&(f=this.popStack(),delete v.name),h&&(v.indent=JSON.stringify(h)),v.helpers="helpers",v.partials="partials",v.decorators="container.decorators",p?y.unshift(f):y.unshift(this.nameLookup("partials",f,"partial")),this.options.compat&&(v.depths="depths"),v=this.objectLiteral(v),y.push(v),this.push(this.source.functionCall("container.invokePartial","",y))},assignToHash:function(p){var f=this.popStack(),h=void 0,y=void 0,v=void 0;this.trackIds&&(v=this.popStack()),this.stringParams&&(y=this.popStack(),h=this.popStack());var g=this.hash;h&&(g.contexts[p]=h),y&&(g.types[p]=y),v&&(g.ids[p]=v),g.values[p]=f},pushId:function(p,f,h){p==="BlockParam"?this.pushStackLiteral("blockParams["+f[0]+"].path["+f[1]+"]"+(h?" + "+JSON.stringify("."+h):"")):p==="PathExpression"?this.pushString(f):p==="SubExpression"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:c,compileChildren:function(p,f){for(var h=p.children,y=void 0,v=void 0,g=0,x=h.length;g<x;g++){y=h[g],v=new this.compiler;var E=this.matchExistingProgram(y);if(E==null){this.context.programs.push("");var _=this.context.programs.length;y.index=_,y.name="program"+_,this.context.programs[_]=v.compile(y,f,this.context,!this.precompile),this.context.decorators[_]=v.decorators,this.context.environments[_]=y,this.useDepths=this.useDepths||v.useDepths,this.useBlockParams=this.useBlockParams||v.useBlockParams,y.useDepths=this.useDepths,y.useBlockParams=this.useBlockParams}else y.index=E.index,y.name="program"+E.index,this.useDepths=this.useDepths||E.useDepths,this.useBlockParams=this.useBlockParams||E.useBlockParams}},matchExistingProgram:function(p){for(var f=0,h=this.context.environments.length;f<h;f++){var y=this.context.environments[f];if(y&&y.equals(p))return y}},programExpression:function(p){var f=this.environment.children[p],h=[f.index,"data",f.blockParams];return(this.useBlockParams||this.useDepths)&&h.push("blockParams"),this.useDepths&&h.push("depths"),"container.program("+h.join(", ")+")"},useRegister:function(p){this.registers[p]||(this.registers[p]=!0,this.registers.list.push(p))},push:function(p){return p instanceof u||(p=this.source.wrap(p)),this.inlineStack.push(p),p},pushStackLiteral:function(p){this.push(new u(p))},pushSource:function(p){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),p&&this.source.push(p)},replaceStack:function(p){var f=["("],h=void 0,y=void 0,v=void 0;if(!this.isInline())throw new o.default("replaceStack on non-inline");var g=this.popStack(!0);if(g instanceof u)h=[g.value],f=["(",h],v=!0;else{y=!0;var x=this.incrStack();f=["((",this.push(x)," = ",g,")"],h=this.topStack()}var E=p.call(this,h);v||this.popStack(),y&&this.stackSlot--,this.push(f.concat(E,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var p=this.inlineStack;this.inlineStack=[];for(var f=0,h=p.length;f<h;f++){var y=p[f];if(y instanceof u)this.compileStack.push(y);else{var v=this.incrStack();this.pushSource([v," = ",y,";"]),this.compileStack.push(v)}}},isInline:function(){return this.inlineStack.length},popStack:function(p){var f=this.isInline(),h=(f?this.inlineStack:this.compileStack).pop();if(!p&&h instanceof u)return h.value;if(!f){if(!this.stackSlot)throw new o.default("Invalid stack pop");this.stackSlot--}return h},topStack:function(){var p=this.isInline()?this.inlineStack:this.compileStack,f=p[p.length-1];return f instanceof u?f.value:f},contextName:function(p){return this.useDepths&&p?"depths["+p+"]":"depth"+p},quotedString:function(p){return this.source.quotedString(p)},objectLiteral:function(p){return this.source.objectLiteral(p)},aliasable:function(p){var f=this.aliases[p];return f?(f.referenceCount++,f):(f=this.aliases[p]=this.source.wrap(p),f.aliasable=!0,f.referenceCount=1,f)},setupHelper:function(p,f,h){var y=[],v=this.setupHelperArgs(f,p,y,h),g=this.nameLookup("helpers",f,"helper"),x=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})");return{params:y,paramsInit:v,name:g,callParams:[x].concat(y)}},setupParams:function(p,f,h){var y={},v=[],g=[],x=[],E=!h,_=void 0;E&&(h=[]),y.name=this.quotedString(p),y.hash=this.popStack(),this.trackIds&&(y.hashIds=this.popStack()),this.stringParams&&(y.hashTypes=this.popStack(),y.hashContexts=this.popStack());var F=this.popStack(),D=this.popStack();(D||F)&&(y.fn=D||"container.noop",y.inverse=F||"container.noop");for(var P=f;P--;)_=this.popStack(),h[P]=_,this.trackIds&&(x[P]=this.popStack()),this.stringParams&&(g[P]=this.popStack(),v[P]=this.popStack());return E&&(y.args=this.source.generateArray(h)),this.trackIds&&(y.ids=this.source.generateArray(x)),this.stringParams&&(y.types=this.source.generateArray(g),y.contexts=this.source.generateArray(v)),this.options.data&&(y.data="data"),this.useBlockParams&&(y.blockParams="blockParams"),y},setupHelperArgs:function(p,f,h,y){var v=this.setupParams(p,f,h);return v.loc=JSON.stringify(this.source.currentLocation),v=this.objectLiteral(v),y?(this.useRegister("options"),h.push("options"),["options=",v]):h?(h.push(v),""):v}},function(){for(var d="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),p=c.RESERVED_WORDS={},f=0,h=d.length;f<h;f++)p[d[f]]=!0}(),c.isValidJavaScriptVariableName=function(d){return!c.RESERVED_WORDS[d]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(d)};function m(d,p,f,h,y){var v=p.popStack(),g=f.length;for(d&&g--;h<g;h++)v=p.nameLookup(v,f[h],y);return d?[p.aliasable("container.strict"),"(",v,", ",p.quotedString(f[h]),", ",JSON.stringify(p.source.currentLocation)," )"]:v}t.default=c,e.exports=t.default})(jp,jp.exports);var _6=jp.exports;(function(e,t){t.__esModule=!0;function n(g){return g&&g.__esModule?g:{default:g}}var r=j8,i=n(r),o=FE,s=n(o),a=Ea,l=_a,u=_6,c=n(u),m=IE,d=n(m),p=kE,f=n(p),h=i.default.create;function y(){var g=h();return g.compile=function(x,E){return l.compile(x,E,g)},g.precompile=function(x,E){return l.precompile(x,E,g)},g.AST=s.default,g.Compiler=l.Compiler,g.JavaScriptCompiler=c.default,g.Parser=a.parser,g.parse=a.parse,g.parseWithoutProcessing=a.parseWithoutProcessing,g}var v=y();v.create=y,f.default(v),v.Visitor=d.default,v.default=v,t.default=v,e.exports=t.default})(vp,vp.exports);var w6=vp.exports;const b6=pu(w6),C6=`# Using the Aletyx Maven Configuration

This zip includes a customized \`settings.xml\` that configures access to the Aletyx Maven repository.

## ⚙️ How to Use

You can either use the file directly in your Maven command, or manually incorporate its content into your existing \`~/.m2/settings.xml\`.

---

### ✅ Option 1: Use \`settings.xml\` Directly in Maven Command

This is the simplest way to use the configuration without changing your local Maven setup:

\`\`\`bash
mvn -s settings.xml clean compile
\`\`\`\`

---

### ✍️ Option 2: Merge into Your Existing \`~/.m2/settings.xml\`

If you already have a \`~/.m2/settings.xml\` file (e.g., with corporate configurations), you can **merge the relevant sections** manually.

#### Add to \`<servers>\` section:

\`\`\`xml
<server>
    <id>maven-aletyx</id>
    <configuration>
        <httpHeaders>
            <property>
                <name>Authorization</name>
                <value>{{mavenAccessToken}}</value>
            </property>
        </httpHeaders>
    </configuration>
</server>
\`\`\`

#### Add to \`<profiles>\` section:

\`\`\`xml
<profile>
    <id>aletyx</id>
    <repositories>
        <repository>
            <id>maven-aletyx</id>
            <url>https://maven.aletyx.services</url>
            <releases><enabled>true</enabled></releases>
            <snapshots><enabled>false</enabled></snapshots>
        </repository>
        <repository>
            <id>central</id>
            <url>https://repo.maven.apache.org/maven2</url>
            <releases><enabled>true</enabled></releases>
            <snapshots><enabled>false</enabled></snapshots>
        </repository>
    </repositories>
    <pluginRepositories>
        <pluginRepository>
            <id>maven-aletyx</id>
            <url>https://maven.aletyx.services</url>
            <releases><enabled>true</enabled></releases>
            <snapshots><enabled>false</enabled></snapshots>
        </pluginRepository>
        <pluginRepository>
            <id>central</id>
            <url>https://repo.maven.apache.org/maven2</url>
            <releases><enabled>true</enabled></releases>
            <snapshots><enabled>false</enabled></snapshots>
        </pluginRepository>
    </pluginRepositories>
</profile>
\`\`\`

#### Add to \`<activeProfiles>\` section:

\`\`\`xml
<activeProfile>aletyx</activeProfile>
\`\`\`

---

### 💡 Notes

* Ensure you preserve the existing XML structure when merging.
* Avoid duplicating IDs that already exist in your configuration.
`,A6=`<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 https://maven.apache.org/xsd/settings-1.0.0.xsd">

    <servers>
        <server>
            <id>maven-aletyx</id>
            <configuration>
                <httpHeaders>
                    <property>
                        <name>Authorization</name>
                        <value>{{mavenAccessToken}}</value>
                    </property>
                </httpHeaders>
            </configuration>
        </server>
    </servers>

    <profiles>
        <profile>
            <id>aletyx</id>

            <repositories>
                <repository>
                    <id>maven-aletyx</id>
                    <url>https://maven.aletyx.services</url>
                    <releases><enabled>true</enabled></releases>
                    <snapshots><enabled>false</enabled></snapshots>
                </repository>

                <repository>
                    <id>central</id>
                    <url>https://repo.maven.apache.org/maven2</url>
                    <releases><enabled>true</enabled></releases>
                    <snapshots><enabled>false</enabled></snapshots>
                </repository>
            </repositories>

            <pluginRepositories>
                <pluginRepository>
                    <id>maven-aletyx</id>
                    <url>https://maven.aletyx.services</url>
                    <releases><enabled>true</enabled></releases>
                    <snapshots><enabled>false</enabled></snapshots>
                </pluginRepository>

                <pluginRepository>
                    <id>central</id>
                    <url>https://repo.maven.apache.org/maven2</url>
                    <releases><enabled>true</enabled></releases>
                    <snapshots><enabled>false</enabled></snapshots>
                </pluginRepository>
            </pluginRepositories>
        </profile>
    </profiles>

    <activeProfiles>
        <activeProfile>aletyx</activeProfile>
    </activeProfiles>
</settings>
`,S6=`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">

  <modelVersion>4.0.0</modelVersion>

  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.4.10</version>
    <relativePath/>
  </parent>
  <groupId>{{group}}</groupId>
  <artifactId>{{artifact}}</artifactId>
  <version>{{version}}</version>
  <name>Intelligent Decision Service</name>

  <properties>
    <maven.compiler.source>17</maven.compiler.source>
    <maven.compiler.target>17</maven.compiler.target>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <kogito.bom.group-id>ai.aletyx</kogito.bom.group-id>
    <kogito.bom.artifact-id>aletyx-automation-bom</kogito.bom.artifact-id>
    <kogito.bom.version>{{targetVersion}}</kogito.bom.version>
    <version.org.kie.kogito>{{targetVersion}}</version.org.kie.kogito>
    <spring-ai.version>1.0.0</spring-ai.version>
    <spring-framework.version>6.2.11</spring-framework.version>
  </properties>

  <dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>\${kogito.bom.group-id}</groupId>
        <artifactId>\${kogito.bom.artifact-id}</artifactId>
        <version>\${kogito.bom.version}</version>
        <type>pom</type>
        <scope>import</scope>
      </dependency>
      <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-framework-bom</artifactId>
        <version>\${spring-framework.version}</version>
        <type>pom</type>
        <scope>import</scope>
      </dependency>
      <dependency>
        <groupId>org.kie.kogito</groupId>
        <artifactId>kogito-spring-boot-bom</artifactId>
        <version>\${kogito.bom.version}</version>
        <type>pom</type>
        <scope>import</scope>
      </dependency>
      <dependency>
        <groupId>org.springframework.ai</groupId>
        <artifactId>spring-ai-bom</artifactId>
        <version>\${spring-ai.version}</version>
        <type>pom</type>
        <scope>import</scope>
      </dependency>
    </dependencies>
  </dependencyManagement>

  <dependencies>
    <dependency>
      <groupId>com.github.victools</groupId>
      <artifactId>jsonschema-generator</artifactId>
      <version>4.37.0</version>
    </dependency>

    <dependency>
      <groupId>org.springframework.ai</groupId>
      <artifactId>spring-ai-starter-mcp-server-webmvc</artifactId>
    </dependency>

    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>

    <dependency>
      <groupId>org.drools</groupId>
      <artifactId>drools-decisions-spring-boot-starter</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-test</artifactId>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>io.rest-assured</groupId>
      <artifactId>rest-assured</artifactId>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.kie.kogito</groupId>
      <artifactId>kogito-scenario-simulation</artifactId>
      <scope>test</scope>
    </dependency>
  </dependencies>

  <build>
    <finalName>\${project.artifactId}</finalName>
    <plugins>
      <plugin>
        <groupId>org.kie.kogito</groupId>
        <artifactId>kogito-maven-plugin</artifactId>
        <version>\${version.org.kie.kogito}</version>
        <executions>
          <execution>
            <phase>compile</phase>
            <goals>
              <goal>generateModel</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
      <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
        <executions>
          <execution>
            <goals>
              <goal>repackage</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>

  {{#if mavenAccessToken}}

  {{/if}}

</project>
`,D6=`package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = { "org.kie.kogito.dmn.**", "org.kie.kogito.app.**", "http**" })
public class AletyxSpringbootApplication {

    public static void main(String[] args) {
        SpringApplication.run(AletyxSpringbootApplication.class, args);
    }
}
`,k6=`<?xml version="1.0" encoding="UTF-8" ?>
<definitions xmlns="https://www.omg.org/spec/DMN/20230324/MODEL/" xmlns:dmndi="https://www.omg.org/spec/DMN/20230324/DMNDI/" xmlns:dc="http://www.omg.org/spec/DMN/20180521/DC/" xmlns:di="http://www.omg.org/spec/DMN/20180521/DI/" xmlns:kie="https://kie.org/dmn/extensions/1.0" expressionLanguage="https://www.omg.org/spec/DMN/20230324/FEEL/" namespace="https://kie.org/dmn/_B6DFE4CF-E987-4DB9-B7BD-E35AF654AC28" id="_9A011479-9BA6-4BA7-887F-424EA275FEE6" name="Discount Policy">
  <itemDefinition id="_8BFA21CF-599D-455F-80B2-E917D1109DC6" name="tClientTier" isCollection="false" typeLanguage="https://www.omg.org/spec/DMN/20230324/FEEL/">
    <typeRef>string</typeRef>
    <typeConstraint id="_E8B17B07-084E-4D93-ACAA-4AE037C03996" kie:constraintType="enumeration">
      <text>&quot;Basic&quot;, &quot;Standard&quot;, &quot;Premium&quot;, &quot;Elite&quot;, &quot;Partner&quot;, &quot;VIP&quot;</text>
    </typeConstraint>
  </itemDefinition>
  <itemDefinition id="_C11FB64A-DEA9-4413-BCE4-FA5D5ADBC442" name="tPeriod" isCollection="false" typeLanguage="https://www.omg.org/spec/DMN/20230324/FEEL/">
    <typeRef>string</typeRef>
    <typeConstraint id="_780200E6-0C76-4FEF-B0C0-3DD9797AF07A" kie:constraintType="enumeration">
      <text>&quot;Q1&quot;, &quot;Q2&quot;, &quot;Q3&quot;, &quot;Q4&quot;, &quot;Special&quot;</text>
    </typeConstraint>
  </itemDefinition>
  <inputData name="Transaction" id="_2B1D9F3D-8ADE-4939-9DFE-A22EF49468B4">
    <variable name="Transaction" id="_076249A1-CEC0-4774-BCA5-50648559D9D0" typeRef="number" />
  </inputData>
  <inputData name="Client Tier" id="_4028B6A3-AD1E-44BF-A246-AAEE80611069">
    <variable name="Client Tier" id="_A2A5C8C2-D33D-4D3D-AD8E-9EACC4F87D31" typeRef="tClientTier" />
  </inputData>
  <decision name="Value Discount" id="_919B4FBF-BB5A-4CA6-A39F-6D874145770B">
    <variable id="_03B944FA-C405-4396-B21B-D2FB1B8485A6" typeRef="number" name="Value Discount" />
    <informationRequirement id="_F8DE93DD-8C4A-46AB-8FC5-BEB498B65476">
      <requiredInput href="#_2B1D9F3D-8ADE-4939-9DFE-A22EF49468B4" />
    </informationRequirement>
    <decisionTable id="_E44DBD69-1EFD-42BD-8928-327CD6D1244F" typeRef="number" hitPolicy="UNIQUE" label="Value Discount">
      <input id="_B54CF35C-5F0A-4E3F-BCA4-A931D268C09C">
        <inputExpression id="_8E655D6F-8784-4CDD-A739-42184D9CE611" typeRef="number">
          <text>Transaction</text>
        </inputExpression>
      </input>
      <output id="_6474D868-A25E-44E0-BC5B-DF055974F0FE" />
      <annotation name="Annotations" />
      <rule id="_92318F6F-B8E1-414B-9F44-4550B1A57EE4">
        <inputEntry id="_5CD55205-2FBC-4E87-8997-CDB4C737FA86">
          <text>[0..1000)</text>
        </inputEntry>
        <outputEntry id="_029E36D7-1A4A-457D-AC47-F635A2A1E160">
          <text>0</text>
        </outputEntry>
        <annotationEntry>
          <text>// Your annotations here</text>
        </annotationEntry>
      </rule>
      <rule id="_BD441478-CE67-4BE4-A895-11B2873712A9">
        <inputEntry id="_9FD2B198-FD7E-4988-8BFC-BC31AAED0A13">
          <text>[1000..5000)</text>
        </inputEntry>
        <outputEntry id="_C9964D66-2973-483F-AFAE-A569B03AA2C1">
          <text>.02</text>
        </outputEntry>
        <annotationEntry>
          <text></text>
        </annotationEntry>
      </rule>
      <rule id="_58925639-FA1E-447C-81B7-7ABC156DD92A">
        <inputEntry id="_AA98A4A6-8E33-4AB1-BB7D-B399483F7A02">
          <text>[5000..10000)</text>
        </inputEntry>
        <outputEntry id="_EF520D90-2317-4A48-8F7D-EBA03B06CB5E">
          <text>.05</text>
        </outputEntry>
        <annotationEntry>
          <text></text>
        </annotationEntry>
      </rule>
      <rule id="_21D559CF-7475-489E-9D20-CF4AF6531E7D">
        <inputEntry id="_C625830B-2C9F-4D8D-8118-2D73A5F1F256">
          <text>[10000..25000)</text>
        </inputEntry>
        <outputEntry id="_702A7CEB-DE60-4005-9CFA-FCC3A0D6BCD3">
          <text>.07</text>
        </outputEntry>
        <annotationEntry>
          <text></text>
        </annotationEntry>
      </rule>
      <rule id="_967B73F5-210B-44FE-A3FF-651E354A27DA">
        <inputEntry id="_5FD0D115-568A-44D7-BE56-4D05767105EC">
          <text>&gt;= 25000</text>
        </inputEntry>
        <outputEntry id="_ED76A0CA-3C03-47AF-B6EA-1E79F6BA40EF">
          <text>.1</text>
        </outputEntry>
        <annotationEntry>
          <text></text>
        </annotationEntry>
      </rule>
    </decisionTable>
  </decision>
  <decision name="Relationship Discount" id="_51CF91DA-F210-43A5-BCBD-B2EBCA1BED22">
    <variable id="_8D8FF4D9-1A29-49DF-98E3-B61067059AE6" typeRef="number" name="Relationship Discount" />
    <informationRequirement id="_0FAD88FB-5B73-4343-B9B5-1751BBA6088C">
      <requiredInput href="#_4028B6A3-AD1E-44BF-A246-AAEE80611069" />
    </informationRequirement>
    <decisionTable id="_2ADAC8BE-ACD3-4348-B610-A428BDF8F152" typeRef="number" hitPolicy="UNIQUE" label="Relationship Discount">
      <input id="_29EC8E19-F680-4B76-84F0-510899D30A32">
        <inputExpression id="_D6605260-AB88-4D31-9DD6-839F158C72F4" typeRef="tClientTier">
          <text>Client Tier</text>
        </inputExpression>
      </input>
      <output id="_20857412-2785-4CE8-B00D-D30A0279DD45" />
      <annotation name="Annotations" />
      <rule id="_37E40DFA-3B3E-4E6B-85AE-7EF130D6D997">
        <inputEntry id="_FA47C21C-01F2-4F78-8BBF-3AC479C80FF1">
          <text>&quot;Basic&quot;</text>
        </inputEntry>
        <outputEntry id="_974C3016-C1A5-41E5-8257-6AD6209AF1D6">
          <text>0</text>
        </outputEntry>
        <annotationEntry>
          <text>// Your annotations here</text>
        </annotationEntry>
      </rule>
      <rule id="_08BF02F5-08D3-47E9-978E-DC35D6548636">
        <inputEntry id="_EF5DF2D7-BC3D-480D-A5A1-168769F6990A">
          <text>&quot;Standard&quot;</text>
        </inputEntry>
        <outputEntry id="_298F3F81-A55C-4325-9666-E38BCAFA3753">
          <text>.05</text>
        </outputEntry>
        <annotationEntry>
          <text></text>
        </annotationEntry>
      </rule>
      <rule id="_EF3226F8-4236-47EC-9642-13034E4C36C6">
        <inputEntry id="_4A99D1C7-F3CB-4892-A864-E9C43BA08036">
          <text>&quot;Premium&quot;</text>
        </inputEntry>
        <outputEntry id="_9360C3DE-AFB7-44FB-96C1-9BD48F904B45">
          <text>.1</text>
        </outputEntry>
        <annotationEntry>
          <text></text>
        </annotationEntry>
      </rule>
      <rule id="_F7186F6D-BA31-4CB0-B8A1-737327ED8BF3">
        <inputEntry id="_423917DC-76A3-42E3-8AEA-2C9128AE0876">
          <text>&quot;Elite&quot;</text>
        </inputEntry>
        <outputEntry id="_4B38FD73-E1E7-426F-8DAA-9D79E41ACE6C">
          <text>.15</text>
        </outputEntry>
        <annotationEntry>
          <text></text>
        </annotationEntry>
      </rule>
      <rule id="_D1B1CB97-CBD9-470A-A3B6-7FAC0AFB4900">
        <inputEntry id="_704F071E-199C-4356-A6A3-0722BC38A930">
          <text>&quot;Partner&quot;</text>
        </inputEntry>
        <outputEntry id="_DD639FEB-AF68-46E7-9027-9B80196E0764">
          <text>.2</text>
        </outputEntry>
        <annotationEntry>
          <text></text>
        </annotationEntry>
      </rule>
      <rule id="_7380D2EA-53AF-4AFD-B4A2-4B3DA2871599">
        <inputEntry id="_EF8B09E5-02C0-48C0-87DF-5E1FAE9CFE40">
          <text>&quot;VIP&quot;</text>
        </inputEntry>
        <outputEntry id="_98CCC59F-973E-4E4E-B280-C25CB0AE41FB">
          <text>.25</text>
        </outputEntry>
        <annotationEntry>
          <text></text>
        </annotationEntry>
      </rule>
    </decisionTable>
  </decision>
  <decision name="Final Discount" id="_BFCDB2AA-1966-43F7-94EC-64FC451A9667">
    <variable id="_A4834E14-7DF8-45F7-82E1-DF3E478F2851" name="Final Discount" />
    <informationRequirement id="_7D8B9364-76D8-43FF-A2EF-2725D1033C77">
      <requiredDecision href="#_51CF91DA-F210-43A5-BCBD-B2EBCA1BED22" />
    </informationRequirement>
    <informationRequirement id="_A935FABD-AF6F-4656-81F9-87C8C64D625C">
      <requiredDecision href="#_919B4FBF-BB5A-4CA6-A39F-6D874145770B" />
    </informationRequirement>
    <context id="_FA58E3FF-502F-44AD-8EF3-B577C36A6376" label="Final Discount">
      <contextEntry id="_0E5CBC38-0681-4AA1-8B92-77DE6E397717">
        <variable id="_23E69DD0-B9C0-45FB-B318-52B22B7A9CEC" name="Maximum" typeRef="number" />
        <literalExpression id="_971DBB91-B410-431C-9D12-E052CE147310" typeRef="number" label="Maximum">
          <text>max(Relationship Discount, Value Discount)</text>
        </literalExpression>
      </contextEntry>
      <contextEntry id="_625BFC5A-DFFA-47DF-A67E-E8A0842C6B29">
        <variable id="_1F82AD11-0B2F-4BA2-8562-69CA3666FD85" name="Additive with Cap">
          <description></description>
        </variable>
        <literalExpression id="_3559DF98-FBD6-4394-AEE0-62FBFDDC215X" label="Additive with Cap">
          <text>min(Relationship Discount , Value Discount, .30)</text>
        </literalExpression>
      </contextEntry>
      <contextEntry id="_552023DB-2B01-4AB8-B55B-22C860FDBCC8">
        <variable id="_4E2B7FC6-49B0-4E05-BDB2-5DC309E76621" name="Weighted Average" typeRef="number">
          <description></description>
        </variable>
        <literalExpression id="_B90D995C-BA2C-4525-AC99-4325BB487CE8" typeRef="number" label="Weighted Average">
          <text>(Relationship Discount * 0.4) + (Value Discount * 0.3)</text>
        </literalExpression>
      </contextEntry>
      <contextEntry id="_9840E89F-9EFA-423E-B20B-467374B9232C">
        <literalExpression id="_3559DF98-FBD6-4394-AEE0-62FBFDDC215F" label="Final Discount">
          <text>(Maximum + Additive with Cap + Weighted Average) / 3</text>
        </literalExpression>
      </contextEntry>
    </context>
  </decision>
  <dmndi:DMNDI>
    <dmndi:DMNDiagram id="_01A0AF06-A5EE-47B9-8564-F13E4479D7B3" name="Default DRD" useAlternativeInputDataShape="false">
      <di:extension>
        <kie:ComponentsWidthsExtension>
          <kie:ComponentWidths dmnElementRef="_E44DBD69-1EFD-42BD-8928-327CD6D1244F">
            <kie:width>60</kie:width>
            <kie:width>171</kie:width>
            <kie:width>118</kie:width>
            <kie:width>240</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_2ADAC8BE-ACD3-4348-B610-A428BDF8F152">
            <kie:width>60</kie:width>
            <kie:width>118</kie:width>
            <kie:width>446</kie:width>
            <kie:width>240</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_FA58E3FF-502F-44AD-8EF3-B577C36A6376">
            <kie:width>258</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_3559DF98-FBD6-4394-AEE0-62FBFDDC215F">
            <kie:width>789</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_971DBB91-B410-431C-9D12-E052CE147310">
            <kie:width>789</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_F48B101C-9E8D-413B-B2B6-A89E321E912E">
            <kie:width>190</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_B90D995C-BA2C-4525-AC99-4325BB487CE8">
            <kie:width>789</kie:width>
          </kie:ComponentWidths>
        </kie:ComponentsWidthsExtension>
      </di:extension>
      <dmndi:DMNShape id="_7A8F8E16-DF33-43EB-B8AD-52DD43E5B011" dmnElementRef="_2B1D9F3D-8ADE-4939-9DFE-A22EF49468B4" isCollapsed="false" isListedInputData="false">
        <dc:Bounds x="342" y="472" width="160" height="80" />
      </dmndi:DMNShape>
      <dmndi:DMNShape id="_87FA0391-FD2F-4097-96A2-054E9DD7BBCF" dmnElementRef="_4028B6A3-AD1E-44BF-A246-AAEE80611069" isCollapsed="false" isListedInputData="false">
        <dc:Bounds x="122" y="472" width="160" height="80" />
      </dmndi:DMNShape>
      <dmndi:DMNShape id="_74BE9F69-76D9-4B66-A118-A23670695A88" dmnElementRef="_919B4FBF-BB5A-4CA6-A39F-6D874145770B" isCollapsed="false" isListedInputData="false">
        <dc:Bounds x="342" y="292" width="160" height="80" />
      </dmndi:DMNShape>
      <dmndi:DMNShape id="_11E81383-DE34-45CF-B65A-D1FDADEE0661" dmnElementRef="_51CF91DA-F210-43A5-BCBD-B2EBCA1BED22" isCollapsed="false" isListedInputData="false">
        <dc:Bounds x="122" y="292" width="160" height="80" />
      </dmndi:DMNShape>
      <dmndi:DMNShape id="_2A60E2EC-2303-49FF-A887-EFA082A35982" dmnElementRef="_BFCDB2AA-1966-43F7-94EC-64FC451A9667" isCollapsed="false" isListedInputData="false">
        <dc:Bounds x="220" y="120" width="180" height="80" />
      </dmndi:DMNShape>
      <dmndi:DMNEdge id="_78DE2492-65B2-4325-8715-CD8DDC21BC9A" dmnElementRef="_F8DE93DD-8C4A-46AB-8FC5-BEB498B65476" sourceElement="_7A8F8E16-DF33-43EB-B8AD-52DD43E5B011" targetElement="_74BE9F69-76D9-4B66-A118-A23670695A88">
        <di:waypoint x="422" y="472" />
        <di:waypoint x="422" y="372" />
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="_79315E4E-3DBE-4E5B-88CB-0D17C873014C" dmnElementRef="_0FAD88FB-5B73-4343-B9B5-1751BBA6088C" sourceElement="_87FA0391-FD2F-4097-96A2-054E9DD7BBCF" targetElement="_11E81383-DE34-45CF-B65A-D1FDADEE0661">
        <di:waypoint x="202" y="472" />
        <di:waypoint x="202" y="372" />
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="_097CD606-0554-4CE8-BCFA-71F203846506" dmnElementRef="_7D8B9364-76D8-43FF-A2EF-2725D1033C77" sourceElement="_11E81383-DE34-45CF-B65A-D1FDADEE0661" targetElement="_2A60E2EC-2303-49FF-A887-EFA082A35982">
        <di:waypoint x="202" y="292" />
        <di:waypoint x="310" y="200" />
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="_E5C85300-E40B-4B12-9ECA-D77FBE37063D" dmnElementRef="_A935FABD-AF6F-4656-81F9-87C8C64D625C" sourceElement="_74BE9F69-76D9-4B66-A118-A23670695A88" targetElement="_2A60E2EC-2303-49FF-A887-EFA082A35982">
        <di:waypoint x="422" y="292" />
        <di:waypoint x="310" y="200" />
      </dmndi:DMNEdge>
    </dmndi:DMNDiagram>
  </dmndi:DMNDI>
</definitions>
`,F6=`# Generated for {{group}}.{{artifact}}
server.address=0.0.0.0
org.kie.dmn.runtime.typecheck=true

# Logging Configuration
logging.level.root=INFO
`,I6=`<?xml version="1.0" encoding="UTF-8"?>
<project xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" xmlns="http://maven.apache.org/POM/4.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <modelVersion>4.0.0</modelVersion>

  <groupId>{{group}}</groupId>
  <artifactId>{{artifact}}</artifactId>
  <version>{{version}}</version>
  <name>Decision Service by Aletyx Start</name>

  <properties>
    <maven.compiler.source>17</maven.compiler.source>
    <maven.compiler.target>17</maven.compiler.target>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <quarkus-plugin.version>{{platformVersion}}</quarkus-plugin.version>
    <quarkus.platform.artifact-id>quarkus-bom</quarkus.platform.artifact-id>
    <quarkus.platform.group-id>io.quarkus</quarkus.platform.group-id>
    <quarkus.platform.version>{{platformVersion}}</quarkus.platform.version>
    <kogito.bom.group-id>ai.aletyx</kogito.bom.group-id>
    <kogito.bom.artifact-id>aletyx-automation-bom</kogito.bom.artifact-id>
    <kogito.bom.version>{{targetVersion}}</kogito.bom.version>
    <version.org.kie.kogito>{{targetVersion}}</version.org.kie.kogito>
    <quarkus-mcp-server-version>1.5.0</quarkus-mcp-server-version>
  </properties>

  <dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>\${quarkus.platform.group-id}</groupId>
        <artifactId>\${quarkus.platform.artifact-id}</artifactId>
        <version>\${quarkus.platform.version}</version>
        <type>pom</type>
        <scope>import</scope>
      </dependency>
      <dependency>
        <groupId>\${kogito.bom.group-id}</groupId>
        <artifactId>\${kogito.bom.artifact-id}</artifactId>
        <version>\${kogito.bom.version}</version>
        <type>pom</type>
        <scope>import</scope>
      </dependency>
      <dependency>
        <groupId>io.quarkiverse.mcp</groupId>
        <artifactId>quarkus-mcp-server-sse</artifactId>
        <version>\${quarkus-mcp-server-version}</version>
      </dependency>
    </dependencies>
  </dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>io.quarkiverse.mcp</groupId>
      <artifactId>quarkus-mcp-server-sse</artifactId>
    </dependency>

    <dependency>
      <groupId>org.drools</groupId>
      <artifactId>drools-quarkus-decisions</artifactId>
    </dependency>
    <dependency>
      <groupId>io.quarkus</groupId>
      <artifactId>quarkus-resteasy</artifactId>
    </dependency>
    <dependency>
      <groupId>io.quarkus</groupId>
      <artifactId>quarkus-arc</artifactId>
    </dependency>
    <dependency>
      <groupId>io.quarkus</groupId>
      <artifactId>quarkus-resteasy-jackson</artifactId>
    </dependency>
    <dependency>
      <groupId>io.quarkus</groupId>
      <artifactId>quarkus-smallrye-openapi</artifactId>
    </dependency>
    <dependency>
      <groupId>io.quarkus</groupId>
      <artifactId>quarkus-junit5</artifactId>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>io.rest-assured</groupId>
      <artifactId>rest-assured</artifactId>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.kie.kogito</groupId>
      <artifactId>kogito-scenario-simulation</artifactId>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>io.quarkus</groupId>
      <artifactId>quarkus-smallrye-health</artifactId>
    </dependency>
  </dependencies>
  <build>
    <finalName>\${project.artifactId}</finalName>
    <plugins>
      <plugin>
        <groupId>\${quarkus.platform.group-id}</groupId>
        <artifactId>quarkus-maven-plugin</artifactId>
        <version>\${quarkus-plugin.version}</version>
        <executions>
          <execution>
            <goals>
              <goal>build</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>
</project>
`,P6=`<?xml version="1.0" encoding="UTF-8" ?>
<definitions xmlns="https://www.omg.org/spec/DMN/20230324/MODEL/" xmlns:dmndi="https://www.omg.org/spec/DMN/20230324/DMNDI/" xmlns:dc="http://www.omg.org/spec/DMN/20180521/DC/" xmlns:di="http://www.omg.org/spec/DMN/20180521/DI/" xmlns:kie="https://kie.org/dmn/extensions/1.0" expressionLanguage="https://www.omg.org/spec/DMN/20230324/FEEL/" namespace="https://kie.org/dmn/_B6DFE4CF-E987-4DB9-B7BD-E35AF654AC28" id="_9A011479-9BA6-4BA7-887F-424EA275FEE6" name="Discount Policy">
  <itemDefinition id="_8BFA21CF-599D-455F-80B2-E917D1109DC6" name="tClientTier" isCollection="false" typeLanguage="https://www.omg.org/spec/DMN/20230324/FEEL/">
    <typeRef>string</typeRef>
    <typeConstraint id="_E8B17B07-084E-4D93-ACAA-4AE037C03996" kie:constraintType="enumeration">
      <text>&quot;Basic&quot;, &quot;Standard&quot;, &quot;Premium&quot;, &quot;Elite&quot;, &quot;Partner&quot;, &quot;VIP&quot;</text>
    </typeConstraint>
  </itemDefinition>
  <itemDefinition id="_C11FB64A-DEA9-4413-BCE4-FA5D5ADBC442" name="tPeriod" isCollection="false" typeLanguage="https://www.omg.org/spec/DMN/20230324/FEEL/">
    <typeRef>string</typeRef>
    <typeConstraint id="_780200E6-0C76-4FEF-B0C0-3DD9797AF07A" kie:constraintType="enumeration">
      <text>&quot;Q1&quot;, &quot;Q2&quot;, &quot;Q3&quot;, &quot;Q4&quot;, &quot;Special&quot;</text>
    </typeConstraint>
  </itemDefinition>
  <inputData name="Transaction" id="_2B1D9F3D-8ADE-4939-9DFE-A22EF49468B4">
    <variable name="Transaction" id="_076249A1-CEC0-4774-BCA5-50648559D9D0" typeRef="number" />
  </inputData>
  <inputData name="Client Tier" id="_4028B6A3-AD1E-44BF-A246-AAEE80611069">
    <variable name="Client Tier" id="_A2A5C8C2-D33D-4D3D-AD8E-9EACC4F87D31" typeRef="tClientTier" />
  </inputData>
  <decision name="Value Discount" id="_919B4FBF-BB5A-4CA6-A39F-6D874145770B">
    <variable id="_03B944FA-C405-4396-B21B-D2FB1B8485A6" typeRef="number" name="Value Discount" />
    <informationRequirement id="_F8DE93DD-8C4A-46AB-8FC5-BEB498B65476">
      <requiredInput href="#_2B1D9F3D-8ADE-4939-9DFE-A22EF49468B4" />
    </informationRequirement>
    <decisionTable id="_E44DBD69-1EFD-42BD-8928-327CD6D1244F" typeRef="number" hitPolicy="UNIQUE" label="Value Discount">
      <input id="_B54CF35C-5F0A-4E3F-BCA4-A931D268C09C">
        <inputExpression id="_8E655D6F-8784-4CDD-A739-42184D9CE611" typeRef="number">
          <text>Transaction</text>
        </inputExpression>
      </input>
      <output id="_6474D868-A25E-44E0-BC5B-DF055974F0FE" />
      <annotation name="Annotations" />
      <rule id="_92318F6F-B8E1-414B-9F44-4550B1A57EE4">
        <inputEntry id="_5CD55205-2FBC-4E87-8997-CDB4C737FA86">
          <text>[0..1000)</text>
        </inputEntry>
        <outputEntry id="_029E36D7-1A4A-457D-AC47-F635A2A1E160">
          <text>0</text>
        </outputEntry>
        <annotationEntry>
          <text>// Your annotations here</text>
        </annotationEntry>
      </rule>
      <rule id="_BD441478-CE67-4BE4-A895-11B2873712A9">
        <inputEntry id="_9FD2B198-FD7E-4988-8BFC-BC31AAED0A13">
          <text>[1000..5000)</text>
        </inputEntry>
        <outputEntry id="_C9964D66-2973-483F-AFAE-A569B03AA2C1">
          <text>.02</text>
        </outputEntry>
        <annotationEntry>
          <text></text>
        </annotationEntry>
      </rule>
      <rule id="_58925639-FA1E-447C-81B7-7ABC156DD92A">
        <inputEntry id="_AA98A4A6-8E33-4AB1-BB7D-B399483F7A02">
          <text>[5000..10000)</text>
        </inputEntry>
        <outputEntry id="_EF520D90-2317-4A48-8F7D-EBA03B06CB5E">
          <text>.05</text>
        </outputEntry>
        <annotationEntry>
          <text></text>
        </annotationEntry>
      </rule>
      <rule id="_21D559CF-7475-489E-9D20-CF4AF6531E7D">
        <inputEntry id="_C625830B-2C9F-4D8D-8118-2D73A5F1F256">
          <text>[10000..25000)</text>
        </inputEntry>
        <outputEntry id="_702A7CEB-DE60-4005-9CFA-FCC3A0D6BCD3">
          <text>.07</text>
        </outputEntry>
        <annotationEntry>
          <text></text>
        </annotationEntry>
      </rule>
      <rule id="_967B73F5-210B-44FE-A3FF-651E354A27DA">
        <inputEntry id="_5FD0D115-568A-44D7-BE56-4D05767105EC">
          <text>&gt;= 25000</text>
        </inputEntry>
        <outputEntry id="_ED76A0CA-3C03-47AF-B6EA-1E79F6BA40EF">
          <text>.1</text>
        </outputEntry>
        <annotationEntry>
          <text></text>
        </annotationEntry>
      </rule>
    </decisionTable>
  </decision>
  <decision name="Relationship Discount" id="_51CF91DA-F210-43A5-BCBD-B2EBCA1BED22">
    <variable id="_8D8FF4D9-1A29-49DF-98E3-B61067059AE6" typeRef="number" name="Relationship Discount" />
    <informationRequirement id="_0FAD88FB-5B73-4343-B9B5-1751BBA6088C">
      <requiredInput href="#_4028B6A3-AD1E-44BF-A246-AAEE80611069" />
    </informationRequirement>
    <decisionTable id="_2ADAC8BE-ACD3-4348-B610-A428BDF8F152" typeRef="number" hitPolicy="UNIQUE" label="Relationship Discount">
      <input id="_29EC8E19-F680-4B76-84F0-510899D30A32">
        <inputExpression id="_D6605260-AB88-4D31-9DD6-839F158C72F4" typeRef="tClientTier">
          <text>Client Tier</text>
        </inputExpression>
      </input>
      <output id="_20857412-2785-4CE8-B00D-D30A0279DD45" />
      <annotation name="Annotations" />
      <rule id="_37E40DFA-3B3E-4E6B-85AE-7EF130D6D997">
        <inputEntry id="_FA47C21C-01F2-4F78-8BBF-3AC479C80FF1">
          <text>&quot;Basic&quot;</text>
        </inputEntry>
        <outputEntry id="_974C3016-C1A5-41E5-8257-6AD6209AF1D6">
          <text>0</text>
        </outputEntry>
        <annotationEntry>
          <text>// Your annotations here</text>
        </annotationEntry>
      </rule>
      <rule id="_08BF02F5-08D3-47E9-978E-DC35D6548636">
        <inputEntry id="_EF5DF2D7-BC3D-480D-A5A1-168769F6990A">
          <text>&quot;Standard&quot;</text>
        </inputEntry>
        <outputEntry id="_298F3F81-A55C-4325-9666-E38BCAFA3753">
          <text>.05</text>
        </outputEntry>
        <annotationEntry>
          <text></text>
        </annotationEntry>
      </rule>
      <rule id="_EF3226F8-4236-47EC-9642-13034E4C36C6">
        <inputEntry id="_4A99D1C7-F3CB-4892-A864-E9C43BA08036">
          <text>&quot;Premium&quot;</text>
        </inputEntry>
        <outputEntry id="_9360C3DE-AFB7-44FB-96C1-9BD48F904B45">
          <text>.1</text>
        </outputEntry>
        <annotationEntry>
          <text></text>
        </annotationEntry>
      </rule>
      <rule id="_F7186F6D-BA31-4CB0-B8A1-737327ED8BF3">
        <inputEntry id="_423917DC-76A3-42E3-8AEA-2C9128AE0876">
          <text>&quot;Elite&quot;</text>
        </inputEntry>
        <outputEntry id="_4B38FD73-E1E7-426F-8DAA-9D79E41ACE6C">
          <text>.15</text>
        </outputEntry>
        <annotationEntry>
          <text></text>
        </annotationEntry>
      </rule>
      <rule id="_D1B1CB97-CBD9-470A-A3B6-7FAC0AFB4900">
        <inputEntry id="_704F071E-199C-4356-A6A3-0722BC38A930">
          <text>&quot;Partner&quot;</text>
        </inputEntry>
        <outputEntry id="_DD639FEB-AF68-46E7-9027-9B80196E0764">
          <text>.2</text>
        </outputEntry>
        <annotationEntry>
          <text></text>
        </annotationEntry>
      </rule>
      <rule id="_7380D2EA-53AF-4AFD-B4A2-4B3DA2871599">
        <inputEntry id="_EF8B09E5-02C0-48C0-87DF-5E1FAE9CFE40">
          <text>&quot;VIP&quot;</text>
        </inputEntry>
        <outputEntry id="_98CCC59F-973E-4E4E-B280-C25CB0AE41FB">
          <text>.25</text>
        </outputEntry>
        <annotationEntry>
          <text></text>
        </annotationEntry>
      </rule>
    </decisionTable>
  </decision>
  <decision name="Final Discount" id="_BFCDB2AA-1966-43F7-94EC-64FC451A9667">
    <variable id="_A4834E14-7DF8-45F7-82E1-DF3E478F2851" name="Final Discount" />
    <informationRequirement id="_7D8B9364-76D8-43FF-A2EF-2725D1033C77">
      <requiredDecision href="#_51CF91DA-F210-43A5-BCBD-B2EBCA1BED22" />
    </informationRequirement>
    <informationRequirement id="_A935FABD-AF6F-4656-81F9-87C8C64D625C">
      <requiredDecision href="#_919B4FBF-BB5A-4CA6-A39F-6D874145770B" />
    </informationRequirement>
    <context id="_FA58E3FF-502F-44AD-8EF3-B577C36A6376" label="Final Discount">
      <contextEntry id="_0E5CBC38-0681-4AA1-8B92-77DE6E397717">
        <variable id="_23E69DD0-B9C0-45FB-B318-52B22B7A9CEC" name="Maximum" typeRef="number" />
        <literalExpression id="_971DBB91-B410-431C-9D12-E052CE147310" typeRef="number" label="Maximum">
          <text>max(Relationship Discount, Value Discount)</text>
        </literalExpression>
      </contextEntry>
      <contextEntry id="_625BFC5A-DFFA-47DF-A67E-E8A0842C6B29">
        <variable id="_1F82AD11-0B2F-4BA2-8562-69CA3666FD85" name="Additive with Cap">
          <description></description>
        </variable>
        <literalExpression id="_3559DF98-FBD6-4394-AEE0-62FBFDDC215X" label="Additive with Cap">
          <text>min(Relationship Discount , Value Discount, .30)</text>
        </literalExpression>
      </contextEntry>
      <contextEntry id="_552023DB-2B01-4AB8-B55B-22C860FDBCC8">
        <variable id="_4E2B7FC6-49B0-4E05-BDB2-5DC309E76621" name="Weighted Average" typeRef="number">
          <description></description>
        </variable>
        <literalExpression id="_B90D995C-BA2C-4525-AC99-4325BB487CE8" typeRef="number" label="Weighted Average">
          <text>(Relationship Discount * 0.4) + (Value Discount * 0.3)</text>
        </literalExpression>
      </contextEntry>
      <contextEntry id="_9840E89F-9EFA-423E-B20B-467374B9232C">
        <literalExpression id="_3559DF98-FBD6-4394-AEE0-62FBFDDC215F" label="Final Discount">
          <text>(Maximum + Additive with Cap + Weighted Average) / 3</text>
        </literalExpression>
      </contextEntry>
    </context>
  </decision>
  <dmndi:DMNDI>
    <dmndi:DMNDiagram id="_01A0AF06-A5EE-47B9-8564-F13E4479D7B3" name="Default DRD" useAlternativeInputDataShape="false">
      <di:extension>
        <kie:ComponentsWidthsExtension>
          <kie:ComponentWidths dmnElementRef="_E44DBD69-1EFD-42BD-8928-327CD6D1244F">
            <kie:width>60</kie:width>
            <kie:width>171</kie:width>
            <kie:width>118</kie:width>
            <kie:width>240</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_2ADAC8BE-ACD3-4348-B610-A428BDF8F152">
            <kie:width>60</kie:width>
            <kie:width>118</kie:width>
            <kie:width>446</kie:width>
            <kie:width>240</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_FA58E3FF-502F-44AD-8EF3-B577C36A6376">
            <kie:width>258</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_3559DF98-FBD6-4394-AEE0-62FBFDDC215F">
            <kie:width>789</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_971DBB91-B410-431C-9D12-E052CE147310">
            <kie:width>789</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_F48B101C-9E8D-413B-B2B6-A89E321E912E">
            <kie:width>190</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_B90D995C-BA2C-4525-AC99-4325BB487CE8">
            <kie:width>789</kie:width>
          </kie:ComponentWidths>
        </kie:ComponentsWidthsExtension>
      </di:extension>
      <dmndi:DMNShape id="_7A8F8E16-DF33-43EB-B8AD-52DD43E5B011" dmnElementRef="_2B1D9F3D-8ADE-4939-9DFE-A22EF49468B4" isCollapsed="false" isListedInputData="false">
        <dc:Bounds x="342" y="472" width="160" height="80" />
      </dmndi:DMNShape>
      <dmndi:DMNShape id="_87FA0391-FD2F-4097-96A2-054E9DD7BBCF" dmnElementRef="_4028B6A3-AD1E-44BF-A246-AAEE80611069" isCollapsed="false" isListedInputData="false">
        <dc:Bounds x="122" y="472" width="160" height="80" />
      </dmndi:DMNShape>
      <dmndi:DMNShape id="_74BE9F69-76D9-4B66-A118-A23670695A88" dmnElementRef="_919B4FBF-BB5A-4CA6-A39F-6D874145770B" isCollapsed="false" isListedInputData="false">
        <dc:Bounds x="342" y="292" width="160" height="80" />
      </dmndi:DMNShape>
      <dmndi:DMNShape id="_11E81383-DE34-45CF-B65A-D1FDADEE0661" dmnElementRef="_51CF91DA-F210-43A5-BCBD-B2EBCA1BED22" isCollapsed="false" isListedInputData="false">
        <dc:Bounds x="122" y="292" width="160" height="80" />
      </dmndi:DMNShape>
      <dmndi:DMNShape id="_2A60E2EC-2303-49FF-A887-EFA082A35982" dmnElementRef="_BFCDB2AA-1966-43F7-94EC-64FC451A9667" isCollapsed="false" isListedInputData="false">
        <dc:Bounds x="220" y="120" width="180" height="80" />
      </dmndi:DMNShape>
      <dmndi:DMNEdge id="_78DE2492-65B2-4325-8715-CD8DDC21BC9A" dmnElementRef="_F8DE93DD-8C4A-46AB-8FC5-BEB498B65476" sourceElement="_7A8F8E16-DF33-43EB-B8AD-52DD43E5B011" targetElement="_74BE9F69-76D9-4B66-A118-A23670695A88">
        <di:waypoint x="422" y="472" />
        <di:waypoint x="422" y="372" />
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="_79315E4E-3DBE-4E5B-88CB-0D17C873014C" dmnElementRef="_0FAD88FB-5B73-4343-B9B5-1751BBA6088C" sourceElement="_87FA0391-FD2F-4097-96A2-054E9DD7BBCF" targetElement="_11E81383-DE34-45CF-B65A-D1FDADEE0661">
        <di:waypoint x="202" y="472" />
        <di:waypoint x="202" y="372" />
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="_097CD606-0554-4CE8-BCFA-71F203846506" dmnElementRef="_7D8B9364-76D8-43FF-A2EF-2725D1033C77" sourceElement="_11E81383-DE34-45CF-B65A-D1FDADEE0661" targetElement="_2A60E2EC-2303-49FF-A887-EFA082A35982">
        <di:waypoint x="202" y="292" />
        <di:waypoint x="310" y="200" />
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="_E5C85300-E40B-4B12-9ECA-D77FBE37063D" dmnElementRef="_A935FABD-AF6F-4656-81F9-87C8C64D625C" sourceElement="_74BE9F69-76D9-4B66-A118-A23670695A88" targetElement="_2A60E2EC-2303-49FF-A887-EFA082A35982">
        <di:waypoint x="422" y="292" />
        <di:waypoint x="310" y="200" />
      </dmndi:DMNEdge>
    </dmndi:DMNDiagram>
  </dmndi:DMNDI>
</definitions>
`,B6=`# Packaging

quarkus.swagger-ui.always-include=true

org.kie.dmn.runtime.typecheck=true
quarkus.native.additional-build-args=--initialize-at-run-time=org.apache.hc.client5.http.impl.auth.NTLMEngineImpl
`,R6=`# DMN + Spring Boot example

## Description

A simple DMN service to evaluate a traffic violation.

The org.kie.dmn.runtime.typecheck=true property is used to enable type and value check.

## Installing and Running

### Prerequisites

You will need:
  - Java 17 installed
  - Environment variable JAVA_HOME set accordingly
  - Maven 3.9.6 installed

### Compile and Run

\`\`\`sh
mvn clean spring-boot:run
\`\`\`

### Package and Run

\`\`\`sh
mvn clean package
java -jar ./target/{{artifact}}.jar
\`\`\`

## Test DMN Model using Maven

Validate the functionality of DMN models before deploying them into a production environment by defining test scenarios in Test Scenario Editor. 

To define test scenarios you need to create a .scesim file inside your project and link it to the DMN model you want to be tested. Run all Test Scenarios, executing:

\`\`\`sh
mvn clean test
\`\`\`
See results in surefire test report \`target/surefire-reports\` 

## Example Usage

Once the service is up and running, you can use the following example to interact with the service.

### POST /Traffic Violation

Returns penalty information from the given inputs -- driver and violation:
Given inputs:

\`\`\`json
{
    "Driver":{ "Points":2 },
    "Violation":{
        "Type":"speed",
        "Actual Speed":120,
        "Speed Limit":100
    }
}
\`\`\`

Curl command (using the JSON object above):

\`\`\`sh
curl -X POST -H 'Accept: application/json' -H 'Content-Type: application/json' -d '{"Driver":{"Points":2},"Violation":{"Type":"speed","Actual Speed":120,"Speed Limit":100}}' http://localhost:8080/Traffic%20Violation
\`\`\`

As response, penalty information is returned.

Example response:
\`\`\`json
{
  "Violation":{
    "Type":"speed",
    "Speed Limit":100,
    "Actual Speed":120
  },
  "Driver":{
    "Points":2
  },
  "Fine":{
    "Points":3,
    "Amount":500
  },
  "Should the driver be suspended?":"No"
}
\`\`\`

## Developer notes

In order to have the DMN generated resources properly scanned by Spring Boot, please ensure the DMN model namespaces
 is included in the String application configuration.

The generated classes must be included in the annotation definitions of the main \`Application\` class:

\`\`\`
@SpringBootApplication(scanBasePackages={"org.kie.kogito.**", "org.kie.kogito.app.**", "http*"})
public class KogitoSpringbootApplication {

    public static void main(String[] args) {
        SpringApplication.run(KogitoSpringbootApplication.class, args);
    }
}
\`\`\`
`,N6=`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">

  <modelVersion>4.0.0</modelVersion>

  <groupId>{{group}}</groupId>
  <artifactId>{{artifact}}</artifactId>
  <version>{{version}}</version>
  <name>Decision Service by Aletyx Start</name>

  <properties>
    <maven.compiler.source>17</maven.compiler.source>
    <maven.compiler.target>17</maven.compiler.target>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <kogito.bom.group-id>{{bomGroupId}}</kogito.bom.group-id>
    <kogito.bom.artifact-id>{{bomArtifactId}}</kogito.bom.artifact-id>
    <kogito.bom.version>{{targetVersion}}</kogito.bom.version>
    <version.org.kie.kogito>{{targetVersion}}</version.org.kie.kogito>
  </properties>

  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>{{platformVersion}}</version>
    <relativePath/>
  </parent>

  <dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>\${kogito.bom.group-id}</groupId>
        <artifactId>\${kogito.bom.artifact-id}</artifactId>
        <version>\${kogito.bom.version}</version>
        <type>pom</type>
        <scope>import</scope>
      </dependency>
      <dependency>
        <groupId>org.kie.kogito</groupId>
        <artifactId>kogito-spring-boot-bom</artifactId>
        <version>\${kogito.bom.version}</version>
        <type>pom</type>
        <scope>import</scope>
      </dependency>
    </dependencies>
  </dependencyManagement>

  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>

    <dependency>
      <groupId>org.drools</groupId>
      <artifactId>drools-decisions-spring-boot-starter</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-test</artifactId>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>io.rest-assured</groupId>
      <artifactId>rest-assured</artifactId>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.kie.kogito</groupId>
      <artifactId>kogito-scenario-simulation</artifactId>
      <scope>test</scope>
    </dependency>
  </dependencies>

  <build>
    <finalName>\${project.artifactId}</finalName>
    <plugins>
      <plugin>
        <groupId>org.kie.kogito</groupId>
        <artifactId>kogito-maven-plugin</artifactId>
        <version>\${version.org.kie.kogito}</version>
        <executions>
          <execution>
            <phase>compile</phase>
            <goals>
              <goal>generateModel</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
      <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
        <executions>
          <execution>
            <goals>
              <goal>repackage</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>

  {{#if mavenAccessToken}}
  <!-- Aletyx Maven Repository Configuration -->
  <repositories>
    <repository>
      <id>aletyx-repository</id>
      <name>Aletyx Maven Repository</name>
      <url>https://maven.aletyx.services/repository/maven-releases/</url>
      <releases>
        <enabled>true</enabled>
      </releases>
      <snapshots>
        <enabled>false</enabled>
      </snapshots>
    </repository>
  </repositories>

  <pluginRepositories>
    <pluginRepository>
      <id>aletyx-plugin-repository</id>
      <name>Aletyx Maven Plugin Repository</name>
      <url>https://maven.aletyx.services/repository/maven-releases/</url>
      <releases>
        <enabled>true</enabled>
      </releases>
      <snapshots>
        <enabled>false</enabled>
      </snapshots>
    </pluginRepository>
  </pluginRepositories>
  
  <!-- Maven settings with authentication using the provided token -->
  <settings>
    <servers>
      <server>
        <id>aletyx-repository</id>
        <username>token</username>
        <password>{{mavenAccessToken}}</password>
      </server>
      <server>
        <id>aletyx-plugin-repository</id>
        <username>token</username>
        <password>{{mavenAccessToken}}</password>
      </server>
    </servers>
  </settings>
  {{/if}}

</project>
`,T6=`package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = { "org.kie.kogito.dmn.**", "org.kie.kogito.app.**", "http**" })
public class KogitoSpringbootApplication {

    public static void main(String[] args) {
        SpringApplication.run(KogitoSpringbootApplication.class, args);
    }
}
`,M6=`<?xml version='1.0' encoding='UTF-8'?>
<dmn:definitions xmlns:dmn="http://www.omg.org/spec/DMN/20180521/MODEL/" xmlns="https://github.com/kiegroup/drools/kie-dmn/_A4BCA8B8-CF08-433F-93B2-A2598F19ECFF" xmlns:di="http://www.omg.org/spec/DMN/20180521/DI/" xmlns:kie="http://www.drools.org/kie/dmn/1.2" xmlns:feel="http://www.omg.org/spec/DMN/20180521/FEEL/" xmlns:dmndi="http://www.omg.org/spec/DMN/20180521/DMNDI/" xmlns:dc="http://www.omg.org/spec/DMN/20180521/DC/" id="_1C792953-80DB-4B32-99EB-25FBE32BAF9E" name="Traffic Violation" expressionLanguage="http://www.omg.org/spec/DMN/20180521/FEEL/" typeLanguage="http://www.omg.org/spec/DMN/20180521/FEEL/" namespace="https://github.com/kiegroup/drools/kie-dmn/_A4BCA8B8-CF08-433F-93B2-A2598F19ECFF">
  <dmn:extensionElements/>
  <dmn:itemDefinition id="_63824D3F-9173-446D-A940-6A7F0FA056BB" name="tDriver" isCollection="false">
    <dmn:itemComponent id="_9DAB5DAA-3B44-4F6D-87F2-95125FB2FEE4" name="Name" isCollection="false">
      <dmn:typeRef>string</dmn:typeRef>
    </dmn:itemComponent>
    <dmn:itemComponent id="_856BA8FA-EF7B-4DF9-A1EE-E28263CE9955" name="Age" isCollection="false">
      <dmn:typeRef>number</dmn:typeRef>
    </dmn:itemComponent>
    <dmn:itemComponent id="_FDC2CE03-D465-47C2-A311-98944E8CC23F" name="State" isCollection="false">
      <dmn:typeRef>string</dmn:typeRef>
    </dmn:itemComponent>
    <dmn:itemComponent id="_D6FD34C4-00DC-4C79-B1BF-BBCF6FC9B6D7" name="City" isCollection="false">
      <dmn:typeRef>string</dmn:typeRef>
    </dmn:itemComponent>
    <dmn:itemComponent id="_7110FE7E-1A38-4C39-B0EB-AEEF06BA37F4" name="Points" isCollection="false">
      <dmn:typeRef>number</dmn:typeRef>
    </dmn:itemComponent>
  </dmn:itemDefinition>
  <dmn:itemDefinition id="_40731093-0642-4588-9183-1660FC55053B" name="tViolation" isCollection="false">
    <dmn:itemComponent id="_39E88D9F-AE53-47AD-B3DE-8AB38D4F50B3" name="Code" isCollection="false">
      <dmn:typeRef>string</dmn:typeRef>
    </dmn:itemComponent>
    <dmn:itemComponent id="_1648EA0A-2463-4B54-A12A-D743A3E3EE7B" name="Date" isCollection="false">
      <dmn:typeRef>date</dmn:typeRef>
    </dmn:itemComponent>
    <dmn:itemComponent id="_9F129EAA-4E71-4D99-B6D0-84EEC3AC43CC" name="Type" isCollection="false">
      <dmn:typeRef>string</dmn:typeRef>
      <dmn:allowedValues kie:constraintType="enumeration" id="_626A8F9C-9DD1-44E0-9568-0F6F8F8BA228">
        <dmn:text>"speed", "parking", "driving under the influence"</dmn:text>
      </dmn:allowedValues>
    </dmn:itemComponent>
    <dmn:itemComponent id="_DDD10D6E-BD38-4C79-9E2F-8155E3A4B438" name="Speed Limit" isCollection="false">
      <dmn:typeRef>number</dmn:typeRef>
    </dmn:itemComponent>
    <dmn:itemComponent id="_229F80E4-2892-494C-B70D-683ABF2345F6" name="Actual Speed" isCollection="false">
      <dmn:typeRef>number</dmn:typeRef>
    </dmn:itemComponent>
  </dmn:itemDefinition>
  <dmn:itemDefinition id="_2D4F30EE-21A6-4A78-A524-A5C238D433AE" name="tFine" isCollection="false">
    <dmn:itemComponent id="_B9F70BC7-1995-4F51-B949-1AB65538B405" name="Amount" isCollection="false">
      <dmn:typeRef>number</dmn:typeRef>
    </dmn:itemComponent>
    <dmn:itemComponent id="_F49085D6-8F08-4463-9A1A-EF6B57635DBD" name="Points" isCollection="false">
      <dmn:typeRef>number</dmn:typeRef>
    </dmn:itemComponent>
  </dmn:itemDefinition>
  <dmn:inputData id="_1929CBD5-40E0-442D-B909-49CEDE0101DC" name="Violation">
    <dmn:variable id="_C16CF9B1-5FAB-48A0-95E0-5FCD661E0406" name="Violation" typeRef="tViolation"/>
  </dmn:inputData>
  <dmn:decision id="_4055D956-1C47-479C-B3F4-BAEB61F1C929" name="Fine">
    <dmn:variable id="_8C1EAC83-F251-4D94-8A9E-B03ACF6849CD" name="Fine" typeRef="tFine"/>
    <dmn:informationRequirement id="_800A3BBB-90A3-4D9D-BA5E-A311DED0134F">
      <dmn:requiredInput href="#_1929CBD5-40E0-442D-B909-49CEDE0101DC"/>
    </dmn:informationRequirement>
    <dmn:decisionTable id="_C8F7F579-E06C-4A2F-8485-65FAFAC3FE6A" hitPolicy="UNIQUE" preferredOrientation="Rule-as-Row">
      <dmn:input id="_B53A6F0D-F72C-41EF-96B3-F31269AC0FED">
        <dmn:inputExpression id="_974C8D01-728F-4CE5-8C69-BE884125B859" typeRef="string">
          <dmn:text>Violation.Type</dmn:text>
        </dmn:inputExpression>
      </dmn:input>
      <dmn:input id="_D5319F80-1C59-4736-AF2D-D29DE6B7E76D">
        <dmn:inputExpression id="_3FEB4DE3-90C6-438E-99BF-9BB1BF5B078A" typeRef="number">
          <dmn:text>Violation.Actual Speed - Violation.Speed Limit</dmn:text>
        </dmn:inputExpression>
      </dmn:input>
      <dmn:output id="_9012031F-9C01-44E5-8CD2-E6704D594504" name="Amount" typeRef="number"/>
      <dmn:output id="_7CAC8240-E1A5-4FEB-A0D4-B8613F0DE54B" name="Points" typeRef="number"/>
      <dmn:rule id="_424A80AE-916F-4451-9B6B-71557F7EC65A">
        <dmn:inputEntry id="_EDA4F336-AA28-4F5F-ADFC-401E6DCC8D35">
          <dmn:text>"speed"</dmn:text>
        </dmn:inputEntry>
        <dmn:inputEntry id="_246AAB08-A945-4599-9220-7C24B6716FDD">
          <dmn:text>[10..30)</dmn:text>
        </dmn:inputEntry>
        <dmn:outputEntry id="_E49345EE-51D3-47C7-B658-3607E723FF37">
          <dmn:text>500</dmn:text>
        </dmn:outputEntry>
        <dmn:outputEntry id="_1D56F3CB-6BAE-4415-940F-00F37121813D">
          <dmn:text>3</dmn:text>
        </dmn:outputEntry>
      </dmn:rule>
      <dmn:rule id="_B1ECE6A9-6B82-4A85-A7CA-5F96CDB0DCB6">
        <dmn:inputEntry id="_2390F686-65CF-40FF-BF9A-72DFBAEBACAC">
          <dmn:text>"speed"</dmn:text>
        </dmn:inputEntry>
        <dmn:inputEntry id="_8CEBE4D5-DBEF-46EF-BD95-7B96148B6D8A">
          <dmn:text>&gt;= 30</dmn:text>
        </dmn:inputEntry>
        <dmn:outputEntry id="_5FCC56B7-6BAA-4B09-AC61-7EB9D4CD58C3">
          <dmn:text>1000</dmn:text>
        </dmn:outputEntry>
        <dmn:outputEntry id="_79FF8FDD-3299-4DFD-AA14-D2022504BDAD">
          <dmn:text>7</dmn:text>
        </dmn:outputEntry>
      </dmn:rule>
      <dmn:rule id="_8FC7068C-A3FD-44D9-AC2B-69C160A12E5D">
        <dmn:inputEntry id="_02EEE8A9-1AD7-4708-8EC8-9B4177B05167">
          <dmn:text>"parking"</dmn:text>
        </dmn:inputEntry>
        <dmn:inputEntry id="_A5141FF4-8D63-49DB-8979-3B64A3BD9A82">
          <dmn:text>-</dmn:text>
        </dmn:inputEntry>
        <dmn:outputEntry id="_EFDA632D-113D-46C9-94B8-78E9F9770CA4">
          <dmn:text>100</dmn:text>
        </dmn:outputEntry>
        <dmn:outputEntry id="_05F86973-52CE-4C9D-B785-47B6340D10FD">
          <dmn:text>1</dmn:text>
        </dmn:outputEntry>
      </dmn:rule>
      <dmn:rule id="_A742DF2B-DC91-4166-9773-6EF86A45A625">
        <dmn:inputEntry id="_F5B5AE87-D9E6-4142-B01D-D79D4BA49EEE">
          <dmn:text>"driving under the influence"</dmn:text>
        </dmn:inputEntry>
        <dmn:inputEntry id="_BD2A43F5-46D8-436A-B8A1-D98747C836B1">
          <dmn:text>-</dmn:text>
        </dmn:inputEntry>
        <dmn:outputEntry id="_ECAF3378-46B6-4F40-B95A-E90DB700BF7D">
          <dmn:text>1000</dmn:text>
        </dmn:outputEntry>
        <dmn:outputEntry id="_F0016A9C-D1D0-472A-9FB3-ABE77AD15F7D">
          <dmn:text>5</dmn:text>
        </dmn:outputEntry>
      </dmn:rule>
    </dmn:decisionTable>
  </dmn:decision>
  <dmn:inputData id="_1F9350D7-146D-46F1-85D8-15B5B68AF22A" name="Driver">
    <dmn:variable id="_A80F16DF-0DB4-43A2-B041-32900B1A3F3D" name="Driver" typeRef="tDriver"/>
  </dmn:inputData>
  <dmn:decision id="_8A408366-D8E9-4626-ABF3-5F69AA01F880" name="Should the driver be suspended?">
    <dmn:question>Should the driver be suspended due to points on his license?</dmn:question>
    <dmn:allowedAnswers>"Yes", "No"</dmn:allowedAnswers>
    <dmn:variable id="_40387B66-5D00-48C8-BB90-E83EE3332C72" name="Should the driver be suspended?" typeRef="string"/>
    <dmn:informationRequirement id="_982211B1-5246-49CD-BE85-3211F71253CF">
      <dmn:requiredInput href="#_1F9350D7-146D-46F1-85D8-15B5B68AF22A"/>
    </dmn:informationRequirement>
    <dmn:informationRequirement id="_AEC4AA5F-50C3-4FED-A0C2-261F90290731">
      <dmn:requiredDecision href="#_4055D956-1C47-479C-B3F4-BAEB61F1C929"/>
    </dmn:informationRequirement>
    <dmn:context id="_F39732F1-0AA7-468F-86C4-DCC07E6F81CF">
      <dmn:contextEntry>
        <dmn:variable id="_09385E8D-68E0-4DFD-AAD8-141C15C96B71" name="Total Points" typeRef="number"/>
        <dmn:literalExpression id="_F1BEBF16-033F-4A25-9523-CAC23ACC5DFC">
          <dmn:text>Driver.Points + Fine.Points</dmn:text>
        </dmn:literalExpression>
      </dmn:contextEntry>
      <dmn:contextEntry>
        <dmn:literalExpression id="_1929D813-B1C9-43C5-9497-CE5D8B2B040C">
          <dmn:text>if Total Points >= 20 then "Yes" else "No"</dmn:text>
        </dmn:literalExpression>
      </dmn:contextEntry>
    </dmn:context>
  </dmn:decision>
  <dmndi:DMNDI>
    <dmndi:DMNDiagram>
      <di:extension>
        <kie:ComponentsWidthsExtension>
          <kie:ComponentWidths dmnElementRef="_C8F7F579-E06C-4A2F-8485-65FAFAC3FE6A">
            <kie:width>50.0</kie:width>
            <kie:width>254.0</kie:width>
            <kie:width>329.0</kie:width>
            <kie:width>119.0</kie:width>
            <kie:width>100.0</kie:width>
            <kie:width>186.0</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_F39732F1-0AA7-468F-86C4-DCC07E6F81CF">
            <kie:width>50.0</kie:width>
            <kie:width>100.0</kie:width>
            <kie:width>398.0</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_F1BEBF16-033F-4A25-9523-CAC23ACC5DFC">
            <kie:width>398.0</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_1929D813-B1C9-43C5-9497-CE5D8B2B040C">
            <kie:width>398.0</kie:width>
          </kie:ComponentWidths>
        </kie:ComponentsWidthsExtension>
      </di:extension>
      <dmndi:DMNShape id="dmnshape-_1929CBD5-40E0-442D-B909-49CEDE0101DC" dmnElementRef="_1929CBD5-40E0-442D-B909-49CEDE0101DC" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255"/>
          <dmndi:StrokeColor red="0" green="0" blue="0"/>
          <dmndi:FontColor red="0" green="0" blue="0"/>
        </dmndi:DMNStyle>
        <dc:Bounds x="708" y="350" width="100" height="50"/>
        <dmndi:DMNLabel/>
      </dmndi:DMNShape>
      <dmndi:DMNShape id="dmnshape-_4055D956-1C47-479C-B3F4-BAEB61F1C929" dmnElementRef="_4055D956-1C47-479C-B3F4-BAEB61F1C929" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255"/>
          <dmndi:StrokeColor red="0" green="0" blue="0"/>
          <dmndi:FontColor red="0" green="0" blue="0"/>
        </dmndi:DMNStyle>
        <dc:Bounds x="709" y="210" width="100" height="50"/>
        <dmndi:DMNLabel/>
      </dmndi:DMNShape>
      <dmndi:DMNShape id="dmnshape-_1F9350D7-146D-46F1-85D8-15B5B68AF22A" dmnElementRef="_1F9350D7-146D-46F1-85D8-15B5B68AF22A" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255"/>
          <dmndi:StrokeColor red="0" green="0" blue="0"/>
          <dmndi:FontColor red="0" green="0" blue="0"/>
        </dmndi:DMNStyle>
        <dc:Bounds x="369" y="344" width="100" height="50"/>
        <dmndi:DMNLabel/>
      </dmndi:DMNShape>
      <dmndi:DMNShape id="dmnshape-_8A408366-D8E9-4626-ABF3-5F69AA01F880" dmnElementRef="_8A408366-D8E9-4626-ABF3-5F69AA01F880" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255"/>
          <dmndi:StrokeColor red="0" green="0" blue="0"/>
          <dmndi:FontColor red="0" green="0" blue="0"/>
        </dmndi:DMNStyle>
        <dc:Bounds x="534" y="83" width="133" height="63"/>
        <dmndi:DMNLabel/>
      </dmndi:DMNShape>
      <dmndi:DMNEdge id="dmnedge-_800A3BBB-90A3-4D9D-BA5E-A311DED0134F" dmnElementRef="_800A3BBB-90A3-4D9D-BA5E-A311DED0134F">
        <di:waypoint x="758" y="375"/>
        <di:waypoint x="759" y="235"/>
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="dmnedge-_982211B1-5246-49CD-BE85-3211F71253CF" dmnElementRef="_982211B1-5246-49CD-BE85-3211F71253CF">
        <di:waypoint x="419" y="369"/>
        <di:waypoint x="600.5" y="114.5"/>
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="dmnedge-_AEC4AA5F-50C3-4FED-A0C2-261F90290731" dmnElementRef="_AEC4AA5F-50C3-4FED-A0C2-261F90290731">
        <di:waypoint x="759" y="235"/>
        <di:waypoint x="600.5" y="114.5"/>
      </dmndi:DMNEdge>
    </dmndi:DMNDiagram>
  </dmndi:DMNDI>
</dmn:definitions>`,O6=`# Packaging
server.address=0.0.0.0
org.kie.dmn.runtime.typecheck=true`,L6=`package com.example;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.test.annotation.DirtiesContext;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.is;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT, classes = KogitoSpringbootApplication.class)
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
public class TrafficViolationTest {

    @LocalServerPort
    private int port;

    @BeforeEach
    public void setUp() {
        RestAssured.port = port;
    }

    @Test
    public void testEvaluateTrafficViolation() {
        given()
                .body("{\\n" +
                        "    \\"Driver\\": {\\n" +
                        "        \\"Points\\": 2\\n" +
                        "    },\\n" +
                        "    \\"Violation\\": {\\n" +
                        "        \\"Type\\": \\"speed\\",\\n" +
                        "        \\"Actual Speed\\": 120,\\n" +
                        "        \\"Speed Limit\\": 100\\n" +
                        "    }\\n" +
                        "}")
                .contentType(ContentType.JSON)
                .when()
                .post("/Traffic Violation")
                .then()
                .statusCode(200)
                .body("'Should the driver be suspended?'", is("No"));
    }
}
`,j6=`package testscenario;

/**
 * KogitoJunitActivator is a custom JUnit runner that enables the execution of Test Scenario files (*.scesim).
 * This activator class, when executed, will load all scesim files available in the project and run them.
 * Each row of the scenario will generate a test JUnit result.
 */
@org.junit.runner.RunWith(org.kogito.scenariosimulation.runner.KogitoJunitActivator.class)
public class KogitoScenarioJunitActivatorTest {

}`,V6=`<?xml version="1.0" encoding="UTF-8"?>
<ScenarioSimulationModel version="1.8">
  <simulation>
    <scesimModelDescriptor>
      <factMappings>
        <FactMapping>
          <expressionElements/>
          <expressionIdentifier>
            <name>Index</name>
            <type>OTHER</type>
          </expressionIdentifier>
          <factIdentifier>
            <name>#</name>
            <className>java.lang.Integer</className>
          </factIdentifier>
          <className>java.lang.Integer</className>
          <factAlias>#</factAlias>
          <columnWidth>70</columnWidth>
          <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        </FactMapping>
        <FactMapping>
          <expressionElements/>
          <expressionIdentifier>
            <name>Description</name>
            <type>OTHER</type>
          </expressionIdentifier>
          <factIdentifier>
            <name>Scenario description</name>
            <className>java.lang.String</className>
          </factIdentifier>
          <className>java.lang.String</className>
          <factAlias>Scenario description</factAlias>
          <columnWidth>300</columnWidth>
          <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        </FactMapping>
        <FactMapping>
          <expressionElements>
            <ExpressionElement>
              <step>Driver</step>
            </ExpressionElement>
            <ExpressionElement>
              <step>Points</step>
            </ExpressionElement>
          </expressionElements>
          <expressionIdentifier>
            <name>1|5</name>
            <type>GIVEN</type>
          </expressionIdentifier>
          <factIdentifier>
            <name>Driver</name>
            <className>Driver</className>
          </factIdentifier>
          <className>number</className>
          <factAlias>Driver</factAlias>
          <expressionAlias>Points</expressionAlias>
          <genericTypes/>
          <columnWidth>114</columnWidth>
          <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        </FactMapping>
        <FactMapping>
          <expressionElements>
            <ExpressionElement>
              <step>Violation</step>
            </ExpressionElement>
            <ExpressionElement>
              <step>Type</step>
            </ExpressionElement>
          </expressionElements>
          <expressionIdentifier>
            <name>1|8</name>
            <type>GIVEN</type>
          </expressionIdentifier>
          <factIdentifier>
            <name>Violation</name>
            <className>Violation</className>
          </factIdentifier>
          <className>Type</className>
          <factAlias>Violation</factAlias>
          <expressionAlias>Type</expressionAlias>
          <genericTypes/>
          <columnWidth>114</columnWidth>
          <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        </FactMapping>
        <FactMapping>
          <expressionElements>
            <ExpressionElement>
              <step>Violation</step>
            </ExpressionElement>
            <ExpressionElement>
              <step>Speed Limit</step>
            </ExpressionElement>
          </expressionElements>
          <expressionIdentifier>
            <name>1|9</name>
            <type>GIVEN</type>
          </expressionIdentifier>
          <factIdentifier>
            <name>Violation</name>
            <className>Violation</className>
          </factIdentifier>
          <className>number</className>
          <factAlias>Violation</factAlias>
          <expressionAlias>Speed Limit</expressionAlias>
          <genericTypes/>
          <columnWidth>114</columnWidth>
          <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        </FactMapping>
        <FactMapping>
          <expressionElements>
            <ExpressionElement>
              <step>Violation</step>
            </ExpressionElement>
            <ExpressionElement>
              <step>Actual Speed</step>
            </ExpressionElement>
          </expressionElements>
          <expressionIdentifier>
            <name>1|10</name>
            <type>GIVEN</type>
          </expressionIdentifier>
          <factIdentifier>
            <name>Violation</name>
            <className>Violation</className>
          </factIdentifier>
          <className>number</className>
          <factAlias>Violation</factAlias>
          <expressionAlias>Actual Speed</expressionAlias>
          <genericTypes/>
          <columnWidth>114</columnWidth>
          <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        </FactMapping>
        <FactMapping>
          <expressionElements>
            <ExpressionElement>
              <step>Fine</step>
            </ExpressionElement>
            <ExpressionElement>
              <step>Amount</step>
            </ExpressionElement>
          </expressionElements>
          <expressionIdentifier>
            <name>1|11</name>
            <type>EXPECT</type>
          </expressionIdentifier>
          <factIdentifier>
            <name>Fine</name>
            <className>Fine</className>
          </factIdentifier>
          <className>number</className>
          <factAlias>Fine</factAlias>
          <expressionAlias>Amount</expressionAlias>
          <genericTypes/>
          <columnWidth>114</columnWidth>
          <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        </FactMapping>
        <FactMapping>
          <expressionElements>
            <ExpressionElement>
              <step>Fine</step>
            </ExpressionElement>
            <ExpressionElement>
              <step>Points</step>
            </ExpressionElement>
          </expressionElements>
          <expressionIdentifier>
            <name>1|12</name>
            <type>EXPECT</type>
          </expressionIdentifier>
          <factIdentifier>
            <name>Fine</name>
            <className>Fine</className>
          </factIdentifier>
          <className>number</className>
          <factAlias>Fine</factAlias>
          <expressionAlias>Points</expressionAlias>
          <genericTypes/>
          <columnWidth>114</columnWidth>
          <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        </FactMapping>
        <FactMapping>
          <expressionElements>
            <ExpressionElement>
              <step>Should the driver be suspended?</step>
            </ExpressionElement>
          </expressionElements>
          <expressionIdentifier>
            <name>1|13</name>
            <type>EXPECT</type>
          </expressionIdentifier>
          <factIdentifier>
            <name>Should the driver be suspended?</name>
            <className>Should the driver be suspended?</className>
          </factIdentifier>
          <className>string</className>
          <factAlias>Should the driver be suspended?</factAlias>
          <expressionAlias>value</expressionAlias>
          <genericTypes/>
          <columnWidth>114</columnWidth>
          <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        </FactMapping>
      </factMappings>
    </scesimModelDescriptor>
    <scesimData>
      <Scenario>
        <factMappingValues>
          <FactMappingValue>
            <factIdentifier>
              <name>Scenario description</name>
              <className>java.lang.String</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>Description</name>
              <type>OTHER</type>
            </expressionIdentifier>
            <rawValue class="string">Above speed limit: 10km/h and 30 km/h</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Driver</name>
              <className>Driver</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|5</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">10</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|8</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">"speed"</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|9</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">100</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|10</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">120</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Fine</name>
              <className>Fine</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|11</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">500</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Fine</name>
              <className>Fine</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|12</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">3</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Should the driver be suspended?</name>
              <className>Should the driver be suspended?</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|13</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">"No"</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>#</name>
              <className>java.lang.Integer</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>Index</name>
              <type>OTHER</type>
            </expressionIdentifier>
            <rawValue class="string">1</rawValue>
          </FactMappingValue>
        </factMappingValues>
      </Scenario>
      <Scenario>
        <factMappingValues>
          <FactMappingValue>
            <factIdentifier>
              <name>Scenario description</name>
              <className>java.lang.String</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>Description</name>
              <type>OTHER</type>
            </expressionIdentifier>
            <rawValue class="string">Above speed limit: more than 30 km/h</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Driver</name>
              <className>Driver</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|5</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">10</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|8</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">"speed"</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|9</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">100</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|10</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">150</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Fine</name>
              <className>Fine</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|11</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">1000</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Fine</name>
              <className>Fine</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|12</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">7</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Should the driver be suspended?</name>
              <className>Should the driver be suspended?</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|13</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">"No"</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>#</name>
              <className>java.lang.Integer</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>Index</name>
              <type>OTHER</type>
            </expressionIdentifier>
            <rawValue class="string">2</rawValue>
          </FactMappingValue>
        </factMappingValues>
      </Scenario>
      <Scenario>
        <factMappingValues>
          <FactMappingValue>
            <factIdentifier>
              <name>Scenario description</name>
              <className>java.lang.String</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>Description</name>
              <type>OTHER</type>
            </expressionIdentifier>
            <rawValue class="string">Parking violation</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Driver</name>
              <className>Driver</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|5</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">10</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|8</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">"parking"</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|9</name>
              <type>GIVEN</type>
            </expressionIdentifier>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|10</name>
              <type>GIVEN</type>
            </expressionIdentifier>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Fine</name>
              <className>Fine</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|11</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">100</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Fine</name>
              <className>Fine</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|12</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">1</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Should the driver be suspended?</name>
              <className>Should the driver be suspended?</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|13</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">"No"</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>#</name>
              <className>java.lang.Integer</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>Index</name>
              <type>OTHER</type>
            </expressionIdentifier>
            <rawValue class="string">3</rawValue>
          </FactMappingValue>
        </factMappingValues>
      </Scenario>
      <Scenario>
        <factMappingValues>
          <FactMappingValue>
            <factIdentifier>
              <name>Scenario description</name>
              <className>java.lang.String</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>Description</name>
              <type>OTHER</type>
            </expressionIdentifier>
            <rawValue class="string">DUI violation</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Driver</name>
              <className>Driver</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|5</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">10</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|8</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">"driving under the influence"</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|9</name>
              <type>GIVEN</type>
            </expressionIdentifier>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|10</name>
              <type>GIVEN</type>
            </expressionIdentifier>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Fine</name>
              <className>Fine</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|11</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">1000</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Fine</name>
              <className>Fine</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|12</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">5</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Should the driver be suspended?</name>
              <className>Should the driver be suspended?</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|13</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">"No"</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>#</name>
              <className>java.lang.Integer</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>Index</name>
              <type>OTHER</type>
            </expressionIdentifier>
            <rawValue class="string">4</rawValue>
          </FactMappingValue>
        </factMappingValues>
      </Scenario>
      <Scenario>
        <factMappingValues>
          <FactMappingValue>
            <factIdentifier>
              <name>Scenario description</name>
              <className>java.lang.String</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>Description</name>
              <type>OTHER</type>
            </expressionIdentifier>
            <rawValue class="string">Driver suspended</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Driver</name>
              <className>Driver</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|5</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">15</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|8</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">"speed"</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|9</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">100</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Violation</name>
              <className>Violation</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|10</name>
              <type>GIVEN</type>
            </expressionIdentifier>
            <rawValue class="string">140</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Fine</name>
              <className>Fine</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|11</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">1000</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Fine</name>
              <className>Fine</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|12</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">7</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>Should the driver be suspended?</name>
              <className>Should the driver be suspended?</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|13</name>
              <type>EXPECT</type>
            </expressionIdentifier>
            <rawValue class="string">"Yes"</rawValue>
          </FactMappingValue>
          <FactMappingValue>
            <factIdentifier>
              <name>#</name>
              <className>java.lang.Integer</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>Index</name>
              <type>OTHER</type>
            </expressionIdentifier>
            <rawValue class="string">5</rawValue>
          </FactMappingValue>
        </factMappingValues>
      </Scenario>
    </scesimData>
  </simulation>
  <background>
    <scesimModelDescriptor>
      <factMappings>
        <FactMapping>
          <expressionElements/>
          <expressionIdentifier>
            <name>1|1</name>
            <type>GIVEN</type>
          </expressionIdentifier>
          <factIdentifier>
            <name>Empty</name>
            <className>java.lang.Void</className>
          </factIdentifier>
          <className>java.lang.Void</className>
          <factAlias>INSTANCE 1</factAlias>
          <expressionAlias>PROPERTY 1</expressionAlias>
          <columnWidth>114</columnWidth>
          <factMappingValueType>NOT_EXPRESSION</factMappingValueType>
        </FactMapping>
      </factMappings>
    </scesimModelDescriptor>
    <scesimData>
      <BackgroundData>
        <factMappingValues>
          <FactMappingValue>
            <factIdentifier>
              <name>Empty</name>
              <className>java.lang.Void</className>
            </factIdentifier>
            <expressionIdentifier>
              <name>1|1</name>
              <type>GIVEN</type>
            </expressionIdentifier>
          </FactMappingValue>
        </factMappingValues>
      </BackgroundData>
    </scesimData>
  </background>
  <settings>
    <dmnFilePath>../../main/resources/Traffic Violation.dmn</dmnFilePath>
    <type>DMN</type>
    <dmnNamespace>https://github.com/kiegroup/drools/kie-dmn/_A4BCA8B8-CF08-433F-93B2-A2598F19ECFF</dmnNamespace>
    <dmnName>Traffic Violation</dmnName>
    <skipFromBuild>false</skipFromBuild>
    <stateless>false</stateless>
  </settings>
  <imports>
    <imports/>
  </imports>
</ScenarioSimulationModel>`,z6=`# DMN + Quarkus example

## Description

A simple DMN service to evaluate a traffic violation and a model with input constraints.

The org.kie.dmn.runtime.typecheck=true property is used to enable type and value check.

Demonstrates DMN on Kogito capabilities, including REST interface code generation.

## Installing and Running

### Prerequisites

You will need:
  - Java 17 installed
  - Environment variable JAVA_HOME set accordingly
  - Maven 3.9.6 installed

When using native image compilation, you will also need:
  - [GraalVM 19.3.1](https://github.com/oracle/graal/releases/tag/vm-19.3.1) installed
  - Environment variable GRAALVM_HOME set accordingly
  - Note that GraalVM native image compilation typically requires other packages (glibc-devel, zlib-devel and gcc) to be installed too.  You also need 'native-image' installed in GraalVM (using 'gu install native-image'). Please refer to [GraalVM installation documentation](https://www.graalvm.org/docs/reference-manual/aot-compilation/#prerequisites) for more details.

### Compile and Run in Local Dev Mode

\`\`\`
mvn clean quarkus:dev
\`\`\`

### Package and Run in JVM mode

\`\`\`
mvn clean package
java -jar target/quarkus-app/quarkus-run.jar
\`\`\`

or on Windows

\`\`\`
mvn clean package
java -jar target\\quarkus-app\\quarkus-run.jar
\`\`\`

### Package and Run using Local Native Image
Note that this requires GRAALVM_HOME to point to a valid GraalVM installation

\`\`\`
mvn clean package -Pnative
\`\`\`

To run the generated native executable, generated in \`target/\`, execute

\`\`\`
./target/{{artifact}}-runner
\`\`\`

Note: This does not yet work on Windows, GraalVM and Quarkus should be rolling out support for Windows soon.

## OpenAPI (Swagger) documentation
[Specification at swagger.io](https://swagger.io/docs/specification/about/)

You can take a look at the [OpenAPI definition](http://localhost:8080/openapi?format=json) - automatically generated and included in this service - to determine all available operations exposed by this service. For easy readability you can visualize the OpenAPI definition file using a UI tool like for example available [Swagger UI](https://editor.swagger.io).

In addition, various clients to interact with this service can be easily generated using this OpenAPI definition.

When running in either Quarkus Development or Native mode, we also leverage the [Quarkus OpenAPI extension](https://quarkus.io/guides/openapi-swaggerui#use-swagger-ui-for-development) that exposes [Swagger UI](http://localhost:8080/swagger-ui/) that you can use to look at available REST endpoints and send test requests.

## Test DMN Model using Maven

Validate the functionality of DMN models before deploying them into a production environment by defining test scenarios in Test Scenario Editor. 

To define test scenarios you need to create a .scesim file inside your project and link it to the DMN model you want to be tested. Run all Test Scenarios, executing:

\`\`\`sh
mvn clean test
\`\`\`
See results in surefire test report \`target/surefire-reports\` 

## Example Usage

Once the service is up and running, you can use the following example to interact with the service.

### POST /Traffic Violation

Returns penalty information from the given inputs -- driver and violation:

Given inputs:

\`\`\`json
{
    "Driver":{"Points":2},
    "Violation":{
        "Type":"speed",
        "Actual Speed":120,
        "Speed Limit":100
    }
}
\`\`\`

Curl command (using the JSON object above):

\`\`\`sh
curl -X POST -H 'Accept: application/json' -H 'Content-Type: application/json' -d '{"Driver":{"Points":2},"Violation":{"Type":"speed","Actual Speed":120,"Speed Limit":100}}' http://localhost:8080/Traffic%20Violation
\`\`\`
or on Windows:

\`\`\`sh
curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -d "{\\"Driver\\":{\\"Points\\":2},\\"Violation\\":{\\"Type\\":\\"speed\\",\\"Actual Speed\\":120,\\"Speed Limit\\":100}}" http://localhost:8080/Traffic%20Violation
\`\`\`

As response, penalty information is returned.

Example response:

\`\`\`json
{
  "Violation":{
    "Type":"speed",
    "Speed Limit":100,
    "Actual Speed":120
  },
  "Driver":{
    "Points":2
  },
  "Fine":{
    "Points":3,
    "Amount":500
  },
  "Should the driver be suspended?":"No"
}
\`\`\`

`,$6=`<?xml version="1.0" encoding="UTF-8"?>
<project xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" xmlns="http://maven.apache.org/POM/4.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <modelVersion>4.0.0</modelVersion>

  <groupId>{{group}}</groupId>
  <artifactId>{{artifact}}</artifactId>
  <version>{{version}}</version>
  <name>Decision Service by Aletyx Start</name>

  <properties>
    <maven.compiler.source>17</maven.compiler.source>
    <maven.compiler.target>17</maven.compiler.target>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <quarkus-plugin.version>{{platformVersion}}</quarkus-plugin.version>
    <quarkus.platform.artifact-id>quarkus-bom</quarkus.platform.artifact-id>
    <quarkus.platform.group-id>io.quarkus</quarkus.platform.group-id>
    <quarkus.platform.version>{{platformVersion}}</quarkus.platform.version>
    <kogito.bom.group-id>ai.aletyx</kogito.bom.group-id>
    <kogito.bom.artifact-id>aletyx-automation-bom</kogito.bom.artifact-id>
    <kogito.bom.version>{{targetVersion}}</kogito.bom.version>
    <version.org.kie.kogito>{{targetVersion}}</version.org.kie.kogito>
  </properties>

  <dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>\${quarkus.platform.group-id}</groupId>
        <artifactId>\${quarkus.platform.artifact-id}</artifactId>
        <version>\${quarkus.platform.version}</version>
        <type>pom</type>
        <scope>import</scope>
      </dependency>
      <dependency>
        <groupId>\${kogito.bom.group-id}</groupId>
        <artifactId>\${kogito.bom.artifact-id}</artifactId>
        <version>\${kogito.bom.version}</version>
        <type>pom</type>
        <scope>import</scope>
      </dependency>
    </dependencies>
  </dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>org.drools</groupId>
      <artifactId>drools-quarkus-decisions</artifactId>
    </dependency>
    <dependency>
      <groupId>io.quarkus</groupId>
      <artifactId>quarkus-resteasy</artifactId>
    </dependency>
    <dependency>
      <groupId>io.quarkus</groupId>
      <artifactId>quarkus-arc</artifactId>
    </dependency>
    <dependency>
      <groupId>io.quarkus</groupId>
      <artifactId>quarkus-resteasy-jackson</artifactId>
    </dependency>
    <dependency>
      <groupId>io.quarkus</groupId>
      <artifactId>quarkus-smallrye-openapi</artifactId>
    </dependency>
    <dependency>
      <groupId>io.quarkus</groupId>
      <artifactId>quarkus-junit5</artifactId>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>io.rest-assured</groupId>
      <artifactId>rest-assured</artifactId>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.kie.kogito</groupId>
      <artifactId>kogito-scenario-simulation</artifactId>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>io.quarkus</groupId>
      <artifactId>quarkus-smallrye-health</artifactId>
    </dependency>
  </dependencies>
  <build>
    <finalName>\${project.artifactId}</finalName>
    <plugins>
      <plugin>
        <groupId>\${quarkus.platform.group-id}</groupId>
        <artifactId>quarkus-maven-plugin</artifactId>
        <version>\${quarkus-plugin.version}</version>
        <executions>
          <execution>
            <goals>
              <goal>build</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>
</project>
`,U6=`<?xml version='1.0' encoding='UTF-8'?>
<dmn:definitions xmlns:dmn="http://www.omg.org/spec/DMN/20180521/MODEL/" xmlns="https://github.com/kiegroup/drools/kie-dmn/_A4BCA8B8-CF08-433F-93B2-A2598F19ECFF" xmlns:di="http://www.omg.org/spec/DMN/20180521/DI/" xmlns:kie="http://www.drools.org/kie/dmn/1.2" xmlns:feel="http://www.omg.org/spec/DMN/20180521/FEEL/" xmlns:dmndi="http://www.omg.org/spec/DMN/20180521/DMNDI/" xmlns:dc="http://www.omg.org/spec/DMN/20180521/DC/" id="_1C792953-80DB-4B32-99EB-25FBE32BAF9E" name="Traffic Violation" expressionLanguage="http://www.omg.org/spec/DMN/20180521/FEEL/" typeLanguage="http://www.omg.org/spec/DMN/20180521/FEEL/" namespace="https://github.com/kiegroup/drools/kie-dmn/_A4BCA8B8-CF08-433F-93B2-A2598F19ECFF">
  <dmn:extensionElements/>
  <dmn:itemDefinition id="_63824D3F-9173-446D-A940-6A7F0FA056BB" name="tDriver" isCollection="false">
    <dmn:itemComponent id="_9DAB5DAA-3B44-4F6D-87F2-95125FB2FEE4" name="Name" isCollection="false">
      <dmn:typeRef>string</dmn:typeRef>
    </dmn:itemComponent>
    <dmn:itemComponent id="_856BA8FA-EF7B-4DF9-A1EE-E28263CE9955" name="Age" isCollection="false">
      <dmn:typeRef>number</dmn:typeRef>
    </dmn:itemComponent>
    <dmn:itemComponent id="_FDC2CE03-D465-47C2-A311-98944E8CC23F" name="State" isCollection="false">
      <dmn:typeRef>string</dmn:typeRef>
    </dmn:itemComponent>
    <dmn:itemComponent id="_D6FD34C4-00DC-4C79-B1BF-BBCF6FC9B6D7" name="City" isCollection="false">
      <dmn:typeRef>string</dmn:typeRef>
    </dmn:itemComponent>
    <dmn:itemComponent id="_7110FE7E-1A38-4C39-B0EB-AEEF06BA37F4" name="Points" isCollection="false">
      <dmn:typeRef>number</dmn:typeRef>
    </dmn:itemComponent>
  </dmn:itemDefinition>
  <dmn:itemDefinition id="_40731093-0642-4588-9183-1660FC55053B" name="tViolation" isCollection="false">
    <dmn:itemComponent id="_39E88D9F-AE53-47AD-B3DE-8AB38D4F50B3" name="Code" isCollection="false">
      <dmn:typeRef>string</dmn:typeRef>
    </dmn:itemComponent>
    <dmn:itemComponent id="_1648EA0A-2463-4B54-A12A-D743A3E3EE7B" name="Date" isCollection="false">
      <dmn:typeRef>date</dmn:typeRef>
    </dmn:itemComponent>
    <dmn:itemComponent id="_9F129EAA-4E71-4D99-B6D0-84EEC3AC43CC" name="Type" isCollection="false">
      <dmn:typeRef>string</dmn:typeRef>
      <dmn:allowedValues kie:constraintType="enumeration" id="_626A8F9C-9DD1-44E0-9568-0F6F8F8BA228">
        <dmn:text>"speed", "parking", "driving under the influence"</dmn:text>
      </dmn:allowedValues>
    </dmn:itemComponent>
    <dmn:itemComponent id="_DDD10D6E-BD38-4C79-9E2F-8155E3A4B438" name="Speed Limit" isCollection="false">
      <dmn:typeRef>number</dmn:typeRef>
    </dmn:itemComponent>
    <dmn:itemComponent id="_229F80E4-2892-494C-B70D-683ABF2345F6" name="Actual Speed" isCollection="false">
      <dmn:typeRef>number</dmn:typeRef>
    </dmn:itemComponent>
  </dmn:itemDefinition>
  <dmn:itemDefinition id="_2D4F30EE-21A6-4A78-A524-A5C238D433AE" name="tFine" isCollection="false">
    <dmn:itemComponent id="_B9F70BC7-1995-4F51-B949-1AB65538B405" name="Amount" isCollection="false">
      <dmn:typeRef>number</dmn:typeRef>
    </dmn:itemComponent>
    <dmn:itemComponent id="_F49085D6-8F08-4463-9A1A-EF6B57635DBD" name="Points" isCollection="false">
      <dmn:typeRef>number</dmn:typeRef>
    </dmn:itemComponent>
  </dmn:itemDefinition>
  <dmn:inputData id="_1929CBD5-40E0-442D-B909-49CEDE0101DC" name="Violation">
    <dmn:variable id="_C16CF9B1-5FAB-48A0-95E0-5FCD661E0406" name="Violation" typeRef="tViolation"/>
  </dmn:inputData>
  <dmn:decision id="_4055D956-1C47-479C-B3F4-BAEB61F1C929" name="Fine">
    <dmn:variable id="_8C1EAC83-F251-4D94-8A9E-B03ACF6849CD" name="Fine" typeRef="tFine"/>
    <dmn:informationRequirement id="_800A3BBB-90A3-4D9D-BA5E-A311DED0134F">
      <dmn:requiredInput href="#_1929CBD5-40E0-442D-B909-49CEDE0101DC"/>
    </dmn:informationRequirement>
    <dmn:decisionTable id="_C8F7F579-E06C-4A2F-8485-65FAFAC3FE6A" hitPolicy="UNIQUE" preferredOrientation="Rule-as-Row">
      <dmn:input id="_B53A6F0D-F72C-41EF-96B3-F31269AC0FED">
        <dmn:inputExpression id="_974C8D01-728F-4CE5-8C69-BE884125B859" typeRef="string">
          <dmn:text>Violation.Type</dmn:text>
        </dmn:inputExpression>
      </dmn:input>
      <dmn:input id="_D5319F80-1C59-4736-AF2D-D29DE6B7E76D">
        <dmn:inputExpression id="_3FEB4DE3-90C6-438E-99BF-9BB1BF5B078A" typeRef="number">
          <dmn:text>Violation.Actual Speed - Violation.Speed Limit</dmn:text>
        </dmn:inputExpression>
      </dmn:input>
      <dmn:output id="_9012031F-9C01-44E5-8CD2-E6704D594504" name="Amount" typeRef="number"/>
      <dmn:output id="_7CAC8240-E1A5-4FEB-A0D4-B8613F0DE54B" name="Points" typeRef="number"/>
      <dmn:rule id="_424A80AE-916F-4451-9B6B-71557F7EC65A">
        <dmn:inputEntry id="_EDA4F336-AA28-4F5F-ADFC-401E6DCC8D35">
          <dmn:text>"speed"</dmn:text>
        </dmn:inputEntry>
        <dmn:inputEntry id="_246AAB08-A945-4599-9220-7C24B6716FDD">
          <dmn:text>[10..30)</dmn:text>
        </dmn:inputEntry>
        <dmn:outputEntry id="_E49345EE-51D3-47C7-B658-3607E723FF37">
          <dmn:text>500</dmn:text>
        </dmn:outputEntry>
        <dmn:outputEntry id="_1D56F3CB-6BAE-4415-940F-00F37121813D">
          <dmn:text>3</dmn:text>
        </dmn:outputEntry>
      </dmn:rule>
      <dmn:rule id="_B1ECE6A9-6B82-4A85-A7CA-5F96CDB0DCB6">
        <dmn:inputEntry id="_2390F686-65CF-40FF-BF9A-72DFBAEBACAC">
          <dmn:text>"speed"</dmn:text>
        </dmn:inputEntry>
        <dmn:inputEntry id="_8CEBE4D5-DBEF-46EF-BD95-7B96148B6D8A">
          <dmn:text>&gt;= 30</dmn:text>
        </dmn:inputEntry>
        <dmn:outputEntry id="_5FCC56B7-6BAA-4B09-AC61-7EB9D4CD58C3">
          <dmn:text>1000</dmn:text>
        </dmn:outputEntry>
        <dmn:outputEntry id="_79FF8FDD-3299-4DFD-AA14-D2022504BDAD">
          <dmn:text>7</dmn:text>
        </dmn:outputEntry>
      </dmn:rule>
      <dmn:rule id="_8FC7068C-A3FD-44D9-AC2B-69C160A12E5D">
        <dmn:inputEntry id="_02EEE8A9-1AD7-4708-8EC8-9B4177B05167">
          <dmn:text>"parking"</dmn:text>
        </dmn:inputEntry>
        <dmn:inputEntry id="_A5141FF4-8D63-49DB-8979-3B64A3BD9A82">
          <dmn:text>-</dmn:text>
        </dmn:inputEntry>
        <dmn:outputEntry id="_EFDA632D-113D-46C9-94B8-78E9F9770CA4">
          <dmn:text>100</dmn:text>
        </dmn:outputEntry>
        <dmn:outputEntry id="_05F86973-52CE-4C9D-B785-47B6340D10FD">
          <dmn:text>1</dmn:text>
        </dmn:outputEntry>
      </dmn:rule>
      <dmn:rule id="_A742DF2B-DC91-4166-9773-6EF86A45A625">
        <dmn:inputEntry id="_F5B5AE87-D9E6-4142-B01D-D79D4BA49EEE">
          <dmn:text>"driving under the influence"</dmn:text>
        </dmn:inputEntry>
        <dmn:inputEntry id="_BD2A43F5-46D8-436A-B8A1-D98747C836B1">
          <dmn:text>-</dmn:text>
        </dmn:inputEntry>
        <dmn:outputEntry id="_ECAF3378-46B6-4F40-B95A-E90DB700BF7D">
          <dmn:text>1000</dmn:text>
        </dmn:outputEntry>
        <dmn:outputEntry id="_F0016A9C-D1D0-472A-9FB3-ABE77AD15F7D">
          <dmn:text>5</dmn:text>
        </dmn:outputEntry>
      </dmn:rule>
    </dmn:decisionTable>
  </dmn:decision>
  <dmn:inputData id="_1F9350D7-146D-46F1-85D8-15B5B68AF22A" name="Driver">
    <dmn:variable id="_A80F16DF-0DB4-43A2-B041-32900B1A3F3D" name="Driver" typeRef="tDriver"/>
  </dmn:inputData>
  <dmn:decision id="_8A408366-D8E9-4626-ABF3-5F69AA01F880" name="Should the driver be suspended?">
    <dmn:question>Should the driver be suspended due to points on his license?</dmn:question>
    <dmn:allowedAnswers>"Yes", "No"</dmn:allowedAnswers>
    <dmn:variable id="_40387B66-5D00-48C8-BB90-E83EE3332C72" name="Should the driver be suspended?" typeRef="string"/>
    <dmn:informationRequirement id="_982211B1-5246-49CD-BE85-3211F71253CF">
      <dmn:requiredInput href="#_1F9350D7-146D-46F1-85D8-15B5B68AF22A"/>
    </dmn:informationRequirement>
    <dmn:informationRequirement id="_AEC4AA5F-50C3-4FED-A0C2-261F90290731">
      <dmn:requiredDecision href="#_4055D956-1C47-479C-B3F4-BAEB61F1C929"/>
    </dmn:informationRequirement>
    <dmn:context id="_F39732F1-0AA7-468F-86C4-DCC07E6F81CF">
      <dmn:contextEntry>
        <dmn:variable id="_09385E8D-68E0-4DFD-AAD8-141C15C96B71" name="Total Points" typeRef="number"/>
        <dmn:literalExpression id="_F1BEBF16-033F-4A25-9523-CAC23ACC5DFC">
          <dmn:text>Driver.Points + Fine.Points</dmn:text>
        </dmn:literalExpression>
      </dmn:contextEntry>
      <dmn:contextEntry>
        <dmn:literalExpression id="_1929D813-B1C9-43C5-9497-CE5D8B2B040C">
          <dmn:text>if Total Points >= 20 then "Yes" else "No"</dmn:text>
        </dmn:literalExpression>
      </dmn:contextEntry>
    </dmn:context>
  </dmn:decision>
  <dmndi:DMNDI>
    <dmndi:DMNDiagram>
      <di:extension>
        <kie:ComponentsWidthsExtension>
          <kie:ComponentWidths dmnElementRef="_C8F7F579-E06C-4A2F-8485-65FAFAC3FE6A">
            <kie:width>50.0</kie:width>
            <kie:width>254.0</kie:width>
            <kie:width>329.0</kie:width>
            <kie:width>119.0</kie:width>
            <kie:width>100.0</kie:width>
            <kie:width>186.0</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_F39732F1-0AA7-468F-86C4-DCC07E6F81CF">
            <kie:width>50.0</kie:width>
            <kie:width>100.0</kie:width>
            <kie:width>398.0</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_F1BEBF16-033F-4A25-9523-CAC23ACC5DFC">
            <kie:width>398.0</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_1929D813-B1C9-43C5-9497-CE5D8B2B040C">
            <kie:width>398.0</kie:width>
          </kie:ComponentWidths>
        </kie:ComponentsWidthsExtension>
      </di:extension>
      <dmndi:DMNShape id="dmnshape-_1929CBD5-40E0-442D-B909-49CEDE0101DC" dmnElementRef="_1929CBD5-40E0-442D-B909-49CEDE0101DC" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255"/>
          <dmndi:StrokeColor red="0" green="0" blue="0"/>
          <dmndi:FontColor red="0" green="0" blue="0"/>
        </dmndi:DMNStyle>
        <dc:Bounds x="708" y="350" width="100" height="50"/>
        <dmndi:DMNLabel/>
      </dmndi:DMNShape>
      <dmndi:DMNShape id="dmnshape-_4055D956-1C47-479C-B3F4-BAEB61F1C929" dmnElementRef="_4055D956-1C47-479C-B3F4-BAEB61F1C929" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255"/>
          <dmndi:StrokeColor red="0" green="0" blue="0"/>
          <dmndi:FontColor red="0" green="0" blue="0"/>
        </dmndi:DMNStyle>
        <dc:Bounds x="709" y="210" width="100" height="50"/>
        <dmndi:DMNLabel/>
      </dmndi:DMNShape>
      <dmndi:DMNShape id="dmnshape-_1F9350D7-146D-46F1-85D8-15B5B68AF22A" dmnElementRef="_1F9350D7-146D-46F1-85D8-15B5B68AF22A" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255"/>
          <dmndi:StrokeColor red="0" green="0" blue="0"/>
          <dmndi:FontColor red="0" green="0" blue="0"/>
        </dmndi:DMNStyle>
        <dc:Bounds x="369" y="344" width="100" height="50"/>
        <dmndi:DMNLabel/>
      </dmndi:DMNShape>
      <dmndi:DMNShape id="dmnshape-_8A408366-D8E9-4626-ABF3-5F69AA01F880" dmnElementRef="_8A408366-D8E9-4626-ABF3-5F69AA01F880" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255"/>
          <dmndi:StrokeColor red="0" green="0" blue="0"/>
          <dmndi:FontColor red="0" green="0" blue="0"/>
        </dmndi:DMNStyle>
        <dc:Bounds x="534" y="83" width="133" height="63"/>
        <dmndi:DMNLabel/>
      </dmndi:DMNShape>
      <dmndi:DMNEdge id="dmnedge-_800A3BBB-90A3-4D9D-BA5E-A311DED0134F" dmnElementRef="_800A3BBB-90A3-4D9D-BA5E-A311DED0134F">
        <di:waypoint x="758" y="375"/>
        <di:waypoint x="759" y="235"/>
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="dmnedge-_982211B1-5246-49CD-BE85-3211F71253CF" dmnElementRef="_982211B1-5246-49CD-BE85-3211F71253CF">
        <di:waypoint x="419" y="369"/>
        <di:waypoint x="600.5" y="114.5"/>
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="dmnedge-_AEC4AA5F-50C3-4FED-A0C2-261F90290731" dmnElementRef="_AEC4AA5F-50C3-4FED-A0C2-261F90290731">
        <di:waypoint x="759" y="235"/>
        <di:waypoint x="600.5" y="114.5"/>
      </dmndi:DMNEdge>
    </dmndi:DMNDiagram>
  </dmndi:DMNDI>
</dmn:definitions>`,W6=`# Packaging

quarkus.swagger-ui.always-include=true

org.kie.dmn.runtime.typecheck=true
quarkus.native.additional-build-args=--initialize-at-run-time=org.apache.hc.client5.http.impl.auth.NTLMEngineImpl
`,q6=`# Rules + Quarkus example

## Description

A simple rule service to validate \`LoanApplication\` fact.

An injectable KieRuntimeBuilder is generated, so you can create Drools v7 KieBase and KieSession out of it.

## Installing and Running

### Prerequisites

You will need:
- Java 17+ installed
- Environment variable JAVA_HOME set accordingly
- Maven 3.9.6+ installed

### Compile and Run in Local Dev Mode

\`\`\`sh
mvn clean compile quarkus:dev
\`\`\`

### Package and Run in JVM mode

\`\`\`sh
mvn clean package
java -jar target/quarkus-app/quarkus-run.jar
\`\`\`

or on windows

\`\`\`sh
mvn clean package
java -jar target\\quarkus-app\\quarkus-run.jar
\`\`\`

## Example Usage

Once the service is up and running, you can use the following examples to interact with the service.

### POST /find-approved

Returns approved loan applications from the given facts:

\`\`\`sh
curl -X POST -H 'Accept: application/json' -H 'Content-Type: application/json' -d '{"maxAmount":5000,"loanApplications":[{"id":"ABC10001","amount":2000,"deposit":100,"applicant":{"age":45,"name":"John"}}, {"id":"ABC10002","amount":5000,"deposit":100,"applicant":{"age":25,"name":"Paul"}}, {"id":"ABC10015","amount":1000,"deposit":100,"applicant":{"age":12,"name":"George"}}]}' http://localhost:8080/find-approved
\`\`\`
or on windows

\`\`\`sh
curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -d "{\\"maxAmount\\":5000,\\"loanApplications\\":[{\\"id\\":\\"ABC10001\\",\\"amount\\":2000,\\"deposit\\":100,\\"applicant\\":{\\"age\\":45,\\"name\\":\\"John\\"}}, {\\"id\\":\\"ABC10002\\",\\"amount\\":5000,\\"deposit\\":100,\\"applicant\\":{\\"age\\":25,\\"name\\":\\"Paul\\"}}, {\\"id\\":\\"ABC10015\\",\\"amount\\":1000,\\"deposit\\":100,\\"applicant\\":{\\"age\\":12,\\"name\\":\\"George\\"}}]}" http://localhost:8080/find-approved
\`\`\`

As response an array of loan applications is returned.

Example response:

\`\`\`json
[
  {
    "id":"ABC10001",
    "applicant":{
      "name":"John",
      "age":45
    },
    "amount":2000,
    "deposit":100,
    "approved":true
  }
]
\`\`\`
`,H6=`<?xml version="1.0" encoding="UTF-8"?>
  <project xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" xmlns="http://maven.apache.org/POM/4.0.0"
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

    <modelVersion>4.0.0</modelVersion>

    <groupId>{{group}}</groupId>
    <artifactId>{{artifact}}</artifactId>
    <version>{{version}}</version>
    <name>Rule Service by Aletyx Start</name>

    <properties>
      <maven.compiler.source>17</maven.compiler.source>
      <maven.compiler.target>17</maven.compiler.target>
      <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
      <quarkus.platform.artifact-id>quarkus-bom</quarkus.platform.artifact-id>
      <quarkus.platform.group-id>io.quarkus</quarkus.platform.group-id>
      <quarkus-plugin.version>{{platformVersion}}</quarkus-plugin.version>
      <quarkus.platform.version>{{platformVersion}}</quarkus.platform.version>
      <kogito.bom.group-id>{{bomGroupId}}</kogito.bom.group-id>
      <kogito.bom.artifact-id>{{bomArtifactId}}</kogito.bom.artifact-id>
      <kogito.bom.version>{{targetVersion}}</kogito.bom.version>
      <version.org.kie.kogito>{{targetVersion}}</version.org.kie.kogito>
    </properties>

    <dependencyManagement>
      <dependencies>
        <dependency>
          <groupId>\${quarkus.platform.group-id}</groupId>
          <artifactId>\${quarkus.platform.artifact-id}</artifactId>
          <version>\${quarkus.platform.version}</version>
          <type>pom</type>
          <scope>import</scope>
        </dependency>
        <dependency>
          <groupId>\${kogito.bom.group-id}</groupId>
          <artifactId>\${kogito.bom.artifact-id}</artifactId>
          <version>\${kogito.bom.version}</version>
          <type>pom</type>
          <scope>import</scope>
        </dependency>
      </dependencies>
    </dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>org.drools</groupId>
        <artifactId>drools-quarkus-rules</artifactId>
      </dependency>
      <dependency>
        <groupId>io.quarkus</groupId>
        <artifactId>quarkus-resteasy</artifactId>
      </dependency>
      <dependency>
        <groupId>io.quarkus</groupId>
        <artifactId>quarkus-resteasy-jackson</artifactId>
      </dependency>
      <dependency>
        <groupId>io.quarkus</groupId>
        <artifactId>quarkus-arc</artifactId>
      </dependency>
      <dependency>
        <groupId>io.quarkus</groupId>
        <artifactId>quarkus-junit5</artifactId>
        <scope>test</scope>
      </dependency>
      <dependency>
        <groupId>io.rest-assured</groupId>
        <artifactId>rest-assured</artifactId>
        <scope>test</scope>
      </dependency>
      <dependency>
        <groupId>io.quarkus</groupId>
        <artifactId>quarkus-smallrye-health</artifactId>
      </dependency>
    </dependencies>
    <build>
      <finalName>\${project.artifactId}</finalName>
      <plugins>
        <plugin>
          <groupId>\${quarkus.platform.group-id}</groupId>
          <artifactId>quarkus-maven-plugin</artifactId>
          <version>\${quarkus-plugin.version}</version>
          <executions>
            <execution>
              <goals>
                <goal>build</goal>
              </goals>
            </execution>
          </executions>
        </plugin>
      </plugins>
    </build>
  </project>
`,G6=`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd">

    <modelVersion>4.0.0</modelVersion>

    <groupId>{{group}}</groupId>
    <artifactId>{{artifact}}</artifactId>
    <version>{{version}}</version>
    <packaging>kjar</packaging>

    <name>Classic Ruleflow</name>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <maven.compiler.release>17</maven.compiler.release>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
        <kogito.bom.version>{{targetVersion}}</kogito.bom.version>
    </properties>

    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>ai.aletyx</groupId>
                <artifactId>aletyx-automation-bom</artifactId>
                <version>\${kogito.bom.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
            <dependency>
                <groupId>org.kie.kogito</groupId>
                <artifactId>jbpm-bpmn2</artifactId>
                <version>\${kogito.bom.version}</version>
            </dependency>
            <dependency>
                <groupId>org.junit.jupiter</groupId>
                <artifactId>junit-jupiter</artifactId>
                <version>5.10.0</version>
            </dependency>
        </dependencies>
    </dependencyManagement>

    <dependencies>
        <dependency>
            <groupId>org.drools</groupId>
            <artifactId>drools-engine-classic</artifactId>
        </dependency>
        <dependency>
            <groupId>org.drools</groupId>
            <artifactId>drools-model-compiler</artifactId>
        </dependency>
        <dependency>
            <groupId>org.drools</groupId>
            <artifactId>drools-ecj</artifactId>
        </dependency>
        <dependency>
            <groupId>org.kie.kogito</groupId>
            <artifactId>jbpm-bpmn2</artifactId>
        </dependency>
        <dependency>
            <groupId>org.kie</groupId>
            <artifactId>kie-api</artifactId>
        </dependency>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.kie</groupId>
                <artifactId>kie-maven-plugin</artifactId>
                <version>\${kogito.bom.version}</version>
                <extensions>true</extensions>
            </plugin>
        </plugins>
    </build>
</project>`,Z6=`package com.example.model;

public class Customer {
    private String customerId;
    private String customerType; // REGULAR, PREMIUM, VIP
    private int loyaltyPoints;
    private double creditLimit;
    private boolean blacklisted;
    private int orderCount;
    
    public Customer(String customerId, String customerType, int loyaltyPoints, 
                   double creditLimit, boolean blacklisted, int orderCount) {
        this.customerId = customerId;
        this.customerType = customerType;
        this.loyaltyPoints = loyaltyPoints;
        this.creditLimit = creditLimit;
        this.blacklisted = blacklisted;
        this.orderCount = orderCount;
    }
    
    public String getCustomerId() { return customerId; }
    public void setCustomerId(String customerId) { this.customerId = customerId; }
    
    public String getCustomerType() { return customerType; }
    public void setCustomerType(String customerType) { this.customerType = customerType; }
    
    public int getLoyaltyPoints() { return loyaltyPoints; }
    public void setLoyaltyPoints(int loyaltyPoints) { this.loyaltyPoints = loyaltyPoints; }
    
    public double getCreditLimit() { return creditLimit; }
    public void setCreditLimit(double creditLimit) { this.creditLimit = creditLimit; }
    
    public boolean isBlacklisted() { return blacklisted; }
    public void setBlacklisted(boolean blacklisted) { this.blacklisted = blacklisted; }
    
    public int getOrderCount() { return orderCount; }
    public void setOrderCount(int orderCount) { this.orderCount = orderCount; }
}
`,K6=`package com.example.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Order {
    private String orderId;
    private Customer customer;
    private List<OrderItem> items;
    private double totalAmount;
    private double discount;
    private double finalAmount;
    private String status; // PENDING, VALIDATED, PRICED, INVENTORY_CHECKED, APPROVED, REJECTED
    private String rejectionReason;
    private Date orderDate;
    private String shippingMethod; // STANDARD, EXPRESS, OVERNIGHT
    private double shippingCost;
    private String paymentMethod; // CREDIT_CARD, DEBIT_CARD, PAYPAL, WIRE
    private boolean rushOrder;
    private String validationStatus;
    private String pricingStatus;
    private String inventoryStatus;
    private String approvalStatus;
    private boolean shippingCalculated = false;
    private boolean loyaltyPointsAwarded = false;

    public Order(String orderId, Customer customer) {
        this.orderId = orderId;
        this.customer = customer;
        this.items = new ArrayList<>();
        this.orderDate = new Date();
        this.status = "PENDING";
    }
    
    public void addItem(OrderItem item) {
        this.items.add(item);
        recalculateTotal();
    }
    
    private void recalculateTotal() {
        this.totalAmount = items.stream()
            .mapToDouble(item -> item.getPrice() * item.getQuantity())
            .sum();
    }
    
    public String getOrderId() { return orderId; }
    public void setOrderId(String orderId) { this.orderId = orderId; }
    
    public Customer getCustomer() { return customer; }
    public void setCustomer(Customer customer) { this.customer = customer; }
    
    public List<OrderItem> getItems() { return items; }
    public void setItems(List<OrderItem> items) { 
        this.items = items;
        recalculateTotal();
    }
    
    public double getTotalAmount() { return totalAmount; }
    public void setTotalAmount(double totalAmount) { this.totalAmount = totalAmount; }
    
    public double getDiscount() { return discount; }
    public void setDiscount(double discount) { 
        this.discount = discount;
        this.finalAmount = this.totalAmount - discount + this.shippingCost;
    }
    
    public double getFinalAmount() { return finalAmount; }
    public void setFinalAmount(double finalAmount) { this.finalAmount = finalAmount; }
    
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    
    public String getRejectionReason() { return rejectionReason; }
    public void setRejectionReason(String rejectionReason) { this.rejectionReason = rejectionReason; }
    
    public Date getOrderDate() { return orderDate; }
    public void setOrderDate(Date orderDate) { this.orderDate = orderDate; }
    
    public String getShippingMethod() { return shippingMethod; }
    public void setShippingMethod(String shippingMethod) { this.shippingMethod = shippingMethod; }
    
    public double getShippingCost() { return shippingCost; }
    public void setShippingCost(double shippingCost) { 
        this.shippingCost = shippingCost;
        this.finalAmount = this.totalAmount - this.discount + shippingCost;
    }
    
    public String getPaymentMethod() { return paymentMethod; }
    public void setPaymentMethod(String paymentMethod) { this.paymentMethod = paymentMethod; }
    
    public boolean isRushOrder() { return rushOrder; }
    public void setRushOrder(boolean rushOrder) { this.rushOrder = rushOrder; }
    
    public String getValidationStatus() { return validationStatus; }
    public void setValidationStatus(String validationStatus) { this.validationStatus = validationStatus; }
    
    public String getPricingStatus() { return pricingStatus; }
    public void setPricingStatus(String pricingStatus) { this.pricingStatus = pricingStatus; }
    
    public String getInventoryStatus() { return inventoryStatus; }
    public void setInventoryStatus(String inventoryStatus) { this.inventoryStatus = inventoryStatus; }
    
    public String getApprovalStatus() { return approvalStatus; }
    public void setApprovalStatus(String approvalStatus) { this.approvalStatus = approvalStatus; }

    public boolean isShippingCalculated() { return shippingCalculated; }
    public void setShippingCalculated(boolean shippingCalculated) { this.shippingCalculated = shippingCalculated; }

    public boolean isLoyaltyPointsAwarded() { return loyaltyPointsAwarded; }
    public void setLoyaltyPointsAwarded(boolean loyaltyPointsAwarded) {
        this.loyaltyPointsAwarded = loyaltyPointsAwarded;
    }
}
`,Q6=`package com.example.model;

public class OrderItem {
    private String productId;
    private String productName;
    private String category; // ELECTRONICS, CLOTHING, FOOD, FURNITURE, BOOKS
    private int quantity;
    private double price;
    private boolean inStock;
    private int availableQuantity;
    private boolean hazardous;
    private boolean fragile;
    private double weight;
    
    public OrderItem(String productId, String productName, String category, 
                    int quantity, double price, int availableQuantity) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
        this.quantity = quantity;
        this.price = price;
        this.availableQuantity = availableQuantity;
        this.inStock = availableQuantity >= quantity;
    }
    
    public String getProductId() { return productId; }
    public void setProductId(String productId) { this.productId = productId; }
    
    public String getProductName() { return productName; }
    public void setProductName(String productName) { this.productName = productName; }
    
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    
    public int getQuantity() { return quantity; }
    public void setQuantity(int quantity) { this.quantity = quantity; }
    
    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }
    
    public boolean isInStock() { return inStock; }
    public void setInStock(boolean inStock) { this.inStock = inStock; }
    
    public int getAvailableQuantity() { return availableQuantity; }
    public void setAvailableQuantity(int availableQuantity) { 
        this.availableQuantity = availableQuantity;
        this.inStock = availableQuantity >= this.quantity;
    }
    
    public boolean isHazardous() { return hazardous; }
    public void setHazardous(boolean hazardous) { this.hazardous = hazardous; }
    
    public boolean isFragile() { return fragile; }
    public void setFragile(boolean fragile) { this.fragile = fragile; }
    
    public double getWeight() { return weight; }
    public void setWeight(double weight) { this.weight = weight; }
}
`,X6=`package com.example.model;

public class ProcessMetrics {
    private long startTime;
    private long endTime;
    private String currentNode;
    private int validationRulesExecuted;
    private int pricingRulesExecuted;
    private int inventoryRulesExecuted;
    private int approvalRulesExecuted;

    public ProcessMetrics() {
        this.startTime = System.currentTimeMillis();
    }
    
    public void incrementValidationRulesExecuted() {
        this.validationRulesExecuted++;
    }

    public void incrementPricingRulesExecuted() {
        this.pricingRulesExecuted++;
    }

    public void incrementInventoryRulesExecuted() {
        this.inventoryRulesExecuted++;
    }

    public void incrementApprovalRulesExecuted() {
        this.approvalRulesExecuted++;
    }
    
    public void complete() {
        this.endTime = System.currentTimeMillis();
    }
    
    public long getExecutionTime() {
        return endTime - startTime;
    }
    
    public long getStartTime() { return startTime; }
    public void setStartTime(long startTime) { this.startTime = startTime; }
    
    public long getEndTime() { return endTime; }
    public void setEndTime(long endTime) { this.endTime = endTime; }
    
    public int getRulesExecuted() { return validationRulesExecuted + pricingRulesExecuted + inventoryRulesExecuted + approvalRulesExecuted; }
    public int getValidationRulesExecuted() { return validationRulesExecuted; }
    public int getPricingRulesExecuted() { return pricingRulesExecuted; }
    public int getInventoryRulesExecuted() { return inventoryRulesExecuted; }
    public int getApprovalRulesExecuted() { return approvalRulesExecuted; }


    public String getCurrentNode() { return currentNode; }
    public void setCurrentNode(String currentNode) { this.currentNode = currentNode; }
}
`,Y6=`package com.example.orchestration;

import com.example.model.Customer;
import com.example.model.Order;
import com.example.model.ProcessMetrics;
import org.kie.api.KieServices;
import org.kie.api.runtime.KieSession;

public class StartProcessOrchestrationService {

    public void processOrder(Order order, Customer customer, ProcessMetrics metrics) {

        final KieSession session = newSession();
        try {
            session.insert(order);
            session.insert(customer);
            session.insert(metrics);
            session.startProcess("orchestration");
            session.fireAllRules();
        } finally {
            session.dispose();
        }
    }

    protected KieSession newSession() {
        return KieServices.get().getKieClasspathContainer().newKieSession();
    }
}
`,J6=`<?xml version="1.0" encoding="UTF-8"?>
<kmodule xmlns="http://www.drools.org/xsd/kmodule">
</kmodule>
`,eF=`package com.example.rules.approval;

import com.example.model.*;
import java.util.Date;

// NODE 4: FINAL APPROVAL RULES
// Rule Flow Group: final-approval

rule "Check Credit Limit"
    ruleflow-group "final-approval"
    when
        $metrics : ProcessMetrics()
        $order : Order((inventoryStatus == "AVAILABLE" || inventoryStatus == "RESERVED_RUSH"),
                      approvalStatus == null,
                      $customer : customer,
                      $finalAmount : finalAmount)
        Customer($customer.customerId == customerId, creditLimit < $finalAmount)
    then
        //System.out.println("Rule fired: Credit Limit Check Failed");
        $order.setApprovalStatus("REJECTED");
        $order.setStatus("REJECTED");
        $order.setRejectionReason("Exceeds customer credit limit");
        $metrics.incrementApprovalRulesExecuted();
        update($order);
end

rule "Auto Approve VIP Orders"
    ruleflow-group "final-approval"
    when
        $metrics : ProcessMetrics()
        $order : Order((inventoryStatus == "AVAILABLE" || inventoryStatus == "RESERVED_RUSH"),
                      approvalStatus == null,
                      $customer : customer,
                      $finalAmount : finalAmount)
        Customer($customer.customerId == customerId,
                 customerType == "VIP",
                 creditLimit >= $finalAmount)
    then
        //System.out.println("Rule fired: Auto-approve VIP Order");
        $order.setApprovalStatus("AUTO_APPROVED");
        $order.setStatus("APPROVED");
        $metrics.incrementApprovalRulesExecuted();
        update($order);
end

rule "Large Order Manual Review"
    ruleflow-group "final-approval"
    when
        $metrics : ProcessMetrics()
        $order : Order((inventoryStatus == "AVAILABLE" || inventoryStatus == "RESERVED_RUSH"),
                      approvalStatus == null,
                      finalAmount > 5000,
                      $customer : customer)
        Customer($customer.customerId == customerId,
                 customerType != "VIP",
                 creditLimit >= $order.finalAmount)
    then
        //System.out.println("Rule fired: Large Order Manual Review Required");
        $order.setApprovalStatus("PENDING_REVIEW");
        $order.setStatus("PENDING_MANUAL_REVIEW");
        $metrics.incrementApprovalRulesExecuted();
        update($order);
end

rule "Standard Order Approval"
    ruleflow-group "final-approval"
    when
        $metrics : ProcessMetrics()
        $order : Order((inventoryStatus == "AVAILABLE" || inventoryStatus == "RESERVED_RUSH"),
                      approvalStatus == null,
                      finalAmount <= 5000,
                      $customer : customer)
        Customer($customer.customerId == customerId,
                 creditLimit >= $order.finalAmount)
    then
        //System.out.println("Rule fired: Standard Order Approval");
        $order.setApprovalStatus("APPROVED");
        $order.setStatus("APPROVED");
        $metrics.incrementApprovalRulesExecuted();
        update($order);
end

rule "Award Loyalty Points"
    ruleflow-group "final-approval"
    when
        $metrics : ProcessMetrics()
        $order : Order(approvalStatus == "AUTO_APPROVED" || approvalStatus == "APPROVED",
                      loyaltyPointsAwarded == false,  // Check if not already awarded
                      $customer : customer)
        Customer($customer.customerId == customerId,
                 $points : loyaltyPoints)
    then
        //System.out.println("Rule fired: Award Loyalty Points");
        int pointsEarned = (int)($order.getFinalAmount() / 10);
        $customer.setLoyaltyPoints($points + pointsEarned);
        $order.setLoyaltyPointsAwarded(true);  // Mark as awarded
        $metrics.incrementApprovalRulesExecuted();
        update($customer);
        update($order);  // Update order too
end

rule "Complete Processing"
    ruleflow-group "final-approval"
    when
        $order : Order(status == "APPROVED" || 
                      status == "REJECTED" || 
                      status == "PENDING_MANUAL_REVIEW" ||
                      status == "INVENTORY_FAILED")
        $metrics : ProcessMetrics(endTime == 0)
    then
        //System.out.println("Rule fired: Process Complete for Order " + $order.getOrderId());
        $metrics.complete();
        $metrics.incrementApprovalRulesExecuted();
        update($metrics);
end
`,tF=`package com.example.rules.inventory;

import com.example.model.*;
import java.util.Date;

// NODE 3: INVENTORY CHECK RULES
// Rule Flow Group: inventory-check

rule "Check Item Stock Availability"
    ruleflow-group "inventory-check"
    when
        $order : Order(pricingStatus == "COMPLETED",
                      inventoryStatus == null)
        $item : OrderItem(inStock == false) from $order.items
        $metrics : ProcessMetrics()
    then
        //System.out.println("Rule fired: Check Item Stock - Item out of stock: " + $item.getProductName());
        $order.setInventoryStatus("INSUFFICIENT");
        $order.setStatus("INVENTORY_FAILED");
        $order.setRejectionReason("Item out of stock: " + $item.getProductName());
        $metrics.incrementInventoryRulesExecuted();
        update($order);
end

rule "Check Hazardous Materials"
    ruleflow-group "inventory-check"
    when
        $order : Order(pricingStatus == "COMPLETED",
                      inventoryStatus == null,
                      shippingMethod != "SPECIAL_HANDLING")
        exists(OrderItem(hazardous == true) from $order.items)
        $metrics : ProcessMetrics()
    then
        //System.out.println("Rule fired: Hazardous Materials Check");
        $order.setShippingMethod("SPECIAL_HANDLING");
        $order.setShippingCost($order.getShippingCost() + 25.00);
        $metrics.incrementInventoryRulesExecuted();
        update($order);
end

rule "Reserve Inventory for Rush Orders"
    ruleflow-group "inventory-check"
    when
        $order : Order(pricingStatus == "COMPLETED",
                      inventoryStatus == null,
                      rushOrder == true)
        not(OrderItem(inStock == false) from $order.items)
        $metrics : ProcessMetrics()
    then
        //System.out.println("Rule fired: Reserve Inventory for Rush Order");
        $order.setInventoryStatus("RESERVED_RUSH");
        $metrics.incrementInventoryRulesExecuted();
        update($order);
end

rule "Check Fragile Items"
    ruleflow-group "inventory-check"
    when
        $order : Order(pricingStatus == "COMPLETED",
                      inventoryStatus == null)
        exists(OrderItem(fragile == true) from $order.items)
        $metrics : ProcessMetrics()
    then
        //System.out.println("Rule fired: Fragile Items Check");
        $order.setShippingCost($order.getShippingCost() + 5.00);
        $metrics.incrementInventoryRulesExecuted();
        update($order);
end

rule "Mark Inventory Available"
    ruleflow-group "inventory-check"
    when
        $order : Order(pricingStatus == "COMPLETED",
                      inventoryStatus == null)
        not(OrderItem(inStock == false) from $order.items)
        $metrics : ProcessMetrics()
    then
        //System.out.println("Rule fired: Mark Inventory Available");
        $order.setInventoryStatus("AVAILABLE");
        $order.setStatus("INVENTORY_CHECKED");
        $metrics.incrementInventoryRulesExecuted();
        update($order);
end
`,nF=`<?xml version="1.0" encoding="UTF-8"?>
<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:bpsim="http://www.bpsim.org/schemas/1.0" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:drools="http://www.jboss.org/drools" id="_TnIXgFtyED6BKcny5DmV6Q" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd http://www.jboss.org/drools drools.xsd http://www.bpsim.org/schemas/1.0 bpsim.xsd http://www.omg.org/spec/DD/20100524/DC DC.xsd http://www.omg.org/spec/DD/20100524/DI DI.xsd " exporter="jBPM Process Modeler" exporterVersion="2.0" targetNamespace="http://www.omg.org/bpmn20">
  <bpmn2:itemDefinition id="__9616FFFD-ED70-459D-939D-754EF08D0E41_fileNameInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__9616FFFD-ED70-459D-939D-754EF08D0E41_namespaceInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__9616FFFD-ED70-459D-939D-754EF08D0E41_modelInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__9616FFFD-ED70-459D-939D-754EF08D0E41_decisionInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__F4E2B813-EDC9-4055-90B3-646CF59FCADF_fileNameInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__F4E2B813-EDC9-4055-90B3-646CF59FCADF_namespaceInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__F4E2B813-EDC9-4055-90B3-646CF59FCADF_modelInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__F4E2B813-EDC9-4055-90B3-646CF59FCADF_decisionInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__785F9AD9-0BA2-4B63-A38C-F2A647B53065_fileNameInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__785F9AD9-0BA2-4B63-A38C-F2A647B53065_namespaceInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__785F9AD9-0BA2-4B63-A38C-F2A647B53065_modelInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__785F9AD9-0BA2-4B63-A38C-F2A647B53065_decisionInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__7013660A-ADDF-448D-82B1-E9056ED8585A_fileNameInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__7013660A-ADDF-448D-82B1-E9056ED8585A_namespaceInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__7013660A-ADDF-448D-82B1-E9056ED8585A_modelInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__7013660A-ADDF-448D-82B1-E9056ED8585A_decisionInputXItem" structureRef="java.lang.String"/>
  <bpmn2:collaboration id="_99554AD1-74D4-4CE1-A151-396719495A3F" name="Default Collaboration">
    <bpmn2:participant id="_A52CBBC4-A505-4ACE-9D86-2FAA58C8A935" name="Pool Participant" processRef="orchestration"/>
  </bpmn2:collaboration>
  <bpmn2:process id="orchestration" drools:packageName="com.example.orchestration" drools:version="1.0" drools:adHoc="false" name="orchestration" isExecutable="true" processType="Public">
    <bpmn2:extensionElements>
      <drools:metaData name="LegacyRuleFlow">
        <drools:metaValue><![CDATA[true]]></drools:metaValue>
      </drools:metaData>
    </bpmn2:extensionElements>
    <bpmn2:sequenceFlow id="_C4332DB1-D742-4315-A4AA-C9A55FDC4C36" sourceRef="_7013660A-ADDF-448D-82B1-E9056ED8585A" targetRef="_CFE18428-2CCB-42D6-925A-B1B8FA9924DA">
      <bpmn2:extensionElements>
        <drools:metaData name="isAutoConnection.target">
          <drools:metaValue><![CDATA[true]]></drools:metaValue>
        </drools:metaData>
      </bpmn2:extensionElements>
    </bpmn2:sequenceFlow>
    <bpmn2:sequenceFlow id="_3E2550F9-F9B3-4E5E-9A4B-A626A571EBEA" sourceRef="_A3D617D3-7EF4-48CA-A568-6FBD9141A2B0" targetRef="_F66BB51A-CCFE-4DC4-A46B-1C43D67823E6">
      <bpmn2:extensionElements>
        <drools:metaData name="isAutoConnection.target">
          <drools:metaValue><![CDATA[true]]></drools:metaValue>
        </drools:metaData>
      </bpmn2:extensionElements>
      <bpmn2:conditionExpression xsi:type="bpmn2:tFormalExpression" language="http://www.jboss.org/drools/rule"><![CDATA[com.example.model.Order(inventoryStatus == "INSUFFICIENT")]]></bpmn2:conditionExpression>
    </bpmn2:sequenceFlow>
    <bpmn2:sequenceFlow id="_47674AE5-C8AB-4E92-A7A3-E048E5B207FF" sourceRef="_A3D617D3-7EF4-48CA-A568-6FBD9141A2B0" targetRef="_7013660A-ADDF-448D-82B1-E9056ED8585A">
      <bpmn2:conditionExpression xsi:type="bpmn2:tFormalExpression" language="http://www.jboss.org/drools/rule"><![CDATA[com.example.model.Order(inventoryStatus != "INSUFFICIENT")]]></bpmn2:conditionExpression>
    </bpmn2:sequenceFlow>
    <bpmn2:sequenceFlow id="_43811705-4D03-4166-84AC-28E698FC2304" sourceRef="_785F9AD9-0BA2-4B63-A38C-F2A647B53065" targetRef="_A3D617D3-7EF4-48CA-A568-6FBD9141A2B0"/>
    <bpmn2:sequenceFlow id="_9A4C9ADB-6305-4621-BE80-0D1D5DA576C5" sourceRef="_F4E2B813-EDC9-4055-90B3-646CF59FCADF" targetRef="_785F9AD9-0BA2-4B63-A38C-F2A647B53065"/>
    <bpmn2:sequenceFlow id="_ED85E575-DD35-4012-BF69-ECB67FC2AD2C" sourceRef="_CCBD99E4-C307-4E66-B043-923F3DF39C00" targetRef="_8482730C-7E76-477B-AE8D-86D6CECC7F3F">
      <bpmn2:extensionElements>
        <drools:metaData name="isAutoConnection.target">
          <drools:metaValue><![CDATA[true]]></drools:metaValue>
        </drools:metaData>
      </bpmn2:extensionElements>
      <bpmn2:conditionExpression xsi:type="bpmn2:tFormalExpression" language="http://www.jboss.org/drools/rule"><![CDATA[com.example.model.Order(validationStatus == "FAILED")]]></bpmn2:conditionExpression>
    </bpmn2:sequenceFlow>
    <bpmn2:sequenceFlow id="_B5609FE4-5E38-420E-97B2-C74C848137D6" sourceRef="_CCBD99E4-C307-4E66-B043-923F3DF39C00" targetRef="_F4E2B813-EDC9-4055-90B3-646CF59FCADF">
      <bpmn2:extensionElements>
        <drools:metaData name="isAutoConnection.target">
          <drools:metaValue><![CDATA[true]]></drools:metaValue>
        </drools:metaData>
      </bpmn2:extensionElements>
      <bpmn2:conditionExpression xsi:type="bpmn2:tFormalExpression" language="http://www.jboss.org/drools/rule"><![CDATA[com.example.model.Order(validationStatus != "FAILED")]]></bpmn2:conditionExpression>
    </bpmn2:sequenceFlow>
    <bpmn2:sequenceFlow id="_0C65366C-E08B-49DD-B426-26E1A5D666B7" sourceRef="_9616FFFD-ED70-459D-939D-754EF08D0E41" targetRef="_CCBD99E4-C307-4E66-B043-923F3DF39C00"/>
    <bpmn2:sequenceFlow id="_4A50FBC1-10B2-458C-967D-83F8F36A4CEC" sourceRef="_A8DE4098-333A-435A-A84A-008AAF06A938" targetRef="_9616FFFD-ED70-459D-939D-754EF08D0E41"/>
    <bpmn2:endEvent id="_CFE18428-2CCB-42D6-925A-B1B8FA9924DA">
      <bpmn2:incoming>_C4332DB1-D742-4315-A4AA-C9A55FDC4C36</bpmn2:incoming>
    </bpmn2:endEvent>
    <bpmn2:businessRuleTask id="_7013660A-ADDF-448D-82B1-E9056ED8585A" drools:ruleFlowGroup="final-approval" name="Approval" implementation="http://www.jboss.org/drools/rule">
      <bpmn2:extensionElements>
        <drools:metaData name="elementname">
          <drools:metaValue><![CDATA[Approval]]></drools:metaValue>
        </drools:metaData>
      </bpmn2:extensionElements>
      <bpmn2:incoming>_47674AE5-C8AB-4E92-A7A3-E048E5B207FF</bpmn2:incoming>
      <bpmn2:outgoing>_C4332DB1-D742-4315-A4AA-C9A55FDC4C36</bpmn2:outgoing>
    </bpmn2:businessRuleTask>
    <bpmn2:endEvent id="_F66BB51A-CCFE-4DC4-A46B-1C43D67823E6">
      <bpmn2:incoming>_3E2550F9-F9B3-4E5E-9A4B-A626A571EBEA</bpmn2:incoming>
    </bpmn2:endEvent>
    <bpmn2:exclusiveGateway id="_A3D617D3-7EF4-48CA-A568-6FBD9141A2B0" gatewayDirection="Diverging">
      <bpmn2:incoming>_43811705-4D03-4166-84AC-28E698FC2304</bpmn2:incoming>
      <bpmn2:outgoing>_47674AE5-C8AB-4E92-A7A3-E048E5B207FF</bpmn2:outgoing>
      <bpmn2:outgoing>_3E2550F9-F9B3-4E5E-9A4B-A626A571EBEA</bpmn2:outgoing>
    </bpmn2:exclusiveGateway>
    <bpmn2:businessRuleTask id="_785F9AD9-0BA2-4B63-A38C-F2A647B53065" drools:ruleFlowGroup="inventory-check" name="Inventory" implementation="http://www.jboss.org/drools/rule">
      <bpmn2:extensionElements>
        <drools:metaData name="elementname">
          <drools:metaValue><![CDATA[Inventory]]></drools:metaValue>
        </drools:metaData>
      </bpmn2:extensionElements>
      <bpmn2:incoming>_9A4C9ADB-6305-4621-BE80-0D1D5DA576C5</bpmn2:incoming>
      <bpmn2:outgoing>_43811705-4D03-4166-84AC-28E698FC2304</bpmn2:outgoing>
    </bpmn2:businessRuleTask>
    <bpmn2:businessRuleTask id="_F4E2B813-EDC9-4055-90B3-646CF59FCADF" drools:ruleFlowGroup="pricing-calculation" name="Pricing" implementation="http://www.jboss.org/drools/rule">
      <bpmn2:extensionElements>
        <drools:metaData name="elementname">
          <drools:metaValue><![CDATA[Pricing]]></drools:metaValue>
        </drools:metaData>
      </bpmn2:extensionElements>
      <bpmn2:incoming>_B5609FE4-5E38-420E-97B2-C74C848137D6</bpmn2:incoming>
      <bpmn2:outgoing>_9A4C9ADB-6305-4621-BE80-0D1D5DA576C5</bpmn2:outgoing>
    </bpmn2:businessRuleTask>
    <bpmn2:endEvent id="_8482730C-7E76-477B-AE8D-86D6CECC7F3F">
      <bpmn2:incoming>_ED85E575-DD35-4012-BF69-ECB67FC2AD2C</bpmn2:incoming>
    </bpmn2:endEvent>
    <bpmn2:exclusiveGateway id="_CCBD99E4-C307-4E66-B043-923F3DF39C00" gatewayDirection="Diverging">
      <bpmn2:incoming>_0C65366C-E08B-49DD-B426-26E1A5D666B7</bpmn2:incoming>
      <bpmn2:outgoing>_B5609FE4-5E38-420E-97B2-C74C848137D6</bpmn2:outgoing>
      <bpmn2:outgoing>_ED85E575-DD35-4012-BF69-ECB67FC2AD2C</bpmn2:outgoing>
    </bpmn2:exclusiveGateway>
    <bpmn2:businessRuleTask id="_9616FFFD-ED70-459D-939D-754EF08D0E41" drools:ruleFlowGroup="order-validation" name="Validation" implementation="http://www.jboss.org/drools/rule">
      <bpmn2:extensionElements>
        <drools:metaData name="elementname">
          <drools:metaValue><![CDATA[Validation]]></drools:metaValue>
        </drools:metaData>
      </bpmn2:extensionElements>
      <bpmn2:incoming>_4A50FBC1-10B2-458C-967D-83F8F36A4CEC</bpmn2:incoming>
      <bpmn2:outgoing>_0C65366C-E08B-49DD-B426-26E1A5D666B7</bpmn2:outgoing>
    </bpmn2:businessRuleTask>
    <bpmn2:startEvent id="_A8DE4098-333A-435A-A84A-008AAF06A938">
      <bpmn2:outgoing>_4A50FBC1-10B2-458C-967D-83F8F36A4CEC</bpmn2:outgoing>
    </bpmn2:startEvent>
  </bpmn2:process>
  <bpmndi:BPMNDiagram>
    <bpmndi:BPMNPlane bpmnElement="orchestration">
      <bpmndi:BPMNShape id="shape__A8DE4098-333A-435A-A84A-008AAF06A938" bpmnElement="_A8DE4098-333A-435A-A84A-008AAF06A938">
        <dc:Bounds height="56" width="56" x="111" y="177"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="shape__9616FFFD-ED70-459D-939D-754EF08D0E41" bpmnElement="_9616FFFD-ED70-459D-939D-754EF08D0E41">
        <dc:Bounds height="102" width="154" x="247" y="154"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="shape__CCBD99E4-C307-4E66-B043-923F3DF39C00" bpmnElement="_CCBD99E4-C307-4E66-B043-923F3DF39C00">
        <dc:Bounds height="56" width="56" x="481" y="177"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="shape__8482730C-7E76-477B-AE8D-86D6CECC7F3F" bpmnElement="_8482730C-7E76-477B-AE8D-86D6CECC7F3F">
        <dc:Bounds height="56" width="56" x="481" y="324.25"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="shape__F4E2B813-EDC9-4055-90B3-646CF59FCADF" bpmnElement="_F4E2B813-EDC9-4055-90B3-646CF59FCADF">
        <dc:Bounds height="102" width="154" x="598" y="154"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="shape__785F9AD9-0BA2-4B63-A38C-F2A647B53065" bpmnElement="_785F9AD9-0BA2-4B63-A38C-F2A647B53065">
        <dc:Bounds height="102" width="154" x="831" y="154"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="shape__A3D617D3-7EF4-48CA-A568-6FBD9141A2B0" bpmnElement="_A3D617D3-7EF4-48CA-A568-6FBD9141A2B0">
        <dc:Bounds height="56" width="56" x="1064" y="177"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="shape__F66BB51A-CCFE-4DC4-A46B-1C43D67823E6" bpmnElement="_F66BB51A-CCFE-4DC4-A46B-1C43D67823E6">
        <dc:Bounds height="56" width="56" x="1064.3333333333333" y="324"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="shape__7013660A-ADDF-448D-82B1-E9056ED8585A" bpmnElement="_7013660A-ADDF-448D-82B1-E9056ED8585A">
        <dc:Bounds height="102" width="154" x="1200" y="154"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="shape__CFE18428-2CCB-42D6-925A-B1B8FA9924DA" bpmnElement="_CFE18428-2CCB-42D6-925A-B1B8FA9924DA">
        <dc:Bounds height="56" width="56" x="1248.9999999999998" y="324"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="edge_shape__A8DE4098-333A-435A-A84A-008AAF06A938_to_shape__9616FFFD-ED70-459D-939D-754EF08D0E41" bpmnElement="_4A50FBC1-10B2-458C-967D-83F8F36A4CEC">
        <di:waypoint x="139" y="205"/>
        <di:waypoint x="324" y="205"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="edge_shape__9616FFFD-ED70-459D-939D-754EF08D0E41_to_shape__CCBD99E4-C307-4E66-B043-923F3DF39C00" bpmnElement="_0C65366C-E08B-49DD-B426-26E1A5D666B7">
        <di:waypoint x="401" y="205"/>
        <di:waypoint x="481" y="205"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="edge_shape__CCBD99E4-C307-4E66-B043-923F3DF39C00_to_shape__F4E2B813-EDC9-4055-90B3-646CF59FCADF" bpmnElement="_B5609FE4-5E38-420E-97B2-C74C848137D6">
        <di:waypoint x="509" y="205"/>
        <di:waypoint x="598" y="205"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="edge_shape__CCBD99E4-C307-4E66-B043-923F3DF39C00_to_shape__8482730C-7E76-477B-AE8D-86D6CECC7F3F" bpmnElement="_ED85E575-DD35-4012-BF69-ECB67FC2AD2C">
        <di:waypoint x="509" y="205"/>
        <di:waypoint x="509" y="324.25"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="edge_shape__F4E2B813-EDC9-4055-90B3-646CF59FCADF_to_shape__785F9AD9-0BA2-4B63-A38C-F2A647B53065" bpmnElement="_9A4C9ADB-6305-4621-BE80-0D1D5DA576C5">
        <di:waypoint x="675" y="205"/>
        <di:waypoint x="908" y="205"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="edge_shape__785F9AD9-0BA2-4B63-A38C-F2A647B53065_to_shape__A3D617D3-7EF4-48CA-A568-6FBD9141A2B0" bpmnElement="_43811705-4D03-4166-84AC-28E698FC2304">
        <di:waypoint x="985" y="205"/>
        <di:waypoint x="1064" y="205"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="edge_shape__A3D617D3-7EF4-48CA-A568-6FBD9141A2B0_to_shape__7013660A-ADDF-448D-82B1-E9056ED8585A" bpmnElement="_47674AE5-C8AB-4E92-A7A3-E048E5B207FF">
        <di:waypoint x="1092" y="205"/>
        <di:waypoint x="1277" y="205"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="edge_shape__A3D617D3-7EF4-48CA-A568-6FBD9141A2B0_to_shape__F66BB51A-CCFE-4DC4-A46B-1C43D67823E6" bpmnElement="_3E2550F9-F9B3-4E5E-9A4B-A626A571EBEA">
        <di:waypoint x="1092" y="205"/>
        <di:waypoint x="1092.3333333333333" y="324"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="edge_shape__7013660A-ADDF-448D-82B1-E9056ED8585A_to_shape__CFE18428-2CCB-42D6-925A-B1B8FA9924DA" bpmnElement="_C4332DB1-D742-4315-A4AA-C9A55FDC4C36">
        <di:waypoint x="1277" y="205"/>
        <di:waypoint x="1325.9999999999998" y="324"/>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
  <bpmn2:relationship type="BPSimData">
    <bpmn2:extensionElements>
      <bpsim:BPSimData>
        <bpsim:Scenario id="default" name="Simulationscenario">
          <bpsim:ScenarioParameters/>
          <bpsim:ElementParameters elementRef="_A8DE4098-333A-435A-A84A-008AAF06A938">
            <bpsim:TimeParameters>
              <bpsim:ProcessingTime>
                <bpsim:NormalDistribution mean="0" standardDeviation="0"/>
              </bpsim:ProcessingTime>
            </bpsim:TimeParameters>
          </bpsim:ElementParameters>
          <bpsim:ElementParameters elementRef="_9616FFFD-ED70-459D-939D-754EF08D0E41">
            <bpsim:TimeParameters>
              <bpsim:ProcessingTime>
                <bpsim:NormalDistribution mean="0" standardDeviation="0"/>
              </bpsim:ProcessingTime>
            </bpsim:TimeParameters>
            <bpsim:ResourceParameters>
              <bpsim:Availability>
                <bpsim:FloatingParameter value="0"/>
              </bpsim:Availability>
              <bpsim:Quantity>
                <bpsim:FloatingParameter value="0"/>
              </bpsim:Quantity>
            </bpsim:ResourceParameters>
            <bpsim:CostParameters>
              <bpsim:UnitCost>
                <bpsim:FloatingParameter value="0"/>
              </bpsim:UnitCost>
            </bpsim:CostParameters>
          </bpsim:ElementParameters>
          <bpsim:ElementParameters elementRef="_F4E2B813-EDC9-4055-90B3-646CF59FCADF">
            <bpsim:TimeParameters>
              <bpsim:ProcessingTime>
                <bpsim:NormalDistribution mean="0" standardDeviation="0"/>
              </bpsim:ProcessingTime>
            </bpsim:TimeParameters>
            <bpsim:ResourceParameters>
              <bpsim:Availability>
                <bpsim:FloatingParameter value="0"/>
              </bpsim:Availability>
              <bpsim:Quantity>
                <bpsim:FloatingParameter value="0"/>
              </bpsim:Quantity>
            </bpsim:ResourceParameters>
            <bpsim:CostParameters>
              <bpsim:UnitCost>
                <bpsim:FloatingParameter value="0"/>
              </bpsim:UnitCost>
            </bpsim:CostParameters>
          </bpsim:ElementParameters>
          <bpsim:ElementParameters elementRef="_785F9AD9-0BA2-4B63-A38C-F2A647B53065">
            <bpsim:TimeParameters>
              <bpsim:ProcessingTime>
                <bpsim:NormalDistribution mean="0" standardDeviation="0"/>
              </bpsim:ProcessingTime>
            </bpsim:TimeParameters>
            <bpsim:ResourceParameters>
              <bpsim:Availability>
                <bpsim:FloatingParameter value="0"/>
              </bpsim:Availability>
              <bpsim:Quantity>
                <bpsim:FloatingParameter value="0"/>
              </bpsim:Quantity>
            </bpsim:ResourceParameters>
            <bpsim:CostParameters>
              <bpsim:UnitCost>
                <bpsim:FloatingParameter value="0"/>
              </bpsim:UnitCost>
            </bpsim:CostParameters>
          </bpsim:ElementParameters>
          <bpsim:ElementParameters elementRef="_7013660A-ADDF-448D-82B1-E9056ED8585A">
            <bpsim:TimeParameters>
              <bpsim:ProcessingTime>
                <bpsim:NormalDistribution mean="0" standardDeviation="0"/>
              </bpsim:ProcessingTime>
            </bpsim:TimeParameters>
            <bpsim:ResourceParameters>
              <bpsim:Availability>
                <bpsim:FloatingParameter value="0"/>
              </bpsim:Availability>
              <bpsim:Quantity>
                <bpsim:FloatingParameter value="0"/>
              </bpsim:Quantity>
            </bpsim:ResourceParameters>
            <bpsim:CostParameters>
              <bpsim:UnitCost>
                <bpsim:FloatingParameter value="0"/>
              </bpsim:UnitCost>
            </bpsim:CostParameters>
          </bpsim:ElementParameters>
        </bpsim:Scenario>
      </bpsim:BPSimData>
    </bpmn2:extensionElements>
    <bpmn2:source>_TnIXgFtyED6BKcny5DmV6Q</bpmn2:source>
    <bpmn2:target>_TnIXgFtyED6BKcny5DmV6Q</bpmn2:target>
  </bpmn2:relationship>
</bpmn2:definitions>`,rF=`package com.example.rules.validation;

import com.example.model.*;
import java.util.Date;

// NODE 1: ORDER VALIDATION RULES
// Rule Flow Group: order-validation

rule "Check Blacklisted Customer"
    ruleflow-group "order-validation"
    when
        $metrics : ProcessMetrics()
        $order : Order(validationStatus == null, $customer : customer)
        Customer($customer.customerId == customerId, blacklisted == true)
    then
        //System.out.println("Rule fired: Check Blacklisted Customer");
        $order.setValidationStatus("FAILED");
        $order.setStatus("REJECTED");
        $order.setRejectionReason("Customer is blacklisted");
        $metrics.incrementValidationRulesExecuted();
        update($order);
end

rule "Validate Minimum Order Amount"
    ruleflow-group "order-validation"
    when
        $order : Order(validationStatus == null, totalAmount < 10.0)
        $metrics : ProcessMetrics()
    then
        //System.out.println("Rule fired: Validate Minimum Order Amount");
        $order.setValidationStatus("FAILED");
        $order.setStatus("REJECTED");
        $order.setRejectionReason("Order amount below minimum ($10)");
        $metrics.incrementValidationRulesExecuted();
        update($order);
end

rule "Validate Payment Method"
    ruleflow-group "order-validation"
    when
        $order : Order(validationStatus == null, 
                      paymentMethod == null || paymentMethod == "")
        $metrics : ProcessMetrics()
    then
        //System.out.println("Rule fired: Validate Payment Method");
        $order.setValidationStatus("FAILED");
        $order.setStatus("REJECTED");
        $order.setRejectionReason("Invalid payment method");
        $metrics.incrementValidationRulesExecuted();
        update($order);
end

rule "Check Order Items Count"
    ruleflow-group "order-validation"
    when
        $order : Order(validationStatus == null, items.size() == 0)
        $metrics : ProcessMetrics()
    then
        //System.out.println("Rule fired: Check Order Items Count");
        $order.setValidationStatus("FAILED");
        $order.setStatus("REJECTED");
        $order.setRejectionReason("Order has no items");
        $metrics.incrementValidationRulesExecuted();
        update($order);
end

rule "Set Default Shipping Method"
    ruleflow-group "order-validation"
    when
        $order : Order(validationStatus == null,
                      shippingMethod == null || shippingMethod == "")
        $metrics : ProcessMetrics()
    then
        //System.out.println("Rule fired: Set Default Shipping Method");
        $order.setShippingMethod("STANDARD");
        $metrics.incrementValidationRulesExecuted();
        update($order);
end

rule "Mark Validation Passed"
    ruleflow-group "order-validation"
    when
        $metrics : ProcessMetrics()
        $order : Order(validationStatus == null,
                      totalAmount >= 10.0,
                      items.size() > 0,
                      paymentMethod != null && paymentMethod != "",
                      shippingMethod != null && shippingMethod != "",
                      $customer : customer)
        Customer($customer.customerId == customerId, blacklisted == false)
    then
        //System.out.println("Rule fired: Mark Validation Passed");
        $order.setValidationStatus("PASSED");
        $order.setStatus("VALIDATED");
        $metrics.incrementValidationRulesExecuted();
        update($order);
end
`,iF=`package com.example.rules.pricing;

import com.example.model.*;
import java.util.Date;

// NODE 2: PRICING AND DISCOUNT RULES
// Rule Flow Group: pricing-calculation

rule "VIP Customer Discount"
    ruleflow-group "pricing-calculation"
    when
        $metrics : ProcessMetrics()
        $order : Order(validationStatus == "PASSED",
                      pricingStatus == null,
                      $customer : customer)
        Customer($customer.customerId == customerId, customerType == "VIP")
    then
        //System.out.println("Rule fired: VIP Customer Discount - 20%");
        double discount = $order.getTotalAmount() * 0.20;
        $order.setDiscount($order.getDiscount() + discount);
        $metrics.incrementPricingRulesExecuted();
        update($order);
end

rule "Premium Customer Discount"
    ruleflow-group "pricing-calculation"
    when
        $metrics : ProcessMetrics()
        $order : Order(validationStatus == "PASSED",
                      pricingStatus == null,
                      $customer : customer)
        Customer($customer.customerId == customerId, customerType == "PREMIUM")
    then
        //System.out.println("Rule fired: Premium Customer Discount - 10%");
        double discount = $order.getTotalAmount() * 0.10;
        $order.setDiscount($order.getDiscount() + discount);
        $metrics.incrementPricingRulesExecuted();
        update($order);
end

rule "Bulk Order Discount"
    ruleflow-group "pricing-calculation"
    when
        $metrics : ProcessMetrics()
        $order : Order(validationStatus == "PASSED",
                      pricingStatus == null,
                      totalAmount > 1000)
    then
        //System.out.println("Rule fired: Bulk Order Discount - 5%");
        double discount = $order.getTotalAmount() * 0.05;
        $order.setDiscount($order.getDiscount() + discount);
        $metrics.incrementPricingRulesExecuted();
        update($order);
end

rule "Calculate Standard Shipping"
    ruleflow-group "pricing-calculation"
    when
        $metrics : ProcessMetrics()
        $order : Order(validationStatus == "PASSED",
                      pricingStatus == null,
                      shippingMethod == "STANDARD",
                      shippingCalculated == false)  // Check flag instead of cost
    then
        //System.out.println("Rule fired: Calculate Standard Shipping");
        $order.setShippingCost(9.99);
        $order.setShippingCalculated(true);  // Set flag
        $metrics.incrementPricingRulesExecuted();
        update($order);
end

rule "Calculate Express Shipping"
    ruleflow-group "pricing-calculation"
    when
        $metrics : ProcessMetrics()
        $order : Order(validationStatus == "PASSED",
                      pricingStatus == null,
                      shippingMethod == "EXPRESS",
                      shippingCalculated == false)
    then
        //System.out.println("Rule fired: Calculate Express Shipping");
        $order.setShippingCost(19.99);
        $order.setShippingCalculated(true);
        $metrics.incrementPricingRulesExecuted();
        update($order);
end

rule "Calculate Overnight Shipping"
    ruleflow-group "pricing-calculation"
    when
        $metrics : ProcessMetrics()
        $order : Order(validationStatus == "PASSED",
                      pricingStatus == null,
                      shippingMethod == "OVERNIGHT",
                      shippingCalculated == false)
    then
        //System.out.println("Rule fired: Calculate Overnight Shipping");
        $order.setShippingCost(39.99);
        $order.setShippingCalculated(true);
        $metrics.incrementPricingRulesExecuted();
        update($order);
end

rule "Free Shipping for VIP"
    ruleflow-group "pricing-calculation"
    when
        $metrics : ProcessMetrics()
        $order : Order(validationStatus == "PASSED",
                      pricingStatus == null,
                      shippingCalculated == true,  // Only after shipping is calculated
                      $customer : customer,
                      shippingCost > 0)
        Customer($customer.customerId == customerId, customerType == "VIP")
    then
        //System.out.println("Rule fired: Free Shipping for VIP");
        $order.setShippingCost(0);
        // Don't reset shippingCalculated flag
        $metrics.incrementPricingRulesExecuted();
        update($order);
end

rule "Finalize Pricing"
    ruleflow-group "pricing-calculation"
    when
        $metrics : ProcessMetrics()
        $order : Order(validationStatus == "PASSED",
                      pricingStatus == null)
    then
        //System.out.println("Rule fired: Finalize Pricing");
        $order.setPricingStatus("COMPLETED");
        $order.setStatus("PRICED");
        double finalAmount = $order.getTotalAmount() - $order.getDiscount() + $order.getShippingCost();
        $order.setFinalAmount(finalAmount);
        $metrics.incrementPricingRulesExecuted();
        update($order);
end
`,oF=`package com.example;

import com.example.model.Customer;
import com.example.model.Order;
import com.example.model.OrderItem;
import com.example.model.ProcessMetrics;
import com.example.orchestration.StartProcessOrchestrationService;
import org.junit.jupiter.api.Test;

public class ApplicationTest {

    @Test
    public void testAletyxBPMNOrchestration() {
        StartProcessOrchestrationService service = new StartProcessOrchestrationService();
        
        // Create test data
        Customer customer = createVipCustomer("CUST-2");
        Order order = createTestOrder("ORDER-2", customer);
        ProcessMetrics metrics = new ProcessMetrics();
        
        // Process the order
        service.processOrder(order, customer, metrics);
        
        // Verify that rules were executed
        assert metrics.getRulesExecuted() > 0 : "Rules should have been executed";
        assert order.getStatus() != null : "Order status should be set";
        
        System.out.println("Aletyx BPMN Orchestration Test Completed Successfully!");
        System.out.println("Rules Executed: " + metrics.getRulesExecuted());
        System.out.println("Final Order Status: " + order.getStatus());
    }

    private Customer createVipCustomer(String customerId) {
        return new Customer(customerId, "VIP", 5000, 10000.0, false, 50);
    }

    private Customer createRegularCustomer(String customerId) {
        return new Customer(customerId, "REGULAR", 500, 2000.0, false, 10);
    }

    private Order createTestOrder(String orderId, Customer customer) {
        Order order = new Order(orderId, customer);
        order.setPaymentMethod("CREDIT_CARD");
        order.setShippingMethod("STANDARD");
        order.setRushOrder(false);
        
        // Add test items
        OrderItem item1 = new OrderItem("PROD-1", "Test Product 1", "ELECTRONICS", 2, 150.0, 50);
        item1.setHazardous(false);
        item1.setFragile(true);
        item1.setWeight(2.5);
        order.addItem(item1);
        
        OrderItem item2 = new OrderItem("PROD-2", "Test Product 2", "CLOTHING", 1, 75.0, 100);
        item2.setHazardous(false);
        item2.setFragile(false);
        item2.setWeight(0.5);
        order.addItem(item2);
        
        return order;
    }
}`,sF=`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd">

    <modelVersion>4.0.0</modelVersion>

    <groupId>{{group}}</groupId>
    <artifactId>{{artifact}}</artifactId>
    <version>{{version}}</version>
    <packaging>kjar</packaging>

    <name>Classic Ruleflow</name>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <maven.compiler.release>17</maven.compiler.release>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
        <kogito.bom.version>{{targetVersion}}</kogito.bom.version>
    </properties>

    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>ai.aletyx</groupId>
                <artifactId>aletyx-automation-bom</artifactId>
                <version>\${kogito.bom.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
            <dependency>
                <groupId>org.kie.kogito</groupId>
                <artifactId>jbpm-bpmn2</artifactId>
                <version>\${kogito.bom.version}</version>
            </dependency>
            <dependency>
                <groupId>org.junit.jupiter</groupId>
                <artifactId>junit-jupiter</artifactId>
                <version>5.10.0</version>
            </dependency>
        </dependencies>
    </dependencyManagement>

    <dependencies>
        <dependency>
            <groupId>org.drools</groupId>
            <artifactId>drools-engine-classic</artifactId>
        </dependency>
        <dependency>
            <groupId>org.drools</groupId>
            <artifactId>drools-model-compiler</artifactId>
        </dependency>
        <dependency>
            <groupId>org.drools</groupId>
            <artifactId>drools-ecj</artifactId>
        </dependency>
        <dependency>
            <groupId>org.kie.kogito</groupId>
            <artifactId>jbpm-bpmn2</artifactId>
        </dependency>
        <dependency>
            <groupId>org.kie</groupId>
            <artifactId>kie-api</artifactId>
        </dependency>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.kie</groupId>
                <artifactId>kie-maven-plugin</artifactId>
                <version>\${kogito.bom.version}</version>
                <extensions>true</extensions>
            </plugin>
        </plugins>
    </build>
</project>`,aF=`package com.example.model;

public class Customer {
    private String customerId;
    private String customerType; // REGULAR, PREMIUM, VIP
    private int loyaltyPoints;
    private double creditLimit;
    private boolean blacklisted;
    private int orderCount;
    
    public Customer(String customerId, String customerType, int loyaltyPoints, 
                   double creditLimit, boolean blacklisted, int orderCount) {
        this.customerId = customerId;
        this.customerType = customerType;
        this.loyaltyPoints = loyaltyPoints;
        this.creditLimit = creditLimit;
        this.blacklisted = blacklisted;
        this.orderCount = orderCount;
    }
    
    public String getCustomerId() { return customerId; }
    public void setCustomerId(String customerId) { this.customerId = customerId; }
    
    public String getCustomerType() { return customerType; }
    public void setCustomerType(String customerType) { this.customerType = customerType; }
    
    public int getLoyaltyPoints() { return loyaltyPoints; }
    public void setLoyaltyPoints(int loyaltyPoints) { this.loyaltyPoints = loyaltyPoints; }
    
    public double getCreditLimit() { return creditLimit; }
    public void setCreditLimit(double creditLimit) { this.creditLimit = creditLimit; }
    
    public boolean isBlacklisted() { return blacklisted; }
    public void setBlacklisted(boolean blacklisted) { this.blacklisted = blacklisted; }
    
    public int getOrderCount() { return orderCount; }
    public void setOrderCount(int orderCount) { this.orderCount = orderCount; }
}
`,lF=`package com.example.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Order {
    private String orderId;
    private Customer customer;
    private List<OrderItem> items;
    private double totalAmount;
    private double discount;
    private double finalAmount;
    private String status; // PENDING, VALIDATED, PRICED, INVENTORY_CHECKED, APPROVED, REJECTED
    private String rejectionReason;
    private Date orderDate;
    private String shippingMethod; // STANDARD, EXPRESS, OVERNIGHT
    private double shippingCost;
    private String paymentMethod; // CREDIT_CARD, DEBIT_CARD, PAYPAL, WIRE
    private boolean rushOrder;
    private String validationStatus;
    private String pricingStatus;
    private String inventoryStatus;
    private String approvalStatus;
    private boolean shippingCalculated = false;
    private boolean loyaltyPointsAwarded = false;

    public Order(String orderId, Customer customer) {
        this.orderId = orderId;
        this.customer = customer;
        this.items = new ArrayList<>();
        this.orderDate = new Date();
        this.status = "PENDING";
    }
    
    public void addItem(OrderItem item) {
        this.items.add(item);
        recalculateTotal();
    }
    
    private void recalculateTotal() {
        this.totalAmount = items.stream()
            .mapToDouble(item -> item.getPrice() * item.getQuantity())
            .sum();
    }
    
    public String getOrderId() { return orderId; }
    public void setOrderId(String orderId) { this.orderId = orderId; }
    
    public Customer getCustomer() { return customer; }
    public void setCustomer(Customer customer) { this.customer = customer; }
    
    public List<OrderItem> getItems() { return items; }
    public void setItems(List<OrderItem> items) { 
        this.items = items;
        recalculateTotal();
    }
    
    public double getTotalAmount() { return totalAmount; }
    public void setTotalAmount(double totalAmount) { this.totalAmount = totalAmount; }
    
    public double getDiscount() { return discount; }
    public void setDiscount(double discount) { 
        this.discount = discount;
        this.finalAmount = this.totalAmount - discount + this.shippingCost;
    }
    
    public double getFinalAmount() { return finalAmount; }
    public void setFinalAmount(double finalAmount) { this.finalAmount = finalAmount; }
    
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    
    public String getRejectionReason() { return rejectionReason; }
    public void setRejectionReason(String rejectionReason) { this.rejectionReason = rejectionReason; }
    
    public Date getOrderDate() { return orderDate; }
    public void setOrderDate(Date orderDate) { this.orderDate = orderDate; }
    
    public String getShippingMethod() { return shippingMethod; }
    public void setShippingMethod(String shippingMethod) { this.shippingMethod = shippingMethod; }
    
    public double getShippingCost() { return shippingCost; }
    public void setShippingCost(double shippingCost) { 
        this.shippingCost = shippingCost;
        this.finalAmount = this.totalAmount - this.discount + shippingCost;
    }
    
    public String getPaymentMethod() { return paymentMethod; }
    public void setPaymentMethod(String paymentMethod) { this.paymentMethod = paymentMethod; }
    
    public boolean isRushOrder() { return rushOrder; }
    public void setRushOrder(boolean rushOrder) { this.rushOrder = rushOrder; }
    
    public String getValidationStatus() { return validationStatus; }
    public void setValidationStatus(String validationStatus) { this.validationStatus = validationStatus; }
    
    public String getPricingStatus() { return pricingStatus; }
    public void setPricingStatus(String pricingStatus) { this.pricingStatus = pricingStatus; }
    
    public String getInventoryStatus() { return inventoryStatus; }
    public void setInventoryStatus(String inventoryStatus) { this.inventoryStatus = inventoryStatus; }
    
    public String getApprovalStatus() { return approvalStatus; }
    public void setApprovalStatus(String approvalStatus) { this.approvalStatus = approvalStatus; }

    public boolean isShippingCalculated() { return shippingCalculated; }
    public void setShippingCalculated(boolean shippingCalculated) { this.shippingCalculated = shippingCalculated; }

    public boolean isLoyaltyPointsAwarded() { return loyaltyPointsAwarded; }
    public void setLoyaltyPointsAwarded(boolean loyaltyPointsAwarded) {
        this.loyaltyPointsAwarded = loyaltyPointsAwarded;
    }
}
`,uF=`package com.example.model;

public class OrderItem {
    private String productId;
    private String productName;
    private String category; // ELECTRONICS, CLOTHING, FOOD, FURNITURE, BOOKS
    private int quantity;
    private double price;
    private boolean inStock;
    private int availableQuantity;
    private boolean hazardous;
    private boolean fragile;
    private double weight;
    
    public OrderItem(String productId, String productName, String category, 
                    int quantity, double price, int availableQuantity) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
        this.quantity = quantity;
        this.price = price;
        this.availableQuantity = availableQuantity;
        this.inStock = availableQuantity >= quantity;
    }
    
    public String getProductId() { return productId; }
    public void setProductId(String productId) { this.productId = productId; }
    
    public String getProductName() { return productName; }
    public void setProductName(String productName) { this.productName = productName; }
    
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    
    public int getQuantity() { return quantity; }
    public void setQuantity(int quantity) { this.quantity = quantity; }
    
    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }
    
    public boolean isInStock() { return inStock; }
    public void setInStock(boolean inStock) { this.inStock = inStock; }
    
    public int getAvailableQuantity() { return availableQuantity; }
    public void setAvailableQuantity(int availableQuantity) { 
        this.availableQuantity = availableQuantity;
        this.inStock = availableQuantity >= this.quantity;
    }
    
    public boolean isHazardous() { return hazardous; }
    public void setHazardous(boolean hazardous) { this.hazardous = hazardous; }
    
    public boolean isFragile() { return fragile; }
    public void setFragile(boolean fragile) { this.fragile = fragile; }
    
    public double getWeight() { return weight; }
    public void setWeight(double weight) { this.weight = weight; }
}
`,cF=`package com.example.model;

public class ProcessMetrics {
    private long startTime;
    private long endTime;
    private String currentNode;
    private int validationRulesExecuted;
    private int pricingRulesExecuted;
    private int inventoryRulesExecuted;
    private int approvalRulesExecuted;

    public ProcessMetrics() {
        this.startTime = System.currentTimeMillis();
    }
    
    public void incrementValidationRulesExecuted() {
        this.validationRulesExecuted++;
    }

    public void incrementPricingRulesExecuted() {
        this.pricingRulesExecuted++;
    }

    public void incrementInventoryRulesExecuted() {
        this.inventoryRulesExecuted++;
    }

    public void incrementApprovalRulesExecuted() {
        this.approvalRulesExecuted++;
    }
    
    public void complete() {
        this.endTime = System.currentTimeMillis();
    }
    
    public long getExecutionTime() {
        return endTime - startTime;
    }
    
    public long getStartTime() { return startTime; }
    public void setStartTime(long startTime) { this.startTime = startTime; }
    
    public long getEndTime() { return endTime; }
    public void setEndTime(long endTime) { this.endTime = endTime; }
    
    public int getRulesExecuted() { return validationRulesExecuted + pricingRulesExecuted + inventoryRulesExecuted + approvalRulesExecuted; }
    public int getValidationRulesExecuted() { return validationRulesExecuted; }
    public int getPricingRulesExecuted() { return pricingRulesExecuted; }
    public int getInventoryRulesExecuted() { return inventoryRulesExecuted; }
    public int getApprovalRulesExecuted() { return approvalRulesExecuted; }


    public String getCurrentNode() { return currentNode; }
    public void setCurrentNode(String currentNode) { this.currentNode = currentNode; }
}
`,dF=`package com.example.orchestration;

import com.example.model.Customer;
import com.example.model.Order;
import com.example.model.ProcessMetrics;
import org.kie.api.KieServices;
import org.kie.api.runtime.KieSession;

public class StartProcessOrchestrationService {

    public void processOrder(Order order, Customer customer, ProcessMetrics metrics) {

        final KieSession session = newSession();
        try {
            session.insert(order);
            session.insert(customer);
            session.insert(metrics);
            session.startProcess("orchestration");
            session.fireAllRules();
        } finally {
            session.dispose();
        }
    }

    protected KieSession newSession() {
        return KieServices.get().getKieClasspathContainer().newKieSession();
    }
}
`,pF=`<?xml version="1.0" encoding="UTF-8"?>
<kmodule xmlns="http://www.drools.org/xsd/kmodule">
</kmodule>
`,fF=`package com.example.rules.approval;

import com.example.model.*;
import java.util.Date;

// NODE 4: FINAL APPROVAL RULES
// Rule Flow Group: final-approval

rule "Check Credit Limit"
    ruleflow-group "final-approval"
    when
        $metrics : ProcessMetrics()
        $order : Order((inventoryStatus == "AVAILABLE" || inventoryStatus == "RESERVED_RUSH"),
                      approvalStatus == null,
                      $customer : customer,
                      $finalAmount : finalAmount)
        Customer($customer.customerId == customerId, creditLimit < $finalAmount)
    then
        //System.out.println("Rule fired: Credit Limit Check Failed");
        $order.setApprovalStatus("REJECTED");
        $order.setStatus("REJECTED");
        $order.setRejectionReason("Exceeds customer credit limit");
        $metrics.incrementApprovalRulesExecuted();
        update($order);
end

rule "Auto Approve VIP Orders"
    ruleflow-group "final-approval"
    when
        $metrics : ProcessMetrics()
        $order : Order((inventoryStatus == "AVAILABLE" || inventoryStatus == "RESERVED_RUSH"),
                      approvalStatus == null,
                      $customer : customer,
                      $finalAmount : finalAmount)
        Customer($customer.customerId == customerId,
                 customerType == "VIP",
                 creditLimit >= $finalAmount)
    then
        //System.out.println("Rule fired: Auto-approve VIP Order");
        $order.setApprovalStatus("AUTO_APPROVED");
        $order.setStatus("APPROVED");
        $metrics.incrementApprovalRulesExecuted();
        update($order);
end

rule "Large Order Manual Review"
    ruleflow-group "final-approval"
    when
        $metrics : ProcessMetrics()
        $order : Order((inventoryStatus == "AVAILABLE" || inventoryStatus == "RESERVED_RUSH"),
                      approvalStatus == null,
                      finalAmount > 5000,
                      $customer : customer)
        Customer($customer.customerId == customerId,
                 customerType != "VIP",
                 creditLimit >= $order.finalAmount)
    then
        //System.out.println("Rule fired: Large Order Manual Review Required");
        $order.setApprovalStatus("PENDING_REVIEW");
        $order.setStatus("PENDING_MANUAL_REVIEW");
        $metrics.incrementApprovalRulesExecuted();
        update($order);
end

rule "Standard Order Approval"
    ruleflow-group "final-approval"
    when
        $metrics : ProcessMetrics()
        $order : Order((inventoryStatus == "AVAILABLE" || inventoryStatus == "RESERVED_RUSH"),
                      approvalStatus == null,
                      finalAmount <= 5000,
                      $customer : customer)
        Customer($customer.customerId == customerId,
                 creditLimit >= $order.finalAmount)
    then
        //System.out.println("Rule fired: Standard Order Approval");
        $order.setApprovalStatus("APPROVED");
        $order.setStatus("APPROVED");
        $metrics.incrementApprovalRulesExecuted();
        update($order);
end

rule "Award Loyalty Points"
    ruleflow-group "final-approval"
    when
        $metrics : ProcessMetrics()
        $order : Order(approvalStatus == "AUTO_APPROVED" || approvalStatus == "APPROVED",
                      loyaltyPointsAwarded == false,  // Check if not already awarded
                      $customer : customer)
        Customer($customer.customerId == customerId,
                 $points : loyaltyPoints)
    then
        //System.out.println("Rule fired: Award Loyalty Points");
        int pointsEarned = (int)($order.getFinalAmount() / 10);
        $customer.setLoyaltyPoints($points + pointsEarned);
        $order.setLoyaltyPointsAwarded(true);  // Mark as awarded
        $metrics.incrementApprovalRulesExecuted();
        update($customer);
        update($order);  // Update order too
end

rule "Complete Processing"
    ruleflow-group "final-approval"
    when
        $order : Order(status == "APPROVED" || 
                      status == "REJECTED" || 
                      status == "PENDING_MANUAL_REVIEW" ||
                      status == "INVENTORY_FAILED")
        $metrics : ProcessMetrics(endTime == 0)
    then
        //System.out.println("Rule fired: Process Complete for Order " + $order.getOrderId());
        $metrics.complete();
        $metrics.incrementApprovalRulesExecuted();
        update($metrics);
end
`,mF=`package com.example.rules.inventory;

import com.example.model.*;
import java.util.Date;

// NODE 3: INVENTORY CHECK RULES
// Rule Flow Group: inventory-check

rule "Check Item Stock Availability"
    ruleflow-group "inventory-check"
    when
        $order : Order(pricingStatus == "COMPLETED",
                      inventoryStatus == null)
        $item : OrderItem(inStock == false) from $order.items
        $metrics : ProcessMetrics()
    then
        //System.out.println("Rule fired: Check Item Stock - Item out of stock: " + $item.getProductName());
        $order.setInventoryStatus("INSUFFICIENT");
        $order.setStatus("INVENTORY_FAILED");
        $order.setRejectionReason("Item out of stock: " + $item.getProductName());
        $metrics.incrementInventoryRulesExecuted();
        update($order);
end

rule "Check Hazardous Materials"
    ruleflow-group "inventory-check"
    when
        $order : Order(pricingStatus == "COMPLETED",
                      inventoryStatus == null,
                      shippingMethod != "SPECIAL_HANDLING")
        exists(OrderItem(hazardous == true) from $order.items)
        $metrics : ProcessMetrics()
    then
        //System.out.println("Rule fired: Hazardous Materials Check");
        $order.setShippingMethod("SPECIAL_HANDLING");
        $order.setShippingCost($order.getShippingCost() + 25.00);
        $metrics.incrementInventoryRulesExecuted();
        update($order);
end

rule "Reserve Inventory for Rush Orders"
    ruleflow-group "inventory-check"
    when
        $order : Order(pricingStatus == "COMPLETED",
                      inventoryStatus == null,
                      rushOrder == true)
        not(OrderItem(inStock == false) from $order.items)
        $metrics : ProcessMetrics()
    then
        //System.out.println("Rule fired: Reserve Inventory for Rush Order");
        $order.setInventoryStatus("RESERVED_RUSH");
        $metrics.incrementInventoryRulesExecuted();
        update($order);
end

rule "Check Fragile Items"
    ruleflow-group "inventory-check"
    when
        $order : Order(pricingStatus == "COMPLETED",
                      inventoryStatus == null)
        exists(OrderItem(fragile == true) from $order.items)
        $metrics : ProcessMetrics()
    then
        //System.out.println("Rule fired: Fragile Items Check");
        $order.setShippingCost($order.getShippingCost() + 5.00);
        $metrics.incrementInventoryRulesExecuted();
        update($order);
end

rule "Mark Inventory Available"
    ruleflow-group "inventory-check"
    when
        $order : Order(pricingStatus == "COMPLETED",
                      inventoryStatus == null)
        not(OrderItem(inStock == false) from $order.items)
        $metrics : ProcessMetrics()
    then
        //System.out.println("Rule fired: Mark Inventory Available");
        $order.setInventoryStatus("AVAILABLE");
        $order.setStatus("INVENTORY_CHECKED");
        $metrics.incrementInventoryRulesExecuted();
        update($order);
end
`,hF=`<?xml version="1.0" encoding="UTF-8"?>
<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:bpsim="http://www.bpsim.org/schemas/1.0" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:drools="http://www.jboss.org/drools" id="_TnIXgFtyED6BKcny5DmV6Q" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd http://www.jboss.org/drools drools.xsd http://www.bpsim.org/schemas/1.0 bpsim.xsd http://www.omg.org/spec/DD/20100524/DC DC.xsd http://www.omg.org/spec/DD/20100524/DI DI.xsd " exporter="jBPM Process Modeler" exporterVersion="2.0" targetNamespace="http://www.omg.org/bpmn20">
  <bpmn2:itemDefinition id="__9616FFFD-ED70-459D-939D-754EF08D0E41_fileNameInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__9616FFFD-ED70-459D-939D-754EF08D0E41_namespaceInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__9616FFFD-ED70-459D-939D-754EF08D0E41_modelInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__9616FFFD-ED70-459D-939D-754EF08D0E41_decisionInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__F4E2B813-EDC9-4055-90B3-646CF59FCADF_fileNameInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__F4E2B813-EDC9-4055-90B3-646CF59FCADF_namespaceInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__F4E2B813-EDC9-4055-90B3-646CF59FCADF_modelInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__F4E2B813-EDC9-4055-90B3-646CF59FCADF_decisionInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__785F9AD9-0BA2-4B63-A38C-F2A647B53065_fileNameInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__785F9AD9-0BA2-4B63-A38C-F2A647B53065_namespaceInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__785F9AD9-0BA2-4B63-A38C-F2A647B53065_modelInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__785F9AD9-0BA2-4B63-A38C-F2A647B53065_decisionInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__7013660A-ADDF-448D-82B1-E9056ED8585A_fileNameInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__7013660A-ADDF-448D-82B1-E9056ED8585A_namespaceInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__7013660A-ADDF-448D-82B1-E9056ED8585A_modelInputXItem" structureRef="java.lang.String"/>
  <bpmn2:itemDefinition id="__7013660A-ADDF-448D-82B1-E9056ED8585A_decisionInputXItem" structureRef="java.lang.String"/>
  <bpmn2:collaboration id="_99554AD1-74D4-4CE1-A151-396719495A3F" name="Default Collaboration">
    <bpmn2:participant id="_A52CBBC4-A505-4ACE-9D86-2FAA58C8A935" name="Pool Participant" processRef="orchestration"/>
  </bpmn2:collaboration>
  <bpmn2:process id="orchestration" drools:packageName="com.example.orchestration" drools:version="1.0" drools:adHoc="false" name="orchestration" isExecutable="true" processType="Public">
    <bpmn2:extensionElements>
      <drools:metaData name="LegacyRuleFlow">
        <drools:metaValue><![CDATA[true]]></drools:metaValue>
      </drools:metaData>
    </bpmn2:extensionElements>
    <bpmn2:sequenceFlow id="_C4332DB1-D742-4315-A4AA-C9A55FDC4C36" sourceRef="_7013660A-ADDF-448D-82B1-E9056ED8585A" targetRef="_CFE18428-2CCB-42D6-925A-B1B8FA9924DA">
      <bpmn2:extensionElements>
        <drools:metaData name="isAutoConnection.target">
          <drools:metaValue><![CDATA[true]]></drools:metaValue>
        </drools:metaData>
      </bpmn2:extensionElements>
    </bpmn2:sequenceFlow>
    <bpmn2:sequenceFlow id="_3E2550F9-F9B3-4E5E-9A4B-A626A571EBEA" sourceRef="_A3D617D3-7EF4-48CA-A568-6FBD9141A2B0" targetRef="_F66BB51A-CCFE-4DC4-A46B-1C43D67823E6">
      <bpmn2:extensionElements>
        <drools:metaData name="isAutoConnection.target">
          <drools:metaValue><![CDATA[true]]></drools:metaValue>
        </drools:metaData>
      </bpmn2:extensionElements>
      <bpmn2:conditionExpression xsi:type="bpmn2:tFormalExpression" language="http://www.jboss.org/drools/rule"><![CDATA[com.example.model.Order(inventoryStatus == "INSUFFICIENT")]]></bpmn2:conditionExpression>
    </bpmn2:sequenceFlow>
    <bpmn2:sequenceFlow id="_47674AE5-C8AB-4E92-A7A3-E048E5B207FF" sourceRef="_A3D617D3-7EF4-48CA-A568-6FBD9141A2B0" targetRef="_7013660A-ADDF-448D-82B1-E9056ED8585A">
      <bpmn2:conditionExpression xsi:type="bpmn2:tFormalExpression" language="http://www.jboss.org/drools/rule"><![CDATA[com.example.model.Order(inventoryStatus != "INSUFFICIENT")]]></bpmn2:conditionExpression>
    </bpmn2:sequenceFlow>
    <bpmn2:sequenceFlow id="_43811705-4D03-4166-84AC-28E698FC2304" sourceRef="_785F9AD9-0BA2-4B63-A38C-F2A647B53065" targetRef="_A3D617D3-7EF4-48CA-A568-6FBD9141A2B0"/>
    <bpmn2:sequenceFlow id="_9A4C9ADB-6305-4621-BE80-0D1D5DA576C5" sourceRef="_F4E2B813-EDC9-4055-90B3-646CF59FCADF" targetRef="_785F9AD9-0BA2-4B63-A38C-F2A647B53065"/>
    <bpmn2:sequenceFlow id="_ED85E575-DD35-4012-BF69-ECB67FC2AD2C" sourceRef="_CCBD99E4-C307-4E66-B043-923F3DF39C00" targetRef="_8482730C-7E76-477B-AE8D-86D6CECC7F3F">
      <bpmn2:extensionElements>
        <drools:metaData name="isAutoConnection.target">
          <drools:metaValue><![CDATA[true]]></drools:metaValue>
        </drools:metaData>
      </bpmn2:extensionElements>
      <bpmn2:conditionExpression xsi:type="bpmn2:tFormalExpression" language="http://www.jboss.org/drools/rule"><![CDATA[com.example.model.Order(validationStatus == "FAILED")]]></bpmn2:conditionExpression>
    </bpmn2:sequenceFlow>
    <bpmn2:sequenceFlow id="_B5609FE4-5E38-420E-97B2-C74C848137D6" sourceRef="_CCBD99E4-C307-4E66-B043-923F3DF39C00" targetRef="_F4E2B813-EDC9-4055-90B3-646CF59FCADF">
      <bpmn2:extensionElements>
        <drools:metaData name="isAutoConnection.target">
          <drools:metaValue><![CDATA[true]]></drools:metaValue>
        </drools:metaData>
      </bpmn2:extensionElements>
      <bpmn2:conditionExpression xsi:type="bpmn2:tFormalExpression" language="http://www.jboss.org/drools/rule"><![CDATA[com.example.model.Order(validationStatus != "FAILED")]]></bpmn2:conditionExpression>
    </bpmn2:sequenceFlow>
    <bpmn2:sequenceFlow id="_0C65366C-E08B-49DD-B426-26E1A5D666B7" sourceRef="_9616FFFD-ED70-459D-939D-754EF08D0E41" targetRef="_CCBD99E4-C307-4E66-B043-923F3DF39C00"/>
    <bpmn2:sequenceFlow id="_4A50FBC1-10B2-458C-967D-83F8F36A4CEC" sourceRef="_A8DE4098-333A-435A-A84A-008AAF06A938" targetRef="_9616FFFD-ED70-459D-939D-754EF08D0E41"/>
    <bpmn2:endEvent id="_CFE18428-2CCB-42D6-925A-B1B8FA9924DA">
      <bpmn2:incoming>_C4332DB1-D742-4315-A4AA-C9A55FDC4C36</bpmn2:incoming>
    </bpmn2:endEvent>
    <bpmn2:businessRuleTask id="_7013660A-ADDF-448D-82B1-E9056ED8585A" drools:ruleFlowGroup="final-approval" name="Approval" implementation="http://www.jboss.org/drools/rule">
      <bpmn2:extensionElements>
        <drools:metaData name="elementname">
          <drools:metaValue><![CDATA[Approval]]></drools:metaValue>
        </drools:metaData>
      </bpmn2:extensionElements>
      <bpmn2:incoming>_47674AE5-C8AB-4E92-A7A3-E048E5B207FF</bpmn2:incoming>
      <bpmn2:outgoing>_C4332DB1-D742-4315-A4AA-C9A55FDC4C36</bpmn2:outgoing>
    </bpmn2:businessRuleTask>
    <bpmn2:endEvent id="_F66BB51A-CCFE-4DC4-A46B-1C43D67823E6">
      <bpmn2:incoming>_3E2550F9-F9B3-4E5E-9A4B-A626A571EBEA</bpmn2:incoming>
    </bpmn2:endEvent>
    <bpmn2:exclusiveGateway id="_A3D617D3-7EF4-48CA-A568-6FBD9141A2B0" gatewayDirection="Diverging">
      <bpmn2:incoming>_43811705-4D03-4166-84AC-28E698FC2304</bpmn2:incoming>
      <bpmn2:outgoing>_47674AE5-C8AB-4E92-A7A3-E048E5B207FF</bpmn2:outgoing>
      <bpmn2:outgoing>_3E2550F9-F9B3-4E5E-9A4B-A626A571EBEA</bpmn2:outgoing>
    </bpmn2:exclusiveGateway>
    <bpmn2:businessRuleTask id="_785F9AD9-0BA2-4B63-A38C-F2A647B53065" drools:ruleFlowGroup="inventory-check" name="Inventory" implementation="http://www.jboss.org/drools/rule">
      <bpmn2:extensionElements>
        <drools:metaData name="elementname">
          <drools:metaValue><![CDATA[Inventory]]></drools:metaValue>
        </drools:metaData>
      </bpmn2:extensionElements>
      <bpmn2:incoming>_9A4C9ADB-6305-4621-BE80-0D1D5DA576C5</bpmn2:incoming>
      <bpmn2:outgoing>_43811705-4D03-4166-84AC-28E698FC2304</bpmn2:outgoing>
    </bpmn2:businessRuleTask>
    <bpmn2:businessRuleTask id="_F4E2B813-EDC9-4055-90B3-646CF59FCADF" drools:ruleFlowGroup="pricing-calculation" name="Pricing" implementation="http://www.jboss.org/drools/rule">
      <bpmn2:extensionElements>
        <drools:metaData name="elementname">
          <drools:metaValue><![CDATA[Pricing]]></drools:metaValue>
        </drools:metaData>
      </bpmn2:extensionElements>
      <bpmn2:incoming>_B5609FE4-5E38-420E-97B2-C74C848137D6</bpmn2:incoming>
      <bpmn2:outgoing>_9A4C9ADB-6305-4621-BE80-0D1D5DA576C5</bpmn2:outgoing>
    </bpmn2:businessRuleTask>
    <bpmn2:endEvent id="_8482730C-7E76-477B-AE8D-86D6CECC7F3F">
      <bpmn2:incoming>_ED85E575-DD35-4012-BF69-ECB67FC2AD2C</bpmn2:incoming>
    </bpmn2:endEvent>
    <bpmn2:exclusiveGateway id="_CCBD99E4-C307-4E66-B043-923F3DF39C00" gatewayDirection="Diverging">
      <bpmn2:incoming>_0C65366C-E08B-49DD-B426-26E1A5D666B7</bpmn2:incoming>
      <bpmn2:outgoing>_B5609FE4-5E38-420E-97B2-C74C848137D6</bpmn2:outgoing>
      <bpmn2:outgoing>_ED85E575-DD35-4012-BF69-ECB67FC2AD2C</bpmn2:outgoing>
    </bpmn2:exclusiveGateway>
    <bpmn2:businessRuleTask id="_9616FFFD-ED70-459D-939D-754EF08D0E41" drools:ruleFlowGroup="order-validation" name="Validation" implementation="http://www.jboss.org/drools/rule">
      <bpmn2:extensionElements>
        <drools:metaData name="elementname">
          <drools:metaValue><![CDATA[Validation]]></drools:metaValue>
        </drools:metaData>
      </bpmn2:extensionElements>
      <bpmn2:incoming>_4A50FBC1-10B2-458C-967D-83F8F36A4CEC</bpmn2:incoming>
      <bpmn2:outgoing>_0C65366C-E08B-49DD-B426-26E1A5D666B7</bpmn2:outgoing>
    </bpmn2:businessRuleTask>
    <bpmn2:startEvent id="_A8DE4098-333A-435A-A84A-008AAF06A938">
      <bpmn2:outgoing>_4A50FBC1-10B2-458C-967D-83F8F36A4CEC</bpmn2:outgoing>
    </bpmn2:startEvent>
  </bpmn2:process>
  <bpmndi:BPMNDiagram>
    <bpmndi:BPMNPlane bpmnElement="orchestration">
      <bpmndi:BPMNShape id="shape__A8DE4098-333A-435A-A84A-008AAF06A938" bpmnElement="_A8DE4098-333A-435A-A84A-008AAF06A938">
        <dc:Bounds height="56" width="56" x="111" y="177"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="shape__9616FFFD-ED70-459D-939D-754EF08D0E41" bpmnElement="_9616FFFD-ED70-459D-939D-754EF08D0E41">
        <dc:Bounds height="102" width="154" x="247" y="154"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="shape__CCBD99E4-C307-4E66-B043-923F3DF39C00" bpmnElement="_CCBD99E4-C307-4E66-B043-923F3DF39C00">
        <dc:Bounds height="56" width="56" x="481" y="177"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="shape__8482730C-7E76-477B-AE8D-86D6CECC7F3F" bpmnElement="_8482730C-7E76-477B-AE8D-86D6CECC7F3F">
        <dc:Bounds height="56" width="56" x="481" y="324.25"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="shape__F4E2B813-EDC9-4055-90B3-646CF59FCADF" bpmnElement="_F4E2B813-EDC9-4055-90B3-646CF59FCADF">
        <dc:Bounds height="102" width="154" x="598" y="154"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="shape__785F9AD9-0BA2-4B63-A38C-F2A647B53065" bpmnElement="_785F9AD9-0BA2-4B63-A38C-F2A647B53065">
        <dc:Bounds height="102" width="154" x="831" y="154"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="shape__A3D617D3-7EF4-48CA-A568-6FBD9141A2B0" bpmnElement="_A3D617D3-7EF4-48CA-A568-6FBD9141A2B0">
        <dc:Bounds height="56" width="56" x="1064" y="177"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="shape__F66BB51A-CCFE-4DC4-A46B-1C43D67823E6" bpmnElement="_F66BB51A-CCFE-4DC4-A46B-1C43D67823E6">
        <dc:Bounds height="56" width="56" x="1064.3333333333333" y="324"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="shape__7013660A-ADDF-448D-82B1-E9056ED8585A" bpmnElement="_7013660A-ADDF-448D-82B1-E9056ED8585A">
        <dc:Bounds height="102" width="154" x="1200" y="154"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="shape__CFE18428-2CCB-42D6-925A-B1B8FA9924DA" bpmnElement="_CFE18428-2CCB-42D6-925A-B1B8FA9924DA">
        <dc:Bounds height="56" width="56" x="1248.9999999999998" y="324"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="edge_shape__A8DE4098-333A-435A-A84A-008AAF06A938_to_shape__9616FFFD-ED70-459D-939D-754EF08D0E41" bpmnElement="_4A50FBC1-10B2-458C-967D-83F8F36A4CEC">
        <di:waypoint x="139" y="205"/>
        <di:waypoint x="324" y="205"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="edge_shape__9616FFFD-ED70-459D-939D-754EF08D0E41_to_shape__CCBD99E4-C307-4E66-B043-923F3DF39C00" bpmnElement="_0C65366C-E08B-49DD-B426-26E1A5D666B7">
        <di:waypoint x="401" y="205"/>
        <di:waypoint x="481" y="205"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="edge_shape__CCBD99E4-C307-4E66-B043-923F3DF39C00_to_shape__F4E2B813-EDC9-4055-90B3-646CF59FCADF" bpmnElement="_B5609FE4-5E38-420E-97B2-C74C848137D6">
        <di:waypoint x="509" y="205"/>
        <di:waypoint x="598" y="205"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="edge_shape__CCBD99E4-C307-4E66-B043-923F3DF39C00_to_shape__8482730C-7E76-477B-AE8D-86D6CECC7F3F" bpmnElement="_ED85E575-DD35-4012-BF69-ECB67FC2AD2C">
        <di:waypoint x="509" y="205"/>
        <di:waypoint x="509" y="324.25"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="edge_shape__F4E2B813-EDC9-4055-90B3-646CF59FCADF_to_shape__785F9AD9-0BA2-4B63-A38C-F2A647B53065" bpmnElement="_9A4C9ADB-6305-4621-BE80-0D1D5DA576C5">
        <di:waypoint x="675" y="205"/>
        <di:waypoint x="908" y="205"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="edge_shape__785F9AD9-0BA2-4B63-A38C-F2A647B53065_to_shape__A3D617D3-7EF4-48CA-A568-6FBD9141A2B0" bpmnElement="_43811705-4D03-4166-84AC-28E698FC2304">
        <di:waypoint x="985" y="205"/>
        <di:waypoint x="1064" y="205"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="edge_shape__A3D617D3-7EF4-48CA-A568-6FBD9141A2B0_to_shape__7013660A-ADDF-448D-82B1-E9056ED8585A" bpmnElement="_47674AE5-C8AB-4E92-A7A3-E048E5B207FF">
        <di:waypoint x="1092" y="205"/>
        <di:waypoint x="1277" y="205"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="edge_shape__A3D617D3-7EF4-48CA-A568-6FBD9141A2B0_to_shape__F66BB51A-CCFE-4DC4-A46B-1C43D67823E6" bpmnElement="_3E2550F9-F9B3-4E5E-9A4B-A626A571EBEA">
        <di:waypoint x="1092" y="205"/>
        <di:waypoint x="1092.3333333333333" y="324"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="edge_shape__7013660A-ADDF-448D-82B1-E9056ED8585A_to_shape__CFE18428-2CCB-42D6-925A-B1B8FA9924DA" bpmnElement="_C4332DB1-D742-4315-A4AA-C9A55FDC4C36">
        <di:waypoint x="1277" y="205"/>
        <di:waypoint x="1325.9999999999998" y="324"/>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
  <bpmn2:relationship type="BPSimData">
    <bpmn2:extensionElements>
      <bpsim:BPSimData>
        <bpsim:Scenario id="default" name="Simulationscenario">
          <bpsim:ScenarioParameters/>
          <bpsim:ElementParameters elementRef="_A8DE4098-333A-435A-A84A-008AAF06A938">
            <bpsim:TimeParameters>
              <bpsim:ProcessingTime>
                <bpsim:NormalDistribution mean="0" standardDeviation="0"/>
              </bpsim:ProcessingTime>
            </bpsim:TimeParameters>
          </bpsim:ElementParameters>
          <bpsim:ElementParameters elementRef="_9616FFFD-ED70-459D-939D-754EF08D0E41">
            <bpsim:TimeParameters>
              <bpsim:ProcessingTime>
                <bpsim:NormalDistribution mean="0" standardDeviation="0"/>
              </bpsim:ProcessingTime>
            </bpsim:TimeParameters>
            <bpsim:ResourceParameters>
              <bpsim:Availability>
                <bpsim:FloatingParameter value="0"/>
              </bpsim:Availability>
              <bpsim:Quantity>
                <bpsim:FloatingParameter value="0"/>
              </bpsim:Quantity>
            </bpsim:ResourceParameters>
            <bpsim:CostParameters>
              <bpsim:UnitCost>
                <bpsim:FloatingParameter value="0"/>
              </bpsim:UnitCost>
            </bpsim:CostParameters>
          </bpsim:ElementParameters>
          <bpsim:ElementParameters elementRef="_F4E2B813-EDC9-4055-90B3-646CF59FCADF">
            <bpsim:TimeParameters>
              <bpsim:ProcessingTime>
                <bpsim:NormalDistribution mean="0" standardDeviation="0"/>
              </bpsim:ProcessingTime>
            </bpsim:TimeParameters>
            <bpsim:ResourceParameters>
              <bpsim:Availability>
                <bpsim:FloatingParameter value="0"/>
              </bpsim:Availability>
              <bpsim:Quantity>
                <bpsim:FloatingParameter value="0"/>
              </bpsim:Quantity>
            </bpsim:ResourceParameters>
            <bpsim:CostParameters>
              <bpsim:UnitCost>
                <bpsim:FloatingParameter value="0"/>
              </bpsim:UnitCost>
            </bpsim:CostParameters>
          </bpsim:ElementParameters>
          <bpsim:ElementParameters elementRef="_785F9AD9-0BA2-4B63-A38C-F2A647B53065">
            <bpsim:TimeParameters>
              <bpsim:ProcessingTime>
                <bpsim:NormalDistribution mean="0" standardDeviation="0"/>
              </bpsim:ProcessingTime>
            </bpsim:TimeParameters>
            <bpsim:ResourceParameters>
              <bpsim:Availability>
                <bpsim:FloatingParameter value="0"/>
              </bpsim:Availability>
              <bpsim:Quantity>
                <bpsim:FloatingParameter value="0"/>
              </bpsim:Quantity>
            </bpsim:ResourceParameters>
            <bpsim:CostParameters>
              <bpsim:UnitCost>
                <bpsim:FloatingParameter value="0"/>
              </bpsim:UnitCost>
            </bpsim:CostParameters>
          </bpsim:ElementParameters>
          <bpsim:ElementParameters elementRef="_7013660A-ADDF-448D-82B1-E9056ED8585A">
            <bpsim:TimeParameters>
              <bpsim:ProcessingTime>
                <bpsim:NormalDistribution mean="0" standardDeviation="0"/>
              </bpsim:ProcessingTime>
            </bpsim:TimeParameters>
            <bpsim:ResourceParameters>
              <bpsim:Availability>
                <bpsim:FloatingParameter value="0"/>
              </bpsim:Availability>
              <bpsim:Quantity>
                <bpsim:FloatingParameter value="0"/>
              </bpsim:Quantity>
            </bpsim:ResourceParameters>
            <bpsim:CostParameters>
              <bpsim:UnitCost>
                <bpsim:FloatingParameter value="0"/>
              </bpsim:UnitCost>
            </bpsim:CostParameters>
          </bpsim:ElementParameters>
        </bpsim:Scenario>
      </bpsim:BPSimData>
    </bpmn2:extensionElements>
    <bpmn2:source>_TnIXgFtyED6BKcny5DmV6Q</bpmn2:source>
    <bpmn2:target>_TnIXgFtyED6BKcny5DmV6Q</bpmn2:target>
  </bpmn2:relationship>
</bpmn2:definitions>`,gF=`package com.example.rules.validation;

import com.example.model.*;
import java.util.Date;

// NODE 1: ORDER VALIDATION RULES
// Rule Flow Group: order-validation

rule "Check Blacklisted Customer"
    ruleflow-group "order-validation"
    when
        $metrics : ProcessMetrics()
        $order : Order(validationStatus == null, $customer : customer)
        Customer($customer.customerId == customerId, blacklisted == true)
    then
        //System.out.println("Rule fired: Check Blacklisted Customer");
        $order.setValidationStatus("FAILED");
        $order.setStatus("REJECTED");
        $order.setRejectionReason("Customer is blacklisted");
        $metrics.incrementValidationRulesExecuted();
        update($order);
end

rule "Validate Minimum Order Amount"
    ruleflow-group "order-validation"
    when
        $order : Order(validationStatus == null, totalAmount < 10.0)
        $metrics : ProcessMetrics()
    then
        //System.out.println("Rule fired: Validate Minimum Order Amount");
        $order.setValidationStatus("FAILED");
        $order.setStatus("REJECTED");
        $order.setRejectionReason("Order amount below minimum ($10)");
        $metrics.incrementValidationRulesExecuted();
        update($order);
end

rule "Validate Payment Method"
    ruleflow-group "order-validation"
    when
        $order : Order(validationStatus == null, 
                      paymentMethod == null || paymentMethod == "")
        $metrics : ProcessMetrics()
    then
        //System.out.println("Rule fired: Validate Payment Method");
        $order.setValidationStatus("FAILED");
        $order.setStatus("REJECTED");
        $order.setRejectionReason("Invalid payment method");
        $metrics.incrementValidationRulesExecuted();
        update($order);
end

rule "Check Order Items Count"
    ruleflow-group "order-validation"
    when
        $order : Order(validationStatus == null, items.size() == 0)
        $metrics : ProcessMetrics()
    then
        //System.out.println("Rule fired: Check Order Items Count");
        $order.setValidationStatus("FAILED");
        $order.setStatus("REJECTED");
        $order.setRejectionReason("Order has no items");
        $metrics.incrementValidationRulesExecuted();
        update($order);
end

rule "Set Default Shipping Method"
    ruleflow-group "order-validation"
    when
        $order : Order(validationStatus == null,
                      shippingMethod == null || shippingMethod == "")
        $metrics : ProcessMetrics()
    then
        //System.out.println("Rule fired: Set Default Shipping Method");
        $order.setShippingMethod("STANDARD");
        $metrics.incrementValidationRulesExecuted();
        update($order);
end

rule "Mark Validation Passed"
    ruleflow-group "order-validation"
    when
        $metrics : ProcessMetrics()
        $order : Order(validationStatus == null,
                      totalAmount >= 10.0,
                      items.size() > 0,
                      paymentMethod != null && paymentMethod != "",
                      shippingMethod != null && shippingMethod != "",
                      $customer : customer)
        Customer($customer.customerId == customerId, blacklisted == false)
    then
        //System.out.println("Rule fired: Mark Validation Passed");
        $order.setValidationStatus("PASSED");
        $order.setStatus("VALIDATED");
        $metrics.incrementValidationRulesExecuted();
        update($order);
end
`,vF=`package com.example.rules.pricing;

import com.example.model.*;
import java.util.Date;

// NODE 2: PRICING AND DISCOUNT RULES
// Rule Flow Group: pricing-calculation

rule "VIP Customer Discount"
    ruleflow-group "pricing-calculation"
    when
        $metrics : ProcessMetrics()
        $order : Order(validationStatus == "PASSED",
                      pricingStatus == null,
                      $customer : customer)
        Customer($customer.customerId == customerId, customerType == "VIP")
    then
        //System.out.println("Rule fired: VIP Customer Discount - 20%");
        double discount = $order.getTotalAmount() * 0.20;
        $order.setDiscount($order.getDiscount() + discount);
        $metrics.incrementPricingRulesExecuted();
        update($order);
end

rule "Premium Customer Discount"
    ruleflow-group "pricing-calculation"
    when
        $metrics : ProcessMetrics()
        $order : Order(validationStatus == "PASSED",
                      pricingStatus == null,
                      $customer : customer)
        Customer($customer.customerId == customerId, customerType == "PREMIUM")
    then
        //System.out.println("Rule fired: Premium Customer Discount - 10%");
        double discount = $order.getTotalAmount() * 0.10;
        $order.setDiscount($order.getDiscount() + discount);
        $metrics.incrementPricingRulesExecuted();
        update($order);
end

rule "Bulk Order Discount"
    ruleflow-group "pricing-calculation"
    when
        $metrics : ProcessMetrics()
        $order : Order(validationStatus == "PASSED",
                      pricingStatus == null,
                      totalAmount > 1000)
    then
        //System.out.println("Rule fired: Bulk Order Discount - 5%");
        double discount = $order.getTotalAmount() * 0.05;
        $order.setDiscount($order.getDiscount() + discount);
        $metrics.incrementPricingRulesExecuted();
        update($order);
end

rule "Calculate Standard Shipping"
    ruleflow-group "pricing-calculation"
    when
        $metrics : ProcessMetrics()
        $order : Order(validationStatus == "PASSED",
                      pricingStatus == null,
                      shippingMethod == "STANDARD",
                      shippingCalculated == false)  // Check flag instead of cost
    then
        //System.out.println("Rule fired: Calculate Standard Shipping");
        $order.setShippingCost(9.99);
        $order.setShippingCalculated(true);  // Set flag
        $metrics.incrementPricingRulesExecuted();
        update($order);
end

rule "Calculate Express Shipping"
    ruleflow-group "pricing-calculation"
    when
        $metrics : ProcessMetrics()
        $order : Order(validationStatus == "PASSED",
                      pricingStatus == null,
                      shippingMethod == "EXPRESS",
                      shippingCalculated == false)
    then
        //System.out.println("Rule fired: Calculate Express Shipping");
        $order.setShippingCost(19.99);
        $order.setShippingCalculated(true);
        $metrics.incrementPricingRulesExecuted();
        update($order);
end

rule "Calculate Overnight Shipping"
    ruleflow-group "pricing-calculation"
    when
        $metrics : ProcessMetrics()
        $order : Order(validationStatus == "PASSED",
                      pricingStatus == null,
                      shippingMethod == "OVERNIGHT",
                      shippingCalculated == false)
    then
        //System.out.println("Rule fired: Calculate Overnight Shipping");
        $order.setShippingCost(39.99);
        $order.setShippingCalculated(true);
        $metrics.incrementPricingRulesExecuted();
        update($order);
end

rule "Free Shipping for VIP"
    ruleflow-group "pricing-calculation"
    when
        $metrics : ProcessMetrics()
        $order : Order(validationStatus == "PASSED",
                      pricingStatus == null,
                      shippingCalculated == true,  // Only after shipping is calculated
                      $customer : customer,
                      shippingCost > 0)
        Customer($customer.customerId == customerId, customerType == "VIP")
    then
        //System.out.println("Rule fired: Free Shipping for VIP");
        $order.setShippingCost(0);
        // Don't reset shippingCalculated flag
        $metrics.incrementPricingRulesExecuted();
        update($order);
end

rule "Finalize Pricing"
    ruleflow-group "pricing-calculation"
    when
        $metrics : ProcessMetrics()
        $order : Order(validationStatus == "PASSED",
                      pricingStatus == null)
    then
        //System.out.println("Rule fired: Finalize Pricing");
        $order.setPricingStatus("COMPLETED");
        $order.setStatus("PRICED");
        double finalAmount = $order.getTotalAmount() - $order.getDiscount() + $order.getShippingCost();
        $order.setFinalAmount(finalAmount);
        $metrics.incrementPricingRulesExecuted();
        update($order);
end
`,yF=`package com.example;

import com.example.model.Customer;
import com.example.model.Order;
import com.example.model.OrderItem;
import com.example.model.ProcessMetrics;
import com.example.orchestration.StartProcessOrchestrationService;
import org.junit.jupiter.api.Test;

public class ApplicationTest {

    @Test
    public void testAletyxBPMNOrchestration() {
        StartProcessOrchestrationService service = new StartProcessOrchestrationService();
        
        // Create test data
        Customer customer = createVipCustomer("CUST-2");
        Order order = createTestOrder("ORDER-2", customer);
        ProcessMetrics metrics = new ProcessMetrics();
        
        // Process the order
        service.processOrder(order, customer, metrics);
        
        // Verify that rules were executed
        assert metrics.getRulesExecuted() > 0 : "Rules should have been executed";
        assert order.getStatus() != null : "Order status should be set";
        
        System.out.println("Aletyx BPMN Orchestration Test Completed Successfully!");
        System.out.println("Rules Executed: " + metrics.getRulesExecuted());
        System.out.println("Final Order Status: " + order.getStatus());
    }

    private Customer createVipCustomer(String customerId) {
        return new Customer(customerId, "VIP", 5000, 10000.0, false, 50);
    }

    private Customer createRegularCustomer(String customerId) {
        return new Customer(customerId, "REGULAR", 500, 2000.0, false, 10);
    }

    private Order createTestOrder(String orderId, Customer customer) {
        Order order = new Order(orderId, customer);
        order.setPaymentMethod("CREDIT_CARD");
        order.setShippingMethod("STANDARD");
        order.setRushOrder(false);
        
        // Add test items
        OrderItem item1 = new OrderItem("PROD-1", "Test Product 1", "ELECTRONICS", 2, 150.0, 50);
        item1.setHazardous(false);
        item1.setFragile(true);
        item1.setWeight(2.5);
        order.addItem(item1);
        
        OrderItem item2 = new OrderItem("PROD-2", "Test Product 2", "CLOTHING", 1, 75.0, 100);
        item2.setHazardous(false);
        item2.setFragile(false);
        item2.setWeight(0.5);
        order.addItem(item2);
        
        return order;
    }
}`,iv={registry:{default:Object.assign({"../templates/registry/README-settings.md":C6,"../templates/registry/settings.xml":A6})},"mcp-dmn":{default:Object.assign({}),springboot:Object.assign({"../templates/mcp-dmn/springboot/pom.xml":S6,"../templates/mcp-dmn/springboot/src/main/java/com/example/AletyxSpringbootApplication.java":D6,"../templates/mcp-dmn/springboot/src/main/resources/DiscountPolicy.dmn":k6,"../templates/mcp-dmn/springboot/src/main/resources/application.properties":F6}),quarkus:Object.assign({"../templates/mcp-dmn/quarkus/pom.xml":I6,"../templates/mcp-dmn/quarkus/src/main/resources/DiscountPolicy.dmn":P6,"../templates/mcp-dmn/quarkus/src/main/resources/application.properties":B6})},"decision-service":{default:Object.assign({}),springboot:Object.assign({"../templates/decision-service/springboot/README.md":R6,"../templates/decision-service/springboot/pom.xml":N6,"../templates/decision-service/springboot/src/main/java/com/example/KogitoSpringbootApplication.java":T6,"../templates/decision-service/springboot/src/main/resources/Traffic Violation.dmn":M6,"../templates/decision-service/springboot/src/main/resources/application.properties":O6,"../templates/decision-service/springboot/src/test/java/com/example/TrafficViolationTest.java":L6,"../templates/decision-service/springboot/src/test/java/testscenario/KogitoScenarioJunitActivatorTest.java":j6,"../templates/decision-service/springboot/src/test/resources/TrafficViolationTest.scesim":V6}),quarkus:Object.assign({"../templates/decision-service/quarkus/README.md":z6,"../templates/decision-service/quarkus/pom.xml":$6,"../templates/decision-service/quarkus/src/main/resources/Traffic Violation.dmn":U6,"../templates/decision-service/quarkus/src/main/resources/application.properties":W6})},"workflow-service":{default:Object.assign({}),spring:Object.assign({}),quarkus:Object.assign({})},"rules-service":{default:Object.assign({}),springboot:Object.assign({}),quarkus:Object.assign({"../templates/rules-service/quarkus/README.md":q6,"../templates/rules-service/quarkus/pom.xml":H6})},"classic-ruleflow":{default:Object.assign({}),springboot:Object.assign({"../templates/classic-ruleflow/springboot/pom.xml":G6,"../templates/classic-ruleflow/springboot/src/main/java/com/example/model/Customer.java":Z6,"../templates/classic-ruleflow/springboot/src/main/java/com/example/model/Order.java":K6,"../templates/classic-ruleflow/springboot/src/main/java/com/example/model/OrderItem.java":Q6,"../templates/classic-ruleflow/springboot/src/main/java/com/example/model/ProcessMetrics.java":X6,"../templates/classic-ruleflow/springboot/src/main/java/com/example/orchestration/StartProcessOrchestrationService.java":Y6,"../templates/classic-ruleflow/springboot/src/main/resources/META-INF/kmodule.xml":J6,"../templates/classic-ruleflow/springboot/src/main/resources/final-approval.drl":eF,"../templates/classic-ruleflow/springboot/src/main/resources/inventory-check.drl":tF,"../templates/classic-ruleflow/springboot/src/main/resources/orchestration.bpmn":nF,"../templates/classic-ruleflow/springboot/src/main/resources/order-validation.drl":rF,"../templates/classic-ruleflow/springboot/src/main/resources/pricing-calculation.drl":iF,"../templates/classic-ruleflow/springboot/src/test/java/com/example/ApplicationTest.java":oF}),quarkus:Object.assign({"../templates/classic-ruleflow/quarkus/pom.xml":sF,"../templates/classic-ruleflow/quarkus/src/main/java/com/example/model/Customer.java":aF,"../templates/classic-ruleflow/quarkus/src/main/java/com/example/model/Order.java":lF,"../templates/classic-ruleflow/quarkus/src/main/java/com/example/model/OrderItem.java":uF,"../templates/classic-ruleflow/quarkus/src/main/java/com/example/model/ProcessMetrics.java":cF,"../templates/classic-ruleflow/quarkus/src/main/java/com/example/orchestration/StartProcessOrchestrationService.java":dF,"../templates/classic-ruleflow/quarkus/src/main/resources/META-INF/kmodule.xml":pF,"../templates/classic-ruleflow/quarkus/src/main/resources/final-approval.drl":fF,"../templates/classic-ruleflow/quarkus/src/main/resources/inventory-check.drl":mF,"../templates/classic-ruleflow/quarkus/src/main/resources/orchestration.bpmn":hF,"../templates/classic-ruleflow/quarkus/src/main/resources/order-validation.drl":gF,"../templates/classic-ruleflow/quarkus/src/main/resources/pricing-calculation.drl":vF,"../templates/classic-ruleflow/quarkus/src/test/java/com/example/ApplicationTest.java":yF})}};function xF(e,t,n,r){t&&console.log(`Loading templates for ${e} with platform=${t}`);const i=(t==null?void 0:t.toLowerCase())||"default",o=iv[e];if(!o)return console.warn(`No templates found for use case: ${e}`),{};let s=o[i];if(!s)return console.warn(`No templates found for platform: ${i}`),{};const a=iv.registry.default,l={},u=`../templates/${e}/${i}/`;for(const[c,m]of Object.entries(s)){const d=c.replace(u,"");l[d]=m}if(r)for(const[c,m]of Object.entries(a)){const d=c.replace("../templates/registry","");l[d]=m}return l}function EF(e,t){return b6.compile(e)(t)}function _F(e,t,n,r){return xF(e,t,n,r)}function wF(e){if(!e.useCaseId)throw new Error("No use case ID provided in configuration");const t=_F(e.useCaseId,e.platform,e.target,!!e.mavenAccessToken),n=[];for(const[r,i]of Object.entries(t)){const o=EF(i,e);n.push({path:r,content:o})}return n}async function bF(e){if(!e.useCaseId)throw new Error("No use case selected");try{const t=wF(e),n=new Ek;for(const i of t)n.file(i.path,i.content);const r=await n.generateAsync({type:"blob"});_k.saveAs(r,`${e.artifact}.zip`)}catch(t){throw console.error("Error generating zip file:",t),new Error("Failed to generate project: "+(t instanceof Error?t.message:"Unknown error"))}}const ov="/assets/aletyx-logo-dark-CTclgfX-.png";function CF(){const{toast:e}=zf(),[t,n]=S.useState(void 0),[r,i]=S.useState("SpringBoot"),[o,s]=S.useState("Aletyx"),[a,l]=S.useState([]),[u,c]=S.useState(!1),[m,d]=S.useState({group:"com.example",artifact:"start-with-aletyx",version:"1.0.0-SNAPSHOT",platform:"SpringBoot",target:"Aletyx",targetVersion:"10.1.1-aletyx-innovator",platformVersion:"3.4.10",bomGroupId:"ai.aletyx",bomArtifactId:"aletyx-automation-bom"}),p=(y,v)=>y?v==="Quarkus"?y==="10.1.0-aletyx-pioneer"?"3.15.3.1":y.startsWith("10.1.0-aletyx-")||y.startsWith("10.1.1-aletyx-")?"3.20.3":y==="10.0.0"?"3.8.4":"3.15.3.1":v==="SpringBoot"?y==="10.1.0-aletyx-pioneer"?"3.2.5":y.startsWith("10.1.0-aletyx-")?"3.4.4":y.startsWith("10.1.1-aletyx-")?"3.4.10":y==="10.0.0"?"3.1.12":"3.4.4":v==="Quarkus"?"3.15.3.1":"3.3.5":v==="Quarkus"?"3.15.3.1":"3.4.10";S.useEffect(()=>{const y=x=>{const E=x.detail;i(E),d(_=>{const F=p(_.targetVersion||"10.1.0-aletyx-innovator",E);return{..._,platform:E,platformVersion:F}})},v=x=>{const E=x.detail;s(E),d(_=>{let F,D,P;E==="Aletyx"?(D="aletyx-bom",P="aletyx-automation-bom",_.targetVersion==="10.1.0-aletyx-innovator"?F=_.targetVersion:F="10.1.1-aletyx-innovator"):(D="org.kie.kogito",P="kogito-bom",F="10.1.0");const N=p(F,_.platform||r);return{..._,target:E,bomGroupId:D,bomArtifactId:P,targetVersion:F,platformVersion:N}})},g=x=>{const E=x.detail;d(_=>{const F=p(E,_.platform||r);return{..._,targetVersion:E,platformVersion:F}})};return window.addEventListener("platformChanged",y),window.addEventListener("targetChanged",v),window.addEventListener("targetVersionChanged",g),()=>{window.removeEventListener("platformChanged",y),window.removeEventListener("targetChanged",v),window.removeEventListener("targetVersionChanged",g)}},[]);const f=y=>{n(y)},h=async y=>{if(!t){e({title:"Selection required",description:"Please select a use case before downloading.",variant:"destructive"});return}i(y.platform),s(y.target),d(y);const v={...y,useCaseId:t};try{window.gtag("event","download_project",{platform:y.platform,target:y.target,use_case_id:t,version:y.version}),await bF(v),e({title:"Success!",description:"Your project has been downloaded successfully."}),y.target==="Aletyx"&&c(!0)}catch(g){window.gtag("event","download_error",{error_message:g instanceof Error?g.message:"Unknown error",platform:y.platform,target:y.target,use_case_id:t}),e({title:"Error",description:g instanceof Error?g.message:"Failed to generate project",variant:"destructive"})}};return w.jsxs(w.Fragment,{children:[w.jsx("header",{className:"bg-black text-white",children:w.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center",children:[w.jsxs("div",{className:"flex items-center space-x-4",children:[w.jsxs("div",{className:"flex items-center",children:[w.jsx("img",{src:ov,alt:"Aletyx Logo",className:"h-10"}),w.jsx("div",{className:"md:hidden ml-2 mt-1",children:w.jsx("h1",{className:"text-sm font-semibold text-white",children:"Start"})})]}),w.jsx("div",{className:"hidden md:block border-l border-white/20 h-10 mx-2"}),w.jsxs("div",{className:"hidden md:flex flex-col justify-center",children:[w.jsx("h1",{className:"text-lg font-semibold text-white",children:"Start"}),w.jsx("p",{className:"text-xs text-gray-300",children:"Create a new project with your preferred use case"})]})]}),w.jsxs("div",{className:"flex space-x-2 md:space-x-4 items-center",children:[w.jsxs("a",{href:"https://docs.aletyx.ai",target:"_blank",rel:"noopener noreferrer",className:"hidden md:flex text-white hover:text-orange-400 font-medium items-center",children:["Documentation",w.jsx("svg",{className:"w-4 h-4 ml-1",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]}),w.jsx("a",{href:"https://aletyx.ai",target:"_blank",className:"hidden md:block text-white hover:text-orange-400 font-medium",children:"aletyx.ai"}),w.jsx("a",{href:"https://aletyx.ai/contact-us/",target:"_blank",rel:"noopener noreferrer",className:"btn-header-cta font-medium px-5 py-2.5 rounded-full text-sm md:text-base whitespace-nowrap",children:"Talk to an Expert"})]})]})}),w.jsx("main",{className:"max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 mt-4",children:w.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[w.jsx("div",{className:"lg:col-span-4",children:w.jsxs("div",{className:"bg-white shadow-lg rounded-lg p-6",children:[w.jsx("h2",{className:"text-xl font-semibold text-foreground mb-6",children:"Project Configuration"}),w.jsx(G5,{onSubmit:h,disabled:!t,initialValues:m})]})}),w.jsx("div",{className:"lg:col-span-8",children:w.jsx("div",{className:"bg-white shadow-lg rounded-lg p-6",children:w.jsx(Q5,{platform:r,target:o,onSelectUseCase:f,activeLabels:a,onLabelsChange:l})})})]})}),w.jsx(yk,{isOpen:u,onClose:()=>c(!1)}),w.jsx("footer",{className:"bg-black text-white mt-12 py-10",children:w.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[w.jsxs("div",{className:"flex flex-col md:flex-row",children:[w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 flex-grow",children:[w.jsxs("div",{className:"col-span-1",children:[w.jsx("img",{src:ov,alt:"Aletyx Logo",className:"h-8 mb-4"}),w.jsx("p",{className:"text-sm text-gray-300 mb-4 max-w-md",children:"Empowering businesses with AI-driven decision-making and intelligent automation. Scalable solutions for Apache KIE, Drools, and Kogito."})]}),w.jsxs("div",{className:"col-span-1",children:[w.jsxs("ul",{className:"space-y-2",children:[w.jsx("li",{children:w.jsx("a",{href:"https://aletyx.ai/build-of-drools/",target:"_blank",className:"text-gray-300 hover:text-white text-sm",children:"Enterprise build of Drools"})}),w.jsx("li",{children:w.jsx("a",{href:"https://aletyx.ai/build-of-kogito/",target:"_blank",className:"text-gray-300 hover:text-white text-sm",children:"Enterprise build of Kogito"})}),w.jsx("li",{children:w.jsx("a",{href:"https://aletyx.ai/pricing/",target:"_blank",className:"text-gray-300 hover:text-white text-sm",children:"Pricing"})})]}),w.jsxs("div",{className:"mt-6",children:[w.jsx("h3",{className:"text-base font-medium mb-4",children:"SERVICES"}),w.jsxs("ul",{className:"space-y-2",children:[w.jsx("li",{children:w.jsx("a",{href:"https://aletyx.ai/training-programs/",target:"_blank",className:"text-gray-300 hover:text-white text-sm",children:"Training"})}),w.jsx("li",{children:w.jsx("a",{href:"https://aletyx.ai/consulting-services/",target:"_blank",className:"text-gray-300 hover:text-white text-sm",children:"Consulting"})})]})]})]}),w.jsxs("div",{children:[w.jsx("h3",{className:"text-base font-medium mb-4",children:"RESOURCES"}),w.jsxs("ul",{className:"space-y-2",children:[w.jsx("li",{children:w.jsx("a",{href:"https://aletyx.ai/experience/",target:"_blank",className:"text-gray-300 hover:text-white text-sm",children:"Aletyx Experience"})}),w.jsx("li",{children:w.jsxs("a",{href:"https://docs.aletyx.ai",target:"_blank",className:"text-gray-300 hover:text-white text-sm flex items-center",children:["Documentation",w.jsx("svg",{className:"w-3 h-3 ml-1",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:w.jsx("path",{d:"M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})}),w.jsx("li",{children:w.jsx("a",{href:"https://aletyx.ai/category/blog/",target:"_blank",className:"text-gray-300 hover:text-white text-sm",children:"Blog"})})]}),w.jsxs("div",{className:"mt-6",children:[w.jsx("h3",{className:"text-base font-medium mb-4",children:"DEVELOPER TOOLS"}),w.jsxs("ul",{className:"space-y-2",children:[w.jsx("li",{children:w.jsxs("a",{href:"#",className:"text-gray-300 hover:text-white text-sm flex items-center",children:["vs.code",w.jsx("svg",{className:"w-3 h-3 ml-1",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:w.jsx("path",{d:"M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})}),w.jsx("li",{children:w.jsxs("a",{href:"https://start.aletyx.ai",target:"_blank",className:"text-gray-300 hover:text-white text-sm flex items-center",children:["start.aletyx.ai",w.jsx("svg",{className:"w-3 h-3 ml-1",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:w.jsx("path",{d:"M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})}),w.jsx("li",{children:w.jsxs("a",{href:"https://playground.aletyx.ai",target:"_blank",className:"text-gray-300 hover:text-white text-sm flex items-center",children:["playground.aletyx.ai",w.jsx("svg",{className:"w-3 h-3 ml-1",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:w.jsx("path",{d:"M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})}),w.jsx("li",{children:w.jsxs("a",{href:"https://maven.aletyx.services",target:"_blank",className:"text-gray-300 hover:text-white text-sm flex items-center",children:["maven.aletyx.services",w.jsx("svg",{className:"w-3 h-3 ml-1",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:w.jsx("path",{d:"M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})}),w.jsx("li",{children:w.jsxs("a",{href:"https://registry.aletyx.services",target:"_blank",className:"text-gray-300 hover:text-white text-sm flex items-center",children:["registry.aletyx.services",w.jsx("svg",{className:"w-3 h-3 ml-1",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:w.jsx("path",{d:"M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})})]})]})]}),w.jsxs("div",{children:[w.jsx("h3",{className:"text-base font-medium mb-4",children:"COMPANY"}),w.jsxs("ul",{className:"space-y-2",children:[w.jsx("li",{children:w.jsx("a",{href:"https://aletyx.ai/about-us/",target:"_blank",className:"text-gray-300 hover:text-white text-sm",children:"About Us"})}),w.jsx("li",{children:w.jsx("a",{href:"https://aletyx.ai/careers/",target:"_blank",className:"text-gray-300 hover:text-white text-sm",children:"Careers"})}),w.jsx("li",{children:w.jsx("a",{href:"https://aletyx.ai/contact-us/",target:"_blank",className:"text-gray-300 hover:text-white text-sm",children:"Contact Us"})})]})]})]}),w.jsxs("div",{className:"mt-8 md:mt-0 flex md:flex-col md:space-y-4 space-x-4 md:space-x-0",children:[w.jsx("a",{href:"https://www.linkedin.com/company/aletyx/",target:"_blank",className:"bg-gray-800 p-3 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-colors",children:w.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:w.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})}),w.jsx("a",{href:"https://github.com/aletyx",target:"_blank",className:"bg-gray-800 p-3 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-colors",children:w.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:w.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),w.jsx("a",{href:"https://www.youtube.com/@aletyxai",target:"_blank",className:"bg-gray-800 p-3 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-colors",children:w.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:w.jsx("path",{d:"M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"})})}),w.jsx("a",{href:"https://x.com/aletyxai",target:"_blank",className:"bg-gray-800 p-3 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-colors",children:w.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:w.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})})]})]}),w.jsxs("div",{className:"border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between",children:[w.jsxs("p",{className:"text-xs text-gray-400",children:["© ",new Date().getFullYear()," Aletyx, Inc. All rights reserved."]}),w.jsxs("div",{className:"flex space-x-6 mt-4 sm:mt-0",children:[w.jsx("a",{href:"https://aletyx.ai/privacy-policy/",target:"_blank",className:"text-xs text-gray-400 hover:text-white",children:"Cookies"}),w.jsx("a",{href:"https://aletyx.ai/privacy-policy/",target:"_blank",className:"text-xs text-gray-400 hover:text-white",children:"Privacy"}),w.jsx("a",{href:"https://aletyx.ai/terms-of-use/",target:"_blank",className:"text-xs text-gray-400 hover:text-white",children:"Terms of Use"})]})]})]})})]})}function AF(){return w.jsxs(Ub,{children:[w.jsx(Gh,{path:"/",component:CF}),w.jsx(Gh,{component:l3})]})}function SF(){return w.jsxs(f4,{client:g4,children:[w.jsx(AF,{}),w.jsx(n3,{})]})}Dy(document.getElementById("root")).render(w.jsx(SF,{}));

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function s2(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var r0={exports:{}},La={},o0={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ji=Symbol.for("react.element"),a2=Symbol.for("react.portal"),l2=Symbol.for("react.fragment"),u2=Symbol.for("react.strict_mode"),c2=Symbol.for("react.profiler"),d2=Symbol.for("react.provider"),f2=Symbol.for("react.context"),p2=Symbol.for("react.forward_ref"),h2=Symbol.for("react.suspense"),m2=Symbol.for("react.memo"),g2=Symbol.for("react.lazy"),Df=Symbol.iterator;function y2(e){return e===null||typeof e!="object"?null:(e=Df&&e[Df]||e["@@iterator"],typeof e=="function"?e:null)}var i0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},s0=Object.assign,a0={};function ho(e,t,n){this.props=e,this.context=t,this.refs=a0,this.updater=n||i0}ho.prototype.isReactComponent={};ho.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ho.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function l0(){}l0.prototype=ho.prototype;function Gc(e,t,n){this.props=e,this.context=t,this.refs=a0,this.updater=n||i0}var Yc=Gc.prototype=new l0;Yc.constructor=Gc;s0(Yc,ho.prototype);Yc.isPureReactComponent=!0;var Mf=Array.isArray,u0=Object.prototype.hasOwnProperty,Kc={current:null},c0={key:!0,ref:!0,__self:!0,__source:!0};function d0(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)u0.call(t,r)&&!c0.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:ji,type:e,key:i,ref:s,props:o,_owner:Kc.current}}function v2(e,t){return{$$typeof:ji,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xc(e){return typeof e=="object"&&e!==null&&e.$$typeof===ji}function x2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ff=/\/+/g;function xl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?x2(""+e.key):t.toString(36)}function gs(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ji:case a2:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+xl(s,0):r,Mf(o)?(n="",e!=null&&(n=e.replace(Ff,"$&/")+"/"),gs(o,t,n,"",function(u){return u})):o!=null&&(Xc(o)&&(o=v2(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Ff,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Mf(e))for(var a=0;a<e.length;a++){i=e[a];var l=r+xl(i,a);s+=gs(i,t,n,l,o)}else if(l=y2(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=r+xl(i,a++),s+=gs(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Wi(e,t,n){if(e==null)return e;var r=[],o=0;return gs(e,r,"","",function(i){return t.call(n,i,o++)}),r}function w2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _e={current:null},ys={transition:null},b2={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:ys,ReactCurrentOwner:Kc};function f0(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:Wi,forEach:function(e,t,n){Wi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Wi(e,function(){t++}),t},toArray:function(e){return Wi(e,function(t){return t})||[]},only:function(e){if(!Xc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=ho;H.Fragment=l2;H.Profiler=c2;H.PureComponent=Gc;H.StrictMode=u2;H.Suspense=h2;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b2;H.act=f0;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=s0({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Kc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)u0.call(t,l)&&!c0.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ji,type:e.type,key:o,ref:i,props:r,_owner:s}};H.createContext=function(e){return e={$$typeof:f2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:d2,_context:e},e.Consumer=e};H.createElement=d0;H.createFactory=function(e){var t=d0.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:p2,render:e}};H.isValidElement=Xc;H.lazy=function(e){return{$$typeof:g2,_payload:{_status:-1,_result:e},_init:w2}};H.memo=function(e,t){return{$$typeof:m2,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=ys.transition;ys.transition={};try{e()}finally{ys.transition=t}};H.unstable_act=f0;H.useCallback=function(e,t){return _e.current.useCallback(e,t)};H.useContext=function(e){return _e.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return _e.current.useDeferredValue(e)};H.useEffect=function(e,t){return _e.current.useEffect(e,t)};H.useId=function(){return _e.current.useId()};H.useImperativeHandle=function(e,t,n){return _e.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return _e.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return _e.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return _e.current.useMemo(e,t)};H.useReducer=function(e,t,n){return _e.current.useReducer(e,t,n)};H.useRef=function(e){return _e.current.useRef(e)};H.useState=function(e){return _e.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return _e.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return _e.current.useTransition()};H.version="18.3.1";o0.exports=H;var w=o0.exports;const we=s2(w);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S2=w,k2=Symbol.for("react.element"),C2=Symbol.for("react.fragment"),E2=Object.prototype.hasOwnProperty,P2=S2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j2={key:!0,ref:!0,__self:!0,__source:!0};function p0(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)E2.call(t,r)&&!j2.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:k2,type:e,key:i,ref:s,props:o,_owner:P2.current}}La.Fragment=C2;La.jsx=p0;La.jsxs=p0;r0.exports=La;var f=r0.exports,xu={},h0={exports:{}},nt={},m0={exports:{}},g0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,D){var N=P.length;P.push(D);e:for(;0<N;){var F=N-1>>>1,B=P[F];if(0<o(B,D))P[F]=D,P[N]=B,N=F;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var D=P[0],N=P.pop();if(N!==D){P[0]=N;e:for(var F=0,B=P.length,$e=B>>>1;F<$e;){var ye=2*(F+1)-1,Be=P[ye],ve=ye+1,ot=P[ve];if(0>o(Be,N))ve<B&&0>o(ot,Be)?(P[F]=ot,P[ve]=N,F=ve):(P[F]=Be,P[ye]=N,F=ye);else if(ve<B&&0>o(ot,N))P[F]=ot,P[ve]=N,F=ve;else break e}}return D}function o(P,D){var N=P.sortIndex-D.sortIndex;return N!==0?N:P.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,p=3,g=!1,v=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(P){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=P)r(u),D.sortIndex=D.expirationTime,t(l,D);else break;D=n(u)}}function k(P){if(x=!1,h(P),!v)if(n(l)!==null)v=!0,$(E);else{var D=n(u);D!==null&&_(k,D.startTime-P)}}function E(P,D){v=!1,x&&(x=!1,y(j),j=-1),g=!0;var N=p;try{for(h(D),d=n(l);d!==null&&(!(d.expirationTime>D)||P&&!G());){var F=d.callback;if(typeof F=="function"){d.callback=null,p=d.priorityLevel;var B=F(d.expirationTime<=D);D=e.unstable_now(),typeof B=="function"?d.callback=B:d===n(l)&&r(l),h(D)}else r(l);d=n(l)}if(d!==null)var $e=!0;else{var ye=n(u);ye!==null&&_(k,ye.startTime-D),$e=!1}return $e}finally{d=null,p=N,g=!1}}var R=!1,C=null,j=-1,L=5,O=-1;function G(){return!(e.unstable_now()-O<L)}function Z(){if(C!==null){var P=e.unstable_now();O=P;var D=!0;try{D=C(!0,P)}finally{D?J():(R=!1,C=null)}}else R=!1}var J;if(typeof m=="function")J=function(){m(Z)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,De=X.port2;X.port1.onmessage=Z,J=function(){De.postMessage(null)}}else J=function(){b(Z,0)};function $(P){C=P,R||(R=!0,J())}function _(P,D){j=b(function(){P(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,$(E))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(p){case 1:case 2:case 3:var D=3;break;default:D=p}var N=p;p=D;try{return P()}finally{p=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,D){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var N=p;p=P;try{return D()}finally{p=N}},e.unstable_scheduleCallback=function(P,D,N){var F=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?F+N:F):N=F,P){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=N+B,P={id:c++,callback:D,priorityLevel:P,startTime:N,expirationTime:B,sortIndex:-1},N>F?(P.sortIndex=N,t(u,P),n(l)===null&&P===n(u)&&(x?(y(j),j=-1):x=!0,_(k,N-F))):(P.sortIndex=B,t(l,P),v||g||(v=!0,$(E))),P},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(P){var D=p;return function(){var N=p;p=D;try{return P.apply(this,arguments)}finally{p=N}}}})(g0);m0.exports=g0;var T2=m0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R2=w,et=T2;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y0=new Set,ii={};function fr(e,t){Xr(e,t),Xr(e+"Capture",t)}function Xr(e,t){for(ii[e]=t,e=0;e<t.length;e++)y0.add(t[e])}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wu=Object.prototype.hasOwnProperty,A2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,If={},_f={};function L2(e){return wu.call(_f,e)?!0:wu.call(If,e)?!1:A2.test(e)?_f[e]=!0:(If[e]=!0,!1)}function z2(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function O2(e,t,n,r){if(t===null||typeof t>"u"||z2(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ve(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Te[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Te[t]=new Ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Te[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Te[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Te[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Te[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Te[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Te[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Te[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var qc=/[\-:]([a-z])/g;function Qc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qc,Qc);Te[t]=new Ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qc,Qc);Te[t]=new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qc,Qc);Te[t]=new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Te[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});Te.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Te[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zc(e,t,n,r){var o=Te.hasOwnProperty(t)?Te[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(O2(t,n,o,r)&&(n=null),r||o===null?L2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tn=R2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gi=Symbol.for("react.element"),Pr=Symbol.for("react.portal"),jr=Symbol.for("react.fragment"),Jc=Symbol.for("react.strict_mode"),bu=Symbol.for("react.profiler"),v0=Symbol.for("react.provider"),x0=Symbol.for("react.context"),ed=Symbol.for("react.forward_ref"),Su=Symbol.for("react.suspense"),ku=Symbol.for("react.suspense_list"),td=Symbol.for("react.memo"),dn=Symbol.for("react.lazy"),w0=Symbol.for("react.offscreen"),Vf=Symbol.iterator;function Co(e){return e===null||typeof e!="object"?null:(e=Vf&&e[Vf]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,wl;function Fo(e){if(wl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wl=t&&t[1]||""}return`
`+wl+e}var bl=!1;function Sl(e,t){if(!e||bl)return"";bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var l=`
`+o[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{bl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Fo(e):""}function N2(e){switch(e.tag){case 5:return Fo(e.type);case 16:return Fo("Lazy");case 13:return Fo("Suspense");case 19:return Fo("SuspenseList");case 0:case 2:case 15:return e=Sl(e.type,!1),e;case 11:return e=Sl(e.type.render,!1),e;case 1:return e=Sl(e.type,!0),e;default:return""}}function Cu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jr:return"Fragment";case Pr:return"Portal";case bu:return"Profiler";case Jc:return"StrictMode";case Su:return"Suspense";case ku:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case x0:return(e.displayName||"Context")+".Consumer";case v0:return(e._context.displayName||"Context")+".Provider";case ed:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case td:return t=e.displayName||null,t!==null?t:Cu(e.type)||"Memo";case dn:t=e._payload,e=e._init;try{return Cu(e(t))}catch{}}return null}function D2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cu(t);case 8:return t===Jc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function An(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function b0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function M2(e){var t=b0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yi(e){e._valueTracker||(e._valueTracker=M2(e))}function S0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=b0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Hs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Eu(e,t){var n=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $f(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=An(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function k0(e,t){t=t.checked,t!=null&&Zc(e,"checked",t,!1)}function Pu(e,t){k0(e,t);var n=An(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ju(e,t.type,n):t.hasOwnProperty("defaultValue")&&ju(e,t.type,An(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ju(e,t,n){(t!=="number"||Hs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Io=Array.isArray;function Ur(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+An(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Tu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Uf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(Io(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:An(n)}}function C0(e,t){var n=An(t.value),r=An(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Hf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function E0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ru(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?E0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ki,P0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ki=Ki||document.createElement("div"),Ki.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ki.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function si(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},F2=["Webkit","ms","Moz","O"];Object.keys(Uo).forEach(function(e){F2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Uo[t]=Uo[e]})});function j0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Uo.hasOwnProperty(e)&&Uo[e]?(""+t).trim():t+"px"}function T0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=j0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var I2=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Au(e,t){if(t){if(I2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function Lu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zu=null;function nd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ou=null,Hr=null,Wr=null;function Wf(e){if(e=Ai(e)){if(typeof Ou!="function")throw Error(z(280));var t=e.stateNode;t&&(t=Ma(t),Ou(e.stateNode,e.type,t))}}function R0(e){Hr?Wr?Wr.push(e):Wr=[e]:Hr=e}function A0(){if(Hr){var e=Hr,t=Wr;if(Wr=Hr=null,Wf(e),t)for(e=0;e<t.length;e++)Wf(t[e])}}function L0(e,t){return e(t)}function z0(){}var kl=!1;function O0(e,t,n){if(kl)return e(t,n);kl=!0;try{return L0(e,t,n)}finally{kl=!1,(Hr!==null||Wr!==null)&&(z0(),A0())}}function ai(e,t){var n=e.stateNode;if(n===null)return null;var r=Ma(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var Nu=!1;if(qt)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{Nu=!1}function _2(e,t,n,r,o,i,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ho=!1,Ws=null,Gs=!1,Du=null,V2={onError:function(e){Ho=!0,Ws=e}};function $2(e,t,n,r,o,i,s,a,l){Ho=!1,Ws=null,_2.apply(V2,arguments)}function B2(e,t,n,r,o,i,s,a,l){if($2.apply(this,arguments),Ho){if(Ho){var u=Ws;Ho=!1,Ws=null}else throw Error(z(198));Gs||(Gs=!0,Du=u)}}function pr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function N0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gf(e){if(pr(e)!==e)throw Error(z(188))}function U2(e){var t=e.alternate;if(!t){if(t=pr(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Gf(o),e;if(i===r)return Gf(o),t;i=i.sibling}throw Error(z(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function D0(e){return e=U2(e),e!==null?M0(e):null}function M0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=M0(e);if(t!==null)return t;e=e.sibling}return null}var F0=et.unstable_scheduleCallback,Yf=et.unstable_cancelCallback,H2=et.unstable_shouldYield,W2=et.unstable_requestPaint,fe=et.unstable_now,G2=et.unstable_getCurrentPriorityLevel,rd=et.unstable_ImmediatePriority,I0=et.unstable_UserBlockingPriority,Ys=et.unstable_NormalPriority,Y2=et.unstable_LowPriority,_0=et.unstable_IdlePriority,za=null,Nt=null;function K2(e){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(za,e,void 0,(e.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:Q2,X2=Math.log,q2=Math.LN2;function Q2(e){return e>>>=0,e===0?32:31-(X2(e)/q2|0)|0}var Xi=64,qi=4194304;function _o(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ks(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=_o(a):(i&=s,i!==0&&(r=_o(i)))}else s=n&~o,s!==0?r=_o(s):i!==0&&(r=_o(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-bt(t),o=1<<n,r|=e[n],t&=~o;return r}function Z2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function J2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-bt(i),a=1<<s,l=o[s];l===-1?(!(a&n)||a&r)&&(o[s]=Z2(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a}}function Mu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function V0(){var e=Xi;return Xi<<=1,!(Xi&4194240)&&(Xi=64),e}function Cl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ti(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=n}function ex(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-bt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function od(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Q=0;function $0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var B0,id,U0,H0,W0,Fu=!1,Qi=[],vn=null,xn=null,wn=null,li=new Map,ui=new Map,hn=[],tx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kf(e,t){switch(e){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":li.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ui.delete(t.pointerId)}}function Po(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Ai(t),t!==null&&id(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function nx(e,t,n,r,o){switch(t){case"focusin":return vn=Po(vn,e,t,n,r,o),!0;case"dragenter":return xn=Po(xn,e,t,n,r,o),!0;case"mouseover":return wn=Po(wn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return li.set(i,Po(li.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ui.set(i,Po(ui.get(i)||null,e,t,n,r,o)),!0}return!1}function G0(e){var t=qn(e.target);if(t!==null){var n=pr(t);if(n!==null){if(t=n.tag,t===13){if(t=N0(n),t!==null){e.blockedOn=t,W0(e.priority,function(){U0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Iu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);zu=r,n.target.dispatchEvent(r),zu=null}else return t=Ai(n),t!==null&&id(t),e.blockedOn=n,!1;t.shift()}return!0}function Xf(e,t,n){vs(e)&&n.delete(t)}function rx(){Fu=!1,vn!==null&&vs(vn)&&(vn=null),xn!==null&&vs(xn)&&(xn=null),wn!==null&&vs(wn)&&(wn=null),li.forEach(Xf),ui.forEach(Xf)}function jo(e,t){e.blockedOn===t&&(e.blockedOn=null,Fu||(Fu=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,rx)))}function ci(e){function t(o){return jo(o,e)}if(0<Qi.length){jo(Qi[0],e);for(var n=1;n<Qi.length;n++){var r=Qi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(vn!==null&&jo(vn,e),xn!==null&&jo(xn,e),wn!==null&&jo(wn,e),li.forEach(t),ui.forEach(t),n=0;n<hn.length;n++)r=hn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<hn.length&&(n=hn[0],n.blockedOn===null);)G0(n),n.blockedOn===null&&hn.shift()}var Gr=tn.ReactCurrentBatchConfig,Xs=!0;function ox(e,t,n,r){var o=Q,i=Gr.transition;Gr.transition=null;try{Q=1,sd(e,t,n,r)}finally{Q=o,Gr.transition=i}}function ix(e,t,n,r){var o=Q,i=Gr.transition;Gr.transition=null;try{Q=4,sd(e,t,n,r)}finally{Q=o,Gr.transition=i}}function sd(e,t,n,r){if(Xs){var o=Iu(e,t,n,r);if(o===null)Nl(e,t,r,qs,n),Kf(e,r);else if(nx(o,e,t,n,r))r.stopPropagation();else if(Kf(e,r),t&4&&-1<tx.indexOf(e)){for(;o!==null;){var i=Ai(o);if(i!==null&&B0(i),i=Iu(e,t,n,r),i===null&&Nl(e,t,r,qs,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Nl(e,t,r,null,n)}}var qs=null;function Iu(e,t,n,r){if(qs=null,e=nd(r),e=qn(e),e!==null)if(t=pr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=N0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qs=e,null}function Y0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(G2()){case rd:return 1;case I0:return 4;case Ys:case Y2:return 16;case _0:return 536870912;default:return 16}default:return 16}}var gn=null,ad=null,xs=null;function K0(){if(xs)return xs;var e,t=ad,n=t.length,r,o="value"in gn?gn.value:gn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return xs=o.slice(e,1<r?1-r:void 0)}function ws(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zi(){return!0}function qf(){return!1}function rt(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Zi:qf,this.isPropagationStopped=qf,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zi)},persist:function(){},isPersistent:Zi}),t}var mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ld=rt(mo),Ri=ue({},mo,{view:0,detail:0}),sx=rt(Ri),El,Pl,To,Oa=ue({},Ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ud,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==To&&(To&&e.type==="mousemove"?(El=e.screenX-To.screenX,Pl=e.screenY-To.screenY):Pl=El=0,To=e),El)},movementY:function(e){return"movementY"in e?e.movementY:Pl}}),Qf=rt(Oa),ax=ue({},Oa,{dataTransfer:0}),lx=rt(ax),ux=ue({},Ri,{relatedTarget:0}),jl=rt(ux),cx=ue({},mo,{animationName:0,elapsedTime:0,pseudoElement:0}),dx=rt(cx),fx=ue({},mo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),px=rt(fx),hx=ue({},mo,{data:0}),Zf=rt(hx),mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yx[e])?!!t[e]:!1}function ud(){return vx}var xx=ue({},Ri,{key:function(e){if(e.key){var t=mx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ws(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ud,charCode:function(e){return e.type==="keypress"?ws(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ws(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wx=rt(xx),bx=ue({},Oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jf=rt(bx),Sx=ue({},Ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ud}),kx=rt(Sx),Cx=ue({},mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ex=rt(Cx),Px=ue({},Oa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jx=rt(Px),Tx=[9,13,27,32],cd=qt&&"CompositionEvent"in window,Wo=null;qt&&"documentMode"in document&&(Wo=document.documentMode);var Rx=qt&&"TextEvent"in window&&!Wo,X0=qt&&(!cd||Wo&&8<Wo&&11>=Wo),ep=String.fromCharCode(32),tp=!1;function q0(e,t){switch(e){case"keyup":return Tx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Q0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tr=!1;function Ax(e,t){switch(e){case"compositionend":return Q0(t);case"keypress":return t.which!==32?null:(tp=!0,ep);case"textInput":return e=t.data,e===ep&&tp?null:e;default:return null}}function Lx(e,t){if(Tr)return e==="compositionend"||!cd&&q0(e,t)?(e=K0(),xs=ad=gn=null,Tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return X0&&t.locale!=="ko"?null:t.data;default:return null}}var zx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function np(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zx[e.type]:t==="textarea"}function Z0(e,t,n,r){R0(r),t=Qs(t,"onChange"),0<t.length&&(n=new ld("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Go=null,di=null;function Ox(e){ug(e,0)}function Na(e){var t=Lr(e);if(S0(t))return e}function Nx(e,t){if(e==="change")return t}var J0=!1;if(qt){var Tl;if(qt){var Rl="oninput"in document;if(!Rl){var rp=document.createElement("div");rp.setAttribute("oninput","return;"),Rl=typeof rp.oninput=="function"}Tl=Rl}else Tl=!1;J0=Tl&&(!document.documentMode||9<document.documentMode)}function op(){Go&&(Go.detachEvent("onpropertychange",eg),di=Go=null)}function eg(e){if(e.propertyName==="value"&&Na(di)){var t=[];Z0(t,di,e,nd(e)),O0(Ox,t)}}function Dx(e,t,n){e==="focusin"?(op(),Go=t,di=n,Go.attachEvent("onpropertychange",eg)):e==="focusout"&&op()}function Mx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Na(di)}function Fx(e,t){if(e==="click")return Na(t)}function Ix(e,t){if(e==="input"||e==="change")return Na(t)}function _x(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:_x;function fi(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!wu.call(t,o)||!Et(e[o],t[o]))return!1}return!0}function ip(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sp(e,t){var n=ip(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ip(n)}}function tg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ng(){for(var e=window,t=Hs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hs(e.document)}return t}function dd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vx(e){var t=ng(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&tg(n.ownerDocument.documentElement,n)){if(r!==null&&dd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=sp(n,i);var s=sp(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $x=qt&&"documentMode"in document&&11>=document.documentMode,Rr=null,_u=null,Yo=null,Vu=!1;function ap(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vu||Rr==null||Rr!==Hs(r)||(r=Rr,"selectionStart"in r&&dd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yo&&fi(Yo,r)||(Yo=r,r=Qs(_u,"onSelect"),0<r.length&&(t=new ld("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Ji(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ar={animationend:Ji("Animation","AnimationEnd"),animationiteration:Ji("Animation","AnimationIteration"),animationstart:Ji("Animation","AnimationStart"),transitionend:Ji("Transition","TransitionEnd")},Al={},rg={};qt&&(rg=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function Da(e){if(Al[e])return Al[e];if(!Ar[e])return e;var t=Ar[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in rg)return Al[e]=t[n];return e}var og=Da("animationend"),ig=Da("animationiteration"),sg=Da("animationstart"),ag=Da("transitionend"),lg=new Map,lp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(e,t){lg.set(e,t),fr(t,[e])}for(var Ll=0;Ll<lp.length;Ll++){var zl=lp[Ll],Bx=zl.toLowerCase(),Ux=zl[0].toUpperCase()+zl.slice(1);Nn(Bx,"on"+Ux)}Nn(og,"onAnimationEnd");Nn(ig,"onAnimationIteration");Nn(sg,"onAnimationStart");Nn("dblclick","onDoubleClick");Nn("focusin","onFocus");Nn("focusout","onBlur");Nn(ag,"onTransitionEnd");Xr("onMouseEnter",["mouseout","mouseover"]);Xr("onMouseLeave",["mouseout","mouseover"]);Xr("onPointerEnter",["pointerout","pointerover"]);Xr("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function up(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,B2(r,t,void 0,e),e.currentTarget=null}function ug(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==i&&o.isPropagationStopped())break e;up(o,a,u),i=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==i&&o.isPropagationStopped())break e;up(o,a,u),i=l}}}if(Gs)throw e=Du,Gs=!1,Du=null,e}function te(e,t){var n=t[Wu];n===void 0&&(n=t[Wu]=new Set);var r=e+"__bubble";n.has(r)||(cg(t,e,2,!1),n.add(r))}function Ol(e,t,n){var r=0;t&&(r|=4),cg(n,e,r,t)}var es="_reactListening"+Math.random().toString(36).slice(2);function pi(e){if(!e[es]){e[es]=!0,y0.forEach(function(n){n!=="selectionchange"&&(Hx.has(n)||Ol(n,!1,e),Ol(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[es]||(t[es]=!0,Ol("selectionchange",!1,t))}}function cg(e,t,n,r){switch(Y0(t)){case 1:var o=ox;break;case 4:o=ix;break;default:o=sd}n=o.bind(null,t,n,e),o=void 0,!Nu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Nl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;a!==null;){if(s=qn(a),s===null)return;if(l=s.tag,l===5||l===6){r=i=s;continue e}a=a.parentNode}}r=r.return}O0(function(){var u=i,c=nd(n),d=[];e:{var p=lg.get(e);if(p!==void 0){var g=ld,v=e;switch(e){case"keypress":if(ws(n)===0)break e;case"keydown":case"keyup":g=wx;break;case"focusin":v="focus",g=jl;break;case"focusout":v="blur",g=jl;break;case"beforeblur":case"afterblur":g=jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=lx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=kx;break;case og:case ig:case sg:g=dx;break;case ag:g=Ex;break;case"scroll":g=sx;break;case"wheel":g=jx;break;case"copy":case"cut":case"paste":g=px;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Jf}var x=(t&4)!==0,b=!x&&e==="scroll",y=x?p!==null?p+"Capture":null:p;x=[];for(var m=u,h;m!==null;){h=m;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,y!==null&&(k=ai(m,y),k!=null&&x.push(hi(m,k,h)))),b)break;m=m.return}0<x.length&&(p=new g(p,v,null,n,c),d.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==zu&&(v=n.relatedTarget||n.fromElement)&&(qn(v)||v[Qt]))break e;if((g||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?qn(v):null,v!==null&&(b=pr(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(x=Qf,k="onMouseLeave",y="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=Jf,k="onPointerLeave",y="onPointerEnter",m="pointer"),b=g==null?p:Lr(g),h=v==null?p:Lr(v),p=new x(k,m+"leave",g,n,c),p.target=b,p.relatedTarget=h,k=null,qn(c)===u&&(x=new x(y,m+"enter",v,n,c),x.target=h,x.relatedTarget=b,k=x),b=k,g&&v)t:{for(x=g,y=v,m=0,h=x;h;h=gr(h))m++;for(h=0,k=y;k;k=gr(k))h++;for(;0<m-h;)x=gr(x),m--;for(;0<h-m;)y=gr(y),h--;for(;m--;){if(x===y||y!==null&&x===y.alternate)break t;x=gr(x),y=gr(y)}x=null}else x=null;g!==null&&cp(d,p,g,x,!1),v!==null&&b!==null&&cp(d,b,v,x,!0)}}e:{if(p=u?Lr(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var E=Nx;else if(np(p))if(J0)E=Ix;else{E=Mx;var R=Dx}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=Fx);if(E&&(E=E(e,u))){Z0(d,E,n,c);break e}R&&R(e,p,u),e==="focusout"&&(R=p._wrapperState)&&R.controlled&&p.type==="number"&&ju(p,"number",p.value)}switch(R=u?Lr(u):window,e){case"focusin":(np(R)||R.contentEditable==="true")&&(Rr=R,_u=u,Yo=null);break;case"focusout":Yo=_u=Rr=null;break;case"mousedown":Vu=!0;break;case"contextmenu":case"mouseup":case"dragend":Vu=!1,ap(d,n,c);break;case"selectionchange":if($x)break;case"keydown":case"keyup":ap(d,n,c)}var C;if(cd)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Tr?q0(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(X0&&n.locale!=="ko"&&(Tr||j!=="onCompositionStart"?j==="onCompositionEnd"&&Tr&&(C=K0()):(gn=c,ad="value"in gn?gn.value:gn.textContent,Tr=!0)),R=Qs(u,j),0<R.length&&(j=new Zf(j,e,null,n,c),d.push({event:j,listeners:R}),C?j.data=C:(C=Q0(n),C!==null&&(j.data=C)))),(C=Rx?Ax(e,n):Lx(e,n))&&(u=Qs(u,"onBeforeInput"),0<u.length&&(c=new Zf("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}ug(d,t)})}function hi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qs(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ai(e,n),i!=null&&r.unshift(hi(e,i,o)),i=ai(e,t),i!=null&&r.push(hi(e,i,o))),e=e.return}return r}function gr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cp(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,o?(l=ai(n,i),l!=null&&s.unshift(hi(n,l,a))):o||(l=ai(n,i),l!=null&&s.push(hi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Wx=/\r\n?/g,Gx=/\u0000|\uFFFD/g;function dp(e){return(typeof e=="string"?e:""+e).replace(Wx,`
`).replace(Gx,"")}function ts(e,t,n){if(t=dp(t),dp(e)!==t&&n)throw Error(z(425))}function Zs(){}var $u=null,Bu=null;function Uu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hu=typeof setTimeout=="function"?setTimeout:void 0,Yx=typeof clearTimeout=="function"?clearTimeout:void 0,fp=typeof Promise=="function"?Promise:void 0,Kx=typeof queueMicrotask=="function"?queueMicrotask:typeof fp<"u"?function(e){return fp.resolve(null).then(e).catch(Xx)}:Hu;function Xx(e){setTimeout(function(){throw e})}function Dl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ci(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ci(t)}function bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var go=Math.random().toString(36).slice(2),Ot="__reactFiber$"+go,mi="__reactProps$"+go,Qt="__reactContainer$"+go,Wu="__reactEvents$"+go,qx="__reactListeners$"+go,Qx="__reactHandles$"+go;function qn(e){var t=e[Ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qt]||n[Ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pp(e);e!==null;){if(n=e[Ot])return n;e=pp(e)}return t}e=n,n=e.parentNode}return null}function Ai(e){return e=e[Ot]||e[Qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Lr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function Ma(e){return e[mi]||null}var Gu=[],zr=-1;function Dn(e){return{current:e}}function re(e){0>zr||(e.current=Gu[zr],Gu[zr]=null,zr--)}function ee(e,t){zr++,Gu[zr]=e.current,e.current=t}var Ln={},Ne=Dn(Ln),Ge=Dn(!1),sr=Ln;function qr(e,t){var n=e.type.contextTypes;if(!n)return Ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ye(e){return e=e.childContextTypes,e!=null}function Js(){re(Ge),re(Ne)}function hp(e,t,n){if(Ne.current!==Ln)throw Error(z(168));ee(Ne,t),ee(Ge,n)}function dg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(z(108,D2(e)||"Unknown",o));return ue({},n,r)}function ea(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ln,sr=Ne.current,ee(Ne,e),ee(Ge,Ge.current),!0}function mp(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=dg(e,t,sr),r.__reactInternalMemoizedMergedChildContext=e,re(Ge),re(Ne),ee(Ne,e)):re(Ge),ee(Ge,n)}var Bt=null,Fa=!1,Ml=!1;function fg(e){Bt===null?Bt=[e]:Bt.push(e)}function Zx(e){Fa=!0,fg(e)}function Mn(){if(!Ml&&Bt!==null){Ml=!0;var e=0,t=Q;try{var n=Bt;for(Q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Bt=null,Fa=!1}catch(o){throw Bt!==null&&(Bt=Bt.slice(e+1)),F0(rd,Mn),o}finally{Q=t,Ml=!1}}return null}var Or=[],Nr=0,ta=null,na=0,lt=[],ut=0,ar=null,Ut=1,Ht="";function Hn(e,t){Or[Nr++]=na,Or[Nr++]=ta,ta=e,na=t}function pg(e,t,n){lt[ut++]=Ut,lt[ut++]=Ht,lt[ut++]=ar,ar=e;var r=Ut;e=Ht;var o=32-bt(r)-1;r&=~(1<<o),n+=1;var i=32-bt(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Ut=1<<32-bt(t)+o|n<<o|r,Ht=i+e}else Ut=1<<i|n<<o|r,Ht=e}function fd(e){e.return!==null&&(Hn(e,1),pg(e,1,0))}function pd(e){for(;e===ta;)ta=Or[--Nr],Or[Nr]=null,na=Or[--Nr],Or[Nr]=null;for(;e===ar;)ar=lt[--ut],lt[ut]=null,Ht=lt[--ut],lt[ut]=null,Ut=lt[--ut],lt[ut]=null}var Je=null,Ze=null,oe=!1,xt=null;function hg(e,t){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Je=e,Ze=bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Je=e,Ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ar!==null?{id:Ut,overflow:Ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Je=e,Ze=null,!0):!1;default:return!1}}function Yu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ku(e){if(oe){var t=Ze;if(t){var n=t;if(!gp(e,t)){if(Yu(e))throw Error(z(418));t=bn(n.nextSibling);var r=Je;t&&gp(e,t)?hg(r,n):(e.flags=e.flags&-4097|2,oe=!1,Je=e)}}else{if(Yu(e))throw Error(z(418));e.flags=e.flags&-4097|2,oe=!1,Je=e}}}function yp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Je=e}function ns(e){if(e!==Je)return!1;if(!oe)return yp(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Uu(e.type,e.memoizedProps)),t&&(t=Ze)){if(Yu(e))throw mg(),Error(z(418));for(;t;)hg(e,t),t=bn(t.nextSibling)}if(yp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ze=bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ze=null}}else Ze=Je?bn(e.stateNode.nextSibling):null;return!0}function mg(){for(var e=Ze;e;)e=bn(e.nextSibling)}function Qr(){Ze=Je=null,oe=!1}function hd(e){xt===null?xt=[e]:xt.push(e)}var Jx=tn.ReactCurrentBatchConfig;function Ro(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function rs(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vp(e){var t=e._init;return t(e._payload)}function gg(e){function t(y,m){if(e){var h=y.deletions;h===null?(y.deletions=[m],y.flags|=16):h.push(m)}}function n(y,m){if(!e)return null;for(;m!==null;)t(y,m),m=m.sibling;return null}function r(y,m){for(y=new Map;m!==null;)m.key!==null?y.set(m.key,m):y.set(m.index,m),m=m.sibling;return y}function o(y,m){return y=En(y,m),y.index=0,y.sibling=null,y}function i(y,m,h){return y.index=h,e?(h=y.alternate,h!==null?(h=h.index,h<m?(y.flags|=2,m):h):(y.flags|=2,m)):(y.flags|=1048576,m)}function s(y){return e&&y.alternate===null&&(y.flags|=2),y}function a(y,m,h,k){return m===null||m.tag!==6?(m=Ul(h,y.mode,k),m.return=y,m):(m=o(m,h),m.return=y,m)}function l(y,m,h,k){var E=h.type;return E===jr?c(y,m,h.props.children,k,h.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===dn&&vp(E)===m.type)?(k=o(m,h.props),k.ref=Ro(y,m,h),k.return=y,k):(k=js(h.type,h.key,h.props,null,y.mode,k),k.ref=Ro(y,m,h),k.return=y,k)}function u(y,m,h,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==h.containerInfo||m.stateNode.implementation!==h.implementation?(m=Hl(h,y.mode,k),m.return=y,m):(m=o(m,h.children||[]),m.return=y,m)}function c(y,m,h,k,E){return m===null||m.tag!==7?(m=rr(h,y.mode,k,E),m.return=y,m):(m=o(m,h),m.return=y,m)}function d(y,m,h){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ul(""+m,y.mode,h),m.return=y,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Gi:return h=js(m.type,m.key,m.props,null,y.mode,h),h.ref=Ro(y,null,m),h.return=y,h;case Pr:return m=Hl(m,y.mode,h),m.return=y,m;case dn:var k=m._init;return d(y,k(m._payload),h)}if(Io(m)||Co(m))return m=rr(m,y.mode,h,null),m.return=y,m;rs(y,m)}return null}function p(y,m,h,k){var E=m!==null?m.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:a(y,m,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Gi:return h.key===E?l(y,m,h,k):null;case Pr:return h.key===E?u(y,m,h,k):null;case dn:return E=h._init,p(y,m,E(h._payload),k)}if(Io(h)||Co(h))return E!==null?null:c(y,m,h,k,null);rs(y,h)}return null}function g(y,m,h,k,E){if(typeof k=="string"&&k!==""||typeof k=="number")return y=y.get(h)||null,a(m,y,""+k,E);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Gi:return y=y.get(k.key===null?h:k.key)||null,l(m,y,k,E);case Pr:return y=y.get(k.key===null?h:k.key)||null,u(m,y,k,E);case dn:var R=k._init;return g(y,m,h,R(k._payload),E)}if(Io(k)||Co(k))return y=y.get(h)||null,c(m,y,k,E,null);rs(m,k)}return null}function v(y,m,h,k){for(var E=null,R=null,C=m,j=m=0,L=null;C!==null&&j<h.length;j++){C.index>j?(L=C,C=null):L=C.sibling;var O=p(y,C,h[j],k);if(O===null){C===null&&(C=L);break}e&&C&&O.alternate===null&&t(y,C),m=i(O,m,j),R===null?E=O:R.sibling=O,R=O,C=L}if(j===h.length)return n(y,C),oe&&Hn(y,j),E;if(C===null){for(;j<h.length;j++)C=d(y,h[j],k),C!==null&&(m=i(C,m,j),R===null?E=C:R.sibling=C,R=C);return oe&&Hn(y,j),E}for(C=r(y,C);j<h.length;j++)L=g(C,y,j,h[j],k),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?j:L.key),m=i(L,m,j),R===null?E=L:R.sibling=L,R=L);return e&&C.forEach(function(G){return t(y,G)}),oe&&Hn(y,j),E}function x(y,m,h,k){var E=Co(h);if(typeof E!="function")throw Error(z(150));if(h=E.call(h),h==null)throw Error(z(151));for(var R=E=null,C=m,j=m=0,L=null,O=h.next();C!==null&&!O.done;j++,O=h.next()){C.index>j?(L=C,C=null):L=C.sibling;var G=p(y,C,O.value,k);if(G===null){C===null&&(C=L);break}e&&C&&G.alternate===null&&t(y,C),m=i(G,m,j),R===null?E=G:R.sibling=G,R=G,C=L}if(O.done)return n(y,C),oe&&Hn(y,j),E;if(C===null){for(;!O.done;j++,O=h.next())O=d(y,O.value,k),O!==null&&(m=i(O,m,j),R===null?E=O:R.sibling=O,R=O);return oe&&Hn(y,j),E}for(C=r(y,C);!O.done;j++,O=h.next())O=g(C,y,j,O.value,k),O!==null&&(e&&O.alternate!==null&&C.delete(O.key===null?j:O.key),m=i(O,m,j),R===null?E=O:R.sibling=O,R=O);return e&&C.forEach(function(Z){return t(y,Z)}),oe&&Hn(y,j),E}function b(y,m,h,k){if(typeof h=="object"&&h!==null&&h.type===jr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Gi:e:{for(var E=h.key,R=m;R!==null;){if(R.key===E){if(E=h.type,E===jr){if(R.tag===7){n(y,R.sibling),m=o(R,h.props.children),m.return=y,y=m;break e}}else if(R.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===dn&&vp(E)===R.type){n(y,R.sibling),m=o(R,h.props),m.ref=Ro(y,R,h),m.return=y,y=m;break e}n(y,R);break}else t(y,R);R=R.sibling}h.type===jr?(m=rr(h.props.children,y.mode,k,h.key),m.return=y,y=m):(k=js(h.type,h.key,h.props,null,y.mode,k),k.ref=Ro(y,m,h),k.return=y,y=k)}return s(y);case Pr:e:{for(R=h.key;m!==null;){if(m.key===R)if(m.tag===4&&m.stateNode.containerInfo===h.containerInfo&&m.stateNode.implementation===h.implementation){n(y,m.sibling),m=o(m,h.children||[]),m.return=y,y=m;break e}else{n(y,m);break}else t(y,m);m=m.sibling}m=Hl(h,y.mode,k),m.return=y,y=m}return s(y);case dn:return R=h._init,b(y,m,R(h._payload),k)}if(Io(h))return v(y,m,h,k);if(Co(h))return x(y,m,h,k);rs(y,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,m!==null&&m.tag===6?(n(y,m.sibling),m=o(m,h),m.return=y,y=m):(n(y,m),m=Ul(h,y.mode,k),m.return=y,y=m),s(y)):n(y,m)}return b}var Zr=gg(!0),yg=gg(!1),ra=Dn(null),oa=null,Dr=null,md=null;function gd(){md=Dr=oa=null}function yd(e){var t=ra.current;re(ra),e._currentValue=t}function Xu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yr(e,t){oa=e,md=Dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(He=!0),e.firstContext=null)}function ft(e){var t=e._currentValue;if(md!==e)if(e={context:e,memoizedValue:t,next:null},Dr===null){if(oa===null)throw Error(z(308));Dr=e,oa.dependencies={lanes:0,firstContext:e}}else Dr=Dr.next=e;return t}var Qn=null;function vd(e){Qn===null?Qn=[e]:Qn.push(e)}function vg(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,vd(t)):(n.next=o.next,o.next=n),t.interleaved=n,Zt(e,r)}function Zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var fn=!1;function xd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Sn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Zt(e,n)}return o=r.interleaved,o===null?(t.next=t,vd(r)):(t.next=o.next,o.next=t),r.interleaved=t,Zt(e,n)}function bs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,od(e,n)}}function xp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ia(e,t,n,r){var o=e.updateQueue;fn=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?i=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(i!==null){var d=o.baseState;s=0,c=u=l=null,a=i;do{var p=a.lane,g=a.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(p=t,g=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(g,d,p);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,p=typeof v=="function"?v.call(g,d,p):v,p==null)break e;d=ue({},d,p);break e;case 2:fn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,s|=p;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;p=a,a=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(1);if(c===null&&(l=d),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);ur|=s,e.lanes=s,e.memoizedState=d}}function wp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(z(191,o));o.call(r)}}}var Li={},Dt=Dn(Li),gi=Dn(Li),yi=Dn(Li);function Zn(e){if(e===Li)throw Error(z(174));return e}function wd(e,t){switch(ee(yi,t),ee(gi,e),ee(Dt,Li),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ru(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ru(t,e)}re(Dt),ee(Dt,t)}function Jr(){re(Dt),re(gi),re(yi)}function wg(e){Zn(yi.current);var t=Zn(Dt.current),n=Ru(t,e.type);t!==n&&(ee(gi,e),ee(Dt,n))}function bd(e){gi.current===e&&(re(Dt),re(gi))}var ie=Dn(0);function sa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fl=[];function Sd(){for(var e=0;e<Fl.length;e++)Fl[e]._workInProgressVersionPrimary=null;Fl.length=0}var Ss=tn.ReactCurrentDispatcher,Il=tn.ReactCurrentBatchConfig,lr=0,ae=null,xe=null,Se=null,aa=!1,Ko=!1,vi=0,e5=0;function Re(){throw Error(z(321))}function kd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function Cd(e,t,n,r,o,i){if(lr=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ss.current=e===null||e.memoizedState===null?o5:i5,e=n(r,o),Ko){i=0;do{if(Ko=!1,vi=0,25<=i)throw Error(z(301));i+=1,Se=xe=null,t.updateQueue=null,Ss.current=s5,e=n(r,o)}while(Ko)}if(Ss.current=la,t=xe!==null&&xe.next!==null,lr=0,Se=xe=ae=null,aa=!1,t)throw Error(z(300));return e}function Ed(){var e=vi!==0;return vi=0,e}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?ae.memoizedState=Se=e:Se=Se.next=e,Se}function pt(){if(xe===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Se===null?ae.memoizedState:Se.next;if(t!==null)Se=t,xe=e;else{if(e===null)throw Error(z(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Se===null?ae.memoizedState=Se=e:Se=Se.next=e}return Se}function xi(e,t){return typeof t=="function"?t(e):t}function _l(e){var t=pt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=xe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,l=null,u=i;do{var c=u.lane;if((lr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,ae.lanes|=c,ur|=c}u=u.next}while(u!==null&&u!==i);l===null?s=r:l.next=a,Et(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ae.lanes|=i,ur|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vl(e){var t=pt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);Et(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function bg(){}function Sg(e,t){var n=ae,r=pt(),o=t(),i=!Et(r.memoizedState,o);if(i&&(r.memoizedState=o,He=!0),r=r.queue,Pd(Eg.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,wi(9,Cg.bind(null,n,r,o,t),void 0,null),Ce===null)throw Error(z(349));lr&30||kg(n,t,o)}return o}function kg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cg(e,t,n,r){t.value=n,t.getSnapshot=r,Pg(t)&&jg(e)}function Eg(e,t,n){return n(function(){Pg(t)&&jg(e)})}function Pg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function jg(e){var t=Zt(e,1);t!==null&&St(t,e,1,-1)}function bp(e){var t=At();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:e},t.queue=e,e=e.dispatch=r5.bind(null,ae,e),[t.memoizedState,e]}function wi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Tg(){return pt().memoizedState}function ks(e,t,n,r){var o=At();ae.flags|=e,o.memoizedState=wi(1|t,n,void 0,r===void 0?null:r)}function Ia(e,t,n,r){var o=pt();r=r===void 0?null:r;var i=void 0;if(xe!==null){var s=xe.memoizedState;if(i=s.destroy,r!==null&&kd(r,s.deps)){o.memoizedState=wi(t,n,i,r);return}}ae.flags|=e,o.memoizedState=wi(1|t,n,i,r)}function Sp(e,t){return ks(8390656,8,e,t)}function Pd(e,t){return Ia(2048,8,e,t)}function Rg(e,t){return Ia(4,2,e,t)}function Ag(e,t){return Ia(4,4,e,t)}function Lg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zg(e,t,n){return n=n!=null?n.concat([e]):null,Ia(4,4,Lg.bind(null,t,e),n)}function jd(){}function Og(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&kd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ng(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&kd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Dg(e,t,n){return lr&21?(Et(n,t)||(n=V0(),ae.lanes|=n,ur|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=n)}function t5(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var r=Il.transition;Il.transition={};try{e(!1),t()}finally{Q=n,Il.transition=r}}function Mg(){return pt().memoizedState}function n5(e,t,n){var r=Cn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fg(e))Ig(t,n);else if(n=vg(e,t,n,r),n!==null){var o=Ie();St(n,e,r,o),_g(n,t,r)}}function r5(e,t,n){var r=Cn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fg(e))Ig(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,Et(a,s)){var l=t.interleaved;l===null?(o.next=o,vd(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=vg(e,t,o,r),n!==null&&(o=Ie(),St(n,e,r,o),_g(n,t,r))}}function Fg(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Ig(e,t){Ko=aa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _g(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,od(e,n)}}var la={readContext:ft,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},o5={readContext:ft,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:ft,useEffect:Sp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ks(4194308,4,Lg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ks(4194308,4,e,t)},useInsertionEffect:function(e,t){return ks(4,2,e,t)},useMemo:function(e,t){var n=At();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=At();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=n5.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:bp,useDebugValue:jd,useDeferredValue:function(e){return At().memoizedState=e},useTransition:function(){var e=bp(!1),t=e[0];return e=t5.bind(null,e[1]),At().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,o=At();if(oe){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),Ce===null)throw Error(z(349));lr&30||kg(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Sp(Eg.bind(null,r,i,e),[e]),r.flags|=2048,wi(9,Cg.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=At(),t=Ce.identifierPrefix;if(oe){var n=Ht,r=Ut;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=vi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=e5++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},i5={readContext:ft,useCallback:Og,useContext:ft,useEffect:Pd,useImperativeHandle:zg,useInsertionEffect:Rg,useLayoutEffect:Ag,useMemo:Ng,useReducer:_l,useRef:Tg,useState:function(){return _l(xi)},useDebugValue:jd,useDeferredValue:function(e){var t=pt();return Dg(t,xe.memoizedState,e)},useTransition:function(){var e=_l(xi)[0],t=pt().memoizedState;return[e,t]},useMutableSource:bg,useSyncExternalStore:Sg,useId:Mg,unstable_isNewReconciler:!1},s5={readContext:ft,useCallback:Og,useContext:ft,useEffect:Pd,useImperativeHandle:zg,useInsertionEffect:Rg,useLayoutEffect:Ag,useMemo:Ng,useReducer:Vl,useRef:Tg,useState:function(){return Vl(xi)},useDebugValue:jd,useDeferredValue:function(e){var t=pt();return xe===null?t.memoizedState=e:Dg(t,xe.memoizedState,e)},useTransition:function(){var e=Vl(xi)[0],t=pt().memoizedState;return[e,t]},useMutableSource:bg,useSyncExternalStore:Sg,useId:Mg,unstable_isNewReconciler:!1};function yt(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function qu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _a={isMounted:function(e){return(e=e._reactInternals)?pr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ie(),o=Cn(e),i=Gt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Sn(e,i,o),t!==null&&(St(t,e,o,r),bs(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ie(),o=Cn(e),i=Gt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Sn(e,i,o),t!==null&&(St(t,e,o,r),bs(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ie(),r=Cn(e),o=Gt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Sn(e,o,r),t!==null&&(St(t,e,r,n),bs(t,e,r))}};function kp(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!fi(n,r)||!fi(o,i):!0}function Vg(e,t,n){var r=!1,o=Ln,i=t.contextType;return typeof i=="object"&&i!==null?i=ft(i):(o=Ye(t)?sr:Ne.current,r=t.contextTypes,i=(r=r!=null)?qr(e,o):Ln),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_a,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Cp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_a.enqueueReplaceState(t,t.state,null)}function Qu(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},xd(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ft(i):(i=Ye(t)?sr:Ne.current,o.context=qr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(qu(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&_a.enqueueReplaceState(o,o.state,null),ia(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function eo(e,t){try{var n="",r=t;do n+=N2(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function $l(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Zu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var a5=typeof WeakMap=="function"?WeakMap:Map;function $g(e,t,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ca||(ca=!0,lc=r),Zu(e,t)},n}function Bg(e,t,n){n=Gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Zu(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Zu(e,t),typeof r!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Ep(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new a5;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=b5.bind(null,e,t,n),t.then(e,e))}function Pp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function jp(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gt(-1,1),t.tag=2,Sn(n,t,1))),n.lanes|=1),e)}var l5=tn.ReactCurrentOwner,He=!1;function Fe(e,t,n,r){t.child=e===null?yg(t,null,n,r):Zr(t,e.child,n,r)}function Tp(e,t,n,r,o){n=n.render;var i=t.ref;return Yr(t,o),r=Cd(e,t,n,r,i,o),n=Ed(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Jt(e,t,o)):(oe&&n&&fd(t),t.flags|=1,Fe(e,t,r,o),t.child)}function Rp(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Dd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ug(e,t,i,r,o)):(e=js(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:fi,n(s,r)&&e.ref===t.ref)return Jt(e,t,o)}return t.flags|=1,e=En(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ug(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(fi(i,r)&&e.ref===t.ref)if(He=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(He=!0);else return t.lanes=e.lanes,Jt(e,t,o)}return Ju(e,t,n,r,o)}function Hg(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Fr,Qe),Qe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(Fr,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ee(Fr,Qe),Qe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ee(Fr,Qe),Qe|=r;return Fe(e,t,o,n),t.child}function Wg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ju(e,t,n,r,o){var i=Ye(n)?sr:Ne.current;return i=qr(t,i),Yr(t,o),n=Cd(e,t,n,r,i,o),r=Ed(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Jt(e,t,o)):(oe&&r&&fd(t),t.flags|=1,Fe(e,t,n,o),t.child)}function Ap(e,t,n,r,o){if(Ye(n)){var i=!0;ea(t)}else i=!1;if(Yr(t,o),t.stateNode===null)Cs(e,t),Vg(t,n,r),Qu(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=ft(u):(u=Ye(n)?sr:Ne.current,u=qr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Cp(t,s,r,u),fn=!1;var p=t.memoizedState;s.state=p,ia(t,r,s,o),l=t.memoizedState,a!==r||p!==l||Ge.current||fn?(typeof c=="function"&&(qu(t,n,c,r),l=t.memoizedState),(a=fn||kp(t,n,a,r,p,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,xg(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:yt(t.type,a),s.props=u,d=t.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=ft(l):(l=Ye(n)?sr:Ne.current,l=qr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||p!==l)&&Cp(t,s,r,l),fn=!1,p=t.memoizedState,s.state=p,ia(t,r,s,o);var v=t.memoizedState;a!==d||p!==v||Ge.current||fn?(typeof g=="function"&&(qu(t,n,g,r),v=t.memoizedState),(u=fn||kp(t,n,u,r,p,v,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return ec(e,t,n,r,i,o)}function ec(e,t,n,r,o,i){Wg(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&mp(t,n,!1),Jt(e,t,i);r=t.stateNode,l5.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Zr(t,e.child,null,i),t.child=Zr(t,null,a,i)):Fe(e,t,a,i),t.memoizedState=r.state,o&&mp(t,n,!0),t.child}function Gg(e){var t=e.stateNode;t.pendingContext?hp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hp(e,t.context,!1),wd(e,t.containerInfo)}function Lp(e,t,n,r,o){return Qr(),hd(o),t.flags|=256,Fe(e,t,n,r),t.child}var tc={dehydrated:null,treeContext:null,retryLane:0};function nc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yg(e,t,n){var r=t.pendingProps,o=ie.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ee(ie,o&1),e===null)return Ku(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Ba(s,r,0,null),e=rr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=nc(n),t.memoizedState=tc,e):Td(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return u5(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=En(o,l),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=En(a,i):(i=rr(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?nc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=tc,r}return i=e.child,e=i.sibling,r=En(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Td(e,t){return t=Ba({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function os(e,t,n,r){return r!==null&&hd(r),Zr(t,e.child,null,n),e=Td(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function u5(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=$l(Error(z(422))),os(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ba({mode:"visible",children:r.children},o,0,null),i=rr(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Zr(t,e.child,null,s),t.child.memoizedState=nc(s),t.memoizedState=tc,i);if(!(t.mode&1))return os(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(z(419)),r=$l(i,r,void 0),os(e,t,s,r)}if(a=(s&e.childLanes)!==0,He||a){if(r=Ce,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Zt(e,o),St(r,e,o,-1))}return Nd(),r=$l(Error(z(421))),os(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=S5.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ze=bn(o.nextSibling),Je=t,oe=!0,xt=null,e!==null&&(lt[ut++]=Ut,lt[ut++]=Ht,lt[ut++]=ar,Ut=e.id,Ht=e.overflow,ar=t),t=Td(t,r.children),t.flags|=4096,t)}function zp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Xu(e.return,t,n)}function Bl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Kg(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Fe(e,t,r.children,n),r=ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zp(e,n,t);else if(e.tag===19)zp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(ie,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&sa(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Bl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&sa(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Bl(t,!0,n,null,i);break;case"together":Bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Cs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ur|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=En(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=En(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function c5(e,t,n){switch(t.tag){case 3:Gg(t),Qr();break;case 5:wg(t);break;case 1:Ye(t.type)&&ea(t);break;case 4:wd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ee(ra,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(ie,ie.current&1),t.flags|=128,null):n&t.child.childLanes?Yg(e,t,n):(ee(ie,ie.current&1),e=Jt(e,t,n),e!==null?e.sibling:null);ee(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Kg(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ee(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,Hg(e,t,n)}return Jt(e,t,n)}var Xg,rc,qg,Qg;Xg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rc=function(){};qg=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Zn(Dt.current);var i=null;switch(n){case"input":o=Eu(e,o),r=Eu(e,r),i=[];break;case"select":o=ue({},o,{value:void 0}),r=ue({},r,{value:void 0}),i=[];break;case"textarea":o=Tu(e,o),r=Tu(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zs)}Au(n,r);var s;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ii.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ii.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&te("scroll",e),i||a===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Qg=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ao(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function d5(e,t,n){var r=t.pendingProps;switch(pd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Ye(t.type)&&Js(),Ae(t),null;case 3:return r=t.stateNode,Jr(),re(Ge),re(Ne),Sd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ns(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xt!==null&&(dc(xt),xt=null))),rc(e,t),Ae(t),null;case 5:bd(t);var o=Zn(yi.current);if(n=t.type,e!==null&&t.stateNode!=null)qg(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return Ae(t),null}if(e=Zn(Dt.current),ns(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ot]=t,r[mi]=i,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(o=0;o<Vo.length;o++)te(Vo[o],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":$f(r,i),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},te("invalid",r);break;case"textarea":Uf(r,i),te("invalid",r)}Au(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&ts(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&ts(r.textContent,a,e),o=["children",""+a]):ii.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&te("scroll",r)}switch(n){case"input":Yi(r),Bf(r,i,!0);break;case"textarea":Yi(r),Hf(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Zs)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=E0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ot]=t,e[mi]=r,Xg(e,t,!1,!1),t.stateNode=e;e:{switch(s=Lu(n,r),n){case"dialog":te("cancel",e),te("close",e),o=r;break;case"iframe":case"object":case"embed":te("load",e),o=r;break;case"video":case"audio":for(o=0;o<Vo.length;o++)te(Vo[o],e);o=r;break;case"source":te("error",e),o=r;break;case"img":case"image":case"link":te("error",e),te("load",e),o=r;break;case"details":te("toggle",e),o=r;break;case"input":$f(e,r),o=Eu(e,r),te("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ue({},r,{value:void 0}),te("invalid",e);break;case"textarea":Uf(e,r),o=Tu(e,r),te("invalid",e);break;default:o=r}Au(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?T0(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&P0(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&si(e,l):typeof l=="number"&&si(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ii.hasOwnProperty(i)?l!=null&&i==="onScroll"&&te("scroll",e):l!=null&&Zc(e,i,l,s))}switch(n){case"input":Yi(e),Bf(e,r,!1);break;case"textarea":Yi(e),Hf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+An(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Ur(e,!!r.multiple,i,!1):r.defaultValue!=null&&Ur(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Zs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)Qg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=Zn(yi.current),Zn(Dt.current),ns(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ot]=t,(i=r.nodeValue!==n)&&(e=Je,e!==null))switch(e.tag){case 3:ts(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ts(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ot]=t,t.stateNode=r}return Ae(t),null;case 13:if(re(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Ze!==null&&t.mode&1&&!(t.flags&128))mg(),Qr(),t.flags|=98560,i=!1;else if(i=ns(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(z(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[Ot]=t}else Qr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),i=!1}else xt!==null&&(dc(xt),xt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?be===0&&(be=3):Nd())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return Jr(),rc(e,t),e===null&&pi(t.stateNode.containerInfo),Ae(t),null;case 10:return yd(t.type._context),Ae(t),null;case 17:return Ye(t.type)&&Js(),Ae(t),null;case 19:if(re(ie),i=t.memoizedState,i===null)return Ae(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Ao(i,!1);else{if(be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=sa(e),s!==null){for(t.flags|=128,Ao(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(ie,ie.current&1|2),t.child}e=e.sibling}i.tail!==null&&fe()>to&&(t.flags|=128,r=!0,Ao(i,!1),t.lanes=4194304)}else{if(!r)if(e=sa(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ao(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!oe)return Ae(t),null}else 2*fe()-i.renderingStartTime>to&&n!==1073741824&&(t.flags|=128,r=!0,Ao(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=fe(),t.sibling=null,n=ie.current,ee(ie,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return Od(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Qe&1073741824&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function f5(e,t){switch(pd(t),t.tag){case 1:return Ye(t.type)&&Js(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jr(),re(Ge),re(Ne),Sd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return bd(t),null;case 13:if(re(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));Qr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(ie),null;case 4:return Jr(),null;case 10:return yd(t.type._context),null;case 22:case 23:return Od(),null;case 24:return null;default:return null}}var is=!1,Le=!1,p5=typeof WeakSet=="function"?WeakSet:Set,M=null;function Mr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(e,t,r)}else n.current=null}function oc(e,t,n){try{n()}catch(r){ce(e,t,r)}}var Op=!1;function h5(e,t){if($u=Xs,e=ng(),dd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=e,p=null;t:for(;;){for(var g;d!==n||o!==0&&d.nodeType!==3||(a=s+o),d!==i||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(g=d.firstChild)!==null;)p=d,d=g;for(;;){if(d===e)break t;if(p===n&&++u===o&&(a=s),p===i&&++c===r&&(l=s),(g=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bu={focusedElem:e,selectionRange:n},Xs=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,b=v.memoizedState,y=t.stateNode,m=y.getSnapshotBeforeUpdate(t.elementType===t.type?x:yt(t.type,x),b);y.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(k){ce(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return v=Op,Op=!1,v}function Xo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&oc(t,n,i)}o=o.next}while(o!==r)}}function Va(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ic(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Zg(e){var t=e.alternate;t!==null&&(e.alternate=null,Zg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ot],delete t[mi],delete t[Wu],delete t[qx],delete t[Qx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Jg(e){return e.tag===5||e.tag===3||e.tag===4}function Np(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zs));else if(r!==4&&(e=e.child,e!==null))for(sc(e,t,n),e=e.sibling;e!==null;)sc(e,t,n),e=e.sibling}function ac(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ac(e,t,n),e=e.sibling;e!==null;)ac(e,t,n),e=e.sibling}var Ee=null,vt=!1;function an(e,t,n){for(n=n.child;n!==null;)e1(e,t,n),n=n.sibling}function e1(e,t,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(za,n)}catch{}switch(n.tag){case 5:Le||Mr(n,t);case 6:var r=Ee,o=vt;Ee=null,an(e,t,n),Ee=r,vt=o,Ee!==null&&(vt?(e=Ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ee.removeChild(n.stateNode));break;case 18:Ee!==null&&(vt?(e=Ee,n=n.stateNode,e.nodeType===8?Dl(e.parentNode,n):e.nodeType===1&&Dl(e,n),ci(e)):Dl(Ee,n.stateNode));break;case 4:r=Ee,o=vt,Ee=n.stateNode.containerInfo,vt=!0,an(e,t,n),Ee=r,vt=o;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&oc(n,t,s),o=o.next}while(o!==r)}an(e,t,n);break;case 1:if(!Le&&(Mr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,t,a)}an(e,t,n);break;case 21:an(e,t,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,an(e,t,n),Le=r):an(e,t,n);break;default:an(e,t,n)}}function Dp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new p5),t.forEach(function(r){var o=k5.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function gt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ee=a.stateNode,vt=!1;break e;case 3:Ee=a.stateNode.containerInfo,vt=!0;break e;case 4:Ee=a.stateNode.containerInfo,vt=!0;break e}a=a.return}if(Ee===null)throw Error(z(160));e1(i,s,o),Ee=null,vt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){ce(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)t1(t,e),t=t.sibling}function t1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gt(t,e),Tt(e),r&4){try{Xo(3,e,e.return),Va(3,e)}catch(x){ce(e,e.return,x)}try{Xo(5,e,e.return)}catch(x){ce(e,e.return,x)}}break;case 1:gt(t,e),Tt(e),r&512&&n!==null&&Mr(n,n.return);break;case 5:if(gt(t,e),Tt(e),r&512&&n!==null&&Mr(n,n.return),e.flags&32){var o=e.stateNode;try{si(o,"")}catch(x){ce(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&k0(o,i),Lu(a,s);var u=Lu(a,i);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?T0(o,d):c==="dangerouslySetInnerHTML"?P0(o,d):c==="children"?si(o,d):Zc(o,c,d,u)}switch(a){case"input":Pu(o,i);break;case"textarea":C0(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Ur(o,!!i.multiple,g,!1):p!==!!i.multiple&&(i.defaultValue!=null?Ur(o,!!i.multiple,i.defaultValue,!0):Ur(o,!!i.multiple,i.multiple?[]:"",!1))}o[mi]=i}catch(x){ce(e,e.return,x)}}break;case 6:if(gt(t,e),Tt(e),r&4){if(e.stateNode===null)throw Error(z(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){ce(e,e.return,x)}}break;case 3:if(gt(t,e),Tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ci(t.containerInfo)}catch(x){ce(e,e.return,x)}break;case 4:gt(t,e),Tt(e);break;case 13:gt(t,e),Tt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ld=fe())),r&4&&Dp(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Le=(u=Le)||c,gt(t,e),Le=u):gt(t,e),Tt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(M=e,c=e.child;c!==null;){for(d=M=c;M!==null;){switch(p=M,g=p.child,p.tag){case 0:case 11:case 14:case 15:Xo(4,p,p.return);break;case 1:Mr(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){ce(r,n,x)}}break;case 5:Mr(p,p.return);break;case 22:if(p.memoizedState!==null){Fp(d);continue}}g!==null?(g.return=p,M=g):Fp(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=j0("display",s))}catch(x){ce(e,e.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){ce(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:gt(t,e),Tt(e),r&4&&Dp(e);break;case 21:break;default:gt(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Jg(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(si(o,""),r.flags&=-33);var i=Np(e);ac(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Np(e);sc(e,a,s);break;default:throw Error(z(161))}}catch(l){ce(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function m5(e,t,n){M=e,n1(e)}function n1(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var o=M,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||is;if(!s){var a=o.alternate,l=a!==null&&a.memoizedState!==null||Le;a=is;var u=Le;if(is=s,(Le=l)&&!u)for(M=o;M!==null;)s=M,l=s.child,s.tag===22&&s.memoizedState!==null?Ip(o):l!==null?(l.return=s,M=l):Ip(o);for(;i!==null;)M=i,n1(i),i=i.sibling;M=o,is=a,Le=u}Mp(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,M=i):Mp(e)}}function Mp(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Le||Va(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Le)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:yt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&wp(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wp(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ci(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Le||t.flags&512&&ic(t)}catch(p){ce(t,t.return,p)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function Fp(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Ip(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Va(4,t)}catch(l){ce(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){ce(t,o,l)}}var i=t.return;try{ic(t)}catch(l){ce(t,i,l)}break;case 5:var s=t.return;try{ic(t)}catch(l){ce(t,s,l)}}}catch(l){ce(t,t.return,l)}if(t===e){M=null;break}var a=t.sibling;if(a!==null){a.return=t.return,M=a;break}M=t.return}}var g5=Math.ceil,ua=tn.ReactCurrentDispatcher,Rd=tn.ReactCurrentOwner,dt=tn.ReactCurrentBatchConfig,Y=0,Ce=null,me=null,je=0,Qe=0,Fr=Dn(0),be=0,bi=null,ur=0,$a=0,Ad=0,qo=null,Ue=null,Ld=0,to=1/0,Vt=null,ca=!1,lc=null,kn=null,ss=!1,yn=null,da=0,Qo=0,uc=null,Es=-1,Ps=0;function Ie(){return Y&6?fe():Es!==-1?Es:Es=fe()}function Cn(e){return e.mode&1?Y&2&&je!==0?je&-je:Jx.transition!==null?(Ps===0&&(Ps=V0()),Ps):(e=Q,e!==0||(e=window.event,e=e===void 0?16:Y0(e.type)),e):1}function St(e,t,n,r){if(50<Qo)throw Qo=0,uc=null,Error(z(185));Ti(e,n,r),(!(Y&2)||e!==Ce)&&(e===Ce&&(!(Y&2)&&($a|=n),be===4&&mn(e,je)),Ke(e,r),n===1&&Y===0&&!(t.mode&1)&&(to=fe()+500,Fa&&Mn()))}function Ke(e,t){var n=e.callbackNode;J2(e,t);var r=Ks(e,e===Ce?je:0);if(r===0)n!==null&&Yf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Yf(n),t===1)e.tag===0?Zx(_p.bind(null,e)):fg(_p.bind(null,e)),Kx(function(){!(Y&6)&&Mn()}),n=null;else{switch($0(r)){case 1:n=rd;break;case 4:n=I0;break;case 16:n=Ys;break;case 536870912:n=_0;break;default:n=Ys}n=c1(n,r1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function r1(e,t){if(Es=-1,Ps=0,Y&6)throw Error(z(327));var n=e.callbackNode;if(Kr()&&e.callbackNode!==n)return null;var r=Ks(e,e===Ce?je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=fa(e,r);else{t=r;var o=Y;Y|=2;var i=i1();(Ce!==e||je!==t)&&(Vt=null,to=fe()+500,nr(e,t));do try{x5();break}catch(a){o1(e,a)}while(1);gd(),ua.current=i,Y=o,me!==null?t=0:(Ce=null,je=0,t=be)}if(t!==0){if(t===2&&(o=Mu(e),o!==0&&(r=o,t=cc(e,o))),t===1)throw n=bi,nr(e,0),mn(e,r),Ke(e,fe()),n;if(t===6)mn(e,r);else{if(o=e.current.alternate,!(r&30)&&!y5(o)&&(t=fa(e,r),t===2&&(i=Mu(e),i!==0&&(r=i,t=cc(e,i))),t===1))throw n=bi,nr(e,0),mn(e,r),Ke(e,fe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:Wn(e,Ue,Vt);break;case 3:if(mn(e,r),(r&130023424)===r&&(t=Ld+500-fe(),10<t)){if(Ks(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ie(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Hu(Wn.bind(null,e,Ue,Vt),t);break}Wn(e,Ue,Vt);break;case 4:if(mn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-bt(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*g5(r/1960))-r,10<r){e.timeoutHandle=Hu(Wn.bind(null,e,Ue,Vt),r);break}Wn(e,Ue,Vt);break;case 5:Wn(e,Ue,Vt);break;default:throw Error(z(329))}}}return Ke(e,fe()),e.callbackNode===n?r1.bind(null,e):null}function cc(e,t){var n=qo;return e.current.memoizedState.isDehydrated&&(nr(e,t).flags|=256),e=fa(e,t),e!==2&&(t=Ue,Ue=n,t!==null&&dc(t)),e}function dc(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function y5(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Et(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mn(e,t){for(t&=~Ad,t&=~$a,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function _p(e){if(Y&6)throw Error(z(327));Kr();var t=Ks(e,0);if(!(t&1))return Ke(e,fe()),null;var n=fa(e,t);if(e.tag!==0&&n===2){var r=Mu(e);r!==0&&(t=r,n=cc(e,r))}if(n===1)throw n=bi,nr(e,0),mn(e,t),Ke(e,fe()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wn(e,Ue,Vt),Ke(e,fe()),null}function zd(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(to=fe()+500,Fa&&Mn())}}function cr(e){yn!==null&&yn.tag===0&&!(Y&6)&&Kr();var t=Y;Y|=1;var n=dt.transition,r=Q;try{if(dt.transition=null,Q=1,e)return e()}finally{Q=r,dt.transition=n,Y=t,!(Y&6)&&Mn()}}function Od(){Qe=Fr.current,re(Fr)}function nr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yx(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(pd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Js();break;case 3:Jr(),re(Ge),re(Ne),Sd();break;case 5:bd(r);break;case 4:Jr();break;case 13:re(ie);break;case 19:re(ie);break;case 10:yd(r.type._context);break;case 22:case 23:Od()}n=n.return}if(Ce=e,me=e=En(e.current,null),je=Qe=t,be=0,bi=null,Ad=$a=ur=0,Ue=qo=null,Qn!==null){for(t=0;t<Qn.length;t++)if(n=Qn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}Qn=null}return e}function o1(e,t){do{var n=me;try{if(gd(),Ss.current=la,aa){for(var r=ae.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}aa=!1}if(lr=0,Se=xe=ae=null,Ko=!1,vi=0,Rd.current=null,n===null||n.return===null){be=1,bi=t,me=null;break}e:{var i=e,s=n.return,a=n,l=t;if(t=je,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Pp(s);if(g!==null){g.flags&=-257,jp(g,s,a,i,t),g.mode&1&&Ep(i,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(l),t.updateQueue=x}else v.add(l);break e}else{if(!(t&1)){Ep(i,u,t),Nd();break e}l=Error(z(426))}}else if(oe&&a.mode&1){var b=Pp(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),jp(b,s,a,i,t),hd(eo(l,a));break e}}i=l=eo(l,a),be!==4&&(be=2),qo===null?qo=[i]:qo.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var y=$g(i,l,t);xp(i,y);break e;case 1:a=l;var m=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(kn===null||!kn.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=Bg(i,a,t);xp(i,k);break e}}i=i.return}while(i!==null)}a1(n)}catch(E){t=E,me===n&&n!==null&&(me=n=n.return);continue}break}while(1)}function i1(){var e=ua.current;return ua.current=la,e===null?la:e}function Nd(){(be===0||be===3||be===2)&&(be=4),Ce===null||!(ur&268435455)&&!($a&268435455)||mn(Ce,je)}function fa(e,t){var n=Y;Y|=2;var r=i1();(Ce!==e||je!==t)&&(Vt=null,nr(e,t));do try{v5();break}catch(o){o1(e,o)}while(1);if(gd(),Y=n,ua.current=r,me!==null)throw Error(z(261));return Ce=null,je=0,be}function v5(){for(;me!==null;)s1(me)}function x5(){for(;me!==null&&!H2();)s1(me)}function s1(e){var t=u1(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?a1(e):me=t,Rd.current=null}function a1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=f5(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{be=6,me=null;return}}else if(n=d5(n,t,Qe),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);be===0&&(be=5)}function Wn(e,t,n){var r=Q,o=dt.transition;try{dt.transition=null,Q=1,w5(e,t,n,r)}finally{dt.transition=o,Q=r}return null}function w5(e,t,n,r){do Kr();while(yn!==null);if(Y&6)throw Error(z(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ex(e,i),e===Ce&&(me=Ce=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ss||(ss=!0,c1(Ys,function(){return Kr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=dt.transition,dt.transition=null;var s=Q;Q=1;var a=Y;Y|=4,Rd.current=null,h5(e,n),t1(n,e),Vx(Bu),Xs=!!$u,Bu=$u=null,e.current=n,m5(n),W2(),Y=a,Q=s,dt.transition=i}else e.current=n;if(ss&&(ss=!1,yn=e,da=o),i=e.pendingLanes,i===0&&(kn=null),K2(n.stateNode),Ke(e,fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ca)throw ca=!1,e=lc,lc=null,e;return da&1&&e.tag!==0&&Kr(),i=e.pendingLanes,i&1?e===uc?Qo++:(Qo=0,uc=e):Qo=0,Mn(),null}function Kr(){if(yn!==null){var e=$0(da),t=dt.transition,n=Q;try{if(dt.transition=null,Q=16>e?16:e,yn===null)var r=!1;else{if(e=yn,yn=null,da=0,Y&6)throw Error(z(331));var o=Y;for(Y|=4,M=e.current;M!==null;){var i=M,s=i.child;if(M.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:Xo(8,c,i)}var d=c.child;if(d!==null)d.return=c,M=d;else for(;M!==null;){c=M;var p=c.sibling,g=c.return;if(Zg(c),c===u){M=null;break}if(p!==null){p.return=g,M=p;break}M=g}}}var v=i.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var b=x.sibling;x.sibling=null,x=b}while(x!==null)}}M=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,M=s;else e:for(;M!==null;){if(i=M,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Xo(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,M=y;break e}M=i.return}}var m=e.current;for(M=m;M!==null;){s=M;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,M=h;else e:for(s=m;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Va(9,a)}}catch(E){ce(a,a.return,E)}if(a===s){M=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,M=k;break e}M=a.return}}if(Y=o,Mn(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(za,e)}catch{}r=!0}return r}finally{Q=n,dt.transition=t}}return!1}function Vp(e,t,n){t=eo(n,t),t=$g(e,t,1),e=Sn(e,t,1),t=Ie(),e!==null&&(Ti(e,1,t),Ke(e,t))}function ce(e,t,n){if(e.tag===3)Vp(e,e,n);else for(;t!==null;){if(t.tag===3){Vp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kn===null||!kn.has(r))){e=eo(n,e),e=Bg(t,e,1),t=Sn(t,e,1),e=Ie(),t!==null&&(Ti(t,1,e),Ke(t,e));break}}t=t.return}}function b5(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ie(),e.pingedLanes|=e.suspendedLanes&n,Ce===e&&(je&n)===n&&(be===4||be===3&&(je&130023424)===je&&500>fe()-Ld?nr(e,0):Ad|=n),Ke(e,t)}function l1(e,t){t===0&&(e.mode&1?(t=qi,qi<<=1,!(qi&130023424)&&(qi=4194304)):t=1);var n=Ie();e=Zt(e,t),e!==null&&(Ti(e,t,n),Ke(e,n))}function S5(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),l1(e,n)}function k5(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),l1(e,n)}var u1;u1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)He=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return He=!1,c5(e,t,n);He=!!(e.flags&131072)}else He=!1,oe&&t.flags&1048576&&pg(t,na,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Cs(e,t),e=t.pendingProps;var o=qr(t,Ne.current);Yr(t,n),o=Cd(null,t,r,e,o,n);var i=Ed();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ye(r)?(i=!0,ea(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,xd(t),o.updater=_a,t.stateNode=o,o._reactInternals=t,Qu(t,r,e,n),t=ec(null,t,r,!0,i,n)):(t.tag=0,oe&&i&&fd(t),Fe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Cs(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=E5(r),e=yt(r,e),o){case 0:t=Ju(null,t,r,e,n);break e;case 1:t=Ap(null,t,r,e,n);break e;case 11:t=Tp(null,t,r,e,n);break e;case 14:t=Rp(null,t,r,yt(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:yt(r,o),Ju(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:yt(r,o),Ap(e,t,r,o,n);case 3:e:{if(Gg(t),e===null)throw Error(z(387));r=t.pendingProps,i=t.memoizedState,o=i.element,xg(e,t),ia(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=eo(Error(z(423)),t),t=Lp(e,t,r,n,o);break e}else if(r!==o){o=eo(Error(z(424)),t),t=Lp(e,t,r,n,o);break e}else for(Ze=bn(t.stateNode.containerInfo.firstChild),Je=t,oe=!0,xt=null,n=yg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qr(),r===o){t=Jt(e,t,n);break e}Fe(e,t,r,n)}t=t.child}return t;case 5:return wg(t),e===null&&Ku(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,Uu(r,o)?s=null:i!==null&&Uu(r,i)&&(t.flags|=32),Wg(e,t),Fe(e,t,s,n),t.child;case 6:return e===null&&Ku(t),null;case 13:return Yg(e,t,n);case 4:return wd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Zr(t,null,r,n):Fe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:yt(r,o),Tp(e,t,r,o,n);case 7:return Fe(e,t,t.pendingProps,n),t.child;case 8:return Fe(e,t,t.pendingProps.children,n),t.child;case 12:return Fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,ee(ra,r._currentValue),r._currentValue=s,i!==null)if(Et(i.value,s)){if(i.children===o.children&&!Ge.current){t=Jt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Gt(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Xu(i.return,n,t),a.lanes|=n;break}l=l.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(z(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Xu(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Fe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Yr(t,n),o=ft(o),r=r(o),t.flags|=1,Fe(e,t,r,n),t.child;case 14:return r=t.type,o=yt(r,t.pendingProps),o=yt(r.type,o),Rp(e,t,r,o,n);case 15:return Ug(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:yt(r,o),Cs(e,t),t.tag=1,Ye(r)?(e=!0,ea(t)):e=!1,Yr(t,n),Vg(t,r,o),Qu(t,r,o,n),ec(null,t,r,!0,e,n);case 19:return Kg(e,t,n);case 22:return Hg(e,t,n)}throw Error(z(156,t.tag))};function c1(e,t){return F0(e,t)}function C5(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,n,r){return new C5(e,t,n,r)}function Dd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function E5(e){if(typeof e=="function")return Dd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ed)return 11;if(e===td)return 14}return 2}function En(e,t){var n=e.alternate;return n===null?(n=ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function js(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Dd(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case jr:return rr(n.children,o,i,t);case Jc:s=8,o|=8;break;case bu:return e=ct(12,n,t,o|2),e.elementType=bu,e.lanes=i,e;case Su:return e=ct(13,n,t,o),e.elementType=Su,e.lanes=i,e;case ku:return e=ct(19,n,t,o),e.elementType=ku,e.lanes=i,e;case w0:return Ba(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v0:s=10;break e;case x0:s=9;break e;case ed:s=11;break e;case td:s=14;break e;case dn:s=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=ct(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function rr(e,t,n,r){return e=ct(7,e,r,t),e.lanes=n,e}function Ba(e,t,n,r){return e=ct(22,e,r,t),e.elementType=w0,e.lanes=n,e.stateNode={isHidden:!1},e}function Ul(e,t,n){return e=ct(6,e,null,t),e.lanes=n,e}function Hl(e,t,n){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function P5(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cl(0),this.expirationTimes=Cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Md(e,t,n,r,o,i,s,a,l){return e=new P5(e,t,n,a,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ct(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xd(i),e}function j5(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function d1(e){if(!e)return Ln;e=e._reactInternals;e:{if(pr(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(Ye(n))return dg(e,n,t)}return t}function f1(e,t,n,r,o,i,s,a,l){return e=Md(n,r,!0,e,o,i,s,a,l),e.context=d1(null),n=e.current,r=Ie(),o=Cn(n),i=Gt(r,o),i.callback=t??null,Sn(n,i,o),e.current.lanes=o,Ti(e,o,r),Ke(e,r),e}function Ua(e,t,n,r){var o=t.current,i=Ie(),s=Cn(o);return n=d1(n),t.context===null?t.context=n:t.pendingContext=n,t=Gt(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Sn(o,t,s),e!==null&&(St(e,o,s,i),bs(e,o,s)),s}function pa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $p(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fd(e,t){$p(e,t),(e=e.alternate)&&$p(e,t)}function T5(){return null}var p1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Id(e){this._internalRoot=e}Ha.prototype.render=Id.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));Ua(e,t,null,null)};Ha.prototype.unmount=Id.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cr(function(){Ua(null,e,null,null)}),t[Qt]=null}};function Ha(e){this._internalRoot=e}Ha.prototype.unstable_scheduleHydration=function(e){if(e){var t=H0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<hn.length&&t!==0&&t<hn[n].priority;n++);hn.splice(n,0,e),n===0&&G0(e)}};function _d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bp(){}function R5(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=pa(s);i.call(u)}}var s=f1(t,r,e,0,null,!1,!1,"",Bp);return e._reactRootContainer=s,e[Qt]=s.current,pi(e.nodeType===8?e.parentNode:e),cr(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=pa(l);a.call(u)}}var l=Md(e,0,!1,null,null,!1,!1,"",Bp);return e._reactRootContainer=l,e[Qt]=l.current,pi(e.nodeType===8?e.parentNode:e),cr(function(){Ua(t,l,n,r)}),l}function Ga(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var l=pa(s);a.call(l)}}Ua(t,s,e,o)}else s=R5(n,t,e,o,r);return pa(s)}B0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_o(t.pendingLanes);n!==0&&(od(t,n|1),Ke(t,fe()),!(Y&6)&&(to=fe()+500,Mn()))}break;case 13:cr(function(){var r=Zt(e,1);if(r!==null){var o=Ie();St(r,e,1,o)}}),Fd(e,1)}};id=function(e){if(e.tag===13){var t=Zt(e,134217728);if(t!==null){var n=Ie();St(t,e,134217728,n)}Fd(e,134217728)}};U0=function(e){if(e.tag===13){var t=Cn(e),n=Zt(e,t);if(n!==null){var r=Ie();St(n,e,t,r)}Fd(e,t)}};H0=function(){return Q};W0=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}};Ou=function(e,t,n){switch(t){case"input":if(Pu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ma(r);if(!o)throw Error(z(90));S0(r),Pu(r,o)}}}break;case"textarea":C0(e,n);break;case"select":t=n.value,t!=null&&Ur(e,!!n.multiple,t,!1)}};L0=zd;z0=cr;var A5={usingClientEntryPoint:!1,Events:[Ai,Lr,Ma,R0,A0,zd]},Lo={findFiberByHostInstance:qn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},L5={bundleType:Lo.bundleType,version:Lo.version,rendererPackageName:Lo.rendererPackageName,rendererConfig:Lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=D0(e),e===null?null:e.stateNode},findFiberByHostInstance:Lo.findFiberByHostInstance||T5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var as=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!as.isDisabled&&as.supportsFiber)try{za=as.inject(L5),Nt=as}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A5;nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_d(t))throw Error(z(200));return j5(e,t,null,n)};nt.createRoot=function(e,t){if(!_d(e))throw Error(z(299));var n=!1,r="",o=p1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Md(e,1,!1,null,null,n,!1,r,o),e[Qt]=t.current,pi(e.nodeType===8?e.parentNode:e),new Id(t)};nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=D0(t),e=e===null?null:e.stateNode,e};nt.flushSync=function(e){return cr(e)};nt.hydrate=function(e,t,n){if(!Wa(t))throw Error(z(200));return Ga(null,e,t,!0,n)};nt.hydrateRoot=function(e,t,n){if(!_d(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=p1;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=f1(t,null,e,1,n??null,o,!1,i,s),e[Qt]=t.current,pi(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ha(t)};nt.render=function(e,t,n){if(!Wa(t))throw Error(z(200));return Ga(null,e,t,!1,n)};nt.unmountComponentAtNode=function(e){if(!Wa(e))throw Error(z(40));return e._reactRootContainer?(cr(function(){Ga(null,null,e,!1,function(){e._reactRootContainer=null,e[Qt]=null})}),!0):!1};nt.unstable_batchedUpdates=zd;nt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Wa(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return Ga(e,t,n,!1,r)};nt.version="18.3.1-next-f1338f8080-20240426";function h1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h1)}catch(e){console.error(e)}}h1(),h0.exports=nt;var z5=h0.exports,Up=z5;xu.createRoot=Up.createRoot,xu.hydrateRoot=Up.hydrateRoot;var Oe=function(){return Oe=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Oe.apply(this,arguments)};function no(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var ne="-ms-",Zo="-moz-",q="-webkit-",m1="comm",Ya="rule",Vd="decl",O5="@import",g1="@keyframes",N5="@layer",y1=Math.abs,$d=String.fromCharCode,fc=Object.assign;function D5(e,t){return ke(e,0)^45?(((t<<2^ke(e,0))<<2^ke(e,1))<<2^ke(e,2))<<2^ke(e,3):0}function v1(e){return e.trim()}function $t(e,t){return(e=t.exec(e))?e[0]:e}function U(e,t,n){return e.replace(t,n)}function Ts(e,t,n){return e.indexOf(t,n)}function ke(e,t){return e.charCodeAt(t)|0}function ro(e,t,n){return e.slice(t,n)}function Lt(e){return e.length}function x1(e){return e.length}function $o(e,t){return t.push(e),e}function M5(e,t){return e.map(t).join("")}function Hp(e,t){return e.filter(function(n){return!$t(n,t)})}var Ka=1,oo=1,w1=0,ht=0,he=0,yo="";function Xa(e,t,n,r,o,i,s,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Ka,column:oo,length:s,return:"",siblings:a}}function ln(e,t){return fc(Xa("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function yr(e){for(;e.root;)e=ln(e.root,{children:[e]});$o(e,e.siblings)}function F5(){return he}function I5(){return he=ht>0?ke(yo,--ht):0,oo--,he===10&&(oo=1,Ka--),he}function kt(){return he=ht<w1?ke(yo,ht++):0,oo++,he===10&&(oo=1,Ka++),he}function or(){return ke(yo,ht)}function Rs(){return ht}function qa(e,t){return ro(yo,e,t)}function pc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _5(e){return Ka=oo=1,w1=Lt(yo=e),ht=0,[]}function V5(e){return yo="",e}function Wl(e){return v1(qa(ht-1,hc(e===91?e+2:e===40?e+1:e)))}function $5(e){for(;(he=or())&&he<33;)kt();return pc(e)>2||pc(he)>3?"":" "}function B5(e,t){for(;--t&&kt()&&!(he<48||he>102||he>57&&he<65||he>70&&he<97););return qa(e,Rs()+(t<6&&or()==32&&kt()==32))}function hc(e){for(;kt();)switch(he){case e:return ht;case 34:case 39:e!==34&&e!==39&&hc(he);break;case 40:e===41&&hc(e);break;case 92:kt();break}return ht}function U5(e,t){for(;kt()&&e+he!==47+10;)if(e+he===42+42&&or()===47)break;return"/*"+qa(t,ht-1)+"*"+$d(e===47?e:kt())}function H5(e){for(;!pc(or());)kt();return qa(e,ht)}function W5(e){return V5(As("",null,null,null,[""],e=_5(e),0,[0],e))}function As(e,t,n,r,o,i,s,a,l){for(var u=0,c=0,d=s,p=0,g=0,v=0,x=1,b=1,y=1,m=0,h="",k=o,E=i,R=r,C=h;b;)switch(v=m,m=kt()){case 40:if(v!=108&&ke(C,d-1)==58){Ts(C+=U(Wl(m),"&","&\f"),"&\f",y1(u?a[u-1]:0))!=-1&&(y=-1);break}case 34:case 39:case 91:C+=Wl(m);break;case 9:case 10:case 13:case 32:C+=$5(v);break;case 92:C+=B5(Rs()-1,7);continue;case 47:switch(or()){case 42:case 47:$o(G5(U5(kt(),Rs()),t,n,l),l);break;default:C+="/"}break;case 123*x:a[u++]=Lt(C)*y;case 125*x:case 59:case 0:switch(m){case 0:case 125:b=0;case 59+c:y==-1&&(C=U(C,/\f/g,"")),g>0&&Lt(C)-d&&$o(g>32?Gp(C+";",r,n,d-1,l):Gp(U(C," ","")+";",r,n,d-2,l),l);break;case 59:C+=";";default:if($o(R=Wp(C,t,n,u,c,o,a,h,k=[],E=[],d,i),i),m===123)if(c===0)As(C,t,R,R,k,i,d,a,E);else switch(p===99&&ke(C,3)===110?100:p){case 100:case 108:case 109:case 115:As(e,R,R,r&&$o(Wp(e,R,R,0,0,o,a,h,o,k=[],d,E),E),o,E,d,a,r?k:E);break;default:As(C,R,R,R,[""],E,0,a,E)}}u=c=g=0,x=y=1,h=C="",d=s;break;case 58:d=1+Lt(C),g=v;default:if(x<1){if(m==123)--x;else if(m==125&&x++==0&&I5()==125)continue}switch(C+=$d(m),m*x){case 38:y=c>0?1:(C+="\f",-1);break;case 44:a[u++]=(Lt(C)-1)*y,y=1;break;case 64:or()===45&&(C+=Wl(kt())),p=or(),c=d=Lt(h=C+=H5(Rs())),m++;break;case 45:v===45&&Lt(C)==2&&(x=0)}}return i}function Wp(e,t,n,r,o,i,s,a,l,u,c,d){for(var p=o-1,g=o===0?i:[""],v=x1(g),x=0,b=0,y=0;x<r;++x)for(var m=0,h=ro(e,p+1,p=y1(b=s[x])),k=e;m<v;++m)(k=v1(b>0?g[m]+" "+h:U(h,/&\f/g,g[m])))&&(l[y++]=k);return Xa(e,t,n,o===0?Ya:a,l,u,c,d)}function G5(e,t,n,r){return Xa(e,t,n,m1,$d(F5()),ro(e,2,-2),0,r)}function Gp(e,t,n,r,o){return Xa(e,t,n,Vd,ro(e,0,r),ro(e,r+1,-1),r,o)}function b1(e,t,n){switch(D5(e,t)){case 5103:return q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return q+e+e;case 4789:return Zo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return q+e+Zo+e+ne+e+e;case 5936:switch(ke(e,t+11)){case 114:return q+e+ne+U(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return q+e+ne+U(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return q+e+ne+U(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return q+e+ne+e+e;case 6165:return q+e+ne+"flex-"+e+e;case 5187:return q+e+U(e,/(\w+).+(:[^]+)/,q+"box-$1$2"+ne+"flex-$1$2")+e;case 5443:return q+e+ne+"flex-item-"+U(e,/flex-|-self/g,"")+($t(e,/flex-|baseline/)?"":ne+"grid-row-"+U(e,/flex-|-self/g,""))+e;case 4675:return q+e+ne+"flex-line-pack"+U(e,/align-content|flex-|-self/g,"")+e;case 5548:return q+e+ne+U(e,"shrink","negative")+e;case 5292:return q+e+ne+U(e,"basis","preferred-size")+e;case 6060:return q+"box-"+U(e,"-grow","")+q+e+ne+U(e,"grow","positive")+e;case 4554:return q+U(e,/([^-])(transform)/g,"$1"+q+"$2")+e;case 6187:return U(U(U(e,/(zoom-|grab)/,q+"$1"),/(image-set)/,q+"$1"),e,"")+e;case 5495:case 3959:return U(e,/(image-set\([^]*)/,q+"$1$`$1");case 4968:return U(U(e,/(.+:)(flex-)?(.*)/,q+"box-pack:$3"+ne+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+q+e+e;case 4200:if(!$t(e,/flex-|baseline/))return ne+"grid-column-align"+ro(e,t)+e;break;case 2592:case 3360:return ne+U(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,$t(r.props,/grid-\w+-end/)})?~Ts(e+(n=n[t].value),"span",0)?e:ne+U(e,"-start","")+e+ne+"grid-row-span:"+(~Ts(n,"span",0)?$t(n,/\d+/):+$t(n,/\d+/)-+$t(e,/\d+/))+";":ne+U(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return $t(r.props,/grid-\w+-start/)})?e:ne+U(U(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return U(e,/(.+)-inline(.+)/,q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Lt(e)-1-t>6)switch(ke(e,t+1)){case 109:if(ke(e,t+4)!==45)break;case 102:return U(e,/(.+:)(.+)-([^]+)/,"$1"+q+"$2-$3$1"+Zo+(ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ts(e,"stretch",0)?b1(U(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return U(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,a,l,u){return ne+o+":"+i+u+(s?ne+o+"-span:"+(a?l:+l-+i)+u:"")+e});case 4949:if(ke(e,t+6)===121)return U(e,":",":"+q)+e;break;case 6444:switch(ke(e,ke(e,14)===45?18:11)){case 120:return U(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+q+(ke(e,14)===45?"inline-":"")+"box$3$1"+q+"$2$3$1"+ne+"$2box$3")+e;case 100:return U(e,":",":"+ne)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return U(e,"scroll-","scroll-snap-")+e}return e}function ha(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Y5(e,t,n,r){switch(e.type){case N5:if(e.children.length)break;case O5:case Vd:return e.return=e.return||e.value;case m1:return"";case g1:return e.return=e.value+"{"+ha(e.children,r)+"}";case Ya:if(!Lt(e.value=e.props.join(",")))return""}return Lt(n=ha(e.children,r))?e.return=e.value+"{"+n+"}":""}function K5(e){var t=x1(e);return function(n,r,o,i){for(var s="",a=0;a<t;a++)s+=e[a](n,r,o,i)||"";return s}}function X5(e){return function(t){t.root||(t=t.return)&&e(t)}}function q5(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Vd:e.return=b1(e.value,e.length,n);return;case g1:return ha([ln(e,{value:U(e.value,"@","@"+q)})],r);case Ya:if(e.length)return M5(n=e.props,function(o){switch($t(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":yr(ln(e,{props:[U(o,/:(read-\w+)/,":"+Zo+"$1")]})),yr(ln(e,{props:[o]})),fc(e,{props:Hp(n,r)});break;case"::placeholder":yr(ln(e,{props:[U(o,/:(plac\w+)/,":"+q+"input-$1")]})),yr(ln(e,{props:[U(o,/:(plac\w+)/,":"+Zo+"$1")]})),yr(ln(e,{props:[U(o,/:(plac\w+)/,ne+"input-$1")]})),yr(ln(e,{props:[o]})),fc(e,{props:Hp(n,r)});break}return""})}}var Q5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},io=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",S1="active",k1="data-styled-version",Qa="6.1.19",Bd=`/*!sc*/
`,ma=typeof window<"u"&&typeof document<"u",Z5=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),J5={},Za=Object.freeze([]),so=Object.freeze({});function C1(e,t,n){return n===void 0&&(n=so),e.theme!==n.theme&&e.theme||t||n.theme}var E1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ew=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,tw=/(^-|-$)/g;function Yp(e){return e.replace(ew,"-").replace(tw,"")}var nw=/(a)(d)/gi,ls=52,Kp=function(e){return String.fromCharCode(e+(e>25?39:97))};function mc(e){var t,n="";for(t=Math.abs(e);t>ls;t=t/ls|0)n=Kp(t%ls)+n;return(Kp(t%ls)+n).replace(nw,"$1-$2")}var Gl,P1=5381,Ir=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},j1=function(e){return Ir(P1,e)};function Ud(e){return mc(j1(e)>>>0)}function rw(e){return e.displayName||e.name||"Component"}function Yl(e){return typeof e=="string"&&!0}var T1=typeof Symbol=="function"&&Symbol.for,R1=T1?Symbol.for("react.memo"):60115,ow=T1?Symbol.for("react.forward_ref"):60112,iw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},sw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},A1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},aw=((Gl={})[ow]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gl[R1]=A1,Gl);function Xp(e){return("type"in(t=e)&&t.type.$$typeof)===R1?A1:"$$typeof"in e?aw[e.$$typeof]:iw;var t}var lw=Object.defineProperty,uw=Object.getOwnPropertyNames,qp=Object.getOwnPropertySymbols,cw=Object.getOwnPropertyDescriptor,dw=Object.getPrototypeOf,Qp=Object.prototype;function L1(e,t,n){if(typeof t!="string"){if(Qp){var r=dw(t);r&&r!==Qp&&L1(e,r,n)}var o=uw(t);qp&&(o=o.concat(qp(t)));for(var i=Xp(e),s=Xp(t),a=0;a<o.length;++a){var l=o[a];if(!(l in sw||n&&n[l]||s&&l in s||i&&l in i)){var u=cw(t,l);try{lw(e,l,u)}catch{}}}}return e}function ao(e){return typeof e=="function"}function Hd(e){return typeof e=="object"&&"styledComponentId"in e}function Jn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ga(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Si(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function gc(e,t,n){if(n===void 0&&(n=!1),!n&&!Si(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=gc(e[r],t[r]);else if(Si(t))for(var r in t)e[r]=gc(e[r],t[r]);return e}function Wd(e,t){Object.defineProperty(e,"toString",{value:t})}function zi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var fw=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw zi(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,s=o;s<i;s++)n+="".concat(this.tag.getRule(s)).concat(Bd);return n},e}(),Ls=new Map,ya=new Map,zs=1,us=function(e){if(Ls.has(e))return Ls.get(e);for(;ya.has(zs);)zs++;var t=zs++;return Ls.set(e,t),ya.set(t,e),t},pw=function(e,t){zs=t+1,Ls.set(e,t),ya.set(t,e)},hw="style[".concat(io,"][").concat(k1,'="').concat(Qa,'"]'),mw=new RegExp("^".concat(io,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),gw=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},yw=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Bd),o=[],i=0,s=r.length;i<s;i++){var a=r[i].trim();if(a){var l=a.match(mw);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(pw(c,u),gw(e,c,l[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}},Zp=function(e){for(var t=document.querySelectorAll(hw),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(io)!==S1&&(yw(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function vw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var z1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var l=Array.from(a.querySelectorAll("style[".concat(io,"]")));return l[l.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(io,S1),r.setAttribute(k1,Qa);var s=vw();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},xw=function(){function e(t){this.element=z1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var s=r[o];if(s.ownerNode===n)return s}throw zi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),ww=function(){function e(t){this.element=z1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),bw=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Jp=ma,Sw={isServer:!ma,useCSSOMInjection:!Z5},va=function(){function e(t,n,r){t===void 0&&(t=so),n===void 0&&(n={});var o=this;this.options=Oe(Oe({},Sw),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ma&&Jp&&(Jp=!1,Zp(this)),Wd(this,function(){return function(i){for(var s=i.getTag(),a=s.length,l="",u=function(d){var p=function(y){return ya.get(y)}(d);if(p===void 0)return"continue";var g=i.names.get(p),v=s.getGroup(d);if(g===void 0||!g.size||v.length===0)return"continue";var x="".concat(io,".g").concat(d,'[id="').concat(p,'"]'),b="";g!==void 0&&g.forEach(function(y){y.length>0&&(b+="".concat(y,","))}),l+="".concat(v).concat(x,'{content:"').concat(b,'"}').concat(Bd)},c=0;c<a;c++)u(c);return l}(o)})}return e.registerId=function(t){return us(t)},e.prototype.rehydrate=function(){!this.server&&ma&&Zp(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Oe(Oe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new bw(o):r?new xw(o):new ww(o)}(this.options),new fw(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(us(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(us(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(us(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),kw=/&/g,Cw=/^\s*\/\/.*$/gm;function O1(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=O1(n.children,t)),n})}function Ew(e){var t,n,r,o=e===void 0?so:e,i=o.options,s=i===void 0?so:i,a=o.plugins,l=a===void 0?Za:a,u=function(p,g,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):p},c=l.slice();c.push(function(p){p.type===Ya&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(kw,n).replace(r,u))}),s.prefix&&c.push(q5),c.push(Y5);var d=function(p,g,v,x){g===void 0&&(g=""),v===void 0&&(v=""),x===void 0&&(x="&"),t=x,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var b=p.replace(Cw,""),y=W5(v||g?"".concat(v," ").concat(g," { ").concat(b," }"):b);s.namespace&&(y=O1(y,s.namespace));var m=[];return ha(y,K5(c.concat(X5(function(h){return m.push(h)})))),m};return d.hash=l.length?l.reduce(function(p,g){return g.name||zi(15),Ir(p,g.name)},P1).toString():"",d}var Pw=new va,yc=Ew(),N1=we.createContext({shouldForwardProp:void 0,styleSheet:Pw,stylis:yc});N1.Consumer;we.createContext(void 0);function vc(){return w.useContext(N1)}var D1=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=yc);var s=r.name+i.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Wd(this,function(){throw zi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=yc),this.name+t.hash},e}(),jw=function(e){return e>="A"&&e<="Z"};function eh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;jw(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var M1=function(e){return e==null||e===!1||e===""},F1=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!M1(i)&&(Array.isArray(i)&&i.isCss||ao(i)?r.push("".concat(eh(o),":"),i,";"):Si(i)?r.push.apply(r,no(no(["".concat(o," {")],F1(i),!1),["}"],!1)):r.push("".concat(eh(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Q5||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Pn(e,t,n,r){if(M1(e))return[];if(Hd(e))return[".".concat(e.styledComponentId)];if(ao(e)){if(!ao(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Pn(o,t,n,r)}var i;return e instanceof D1?n?(e.inject(n,r),[e.getName(r)]):[e]:Si(e)?F1(e):Array.isArray(e)?Array.prototype.concat.apply(Za,e.map(function(s){return Pn(s,t,n,r)})):[e.toString()]}function I1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ao(n)&&!Hd(n))return!1}return!0}var Tw=j1(Qa),Rw=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&I1(t),this.componentId=n,this.baseHash=Ir(Tw,n),this.baseStyle=r,va.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Jn(o,this.staticRulesId);else{var i=ga(Pn(this.rules,t,n,r)),s=mc(Ir(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(i,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}o=Jn(o,s),this.staticRulesId=s}else{for(var l=Ir(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var p=ga(Pn(d,t,n,r));l=Ir(l,p+c),u+=p}}if(u){var g=mc(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),o=Jn(o,g)}}return o},e}(),Gd=we.createContext(void 0);Gd.Consumer;var Kl={};function Aw(e,t,n){var r=Hd(e),o=e,i=!Yl(e),s=t.attrs,a=s===void 0?Za:s,l=t.componentId,u=l===void 0?function(k,E){var R=typeof k!="string"?"sc":Yp(k);Kl[R]=(Kl[R]||0)+1;var C="".concat(R,"-").concat(Ud(Qa+R+Kl[R]));return E?"".concat(E,"-").concat(C):C}(t.displayName,t.parentComponentId):l,c=t.displayName,d=c===void 0?function(k){return Yl(k)?"styled.".concat(k):"Styled(".concat(rw(k),")")}(e):c,p=t.displayName&&t.componentId?"".concat(Yp(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,v=t.shouldForwardProp;if(r&&o.shouldForwardProp){var x=o.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;v=function(k,E){return x(k,E)&&b(k,E)}}else v=x}var y=new Rw(n,p,r?o.componentStyle:void 0);function m(k,E){return function(R,C,j){var L=R.attrs,O=R.componentStyle,G=R.defaultProps,Z=R.foldedComponentIds,J=R.styledComponentId,X=R.target,De=we.useContext(Gd),$=vc(),_=R.shouldForwardProp||$.shouldForwardProp,P=C1(C,De,G)||so,D=function(Be,ve,ot){for(var _n,mt=Oe(Oe({},ve),{className:void 0,theme:ot}),sn=0;sn<Be.length;sn+=1){var it=ao(_n=Be[sn])?_n(mt):_n;for(var _t in it)mt[_t]=_t==="className"?Jn(mt[_t],it[_t]):_t==="style"?Oe(Oe({},mt[_t]),it[_t]):it[_t]}return ve.className&&(mt.className=Jn(mt.className,ve.className)),mt}(L,C,P),N=D.as||X,F={};for(var B in D)D[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&D.theme===P||(B==="forwardedAs"?F.as=D.forwardedAs:_&&!_(B,N)||(F[B]=D[B]));var $e=function(Be,ve){var ot=vc(),_n=Be.generateAndInjectStyles(ve,ot.styleSheet,ot.stylis);return _n}(O,D),ye=Jn(Z,J);return $e&&(ye+=" "+$e),D.className&&(ye+=" "+D.className),F[Yl(N)&&!E1.has(N)?"class":"className"]=ye,j&&(F.ref=j),w.createElement(N,F)}(h,k,E)}m.displayName=d;var h=we.forwardRef(m);return h.attrs=g,h.componentStyle=y,h.displayName=d,h.shouldForwardProp=v,h.foldedComponentIds=r?Jn(o.foldedComponentIds,o.styledComponentId):"",h.styledComponentId=p,h.target=r?o.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=r?function(E){for(var R=[],C=1;C<arguments.length;C++)R[C-1]=arguments[C];for(var j=0,L=R;j<L.length;j++)gc(E,L[j],!0);return E}({},o.defaultProps,k):k}}),Wd(h,function(){return".".concat(h.styledComponentId)}),i&&L1(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function th(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var nh=function(e){return Object.assign(e,{isCss:!0})};function Yd(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ao(e)||Si(e))return nh(Pn(th(Za,no([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Pn(r):nh(Pn(th(r,t)))}function xc(e,t,n){if(n===void 0&&(n=so),!t)throw zi(1,t);var r=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,Yd.apply(void 0,no([o],i,!1)))};return r.attrs=function(o){return xc(e,t,Oe(Oe({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return xc(e,t,Oe(Oe({},n),o))},r}var _1=function(e){return xc(Aw,e)},S=_1;E1.forEach(function(e){S[e]=_1(e)});var Lw=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=I1(t),va.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(ga(Pn(this.rules,n,r,o)),""),s=this.componentId+t;r.insertRules(s,s,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&va.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function zw(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Yd.apply(void 0,no([e],t,!1)),o="sc-global-".concat(Ud(JSON.stringify(r))),i=new Lw(r,o),s=function(l){var u=vc(),c=we.useContext(Gd),d=we.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(d,l,u.styleSheet,c,u.stylis),we.useLayoutEffect(function(){if(!u.styleSheet.server)return a(d,l,u.styleSheet,c,u.stylis),function(){return i.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,d,p){if(i.isStatic)i.renderStyles(l,J5,c,p);else{var g=Oe(Oe({},u),{theme:C1(u,d,s.defaultProps)});i.renderStyles(l,g,c,p)}}return we.memo(s)}function nn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ga(Yd.apply(void 0,no([e],t,!1))),o=Ud(r);return new D1(o,r)}const Ow=zw`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #E30613; /* Prompt primaryColor */
    --primary-dark: #C40511;
    --black: #000000;
    --white: #FFFFFF;
    --gray-50: #F9FAFB;
    --gray-100: #F5F5F5;
    --gray-900: #0F0F10;
    --dark-bg: #0A0A0A;
    --container-max: 120rem; 
    --gutter: 2.4rem;       
  }

  /* Tema claro */
  [data-theme="light"] {
    --bg-primary: #FFFFFF;
    --bg-secondary: #F8F9FA;
    --text-primary: #1A1A1A;
    --text-secondary: #6C757D;
    --border-color: #E9ECEF;
    --shadow-color: rgba(0, 0, 0, 0.1);
  }

  /* Tema escuro (padrão) */
  [data-theme="dark"] {
    --bg-primary: #0A0A0A;
    --bg-secondary: #1A1A1A;
    --text-primary: #FFFFFF;
    --text-secondary: #B8B8B8;
    --border-color: #333333;
    --shadow-color: rgba(0, 0, 0, 0.3);
  }

  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--dark-bg);
    color: var(--white);
    overflow-x: hidden;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: 'Poppins', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  .container {
    width: 100%;
    max-width: var(--container-max);
    margin: 0 auto;
    padding: 0 var(--gutter);
  }
`,Nw="modulepreload",Dw=function(e){return"/"+e},rh={},Mw=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Dw(i),i in rh)return;rh[i]=!0;const s=i.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!r)for(let c=o.length-1;c>=0;c--){const d=o[c];if(d.href===i&&(!s||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":Nw,s||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),s)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})};var oh="popstate";function Fw(e={}){function t(r,o){let{pathname:i,search:s,hash:a}=r.location;return wc("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:ki(o)}return _w(t,n,null,e)}function le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ft(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Iw(){return Math.random().toString(36).substring(2,10)}function ih(e,t){return{usr:e.state,key:e.key,idx:t}}function wc(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?vo(t):t,state:n,key:t&&t.key||r||Iw()}}function ki({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function vo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function _w(e,t,n,r={}){let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a="POP",l=null,u=c();u==null&&(u=0,s.replaceState({...s.state,idx:u},""));function c(){return(s.state||{idx:null}).idx}function d(){a="POP";let b=c(),y=b==null?null:b-u;u=b,l&&l({action:a,location:x.location,delta:y})}function p(b,y){a="PUSH";let m=wc(x.location,b,y);n&&n(m,b),u=c()+1;let h=ih(m,u),k=x.createHref(m);try{s.pushState(h,"",k)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;o.location.assign(k)}i&&l&&l({action:a,location:x.location,delta:1})}function g(b,y){a="REPLACE";let m=wc(x.location,b,y);n&&n(m,b),u=c();let h=ih(m,u),k=x.createHref(m);s.replaceState(h,"",k),i&&l&&l({action:a,location:x.location,delta:0})}function v(b){return Vw(b)}let x={get action(){return a},get location(){return e(o,s)},listen(b){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(oh,d),l=b,()=>{o.removeEventListener(oh,d),l=null}},createHref(b){return t(o,b)},createURL:v,encodeLocation(b){let y=v(b);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:p,replace:g,go(b){return s.go(b)}};return x}function Vw(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),le(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:ki(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function V1(e,t,n="/"){return $w(e,t,n,!1)}function $w(e,t,n,r){let o=typeof t=="string"?vo(t):t,i=en(o.pathname||"/",n);if(i==null)return null;let s=$1(e);Bw(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=Jw(i);a=Qw(s[l],u,r)}return a}function $1(e,t=[],n=[],r="",o=!1){let i=(s,a,l=o,u)=>{let c={relativePath:u===void 0?s.path||"":u,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};if(c.relativePath.startsWith("/")){if(!c.relativePath.startsWith(r)&&l)return;le(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let d=Yt([r,c.relativePath]),p=n.concat(c);s.children&&s.children.length>0&&(le(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),$1(s.children,t,p,d,l)),!(s.path==null&&!s.index)&&t.push({path:d,score:Xw(d,s.index),routesMeta:p})};return e.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let u of B1(s.path))i(s,a,!0,u)}),t}function B1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=B1(r.join("/")),a=[];return a.push(...s.map(l=>l===""?i:[i,l].join("/"))),o&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Bw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:qw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var Uw=/^:[\w-]+$/,Hw=3,Ww=2,Gw=1,Yw=10,Kw=-2,sh=e=>e==="*";function Xw(e,t){let n=e.split("/"),r=n.length;return n.some(sh)&&(r+=Kw),t&&(r+=Ww),n.filter(o=>!sh(o)).reduce((o,i)=>o+(Uw.test(i)?Hw:i===""?Gw:Yw),r)}function qw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Qw(e,t,n=!1){let{routesMeta:r}=e,o={},i="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,c=i==="/"?t:t.slice(i.length)||"/",d=xa({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),p=l.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=xa({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!d)return null;Object.assign(o,d.params),s.push({params:o,pathname:Yt([i,d.pathname]),pathnameBase:rb(Yt([i,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(i=Yt([i,d.pathnameBase]))}return s}function xa(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Zw(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,{paramName:c,isOptional:d},p)=>{if(c==="*"){let v=a[p]||"";s=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const g=a[p];return d&&!g?u[c]=void 0:u[c]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:s,pattern:e}}function Zw(e,t=!1,n=!0){Ft(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Jw(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ft(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function en(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function eb(e,t="/"){let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?vo(e):e;return{pathname:n?n.startsWith("/")?n:tb(n,t):t,search:ob(r),hash:ib(o)}}function tb(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Xl(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function nb(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function U1(e){let t=nb(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function H1(e,t,n,r=!1){let o;typeof e=="string"?o=vo(e):(o={...e},le(!o.pathname||!o.pathname.includes("?"),Xl("?","pathname","search",o)),le(!o.pathname||!o.pathname.includes("#"),Xl("#","pathname","hash",o)),le(!o.search||!o.search.includes("#"),Xl("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),d-=1;o.pathname=p.join("/")}a=d>=0?t[d]:"/"}let l=eb(o,a),u=s&&s!=="/"&&s.endsWith("/"),c=(i||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}var Yt=e=>e.join("/").replace(/\/\/+/g,"/"),rb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ob=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ib=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function sb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var W1=["POST","PUT","PATCH","DELETE"];new Set(W1);var ab=["GET",...W1];new Set(ab);var xo=w.createContext(null);xo.displayName="DataRouter";var Ja=w.createContext(null);Ja.displayName="DataRouterState";w.createContext(!1);var G1=w.createContext({isTransitioning:!1});G1.displayName="ViewTransition";var lb=w.createContext(new Map);lb.displayName="Fetchers";var ub=w.createContext(null);ub.displayName="Await";var It=w.createContext(null);It.displayName="Navigation";var Oi=w.createContext(null);Oi.displayName="Location";var rn=w.createContext({outlet:null,matches:[],isDataRoute:!1});rn.displayName="Route";var Kd=w.createContext(null);Kd.displayName="RouteError";function cb(e,{relative:t}={}){le(Ni(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=w.useContext(It),{hash:o,pathname:i,search:s}=Di(e,{relative:t}),a=i;return n!=="/"&&(a=i==="/"?n:Yt([n,i])),r.createHref({pathname:a,search:s,hash:o})}function Ni(){return w.useContext(Oi)!=null}function on(){return le(Ni(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(Oi).location}var Y1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function K1(e){w.useContext(It).static||w.useLayoutEffect(e)}function Xd(){let{isDataRoute:e}=w.useContext(rn);return e?kb():db()}function db(){le(Ni(),"useNavigate() may be used only in the context of a <Router> component.");let e=w.useContext(xo),{basename:t,navigator:n}=w.useContext(It),{matches:r}=w.useContext(rn),{pathname:o}=on(),i=JSON.stringify(U1(r)),s=w.useRef(!1);return K1(()=>{s.current=!0}),w.useCallback((l,u={})=>{if(Ft(s.current,Y1),!s.current)return;if(typeof l=="number"){n.go(l);return}let c=H1(l,JSON.parse(i),o,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Yt([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,i,o,e])}w.createContext(null);function Di(e,{relative:t}={}){let{matches:n}=w.useContext(rn),{pathname:r}=on(),o=JSON.stringify(U1(n));return w.useMemo(()=>H1(e,JSON.parse(o),r,t==="path"),[e,o,r,t])}function fb(e,t){return X1(e,t)}function X1(e,t,n,r,o){var m;le(Ni(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=w.useContext(It),{matches:s}=w.useContext(rn),a=s[s.length-1],l=a?a.params:{},u=a?a.pathname:"/",c=a?a.pathnameBase:"/",d=a&&a.route;{let h=d&&d.path||"";q1(u,!d||h.endsWith("*")||h.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${h}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${h}"> to <Route path="${h==="/"?"*":`${h}/*`}">.`)}let p=on(),g;if(t){let h=typeof t=="string"?vo(t):t;le(c==="/"||((m=h.pathname)==null?void 0:m.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${h.pathname}" was given in the \`location\` prop.`),g=h}else g=p;let v=g.pathname||"/",x=v;if(c!=="/"){let h=c.replace(/^\//,"").split("/");x="/"+v.replace(/^\//,"").split("/").slice(h.length).join("/")}let b=V1(e,{pathname:x});Ft(d||b!=null,`No routes matched location "${g.pathname}${g.search}${g.hash}" `),Ft(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=yb(b&&b.map(h=>Object.assign({},h,{params:Object.assign({},l,h.params),pathname:Yt([c,i.encodeLocation?i.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?c:Yt([c,i.encodeLocation?i.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),s,n,r,o);return t&&y?w.createElement(Oi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...g},navigationType:"POP"}},y):y}function pb(){let e=Sb(),t=sb(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:i},"ErrorBoundary")," or"," ",w.createElement("code",{style:i},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:o},n):null,s)}var hb=w.createElement(pb,null),mb=class extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?w.createElement(rn.Provider,{value:this.props.routeContext},w.createElement(Kd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function gb({routeContext:e,match:t,children:n}){let r=w.useContext(xo);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(rn.Provider,{value:e},n)}function yb(e,t=[],n=null,r=null,o=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,s=n==null?void 0:n.errors;if(s!=null){let u=i.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);le(u>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,u+1))}let a=!1,l=-1;if(n)for(let u=0;u<i.length;u++){let c=i[u];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(l=u),c.route.id){let{loaderData:d,errors:p}=n,g=c.route.loader&&!d.hasOwnProperty(c.route.id)&&(!p||p[c.route.id]===void 0);if(c.route.lazy||g){a=!0,l>=0?i=i.slice(0,l+1):i=[i[0]];break}}}return i.reduceRight((u,c,d)=>{let p,g=!1,v=null,x=null;n&&(p=s&&c.route.id?s[c.route.id]:void 0,v=c.route.errorElement||hb,a&&(l<0&&d===0?(q1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),g=!0,x=null):l===d&&(g=!0,x=c.route.hydrateFallbackElement||null)));let b=t.concat(i.slice(0,d+1)),y=()=>{let m;return p?m=v:g?m=x:c.route.Component?m=w.createElement(c.route.Component,null):c.route.element?m=c.route.element:m=u,w.createElement(gb,{match:c,routeContext:{outlet:u,matches:b,isDataRoute:n!=null},children:m})};return n&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?w.createElement(mb,{location:n.location,revalidation:n.revalidation,component:v,error:p,children:y(),routeContext:{outlet:null,matches:b,isDataRoute:!0},unstable_onError:r}):y()},null)}function qd(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vb(e){let t=w.useContext(xo);return le(t,qd(e)),t}function xb(e){let t=w.useContext(Ja);return le(t,qd(e)),t}function wb(e){let t=w.useContext(rn);return le(t,qd(e)),t}function Qd(e){let t=wb(e),n=t.matches[t.matches.length-1];return le(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function bb(){return Qd("useRouteId")}function Sb(){var r;let e=w.useContext(Kd),t=xb("useRouteError"),n=Qd("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function kb(){let{router:e}=vb("useNavigate"),t=Qd("useNavigate"),n=w.useRef(!1);return K1(()=>{n.current=!0}),w.useCallback(async(o,i={})=>{Ft(n.current,Y1),n.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...i}))},[e,t])}var ah={};function q1(e,t,n){!t&&!ah[e]&&(ah[e]=!0,Ft(!1,n))}w.memo(Cb);function Cb({routes:e,future:t,state:n,unstable_onError:r}){return X1(e,void 0,n,r,t)}function Gn(e){le(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Eb({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:o,static:i=!1}){le(!Ni(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),a=w.useMemo(()=>({basename:s,navigator:o,static:i,future:{}}),[s,o,i]);typeof n=="string"&&(n=vo(n));let{pathname:l="/",search:u="",hash:c="",state:d=null,key:p="default"}=n,g=w.useMemo(()=>{let v=en(l,s);return v==null?null:{location:{pathname:v,search:u,hash:c,state:d,key:p},navigationType:r}},[s,l,u,c,d,p,r]);return Ft(g!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${c}" because it does not start with the basename, so the <Router> won't render anything.`),g==null?null:w.createElement(It.Provider,{value:a},w.createElement(Oi.Provider,{children:t,value:g}))}function Pb({children:e,location:t}){return fb(bc(e),t)}function bc(e,t=[]){let n=[];return w.Children.forEach(e,(r,o)=>{if(!w.isValidElement(r))return;let i=[...t,o];if(r.type===w.Fragment){n.push.apply(n,bc(r.props.children,i));return}le(r.type===Gn,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),le(!r.props.index||!r.props.children,"An index route cannot have child routes.");let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=bc(r.props.children,i)),n.push(s)}),n}var Os="get",Ns="application/x-www-form-urlencoded";function el(e){return e!=null&&typeof e.tagName=="string"}function jb(e){return el(e)&&e.tagName.toLowerCase()==="button"}function Tb(e){return el(e)&&e.tagName.toLowerCase()==="form"}function Rb(e){return el(e)&&e.tagName.toLowerCase()==="input"}function Ab(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Lb(e,t){return e.button===0&&(!t||t==="_self")&&!Ab(e)}var cs=null;function zb(){if(cs===null)try{new FormData(document.createElement("form"),0),cs=!1}catch{cs=!0}return cs}var Ob=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ql(e){return e!=null&&!Ob.has(e)?(Ft(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ns}"`),null):e}function Nb(e,t){let n,r,o,i,s;if(Tb(e)){let a=e.getAttribute("action");r=a?en(a,t):null,n=e.getAttribute("method")||Os,o=ql(e.getAttribute("enctype"))||Ns,i=new FormData(e)}else if(jb(e)||Rb(e)&&(e.type==="submit"||e.type==="image")){let a=e.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||a.getAttribute("action");if(r=l?en(l,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||Os,o=ql(e.getAttribute("formenctype"))||ql(a.getAttribute("enctype"))||Ns,i=new FormData(a,e),!zb()){let{name:u,type:c,value:d}=e;if(c==="image"){let p=u?`${u}.`:"";i.append(`${p}x`,"0"),i.append(`${p}y`,"0")}else u&&i.append(u,d)}}else{if(el(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Os,r=null,o=Ns,s=e}return i&&o==="text/plain"&&(s=i,i=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:i,body:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Zd(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Db(e,t,n){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname=`_root.${n}`:t&&en(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function Mb(e,t){if(e.id in t)return t[e.id];try{let n=await Mw(()=>import(e.module),[]);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Fb(e){return e!=null&&typeof e.page=="string"}function Ib(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function _b(e,t,n){let r=await Promise.all(e.map(async o=>{let i=t.routes[o.route.id];if(i){let s=await Mb(i,n);return s.links?s.links():[]}return[]}));return Ub(r.flat(1).filter(Ib).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function lh(e,t,n,r,o,i){let s=(l,u)=>n[u]?l.route.id!==n[u].route.id:!0,a=(l,u)=>{var c;return n[u].pathname!==l.pathname||((c=n[u].route.path)==null?void 0:c.endsWith("*"))&&n[u].params["*"]!==l.params["*"]};return i==="assets"?t.filter((l,u)=>s(l,u)||a(l,u)):i==="data"?t.filter((l,u)=>{var d;let c=r.routes[l.route.id];if(!c||!c.hasLoader)return!1;if(s(l,u)||a(l,u))return!0;if(l.route.shouldRevalidate){let p=l.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((d=n[0])==null?void 0:d.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof p=="boolean")return p}return!0}):[]}function Vb(e,t,{includeHydrateFallback:n}={}){return $b(e.map(r=>{let o=t.routes[r.route.id];if(!o)return[];let i=[o.module];return o.clientActionModule&&(i=i.concat(o.clientActionModule)),o.clientLoaderModule&&(i=i.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(i=i.concat(o.hydrateFallbackModule)),o.imports&&(i=i.concat(o.imports)),i}).flat(1))}function $b(e){return[...new Set(e)]}function Bb(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Ub(e,t){let n=new Set,r=new Set(t);return e.reduce((o,i)=>{if(t&&!Fb(i)&&i.as==="script"&&i.href&&r.has(i.href))return o;let a=JSON.stringify(Bb(i));return n.has(a)||(n.add(a),o.push({key:a,link:i})),o},[])}function Q1(){let e=w.useContext(xo);return Zd(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Hb(){let e=w.useContext(Ja);return Zd(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Jd=w.createContext(void 0);Jd.displayName="FrameworkContext";function Z1(){let e=w.useContext(Jd);return Zd(e,"You must render this element inside a <HydratedRouter> element"),e}function Wb(e,t){let n=w.useContext(Jd),[r,o]=w.useState(!1),[i,s]=w.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:u,onMouseLeave:c,onTouchStart:d}=t,p=w.useRef(null);w.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let x=y=>{y.forEach(m=>{s(m.isIntersecting)})},b=new IntersectionObserver(x,{threshold:.5});return p.current&&b.observe(p.current),()=>{b.disconnect()}}},[e]),w.useEffect(()=>{if(r){let x=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(x)}}},[r]);let g=()=>{o(!0)},v=()=>{o(!1),s(!1)};return n?e!=="intent"?[i,p,{}]:[i,p,{onFocus:zo(a,g),onBlur:zo(l,v),onMouseEnter:zo(u,g),onMouseLeave:zo(c,v),onTouchStart:zo(d,g)}]:[!1,p,{}]}function zo(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Gb({page:e,...t}){let{router:n}=Q1(),r=w.useMemo(()=>V1(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?w.createElement(Kb,{page:e,matches:r,...t}):null}function Yb(e){let{manifest:t,routeModules:n}=Z1(),[r,o]=w.useState([]);return w.useEffect(()=>{let i=!1;return _b(e,t,n).then(s=>{i||o(s)}),()=>{i=!0}},[e,t,n]),r}function Kb({page:e,matches:t,...n}){let r=on(),{manifest:o,routeModules:i}=Z1(),{basename:s}=Q1(),{loaderData:a,matches:l}=Hb(),u=w.useMemo(()=>lh(e,t,l,o,r,"data"),[e,t,l,o,r]),c=w.useMemo(()=>lh(e,t,l,o,r,"assets"),[e,t,l,o,r]),d=w.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let v=new Set,x=!1;if(t.forEach(y=>{var h;let m=o.routes[y.route.id];!m||!m.hasLoader||(!u.some(k=>k.route.id===y.route.id)&&y.route.id in a&&((h=i[y.route.id])!=null&&h.shouldRevalidate)||m.hasClientLoader?x=!0:v.add(y.route.id))}),v.size===0)return[];let b=Db(e,s,"data");return x&&v.size>0&&b.searchParams.set("_routes",t.filter(y=>v.has(y.route.id)).map(y=>y.route.id).join(",")),[b.pathname+b.search]},[s,a,r,o,u,t,e,i]),p=w.useMemo(()=>Vb(c,o),[c,o]),g=Yb(c);return w.createElement(w.Fragment,null,d.map(v=>w.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...n})),p.map(v=>w.createElement("link",{key:v,rel:"modulepreload",href:v,...n})),g.map(({key:v,link:x})=>w.createElement("link",{key:v,nonce:n.nonce,...x})))}function Xb(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var J1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{J1&&(window.__reactRouterVersion="7.9.1")}catch{}function qb({basename:e,children:t,window:n}){let r=w.useRef();r.current==null&&(r.current=Fw({window:n,v5Compat:!0}));let o=r.current,[i,s]=w.useState({action:o.action,location:o.location}),a=w.useCallback(l=>{w.startTransition(()=>s(l))},[s]);return w.useLayoutEffect(()=>o.listen(a),[o,a]),w.createElement(Eb,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:o})}var ey=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ci=w.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:o,reloadDocument:i,replace:s,state:a,target:l,to:u,preventScrollReset:c,viewTransition:d,...p},g){let{basename:v}=w.useContext(It),x=typeof u=="string"&&ey.test(u),b,y=!1;if(typeof u=="string"&&x&&(b=u,J1))try{let L=new URL(window.location.href),O=u.startsWith("//")?new URL(L.protocol+u):new URL(u),G=en(O.pathname,v);O.origin===L.origin&&G!=null?u=G+O.search+O.hash:y=!0}catch{Ft(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let m=cb(u,{relative:o}),[h,k,E]=Wb(r,p),R=eS(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:o,viewTransition:d});function C(L){t&&t(L),L.defaultPrevented||R(L)}let j=w.createElement("a",{...p,...E,href:b||m,onClick:y||i?t:C,ref:Xb(g,k),target:l,"data-discover":!x&&n==="render"?"true":void 0});return h&&!x?w.createElement(w.Fragment,null,j,w.createElement(Gb,{page:m})):j});Ci.displayName="Link";var Qb=w.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:o=!1,style:i,to:s,viewTransition:a,children:l,...u},c){let d=Di(s,{relative:u.relative}),p=on(),g=w.useContext(Ja),{navigator:v,basename:x}=w.useContext(It),b=g!=null&&iS(d)&&a===!0,y=v.encodeLocation?v.encodeLocation(d).pathname:d.pathname,m=p.pathname,h=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;n||(m=m.toLowerCase(),h=h?h.toLowerCase():null,y=y.toLowerCase()),h&&x&&(h=en(h,x)||h);const k=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let E=m===y||!o&&m.startsWith(y)&&m.charAt(k)==="/",R=h!=null&&(h===y||!o&&h.startsWith(y)&&h.charAt(y.length)==="/"),C={isActive:E,isPending:R,isTransitioning:b},j=E?t:void 0,L;typeof r=="function"?L=r(C):L=[r,E?"active":null,R?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let O=typeof i=="function"?i(C):i;return w.createElement(Ci,{...u,"aria-current":j,className:L,ref:c,style:O,to:s,viewTransition:a},typeof l=="function"?l(C):l)});Qb.displayName="NavLink";var Zb=w.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:o,state:i,method:s=Os,action:a,onSubmit:l,relative:u,preventScrollReset:c,viewTransition:d,...p},g)=>{let v=rS(),x=oS(a,{relative:u}),b=s.toLowerCase()==="get"?"get":"post",y=typeof a=="string"&&ey.test(a),m=h=>{if(l&&l(h),h.defaultPrevented)return;h.preventDefault();let k=h.nativeEvent.submitter,E=(k==null?void 0:k.getAttribute("formmethod"))||s;v(k||h.currentTarget,{fetcherKey:t,method:E,navigate:n,replace:o,state:i,relative:u,preventScrollReset:c,viewTransition:d})};return w.createElement("form",{ref:g,method:b,action:x,onSubmit:r?l:m,...p,"data-discover":!y&&e==="render"?"true":void 0})});Zb.displayName="Form";function Jb(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ty(e){let t=w.useContext(xo);return le(t,Jb(e)),t}function eS(e,{target:t,replace:n,state:r,preventScrollReset:o,relative:i,viewTransition:s}={}){let a=Xd(),l=on(),u=Di(e,{relative:i});return w.useCallback(c=>{if(Lb(c,t)){c.preventDefault();let d=n!==void 0?n:ki(l)===ki(u);a(e,{replace:d,state:r,preventScrollReset:o,relative:i,viewTransition:s})}},[l,a,u,n,r,t,e,o,i,s])}var tS=0,nS=()=>`__${String(++tS)}__`;function rS(){let{router:e}=ty("useSubmit"),{basename:t}=w.useContext(It),n=bb();return w.useCallback(async(r,o={})=>{let{action:i,method:s,encType:a,formData:l,body:u}=Nb(r,t);if(o.navigate===!1){let c=o.fetcherKey||nS();await e.fetch(c,n,o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:u,formMethod:o.method||s,formEncType:o.encType||a,flushSync:o.flushSync})}else await e.navigate(o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:u,formMethod:o.method||s,formEncType:o.encType||a,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,n])}function oS(e,{relative:t}={}){let{basename:n}=w.useContext(It),r=w.useContext(rn);le(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),i={...Di(e||".",{relative:t})},s=on();if(e==null){i.search=s.search;let a=new URLSearchParams(i.search),l=a.getAll("index");if(l.some(c=>c==="")){a.delete("index"),l.filter(d=>d).forEach(d=>a.append("index",d));let c=a.toString();i.search=c?`?${c}`:""}}return(!e||e===".")&&o.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(i.pathname=i.pathname==="/"?n:Yt([n,i.pathname])),ki(i)}function iS(e,{relative:t}={}){let n=w.useContext(G1);le(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=ty("useViewTransitionState"),o=Di(e,{relative:t});if(!n.isTransitioning)return!1;let i=en(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=en(n.nextLocation.pathname,r)||n.nextLocation.pathname;return xa(o.pathname,s)!=null||xa(o.pathname,i)!=null}const ef=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),tl=w.createContext({}),nl=w.createContext(null),rl=typeof document<"u",wo=rl?w.useLayoutEffect:w.useEffect,ny=w.createContext({strict:!1}),tf=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),sS="framerAppearId",ry="data-"+tf(sS);function aS(e,t,n,r){const{visualElement:o}=w.useContext(tl),i=w.useContext(ny),s=w.useContext(nl),a=w.useContext(ef).reducedMotion,l=w.useRef();r=r||i.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:o,props:n,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;w.useInsertionEffect(()=>{u&&u.update(n,s)});const c=w.useRef(!!(n[ry]&&!window.HandoffComplete));return wo(()=>{u&&(u.render(),c.current&&u.animationState&&u.animationState.animateChanges())}),w.useEffect(()=>{u&&(u.updateFeatures(),!c.current&&u.animationState&&u.animationState.animateChanges(),c.current&&(c.current=!1,window.HandoffComplete=!0))}),u}function _r(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function lS(e,t,n){return w.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):_r(n)&&(n.current=r))},[t])}function Ei(e){return typeof e=="string"||Array.isArray(e)}function ol(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const nf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],rf=["initial",...nf];function il(e){return ol(e.animate)||rf.some(t=>Ei(e[t]))}function oy(e){return!!(il(e)||e.variants)}function uS(e,t){if(il(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Ei(n)?n:void 0,animate:Ei(r)?r:void 0}}return e.inherit!==!1?t:{}}function cS(e){const{initial:t,animate:n}=uS(e,w.useContext(tl));return w.useMemo(()=>({initial:t,animate:n}),[uh(t),uh(n)])}function uh(e){return Array.isArray(e)?e.join(" "):e}const ch={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Pi={};for(const e in ch)Pi[e]={isEnabled:t=>ch[e].some(n=>!!t[n])};function dS(e){for(const t in e)Pi[t]={...Pi[t],...e[t]}}const of=w.createContext({}),iy=w.createContext({}),fS=Symbol.for("motionComponentSymbol");function pS({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:o}){e&&dS(e);function i(a,l){let u;const c={...w.useContext(ef),...a,layoutId:hS(a)},{isStatic:d}=c,p=cS(a),g=r(a,d);if(!d&&rl){p.visualElement=aS(o,g,c,t);const v=w.useContext(iy),x=w.useContext(ny).strict;p.visualElement&&(u=p.visualElement.loadFeatures(c,x,e,v))}return w.createElement(tl.Provider,{value:p},u&&p.visualElement?w.createElement(u,{visualElement:p.visualElement,...c}):null,n(o,a,lS(g,p.visualElement,l),g,d,p.visualElement))}const s=w.forwardRef(i);return s[fS]=o,s}function hS({layoutId:e}){const t=w.useContext(of).id;return t&&e!==void 0?t+"-"+e:e}function mS(e){function t(r,o={}){return pS(e(r,o))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,o)=>(n.has(o)||n.set(o,t(o)),n.get(o))})}const gS=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function sf(e){return typeof e!="string"||e.includes("-")?!1:!!(gS.indexOf(e)>-1||/[A-Z]/.test(e))}const wa={};function yS(e){Object.assign(wa,e)}const Mi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],hr=new Set(Mi);function sy(e,{layout:t,layoutId:n}){return hr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!wa[e]||e==="opacity")}const qe=e=>!!(e&&e.getVelocity),vS={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},xS=Mi.length;function wS(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,o){let i="";for(let s=0;s<xS;s++){const a=Mi[s];if(e[a]!==void 0){const l=vS[a]||a;i+=`${l}(${e[a]}) `}}return t&&!e.z&&(i+="translateZ(0)"),i=i.trim(),o?i=o(e,r?"":i):n&&r&&(i="none"),i}const ay=e=>t=>typeof t=="string"&&t.startsWith(e),ly=ay("--"),Sc=ay("var(--"),bS=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,SS=(e,t)=>t&&typeof e=="number"?t.transform(e):e,zn=(e,t,n)=>Math.min(Math.max(n,e),t),mr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Jo={...mr,transform:e=>zn(0,1,e)},ds={...mr,default:1},ei=e=>Math.round(e*1e5)/1e5,sl=/(-)?([\d]*\.?[\d])+/g,uy=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,kS=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Fi(e){return typeof e=="string"}const Ii=e=>({test:t=>Fi(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),un=Ii("deg"),Mt=Ii("%"),I=Ii("px"),CS=Ii("vh"),ES=Ii("vw"),dh={...Mt,parse:e=>Mt.parse(e)/100,transform:e=>Mt.transform(e*100)},fh={...mr,transform:Math.round},cy={borderWidth:I,borderTopWidth:I,borderRightWidth:I,borderBottomWidth:I,borderLeftWidth:I,borderRadius:I,radius:I,borderTopLeftRadius:I,borderTopRightRadius:I,borderBottomRightRadius:I,borderBottomLeftRadius:I,width:I,maxWidth:I,height:I,maxHeight:I,size:I,top:I,right:I,bottom:I,left:I,padding:I,paddingTop:I,paddingRight:I,paddingBottom:I,paddingLeft:I,margin:I,marginTop:I,marginRight:I,marginBottom:I,marginLeft:I,rotate:un,rotateX:un,rotateY:un,rotateZ:un,scale:ds,scaleX:ds,scaleY:ds,scaleZ:ds,skew:un,skewX:un,skewY:un,distance:I,translateX:I,translateY:I,translateZ:I,x:I,y:I,z:I,perspective:I,transformPerspective:I,opacity:Jo,originX:dh,originY:dh,originZ:I,zIndex:fh,fillOpacity:Jo,strokeOpacity:Jo,numOctaves:fh};function af(e,t,n,r){const{style:o,vars:i,transform:s,transformOrigin:a}=e;let l=!1,u=!1,c=!0;for(const d in t){const p=t[d];if(ly(d)){i[d]=p;continue}const g=cy[d],v=SS(p,g);if(hr.has(d)){if(l=!0,s[d]=v,!c)continue;p!==(g.default||0)&&(c=!1)}else d.startsWith("origin")?(u=!0,a[d]=v):o[d]=v}if(t.transform||(l||r?o.transform=wS(e.transform,n,c,r):o.transform&&(o.transform="none")),u){const{originX:d="50%",originY:p="50%",originZ:g=0}=a;o.transformOrigin=`${d} ${p} ${g}`}}const lf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function dy(e,t,n){for(const r in t)!qe(t[r])&&!sy(r,n)&&(e[r]=t[r])}function PS({transformTemplate:e},t,n){return w.useMemo(()=>{const r=lf();return af(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function jS(e,t,n){const r=e.style||{},o={};return dy(o,r,e),Object.assign(o,PS(e,t,n)),e.transformValues?e.transformValues(o):o}function TS(e,t,n){const r={},o=jS(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=o,r}const RS=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ba(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||RS.has(e)}let fy=e=>!ba(e);function AS(e){e&&(fy=t=>t.startsWith("on")?!ba(t):e(t))}try{AS(require("@emotion/is-prop-valid").default)}catch{}function LS(e,t,n){const r={};for(const o in e)o==="values"&&typeof e.values=="object"||(fy(o)||n===!0&&ba(o)||!t&&!ba(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}function ph(e,t,n){return typeof e=="string"?e:I.transform(t+n*e)}function zS(e,t,n){const r=ph(t,e.x,e.width),o=ph(n,e.y,e.height);return`${r} ${o}`}const OS={offset:"stroke-dashoffset",array:"stroke-dasharray"},NS={offset:"strokeDashoffset",array:"strokeDasharray"};function DS(e,t,n=1,r=0,o=!0){e.pathLength=1;const i=o?OS:NS;e[i.offset]=I.transform(-r);const s=I.transform(t),a=I.transform(n);e[i.array]=`${s} ${a}`}function uf(e,{attrX:t,attrY:n,attrScale:r,originX:o,originY:i,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},c,d,p){if(af(e,u,c,p),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:g,style:v,dimensions:x}=e;g.transform&&(x&&(v.transform=g.transform),delete g.transform),x&&(o!==void 0||i!==void 0||v.transform)&&(v.transformOrigin=zS(x,o!==void 0?o:.5,i!==void 0?i:.5)),t!==void 0&&(g.x=t),n!==void 0&&(g.y=n),r!==void 0&&(g.scale=r),s!==void 0&&DS(g,s,a,l,!1)}const py=()=>({...lf(),attrs:{}}),cf=e=>typeof e=="string"&&e.toLowerCase()==="svg";function MS(e,t,n,r){const o=w.useMemo(()=>{const i=py();return uf(i,t,{enableHardwareAcceleration:!1},cf(r),e.transformTemplate),{...i.attrs,style:{...i.style}}},[t]);if(e.style){const i={};dy(i,e.style,e),o.style={...i,...o.style}}return o}function FS(e=!1){return(n,r,o,{latestValues:i},s)=>{const l=(sf(n)?MS:TS)(r,i,s,n),c={...LS(r,typeof n=="string",e),...l,ref:o},{children:d}=r,p=w.useMemo(()=>qe(d)?d.get():d,[d]);return w.createElement(n,{...c,children:p})}}function hy(e,{style:t,vars:n},r,o){Object.assign(e.style,t,o&&o.getProjectionStyles(r));for(const i in n)e.style.setProperty(i,n[i])}const my=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function gy(e,t,n,r){hy(e,t,void 0,r);for(const o in t.attrs)e.setAttribute(my.has(o)?o:tf(o),t.attrs[o])}function df(e,t){const{style:n}=e,r={};for(const o in n)(qe(n[o])||t.style&&qe(t.style[o])||sy(o,e))&&(r[o]=n[o]);return r}function yy(e,t){const n=df(e,t);for(const r in e)if(qe(e[r])||qe(t[r])){const o=Mi.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[o]=e[r]}return n}function ff(e,t,n,r={},o={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),t}function bo(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}const Sa=e=>Array.isArray(e),IS=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),_S=e=>Sa(e)?e[e.length-1]||0:e;function Ds(e){const t=qe(e)?e.get():e;return IS(t)?t.toValue():t}function VS({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,o,i){const s={latestValues:$S(r,o,i,e),renderState:t()};return n&&(s.mount=a=>n(r,a,s)),s}const vy=e=>(t,n)=>{const r=w.useContext(tl),o=w.useContext(nl),i=()=>VS(e,t,r,o);return n?i():bo(i)};function $S(e,t,n,r){const o={},i=r(e,{});for(const p in i)o[p]=Ds(i[p]);let{initial:s,animate:a}=e;const l=il(e),u=oy(e);t&&u&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let c=n?n.initial===!1:!1;c=c||s===!1;const d=c?a:s;return d&&typeof d!="boolean"&&!ol(d)&&(Array.isArray(d)?d:[d]).forEach(g=>{const v=ff(e,g);if(!v)return;const{transitionEnd:x,transition:b,...y}=v;for(const m in y){let h=y[m];if(Array.isArray(h)){const k=c?h.length-1:0;h=h[k]}h!==null&&(o[m]=h)}for(const m in x)o[m]=x[m]}),o}const de=e=>e;class hh{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function BS(e){let t=new hh,n=new hh,r=0,o=!1,i=!1;const s=new WeakSet,a={schedule:(l,u=!1,c=!1)=>{const d=c&&o,p=d?t:n;return u&&s.add(l),p.add(l)&&d&&o&&(r=t.order.length),l},cancel:l=>{n.remove(l),s.delete(l)},process:l=>{if(o){i=!0;return}if(o=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let u=0;u<r;u++){const c=t.order[u];c(l),s.has(c)&&(a.schedule(c),e())}o=!1,i&&(i=!1,a.process(l))}};return a}const fs=["prepare","read","update","preRender","render","postRender"],US=40;function HS(e,t){let n=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},i=fs.reduce((d,p)=>(d[p]=BS(()=>n=!0),d),{}),s=d=>i[d].process(o),a=()=>{const d=performance.now();n=!1,o.delta=r?1e3/60:Math.max(Math.min(d-o.timestamp,US),1),o.timestamp=d,o.isProcessing=!0,fs.forEach(s),o.isProcessing=!1,n&&t&&(r=!1,e(a))},l=()=>{n=!0,r=!0,o.isProcessing||e(a)};return{schedule:fs.reduce((d,p)=>{const g=i[p];return d[p]=(v,x=!1,b=!1)=>(n||l(),g.schedule(v,x,b)),d},{}),cancel:d=>fs.forEach(p=>i[p].cancel(d)),state:o,steps:i}}const{schedule:K,cancel:Pt,state:Pe,steps:Ql}=HS(typeof requestAnimationFrame<"u"?requestAnimationFrame:de,!0),WS={useVisualState:vy({scrapeMotionValuesFromProps:yy,createRenderState:py,onMount:(e,t,{renderState:n,latestValues:r})=>{K.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),K.render(()=>{uf(n,r,{enableHardwareAcceleration:!1},cf(t.tagName),e.transformTemplate),gy(t,n)})}})},GS={useVisualState:vy({scrapeMotionValuesFromProps:df,createRenderState:lf})};function YS(e,{forwardMotionProps:t=!1},n,r){return{...sf(e)?WS:GS,preloadedFeatures:n,useRender:FS(t),createVisualElement:r,Component:e}}function Wt(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const xy=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function al(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const KS=e=>t=>xy(t)&&e(t,al(t));function Kt(e,t,n,r){return Wt(e,t,KS(n),r)}const XS=(e,t)=>n=>t(e(n)),jn=(...e)=>e.reduce(XS);function wy(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const mh=wy("dragHorizontal"),gh=wy("dragVertical");function by(e){let t=!1;if(e==="y")t=gh();else if(e==="x")t=mh();else{const n=mh(),r=gh();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function Sy(){const e=by(!0);return e?(e(),!1):!0}class Fn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function yh(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),o=(i,s)=>{if(i.pointerType==="touch"||Sy())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[r]&&K.update(()=>a[r](i,s))};return Kt(e.current,n,o,{passive:!e.getProps()[r]})}class qS extends Fn{mount(){this.unmount=jn(yh(this.node,!0),yh(this.node,!1))}unmount(){}}class QS extends Fn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=jn(Wt(this.node.current,"focus",()=>this.onFocus()),Wt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const ky=(e,t)=>t?e===t?!0:ky(e,t.parentElement):!1;function Zl(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,al(n))}class ZS extends Fn{constructor(){super(...arguments),this.removeStartListeners=de,this.removeEndListeners=de,this.removeAccessibleListeners=de,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),i=Kt(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:c,globalTapTarget:d}=this.node.getProps();K.update(()=>{!d&&!ky(this.node.current,a.target)?c&&c(a,l):u&&u(a,l)})},{passive:!(r.onTap||r.onPointerUp)}),s=Kt(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=jn(i,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=i=>{if(i.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||Zl("up",(l,u)=>{const{onTap:c}=this.node.getProps();c&&K.update(()=>c(l,u))})};this.removeEndListeners(),this.removeEndListeners=Wt(this.node.current,"keyup",s),Zl("down",(a,l)=>{this.startPress(a,l)})},n=Wt(this.node.current,"keydown",t),r=()=>{this.isPressing&&Zl("cancel",(i,s)=>this.cancelPress(i,s))},o=Wt(this.node.current,"blur",r);this.removeAccessibleListeners=jn(n,o)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:o}=this.node.getProps();o&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&K.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Sy()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&K.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Kt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Wt(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=jn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const kc=new WeakMap,Jl=new WeakMap,JS=e=>{const t=kc.get(e.target);t&&t(e)},e4=e=>{e.forEach(JS)};function t4({root:e,...t}){const n=e||document;Jl.has(n)||Jl.set(n,{});const r=Jl.get(n),o=JSON.stringify(t);return r[o]||(r[o]=new IntersectionObserver(e4,{root:e,...t})),r[o]}function n4(e,t,n){const r=t4(t);return kc.set(e,n),r.observe(e),()=>{kc.delete(e),r.unobserve(e)}}const r4={some:0,all:1};class o4 extends Fn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:o="some",once:i}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:r4[o]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,i&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:d}=this.node.getProps(),p=u?c:d;p&&p(l)};return n4(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(i4(t,n))&&this.startObserver()}unmount(){}}function i4({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const s4={inView:{Feature:o4},tap:{Feature:ZS},focus:{Feature:QS},hover:{Feature:qS}};function Cy(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function a4(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function l4(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function ll(e,t,n){const r=e.getProps();return ff(r,t,n!==void 0?n:r.custom,a4(e),l4(e))}let Ey=de,ul=de;const Tn=e=>e*1e3,Xt=e=>e/1e3,u4={current:!1},Py=e=>Array.isArray(e)&&typeof e[0]=="number";function jy(e){return!!(!e||typeof e=="string"&&Ty[e]||Py(e)||Array.isArray(e)&&e.every(jy))}const Bo=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Ty={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Bo([0,.65,.55,1]),circOut:Bo([.55,0,1,.45]),backIn:Bo([.31,.01,.66,-.59]),backOut:Bo([.33,1.53,.69,.99])};function Ry(e){if(e)return Py(e)?Bo(e):Array.isArray(e)?e.map(Ry):Ty[e]}function c4(e,t,n,{delay:r=0,duration:o,repeat:i=0,repeatType:s="loop",ease:a,times:l}={}){const u={[t]:n};l&&(u.offset=l);const c=Ry(a);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:o,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:i+1,direction:s==="reverse"?"alternate":"normal"})}function d4(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const Ay=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,f4=1e-7,p4=12;function h4(e,t,n,r,o){let i,s,a=0;do s=t+(n-t)/2,i=Ay(s,r,o)-e,i>0?n=s:t=s;while(Math.abs(i)>f4&&++a<p4);return s}function _i(e,t,n,r){if(e===t&&n===r)return de;const o=i=>h4(i,0,1,e,n);return i=>i===0||i===1?i:Ay(o(i),t,r)}const m4=_i(.42,0,1,1),g4=_i(0,0,.58,1),Ly=_i(.42,0,.58,1),y4=e=>Array.isArray(e)&&typeof e[0]!="number",zy=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Oy=e=>t=>1-e(1-t),pf=e=>1-Math.sin(Math.acos(e)),Ny=Oy(pf),v4=zy(pf),Dy=_i(.33,1.53,.69,.99),hf=Oy(Dy),x4=zy(hf),w4=e=>(e*=2)<1?.5*hf(e):.5*(2-Math.pow(2,-10*(e-1))),b4={linear:de,easeIn:m4,easeInOut:Ly,easeOut:g4,circIn:pf,circInOut:v4,circOut:Ny,backIn:hf,backInOut:x4,backOut:Dy,anticipate:w4},vh=e=>{if(Array.isArray(e)){ul(e.length===4);const[t,n,r,o]=e;return _i(t,n,r,o)}else if(typeof e=="string")return b4[e];return e},mf=(e,t)=>n=>!!(Fi(n)&&kS.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),My=(e,t,n)=>r=>{if(!Fi(r))return r;const[o,i,s,a]=r.match(sl);return{[e]:parseFloat(o),[t]:parseFloat(i),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},S4=e=>zn(0,255,e),eu={...mr,transform:e=>Math.round(S4(e))},er={test:mf("rgb","red"),parse:My("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+eu.transform(e)+", "+eu.transform(t)+", "+eu.transform(n)+", "+ei(Jo.transform(r))+")"};function k4(e){let t="",n="",r="",o="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),o=e.substring(4,5),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Cc={test:mf("#"),parse:k4,transform:er.transform},Vr={test:mf("hsl","hue"),parse:My("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Mt.transform(ei(t))+", "+Mt.transform(ei(n))+", "+ei(Jo.transform(r))+")"},Me={test:e=>er.test(e)||Cc.test(e)||Vr.test(e),parse:e=>er.test(e)?er.parse(e):Vr.test(e)?Vr.parse(e):Cc.parse(e),transform:e=>Fi(e)?e:e.hasOwnProperty("red")?er.transform(e):Vr.transform(e)},se=(e,t,n)=>-n*e+n*t+e;function tu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function C4({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let o=0,i=0,s=0;if(!t)o=i=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;o=tu(l,a,e+1/3),i=tu(l,a,e),s=tu(l,a,e-1/3)}return{red:Math.round(o*255),green:Math.round(i*255),blue:Math.round(s*255),alpha:r}}const nu=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},E4=[Cc,er,Vr],P4=e=>E4.find(t=>t.test(e));function xh(e){const t=P4(e);let n=t.parse(e);return t===Vr&&(n=C4(n)),n}const Fy=(e,t)=>{const n=xh(e),r=xh(t),o={...n};return i=>(o.red=nu(n.red,r.red,i),o.green=nu(n.green,r.green,i),o.blue=nu(n.blue,r.blue,i),o.alpha=se(n.alpha,r.alpha,i),er.transform(o))};function j4(e){var t,n;return isNaN(e)&&Fi(e)&&(((t=e.match(sl))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(uy))===null||n===void 0?void 0:n.length)||0)>0}const Iy={regex:bS,countKey:"Vars",token:"${v}",parse:de},_y={regex:uy,countKey:"Colors",token:"${c}",parse:Me.parse},Vy={regex:sl,countKey:"Numbers",token:"${n}",parse:mr.parse};function ru(e,{regex:t,countKey:n,token:r,parse:o}){const i=e.tokenised.match(t);i&&(e["num"+n]=i.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...i.map(o)))}function ka(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&ru(n,Iy),ru(n,_y),ru(n,Vy),n}function $y(e){return ka(e).values}function By(e){const{values:t,numColors:n,numVars:r,tokenised:o}=ka(e),i=t.length;return s=>{let a=o;for(let l=0;l<i;l++)l<r?a=a.replace(Iy.token,s[l]):l<r+n?a=a.replace(_y.token,Me.transform(s[l])):a=a.replace(Vy.token,ei(s[l]));return a}}const T4=e=>typeof e=="number"?0:e;function R4(e){const t=$y(e);return By(e)(t.map(T4))}const On={test:j4,parse:$y,createTransformer:By,getAnimatableNone:R4},Uy=(e,t)=>n=>`${n>0?t:e}`;function Hy(e,t){return typeof e=="number"?n=>se(e,t,n):Me.test(e)?Fy(e,t):e.startsWith("var(")?Uy(e,t):Gy(e,t)}const Wy=(e,t)=>{const n=[...e],r=n.length,o=e.map((i,s)=>Hy(i,t[s]));return i=>{for(let s=0;s<r;s++)n[s]=o[s](i);return n}},A4=(e,t)=>{const n={...e,...t},r={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(r[o]=Hy(e[o],t[o]));return o=>{for(const i in r)n[i]=r[i](o);return n}},Gy=(e,t)=>{const n=On.createTransformer(t),r=ka(e),o=ka(t);return r.numVars===o.numVars&&r.numColors===o.numColors&&r.numNumbers>=o.numNumbers?jn(Wy(r.values,o.values),n):Uy(e,t)},lo=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},wh=(e,t)=>n=>se(e,t,n);function L4(e){return typeof e=="number"?wh:typeof e=="string"?Me.test(e)?Fy:Gy:Array.isArray(e)?Wy:typeof e=="object"?A4:wh}function z4(e,t,n){const r=[],o=n||L4(e[0]),i=e.length-1;for(let s=0;s<i;s++){let a=o(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||de:t;a=jn(l,a)}r.push(a)}return r}function cl(e,t,{clamp:n=!0,ease:r,mixer:o}={}){const i=e.length;if(ul(i===t.length),i===1)return()=>t[0];e[0]>e[i-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=z4(t,r,o),a=s.length,l=u=>{let c=0;if(a>1)for(;c<e.length-2&&!(u<e[c+1]);c++);const d=lo(e[c],e[c+1],u);return s[c](d)};return n?u=>l(zn(e[0],e[i-1],u)):l}function O4(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const o=lo(0,t,r);e.push(se(n,1,o))}}function Yy(e){const t=[0];return O4(t,e.length-1),t}function N4(e,t){return e.map(n=>n*t)}function D4(e,t){return e.map(()=>t||Ly).splice(0,e.length-1)}function Ca({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const o=y4(r)?r.map(vh):vh(r),i={done:!1,value:t[0]},s=N4(n&&n.length===t.length?n:Yy(t),e),a=cl(s,t,{ease:Array.isArray(o)?o:D4(t,o)});return{calculatedDuration:e,next:l=>(i.value=a(l),i.done=l>=e,i)}}function gf(e,t){return t?e*(1e3/t):0}const M4=5;function Ky(e,t,n){const r=Math.max(t-M4,0);return gf(n-e(r),t-r)}const ou=.001,F4=.01,bh=10,I4=.05,_4=1;function V4({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let o,i;Ey(e<=Tn(bh));let s=1-t;s=zn(I4,_4,s),e=zn(F4,bh,Xt(e)),s<1?(o=u=>{const c=u*s,d=c*e,p=c-n,g=Ec(u,s),v=Math.exp(-d);return ou-p/g*v},i=u=>{const d=u*s*e,p=d*n+n,g=Math.pow(s,2)*Math.pow(u,2)*e,v=Math.exp(-d),x=Ec(Math.pow(u,2),s);return(-o(u)+ou>0?-1:1)*((p-g)*v)/x}):(o=u=>{const c=Math.exp(-u*e),d=(u-n)*e+1;return-ou+c*d},i=u=>{const c=Math.exp(-u*e),d=(n-u)*(e*e);return c*d});const a=5/e,l=B4(o,i,a);if(e=Tn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const $4=12;function B4(e,t,n){let r=n;for(let o=1;o<$4;o++)r=r-e(r)/t(r);return r}function Ec(e,t){return e*Math.sqrt(1-t*t)}const U4=["duration","bounce"],H4=["stiffness","damping","mass"];function Sh(e,t){return t.some(n=>e[n]!==void 0)}function W4(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Sh(e,H4)&&Sh(e,U4)){const n=V4(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function Xy({keyframes:e,restDelta:t,restSpeed:n,...r}){const o=e[0],i=e[e.length-1],s={done:!1,value:o},{stiffness:a,damping:l,mass:u,duration:c,velocity:d,isResolvedFromDuration:p}=W4({...r,velocity:-Xt(r.velocity||0)}),g=d||0,v=l/(2*Math.sqrt(a*u)),x=i-o,b=Xt(Math.sqrt(a/u)),y=Math.abs(x)<5;n||(n=y?.01:2),t||(t=y?.005:.5);let m;if(v<1){const h=Ec(b,v);m=k=>{const E=Math.exp(-v*b*k);return i-E*((g+v*b*x)/h*Math.sin(h*k)+x*Math.cos(h*k))}}else if(v===1)m=h=>i-Math.exp(-b*h)*(x+(g+b*x)*h);else{const h=b*Math.sqrt(v*v-1);m=k=>{const E=Math.exp(-v*b*k),R=Math.min(h*k,300);return i-E*((g+v*b*x)*Math.sinh(R)+h*x*Math.cosh(R))/h}}return{calculatedDuration:p&&c||null,next:h=>{const k=m(h);if(p)s.done=h>=c;else{let E=g;h!==0&&(v<1?E=Ky(m,h,k):E=0);const R=Math.abs(E)<=n,C=Math.abs(i-k)<=t;s.done=R&&C}return s.value=s.done?i:k,s}}}function kh({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:i=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:c}){const d=e[0],p={done:!1,value:d},g=j=>a!==void 0&&j<a||l!==void 0&&j>l,v=j=>a===void 0?l:l===void 0||Math.abs(a-j)<Math.abs(l-j)?a:l;let x=n*t;const b=d+x,y=s===void 0?b:s(b);y!==b&&(x=y-d);const m=j=>-x*Math.exp(-j/r),h=j=>y+m(j),k=j=>{const L=m(j),O=h(j);p.done=Math.abs(L)<=u,p.value=p.done?y:O};let E,R;const C=j=>{g(p.value)&&(E=j,R=Xy({keyframes:[p.value,v(p.value)],velocity:Ky(h,j,p.value),damping:o,stiffness:i,restDelta:u,restSpeed:c}))};return C(0),{calculatedDuration:null,next:j=>{let L=!1;return!R&&E===void 0&&(L=!0,k(j),C(j)),E!==void 0&&j>E?R.next(j-E):(!L&&k(j),p)}}}const G4=e=>{const t=({timestamp:n})=>e(n);return{start:()=>K.update(t,!0),stop:()=>Pt(t),now:()=>Pe.isProcessing?Pe.timestamp:performance.now()}},Ch=2e4;function Eh(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Ch;)t+=n,r=e.next(t);return t>=Ch?1/0:t}const Y4={decay:kh,inertia:kh,tween:Ca,keyframes:Ca,spring:Xy};function Ea({autoplay:e=!0,delay:t=0,driver:n=G4,keyframes:r,type:o="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:a="loop",onPlay:l,onStop:u,onComplete:c,onUpdate:d,...p}){let g=1,v=!1,x,b;const y=()=>{b=new Promise(F=>{x=F})};y();let m;const h=Y4[o]||Ca;let k;h!==Ca&&typeof r[0]!="number"&&(k=cl([0,100],r,{clamp:!1}),r=[0,100]);const E=h({...p,keyframes:r});let R;a==="mirror"&&(R=h({...p,keyframes:[...r].reverse(),velocity:-(p.velocity||0)}));let C="idle",j=null,L=null,O=null;E.calculatedDuration===null&&i&&(E.calculatedDuration=Eh(E));const{calculatedDuration:G}=E;let Z=1/0,J=1/0;G!==null&&(Z=G+s,J=Z*(i+1)-s);let X=0;const De=F=>{if(L===null)return;g>0&&(L=Math.min(L,F)),g<0&&(L=Math.min(F-J/g,L)),j!==null?X=j:X=Math.round(F-L)*g;const B=X-t*(g>=0?1:-1),$e=g>=0?B<0:B>J;X=Math.max(B,0),C==="finished"&&j===null&&(X=J);let ye=X,Be=E;if(i){const mt=Math.min(X,J)/Z;let sn=Math.floor(mt),it=mt%1;!it&&mt>=1&&(it=1),it===1&&sn--,sn=Math.min(sn,i+1),!!(sn%2)&&(a==="reverse"?(it=1-it,s&&(it-=s/Z)):a==="mirror"&&(Be=R)),ye=zn(0,1,it)*Z}const ve=$e?{done:!1,value:r[0]}:Be.next(ye);k&&(ve.value=k(ve.value));let{done:ot}=ve;!$e&&G!==null&&(ot=g>=0?X>=J:X<=0);const _n=j===null&&(C==="finished"||C==="running"&&ot);return d&&d(ve.value),_n&&P(),ve},$=()=>{m&&m.stop(),m=void 0},_=()=>{C="idle",$(),x(),y(),L=O=null},P=()=>{C="finished",c&&c(),$(),x()},D=()=>{if(v)return;m||(m=n(De));const F=m.now();l&&l(),j!==null?L=F-j:(!L||C==="finished")&&(L=F),C==="finished"&&y(),O=L,j=null,C="running",m.start()};e&&D();const N={then(F,B){return b.then(F,B)},get time(){return Xt(X)},set time(F){F=Tn(F),X=F,j!==null||!m||g===0?j=F:L=m.now()-F/g},get duration(){const F=E.calculatedDuration===null?Eh(E):E.calculatedDuration;return Xt(F)},get speed(){return g},set speed(F){F===g||!m||(g=F,N.time=Xt(X))},get state(){return C},play:D,pause:()=>{C="paused",j=X},stop:()=>{v=!0,C!=="idle"&&(C="idle",u&&u(),_())},cancel:()=>{O!==null&&De(O),_()},complete:()=>{C="finished"},sample:F=>(L=0,De(F))};return N}function K4(e){let t;return()=>(t===void 0&&(t=e()),t)}const X4=K4(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),q4=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),ps=10,Q4=2e4,Z4=(e,t)=>t.type==="spring"||e==="backgroundColor"||!jy(t.ease);function J4(e,t,{onUpdate:n,onComplete:r,...o}){if(!(X4()&&q4.has(t)&&!o.repeatDelay&&o.repeatType!=="mirror"&&o.damping!==0&&o.type!=="inertia"))return!1;let s=!1,a,l,u=!1;const c=()=>{l=new Promise(h=>{a=h})};c();let{keyframes:d,duration:p=300,ease:g,times:v}=o;if(Z4(t,o)){const h=Ea({...o,repeat:0,delay:0});let k={done:!1,value:d[0]};const E=[];let R=0;for(;!k.done&&R<Q4;)k=h.sample(R),E.push(k.value),R+=ps;v=void 0,d=E,p=R-ps,g="linear"}const x=c4(e.owner.current,t,d,{...o,duration:p,ease:g,times:v}),b=()=>{u=!1,x.cancel()},y=()=>{u=!0,K.update(b),a(),c()};return x.onfinish=()=>{u||(e.set(d4(d,o)),r&&r(),y())},{then(h,k){return l.then(h,k)},attachTimeline(h){return x.timeline=h,x.onfinish=null,de},get time(){return Xt(x.currentTime||0)},set time(h){x.currentTime=Tn(h)},get speed(){return x.playbackRate},set speed(h){x.playbackRate=h},get duration(){return Xt(p)},play:()=>{s||(x.play(),Pt(b))},pause:()=>x.pause(),stop:()=>{if(s=!0,x.playState==="idle")return;const{currentTime:h}=x;if(h){const k=Ea({...o,autoplay:!1});e.setWithVelocity(k.sample(h-ps).value,k.sample(h).value,ps)}y()},complete:()=>{u||x.finish()},cancel:y}}function ek({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const o=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:de,pause:de,stop:de,then:i=>(i(),Promise.resolve()),cancel:de,complete:de});return t?Ea({keyframes:[0,1],duration:0,delay:t,onComplete:o}):o()}const tk={type:"spring",stiffness:500,damping:25,restSpeed:10},nk=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),rk={type:"keyframes",duration:.8},ok={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ik=(e,{keyframes:t})=>t.length>2?rk:hr.has(e)?e.startsWith("scale")?nk(t[1]):tk:ok,Pc=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(On.test(t)||t==="0")&&!t.startsWith("url(")),sk=new Set(["brightness","contrast","saturate","opacity"]);function ak(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(sl)||[];if(!r)return e;const o=n.replace(r,"");let i=sk.has(t)?1:0;return r!==n&&(i*=100),t+"("+i+o+")"}const lk=/([a-z-]*)\(.*?\)/g,jc={...On,getAnimatableNone:e=>{const t=e.match(lk);return t?t.map(ak).join(" "):e}},uk={...cy,color:Me,backgroundColor:Me,outlineColor:Me,fill:Me,stroke:Me,borderColor:Me,borderTopColor:Me,borderRightColor:Me,borderBottomColor:Me,borderLeftColor:Me,filter:jc,WebkitFilter:jc},yf=e=>uk[e];function qy(e,t){let n=yf(e);return n!==jc&&(n=On),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Qy=e=>/^0[^.\s]+$/.test(e);function ck(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||Qy(e)}function dk(e,t,n,r){const o=Pc(t,n);let i;Array.isArray(n)?i=[...n]:i=[null,n];const s=r.from!==void 0?r.from:e.get();let a;const l=[];for(let u=0;u<i.length;u++)i[u]===null&&(i[u]=u===0?s:i[u-1]),ck(i[u])&&l.push(u),typeof i[u]=="string"&&i[u]!=="none"&&i[u]!=="0"&&(a=i[u]);if(o&&l.length&&a)for(let u=0;u<l.length;u++){const c=l[u];i[c]=qy(t,a)}return i}function fk({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:o,repeat:i,repeatType:s,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}function vf(e,t){return e[t]||e.default||e}const pk={skipAnimations:!1},xf=(e,t,n,r={})=>o=>{const i=vf(r,e)||{},s=i.delay||r.delay||0;let{elapsed:a=0}=r;a=a-Tn(s);const l=dk(t,e,n,i),u=l[0],c=l[l.length-1],d=Pc(e,u),p=Pc(e,c);let g={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...i,delay:-a,onUpdate:v=>{t.set(v),i.onUpdate&&i.onUpdate(v)},onComplete:()=>{o(),i.onComplete&&i.onComplete()}};if(fk(i)||(g={...g,...ik(e,g)}),g.duration&&(g.duration=Tn(g.duration)),g.repeatDelay&&(g.repeatDelay=Tn(g.repeatDelay)),!d||!p||u4.current||i.type===!1||pk.skipAnimations)return ek(g);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const v=J4(t,e,g);if(v)return v}return Ea(g)};function Pa(e){return!!(qe(e)&&e.add)}const Zy=e=>/^\-?\d*\.?\d+$/.test(e);function wf(e,t){e.indexOf(t)===-1&&e.push(t)}function bf(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Sf{constructor(){this.subscriptions=[]}add(t){return wf(this.subscriptions,t),()=>bf(this.subscriptions,t)}notify(t,n,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,r);else for(let i=0;i<o;i++){const s=this.subscriptions[i];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const hk=e=>!isNaN(parseFloat(e)),ti={current:void 0};class mk{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,o=!0)=>{this.prev=this.current,this.current=r;const{delta:i,timestamp:s}=Pe;this.lastUpdated!==s&&(this.timeDelta=i,this.lastUpdated=s,K.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>K.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=hk(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Sf);const r=this.events[t].add(n);return t==="change"?()=>{r(),K.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return ti.current&&ti.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?gf(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function wt(e,t){return new mk(e,t)}const Jy=e=>t=>t.test(e),gk={test:e=>e==="auto",parse:e=>e},ev=[mr,I,Mt,un,ES,CS,gk],Oo=e=>ev.find(Jy(e)),yk=[...ev,Me,On],vk=e=>yk.find(Jy(e));function xk(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,wt(n))}function kf(e,t){const n=ll(e,t);let{transitionEnd:r={},transition:o={},...i}=n?e.makeTargetAnimatable(n,!1):{};i={...i,...r};for(const s in i){const a=_S(i[s]);xk(e,s,a)}}function Tc(e,t){[...t].reverse().forEach(r=>{const o=e.getVariant(r);o&&kf(e,o),e.variantChildren&&e.variantChildren.forEach(i=>{Tc(i,t)})})}function wk(e,t){if(Array.isArray(t))return Tc(e,t);if(typeof t=="string")return Tc(e,[t]);kf(e,t)}function bk(e,t,n){var r,o;const i=Object.keys(t).filter(a=>!e.hasValue(a)),s=i.length;if(s)for(let a=0;a<s;a++){const l=i[a],u=t[l];let c=null;Array.isArray(u)&&(c=u[0]),c===null&&(c=(o=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&o!==void 0?o:t[l]),c!=null&&(typeof c=="string"&&(Zy(c)||Qy(c))?c=parseFloat(c):!vk(c)&&On.test(u)&&(c=qy(l,u)),e.addValue(l,wt(c,{owner:e})),n[l]===void 0&&(n[l]=c),c!==null&&e.setBaseTarget(l,c))}}function Sk(e,t){return t?(t[e]||t.default||t).from:void 0}function kk(e,t,n){const r={};for(const o in e){const i=Sk(o,t);if(i!==void 0)r[o]=i;else{const s=n.getValue(o);s&&(r[o]=s.get())}}return r}function Ck({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Ek(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function tv(e,t,{delay:n=0,transitionOverride:r,type:o}={}){let{transition:i=e.getDefaultTransition(),transitionEnd:s,...a}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(i=r);const u=[],c=o&&e.animationState&&e.animationState.getState()[o];for(const d in a){const p=e.getValue(d),g=a[d];if(!p||g===void 0||c&&Ck(c,d))continue;const v={delay:n,elapsed:0,...vf(i||{},d)};if(window.HandoffAppearAnimations){const y=e.getProps()[ry];if(y){const m=window.HandoffAppearAnimations(y,d,p,K);m!==null&&(v.elapsed=m,v.isHandoff=!0)}}let x=!v.isHandoff&&!Ek(p,g);if(v.type==="spring"&&(p.getVelocity()||v.velocity)&&(x=!1),p.animation&&(x=!1),x)continue;p.start(xf(d,p,g,e.shouldReduceMotion&&hr.has(d)?{type:!1}:v));const b=p.animation;Pa(l)&&(l.add(d),b.then(()=>l.remove(d))),u.push(b)}return s&&Promise.all(u).then(()=>{s&&kf(e,s)}),u}function Rc(e,t,n={}){const r=ll(e,t,n.custom);let{transition:o=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(o=n.transitionOverride);const i=r?()=>Promise.all(tv(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:c,staggerDirection:d}=o;return Pk(e,t,u+l,c,d,n)}:()=>Promise.resolve(),{when:a}=o;if(a){const[l,u]=a==="beforeChildren"?[i,s]:[s,i];return l().then(()=>u())}else return Promise.all([i(),s(n.delay)])}function Pk(e,t,n=0,r=0,o=1,i){const s=[],a=(e.variantChildren.size-1)*r,l=o===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(jk).forEach((u,c)=>{u.notify("AnimationStart",t),s.push(Rc(u,t,{...i,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function jk(e,t){return e.sortNodePosition(t)}function nv(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const o=t.map(i=>Rc(e,i,n));r=Promise.all(o)}else if(typeof t=="string")r=Rc(e,t,n);else{const o=typeof t=="function"?ll(e,t,n.custom):t;r=Promise.all(tv(e,o,n))}return r.then(()=>e.notify("AnimationComplete",t))}const Tk=[...nf].reverse(),Rk=nf.length;function Ak(e){return t=>Promise.all(t.map(({animation:n,options:r})=>nv(e,n,r)))}function Lk(e){let t=Ak(e);const n=Ok();let r=!0;const o=(l,u)=>{const c=ll(e,u);if(c){const{transition:d,transitionEnd:p,...g}=c;l={...l,...g,...p}}return l};function i(l){t=l(e)}function s(l,u){const c=e.getProps(),d=e.getVariantContext(!0)||{},p=[],g=new Set;let v={},x=1/0;for(let y=0;y<Rk;y++){const m=Tk[y],h=n[m],k=c[m]!==void 0?c[m]:d[m],E=Ei(k),R=m===u?h.isActive:null;R===!1&&(x=y);let C=k===d[m]&&k!==c[m]&&E;if(C&&r&&e.manuallyAnimateOnMount&&(C=!1),h.protectedKeys={...v},!h.isActive&&R===null||!k&&!h.prevProp||ol(k)||typeof k=="boolean")continue;let L=zk(h.prevProp,k)||m===u&&h.isActive&&!C&&E||y>x&&E,O=!1;const G=Array.isArray(k)?k:[k];let Z=G.reduce(o,{});R===!1&&(Z={});const{prevResolvedValues:J={}}=h,X={...J,...Z},De=$=>{L=!0,g.has($)&&(O=!0,g.delete($)),h.needsAnimating[$]=!0};for(const $ in X){const _=Z[$],P=J[$];if(v.hasOwnProperty($))continue;let D=!1;Sa(_)&&Sa(P)?D=!Cy(_,P):D=_!==P,D?_!==void 0?De($):g.add($):_!==void 0&&g.has($)?De($):h.protectedKeys[$]=!0}h.prevProp=k,h.prevResolvedValues=Z,h.isActive&&(v={...v,...Z}),r&&e.blockInitialAnimation&&(L=!1),L&&(!C||O)&&p.push(...G.map($=>({animation:$,options:{type:m,...l}})))}if(g.size){const y={};g.forEach(m=>{const h=e.getBaseTarget(m);h!==void 0&&(y[m]=h)}),p.push({animation:y})}let b=!!p.length;return r&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(b=!1),r=!1,b?t(p):Promise.resolve()}function a(l,u,c){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(g=>{var v;return(v=g.animationState)===null||v===void 0?void 0:v.setActive(l,u)}),n[l].isActive=u;const p=s(c,l);for(const g in n)n[g].protectedKeys={};return p}return{animateChanges:s,setActive:a,setAnimateFunction:i,getState:()=>n}}function zk(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Cy(t,e):!1}function Vn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ok(){return{animate:Vn(!0),whileInView:Vn(),whileHover:Vn(),whileTap:Vn(),whileDrag:Vn(),whileFocus:Vn(),exit:Vn()}}class Nk extends Fn{constructor(t){super(t),t.animationState||(t.animationState=Lk(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),ol(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let Dk=0;class Mk extends Fn{constructor(){super(...arguments),this.id=Dk++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===o)return;const i=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const Fk={animation:{Feature:Nk},exit:{Feature:Mk}},Ph=(e,t)=>Math.abs(e-t);function Ik(e,t){const n=Ph(e.x,t.x),r=Ph(e.y,t.y);return Math.sqrt(n**2+r**2)}class rv{constructor(t,n,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:i=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=su(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,g=Ik(d.offset,{x:0,y:0})>=3;if(!p&&!g)return;const{point:v}=d,{timestamp:x}=Pe;this.history.push({...v,timestamp:x});const{onStart:b,onMove:y}=this.handlers;p||(b&&b(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,d)},this.handlePointerMove=(d,p)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=iu(p,this.transformPagePoint),K.update(this.updatePoint,!0)},this.handlePointerUp=(d,p)=>{this.end();const{onEnd:g,onSessionEnd:v,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=su(d.type==="pointercancel"?this.lastMoveEventInfo:iu(p,this.transformPagePoint),this.history);this.startEvent&&g&&g(d,b),v&&v(d,b)},!xy(t))return;this.dragSnapToOrigin=i,this.handlers=n,this.transformPagePoint=r,this.contextWindow=o||window;const s=al(t),a=iu(s,this.transformPagePoint),{point:l}=a,{timestamp:u}=Pe;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(t,su(a,this.history)),this.removeListeners=jn(Kt(this.contextWindow,"pointermove",this.handlePointerMove),Kt(this.contextWindow,"pointerup",this.handlePointerUp),Kt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Pt(this.updatePoint)}}function iu(e,t){return t?{point:t(e.point)}:e}function jh(e,t){return{x:e.x-t.x,y:e.y-t.y}}function su({point:e},t){return{point:e,delta:jh(e,ov(t)),offset:jh(e,_k(t)),velocity:Vk(t,.1)}}function _k(e){return e[0]}function ov(e){return e[e.length-1]}function Vk(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=ov(e);for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>Tn(t)));)n--;if(!r)return{x:0,y:0};const i=Xt(o.timestamp-r.timestamp);if(i===0)return{x:0,y:0};const s={x:(o.x-r.x)/i,y:(o.y-r.y)/i};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function tt(e){return e.max-e.min}function Ac(e,t=0,n=.01){return Math.abs(e-t)<=n}function Th(e,t,n,r=.5){e.origin=r,e.originPoint=se(t.min,t.max,e.origin),e.scale=tt(n)/tt(t),(Ac(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=se(n.min,n.max,e.origin)-e.originPoint,(Ac(e.translate)||isNaN(e.translate))&&(e.translate=0)}function ni(e,t,n,r){Th(e.x,t.x,n.x,r?r.originX:void 0),Th(e.y,t.y,n.y,r?r.originY:void 0)}function Rh(e,t,n){e.min=n.min+t.min,e.max=e.min+tt(t)}function $k(e,t,n){Rh(e.x,t.x,n.x),Rh(e.y,t.y,n.y)}function Ah(e,t,n){e.min=t.min-n.min,e.max=e.min+tt(t)}function ri(e,t,n){Ah(e.x,t.x,n.x),Ah(e.y,t.y,n.y)}function Bk(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?se(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?se(n,e,r.max):Math.min(e,n)),e}function Lh(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function Uk(e,{top:t,left:n,bottom:r,right:o}){return{x:Lh(e.x,n,o),y:Lh(e.y,t,r)}}function zh(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Hk(e,t){return{x:zh(e.x,t.x),y:zh(e.y,t.y)}}function Wk(e,t){let n=.5;const r=tt(e),o=tt(t);return o>r?n=lo(t.min,t.max-r,e.min):r>o&&(n=lo(e.min,e.max-o,t.min)),zn(0,1,n)}function Gk(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Lc=.35;function Yk(e=Lc){return e===!1?e=0:e===!0&&(e=Lc),{x:Oh(e,"left","right"),y:Oh(e,"top","bottom")}}function Oh(e,t,n){return{min:Nh(e,t),max:Nh(e,n)}}function Nh(e,t){return typeof e=="number"?e:e[t]||0}const Dh=()=>({translate:0,scale:1,origin:0,originPoint:0}),$r=()=>({x:Dh(),y:Dh()}),Mh=()=>({min:0,max:0}),pe=()=>({x:Mh(),y:Mh()});function at(e){return[e("x"),e("y")]}function iv({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Kk({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Xk(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function au(e){return e===void 0||e===1}function zc({scale:e,scaleX:t,scaleY:n}){return!au(e)||!au(t)||!au(n)}function Yn(e){return zc(e)||sv(e)||e.z||e.rotate||e.rotateX||e.rotateY}function sv(e){return Fh(e.x)||Fh(e.y)}function Fh(e){return e&&e!=="0%"}function ja(e,t,n){const r=e-n,o=t*r;return n+o}function Ih(e,t,n,r,o){return o!==void 0&&(e=ja(e,o,r)),ja(e,n,r)+t}function Oc(e,t=0,n=1,r,o){e.min=Ih(e.min,t,n,r,o),e.max=Ih(e.max,t,n,r,o)}function av(e,{x:t,y:n}){Oc(e.x,t.translate,t.scale,t.originPoint),Oc(e.y,n.translate,n.scale,n.originPoint)}function qk(e,t,n,r=!1){const o=n.length;if(!o)return;t.x=t.y=1;let i,s;for(let a=0;a<o;a++){i=n[a],s=i.projectionDelta;const l=i.instance;l&&l.style&&l.style.display==="contents"||(r&&i.options.layoutScroll&&i.scroll&&i!==i.root&&Br(e,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,av(e,s)),r&&Yn(i.latestValues)&&Br(e,i.latestValues))}t.x=_h(t.x),t.y=_h(t.y)}function _h(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function pn(e,t){e.min=e.min+t,e.max=e.max+t}function Vh(e,t,[n,r,o]){const i=t[o]!==void 0?t[o]:.5,s=se(e.min,e.max,i);Oc(e,t[n],t[r],s,t.scale)}const Qk=["x","scaleX","originX"],Zk=["y","scaleY","originY"];function Br(e,t){Vh(e.x,t,Qk),Vh(e.y,t,Zk)}function lv(e,t){return iv(Xk(e.getBoundingClientRect(),t))}function Jk(e,t,n){const r=lv(e,n),{scroll:o}=t;return o&&(pn(r.x,o.offset.x),pn(r.y,o.offset.y)),r}const uv=({current:e})=>e?e.ownerDocument.defaultView:null,e3=new WeakMap;class t3{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=pe(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=c=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(al(c,"page").point)},i=(c,d)=>{const{drag:p,dragPropagation:g,onDragStart:v}=this.getProps();if(p&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=by(p),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),at(b=>{let y=this.getAxisMotionValue(b).get()||0;if(Mt.test(y)){const{projection:m}=this.visualElement;if(m&&m.layout){const h=m.layout.layoutBox[b];h&&(y=tt(h)*(parseFloat(y)/100))}}this.originPoint[b]=y}),v&&K.update(()=>v(c,d),!1,!0);const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},s=(c,d)=>{const{dragPropagation:p,dragDirectionLock:g,onDirectionLock:v,onDrag:x}=this.getProps();if(!p&&!this.openGlobalLock)return;const{offset:b}=d;if(g&&this.currentDirection===null){this.currentDirection=n3(b),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",d.point,b),this.updateAxis("y",d.point,b),this.visualElement.render(),x&&x(c,d)},a=(c,d)=>this.stop(c,d),l=()=>at(c=>{var d;return this.getAnimationState(c)==="paused"&&((d=this.getAxisMotionValue(c).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new rv(t,{onSessionStart:o,onStart:i,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:uv(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=n;this.startAnimation(o);const{onDragEnd:i}=this.getProps();i&&K.update(()=>i(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:o}=this.getProps();if(!r||!hs(t,o,this.currentDirection))return;const i=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=Bk(s,this.constraints[t],this.elastic[t])),i.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,i=this.constraints;n&&_r(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&o?this.constraints=Uk(o.layoutBox,n):this.constraints=!1,this.elastic=Yk(r),i!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&at(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=Gk(o.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!_r(t))return!1;const r=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const i=Jk(r,o.root,this.visualElement.getTransformPagePoint());let s=Hk(o.layout.layoutBox,i);if(n){const a=n(Kk(s));this.hasMutatedConstraints=!!a,a&&(s=iv(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:o,dragTransition:i,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=at(c=>{if(!hs(c,n,this.currentDirection))return;let d=l&&l[c]||{};s&&(d={min:0,max:0});const p=o?200:1e6,g=o?40:1e7,v={type:"inertia",velocity:r?t[c]:0,bounceStiffness:p,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...i,...d};return this.startAxisValueAnimation(c,v)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(xf(t,r,0,n))}stopAnimation(){at(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){at(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),o=r[n];return o||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){at(n=>{const{drag:r}=this.getProps();if(!hs(n,r,this.currentDirection))return;const{projection:o}=this.visualElement,i=this.getAxisMotionValue(n);if(o&&o.layout){const{min:s,max:a}=o.layout.layoutBox[n];i.set(t[n]-se(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!_r(n)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};at(s=>{const a=this.getAxisMotionValue(s);if(a){const l=a.get();o[s]=Wk({min:l,max:l},this.constraints[s])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),at(s=>{if(!hs(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(se(l,u,o[s]))})}addListeners(){if(!this.visualElement.current)return;e3.set(this.visualElement,this);const t=this.visualElement.current,n=Kt(t,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();_r(l)&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,i=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),r();const s=Wt(window,"resize",()=>this.scalePositionWithinConstraints()),a=o.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(at(c=>{const d=this.getAxisMotionValue(c);d&&(this.originPoint[c]+=l[c].translate,d.set(d.get()+l[c].translate))}),this.visualElement.render())});return()=>{s(),n(),i(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:i=!1,dragElastic:s=Lc,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:o,dragConstraints:i,dragElastic:s,dragMomentum:a}}}function hs(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function n3(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class r3 extends Fn{constructor(t){super(t),this.removeGroupControls=de,this.removeListeners=de,this.controls=new t3(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||de}unmount(){this.removeGroupControls(),this.removeListeners()}}const $h=e=>(t,n)=>{e&&K.update(()=>e(t,n))};class o3 extends Fn{constructor(){super(...arguments),this.removePointerDownListener=de}onPointerDown(t){this.session=new rv(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:uv(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:$h(t),onStart:$h(n),onMove:r,onEnd:(i,s)=>{delete this.session,o&&K.update(()=>o(i,s))}}}mount(){this.removePointerDownListener=Kt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function i3(){const e=w.useContext(nl);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,o=w.useId();return w.useEffect(()=>r(o),[]),!t&&n?[!1,()=>n&&n(o)]:[!0]}const Ms={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Bh(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const No={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(I.test(e))e=parseFloat(e);else return e;const n=Bh(e,t.target.x),r=Bh(e,t.target.y);return`${n}% ${r}%`}},s3={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,o=On.parse(e);if(o.length>5)return r;const i=On.createTransformer(e),s=typeof o[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;o[0+s]/=a,o[1+s]/=l;const u=se(a,l,.5);return typeof o[2+s]=="number"&&(o[2+s]/=u),typeof o[3+s]=="number"&&(o[3+s]/=u),i(o)}};class a3 extends we.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:o}=this.props,{projection:i}=t;yS(l3),i&&(n.group&&n.group.add(i),r&&r.register&&o&&r.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),Ms.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:o,isPresent:i}=this.props,s=r.projection;return s&&(s.isPresent=i,o||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==i&&(i?s.promote():s.relegate()||K.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function cv(e){const[t,n]=i3(),r=w.useContext(of);return we.createElement(a3,{...e,layoutGroup:r,switchLayoutGroup:w.useContext(iy),isPresent:t,safeToRemove:n})}const l3={borderRadius:{...No,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:No,borderTopRightRadius:No,borderBottomLeftRadius:No,borderBottomRightRadius:No,boxShadow:s3},dv=["TopLeft","TopRight","BottomLeft","BottomRight"],u3=dv.length,Uh=e=>typeof e=="string"?parseFloat(e):e,Hh=e=>typeof e=="number"||I.test(e);function c3(e,t,n,r,o,i){o?(e.opacity=se(0,n.opacity!==void 0?n.opacity:1,d3(r)),e.opacityExit=se(t.opacity!==void 0?t.opacity:1,0,f3(r))):i&&(e.opacity=se(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<u3;s++){const a=`border${dv[s]}Radius`;let l=Wh(t,a),u=Wh(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Hh(l)===Hh(u)?(e[a]=Math.max(se(Uh(l),Uh(u),r),0),(Mt.test(u)||Mt.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=se(t.rotate||0,n.rotate||0,r))}function Wh(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const d3=fv(0,.5,Ny),f3=fv(.5,.95,de);function fv(e,t,n){return r=>r<e?0:r>t?1:n(lo(e,t,r))}function Gh(e,t){e.min=t.min,e.max=t.max}function st(e,t){Gh(e.x,t.x),Gh(e.y,t.y)}function Yh(e,t,n,r,o){return e-=t,e=ja(e,1/n,r),o!==void 0&&(e=ja(e,1/o,r)),e}function p3(e,t=0,n=1,r=.5,o,i=e,s=e){if(Mt.test(t)&&(t=parseFloat(t),t=se(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=se(i.min,i.max,r);e===i&&(a-=t),e.min=Yh(e.min,t,n,a,o),e.max=Yh(e.max,t,n,a,o)}function Kh(e,t,[n,r,o],i,s){p3(e,t[n],t[r],t[o],t.scale,i,s)}const h3=["x","scaleX","originX"],m3=["y","scaleY","originY"];function Xh(e,t,n,r){Kh(e.x,t,h3,n?n.x:void 0,r?r.x:void 0),Kh(e.y,t,m3,n?n.y:void 0,r?r.y:void 0)}function qh(e){return e.translate===0&&e.scale===1}function pv(e){return qh(e.x)&&qh(e.y)}function g3(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function hv(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Qh(e){return tt(e.x)/tt(e.y)}class y3{constructor(){this.members=[]}add(t){wf(this.members,t),t.scheduleRender()}remove(t){if(bf(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let r;for(let o=n;o>=0;o--){const i=this.members[o];if(i.isPresent!==!1){r=i;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Zh(e,t,n){let r="";const o=e.x.translate/t.x,i=e.y.translate/t.y;if((o||i)&&(r=`translate3d(${o}px, ${i}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:c}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),c&&(r+=`rotateY(${c}deg) `)}const s=e.x.scale*t.x,a=e.y.scale*t.y;return(s!==1||a!==1)&&(r+=`scale(${s}, ${a})`),r||"none"}const v3=(e,t)=>e.depth-t.depth;class x3{constructor(){this.children=[],this.isDirty=!1}add(t){wf(this.children,t),this.isDirty=!0}remove(t){bf(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(v3),this.isDirty=!1,this.children.forEach(t)}}function w3(e,t){const n=performance.now(),r=({timestamp:o})=>{const i=o-n;i>=t&&(Pt(r),e(i-t))};return K.read(r,!0),()=>Pt(r)}function b3(e){window.MotionDebug&&window.MotionDebug.record(e)}function S3(e){return e instanceof SVGElement&&e.tagName!=="svg"}function k3(e,t,n){const r=qe(e)?e:wt(e);return r.start(xf("",r,t,n)),r.animation}const Jh=["","X","Y","Z"],C3={visibility:"hidden"},em=1e3;let E3=0;const Kn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function mv({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(s={},a=t==null?void 0:t()){this.id=E3++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Kn.totalNodes=Kn.resolvedTargetDeltas=Kn.recalculatedProjection=0,this.nodes.forEach(T3),this.nodes.forEach(O3),this.nodes.forEach(N3),this.nodes.forEach(R3),b3(Kn)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new x3)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Sf),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=S3(s),this.instance=s;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let d;const p=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=w3(p,250),Ms.hasAnimatedSinceResize&&(Ms.hasAnimatedSinceResize=!1,this.nodes.forEach(nm))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:p,hasRelativeTargetChanged:g,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||c.getDefaultTransition()||_3,{onLayoutAnimationStart:b,onLayoutAnimationComplete:y}=c.getProps(),m=!this.targetLayout||!hv(this.targetLayout,v)||g,h=!p&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||h||p&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,h);const k={...vf(x,"layout"),onPlay:b,onComplete:y};(c.shouldReduceMotion||this.options.layoutRoot)&&(k.delay=0,k.type=!1),this.startAnimation(k)}else p||nm(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Pt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(D3),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const d=this.path[c];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(tm);return}this.isUpdating||this.nodes.forEach(L3),this.isUpdating=!1,this.nodes.forEach(z3),this.nodes.forEach(P3),this.nodes.forEach(j3),this.clearAllSnapshots();const a=performance.now();Pe.delta=zn(0,1e3/60,a-Pe.timestamp),Pe.timestamp=a,Pe.isProcessing=!0,Ql.update.process(Pe),Ql.preRender.process(Pe),Ql.render.process(Pe),Pe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(A3),this.sharedNodes.forEach(M3)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,K.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){K.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=pe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!o)return;const s=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!pv(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;s&&(a||Yn(this.latestValues)||c)&&(o(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),V3(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return pe();const a=s.measureViewportBox(),{scroll:l}=this.root;return l&&(pn(a.x,l.offset.x),pn(a.y,l.offset.y)),a}removeElementScroll(s){const a=pe();st(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:d}=u;if(u!==this.root&&c&&d.layoutScroll){if(c.isRoot){st(a,s);const{scroll:p}=this.root;p&&(pn(a.x,-p.offset.x),pn(a.y,-p.offset.y))}pn(a.x,c.offset.x),pn(a.y,c.offset.y)}}return a}applyTransform(s,a=!1){const l=pe();st(l,s);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Br(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Yn(c.latestValues)&&Br(l,c.latestValues)}return Yn(this.latestValues)&&Br(l,this.latestValues),l}removeTransform(s){const a=pe();st(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Yn(u.latestValues))continue;zc(u.latestValues)&&u.updateSnapshot();const c=pe(),d=u.measurePageBox();st(c,d),Xh(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Yn(this.latestValues)&&Xh(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Pe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:d,layoutId:p}=this.options;if(!(!this.layout||!(d||p))){if(this.resolvedRelativeTargetAt=Pe.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=pe(),this.relativeTargetOrigin=pe(),ri(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),st(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=pe(),this.targetWithTransforms=pe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),$k(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):st(this.target,this.layout.layoutBox),av(this.target,this.targetDelta)):st(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=pe(),this.relativeTargetOrigin=pe(),ri(this.relativeTargetOrigin,this.target,g.target),st(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Kn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||zc(this.parent.latestValues)||sv(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Pe.timestamp&&(u=!1),u)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;st(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,g=this.treeScale.y;qk(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:v}=a;if(!v){this.projectionTransform&&(this.projectionDelta=$r(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=$r(),this.projectionDeltaWithTransform=$r());const x=this.projectionTransform;ni(this.projectionDelta,this.layoutCorrected,v,this.latestValues),this.projectionTransform=Zh(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==p||this.treeScale.y!==g)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),Kn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},d=$r();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=pe(),g=l?l.source:void 0,v=this.layout?this.layout.source:void 0,x=g!==v,b=this.getStack(),y=!b||b.members.length<=1,m=!!(x&&!y&&this.options.crossfade===!0&&!this.path.some(I3));this.animationProgress=0;let h;this.mixTargetDelta=k=>{const E=k/1e3;rm(d.x,s.x,E),rm(d.y,s.y,E),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ri(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),F3(this.relativeTarget,this.relativeTargetOrigin,p,E),h&&g3(this.relativeTarget,h)&&(this.isProjectionDirty=!1),h||(h=pe()),st(h,this.relativeTarget)),x&&(this.animationValues=c,c3(c,u,this.latestValues,E,m,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=E},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Pt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=K.update(()=>{Ms.hasAnimatedSinceResize=!0,this.currentAnimation=k3(0,em,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(em),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=s;if(!(!a||!l||!u)){if(this!==s&&this.layout&&u&&gv(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||pe();const d=tt(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+d;const p=tt(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+p}st(a,l),Br(a,c),ni(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new y3),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const u={};for(let c=0;c<Jh.length;c++){const d="rotate"+Jh[c];l[d]&&(u[d]=l[d],s.setStaticValue(d,0))}s.render();for(const c in u)s.setStaticValue(c,u[c]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return C3;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Ds(s==null?void 0:s.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=Ds(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Yn(this.latestValues)&&(x.transform=c?c({},""):"none",this.hasProjected=!1),x}const p=d.animationValues||d.latestValues;this.applyTransformsToTarget(),u.transform=Zh(this.projectionDeltaWithTransform,this.treeScale,p),c&&(u.transform=c(p,u.transform));const{x:g,y:v}=this.projectionDelta;u.transformOrigin=`${g.origin*100}% ${v.origin*100}% 0`,d.animationValues?u.opacity=d===this?(l=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=d===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const x in wa){if(p[x]===void 0)continue;const{correct:b,applyTo:y}=wa[x],m=u.transform==="none"?p[x]:b(p[x],d);if(y){const h=y.length;for(let k=0;k<h;k++)u[y[k]]=m}else u[x]=m}return this.options.layoutId&&(u.pointerEvents=d===this?Ds(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(tm),this.root.sharedNodes.clear()}}}function P3(e){e.updateLayout()}function j3(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=e.layout,{animationType:i}=e.options,s=n.source!==e.layout.source;i==="size"?at(d=>{const p=s?n.measuredBox[d]:n.layoutBox[d],g=tt(p);p.min=r[d].min,p.max=p.min+g}):gv(i,n.layoutBox,r)&&at(d=>{const p=s?n.measuredBox[d]:n.layoutBox[d],g=tt(r[d]);p.max=p.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+g)});const a=$r();ni(a,r,n.layoutBox);const l=$r();s?ni(l,e.applyTransform(o,!0),n.measuredBox):ni(l,r,n.layoutBox);const u=!pv(a);let c=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:p,layout:g}=d;if(p&&g){const v=pe();ri(v,n.layoutBox,p.layoutBox);const x=pe();ri(x,r,g.layoutBox),hv(v,x)||(c=!0),d.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=v,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function T3(e){Kn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function R3(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function A3(e){e.clearSnapshot()}function tm(e){e.clearMeasurements()}function L3(e){e.isLayoutDirty=!1}function z3(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function nm(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function O3(e){e.resolveTargetDelta()}function N3(e){e.calcProjection()}function D3(e){e.resetRotation()}function M3(e){e.removeLeadSnapshot()}function rm(e,t,n){e.translate=se(t.translate,0,n),e.scale=se(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function om(e,t,n,r){e.min=se(t.min,n.min,r),e.max=se(t.max,n.max,r)}function F3(e,t,n,r){om(e.x,t.x,n.x,r),om(e.y,t.y,n.y,r)}function I3(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const _3={duration:.45,ease:[.4,0,.1,1]},im=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),sm=im("applewebkit/")&&!im("chrome/")?Math.round:de;function am(e){e.min=sm(e.min),e.max=sm(e.max)}function V3(e){am(e.x),am(e.y)}function gv(e,t,n){return e==="position"||e==="preserve-aspect"&&!Ac(Qh(t),Qh(n),.2)}const $3=mv({attachResizeListener:(e,t)=>Wt(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),lu={current:void 0},yv=mv({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!lu.current){const e=new $3({});e.mount(window),e.setOptions({layoutScroll:!0}),lu.current=e}return lu.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),B3={pan:{Feature:o3},drag:{Feature:r3,ProjectionNode:yv,MeasureLayout:cv}},U3=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function H3(e){const t=U3.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function Nc(e,t,n=1){const[r,o]=H3(e);if(!r)return;const i=window.getComputedStyle(t).getPropertyValue(r);if(i){const s=i.trim();return Zy(s)?parseFloat(s):s}else return Sc(o)?Nc(o,t,n+1):o}function W3(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(o=>{const i=o.get();if(!Sc(i))return;const s=Nc(i,r);s&&o.set(s)});for(const o in t){const i=t[o];if(!Sc(i))continue;const s=Nc(i,r);s&&(t[o]=s,n||(n={}),n[o]===void 0&&(n[o]=i))}return{target:t,transitionEnd:n}}const G3=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),vv=e=>G3.has(e),Y3=e=>Object.keys(e).some(vv),lm=e=>e===mr||e===I,um=(e,t)=>parseFloat(e.split(", ")[t]),cm=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/);if(o)return um(o[1],t);{const i=r.match(/^matrix\((.+)\)$/);return i?um(i[1],e):0}},K3=new Set(["x","y","z"]),X3=Mi.filter(e=>!K3.has(e));function q3(e){const t=[];return X3.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const uo={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:cm(4,13),y:cm(5,14)};uo.translateX=uo.x;uo.translateY=uo.y;const Q3=(e,t,n)=>{const r=t.measureViewportBox(),o=t.current,i=getComputedStyle(o),{display:s}=i,a={};s==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{a[u]=uo[u](r,i)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const c=t.getValue(u);c&&c.jump(a[u]),e[u]=uo[u](l,i)}),e},Z3=(e,t,n={},r={})=>{t={...t},r={...r};const o=Object.keys(t).filter(vv);let i=[],s=!1;const a=[];if(o.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let c=n[l],d=Oo(c);const p=t[l];let g;if(Sa(p)){const v=p.length,x=p[0]===null?1:0;c=p[x],d=Oo(c);for(let b=x;b<v&&p[b]!==null;b++)g?ul(Oo(p[b])===g):g=Oo(p[b])}else g=Oo(p);if(d!==g)if(lm(d)&&lm(g)){const v=u.get();typeof v=="string"&&u.set(parseFloat(v)),typeof p=="string"?t[l]=parseFloat(p):Array.isArray(p)&&g===I&&(t[l]=p.map(parseFloat))}else d!=null&&d.transform&&(g!=null&&g.transform)&&(c===0||p===0)?c===0?u.set(g.transform(c)):t[l]=d.transform(p):(s||(i=q3(e),s=!0),a.push(l),r[l]=r[l]!==void 0?r[l]:t[l],u.jump(p))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,u=Q3(t,e,a);return i.length&&i.forEach(([c,d])=>{e.getValue(c).set(d)}),e.render(),rl&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function J3(e,t,n,r){return Y3(t)?Z3(e,t,n,r):{target:t,transitionEnd:r}}const eC=(e,t,n,r)=>{const o=W3(e,t,r);return t=o.target,r=o.transitionEnd,J3(e,t,n,r)},Dc={current:null},xv={current:!1};function tC(){if(xv.current=!0,!!rl)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Dc.current=e.matches;e.addListener(t),t()}else Dc.current=!1}function nC(e,t,n){const{willChange:r}=t;for(const o in t){const i=t[o],s=n[o];if(qe(i))e.addValue(o,i),Pa(r)&&r.add(o);else if(qe(s))e.addValue(o,wt(i,{owner:e})),Pa(r)&&r.remove(o);else if(s!==i)if(e.hasValue(o)){const a=e.getValue(o);!a.hasAnimated&&a.set(i)}else{const a=e.getStaticValue(o);e.addValue(o,wt(a!==void 0?a:i,{owner:e}))}}for(const o in n)t[o]===void 0&&e.removeValue(o);return t}const dm=new WeakMap,wv=Object.keys(Pi),rC=wv.length,fm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],oC=rf.length;class iC{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:o,visualState:i},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>K.render(this.render,!1,!0);const{latestValues:a,renderState:l}=i;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=s,this.isControllingVariants=il(n),this.isVariantNode=oy(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...c}=this.scrapeMotionValuesFromProps(n,{});for(const d in c){const p=c[d];a[d]!==void 0&&qe(p)&&(p.set(a[d],!1),Pa(u)&&u.add(d))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,dm.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),xv.current||tC(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Dc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){dm.delete(this.current),this.projection&&this.projection.unmount(),Pt(this.notifyUpdate),Pt(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=hr.has(t),o=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&K.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),i=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{o(),i()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,o,i){let s,a;for(let l=0;l<rC;l++){const u=wv[l],{isEnabled:c,Feature:d,ProjectionNode:p,MeasureLayout:g}=Pi[u];p&&(s=p),c(n)&&(!this.features[u]&&d&&(this.features[u]=new d(this)),g&&(a=g))}if((this.type==="html"||this.type==="svg")&&!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:c,dragConstraints:d,layoutScroll:p,layoutRoot:g}=n;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!c||d&&_r(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:i,layoutScroll:p,layoutRoot:g})}return a}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):pe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<fm.length;r++){const o=fm[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const i=t["on"+o];i&&(this.propEventSubscriptions[o]=this.on(o,i))}this.prevMotionValues=nC(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<oC;r++){const o=rf[r],i=this.props[o];(Ei(i)||i===!1)&&(n[o]=i)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=wt(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,o=typeof r=="string"||typeof r=="object"?(n=ff(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&o!==void 0)return o;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!qe(i)?i:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Sf),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class bv extends iC{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:o},i){let s=kk(r,t||{},this);if(o&&(n&&(n=o(n)),r&&(r=o(r)),s&&(s=o(s))),i){bk(this,r,s);const a=eC(this,r,s,n);n=a.transitionEnd,r=a.target}return{transition:t,transitionEnd:n,...r}}}function sC(e){return window.getComputedStyle(e)}class aC extends bv{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(hr.has(n)){const r=yf(n);return r&&r.default||0}else{const r=sC(t),o=(ly(n)?r.getPropertyValue(n):r[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return lv(t,n)}build(t,n,r,o){af(t,n,r,o.transformTemplate)}scrapeMotionValuesFromProps(t,n){return df(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;qe(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,o){hy(t,n,r,o)}}class lC extends bv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(hr.has(n)){const r=yf(n);return r&&r.default||0}return n=my.has(n)?n:tf(n),t.getAttribute(n)}measureInstanceViewportBox(){return pe()}scrapeMotionValuesFromProps(t,n){return yy(t,n)}build(t,n,r,o){uf(t,n,r,this.isSVGTag,o.transformTemplate)}renderInstance(t,n,r,o){gy(t,n,r,o)}mount(t){this.isSVGTag=cf(t.tagName),super.mount(t)}}const uC=(e,t)=>sf(e)?new lC(t,{enableHardwareAcceleration:!1}):new aC(t,{enableHardwareAcceleration:!0}),cC={layout:{ProjectionNode:yv,MeasureLayout:cv}},dC={...Fk,...s4,...B3,...cC},A=mS((e,t)=>YS(e,t,dC,uC));function Sv(){const e=w.useRef(!1);return wo(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function fC(){const e=Sv(),[t,n]=w.useState(0),r=w.useCallback(()=>{e.current&&n(t+1)},[t]);return[w.useCallback(()=>K.postRender(r),[r]),t]}class pC extends w.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function hC({children:e,isPresent:t}){const n=w.useId(),r=w.useRef(null),o=w.useRef({width:0,height:0,top:0,left:0});return w.useInsertionEffect(()=>{const{width:i,height:s,top:a,left:l}=o.current;if(t||!r.current||!i||!s)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),w.createElement(pC,{isPresent:t,childRef:r,sizeRef:o},w.cloneElement(e,{ref:r}))}const uu=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:o,presenceAffectsLayout:i,mode:s})=>{const a=bo(mC),l=w.useId(),u=w.useMemo(()=>({id:l,initial:t,isPresent:n,custom:o,onExitComplete:c=>{a.set(c,!0);for(const d of a.values())if(!d)return;r&&r()},register:c=>(a.set(c,!1),()=>a.delete(c))}),i?void 0:[n]);return w.useMemo(()=>{a.forEach((c,d)=>a.set(d,!1))},[n]),w.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),s==="popLayout"&&(e=w.createElement(hC,{isPresent:n},e)),w.createElement(nl.Provider,{value:u},e)};function mC(){return new Map}function gC(e){return w.useEffect(()=>()=>e(),[])}const Xn=e=>e.key||"";function yC(e,t){e.forEach(n=>{const r=Xn(n);t.set(r,n)})}function vC(e){const t=[];return w.Children.forEach(e,n=>{w.isValidElement(n)&&t.push(n)}),t}const We=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:o,presenceAffectsLayout:i=!0,mode:s="sync"})=>{const a=w.useContext(of).forceRender||fC()[0],l=Sv(),u=vC(e);let c=u;const d=w.useRef(new Map).current,p=w.useRef(c),g=w.useRef(new Map).current,v=w.useRef(!0);if(wo(()=>{v.current=!1,yC(u,g),p.current=c}),gC(()=>{v.current=!0,g.clear(),d.clear()}),v.current)return w.createElement(w.Fragment,null,c.map(m=>w.createElement(uu,{key:Xn(m),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:i,mode:s},m)));c=[...c];const x=p.current.map(Xn),b=u.map(Xn),y=x.length;for(let m=0;m<y;m++){const h=x[m];b.indexOf(h)===-1&&!d.has(h)&&d.set(h,void 0)}return s==="wait"&&d.size&&(c=[]),d.forEach((m,h)=>{if(b.indexOf(h)!==-1)return;const k=g.get(h);if(!k)return;const E=x.indexOf(h);let R=m;if(!R){const C=()=>{d.delete(h);const j=Array.from(g.keys()).filter(L=>!b.includes(L));if(j.forEach(L=>g.delete(L)),p.current=u.filter(L=>{const O=Xn(L);return O===h||j.includes(O)}),!d.size){if(l.current===!1)return;a(),r&&r()}};R=w.createElement(uu,{key:Xn(k),isPresent:!1,onExitComplete:C,custom:t,presenceAffectsLayout:i,mode:s},k),d.set(h,R)}c.splice(E,0,R)}),c=c.map(m=>{const h=m.key;return d.has(h)?m:w.createElement(uu,{key:Xn(m),isPresent:!0,presenceAffectsLayout:i,mode:s},m)}),w.createElement(w.Fragment,null,d.size?c:c.map(m=>w.cloneElement(m)))};function Mc(e){const t=bo(()=>wt(e)),{isStatic:n}=w.useContext(ef);if(n){const[,r]=w.useState(e);w.useEffect(()=>t.on("change",r),[])}return t}const xC=e=>e&&typeof e=="object"&&e.mix,wC=e=>xC(e)?e.mix:void 0;function bC(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],o=e[1+n],i=e[2+n],s=e[3+n],a=cl(o,i,{mixer:wC(i[0]),...s});return t?a(r):a}function kv(e,t){const n=Mc(t()),r=()=>n.set(t());return r(),wo(()=>{const o=()=>K.update(r,!1,!0),i=e.map(s=>s.on("change",o));return()=>{i.forEach(s=>s()),Pt(r)}}),n}function SC(e){ti.current=[],e();const t=kv(ti.current,e);return ti.current=void 0,t}function zt(e,t,n,r){if(typeof e=="function")return SC(e);const o=typeof t=="function"?t:bC(t,n,r);return Array.isArray(e)?pm(e,o):pm([e],([i])=>o(i))}function pm(e,t){const n=bo(()=>[]);return kv(e,()=>{n.length=0;const r=e.length;for(let o=0;o<r;o++)n[o]=e[o].get();return t(n)})}function kC(e,t,n){var r;if(typeof e=="string"){let o=document;t&&(ul(!!t.current),o=t.current),n?((r=n[e])!==null&&r!==void 0||(n[e]=o.querySelectorAll(e)),e=n[e]):e=o.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}const Fs=new WeakMap;let cn;function CC(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function EC({target:e,contentRect:t,borderBoxSize:n}){var r;(r=Fs.get(e))===null||r===void 0||r.forEach(o=>{o({target:e,contentSize:t,get size(){return CC(e,n)}})})}function PC(e){e.forEach(EC)}function jC(){typeof ResizeObserver>"u"||(cn=new ResizeObserver(PC))}function TC(e,t){cn||jC();const n=kC(e);return n.forEach(r=>{let o=Fs.get(r);o||(o=new Set,Fs.set(r,o)),o.add(t),cn==null||cn.observe(r)}),()=>{n.forEach(r=>{const o=Fs.get(r);o==null||o.delete(t),o!=null&&o.size||cn==null||cn.unobserve(r)})}}const Is=new Set;let oi;function RC(){oi=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};Is.forEach(n=>n(t))},window.addEventListener("resize",oi)}function AC(e){return Is.add(e),oi||RC(),()=>{Is.delete(e),!Is.size&&oi&&(oi=void 0)}}function LC(e,t){return typeof e=="function"?AC(e):TC(e,t)}const zC=50,hm=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),OC=()=>({time:0,x:hm(),y:hm()}),NC={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function mm(e,t,n,r){const o=n[t],{length:i,position:s}=NC[t],a=o.current,l=n.time;o.current=e["scroll"+s],o.scrollLength=e["scroll"+i]-e["client"+i],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=lo(0,o.scrollLength,o.current);const u=r-l;o.velocity=u>zC?0:gf(o.current-a,u)}function DC(e,t,n){mm(e,"x",t,n),mm(e,"y",t,n),t.time=n}function MC(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const o=r.getBoundingClientRect();r=r.parentElement;const i=r.getBoundingClientRect();n.x+=o.left-i.left,n.y+=o.top-i.top}else if(r instanceof SVGGraphicsElement){const{x:o,y:i}=r.getBBox();n.x+=o,n.y+=i;let s=null,a=r.parentNode;for(;!s;)a.tagName==="svg"&&(s=a),a=r.parentNode;r=s}else break;return n}const FC={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Fc={start:0,center:.5,end:1};function gm(e,t,n=0){let r=0;if(Fc[e]!==void 0&&(e=Fc[e]),typeof e=="string"){const o=parseFloat(e);e.endsWith("px")?r=o:e.endsWith("%")?e=o/100:e.endsWith("vw")?r=o/100*document.documentElement.clientWidth:e.endsWith("vh")?r=o/100*document.documentElement.clientHeight:e=o}return typeof e=="number"&&(r=t*e),n+r}const IC=[0,0];function _C(e,t,n,r){let o=Array.isArray(e)?e:IC,i=0,s=0;return typeof e=="number"?o=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?o=e.split(" "):o=[e,Fc[e]?e:"0"]),i=gm(o[0],n,r),s=gm(o[1],t),i-s}const VC={x:0,y:0};function $C(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function BC(e,t,n){let{offset:r=FC.All}=n;const{target:o=e,axis:i="y"}=n,s=i==="y"?"height":"width",a=o!==e?MC(o,e):VC,l=o===e?{width:e.scrollWidth,height:e.scrollHeight}:$C(o),u={width:e.clientWidth,height:e.clientHeight};t[i].offset.length=0;let c=!t[i].interpolate;const d=r.length;for(let p=0;p<d;p++){const g=_C(r[p],u[s],l[s],a[i]);!c&&g!==t[i].interpolatorOffsets[p]&&(c=!0),t[i].offset[p]=g}c&&(t[i].interpolate=cl(t[i].offset,Yy(r)),t[i].interpolatorOffsets=[...t[i].offset]),t[i].progress=t[i].interpolate(t[i].current)}function UC(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function HC(e,t,n,r={}){return{measure:()=>UC(e,r.target,n),update:o=>{DC(e,n,o),(r.offset||r.target)&&BC(e,n,r)},notify:()=>t(n)}}const Do=new WeakMap,ym=new WeakMap,cu=new WeakMap,vm=e=>e===document.documentElement?window:e;function WC(e,{container:t=document.documentElement,...n}={}){let r=cu.get(t);r||(r=new Set,cu.set(t,r));const o=OC(),i=HC(t,e,o,n);if(r.add(i),!Do.has(t)){const a=()=>{for(const p of r)p.measure()},l=()=>{for(const p of r)p.update(Pe.timestamp)},u=()=>{for(const p of r)p.notify()},c=()=>{K.read(a,!1,!0),K.read(l,!1,!0),K.update(u,!1,!0)};Do.set(t,c);const d=vm(t);window.addEventListener("resize",c,{passive:!0}),t!==document.documentElement&&ym.set(t,LC(t,c)),d.addEventListener("scroll",c,{passive:!0})}const s=Do.get(t);return K.read(s,!1,!0),()=>{var a;Pt(s);const l=cu.get(t);if(!l||(l.delete(i),l.size))return;const u=Do.get(t);Do.delete(t),u&&(vm(t).removeEventListener("scroll",u),(a=ym.get(t))===null||a===void 0||a(),window.removeEventListener("resize",u))}}function xm(e,t){Ey(!!(!t||t.current))}const GC=()=>({scrollX:wt(0),scrollY:wt(0),scrollXProgress:wt(0),scrollYProgress:wt(0)});function Cv({container:e,target:t,layoutEffect:n=!0,...r}={}){const o=bo(GC);return(n?wo:w.useEffect)(()=>(xm("target",t),xm("container",e),WC(({x:s,y:a})=>{o.scrollX.set(s.current),o.scrollXProgress.set(s.progress),o.scrollY.set(a.current),o.scrollYProgress.set(a.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),o}function YC(e){e.values.forEach(t=>t.stop())}function KC(){const e=new Set,t={subscribe(n){return e.add(n),()=>void e.delete(n)},start(n,r){const o=[];return e.forEach(i=>{o.push(nv(i,n,{transitionOverride:r}))}),Promise.all(o)},set(n){return e.forEach(r=>{wk(r,n)})},stop(){e.forEach(n=>{YC(n)})},mount(){return()=>{t.stop()}}};return t}function XC(){const e=bo(KC);return wo(e.mount,[]),e}var Ev={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},wm=we.createContext&&we.createContext(Ev),Rn=globalThis&&globalThis.__assign||function(){return Rn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Rn.apply(this,arguments)},qC=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function Pv(e){return e&&e.map(function(t,n){return we.createElement(t.tag,Rn({key:n},t.attr),Pv(t.child))})}function W(e){return function(t){return we.createElement(QC,Rn({attr:Rn({},e.attr)},t),Pv(e.child))}}function QC(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,s=qC(e,["attr","size","title"]),a=o||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),we.createElement("svg",Rn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Rn(Rn({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),i&&we.createElement("title",null,i),e.children)};return wm!==void 0?we.createElement(wm.Consumer,null,function(n){return t(n)}):t(Ev)}function co(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"}}]})(e)}function ZC(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"4"}},{tag:"path",attr:{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"}}]})(e)}function JC(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"}},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"}}]})(e)}function bm(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"}}]})(e)}function eE(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}},{tag:"circle",attr:{cx:"12",cy:"13",r:"4"}}]})(e)}function jv(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"}}]})(e)}function du(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"}}]})(e)}function tE(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"}},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"}}]})(e)}function Ic(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}},{tag:"line",attr:{x1:"1",y1:"1",x2:"23",y2:"23"}}]})(e)}function _c(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"}}]})(e)}function Sm(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}},{tag:"polyline",attr:{points:"14 2 14 8 20 8"}},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"}},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"}},{tag:"polyline",attr:{points:"10 9 9 9 8 9"}}]})(e)}function nE(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"}},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"}}]})(e)}function rE(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}},{tag:"polyline",attr:{points:"16 17 21 12 16 7"}},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"}}]})(e)}function oE(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}},{tag:"polyline",attr:{points:"22,6 12,13 2,6"}}]})(e)}function km(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"}}]})(e)}function iE(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}}]})(e)}function sE(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"}},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"}}]})(e)}function Tv(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"}},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"}},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"}},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"}}]})(e)}function aE(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"}},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"}},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"}},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"}},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"}},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}}]})(e)}function Rv(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"}}]})(e)}function Cf(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"}},{tag:"polyline",attr:{points:"17 6 23 6 23 12"}}]})(e)}function lE(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"}},{tag:"polyline",attr:{points:"17 11 19 13 23 9"}}]})(e)}function _s(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"}}]})(e)}function Ef(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"}},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"}},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"}}]})(e)}function ir(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(e)}function uE(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}}]})(e)}const Ta={name:"GYM BUDDY",logoSrc:"/gym-buddy-logo.png",heroSrc:"/hero-image.png",floatingCards:[{id:"progress",position:"top-left",rotate:-8,zIndex:0,stat:"87%",title:"Progresso Mensal",description:"usuários atingem suas metas de treino com nosso sistema de acompanhamento personalizado.",category:"Resultados"},{id:"users",position:"top-right",rotate:12,zIndex:0,stat:"15k+",title:"Usuários Ativos",description:"pessoas já transformaram seus corpos usando nossa plataforma de treinos inteligentes.",category:"Comunidade"},{id:"workouts",position:"bottom-left",rotate:6,zIndex:0,stat:"200+",title:"Exercícios Disponíveis",description:"diferentes modalidades de treino adaptadas ao seu nível e objetivos pessoais.",category:"Variedade"},{id:"ai",position:"bottom-right",rotate:-15,zIndex:0,stat:"24/7",title:"IA Personal Trainer",description:"assistente inteligente disponível para ajustar seus treinos em tempo real.",category:"Tecnologia"}]};function cE(e){return W({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"}}]})(e)}function dE(e){return W({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"}}]})(e)}function fE(e){return W({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"}}]})(e)}function pE(e){return W({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"}}]})(e)}function Pf(e){return W({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M104 96H56c-13.3 0-24 10.7-24 24v104H8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h24v104c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm528 128h-24V120c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h24c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM456 32h-48c-13.3 0-24 10.7-24 24v168H256V56c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h128v168c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24z"}}]})(e)}function hE(e){return W({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"}}]})(e)}function mE(e){return W({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"}}]})(e)}function gE(e){return W({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"}}]})(e)}const fo="/api/v1/gymbuddy",yE=async(e,t)=>{try{const n=`${fo}/usuario/login/email/senha?email=${encodeURIComponent(e)}&senha=${encodeURIComponent(t)}`;console.log(" Realizando login:",{email:e,url:n,baseUrl:fo});const r=await fetch(n,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Accept:"application/json"}});console.log(" Resposta recebida:",{status:r.status,statusText:r.statusText,headers:Object.fromEntries(r.headers.entries())});const o=r.headers.get("content-type");let i;if(o&&o.includes("application/json"))i=await r.json(),console.log("✅ Resposta JSON:",i);else{const s=await r.text();throw console.error("❌ Resposta não é json:",{status:r.status,contentType:o,responseText:s.substring(0,500)}),r.status===500?new Error("Erro interno do servidor. O backend pode estar com problemas. Verifique se está rodando em 10.107.144.9:8080"):new Error(`Erro na API. Status: ${r.status}. Resposta: ${s.substring(0,100)}`)}return i}catch(n){throw console.error(" Erro no login:",n),n}},vE=async e=>{const t=`${fo}/usuario/check-email`;try{console.log(" Verificando se email já existe:",e);const n=await fetch(`${t}?email=${encodeURIComponent(e)}`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!n.ok){if(n.status===404)return{status:!0,exists:!1,message:"Email disponível"};throw new Error(`Erro ${n.status}: ${n.statusText}`)}const r=await n.json();return console.log(" Resultado da verificação de email:",r),{status:!0,exists:r.exists||!1,message:r.message||(r.exists?"Email já cadastrado":"Email disponível"),field:"email"}}catch(n){return console.warn(" Erro ao verificar email (continuando):",n),{status:!0,exists:!1,message:"Verificação indisponível"}}},xE=async e=>{const t=`${fo}/usuario/check-username`;try{console.log(" Verificando se username já existe:",e);const n=await fetch(`${t}?username=${encodeURIComponent(e)}`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!n.ok){if(n.status===404)return{status:!0,exists:!1,message:"Username disponível"};throw new Error(`Erro ${n.status}: ${n.statusText}`)}const r=await n.json();return console.log(" Resultado da verificação de username:",r),{status:!0,exists:r.exists||!1,message:r.message||(r.exists?"Username já cadastrado":"Username disponível"),field:"username"}}catch(n){return console.warn(" Erro ao verificar username (continuando):",n),{status:!0,exists:!1,message:"Verificação indisponível"}}},wE=async e=>{try{const t=`${fo}/usuario`;if(!e.email||!e.password||!e.username)throw new Error("Email, senha e nome de usuário são obrigatórios.");const n={nome:e.username,username:e.username,nickname:e.nickname,email:e.email,senha:e.password,data_nascimento:"1990-01-01"};console.log(" Realizando cadastro:",{url:t,originalUserData:{...e,password:"[REDACTED]",confirmPassword:"[REDACTED]"},payload:{...n,senha:"[REDACTED]"},payloadComplete:n,baseUrl:fo});const r=await fetch(t,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(n)});console.log(" Resposta de cadastro recebida:",{status:r.status,statusText:r.statusText,headers:Object.fromEntries(r.headers.entries())});const o=r.headers.get("content-type");let i;if(o&&o.includes("application/json"))i=await r.json(),console.log(" Resposta json de cadastro:",i);else{const s=await r.text();throw console.error(" Resposta de cadastro não é json:",{status:r.status,contentType:o,responseText:s.substring(0,500)}),r.status===500?new Error("Erro interno do servidor (500). O backend pode estar com problemas. Verifique se está rodando em 10.107.144.9:8080"):new Error(`Erro na API. Status: ${r.status}. Resposta: ${s.substring(0,100)}`)}return i}catch(t){throw console.error(" Erro no cadastro:",t),t}},bE=()=>{try{const e=localStorage.getItem("userData");return e?JSON.parse(e):null}catch(e){return console.error("Erro ao recuperar dados do usuário:",e),null}},SE=()=>localStorage.getItem("authToken"),kE=()=>{localStorage.removeItem("authToken"),localStorage.removeItem("userData")},Av=w.createContext(void 0),CE=({children:e})=>{const[t,n]=w.useState(null);w.useEffect(()=>{const a=bE(),l=SE();a&&l&&(n(a),console.log("Usuário recuperado do storage:",a))},[]);const s={user:t,isLoggedIn:!!t,login:(a,l)=>{console.log("🚀 UserContext.login() chamado com:",{userData:a,token:l?"presente":"ausente",timestamp:new Date().toISOString()}),n(a),l&&(localStorage.setItem("authToken",l),console.log("✅ Token salvo no localStorage")),localStorage.setItem("userData",JSON.stringify(a)),console.log("✅ Dados do usuário salvos no localStorage"),console.log("✅ Login realizado com sucesso no UserContext"),console.log("🎯 Estado do usuário atualizado para:",a)},logout:()=>{n(null),kE(),console.log("Usuário deslogado")},updateUser:a=>{n(a),localStorage.setItem("userData",JSON.stringify(a)),console.log("Dados do usuário atualizados:",a)}};return f.jsx(Av.Provider,{value:s,children:e})},Vi=()=>{const e=w.useContext(Av);if(e===void 0)throw new Error("useUser deve ser usado dentro de um UserProvider");return e},EE=({estaAberto:e,aoFechar:t,aoTrocarParaCadastro:n})=>{const[r,o]=w.useState(!1),[i,s]=w.useState(!1),[a,l]=w.useState(null),[u,c]=w.useState({email:"",senha:""}),{login:d}=Vi(),p=()=>{c({email:"",senha:""}),o(!1),l(null),s(!1)},g=()=>{p(),t()},v=async b=>{var y;b.preventDefault(),s(!0),l(null);try{const m=await yE(u.email,u.senha);if(m&&m.status===!0){const h=((y=m.usuario)==null?void 0:y[0])||m.user||m.data;if(console.log("🎯 Dados do usuário extraídos:",h),h)d(h,m.token),g(),console.log("✅ Login realizado com sucesso!",h);else throw console.error("❌ Estrutura da resposta:",m),new Error("Dados do usuário não encontrados na resposta.")}else{let h=(m==null?void 0:m.message)||"Credenciais inválidas. Verifique seu email e senha.";h.includes("campos com preenchimento obrigatórios")&&(h="Email e senha são obrigatórios."),l(h)}}catch(m){console.error("Erro no login:",m);let h="Erro de conexão. Verifique sua internet ou se a API está funcionando.";m instanceof Error&&(h=m.message),l(h)}finally{s(!1)}},x=b=>{c({...u,[b.target.name]:b.target.value})};return f.jsx(We,{children:e&&f.jsxs(f.Fragment,{children:[f.jsx(PE,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:g}),f.jsx(jE,{initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},transition:{duration:.4,ease:"easeOut"},children:f.jsxs(TE,{children:[f.jsx(RE,{onClick:g,children:f.jsx(ir,{})}),f.jsxs(AE,{children:[f.jsx(Pf,{className:"icone-logo"}),f.jsx("h2",{children:"GYM BUDDY"}),f.jsx("div",{className:"divisor"})]}),f.jsx(LE,{children:"ENTRAR NA CONTA"}),f.jsxs(zE,{onSubmit:v,children:[f.jsx(Cm,{children:f.jsx(Em,{type:"email",name:"email",placeholder:"Email ou Usuário",value:u.email,onChange:x,required:!0})}),f.jsxs(Cm,{children:[f.jsx(Em,{type:r?"text":"password",name:"senha",placeholder:"Senha",value:u.senha,onChange:x,required:!0}),f.jsx(OE,{type:"button",onClick:()=>o(!r),children:r?f.jsx(Ic,{}):f.jsx(_c,{})})]}),f.jsx(NE,{href:"#",onClick:b=>b.preventDefault(),children:"Esqueci minha senha"}),a&&f.jsx(DE,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},children:a}),f.jsx(ME,{type:"submit",disabled:i,whileHover:i?{}:{scale:1.02},whileTap:i?{}:{scale:.98},children:i?"Entrando...":"Entrar"})]}),f.jsxs(FE,{children:["Não tem conta ainda? ",f.jsx(IE,{href:"#",onClick:b=>{b.preventDefault(),n()},children:"Criar conta"})]})]})})]})})},PE=S(A.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 9998;
`,jE=S(A.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  pointer-events: none;
`,TE=S.div`
  position: relative;
  background: #0A0A0A;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.6rem;
  padding: 3rem;
  width: 90%;
  max-width: 42rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  pointer-events: auto;
`,RE=S.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  border: none;
  color: var(--white);
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
  }
`,AE=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  
  .icone-logo {
    color: var(--primary);
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  
  h2 {
    color: var(--white);
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
  }
  
  .divisor {
    width: 4rem;
    height: 2px;
    background: var(--primary);
  }
`,LE=S.h1`
  color: var(--white);
  font-size: 2.4rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: 0.05em;
`,zE=S.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,Cm=S.div`
  position: relative;
`,Em=S.input`
  width: 100%;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.8rem;
  padding: 1.4rem 1.6rem;
  color: var(--white);
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(227, 6, 19, 0.2);
  }
`,OE=S.button`
  position: absolute;
  right: 1.6rem;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.8rem;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--white);
  }
`,NE=S.a`
  color: var(--primary);
  font-size: 1.3rem;
  text-align: center;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--primary-dark);
    text-decoration: underline;
  }
`,DE=S(A.div)`
  background: rgba(220, 38, 38, 0.1);
  border: 1px solid rgba(220, 38, 38, 0.3);
  border-radius: 0.8rem;
  padding: 1rem 1.5rem;
  color: #ef4444;
  font-size: 1.4rem;
  text-align: center;
  margin: 1rem 0;
`,ME=S(A.button)`
  background: ${e=>e.disabled?"rgba(227, 6, 19, 0.5)":"var(--primary)"};
  color: var(--white);
  border: none;
  border-radius: 2.5rem;
  padding: 1.4rem 2rem;
  font-size: 1.6rem;
  font-weight: 700;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  transition: all 0.3s ease;
  margin-top: 1rem;
  opacity: ${e=>e.disabled?.7:1};
  
  &:hover {
    background: ${e=>e.disabled?"rgba(227, 6, 19, 0.5)":"var(--primary-dark)"};
    box-shadow: ${e=>e.disabled?"none":"0 8px 24px rgba(227, 6, 19, 0.4)"};
  }
`,FE=S.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.4rem;
  text-align: center;
  margin-top: 2rem;
`,IE=S.a`
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`,jf=({isOpen:e,onClose:t,onSwitchToLogin:n})=>{const[r,o]=w.useState(!1),[i,s]=w.useState(!1),[a,l]=w.useState({username:"",nickname:"",email:"",confirmEmail:"",password:"",confirmPassword:""}),[u,c]=w.useState(null),[d,p]=w.useState(!1),[g,v]=w.useState(!1),[x,b]=w.useState(null),[y,m]=w.useState(!1),[h,k]=w.useState(!1),[E,R]=w.useState(null),[C,j]=w.useState(null),{login:L}=Vi(),O=()=>{l({username:"",nickname:"",email:"",confirmEmail:"",password:"",confirmPassword:""}),o(!1),s(!1),c(null),v(!1),b(null),p(!1),m(!1),k(!1),R(null),j(null)},G=()=>{O(),t()},Z=async _=>{_.preventDefault(),v(!0),b(null);try{if(!a.username.trim())throw new Error("Nome de usuário é obrigatório.");if(!a.nickname.trim())throw new Error("Nickname é obrigatório.");if(E===!0)throw new Error("Este email já está cadastrado. Use outro email.");if(C===!0)throw new Error("Este nome de usuário já está em uso. Escolha outro.");if(a.email!==a.confirmEmail)throw new Error("Os emails não coincidem.");if(a.password!==a.confirmPassword)throw new Error("As senhas não coincidem.");if(!J(a.password))throw new Error("A senha deve ter pelo menos 8 caracteres, incluindo maiúscula, número e caractere especial.");const P=await wE(a);if(console.log("📋 Resposta completa da API:",P),console.log("🔍 Status da resposta:",P==null?void 0:P.status),console.log("🔍 Status Code da resposta:",P==null?void 0:P.status_code),console.log("🔍 Tipo do status:",typeof(P==null?void 0:P.status)),console.log("🔍 Tipo do status_code:",typeof(P==null?void 0:P.status_code)),P&&(P.status===!0||typeof P.status=="string"&&P.status==="true"||typeof P.status=="number"&&P.status===1||P.status_code===200||P.status_code==="200")){console.log("✅ Cadastro bem-sucedido detectado!"),console.log("🔍 Critério de sucesso usado:",{"response.status":P.status,"response.status_code":P.status_code,"typeof status":typeof P.status,"typeof status_code":typeof P.status_code});let N=null;if(P.usuario&&Array.isArray(P.usuario)&&P.usuario.length>0?(N=P.usuario[0],console.log("👤 Dados extraídos de response.usuario[0]:",N)):P.user?(N=P.user,console.log("👤 Dados extraídos de response.user:",N)):P.data?(N=P.data,console.log("👤 Dados extraídos de response.data:",N)):(N={nome:a.username,username:a.username,email:a.email,foto:null},console.log("👤 Usando dados do formulário como fallback:",N)),N)console.log("🚀 Fazendo login automático com:",N),L(N),setTimeout(()=>{console.log("🔒 Fechando popup de cadastro"),G(),console.log("✅ Fluxo de cadastro concluído com sucesso!")},100);else throw console.error("❌ Não foi possível extrair dados do usuário"),console.error("📋 Estrutura da resposta completa:",JSON.stringify(P,null,2)),new Error("Dados do usuário não encontrados na resposta do cadastro.")}else{console.error("❌ Cadastro falhou ou status inválido"),console.error("📋 Detalhes completos da resposta:",{status:P==null?void 0:P.status,status_code:P==null?void 0:P.status_code,message:P==null?void 0:P.message,usuario:P==null?void 0:P.usuario,fullResponse:P});let N=(P==null?void 0:P.message)||"Erro ao realizar cadastro. Tente novamente.";N.toLowerCase().includes("email")&&N.toLowerCase().includes("já")?N="Este email já está cadastrado. Use outro email.":N.toLowerCase().includes("usuário")&&N.toLowerCase().includes("já")?N="Este nome de usuário já está em uso. Escolha outro.":(N.toLowerCase().includes("duplicate")||N.toLowerCase().includes("duplicado"))&&(N="Email ou nome de usuário já cadastrado. Verifique os dados."),b(N)}}catch(P){console.error("💥 Erro no fluxo de cadastro:",P),console.error("📋 Detalhes do erro:",{message:P instanceof Error?P.message:"Erro desconhecido",stack:P instanceof Error?P.stack:null,formData:{...a,password:"***",confirmPassword:"***"}}),b(P instanceof Error?P.message:"Erro inesperado ao realizar cadastro.")}finally{v(!1)}},J=_=>{const P=_.length>=8,D=/[A-Z]/.test(_),N=/\d/.test(_),F=/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(_);return P&&D&&N&&F},X=async _=>{if(!(!_||!_.includes("@"))){m(!0),R(null);try{const P=await vE(_);R(P.exists),P.exists?console.log("❌ Email já cadastrado:",_):console.log("✅ Email disponível:",_)}catch(P){console.warn("⚠️ Erro na validação de email:",P),R(null)}finally{m(!1)}}},De=async _=>{if(!(!_||_.length<3)){k(!0),j(null);try{const P=await xE(_);j(P.exists),P.exists?console.log("❌ Username já cadastrado:",_):console.log("✅ Username disponível:",_)}catch(P){console.warn("⚠️ Erro na validação de username:",P),j(null)}finally{k(!1)}}},$=_=>{const{name:P,value:D}=_.target;l({...a,[P]:D}),P==="password"&&c(D===""?null:J(D)),P==="email"&&(R(null),setTimeout(()=>{a.email===D&&X(D)},1e3)),P==="username"&&(j(null),setTimeout(()=>{a.username===D&&De(D)},1e3))};return f.jsx(We,{children:e&&f.jsxs(f.Fragment,{children:[f.jsx(_E,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:G}),f.jsx(VE,{initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},transition:{duration:.4,ease:"easeOut"},children:f.jsxs("div",{children:[f.jsx($E,{onClick:G,children:f.jsx(ir,{})}),f.jsxs(BE,{children:[f.jsx(Pf,{className:"logo-icon"}),f.jsx("h2",{children:"GYM BUDDY"}),f.jsx("div",{className:"divider"})]}),f.jsx(UE,{children:"CADASTRAR-SE"}),f.jsxs(HE,{onSubmit:Z,children:[f.jsxs(vr,{children:[f.jsx(wr,{type:"text",name:"username",placeholder:"Crie um nome de usuário",value:a.username,onChange:$,required:!0,style:{borderColor:C===!0?"#ff4444":C===!1?"#44ff44":void 0}}),h&&f.jsx(xr,{style:{color:"#888"},children:"🔍 Verificando disponibilidade..."}),C===!0&&f.jsx(xr,{style:{color:"#ff4444"},children:"❌ Nome de usuário já está em uso"}),C===!1&&f.jsx(xr,{style:{color:"#44ff44"},children:"✅ Nome de usuário disponível"})]}),f.jsx(vr,{children:f.jsx(wr,{type:"text",name:"nickname",placeholder:"Crie um nickname",value:a.nickname,onChange:$,required:!0})}),f.jsxs(vr,{children:[f.jsx(wr,{type:"email",name:"email",placeholder:"Insira seu e-mail",value:a.email,onChange:$,required:!0,style:{borderColor:E===!0?"#ff4444":E===!1?"#44ff44":void 0}}),y&&f.jsx(xr,{style:{color:"#888"},children:"🔍 Verificando disponibilidade..."}),E===!0&&f.jsx(xr,{style:{color:"#ff4444"},children:"❌ Email já está cadastrado"}),E===!1&&f.jsx(xr,{style:{color:"#44ff44"},children:"✅ Email disponível"})]}),f.jsx(vr,{children:f.jsx(wr,{type:"email",name:"confirmEmail",placeholder:"Confirme o email",value:a.confirmEmail,onChange:$,required:!0})}),f.jsxs(vr,{children:[f.jsx(wr,{type:r?"text":"password",name:"password",placeholder:"Crie uma senha",value:a.password,onChange:$,required:!0,$isValid:u}),f.jsxs(WE,{initial:{scale:0,opacity:0},animate:{scale:u!==null?[0,1.2,.9,1.05,1]:0,opacity:u!==null?1:0,filter:u!==null?["blur(4px)","blur(0px)"]:"blur(4px)"},exit:{scale:0,opacity:0,filter:"blur(4px)"},transition:{type:"spring",stiffness:260,damping:20,duration:.6,filter:{duration:.3}},whileHover:{scale:1.1,transition:{duration:.2}},$isValid:u,onMouseEnter:()=>u===!1&&p(!0),onMouseLeave:()=>p(!1),children:[f.jsx(A.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:300,damping:15,delay:.1},style:{display:"flex",alignItems:"center",justifyContent:"center"},children:u===!0?f.jsx(jv,{}):f.jsx(ir,{})},u?"check":"x"),f.jsx(We,{children:d&&u===!1&&f.jsxs(GE,{initial:{opacity:0,scale:.7,y:15,filter:"blur(8px)",rotateX:-15},animate:{opacity:1,scale:1,y:0,filter:"blur(0px)",rotateX:0},exit:{opacity:0,scale:.85,y:8,filter:"blur(4px)",rotateX:10},transition:{duration:.4,ease:[.25,.46,.45,.94],opacity:{duration:.3},filter:{duration:.3},scale:{type:"spring",stiffness:300,damping:20}},children:[f.jsxs("div",{className:"tooltip-header",children:[f.jsx(ir,{className:"tooltip-icon"}),f.jsx("span",{children:"Senha inválida"})]}),f.jsxs(A.div,{className:"tooltip-content",initial:"hidden",animate:"visible",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.15}}},children:[f.jsxs(A.div,{className:"requirement",variants:{hidden:{opacity:0,x:-10},visible:{opacity:1,x:0,transition:{duration:.3,ease:"easeOut"}}},children:[f.jsx("span",{className:"bullet",children:"•"}),"Mínimo 8 caracteres"]}),f.jsxs(A.div,{className:"requirement",variants:{hidden:{opacity:0,x:-10},visible:{opacity:1,x:0,transition:{duration:.3,ease:"easeOut"}}},children:[f.jsx("span",{className:"bullet",children:"•"}),"1 letra maiúscula"]}),f.jsxs(A.div,{className:"requirement",variants:{hidden:{opacity:0,x:-10},visible:{opacity:1,x:0,transition:{duration:.3,ease:"easeOut"}}},children:[f.jsx("span",{className:"bullet",children:"•"}),"1 número"]}),f.jsxs(A.div,{className:"requirement",variants:{hidden:{opacity:0,x:-10},visible:{opacity:1,x:0,transition:{duration:.3,ease:"easeOut"}}},children:[f.jsx("span",{className:"bullet",children:"•"}),"1 caractere especial"]})]})]})})]}),f.jsx(Pm,{type:"button",onClick:()=>o(!r),children:r?f.jsx(Ic,{}):f.jsx(_c,{})})]}),f.jsxs(vr,{children:[f.jsx(wr,{type:i?"text":"password",name:"confirmPassword",placeholder:"Confirme a senha",value:a.confirmPassword,onChange:$,required:!0}),f.jsx(Pm,{type:"button",onClick:()=>s(!i),children:i?f.jsx(Ic,{}):f.jsx(_c,{})})]}),x&&f.jsx(YE,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},children:x}),f.jsx(KE,{type:"submit",disabled:g,whileHover:g?{}:{scale:1.02},whileTap:g?{}:{scale:.98},children:g?"Cadastrando...":"Cadastrar"})]}),f.jsxs(XE,{children:["Já possui uma conta? ",f.jsx(qE,{href:"#",onClick:_=>{_.preventDefault(),n()},children:"Fazer Login"})]})]})})]})})},_E=S(A.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 9998;
`,VE=S(A.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  pointer-events: none;
  
  > div {
    background: #0A0A0A;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1.6rem;
    padding: 3rem;
    width: 90%;
    max-width: 42rem;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    pointer-events: auto;
    position: relative;
  }
`,$E=S.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  border: none;
  color: var(--white);
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.2s ease;
  z-index: 10;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
  }
`,BE=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  
  .logo-icon {
    color: var(--primary);
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  
  h2 {
    color: var(--white);
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
  }
  
  .divider {
    width: 4rem;
    height: 2px;
    background: var(--primary);
  }
`,UE=S.h1`
  color: var(--white);
  font-size: 2.4rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: 0.05em;
`,HE=S.form`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`,vr=S.div`
  position: relative;
`,xr=S.div`
  font-size: 1.2rem;
  margin-top: 0.5rem;
  padding: 0.3rem 0;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,wr=S.input`
  width: 100%;
  background: transparent;
  border: 1px solid ${e=>e.$isValid===!0?"#10B981":e.$isValid===!1?"#EF4444":"rgba(255, 255, 255, 0.2)"};
  border-radius: 0.8rem;
  padding: 1.4rem ${e=>e.name==="password"||e.name==="confirmPassword"?"4.5rem":"1.6rem"} 1.4rem 1.6rem;
  color: var(--white);
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>e.$isValid===!0?"#10B981":e.$isValid===!1?"#EF4444":"var(--primary)"};
    box-shadow: 0 0 0 2px ${e=>e.$isValid===!0?"rgba(16, 185, 129, 0.2)":e.$isValid===!1?"rgba(239, 68, 68, 0.2)":"rgba(227, 6, 19, 0.2)"};
  }
`,WE=S(A.div)`
  position: absolute;
  left: -2.6rem;
  top: 30%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${e=>e.$isValid===!0?"rgba(16, 185, 129, 0.15)":e.$isValid===!1?"rgba(239, 68, 68, 0.15)":"transparent"};
  color: ${e=>e.$isValid===!0?"#10B981":e.$isValid===!1?"#EF4444":"transparent"};
  font-size: 1.2rem;
  font-weight: 700;
  z-index: 2;
  cursor: pointer;
  overflow: visible;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${e=>e.$isValid===!0?"#10B981":e.$isValid===!1?"#EF4444":"transparent"};
    opacity: 0;
    animation: ${e=>e.$isValid!==null?"pulse 2s infinite":"none"};
  }

  @keyframes pulse {
    0% {
      opacity: 0.3;
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(1.5);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(1.5);
    }
  }
`,Pm=S.button`
  position: absolute;
  right: 1.6rem;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.8rem;
  cursor: pointer;
  transition: color 0.2s ease;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  
  &:hover {
    color: var(--white);
  }
  
  svg {
    display: block;
  }
`,GE=S(A.div)`
  position: absolute;
  top: 50%;
  right: 120%;
  transform: translateY(-50%);
  background: linear-gradient(135deg, 
    rgba(227, 6, 19, 0.15) 0%, 
    rgba(139, 69, 19, 0.12) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
  backdrop-filter: blur(25px) saturate(180%);
  border: 1px solid rgba(227, 6, 19, 0.25);
  border-radius: 1.6rem;
  padding: 1.4rem 1.6rem;
  min-width: 24rem;
  box-shadow: 
    inset 0 1px 0 rgba(255, 255, 255, 0.15),
    inset 0 -1px 0 rgba(0, 0, 0, 0.2),
    0 12px 40px rgba(0, 0, 0, 0.3),
    0 6px 20px rgba(227, 6, 19, 0.15);
  z-index: 1000;
  pointer-events: none;
  overflow: hidden;

  /* Liquid glass shine effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.1), 
      transparent
    );
    animation: shine 3s ease-in-out infinite;
  }

  /* Seta do tooltip */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid rgba(227, 6, 19, 0.8);
    filter: drop-shadow(2px 0 4px rgba(0, 0, 0, 0.2));
  }

  @keyframes shine {
    0% { left: -100%; }
    50% { left: 100%; }
    100% { left: 100%; }
  }

  .tooltip-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(227, 6, 19, 0.3);
    background: linear-gradient(90deg, 
      rgba(227, 6, 19, 0.1) 0%, 
      rgba(227, 6, 19, 0.05) 100%
    );
    border-radius: 0.8rem;
    padding: 0.8rem 1rem;
    margin: -0.4rem -0.6rem 1.2rem -0.6rem;

    .tooltip-icon {
      color: rgba(227, 6, 19, 0.9);
      font-size: 1.6rem;
      background: rgba(227, 6, 19, 0.15);
      padding: 0.4rem;
      border-radius: 0.6rem;
      border: 1px solid rgba(227, 6, 19, 0.3);
    }

    span {
      color: var(--white);
      font-size: 1.4rem;
      font-weight: 700;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }
  }

  .tooltip-content {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .requirement {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.3rem;
    font-weight: 500;
    padding: 0.4rem 0;
    transition: all 0.2s ease;

    &:hover {
      color: rgba(255, 255, 255, 1);
      transform: translateX(2px);
    }

    .bullet {
      color: rgba(227, 6, 19, 0.8);
      font-weight: 900;
      font-size: 1.6rem;
      line-height: 1;
      text-shadow: 0 0 4px rgba(227, 6, 19, 0.4);
    }
  }
`,YE=S(A.div)`
  background: rgba(220, 38, 38, 0.1);
  border: 1px solid rgba(220, 38, 38, 0.3);
  border-radius: 0.8rem;
  padding: 1rem 1.5rem;
  color: #ef4444;
  font-size: 1.4rem;
  text-align: center;
  margin: 1rem 0;
`,KE=S(A.button)`
  background: ${e=>e.disabled?"rgba(227, 6, 19, 0.5)":"var(--primary)"};
  color: var(--white);
  border: none;
  border-radius: 2.5rem;
  padding: 1.4rem 2rem;
  font-size: 1.6rem;
  font-weight: 700;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  transition: all 0.3s ease;
  margin-top: 1rem;
  opacity: ${e=>e.disabled?.7:1};
  
  &:hover {
    background: ${e=>e.disabled?"rgba(227, 6, 19, 0.5)":"var(--primary-dark)"};
    box-shadow: ${e=>e.disabled?"none":"0 8px 24px rgba(227, 6, 19, 0.4)"};
  }
`,XE=S.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.4rem;
  text-align: center;
  margin-top: 2rem;
`,qE=S.a`
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`,Vc=({size:e=40,className:t})=>f.jsxs("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:t,children:[f.jsx("circle",{cx:"20",cy:"20",r:"20",fill:"#1A1A1A",stroke:"rgba(255, 255, 255, 0.2)",strokeWidth:"1"}),f.jsx("circle",{cx:"20",cy:"15",r:"6",fill:"rgba(255, 255, 255, 0.6)"}),f.jsx("path",{d:"M8 32C8 26.4772 12.4772 22 18 22H22C27.5228 22 32 26.4772 32 32V34C32 35.1046 31.1046 36 30 36H10C8.89543 36 8 35.1046 8 34V32Z",fill:"rgba(255, 255, 255, 0.6)"})]}),QE=()=>{const[e,t]=w.useState(!1),[n,r]=w.useState(()=>localStorage.getItem("theme")==="dark"),[o,i]=w.useState(!1),[s,a]=w.useState(!1),[l,u]=w.useState(!1),[c,d]=w.useState(!1),p=w.useRef(null),g=w.useRef(null),v=on(),{user:x,isLoggedIn:b,logout:y}=Vi(),m=()=>{i(!1),a(!0)},h=()=>{a(!1),i(!0)};w.useEffect(()=>{const L=()=>{const O=window.scrollY>10;O!==e&&t(O)};return window.addEventListener("scroll",L),()=>window.removeEventListener("scroll",L)},[e]),w.useEffect(()=>{document.documentElement.setAttribute("data-theme",n?"dark":"light"),localStorage.setItem("theme",n?"dark":"light")},[n]);const k=()=>{r(!n)},E=()=>{y(),u(!1),console.log("Usuário deslogado")},R=()=>{l||(p.current=setTimeout(()=>{d(!0)},2500))},C=()=>{p.current&&clearTimeout(p.current),d(!1)};w.useEffect(()=>{l&&(d(!1),p.current&&clearTimeout(p.current))},[l]),w.useEffect(()=>{const L=O=>{g.current&&!g.current.contains(O.target)&&u(!1)};if(l)return document.addEventListener("mousedown",L),()=>document.removeEventListener("mousedown",L)},[l]);const j=[{name:"Home",path:"/"},{name:"Sobre nós",path:"/sobre"},{name:"Recursos",path:"/recursos"},{name:"Aplicativo",path:"/app"}];return f.jsxs(ZE,{$scrolled:e,children:[f.jsxs("div",{className:"container",children:[f.jsx(JE,{children:f.jsx(e6,{src:Ta.logoSrc,alt:Ta.name})}),f.jsx(t6,{children:f.jsx(n6,{children:j.map(L=>f.jsx(r6,{children:f.jsxs(o6,{to:L.path,className:v.pathname===L.path?"active":"",children:[f.jsx(A.span,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.3,delay:.1},children:L.name}),v.pathname===L.path&&f.jsx(A.span,{className:"underline",layoutId:"underline",initial:{scaleX:0,opacity:0},animate:{scaleX:1,opacity:1},exit:{scaleX:0,opacity:0},transition:{type:"spring",stiffness:400,damping:30,duration:.6}}),f.jsx(A.div,{className:"nav-glow",initial:{opacity:0,scale:.8},animate:{opacity:v.pathname===L.path?1:0,scale:v.pathname===L.path?1:.8},transition:{duration:.4}})]})},L.path))})}),b?f.jsxs(u6,{ref:g,onMouseEnter:R,onMouseLeave:C,children:[f.jsxs($i,{onClick:()=>u(!l),whileHover:{scale:1.03,y:-3},whileTap:{scale:.97},transition:{duration:.3,ease:[.4,0,.2,1]},children:[f.jsxs(c6,{children:[x!=null&&x.foto?f.jsx(d6,{src:x.foto,alt:x.nome||"Usuário"}):f.jsx(Vc,{size:40}),f.jsx(f6,{})]}),f.jsx(p6,{children:f.jsx(h6,{children:(x==null?void 0:x.nome)||(x==null?void 0:x.username)||"Usuário"})})]}),f.jsx(We,{children:c&&!l&&f.jsxs(E6,{initial:{opacity:0,y:20,scale:.9,filter:"blur(10px)"},animate:{opacity:1,y:0,scale:1,filter:"blur(0px)"},exit:{opacity:0,y:10,scale:.95,filter:"blur(8px)"},transition:{duration:.4,ease:[.34,1.56,.64,1]},children:[f.jsxs(P6,{children:[x!=null&&x.foto?f.jsx(j6,{src:x.foto,alt:x.nome||"Usuário"}):f.jsx(T6,{children:f.jsx(Vc,{size:120})}),f.jsx(R6,{}),f.jsxs(A6,{children:[f.jsx(L6,{children:(x==null?void 0:x.nome)||(x==null?void 0:x.username)||"Usuário"}),f.jsx(z6,{children:(x==null?void 0:x.email)||"Membro ativo do GYM BUDDY focado em resultados."}),f.jsxs(O6,{children:[f.jsxs(jm,{children:[f.jsx(Ef,{style:{fontSize:"1.6rem"}}),f.jsx("span",{children:"312"})]}),f.jsxs(jm,{children:[f.jsx(co,{style:{fontSize:"1.6rem"}}),f.jsx("span",{children:"48"})]})]})]})]}),f.jsx(N6,{children:f.jsxs(D6,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>{d(!1)},children:["Seguir ",f.jsx("span",{style:{marginLeft:"0.4rem"},children:"+"})]})})]})}),f.jsx(We,{children:l&&f.jsxs(f.Fragment,{children:[f.jsx(v6,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},onClick:()=>u(!1)}),f.jsxs(m6,{initial:{opacity:0,y:-20,scale:.9,rotateX:-15,filter:"blur(10px)"},animate:{opacity:1,y:0,scale:1,rotateX:0,filter:"blur(0px)"},exit:{opacity:0,y:-15,scale:.95,rotateX:-10,filter:"blur(8px)"},transition:{duration:.4,ease:[.25,.46,.45,.94],filter:{duration:.3}},children:[f.jsx(x6,{}),f.jsx(g6,{children:f.jsx(w6,{children:f.jsxs(A.span,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.1},children:["Olá, ",(x==null?void 0:x.nome)||(x==null?void 0:x.username)||"Usuário","!"]})})}),f.jsx(y6,{}),f.jsxs(b6,{children:[f.jsxs(S6,{as:Ci,to:"/perfil",whileHover:{backgroundColor:"rgba(227, 6, 19, 0.15)",x:5,scale:1.02},whileTap:{scale:.98},transition:{duration:.2},onClick:()=>u(!1),children:[f.jsx(A.div,{whileHover:{rotate:15},transition:{duration:.2},children:f.jsx(_s,{})}),f.jsx("span",{children:"Ver perfil"}),f.jsx(Ov,{children:"→"})]}),f.jsxs(k6,{as:Ci,to:"/rede",whileHover:{backgroundColor:"rgba(227, 6, 19, 0.15)",x:5,scale:1.02},whileTap:{scale:.98},transition:{duration:.2},onClick:()=>u(!1),children:[f.jsx(A.div,{whileHover:{rotate:15},transition:{duration:.2},children:f.jsx(Tv,{})}),f.jsx("span",{children:"Acessar Rede GymBuddy"}),f.jsx(Nv,{children:"→"})]}),f.jsxs(C6,{onClick:E,whileHover:{backgroundColor:"rgba(220, 38, 38, 0.15)",x:5,scale:1.02},whileTap:{scale:.98},transition:{duration:.2},children:[f.jsx(A.div,{whileHover:{rotate:15},transition:{duration:.2},children:f.jsx(rE,{})}),f.jsx("span",{children:"Sair"}),f.jsx(zv,{children:"→"})]})]})]})]})})]}):f.jsxs(s6,{children:[f.jsx(a6,{onClick:()=>i(!0),children:"Login"}),f.jsx(l6,{onClick:()=>a(!0),children:"Cadastro"})]}),f.jsx(i6,{onClick:k,whileHover:{scale:1.1},whileTap:{scale:.95},$isDarkMode:n,children:f.jsx("div",{className:"icon-container",children:f.jsx(We,{mode:"wait",children:f.jsx(A.div,{className:"icon-wrapper",initial:{opacity:0,scale:.3,y:10,filter:"blur(4px)"},animate:{opacity:1,scale:1,y:0,filter:"blur(0px)"},exit:{opacity:0,scale:.3,y:-10,filter:"blur(4px)"},transition:{duration:.6,ease:[.25,.46,.45,.94],opacity:{duration:.4},scale:{duration:.5,ease:"backOut"},filter:{duration:.3}},children:n?f.jsx(iE,{className:"theme-icon moon"}):f.jsx(aE,{className:"theme-icon sun"})},n?"moon":"sun")})})})]}),f.jsx(EE,{estaAberto:o,aoFechar:()=>i(!1),aoTrocarParaCadastro:m}),f.jsx(jf,{isOpen:s,onClose:()=>a(!1),onSwitchToLogin:h})]})},ZE=S.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  height: ${({$scrolled:e})=>e?"6.4rem":"8rem"};
  transition: height 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
  background: ${({$scrolled:e})=>e?"rgba(10, 10, 10, 0.7)":"linear-gradient(180deg, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0) 100%)"};
  backdrop-filter: ${({$scrolled:e})=>e?"saturate(120%) blur(6px)":"none"};
  border-bottom: ${({$scrolled:e})=>e?"1px solid rgba(255,255,255,0.06)":"1px solid transparent"};
  box-shadow: ${({$scrolled:e})=>e?"0 4px 20px rgba(0,0,0,0.25)":"none"};
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding-left: 0; /* flush left for header only */
  }
`,JE=S.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--white);
  margin-left: 0;
  
  .icon {
    color: var(--primary);
    font-size: 2.8rem;
  }
`,e6=S.img`
  height: 17rem;
  width: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
  margin-top: 64px;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    height: 12rem;
  }
`,t6=S.nav`
  @media (max-width: 1024px) {
    display: none;
  }
`,n6=S.ul`
  display: flex;
  gap: 3.2rem;
`,r6=S.li``,o6=S(Ci)`
  position: relative;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--white);
  transition: all 0.3s ease;
  padding: 1rem 1.5rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border-radius: 1rem;
  overflow: hidden;
  
  &:hover {
    color: var(--primary);
    background: rgba(227, 6, 19, 0.1);
    transform: translateY(-2px);
  }
  
  &.active {
    color: var(--primary);
    background: rgba(227, 6, 19, 0.15);
  }
  
  .underline {
    position: absolute;
    bottom: -6px;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--primary), #ff4757);
    border-radius: 2px;
    transform-origin: left;
    box-shadow: 0 0 10px rgba(227, 6, 19, 0.5);
  }
  
  .nav-glow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at center,
      rgba(227, 6, 19, 0.2) 0%,
      transparent 70%
    );
    border-radius: inherit;
    pointer-events: none;
  }
`,i6=S(A.button)`
  background: ${({$isDarkMode:e})=>e?"linear-gradient(135deg, rgba(30, 30, 50, 0.8), rgba(50, 50, 80, 0.6))":"transparent"};
  border: ${({$isDarkMode:e})=>e?"1px solid rgba(255, 255, 255, 0.2)":"1px solid transparent"};
  cursor: pointer;
  padding: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  margin-left: 1.5rem;
  position: relative;
  overflow: hidden;
  width: 4.8rem;
  height: 4.8rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({$isDarkMode:e})=>e?"radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)":"radial-gradient(circle at center, rgba(255, 165, 0, 0.1) 0%, transparent 70%)"};
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: inherit;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  .icon-container {
    position: relative;
    width: 2.4rem;
    height: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .icon-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .theme-icon {
    width: 2.4rem;
    height: 2.4rem;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
  }
  
  .sun {
    color: #FFA500;
    filter: drop-shadow(0 0 8px rgba(255, 165, 0, 0.4));
    
    &:hover {
      filter: drop-shadow(0 0 12px rgba(255, 165, 0, 0.6));
    }
  }
  
  .moon {
    color: #FFFFFF;
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.4));
    animation: moon-glow 3s ease-in-out infinite alternate;
    
    &:hover {
      filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.6));
      transform: scale(1.1);
    }
  }
  
  &:hover {
    background: ${({$isDarkMode:e})=>e?"linear-gradient(135deg, rgba(40, 40, 70, 0.9), rgba(60, 60, 100, 0.7))":"rgba(255, 165, 0, 0.1)"};
    transform: translateY(-2px);
    box-shadow: ${({$isDarkMode:e})=>e?"0 8px 25px rgba(255, 255, 255, 0.15)":"0 8px 25px rgba(255, 165, 0, 0.25)"};
  }
  
  @keyframes moon-glow {
    0% { 
      filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.4));
    }
    100% { 
      filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.6));
    }
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`,s6=S.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`,Lv=S.button`
  height: 5rem;
  padding: 0 3rem;
  border-radius: 2.5rem;
  font-size: 1.6rem;
  font-weight: 700;
  transition: all 0.2s ease;
`,a6=S(Lv)`
  background: transparent;
  color: var(--white);
  border: 1px solid var(--primary);
  
  &:hover {
    background: rgba(255, 0, 0, 0.12);
  }
`,l6=S(Lv)`
  background: var(--primary);
  color: var(--white);
  border: 1px solid var(--primary);
  box-shadow: 0 8px 24px rgba(255,0,0,0.25);
  
  &:hover {
    background: var(--primary-dark);
    border-color: var(--primary-dark);
    box-shadow: 0 10px 28px rgba(255,0,0,0.32);
    transform: translateY(-1px);
  }
`,u6=S.div`
  position: relative;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`,$i=S(A.button)`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  padding: 0.6rem 2rem 0.6rem 0.6rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  
  /* Glassmorphism elegante */
  background: linear-gradient(135deg, 
    rgba(30, 30, 35, 0.8) 0%,
    rgba(20, 20, 25, 0.6) 100%
  );
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10rem;
  
  /* Sombras em camadas */
  box-shadow: 
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 8px 24px rgba(0, 0, 0, 0.2),
    0 4px 12px rgba(0, 0, 0, 0.15);
  
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Shine effect sutil */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.1), 
      transparent
    );
    transition: left 0.5s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, 
      rgba(35, 35, 40, 0.85) 0%,
      rgba(25, 25, 30, 0.7) 100%
    );
    border-color: rgba(227, 6, 19, 0.35);
    box-shadow: 
      inset 0 1px 0 rgba(255, 255, 255, 0.15),
      0 12px 32px rgba(0, 0, 0, 0.3),
      0 6px 16px rgba(227, 6, 19, 0.15),
      0 0 0 1px rgba(227, 6, 19, 0.2);
    
    &::before {
      left: 100%;
    }
  }
`,c6=S.div`
  position: relative;
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Borda gradiente animada */
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    padding: 2px;
    background: linear-gradient(135deg, 
      rgba(227, 6, 19, 0.5) 0%, 
      rgba(255, 100, 100, 0.3) 50%,
      rgba(255, 255, 255, 0.2) 100%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: all 0.3s ease;
  }
  
  ${$i}:hover &::before {
    opacity: 1;
    animation: rotate-border 3s linear infinite;
  }
  
  @keyframes rotate-border {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,d6=S.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
  border: 2px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
  
  ${$i}:hover & {
    border-color: rgba(227, 6, 19, 0.4);
    transform: scale(1.05);
  }
`,f6=S.div`
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(227, 6, 19, 0.4) 0%, transparent 70%);
  opacity: 0;
  filter: blur(16px);
  transition: all 0.4s ease;
  z-index: -1;
  
  ${$i}:hover & {
    opacity: 0.8;
    animation: glow-pulse 2s ease-in-out infinite;
  }
  
  @keyframes glow-pulse {
    0%, 100% {
      opacity: 0.6;
      filter: blur(16px);
    }
    50% {
      opacity: 1;
      filter: blur(20px);
    }
  }
`,p6=S.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,h6=S.span`
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.01em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  ${$i}:hover & {
    color: rgba(255, 255, 255, 1);
    text-shadow: 0 2px 12px rgba(227, 6, 19, 0.3);
    transform: translateX(2px);
  }
`,m6=S(A.div)`
  position: absolute;
  top: calc(100% + 1rem);
  right: 0;
  background: #0A0A0A;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.2rem;
  padding: 1rem 0;
  min-width: 20rem;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  z-index: 1000;
`,g6=S.div`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 0.5rem;
  
  span {
    color: var(--white);
    font-size: 1.4rem;
    font-weight: 600;
  }
`,y6=S.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 0.5rem 0;
  
  @keyframes pulse {
    0% { transform: scale(0.95); opacity: 0.2; }
    100% { transform: scale(1); opacity: 0.4; }
  }
`,v6=S(A.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
  z-index: 999;
`,x6=S.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(227, 6, 19, 0.6) 20%, 
    rgba(255, 70, 85, 0.8) 50%, 
    rgba(227, 6, 19, 0.6) 80%, 
    transparent 100%
  );
  animation: shine 3s ease-in-out infinite;
  
  @keyframes shine {
    0%, 100% { opacity: 0.5; transform: translateX(-100%); }
    50% { opacity: 1; transform: translateX(100%); }
  }
`,w6=S.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  
  span {
    background: linear-gradient(135deg, #E30613, #FF4655);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 600;
    font-size: 1.5rem;
  }
`,b6=S.div`
  padding: 0.5rem 0;
`,zv=S.span`
  margin-left: auto;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.2s ease;
  font-size: 1.2rem;
`,Ov=S.span`
  margin-left: auto;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.2s ease;
  font-size: 1.2rem;
`,S6=S(A.button)`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem 1.5rem;
  background: transparent;
  border: none;
  color: #E30613;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  text-decoration: none;
  
  &:hover {
    background: rgba(227, 6, 19, 0.1);
    
    ${Ov} {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  svg {
    font-size: 1.6rem;
  }
`,Nv=S.span`
  margin-left: auto;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.2s ease;
  font-size: 1.2rem;
`,k6=S(A.button)`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem 1.5rem;
  background: transparent;
  border: none;
  color: #E30613;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  text-decoration: none;
  
  &:hover {
    background: rgba(227, 6, 19, 0.1);
    
    ${Nv} {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  svg {
    font-size: 1.6rem;
  }
`,C6=S(A.button)`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem 1.5rem;
  background: transparent;
  border: none;
  color: #ef4444;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    background: rgba(220, 38, 38, 0.1);
    
    ${zv} {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  svg {
    font-size: 1.6rem;
  }
`,E6=S(A.div)`
  position: absolute;
  top: calc(100% + 1.5rem);
  right: 0;
  width: 34rem;
  border-radius: 3rem;
  overflow: hidden;
  z-index: 1001;
  
  /* Background escuro */
  background: rgba(20, 20, 25, 0.98);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 2px solid rgba(40, 40, 45, 0.8);
  
  /* Sombras profundas */
  box-shadow: 
    0 24px 64px rgba(0, 0, 0, 0.5),
    0 12px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
`,P6=S.div`
  position: relative;
  width: 100%;
  height: 42rem;
  overflow: hidden;
`,j6=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`,T6=S.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #2a2a2f, #1a1a1f);
  display: flex;
  align-items: center;
  justify-content: center;
`,R6=S.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70%;
  background: linear-gradient(to top, 
    rgba(0, 0, 0, 0.95) 0%,
    rgba(0, 0, 0, 0.7) 40%,
    rgba(0, 0, 0, 0.3) 70%,
    transparent 100%
  );
  pointer-events: none;
`,A6=S.div`
  position: absolute;
  bottom: 2.4rem;
  left: 2.4rem;
  right: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  z-index: 1;
`,L6=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  font-size: 2.8rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.8);
  text-align: center;
`;S.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #4CAF50, #45a049);
  color: white;
  font-size: 1.4rem;
  font-weight: 900;
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.4);
  animation: badge-pop 2s ease-in-out infinite;
  
  @keyframes badge-pop {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;const z6=S.p`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  margin: 0;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.8);
  text-align: center;
`,O6=S.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`,jm=S.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.6rem;
  font-weight: 600;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.8);
  
  svg {
    opacity: 0.9;
  }
`,N6=S.div`
  padding: 2rem 2.4rem;
  background: rgba(0, 0, 0, 0.3);
`,D6=S(A.button)`
  width: 100%;
  padding: 1.4rem 2rem;
  background: rgba(230, 230, 235, 0.95);
  border: none;
  border-radius: 5rem;
  color: rgba(20, 20, 25, 1);
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
`,M6=()=>{const[e,t]=w.useState(()=>new URLSearchParams(window.location.search).get("grid")==="1");return w.useEffect(()=>{const n=r=>{r.key&&r.key.toLowerCase()==="g"&&t(o=>!o)};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[]),e?f.jsx(F6,{role:"presentation","aria-hidden":!0,children:f.jsx("div",{className:"container",children:f.jsx(I6,{children:Array.from({length:12}).map((n,r)=>f.jsx(_6,{},r))})})}):null},F6=S.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
  pointer-events: none;
  background: repeating-linear-gradient(
    0deg,
    rgba(255, 0, 0, 0.03),
    rgba(255, 0, 0, 0.03) 8px,
    rgba(255, 0, 0, 0.06) 8px,
    rgba(255, 0, 0, 0.06) 16px
  );
`,I6=S.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: var(--gutter);
`,_6=S.div`
  background: rgba(255, 0, 0, 0.08);
  height: 100%;
`,br=({text:e,speed:t=50,scrambleSpeed:n=30,delay:r=0,characters:o="0123456789%+kK"})=>{const[i,s]=w.useState(""),[a,l]=w.useState(!1);return w.useEffect(()=>{s(""),l(!1);const u=setTimeout(()=>{let c=0,d;const p=()=>{if(c<=e.length){const x=e.slice(0,c),b=Math.max(0,e.length-c);let y="";for(let m=0;m<b;m++){const h=o[Math.floor(Math.random()*o.length)];y+=h}s(x+y),c++,c>e.length&&(clearInterval(d),s(e),l(!0))}};let g="";for(let x=0;x<e.length;x++)g+=o[Math.floor(Math.random()*o.length)];s(g);const v=setInterval(()=>{const x=e.slice(0,c),b=Math.max(0,e.length-c);let y="";for(let m=0;m<b;m++){const h=o[Math.floor(Math.random()*o.length)];y+=h}c<e.length&&s(x+y)},n);return d=setInterval(p,t),()=>{clearInterval(d),clearInterval(v)}},r);return()=>clearTimeout(u)},[e,t,n,r,o]),{displayText:i,isComplete:a}},V6=({card:e,icon:t,index:n,totalCards:r})=>{const[o,i]=w.useState(!1),[s,a]=w.useState(0),l=br({text:e.stat,speed:50,scrambleSpeed:30,delay:o?400:9999999,characters:"0123456789%+kK/"}),u=br({text:e.title,speed:40,scrambleSpeed:25,delay:o?500:9999999,characters:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz "}),c=br({text:e.category,speed:35,scrambleSpeed:20,delay:o?600:9999999,characters:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"});w.useEffect(()=>{if(!o)return;const y=()=>{const h=Math.random()*12e3+8e3;return setTimeout(()=>{Math.random()<1/r&&a(R=>R+1),y()},h)},m=y();return()=>clearTimeout(m)},[o,r]);const d=br({text:e.stat,speed:50,scrambleSpeed:30,delay:0,characters:"0123456789%+kK/"}),p=br({text:e.title,speed:40,scrambleSpeed:25,delay:100,characters:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz "}),g=br({text:e.category,speed:35,scrambleSpeed:20,delay:200,characters:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"}),v=s>0&&!d.isComplete?d.displayText:l.displayText||e.stat,x=s>0&&!p.isComplete?p.displayText:u.displayText||e.title,b=s>0&&!g.isComplete?g.displayText:c.displayText||e.category;return f.jsx(Y6,{className:e.position,style:{"--rot":`${e.rotate||0}deg`,"--dur":`${6+n%5*.3}s`,zIndex:e.zIndex},initial:{opacity:0,y:60,scale:.7,rotateX:-20,rotateY:10},animate:{opacity:1,y:0,scale:1,rotateX:0,rotateY:0},transition:{duration:.8,delay:n*.2,ease:[.34,1.56,.64,1]},onAnimationComplete:()=>i(!0),whileHover:{scale:1.15,rotate:0,z:50,transition:{duration:.5,ease:[.34,1.56,.64,1]}},whileTap:{scale:.98},children:f.jsxs(K6,{children:[f.jsxs("div",{className:"card-header",children:[f.jsx(A.div,{className:"card-icon",initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{delay:n*.2+.2,duration:.4,ease:[.34,1.56,.64,1]},children:f.jsx(t,{})}),f.jsx(A.span,{className:"category",initial:{opacity:0},animate:{opacity:1},transition:{delay:n*.2+.4,duration:.3},children:b})]}),f.jsxs("div",{className:"card-main",children:[f.jsx(A.div,{className:"card-stat",initial:{opacity:0},animate:{opacity:1},transition:{delay:n*.2+.3,duration:.3},children:v}),f.jsx(A.h3,{className:"card-title",initial:{opacity:0},animate:{opacity:1},transition:{delay:n*.2+.35,duration:.3},children:x})]}),f.jsx("div",{className:"card-footer",children:f.jsxs("div",{className:"card-indicators",children:[f.jsx(Rv,{className:"indicator-icon"}),f.jsx(JC,{className:"indicator-icon"})]})})]})})},$6=({onOpenSignup:e})=>{const{isLoggedIn:t}=Vi(),n=Xd(),r=Ta.floatingCards,o={progress:Cf,users:Ef,workouts:co,ai:uE},i=()=>{n("/network")};return f.jsx(B6,{children:f.jsx("div",{className:"container",children:f.jsxs(U6,{children:[f.jsx(H6,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.9,ease:"easeOut"},children:f.jsxs("h1",{children:[f.jsxs("span",{className:"line no-wrap",children:["O SEU ",f.jsx("span",{className:"highlight",children:"PARCEIRO"})," DA ACADEMIA"]}),f.jsx("br",{className:"title-break"}),f.jsx("span",{className:"line no-wrap",children:"PRONTO PARA A AÇÃO"})]})}),f.jsxs(W6,{as:A.div,initial:{opacity:0,x:40},animate:{opacity:1,x:0},transition:{duration:1.2,ease:"easeOut"},children:[f.jsx("img",{src:Ta.heroSrc,alt:"Homem musculoso",className:"hero-image",onError:s=>{const a=s.currentTarget;a.src.endsWith("/hero-image.png")||(a.src="/hero-image.png")}}),f.jsx(G6,{children:f.jsx(We,{children:r.map((s,a)=>{const l=o[s.id];return f.jsx(V6,{card:s,icon:l,index:a,totalCards:r.length},s.id)})})})]}),f.jsx(We,{mode:"wait",children:t?f.jsxs(q6,{initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},transition:{duration:.5,delay:.3},onClick:i,whileHover:{scale:1.05},whileTap:{scale:.95},children:[f.jsx(A.div,{className:"icon-wrapper",animate:{rotate:[0,360],scale:[1,1.1,1]},transition:{duration:3,repeat:1/0,ease:"linear"},children:f.jsx(nE,{})}),f.jsxs("div",{className:"content",children:[f.jsx("span",{className:"label",children:"Acessar Rede"}),f.jsx("span",{className:"sublabel",children:"GYM BUDDY"})]}),f.jsx(A.div,{className:"user-icon",animate:{y:[0,-2,0]},transition:{duration:2,repeat:1/0,ease:"easeInOut"},children:f.jsx(lE,{})})]},"network-btn"):f.jsxs(X6,{initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},transition:{duration:.5,delay:.5},onClick:e,children:[f.jsx("span",{className:"label",children:"Vamos começar"}),f.jsxs("span",{className:"arrows","aria-hidden":"true",children:[f.jsx(du,{className:"a1"}),f.jsx(du,{className:"a2"}),f.jsx(du,{className:"a3"})]})]},"signup-btn")})]})})})},B6=S.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 12rem 0 6rem;
  position: relative;
  overflow: hidden;
  
  /* Modern mesh gradient background */
  background: 
    radial-gradient(at 0% 0%, rgba(227, 6, 19, 0.15) 0px, transparent 50%),
    radial-gradient(at 100% 0%, rgba(20, 20, 25, 1) 0px, transparent 50%),
    radial-gradient(at 100% 100%, rgba(227, 6, 19, 0.12) 0px, transparent 50%),
    radial-gradient(at 0% 100%, rgba(15, 15, 20, 1) 0px, transparent 50%),
    linear-gradient(180deg, #080808 0%, #0D0D0D 50%, #121212 100%);
  
  /* Camada de grid sutil para efeito tech */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(227, 6, 19, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(227, 6, 19, 0.03) 1px, transparent 1px);
    background-size: 100px 100px;
    opacity: 0.3;
    pointer-events: none;
    z-index: 1;
    mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%);
  }
  
  /* Glow effect sutil no centro */
  &::after {
    content: '';
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(227, 6, 19, 0.08) 0%, transparent 70%);
    filter: blur(80px);
    pointer-events: none;
    z-index: 1;
    animation: pulse-glow 8s ease-in-out infinite;
  }
  
  @keyframes pulse-glow {
    0%, 100% {
      opacity: 0.4;
      transform: translateX(-50%) scale(1);
    }
    50% {
      opacity: 0.6;
      transform: translateX(-50%) scale(1.1);
    }
  }
`,U6=S.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: flex-start; // Muda de center para flex-start para melhor controle
  column-gap: var(--gutter);
  row-gap: 0; // Remove o gap entre linhas
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
    text-align: center;
    align-items: center;
  }
`,H6=S(A.div)`
  grid-column: 2 / span 5;
  max-width: 64rem;
  margin-top: 1rem; // Sobe o texto mais ainda
  position: relative;
  z-index: 1; // Garante que o texto fique atrás da imagem

  @media (max-width: 1024px) {
    grid-column: 1 / -1;
    justify-self: center;
    margin-top: 0.5rem;
  }

  h1 {
    font-size: clamp(3.2rem, 5vw, 6.4rem);
    font-weight: 800;
    line-height: 1.08;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    margin-bottom: 3.2rem;
    color: var(--white);

    .highlight {
      color: var(--primary);
      position: relative;
      display: inline-block;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 5px;
        left: 0;
        width: 100%;
        height: 10px;
        background: rgba(227, 6, 19, 0.2);
        z-index: -1;
      }
    }

    .line { display: inline-block; }
    .line.no-wrap { white-space: nowrap; }

    @media (max-width: 1024px) {
      margin-bottom: 2.4rem;
    }
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--primary);
    color: var(--white);
    font-size: 1.8rem;
    font-weight: 700;
    height: 5.6rem;
    padding: 0 3.2rem;
    border-radius: 2.8rem;
    cursor: pointer;
    transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease;
    box-shadow: 0 10px 30px rgba(255, 0, 0, 0.25);
    letter-spacing: 0.01em;

    &:hover {
      background: var(--primary-dark);
      transform: translateY(-2px) scale(1.05);
      filter: brightness(1.08);
      box-shadow: 0 18px 44px rgba(227, 6, 19, 0.4);
    }
  }
`,W6=S.div`
  position: relative;
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 72vh;
  justify-self: center;
  width: 100%;
  margin-top: -10rem; // Aumenta a sobreposição da imagem sobre o texto
  z-index: 3; // Garante que a imagem fique sobre o texto
  
  @media (max-width: 1024px) {
    margin-top: -4rem; // Menos sobreposição em mobile
  }

  &::before {
    content: '';
    position: absolute;
    inset: auto 0 0 0;
    margin: auto;
    width: clamp(40rem, 46vw, 72rem);
    height: clamp(40rem, 46vw, 72rem);
    background: radial-gradient(50% 50% at 50% 50%, rgba(255,0,0,0.25) 0%, rgba(255,0,0,0.1) 40%, rgba(255,0,0,0) 70%);
    filter: blur(6px);
    z-index: 0;
    transform: translateY(10%);
    pointer-events: none;
  }

  .hero-image {
    width: clamp(40rem, 42vw, 64rem);
    height: auto;
    max-height: 78vh;
    object-fit: contain;
    z-index: 10; // Aumenta o z-index para garantir sobreposição
    position: relative;
    animation: float 6s ease-in-out infinite;
    filter: drop-shadow(0 20px 40px rgba(0,0,0,0.45));
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
`,G6=S(A.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
`,Y6=S(A.div)`
  position: absolute;
  animation: card-bob var(--dur, 6s) ease-in-out infinite;
  will-change: transform;
  cursor: pointer;
  perspective: 1000px;
  transform-style: preserve-3d;

  /* Liquid Glass Design */
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.1) 0%, 
    rgba(255, 255, 255, 0.05) 50%,
    rgba(227, 6, 19, 0.1) 100%
  );
  backdrop-filter: blur(25px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 2rem;
  padding: 2rem 2.4rem;
  min-width: 24rem;
  max-width: 28rem;
  min-height: 20rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--white);
  text-align: left;
  pointer-events: auto;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.2),
    inset 0 -1px 0 rgba(0,0,0,0.1),
    0 8px 32px rgba(0,0,0,0.12),
    0 4px 16px rgba(227, 6, 19, 0.1);
  z-index: 2;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.2), 
      transparent
    );
    transition: left 0.6s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    background: linear-gradient(135deg, 
      rgba(255,255,255,0.1) 0%, 
      rgba(255,255,255,0.05) 40%, 
      rgba(255,255,255,0) 60%
    );
    opacity: 0.8;
  }

  &.top-left {
    top: 8%;
    left: -8rem;
  }

  &.bottom-left {
    bottom: 15%;
    left: -6rem;
  }

  &.top-right {
    top: 12%;
    right: -8rem;
  }

  &.bottom-right {
    bottom: 8%;
    right: -6rem;
  }

  &.center-back {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(var(--rot, 0deg));
  }

  @media (max-width: 768px) {
    padding: 1.6rem 1.4rem;
    font-size: 1.1rem;
    min-width: 18rem;
    max-width: 22rem;
    min-height: 18rem;
    
    &.top-left, &.bottom-left, &.top-right, &.bottom-right {
      position: static;
      margin: 1rem 0;
      display: inline-block;
    }
  }
  
  @keyframes card-bob {
    0%, 100% { transform: translateY(0) rotate(var(--rot, 0deg)); }
    50% { transform: translateY(-12px) rotate(var(--rot, 0deg)); }
  }
  
  &:hover {
    animation-play-state: paused;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.2) 0%, 
      rgba(255, 255, 255, 0.12) 50%,
      rgba(227, 6, 19, 0.2) 100%
    );
    border-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(30px) saturate(200%);
    box-shadow:
      inset 0 2px 0 rgba(255,255,255,0.4),
      inset 0 -1px 0 rgba(0,0,0,0.15),
      0 24px 64px rgba(0,0,0,0.3),
      0 12px 32px rgba(227, 6, 19, 0.3),
      0 0 0 1px rgba(227, 6, 19, 0.2);
    
    &::before {
      left: 100%;
    }
  }
`,K6=S(A.div)`
  pointer-events: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.2rem;
  }
  
  .card-icon {
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 1rem;
    background: linear-gradient(135deg, 
      rgba(227, 6, 19, 0.2) 0%, 
      rgba(227, 6, 19, 0.1) 100%
    );
    border: 1px solid rgba(227, 6, 19, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(227, 6, 19, 0.9);
    font-size: 1.6rem;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  
  .category {
    font-size: 0.9rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.8);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background: rgba(255, 255, 255, 0.08);
    padding: 0.3rem 0.8rem;
    border-radius: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.15);
  }
  
  .card-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
  }
  
  .card-stat {
    font-size: 3.8rem;
    font-weight: 900;
    color: var(--white);
    line-height: 0.9;
    text-shadow: 0 2px 8px rgba(0,0,0,0.3);
    margin-bottom: 0.8rem;
    background: linear-gradient(135deg, #ffffff 0%, rgba(227, 6, 19, 0.8) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  
  .card-title {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 0.5rem;
    line-height: 1.3;
    text-shadow: 0 1px 4px rgba(0,0,0,0.3);
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  
  .card-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: auto;
  }
  
  .card-indicators {
    display: flex;
    gap: 0.8rem;
  }
  
  .indicator-icon {
    width: 1.6rem;
    height: 1.6rem;
    color: rgba(255, 255, 255, 0.6);
    transition: all 0.3s ease;
    
    &:hover {
      color: rgba(227, 6, 19, 0.8);
      transform: scale(1.2);
    }
  }
  
  /* Hover effects */
  &:hover .card-icon {
    background: linear-gradient(135deg, 
      rgba(227, 6, 19, 0.4) 0%, 
      rgba(227, 6, 19, 0.3) 100%
    );
    border-color: rgba(227, 6, 19, 0.6);
    color: rgba(227, 6, 19, 1);
    transform: scale(1.2) rotate(8deg);
    box-shadow: 0 8px 24px rgba(227, 6, 19, 0.4);
  }
  
  &:hover .card-stat {
    transform: scale(1.05);
    text-shadow: 0 4px 16px rgba(227, 6, 19, 0.5);
  }
  
  &:hover .card-title {
    transform: translateX(4px);
    color: rgba(255, 255, 255, 1);
  }
`,X6=S(A.button)`
  position: fixed;
  right: clamp(1.6rem, 2.5vw, 3.2rem);
  bottom: clamp(6rem, 8vw, 8rem); // Sobe o botão mais ainda
  z-index: 1500;
  --arrow-size: 18px;
  background: var(--primary);
  color: var(--white);
  font-weight: 800;
  font-size: 1.6rem;
  border: none;
  border-radius: 25px;
  height: auto;
  padding: 12px 32px;
  box-shadow: 0 12px 28px rgba(227, 6, 19, 0.35);
  letter-spacing: 0.02em;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease-in-out;
  overflow: hidden; /* Para evitar que as setas extrapolem o botão */
  
  .arrows {
    display: inline-block;
    position: relative;
    width: calc(var(--arrow-size) * 2.5); /* Largura maior para acomodar as setas separadas */
    height: var(--arrow-size);
    margin-left: 8px;
  }
  
  .arrows .a1,
  .arrows .a2,
  .arrows .a3 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: var(--arrow-size);
    height: var(--arrow-size);
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  
  /* Estado inicial: setas unidas com leve animação */
  .arrows .a1 { 
    left: 0;
    opacity: 0.6;
    animation: pulse-arrow 2s ease-in-out infinite;
  }
  .arrows .a2 { 
    left: 1px; /* Leve deslocamento para criar profundidade */
    opacity: 0.8;
    animation: pulse-arrow 2s ease-in-out infinite 0.1s;
  }
  .arrows .a3 { 
    left: 2px; /* Leve deslocamento para criar profundidade */
    opacity: 1;
    animation: pulse-arrow 2s ease-in-out infinite 0.2s;
  }
  
  @keyframes pulse-arrow {
    0%, 100% {
      transform: translateY(-50%) translateX(0);
    }
    50% {
      transform: translateY(-50%) translateX(2px);
    }
  }
  
  &:hover {
    background: var(--primary-dark);
    transform: scale(1.05);
    filter: brightness(1.2);
    box-shadow: 0 0 20px rgba(227, 6, 19, 0.6);
    
    /* Separação das setas no hover com posicionamento correto */
    .arrows .a1 { 
      left: 0;
      opacity: 1;
      animation: none; /* Para a animação */
      transform: translateY(-50%); /* Mantém centralizado */
      transition-delay: 0s;
    }
    .arrows .a2 { 
      left: calc(var(--arrow-size) * 0.7); /* Espaçamento ajustado */
      opacity: 1;
      animation: none; /* Para a animação */
      transform: translateY(-50%); /* Mantém centralizado */
      transition-delay: 0.05s;
    }
    .arrows .a3 { 
      left: calc(var(--arrow-size) * 1.4); /* Espaçamento ajustado */
      opacity: 1;
      animation: none; /* Para a animação */
      transform: translateY(-50%); /* Mantém centralizado */
      transition-delay: 0.1s;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
    padding: 10px 20px;
  }
`,q6=S(A.button)`
  position: fixed;
  right: clamp(1.6rem, 2.5vw, 3.2rem);
  bottom: clamp(6rem, 8vw, 8rem);
  z-index: 1500;
  background: linear-gradient(135deg, 
    rgba(227, 6, 19, 0.9) 0%, 
    rgba(227, 6, 19, 1) 50%,
    rgba(180, 5, 15, 1) 100%
  );
  color: var(--white);
  border: none;
  border-radius: 20px;
  padding: 16px 24px;
  box-shadow: 
    0 12px 28px rgba(227, 6, 19, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  min-width: 200px;
  
  .icon-wrapper {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .content {
    flex: 1;
    text-align: left;
    
    .label {
      display: block;
      font-weight: 700;
      font-size: 14px;
      line-height: 1.2;
      letter-spacing: 0.02em;
    }
    
    .sublabel {
      display: block;
      font-weight: 600;
      font-size: 11px;
      opacity: 0.8;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-top: 2px;
    }
  }
  
  .user-icon {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  
  &:hover {
    background: linear-gradient(135deg, 
      rgba(227, 6, 19, 1) 0%, 
      rgba(250, 7, 20, 1) 50%,
      rgba(200, 5, 16, 1) 100%
    );
    box-shadow: 
      0 20px 40px rgba(227, 6, 19, 0.6),
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    
    .icon-wrapper {
      background: rgba(255, 255, 255, 0.25);
      border-color: rgba(255, 255, 255, 0.4);
    }
    
    .user-icon {
      background: rgba(255, 255, 255, 0.3);
      border-color: rgba(255, 255, 255, 0.5);
    }
  }
  
  @media (max-width: 480px) {
    min-width: 180px;
    padding: 14px 20px;
    
    .content .label {
      font-size: 13px;
    }
    
    .content .sublabel {
      font-size: 10px;
    }
  }
`,Q6=()=>{const[e,t]=w.useState(!1),n=()=>{t(!0)},r=()=>{t(!1)};return f.jsxs(f.Fragment,{children:[f.jsx(A.main,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:f.jsx($6,{onOpenSignup:n})}),f.jsx(jf,{isOpen:e,onClose:r,onSwitchToLogin:()=>{}})]})},Z6=()=>{const e=w.useRef(null),[t,n]=w.useState(!1),[r,o]=w.useState({x:0,y:0});XC();const{scrollYProgress:i}=Cv({target:e,offset:["start end","end start"]}),s=zt(i,[0,1],[100,-100]),a=zt(i,[0,1],[-5,5]),l=zt(i,[0,.5,1],[.8,1.1,.8]);zt(i,[0,1],[0,-50]),w.useEffect(()=>{const p=g=>{o({x:(g.clientX/window.innerWidth-.5)*20,y:(g.clientY/window.innerHeight-.5)*20})};return window.addEventListener("mousemove",p),()=>window.removeEventListener("mousemove",p)},[]);const u=()=>{n(!1)},c=[{icon:Pf,text:"Mais do que um site, um verdadeiro parceiro de treino.",gradient:"linear-gradient(135deg, #E30613 0%, #ff4757 100%)"},{icon:pE,text:"Nada de planos genéricos, tenha uma experiência personalizada.",gradient:"linear-gradient(135deg, #ff6348 0%, #E30613 100%)"},{icon:mE,text:"Com a ajuda de nosso agente IA, nada é impossível.",gradient:"linear-gradient(135deg, #E30613 0%, #ff7979 100%)"},{icon:hE,text:"Treinar não precisa ser difícil. Seja bem-vindo ao Gym Buddy!",gradient:"linear-gradient(135deg, #ff4757 0%, #E30613 100%)"}],d={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut"}}};return f.jsxs(J6,{ref:e,children:[f.jsxs(eP,{children:[f.jsx(LP,{}),f.jsxs(A.div,{variants:d,initial:"hidden",animate:"visible",children:[f.jsxs(tP,{children:[f.jsx(A.span,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:"Podemos ajudar você a"})," ",f.jsx(nP,{children:f.jsx(A.span,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.3,ease:"easeOut"},children:"cumprir todas as suas metas"})})]}),f.jsx(A.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.6,duration:.8},children:f.jsx(rP,{children:"Faça parte desse projeto hoje mesmo!"})})]})]}),f.jsx(oP,{children:f.jsx(iP,{children:f.jsxs(sP,{initial:{opacity:0,y:100},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,ease:"easeOut"},children:[f.jsx(aP,{style:{y:s,rotate:a,scale:l},children:f.jsx("img",{src:"/images/muscular-man.png",alt:"Homem musculoso treinando"})}),f.jsxs(lP,{children:[f.jsxs(uP,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6,delay:.2},children:[f.jsx(cP,{children:"SOBRE NÓS"}),f.jsx(dP,{children:"Transforme seu corpo e mente"})]}),f.jsx(fP,{children:c.map((p,g)=>{const v=p.icon;return f.jsx(A.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6,delay:.3+g*.1,ease:"easeOut"},whileHover:{x:10,scale:1.02},children:f.jsxs(dl,{whileHover:{boxShadow:"0 20px 40px rgba(227, 6, 19, 0.2)"},children:[f.jsxs(pP,{gradient:p.gradient,children:[f.jsx(A.div,{animate:{rotate:[0,5,-5,0]},transition:{duration:4,repeat:1/0,delay:g*.5},children:f.jsx(v,{})}),f.jsx(hP,{}),f.jsx(gP,{})]}),f.jsxs(yP,{children:[f.jsx(vP,{children:p.text}),f.jsx(xP,{gradient:p.gradient})]})]})},g)})}),f.jsx(Tm,{className:"float-1",animate:{y:[-20,20,-20],x:[-10,10,-10]},transition:{duration:6,repeat:1/0,ease:"easeInOut"}}),f.jsx(Tm,{className:"float-2",animate:{y:[20,-20,20],x:[10,-10,10]},transition:{duration:8,repeat:1/0,ease:"easeInOut"}})]})]})})}),f.jsx(wP,{children:f.jsx(A.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.6,delay:1},children:f.jsxs(bP,{children:["Torne-se já um membro! Acesse ou crie sua conta na"," ",f.jsxs(SP,{onClick:()=>n(!0),whileHover:{scale:1.05},whileTap:{scale:.95},children:["GymBuddy",f.jsx(CP,{})]})]})})}),f.jsx(jf,{isOpen:t,onClose:()=>n(!1),onSwitchToLogin:u}),f.jsxs(PP,{children:[f.jsx(TP,{}),f.jsx(RP,{style:{x:r.x,y:r.y}})]})]})},J6=S.div`
  min-height: 100vh;
  background: var(--background);
  color: var(--white);
  padding-top: 8rem;
  position: relative;
  overflow: hidden;
`,eP=S.section`
  text-align: center;
  padding: 4rem 2rem 6rem;
  max-width: 120rem;
  margin: 0 auto;
  position: relative;
`,tP=S.h1`
  font-size: clamp(3rem, 5vw, 5.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 2rem;
  color: var(--white);
  letter-spacing: -0.02em;
`,nP=S.span`
  background: linear-gradient(135deg, #E30613 0%, #ff4757 50%, #ff6348 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
`,rP=S.p`
  font-size: clamp(1.6rem, 2.5vw, 2rem);
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  max-width: 60rem;
  margin: 0 auto;
`,oP=S.section`
  padding: 6rem 2rem;
  position: relative;
  z-index: 1;
`,iP=S.div`
  max-width: 120rem;
  margin: 0 auto;
`,sP=S(A.div)`
  position: relative;
  background: rgba(17, 17, 17, 0.95);
  backdrop-filter: blur(30px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 3rem;
  overflow: hidden;
  box-shadow: 
    0 30px 60px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 0 80px rgba(227, 6, 19, 0.1);
`,aP=S(A.div)`
  position: absolute;
  top: -10%;
  right: -10%;
  width: 70%;
  height: 120%;
  opacity: 0.15;
  z-index: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) contrast(1.2);
    mask-image: linear-gradient(
      to left,
      rgba(0,0,0,1) 0%,
      rgba(0,0,0,0.8) 30%,
      rgba(0,0,0,0.3) 60%,
      transparent 100%
    );
  }

  @media (max-width: 768px) {
    width: 100%;
    right: 0;
    opacity: 0.08;
  }
`,lP=S.div`
  position: relative;
  z-index: 1;
  padding: 5rem;

  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
`,uP=S(A.div)`
  margin-bottom: 4rem;
`,cP=S.div`
  display: inline-block;
  color: var(--primary);
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 1rem;
  padding: 0.5rem 1.5rem;
  background: rgba(227, 6, 19, 0.1);
  border-radius: 2rem;
  border: 1px solid rgba(227, 6, 19, 0.3);
`,dP=S.h2`
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 800;
  color: var(--white);
  line-height: 1.2;
  margin: 0;
`,fP=S.div`
  display: grid;
  gap: 2.5rem;
  max-width: 60rem;
`,dl=S(A.div)`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(227, 6, 19, 0.3);
    box-shadow: 0 10px 30px rgba(227, 6, 19, 0.1);
  }
`,pP=S.div`
  position: relative;
  width: 5rem;
  height: 5rem;
  background: ${e=>e.gradient};
  border-radius: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 2.2rem;
  flex-shrink: 0;
  box-shadow: 0 10px 25px rgba(227, 6, 19, 0.3);
  transition: all 0.3s ease;

  ${dl}:hover & {
    transform: rotate(5deg) scale(1.1);
  }
`,hP=S.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${dl}:hover & {
    opacity: 1;
  }
`,mP=nn`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
`,gP=S.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid var(--primary);
    border-radius: inherit;
    animation: ${mP} 3s ease-out infinite;
  }
`,yP=S.div`
  flex: 1;
`,vP=S.p`
  font-size: 1.7rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
  margin: 0;
`,xP=S.div`
  width: 0;
  height: 2px;
  background: ${e=>e.gradient};
  margin-top: 1rem;
  transition: width 0.3s ease;
  border-radius: 1px;

  ${dl}:hover & {
    width: 100%;
  }
`,Tm=S(A.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(227, 6, 19, 0.15) 0%,
    transparent 70%
  );
  filter: blur(40px);
  pointer-events: none;

  &.float-1 {
    top: 10%;
    left: -10%;
  }

  &.float-2 {
    bottom: 10%;
    right: -10%;
  }
`,wP=S.section`
  text-align: center;
  padding: 6rem 2rem 8rem;
  max-width: 80rem;
  margin: 0 auto;
`,bP=S.h2`
  font-size: clamp(2.4rem, 4vw, 3.6rem);
  font-weight: 700;
  line-height: 1.3;
  color: var(--white);
  margin: 0;
`,SP=S(A.span)`
  color: var(--primary);
  background: linear-gradient(135deg, var(--primary), #ff0000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
  position: relative;
  cursor: pointer;
  display: inline-block;
  transition: all 0.3s ease;
  
  &:hover {
    filter: brightness(1.2);
    transform: scale(1.02);
  }
`,kP=nn`
  0% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1) rotate(180deg);
  }
  100% {
    opacity: 0;
    transform: scale(0) rotate(360deg);
  }
`,CP=S.div`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 10px;
  height: 10px;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 3px;
    background: var(--primary);
    border-radius: 50%;
    animation: ${kP} 3s ease-in-out infinite;
    box-shadow: 0 0 6px var(--primary);
  }
  
  &::after {
    animation-delay: 1.5s;
    left: 8px;
    top: 8px;
  }
`,EP=nn`
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(-30px) translateX(20px);
  }
  66% {
    transform: translateY(30px) translateX(-20px);
  }
`,PP=S.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`,jP=nn`
  0% {
    transform: translateY(100vh) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) scale(1);
    opacity: 0;
  }
`,TP=S.div`
  position: absolute;
  width: 100%;
  height: 100%;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--primary);
    border-radius: 50%;
    opacity: 0.3;
    animation: ${jP} 20s linear infinite;
  }
  
  &::before {
    left: 10%;
    animation-delay: 0s;
  }
  
  &::after {
    left: 70%;
    animation-delay: 10s;
  }
`,RP=S(A.div)`
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  background-image: 
    linear-gradient(rgba(227, 6, 19, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(227, 6, 19, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  transform-origin: center;
  animation: ${EP} 30s ease-in-out infinite;
`,AP=nn`
  0% {
    transform: translateY(0) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
    transform: translateY(-20px) scale(1);
  }
  90% {
    opacity: 1;
    transform: translateY(-80px) scale(1);
  }
  100% {
    transform: translateY(-100px) scale(0);
    opacity: 0;
  }
`,LP=S.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background: linear-gradient(135deg, var(--primary), #ff4757);
    border-radius: 50%;
    animation: ${AP} 8s ease-out infinite;
    box-shadow: 0 0 10px rgba(227, 6, 19, 0.5);
  }
  
  &::before {
    left: 20%;
    bottom: 0;
    animation-delay: 0s;
  }
  
  &::after {
    left: 80%;
    bottom: 0;
    animation-delay: 4s;
    width: 4px;
    height: 4px;
  }
`;function zP(e){return W({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"}}]})(e)}const OP=()=>{const e=w.useRef(null),[t,n]=w.useState(null),r=Mc(0),o=Mc(0),{scrollYProgress:i}=Cv({target:e,offset:["start end","end start"]}),s=zt(i,[0,1],[0,-100]),a=zt(i,[0,1],[100,-50]),l=(y,m)=>{const h=y.currentTarget.getBoundingClientRect(),k=(y.clientX-h.left)/h.width,E=(y.clientY-h.top)/h.height;r.set(k),o.set(E)},u=zt(o,[0,1],[15,-15]),c=zt(r,[0,1],[-15,15]),d=zt(r,[0,1],[15,-15]),p=zt(o,[0,1],[15,-15]),g=[{id:1,title:"CENTRAL DE APOIO PRA INICIANTES",description:"Nosso app é completamente amigável com pessoas inexperientes na academia, fazendo com que o app seja uma abertura de portas à uma comunidade segura para todos.",additionalText:"Queremos fornecer a melhor experiência possível!",icon:gE,gradient:"linear-gradient(135deg, #E30613 0%, #B91C1C 100%)"},{id:2,title:"INTELIGÊNCIA ARTIFICIAL INTEGRADA",description:"No nosso aplicativo, uma inteligência artificial já treinada pra ajudar as pessoas a montarem seus treinos é contar melhor suas calorias está inclusa! Isso fortalece uma praticidade na criação de treinos para pessoas iniciantes, sem ser preciso mais treinos genéricos.",icon:zP,gradient:"linear-gradient(135deg, #DC2626 0%, #991B1B 100%)"},{id:3,title:"CONTROLE COMPLETO DE TREINOS",description:"E por fim, no nosso app, é possível consultar desde à execução dos exercícios até quantas repetições você deverá fazer baseado no SEU objetivo, com tudo relacionado à montagem do treino se adaptando à sua necessidade, seja ela qual for!",icon:fE,gradient:"linear-gradient(135deg, #B91C1C 0%, #7F1D1D 100%)"}],v={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3,delayChildren:.2}}},x={hidden:{opacity:0,y:100,scale:.8,rotateX:45},visible:{opacity:1,y:0,scale:1,rotateX:0,transition:{duration:.8,ease:[.25,.46,.45,.94]}}},b={hidden:{opacity:0,y:-50},visible:{opacity:1,y:0,transition:{duration:1,ease:"easeOut"}}};return f.jsxs(Rm,{ref:e,children:[f.jsxs(NP,{style:{y:s},children:[f.jsx(MP,{}),f.jsx(IP,{})]}),f.jsx(_P,{children:f.jsx(A.div,{variants:b,initial:"hidden",animate:"visible",children:f.jsxs(VP,{children:[f.jsx(A.span,{initial:{opacity:0,x:-100},animate:{opacity:1,x:0},transition:{duration:.8,ease:"easeOut"},children:"NOSSOS"})," ",f.jsx($P,{children:f.jsx(A.span,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{duration:.8,delay:.2,ease:"easeOut"},children:"RECURSOS"})})]})})}),f.jsx(BP,{children:f.jsx(Rm,{children:f.jsx(UP,{variants:v,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},style:{y:a},children:g.map((y,m)=>{const h=y.icon;return f.jsx(HP,{variants:x,onMouseMove:k=>l(k,y.id),onMouseEnter:()=>n(y.id),onMouseLeave:()=>{n(null),r.set(.5),o.set(.5)},whileTap:{scale:.95},style:{rotateX:t===y.id?u:0,rotateY:t===y.id?c:0,transformStyle:"preserve-3d"},transition:{type:"spring",stiffness:400,damping:30},children:f.jsxs(fl,{gradient:y.gradient,style:{transform:t===y.id?"translateZ(50px)":"translateZ(0px)",boxShadow:t===y.id?`${d.get()}px ${p.get()}px 40px rgba(227, 6, 19, 0.5)`:"0 20px 40px rgba(0, 0, 0, 0.3)",transition:"all 0.3s ease"},children:[f.jsx(WP,{}),f.jsx(GP,{style:{background:`radial-gradient(
                          600px circle at ${r.get()*100}% ${o.get()*100}%,
                          rgba(255, 255, 255, 0.15),
                          transparent 40%
                        )`,opacity:t===y.id?1:0}}),f.jsxs(YP,{children:[f.jsxs(KP,{children:[f.jsx(A.div,{animate:{rotate:[0,10,-10,0],scale:[1,1.1,1]},transition:{duration:4,repeat:1/0,delay:m*.5},children:f.jsx(h,{})}),f.jsx(qP,{})]}),f.jsx(QP,{children:y.title}),f.jsx(ZP,{children:y.description}),y.additionalText&&f.jsx(JP,{children:y.additionalText}),f.jsx(ej,{children:f.jsxs(A.div,{className:"card-number",initial:{opacity:0},whileInView:{opacity:1},transition:{delay:.5},children:["0",y.id]})})]}),f.jsx(tj,{}),f.jsx(rj,{className:`particles-${y.id}`})]})},y.id)})})})})]})},Rm=S.div`
  min-height: 100vh;
  background: var(--background);
  color: var(--white);
  padding-top: 8rem;
  position: relative;
  overflow: hidden;
`,NP=S(A.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`,DP=nn`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
`,MP=S.div`
  position: absolute;
  width: 120%;
  height: 120%;
  background-image: 
    linear-gradient(rgba(227, 6, 19, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(227, 6, 19, 0.05) 1px, transparent 1px);
  background-size: 100px 100px;
  animation: ${DP} 20s linear infinite;
`,FP=nn`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
`,IP=S.div`
  position: absolute;
  width: 100%;
  height: 100%;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    background: radial-gradient(
      circle,
      rgba(227, 6, 19, 0.1) 0%,
      transparent 70%
    );
    border-radius: 50%;
    filter: blur(40px);
    animation: ${FP} 15s ease-in-out infinite;
  }
  
  &::before {
    top: 20%;
    left: 10%;
  }
  
  &::after {
    bottom: 20%;
    right: 10%;
    animation-delay: 7.5s;
  }
`,_P=S.section`
  text-align: center;
  padding: 6rem 2rem 8rem;
  position: relative;
  z-index: 1;
`,VP=S.h1`
  font-size: clamp(4rem, 8vw, 8rem);
  font-weight: 900;
  line-height: 1;
  margin: 0;
  color: var(--white);
  letter-spacing: -0.02em;
  text-transform: uppercase;
`,$P=S.span`
  background: linear-gradient(135deg, #E30613 0%, #ff4757 50%, #ff6348 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
`,BP=S.section`
  padding: 0 2rem 8rem;
  position: relative;
  z-index: 1;
`,UP=S(A.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 4rem;
  max-width: 140rem;
  margin: 0 auto;
  perspective: 1000px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,HP=S(A.div)`
  perspective: 1000px;
  transform-style: preserve-3d;
  will-change: transform;
`,fl=S.div`
  background: ${e=>e.gradient};
  border-radius: 2rem;
  padding: 4rem 3rem;
  position: relative;
  overflow: hidden;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  
  &:hover {
    box-shadow: 
      0 30px 60px rgba(227, 6, 19, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
`,WP=S.div`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 50%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  
  ${fl}:hover & {
    opacity: 1;
  }
`,GP=S.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 1;
`,YP=S.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
`,KP=S.div`
  position: relative;
  width: 6rem;
  height: 6rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  backdrop-filter: blur(10px);
  
  svg {
    font-size: 3rem;
    color: var(--white);
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
  }
`,XP=nn`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`,qP=S.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: inherit;
  animation: ${XP} 3s ease-out infinite;
`,QP=S.h2`
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--white);
  margin-bottom: 2rem;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,ZP=S.p`
  font-size: 1.6rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  flex-grow: 1;
`,JP=S.p`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 2rem;
  text-align: center;
  font-style: italic;
`,ej=S.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  .card-number {
    font-size: 4rem;
    font-weight: 900;
    color: rgba(255, 255, 255, 0.2);
    line-height: 1;
  }
`,tj=S.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 50%,
    rgba(255, 255, 255, 0.05) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  
  ${fl}:hover & {
    opacity: 1;
  }
`,nj=nn`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
`,rj=S.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  overflow: hidden;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    animation: ${nj} 6s ease-out infinite;
  }
  
  &::before {
    bottom: 20%;
    left: 20%;
    animation-delay: 0s;
  }
  
  &::after {
    bottom: 30%;
    right: 30%;
    animation-delay: 3s;
  }
  
  ${fl}:hover & {
    &::before,
    &::after {
      animation-play-state: running;
    }
  }
`,oj=()=>f.jsx(ij,{children:f.jsx(sj,{children:f.jsxs(A.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:[f.jsxs(aj,{children:["Baixe o ",f.jsx("span",{className:"highlight",children:"GYM BUDDY"})]}),f.jsx(lj,{children:"Tenha seu personal trainer no bolso. Disponível para iOS e Android."}),f.jsxs(uj,{children:[f.jsx(A.div,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.6,delay:.3},children:f.jsxs(Am,{href:"#",className:"google-play",whileHover:{scale:1.05,y:-2},whileTap:{scale:.98},children:[f.jsx(dE,{className:"icon"}),f.jsxs("div",{className:"text",children:[f.jsx("span",{className:"small",children:"ANDROID APP ON"}),f.jsx("span",{className:"large",children:"Google Play"})]})]})}),f.jsx(A.div,{initial:{opacity:0,x:30},animate:{opacity:1,x:0},transition:{duration:.6,delay:.4},children:f.jsxs(Am,{href:"#",className:"app-store",whileHover:{scale:1.05,y:-2},whileTap:{scale:.98},children:[f.jsx(cE,{className:"icon"}),f.jsxs("div",{className:"text",children:[f.jsx("span",{className:"small",children:"Download on the"}),f.jsx("span",{className:"large",children:"App Store"})]})]})})]})]})})}),ij=S.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      ellipse at center,
      rgba(227, 6, 19, 0.1) 0%,
      transparent 50%
    );
    pointer-events: none;
  }
`,sj=S.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2.4rem;
  text-align: center;
`,aj=S.h1`
  font-size: 5.6rem;
  font-weight: 800;
  color: var(--white);
  margin-bottom: 2.4rem;
  line-height: 1.2;
  
  .highlight {
    background: linear-gradient(135deg, var(--primary) 0%, #ff4757 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`,lj=S.p`
  font-size: 2rem;
  color: var(--text-secondary, #B8B8B8);
  margin-bottom: 5rem;
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 4rem;
  }
`,uj=S.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`,Am=S(A.a)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 3rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  color: var(--white);
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  min-width: 22rem;
  
  .icon {
    font-size: 3.2rem;
    flex-shrink: 0;
  }
  
  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    
    .small {
      font-size: 1.2rem;
      opacity: 0.8;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    .large {
      font-size: 2rem;
      font-weight: 600;
      margin-top: 0.2rem;
    }
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--primary);
    box-shadow: 0 10px 30px rgba(227, 6, 19, 0.2);
  }
  
  &.google-play:hover .icon {
    color: #34A853;
  }
  
  &.app-store:hover .icon {
    color: #007AFF;
  }
`,cj=({isOpen:e,onClose:t,onSubmit:n,onSkip:r})=>{const[o,i]=w.useState(""),[s,a]=w.useState(""),[l,u]=w.useState(!1),c=async p=>{p.preventDefault(),u(!0);const g={peso:o?parseFloat(o):null,altura:s?parseFloat(s):null};await n(g),u(!1)},d=()=>{r(),t()};return f.jsx(We,{children:e&&f.jsxs(f.Fragment,{children:[f.jsx(dj,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:d}),f.jsxs(fj,{initial:{opacity:0,scale:.9,y:50},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:50},transition:{type:"spring",damping:25,stiffness:300},children:[f.jsx(pj,{onClick:d,children:f.jsx(ir,{})}),f.jsxs(hj,{children:[f.jsx(mj,{children:f.jsx(co,{})}),f.jsx(gj,{children:"Complete seu Perfil"}),f.jsx(yj,{children:"Adicione suas informações físicas para personalizar sua experiência"})]}),f.jsxs(vj,{onSubmit:c,children:[f.jsxs(Lm,{children:[f.jsx(zm,{children:"Peso (kg)"}),f.jsx(Om,{type:"number",step:"0.1",min:"0",max:"500",placeholder:"Ex: 75.5",value:o,onChange:p=>i(p.target.value)})]}),f.jsxs(Lm,{children:[f.jsx(zm,{children:"Altura (cm)"}),f.jsx(Om,{type:"number",step:"0.1",min:"0",max:"300",placeholder:"Ex: 175",value:s,onChange:p=>a(p.target.value)})]}),f.jsxs(xj,{children:[f.jsx(wj,{type:"button",onClick:d,whileHover:{scale:1.02},whileTap:{scale:.98},children:"Pular"}),f.jsx(bj,{type:"submit",disabled:l||!o&&!s,whileHover:{scale:1.02},whileTap:{scale:.98},children:l?"Salvando...":"Salvar"})]}),f.jsx(Sj,{children:"Você pode pular e adicionar depois nas configurações"})]})]})]})})},dj=S(A.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  z-index: 9998;
`,fj=S(A.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 48rem;
  background: linear-gradient(135deg, rgba(25, 25, 30, 0.98), rgba(20, 20, 25, 0.95));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2.4rem;
  padding: 4rem 3rem;
  z-index: 9999;
  box-shadow: 
    0 24px 64px rgba(0, 0, 0, 0.5),
    0 12px 32px rgba(227, 6, 19, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
`,pj=S.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: rgba(255, 255, 255, 0.7);

  svg {
    font-size: 2rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 1);
    transform: rotate(90deg);
  }
`,hj=S.div`
  text-align: center;
  margin-bottom: 3rem;
`,mj=S.div`
  width: 8rem;
  height: 8rem;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(227, 6, 19, 0.2), rgba(227, 6, 19, 0.1));
  border: 2px solid rgba(227, 6, 19, 0.3);
  border-radius: 50%;
  
  svg {
    font-size: 4rem;
    color: rgba(227, 6, 19, 0.9);
    animation: pulse-icon 2s ease-in-out infinite;
  }

  @keyframes pulse-icon {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
`,gj=S.h2`
  font-size: 2.8rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.98);
  margin-bottom: 1rem;
`,yj=S.p`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.6;
  max-width: 40rem;
  margin: 0 auto;
`,vj=S.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`,Lm=S.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,zm=S.label`
  font-size: 1.4rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.02em;
`,Om=S.input`
  width: 100%;
  padding: 1.6rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.2rem;
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 0.95);
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(227, 6, 19, 0.5);
    box-shadow: 0 0 0 3px rgba(227, 6, 19, 0.1);
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
  }
`,xj=S.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.6rem;
  margin-top: 1rem;
`,Dv=S(A.button)`
  padding: 1.6rem 2rem;
  border-radius: 1.2rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,wj=S(Dv)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.8);

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 1);
  }
`,bj=S(Dv)`
  background: linear-gradient(135deg, rgba(227, 6, 19, 0.9), rgba(227, 6, 19, 0.7));
  color: white;
  box-shadow: 0 8px 20px rgba(227, 6, 19, 0.3);

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, rgba(227, 6, 19, 1), rgba(227, 6, 19, 0.85));
    box-shadow: 0 12px 28px rgba(227, 6, 19, 0.4);
  }
`,Sj=S.p`
  text-align: center;
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.5rem;
`;function Mv(e,t){return function(){return e.apply(t,arguments)}}const{toString:kj}=Object.prototype,{getPrototypeOf:Tf}=Object,{iterator:pl,toStringTag:Fv}=Symbol,hl=(e=>t=>{const n=kj.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),jt=e=>(e=e.toLowerCase(),t=>hl(t)===e),ml=e=>t=>typeof t===e,{isArray:So}=Array,po=ml("undefined");function Bi(e){return e!==null&&!po(e)&&e.constructor!==null&&!po(e.constructor)&&Xe(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Iv=jt("ArrayBuffer");function Cj(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Iv(e.buffer),t}const Ej=ml("string"),Xe=ml("function"),_v=ml("number"),Ui=e=>e!==null&&typeof e=="object",Pj=e=>e===!0||e===!1,Vs=e=>{if(hl(e)!=="object")return!1;const t=Tf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Fv in e)&&!(pl in e)},jj=e=>{if(!Ui(e)||Bi(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Tj=jt("Date"),Rj=jt("File"),Aj=jt("Blob"),Lj=jt("FileList"),zj=e=>Ui(e)&&Xe(e.pipe),Oj=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Xe(e.append)&&((t=hl(e))==="formdata"||t==="object"&&Xe(e.toString)&&e.toString()==="[object FormData]"))},Nj=jt("URLSearchParams"),[Dj,Mj,Fj,Ij]=["ReadableStream","Request","Response","Headers"].map(jt),_j=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Hi(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),So(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{if(Bi(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let a;for(r=0;r<s;r++)a=i[r],t.call(null,e[a],a,e)}}function Vv(e,t){if(Bi(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const tr=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),$v=e=>!po(e)&&e!==tr;function $c(){const{caseless:e,skipUndefined:t}=$v(this)&&this||{},n={},r=(o,i)=>{const s=e&&Vv(n,i)||i;Vs(n[s])&&Vs(o)?n[s]=$c(n[s],o):Vs(o)?n[s]=$c({},o):So(o)?n[s]=o.slice():(!t||!po(o))&&(n[s]=o)};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&Hi(arguments[o],r);return n}const Vj=(e,t,n,{allOwnKeys:r}={})=>(Hi(t,(o,i)=>{n&&Xe(o)?e[i]=Mv(o,n):e[i]=o},{allOwnKeys:r}),e),$j=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Bj=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Uj=(e,t,n,r)=>{let o,i,s;const a={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&Tf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Hj=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Wj=e=>{if(!e)return null;if(So(e))return e;let t=e.length;if(!_v(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Gj=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Tf(Uint8Array)),Yj=(e,t)=>{const r=(e&&e[pl]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},Kj=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Xj=jt("HTMLFormElement"),qj=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Nm=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Qj=jt("RegExp"),Bv=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Hi(n,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(r[i]=s||o)}),Object.defineProperties(e,r)},Zj=e=>{Bv(e,(t,n)=>{if(Xe(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Xe(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Jj=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return So(e)?r(e):r(String(e).split(t)),n},eT=()=>{},tT=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function nT(e){return!!(e&&Xe(e.append)&&e[Fv]==="FormData"&&e[pl])}const rT=e=>{const t=new Array(10),n=(r,o)=>{if(Ui(r)){if(t.indexOf(r)>=0)return;if(Bi(r))return r;if(!("toJSON"in r)){t[o]=r;const i=So(r)?[]:{};return Hi(r,(s,a)=>{const l=n(s,o+1);!po(l)&&(i[a]=l)}),t[o]=void 0,i}}return r};return n(e,0)},oT=jt("AsyncFunction"),iT=e=>e&&(Ui(e)||Xe(e))&&Xe(e.then)&&Xe(e.catch),Uv=((e,t)=>e?setImmediate:t?((n,r)=>(tr.addEventListener("message",({source:o,data:i})=>{o===tr&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),tr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Xe(tr.postMessage)),sT=typeof queueMicrotask<"u"?queueMicrotask.bind(tr):typeof process<"u"&&process.nextTick||Uv,aT=e=>e!=null&&Xe(e[pl]),T={isArray:So,isArrayBuffer:Iv,isBuffer:Bi,isFormData:Oj,isArrayBufferView:Cj,isString:Ej,isNumber:_v,isBoolean:Pj,isObject:Ui,isPlainObject:Vs,isEmptyObject:jj,isReadableStream:Dj,isRequest:Mj,isResponse:Fj,isHeaders:Ij,isUndefined:po,isDate:Tj,isFile:Rj,isBlob:Aj,isRegExp:Qj,isFunction:Xe,isStream:zj,isURLSearchParams:Nj,isTypedArray:Gj,isFileList:Lj,forEach:Hi,merge:$c,extend:Vj,trim:_j,stripBOM:$j,inherits:Bj,toFlatObject:Uj,kindOf:hl,kindOfTest:jt,endsWith:Hj,toArray:Wj,forEachEntry:Yj,matchAll:Kj,isHTMLForm:Xj,hasOwnProperty:Nm,hasOwnProp:Nm,reduceDescriptors:Bv,freezeMethods:Zj,toObjectSet:Jj,toCamelCase:qj,noop:eT,toFiniteNumber:tT,findKey:Vv,global:tr,isContextDefined:$v,isSpecCompliantForm:nT,toJSONObject:rT,isAsyncFn:oT,isThenable:iT,setImmediate:Uv,asap:sT,isIterable:aT};function V(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}T.inherits(V,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:T.toJSONObject(this.config),code:this.code,status:this.status}}});const Hv=V.prototype,Wv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Wv[e]={value:e}});Object.defineProperties(V,Wv);Object.defineProperty(Hv,"isAxiosError",{value:!0});V.from=(e,t,n,r,o,i)=>{const s=Object.create(Hv);T.toFlatObject(e,s,function(c){return c!==Error.prototype},u=>u!=="isAxiosError");const a=e&&e.message?e.message:"Error",l=t==null&&e?e.code:t;return V.call(s,a,l,n,r,o),e&&s.cause==null&&Object.defineProperty(s,"cause",{value:e,configurable:!0}),s.name=e&&e.name||"Error",i&&Object.assign(s,i),s};const lT=null;function Bc(e){return T.isPlainObject(e)||T.isArray(e)}function Gv(e){return T.endsWith(e,"[]")?e.slice(0,-2):e}function Dm(e,t,n){return e?e.concat(t).map(function(o,i){return o=Gv(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function uT(e){return T.isArray(e)&&!e.some(Bc)}const cT=T.toFlatObject(T,{},null,function(t){return/^is[A-Z]/.test(t)});function gl(e,t,n){if(!T.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=T.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,b){return!T.isUndefined(b[x])});const r=n.metaTokens,o=n.visitor||c,i=n.dots,s=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&T.isSpecCompliantForm(t);if(!T.isFunction(o))throw new TypeError("visitor must be a function");function u(v){if(v===null)return"";if(T.isDate(v))return v.toISOString();if(T.isBoolean(v))return v.toString();if(!l&&T.isBlob(v))throw new V("Blob is not supported. Use a Buffer instead.");return T.isArrayBuffer(v)||T.isTypedArray(v)?l&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function c(v,x,b){let y=v;if(v&&!b&&typeof v=="object"){if(T.endsWith(x,"{}"))x=r?x:x.slice(0,-2),v=JSON.stringify(v);else if(T.isArray(v)&&uT(v)||(T.isFileList(v)||T.endsWith(x,"[]"))&&(y=T.toArray(v)))return x=Gv(x),y.forEach(function(h,k){!(T.isUndefined(h)||h===null)&&t.append(s===!0?Dm([x],k,i):s===null?x:x+"[]",u(h))}),!1}return Bc(v)?!0:(t.append(Dm(b,x,i),u(v)),!1)}const d=[],p=Object.assign(cT,{defaultVisitor:c,convertValue:u,isVisitable:Bc});function g(v,x){if(!T.isUndefined(v)){if(d.indexOf(v)!==-1)throw Error("Circular reference detected in "+x.join("."));d.push(v),T.forEach(v,function(y,m){(!(T.isUndefined(y)||y===null)&&o.call(t,y,T.isString(m)?m.trim():m,x,p))===!0&&g(y,x?x.concat(m):[m])}),d.pop()}}if(!T.isObject(e))throw new TypeError("data must be an object");return g(e),t}function Mm(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Rf(e,t){this._pairs=[],e&&gl(e,this,t)}const Yv=Rf.prototype;Yv.append=function(t,n){this._pairs.push([t,n])};Yv.toString=function(t){const n=t?function(r){return t.call(this,r,Mm)}:Mm;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function dT(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Kv(e,t,n){if(!t)return e;const r=n&&n.encode||dT;T.isFunction(n)&&(n={serialize:n});const o=n&&n.serialize;let i;if(o?i=o(t,n):i=T.isURLSearchParams(t)?t.toString():new Rf(t,n).toString(r),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class fT{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){T.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Fm=fT,Xv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},pT=typeof URLSearchParams<"u"?URLSearchParams:Rf,hT=typeof FormData<"u"?FormData:null,mT=typeof Blob<"u"?Blob:null,gT={isBrowser:!0,classes:{URLSearchParams:pT,FormData:hT,Blob:mT},protocols:["http","https","file","blob","url","data"]},Af=typeof window<"u"&&typeof document<"u",Uc=typeof navigator=="object"&&navigator||void 0,yT=Af&&(!Uc||["ReactNative","NativeScript","NS"].indexOf(Uc.product)<0),vT=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),xT=Af&&window.location.href||"http://localhost",wT=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Af,hasStandardBrowserEnv:yT,hasStandardBrowserWebWorkerEnv:vT,navigator:Uc,origin:xT},Symbol.toStringTag,{value:"Module"})),ze={...wT,...gT};function bT(e,t){return gl(e,new ze.classes.URLSearchParams,{visitor:function(n,r,o,i){return ze.isNode&&T.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}function ST(e){return T.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function kT(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function qv(e){function t(n,r,o,i){let s=n[i++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),l=i>=n.length;return s=!s&&T.isArray(o)?o.length:s,l?(T.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!a):((!o[s]||!T.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&T.isArray(o[s])&&(o[s]=kT(o[s])),!a)}if(T.isFormData(e)&&T.isFunction(e.entries)){const n={};return T.forEachEntry(e,(r,o)=>{t(ST(r),o,n,0)}),n}return null}function CT(e,t,n){if(T.isString(e))try{return(t||JSON.parse)(e),T.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Lf={transitional:Xv,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=T.isObject(t);if(i&&T.isHTMLForm(t)&&(t=new FormData(t)),T.isFormData(t))return o?JSON.stringify(qv(t)):t;if(T.isArrayBuffer(t)||T.isBuffer(t)||T.isStream(t)||T.isFile(t)||T.isBlob(t)||T.isReadableStream(t))return t;if(T.isArrayBufferView(t))return t.buffer;if(T.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return bT(t,this.formSerializer).toString();if((a=T.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return gl(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),CT(t)):t}],transformResponse:[function(t){const n=this.transitional||Lf.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(T.isResponse(t)||T.isReadableStream(t))return t;if(t&&T.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t,this.parseReviver)}catch(a){if(s)throw a.name==="SyntaxError"?V.from(a,V.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ze.classes.FormData,Blob:ze.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};T.forEach(["delete","get","head","post","put","patch"],e=>{Lf.headers[e]={}});const zf=Lf,ET=T.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),PT=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&ET[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Im=Symbol("internals");function Mo(e){return e&&String(e).trim().toLowerCase()}function $s(e){return e===!1||e==null?e:T.isArray(e)?e.map($s):String(e)}function jT(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const TT=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function fu(e,t,n,r,o){if(T.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!T.isString(t)){if(T.isString(r))return t.indexOf(r)!==-1;if(T.isRegExp(r))return r.test(t)}}function RT(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function AT(e,t){const n=T.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}class yl{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(a,l,u){const c=Mo(l);if(!c)throw new Error("header name must be a non-empty string");const d=T.findKey(o,c);(!d||o[d]===void 0||u===!0||u===void 0&&o[d]!==!1)&&(o[d||l]=$s(a))}const s=(a,l)=>T.forEach(a,(u,c)=>i(u,c,l));if(T.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(T.isString(t)&&(t=t.trim())&&!TT(t))s(PT(t),n);else if(T.isObject(t)&&T.isIterable(t)){let a={},l,u;for(const c of t){if(!T.isArray(c))throw TypeError("Object iterator must return a key-value pair");a[u=c[0]]=(l=a[u])?T.isArray(l)?[...l,c[1]]:[l,c[1]]:c[1]}s(a,n)}else t!=null&&i(n,t,r);return this}get(t,n){if(t=Mo(t),t){const r=T.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return jT(o);if(T.isFunction(n))return n.call(this,o,r);if(T.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Mo(t),t){const r=T.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||fu(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=Mo(s),s){const a=T.findKey(r,s);a&&(!n||fu(r,r[a],a,n))&&(delete r[a],o=!0)}}return T.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||fu(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return T.forEach(this,(o,i)=>{const s=T.findKey(r,i);if(s){n[s]=$s(o),delete n[i];return}const a=t?RT(i):String(i).trim();a!==i&&delete n[i],n[a]=$s(o),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return T.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&T.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Im]=this[Im]={accessors:{}}).accessors,o=this.prototype;function i(s){const a=Mo(s);r[a]||(AT(o,s),r[a]=!0)}return T.isArray(t)?t.forEach(i):i(t),this}}yl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);T.reduceDescriptors(yl.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});T.freezeMethods(yl);const Ct=yl;function pu(e,t){const n=this||zf,r=t||n,o=Ct.from(r.headers);let i=r.data;return T.forEach(e,function(a){i=a.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function Qv(e){return!!(e&&e.__CANCEL__)}function ko(e,t,n){V.call(this,e??"canceled",V.ERR_CANCELED,t,n),this.name="CanceledError"}T.inherits(ko,V,{__CANCEL__:!0});function Zv(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new V("Request failed with status code "+n.status,[V.ERR_BAD_REQUEST,V.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function LT(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function zT(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=r[i];s||(s=u),n[o]=l,r[o]=u;let d=i,p=0;for(;d!==o;)p+=n[d++],d=d%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-s<t)return;const g=c&&u-c;return g?Math.round(p*1e3/g):void 0}}function OT(e,t){let n=0,r=1e3/t,o,i;const s=(u,c=Date.now())=>{n=c,o=null,i&&(clearTimeout(i),i=null),e(...u)};return[(...u)=>{const c=Date.now(),d=c-n;d>=r?s(u,c):(o=u,i||(i=setTimeout(()=>{i=null,s(o)},r-d)))},()=>o&&s(o)]}const Ra=(e,t,n=3)=>{let r=0;const o=zT(50,250);return OT(i=>{const s=i.loaded,a=i.lengthComputable?i.total:void 0,l=s-r,u=o(l),c=s<=a;r=s;const d={loaded:s,total:a,progress:a?s/a:void 0,bytes:l,rate:u||void 0,estimated:u&&a&&c?(a-s)/u:void 0,event:i,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(d)},n)},_m=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Vm=e=>(...t)=>T.asap(()=>e(...t)),NT=ze.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,ze.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(ze.origin),ze.navigator&&/(msie|trident)/i.test(ze.navigator.userAgent)):()=>!0,DT=ze.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const s=[e+"="+encodeURIComponent(t)];T.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),T.isString(r)&&s.push("path="+r),T.isString(o)&&s.push("domain="+o),i===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function MT(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function FT(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Jv(e,t,n){let r=!MT(t);return e&&(r||n==!1)?FT(e,t):t}const $m=e=>e instanceof Ct?{...e}:e;function dr(e,t){t=t||{};const n={};function r(u,c,d,p){return T.isPlainObject(u)&&T.isPlainObject(c)?T.merge.call({caseless:p},u,c):T.isPlainObject(c)?T.merge({},c):T.isArray(c)?c.slice():c}function o(u,c,d,p){if(T.isUndefined(c)){if(!T.isUndefined(u))return r(void 0,u,d,p)}else return r(u,c,d,p)}function i(u,c){if(!T.isUndefined(c))return r(void 0,c)}function s(u,c){if(T.isUndefined(c)){if(!T.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function a(u,c,d){if(d in t)return r(u,c);if(d in e)return r(void 0,u)}const l={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(u,c,d)=>o($m(u),$m(c),d,!0)};return T.forEach(Object.keys({...e,...t}),function(c){const d=l[c]||o,p=d(e[c],t[c],c);T.isUndefined(p)&&d!==a||(n[c]=p)}),n}const e2=e=>{const t=dr({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:s,auth:a}=t;if(t.headers=s=Ct.from(s),t.url=Kv(Jv(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),a&&s.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),T.isFormData(n)){if(ze.hasStandardBrowserEnv||ze.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(T.isFunction(n.getHeaders)){const l=n.getHeaders(),u=["content-type","content-length"];Object.entries(l).forEach(([c,d])=>{u.includes(c.toLowerCase())&&s.set(c,d)})}}if(ze.hasStandardBrowserEnv&&(r&&T.isFunction(r)&&(r=r(t)),r||r!==!1&&NT(t.url))){const l=o&&i&&DT.read(i);l&&s.set(o,l)}return t},IT=typeof XMLHttpRequest<"u",_T=IT&&function(e){return new Promise(function(n,r){const o=e2(e);let i=o.data;const s=Ct.from(o.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:u}=o,c,d,p,g,v;function x(){g&&g(),v&&v(),o.cancelToken&&o.cancelToken.unsubscribe(c),o.signal&&o.signal.removeEventListener("abort",c)}let b=new XMLHttpRequest;b.open(o.method.toUpperCase(),o.url,!0),b.timeout=o.timeout;function y(){if(!b)return;const h=Ct.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),E={data:!a||a==="text"||a==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:h,config:e,request:b};Zv(function(C){n(C),x()},function(C){r(C),x()},E),b=null}"onloadend"in b?b.onloadend=y:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(y)},b.onabort=function(){b&&(r(new V("Request aborted",V.ECONNABORTED,e,b)),b=null)},b.onerror=function(k){const E=k&&k.message?k.message:"Network Error",R=new V(E,V.ERR_NETWORK,e,b);R.event=k||null,r(R),b=null},b.ontimeout=function(){let k=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const E=o.transitional||Xv;o.timeoutErrorMessage&&(k=o.timeoutErrorMessage),r(new V(k,E.clarifyTimeoutError?V.ETIMEDOUT:V.ECONNABORTED,e,b)),b=null},i===void 0&&s.setContentType(null),"setRequestHeader"in b&&T.forEach(s.toJSON(),function(k,E){b.setRequestHeader(E,k)}),T.isUndefined(o.withCredentials)||(b.withCredentials=!!o.withCredentials),a&&a!=="json"&&(b.responseType=o.responseType),u&&([p,v]=Ra(u,!0),b.addEventListener("progress",p)),l&&b.upload&&([d,g]=Ra(l),b.upload.addEventListener("progress",d),b.upload.addEventListener("loadend",g)),(o.cancelToken||o.signal)&&(c=h=>{b&&(r(!h||h.type?new ko(null,e,b):h),b.abort(),b=null)},o.cancelToken&&o.cancelToken.subscribe(c),o.signal&&(o.signal.aborted?c():o.signal.addEventListener("abort",c)));const m=LT(o.url);if(m&&ze.protocols.indexOf(m)===-1){r(new V("Unsupported protocol "+m+":",V.ERR_BAD_REQUEST,e));return}b.send(i||null)})},VT=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const i=function(u){if(!o){o=!0,a();const c=u instanceof Error?u:this.reason;r.abort(c instanceof V?c:new ko(c instanceof Error?c.message:c))}};let s=t&&setTimeout(()=>{s=null,i(new V(`timeout ${t} of ms exceeded`,V.ETIMEDOUT))},t);const a=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),e=null)};e.forEach(u=>u.addEventListener("abort",i));const{signal:l}=r;return l.unsubscribe=()=>T.asap(a),l}},$T=VT,BT=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},UT=async function*(e,t){for await(const n of HT(e))yield*BT(n,t)},HT=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Bm=(e,t,n,r)=>{const o=UT(e,t);let i=0,s,a=l=>{s||(s=!0,r&&r(l))};return new ReadableStream({async pull(l){try{const{done:u,value:c}=await o.next();if(u){a(),l.close();return}let d=c.byteLength;if(n){let p=i+=d;n(p)}l.enqueue(new Uint8Array(c))}catch(u){throw a(u),u}},cancel(l){return a(l),o.return()}},{highWaterMark:2})},Um=64*1024,{isFunction:ms}=T,WT=(({Request:e,Response:t})=>({Request:e,Response:t}))(T.global),{ReadableStream:Hm,TextEncoder:Wm}=T.global,Gm=(e,...t)=>{try{return!!e(...t)}catch{return!1}},GT=e=>{e=T.merge.call({skipUndefined:!0},WT,e);const{fetch:t,Request:n,Response:r}=e,o=t?ms(t):typeof fetch=="function",i=ms(n),s=ms(r);if(!o)return!1;const a=o&&ms(Hm),l=o&&(typeof Wm=="function"?(v=>x=>v.encode(x))(new Wm):async v=>new Uint8Array(await new n(v).arrayBuffer())),u=i&&a&&Gm(()=>{let v=!1;const x=new n(ze.origin,{body:new Hm,method:"POST",get duplex(){return v=!0,"half"}}).headers.has("Content-Type");return v&&!x}),c=s&&a&&Gm(()=>T.isReadableStream(new r("").body)),d={stream:c&&(v=>v.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(v=>{!d[v]&&(d[v]=(x,b)=>{let y=x&&x[v];if(y)return y.call(x);throw new V(`Response type '${v}' is not supported`,V.ERR_NOT_SUPPORT,b)})});const p=async v=>{if(v==null)return 0;if(T.isBlob(v))return v.size;if(T.isSpecCompliantForm(v))return(await new n(ze.origin,{method:"POST",body:v}).arrayBuffer()).byteLength;if(T.isArrayBufferView(v)||T.isArrayBuffer(v))return v.byteLength;if(T.isURLSearchParams(v)&&(v=v+""),T.isString(v))return(await l(v)).byteLength},g=async(v,x)=>{const b=T.toFiniteNumber(v.getContentLength());return b??p(x)};return async v=>{let{url:x,method:b,data:y,signal:m,cancelToken:h,timeout:k,onDownloadProgress:E,onUploadProgress:R,responseType:C,headers:j,withCredentials:L="same-origin",fetchOptions:O}=e2(v),G=t||fetch;C=C?(C+"").toLowerCase():"text";let Z=$T([m,h&&h.toAbortSignal()],k),J=null;const X=Z&&Z.unsubscribe&&(()=>{Z.unsubscribe()});let De;try{if(R&&u&&b!=="get"&&b!=="head"&&(De=await g(j,y))!==0){let F=new n(x,{method:"POST",body:y,duplex:"half"}),B;if(T.isFormData(y)&&(B=F.headers.get("content-type"))&&j.setContentType(B),F.body){const[$e,ye]=_m(De,Ra(Vm(R)));y=Bm(F.body,Um,$e,ye)}}T.isString(L)||(L=L?"include":"omit");const $=i&&"credentials"in n.prototype,_={...O,signal:Z,method:b.toUpperCase(),headers:j.normalize().toJSON(),body:y,duplex:"half",credentials:$?L:void 0};J=i&&new n(x,_);let P=await(i?G(J,O):G(x,_));const D=c&&(C==="stream"||C==="response");if(c&&(E||D&&X)){const F={};["status","statusText","headers"].forEach(Be=>{F[Be]=P[Be]});const B=T.toFiniteNumber(P.headers.get("content-length")),[$e,ye]=E&&_m(B,Ra(Vm(E),!0))||[];P=new r(Bm(P.body,Um,$e,()=>{ye&&ye(),X&&X()}),F)}C=C||"text";let N=await d[T.findKey(d,C)||"text"](P,v);return!D&&X&&X(),await new Promise((F,B)=>{Zv(F,B,{data:N,headers:Ct.from(P.headers),status:P.status,statusText:P.statusText,config:v,request:J})})}catch($){throw X&&X(),$&&$.name==="TypeError"&&/Load failed|fetch/i.test($.message)?Object.assign(new V("Network Error",V.ERR_NETWORK,v,J),{cause:$.cause||$}):V.from($,$&&$.code,v,J)}}},YT=new Map,t2=e=>{let t=e?e.env:{};const{fetch:n,Request:r,Response:o}=t,i=[r,o,n];let s=i.length,a=s,l,u,c=YT;for(;a--;)l=i[a],u=c.get(l),u===void 0&&c.set(l,u=a?new Map:GT(t)),c=u;return u};t2();const Hc={http:lT,xhr:_T,fetch:{get:t2}};T.forEach(Hc,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ym=e=>`- ${e}`,KT=e=>T.isFunction(e)||e===null||e===!1,n2={getAdapter:(e,t)=>{e=T.isArray(e)?e:[e];const{length:n}=e;let r,o;const i={};for(let s=0;s<n;s++){r=e[s];let a;if(o=r,!KT(r)&&(o=Hc[(a=String(r)).toLowerCase()],o===void 0))throw new V(`Unknown adapter '${a}'`);if(o&&(T.isFunction(o)||(o=o.get(t))))break;i[a||"#"+s]=o}if(!o){const s=Object.entries(i).map(([l,u])=>`adapter ${l} `+(u===!1?"is not supported by the environment":"is not available in the build"));let a=n?s.length>1?`since :
`+s.map(Ym).join(`
`):" "+Ym(s[0]):"as no adapter specified";throw new V("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return o},adapters:Hc};function hu(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ko(null,e)}function Km(e){return hu(e),e.headers=Ct.from(e.headers),e.data=pu.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),n2.getAdapter(e.adapter||zf.adapter,e)(e).then(function(r){return hu(e),r.data=pu.call(e,e.transformResponse,r),r.headers=Ct.from(r.headers),r},function(r){return Qv(r)||(hu(e),r&&r.response&&(r.response.data=pu.call(e,e.transformResponse,r.response),r.response.headers=Ct.from(r.response.headers))),Promise.reject(r)})}const r2="1.12.2",vl={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{vl[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Xm={};vl.transitional=function(t,n,r){function o(i,s){return"[Axios v"+r2+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,a)=>{if(t===!1)throw new V(o(s," has been removed"+(n?" in "+n:"")),V.ERR_DEPRECATED);return n&&!Xm[s]&&(Xm[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,a):!0}};vl.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function XT(e,t,n){if(typeof e!="object")throw new V("options must be an object",V.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const a=e[i],l=a===void 0||s(a,i,e);if(l!==!0)throw new V("option "+i+" must be "+l,V.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new V("Unknown option "+i,V.ERR_BAD_OPTION)}}const Bs={assertOptions:XT,validators:vl},Rt=Bs.validators;class Aa{constructor(t){this.defaults=t||{},this.interceptors={request:new Fm,response:new Fm}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=dr(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&Bs.assertOptions(r,{silentJSONParsing:Rt.transitional(Rt.boolean),forcedJSONParsing:Rt.transitional(Rt.boolean),clarifyTimeoutError:Rt.transitional(Rt.boolean)},!1),o!=null&&(T.isFunction(o)?n.paramsSerializer={serialize:o}:Bs.assertOptions(o,{encode:Rt.function,serialize:Rt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Bs.assertOptions(n,{baseUrl:Rt.spelling("baseURL"),withXsrfToken:Rt.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&T.merge(i.common,i[n.method]);i&&T.forEach(["delete","get","head","post","put","patch","common"],v=>{delete i[v]}),n.headers=Ct.concat(s,i);const a=[];let l=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(n)===!1||(l=l&&x.synchronous,a.unshift(x.fulfilled,x.rejected))});const u=[];this.interceptors.response.forEach(function(x){u.push(x.fulfilled,x.rejected)});let c,d=0,p;if(!l){const v=[Km.bind(this),void 0];for(v.unshift(...a),v.push(...u),p=v.length,c=Promise.resolve(n);d<p;)c=c.then(v[d++],v[d++]);return c}p=a.length;let g=n;for(;d<p;){const v=a[d++],x=a[d++];try{g=v(g)}catch(b){x.call(this,b);break}}try{c=Km.call(this,g)}catch(v){return Promise.reject(v)}for(d=0,p=u.length;d<p;)c=c.then(u[d++],u[d++]);return c}getUri(t){t=dr(this.defaults,t);const n=Jv(t.baseURL,t.url,t.allowAbsoluteUrls);return Kv(n,t.params,t.paramsSerializer)}}T.forEach(["delete","get","head","options"],function(t){Aa.prototype[t]=function(n,r){return this.request(dr(r||{},{method:t,url:n,data:(r||{}).data}))}});T.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,a){return this.request(dr(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}Aa.prototype[t]=n(),Aa.prototype[t+"Form"]=n(!0)});const Us=Aa;class Of{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(a=>{r.subscribe(a),i=a}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,a){r.reason||(r.reason=new ko(i,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Of(function(o){t=o}),cancel:t}}}const qT=Of;function QT(e){return function(n){return e.apply(null,n)}}function ZT(e){return T.isObject(e)&&e.isAxiosError===!0}const Wc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Wc).forEach(([e,t])=>{Wc[t]=e});const JT=Wc;function o2(e){const t=new Us(e),n=Mv(Us.prototype.request,t);return T.extend(n,Us.prototype,t,{allOwnKeys:!0}),T.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return o2(dr(e,o))},n}const ge=o2(zf);ge.Axios=Us;ge.CanceledError=ko;ge.CancelToken=qT;ge.isCancel=Qv;ge.VERSION=r2;ge.toFormData=gl;ge.AxiosError=V;ge.Cancel=ge.CanceledError;ge.all=function(t){return Promise.all(t)};ge.spread=QT;ge.isAxiosError=ZT;ge.mergeConfig=dr;ge.AxiosHeaders=Ct;ge.formToJSON=e=>qv(T.isHTMLForm(e)?new FormData(e):e);ge.getAdapter=n2.getAdapter;ge.HttpStatusCode=JT;ge.default=ge;const e8=ge,t8="/api",In=e8.create({baseURL:t8,headers:{"Content-Type":"application/json"}});In.interceptors.request.use(e=>{const t=localStorage.getItem("authToken");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));In.interceptors.response.use(e=>e,e=>{var t,n,r,o,i;return console.error("API Error:",{message:e.message,code:e.code,config:{url:(t=e.config)==null?void 0:t.url,method:(n=e.config)==null?void 0:n.method,baseURL:(r=e.config)==null?void 0:r.baseURL},response:(o=e.response)==null?void 0:o.data}),((i=e.response)==null?void 0:i.status)===401&&(localStorage.removeItem("authToken"),window.location.href="/"),Promise.reject(e)});const n8=async e=>{var t;try{return(await In.post("/v1/gymbuddy/usuario",e)).data}catch(n){throw((t=n.response)==null?void 0:t.data)||{message:"Erro ao criar usuário"}}},r8=async e=>{var t;try{return(await In.put("/v1/gymbuddy/usuario/senha",e)).data}catch(n){throw((t=n.response)==null?void 0:t.data)||{message:"Erro ao atualizar senha"}}},o8=async()=>{var e;try{return(await In.get("/v1/gymbuddy/usuario")).data}catch(t){throw((e=t.response)==null?void 0:e.data)||{message:"Erro ao listar usuários"}}},i8=async e=>{var t;try{return(await In.get(`/v1/gymbuddy/usuario/${e}`)).data}catch(n){throw((t=n.response)==null?void 0:t.data)||{message:"Erro ao buscar usuário"}}},s8=async(e,t)=>{var n;try{return(await In.put(`/v1/gymbuddy/usuario/${e}`,t)).data}catch(r){throw((n=r.response)==null?void 0:n.data)||{message:"Erro ao atualizar usuário"}}},a8=async e=>{var t;try{return(await In.delete(`/v1/gymbuddy/usuario/${e}`)).data}catch(n){throw((t=n.response)==null?void 0:t.data)||{message:"Erro ao excluir usuário"}}},l8=()=>{const[e,t]=w.useState(!1),[n,r]=w.useState(null);return{loading:e,error:n,createUser:async c=>{t(!0),r(null);try{const d=await n8(c);return t(!1),d}catch(d){throw r(d.message||"Erro ao criar usuário"),t(!1),d}},updatePassword:async c=>{t(!0),r(null);try{const d=await r8(c);return t(!1),d}catch(d){throw r(d.message||"Erro ao atualizar senha"),t(!1),d}},listUsers:async()=>{t(!0),r(null);try{const c=await o8();return t(!1),c}catch(c){throw r(c.message||"Erro ao listar usuários"),t(!1),c}},getUser:async c=>{t(!0),r(null);try{const d=await i8(c);return t(!1),d}catch(d){throw r(d.message||"Erro ao buscar usuário"),t(!1),d}},updateUser:async(c,d)=>{t(!0),r(null);try{const p=await s8(c,d);return t(!1),p}catch(p){throw r(p.message||"Erro ao atualizar usuário"),t(!1),p}},deleteUser:async c=>{t(!0),r(null);try{const d=await a8(c);return t(!1),d}catch(d){throw r(d.message||"Erro ao excluir usuário"),t(!1),d}}}};async function u8(e){const{file:t,storageAccount:n,sasToken:r,containerName:o}=e,i=`${Date.now()}-${t.name}`,s=`https://${n}.blob.core.windows.net/${o}/${i}`,a=`${s}?${r}`,l={method:"PUT",headers:{"x-ms-blob-type":"BlockBlob","Content-Type":t.type||"application/octet-stream"},body:t},u=await fetch(a,l);if(u.ok)return s;throw new Error(`Upload failed: ${u.status} ${u.statusText}`)}const c8={storageAccount:"gymbuddyfoto",sasToken:"sp=r&st=2025-10-02T18:44:39Z&se=2025-10-03T02:59:39Z&spr=https&sv=2024-11-04&sr=c&sig=Y1ffwILATqQ84SaetGEf933cndS3HPbmLnYs7yPoeAs%3D",containerName:"tccgymbuddyfoto"},d8=()=>{var R;const{user:e,isLoggedIn:t,updateUser:n}=Vi(),r=Xd(),{updateUser:o}=l8(),[i,s]=w.useState(!1),[a,l]=w.useState(!1),[u,c]=w.useState({nome:(e==null?void 0:e.nome)||"",email:(e==null?void 0:e.email)||"",nickname:(e==null?void 0:e.nickname)||"",descricao:(e==null?void 0:e.descricao)||"",localizacao:(e==null?void 0:e.localizacao)||"",data_nascimento:(e==null?void 0:e.data_nascimento)||"",peso:(e==null?void 0:e.peso)||"",altura:(e==null?void 0:e.altura)||"",imc:(e==null?void 0:e.imc)||"",foto:(e==null?void 0:e.foto)||""}),[d,p]=w.useState([]),[g,v]=w.useState(null);w.useEffect(()=>{t||r("/")},[t,r]),w.useEffect(()=>{if(t&&e){const C=localStorage.getItem(`profile_visited_${e.id||e.email}`),j=!e.peso||!e.altura;!C&&j&&setTimeout(()=>{l(!0)},1e3)}},[t,e]),w.useEffect(()=>{e&&c({nome:e.nome||"",email:e.email||"",nickname:e.nickname||"",descricao:e.descricao||"",localizacao:e.localizacao||"",data_nascimento:e.data_nascimento||"",peso:e.peso||"",altura:e.altura||"",imc:e.imc||"",foto:e.foto||""})},[e]);const x=()=>{s(!0)},b=async()=>{try{let C=u.foto;if(g){console.log("📤 Fazendo upload da nova foto para Azure...");try{const j={file:g,...c8};C=await u8(j),console.log("✅ Upload concluído:",C),v(null)}catch(j){console.error("❌ Erro no upload:",j),alert("Erro ao fazer upload da foto. Salvando outros dados...")}}if(e!=null&&e.id){const j={nome:u.nome,email:u.email,nickname:u.nickname,senha:e.senha||"senha123",descricao:u.descricao,localizacao:u.localizacao,data_nascimento:u.data_nascimento,peso:u.peso?Number(u.peso):void 0,altura:u.altura?Number(u.altura):void 0,imc:u.imc?Number(u.imc):void 0,foto:C};console.log("🚀 Enviando dados para API:",{userId:e.id,payload:{...j,senha:"[REDACTED]"}}),await o(e.id,j)}n({...e,...u}),s(!1),console.log("✅ Perfil atualizado com sucesso!")}catch(C){console.error("❌ Erro ao atualizar perfil:",C),alert("Erro ao salvar alterações. Tente novamente.")}},y=async C=>{var j,L;try{e!=null&&e.id&&await o(e.id,{peso:C.peso||void 0,altura:C.altura||void 0}),e&&e.nome&&e.email&&n({...e,nome:e.nome,email:e.email,peso:((j=C.peso)==null?void 0:j.toString())||"--",altura:((L=C.altura)==null?void 0:L.toString())||"--"}),localStorage.setItem(`profile_visited_${(e==null?void 0:e.id)||(e==null?void 0:e.email)}`,"true"),l(!1)}catch(O){console.error("Erro ao salvar dados:",O),alert("Erro ao salvar dados. Tente novamente.")}},m=()=>{e&&e.nome&&e.email&&n({...e,nome:e.nome,email:e.email,peso:"--",altura:"--"}),localStorage.setItem(`profile_visited_${(e==null?void 0:e.id)||(e==null?void 0:e.email)}`,"true"),l(!1)},h=()=>{c({nome:(e==null?void 0:e.nome)||"",email:(e==null?void 0:e.email)||"",nickname:(e==null?void 0:e.nickname)||"",descricao:(e==null?void 0:e.descricao)||"",localizacao:(e==null?void 0:e.localizacao)||"",data_nascimento:(e==null?void 0:e.data_nascimento)||"",peso:(e==null?void 0:e.peso)||"",altura:(e==null?void 0:e.altura)||"",imc:(e==null?void 0:e.imc)||"",foto:(e==null?void 0:e.foto)||""}),v(null),s(!1)},k=C=>{var L;const j=(L=C.target.files)==null?void 0:L[0];if(j){const O=new FileReader;O.onloadend=()=>{const G=O.result;p([...d,G])},O.readAsDataURL(j)}},E=C=>{var L;const j=(L=C.target.files)==null?void 0:L[0];if(j&&e){if(j.size>2*1024*1024){alert("Imagem muito grande! Máximo 2MB permitido.");return}console.log("📸 Foto selecionada para upload:",{fileName:j.name,fileSize:j.size}),v(j);const O=new FileReader;O.onloadend=()=>{const G=O.result;c(Z=>({...Z,foto:G}))},O.readAsDataURL(j)}};return e?f.jsxs(f8,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.6,type:"spring",stiffness:100,damping:20},children:[f.jsx(p8,{}),f.jsxs(h8,{children:[f.jsx(m8,{children:f.jsxs(g8,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.1},children:[f.jsxs(y8,{children:[f.jsxs(x8,{whileHover:{scale:1.02},transition:{duration:.3},children:[u.foto?f.jsx(w8,{src:u.foto,alt:e.nome}):f.jsx(b8,{children:f.jsx(Vc,{size:180})}),i&&f.jsxs(S8,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[f.jsx("input",{type:"file",id:"avatar-upload",accept:"image/*",onChange:E,style:{display:"none"}}),f.jsx("label",{htmlFor:"avatar-upload",children:f.jsx(k8,{whileHover:{scale:1.1,rotate:10},whileTap:{scale:.95},children:f.jsx(eE,{})})})]})]}),f.jsx(v8,{children:f.jsx(We,{mode:"wait",children:i?f.jsxs(I8,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},children:[f.jsxs(_8,{onClick:b,whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},children:[f.jsx(jv,{})," Salvar"]}),f.jsxs(V8,{onClick:h,whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},children:[f.jsx(ir,{})," Cancelar"]})]},"edit-buttons"):f.jsxs(Nf,{onClick:x,whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},children:[f.jsx(tE,{})," Editar Perfil"]},"edit-button")})})]}),f.jsx(C8,{children:f.jsx(We,{mode:"wait",children:i?f.jsxs(T8,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.3},children:[f.jsxs($n,{children:[f.jsx(Bn,{children:f.jsx(_s,{})}),f.jsx(Un,{type:"text",value:u.nome,onChange:C=>c({...u,nome:C.target.value}),placeholder:"Nome completo"})]}),f.jsxs($n,{children:[f.jsx(Bn,{children:f.jsx(ZC,{})}),f.jsx(Un,{type:"text",value:u.nickname,onChange:C=>c({...u,nickname:C.target.value}),placeholder:"Nickname"})]}),f.jsxs($n,{children:[f.jsx(Bn,{children:f.jsx(oE,{})}),f.jsx(Un,{type:"email",value:u.email,onChange:C=>c({...u,email:C.target.value}),placeholder:"Email"})]})]},"editing"):f.jsxs(R8,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},children:[f.jsx(E8,{children:e.nome||"Usuário"}),f.jsxs(P8,{children:["@",e.nickname||((R=e.email)==null?void 0:R.split("@")[0])||"email"]}),f.jsx(j8,{children:e.email})]},"display")})}),f.jsx(A8,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:f.jsx(We,{mode:"wait",children:i?f.jsxs(L8,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[f.jsxs(Sr,{children:[f.jsxs(kr,{children:[f.jsx(Sm,{})," Sobre mim"]}),f.jsx(O8,{children:f.jsx(N8,{value:u.descricao,onChange:C=>c({...u,descricao:C.target.value}),placeholder:"Conte um pouco sobre você, seus objetivos no fitness..."})})]}),f.jsxs(Sr,{children:[f.jsxs(kr,{children:[f.jsx(_s,{})," Informações Pessoais"]}),f.jsxs(Qm,{children:[f.jsxs($n,{children:[f.jsx(Bn,{children:f.jsx(km,{})}),f.jsx(Un,{type:"text",value:u.localizacao,onChange:C=>c({...u,localizacao:C.target.value}),placeholder:"Ex: São Paulo - SP"})]}),f.jsxs($n,{children:[f.jsx(Bn,{children:f.jsx(bm,{})}),f.jsx(Un,{type:"date",value:u.data_nascimento,onChange:C=>c({...u,data_nascimento:C.target.value}),placeholder:"Data de nascimento"})]})]})]}),f.jsxs(Sr,{children:[f.jsxs(kr,{children:[f.jsx(co,{})," Dados Físicos"]}),f.jsxs(Qm,{children:[f.jsxs($n,{children:[f.jsx(Bn,{children:f.jsx(Rv,{})}),f.jsx(Un,{type:"number",step:"0.1",value:u.peso,onChange:C=>c({...u,peso:C.target.value}),placeholder:"Peso"}),f.jsx(qm,{children:"kg"})]}),f.jsxs($n,{children:[f.jsx(Bn,{children:f.jsx(Cf,{})}),f.jsx(Un,{type:"number",step:"0.01",value:u.altura,onChange:C=>c({...u,altura:C.target.value}),placeholder:"Altura"}),f.jsx(qm,{children:"m"})]})]})]})]},"editing-details"):f.jsxs(z8,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[f.jsxs(Sr,{children:[f.jsxs(kr,{children:[f.jsx(Sm,{})," Sobre mim"]}),f.jsx(D8,{children:e.descricao||"Nenhuma descrição adicionada ainda."})]}),f.jsxs(Sr,{children:[f.jsxs(kr,{children:[f.jsx(_s,{})," Informações"]}),f.jsxs(M8,{children:[f.jsxs(Zm,{children:[f.jsx(Jm,{children:f.jsx(km,{})}),f.jsxs(e0,{children:[f.jsx(t0,{children:"Localização"}),f.jsx(n0,{children:e.localizacao||"Não informada"})]})]}),f.jsxs(Zm,{children:[f.jsx(Jm,{children:f.jsx(bm,{})}),f.jsxs(e0,{children:[f.jsx(t0,{children:"Nascimento"}),f.jsx(n0,{children:e.data_nascimento||"Não informado"})]})]})]})]}),f.jsxs(Sr,{children:[f.jsxs(kr,{children:[f.jsx(co,{})," Dados Físicos"]}),f.jsxs(F8,{children:[f.jsxs(mu,{children:[f.jsx(gu,{children:e.peso&&e.peso!=="--"?e.peso:"--"}),f.jsx(yu,{children:"Peso (kg)"})]}),f.jsxs(mu,{children:[f.jsx(gu,{children:e.altura&&e.altura!=="--"?e.altura:"--"}),f.jsx(yu,{children:"Altura (m)"})]}),f.jsxs(mu,{isHighlight:!0,children:[f.jsx(gu,{children:e.imc?Number(e.imc).toFixed(1):"--"}),f.jsx(yu,{children:"IMC"})]})]})]})]},"display-details")})})]})}),f.jsxs($8,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.3},children:[f.jsx(B8,{children:"Fotos"}),f.jsxs(U8,{children:[f.jsx(We,{children:d.map((C,j)=>f.jsxs(i2,{layoutId:`photo-${j}`,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.05,zIndex:10},transition:{duration:.3},children:[f.jsx(H8,{src:C,alt:`Foto ${j+1}`}),f.jsx(W8,{children:f.jsx(G8,{onClick:()=>p(d.filter((L,O)=>O!==j)),whileHover:{scale:1.2},whileTap:{scale:.9},children:f.jsx(ir,{})})})]},j))}),f.jsxs(Y8,{children:[f.jsx("input",{type:"file",id:"photo-upload",accept:"image/*",onChange:k,style:{display:"none"}}),f.jsx("label",{htmlFor:"photo-upload",children:f.jsxs(K8,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[f.jsx(sE,{}),f.jsx("span",{children:"Adicionar Foto"})]})})]}),Array.from({length:Math.max(0,5-d.length)}).map((C,j)=>f.jsx(X8,{},`placeholder-${j}`))]})]})]}),f.jsx(cj,{isOpen:a,onClose:()=>l(!1),onSubmit:y,onSkip:m})]}):null},f8=S(A.div)`
  min-height: 100vh;
  background: #0A0A0A;
  padding-top: 10rem;
  padding-bottom: 4rem;
  position: relative;
  overflow-x: hidden;
`,p8=S.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    ellipse at top right,
    rgba(227, 6, 19, 0.1) 0%,
    transparent 50%
  ),
  radial-gradient(
    ellipse at bottom left,
    rgba(227, 6, 19, 0.05) 0%,
    transparent 50%
  );
  pointer-events: none;
  z-index: 0;
`,h8=S.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`,m8=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6rem;
`,g8=S(A.div)`
  background: rgba(20, 20, 20, 0.4);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 3rem;
  padding: 4rem;
  width: 100%;
  max-width: 80rem;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.3),
    inset 0 0 30px rgba(227, 6, 19, 0.02);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(227, 6, 19, 0.5),
      transparent
    );
  }
`,y8=S.div`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`,v8=S.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  justify-content: center;
`,x8=S(A.div)`
  position: relative;
  width: 18rem;
  height: 18rem;
`,w8=S.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(227, 6, 19, 0.3);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
`,b8=S.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  border: 4px solid rgba(227, 6, 19, 0.3);
`,S8=S(A.div)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`,k8=S(A.div)`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(227, 6, 19, 0.4);
  
  svg {
    color: white;
    font-size: 2rem;
  }
`,C8=S.div`
  text-align: center;
  margin-bottom: 3rem;
  width: 100%;
`,E8=S.h1`
  font-size: 3rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 0.5rem;
`,P8=S.p`
  font-size: 1.8rem;
  color: var(--primary);
  font-weight: 600;
  margin: 0.5rem 0;
`,j8=S.p`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 400;
`,T8=S(A.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
`,R8=S(A.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`,$n=S.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`,Bn=S.div`
  position: absolute;
  left: 1.8rem;
  color: var(--primary);
  font-size: 2rem;
  z-index: 1;
  pointer-events: none;
`,Un=S.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.6rem;
  padding: 1.4rem 1.8rem 1.4rem 5rem;
  font-size: 1.6rem;
  color: var(--white);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 30px rgba(227, 6, 19, 0.1);
    transform: translateY(-2px);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`,qm=S.span`
  position: absolute;
  right: 1.8rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.6rem;
  pointer-events: none;
`;S.div`
  margin-bottom: 3rem;
`;const A8=S(A.div)`
  background: rgba(20, 20, 20, 0.3);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 2.5rem;
  padding: 3rem;
  width: 100%;
  max-width: 80rem;
  margin: 3rem auto;
  box-shadow: 
    0 15px 40px rgba(0, 0, 0, 0.2),
    inset 0 0 20px rgba(227, 6, 19, 0.01);
`,L8=S(A.div)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`,z8=S(A.div)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`,Sr=S.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,kr=S.h3`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 1rem;
  
  svg {
    font-size: 2rem;
  }
`,O8=S.div`
  width: 100%;
`,N8=S.textarea`
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.6rem;
  padding: 1.5rem 1.8rem;
  font-size: 1.6rem;
  color: var(--white);
  min-height: 12rem;
  resize: vertical;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 30px rgba(227, 6, 19, 0.1);
    transform: translateY(-2px);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`,Qm=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 2rem;
`,D8=S.p`
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`,M8=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;
`,Zm=S.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(227, 6, 19, 0.2);
    transform: translateY(-2px);
  }
`,Jm=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background: rgba(227, 6, 19, 0.1);
  border-radius: 1.2rem;
  color: var(--primary);
  font-size: 2rem;
`,e0=S.div`
  flex: 1;
`,t0=S.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.3rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,n0=S.p`
  font-size: 1.6rem;
  color: var(--white);
  font-weight: 500;
`,F8=S.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`,mu=S.div`
  padding: 2rem;
  background: ${e=>e.isHighlight?"linear-gradient(135deg, rgba(227, 6, 19, 0.1), rgba(227, 6, 19, 0.05))":"rgba(255, 255, 255, 0.02)"};
  border: 1px solid ${e=>e.isHighlight?"rgba(227, 6, 19, 0.3)":"rgba(255, 255, 255, 0.05)"};
  border-radius: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    background: ${e=>e.isHighlight?"linear-gradient(135deg, rgba(227, 6, 19, 0.15), rgba(227, 6, 19, 0.08))":"rgba(255, 255, 255, 0.04)"};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`,gu=S.div`
  font-size: 3rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 0.5rem;
`,yu=S.div`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;S.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;
  justify-content: center;
`;const I8=S(A.div)`
  display: flex;
  gap: 1.5rem;
`,Nf=S(A.button)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.4rem 3.5rem;
  background: linear-gradient(135deg, var(--primary), #FF1744);
  color: white;
  border: none;
  border-radius: 2rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 
    0 10px 30px rgba(227, 6, 19, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  svg {
    font-size: 1.8rem;
  }
`,_8=S(Nf)`
  background: linear-gradient(135deg, #10B981, #059669);
  box-shadow: 
    0 10px 30px rgba(16, 185, 129, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
`,V8=S(Nf)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
  }
`,$8=S(A.div)`
  margin-top: 4rem;
  background: rgba(20, 20, 20, 0.3);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 2.5rem;
  padding: 3rem;
  box-shadow: 
    0 15px 40px rgba(0, 0, 0, 0.2),
    inset 0 0 20px rgba(227, 6, 19, 0.01);
`,B8=S.h2`
  font-size: 2.4rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary), #FF1744);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 8rem;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--primary), transparent);
  }
`,U8=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 2rem;
  max-width: 100%;
`,i2=S(A.div)`
  position: relative;
  aspect-ratio: 1;
  border-radius: 1.8rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(227, 6, 19, 0.1),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  &:hover::before {
    opacity: 1;
  }
`,H8=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,W8=S.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${i2}:hover & {
    opacity: 1;
  }
`,G8=S(A.button)`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: rgba(239, 68, 68, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  
  svg {
    color: white;
    font-size: 2rem;
  }
`,Y8=S.div`
  aspect-ratio: 1;
  border-radius: 1.8rem;
  background: rgba(255, 255, 255, 0.02);
  border: 3px dashed rgba(227, 6, 19, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    background: radial-gradient(
      circle,
      rgba(227, 6, 19, 0.1),
      transparent
    );
    transition: all 0.5s;
  }
  
  &:hover {
    background: rgba(227, 6, 19, 0.05);
    border-color: var(--primary);
    transform: translateY(-3px);
    
    &::before {
      width: 200%;
      height: 200%;
    }
  }
`,K8=S(A.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.5);
  
  svg {
    font-size: 3rem;
  }
  
  span {
    font-size: 1.4rem;
    font-weight: 500;
  }
  
  &:hover {
    color: var(--primary);
  }
`,X8=S.div`
  aspect-ratio: 1;
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
`,q8=()=>f.jsx(Q8,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:f.jsxs(Z8,{children:[f.jsx(J8,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:200,delay:.2},children:f.jsx(Tv,{})}),f.jsx(eR,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:"Rede GymBuddy"}),f.jsx(tR,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:"Em breve você poderá se conectar com outros membros, compartilhar treinos e acompanhar o progresso da comunidade!"}),f.jsxs(nR,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},children:[f.jsxs(vu,{children:[f.jsx(Ef,{}),f.jsx("span",{children:"Conecte-se com outros atletas"})]}),f.jsxs(vu,{children:[f.jsx(co,{}),f.jsx("span",{children:"Compartilhe seus treinos"})]}),f.jsxs(vu,{children:[f.jsx(Cf,{}),f.jsx("span",{children:"Acompanhe o progresso da comunidade"})]})]}),f.jsx(rR,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.6},children:"Em Desenvolvimento 🚀"})]})}),Q8=S(A.div)`
  min-height: 100vh;
  background: linear-gradient(135deg, #0A0A0A 0%, #151515 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12rem 2rem 6rem;
`,Z8=S.div`
  max-width: 80rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`,J8=S(A.div)`
  width: 12rem;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, 
    rgba(227, 6, 19, 0.2) 0%,
    rgba(227, 6, 19, 0.1) 100%
  );
  border: 2px solid rgba(227, 6, 19, 0.3);
  border-radius: 50%;
  
  svg {
    font-size: 6rem;
    color: rgba(227, 6, 19, 0.9);
  }
`,eR=S(A.h1)`
  font-size: clamp(3.6rem, 6vw, 5.6rem);
  font-weight: 700;
  color: rgba(255, 255, 255, 0.98);
  margin: 0;
  background: linear-gradient(135deg, #ffffff 0%, rgba(227, 6, 19, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,tR=S(A.p)`
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  max-width: 60rem;
  margin: 0;
`,nR=S(A.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`,vu=S.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 3rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.2rem;
  transition: all 0.3s ease;
  
  svg {
    font-size: 2.4rem;
    color: rgba(227, 6, 19, 0.8);
    flex-shrink: 0;
  }
  
  span {
    font-size: 1.6rem;
    color: rgba(255, 255, 255, 0.85);
    text-align: left;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(227, 6, 19, 0.3);
    transform: translateX(5px);
  }
`,rR=S(A.div)`
  padding: 1.2rem 3rem;
  background: linear-gradient(135deg, 
    rgba(227, 6, 19, 0.2) 0%,
    rgba(227, 6, 19, 0.1) 100%
  );
  border: 1px solid rgba(227, 6, 19, 0.4);
  border-radius: 5rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  margin-top: 2rem;
`,Cr={initial:{opacity:0,scale:.95,y:20,filter:"blur(10px)"},in:{opacity:1,scale:1,y:0,filter:"blur(0px)"},out:{opacity:0,scale:1.05,y:-20,filter:"blur(10px)"}},Er={type:"tween",ease:[.25,.46,.45,.94],duration:.6},oR=()=>{const e=on();return f.jsx(We,{mode:"wait",children:f.jsxs(Pb,{location:e,children:[f.jsx(Gn,{path:"/",element:f.jsx(A.div,{initial:"initial",animate:"in",exit:"out",variants:Cr,transition:Er,children:f.jsx(Q6,{})})}),f.jsx(Gn,{path:"/sobre",element:f.jsx(A.div,{initial:"initial",animate:"in",exit:"out",variants:Cr,transition:Er,children:f.jsx(Z6,{})})}),f.jsx(Gn,{path:"/recursos",element:f.jsx(A.div,{initial:"initial",animate:"in",exit:"out",variants:Cr,transition:Er,children:f.jsx(OP,{})})}),f.jsx(Gn,{path:"/app",element:f.jsx(A.div,{initial:"initial",animate:"in",exit:"out",variants:Cr,transition:Er,children:f.jsx(oj,{})})}),f.jsx(Gn,{path:"/perfil",element:f.jsx(A.div,{initial:"initial",animate:"in",exit:"out",variants:Cr,transition:Er,children:f.jsx(d8,{})})}),f.jsx(Gn,{path:"/rede",element:f.jsx(A.div,{initial:"initial",animate:"in",exit:"out",variants:Cr,transition:Er,children:f.jsx(q8,{})})})]},e.pathname)})};function iR(){return f.jsx(CE,{children:f.jsxs(qb,{children:[f.jsx(QE,{}),f.jsx(M6,{}),f.jsx(oR,{})]})})}xu.createRoot(document.getElementById("root")).render(f.jsxs(we.StrictMode,{children:[f.jsx(Ow,{}),f.jsx(iR,{})]}));

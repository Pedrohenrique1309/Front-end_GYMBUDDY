(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function iy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ph={exports:{}},Qs={},Th={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ro=Symbol.for("react.element"),oy=Symbol.for("react.portal"),sy=Symbol.for("react.fragment"),ay=Symbol.for("react.strict_mode"),ly=Symbol.for("react.profiler"),uy=Symbol.for("react.provider"),cy=Symbol.for("react.context"),dy=Symbol.for("react.forward_ref"),fy=Symbol.for("react.suspense"),py=Symbol.for("react.memo"),hy=Symbol.for("react.lazy"),Rd=Symbol.iterator;function my(e){return e===null||typeof e!="object"?null:(e=Rd&&e[Rd]||e["@@iterator"],typeof e=="function"?e:null)}var jh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ah=Object.assign,Rh={};function Gr(e,t,n){this.props=e,this.context=t,this.refs=Rh,this.updater=n||jh}Gr.prototype.isReactComponent={};Gr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Lh(){}Lh.prototype=Gr.prototype;function qu(e,t,n){this.props=e,this.context=t,this.refs=Rh,this.updater=n||jh}var Ju=qu.prototype=new Lh;Ju.constructor=qu;Ah(Ju,Gr.prototype);Ju.isPureReactComponent=!0;var Ld=Array.isArray,Mh=Object.prototype.hasOwnProperty,ec={current:null},Dh={key:!0,ref:!0,__self:!0,__source:!0};function zh(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Mh.call(t,r)&&!Dh.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ro,type:e,key:o,ref:s,props:i,_owner:ec.current}}function gy(e,t){return{$$typeof:ro,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function tc(e){return typeof e=="object"&&e!==null&&e.$$typeof===ro}function yy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Md=/\/+/g;function Va(e,t){return typeof e=="object"&&e!==null&&e.key!=null?yy(""+e.key):t.toString(36)}function Uo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ro:case oy:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Va(s,0):r,Ld(i)?(n="",e!=null&&(n=e.replace(Md,"$&/")+"/"),Uo(i,t,n,"",function(u){return u})):i!=null&&(tc(i)&&(i=gy(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Md,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Ld(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Va(o,a);s+=Uo(o,t,n,l,i)}else if(l=my(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Va(o,a++),s+=Uo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function yo(e,t,n){if(e==null)return e;var r=[],i=0;return Uo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function vy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},Ho={transition:null},xy={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:Ho,ReactCurrentOwner:ec};function Vh(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:yo,forEach:function(e,t,n){yo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yo(e,function(){t++}),t},toArray:function(e){return yo(e,function(t){return t})||[]},only:function(e){if(!tc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=Gr;$.Fragment=sy;$.Profiler=ly;$.PureComponent=qu;$.StrictMode=ay;$.Suspense=fy;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xy;$.act=Vh;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ah({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=ec.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Mh.call(t,l)&&!Dh.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ro,type:e.type,key:i,ref:o,props:r,_owner:s}};$.createContext=function(e){return e={$$typeof:cy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:uy,_context:e},e.Consumer=e};$.createElement=zh;$.createFactory=function(e){var t=zh.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:dy,render:e}};$.isValidElement=tc;$.lazy=function(e){return{$$typeof:hy,_payload:{_status:-1,_result:e},_init:vy}};$.memo=function(e,t){return{$$typeof:py,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=Ho.transition;Ho.transition={};try{e()}finally{Ho.transition=t}};$.unstable_act=Vh;$.useCallback=function(e,t){return De.current.useCallback(e,t)};$.useContext=function(e){return De.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return De.current.useDeferredValue(e)};$.useEffect=function(e,t){return De.current.useEffect(e,t)};$.useId=function(){return De.current.useId()};$.useImperativeHandle=function(e,t,n){return De.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return De.current.useMemo(e,t)};$.useReducer=function(e,t,n){return De.current.useReducer(e,t,n)};$.useRef=function(e){return De.current.useRef(e)};$.useState=function(e){return De.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return De.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return De.current.useTransition()};$.version="18.3.1";Th.exports=$;var x=Th.exports;const ge=iy(x);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wy=x,Sy=Symbol.for("react.element"),ky=Symbol.for("react.fragment"),Cy=Object.prototype.hasOwnProperty,by=wy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ey={key:!0,ref:!0,__self:!0,__source:!0};function Nh(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Cy.call(t,r)&&!Ey.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Sy,type:e,key:o,ref:s,props:i,_owner:by.current}}Qs.Fragment=ky;Qs.jsx=Nh;Qs.jsxs=Nh;Ph.exports=Qs;var p=Ph.exports,Rl={},Fh={exports:{}},Ye={},Ih={exports:{}},Oh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,D){var L=b.length;b.push(D);e:for(;0<L;){var N=L-1>>>1,_=b[N];if(0<i(_,D))b[N]=D,b[L]=_,L=N;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var D=b[0],L=b.pop();if(L!==D){b[0]=L;e:for(var N=0,_=b.length,xt=_>>>1;N<xt;){var Ve=2*(N+1)-1,at=b[Ve],he=Ve+1,Qe=b[he];if(0>i(at,L))he<_&&0>i(Qe,at)?(b[N]=Qe,b[he]=L,N=he):(b[N]=at,b[Ve]=L,N=Ve);else if(he<_&&0>i(Qe,L))b[N]=Qe,b[he]=L,N=he;else break e}}return D}function i(b,D){var L=b.sortIndex-D.sortIndex;return L!==0?L:b.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,f=3,y=!1,v=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(b){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=b)r(u),D.sortIndex=D.expirationTime,t(l,D);else break;D=n(u)}}function S(b){if(w=!1,m(b),!v)if(n(l)!==null)v=!0,H(E);else{var D=n(u);D!==null&&O(S,D.startTime-b)}}function E(b,D){v=!1,w&&(w=!1,g(j),j=-1),y=!0;var L=f;try{for(m(D),d=n(l);d!==null&&(!(d.expirationTime>D)||b&&!Y());){var N=d.callback;if(typeof N=="function"){d.callback=null,f=d.priorityLevel;var _=N(d.expirationTime<=D);D=e.unstable_now(),typeof _=="function"?d.callback=_:d===n(l)&&r(l),m(D)}else r(l);d=n(l)}if(d!==null)var xt=!0;else{var Ve=n(u);Ve!==null&&O(S,Ve.startTime-D),xt=!1}return xt}finally{d=null,f=L,y=!1}}var T=!1,P=null,j=-1,M=5,V=-1;function Y(){return!(e.unstable_now()-V<M)}function le(){if(P!==null){var b=e.unstable_now();V=b;var D=!0;try{D=P(!0,b)}finally{D?ce():(T=!1,P=null)}}else T=!1}var ce;if(typeof h=="function")ce=function(){h(le)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,Xe=oe.port2;oe.port1.onmessage=le,ce=function(){Xe.postMessage(null)}}else ce=function(){k(le,0)};function H(b){P=b,T||(T=!0,ce())}function O(b,D){j=k(function(){b(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,H(E))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(b){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var L=f;f=D;try{return b()}finally{f=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,D){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var L=f;f=b;try{return D()}finally{f=L}},e.unstable_scheduleCallback=function(b,D,L){var N=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?N+L:N):L=N,b){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=L+_,b={id:c++,callback:D,priorityLevel:b,startTime:L,expirationTime:_,sortIndex:-1},L>N?(b.sortIndex=L,t(u,b),n(l)===null&&b===n(u)&&(w?(g(j),j=-1):w=!0,O(S,L-N))):(b.sortIndex=_,t(l,b),v||y||(v=!0,H(E))),b},e.unstable_shouldYield=Y,e.unstable_wrapCallback=function(b){var D=f;return function(){var L=f;f=D;try{return b.apply(this,arguments)}finally{f=L}}}})(Oh);Ih.exports=Oh;var Py=Ih.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ty=x,We=Py;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $h=new Set,Ni={};function Qn(e,t){Rr(e,t),Rr(e+"Capture",t)}function Rr(e,t){for(Ni[e]=t,e=0;e<t.length;e++)$h.add(t[e])}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ll=Object.prototype.hasOwnProperty,jy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dd={},zd={};function Ay(e){return Ll.call(zd,e)?!0:Ll.call(Dd,e)?!1:jy.test(e)?zd[e]=!0:(Dd[e]=!0,!1)}function Ry(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ly(e,t,n,r){if(t===null||typeof t>"u"||Ry(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){be[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];be[t]=new ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){be[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){be[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){be[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){be[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){be[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){be[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){be[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var nc=/[\-:]([a-z])/g;function rc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(nc,rc);be[t]=new ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(nc,rc);be[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(nc,rc);be[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){be[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});be.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){be[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function ic(e,t,n,r){var i=be.hasOwnProperty(t)?be[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ly(t,n,i,r)&&(n=null),r||i===null?Ay(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Gt=Ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vo=Symbol.for("react.element"),sr=Symbol.for("react.portal"),ar=Symbol.for("react.fragment"),oc=Symbol.for("react.strict_mode"),Ml=Symbol.for("react.profiler"),_h=Symbol.for("react.provider"),Bh=Symbol.for("react.context"),sc=Symbol.for("react.forward_ref"),Dl=Symbol.for("react.suspense"),zl=Symbol.for("react.suspense_list"),ac=Symbol.for("react.memo"),tn=Symbol.for("react.lazy"),Uh=Symbol.for("react.offscreen"),Vd=Symbol.iterator;function ei(e){return e===null||typeof e!="object"?null:(e=Vd&&e[Vd]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,Na;function hi(e){if(Na===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Na=t&&t[1]||""}return`
`+Na+e}var Fa=!1;function Ia(e,t){if(!e||Fa)return"";Fa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Fa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?hi(e):""}function My(e){switch(e.tag){case 5:return hi(e.type);case 16:return hi("Lazy");case 13:return hi("Suspense");case 19:return hi("SuspenseList");case 0:case 2:case 15:return e=Ia(e.type,!1),e;case 11:return e=Ia(e.type.render,!1),e;case 1:return e=Ia(e.type,!0),e;default:return""}}function Vl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ar:return"Fragment";case sr:return"Portal";case Ml:return"Profiler";case oc:return"StrictMode";case Dl:return"Suspense";case zl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bh:return(e.displayName||"Context")+".Consumer";case _h:return(e._context.displayName||"Context")+".Provider";case sc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ac:return t=e.displayName||null,t!==null?t:Vl(e.type)||"Memo";case tn:t=e._payload,e=e._init;try{return Vl(e(t))}catch{}}return null}function Dy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vl(t);case 8:return t===oc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zy(e){var t=Hh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xo(e){e._valueTracker||(e._valueTracker=zy(e))}function Wh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Hh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function fs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Nl(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Nd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Sn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gh(e,t){t=t.checked,t!=null&&ic(e,"checked",t,!1)}function Fl(e,t){Gh(e,t);var n=Sn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Il(e,t.type,n):t.hasOwnProperty("defaultValue")&&Il(e,t.type,Sn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Il(e,t,n){(t!=="number"||fs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mi=Array.isArray;function Cr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Sn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ol(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Id(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(mi(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Sn(n)}}function Yh(e,t){var n=Sn(t.value),r=Sn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Od(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Kh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $l(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Kh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wo,Xh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wo=wo||document.createElement("div"),wo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vy=["Webkit","ms","Moz","O"];Object.keys(wi).forEach(function(e){Vy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wi[t]=wi[e]})});function Qh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||wi.hasOwnProperty(e)&&wi[e]?(""+t).trim():t+"px"}function Zh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ny=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _l(e,t){if(t){if(Ny[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function Bl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ul=null;function lc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hl=null,br=null,Er=null;function $d(e){if(e=so(e)){if(typeof Hl!="function")throw Error(A(280));var t=e.stateNode;t&&(t=ta(t),Hl(e.stateNode,e.type,t))}}function qh(e){br?Er?Er.push(e):Er=[e]:br=e}function Jh(){if(br){var e=br,t=Er;if(Er=br=null,$d(e),t)for(e=0;e<t.length;e++)$d(t[e])}}function em(e,t){return e(t)}function tm(){}var Oa=!1;function nm(e,t,n){if(Oa)return e(t,n);Oa=!0;try{return em(e,t,n)}finally{Oa=!1,(br!==null||Er!==null)&&(tm(),Jh())}}function Ii(e,t){var n=e.stateNode;if(n===null)return null;var r=ta(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var Wl=!1;if(_t)try{var ti={};Object.defineProperty(ti,"passive",{get:function(){Wl=!0}}),window.addEventListener("test",ti,ti),window.removeEventListener("test",ti,ti)}catch{Wl=!1}function Fy(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Si=!1,ps=null,hs=!1,Gl=null,Iy={onError:function(e){Si=!0,ps=e}};function Oy(e,t,n,r,i,o,s,a,l){Si=!1,ps=null,Fy.apply(Iy,arguments)}function $y(e,t,n,r,i,o,s,a,l){if(Oy.apply(this,arguments),Si){if(Si){var u=ps;Si=!1,ps=null}else throw Error(A(198));hs||(hs=!0,Gl=u)}}function Zn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function rm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _d(e){if(Zn(e)!==e)throw Error(A(188))}function _y(e){var t=e.alternate;if(!t){if(t=Zn(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return _d(i),e;if(o===r)return _d(i),t;o=o.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function im(e){return e=_y(e),e!==null?om(e):null}function om(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=om(e);if(t!==null)return t;e=e.sibling}return null}var sm=We.unstable_scheduleCallback,Bd=We.unstable_cancelCallback,By=We.unstable_shouldYield,Uy=We.unstable_requestPaint,ue=We.unstable_now,Hy=We.unstable_getCurrentPriorityLevel,uc=We.unstable_ImmediatePriority,am=We.unstable_UserBlockingPriority,ms=We.unstable_NormalPriority,Wy=We.unstable_LowPriority,lm=We.unstable_IdlePriority,Zs=null,Et=null;function Gy(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Zs,e,void 0,(e.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:Xy,Yy=Math.log,Ky=Math.LN2;function Xy(e){return e>>>=0,e===0?32:31-(Yy(e)/Ky|0)|0}var So=64,ko=4194304;function gi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function gs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=gi(a):(o&=s,o!==0&&(r=gi(o)))}else s=n&~i,s!==0?r=gi(s):o!==0&&(r=gi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ht(t),i=1<<n,r|=e[n],t&=~i;return r}function Qy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-ht(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Qy(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Yl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function um(){var e=So;return So<<=1,!(So&4194240)&&(So=64),e}function $a(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function io(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ht(t),e[t]=n}function qy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ht(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function cc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ht(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var G=0;function cm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var dm,dc,fm,pm,hm,Kl=!1,Co=[],un=null,cn=null,dn=null,Oi=new Map,$i=new Map,on=[],Jy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ud(e,t){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":Oi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$i.delete(t.pointerId)}}function ni(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=so(t),t!==null&&dc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ev(e,t,n,r,i){switch(t){case"focusin":return un=ni(un,e,t,n,r,i),!0;case"dragenter":return cn=ni(cn,e,t,n,r,i),!0;case"mouseover":return dn=ni(dn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Oi.set(o,ni(Oi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,$i.set(o,ni($i.get(o)||null,e,t,n,r,i)),!0}return!1}function mm(e){var t=Nn(e.target);if(t!==null){var n=Zn(t);if(n!==null){if(t=n.tag,t===13){if(t=rm(n),t!==null){e.blockedOn=t,hm(e.priority,function(){fm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ul=r,n.target.dispatchEvent(r),Ul=null}else return t=so(n),t!==null&&dc(t),e.blockedOn=n,!1;t.shift()}return!0}function Hd(e,t,n){Wo(e)&&n.delete(t)}function tv(){Kl=!1,un!==null&&Wo(un)&&(un=null),cn!==null&&Wo(cn)&&(cn=null),dn!==null&&Wo(dn)&&(dn=null),Oi.forEach(Hd),$i.forEach(Hd)}function ri(e,t){e.blockedOn===t&&(e.blockedOn=null,Kl||(Kl=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,tv)))}function _i(e){function t(i){return ri(i,e)}if(0<Co.length){ri(Co[0],e);for(var n=1;n<Co.length;n++){var r=Co[n];r.blockedOn===e&&(r.blockedOn=null)}}for(un!==null&&ri(un,e),cn!==null&&ri(cn,e),dn!==null&&ri(dn,e),Oi.forEach(t),$i.forEach(t),n=0;n<on.length;n++)r=on[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<on.length&&(n=on[0],n.blockedOn===null);)mm(n),n.blockedOn===null&&on.shift()}var Pr=Gt.ReactCurrentBatchConfig,ys=!0;function nv(e,t,n,r){var i=G,o=Pr.transition;Pr.transition=null;try{G=1,fc(e,t,n,r)}finally{G=i,Pr.transition=o}}function rv(e,t,n,r){var i=G,o=Pr.transition;Pr.transition=null;try{G=4,fc(e,t,n,r)}finally{G=i,Pr.transition=o}}function fc(e,t,n,r){if(ys){var i=Xl(e,t,n,r);if(i===null)Qa(e,t,r,vs,n),Ud(e,r);else if(ev(i,e,t,n,r))r.stopPropagation();else if(Ud(e,r),t&4&&-1<Jy.indexOf(e)){for(;i!==null;){var o=so(i);if(o!==null&&dm(o),o=Xl(e,t,n,r),o===null&&Qa(e,t,r,vs,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Qa(e,t,r,null,n)}}var vs=null;function Xl(e,t,n,r){if(vs=null,e=lc(r),e=Nn(e),e!==null)if(t=Zn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=rm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return vs=e,null}function gm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hy()){case uc:return 1;case am:return 4;case ms:case Wy:return 16;case lm:return 536870912;default:return 16}default:return 16}}var an=null,pc=null,Go=null;function ym(){if(Go)return Go;var e,t=pc,n=t.length,r,i="value"in an?an.value:an.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Go=i.slice(e,1<r?1-r:void 0)}function Yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bo(){return!0}function Wd(){return!1}function Ke(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?bo:Wd,this.isPropagationStopped=Wd,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bo)},persist:function(){},isPersistent:bo}),t}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hc=Ke(Yr),oo=ie({},Yr,{view:0,detail:0}),iv=Ke(oo),_a,Ba,ii,qs=ie({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ii&&(ii&&e.type==="mousemove"?(_a=e.screenX-ii.screenX,Ba=e.screenY-ii.screenY):Ba=_a=0,ii=e),_a)},movementY:function(e){return"movementY"in e?e.movementY:Ba}}),Gd=Ke(qs),ov=ie({},qs,{dataTransfer:0}),sv=Ke(ov),av=ie({},oo,{relatedTarget:0}),Ua=Ke(av),lv=ie({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),uv=Ke(lv),cv=ie({},Yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dv=Ke(cv),fv=ie({},Yr,{data:0}),Yd=Ke(fv),pv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mv[e])?!!t[e]:!1}function mc(){return gv}var yv=ie({},oo,{key:function(e){if(e.key){var t=pv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mc,charCode:function(e){return e.type==="keypress"?Yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vv=Ke(yv),xv=ie({},qs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kd=Ke(xv),wv=ie({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mc}),Sv=Ke(wv),kv=ie({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cv=Ke(kv),bv=ie({},qs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ev=Ke(bv),Pv=[9,13,27,32],gc=_t&&"CompositionEvent"in window,ki=null;_t&&"documentMode"in document&&(ki=document.documentMode);var Tv=_t&&"TextEvent"in window&&!ki,vm=_t&&(!gc||ki&&8<ki&&11>=ki),Xd=String.fromCharCode(32),Qd=!1;function xm(e,t){switch(e){case"keyup":return Pv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var lr=!1;function jv(e,t){switch(e){case"compositionend":return wm(t);case"keypress":return t.which!==32?null:(Qd=!0,Xd);case"textInput":return e=t.data,e===Xd&&Qd?null:e;default:return null}}function Av(e,t){if(lr)return e==="compositionend"||!gc&&xm(e,t)?(e=ym(),Go=pc=an=null,lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vm&&t.locale!=="ko"?null:t.data;default:return null}}var Rv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rv[e.type]:t==="textarea"}function Sm(e,t,n,r){qh(r),t=xs(t,"onChange"),0<t.length&&(n=new hc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ci=null,Bi=null;function Lv(e){Mm(e,0)}function Js(e){var t=dr(e);if(Wh(t))return e}function Mv(e,t){if(e==="change")return t}var km=!1;if(_t){var Ha;if(_t){var Wa="oninput"in document;if(!Wa){var qd=document.createElement("div");qd.setAttribute("oninput","return;"),Wa=typeof qd.oninput=="function"}Ha=Wa}else Ha=!1;km=Ha&&(!document.documentMode||9<document.documentMode)}function Jd(){Ci&&(Ci.detachEvent("onpropertychange",Cm),Bi=Ci=null)}function Cm(e){if(e.propertyName==="value"&&Js(Bi)){var t=[];Sm(t,Bi,e,lc(e)),nm(Lv,t)}}function Dv(e,t,n){e==="focusin"?(Jd(),Ci=t,Bi=n,Ci.attachEvent("onpropertychange",Cm)):e==="focusout"&&Jd()}function zv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Js(Bi)}function Vv(e,t){if(e==="click")return Js(t)}function Nv(e,t){if(e==="input"||e==="change")return Js(t)}function Fv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:Fv;function Ui(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ll.call(t,i)||!yt(e[i],t[i]))return!1}return!0}function ef(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tf(e,t){var n=ef(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ef(n)}}function bm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Em(){for(var e=window,t=fs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=fs(e.document)}return t}function yc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Iv(e){var t=Em(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&bm(n.ownerDocument.documentElement,n)){if(r!==null&&yc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=tf(n,o);var s=tf(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ov=_t&&"documentMode"in document&&11>=document.documentMode,ur=null,Ql=null,bi=null,Zl=!1;function nf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zl||ur==null||ur!==fs(r)||(r=ur,"selectionStart"in r&&yc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bi&&Ui(bi,r)||(bi=r,r=xs(Ql,"onSelect"),0<r.length&&(t=new hc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ur)))}function Eo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:Eo("Animation","AnimationEnd"),animationiteration:Eo("Animation","AnimationIteration"),animationstart:Eo("Animation","AnimationStart"),transitionend:Eo("Transition","TransitionEnd")},Ga={},Pm={};_t&&(Pm=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function ea(e){if(Ga[e])return Ga[e];if(!cr[e])return e;var t=cr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pm)return Ga[e]=t[n];return e}var Tm=ea("animationend"),jm=ea("animationiteration"),Am=ea("animationstart"),Rm=ea("transitionend"),Lm=new Map,rf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function En(e,t){Lm.set(e,t),Qn(t,[e])}for(var Ya=0;Ya<rf.length;Ya++){var Ka=rf[Ya],$v=Ka.toLowerCase(),_v=Ka[0].toUpperCase()+Ka.slice(1);En($v,"on"+_v)}En(Tm,"onAnimationEnd");En(jm,"onAnimationIteration");En(Am,"onAnimationStart");En("dblclick","onDoubleClick");En("focusin","onFocus");En("focusout","onBlur");En(Rm,"onTransitionEnd");Rr("onMouseEnter",["mouseout","mouseover"]);Rr("onMouseLeave",["mouseout","mouseover"]);Rr("onPointerEnter",["pointerout","pointerover"]);Rr("onPointerLeave",["pointerout","pointerover"]);Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bv=new Set("cancel close invalid load scroll toggle".split(" ").concat(yi));function of(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$y(r,t,void 0,e),e.currentTarget=null}function Mm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;of(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;of(i,a,u),o=l}}}if(hs)throw e=Gl,hs=!1,Gl=null,e}function Q(e,t){var n=t[nu];n===void 0&&(n=t[nu]=new Set);var r=e+"__bubble";n.has(r)||(Dm(t,e,2,!1),n.add(r))}function Xa(e,t,n){var r=0;t&&(r|=4),Dm(n,e,r,t)}var Po="_reactListening"+Math.random().toString(36).slice(2);function Hi(e){if(!e[Po]){e[Po]=!0,$h.forEach(function(n){n!=="selectionchange"&&(Bv.has(n)||Xa(n,!1,e),Xa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Po]||(t[Po]=!0,Xa("selectionchange",!1,t))}}function Dm(e,t,n,r){switch(gm(t)){case 1:var i=nv;break;case 4:i=rv;break;default:i=fc}n=i.bind(null,t,n,e),i=void 0,!Wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Qa(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Nn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}nm(function(){var u=o,c=lc(n),d=[];e:{var f=Lm.get(e);if(f!==void 0){var y=hc,v=e;switch(e){case"keypress":if(Yo(n)===0)break e;case"keydown":case"keyup":y=vv;break;case"focusin":v="focus",y=Ua;break;case"focusout":v="blur",y=Ua;break;case"beforeblur":case"afterblur":y=Ua;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Sv;break;case Tm:case jm:case Am:y=uv;break;case Rm:y=Cv;break;case"scroll":y=iv;break;case"wheel":y=Ev;break;case"copy":case"cut":case"paste":y=dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Kd}var w=(t&4)!==0,k=!w&&e==="scroll",g=w?f!==null?f+"Capture":null:f;w=[];for(var h=u,m;h!==null;){m=h;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,g!==null&&(S=Ii(h,g),S!=null&&w.push(Wi(h,S,m)))),k)break;h=h.return}0<w.length&&(f=new y(f,v,null,n,c),d.push({event:f,listeners:w}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==Ul&&(v=n.relatedTarget||n.fromElement)&&(Nn(v)||v[Bt]))break e;if((y||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?Nn(v):null,v!==null&&(k=Zn(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(w=Gd,S="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(w=Kd,S="onPointerLeave",g="onPointerEnter",h="pointer"),k=y==null?f:dr(y),m=v==null?f:dr(v),f=new w(S,h+"leave",y,n,c),f.target=k,f.relatedTarget=m,S=null,Nn(c)===u&&(w=new w(g,h+"enter",v,n,c),w.target=m,w.relatedTarget=k,S=w),k=S,y&&v)t:{for(w=y,g=v,h=0,m=w;m;m=er(m))h++;for(m=0,S=g;S;S=er(S))m++;for(;0<h-m;)w=er(w),h--;for(;0<m-h;)g=er(g),m--;for(;h--;){if(w===g||g!==null&&w===g.alternate)break t;w=er(w),g=er(g)}w=null}else w=null;y!==null&&sf(d,f,y,w,!1),v!==null&&k!==null&&sf(d,k,v,w,!0)}}e:{if(f=u?dr(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var E=Mv;else if(Zd(f))if(km)E=Nv;else{E=zv;var T=Dv}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=Vv);if(E&&(E=E(e,u))){Sm(d,E,n,c);break e}T&&T(e,f,u),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Il(f,"number",f.value)}switch(T=u?dr(u):window,e){case"focusin":(Zd(T)||T.contentEditable==="true")&&(ur=T,Ql=u,bi=null);break;case"focusout":bi=Ql=ur=null;break;case"mousedown":Zl=!0;break;case"contextmenu":case"mouseup":case"dragend":Zl=!1,nf(d,n,c);break;case"selectionchange":if(Ov)break;case"keydown":case"keyup":nf(d,n,c)}var P;if(gc)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else lr?xm(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(vm&&n.locale!=="ko"&&(lr||j!=="onCompositionStart"?j==="onCompositionEnd"&&lr&&(P=ym()):(an=c,pc="value"in an?an.value:an.textContent,lr=!0)),T=xs(u,j),0<T.length&&(j=new Yd(j,e,null,n,c),d.push({event:j,listeners:T}),P?j.data=P:(P=wm(n),P!==null&&(j.data=P)))),(P=Tv?jv(e,n):Av(e,n))&&(u=xs(u,"onBeforeInput"),0<u.length&&(c=new Yd("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=P))}Mm(d,t)})}function Wi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ii(e,n),o!=null&&r.unshift(Wi(e,o,i)),o=Ii(e,t),o!=null&&r.push(Wi(e,o,i))),e=e.return}return r}function er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sf(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ii(n,o),l!=null&&s.unshift(Wi(n,l,a))):i||(l=Ii(n,o),l!=null&&s.push(Wi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Uv=/\r\n?/g,Hv=/\u0000|\uFFFD/g;function af(e){return(typeof e=="string"?e:""+e).replace(Uv,`
`).replace(Hv,"")}function To(e,t,n){if(t=af(t),af(e)!==t&&n)throw Error(A(425))}function ws(){}var ql=null,Jl=null;function eu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var tu=typeof setTimeout=="function"?setTimeout:void 0,Wv=typeof clearTimeout=="function"?clearTimeout:void 0,lf=typeof Promise=="function"?Promise:void 0,Gv=typeof queueMicrotask=="function"?queueMicrotask:typeof lf<"u"?function(e){return lf.resolve(null).then(e).catch(Yv)}:tu;function Yv(e){setTimeout(function(){throw e})}function Za(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),_i(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_i(t)}function fn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function uf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Kr=Math.random().toString(36).slice(2),bt="__reactFiber$"+Kr,Gi="__reactProps$"+Kr,Bt="__reactContainer$"+Kr,nu="__reactEvents$"+Kr,Kv="__reactListeners$"+Kr,Xv="__reactHandles$"+Kr;function Nn(e){var t=e[bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bt]||n[bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=uf(e);e!==null;){if(n=e[bt])return n;e=uf(e)}return t}e=n,n=e.parentNode}return null}function so(e){return e=e[bt]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function ta(e){return e[Gi]||null}var ru=[],fr=-1;function Pn(e){return{current:e}}function q(e){0>fr||(e.current=ru[fr],ru[fr]=null,fr--)}function X(e,t){fr++,ru[fr]=e.current,e.current=t}var kn={},Ae=Pn(kn),Ie=Pn(!1),Hn=kn;function Lr(e,t){var n=e.type.contextTypes;if(!n)return kn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Oe(e){return e=e.childContextTypes,e!=null}function Ss(){q(Ie),q(Ae)}function cf(e,t,n){if(Ae.current!==kn)throw Error(A(168));X(Ae,t),X(Ie,n)}function zm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(A(108,Dy(e)||"Unknown",i));return ie({},n,r)}function ks(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kn,Hn=Ae.current,X(Ae,e),X(Ie,Ie.current),!0}function df(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=zm(e,t,Hn),r.__reactInternalMemoizedMergedChildContext=e,q(Ie),q(Ae),X(Ae,e)):q(Ie),X(Ie,n)}var Dt=null,na=!1,qa=!1;function Vm(e){Dt===null?Dt=[e]:Dt.push(e)}function Qv(e){na=!0,Vm(e)}function Tn(){if(!qa&&Dt!==null){qa=!0;var e=0,t=G;try{var n=Dt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dt=null,na=!1}catch(i){throw Dt!==null&&(Dt=Dt.slice(e+1)),sm(uc,Tn),i}finally{G=t,qa=!1}}return null}var pr=[],hr=0,Cs=null,bs=0,et=[],tt=0,Wn=null,zt=1,Vt="";function Ln(e,t){pr[hr++]=bs,pr[hr++]=Cs,Cs=e,bs=t}function Nm(e,t,n){et[tt++]=zt,et[tt++]=Vt,et[tt++]=Wn,Wn=e;var r=zt;e=Vt;var i=32-ht(r)-1;r&=~(1<<i),n+=1;var o=32-ht(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,zt=1<<32-ht(t)+i|n<<i|r,Vt=o+e}else zt=1<<o|n<<i|r,Vt=e}function vc(e){e.return!==null&&(Ln(e,1),Nm(e,1,0))}function xc(e){for(;e===Cs;)Cs=pr[--hr],pr[hr]=null,bs=pr[--hr],pr[hr]=null;for(;e===Wn;)Wn=et[--tt],et[tt]=null,Vt=et[--tt],et[tt]=null,zt=et[--tt],et[tt]=null}var He=null,Ue=null,J=!1,ft=null;function Fm(e,t){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ff(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,He=e,Ue=fn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,He=e,Ue=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Wn!==null?{id:zt,overflow:Vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,He=e,Ue=null,!0):!1;default:return!1}}function iu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ou(e){if(J){var t=Ue;if(t){var n=t;if(!ff(e,t)){if(iu(e))throw Error(A(418));t=fn(n.nextSibling);var r=He;t&&ff(e,t)?Fm(r,n):(e.flags=e.flags&-4097|2,J=!1,He=e)}}else{if(iu(e))throw Error(A(418));e.flags=e.flags&-4097|2,J=!1,He=e}}}function pf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function jo(e){if(e!==He)return!1;if(!J)return pf(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!eu(e.type,e.memoizedProps)),t&&(t=Ue)){if(iu(e))throw Im(),Error(A(418));for(;t;)Fm(e,t),t=fn(t.nextSibling)}if(pf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ue=fn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ue=null}}else Ue=He?fn(e.stateNode.nextSibling):null;return!0}function Im(){for(var e=Ue;e;)e=fn(e.nextSibling)}function Mr(){Ue=He=null,J=!1}function wc(e){ft===null?ft=[e]:ft.push(e)}var Zv=Gt.ReactCurrentBatchConfig;function oi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function Ao(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hf(e){var t=e._init;return t(e._payload)}function Om(e){function t(g,h){if(e){var m=g.deletions;m===null?(g.deletions=[h],g.flags|=16):m.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=gn(g,h),g.index=0,g.sibling=null,g}function o(g,h,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<h?(g.flags|=2,h):m):(g.flags|=2,h)):(g.flags|=1048576,h)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,h,m,S){return h===null||h.tag!==6?(h=ol(m,g.mode,S),h.return=g,h):(h=i(h,m),h.return=g,h)}function l(g,h,m,S){var E=m.type;return E===ar?c(g,h,m.props.children,S,m.key):h!==null&&(h.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===tn&&hf(E)===h.type)?(S=i(h,m.props),S.ref=oi(g,h,m),S.return=g,S):(S=es(m.type,m.key,m.props,null,g.mode,S),S.ref=oi(g,h,m),S.return=g,S)}function u(g,h,m,S){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=sl(m,g.mode,S),h.return=g,h):(h=i(h,m.children||[]),h.return=g,h)}function c(g,h,m,S,E){return h===null||h.tag!==7?(h=Bn(m,g.mode,S,E),h.return=g,h):(h=i(h,m),h.return=g,h)}function d(g,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ol(""+h,g.mode,m),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case vo:return m=es(h.type,h.key,h.props,null,g.mode,m),m.ref=oi(g,null,h),m.return=g,m;case sr:return h=sl(h,g.mode,m),h.return=g,h;case tn:var S=h._init;return d(g,S(h._payload),m)}if(mi(h)||ei(h))return h=Bn(h,g.mode,m,null),h.return=g,h;Ao(g,h)}return null}function f(g,h,m,S){var E=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:a(g,h,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case vo:return m.key===E?l(g,h,m,S):null;case sr:return m.key===E?u(g,h,m,S):null;case tn:return E=m._init,f(g,h,E(m._payload),S)}if(mi(m)||ei(m))return E!==null?null:c(g,h,m,S,null);Ao(g,m)}return null}function y(g,h,m,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(m)||null,a(h,g,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case vo:return g=g.get(S.key===null?m:S.key)||null,l(h,g,S,E);case sr:return g=g.get(S.key===null?m:S.key)||null,u(h,g,S,E);case tn:var T=S._init;return y(g,h,m,T(S._payload),E)}if(mi(S)||ei(S))return g=g.get(m)||null,c(h,g,S,E,null);Ao(h,S)}return null}function v(g,h,m,S){for(var E=null,T=null,P=h,j=h=0,M=null;P!==null&&j<m.length;j++){P.index>j?(M=P,P=null):M=P.sibling;var V=f(g,P,m[j],S);if(V===null){P===null&&(P=M);break}e&&P&&V.alternate===null&&t(g,P),h=o(V,h,j),T===null?E=V:T.sibling=V,T=V,P=M}if(j===m.length)return n(g,P),J&&Ln(g,j),E;if(P===null){for(;j<m.length;j++)P=d(g,m[j],S),P!==null&&(h=o(P,h,j),T===null?E=P:T.sibling=P,T=P);return J&&Ln(g,j),E}for(P=r(g,P);j<m.length;j++)M=y(P,g,j,m[j],S),M!==null&&(e&&M.alternate!==null&&P.delete(M.key===null?j:M.key),h=o(M,h,j),T===null?E=M:T.sibling=M,T=M);return e&&P.forEach(function(Y){return t(g,Y)}),J&&Ln(g,j),E}function w(g,h,m,S){var E=ei(m);if(typeof E!="function")throw Error(A(150));if(m=E.call(m),m==null)throw Error(A(151));for(var T=E=null,P=h,j=h=0,M=null,V=m.next();P!==null&&!V.done;j++,V=m.next()){P.index>j?(M=P,P=null):M=P.sibling;var Y=f(g,P,V.value,S);if(Y===null){P===null&&(P=M);break}e&&P&&Y.alternate===null&&t(g,P),h=o(Y,h,j),T===null?E=Y:T.sibling=Y,T=Y,P=M}if(V.done)return n(g,P),J&&Ln(g,j),E;if(P===null){for(;!V.done;j++,V=m.next())V=d(g,V.value,S),V!==null&&(h=o(V,h,j),T===null?E=V:T.sibling=V,T=V);return J&&Ln(g,j),E}for(P=r(g,P);!V.done;j++,V=m.next())V=y(P,g,j,V.value,S),V!==null&&(e&&V.alternate!==null&&P.delete(V.key===null?j:V.key),h=o(V,h,j),T===null?E=V:T.sibling=V,T=V);return e&&P.forEach(function(le){return t(g,le)}),J&&Ln(g,j),E}function k(g,h,m,S){if(typeof m=="object"&&m!==null&&m.type===ar&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case vo:e:{for(var E=m.key,T=h;T!==null;){if(T.key===E){if(E=m.type,E===ar){if(T.tag===7){n(g,T.sibling),h=i(T,m.props.children),h.return=g,g=h;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===tn&&hf(E)===T.type){n(g,T.sibling),h=i(T,m.props),h.ref=oi(g,T,m),h.return=g,g=h;break e}n(g,T);break}else t(g,T);T=T.sibling}m.type===ar?(h=Bn(m.props.children,g.mode,S,m.key),h.return=g,g=h):(S=es(m.type,m.key,m.props,null,g.mode,S),S.ref=oi(g,h,m),S.return=g,g=S)}return s(g);case sr:e:{for(T=m.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(g,h.sibling),h=i(h,m.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=sl(m,g.mode,S),h.return=g,g=h}return s(g);case tn:return T=m._init,k(g,h,T(m._payload),S)}if(mi(m))return v(g,h,m,S);if(ei(m))return w(g,h,m,S);Ao(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,m),h.return=g,g=h):(n(g,h),h=ol(m,g.mode,S),h.return=g,g=h),s(g)):n(g,h)}return k}var Dr=Om(!0),$m=Om(!1),Es=Pn(null),Ps=null,mr=null,Sc=null;function kc(){Sc=mr=Ps=null}function Cc(e){var t=Es.current;q(Es),e._currentValue=t}function su(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tr(e,t){Ps=e,Sc=mr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Fe=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(Sc!==e)if(e={context:e,memoizedValue:t,next:null},mr===null){if(Ps===null)throw Error(A(308));mr=e,Ps.dependencies={lanes:0,firstContext:e}}else mr=mr.next=e;return t}var Fn=null;function bc(e){Fn===null?Fn=[e]:Fn.push(e)}function _m(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,bc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ut(e,r)}function Ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nn=!1;function Ec(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ut(e,n)}return i=r.interleaved,i===null?(t.next=t,bc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ut(e,n)}function Ko(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cc(e,n)}}function mf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ts(e,t,n,r){var i=e.updateQueue;nn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,c=u=l=null,a=o;do{var f=a.lane,y=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,w=a;switch(f=t,y=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(y,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,f=typeof v=="function"?v.call(y,d,f):v,f==null)break e;d=ie({},d,f);break e;case 2:nn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=d):c=c.next=y,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Yn|=s,e.lanes=s,e.memoizedState=d}}function gf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var ao={},Pt=Pn(ao),Yi=Pn(ao),Ki=Pn(ao);function In(e){if(e===ao)throw Error(A(174));return e}function Pc(e,t){switch(X(Ki,t),X(Yi,e),X(Pt,ao),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$l(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$l(t,e)}q(Pt),X(Pt,t)}function zr(){q(Pt),q(Yi),q(Ki)}function Um(e){In(Ki.current);var t=In(Pt.current),n=$l(t,e.type);t!==n&&(X(Yi,e),X(Pt,n))}function Tc(e){Yi.current===e&&(q(Pt),q(Yi))}var ee=Pn(0);function js(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ja=[];function jc(){for(var e=0;e<Ja.length;e++)Ja[e]._workInProgressVersionPrimary=null;Ja.length=0}var Xo=Gt.ReactCurrentDispatcher,el=Gt.ReactCurrentBatchConfig,Gn=0,ne=null,me=null,ve=null,As=!1,Ei=!1,Xi=0,qv=0;function Ee(){throw Error(A(321))}function Ac(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function Rc(e,t,n,r,i,o){if(Gn=o,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xo.current=e===null||e.memoizedState===null?nx:rx,e=n(r,i),Ei){o=0;do{if(Ei=!1,Xi=0,25<=o)throw Error(A(301));o+=1,ve=me=null,t.updateQueue=null,Xo.current=ix,e=n(r,i)}while(Ei)}if(Xo.current=Rs,t=me!==null&&me.next!==null,Gn=0,ve=me=ne=null,As=!1,t)throw Error(A(300));return e}function Lc(){var e=Xi!==0;return Xi=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ne.memoizedState=ve=e:ve=ve.next=e,ve}function ot(){if(me===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=ve===null?ne.memoizedState:ve.next;if(t!==null)ve=t,me=e;else{if(e===null)throw Error(A(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ve===null?ne.memoizedState=ve=e:ve=ve.next=e}return ve}function Qi(e,t){return typeof t=="function"?t(e):t}function tl(e){var t=ot(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=me,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Gn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,ne.lanes|=c,Yn|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,yt(r,t.memoizedState)||(Fe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ne.lanes|=o,Yn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function nl(e){var t=ot(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);yt(o,t.memoizedState)||(Fe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Hm(){}function Wm(e,t){var n=ne,r=ot(),i=t(),o=!yt(r.memoizedState,i);if(o&&(r.memoizedState=i,Fe=!0),r=r.queue,Mc(Km.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,Zi(9,Ym.bind(null,n,r,i,t),void 0,null),we===null)throw Error(A(349));Gn&30||Gm(n,t,i)}return i}function Gm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ym(e,t,n,r){t.value=n,t.getSnapshot=r,Xm(t)&&Qm(e)}function Km(e,t,n){return n(function(){Xm(t)&&Qm(e)})}function Xm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function Qm(e){var t=Ut(e,1);t!==null&&mt(t,e,1,-1)}function yf(e){var t=St();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:e},t.queue=e,e=e.dispatch=tx.bind(null,ne,e),[t.memoizedState,e]}function Zi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Zm(){return ot().memoizedState}function Qo(e,t,n,r){var i=St();ne.flags|=e,i.memoizedState=Zi(1|t,n,void 0,r===void 0?null:r)}function ra(e,t,n,r){var i=ot();r=r===void 0?null:r;var o=void 0;if(me!==null){var s=me.memoizedState;if(o=s.destroy,r!==null&&Ac(r,s.deps)){i.memoizedState=Zi(t,n,o,r);return}}ne.flags|=e,i.memoizedState=Zi(1|t,n,o,r)}function vf(e,t){return Qo(8390656,8,e,t)}function Mc(e,t){return ra(2048,8,e,t)}function qm(e,t){return ra(4,2,e,t)}function Jm(e,t){return ra(4,4,e,t)}function e0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function t0(e,t,n){return n=n!=null?n.concat([e]):null,ra(4,4,e0.bind(null,t,e),n)}function Dc(){}function n0(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ac(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function r0(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ac(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function i0(e,t,n){return Gn&21?(yt(n,t)||(n=um(),ne.lanes|=n,Yn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n)}function Jv(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=el.transition;el.transition={};try{e(!1),t()}finally{G=n,el.transition=r}}function o0(){return ot().memoizedState}function ex(e,t,n){var r=mn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},s0(e))a0(t,n);else if(n=_m(e,t,n,r),n!==null){var i=Me();mt(n,e,r,i),l0(n,t,r)}}function tx(e,t,n){var r=mn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(s0(e))a0(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,yt(a,s)){var l=t.interleaved;l===null?(i.next=i,bc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=_m(e,t,i,r),n!==null&&(i=Me(),mt(n,e,r,i),l0(n,t,r))}}function s0(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function a0(e,t){Ei=As=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function l0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cc(e,n)}}var Rs={readContext:it,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},nx={readContext:it,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:vf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qo(4194308,4,e0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qo(4,2,e,t)},useMemo:function(e,t){var n=St();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=St();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ex.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:yf,useDebugValue:Dc,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=yf(!1),t=e[0];return e=Jv.bind(null,e[1]),St().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,i=St();if(J){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),we===null)throw Error(A(349));Gn&30||Gm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,vf(Km.bind(null,r,o,e),[e]),r.flags|=2048,Zi(9,Ym.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=St(),t=we.identifierPrefix;if(J){var n=Vt,r=zt;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Xi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rx={readContext:it,useCallback:n0,useContext:it,useEffect:Mc,useImperativeHandle:t0,useInsertionEffect:qm,useLayoutEffect:Jm,useMemo:r0,useReducer:tl,useRef:Zm,useState:function(){return tl(Qi)},useDebugValue:Dc,useDeferredValue:function(e){var t=ot();return i0(t,me.memoizedState,e)},useTransition:function(){var e=tl(Qi)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Hm,useSyncExternalStore:Wm,useId:o0,unstable_isNewReconciler:!1},ix={readContext:it,useCallback:n0,useContext:it,useEffect:Mc,useImperativeHandle:t0,useInsertionEffect:qm,useLayoutEffect:Jm,useMemo:r0,useReducer:nl,useRef:Zm,useState:function(){return nl(Qi)},useDebugValue:Dc,useDeferredValue:function(e){var t=ot();return me===null?t.memoizedState=e:i0(t,me.memoizedState,e)},useTransition:function(){var e=nl(Qi)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Hm,useSyncExternalStore:Wm,useId:o0,unstable_isNewReconciler:!1};function ct(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function au(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ia={isMounted:function(e){return(e=e._reactInternals)?Zn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Me(),i=mn(e),o=Ft(r,i);o.payload=t,n!=null&&(o.callback=n),t=pn(e,o,i),t!==null&&(mt(t,e,i,r),Ko(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Me(),i=mn(e),o=Ft(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=pn(e,o,i),t!==null&&(mt(t,e,i,r),Ko(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),r=mn(e),i=Ft(n,r);i.tag=2,t!=null&&(i.callback=t),t=pn(e,i,r),t!==null&&(mt(t,e,r,n),Ko(t,e,r))}};function xf(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Ui(n,r)||!Ui(i,o):!0}function u0(e,t,n){var r=!1,i=kn,o=t.contextType;return typeof o=="object"&&o!==null?o=it(o):(i=Oe(t)?Hn:Ae.current,r=t.contextTypes,o=(r=r!=null)?Lr(e,i):kn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ia,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function wf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ia.enqueueReplaceState(t,t.state,null)}function lu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ec(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=it(o):(o=Oe(t)?Hn:Ae.current,i.context=Lr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(au(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ia.enqueueReplaceState(i,i.state,null),Ts(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Vr(e,t){try{var n="",r=t;do n+=My(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function rl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function uu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ox=typeof WeakMap=="function"?WeakMap:Map;function c0(e,t,n){n=Ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ms||(Ms=!0,xu=r),uu(e,t)},n}function d0(e,t,n){n=Ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){uu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){uu(e,t),typeof r!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Sf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ox;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=xx.bind(null,e,t,n),t.then(e,e))}function kf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ft(-1,1),t.tag=2,pn(n,t,1))),n.lanes|=1),e)}var sx=Gt.ReactCurrentOwner,Fe=!1;function Le(e,t,n,r){t.child=e===null?$m(t,null,n,r):Dr(t,e.child,n,r)}function bf(e,t,n,r,i){n=n.render;var o=t.ref;return Tr(t,i),r=Rc(e,t,n,r,o,i),n=Lc(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ht(e,t,i)):(J&&n&&vc(t),t.flags|=1,Le(e,t,r,i),t.child)}function Ef(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!_c(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,f0(e,t,o,r,i)):(e=es(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ui,n(s,r)&&e.ref===t.ref)return Ht(e,t,i)}return t.flags|=1,e=gn(o,r),e.ref=t.ref,e.return=t,t.child=e}function f0(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ui(o,r)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Fe=!0);else return t.lanes=e.lanes,Ht(e,t,i)}return cu(e,t,n,r,i)}function p0(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(yr,Be),Be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(yr,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,X(yr,Be),Be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,X(yr,Be),Be|=r;return Le(e,t,i,n),t.child}function h0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function cu(e,t,n,r,i){var o=Oe(n)?Hn:Ae.current;return o=Lr(t,o),Tr(t,i),n=Rc(e,t,n,r,o,i),r=Lc(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ht(e,t,i)):(J&&r&&vc(t),t.flags|=1,Le(e,t,n,i),t.child)}function Pf(e,t,n,r,i){if(Oe(n)){var o=!0;ks(t)}else o=!1;if(Tr(t,i),t.stateNode===null)Zo(e,t),u0(t,n,r),lu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=it(u):(u=Oe(n)?Hn:Ae.current,u=Lr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&wf(t,s,r,u),nn=!1;var f=t.memoizedState;s.state=f,Ts(t,r,s,i),l=t.memoizedState,a!==r||f!==l||Ie.current||nn?(typeof c=="function"&&(au(t,n,c,r),l=t.memoizedState),(a=nn||xf(t,n,a,r,f,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Bm(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ct(t.type,a),s.props=u,d=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=it(l):(l=Oe(n)?Hn:Ae.current,l=Lr(t,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==l)&&wf(t,s,r,l),nn=!1,f=t.memoizedState,s.state=f,Ts(t,r,s,i);var v=t.memoizedState;a!==d||f!==v||Ie.current||nn?(typeof y=="function"&&(au(t,n,y,r),v=t.memoizedState),(u=nn||xf(t,n,u,r,f,v,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return du(e,t,n,r,o,i)}function du(e,t,n,r,i,o){h0(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&df(t,n,!1),Ht(e,t,o);r=t.stateNode,sx.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Dr(t,e.child,null,o),t.child=Dr(t,null,a,o)):Le(e,t,a,o),t.memoizedState=r.state,i&&df(t,n,!0),t.child}function m0(e){var t=e.stateNode;t.pendingContext?cf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cf(e,t.context,!1),Pc(e,t.containerInfo)}function Tf(e,t,n,r,i){return Mr(),wc(i),t.flags|=256,Le(e,t,n,r),t.child}var fu={dehydrated:null,treeContext:null,retryLane:0};function pu(e){return{baseLanes:e,cachePool:null,transitions:null}}function g0(e,t,n){var r=t.pendingProps,i=ee.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),X(ee,i&1),e===null)return ou(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=aa(s,r,0,null),e=Bn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=pu(n),t.memoizedState=fu,e):zc(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ax(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=gn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=gn(a,o):(o=Bn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?pu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=fu,r}return o=e.child,e=o.sibling,r=gn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function zc(e,t){return t=aa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ro(e,t,n,r){return r!==null&&wc(r),Dr(t,e.child,null,n),e=zc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ax(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=rl(Error(A(422))),Ro(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=aa({mode:"visible",children:r.children},i,0,null),o=Bn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Dr(t,e.child,null,s),t.child.memoizedState=pu(s),t.memoizedState=fu,o);if(!(t.mode&1))return Ro(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(A(419)),r=rl(o,r,void 0),Ro(e,t,s,r)}if(a=(s&e.childLanes)!==0,Fe||a){if(r=we,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ut(e,i),mt(r,e,i,-1))}return $c(),r=rl(Error(A(421))),Ro(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=wx.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ue=fn(i.nextSibling),He=t,J=!0,ft=null,e!==null&&(et[tt++]=zt,et[tt++]=Vt,et[tt++]=Wn,zt=e.id,Vt=e.overflow,Wn=t),t=zc(t,r.children),t.flags|=4096,t)}function jf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),su(e.return,t,n)}function il(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function y0(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Le(e,t,r.children,n),r=ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jf(e,n,t);else if(e.tag===19)jf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(ee,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&js(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),il(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&js(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}il(t,!0,n,null,o);break;case"together":il(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function lx(e,t,n){switch(t.tag){case 3:m0(t),Mr();break;case 5:Um(t);break;case 1:Oe(t.type)&&ks(t);break;case 4:Pc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;X(Es,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(ee,ee.current&1),t.flags|=128,null):n&t.child.childLanes?g0(e,t,n):(X(ee,ee.current&1),e=Ht(e,t,n),e!==null?e.sibling:null);X(ee,ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return y0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(ee,ee.current),r)break;return null;case 22:case 23:return t.lanes=0,p0(e,t,n)}return Ht(e,t,n)}var v0,hu,x0,w0;v0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hu=function(){};x0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,In(Pt.current);var o=null;switch(n){case"input":i=Nl(e,i),r=Nl(e,r),o=[];break;case"select":i=ie({},i,{value:void 0}),r=ie({},r,{value:void 0}),o=[];break;case"textarea":i=Ol(e,i),r=Ol(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ws)}_l(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ni.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ni.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Q("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};w0=function(e,t,n,r){n!==r&&(t.flags|=4)};function si(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ux(e,t,n){var r=t.pendingProps;switch(xc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return Oe(t.type)&&Ss(),Pe(t),null;case 3:return r=t.stateNode,zr(),q(Ie),q(Ae),jc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(jo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(ku(ft),ft=null))),hu(e,t),Pe(t),null;case 5:Tc(t);var i=In(Ki.current);if(n=t.type,e!==null&&t.stateNode!=null)x0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return Pe(t),null}if(e=In(Pt.current),jo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[bt]=t,r[Gi]=o,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<yi.length;i++)Q(yi[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":Nd(r,o),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Q("invalid",r);break;case"textarea":Id(r,o),Q("invalid",r)}_l(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&To(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&To(r.textContent,a,e),i=["children",""+a]):Ni.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Q("scroll",r)}switch(n){case"input":xo(r),Fd(r,o,!0);break;case"textarea":xo(r),Od(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ws)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Kh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[bt]=t,e[Gi]=r,v0(e,t,!1,!1),t.stateNode=e;e:{switch(s=Bl(n,r),n){case"dialog":Q("cancel",e),Q("close",e),i=r;break;case"iframe":case"object":case"embed":Q("load",e),i=r;break;case"video":case"audio":for(i=0;i<yi.length;i++)Q(yi[i],e);i=r;break;case"source":Q("error",e),i=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),i=r;break;case"details":Q("toggle",e),i=r;break;case"input":Nd(e,r),i=Nl(e,r),Q("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ie({},r,{value:void 0}),Q("invalid",e);break;case"textarea":Id(e,r),i=Ol(e,r),Q("invalid",e);break;default:i=r}_l(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Zh(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xh(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fi(e,l):typeof l=="number"&&Fi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ni.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Q("scroll",e):l!=null&&ic(e,o,l,s))}switch(n){case"input":xo(e),Fd(e,r,!1);break;case"textarea":xo(e),Od(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Sn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Cr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Cr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ws)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pe(t),null;case 6:if(e&&t.stateNode!=null)w0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=In(Ki.current),In(Pt.current),jo(t)){if(r=t.stateNode,n=t.memoizedProps,r[bt]=t,(o=r.nodeValue!==n)&&(e=He,e!==null))switch(e.tag){case 3:To(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&To(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=t,t.stateNode=r}return Pe(t),null;case 13:if(q(ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&Ue!==null&&t.mode&1&&!(t.flags&128))Im(),Mr(),t.flags|=98560,o=!1;else if(o=jo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(A(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(A(317));o[bt]=t}else Mr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pe(t),o=!1}else ft!==null&&(ku(ft),ft=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ee.current&1?ye===0&&(ye=3):$c())),t.updateQueue!==null&&(t.flags|=4),Pe(t),null);case 4:return zr(),hu(e,t),e===null&&Hi(t.stateNode.containerInfo),Pe(t),null;case 10:return Cc(t.type._context),Pe(t),null;case 17:return Oe(t.type)&&Ss(),Pe(t),null;case 19:if(q(ee),o=t.memoizedState,o===null)return Pe(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)si(o,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=js(e),s!==null){for(t.flags|=128,si(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(ee,ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&ue()>Nr&&(t.flags|=128,r=!0,si(o,!1),t.lanes=4194304)}else{if(!r)if(e=js(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),si(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!J)return Pe(t),null}else 2*ue()-o.renderingStartTime>Nr&&n!==1073741824&&(t.flags|=128,r=!0,si(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ue(),t.sibling=null,n=ee.current,X(ee,r?n&1|2:n&1),t):(Pe(t),null);case 22:case 23:return Oc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Be&1073741824&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function cx(e,t){switch(xc(t),t.tag){case 1:return Oe(t.type)&&Ss(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zr(),q(Ie),q(Ae),jc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Tc(t),null;case 13:if(q(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));Mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(ee),null;case 4:return zr(),null;case 10:return Cc(t.type._context),null;case 22:case 23:return Oc(),null;case 24:return null;default:return null}}var Lo=!1,Te=!1,dx=typeof WeakSet=="function"?WeakSet:Set,z=null;function gr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function mu(e,t,n){try{n()}catch(r){se(e,t,r)}}var Af=!1;function fx(e,t){if(ql=ys,e=Em(),yc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(y=d.firstChild)!==null;)f=d,d=y;for(;;){if(d===e)break t;if(f===n&&++u===i&&(a=s),f===o&&++c===r&&(l=s),(y=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jl={focusedElem:e,selectionRange:n},ys=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,k=v.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:ct(t.type,w),k);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(S){se(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return v=Af,Af=!1,v}function Pi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&mu(t,n,o)}i=i.next}while(i!==r)}}function oa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function gu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function S0(e){var t=e.alternate;t!==null&&(e.alternate=null,S0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[bt],delete t[Gi],delete t[nu],delete t[Kv],delete t[Xv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function k0(e){return e.tag===5||e.tag===3||e.tag===4}function Rf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||k0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ws));else if(r!==4&&(e=e.child,e!==null))for(yu(e,t,n),e=e.sibling;e!==null;)yu(e,t,n),e=e.sibling}function vu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(vu(e,t,n),e=e.sibling;e!==null;)vu(e,t,n),e=e.sibling}var Se=null,dt=!1;function Zt(e,t,n){for(n=n.child;n!==null;)C0(e,t,n),n=n.sibling}function C0(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Zs,n)}catch{}switch(n.tag){case 5:Te||gr(n,t);case 6:var r=Se,i=dt;Se=null,Zt(e,t,n),Se=r,dt=i,Se!==null&&(dt?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(dt?(e=Se,n=n.stateNode,e.nodeType===8?Za(e.parentNode,n):e.nodeType===1&&Za(e,n),_i(e)):Za(Se,n.stateNode));break;case 4:r=Se,i=dt,Se=n.stateNode.containerInfo,dt=!0,Zt(e,t,n),Se=r,dt=i;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&mu(n,t,s),i=i.next}while(i!==r)}Zt(e,t,n);break;case 1:if(!Te&&(gr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){se(n,t,a)}Zt(e,t,n);break;case 21:Zt(e,t,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,Zt(e,t,n),Te=r):Zt(e,t,n);break;default:Zt(e,t,n)}}function Lf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new dx),t.forEach(function(r){var i=Sx.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ut(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Se=a.stateNode,dt=!1;break e;case 3:Se=a.stateNode.containerInfo,dt=!0;break e;case 4:Se=a.stateNode.containerInfo,dt=!0;break e}a=a.return}if(Se===null)throw Error(A(160));C0(o,s,i),Se=null,dt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){se(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)b0(t,e),t=t.sibling}function b0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),wt(e),r&4){try{Pi(3,e,e.return),oa(3,e)}catch(w){se(e,e.return,w)}try{Pi(5,e,e.return)}catch(w){se(e,e.return,w)}}break;case 1:ut(t,e),wt(e),r&512&&n!==null&&gr(n,n.return);break;case 5:if(ut(t,e),wt(e),r&512&&n!==null&&gr(n,n.return),e.flags&32){var i=e.stateNode;try{Fi(i,"")}catch(w){se(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Gh(i,o),Bl(a,s);var u=Bl(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?Zh(i,d):c==="dangerouslySetInnerHTML"?Xh(i,d):c==="children"?Fi(i,d):ic(i,c,d,u)}switch(a){case"input":Fl(i,o);break;case"textarea":Yh(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Cr(i,!!o.multiple,y,!1):f!==!!o.multiple&&(o.defaultValue!=null?Cr(i,!!o.multiple,o.defaultValue,!0):Cr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Gi]=o}catch(w){se(e,e.return,w)}}break;case 6:if(ut(t,e),wt(e),r&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){se(e,e.return,w)}}break;case 3:if(ut(t,e),wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_i(t.containerInfo)}catch(w){se(e,e.return,w)}break;case 4:ut(t,e),wt(e);break;case 13:ut(t,e),wt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Fc=ue())),r&4&&Lf(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Te=(u=Te)||c,ut(t,e),Te=u):ut(t,e),wt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(z=e,c=e.child;c!==null;){for(d=z=c;z!==null;){switch(f=z,y=f.child,f.tag){case 0:case 11:case 14:case 15:Pi(4,f,f.return);break;case 1:gr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){se(r,n,w)}}break;case 5:gr(f,f.return);break;case 22:if(f.memoizedState!==null){Df(d);continue}}y!==null?(y.return=f,z=y):Df(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Qh("display",s))}catch(w){se(e,e.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){se(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ut(t,e),wt(e),r&4&&Lf(e);break;case 21:break;default:ut(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(k0(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fi(i,""),r.flags&=-33);var o=Rf(e);vu(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Rf(e);yu(e,a,s);break;default:throw Error(A(161))}}catch(l){se(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function px(e,t,n){z=e,E0(e)}function E0(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var i=z,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Lo;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Te;a=Lo;var u=Te;if(Lo=s,(Te=l)&&!u)for(z=i;z!==null;)s=z,l=s.child,s.tag===22&&s.memoizedState!==null?zf(i):l!==null?(l.return=s,z=l):zf(i);for(;o!==null;)z=o,E0(o),o=o.sibling;z=i,Lo=a,Te=u}Mf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,z=o):Mf(e)}}function Mf(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Te||oa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Te)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&gf(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gf(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&_i(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Te||t.flags&512&&gu(t)}catch(f){se(t,t.return,f)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function Df(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function zf(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{oa(4,t)}catch(l){se(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){se(t,i,l)}}var o=t.return;try{gu(t)}catch(l){se(t,o,l)}break;case 5:var s=t.return;try{gu(t)}catch(l){se(t,s,l)}}}catch(l){se(t,t.return,l)}if(t===e){z=null;break}var a=t.sibling;if(a!==null){a.return=t.return,z=a;break}z=t.return}}var hx=Math.ceil,Ls=Gt.ReactCurrentDispatcher,Vc=Gt.ReactCurrentOwner,rt=Gt.ReactCurrentBatchConfig,B=0,we=null,pe=null,Ce=0,Be=0,yr=Pn(0),ye=0,qi=null,Yn=0,sa=0,Nc=0,Ti=null,Ne=null,Fc=0,Nr=1/0,Lt=null,Ms=!1,xu=null,hn=null,Mo=!1,ln=null,Ds=0,ji=0,wu=null,qo=-1,Jo=0;function Me(){return B&6?ue():qo!==-1?qo:qo=ue()}function mn(e){return e.mode&1?B&2&&Ce!==0?Ce&-Ce:Zv.transition!==null?(Jo===0&&(Jo=um()),Jo):(e=G,e!==0||(e=window.event,e=e===void 0?16:gm(e.type)),e):1}function mt(e,t,n,r){if(50<ji)throw ji=0,wu=null,Error(A(185));io(e,n,r),(!(B&2)||e!==we)&&(e===we&&(!(B&2)&&(sa|=n),ye===4&&sn(e,Ce)),$e(e,r),n===1&&B===0&&!(t.mode&1)&&(Nr=ue()+500,na&&Tn()))}function $e(e,t){var n=e.callbackNode;Zy(e,t);var r=gs(e,e===we?Ce:0);if(r===0)n!==null&&Bd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Bd(n),t===1)e.tag===0?Qv(Vf.bind(null,e)):Vm(Vf.bind(null,e)),Gv(function(){!(B&6)&&Tn()}),n=null;else{switch(cm(r)){case 1:n=uc;break;case 4:n=am;break;case 16:n=ms;break;case 536870912:n=lm;break;default:n=ms}n=D0(n,P0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function P0(e,t){if(qo=-1,Jo=0,B&6)throw Error(A(327));var n=e.callbackNode;if(jr()&&e.callbackNode!==n)return null;var r=gs(e,e===we?Ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=zs(e,r);else{t=r;var i=B;B|=2;var o=j0();(we!==e||Ce!==t)&&(Lt=null,Nr=ue()+500,_n(e,t));do try{yx();break}catch(a){T0(e,a)}while(1);kc(),Ls.current=o,B=i,pe!==null?t=0:(we=null,Ce=0,t=ye)}if(t!==0){if(t===2&&(i=Yl(e),i!==0&&(r=i,t=Su(e,i))),t===1)throw n=qi,_n(e,0),sn(e,r),$e(e,ue()),n;if(t===6)sn(e,r);else{if(i=e.current.alternate,!(r&30)&&!mx(i)&&(t=zs(e,r),t===2&&(o=Yl(e),o!==0&&(r=o,t=Su(e,o))),t===1))throw n=qi,_n(e,0),sn(e,r),$e(e,ue()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:Mn(e,Ne,Lt);break;case 3:if(sn(e,r),(r&130023424)===r&&(t=Fc+500-ue(),10<t)){if(gs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=tu(Mn.bind(null,e,Ne,Lt),t);break}Mn(e,Ne,Lt);break;case 4:if(sn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ht(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hx(r/1960))-r,10<r){e.timeoutHandle=tu(Mn.bind(null,e,Ne,Lt),r);break}Mn(e,Ne,Lt);break;case 5:Mn(e,Ne,Lt);break;default:throw Error(A(329))}}}return $e(e,ue()),e.callbackNode===n?P0.bind(null,e):null}function Su(e,t){var n=Ti;return e.current.memoizedState.isDehydrated&&(_n(e,t).flags|=256),e=zs(e,t),e!==2&&(t=Ne,Ne=n,t!==null&&ku(t)),e}function ku(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function mx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!yt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sn(e,t){for(t&=~Nc,t&=~sa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ht(t),r=1<<n;e[n]=-1,t&=~r}}function Vf(e){if(B&6)throw Error(A(327));jr();var t=gs(e,0);if(!(t&1))return $e(e,ue()),null;var n=zs(e,t);if(e.tag!==0&&n===2){var r=Yl(e);r!==0&&(t=r,n=Su(e,r))}if(n===1)throw n=qi,_n(e,0),sn(e,t),$e(e,ue()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mn(e,Ne,Lt),$e(e,ue()),null}function Ic(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(Nr=ue()+500,na&&Tn())}}function Kn(e){ln!==null&&ln.tag===0&&!(B&6)&&jr();var t=B;B|=1;var n=rt.transition,r=G;try{if(rt.transition=null,G=1,e)return e()}finally{G=r,rt.transition=n,B=t,!(B&6)&&Tn()}}function Oc(){Be=yr.current,q(yr)}function _n(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wv(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(xc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ss();break;case 3:zr(),q(Ie),q(Ae),jc();break;case 5:Tc(r);break;case 4:zr();break;case 13:q(ee);break;case 19:q(ee);break;case 10:Cc(r.type._context);break;case 22:case 23:Oc()}n=n.return}if(we=e,pe=e=gn(e.current,null),Ce=Be=t,ye=0,qi=null,Nc=sa=Yn=0,Ne=Ti=null,Fn!==null){for(t=0;t<Fn.length;t++)if(n=Fn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Fn=null}return e}function T0(e,t){do{var n=pe;try{if(kc(),Xo.current=Rs,As){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}As=!1}if(Gn=0,ve=me=ne=null,Ei=!1,Xi=0,Vc.current=null,n===null||n.return===null){ye=1,qi=t,pe=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Ce,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=kf(s);if(y!==null){y.flags&=-257,Cf(y,s,a,o,t),y.mode&1&&Sf(o,u,t),t=y,l=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(l),t.updateQueue=w}else v.add(l);break e}else{if(!(t&1)){Sf(o,u,t),$c();break e}l=Error(A(426))}}else if(J&&a.mode&1){var k=kf(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Cf(k,s,a,o,t),wc(Vr(l,a));break e}}o=l=Vr(l,a),ye!==4&&(ye=2),Ti===null?Ti=[o]:Ti.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=c0(o,l,t);mf(o,g);break e;case 1:a=l;var h=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(hn===null||!hn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=d0(o,a,t);mf(o,S);break e}}o=o.return}while(o!==null)}R0(n)}catch(E){t=E,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(1)}function j0(){var e=Ls.current;return Ls.current=Rs,e===null?Rs:e}function $c(){(ye===0||ye===3||ye===2)&&(ye=4),we===null||!(Yn&268435455)&&!(sa&268435455)||sn(we,Ce)}function zs(e,t){var n=B;B|=2;var r=j0();(we!==e||Ce!==t)&&(Lt=null,_n(e,t));do try{gx();break}catch(i){T0(e,i)}while(1);if(kc(),B=n,Ls.current=r,pe!==null)throw Error(A(261));return we=null,Ce=0,ye}function gx(){for(;pe!==null;)A0(pe)}function yx(){for(;pe!==null&&!By();)A0(pe)}function A0(e){var t=M0(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?R0(e):pe=t,Vc.current=null}function R0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cx(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,pe=null;return}}else if(n=ux(n,t,Be),n!==null){pe=n;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);ye===0&&(ye=5)}function Mn(e,t,n){var r=G,i=rt.transition;try{rt.transition=null,G=1,vx(e,t,n,r)}finally{rt.transition=i,G=r}return null}function vx(e,t,n,r){do jr();while(ln!==null);if(B&6)throw Error(A(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(qy(e,o),e===we&&(pe=we=null,Ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mo||(Mo=!0,D0(ms,function(){return jr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=rt.transition,rt.transition=null;var s=G;G=1;var a=B;B|=4,Vc.current=null,fx(e,n),b0(n,e),Iv(Jl),ys=!!ql,Jl=ql=null,e.current=n,px(n),Uy(),B=a,G=s,rt.transition=o}else e.current=n;if(Mo&&(Mo=!1,ln=e,Ds=i),o=e.pendingLanes,o===0&&(hn=null),Gy(n.stateNode),$e(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ms)throw Ms=!1,e=xu,xu=null,e;return Ds&1&&e.tag!==0&&jr(),o=e.pendingLanes,o&1?e===wu?ji++:(ji=0,wu=e):ji=0,Tn(),null}function jr(){if(ln!==null){var e=cm(Ds),t=rt.transition,n=G;try{if(rt.transition=null,G=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,Ds=0,B&6)throw Error(A(331));var i=B;for(B|=4,z=e.current;z!==null;){var o=z,s=o.child;if(z.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(z=u;z!==null;){var c=z;switch(c.tag){case 0:case 11:case 15:Pi(8,c,o)}var d=c.child;if(d!==null)d.return=c,z=d;else for(;z!==null;){c=z;var f=c.sibling,y=c.return;if(S0(c),c===u){z=null;break}if(f!==null){f.return=y,z=f;break}z=y}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}z=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,z=s;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Pi(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,z=g;break e}z=o.return}}var h=e.current;for(z=h;z!==null;){s=z;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,z=m;else e:for(s=h;z!==null;){if(a=z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:oa(9,a)}}catch(E){se(a,a.return,E)}if(a===s){z=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,z=S;break e}z=a.return}}if(B=i,Tn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Zs,e)}catch{}r=!0}return r}finally{G=n,rt.transition=t}}return!1}function Nf(e,t,n){t=Vr(n,t),t=c0(e,t,1),e=pn(e,t,1),t=Me(),e!==null&&(io(e,1,t),$e(e,t))}function se(e,t,n){if(e.tag===3)Nf(e,e,n);else for(;t!==null;){if(t.tag===3){Nf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hn===null||!hn.has(r))){e=Vr(n,e),e=d0(t,e,1),t=pn(t,e,1),e=Me(),t!==null&&(io(t,1,e),$e(t,e));break}}t=t.return}}function xx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,we===e&&(Ce&n)===n&&(ye===4||ye===3&&(Ce&130023424)===Ce&&500>ue()-Fc?_n(e,0):Nc|=n),$e(e,t)}function L0(e,t){t===0&&(e.mode&1?(t=ko,ko<<=1,!(ko&130023424)&&(ko=4194304)):t=1);var n=Me();e=Ut(e,t),e!==null&&(io(e,t,n),$e(e,n))}function wx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),L0(e,n)}function Sx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),L0(e,n)}var M0;M0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ie.current)Fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Fe=!1,lx(e,t,n);Fe=!!(e.flags&131072)}else Fe=!1,J&&t.flags&1048576&&Nm(t,bs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Zo(e,t),e=t.pendingProps;var i=Lr(t,Ae.current);Tr(t,n),i=Rc(null,t,r,e,i,n);var o=Lc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oe(r)?(o=!0,ks(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ec(t),i.updater=ia,t.stateNode=i,i._reactInternals=t,lu(t,r,e,n),t=du(null,t,r,!0,o,n)):(t.tag=0,J&&o&&vc(t),Le(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Zo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Cx(r),e=ct(r,e),i){case 0:t=cu(null,t,r,e,n);break e;case 1:t=Pf(null,t,r,e,n);break e;case 11:t=bf(null,t,r,e,n);break e;case 14:t=Ef(null,t,r,ct(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),cu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),Pf(e,t,r,i,n);case 3:e:{if(m0(t),e===null)throw Error(A(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Bm(e,t),Ts(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Vr(Error(A(423)),t),t=Tf(e,t,r,n,i);break e}else if(r!==i){i=Vr(Error(A(424)),t),t=Tf(e,t,r,n,i);break e}else for(Ue=fn(t.stateNode.containerInfo.firstChild),He=t,J=!0,ft=null,n=$m(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mr(),r===i){t=Ht(e,t,n);break e}Le(e,t,r,n)}t=t.child}return t;case 5:return Um(t),e===null&&ou(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,eu(r,i)?s=null:o!==null&&eu(r,o)&&(t.flags|=32),h0(e,t),Le(e,t,s,n),t.child;case 6:return e===null&&ou(t),null;case 13:return g0(e,t,n);case 4:return Pc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Dr(t,null,r,n):Le(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),bf(e,t,r,i,n);case 7:return Le(e,t,t.pendingProps,n),t.child;case 8:return Le(e,t,t.pendingProps.children,n),t.child;case 12:return Le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,X(Es,r._currentValue),r._currentValue=s,o!==null)if(yt(o.value,s)){if(o.children===i.children&&!Ie.current){t=Ht(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Ft(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),su(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(A(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),su(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Le(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Tr(t,n),i=it(i),r=r(i),t.flags|=1,Le(e,t,r,n),t.child;case 14:return r=t.type,i=ct(r,t.pendingProps),i=ct(r.type,i),Ef(e,t,r,i,n);case 15:return f0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),Zo(e,t),t.tag=1,Oe(r)?(e=!0,ks(t)):e=!1,Tr(t,n),u0(t,r,i),lu(t,r,i,n),du(null,t,r,!0,e,n);case 19:return y0(e,t,n);case 22:return p0(e,t,n)}throw Error(A(156,t.tag))};function D0(e,t){return sm(e,t)}function kx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,n,r){return new kx(e,t,n,r)}function _c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cx(e){if(typeof e=="function")return _c(e)?1:0;if(e!=null){if(e=e.$$typeof,e===sc)return 11;if(e===ac)return 14}return 2}function gn(e,t){var n=e.alternate;return n===null?(n=nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function es(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")_c(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ar:return Bn(n.children,i,o,t);case oc:s=8,i|=8;break;case Ml:return e=nt(12,n,t,i|2),e.elementType=Ml,e.lanes=o,e;case Dl:return e=nt(13,n,t,i),e.elementType=Dl,e.lanes=o,e;case zl:return e=nt(19,n,t,i),e.elementType=zl,e.lanes=o,e;case Uh:return aa(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _h:s=10;break e;case Bh:s=9;break e;case sc:s=11;break e;case ac:s=14;break e;case tn:s=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=nt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Bn(e,t,n,r){return e=nt(7,e,r,t),e.lanes=n,e}function aa(e,t,n,r){return e=nt(22,e,r,t),e.elementType=Uh,e.lanes=n,e.stateNode={isHidden:!1},e}function ol(e,t,n){return e=nt(6,e,null,t),e.lanes=n,e}function sl(e,t,n){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function bx(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$a(0),this.expirationTimes=$a(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$a(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bc(e,t,n,r,i,o,s,a,l){return e=new bx(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=nt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ec(o),e}function Ex(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function z0(e){if(!e)return kn;e=e._reactInternals;e:{if(Zn(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(Oe(n))return zm(e,n,t)}return t}function V0(e,t,n,r,i,o,s,a,l){return e=Bc(n,r,!0,e,i,o,s,a,l),e.context=z0(null),n=e.current,r=Me(),i=mn(n),o=Ft(r,i),o.callback=t??null,pn(n,o,i),e.current.lanes=i,io(e,i,r),$e(e,r),e}function la(e,t,n,r){var i=t.current,o=Me(),s=mn(i);return n=z0(n),t.context===null?t.context=n:t.pendingContext=n,t=Ft(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pn(i,t,s),e!==null&&(mt(e,i,s,o),Ko(e,i,s)),s}function Vs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ff(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Uc(e,t){Ff(e,t),(e=e.alternate)&&Ff(e,t)}function Px(){return null}var N0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hc(e){this._internalRoot=e}ua.prototype.render=Hc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));la(e,t,null,null)};ua.prototype.unmount=Hc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kn(function(){la(null,e,null,null)}),t[Bt]=null}};function ua(e){this._internalRoot=e}ua.prototype.unstable_scheduleHydration=function(e){if(e){var t=pm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<on.length&&t!==0&&t<on[n].priority;n++);on.splice(n,0,e),n===0&&mm(e)}};function Wc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ca(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function If(){}function Tx(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Vs(s);o.call(u)}}var s=V0(t,r,e,0,null,!1,!1,"",If);return e._reactRootContainer=s,e[Bt]=s.current,Hi(e.nodeType===8?e.parentNode:e),Kn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Vs(l);a.call(u)}}var l=Bc(e,0,!1,null,null,!1,!1,"",If);return e._reactRootContainer=l,e[Bt]=l.current,Hi(e.nodeType===8?e.parentNode:e),Kn(function(){la(t,l,n,r)}),l}function da(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Vs(s);a.call(l)}}la(t,s,e,i)}else s=Tx(n,t,e,i,r);return Vs(s)}dm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=gi(t.pendingLanes);n!==0&&(cc(t,n|1),$e(t,ue()),!(B&6)&&(Nr=ue()+500,Tn()))}break;case 13:Kn(function(){var r=Ut(e,1);if(r!==null){var i=Me();mt(r,e,1,i)}}),Uc(e,1)}};dc=function(e){if(e.tag===13){var t=Ut(e,134217728);if(t!==null){var n=Me();mt(t,e,134217728,n)}Uc(e,134217728)}};fm=function(e){if(e.tag===13){var t=mn(e),n=Ut(e,t);if(n!==null){var r=Me();mt(n,e,t,r)}Uc(e,t)}};pm=function(){return G};hm=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};Hl=function(e,t,n){switch(t){case"input":if(Fl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ta(r);if(!i)throw Error(A(90));Wh(r),Fl(r,i)}}}break;case"textarea":Yh(e,n);break;case"select":t=n.value,t!=null&&Cr(e,!!n.multiple,t,!1)}};em=Ic;tm=Kn;var jx={usingClientEntryPoint:!1,Events:[so,dr,ta,qh,Jh,Ic]},ai={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ax={bundleType:ai.bundleType,version:ai.version,rendererPackageName:ai.rendererPackageName,rendererConfig:ai.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=im(e),e===null?null:e.stateNode},findFiberByHostInstance:ai.findFiberByHostInstance||Px,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Do=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Do.isDisabled&&Do.supportsFiber)try{Zs=Do.inject(Ax),Et=Do}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jx;Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wc(t))throw Error(A(200));return Ex(e,t,null,n)};Ye.createRoot=function(e,t){if(!Wc(e))throw Error(A(299));var n=!1,r="",i=N0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Bc(e,1,!1,null,null,n,!1,r,i),e[Bt]=t.current,Hi(e.nodeType===8?e.parentNode:e),new Hc(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=im(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return Kn(e)};Ye.hydrate=function(e,t,n){if(!ca(t))throw Error(A(200));return da(null,e,t,!0,n)};Ye.hydrateRoot=function(e,t,n){if(!Wc(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=N0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=V0(t,null,e,1,n??null,i,!1,o,s),e[Bt]=t.current,Hi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ua(t)};Ye.render=function(e,t,n){if(!ca(t))throw Error(A(200));return da(null,e,t,!1,n)};Ye.unmountComponentAtNode=function(e){if(!ca(e))throw Error(A(40));return e._reactRootContainer?(Kn(function(){da(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1};Ye.unstable_batchedUpdates=Ic;Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ca(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return da(e,t,n,!1,r)};Ye.version="18.3.1-next-f1338f8080-20240426";function F0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(F0)}catch(e){console.error(e)}}F0(),Fh.exports=Ye;var Rx=Fh.exports,Of=Rx;Rl.createRoot=Of.createRoot,Rl.hydrateRoot=Of.hydrateRoot;var je=function(){return je=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},je.apply(this,arguments)};function Fr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Z="-ms-",Ai="-moz-",W="-webkit-",I0="comm",fa="rule",Gc="decl",Lx="@import",O0="@keyframes",Mx="@layer",$0=Math.abs,Yc=String.fromCharCode,Cu=Object.assign;function Dx(e,t){return xe(e,0)^45?(((t<<2^xe(e,0))<<2^xe(e,1))<<2^xe(e,2))<<2^xe(e,3):0}function _0(e){return e.trim()}function Mt(e,t){return(e=t.exec(e))?e[0]:e}function I(e,t,n){return e.replace(t,n)}function ts(e,t,n){return e.indexOf(t,n)}function xe(e,t){return e.charCodeAt(t)|0}function Ir(e,t,n){return e.slice(t,n)}function kt(e){return e.length}function B0(e){return e.length}function vi(e,t){return t.push(e),e}function zx(e,t){return e.map(t).join("")}function $f(e,t){return e.filter(function(n){return!Mt(n,t)})}var pa=1,Or=1,U0=0,st=0,fe=0,Xr="";function ha(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:pa,column:Or,length:s,return:"",siblings:a}}function qt(e,t){return Cu(ha("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function tr(e){for(;e.root;)e=qt(e.root,{children:[e]});vi(e,e.siblings)}function Vx(){return fe}function Nx(){return fe=st>0?xe(Xr,--st):0,Or--,fe===10&&(Or=1,pa--),fe}function gt(){return fe=st<U0?xe(Xr,st++):0,Or++,fe===10&&(Or=1,pa++),fe}function Un(){return xe(Xr,st)}function ns(){return st}function ma(e,t){return Ir(Xr,e,t)}function bu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Fx(e){return pa=Or=1,U0=kt(Xr=e),st=0,[]}function Ix(e){return Xr="",e}function al(e){return _0(ma(st-1,Eu(e===91?e+2:e===40?e+1:e)))}function Ox(e){for(;(fe=Un())&&fe<33;)gt();return bu(e)>2||bu(fe)>3?"":" "}function $x(e,t){for(;--t&&gt()&&!(fe<48||fe>102||fe>57&&fe<65||fe>70&&fe<97););return ma(e,ns()+(t<6&&Un()==32&&gt()==32))}function Eu(e){for(;gt();)switch(fe){case e:return st;case 34:case 39:e!==34&&e!==39&&Eu(fe);break;case 40:e===41&&Eu(e);break;case 92:gt();break}return st}function _x(e,t){for(;gt()&&e+fe!==47+10;)if(e+fe===42+42&&Un()===47)break;return"/*"+ma(t,st-1)+"*"+Yc(e===47?e:gt())}function Bx(e){for(;!bu(Un());)gt();return ma(e,st)}function Ux(e){return Ix(rs("",null,null,null,[""],e=Fx(e),0,[0],e))}function rs(e,t,n,r,i,o,s,a,l){for(var u=0,c=0,d=s,f=0,y=0,v=0,w=1,k=1,g=1,h=0,m="",S=i,E=o,T=r,P=m;k;)switch(v=h,h=gt()){case 40:if(v!=108&&xe(P,d-1)==58){ts(P+=I(al(h),"&","&\f"),"&\f",$0(u?a[u-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:P+=al(h);break;case 9:case 10:case 13:case 32:P+=Ox(v);break;case 92:P+=$x(ns()-1,7);continue;case 47:switch(Un()){case 42:case 47:vi(Hx(_x(gt(),ns()),t,n,l),l);break;default:P+="/"}break;case 123*w:a[u++]=kt(P)*g;case 125*w:case 59:case 0:switch(h){case 0:case 125:k=0;case 59+c:g==-1&&(P=I(P,/\f/g,"")),y>0&&kt(P)-d&&vi(y>32?Bf(P+";",r,n,d-1,l):Bf(I(P," ","")+";",r,n,d-2,l),l);break;case 59:P+=";";default:if(vi(T=_f(P,t,n,u,c,i,a,m,S=[],E=[],d,o),o),h===123)if(c===0)rs(P,t,T,T,S,o,d,a,E);else switch(f===99&&xe(P,3)===110?100:f){case 100:case 108:case 109:case 115:rs(e,T,T,r&&vi(_f(e,T,T,0,0,i,a,m,i,S=[],d,E),E),i,E,d,a,r?S:E);break;default:rs(P,T,T,T,[""],E,0,a,E)}}u=c=y=0,w=g=1,m=P="",d=s;break;case 58:d=1+kt(P),y=v;default:if(w<1){if(h==123)--w;else if(h==125&&w++==0&&Nx()==125)continue}switch(P+=Yc(h),h*w){case 38:g=c>0?1:(P+="\f",-1);break;case 44:a[u++]=(kt(P)-1)*g,g=1;break;case 64:Un()===45&&(P+=al(gt())),f=Un(),c=d=kt(m=P+=Bx(ns())),h++;break;case 45:v===45&&kt(P)==2&&(w=0)}}return o}function _f(e,t,n,r,i,o,s,a,l,u,c,d){for(var f=i-1,y=i===0?o:[""],v=B0(y),w=0,k=0,g=0;w<r;++w)for(var h=0,m=Ir(e,f+1,f=$0(k=s[w])),S=e;h<v;++h)(S=_0(k>0?y[h]+" "+m:I(m,/&\f/g,y[h])))&&(l[g++]=S);return ha(e,t,n,i===0?fa:a,l,u,c,d)}function Hx(e,t,n,r){return ha(e,t,n,I0,Yc(Vx()),Ir(e,2,-2),0,r)}function Bf(e,t,n,r,i){return ha(e,t,n,Gc,Ir(e,0,r),Ir(e,r+1,-1),r,i)}function H0(e,t,n){switch(Dx(e,t)){case 5103:return W+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return W+e+e;case 4789:return Ai+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return W+e+Ai+e+Z+e+e;case 5936:switch(xe(e,t+11)){case 114:return W+e+Z+I(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return W+e+Z+I(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return W+e+Z+I(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return W+e+Z+e+e;case 6165:return W+e+Z+"flex-"+e+e;case 5187:return W+e+I(e,/(\w+).+(:[^]+)/,W+"box-$1$2"+Z+"flex-$1$2")+e;case 5443:return W+e+Z+"flex-item-"+I(e,/flex-|-self/g,"")+(Mt(e,/flex-|baseline/)?"":Z+"grid-row-"+I(e,/flex-|-self/g,""))+e;case 4675:return W+e+Z+"flex-line-pack"+I(e,/align-content|flex-|-self/g,"")+e;case 5548:return W+e+Z+I(e,"shrink","negative")+e;case 5292:return W+e+Z+I(e,"basis","preferred-size")+e;case 6060:return W+"box-"+I(e,"-grow","")+W+e+Z+I(e,"grow","positive")+e;case 4554:return W+I(e,/([^-])(transform)/g,"$1"+W+"$2")+e;case 6187:return I(I(I(e,/(zoom-|grab)/,W+"$1"),/(image-set)/,W+"$1"),e,"")+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,W+"$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,W+"box-pack:$3"+Z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+W+e+e;case 4200:if(!Mt(e,/flex-|baseline/))return Z+"grid-column-align"+Ir(e,t)+e;break;case 2592:case 3360:return Z+I(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Mt(r.props,/grid-\w+-end/)})?~ts(e+(n=n[t].value),"span",0)?e:Z+I(e,"-start","")+e+Z+"grid-row-span:"+(~ts(n,"span",0)?Mt(n,/\d+/):+Mt(n,/\d+/)-+Mt(e,/\d+/))+";":Z+I(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Mt(r.props,/grid-\w+-start/)})?e:Z+I(I(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,W+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kt(e)-1-t>6)switch(xe(e,t+1)){case 109:if(xe(e,t+4)!==45)break;case 102:return I(e,/(.+:)(.+)-([^]+)/,"$1"+W+"$2-$3$1"+Ai+(xe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ts(e,"stretch",0)?H0(I(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return I(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return Z+i+":"+o+u+(s?Z+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(xe(e,t+6)===121)return I(e,":",":"+W)+e;break;case 6444:switch(xe(e,xe(e,14)===45?18:11)){case 120:return I(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+W+(xe(e,14)===45?"inline-":"")+"box$3$1"+W+"$2$3$1"+Z+"$2box$3")+e;case 100:return I(e,":",":"+Z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return I(e,"scroll-","scroll-snap-")+e}return e}function Ns(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Wx(e,t,n,r){switch(e.type){case Mx:if(e.children.length)break;case Lx:case Gc:return e.return=e.return||e.value;case I0:return"";case O0:return e.return=e.value+"{"+Ns(e.children,r)+"}";case fa:if(!kt(e.value=e.props.join(",")))return""}return kt(n=Ns(e.children,r))?e.return=e.value+"{"+n+"}":""}function Gx(e){var t=B0(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function Yx(e){return function(t){t.root||(t=t.return)&&e(t)}}function Kx(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Gc:e.return=H0(e.value,e.length,n);return;case O0:return Ns([qt(e,{value:I(e.value,"@","@"+W)})],r);case fa:if(e.length)return zx(n=e.props,function(i){switch(Mt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":tr(qt(e,{props:[I(i,/:(read-\w+)/,":"+Ai+"$1")]})),tr(qt(e,{props:[i]})),Cu(e,{props:$f(n,r)});break;case"::placeholder":tr(qt(e,{props:[I(i,/:(plac\w+)/,":"+W+"input-$1")]})),tr(qt(e,{props:[I(i,/:(plac\w+)/,":"+Ai+"$1")]})),tr(qt(e,{props:[I(i,/:(plac\w+)/,Z+"input-$1")]})),tr(qt(e,{props:[i]})),Cu(e,{props:$f(n,r)});break}return""})}}var Xx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$r=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",W0="active",G0="data-styled-version",ga="6.1.19",Kc=`/*!sc*/
`,Fs=typeof window<"u"&&typeof document<"u",Qx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Zx={},ya=Object.freeze([]),_r=Object.freeze({});function Y0(e,t,n){return n===void 0&&(n=_r),e.theme!==n.theme&&e.theme||t||n.theme}var K0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),qx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Jx=/(^-|-$)/g;function Uf(e){return e.replace(qx,"-").replace(Jx,"")}var e2=/(a)(d)/gi,zo=52,Hf=function(e){return String.fromCharCode(e+(e>25?39:97))};function Pu(e){var t,n="";for(t=Math.abs(e);t>zo;t=t/zo|0)n=Hf(t%zo)+n;return(Hf(t%zo)+n).replace(e2,"$1-$2")}var ll,X0=5381,vr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Q0=function(e){return vr(X0,e)};function Xc(e){return Pu(Q0(e)>>>0)}function t2(e){return e.displayName||e.name||"Component"}function ul(e){return typeof e=="string"&&!0}var Z0=typeof Symbol=="function"&&Symbol.for,q0=Z0?Symbol.for("react.memo"):60115,n2=Z0?Symbol.for("react.forward_ref"):60112,r2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},J0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o2=((ll={})[n2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ll[q0]=J0,ll);function Wf(e){return("type"in(t=e)&&t.type.$$typeof)===q0?J0:"$$typeof"in e?o2[e.$$typeof]:r2;var t}var s2=Object.defineProperty,a2=Object.getOwnPropertyNames,Gf=Object.getOwnPropertySymbols,l2=Object.getOwnPropertyDescriptor,u2=Object.getPrototypeOf,Yf=Object.prototype;function eg(e,t,n){if(typeof t!="string"){if(Yf){var r=u2(t);r&&r!==Yf&&eg(e,r,n)}var i=a2(t);Gf&&(i=i.concat(Gf(t)));for(var o=Wf(e),s=Wf(t),a=0;a<i.length;++a){var l=i[a];if(!(l in i2||n&&n[l]||s&&l in s||o&&l in o)){var u=l2(t,l);try{s2(e,l,u)}catch{}}}}return e}function Br(e){return typeof e=="function"}function Qc(e){return typeof e=="object"&&"styledComponentId"in e}function On(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Is(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ji(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Tu(e,t,n){if(n===void 0&&(n=!1),!n&&!Ji(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Tu(e[r],t[r]);else if(Ji(t))for(var r in t)e[r]=Tu(e[r],t[r]);return e}function Zc(e,t){Object.defineProperty(e,"toString",{value:t})}function lo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var c2=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw lo(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Kc);return n},e}(),is=new Map,Os=new Map,os=1,Vo=function(e){if(is.has(e))return is.get(e);for(;Os.has(os);)os++;var t=os++;return is.set(e,t),Os.set(t,e),t},d2=function(e,t){os=t+1,is.set(e,t),Os.set(t,e)},f2="style[".concat($r,"][").concat(G0,'="').concat(ga,'"]'),p2=new RegExp("^".concat($r,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),h2=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},m2=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Kc),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(p2);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(d2(c,u),h2(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}},Kf=function(e){for(var t=document.querySelectorAll(f2),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute($r)!==W0&&(m2(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function g2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var tg=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat($r,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute($r,W0),r.setAttribute(G0,ga);var s=g2();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},y2=function(){function e(t){this.element=tg(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw lo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),v2=function(){function e(t){this.element=tg(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),x2=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Xf=Fs,w2={isServer:!Fs,useCSSOMInjection:!Qx},$s=function(){function e(t,n,r){t===void 0&&(t=_r),n===void 0&&(n={});var i=this;this.options=je(je({},w2),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Fs&&Xf&&(Xf=!1,Kf(this)),Zc(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(d){var f=function(g){return Os.get(g)}(d);if(f===void 0)return"continue";var y=o.names.get(f),v=s.getGroup(d);if(y===void 0||!y.size||v.length===0)return"continue";var w="".concat($r,".g").concat(d,'[id="').concat(f,'"]'),k="";y!==void 0&&y.forEach(function(g){g.length>0&&(k+="".concat(g,","))}),l+="".concat(v).concat(w,'{content:"').concat(k,'"}').concat(Kc)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return Vo(t)},e.prototype.rehydrate=function(){!this.server&&Fs&&Kf(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(je(je({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new x2(i):r?new y2(i):new v2(i)}(this.options),new c2(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Vo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Vo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Vo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),S2=/&/g,k2=/^\s*\/\/.*$/gm;function ng(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=ng(n.children,t)),n})}function C2(e){var t,n,r,i=e===void 0?_r:e,o=i.options,s=o===void 0?_r:o,a=i.plugins,l=a===void 0?ya:a,u=function(f,y,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):f},c=l.slice();c.push(function(f){f.type===fa&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(S2,n).replace(r,u))}),s.prefix&&c.push(Kx),c.push(Wx);var d=function(f,y,v,w){y===void 0&&(y=""),v===void 0&&(v=""),w===void 0&&(w="&"),t=w,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var k=f.replace(k2,""),g=Ux(v||y?"".concat(v," ").concat(y," { ").concat(k," }"):k);s.namespace&&(g=ng(g,s.namespace));var h=[];return Ns(g,Gx(c.concat(Yx(function(m){return h.push(m)})))),h};return d.hash=l.length?l.reduce(function(f,y){return y.name||lo(15),vr(f,y.name)},X0).toString():"",d}var b2=new $s,ju=C2(),rg=ge.createContext({shouldForwardProp:void 0,styleSheet:b2,stylis:ju});rg.Consumer;ge.createContext(void 0);function Au(){return x.useContext(rg)}var ig=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ju);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Zc(this,function(){throw lo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ju),this.name+t.hash},e}(),E2=function(e){return e>="A"&&e<="Z"};function Qf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;E2(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var og=function(e){return e==null||e===!1||e===""},sg=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!og(o)&&(Array.isArray(o)&&o.isCss||Br(o)?r.push("".concat(Qf(i),":"),o,";"):Ji(o)?r.push.apply(r,Fr(Fr(["".concat(i," {")],sg(o),!1),["}"],!1)):r.push("".concat(Qf(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Xx||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function yn(e,t,n,r){if(og(e))return[];if(Qc(e))return[".".concat(e.styledComponentId)];if(Br(e)){if(!Br(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return yn(i,t,n,r)}var o;return e instanceof ig?n?(e.inject(n,r),[e.getName(r)]):[e]:Ji(e)?sg(e):Array.isArray(e)?Array.prototype.concat.apply(ya,e.map(function(s){return yn(s,t,n,r)})):[e.toString()]}function ag(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Br(n)&&!Qc(n))return!1}return!0}var P2=Q0(ga),T2=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ag(t),this.componentId=n,this.baseHash=vr(P2,n),this.baseStyle=r,$s.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=On(i,this.staticRulesId);else{var o=Is(yn(this.rules,t,n,r)),s=Pu(vr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=On(i,s),this.staticRulesId=s}else{for(var l=vr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var f=Is(yn(d,t,n,r));l=vr(l,f+c),u+=f}}if(u){var y=Pu(l>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),i=On(i,y)}}return i},e}(),qc=ge.createContext(void 0);qc.Consumer;var cl={};function j2(e,t,n){var r=Qc(e),i=e,o=!ul(e),s=t.attrs,a=s===void 0?ya:s,l=t.componentId,u=l===void 0?function(S,E){var T=typeof S!="string"?"sc":Uf(S);cl[T]=(cl[T]||0)+1;var P="".concat(T,"-").concat(Xc(ga+T+cl[T]));return E?"".concat(E,"-").concat(P):P}(t.displayName,t.parentComponentId):l,c=t.displayName,d=c===void 0?function(S){return ul(S)?"styled.".concat(S):"Styled(".concat(t2(S),")")}(e):c,f=t.displayName&&t.componentId?"".concat(Uf(t.displayName),"-").concat(t.componentId):t.componentId||u,y=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;v=function(S,E){return w(S,E)&&k(S,E)}}else v=w}var g=new T2(n,f,r?i.componentStyle:void 0);function h(S,E){return function(T,P,j){var M=T.attrs,V=T.componentStyle,Y=T.defaultProps,le=T.foldedComponentIds,ce=T.styledComponentId,oe=T.target,Xe=ge.useContext(qc),H=Au(),O=T.shouldForwardProp||H.shouldForwardProp,b=Y0(P,Xe,Y)||_r,D=function(at,he,Qe){for(var An,lt=je(je({},he),{className:void 0,theme:Qe}),Qt=0;Qt<at.length;Qt+=1){var Ze=Br(An=at[Qt])?An(lt):An;for(var Rt in Ze)lt[Rt]=Rt==="className"?On(lt[Rt],Ze[Rt]):Rt==="style"?je(je({},lt[Rt]),Ze[Rt]):Ze[Rt]}return he.className&&(lt.className=On(lt.className,he.className)),lt}(M,P,b),L=D.as||oe,N={};for(var _ in D)D[_]===void 0||_[0]==="$"||_==="as"||_==="theme"&&D.theme===b||(_==="forwardedAs"?N.as=D.forwardedAs:O&&!O(_,L)||(N[_]=D[_]));var xt=function(at,he){var Qe=Au(),An=at.generateAndInjectStyles(he,Qe.styleSheet,Qe.stylis);return An}(V,D),Ve=On(le,ce);return xt&&(Ve+=" "+xt),D.className&&(Ve+=" "+D.className),N[ul(L)&&!K0.has(L)?"class":"className"]=Ve,j&&(N.ref=j),x.createElement(L,N)}(m,S,E)}h.displayName=d;var m=ge.forwardRef(h);return m.attrs=y,m.componentStyle=g,m.displayName=d,m.shouldForwardProp=v,m.foldedComponentIds=r?On(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=f,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(E){for(var T=[],P=1;P<arguments.length;P++)T[P-1]=arguments[P];for(var j=0,M=T;j<M.length;j++)Tu(E,M[j],!0);return E}({},i.defaultProps,S):S}}),Zc(m,function(){return".".concat(m.styledComponentId)}),o&&eg(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Zf(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var qf=function(e){return Object.assign(e,{isCss:!0})};function Jc(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Br(e)||Ji(e))return qf(yn(Zf(ya,Fr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?yn(r):qf(yn(Zf(r,t)))}function Ru(e,t,n){if(n===void 0&&(n=_r),!t)throw lo(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,Jc.apply(void 0,Fr([i],o,!1)))};return r.attrs=function(i){return Ru(e,t,je(je({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ru(e,t,je(je({},n),i))},r}var lg=function(e){return Ru(j2,e)},C=lg;K0.forEach(function(e){C[e]=lg(e)});var A2=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=ag(t),$s.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Is(yn(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&$s.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function R2(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Jc.apply(void 0,Fr([e],t,!1)),i="sc-global-".concat(Xc(JSON.stringify(r))),o=new A2(r,i),s=function(l){var u=Au(),c=ge.useContext(qc),d=ge.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(d,l,u.styleSheet,c,u.stylis),ge.useLayoutEffect(function(){if(!u.styleSheet.server)return a(d,l,u.styleSheet,c,u.stylis),function(){return o.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,d,f){if(o.isStatic)o.renderStyles(l,Zx,c,f);else{var y=je(je({},u),{theme:Y0(u,d,s.defaultProps)});o.renderStyles(l,y,c,f)}}return ge.memo(s)}function Yt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Is(Jc.apply(void 0,Fr([e],t,!1))),i=Xc(r);return new ig(i,r)}const L2=R2`
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
    --container-max: 120rem; /* 1200px */
    --gutter: 2.4rem;       /* 24px */
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
`,M2="modulepreload",D2=function(e){return"/"+e},Jf={},z2=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=D2(o),o in Jf)return;Jf[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const d=i[c];if(d.href===o&&(!s||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":M2,s||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),s)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})};var ep="popstate";function V2(e={}){function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Lu("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:eo(i)}return F2(t,n,null,e)}function re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function jt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function N2(){return Math.random().toString(36).substring(2,10)}function tp(e,t){return{usr:e.state,key:e.key,idx:t}}function Lu(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Qr(t):t,state:n,key:t&&t.key||r||N2()}}function eo({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Qr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function F2(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a="POP",l=null,u=c();u==null&&(u=0,s.replaceState({...s.state,idx:u},""));function c(){return(s.state||{idx:null}).idx}function d(){a="POP";let k=c(),g=k==null?null:k-u;u=k,l&&l({action:a,location:w.location,delta:g})}function f(k,g){a="PUSH";let h=Lu(w.location,k,g);n&&n(h,k),u=c()+1;let m=tp(h,u),S=w.createHref(h);try{s.pushState(m,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(S)}o&&l&&l({action:a,location:w.location,delta:1})}function y(k,g){a="REPLACE";let h=Lu(w.location,k,g);n&&n(h,k),u=c();let m=tp(h,u),S=w.createHref(h);s.replaceState(m,"",S),o&&l&&l({action:a,location:w.location,delta:0})}function v(k){return I2(k)}let w={get action(){return a},get location(){return e(i,s)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ep,d),l=k,()=>{i.removeEventListener(ep,d),l=null}},createHref(k){return t(i,k)},createURL:v,encodeLocation(k){let g=v(k);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:y,go(k){return s.go(k)}};return w}function I2(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),re(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:eo(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function ug(e,t,n="/"){return O2(e,t,n,!1)}function O2(e,t,n,r){let i=typeof t=="string"?Qr(t):t,o=Wt(i.pathname||"/",n);if(o==null)return null;let s=cg(e);$2(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=Z2(o);a=X2(s[l],u,r)}return a}function cg(e,t=[],n=[],r="",i=!1){let o=(s,a,l=i,u)=>{let c={relativePath:u===void 0?s.path||"":u,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};if(c.relativePath.startsWith("/")){if(!c.relativePath.startsWith(r)&&l)return;re(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let d=It([r,c.relativePath]),f=n.concat(c);s.children&&s.children.length>0&&(re(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),cg(s.children,t,f,d,l)),!(s.path==null&&!s.index)&&t.push({path:d,score:Y2(d,s.index),routesMeta:f})};return e.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))o(s,a);else for(let u of dg(s.path))o(s,a,!0,u)}),t}function dg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=dg(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function $2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:K2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var _2=/^:[\w-]+$/,B2=3,U2=2,H2=1,W2=10,G2=-2,np=e=>e==="*";function Y2(e,t){let n=e.split("/"),r=n.length;return n.some(np)&&(r+=G2),t&&(r+=U2),n.filter(i=>!np(i)).reduce((i,o)=>i+(_2.test(o)?B2:o===""?H2:W2),r)}function K2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function X2(e,t,n=!1){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,c=o==="/"?t:t.slice(o.length)||"/",d=_s({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),f=l.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=_s({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!d)return null;Object.assign(i,d.params),s.push({params:i,pathname:It([o,d.pathname]),pathnameBase:tw(It([o,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(o=It([o,d.pathnameBase]))}return s}function _s(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Q2(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,{paramName:c,isOptional:d},f)=>{if(c==="*"){let v=a[f]||"";s=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[f];return d&&!y?u[c]=void 0:u[c]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Q2(e,t=!1,n=!0){jt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Z2(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return jt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Wt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function q2(e,t="/"){let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Qr(e):e;return{pathname:n?n.startsWith("/")?n:J2(n,t):t,search:nw(r),hash:rw(i)}}function J2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function dl(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ew(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function fg(e){let t=ew(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function pg(e,t,n,r=!1){let i;typeof e=="string"?i=Qr(e):(i={...e},re(!i.pathname||!i.pathname.includes("?"),dl("?","pathname","search",i)),re(!i.pathname||!i.pathname.includes("#"),dl("#","pathname","hash",i)),re(!i.search||!i.search.includes("#"),dl("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?t[d]:"/"}let l=q2(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}var It=e=>e.join("/").replace(/\/\/+/g,"/"),tw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),nw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,rw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function iw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var hg=["POST","PUT","PATCH","DELETE"];new Set(hg);var ow=["GET",...hg];new Set(ow);var Zr=x.createContext(null);Zr.displayName="DataRouter";var va=x.createContext(null);va.displayName="DataRouterState";x.createContext(!1);var mg=x.createContext({isTransitioning:!1});mg.displayName="ViewTransition";var sw=x.createContext(new Map);sw.displayName="Fetchers";var aw=x.createContext(null);aw.displayName="Await";var At=x.createContext(null);At.displayName="Navigation";var uo=x.createContext(null);uo.displayName="Location";var Kt=x.createContext({outlet:null,matches:[],isDataRoute:!1});Kt.displayName="Route";var ed=x.createContext(null);ed.displayName="RouteError";function lw(e,{relative:t}={}){re(co(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=x.useContext(At),{hash:i,pathname:o,search:s}=fo(e,{relative:t}),a=o;return n!=="/"&&(a=o==="/"?n:It([n,o])),r.createHref({pathname:a,search:s,hash:i})}function co(){return x.useContext(uo)!=null}function Xt(){return re(co(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(uo).location}var gg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function yg(e){x.useContext(At).static||x.useLayoutEffect(e)}function vg(){let{isDataRoute:e}=x.useContext(Kt);return e?Sw():uw()}function uw(){re(co(),"useNavigate() may be used only in the context of a <Router> component.");let e=x.useContext(Zr),{basename:t,navigator:n}=x.useContext(At),{matches:r}=x.useContext(Kt),{pathname:i}=Xt(),o=JSON.stringify(fg(r)),s=x.useRef(!1);return yg(()=>{s.current=!0}),x.useCallback((l,u={})=>{if(jt(s.current,gg),!s.current)return;if(typeof l=="number"){n.go(l);return}let c=pg(l,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:It([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,o,i,e])}x.createContext(null);function fo(e,{relative:t}={}){let{matches:n}=x.useContext(Kt),{pathname:r}=Xt(),i=JSON.stringify(fg(n));return x.useMemo(()=>pg(e,JSON.parse(i),r,t==="path"),[e,i,r,t])}function cw(e,t){return xg(e,t)}function xg(e,t,n,r,i){var h;re(co(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=x.useContext(At),{matches:s}=x.useContext(Kt),a=s[s.length-1],l=a?a.params:{},u=a?a.pathname:"/",c=a?a.pathnameBase:"/",d=a&&a.route;{let m=d&&d.path||"";wg(u,!d||m.endsWith("*")||m.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m==="/"?"*":`${m}/*`}">.`)}let f=Xt(),y;if(t){let m=typeof t=="string"?Qr(t):t;re(c==="/"||((h=m.pathname)==null?void 0:h.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${m.pathname}" was given in the \`location\` prop.`),y=m}else y=f;let v=y.pathname||"/",w=v;if(c!=="/"){let m=c.replace(/^\//,"").split("/");w="/"+v.replace(/^\//,"").split("/").slice(m.length).join("/")}let k=ug(e,{pathname:w});jt(d||k!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),jt(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let g=mw(k&&k.map(m=>Object.assign({},m,{params:Object.assign({},l,m.params),pathname:It([c,o.encodeLocation?o.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?c:It([c,o.encodeLocation?o.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,r,i);return t&&g?x.createElement(uo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},g):g}function dw(){let e=ww(),t=iw(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:o},"ErrorBoundary")," or"," ",x.createElement("code",{style:o},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:i},n):null,s)}var fw=x.createElement(dw,null),pw=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?x.createElement(Kt.Provider,{value:this.props.routeContext},x.createElement(ed.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function hw({routeContext:e,match:t,children:n}){let r=x.useContext(Zr);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(Kt.Provider,{value:e},n)}function mw(e,t=[],n=null,r=null,i=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=n==null?void 0:n.errors;if(s!=null){let u=o.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);re(u>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),o=o.slice(0,Math.min(o.length,u+1))}let a=!1,l=-1;if(n)for(let u=0;u<o.length;u++){let c=o[u];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(l=u),c.route.id){let{loaderData:d,errors:f}=n,y=c.route.loader&&!d.hasOwnProperty(c.route.id)&&(!f||f[c.route.id]===void 0);if(c.route.lazy||y){a=!0,l>=0?o=o.slice(0,l+1):o=[o[0]];break}}}return o.reduceRight((u,c,d)=>{let f,y=!1,v=null,w=null;n&&(f=s&&c.route.id?s[c.route.id]:void 0,v=c.route.errorElement||fw,a&&(l<0&&d===0?(wg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,w=null):l===d&&(y=!0,w=c.route.hydrateFallbackElement||null)));let k=t.concat(o.slice(0,d+1)),g=()=>{let h;return f?h=v:y?h=w:c.route.Component?h=x.createElement(c.route.Component,null):c.route.element?h=c.route.element:h=u,x.createElement(hw,{match:c,routeContext:{outlet:u,matches:k,isDataRoute:n!=null},children:h})};return n&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?x.createElement(pw,{location:n.location,revalidation:n.revalidation,component:v,error:f,children:g(),routeContext:{outlet:null,matches:k,isDataRoute:!0},unstable_onError:r}):g()},null)}function td(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gw(e){let t=x.useContext(Zr);return re(t,td(e)),t}function yw(e){let t=x.useContext(va);return re(t,td(e)),t}function vw(e){let t=x.useContext(Kt);return re(t,td(e)),t}function nd(e){let t=vw(e),n=t.matches[t.matches.length-1];return re(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function xw(){return nd("useRouteId")}function ww(){var r;let e=x.useContext(ed),t=yw("useRouteError"),n=nd("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function Sw(){let{router:e}=gw("useNavigate"),t=nd("useNavigate"),n=x.useRef(!1);return yg(()=>{n.current=!0}),x.useCallback(async(i,o={})=>{jt(n.current,gg),n.current&&(typeof i=="number"?e.navigate(i):await e.navigate(i,{fromRouteId:t,...o}))},[e,t])}var rp={};function wg(e,t,n){!t&&!rp[e]&&(rp[e]=!0,jt(!1,n))}x.memo(kw);function kw({routes:e,future:t,state:n,unstable_onError:r}){return xg(e,void 0,n,r,t)}function or(e){re(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Cw({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:o=!1}){re(!co(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),a=x.useMemo(()=>({basename:s,navigator:i,static:o,future:{}}),[s,i,o]);typeof n=="string"&&(n=Qr(n));let{pathname:l="/",search:u="",hash:c="",state:d=null,key:f="default"}=n,y=x.useMemo(()=>{let v=Wt(l,s);return v==null?null:{location:{pathname:v,search:u,hash:c,state:d,key:f},navigationType:r}},[s,l,u,c,d,f,r]);return jt(y!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${c}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:x.createElement(At.Provider,{value:a},x.createElement(uo.Provider,{children:t,value:y}))}function bw({children:e,location:t}){return cw(Mu(e),t)}function Mu(e,t=[]){let n=[];return x.Children.forEach(e,(r,i)=>{if(!x.isValidElement(r))return;let o=[...t,i];if(r.type===x.Fragment){n.push.apply(n,Mu(r.props.children,o));return}re(r.type===or,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),re(!r.props.index||!r.props.children,"An index route cannot have child routes.");let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Mu(r.props.children,o)),n.push(s)}),n}var ss="get",as="application/x-www-form-urlencoded";function xa(e){return e!=null&&typeof e.tagName=="string"}function Ew(e){return xa(e)&&e.tagName.toLowerCase()==="button"}function Pw(e){return xa(e)&&e.tagName.toLowerCase()==="form"}function Tw(e){return xa(e)&&e.tagName.toLowerCase()==="input"}function jw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Aw(e,t){return e.button===0&&(!t||t==="_self")&&!jw(e)}var No=null;function Rw(){if(No===null)try{new FormData(document.createElement("form"),0),No=!1}catch{No=!0}return No}var Lw=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function fl(e){return e!=null&&!Lw.has(e)?(jt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${as}"`),null):e}function Mw(e,t){let n,r,i,o,s;if(Pw(e)){let a=e.getAttribute("action");r=a?Wt(a,t):null,n=e.getAttribute("method")||ss,i=fl(e.getAttribute("enctype"))||as,o=new FormData(e)}else if(Ew(e)||Tw(e)&&(e.type==="submit"||e.type==="image")){let a=e.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||a.getAttribute("action");if(r=l?Wt(l,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||ss,i=fl(e.getAttribute("formenctype"))||fl(a.getAttribute("enctype"))||as,o=new FormData(a,e),!Rw()){let{name:u,type:c,value:d}=e;if(c==="image"){let f=u?`${u}.`:"";o.append(`${f}x`,"0"),o.append(`${f}y`,"0")}else u&&o.append(u,d)}}else{if(xa(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ss,r=null,i=as,s=e}return o&&i==="text/plain"&&(s=o,o=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:o,body:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function rd(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Dw(e,t,n){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname=`_root.${n}`:t&&Wt(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function zw(e,t){if(e.id in t)return t[e.id];try{let n=await z2(()=>import(e.module),[]);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Vw(e){return e!=null&&typeof e.page=="string"}function Nw(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Fw(e,t,n){let r=await Promise.all(e.map(async i=>{let o=t.routes[i.route.id];if(o){let s=await zw(o,n);return s.links?s.links():[]}return[]}));return _w(r.flat(1).filter(Nw).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function ip(e,t,n,r,i,o){let s=(l,u)=>n[u]?l.route.id!==n[u].route.id:!0,a=(l,u)=>{var c;return n[u].pathname!==l.pathname||((c=n[u].route.path)==null?void 0:c.endsWith("*"))&&n[u].params["*"]!==l.params["*"]};return o==="assets"?t.filter((l,u)=>s(l,u)||a(l,u)):o==="data"?t.filter((l,u)=>{var d;let c=r.routes[l.route.id];if(!c||!c.hasLoader)return!1;if(s(l,u)||a(l,u))return!0;if(l.route.shouldRevalidate){let f=l.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((d=n[0])==null?void 0:d.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function Iw(e,t,{includeHydrateFallback:n}={}){return Ow(e.map(r=>{let i=t.routes[r.route.id];if(!i)return[];let o=[i.module];return i.clientActionModule&&(o=o.concat(i.clientActionModule)),i.clientLoaderModule&&(o=o.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(o=o.concat(i.hydrateFallbackModule)),i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function Ow(e){return[...new Set(e)]}function $w(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function _w(e,t){let n=new Set,r=new Set(t);return e.reduce((i,o)=>{if(t&&!Vw(o)&&o.as==="script"&&o.href&&r.has(o.href))return i;let a=JSON.stringify($w(o));return n.has(a)||(n.add(a),i.push({key:a,link:o})),i},[])}function Sg(){let e=x.useContext(Zr);return rd(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Bw(){let e=x.useContext(va);return rd(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var id=x.createContext(void 0);id.displayName="FrameworkContext";function kg(){let e=x.useContext(id);return rd(e,"You must render this element inside a <HydratedRouter> element"),e}function Uw(e,t){let n=x.useContext(id),[r,i]=x.useState(!1),[o,s]=x.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:u,onMouseLeave:c,onTouchStart:d}=t,f=x.useRef(null);x.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let w=g=>{g.forEach(h=>{s(h.isIntersecting)})},k=new IntersectionObserver(w,{threshold:.5});return f.current&&k.observe(f.current),()=>{k.disconnect()}}},[e]),x.useEffect(()=>{if(r){let w=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(w)}}},[r]);let y=()=>{i(!0)},v=()=>{i(!1),s(!1)};return n?e!=="intent"?[o,f,{}]:[o,f,{onFocus:li(a,y),onBlur:li(l,v),onMouseEnter:li(u,y),onMouseLeave:li(c,v),onTouchStart:li(d,y)}]:[!1,f,{}]}function li(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Hw({page:e,...t}){let{router:n}=Sg(),r=x.useMemo(()=>ug(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?x.createElement(Gw,{page:e,matches:r,...t}):null}function Ww(e){let{manifest:t,routeModules:n}=kg(),[r,i]=x.useState([]);return x.useEffect(()=>{let o=!1;return Fw(e,t,n).then(s=>{o||i(s)}),()=>{o=!0}},[e,t,n]),r}function Gw({page:e,matches:t,...n}){let r=Xt(),{manifest:i,routeModules:o}=kg(),{basename:s}=Sg(),{loaderData:a,matches:l}=Bw(),u=x.useMemo(()=>ip(e,t,l,i,r,"data"),[e,t,l,i,r]),c=x.useMemo(()=>ip(e,t,l,i,r,"assets"),[e,t,l,i,r]),d=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let v=new Set,w=!1;if(t.forEach(g=>{var m;let h=i.routes[g.route.id];!h||!h.hasLoader||(!u.some(S=>S.route.id===g.route.id)&&g.route.id in a&&((m=o[g.route.id])!=null&&m.shouldRevalidate)||h.hasClientLoader?w=!0:v.add(g.route.id))}),v.size===0)return[];let k=Dw(e,s,"data");return w&&v.size>0&&k.searchParams.set("_routes",t.filter(g=>v.has(g.route.id)).map(g=>g.route.id).join(",")),[k.pathname+k.search]},[s,a,r,i,u,t,e,o]),f=x.useMemo(()=>Iw(c,i),[c,i]),y=Ww(c);return x.createElement(x.Fragment,null,d.map(v=>x.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...n})),f.map(v=>x.createElement("link",{key:v,rel:"modulepreload",href:v,...n})),y.map(({key:v,link:w})=>x.createElement("link",{key:v,nonce:n.nonce,...w})))}function Yw(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Cg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Cg&&(window.__reactRouterVersion="7.9.1")}catch{}function Kw({basename:e,children:t,window:n}){let r=x.useRef();r.current==null&&(r.current=V2({window:n,v5Compat:!0}));let i=r.current,[o,s]=x.useState({action:i.action,location:i.location}),a=x.useCallback(l=>{x.startTransition(()=>s(l))},[s]);return x.useLayoutEffect(()=>i.listen(a),[i,a]),x.createElement(Cw,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:i})}var bg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wa=x.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c,viewTransition:d,...f},y){let{basename:v}=x.useContext(At),w=typeof u=="string"&&bg.test(u),k,g=!1;if(typeof u=="string"&&w&&(k=u,Cg))try{let M=new URL(window.location.href),V=u.startsWith("//")?new URL(M.protocol+u):new URL(u),Y=Wt(V.pathname,v);V.origin===M.origin&&Y!=null?u=Y+V.search+V.hash:g=!0}catch{jt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let h=lw(u,{relative:i}),[m,S,E]=Uw(r,f),T=qw(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i,viewTransition:d});function P(M){t&&t(M),M.defaultPrevented||T(M)}let j=x.createElement("a",{...f,...E,href:k||h,onClick:g||o?t:P,ref:Yw(y,S),target:l,"data-discover":!w&&n==="render"?"true":void 0});return m&&!w?x.createElement(x.Fragment,null,j,x.createElement(Hw,{page:h})):j});wa.displayName="Link";var Xw=x.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:i=!1,style:o,to:s,viewTransition:a,children:l,...u},c){let d=fo(s,{relative:u.relative}),f=Xt(),y=x.useContext(va),{navigator:v,basename:w}=x.useContext(At),k=y!=null&&r5(d)&&a===!0,g=v.encodeLocation?v.encodeLocation(d).pathname:d.pathname,h=f.pathname,m=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;n||(h=h.toLowerCase(),m=m?m.toLowerCase():null,g=g.toLowerCase()),m&&w&&(m=Wt(m,w)||m);const S=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let E=h===g||!i&&h.startsWith(g)&&h.charAt(S)==="/",T=m!=null&&(m===g||!i&&m.startsWith(g)&&m.charAt(g.length)==="/"),P={isActive:E,isPending:T,isTransitioning:k},j=E?t:void 0,M;typeof r=="function"?M=r(P):M=[r,E?"active":null,T?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let V=typeof o=="function"?o(P):o;return x.createElement(wa,{...u,"aria-current":j,className:M,ref:c,style:V,to:s,viewTransition:a},typeof l=="function"?l(P):l)});Xw.displayName="NavLink";var Qw=x.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:o,method:s=ss,action:a,onSubmit:l,relative:u,preventScrollReset:c,viewTransition:d,...f},y)=>{let v=t5(),w=n5(a,{relative:u}),k=s.toLowerCase()==="get"?"get":"post",g=typeof a=="string"&&bg.test(a),h=m=>{if(l&&l(m),m.defaultPrevented)return;m.preventDefault();let S=m.nativeEvent.submitter,E=(S==null?void 0:S.getAttribute("formmethod"))||s;v(S||m.currentTarget,{fetcherKey:t,method:E,navigate:n,replace:i,state:o,relative:u,preventScrollReset:c,viewTransition:d})};return x.createElement("form",{ref:y,method:k,action:w,onSubmit:r?l:h,...f,"data-discover":!g&&e==="render"?"true":void 0})});Qw.displayName="Form";function Zw(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Eg(e){let t=x.useContext(Zr);return re(t,Zw(e)),t}function qw(e,{target:t,replace:n,state:r,preventScrollReset:i,relative:o,viewTransition:s}={}){let a=vg(),l=Xt(),u=fo(e,{relative:o});return x.useCallback(c=>{if(Aw(c,t)){c.preventDefault();let d=n!==void 0?n:eo(l)===eo(u);a(e,{replace:d,state:r,preventScrollReset:i,relative:o,viewTransition:s})}},[l,a,u,n,r,t,e,i,o,s])}var Jw=0,e5=()=>`__${String(++Jw)}__`;function t5(){let{router:e}=Eg("useSubmit"),{basename:t}=x.useContext(At),n=xw();return x.useCallback(async(r,i={})=>{let{action:o,method:s,encType:a,formData:l,body:u}=Mw(r,t);if(i.navigate===!1){let c=i.fetcherKey||e5();await e.fetch(c,n,i.action||o,{preventScrollReset:i.preventScrollReset,formData:l,body:u,formMethod:i.method||s,formEncType:i.encType||a,flushSync:i.flushSync})}else await e.navigate(i.action||o,{preventScrollReset:i.preventScrollReset,formData:l,body:u,formMethod:i.method||s,formEncType:i.encType||a,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[e,t,n])}function n5(e,{relative:t}={}){let{basename:n}=x.useContext(At),r=x.useContext(Kt);re(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),o={...fo(e||".",{relative:t})},s=Xt();if(e==null){o.search=s.search;let a=new URLSearchParams(o.search),l=a.getAll("index");if(l.some(c=>c==="")){a.delete("index"),l.filter(d=>d).forEach(d=>a.append("index",d));let c=a.toString();o.search=c?`?${c}`:""}}return(!e||e===".")&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:It([n,o.pathname])),eo(o)}function r5(e,{relative:t}={}){let n=x.useContext(mg);re(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Eg("useViewTransitionState"),i=fo(e,{relative:t});if(!n.isTransitioning)return!1;let o=Wt(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=Wt(n.nextLocation.pathname,r)||n.nextLocation.pathname;return _s(i.pathname,s)!=null||_s(i.pathname,o)!=null}const od=x.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Sa=x.createContext({}),ka=x.createContext(null),Ca=typeof document<"u",qr=Ca?x.useLayoutEffect:x.useEffect,Pg=x.createContext({strict:!1}),sd=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i5="framerAppearId",Tg="data-"+sd(i5);function o5(e,t,n,r){const{visualElement:i}=x.useContext(Sa),o=x.useContext(Pg),s=x.useContext(ka),a=x.useContext(od).reducedMotion,l=x.useRef();r=r||o.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;x.useInsertionEffect(()=>{u&&u.update(n,s)});const c=x.useRef(!!(n[Tg]&&!window.HandoffComplete));return qr(()=>{u&&(u.render(),c.current&&u.animationState&&u.animationState.animateChanges())}),x.useEffect(()=>{u&&(u.updateFeatures(),!c.current&&u.animationState&&u.animationState.animateChanges(),c.current&&(c.current=!1,window.HandoffComplete=!0))}),u}function xr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function s5(e,t,n){return x.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):xr(n)&&(n.current=r))},[t])}function to(e){return typeof e=="string"||Array.isArray(e)}function ba(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const ad=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ld=["initial",...ad];function Ea(e){return ba(e.animate)||ld.some(t=>to(e[t]))}function jg(e){return!!(Ea(e)||e.variants)}function a5(e,t){if(Ea(e)){const{initial:n,animate:r}=e;return{initial:n===!1||to(n)?n:void 0,animate:to(r)?r:void 0}}return e.inherit!==!1?t:{}}function l5(e){const{initial:t,animate:n}=a5(e,x.useContext(Sa));return x.useMemo(()=>({initial:t,animate:n}),[op(t),op(n)])}function op(e){return Array.isArray(e)?e.join(" "):e}const sp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},no={};for(const e in sp)no[e]={isEnabled:t=>sp[e].some(n=>!!t[n])};function u5(e){for(const t in e)no[t]={...no[t],...e[t]}}const ud=x.createContext({}),Ag=x.createContext({}),c5=Symbol.for("motionComponentSymbol");function d5({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&u5(e);function o(a,l){let u;const c={...x.useContext(od),...a,layoutId:f5(a)},{isStatic:d}=c,f=l5(a),y=r(a,d);if(!d&&Ca){f.visualElement=o5(i,y,c,t);const v=x.useContext(Ag),w=x.useContext(Pg).strict;f.visualElement&&(u=f.visualElement.loadFeatures(c,w,e,v))}return x.createElement(Sa.Provider,{value:f},u&&f.visualElement?x.createElement(u,{visualElement:f.visualElement,...c}):null,n(i,a,s5(y,f.visualElement,l),y,d,f.visualElement))}const s=x.forwardRef(o);return s[c5]=i,s}function f5({layoutId:e}){const t=x.useContext(ud).id;return t&&e!==void 0?t+"-"+e:e}function p5(e){function t(r,i={}){return d5(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const h5=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function cd(e){return typeof e!="string"||e.includes("-")?!1:!!(h5.indexOf(e)>-1||/[A-Z]/.test(e))}const Bs={};function m5(e){Object.assign(Bs,e)}const po=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],qn=new Set(po);function Rg(e,{layout:t,layoutId:n}){return qn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Bs[e]||e==="opacity")}const _e=e=>!!(e&&e.getVelocity),g5={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},y5=po.length;function v5(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let o="";for(let s=0;s<y5;s++){const a=po[s];if(e[a]!==void 0){const l=g5[a]||a;o+=`${l}(${e[a]}) `}}return t&&!e.z&&(o+="translateZ(0)"),o=o.trim(),i?o=i(e,r?"":o):n&&r&&(o="none"),o}const Lg=e=>t=>typeof t=="string"&&t.startsWith(e),Mg=Lg("--"),Du=Lg("var(--"),x5=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,w5=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Cn=(e,t,n)=>Math.min(Math.max(n,e),t),Jn={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ri={...Jn,transform:e=>Cn(0,1,e)},Fo={...Jn,default:1},Li=e=>Math.round(e*1e5)/1e5,Pa=/(-)?([\d]*\.?[\d])+/g,Dg=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,S5=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function ho(e){return typeof e=="string"}const mo=e=>({test:t=>ho(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Jt=mo("deg"),Tt=mo("%"),F=mo("px"),k5=mo("vh"),C5=mo("vw"),ap={...Tt,parse:e=>Tt.parse(e)/100,transform:e=>Tt.transform(e*100)},lp={...Jn,transform:Math.round},zg={borderWidth:F,borderTopWidth:F,borderRightWidth:F,borderBottomWidth:F,borderLeftWidth:F,borderRadius:F,radius:F,borderTopLeftRadius:F,borderTopRightRadius:F,borderBottomRightRadius:F,borderBottomLeftRadius:F,width:F,maxWidth:F,height:F,maxHeight:F,size:F,top:F,right:F,bottom:F,left:F,padding:F,paddingTop:F,paddingRight:F,paddingBottom:F,paddingLeft:F,margin:F,marginTop:F,marginRight:F,marginBottom:F,marginLeft:F,rotate:Jt,rotateX:Jt,rotateY:Jt,rotateZ:Jt,scale:Fo,scaleX:Fo,scaleY:Fo,scaleZ:Fo,skew:Jt,skewX:Jt,skewY:Jt,distance:F,translateX:F,translateY:F,translateZ:F,x:F,y:F,z:F,perspective:F,transformPerspective:F,opacity:Ri,originX:ap,originY:ap,originZ:F,zIndex:lp,fillOpacity:Ri,strokeOpacity:Ri,numOctaves:lp};function dd(e,t,n,r){const{style:i,vars:o,transform:s,transformOrigin:a}=e;let l=!1,u=!1,c=!0;for(const d in t){const f=t[d];if(Mg(d)){o[d]=f;continue}const y=zg[d],v=w5(f,y);if(qn.has(d)){if(l=!0,s[d]=v,!c)continue;f!==(y.default||0)&&(c=!1)}else d.startsWith("origin")?(u=!0,a[d]=v):i[d]=v}if(t.transform||(l||r?i.transform=v5(e.transform,n,c,r):i.transform&&(i.transform="none")),u){const{originX:d="50%",originY:f="50%",originZ:y=0}=a;i.transformOrigin=`${d} ${f} ${y}`}}const fd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Vg(e,t,n){for(const r in t)!_e(t[r])&&!Rg(r,n)&&(e[r]=t[r])}function b5({transformTemplate:e},t,n){return x.useMemo(()=>{const r=fd();return dd(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function E5(e,t,n){const r=e.style||{},i={};return Vg(i,r,e),Object.assign(i,b5(e,t,n)),e.transformValues?e.transformValues(i):i}function P5(e,t,n){const r={},i=E5(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const T5=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Us(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||T5.has(e)}let Ng=e=>!Us(e);function j5(e){e&&(Ng=t=>t.startsWith("on")?!Us(t):e(t))}try{j5(require("@emotion/is-prop-valid").default)}catch{}function A5(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Ng(i)||n===!0&&Us(i)||!t&&!Us(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function up(e,t,n){return typeof e=="string"?e:F.transform(t+n*e)}function R5(e,t,n){const r=up(t,e.x,e.width),i=up(n,e.y,e.height);return`${r} ${i}`}const L5={offset:"stroke-dashoffset",array:"stroke-dasharray"},M5={offset:"strokeDashoffset",array:"strokeDasharray"};function D5(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?L5:M5;e[o.offset]=F.transform(-r);const s=F.transform(t),a=F.transform(n);e[o.array]=`${s} ${a}`}function pd(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},c,d,f){if(dd(e,u,c,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:y,style:v,dimensions:w}=e;y.transform&&(w&&(v.transform=y.transform),delete y.transform),w&&(i!==void 0||o!==void 0||v.transform)&&(v.transformOrigin=R5(w,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(y.x=t),n!==void 0&&(y.y=n),r!==void 0&&(y.scale=r),s!==void 0&&D5(y,s,a,l,!1)}const Fg=()=>({...fd(),attrs:{}}),hd=e=>typeof e=="string"&&e.toLowerCase()==="svg";function z5(e,t,n,r){const i=x.useMemo(()=>{const o=Fg();return pd(o,t,{enableHardwareAcceleration:!1},hd(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};Vg(o,e.style,e),i.style={...o,...i.style}}return i}function V5(e=!1){return(n,r,i,{latestValues:o},s)=>{const l=(cd(n)?z5:P5)(r,o,s,n),c={...A5(r,typeof n=="string",e),...l,ref:i},{children:d}=r,f=x.useMemo(()=>_e(d)?d.get():d,[d]);return x.createElement(n,{...c,children:f})}}function Ig(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const Og=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function $g(e,t,n,r){Ig(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Og.has(i)?i:sd(i),t.attrs[i])}function md(e,t){const{style:n}=e,r={};for(const i in n)(_e(n[i])||t.style&&_e(t.style[i])||Rg(i,e))&&(r[i]=n[i]);return r}function _g(e,t){const n=md(e,t);for(const r in e)if(_e(e[r])||_e(t[r])){const i=po.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=e[r]}return n}function gd(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}function Jr(e){const t=x.useRef(null);return t.current===null&&(t.current=e()),t.current}const Hs=e=>Array.isArray(e),N5=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),F5=e=>Hs(e)?e[e.length-1]||0:e;function ls(e){const t=_e(e)?e.get():e;return N5(t)?t.toValue():t}function I5({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){const s={latestValues:O5(r,i,o,e),renderState:t()};return n&&(s.mount=a=>n(r,a,s)),s}const Bg=e=>(t,n)=>{const r=x.useContext(Sa),i=x.useContext(ka),o=()=>I5(e,t,r,i);return n?o():Jr(o)};function O5(e,t,n,r){const i={},o=r(e,{});for(const f in o)i[f]=ls(o[f]);let{initial:s,animate:a}=e;const l=Ea(e),u=jg(e);t&&u&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let c=n?n.initial===!1:!1;c=c||s===!1;const d=c?a:s;return d&&typeof d!="boolean"&&!ba(d)&&(Array.isArray(d)?d:[d]).forEach(y=>{const v=gd(e,y);if(!v)return;const{transitionEnd:w,transition:k,...g}=v;for(const h in g){let m=g[h];if(Array.isArray(m)){const S=c?m.length-1:0;m=m[S]}m!==null&&(i[h]=m)}for(const h in w)i[h]=w[h]}),i}const ae=e=>e;class cp{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function $5(e){let t=new cp,n=new cp,r=0,i=!1,o=!1;const s=new WeakSet,a={schedule:(l,u=!1,c=!1)=>{const d=c&&i,f=d?t:n;return u&&s.add(l),f.add(l)&&d&&i&&(r=t.order.length),l},cancel:l=>{n.remove(l),s.delete(l)},process:l=>{if(i){o=!0;return}if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let u=0;u<r;u++){const c=t.order[u];c(l),s.has(c)&&(a.schedule(c),e())}i=!1,o&&(o=!1,a.process(l))}};return a}const Io=["prepare","read","update","preRender","render","postRender"],_5=40;function B5(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=Io.reduce((d,f)=>(d[f]=$5(()=>n=!0),d),{}),s=d=>o[d].process(i),a=()=>{const d=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(d-i.timestamp,_5),1),i.timestamp=d,i.isProcessing=!0,Io.forEach(s),i.isProcessing=!1,n&&t&&(r=!1,e(a))},l=()=>{n=!0,r=!0,i.isProcessing||e(a)};return{schedule:Io.reduce((d,f)=>{const y=o[f];return d[f]=(v,w=!1,k=!1)=>(n||l(),y.schedule(v,w,k)),d},{}),cancel:d=>Io.forEach(f=>o[f].cancel(d)),state:i,steps:o}}const{schedule:U,cancel:vt,state:ke,steps:pl}=B5(typeof requestAnimationFrame<"u"?requestAnimationFrame:ae,!0),U5={useVisualState:Bg({scrapeMotionValuesFromProps:_g,createRenderState:Fg,onMount:(e,t,{renderState:n,latestValues:r})=>{U.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),U.render(()=>{pd(n,r,{enableHardwareAcceleration:!1},hd(t.tagName),e.transformTemplate),$g(t,n)})}})},H5={useVisualState:Bg({scrapeMotionValuesFromProps:md,createRenderState:fd})};function W5(e,{forwardMotionProps:t=!1},n,r){return{...cd(e)?U5:H5,preloadedFeatures:n,useRender:V5(t),createVisualElement:r,Component:e}}function Nt(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const Ug=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Ta(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const G5=e=>t=>Ug(t)&&e(t,Ta(t));function Ot(e,t,n,r){return Nt(e,t,G5(n),r)}const Y5=(e,t)=>n=>t(e(n)),vn=(...e)=>e.reduce(Y5);function Hg(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const dp=Hg("dragHorizontal"),fp=Hg("dragVertical");function Wg(e){let t=!1;if(e==="y")t=fp();else if(e==="x")t=dp();else{const n=dp(),r=fp();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function Gg(){const e=Wg(!0);return e?(e(),!1):!0}class jn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function pp(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),i=(o,s)=>{if(o.pointerType==="touch"||Gg())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[r]&&U.update(()=>a[r](o,s))};return Ot(e.current,n,i,{passive:!e.getProps()[r]})}class K5 extends jn{mount(){this.unmount=vn(pp(this.node,!0),pp(this.node,!1))}unmount(){}}class X5 extends jn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=vn(Nt(this.node.current,"focus",()=>this.onFocus()),Nt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Yg=(e,t)=>t?e===t?!0:Yg(e,t.parentElement):!1;function hl(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Ta(n))}class Q5 extends jn{constructor(){super(...arguments),this.removeStartListeners=ae,this.removeEndListeners=ae,this.removeAccessibleListeners=ae,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=Ot(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:c,globalTapTarget:d}=this.node.getProps();U.update(()=>{!d&&!Yg(this.node.current,a.target)?c&&c(a,l):u&&u(a,l)})},{passive:!(r.onTap||r.onPointerUp)}),s=Ot(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=vn(o,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||hl("up",(l,u)=>{const{onTap:c}=this.node.getProps();c&&U.update(()=>c(l,u))})};this.removeEndListeners(),this.removeEndListeners=Nt(this.node.current,"keyup",s),hl("down",(a,l)=>{this.startPress(a,l)})},n=Nt(this.node.current,"keydown",t),r=()=>{this.isPressing&&hl("cancel",(o,s)=>this.cancelPress(o,s))},i=Nt(this.node.current,"blur",r);this.removeAccessibleListeners=vn(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&U.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Gg()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&U.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Ot(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Nt(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=vn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const zu=new WeakMap,ml=new WeakMap,Z5=e=>{const t=zu.get(e.target);t&&t(e)},q5=e=>{e.forEach(Z5)};function J5({root:e,...t}){const n=e||document;ml.has(n)||ml.set(n,{});const r=ml.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(q5,{root:e,...t})),r[i]}function e4(e,t,n){const r=J5(t);return zu.set(e,n),r.observe(e),()=>{zu.delete(e),r.unobserve(e)}}const t4={some:0,all:1};class n4 extends jn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:t4[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:d}=this.node.getProps(),f=u?c:d;f&&f(l)};return e4(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(r4(t,n))&&this.startObserver()}unmount(){}}function r4({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const i4={inView:{Feature:n4},tap:{Feature:Q5},focus:{Feature:X5},hover:{Feature:K5}};function Kg(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function o4(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function s4(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function ja(e,t,n){const r=e.getProps();return gd(r,t,n!==void 0?n:r.custom,o4(e),s4(e))}let Xg=ae,Aa=ae;const xn=e=>e*1e3,$t=e=>e/1e3,a4={current:!1},Qg=e=>Array.isArray(e)&&typeof e[0]=="number";function Zg(e){return!!(!e||typeof e=="string"&&qg[e]||Qg(e)||Array.isArray(e)&&e.every(Zg))}const xi=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,qg={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:xi([0,.65,.55,1]),circOut:xi([.55,0,1,.45]),backIn:xi([.31,.01,.66,-.59]),backOut:xi([.33,1.53,.69,.99])};function Jg(e){if(e)return Qg(e)?xi(e):Array.isArray(e)?e.map(Jg):qg[e]}function l4(e,t,n,{delay:r=0,duration:i,repeat:o=0,repeatType:s="loop",ease:a,times:l}={}){const u={[t]:n};l&&(u.offset=l);const c=Jg(a);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}function u4(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const e1=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,c4=1e-7,d4=12;function f4(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=e1(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>c4&&++a<d4);return s}function go(e,t,n,r){if(e===t&&n===r)return ae;const i=o=>f4(o,0,1,e,n);return o=>o===0||o===1?o:e1(i(o),t,r)}const p4=go(.42,0,1,1),h4=go(0,0,.58,1),t1=go(.42,0,.58,1),m4=e=>Array.isArray(e)&&typeof e[0]!="number",n1=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,r1=e=>t=>1-e(1-t),yd=e=>1-Math.sin(Math.acos(e)),i1=r1(yd),g4=n1(yd),o1=go(.33,1.53,.69,.99),vd=r1(o1),y4=n1(vd),v4=e=>(e*=2)<1?.5*vd(e):.5*(2-Math.pow(2,-10*(e-1))),x4={linear:ae,easeIn:p4,easeInOut:t1,easeOut:h4,circIn:yd,circInOut:g4,circOut:i1,backIn:vd,backInOut:y4,backOut:o1,anticipate:v4},hp=e=>{if(Array.isArray(e)){Aa(e.length===4);const[t,n,r,i]=e;return go(t,n,r,i)}else if(typeof e=="string")return x4[e];return e},xd=(e,t)=>n=>!!(ho(n)&&S5.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),s1=(e,t,n)=>r=>{if(!ho(r))return r;const[i,o,s,a]=r.match(Pa);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},w4=e=>Cn(0,255,e),gl={...Jn,transform:e=>Math.round(w4(e))},$n={test:xd("rgb","red"),parse:s1("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+gl.transform(e)+", "+gl.transform(t)+", "+gl.transform(n)+", "+Li(Ri.transform(r))+")"};function S4(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Vu={test:xd("#"),parse:S4,transform:$n.transform},wr={test:xd("hsl","hue"),parse:s1("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Tt.transform(Li(t))+", "+Tt.transform(Li(n))+", "+Li(Ri.transform(r))+")"},Re={test:e=>$n.test(e)||Vu.test(e)||wr.test(e),parse:e=>$n.test(e)?$n.parse(e):wr.test(e)?wr.parse(e):Vu.parse(e),transform:e=>ho(e)?e:e.hasOwnProperty("red")?$n.transform(e):wr.transform(e)},te=(e,t,n)=>-n*e+n*t+e;function yl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function k4({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=yl(l,a,e+1/3),o=yl(l,a,e),s=yl(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}const vl=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},C4=[Vu,$n,wr],b4=e=>C4.find(t=>t.test(e));function mp(e){const t=b4(e);let n=t.parse(e);return t===wr&&(n=k4(n)),n}const a1=(e,t)=>{const n=mp(e),r=mp(t),i={...n};return o=>(i.red=vl(n.red,r.red,o),i.green=vl(n.green,r.green,o),i.blue=vl(n.blue,r.blue,o),i.alpha=te(n.alpha,r.alpha,o),$n.transform(i))};function E4(e){var t,n;return isNaN(e)&&ho(e)&&(((t=e.match(Pa))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Dg))===null||n===void 0?void 0:n.length)||0)>0}const l1={regex:x5,countKey:"Vars",token:"${v}",parse:ae},u1={regex:Dg,countKey:"Colors",token:"${c}",parse:Re.parse},c1={regex:Pa,countKey:"Numbers",token:"${n}",parse:Jn.parse};function xl(e,{regex:t,countKey:n,token:r,parse:i}){const o=e.tokenised.match(t);o&&(e["num"+n]=o.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...o.map(i)))}function Ws(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&xl(n,l1),xl(n,u1),xl(n,c1),n}function d1(e){return Ws(e).values}function f1(e){const{values:t,numColors:n,numVars:r,tokenised:i}=Ws(e),o=t.length;return s=>{let a=i;for(let l=0;l<o;l++)l<r?a=a.replace(l1.token,s[l]):l<r+n?a=a.replace(u1.token,Re.transform(s[l])):a=a.replace(c1.token,Li(s[l]));return a}}const P4=e=>typeof e=="number"?0:e;function T4(e){const t=d1(e);return f1(e)(t.map(P4))}const bn={test:E4,parse:d1,createTransformer:f1,getAnimatableNone:T4},p1=(e,t)=>n=>`${n>0?t:e}`;function h1(e,t){return typeof e=="number"?n=>te(e,t,n):Re.test(e)?a1(e,t):e.startsWith("var(")?p1(e,t):g1(e,t)}const m1=(e,t)=>{const n=[...e],r=n.length,i=e.map((o,s)=>h1(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}},j4=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=h1(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}},g1=(e,t)=>{const n=bn.createTransformer(t),r=Ws(e),i=Ws(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?vn(m1(r.values,i.values),n):p1(e,t)},Ur=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},gp=(e,t)=>n=>te(e,t,n);function A4(e){return typeof e=="number"?gp:typeof e=="string"?Re.test(e)?a1:g1:Array.isArray(e)?m1:typeof e=="object"?j4:gp}function R4(e,t,n){const r=[],i=n||A4(e[0]),o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||ae:t;a=vn(l,a)}r.push(a)}return r}function Ra(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(Aa(o===t.length),o===1)return()=>t[0];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=R4(t,r,i),a=s.length,l=u=>{let c=0;if(a>1)for(;c<e.length-2&&!(u<e[c+1]);c++);const d=Ur(e[c],e[c+1],u);return s[c](d)};return n?u=>l(Cn(e[0],e[o-1],u)):l}function L4(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Ur(0,t,r);e.push(te(n,1,i))}}function y1(e){const t=[0];return L4(t,e.length-1),t}function M4(e,t){return e.map(n=>n*t)}function D4(e,t){return e.map(()=>t||t1).splice(0,e.length-1)}function Gs({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=m4(r)?r.map(hp):hp(r),o={done:!1,value:t[0]},s=M4(n&&n.length===t.length?n:y1(t),e),a=Ra(s,t,{ease:Array.isArray(i)?i:D4(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}function wd(e,t){return t?e*(1e3/t):0}const z4=5;function v1(e,t,n){const r=Math.max(t-z4,0);return wd(n-e(r),t-r)}const wl=.001,V4=.01,yp=10,N4=.05,F4=1;function I4({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o;Xg(e<=xn(yp));let s=1-t;s=Cn(N4,F4,s),e=Cn(V4,yp,$t(e)),s<1?(i=u=>{const c=u*s,d=c*e,f=c-n,y=Nu(u,s),v=Math.exp(-d);return wl-f/y*v},o=u=>{const d=u*s*e,f=d*n+n,y=Math.pow(s,2)*Math.pow(u,2)*e,v=Math.exp(-d),w=Nu(Math.pow(u,2),s);return(-i(u)+wl>0?-1:1)*((f-y)*v)/w}):(i=u=>{const c=Math.exp(-u*e),d=(u-n)*e+1;return-wl+c*d},o=u=>{const c=Math.exp(-u*e),d=(n-u)*(e*e);return c*d});const a=5/e,l=$4(i,o,a);if(e=xn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const O4=12;function $4(e,t,n){let r=n;for(let i=1;i<O4;i++)r=r-e(r)/t(r);return r}function Nu(e,t){return e*Math.sqrt(1-t*t)}const _4=["duration","bounce"],B4=["stiffness","damping","mass"];function vp(e,t){return t.some(n=>e[n]!==void 0)}function U4(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!vp(e,B4)&&vp(e,_4)){const n=I4(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function x1({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],s={done:!1,value:i},{stiffness:a,damping:l,mass:u,duration:c,velocity:d,isResolvedFromDuration:f}=U4({...r,velocity:-$t(r.velocity||0)}),y=d||0,v=l/(2*Math.sqrt(a*u)),w=o-i,k=$t(Math.sqrt(a/u)),g=Math.abs(w)<5;n||(n=g?.01:2),t||(t=g?.005:.5);let h;if(v<1){const m=Nu(k,v);h=S=>{const E=Math.exp(-v*k*S);return o-E*((y+v*k*w)/m*Math.sin(m*S)+w*Math.cos(m*S))}}else if(v===1)h=m=>o-Math.exp(-k*m)*(w+(y+k*w)*m);else{const m=k*Math.sqrt(v*v-1);h=S=>{const E=Math.exp(-v*k*S),T=Math.min(m*S,300);return o-E*((y+v*k*w)*Math.sinh(T)+m*w*Math.cosh(T))/m}}return{calculatedDuration:f&&c||null,next:m=>{const S=h(m);if(f)s.done=m>=c;else{let E=y;m!==0&&(v<1?E=v1(h,m,S):E=0);const T=Math.abs(E)<=n,P=Math.abs(o-S)<=t;s.done=T&&P}return s.value=s.done?o:S,s}}}function xp({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:c}){const d=e[0],f={done:!1,value:d},y=j=>a!==void 0&&j<a||l!==void 0&&j>l,v=j=>a===void 0?l:l===void 0||Math.abs(a-j)<Math.abs(l-j)?a:l;let w=n*t;const k=d+w,g=s===void 0?k:s(k);g!==k&&(w=g-d);const h=j=>-w*Math.exp(-j/r),m=j=>g+h(j),S=j=>{const M=h(j),V=m(j);f.done=Math.abs(M)<=u,f.value=f.done?g:V};let E,T;const P=j=>{y(f.value)&&(E=j,T=x1({keyframes:[f.value,v(f.value)],velocity:v1(m,j,f.value),damping:i,stiffness:o,restDelta:u,restSpeed:c}))};return P(0),{calculatedDuration:null,next:j=>{let M=!1;return!T&&E===void 0&&(M=!0,S(j),P(j)),E!==void 0&&j>E?T.next(j-E):(!M&&S(j),f)}}}const H4=e=>{const t=({timestamp:n})=>e(n);return{start:()=>U.update(t,!0),stop:()=>vt(t),now:()=>ke.isProcessing?ke.timestamp:performance.now()}},wp=2e4;function Sp(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<wp;)t+=n,r=e.next(t);return t>=wp?1/0:t}const W4={decay:xp,inertia:xp,tween:Gs,keyframes:Gs,spring:x1};function Ys({autoplay:e=!0,delay:t=0,driver:n=H4,keyframes:r,type:i="keyframes",repeat:o=0,repeatDelay:s=0,repeatType:a="loop",onPlay:l,onStop:u,onComplete:c,onUpdate:d,...f}){let y=1,v=!1,w,k;const g=()=>{k=new Promise(N=>{w=N})};g();let h;const m=W4[i]||Gs;let S;m!==Gs&&typeof r[0]!="number"&&(S=Ra([0,100],r,{clamp:!1}),r=[0,100]);const E=m({...f,keyframes:r});let T;a==="mirror"&&(T=m({...f,keyframes:[...r].reverse(),velocity:-(f.velocity||0)}));let P="idle",j=null,M=null,V=null;E.calculatedDuration===null&&o&&(E.calculatedDuration=Sp(E));const{calculatedDuration:Y}=E;let le=1/0,ce=1/0;Y!==null&&(le=Y+s,ce=le*(o+1)-s);let oe=0;const Xe=N=>{if(M===null)return;y>0&&(M=Math.min(M,N)),y<0&&(M=Math.min(N-ce/y,M)),j!==null?oe=j:oe=Math.round(N-M)*y;const _=oe-t*(y>=0?1:-1),xt=y>=0?_<0:_>ce;oe=Math.max(_,0),P==="finished"&&j===null&&(oe=ce);let Ve=oe,at=E;if(o){const lt=Math.min(oe,ce)/le;let Qt=Math.floor(lt),Ze=lt%1;!Ze&&lt>=1&&(Ze=1),Ze===1&&Qt--,Qt=Math.min(Qt,o+1),!!(Qt%2)&&(a==="reverse"?(Ze=1-Ze,s&&(Ze-=s/le)):a==="mirror"&&(at=T)),Ve=Cn(0,1,Ze)*le}const he=xt?{done:!1,value:r[0]}:at.next(Ve);S&&(he.value=S(he.value));let{done:Qe}=he;!xt&&Y!==null&&(Qe=y>=0?oe>=ce:oe<=0);const An=j===null&&(P==="finished"||P==="running"&&Qe);return d&&d(he.value),An&&b(),he},H=()=>{h&&h.stop(),h=void 0},O=()=>{P="idle",H(),w(),g(),M=V=null},b=()=>{P="finished",c&&c(),H(),w()},D=()=>{if(v)return;h||(h=n(Xe));const N=h.now();l&&l(),j!==null?M=N-j:(!M||P==="finished")&&(M=N),P==="finished"&&g(),V=M,j=null,P="running",h.start()};e&&D();const L={then(N,_){return k.then(N,_)},get time(){return $t(oe)},set time(N){N=xn(N),oe=N,j!==null||!h||y===0?j=N:M=h.now()-N/y},get duration(){const N=E.calculatedDuration===null?Sp(E):E.calculatedDuration;return $t(N)},get speed(){return y},set speed(N){N===y||!h||(y=N,L.time=$t(oe))},get state(){return P},play:D,pause:()=>{P="paused",j=oe},stop:()=>{v=!0,P!=="idle"&&(P="idle",u&&u(),O())},cancel:()=>{V!==null&&Xe(V),O()},complete:()=>{P="finished"},sample:N=>(M=0,Xe(N))};return L}function G4(e){let t;return()=>(t===void 0&&(t=e()),t)}const Y4=G4(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),K4=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Oo=10,X4=2e4,Q4=(e,t)=>t.type==="spring"||e==="backgroundColor"||!Zg(t.ease);function Z4(e,t,{onUpdate:n,onComplete:r,...i}){if(!(Y4()&&K4.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let s=!1,a,l,u=!1;const c=()=>{l=new Promise(m=>{a=m})};c();let{keyframes:d,duration:f=300,ease:y,times:v}=i;if(Q4(t,i)){const m=Ys({...i,repeat:0,delay:0});let S={done:!1,value:d[0]};const E=[];let T=0;for(;!S.done&&T<X4;)S=m.sample(T),E.push(S.value),T+=Oo;v=void 0,d=E,f=T-Oo,y="linear"}const w=l4(e.owner.current,t,d,{...i,duration:f,ease:y,times:v}),k=()=>{u=!1,w.cancel()},g=()=>{u=!0,U.update(k),a(),c()};return w.onfinish=()=>{u||(e.set(u4(d,i)),r&&r(),g())},{then(m,S){return l.then(m,S)},attachTimeline(m){return w.timeline=m,w.onfinish=null,ae},get time(){return $t(w.currentTime||0)},set time(m){w.currentTime=xn(m)},get speed(){return w.playbackRate},set speed(m){w.playbackRate=m},get duration(){return $t(f)},play:()=>{s||(w.play(),vt(k))},pause:()=>w.pause(),stop:()=>{if(s=!0,w.playState==="idle")return;const{currentTime:m}=w;if(m){const S=Ys({...i,autoplay:!1});e.setWithVelocity(S.sample(m-Oo).value,S.sample(m).value,Oo)}g()},complete:()=>{u||w.finish()},cancel:g}}function q4({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:ae,pause:ae,stop:ae,then:o=>(o(),Promise.resolve()),cancel:ae,complete:ae});return t?Ys({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const J4={type:"spring",stiffness:500,damping:25,restSpeed:10},eS=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),tS={type:"keyframes",duration:.8},nS={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},rS=(e,{keyframes:t})=>t.length>2?tS:qn.has(e)?e.startsWith("scale")?eS(t[1]):J4:nS,Fu=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(bn.test(t)||t==="0")&&!t.startsWith("url(")),iS=new Set(["brightness","contrast","saturate","opacity"]);function oS(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Pa)||[];if(!r)return e;const i=n.replace(r,"");let o=iS.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const sS=/([a-z-]*)\(.*?\)/g,Iu={...bn,getAnimatableNone:e=>{const t=e.match(sS);return t?t.map(oS).join(" "):e}},aS={...zg,color:Re,backgroundColor:Re,outlineColor:Re,fill:Re,stroke:Re,borderColor:Re,borderTopColor:Re,borderRightColor:Re,borderBottomColor:Re,borderLeftColor:Re,filter:Iu,WebkitFilter:Iu},Sd=e=>aS[e];function w1(e,t){let n=Sd(e);return n!==Iu&&(n=bn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const S1=e=>/^0[^.\s]+$/.test(e);function lS(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||S1(e)}function uS(e,t,n,r){const i=Fu(t,n);let o;Array.isArray(n)?o=[...n]:o=[null,n];const s=r.from!==void 0?r.from:e.get();let a;const l=[];for(let u=0;u<o.length;u++)o[u]===null&&(o[u]=u===0?s:o[u-1]),lS(o[u])&&l.push(u),typeof o[u]=="string"&&o[u]!=="none"&&o[u]!=="0"&&(a=o[u]);if(i&&l.length&&a)for(let u=0;u<l.length;u++){const c=l[u];o[c]=w1(t,a)}return o}function cS({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}function kd(e,t){return e[t]||e.default||e}const dS={skipAnimations:!1},Cd=(e,t,n,r={})=>i=>{const o=kd(r,e)||{},s=o.delay||r.delay||0;let{elapsed:a=0}=r;a=a-xn(s);const l=uS(t,e,n,o),u=l[0],c=l[l.length-1],d=Fu(e,u),f=Fu(e,c);let y={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...o,delay:-a,onUpdate:v=>{t.set(v),o.onUpdate&&o.onUpdate(v)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(cS(o)||(y={...y,...rS(e,y)}),y.duration&&(y.duration=xn(y.duration)),y.repeatDelay&&(y.repeatDelay=xn(y.repeatDelay)),!d||!f||a4.current||o.type===!1||dS.skipAnimations)return q4(y);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const v=Z4(t,e,y);if(v)return v}return Ys(y)};function Ks(e){return!!(_e(e)&&e.add)}const k1=e=>/^\-?\d*\.?\d+$/.test(e);function bd(e,t){e.indexOf(t)===-1&&e.push(t)}function Ed(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Pd{constructor(){this.subscriptions=[]}add(t){return bd(this.subscriptions,t),()=>Ed(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const fS=e=>!isNaN(parseFloat(e)),Mi={current:void 0};class pS{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:o,timestamp:s}=ke;this.lastUpdated!==s&&(this.timeDelta=o,this.lastUpdated=s,U.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>U.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=fS(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Pd);const r=this.events[t].add(n);return t==="change"?()=>{r(),U.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Mi.current&&Mi.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?wd(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function pt(e,t){return new pS(e,t)}const C1=e=>t=>t.test(e),hS={test:e=>e==="auto",parse:e=>e},b1=[Jn,F,Tt,Jt,C5,k5,hS],ui=e=>b1.find(C1(e)),mS=[...b1,Re,bn],gS=e=>mS.find(C1(e));function yS(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,pt(n))}function Td(e,t){const n=ja(e,t);let{transitionEnd:r={},transition:i={},...o}=n?e.makeTargetAnimatable(n,!1):{};o={...o,...r};for(const s in o){const a=F5(o[s]);yS(e,s,a)}}function Ou(e,t){[...t].reverse().forEach(r=>{const i=e.getVariant(r);i&&Td(e,i),e.variantChildren&&e.variantChildren.forEach(o=>{Ou(o,t)})})}function vS(e,t){if(Array.isArray(t))return Ou(e,t);if(typeof t=="string")return Ou(e,[t]);Td(e,t)}function xS(e,t,n){var r,i;const o=Object.keys(t).filter(a=>!e.hasValue(a)),s=o.length;if(s)for(let a=0;a<s;a++){const l=o[a],u=t[l];let c=null;Array.isArray(u)&&(c=u[0]),c===null&&(c=(i=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&i!==void 0?i:t[l]),c!=null&&(typeof c=="string"&&(k1(c)||S1(c))?c=parseFloat(c):!gS(c)&&bn.test(u)&&(c=w1(l,u)),e.addValue(l,pt(c,{owner:e})),n[l]===void 0&&(n[l]=c),c!==null&&e.setBaseTarget(l,c))}}function wS(e,t){return t?(t[e]||t.default||t).from:void 0}function SS(e,t,n){const r={};for(const i in e){const o=wS(i,t);if(o!==void 0)r[i]=o;else{const s=n.getValue(i);s&&(r[i]=s.get())}}return r}function kS({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function CS(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function E1(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...a}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(o=r);const u=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const d in a){const f=e.getValue(d),y=a[d];if(!f||y===void 0||c&&kS(c,d))continue;const v={delay:n,elapsed:0,...kd(o||{},d)};if(window.HandoffAppearAnimations){const g=e.getProps()[Tg];if(g){const h=window.HandoffAppearAnimations(g,d,f,U);h!==null&&(v.elapsed=h,v.isHandoff=!0)}}let w=!v.isHandoff&&!CS(f,y);if(v.type==="spring"&&(f.getVelocity()||v.velocity)&&(w=!1),f.animation&&(w=!1),w)continue;f.start(Cd(d,f,y,e.shouldReduceMotion&&qn.has(d)?{type:!1}:v));const k=f.animation;Ks(l)&&(l.add(d),k.then(()=>l.remove(d))),u.push(k)}return s&&Promise.all(u).then(()=>{s&&Td(e,s)}),u}function $u(e,t,n={}){const r=ja(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(E1(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:c,staggerDirection:d}=i;return bS(e,t,u+l,c,d,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[l,u]=a==="beforeChildren"?[o,s]:[s,o];return l().then(()=>u())}else return Promise.all([o(),s(n.delay)])}function bS(e,t,n=0,r=0,i=1,o){const s=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(ES).forEach((u,c)=>{u.notify("AnimationStart",t),s.push($u(u,t,{...o,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function ES(e,t){return e.sortNodePosition(t)}function P1(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>$u(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=$u(e,t,n);else{const i=typeof t=="function"?ja(e,t,n.custom):t;r=Promise.all(E1(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))}const PS=[...ad].reverse(),TS=ad.length;function jS(e){return t=>Promise.all(t.map(({animation:n,options:r})=>P1(e,n,r)))}function AS(e){let t=jS(e);const n=LS();let r=!0;const i=(l,u)=>{const c=ja(e,u);if(c){const{transition:d,transitionEnd:f,...y}=c;l={...l,...y,...f}}return l};function o(l){t=l(e)}function s(l,u){const c=e.getProps(),d=e.getVariantContext(!0)||{},f=[],y=new Set;let v={},w=1/0;for(let g=0;g<TS;g++){const h=PS[g],m=n[h],S=c[h]!==void 0?c[h]:d[h],E=to(S),T=h===u?m.isActive:null;T===!1&&(w=g);let P=S===d[h]&&S!==c[h]&&E;if(P&&r&&e.manuallyAnimateOnMount&&(P=!1),m.protectedKeys={...v},!m.isActive&&T===null||!S&&!m.prevProp||ba(S)||typeof S=="boolean")continue;let M=RS(m.prevProp,S)||h===u&&m.isActive&&!P&&E||g>w&&E,V=!1;const Y=Array.isArray(S)?S:[S];let le=Y.reduce(i,{});T===!1&&(le={});const{prevResolvedValues:ce={}}=m,oe={...ce,...le},Xe=H=>{M=!0,y.has(H)&&(V=!0,y.delete(H)),m.needsAnimating[H]=!0};for(const H in oe){const O=le[H],b=ce[H];if(v.hasOwnProperty(H))continue;let D=!1;Hs(O)&&Hs(b)?D=!Kg(O,b):D=O!==b,D?O!==void 0?Xe(H):y.add(H):O!==void 0&&y.has(H)?Xe(H):m.protectedKeys[H]=!0}m.prevProp=S,m.prevResolvedValues=le,m.isActive&&(v={...v,...le}),r&&e.blockInitialAnimation&&(M=!1),M&&(!P||V)&&f.push(...Y.map(H=>({animation:H,options:{type:h,...l}})))}if(y.size){const g={};y.forEach(h=>{const m=e.getBaseTarget(h);m!==void 0&&(g[h]=m)}),f.push({animation:g})}let k=!!f.length;return r&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(k=!1),r=!1,k?t(f):Promise.resolve()}function a(l,u,c){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(y=>{var v;return(v=y.animationState)===null||v===void 0?void 0:v.setActive(l,u)}),n[l].isActive=u;const f=s(c,l);for(const y in n)n[y].protectedKeys={};return f}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n}}function RS(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Kg(t,e):!1}function Rn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function LS(){return{animate:Rn(!0),whileInView:Rn(),whileHover:Rn(),whileTap:Rn(),whileDrag:Rn(),whileFocus:Rn(),exit:Rn()}}class MS extends jn{constructor(t){super(t),t.animationState||(t.animationState=AS(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),ba(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let DS=0;class zS extends jn{constructor(){super(...arguments),this.id=DS++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const o=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&o.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const VS={animation:{Feature:MS},exit:{Feature:zS}},kp=(e,t)=>Math.abs(e-t);function NS(e,t){const n=kp(e.x,t.x),r=kp(e.y,t.y);return Math.sqrt(n**2+r**2)}class T1{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=kl(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,y=NS(d.offset,{x:0,y:0})>=3;if(!f&&!y)return;const{point:v}=d,{timestamp:w}=ke;this.history.push({...v,timestamp:w});const{onStart:k,onMove:g}=this.handlers;f||(k&&k(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Sl(f,this.transformPagePoint),U.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:y,onSessionEnd:v,resumeAnimation:w}=this.handlers;if(this.dragSnapToOrigin&&w&&w(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=kl(d.type==="pointercancel"?this.lastMoveEventInfo:Sl(f,this.transformPagePoint),this.history);this.startEvent&&y&&y(d,k),v&&v(d,k)},!Ug(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=Ta(t),a=Sl(s,this.transformPagePoint),{point:l}=a,{timestamp:u}=ke;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(t,kl(a,this.history)),this.removeListeners=vn(Ot(this.contextWindow,"pointermove",this.handlePointerMove),Ot(this.contextWindow,"pointerup",this.handlePointerUp),Ot(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),vt(this.updatePoint)}}function Sl(e,t){return t?{point:t(e.point)}:e}function Cp(e,t){return{x:e.x-t.x,y:e.y-t.y}}function kl({point:e},t){return{point:e,delta:Cp(e,j1(t)),offset:Cp(e,FS(t)),velocity:IS(t,.1)}}function FS(e){return e[0]}function j1(e){return e[e.length-1]}function IS(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=j1(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>xn(t)));)n--;if(!r)return{x:0,y:0};const o=$t(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function Ge(e){return e.max-e.min}function _u(e,t=0,n=.01){return Math.abs(e-t)<=n}function bp(e,t,n,r=.5){e.origin=r,e.originPoint=te(t.min,t.max,e.origin),e.scale=Ge(n)/Ge(t),(_u(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=te(n.min,n.max,e.origin)-e.originPoint,(_u(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Di(e,t,n,r){bp(e.x,t.x,n.x,r?r.originX:void 0),bp(e.y,t.y,n.y,r?r.originY:void 0)}function Ep(e,t,n){e.min=n.min+t.min,e.max=e.min+Ge(t)}function OS(e,t,n){Ep(e.x,t.x,n.x),Ep(e.y,t.y,n.y)}function Pp(e,t,n){e.min=t.min-n.min,e.max=e.min+Ge(t)}function zi(e,t,n){Pp(e.x,t.x,n.x),Pp(e.y,t.y,n.y)}function $S(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?te(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?te(n,e,r.max):Math.min(e,n)),e}function Tp(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function _S(e,{top:t,left:n,bottom:r,right:i}){return{x:Tp(e.x,n,i),y:Tp(e.y,t,r)}}function jp(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function BS(e,t){return{x:jp(e.x,t.x),y:jp(e.y,t.y)}}function US(e,t){let n=.5;const r=Ge(e),i=Ge(t);return i>r?n=Ur(t.min,t.max-r,e.min):r>i&&(n=Ur(e.min,e.max-i,t.min)),Cn(0,1,n)}function HS(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Bu=.35;function WS(e=Bu){return e===!1?e=0:e===!0&&(e=Bu),{x:Ap(e,"left","right"),y:Ap(e,"top","bottom")}}function Ap(e,t,n){return{min:Rp(e,t),max:Rp(e,n)}}function Rp(e,t){return typeof e=="number"?e:e[t]||0}const Lp=()=>({translate:0,scale:1,origin:0,originPoint:0}),Sr=()=>({x:Lp(),y:Lp()}),Mp=()=>({min:0,max:0}),de=()=>({x:Mp(),y:Mp()});function Je(e){return[e("x"),e("y")]}function A1({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function GS({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function YS(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Cl(e){return e===void 0||e===1}function Uu({scale:e,scaleX:t,scaleY:n}){return!Cl(e)||!Cl(t)||!Cl(n)}function Dn(e){return Uu(e)||R1(e)||e.z||e.rotate||e.rotateX||e.rotateY}function R1(e){return Dp(e.x)||Dp(e.y)}function Dp(e){return e&&e!=="0%"}function Xs(e,t,n){const r=e-n,i=t*r;return n+i}function zp(e,t,n,r,i){return i!==void 0&&(e=Xs(e,i,r)),Xs(e,n,r)+t}function Hu(e,t=0,n=1,r,i){e.min=zp(e.min,t,n,r,i),e.max=zp(e.max,t,n,r,i)}function L1(e,{x:t,y:n}){Hu(e.x,t.translate,t.scale,t.originPoint),Hu(e.y,n.translate,n.scale,n.originPoint)}function KS(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const l=o.instance;l&&l.style&&l.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&kr(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,L1(e,s)),r&&Dn(o.latestValues)&&kr(e,o.latestValues))}t.x=Vp(t.x),t.y=Vp(t.y)}function Vp(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function rn(e,t){e.min=e.min+t,e.max=e.max+t}function Np(e,t,[n,r,i]){const o=t[i]!==void 0?t[i]:.5,s=te(e.min,e.max,o);Hu(e,t[n],t[r],s,t.scale)}const XS=["x","scaleX","originX"],QS=["y","scaleY","originY"];function kr(e,t){Np(e.x,t,XS),Np(e.y,t,QS)}function M1(e,t){return A1(YS(e.getBoundingClientRect(),t))}function ZS(e,t,n){const r=M1(e,n),{scroll:i}=t;return i&&(rn(r.x,i.offset.x),rn(r.y,i.offset.y)),r}const D1=({current:e})=>e?e.ownerDocument.defaultView:null,qS=new WeakMap;class JS{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=de(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=c=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ta(c,"page").point)},o=(c,d)=>{const{drag:f,dragPropagation:y,onDragStart:v}=this.getProps();if(f&&!y&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Wg(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Je(k=>{let g=this.getAxisMotionValue(k).get()||0;if(Tt.test(g)){const{projection:h}=this.visualElement;if(h&&h.layout){const m=h.layout.layoutBox[k];m&&(g=Ge(m)*(parseFloat(g)/100))}}this.originPoint[k]=g}),v&&U.update(()=>v(c,d),!1,!0);const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},s=(c,d)=>{const{dragPropagation:f,dragDirectionLock:y,onDirectionLock:v,onDrag:w}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:k}=d;if(y&&this.currentDirection===null){this.currentDirection=ek(k),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",d.point,k),this.updateAxis("y",d.point,k),this.visualElement.render(),w&&w(c,d)},a=(c,d)=>this.stop(c,d),l=()=>Je(c=>{var d;return this.getAnimationState(c)==="paused"&&((d=this.getAxisMotionValue(c).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new T1(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:D1(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&U.update(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!$o(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=$S(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&xr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=_S(i.layoutBox,n):this.constraints=!1,this.elastic=WS(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Je(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=HS(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!xr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=ZS(r,i.root,this.visualElement.getTransformPagePoint());let s=BS(i.layout.layoutBox,o);if(n){const a=n(GS(s));this.hasMutatedConstraints=!!a,a&&(s=A1(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=Je(c=>{if(!$o(c,n,this.currentDirection))return;let d=l&&l[c]||{};s&&(d={min:0,max:0});const f=i?200:1e6,y=i?40:1e7,v={type:"inertia",velocity:r?t[c]:0,bounceStiffness:f,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...o,...d};return this.startAxisValueAnimation(c,v)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(Cd(t,r,0,n))}stopAnimation(){Je(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Je(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Je(n=>{const{drag:r}=this.getProps();if(!$o(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n];o.set(t[n]-te(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!xr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Je(s=>{const a=this.getAxisMotionValue(s);if(a){const l=a.get();i[s]=US({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Je(s=>{if(!$o(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(te(l,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;qS.set(this.visualElement,this);const t=this.visualElement.current,n=Ot(t,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();xr(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const s=Nt(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Je(c=>{const d=this.getAxisMotionValue(c);d&&(this.originPoint[c]+=l[c].translate,d.set(d.get()+l[c].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=Bu,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function $o(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function ek(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class tk extends jn{constructor(t){super(t),this.removeGroupControls=ae,this.removeListeners=ae,this.controls=new JS(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ae}unmount(){this.removeGroupControls(),this.removeListeners()}}const Fp=e=>(t,n)=>{e&&U.update(()=>e(t,n))};class nk extends jn{constructor(){super(...arguments),this.removePointerDownListener=ae}onPointerDown(t){this.session=new T1(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:D1(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Fp(t),onStart:Fp(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&U.update(()=>i(o,s))}}}mount(){this.removePointerDownListener=Ot(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function rk(){const e=x.useContext(ka);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=x.useId();return x.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}const us={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Ip(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ci={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(F.test(e))e=parseFloat(e);else return e;const n=Ip(e,t.target.x),r=Ip(e,t.target.y);return`${n}% ${r}%`}},ik={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=bn.parse(e);if(i.length>5)return r;const o=bn.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const u=te(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}};class ok extends ge.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;m5(sk),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),us.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||U.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function z1(e){const[t,n]=rk(),r=x.useContext(ud);return ge.createElement(ok,{...e,layoutGroup:r,switchLayoutGroup:x.useContext(Ag),isPresent:t,safeToRemove:n})}const sk={borderRadius:{...ci,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ci,borderTopRightRadius:ci,borderBottomLeftRadius:ci,borderBottomRightRadius:ci,boxShadow:ik},V1=["TopLeft","TopRight","BottomLeft","BottomRight"],ak=V1.length,Op=e=>typeof e=="string"?parseFloat(e):e,$p=e=>typeof e=="number"||F.test(e);function lk(e,t,n,r,i,o){i?(e.opacity=te(0,n.opacity!==void 0?n.opacity:1,uk(r)),e.opacityExit=te(t.opacity!==void 0?t.opacity:1,0,ck(r))):o&&(e.opacity=te(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<ak;s++){const a=`border${V1[s]}Radius`;let l=_p(t,a),u=_p(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||$p(l)===$p(u)?(e[a]=Math.max(te(Op(l),Op(u),r),0),(Tt.test(u)||Tt.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=te(t.rotate||0,n.rotate||0,r))}function _p(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const uk=N1(0,.5,i1),ck=N1(.5,.95,ae);function N1(e,t,n){return r=>r<e?0:r>t?1:n(Ur(e,t,r))}function Bp(e,t){e.min=t.min,e.max=t.max}function qe(e,t){Bp(e.x,t.x),Bp(e.y,t.y)}function Up(e,t,n,r,i){return e-=t,e=Xs(e,1/n,r),i!==void 0&&(e=Xs(e,1/i,r)),e}function dk(e,t=0,n=1,r=.5,i,o=e,s=e){if(Tt.test(t)&&(t=parseFloat(t),t=te(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=te(o.min,o.max,r);e===o&&(a-=t),e.min=Up(e.min,t,n,a,i),e.max=Up(e.max,t,n,a,i)}function Hp(e,t,[n,r,i],o,s){dk(e,t[n],t[r],t[i],t.scale,o,s)}const fk=["x","scaleX","originX"],pk=["y","scaleY","originY"];function Wp(e,t,n,r){Hp(e.x,t,fk,n?n.x:void 0,r?r.x:void 0),Hp(e.y,t,pk,n?n.y:void 0,r?r.y:void 0)}function Gp(e){return e.translate===0&&e.scale===1}function F1(e){return Gp(e.x)&&Gp(e.y)}function hk(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function I1(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Yp(e){return Ge(e.x)/Ge(e.y)}class mk{constructor(){this.members=[]}add(t){bd(this.members,t),t.scheduleRender()}remove(t){if(Ed(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Kp(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y;if((i||o)&&(r=`translate3d(${i}px, ${o}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:c}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),c&&(r+=`rotateY(${c}deg) `)}const s=e.x.scale*t.x,a=e.y.scale*t.y;return(s!==1||a!==1)&&(r+=`scale(${s}, ${a})`),r||"none"}const gk=(e,t)=>e.depth-t.depth;class yk{constructor(){this.children=[],this.isDirty=!1}add(t){bd(this.children,t),this.isDirty=!0}remove(t){Ed(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(gk),this.isDirty=!1,this.children.forEach(t)}}function vk(e,t){const n=performance.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(vt(r),e(o-t))};return U.read(r,!0),()=>vt(r)}function xk(e){window.MotionDebug&&window.MotionDebug.record(e)}function wk(e){return e instanceof SVGElement&&e.tagName!=="svg"}function Sk(e,t,n){const r=_e(e)?e:pt(e);return r.start(Cd("",r,t,n)),r.animation}const Xp=["","X","Y","Z"],kk={visibility:"hidden"},Qp=1e3;let Ck=0;const zn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function O1({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=Ck++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,zn.totalNodes=zn.resolvedTargetDeltas=zn.recalculatedProjection=0,this.nodes.forEach(Pk),this.nodes.forEach(Lk),this.nodes.forEach(Mk),this.nodes.forEach(Tk),xk(zn)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new yk)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Pd),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=wk(s),this.instance=s;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let d;const f=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=vk(f,250),us.hasAnimatedSinceResize&&(us.hasAnimatedSinceResize=!1,this.nodes.forEach(qp))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:y,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||c.getDefaultTransition()||Fk,{onLayoutAnimationStart:k,onLayoutAnimationComplete:g}=c.getProps(),h=!this.targetLayout||!I1(this.targetLayout,v)||y,m=!f&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||m||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,m);const S={...kd(w,"layout"),onPlay:k,onComplete:g};(c.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else f||qp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,vt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Dk),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const d=this.path[c];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Zp);return}this.isUpdating||this.nodes.forEach(Ak),this.isUpdating=!1,this.nodes.forEach(Rk),this.nodes.forEach(bk),this.nodes.forEach(Ek),this.clearAllSnapshots();const a=performance.now();ke.delta=Cn(0,1e3/60,a-ke.timestamp),ke.timestamp=a,ke.isProcessing=!0,pl.update.process(ke),pl.preRender.process(ke),pl.render.process(ke),ke.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(jk),this.sharedNodes.forEach(zk)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,U.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){U.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=de(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!F1(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;s&&(a||Dn(this.latestValues)||c)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),Ik(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return de();const a=s.measureViewportBox(),{scroll:l}=this.root;return l&&(rn(a.x,l.offset.x),rn(a.y,l.offset.y)),a}removeElementScroll(s){const a=de();qe(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:d}=u;if(u!==this.root&&c&&d.layoutScroll){if(c.isRoot){qe(a,s);const{scroll:f}=this.root;f&&(rn(a.x,-f.offset.x),rn(a.y,-f.offset.y))}rn(a.x,c.offset.x),rn(a.y,c.offset.y)}}return a}applyTransform(s,a=!1){const l=de();qe(l,s);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&kr(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Dn(c.latestValues)&&kr(l,c.latestValues)}return Dn(this.latestValues)&&kr(l,this.latestValues),l}removeTransform(s){const a=de();qe(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Dn(u.latestValues))continue;Uu(u.latestValues)&&u.updateSnapshot();const c=de(),d=u.measurePageBox();qe(c,d),Wp(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Dn(this.latestValues)&&Wp(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ke.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=ke.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=de(),this.relativeTargetOrigin=de(),zi(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),qe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=de(),this.targetWithTransforms=de()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),OS(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):qe(this.target,this.layout.layoutBox),L1(this.target,this.targetDelta)):qe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=de(),this.relativeTargetOrigin=de(),zi(this.relativeTargetOrigin,this.target,y.target),qe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}zn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Uu(this.parent.latestValues)||R1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===ke.timestamp&&(u=!1),u)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;qe(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,y=this.treeScale.y;KS(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:v}=a;if(!v){this.projectionTransform&&(this.projectionDelta=Sr(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Sr(),this.projectionDeltaWithTransform=Sr());const w=this.projectionTransform;Di(this.projectionDelta,this.layoutCorrected,v,this.latestValues),this.projectionTransform=Kp(this.projectionDelta,this.treeScale),(this.projectionTransform!==w||this.treeScale.x!==f||this.treeScale.y!==y)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),zn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},d=Sr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=de(),y=l?l.source:void 0,v=this.layout?this.layout.source:void 0,w=y!==v,k=this.getStack(),g=!k||k.members.length<=1,h=!!(w&&!g&&this.options.crossfade===!0&&!this.path.some(Nk));this.animationProgress=0;let m;this.mixTargetDelta=S=>{const E=S/1e3;Jp(d.x,s.x,E),Jp(d.y,s.y,E),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(zi(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Vk(this.relativeTarget,this.relativeTargetOrigin,f,E),m&&hk(this.relativeTarget,m)&&(this.isProjectionDirty=!1),m||(m=de()),qe(m,this.relativeTarget)),w&&(this.animationValues=c,lk(c,u,this.latestValues,E,h,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=E},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(vt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=U.update(()=>{us.hasAnimatedSinceResize=!0,this.currentAnimation=Sk(0,Qp,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Qp),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=s;if(!(!a||!l||!u)){if(this!==s&&this.layout&&u&&$1(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||de();const d=Ge(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+d;const f=Ge(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+f}qe(a,l),kr(a,c),Di(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new mk),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const u={};for(let c=0;c<Xp.length;c++){const d="rotate"+Xp[c];l[d]&&(u[d]=l[d],s.setStaticValue(d,0))}s.render();for(const c in u)s.setStaticValue(c,u[c]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return kk;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=ls(s==null?void 0:s.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const w={};return this.options.layoutId&&(w.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,w.pointerEvents=ls(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Dn(this.latestValues)&&(w.transform=c?c({},""):"none",this.hasProjected=!1),w}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),u.transform=Kp(this.projectionDeltaWithTransform,this.treeScale,f),c&&(u.transform=c(f,u.transform));const{x:y,y:v}=this.projectionDelta;u.transformOrigin=`${y.origin*100}% ${v.origin*100}% 0`,d.animationValues?u.opacity=d===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const w in Bs){if(f[w]===void 0)continue;const{correct:k,applyTo:g}=Bs[w],h=u.transform==="none"?f[w]:k(f[w],d);if(g){const m=g.length;for(let S=0;S<m;S++)u[g[S]]=h}else u[w]=h}return this.options.layoutId&&(u.pointerEvents=d===this?ls(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Zp),this.root.sharedNodes.clear()}}}function bk(e){e.updateLayout()}function Ek(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?Je(d=>{const f=s?n.measuredBox[d]:n.layoutBox[d],y=Ge(f);f.min=r[d].min,f.max=f.min+y}):$1(o,n.layoutBox,r)&&Je(d=>{const f=s?n.measuredBox[d]:n.layoutBox[d],y=Ge(r[d]);f.max=f.min+y,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+y)});const a=Sr();Di(a,r,n.layoutBox);const l=Sr();s?Di(l,e.applyTransform(i,!0),n.measuredBox):Di(l,r,n.layoutBox);const u=!F1(a);let c=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:y}=d;if(f&&y){const v=de();zi(v,n.layoutBox,f.layoutBox);const w=de();zi(w,r,y.layoutBox),I1(v,w)||(c=!0),d.options.layoutRoot&&(e.relativeTarget=w,e.relativeTargetOrigin=v,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function Pk(e){zn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Tk(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function jk(e){e.clearSnapshot()}function Zp(e){e.clearMeasurements()}function Ak(e){e.isLayoutDirty=!1}function Rk(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function qp(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Lk(e){e.resolveTargetDelta()}function Mk(e){e.calcProjection()}function Dk(e){e.resetRotation()}function zk(e){e.removeLeadSnapshot()}function Jp(e,t,n){e.translate=te(t.translate,0,n),e.scale=te(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function eh(e,t,n,r){e.min=te(t.min,n.min,r),e.max=te(t.max,n.max,r)}function Vk(e,t,n,r){eh(e.x,t.x,n.x,r),eh(e.y,t.y,n.y,r)}function Nk(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Fk={duration:.45,ease:[.4,0,.1,1]},th=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),nh=th("applewebkit/")&&!th("chrome/")?Math.round:ae;function rh(e){e.min=nh(e.min),e.max=nh(e.max)}function Ik(e){rh(e.x),rh(e.y)}function $1(e,t,n){return e==="position"||e==="preserve-aspect"&&!_u(Yp(t),Yp(n),.2)}const Ok=O1({attachResizeListener:(e,t)=>Nt(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),bl={current:void 0},_1=O1({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!bl.current){const e=new Ok({});e.mount(window),e.setOptions({layoutScroll:!0}),bl.current=e}return bl.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),$k={pan:{Feature:nk},drag:{Feature:tk,ProjectionNode:_1,MeasureLayout:z1}},_k=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Bk(e){const t=_k.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function Wu(e,t,n=1){const[r,i]=Bk(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return k1(s)?parseFloat(s):s}else return Du(i)?Wu(i,t,n+1):i}function Uk(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const o=i.get();if(!Du(o))return;const s=Wu(o,r);s&&i.set(s)});for(const i in t){const o=t[i];if(!Du(o))continue;const s=Wu(o,r);s&&(t[i]=s,n||(n={}),n[i]===void 0&&(n[i]=o))}return{target:t,transitionEnd:n}}const Hk=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),B1=e=>Hk.has(e),Wk=e=>Object.keys(e).some(B1),ih=e=>e===Jn||e===F,oh=(e,t)=>parseFloat(e.split(", ")[t]),sh=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return oh(i[1],t);{const o=r.match(/^matrix\((.+)\)$/);return o?oh(o[1],e):0}},Gk=new Set(["x","y","z"]),Yk=po.filter(e=>!Gk.has(e));function Kk(e){const t=[];return Yk.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const Hr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:sh(4,13),y:sh(5,14)};Hr.translateX=Hr.x;Hr.translateY=Hr.y;const Xk=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,o=getComputedStyle(i),{display:s}=o,a={};s==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{a[u]=Hr[u](r,o)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const c=t.getValue(u);c&&c.jump(a[u]),e[u]=Hr[u](l,o)}),e},Qk=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(B1);let o=[],s=!1;const a=[];if(i.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let c=n[l],d=ui(c);const f=t[l];let y;if(Hs(f)){const v=f.length,w=f[0]===null?1:0;c=f[w],d=ui(c);for(let k=w;k<v&&f[k]!==null;k++)y?Aa(ui(f[k])===y):y=ui(f[k])}else y=ui(f);if(d!==y)if(ih(d)&&ih(y)){const v=u.get();typeof v=="string"&&u.set(parseFloat(v)),typeof f=="string"?t[l]=parseFloat(f):Array.isArray(f)&&y===F&&(t[l]=f.map(parseFloat))}else d!=null&&d.transform&&(y!=null&&y.transform)&&(c===0||f===0)?c===0?u.set(y.transform(c)):t[l]=d.transform(f):(s||(o=Kk(e),s=!0),a.push(l),r[l]=r[l]!==void 0?r[l]:t[l],u.jump(f))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,u=Xk(t,e,a);return o.length&&o.forEach(([c,d])=>{e.getValue(c).set(d)}),e.render(),Ca&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function Zk(e,t,n,r){return Wk(t)?Qk(e,t,n,r):{target:t,transitionEnd:r}}const qk=(e,t,n,r)=>{const i=Uk(e,t,r);return t=i.target,r=i.transitionEnd,Zk(e,t,n,r)},Gu={current:null},U1={current:!1};function Jk(){if(U1.current=!0,!!Ca)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Gu.current=e.matches;e.addListener(t),t()}else Gu.current=!1}function eC(e,t,n){const{willChange:r}=t;for(const i in t){const o=t[i],s=n[i];if(_e(o))e.addValue(i,o),Ks(r)&&r.add(i);else if(_e(s))e.addValue(i,pt(o,{owner:e})),Ks(r)&&r.remove(i);else if(s!==o)if(e.hasValue(i)){const a=e.getValue(i);!a.hasAnimated&&a.set(o)}else{const a=e.getStaticValue(i);e.addValue(i,pt(a!==void 0?a:o,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const ah=new WeakMap,H1=Object.keys(no),tC=H1.length,lh=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],nC=ld.length;class rC{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>U.render(this.render,!1,!0);const{latestValues:a,renderState:l}=o;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.isControllingVariants=Ea(n),this.isVariantNode=jg(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...c}=this.scrapeMotionValuesFromProps(n,{});for(const d in c){const f=c[d];a[d]!==void 0&&_e(f)&&(f.set(a[d],!1),Ks(u)&&u.add(d))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,ah.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),U1.current||Jk(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Gu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){ah.delete(this.current),this.projection&&this.projection.unmount(),vt(this.notifyUpdate),vt(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=qn.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&U.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),o()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,i,o){let s,a;for(let l=0;l<tC;l++){const u=H1[l],{isEnabled:c,Feature:d,ProjectionNode:f,MeasureLayout:y}=no[u];f&&(s=f),c(n)&&(!this.features[u]&&d&&(this.features[u]=new d(this)),y&&(a=y))}if((this.type==="html"||this.type==="svg")&&!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:c,dragConstraints:d,layoutScroll:f,layoutRoot:y}=n;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!c||d&&xr(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:o,layoutScroll:f,layoutRoot:y})}return a}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):de()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<lh.length;r++){const i=lh[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o=t["on"+i];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=eC(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<nC;r++){const i=ld[r],o=this.props[i];(to(o)||o===!1)&&(n[i]=o)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=pt(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=gd(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!_e(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Pd),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class W1 extends rC{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:i},o){let s=SS(r,t||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),s&&(s=i(s))),o){xS(this,r,s);const a=qk(this,r,s,n);n=a.transitionEnd,r=a.target}return{transition:t,transitionEnd:n,...r}}}function iC(e){return window.getComputedStyle(e)}class oC extends W1{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(qn.has(n)){const r=Sd(n);return r&&r.default||0}else{const r=iC(t),i=(Mg(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return M1(t,n)}build(t,n,r,i){dd(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t,n){return md(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;_e(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,i){Ig(t,n,r,i)}}class sC extends W1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(qn.has(n)){const r=Sd(n);return r&&r.default||0}return n=Og.has(n)?n:sd(n),t.getAttribute(n)}measureInstanceViewportBox(){return de()}scrapeMotionValuesFromProps(t,n){return _g(t,n)}build(t,n,r,i){pd(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){$g(t,n,r,i)}mount(t){this.isSVGTag=hd(t.tagName),super.mount(t)}}const aC=(e,t)=>cd(e)?new sC(t,{enableHardwareAcceleration:!1}):new oC(t,{enableHardwareAcceleration:!0}),lC={layout:{ProjectionNode:_1,MeasureLayout:z1}},uC={...VS,...i4,...$k,...lC},R=p5((e,t)=>W5(e,t,uC,aC));function G1(){const e=x.useRef(!1);return qr(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function cC(){const e=G1(),[t,n]=x.useState(0),r=x.useCallback(()=>{e.current&&n(t+1)},[t]);return[x.useCallback(()=>U.postRender(r),[r]),t]}class dC extends x.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function fC({children:e,isPresent:t}){const n=x.useId(),r=x.useRef(null),i=x.useRef({width:0,height:0,top:0,left:0});return x.useInsertionEffect(()=>{const{width:o,height:s,top:a,left:l}=i.current;if(t||!r.current||!o||!s)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),x.createElement(dC,{isPresent:t,childRef:r,sizeRef:i},x.cloneElement(e,{ref:r}))}const El=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s})=>{const a=Jr(pC),l=x.useId(),u=x.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:c=>{a.set(c,!0);for(const d of a.values())if(!d)return;r&&r()},register:c=>(a.set(c,!1),()=>a.delete(c))}),o?void 0:[n]);return x.useMemo(()=>{a.forEach((c,d)=>a.set(d,!1))},[n]),x.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),s==="popLayout"&&(e=x.createElement(fC,{isPresent:n},e)),x.createElement(ka.Provider,{value:u},e)};function pC(){return new Map}function hC(e){return x.useEffect(()=>()=>e(),[])}const Vn=e=>e.key||"";function mC(e,t){e.forEach(n=>{const r=Vn(n);t.set(r,n)})}function gC(e){const t=[];return x.Children.forEach(e,n=>{x.isValidElement(n)&&t.push(n)}),t}const Xn=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:o=!0,mode:s="sync"})=>{const a=x.useContext(ud).forceRender||cC()[0],l=G1(),u=gC(e);let c=u;const d=x.useRef(new Map).current,f=x.useRef(c),y=x.useRef(new Map).current,v=x.useRef(!0);if(qr(()=>{v.current=!1,mC(u,y),f.current=c}),hC(()=>{v.current=!0,y.clear(),d.clear()}),v.current)return x.createElement(x.Fragment,null,c.map(h=>x.createElement(El,{key:Vn(h),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:o,mode:s},h)));c=[...c];const w=f.current.map(Vn),k=u.map(Vn),g=w.length;for(let h=0;h<g;h++){const m=w[h];k.indexOf(m)===-1&&!d.has(m)&&d.set(m,void 0)}return s==="wait"&&d.size&&(c=[]),d.forEach((h,m)=>{if(k.indexOf(m)!==-1)return;const S=y.get(m);if(!S)return;const E=w.indexOf(m);let T=h;if(!T){const P=()=>{d.delete(m);const j=Array.from(y.keys()).filter(M=>!k.includes(M));if(j.forEach(M=>y.delete(M)),f.current=u.filter(M=>{const V=Vn(M);return V===m||j.includes(V)}),!d.size){if(l.current===!1)return;a(),r&&r()}};T=x.createElement(El,{key:Vn(S),isPresent:!1,onExitComplete:P,custom:t,presenceAffectsLayout:o,mode:s},S),d.set(m,T)}c.splice(E,0,T)}),c=c.map(h=>{const m=h.key;return d.has(m)?h:x.createElement(El,{key:Vn(h),isPresent:!0,presenceAffectsLayout:o,mode:s},h)}),x.createElement(x.Fragment,null,d.size?c:c.map(h=>x.cloneElement(h)))};function Yu(e){const t=Jr(()=>pt(e)),{isStatic:n}=x.useContext(od);if(n){const[,r]=x.useState(e);x.useEffect(()=>t.on("change",r),[])}return t}const yC=e=>e&&typeof e=="object"&&e.mix,vC=e=>yC(e)?e.mix:void 0;function xC(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],o=e[2+n],s=e[3+n],a=Ra(i,o,{mixer:vC(o[0]),...s});return t?a(r):a}function Y1(e,t){const n=Yu(t()),r=()=>n.set(t());return r(),qr(()=>{const i=()=>U.update(r,!1,!0),o=e.map(s=>s.on("change",i));return()=>{o.forEach(s=>s()),vt(r)}}),n}function wC(e){Mi.current=[],e();const t=Y1(Mi.current,e);return Mi.current=void 0,t}function Ct(e,t,n,r){if(typeof e=="function")return wC(e);const i=typeof t=="function"?t:xC(t,n,r);return Array.isArray(e)?uh(e,i):uh([e],([o])=>i(o))}function uh(e,t){const n=Jr(()=>[]);return Y1(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}function SC(e,t,n){var r;if(typeof e=="string"){let i=document;t&&(Aa(!!t.current),i=t.current),n?((r=n[e])!==null&&r!==void 0||(n[e]=i.querySelectorAll(e)),e=n[e]):e=i.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}const cs=new WeakMap;let en;function kC(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function CC({target:e,contentRect:t,borderBoxSize:n}){var r;(r=cs.get(e))===null||r===void 0||r.forEach(i=>{i({target:e,contentSize:t,get size(){return kC(e,n)}})})}function bC(e){e.forEach(CC)}function EC(){typeof ResizeObserver>"u"||(en=new ResizeObserver(bC))}function PC(e,t){en||EC();const n=SC(e);return n.forEach(r=>{let i=cs.get(r);i||(i=new Set,cs.set(r,i)),i.add(t),en==null||en.observe(r)}),()=>{n.forEach(r=>{const i=cs.get(r);i==null||i.delete(t),i!=null&&i.size||en==null||en.unobserve(r)})}}const ds=new Set;let Vi;function TC(){Vi=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};ds.forEach(n=>n(t))},window.addEventListener("resize",Vi)}function jC(e){return ds.add(e),Vi||TC(),()=>{ds.delete(e),!ds.size&&Vi&&(Vi=void 0)}}function AC(e,t){return typeof e=="function"?jC(e):PC(e,t)}const RC=50,ch=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),LC=()=>({time:0,x:ch(),y:ch()}),MC={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function dh(e,t,n,r){const i=n[t],{length:o,position:s}=MC[t],a=i.current,l=n.time;i.current=e["scroll"+s],i.scrollLength=e["scroll"+o]-e["client"+o],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=Ur(0,i.scrollLength,i.current);const u=r-l;i.velocity=u>RC?0:wd(i.current-a,u)}function DC(e,t,n){dh(e,"x",t,n),dh(e,"y",t,n),t.time=n}function zC(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const i=r.getBoundingClientRect();r=r.parentElement;const o=r.getBoundingClientRect();n.x+=i.left-o.left,n.y+=i.top-o.top}else if(r instanceof SVGGraphicsElement){const{x:i,y:o}=r.getBBox();n.x+=i,n.y+=o;let s=null,a=r.parentNode;for(;!s;)a.tagName==="svg"&&(s=a),a=r.parentNode;r=s}else break;return n}const VC={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Ku={start:0,center:.5,end:1};function fh(e,t,n=0){let r=0;if(Ku[e]!==void 0&&(e=Ku[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(r=t*e),n+r}const NC=[0,0];function FC(e,t,n,r){let i=Array.isArray(e)?e:NC,o=0,s=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,Ku[e]?e:"0"]),o=fh(i[0],n,r),s=fh(i[1],t),o-s}const IC={x:0,y:0};function OC(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function $C(e,t,n){let{offset:r=VC.All}=n;const{target:i=e,axis:o="y"}=n,s=o==="y"?"height":"width",a=i!==e?zC(i,e):IC,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:OC(i),u={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let c=!t[o].interpolate;const d=r.length;for(let f=0;f<d;f++){const y=FC(r[f],u[s],l[s],a[o]);!c&&y!==t[o].interpolatorOffsets[f]&&(c=!0),t[o].offset[f]=y}c&&(t[o].interpolate=Ra(t[o].offset,y1(r)),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}function _C(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function BC(e,t,n,r={}){return{measure:()=>_C(e,r.target,n),update:i=>{DC(e,n,i),(r.offset||r.target)&&$C(e,n,r)},notify:()=>t(n)}}const di=new WeakMap,ph=new WeakMap,Pl=new WeakMap,hh=e=>e===document.documentElement?window:e;function UC(e,{container:t=document.documentElement,...n}={}){let r=Pl.get(t);r||(r=new Set,Pl.set(t,r));const i=LC(),o=BC(t,e,i,n);if(r.add(o),!di.has(t)){const a=()=>{for(const f of r)f.measure()},l=()=>{for(const f of r)f.update(ke.timestamp)},u=()=>{for(const f of r)f.notify()},c=()=>{U.read(a,!1,!0),U.read(l,!1,!0),U.update(u,!1,!0)};di.set(t,c);const d=hh(t);window.addEventListener("resize",c,{passive:!0}),t!==document.documentElement&&ph.set(t,AC(t,c)),d.addEventListener("scroll",c,{passive:!0})}const s=di.get(t);return U.read(s,!1,!0),()=>{var a;vt(s);const l=Pl.get(t);if(!l||(l.delete(o),l.size))return;const u=di.get(t);di.delete(t),u&&(hh(t).removeEventListener("scroll",u),(a=ph.get(t))===null||a===void 0||a(),window.removeEventListener("resize",u))}}function mh(e,t){Xg(!!(!t||t.current))}const HC=()=>({scrollX:pt(0),scrollY:pt(0),scrollXProgress:pt(0),scrollYProgress:pt(0)});function K1({container:e,target:t,layoutEffect:n=!0,...r}={}){const i=Jr(HC);return(n?qr:x.useEffect)(()=>(mh("target",t),mh("container",e),UC(({x:s,y:a})=>{i.scrollX.set(s.current),i.scrollXProgress.set(s.progress),i.scrollY.set(a.current),i.scrollYProgress.set(a.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),i}function WC(e){e.values.forEach(t=>t.stop())}function GC(){const e=new Set,t={subscribe(n){return e.add(n),()=>void e.delete(n)},start(n,r){const i=[];return e.forEach(o=>{i.push(P1(o,n,{transitionOverride:r}))}),Promise.all(i)},set(n){return e.forEach(r=>{vS(r,n)})},stop(){e.forEach(n=>{WC(n)})},mount(){return()=>{t.stop()}}};return t}function YC(){const e=Jr(GC);return qr(e.mount,[]),e}var X1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},gh=ge.createContext&&ge.createContext(X1),wn=globalThis&&globalThis.__assign||function(){return wn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},wn.apply(this,arguments)},KC=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Q1(e){return e&&e.map(function(t,n){return ge.createElement(t.tag,wn({key:n},t.attr),Q1(t.child))})}function K(e){return function(t){return ge.createElement(XC,wn({attr:wn({},e.attr)},t),Q1(e.child))}}function XC(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,s=KC(e,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),ge.createElement("svg",wn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:wn(wn({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&ge.createElement("title",null,o),e.children)};return gh!==void 0?ge.createElement(gh.Consumer,null,function(n){return t(n)}):t(X1)}function QC(e){return K({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"}}]})(e)}function ZC(e){return K({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"}}]})(e)}function qC(e){return K({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"}}]})(e)}function JC(e){return K({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"}}]})(e)}function La(e){return K({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M104 96H56c-13.3 0-24 10.7-24 24v104H8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h24v104c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm528 128h-24V120c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h24c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM456 32h-48c-13.3 0-24 10.7-24 24v168H256V56c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h128v168c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24z"}}]})(e)}function e3(e){return K({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"}}]})(e)}function t3(e){return K({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"}}]})(e)}function n3(e){return K({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"}}]})(e)}function r3(e){return K({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"}}]})(e)}function i3(e){return K({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"}},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"}}]})(e)}function o3(e){return K({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}},{tag:"circle",attr:{cx:"12",cy:"13",r:"4"}}]})(e)}function Z1(e){return K({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"}}]})(e)}function Tl(e){return K({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"}}]})(e)}function s3(e){return K({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"}},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"}}]})(e)}function Xu(e){return K({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}},{tag:"line",attr:{x1:"1",y1:"1",x2:"23",y2:"23"}}]})(e)}function Qu(e){return K({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"}}]})(e)}function a3(e){return K({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}},{tag:"polyline",attr:{points:"16 17 21 12 16 7"}},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"}}]})(e)}function l3(e){return K({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}}]})(e)}function u3(e){return K({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"}},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"}}]})(e)}function c3(e){return K({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"}},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"}},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"}},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"}},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"}},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}}]})(e)}function d3(e){return K({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"}}]})(e)}function f3(e){return K({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"}},{tag:"polyline",attr:{points:"17 6 23 6 23 12"}}]})(e)}function p3(e){return K({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"}}]})(e)}function h3(e){return K({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"}},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"}},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"}}]})(e)}function Ar(e){return K({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(e)}function m3(e){return K({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}}]})(e)}const Zu={name:"GYM BUDDY",logoSrc:"/icon-hand-dumbbell-red.png",heroSrc:"/hero-image.png",floatingCards:[{id:"progress",position:"top-left",rotate:-8,zIndex:0,stat:"87%",title:"Progresso Mensal",description:"usuários atingem suas metas de treino com nosso sistema de acompanhamento personalizado.",category:"Resultados"},{id:"users",position:"top-right",rotate:12,zIndex:0,stat:"15k+",title:"Usuários Ativos",description:"pessoas já transformaram seus corpos usando nossa plataforma de treinos inteligentes.",category:"Comunidade"},{id:"workouts",position:"bottom-left",rotate:6,zIndex:0,stat:"200+",title:"Exercícios Disponíveis",description:"diferentes modalidades de treino adaptadas ao seu nível e objetivos pessoais.",category:"Variedade"},{id:"ai",position:"bottom-right",rotate:-15,zIndex:0,stat:"24/7",title:"IA Personal Trainer",description:"assistente inteligente disponível para ajustar seus treinos em tempo real.",category:"Tecnologia"}]},Wr="/api/v1/gymbuddy",g3=async(e,t)=>{try{const n=`${Wr}/usuario/login/email/senha?email=${encodeURIComponent(e)}&senha=${encodeURIComponent(t)}`;console.log("🚀 Realizando login:",{email:e,url:n,baseUrl:Wr});const r=await fetch(n,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Accept:"application/json"}});console.log("📡 Resposta recebida:",{status:r.status,statusText:r.statusText,headers:Object.fromEntries(r.headers.entries())});const i=r.headers.get("content-type");let o;if(i&&i.includes("application/json"))o=await r.json(),console.log("✅ Resposta JSON:",o);else{const s=await r.text();throw console.error("❌ Resposta não é JSON:",{status:r.status,contentType:i,responseText:s.substring(0,500)}),r.status===500?new Error("Erro interno do servidor (500). O backend pode estar com problemas. Verifique se está rodando em 10.107.144.9:8080"):new Error(`Erro na API. Status: ${r.status}. Resposta: ${s.substring(0,100)}`)}return o}catch(n){throw console.error("💥 Erro no login:",n),n}},y3=async e=>{const t=`${Wr}/usuario/check-email`;try{console.log("🔍 Verificando se email já existe:",e);const n=await fetch(`${t}?email=${encodeURIComponent(e)}`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!n.ok){if(n.status===404)return{status:!0,exists:!1,message:"Email disponível"};throw new Error(`Erro ${n.status}: ${n.statusText}`)}const r=await n.json();return console.log("📧 Resultado da verificação de email:",r),{status:!0,exists:r.exists||!1,message:r.message||(r.exists?"Email já cadastrado":"Email disponível"),field:"email"}}catch(n){return console.warn("⚠️ Erro ao verificar email (continuando):",n),{status:!0,exists:!1,message:"Verificação indisponível"}}},v3=async e=>{const t=`${Wr}/usuario/check-username`;try{console.log("🔍 Verificando se username já existe:",e);const n=await fetch(`${t}?username=${encodeURIComponent(e)}`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!n.ok){if(n.status===404)return{status:!0,exists:!1,message:"Username disponível"};throw new Error(`Erro ${n.status}: ${n.statusText}`)}const r=await n.json();return console.log("👤 Resultado da verificação de username:",r),{status:!0,exists:r.exists||!1,message:r.message||(r.exists?"Username já cadastrado":"Username disponível"),field:"username"}}catch(n){return console.warn("⚠️ Erro ao verificar username (continuando):",n),{status:!0,exists:!1,message:"Verificação indisponível"}}},x3=async e=>{try{const t=`${Wr}/usuario`;if(!e.email||!e.password||!e.username)throw new Error("Email, senha e nome de usuário são obrigatórios.");const n={nome:e.username,username:e.username,nickname:e.nickname,email:e.email,senha:e.password,cpf:"000.000.000-00",telefone:"(11) 99999-9999",data_nascimento:"1990-01-01",genero:"M",ativo:!0,tipo_usuario:"CLIENTE"};console.log("🚀 Realizando cadastro:",{url:t,originalUserData:{...e,password:"[REDACTED]",confirmPassword:"[REDACTED]"},payload:{...n,senha:"[REDACTED]"},payloadComplete:n,baseUrl:Wr});const r=await fetch(t,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(n)});console.log("📡 Resposta de cadastro recebida:",{status:r.status,statusText:r.statusText,headers:Object.fromEntries(r.headers.entries())});const i=r.headers.get("content-type");let o;if(i&&i.includes("application/json"))o=await r.json(),console.log("✅ Resposta JSON de cadastro:",o);else{const s=await r.text();throw console.error("❌ Resposta de cadastro não é JSON:",{status:r.status,contentType:i,responseText:s.substring(0,500)}),r.status===500?new Error("Erro interno do servidor (500). O backend pode estar com problemas. Verifique se está rodando em 10.107.144.9:8080"):new Error(`Erro na API. Status: ${r.status}. Resposta: ${s.substring(0,100)}`)}return o}catch(t){throw console.error("💥 Erro no cadastro:",t),t}},w3=()=>{try{const e=localStorage.getItem("userData");return e?JSON.parse(e):null}catch(e){return console.error("Erro ao recuperar dados do usuário:",e),null}},S3=()=>localStorage.getItem("authToken"),k3=()=>{localStorage.removeItem("authToken"),localStorage.removeItem("userData")},q1=x.createContext(void 0),C3=({children:e})=>{const[t,n]=x.useState(null);x.useEffect(()=>{const a=w3(),l=S3();a&&l&&(n(a),console.log("Usuário recuperado do storage:",a))},[]);const s={user:t,isLoggedIn:!!t,login:(a,l)=>{console.log("🔐 UserContext.login() chamado com:",{userData:a,token:l?"presente":"ausente",timestamp:new Date().toISOString()}),n(a),l&&(localStorage.setItem("authToken",l),console.log("💾 Token salvo no localStorage")),localStorage.setItem("userData",JSON.stringify(a)),console.log("💾 Dados do usuário salvos no localStorage"),console.log("✅ Login realizado com sucesso no UserContext"),console.log("👤 Estado do usuário atualizado para:",a)},logout:()=>{n(null),k3(),console.log("Usuário deslogado")},updateUser:a=>{n(a),localStorage.setItem("userData",JSON.stringify(a)),console.log("Dados do usuário atualizados:",a)}};return p.jsx(q1.Provider,{value:s,children:e})},Ma=()=>{const e=x.useContext(q1);if(e===void 0)throw new Error("useUser deve ser usado dentro de um UserProvider");return e},b3=({estaAberto:e,aoFechar:t,aoTrocarParaCadastro:n})=>{const[r,i]=x.useState(!1),[o,s]=x.useState(!1),[a,l]=x.useState(null),[u,c]=x.useState({email:"",senha:""}),{login:d}=Ma(),f=()=>{c({email:"",senha:""}),i(!1),l(null),s(!1)},y=()=>{f(),t()},v=async k=>{var g;k.preventDefault(),s(!0),l(null);try{const h=await g3(u.email,u.senha);if(h&&h.status===!0){const m=((g=h.usuario)==null?void 0:g[0])||h.user||h.data;if(console.log("🎯 Dados do usuário extraídos:",m),m)d(m,h.token),y(),console.log("✅ Login realizado com sucesso!",m);else throw console.error("❌ Estrutura da resposta:",h),new Error("Dados do usuário não encontrados na resposta.")}else{let m=(h==null?void 0:h.message)||"Credenciais inválidas. Verifique seu email e senha.";m.includes("campos com preenchimento obrigatórios")&&(m="Email e senha são obrigatórios."),l(m)}}catch(h){console.error("Erro no login:",h);let m="Erro de conexão. Verifique sua internet ou se a API está funcionando.";h instanceof Error&&(m=h.message),l(m)}finally{s(!1)}},w=k=>{c({...u,[k.target.name]:k.target.value})};return p.jsx(Xn,{children:e&&p.jsxs(p.Fragment,{children:[p.jsx(E3,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:y}),p.jsx(P3,{initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},transition:{duration:.4,ease:"easeOut"},children:p.jsxs(T3,{children:[p.jsx(j3,{onClick:y,children:p.jsx(Ar,{})}),p.jsxs(A3,{children:[p.jsx(La,{className:"icone-logo"}),p.jsx("h2",{children:"GYM BUDDY"}),p.jsx("div",{className:"divisor"})]}),p.jsx(R3,{children:"ENTRAR NA CONTA"}),p.jsxs(L3,{onSubmit:v,children:[p.jsx(yh,{children:p.jsx(vh,{type:"email",name:"email",placeholder:"Email ou Usuário",value:u.email,onChange:w,required:!0})}),p.jsxs(yh,{children:[p.jsx(vh,{type:r?"text":"password",name:"senha",placeholder:"Senha",value:u.senha,onChange:w,required:!0}),p.jsx(M3,{type:"button",onClick:()=>i(!r),children:r?p.jsx(Xu,{}):p.jsx(Qu,{})})]}),p.jsx(D3,{href:"#",onClick:k=>k.preventDefault(),children:"Esqueci minha senha"}),a&&p.jsx(z3,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},children:a}),p.jsx(V3,{type:"submit",disabled:o,whileHover:o?{}:{scale:1.02},whileTap:o?{}:{scale:.98},children:o?"Entrando...":"Entrar"})]}),p.jsxs(N3,{children:["Não tem conta ainda? ",p.jsx(F3,{href:"#",onClick:k=>{k.preventDefault(),n()},children:"Criar conta"})]})]})})]})})},E3=C(R.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 9998;
`,P3=C(R.div)`
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
`,T3=C.div`
  position: relative;
  background: #0A0A0A;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.6rem;
  padding: 3rem;
  width: 90%;
  max-width: 42rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  pointer-events: auto;
`,j3=C.button`
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
`,A3=C.div`
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
`,R3=C.h1`
  color: var(--white);
  font-size: 2.4rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: 0.05em;
`,L3=C.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,yh=C.div`
  position: relative;
`,vh=C.input`
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
`,M3=C.button`
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
`,D3=C.a`
  color: var(--primary);
  font-size: 1.3rem;
  text-align: center;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--primary-dark);
    text-decoration: underline;
  }
`,z3=C(R.div)`
  background: rgba(220, 38, 38, 0.1);
  border: 1px solid rgba(220, 38, 38, 0.3);
  border-radius: 0.8rem;
  padding: 1rem 1.5rem;
  color: #ef4444;
  font-size: 1.4rem;
  text-align: center;
  margin: 1rem 0;
`,V3=C(R.button)`
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
`,N3=C.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.4rem;
  text-align: center;
  margin-top: 2rem;
`,F3=C.a`
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`,jd=({isOpen:e,onClose:t,onSwitchToLogin:n})=>{const[r,i]=x.useState(!1),[o,s]=x.useState(!1),[a,l]=x.useState({username:"",nickname:"",email:"",confirmEmail:"",password:"",confirmPassword:""}),[u,c]=x.useState(null),[d,f]=x.useState(!1),[y,v]=x.useState(!1),[w,k]=x.useState(null),[g,h]=x.useState(!1),[m,S]=x.useState(!1),[E,T]=x.useState(null),[P,j]=x.useState(null),{login:M}=Ma(),V=()=>{l({username:"",nickname:"",email:"",confirmEmail:"",password:"",confirmPassword:""}),i(!1),s(!1),c(null),v(!1),k(null),f(!1),h(!1),S(!1),T(null),j(null)},Y=()=>{V(),t()},le=async O=>{O.preventDefault(),v(!0),k(null);try{if(!a.username.trim())throw new Error("Nome de usuário é obrigatório.");if(!a.nickname.trim())throw new Error("Nickname é obrigatório.");if(E===!0)throw new Error("Este email já está cadastrado. Use outro email.");if(P===!0)throw new Error("Este nome de usuário já está em uso. Escolha outro.");if(a.email!==a.confirmEmail)throw new Error("Os emails não coincidem.");if(a.password!==a.confirmPassword)throw new Error("As senhas não coincidem.");if(!ce(a.password))throw new Error("A senha deve ter pelo menos 8 caracteres, incluindo maiúscula, número e caractere especial.");const b=await x3(a);if(console.log("📋 Resposta completa da API:",b),console.log("🔍 Status da resposta:",b==null?void 0:b.status),console.log("🔍 Status Code da resposta:",b==null?void 0:b.status_code),console.log("🔍 Tipo do status:",typeof(b==null?void 0:b.status)),console.log("🔍 Tipo do status_code:",typeof(b==null?void 0:b.status_code)),b&&(b.status===!0||typeof b.status=="string"&&b.status==="true"||typeof b.status=="number"&&b.status===1||b.status_code===200||b.status_code==="200")){console.log("✅ Cadastro bem-sucedido detectado!"),console.log("🔍 Critério de sucesso usado:",{"response.status":b.status,"response.status_code":b.status_code,"typeof status":typeof b.status,"typeof status_code":typeof b.status_code});let L=null;if(b.usuario&&Array.isArray(b.usuario)&&b.usuario.length>0?(L=b.usuario[0],console.log("👤 Dados extraídos de response.usuario[0]:",L)):b.user?(L=b.user,console.log("👤 Dados extraídos de response.user:",L)):b.data?(L=b.data,console.log("👤 Dados extraídos de response.data:",L)):(L={nome:a.username,username:a.username,email:a.email,foto:null},console.log("👤 Usando dados do formulário como fallback:",L)),L)console.log("🚀 Fazendo login automático com:",L),M(L),setTimeout(()=>{console.log("🔒 Fechando popup de cadastro"),Y(),console.log("✅ Fluxo de cadastro concluído com sucesso!")},100);else throw console.error("❌ Não foi possível extrair dados do usuário"),console.error("📋 Estrutura da resposta completa:",JSON.stringify(b,null,2)),new Error("Dados do usuário não encontrados na resposta do cadastro.")}else{console.error("❌ Cadastro falhou ou status inválido"),console.error("📋 Detalhes completos da resposta:",{status:b==null?void 0:b.status,status_code:b==null?void 0:b.status_code,message:b==null?void 0:b.message,usuario:b==null?void 0:b.usuario,fullResponse:b});let L=(b==null?void 0:b.message)||"Erro ao realizar cadastro. Tente novamente.";L.toLowerCase().includes("email")&&L.toLowerCase().includes("já")?L="Este email já está cadastrado. Use outro email.":L.toLowerCase().includes("usuário")&&L.toLowerCase().includes("já")?L="Este nome de usuário já está em uso. Escolha outro.":(L.toLowerCase().includes("duplicate")||L.toLowerCase().includes("duplicado"))&&(L="Email ou nome de usuário já cadastrado. Verifique os dados."),k(L)}}catch(b){console.error("💥 Erro no fluxo de cadastro:",b),console.error("📋 Detalhes do erro:",{message:b instanceof Error?b.message:"Erro desconhecido",stack:b instanceof Error?b.stack:null,formData:{...a,password:"***",confirmPassword:"***"}}),k(b instanceof Error?b.message:"Erro inesperado ao realizar cadastro.")}finally{v(!1)}},ce=O=>{const b=O.length>=8,D=/[A-Z]/.test(O),L=/\d/.test(O),N=/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(O);return b&&D&&L&&N},oe=async O=>{if(!(!O||!O.includes("@"))){h(!0),T(null);try{const b=await y3(O);T(b.exists),b.exists?console.log("❌ Email já cadastrado:",O):console.log("✅ Email disponível:",O)}catch(b){console.warn("⚠️ Erro na validação de email:",b),T(null)}finally{h(!1)}}},Xe=async O=>{if(!(!O||O.length<3)){S(!0),j(null);try{const b=await v3(O);j(b.exists),b.exists?console.log("❌ Username já cadastrado:",O):console.log("✅ Username disponível:",O)}catch(b){console.warn("⚠️ Erro na validação de username:",b),j(null)}finally{S(!1)}}},H=O=>{const{name:b,value:D}=O.target;l({...a,[b]:D}),b==="password"&&c(D===""?null:ce(D)),b==="email"&&(T(null),setTimeout(()=>{a.email===D&&oe(D)},1e3)),b==="username"&&(j(null),setTimeout(()=>{a.username===D&&Xe(D)},1e3))};return p.jsx(Xn,{children:e&&p.jsxs(p.Fragment,{children:[p.jsx(I3,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:Y}),p.jsx(O3,{initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},transition:{duration:.4,ease:"easeOut"},children:p.jsxs("div",{children:[p.jsx($3,{onClick:Y,children:p.jsx(Ar,{})}),p.jsxs(_3,{children:[p.jsx(La,{className:"logo-icon"}),p.jsx("h2",{children:"GYM BUDDY"}),p.jsx("div",{className:"divider"})]}),p.jsx(B3,{children:"CADASTRAR-SE"}),p.jsxs(U3,{onSubmit:le,children:[p.jsxs(nr,{children:[p.jsx(ir,{type:"text",name:"username",placeholder:"Crie um nome de usuário",value:a.username,onChange:H,required:!0,style:{borderColor:P===!0?"#ff4444":P===!1?"#44ff44":void 0}}),m&&p.jsx(rr,{style:{color:"#888"},children:"🔍 Verificando disponibilidade..."}),P===!0&&p.jsx(rr,{style:{color:"#ff4444"},children:"❌ Nome de usuário já está em uso"}),P===!1&&p.jsx(rr,{style:{color:"#44ff44"},children:"✅ Nome de usuário disponível"})]}),p.jsx(nr,{children:p.jsx(ir,{type:"text",name:"nickname",placeholder:"Crie um nickname",value:a.nickname,onChange:H,required:!0})}),p.jsxs(nr,{children:[p.jsx(ir,{type:"email",name:"email",placeholder:"Insira seu e-mail",value:a.email,onChange:H,required:!0,style:{borderColor:E===!0?"#ff4444":E===!1?"#44ff44":void 0}}),g&&p.jsx(rr,{style:{color:"#888"},children:"🔍 Verificando disponibilidade..."}),E===!0&&p.jsx(rr,{style:{color:"#ff4444"},children:"❌ Email já está cadastrado"}),E===!1&&p.jsx(rr,{style:{color:"#44ff44"},children:"✅ Email disponível"})]}),p.jsx(nr,{children:p.jsx(ir,{type:"email",name:"confirmEmail",placeholder:"Confirme o email",value:a.confirmEmail,onChange:H,required:!0})}),p.jsxs(nr,{children:[p.jsx(ir,{type:r?"text":"password",name:"password",placeholder:"Crie uma senha",value:a.password,onChange:H,required:!0,$isValid:u}),p.jsxs(H3,{initial:{scale:0,opacity:0},animate:{scale:u!==null?[0,1.2,.9,1.05,1]:0,opacity:u!==null?1:0,filter:u!==null?["blur(4px)","blur(0px)"]:"blur(4px)"},exit:{scale:0,opacity:0,filter:"blur(4px)"},transition:{type:"spring",stiffness:260,damping:20,duration:.6,filter:{duration:.3}},whileHover:{scale:1.1,transition:{duration:.2}},$isValid:u,onMouseEnter:()=>u===!1&&f(!0),onMouseLeave:()=>f(!1),children:[p.jsx(R.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:300,damping:15,delay:.1},style:{display:"flex",alignItems:"center",justifyContent:"center"},children:u===!0?p.jsx(Z1,{}):p.jsx(Ar,{})},u?"check":"x"),p.jsx(Xn,{children:d&&u===!1&&p.jsxs(W3,{initial:{opacity:0,scale:.7,y:15,filter:"blur(8px)",rotateX:-15},animate:{opacity:1,scale:1,y:0,filter:"blur(0px)",rotateX:0},exit:{opacity:0,scale:.85,y:8,filter:"blur(4px)",rotateX:10},transition:{duration:.4,ease:[.25,.46,.45,.94],opacity:{duration:.3},filter:{duration:.3},scale:{type:"spring",stiffness:300,damping:20}},children:[p.jsxs("div",{className:"tooltip-header",children:[p.jsx(Ar,{className:"tooltip-icon"}),p.jsx("span",{children:"Senha inválida"})]}),p.jsxs(R.div,{className:"tooltip-content",initial:"hidden",animate:"visible",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.15}}},children:[p.jsxs(R.div,{className:"requirement",variants:{hidden:{opacity:0,x:-10},visible:{opacity:1,x:0,transition:{duration:.3,ease:"easeOut"}}},children:[p.jsx("span",{className:"bullet",children:"•"}),"Mínimo 8 caracteres"]}),p.jsxs(R.div,{className:"requirement",variants:{hidden:{opacity:0,x:-10},visible:{opacity:1,x:0,transition:{duration:.3,ease:"easeOut"}}},children:[p.jsx("span",{className:"bullet",children:"•"}),"1 letra maiúscula"]}),p.jsxs(R.div,{className:"requirement",variants:{hidden:{opacity:0,x:-10},visible:{opacity:1,x:0,transition:{duration:.3,ease:"easeOut"}}},children:[p.jsx("span",{className:"bullet",children:"•"}),"1 número"]}),p.jsxs(R.div,{className:"requirement",variants:{hidden:{opacity:0,x:-10},visible:{opacity:1,x:0,transition:{duration:.3,ease:"easeOut"}}},children:[p.jsx("span",{className:"bullet",children:"•"}),"1 caractere especial"]})]})]})})]}),p.jsx(xh,{type:"button",onClick:()=>i(!r),children:r?p.jsx(Xu,{}):p.jsx(Qu,{})})]}),p.jsxs(nr,{children:[p.jsx(ir,{type:o?"text":"password",name:"confirmPassword",placeholder:"Confirme a senha",value:a.confirmPassword,onChange:H,required:!0}),p.jsx(xh,{type:"button",onClick:()=>s(!o),children:o?p.jsx(Xu,{}):p.jsx(Qu,{})})]}),w&&p.jsx(G3,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},children:w}),p.jsx(Y3,{type:"submit",disabled:y,whileHover:y?{}:{scale:1.02},whileTap:y?{}:{scale:.98},children:y?"Cadastrando...":"Cadastrar"})]}),p.jsxs(K3,{children:["Já possui uma conta? ",p.jsx(X3,{href:"#",onClick:O=>{O.preventDefault(),n()},children:"Fazer Login"})]})]})})]})})},I3=C(R.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 9998;
`,O3=C(R.div)`
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
`,$3=C.button`
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
`,_3=C.div`
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
`,B3=C.h1`
  color: var(--white);
  font-size: 2.4rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: 0.05em;
`,U3=C.form`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`,nr=C.div`
  position: relative;
`,rr=C.div`
  font-size: 1.2rem;
  margin-top: 0.5rem;
  padding: 0.3rem 0;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ir=C.input`
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
`,H3=C(R.div)`
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
`,xh=C.button`
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
`,W3=C(R.div)`
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
`,G3=C(R.div)`
  background: rgba(220, 38, 38, 0.1);
  border: 1px solid rgba(220, 38, 38, 0.3);
  border-radius: 0.8rem;
  padding: 1rem 1.5rem;
  color: #ef4444;
  font-size: 1.4rem;
  text-align: center;
  margin: 1rem 0;
`,Y3=C(R.button)`
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
`,K3=C.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.4rem;
  text-align: center;
  margin-top: 2rem;
`,X3=C.a`
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`,J1=({size:e=40,className:t})=>p.jsxs("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:t,children:[p.jsx("circle",{cx:"20",cy:"20",r:"20",fill:"#1A1A1A",stroke:"rgba(255, 255, 255, 0.2)",strokeWidth:"1"}),p.jsx("circle",{cx:"20",cy:"15",r:"6",fill:"rgba(255, 255, 255, 0.6)"}),p.jsx("path",{d:"M8 32C8 26.4772 12.4772 22 18 22H22C27.5228 22 32 26.4772 32 32V34C32 35.1046 31.1046 36 30 36H10C8.89543 36 8 35.1046 8 34V32Z",fill:"rgba(255, 255, 255, 0.6)"})]}),Q3=()=>{const[e,t]=x.useState(!1),[n,r]=x.useState(()=>localStorage.getItem("theme")==="dark"),[i,o]=x.useState(!1),[s,a]=x.useState(!1),[l,u]=x.useState(!1),c=x.useRef(null),d=Xt(),{user:f,isLoggedIn:y,logout:v}=Ma(),w=()=>{o(!1),a(!0)},k=()=>{a(!1),o(!0)};x.useEffect(()=>{const S=()=>{const E=window.scrollY>10;E!==e&&t(E)};return window.addEventListener("scroll",S),()=>window.removeEventListener("scroll",S)},[e]),x.useEffect(()=>{document.documentElement.setAttribute("data-theme",n?"dark":"light"),localStorage.setItem("theme",n?"dark":"light")},[n]);const g=()=>{r(!n)},h=()=>{v(),u(!1),console.log("Usuário deslogado")};x.useEffect(()=>{const S=E=>{c.current&&!c.current.contains(E.target)&&u(!1)};if(l)return document.addEventListener("mousedown",S),()=>document.removeEventListener("mousedown",S)},[l]);const m=[{name:"Home",path:"/"},{name:"Sobre nós",path:"/sobre"},{name:"Recursos",path:"/recursos"},{name:"Aplicativo",path:"/app"}];return p.jsxs(Z3,{$scrolled:e,children:[p.jsxs("div",{className:"container",children:[p.jsxs(q3,{children:[p.jsx(La,{className:"icon"}),p.jsx("span",{children:Zu.name})]}),p.jsx(J3,{children:p.jsx(eb,{children:m.map(S=>p.jsx(tb,{children:p.jsxs(nb,{to:S.path,className:d.pathname===S.path?"active":"",children:[p.jsx(R.span,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.3,delay:.1},children:S.name}),d.pathname===S.path&&p.jsx(R.span,{className:"underline",layoutId:"underline",initial:{scaleX:0,opacity:0},animate:{scaleX:1,opacity:1},exit:{scaleX:0,opacity:0},transition:{type:"spring",stiffness:400,damping:30,duration:.6}}),p.jsx(R.div,{className:"nav-glow",initial:{opacity:0,scale:.8},animate:{opacity:d.pathname===S.path?1:0,scale:d.pathname===S.path?1:.8},transition:{duration:.4}})]})},S.path))})}),y?p.jsxs(ab,{ref:c,children:[p.jsxs(lb,{onClick:()=>u(!l),whileHover:{scale:1.05,boxShadow:"0 0 20px rgba(227, 6, 19, 0.3)"},whileTap:{scale:.95},transition:{duration:.3,ease:"easeOut"},children:[p.jsxs(mb,{children:[f!=null&&f.foto?p.jsx(ub,{src:f.foto,alt:f.nome||"Usuário"}):p.jsx(J1,{size:40}),p.jsx(gb,{})]}),p.jsx(cb,{children:p.jsx(db,{children:(f==null?void 0:f.nome)||(f==null?void 0:f.username)||"Usuário"})})]}),p.jsx(Xn,{children:l&&p.jsxs(p.Fragment,{children:[p.jsx(yb,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},onClick:()=>u(!1)}),p.jsxs(fb,{initial:{opacity:0,y:-20,scale:.9,rotateX:-15,filter:"blur(10px)"},animate:{opacity:1,y:0,scale:1,rotateX:0,filter:"blur(0px)"},exit:{opacity:0,y:-15,scale:.95,rotateX:-10,filter:"blur(8px)"},transition:{duration:.4,ease:[.25,.46,.45,.94],filter:{duration:.3}},children:[p.jsx(vb,{}),p.jsx(pb,{children:p.jsx(xb,{children:p.jsxs(R.span,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.1},children:["Olá, ",(f==null?void 0:f.nome)||(f==null?void 0:f.username)||"Usuário","!"]})})}),p.jsx(hb,{}),p.jsxs(wb,{children:[p.jsxs(Sb,{as:wa,to:"/perfil",whileHover:{backgroundColor:"rgba(227, 6, 19, 0.15)",x:5,scale:1.02},whileTap:{scale:.98},transition:{duration:.2},onClick:()=>u(!1),children:[p.jsx(R.div,{whileHover:{rotate:15},transition:{duration:.2},children:p.jsx(p3,{})}),p.jsx("span",{children:"Ver perfil"}),p.jsx(ny,{children:"→"})]}),p.jsxs(kb,{onClick:h,whileHover:{backgroundColor:"rgba(220, 38, 38, 0.15)",x:5,scale:1.02},whileTap:{scale:.98},transition:{duration:.2},children:[p.jsx(R.div,{whileHover:{rotate:15},transition:{duration:.2},children:p.jsx(a3,{})}),p.jsx("span",{children:"Sair"}),p.jsx(ty,{children:"→"})]})]})]})]})})]}):p.jsxs(ib,{children:[p.jsx(ob,{onClick:()=>o(!0),children:"Login"}),p.jsx(sb,{onClick:()=>a(!0),children:"Cadastro"})]}),p.jsx(rb,{onClick:g,whileHover:{scale:1.1},whileTap:{scale:.95},$isDarkMode:n,children:p.jsx("div",{className:"icon-container",children:p.jsx(Xn,{mode:"wait",children:p.jsx(R.div,{className:"icon-wrapper",initial:{opacity:0,scale:.3,y:10,filter:"blur(4px)"},animate:{opacity:1,scale:1,y:0,filter:"blur(0px)"},exit:{opacity:0,scale:.3,y:-10,filter:"blur(4px)"},transition:{duration:.6,ease:[.25,.46,.45,.94],opacity:{duration:.4},scale:{duration:.5,ease:"backOut"},filter:{duration:.3}},children:n?p.jsx(l3,{className:"theme-icon moon"}):p.jsx(c3,{className:"theme-icon sun"})},n?"moon":"sun")})})})]}),p.jsx(b3,{estaAberto:i,aoFechar:()=>o(!1),aoTrocarParaCadastro:w}),p.jsx(jd,{isOpen:s,onClose:()=>a(!1),onSwitchToLogin:k})]})},Z3=C.header`
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
`,q3=C.div`
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

`,J3=C.nav`
  @media (max-width: 1024px) {
    display: none;
  }
`,eb=C.ul`
  display: flex;
  gap: 3.2rem;
`,tb=C.li``,nb=C(wa)`
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
`,rb=C(R.button)`
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
`,ib=C.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`,ey=C.button`
  height: 5rem;
  padding: 0 3rem;
  border-radius: 2.5rem;
  font-size: 1.6rem;
  font-weight: 700;
  transition: all 0.2s ease;
`,ob=C(ey)`
  background: transparent;
  color: var(--white);
  border: 1px solid var(--primary);
  
  &:hover {
    background: rgba(255, 0, 0, 0.12);
  }
`,sb=C(ey)`
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
`,ab=C.div`
  position: relative;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`,lb=C(R.button)`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 0.8rem 1.6rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`,ub=C.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.2);
`,cb=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,db=C.span`
  color: var(--white);
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.2;
`,fb=C(R.div)`
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
`,pb=C.div`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 0.5rem;
  
  span {
    color: var(--white);
    font-size: 1.4rem;
    font-weight: 600;
  }
`,hb=C.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 0.5rem 0;
`,mb=C.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,gb=C.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background: linear-gradient(135deg, #E30613, #FF4655);
  opacity: 0.3;
  filter: blur(8px);
  z-index: -1;
  animation: pulse 2s ease-in-out infinite alternate;
  
  @keyframes pulse {
    0% { transform: scale(0.95); opacity: 0.2; }
    100% { transform: scale(1.05); opacity: 0.4; }
  }
`,yb=C(R.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
  z-index: 999;
`,vb=C.div`
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
`,xb=C.div`
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
`,wb=C.div`
  padding: 0.5rem 0;
`,ty=C.span`
  margin-left: auto;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.2s ease;
  font-size: 1.2rem;
`,ny=C.span`
  margin-left: auto;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.2s ease;
  font-size: 1.2rem;
`,Sb=C(R.button)`
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
    
    ${ny} {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  svg {
    font-size: 1.6rem;
  }
`,kb=C(R.button)`
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
    
    ${ty} {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  svg {
    font-size: 1.6rem;
  }
`,Cb=()=>{const[e,t]=x.useState(()=>new URLSearchParams(window.location.search).get("grid")==="1");return x.useEffect(()=>{const n=r=>{r.key&&r.key.toLowerCase()==="g"&&t(i=>!i)};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[]),e?p.jsx(bb,{role:"presentation","aria-hidden":!0,children:p.jsx("div",{className:"container",children:p.jsx(Eb,{children:Array.from({length:12}).map((n,r)=>p.jsx(Pb,{},r))})})}):null},bb=C.div`
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
`,Eb=C.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: var(--gutter);
`,Pb=C.div`
  background: rgba(255, 0, 0, 0.08);
  height: 100%;
`,Tb=({onOpenSignup:e})=>{const t=Zu.floatingCards,n={progress:f3,users:h3,workouts:r3,ai:m3},r={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15}}},i={hidden:{y:30,opacity:0,scale:.8},visible:{y:0,opacity:1,scale:1,transition:{duration:.8,ease:[.25,.46,.45,.94]}}};return p.jsx(jb,{children:p.jsx("div",{className:"container",children:p.jsxs(Ab,{children:[p.jsx(Rb,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.9,ease:"easeOut"},children:p.jsxs("h1",{children:[p.jsxs("span",{className:"line no-wrap",children:["O SEU ",p.jsx("span",{className:"highlight",children:"PARCEIRO"})," DA ACADEMIA"]}),p.jsx("br",{className:"title-break"}),p.jsx("span",{className:"line no-wrap",children:"PRONTO PARA A AÇÃO"})]})}),p.jsxs(Lb,{as:R.div,initial:{opacity:0,x:40},animate:{opacity:1,x:0},transition:{duration:1.2,ease:"easeOut"},children:[p.jsx("img",{src:Zu.heroSrc,alt:"Homem musculoso",className:"hero-image",onError:o=>{const s=o.currentTarget;s.src.endsWith("/hero-image.png")||(s.src="/hero-image.png")}}),p.jsx(Mb,{variants:r,initial:"hidden",animate:"visible",children:t.map((o,s)=>{const a=n[o.id];return p.jsx(Db,{className:o.position,style:{"--rot":`${o.rotate||0}deg`,"--dur":`${6+s%5*.3}s`,zIndex:o.zIndex},variants:i,whileHover:{scale:1.08,rotate:0,transition:{duration:.3,ease:"easeOut"}},whileTap:{scale:.95},children:p.jsxs(zb,{children:[p.jsxs("div",{className:"card-header",children:[p.jsx("div",{className:"card-icon",children:p.jsx(a,{})}),p.jsx("span",{className:"category",children:o.category})]}),p.jsxs("div",{className:"card-main",children:[p.jsx("div",{className:"card-stat",children:o.stat}),p.jsx("h3",{className:"card-title",children:o.title})]}),p.jsx("div",{className:"card-footer",children:p.jsxs("div",{className:"card-indicators",children:[p.jsx(d3,{className:"indicator-icon"}),p.jsx(i3,{className:"indicator-icon"})]})})]})},o.id)})})]}),p.jsxs(Vb,{initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},transition:{duration:.5,delay:.5},onClick:e,children:[p.jsx("span",{className:"label",children:"Vamos começar"}),p.jsxs("span",{className:"arrows","aria-hidden":"true",children:[p.jsx(Tl,{className:"a1"}),p.jsx(Tl,{className:"a2"}),p.jsx(Tl,{className:"a3"})]})]})]})})})},jb=C.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 12rem 0 6rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%);
`,Ab=C.div`
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
`,Rb=C(R.div)`
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
`,Lb=C.div`
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
`,Mb=C(R.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
`,Db=C(R.div)`
  position: absolute;
  animation: card-bob var(--dur, 6s) ease-in-out infinite;
  will-change: transform;
  cursor: pointer;

  /* Liquid Glass Design */
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.1) 0%, 
    rgba(255, 255, 255, 0.05) 50%,
    rgba(227, 6, 19, 0.1) 100%
  );
  backdrop-filter: blur(25px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 1.6rem;
  padding: 1.6rem 1.4rem;
  min-width: 16rem;
  min-height: 18rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--white);
  text-align: left;
  pointer-events: auto;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
    padding: 1.2rem 1rem;
    font-size: 1.1rem;
    min-width: 14rem;
    min-height: 16rem;
    
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
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.15) 0%, 
      rgba(255, 255, 255, 0.08) 50%,
      rgba(227, 6, 19, 0.15) 100%
    );
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.3),
      inset 0 -1px 0 rgba(0,0,0,0.1),
      0 16px 48px rgba(0,0,0,0.2),
      0 8px 24px rgba(227, 6, 19, 0.2);
    
    &::before {
      left: 100%;
    }
  }
`,zb=C(R.div)`
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
    width: 3rem;
    height: 3rem;
    border-radius: 0.8rem;
    background: linear-gradient(135deg, 
      rgba(227, 6, 19, 0.2) 0%, 
      rgba(227, 6, 19, 0.1) 100%
    );
    border: 1px solid rgba(227, 6, 19, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(227, 6, 19, 0.9);
    font-size: 1.4rem;
    transition: all 0.3s ease;
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
    font-size: 3.2rem;
    font-weight: 900;
    color: var(--white);
    line-height: 0.9;
    text-shadow: 0 2px 8px rgba(0,0,0,0.3);
    margin-bottom: 0.8rem;
    background: linear-gradient(135deg, #ffffff 0%, rgba(227, 6, 19, 0.8) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .card-title {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 0.5rem;
    line-height: 1.3;
    text-shadow: 0 1px 4px rgba(0,0,0,0.3);
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
  
  /* Hover effect for card icon */
  &:hover .card-icon {
    background: linear-gradient(135deg, 
      rgba(227, 6, 19, 0.3) 0%, 
      rgba(227, 6, 19, 0.2) 100%
    );
    border-color: rgba(227, 6, 19, 0.5);
    color: rgba(227, 6, 19, 1);
    transform: scale(1.1) rotate(5deg);
  }
`,Vb=C(R.button)`
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
`,Nb=()=>{const[e,t]=x.useState(!1),n=()=>{t(!0)},r=()=>{t(!1)};return p.jsxs(p.Fragment,{children:[p.jsx(R.main,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:p.jsx(Tb,{onOpenSignup:n})}),p.jsx(jd,{isOpen:e,onClose:r,onSwitchToLogin:()=>{}})]})},Fb=()=>{const e=x.useRef(null),[t,n]=x.useState(!1),[r,i]=x.useState({x:0,y:0});YC();const{scrollYProgress:o}=K1({target:e,offset:["start end","end start"]}),s=Ct(o,[0,1],[100,-100]),a=Ct(o,[0,1],[-5,5]),l=Ct(o,[0,.5,1],[.8,1.1,.8]);Ct(o,[0,1],[0,-50]),x.useEffect(()=>{const f=y=>{i({x:(y.clientX/window.innerWidth-.5)*20,y:(y.clientY/window.innerHeight-.5)*20})};return window.addEventListener("mousemove",f),()=>window.removeEventListener("mousemove",f)},[]);const u=()=>{n(!1)},c=[{icon:La,text:"Mais do que um site, um verdadeiro parceiro de treino.",gradient:"linear-gradient(135deg, #E30613 0%, #ff4757 100%)"},{icon:JC,text:"Nada de planos genéricos, tenha uma experiência personalizada.",gradient:"linear-gradient(135deg, #ff6348 0%, #E30613 100%)"},{icon:t3,text:"Com a ajuda de nosso agente IA, nada é impossível.",gradient:"linear-gradient(135deg, #E30613 0%, #ff7979 100%)"},{icon:e3,text:"Treinar não precisa ser difícil. Seja bem-vindo ao Gym Buddy!",gradient:"linear-gradient(135deg, #ff4757 0%, #E30613 100%)"}],d={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut"}}};return p.jsxs(Ib,{ref:e,children:[p.jsxs(Ob,{children:[p.jsx(gE,{}),p.jsxs(R.div,{variants:d,initial:"hidden",animate:"visible",children:[p.jsxs($b,{children:[p.jsx(R.span,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:"Podemos ajudar você a"})," ",p.jsx(_b,{children:p.jsx(R.span,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.3,ease:"easeOut"},children:"cumprir todas as suas metas"})})]}),p.jsx(R.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.6,duration:.8},children:p.jsx(Bb,{children:"Faça parte desse projeto hoje mesmo!"})})]})]}),p.jsx(Ub,{children:p.jsx(Hb,{children:p.jsxs(Wb,{initial:{opacity:0,y:100},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,ease:"easeOut"},children:[p.jsx(Gb,{style:{y:s,rotate:a,scale:l},children:p.jsx("img",{src:"/images/muscular-man.png",alt:"Homem musculoso treinando"})}),p.jsxs(Yb,{children:[p.jsxs(Kb,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6,delay:.2},children:[p.jsx(Xb,{children:"SOBRE NÓS"}),p.jsx(Qb,{children:"Transforme seu corpo e mente"})]}),p.jsx(Zb,{children:c.map((f,y)=>{const v=f.icon;return p.jsx(R.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6,delay:.3+y*.1,ease:"easeOut"},whileHover:{x:10,scale:1.02},children:p.jsxs(Da,{whileHover:{boxShadow:"0 20px 40px rgba(227, 6, 19, 0.2)"},children:[p.jsxs(qb,{gradient:f.gradient,children:[p.jsx(R.div,{animate:{rotate:[0,5,-5,0]},transition:{duration:4,repeat:1/0,delay:y*.5},children:p.jsx(v,{})}),p.jsx(Jb,{}),p.jsx(tE,{})]}),p.jsxs(nE,{children:[p.jsx(rE,{children:f.text}),p.jsx(iE,{gradient:f.gradient})]})]})},y)})}),p.jsx(wh,{className:"float-1",animate:{y:[-20,20,-20],x:[-10,10,-10]},transition:{duration:6,repeat:1/0,ease:"easeInOut"}}),p.jsx(wh,{className:"float-2",animate:{y:[20,-20,20],x:[10,-10,10]},transition:{duration:8,repeat:1/0,ease:"easeInOut"}})]})]})})}),p.jsx(oE,{children:p.jsx(R.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.6,delay:1},children:p.jsxs(sE,{children:["Torne-se já um membro! Acesse ou crie sua conta na"," ",p.jsxs(aE,{onClick:()=>n(!0),whileHover:{scale:1.05},whileTap:{scale:.95},children:["GymBuddy",p.jsx(uE,{})]})]})})}),p.jsx(jd,{isOpen:t,onClose:()=>n(!1),onSwitchToLogin:u}),p.jsxs(dE,{children:[p.jsx(pE,{}),p.jsx(hE,{style:{x:r.x,y:r.y}})]})]})},Ib=C.div`
  min-height: 100vh;
  background: var(--background);
  color: var(--white);
  padding-top: 8rem;
  position: relative;
  overflow: hidden;
`,Ob=C.section`
  text-align: center;
  padding: 4rem 2rem 6rem;
  max-width: 120rem;
  margin: 0 auto;
  position: relative;
`,$b=C.h1`
  font-size: clamp(3rem, 5vw, 5.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 2rem;
  color: var(--white);
  letter-spacing: -0.02em;
`,_b=C.span`
  background: linear-gradient(135deg, #E30613 0%, #ff4757 50%, #ff6348 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
`,Bb=C.p`
  font-size: clamp(1.6rem, 2.5vw, 2rem);
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  max-width: 60rem;
  margin: 0 auto;
`,Ub=C.section`
  padding: 6rem 2rem;
  position: relative;
  z-index: 1;
`,Hb=C.div`
  max-width: 120rem;
  margin: 0 auto;
`,Wb=C(R.div)`
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
`,Gb=C(R.div)`
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
`,Yb=C.div`
  position: relative;
  z-index: 1;
  padding: 5rem;

  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
`,Kb=C(R.div)`
  margin-bottom: 4rem;
`,Xb=C.div`
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
`,Qb=C.h2`
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 800;
  color: var(--white);
  line-height: 1.2;
  margin: 0;
`,Zb=C.div`
  display: grid;
  gap: 2.5rem;
  max-width: 60rem;
`,Da=C(R.div)`
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
`,qb=C.div`
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

  ${Da}:hover & {
    transform: rotate(5deg) scale(1.1);
  }
`,Jb=C.div`
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

  ${Da}:hover & {
    opacity: 1;
  }
`,eE=Yt`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
`,tE=C.div`
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
    animation: ${eE} 3s ease-out infinite;
  }
`,nE=C.div`
  flex: 1;
`,rE=C.p`
  font-size: 1.7rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
  margin: 0;
`,iE=C.div`
  width: 0;
  height: 2px;
  background: ${e=>e.gradient};
  margin-top: 1rem;
  transition: width 0.3s ease;
  border-radius: 1px;

  ${Da}:hover & {
    width: 100%;
  }
`,wh=C(R.div)`
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
`,oE=C.section`
  text-align: center;
  padding: 6rem 2rem 8rem;
  max-width: 80rem;
  margin: 0 auto;
`,sE=C.h2`
  font-size: clamp(2.4rem, 4vw, 3.6rem);
  font-weight: 700;
  line-height: 1.3;
  color: var(--white);
  margin: 0;
`,aE=C(R.span)`
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
`,lE=Yt`
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
`,uE=C.div`
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
    animation: ${lE} 3s ease-in-out infinite;
    box-shadow: 0 0 6px var(--primary);
  }
  
  &::after {
    animation-delay: 1.5s;
    left: 8px;
    top: 8px;
  }
`,cE=Yt`
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(-30px) translateX(20px);
  }
  66% {
    transform: translateY(30px) translateX(-20px);
  }
`,dE=C.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`,fE=Yt`
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
`,pE=C.div`
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
    animation: ${fE} 20s linear infinite;
  }
  
  &::before {
    left: 10%;
    animation-delay: 0s;
  }
  
  &::after {
    left: 70%;
    animation-delay: 10s;
  }
`,hE=C(R.div)`
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
  animation: ${cE} 30s ease-in-out infinite;
`,mE=Yt`
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
`,gE=C.div`
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
    animation: ${mE} 8s ease-out infinite;
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
`;function yE(e){return K({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"}}]})(e)}const vE=()=>{const e=x.useRef(null),[t,n]=x.useState(null),r=Yu(0),i=Yu(0),{scrollYProgress:o}=K1({target:e,offset:["start end","end start"]}),s=Ct(o,[0,1],[0,-100]),a=Ct(o,[0,1],[100,-50]),l=(g,h)=>{const m=g.currentTarget.getBoundingClientRect(),S=(g.clientX-m.left)/m.width,E=(g.clientY-m.top)/m.height;r.set(S),i.set(E)},u=Ct(i,[0,1],[15,-15]),c=Ct(r,[0,1],[-15,15]),d=Ct(r,[0,1],[15,-15]),f=Ct(i,[0,1],[15,-15]),y=[{id:1,title:"CENTRAL DE APOIO PRA INICIANTES",description:"Nosso app é completamente amigável com pessoas inexperientes na academia, fazendo com que o app seja uma abertura de portas à uma comunidade segura para todos.",additionalText:"Queremos fornecer a melhor experiência possível!",icon:n3,gradient:"linear-gradient(135deg, #E30613 0%, #B91C1C 100%)"},{id:2,title:"INTELIGÊNCIA ARTIFICIAL INTEGRADA",description:"No nosso aplicativo, uma inteligência artificial já treinada pra ajudar as pessoas a montarem seus treinos é contar melhor suas calorias está inclusa! Isso fortalece uma praticidade na criação de treinos para pessoas iniciantes, sem ser preciso mais treinos genéricos.",icon:yE,gradient:"linear-gradient(135deg, #DC2626 0%, #991B1B 100%)"},{id:3,title:"CONTROLE COMPLETO DE TREINOS",description:"E por fim, no nosso app, é possível consultar desde à execução dos exercícios até quantas repetições você deverá fazer baseado no SEU objetivo, com tudo relacionado à montagem do treino se adaptando à sua necessidade, seja ela qual for!",icon:qC,gradient:"linear-gradient(135deg, #B91C1C 0%, #7F1D1D 100%)"}],v={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3,delayChildren:.2}}},w={hidden:{opacity:0,y:100,scale:.8,rotateX:45},visible:{opacity:1,y:0,scale:1,rotateX:0,transition:{duration:.8,ease:[.25,.46,.45,.94]}}},k={hidden:{opacity:0,y:-50},visible:{opacity:1,y:0,transition:{duration:1,ease:"easeOut"}}};return p.jsxs(Sh,{ref:e,children:[p.jsxs(xE,{style:{y:s},children:[p.jsx(SE,{}),p.jsx(CE,{})]}),p.jsx(bE,{children:p.jsx(R.div,{variants:k,initial:"hidden",animate:"visible",children:p.jsxs(EE,{children:[p.jsx(R.span,{initial:{opacity:0,x:-100},animate:{opacity:1,x:0},transition:{duration:.8,ease:"easeOut"},children:"NOSSOS"})," ",p.jsx(PE,{children:p.jsx(R.span,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{duration:.8,delay:.2,ease:"easeOut"},children:"RECURSOS"})})]})})}),p.jsx(TE,{children:p.jsx(Sh,{children:p.jsx(jE,{variants:v,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},style:{y:a},children:y.map((g,h)=>{const m=g.icon;return p.jsx(AE,{variants:w,onMouseMove:S=>l(S,g.id),onMouseEnter:()=>n(g.id),onMouseLeave:()=>{n(null),r.set(.5),i.set(.5)},whileTap:{scale:.95},style:{rotateX:t===g.id?u:0,rotateY:t===g.id?c:0,transformStyle:"preserve-3d"},transition:{type:"spring",stiffness:400,damping:30},children:p.jsxs(za,{gradient:g.gradient,style:{transform:t===g.id?"translateZ(50px)":"translateZ(0px)",boxShadow:t===g.id?`${d.get()}px ${f.get()}px 40px rgba(227, 6, 19, 0.5)`:"0 20px 40px rgba(0, 0, 0, 0.3)",transition:"all 0.3s ease"},children:[p.jsx(RE,{}),p.jsx(LE,{style:{background:`radial-gradient(
                          600px circle at ${r.get()*100}% ${i.get()*100}%,
                          rgba(255, 255, 255, 0.15),
                          transparent 40%
                        )`,opacity:t===g.id?1:0}}),p.jsxs(ME,{children:[p.jsxs(DE,{children:[p.jsx(R.div,{animate:{rotate:[0,10,-10,0],scale:[1,1.1,1]},transition:{duration:4,repeat:1/0,delay:h*.5},children:p.jsx(m,{})}),p.jsx(VE,{})]}),p.jsx(NE,{children:g.title}),p.jsx(FE,{children:g.description}),g.additionalText&&p.jsx(IE,{children:g.additionalText}),p.jsx(OE,{children:p.jsxs(R.div,{className:"card-number",initial:{opacity:0},whileInView:{opacity:1},transition:{delay:.5},children:["0",g.id]})})]}),p.jsx($E,{}),p.jsx(BE,{className:`particles-${g.id}`})]})},g.id)})})})})]})},Sh=C.div`
  min-height: 100vh;
  background: var(--background);
  color: var(--white);
  padding-top: 8rem;
  position: relative;
  overflow: hidden;
`,xE=C(R.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`,wE=Yt`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
`,SE=C.div`
  position: absolute;
  width: 120%;
  height: 120%;
  background-image: 
    linear-gradient(rgba(227, 6, 19, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(227, 6, 19, 0.05) 1px, transparent 1px);
  background-size: 100px 100px;
  animation: ${wE} 20s linear infinite;
`,kE=Yt`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
`,CE=C.div`
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
    animation: ${kE} 15s ease-in-out infinite;
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
`,bE=C.section`
  text-align: center;
  padding: 6rem 2rem 8rem;
  position: relative;
  z-index: 1;
`,EE=C.h1`
  font-size: clamp(4rem, 8vw, 8rem);
  font-weight: 900;
  line-height: 1;
  margin: 0;
  color: var(--white);
  letter-spacing: -0.02em;
  text-transform: uppercase;
`,PE=C.span`
  background: linear-gradient(135deg, #E30613 0%, #ff4757 50%, #ff6348 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
`,TE=C.section`
  padding: 0 2rem 8rem;
  position: relative;
  z-index: 1;
`,jE=C(R.div)`
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
`,AE=C(R.div)`
  perspective: 1000px;
  transform-style: preserve-3d;
  will-change: transform;
`,za=C.div`
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
`,RE=C.div`
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
  
  ${za}:hover & {
    opacity: 1;
  }
`,LE=C.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 1;
`,ME=C.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
`,DE=C.div`
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
`,zE=Yt`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`,VE=C.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: inherit;
  animation: ${zE} 3s ease-out infinite;
`,NE=C.h2`
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--white);
  margin-bottom: 2rem;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,FE=C.p`
  font-size: 1.6rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  flex-grow: 1;
`,IE=C.p`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 2rem;
  text-align: center;
  font-style: italic;
`,OE=C.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  .card-number {
    font-size: 4rem;
    font-weight: 900;
    color: rgba(255, 255, 255, 0.2);
    line-height: 1;
  }
`,$E=C.div`
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
  
  ${za}:hover & {
    opacity: 1;
  }
`,_E=Yt`
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
`,BE=C.div`
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
    animation: ${_E} 6s ease-out infinite;
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
  
  ${za}:hover & {
    &::before,
    &::after {
      animation-play-state: running;
    }
  }
`,UE=()=>p.jsx(HE,{children:p.jsx(WE,{children:p.jsxs(R.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:[p.jsxs(GE,{children:["Baixe o ",p.jsx("span",{className:"highlight",children:"GYM BUDDY"})]}),p.jsx(YE,{children:"Tenha seu personal trainer no bolso. Disponível para iOS e Android."}),p.jsxs(KE,{children:[p.jsx(R.div,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.6,delay:.3},children:p.jsxs(kh,{href:"#",className:"google-play",whileHover:{scale:1.05,y:-2},whileTap:{scale:.98},children:[p.jsx(ZC,{className:"icon"}),p.jsxs("div",{className:"text",children:[p.jsx("span",{className:"small",children:"ANDROID APP ON"}),p.jsx("span",{className:"large",children:"Google Play"})]})]})}),p.jsx(R.div,{initial:{opacity:0,x:30},animate:{opacity:1,x:0},transition:{duration:.6,delay:.4},children:p.jsxs(kh,{href:"#",className:"app-store",whileHover:{scale:1.05,y:-2},whileTap:{scale:.98},children:[p.jsx(QC,{className:"icon"}),p.jsxs("div",{className:"text",children:[p.jsx("span",{className:"small",children:"Download on the"}),p.jsx("span",{className:"large",children:"App Store"})]})]})})]})]})})}),HE=C.div`
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
`,WE=C.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2.4rem;
  text-align: center;
`,GE=C.h1`
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
`,YE=C.p`
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
`,KE=C.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`,kh=C(R.a)`
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
`,XE=()=>{var w;const{user:e,isLoggedIn:t,updateUser:n}=Ma(),r=vg(),[i,o]=x.useState(!1),[s,a]=x.useState({nome:(e==null?void 0:e.nome)||"",email:(e==null?void 0:e.email)||"",descricao:(e==null?void 0:e.descricao)||"",peso:(e==null?void 0:e.peso)||"",altura:(e==null?void 0:e.altura)||""}),[l,u]=x.useState([]);x.useEffect(()=>{t||r("/")},[t,r]),x.useEffect(()=>{e&&a({nome:e.nome||"",email:e.email||"",descricao:e.descricao||"Descrição do usuário",peso:e.peso||"75",altura:e.altura||"165"})},[e]);const c=()=>{o(!0)},d=()=>{n(s),o(!1)},f=()=>{a({nome:(e==null?void 0:e.nome)||"",email:(e==null?void 0:e.email)||"",descricao:(e==null?void 0:e.descricao)||"",peso:(e==null?void 0:e.peso)||"",altura:(e==null?void 0:e.altura)||""}),o(!1)},y=k=>{var h;const g=(h=k.target.files)==null?void 0:h[0];if(g){const m=new FileReader;m.onloadend=()=>{const S=m.result;u([...l,S])},m.readAsDataURL(g)}},v=k=>{var h;const g=(h=k.target.files)==null?void 0:h[0];if(g&&e){const m=new FileReader;m.onloadend=()=>{const S=m.result;n({...e,foto:S})},m.readAsDataURL(g)}};return e?p.jsx(QE,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:p.jsxs(ZE,{children:[p.jsxs(qE,{children:[p.jsx(JE,{children:p.jsxs(e6,{children:[e.foto?p.jsx(t6,{src:e.foto,alt:e.nome}):p.jsx(n6,{children:p.jsx(J1,{size:180})}),p.jsxs(r6,{children:[p.jsx("input",{type:"file",id:"avatar-upload",accept:"image/*",onChange:v,style:{display:"none"}}),p.jsx("label",{htmlFor:"avatar-upload",children:p.jsx(i6,{whileHover:{scale:1.1},whileTap:{scale:.95},children:p.jsx(o3,{})})})]})]})}),p.jsx(o6,{children:i?p.jsxs(l6,{children:[p.jsx(Bo,{type:"text",value:s.nome,onChange:k=>a({...s,nome:k.target.value}),placeholder:"Nome"}),p.jsx(Bo,{type:"email",value:s.email,onChange:k=>a({...s,email:k.target.value}),placeholder:"Email"})]}):p.jsxs(p.Fragment,{children:[p.jsx(s6,{children:e.nome||"Usuário"}),p.jsxs(a6,{children:["@",((w=e.email)==null?void 0:w.split("@")[0])||"email"]})]})}),p.jsx(u6,{children:i?p.jsxs(d6,{children:[p.jsxs(jl,{children:[p.jsx(Al,{children:"Descrição:"}),p.jsx(f6,{value:s.descricao,onChange:k=>a({...s,descricao:k.target.value}),placeholder:"Descrição do usuário"})]}),p.jsxs(Ch,{children:[p.jsxs(jl,{children:[p.jsx(Al,{children:"Peso:"}),p.jsx(Bo,{type:"text",value:s.peso,onChange:k=>a({...s,peso:k.target.value}),placeholder:"75"}),p.jsx(_o,{children:"kg"})]}),p.jsxs(jl,{children:[p.jsx(Al,{children:"Altura:"}),p.jsx(Bo,{type:"text",value:s.altura,onChange:k=>a({...s,altura:k.target.value}),placeholder:"165"}),p.jsx(_o,{children:"cm"})]})]})]}):p.jsxs(p.Fragment,{children:[p.jsx(c6,{children:e.descricao||"Descrição do usuário"}),p.jsxs(Ch,{children:[p.jsxs(bh,{children:[p.jsx(Eh,{children:e.peso||"75"}),p.jsx(_o,{children:"kg"})]}),p.jsxs(bh,{children:[p.jsx(Eh,{children:e.altura||"165"}),p.jsx(_o,{children:"cm"})]})]})]})}),p.jsx(p6,{children:i?p.jsxs(p.Fragment,{children:[p.jsxs(h6,{onClick:d,whileHover:{scale:1.05},whileTap:{scale:.95},children:[p.jsx(Z1,{})," Salvar"]}),p.jsxs(m6,{onClick:f,whileHover:{scale:1.05},whileTap:{scale:.95},children:[p.jsx(Ar,{})," Cancelar"]})]}):p.jsxs(Ad,{onClick:c,whileHover:{scale:1.05},whileTap:{scale:.95},children:[p.jsx(s3,{})," Editar Perfil"]})})]}),p.jsxs(g6,{children:[p.jsx(y6,{children:"Fotos"}),p.jsxs(v6,{children:[p.jsx(Xn,{children:l.map((k,g)=>p.jsxs(ry,{layoutId:`photo-${g}`,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.05,zIndex:10},transition:{duration:.3},children:[p.jsx(x6,{src:k,alt:`Foto ${g+1}`}),p.jsx(w6,{children:p.jsx(S6,{onClick:()=>u(l.filter((h,m)=>m!==g)),whileHover:{scale:1.2},whileTap:{scale:.9},children:p.jsx(Ar,{})})})]},g))}),p.jsxs(k6,{children:[p.jsx("input",{type:"file",id:"photo-upload",accept:"image/*",onChange:y,style:{display:"none"}}),p.jsx("label",{htmlFor:"photo-upload",children:p.jsxs(C6,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[p.jsx(u3,{}),p.jsx("span",{children:"Adicionar Foto"})]})})]}),Array.from({length:Math.max(0,5-l.length)}).map((k,g)=>p.jsx(b6,{},`placeholder-${g}`))]})]})]})}):null},QE=C(R.div)`
  min-height: 100vh;
  background: #0A0A0A;
  padding-top: 10rem;
  padding-bottom: 4rem;
`,ZE=C.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
`,qE=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6rem;
`,JE=C.div`
  margin-bottom: 3rem;
`,e6=C.div`
  position: relative;
  width: 18rem;
  height: 18rem;
`,t6=C.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(227, 6, 19, 0.3);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
`,n6=C.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  border: 4px solid rgba(227, 6, 19, 0.3);
`,r6=C.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`,i6=C(R.div)`
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
`,o6=C.div`
  text-align: center;
  margin-bottom: 2rem;
`,s6=C.h1`
  font-size: 3rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 0.5rem;
`,a6=C.p`
  font-size: 1.6rem;
  color: var(--primary);
  font-weight: 500;
`,l6=C.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`,u6=C.div`
  text-align: center;
  margin-bottom: 3rem;
`,c6=C.p`
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  max-width: 60rem;
`,Ch=C.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 2rem;
`,bh=C.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
`,Eh=C.span`
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--white);
`,_o=C.span`
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.5);
`,d6=C.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`,jl=C.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,Al=C.label`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.7);
  min-width: 8rem;
  text-align: right;
`,Bo=C.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.8rem;
  padding: 1rem 1.5rem;
  font-size: 1.6rem;
  color: var(--white);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    background: rgba(255, 255, 255, 0.08);
  }
`,f6=C.textarea`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.8rem;
  padding: 1rem 1.5rem;
  font-size: 1.6rem;
  color: var(--white);
  transition: all 0.3s ease;
  min-width: 40rem;
  min-height: 8rem;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    background: rgba(255, 255, 255, 0.08);
  }
`,p6=C.div`
  display: flex;
  gap: 1.5rem;
`,Ad=C(R.button)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 3rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 2.5rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(227, 6, 19, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--primary-dark);
    box-shadow: 0 10px 30px rgba(227, 6, 19, 0.4);
  }
`,h6=C(Ad)`
  background: #10B981;
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);
  
  &:hover {
    background: #059669;
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
  }
`,m6=C(Ad)`
  background: rgba(255, 255, 255, 0.1);
  box-shadow: none;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`,g6=C.div`
  margin-top: 6rem;
`,y6=C.h2`
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 3rem;
  text-align: center;
`,v6=C.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 2rem;
  max-width: 100%;
`,ry=C(R.div)`
  position: relative;
  aspect-ratio: 1;
  border-radius: 1.2rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
`,x6=C.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,w6=C.div`
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
  
  ${ry}:hover & {
    opacity: 1;
  }
`,S6=C(R.button)`
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
`,k6=C.div`
  aspect-ratio: 1;
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 2px dashed rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--primary);
  }
`,C6=C(R.div)`
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
`,b6=C.div`
  aspect-ratio: 1;
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
`,fi={initial:{opacity:0,scale:.95,y:20,filter:"blur(10px)"},in:{opacity:1,scale:1,y:0,filter:"blur(0px)"},out:{opacity:0,scale:1.05,y:-20,filter:"blur(10px)"}},pi={type:"tween",ease:[.25,.46,.45,.94],duration:.6},E6=()=>{const e=Xt();return p.jsx(Xn,{mode:"wait",children:p.jsxs(bw,{location:e,children:[p.jsx(or,{path:"/",element:p.jsx(R.div,{initial:"initial",animate:"in",exit:"out",variants:fi,transition:pi,children:p.jsx(Nb,{})})}),p.jsx(or,{path:"/sobre",element:p.jsx(R.div,{initial:"initial",animate:"in",exit:"out",variants:fi,transition:pi,children:p.jsx(Fb,{})})}),p.jsx(or,{path:"/recursos",element:p.jsx(R.div,{initial:"initial",animate:"in",exit:"out",variants:fi,transition:pi,children:p.jsx(vE,{})})}),p.jsx(or,{path:"/app",element:p.jsx(R.div,{initial:"initial",animate:"in",exit:"out",variants:fi,transition:pi,children:p.jsx(UE,{})})}),p.jsx(or,{path:"/perfil",element:p.jsx(R.div,{initial:"initial",animate:"in",exit:"out",variants:fi,transition:pi,children:p.jsx(XE,{})})})]},e.pathname)})};function P6(){return p.jsx(C3,{children:p.jsxs(Kw,{children:[p.jsx(Q3,{}),p.jsx(Cb,{}),p.jsx(E6,{})]})})}Rl.createRoot(document.getElementById("root")).render(p.jsxs(ge.StrictMode,{children:[p.jsx(L2,{}),p.jsx(P6,{})]}));

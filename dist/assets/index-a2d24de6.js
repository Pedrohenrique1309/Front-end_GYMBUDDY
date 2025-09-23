(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function $1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mh={exports:{}},Ys={},gh={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qi=Symbol.for("react.element"),_1=Symbol.for("react.portal"),B1=Symbol.for("react.fragment"),U1=Symbol.for("react.strict_mode"),H1=Symbol.for("react.profiler"),W1=Symbol.for("react.provider"),Y1=Symbol.for("react.context"),G1=Symbol.for("react.forward_ref"),K1=Symbol.for("react.suspense"),X1=Symbol.for("react.memo"),Q1=Symbol.for("react.lazy"),kd=Symbol.iterator;function Z1(e){return e===null||typeof e!="object"?null:(e=kd&&e[kd]||e["@@iterator"],typeof e=="function"?e:null)}var yh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vh=Object.assign,xh={};function Or(e,t,n){this.props=e,this.context=t,this.refs=xh,this.updater=n||yh}Or.prototype.isReactComponent={};Or.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function wh(){}wh.prototype=Or.prototype;function Hu(e,t,n){this.props=e,this.context=t,this.refs=xh,this.updater=n||yh}var Wu=Hu.prototype=new wh;Wu.constructor=Hu;vh(Wu,Or.prototype);Wu.isPureReactComponent=!0;var Cd=Array.isArray,Sh=Object.prototype.hasOwnProperty,Yu={current:null},kh={key:!0,ref:!0,__self:!0,__source:!0};function Ch(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Sh.call(t,r)&&!kh.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:qi,type:e,key:o,ref:s,props:i,_owner:Yu.current}}function q1(e,t){return{$$typeof:qi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Gu(e){return typeof e=="object"&&e!==null&&e.$$typeof===qi}function J1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Pd=/\/+/g;function La(e,t){return typeof e=="object"&&e!==null&&e.key!=null?J1(""+e.key):t.toString(36)}function Io(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case qi:case _1:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+La(s,0):r,Cd(i)?(n="",e!=null&&(n=e.replace(Pd,"$&/")+"/"),Io(i,t,n,"",function(u){return u})):i!=null&&(Gu(i)&&(i=q1(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Pd,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Cd(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+La(o,a);s+=Io(o,t,n,l,i)}else if(l=Z1(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+La(o,a++),s+=Io(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function fo(e,t,n){if(e==null)return e;var r=[],i=0;return Io(e,r,"","",function(o){return t.call(n,o,i++)}),r}function ey(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},Oo={transition:null},ty={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:Oo,ReactCurrentOwner:Yu};function Ph(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:fo,forEach:function(e,t,n){fo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fo(e,function(){t++}),t},toArray:function(e){return fo(e,function(t){return t})||[]},only:function(e){if(!Gu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Or;O.Fragment=B1;O.Profiler=H1;O.PureComponent=Hu;O.StrictMode=U1;O.Suspense=K1;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ty;O.act=Ph;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vh({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Yu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Sh.call(t,l)&&!kh.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:qi,type:e.type,key:i,ref:o,props:r,_owner:s}};O.createContext=function(e){return e={$$typeof:Y1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:W1,_context:e},e.Consumer=e};O.createElement=Ch;O.createFactory=function(e){var t=Ch.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:G1,render:e}};O.isValidElement=Gu;O.lazy=function(e){return{$$typeof:Q1,_payload:{_status:-1,_result:e},_init:ey}};O.memo=function(e,t){return{$$typeof:X1,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Oo.transition;Oo.transition={};try{e()}finally{Oo.transition=t}};O.unstable_act=Ph;O.useCallback=function(e,t){return De.current.useCallback(e,t)};O.useContext=function(e){return De.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return De.current.useDeferredValue(e)};O.useEffect=function(e,t){return De.current.useEffect(e,t)};O.useId=function(){return De.current.useId()};O.useImperativeHandle=function(e,t,n){return De.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return De.current.useMemo(e,t)};O.useReducer=function(e,t,n){return De.current.useReducer(e,t,n)};O.useRef=function(e){return De.current.useRef(e)};O.useState=function(e){return De.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return De.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return De.current.useTransition()};O.version="18.3.1";gh.exports=O;var w=gh.exports;const he=$1(w);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny=w,ry=Symbol.for("react.element"),iy=Symbol.for("react.fragment"),oy=Object.prototype.hasOwnProperty,sy=ny.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ay={key:!0,ref:!0,__self:!0,__source:!0};function Eh(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)oy.call(t,r)&&!ay.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ry,type:e,key:o,ref:s,props:i,_owner:sy.current}}Ys.Fragment=iy;Ys.jsx=Eh;Ys.jsxs=Eh;mh.exports=Ys;var y=mh.exports,kl={},bh={exports:{}},Ge={},Th={exports:{}},Rh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,M){var F=L.length;L.push(M);e:for(;0<F;){var z=F-1>>>1,$=L[z];if(0<i($,M))L[z]=M,L[F]=$,F=z;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var M=L[0],F=L.pop();if(F!==M){L[0]=F;e:for(var z=0,$=L.length,xt=$>>>1;z<xt;){var ze=2*(z+1)-1,st=L[ze],fe=ze+1,Xe=L[fe];if(0>i(st,F))fe<$&&0>i(Xe,st)?(L[z]=Xe,L[fe]=F,z=fe):(L[z]=st,L[ze]=F,z=ze);else if(fe<$&&0>i(Xe,F))L[z]=Xe,L[fe]=F,z=fe;else break e}}return M}function i(L,M){var F=L.sortIndex-M.sortIndex;return F!==0?F:L.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,f=3,m=!1,v=!1,x=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(L){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=L)r(u),M.sortIndex=M.expirationTime,t(l,M);else break;M=n(u)}}function S(L){if(x=!1,p(L),!v)if(n(l)!==null)v=!0,Z(C);else{var M=n(u);M!==null&&Pe(S,M.startTime-L)}}function C(L,M){v=!1,x&&(x=!1,g(T),T=-1),m=!0;var F=f;try{for(p(M),d=n(l);d!==null&&(!(d.expirationTime>M)||L&&!Q());){var z=d.callback;if(typeof z=="function"){d.callback=null,f=d.priorityLevel;var $=z(d.expirationTime<=M);M=e.unstable_now(),typeof $=="function"?d.callback=$:d===n(l)&&r(l),p(M)}else r(l);d=n(l)}if(d!==null)var xt=!0;else{var ze=n(u);ze!==null&&Pe(S,ze.startTime-M),xt=!1}return xt}finally{d=null,f=F,m=!1}}var E=!1,P=null,T=-1,A=5,D=-1;function Q(){return!(e.unstable_now()-D<A)}function de(){if(P!==null){var L=e.unstable_now();D=L;var M=!0;try{M=P(!0,L)}finally{M?xe():(E=!1,P=null)}}else E=!1}var xe;if(typeof h=="function")xe=function(){h(de)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,vt=ae.port2;ae.port1.onmessage=de,xe=function(){vt.postMessage(null)}}else xe=function(){k(de,0)};function Z(L){P=L,E||(E=!0,xe())}function Pe(L,M){T=k(function(){L(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){v||m||(v=!0,Z(C))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(L){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var F=f;f=M;try{return L()}finally{f=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,M){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var F=f;f=L;try{return M()}finally{f=F}},e.unstable_scheduleCallback=function(L,M,F){var z=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?z+F:z):F=z,L){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=F+$,L={id:c++,callback:M,priorityLevel:L,startTime:F,expirationTime:$,sortIndex:-1},F>z?(L.sortIndex=F,t(u,L),n(l)===null&&L===n(u)&&(x?(g(T),T=-1):x=!0,Pe(S,F-z))):(L.sortIndex=$,t(l,L),v||m||(v=!0,Z(C))),L},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(L){var M=f;return function(){var F=f;f=M;try{return L.apply(this,arguments)}finally{f=F}}}})(Rh);Th.exports=Rh;var ly=Th.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uy=w,We=ly;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lh=new Set,Ai={};function Xn(e,t){Pr(e,t),Pr(e+"Capture",t)}function Pr(e,t){for(Ai[e]=t,e=0;e<t.length;e++)Lh.add(t[e])}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cl=Object.prototype.hasOwnProperty,cy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ed={},bd={};function dy(e){return Cl.call(bd,e)?!0:Cl.call(Ed,e)?!1:cy.test(e)?bd[e]=!0:(Ed[e]=!0,!1)}function fy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function py(e,t,n,r){if(t===null||typeof t>"u"||fy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ve(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ce[t]=new Ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ku=/[\-:]([a-z])/g;function Xu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ku,Xu);Ce[t]=new Ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ku,Xu);Ce[t]=new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ku,Xu);Ce[t]=new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qu(e,t,n,r){var i=Ce.hasOwnProperty(t)?Ce[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(py(t,n,i,r)&&(n=null),r||i===null?dy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Yt=uy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,po=Symbol.for("react.element"),tr=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),Zu=Symbol.for("react.strict_mode"),Pl=Symbol.for("react.profiler"),Ah=Symbol.for("react.provider"),jh=Symbol.for("react.context"),qu=Symbol.for("react.forward_ref"),El=Symbol.for("react.suspense"),bl=Symbol.for("react.suspense_list"),Ju=Symbol.for("react.memo"),tn=Symbol.for("react.lazy"),Mh=Symbol.for("react.offscreen"),Td=Symbol.iterator;function Gr(e){return e===null||typeof e!="object"?null:(e=Td&&e[Td]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,Aa;function ai(e){if(Aa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Aa=t&&t[1]||""}return`
`+Aa+e}var ja=!1;function Ma(e,t){if(!e||ja)return"";ja=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{ja=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ai(e):""}function hy(e){switch(e.tag){case 5:return ai(e.type);case 16:return ai("Lazy");case 13:return ai("Suspense");case 19:return ai("SuspenseList");case 0:case 2:case 15:return e=Ma(e.type,!1),e;case 11:return e=Ma(e.type.render,!1),e;case 1:return e=Ma(e.type,!0),e;default:return""}}function Tl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nr:return"Fragment";case tr:return"Portal";case Pl:return"Profiler";case Zu:return"StrictMode";case El:return"Suspense";case bl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case jh:return(e.displayName||"Context")+".Consumer";case Ah:return(e._context.displayName||"Context")+".Provider";case qu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ju:return t=e.displayName||null,t!==null?t:Tl(e.type)||"Memo";case tn:t=e._payload,e=e._init;try{return Tl(e(t))}catch{}}return null}function my(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tl(t);case 8:return t===Zu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Dh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gy(e){var t=Dh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ho(e){e._valueTracker||(e._valueTracker=gy(e))}function Vh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Dh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ls(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rl(e,t){var n=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Rd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Sn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zh(e,t){t=t.checked,t!=null&&Qu(e,"checked",t,!1)}function Ll(e,t){zh(e,t);var n=Sn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Al(e,t.type,n):t.hasOwnProperty("defaultValue")&&Al(e,t.type,Sn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ld(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Al(e,t,n){(t!=="number"||ls(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var li=Array.isArray;function vr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Sn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function jl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ad(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(li(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Sn(n)}}function Nh(e,t){var n=Sn(t.value),r=Sn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function jd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Fh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ml(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Fh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mo,Ih=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(mo=mo||document.createElement("div"),mo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=mo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ji(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yy=["Webkit","ms","Moz","O"];Object.keys(hi).forEach(function(e){yy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),hi[t]=hi[e]})});function Oh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||hi.hasOwnProperty(e)&&hi[e]?(""+t).trim():t+"px"}function $h(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Oh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var vy=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dl(e,t){if(t){if(vy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function Vl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zl=null;function ec(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nl=null,xr=null,wr=null;function Md(e){if(e=to(e)){if(typeof Nl!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Zs(t),Nl(e.stateNode,e.type,t))}}function _h(e){xr?wr?wr.push(e):wr=[e]:xr=e}function Bh(){if(xr){var e=xr,t=wr;if(wr=xr=null,Md(e),t)for(e=0;e<t.length;e++)Md(t[e])}}function Uh(e,t){return e(t)}function Hh(){}var Da=!1;function Wh(e,t,n){if(Da)return e(t,n);Da=!0;try{return Uh(e,t,n)}finally{Da=!1,(xr!==null||wr!==null)&&(Hh(),Bh())}}function Mi(e,t){var n=e.stateNode;if(n===null)return null;var r=Zs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var Fl=!1;if(_t)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){Fl=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{Fl=!1}function xy(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var mi=!1,us=null,cs=!1,Il=null,wy={onError:function(e){mi=!0,us=e}};function Sy(e,t,n,r,i,o,s,a,l){mi=!1,us=null,xy.apply(wy,arguments)}function ky(e,t,n,r,i,o,s,a,l){if(Sy.apply(this,arguments),mi){if(mi){var u=us;mi=!1,us=null}else throw Error(R(198));cs||(cs=!0,Il=u)}}function Qn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Dd(e){if(Qn(e)!==e)throw Error(R(188))}function Cy(e){var t=e.alternate;if(!t){if(t=Qn(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Dd(i),e;if(o===r)return Dd(i),t;o=o.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function Gh(e){return e=Cy(e),e!==null?Kh(e):null}function Kh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Kh(e);if(t!==null)return t;e=e.sibling}return null}var Xh=We.unstable_scheduleCallback,Vd=We.unstable_cancelCallback,Py=We.unstable_shouldYield,Ey=We.unstable_requestPaint,se=We.unstable_now,by=We.unstable_getCurrentPriorityLevel,tc=We.unstable_ImmediatePriority,Qh=We.unstable_UserBlockingPriority,ds=We.unstable_NormalPriority,Ty=We.unstable_LowPriority,Zh=We.unstable_IdlePriority,Gs=null,Et=null;function Ry(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Gs,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:jy,Ly=Math.log,Ay=Math.LN2;function jy(e){return e>>>=0,e===0?32:31-(Ly(e)/Ay|0)|0}var go=64,yo=4194304;function ui(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=ui(a):(o&=s,o!==0&&(r=ui(o)))}else s=n&~i,s!==0?r=ui(s):o!==0&&(r=ui(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),i=1<<n,r|=e[n],t&=~i;return r}function My(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-pt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=My(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Ol(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qh(){var e=go;return go<<=1,!(go&4194240)&&(go=64),e}function Va(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ji(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function Vy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-pt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function nc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function Jh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var em,rc,tm,nm,rm,$l=!1,vo=[],un=null,cn=null,dn=null,Di=new Map,Vi=new Map,on=[],zy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zd(e,t){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":Di.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vi.delete(t.pointerId)}}function Xr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=to(t),t!==null&&rc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ny(e,t,n,r,i){switch(t){case"focusin":return un=Xr(un,e,t,n,r,i),!0;case"dragenter":return cn=Xr(cn,e,t,n,r,i),!0;case"mouseover":return dn=Xr(dn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Di.set(o,Xr(Di.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Vi.set(o,Xr(Vi.get(o)||null,e,t,n,r,i)),!0}return!1}function im(e){var t=Nn(e.target);if(t!==null){var n=Qn(t);if(n!==null){if(t=n.tag,t===13){if(t=Yh(n),t!==null){e.blockedOn=t,rm(e.priority,function(){tm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $o(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_l(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);zl=r,n.target.dispatchEvent(r),zl=null}else return t=to(n),t!==null&&rc(t),e.blockedOn=n,!1;t.shift()}return!0}function Nd(e,t,n){$o(e)&&n.delete(t)}function Fy(){$l=!1,un!==null&&$o(un)&&(un=null),cn!==null&&$o(cn)&&(cn=null),dn!==null&&$o(dn)&&(dn=null),Di.forEach(Nd),Vi.forEach(Nd)}function Qr(e,t){e.blockedOn===t&&(e.blockedOn=null,$l||($l=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,Fy)))}function zi(e){function t(i){return Qr(i,e)}if(0<vo.length){Qr(vo[0],e);for(var n=1;n<vo.length;n++){var r=vo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(un!==null&&Qr(un,e),cn!==null&&Qr(cn,e),dn!==null&&Qr(dn,e),Di.forEach(t),Vi.forEach(t),n=0;n<on.length;n++)r=on[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<on.length&&(n=on[0],n.blockedOn===null);)im(n),n.blockedOn===null&&on.shift()}var Sr=Yt.ReactCurrentBatchConfig,ps=!0;function Iy(e,t,n,r){var i=H,o=Sr.transition;Sr.transition=null;try{H=1,ic(e,t,n,r)}finally{H=i,Sr.transition=o}}function Oy(e,t,n,r){var i=H,o=Sr.transition;Sr.transition=null;try{H=4,ic(e,t,n,r)}finally{H=i,Sr.transition=o}}function ic(e,t,n,r){if(ps){var i=_l(e,t,n,r);if(i===null)Ha(e,t,r,hs,n),zd(e,r);else if(Ny(i,e,t,n,r))r.stopPropagation();else if(zd(e,r),t&4&&-1<zy.indexOf(e)){for(;i!==null;){var o=to(i);if(o!==null&&em(o),o=_l(e,t,n,r),o===null&&Ha(e,t,r,hs,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ha(e,t,r,null,n)}}var hs=null;function _l(e,t,n,r){if(hs=null,e=ec(r),e=Nn(e),e!==null)if(t=Qn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Yh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return hs=e,null}function om(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(by()){case tc:return 1;case Qh:return 4;case ds:case Ty:return 16;case Zh:return 536870912;default:return 16}default:return 16}}var an=null,oc=null,_o=null;function sm(){if(_o)return _o;var e,t=oc,n=t.length,r,i="value"in an?an.value:an.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return _o=i.slice(e,1<r?1-r:void 0)}function Bo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xo(){return!0}function Fd(){return!1}function Ke(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xo:Fd,this.isPropagationStopped=Fd,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xo)},persist:function(){},isPersistent:xo}),t}var $r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sc=Ke($r),eo=ne({},$r,{view:0,detail:0}),$y=Ke(eo),za,Na,Zr,Ks=ne({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ac,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zr&&(Zr&&e.type==="mousemove"?(za=e.screenX-Zr.screenX,Na=e.screenY-Zr.screenY):Na=za=0,Zr=e),za)},movementY:function(e){return"movementY"in e?e.movementY:Na}}),Id=Ke(Ks),_y=ne({},Ks,{dataTransfer:0}),By=Ke(_y),Uy=ne({},eo,{relatedTarget:0}),Fa=Ke(Uy),Hy=ne({},$r,{animationName:0,elapsedTime:0,pseudoElement:0}),Wy=Ke(Hy),Yy=ne({},$r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gy=Ke(Yy),Ky=ne({},$r,{data:0}),Od=Ke(Ky),Xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zy[e])?!!t[e]:!1}function ac(){return qy}var Jy=ne({},eo,{key:function(e){if(e.key){var t=Xy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ac,charCode:function(e){return e.type==="keypress"?Bo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ev=Ke(Jy),tv=ne({},Ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$d=Ke(tv),nv=ne({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ac}),rv=Ke(nv),iv=ne({},$r,{propertyName:0,elapsedTime:0,pseudoElement:0}),ov=Ke(iv),sv=ne({},Ks,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),av=Ke(sv),lv=[9,13,27,32],lc=_t&&"CompositionEvent"in window,gi=null;_t&&"documentMode"in document&&(gi=document.documentMode);var uv=_t&&"TextEvent"in window&&!gi,am=_t&&(!lc||gi&&8<gi&&11>=gi),_d=String.fromCharCode(32),Bd=!1;function lm(e,t){switch(e){case"keyup":return lv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function um(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rr=!1;function cv(e,t){switch(e){case"compositionend":return um(t);case"keypress":return t.which!==32?null:(Bd=!0,_d);case"textInput":return e=t.data,e===_d&&Bd?null:e;default:return null}}function dv(e,t){if(rr)return e==="compositionend"||!lc&&lm(e,t)?(e=sm(),_o=oc=an=null,rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return am&&t.locale!=="ko"?null:t.data;default:return null}}var fv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ud(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fv[e.type]:t==="textarea"}function cm(e,t,n,r){_h(r),t=ms(t,"onChange"),0<t.length&&(n=new sc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var yi=null,Ni=null;function pv(e){Sm(e,0)}function Xs(e){var t=sr(e);if(Vh(t))return e}function hv(e,t){if(e==="change")return t}var dm=!1;if(_t){var Ia;if(_t){var Oa="oninput"in document;if(!Oa){var Hd=document.createElement("div");Hd.setAttribute("oninput","return;"),Oa=typeof Hd.oninput=="function"}Ia=Oa}else Ia=!1;dm=Ia&&(!document.documentMode||9<document.documentMode)}function Wd(){yi&&(yi.detachEvent("onpropertychange",fm),Ni=yi=null)}function fm(e){if(e.propertyName==="value"&&Xs(Ni)){var t=[];cm(t,Ni,e,ec(e)),Wh(pv,t)}}function mv(e,t,n){e==="focusin"?(Wd(),yi=t,Ni=n,yi.attachEvent("onpropertychange",fm)):e==="focusout"&&Wd()}function gv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xs(Ni)}function yv(e,t){if(e==="click")return Xs(t)}function vv(e,t){if(e==="input"||e==="change")return Xs(t)}function xv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:xv;function Fi(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Cl.call(t,i)||!gt(e[i],t[i]))return!1}return!0}function Yd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gd(e,t){var n=Yd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yd(n)}}function pm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?pm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hm(){for(var e=window,t=ls();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ls(e.document)}return t}function uc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wv(e){var t=hm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&pm(n.ownerDocument.documentElement,n)){if(r!==null&&uc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Gd(n,o);var s=Gd(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Sv=_t&&"documentMode"in document&&11>=document.documentMode,ir=null,Bl=null,vi=null,Ul=!1;function Kd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ul||ir==null||ir!==ls(r)||(r=ir,"selectionStart"in r&&uc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vi&&Fi(vi,r)||(vi=r,r=ms(Bl,"onSelect"),0<r.length&&(t=new sc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ir)))}function wo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var or={animationend:wo("Animation","AnimationEnd"),animationiteration:wo("Animation","AnimationIteration"),animationstart:wo("Animation","AnimationStart"),transitionend:wo("Transition","TransitionEnd")},$a={},mm={};_t&&(mm=document.createElement("div").style,"AnimationEvent"in window||(delete or.animationend.animation,delete or.animationiteration.animation,delete or.animationstart.animation),"TransitionEvent"in window||delete or.transitionend.transition);function Qs(e){if($a[e])return $a[e];if(!or[e])return e;var t=or[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in mm)return $a[e]=t[n];return e}var gm=Qs("animationend"),ym=Qs("animationiteration"),vm=Qs("animationstart"),xm=Qs("transitionend"),wm=new Map,Xd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function En(e,t){wm.set(e,t),Xn(t,[e])}for(var _a=0;_a<Xd.length;_a++){var Ba=Xd[_a],kv=Ba.toLowerCase(),Cv=Ba[0].toUpperCase()+Ba.slice(1);En(kv,"on"+Cv)}En(gm,"onAnimationEnd");En(ym,"onAnimationIteration");En(vm,"onAnimationStart");En("dblclick","onDoubleClick");En("focusin","onFocus");En("focusout","onBlur");En(xm,"onTransitionEnd");Pr("onMouseEnter",["mouseout","mouseover"]);Pr("onMouseLeave",["mouseout","mouseover"]);Pr("onPointerEnter",["pointerout","pointerover"]);Pr("onPointerLeave",["pointerout","pointerover"]);Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ci));function Qd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ky(r,t,void 0,e),e.currentTarget=null}function Sm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Qd(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Qd(i,a,u),o=l}}}if(cs)throw e=Il,cs=!1,Il=null,e}function Y(e,t){var n=t[Kl];n===void 0&&(n=t[Kl]=new Set);var r=e+"__bubble";n.has(r)||(km(t,e,2,!1),n.add(r))}function Ua(e,t,n){var r=0;t&&(r|=4),km(n,e,r,t)}var So="_reactListening"+Math.random().toString(36).slice(2);function Ii(e){if(!e[So]){e[So]=!0,Lh.forEach(function(n){n!=="selectionchange"&&(Pv.has(n)||Ua(n,!1,e),Ua(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[So]||(t[So]=!0,Ua("selectionchange",!1,t))}}function km(e,t,n,r){switch(om(t)){case 1:var i=Iy;break;case 4:i=Oy;break;default:i=ic}n=i.bind(null,t,n,e),i=void 0,!Fl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ha(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Nn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Wh(function(){var u=o,c=ec(n),d=[];e:{var f=wm.get(e);if(f!==void 0){var m=sc,v=e;switch(e){case"keypress":if(Bo(n)===0)break e;case"keydown":case"keyup":m=ev;break;case"focusin":v="focus",m=Fa;break;case"focusout":v="blur",m=Fa;break;case"beforeblur":case"afterblur":m=Fa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=By;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=rv;break;case gm:case ym:case vm:m=Wy;break;case xm:m=ov;break;case"scroll":m=$y;break;case"wheel":m=av;break;case"copy":case"cut":case"paste":m=Gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=$d}var x=(t&4)!==0,k=!x&&e==="scroll",g=x?f!==null?f+"Capture":null:f;x=[];for(var h=u,p;h!==null;){p=h;var S=p.stateNode;if(p.tag===5&&S!==null&&(p=S,g!==null&&(S=Mi(h,g),S!=null&&x.push(Oi(h,S,p)))),k)break;h=h.return}0<x.length&&(f=new m(f,v,null,n,c),d.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==zl&&(v=n.relatedTarget||n.fromElement)&&(Nn(v)||v[Bt]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?Nn(v):null,v!==null&&(k=Qn(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(x=Id,S="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=$d,S="onPointerLeave",g="onPointerEnter",h="pointer"),k=m==null?f:sr(m),p=v==null?f:sr(v),f=new x(S,h+"leave",m,n,c),f.target=k,f.relatedTarget=p,S=null,Nn(c)===u&&(x=new x(g,h+"enter",v,n,c),x.target=p,x.relatedTarget=k,S=x),k=S,m&&v)t:{for(x=m,g=v,h=0,p=x;p;p=Jn(p))h++;for(p=0,S=g;S;S=Jn(S))p++;for(;0<h-p;)x=Jn(x),h--;for(;0<p-h;)g=Jn(g),p--;for(;h--;){if(x===g||g!==null&&x===g.alternate)break t;x=Jn(x),g=Jn(g)}x=null}else x=null;m!==null&&Zd(d,f,m,x,!1),v!==null&&k!==null&&Zd(d,k,v,x,!0)}}e:{if(f=u?sr(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=hv;else if(Ud(f))if(dm)C=vv;else{C=gv;var E=mv}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=yv);if(C&&(C=C(e,u))){cm(d,C,n,c);break e}E&&E(e,f,u),e==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&Al(f,"number",f.value)}switch(E=u?sr(u):window,e){case"focusin":(Ud(E)||E.contentEditable==="true")&&(ir=E,Bl=u,vi=null);break;case"focusout":vi=Bl=ir=null;break;case"mousedown":Ul=!0;break;case"contextmenu":case"mouseup":case"dragend":Ul=!1,Kd(d,n,c);break;case"selectionchange":if(Sv)break;case"keydown":case"keyup":Kd(d,n,c)}var P;if(lc)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else rr?lm(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(am&&n.locale!=="ko"&&(rr||T!=="onCompositionStart"?T==="onCompositionEnd"&&rr&&(P=sm()):(an=c,oc="value"in an?an.value:an.textContent,rr=!0)),E=ms(u,T),0<E.length&&(T=new Od(T,e,null,n,c),d.push({event:T,listeners:E}),P?T.data=P:(P=um(n),P!==null&&(T.data=P)))),(P=uv?cv(e,n):dv(e,n))&&(u=ms(u,"onBeforeInput"),0<u.length&&(c=new Od("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=P))}Sm(d,t)})}function Oi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ms(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Mi(e,n),o!=null&&r.unshift(Oi(e,o,i)),o=Mi(e,t),o!=null&&r.push(Oi(e,o,i))),e=e.return}return r}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zd(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Mi(n,o),l!=null&&s.unshift(Oi(n,l,a))):i||(l=Mi(n,o),l!=null&&s.push(Oi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Ev=/\r\n?/g,bv=/\u0000|\uFFFD/g;function qd(e){return(typeof e=="string"?e:""+e).replace(Ev,`
`).replace(bv,"")}function ko(e,t,n){if(t=qd(t),qd(e)!==t&&n)throw Error(R(425))}function gs(){}var Hl=null,Wl=null;function Yl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gl=typeof setTimeout=="function"?setTimeout:void 0,Tv=typeof clearTimeout=="function"?clearTimeout:void 0,Jd=typeof Promise=="function"?Promise:void 0,Rv=typeof queueMicrotask=="function"?queueMicrotask:typeof Jd<"u"?function(e){return Jd.resolve(null).then(e).catch(Lv)}:Gl;function Lv(e){setTimeout(function(){throw e})}function Wa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),zi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zi(t)}function fn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ef(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var _r=Math.random().toString(36).slice(2),Pt="__reactFiber$"+_r,$i="__reactProps$"+_r,Bt="__reactContainer$"+_r,Kl="__reactEvents$"+_r,Av="__reactListeners$"+_r,jv="__reactHandles$"+_r;function Nn(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bt]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ef(e);e!==null;){if(n=e[Pt])return n;e=ef(e)}return t}e=n,n=e.parentNode}return null}function to(e){return e=e[Pt]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function sr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Zs(e){return e[$i]||null}var Xl=[],ar=-1;function bn(e){return{current:e}}function K(e){0>ar||(e.current=Xl[ar],Xl[ar]=null,ar--)}function W(e,t){ar++,Xl[ar]=e.current,e.current=t}var kn={},Le=bn(kn),Ie=bn(!1),Hn=kn;function Er(e,t){var n=e.type.contextTypes;if(!n)return kn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Oe(e){return e=e.childContextTypes,e!=null}function ys(){K(Ie),K(Le)}function tf(e,t,n){if(Le.current!==kn)throw Error(R(168));W(Le,t),W(Ie,n)}function Cm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,my(e)||"Unknown",i));return ne({},n,r)}function vs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kn,Hn=Le.current,W(Le,e),W(Ie,Ie.current),!0}function nf(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=Cm(e,t,Hn),r.__reactInternalMemoizedMergedChildContext=e,K(Ie),K(Le),W(Le,e)):K(Ie),W(Ie,n)}var Dt=null,qs=!1,Ya=!1;function Pm(e){Dt===null?Dt=[e]:Dt.push(e)}function Mv(e){qs=!0,Pm(e)}function Tn(){if(!Ya&&Dt!==null){Ya=!0;var e=0,t=H;try{var n=Dt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dt=null,qs=!1}catch(i){throw Dt!==null&&(Dt=Dt.slice(e+1)),Xh(tc,Tn),i}finally{H=t,Ya=!1}}return null}var lr=[],ur=0,xs=null,ws=0,Je=[],et=0,Wn=null,Vt=1,zt="";function jn(e,t){lr[ur++]=ws,lr[ur++]=xs,xs=e,ws=t}function Em(e,t,n){Je[et++]=Vt,Je[et++]=zt,Je[et++]=Wn,Wn=e;var r=Vt;e=zt;var i=32-pt(r)-1;r&=~(1<<i),n+=1;var o=32-pt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Vt=1<<32-pt(t)+i|n<<i|r,zt=o+e}else Vt=1<<o|n<<i|r,zt=e}function cc(e){e.return!==null&&(jn(e,1),Em(e,1,0))}function dc(e){for(;e===xs;)xs=lr[--ur],lr[ur]=null,ws=lr[--ur],lr[ur]=null;for(;e===Wn;)Wn=Je[--et],Je[et]=null,zt=Je[--et],Je[et]=null,Vt=Je[--et],Je[et]=null}var He=null,Ue=null,X=!1,dt=null;function bm(e,t){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function rf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,He=e,Ue=fn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,He=e,Ue=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Wn!==null?{id:Vt,overflow:zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,He=e,Ue=null,!0):!1;default:return!1}}function Ql(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Zl(e){if(X){var t=Ue;if(t){var n=t;if(!rf(e,t)){if(Ql(e))throw Error(R(418));t=fn(n.nextSibling);var r=He;t&&rf(e,t)?bm(r,n):(e.flags=e.flags&-4097|2,X=!1,He=e)}}else{if(Ql(e))throw Error(R(418));e.flags=e.flags&-4097|2,X=!1,He=e}}}function of(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function Co(e){if(e!==He)return!1;if(!X)return of(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Yl(e.type,e.memoizedProps)),t&&(t=Ue)){if(Ql(e))throw Tm(),Error(R(418));for(;t;)bm(e,t),t=fn(t.nextSibling)}if(of(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ue=fn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ue=null}}else Ue=He?fn(e.stateNode.nextSibling):null;return!0}function Tm(){for(var e=Ue;e;)e=fn(e.nextSibling)}function br(){Ue=He=null,X=!1}function fc(e){dt===null?dt=[e]:dt.push(e)}var Dv=Yt.ReactCurrentBatchConfig;function qr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function Po(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sf(e){var t=e._init;return t(e._payload)}function Rm(e){function t(g,h){if(e){var p=g.deletions;p===null?(g.deletions=[h],g.flags|=16):p.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=gn(g,h),g.index=0,g.sibling=null,g}function o(g,h,p){return g.index=p,e?(p=g.alternate,p!==null?(p=p.index,p<h?(g.flags|=2,h):p):(g.flags|=2,h)):(g.flags|=1048576,h)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,h,p,S){return h===null||h.tag!==6?(h=Ja(p,g.mode,S),h.return=g,h):(h=i(h,p),h.return=g,h)}function l(g,h,p,S){var C=p.type;return C===nr?c(g,h,p.props.children,S,p.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===tn&&sf(C)===h.type)?(S=i(h,p.props),S.ref=qr(g,h,p),S.return=g,S):(S=Xo(p.type,p.key,p.props,null,g.mode,S),S.ref=qr(g,h,p),S.return=g,S)}function u(g,h,p,S){return h===null||h.tag!==4||h.stateNode.containerInfo!==p.containerInfo||h.stateNode.implementation!==p.implementation?(h=el(p,g.mode,S),h.return=g,h):(h=i(h,p.children||[]),h.return=g,h)}function c(g,h,p,S,C){return h===null||h.tag!==7?(h=Bn(p,g.mode,S,C),h.return=g,h):(h=i(h,p),h.return=g,h)}function d(g,h,p){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ja(""+h,g.mode,p),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case po:return p=Xo(h.type,h.key,h.props,null,g.mode,p),p.ref=qr(g,null,h),p.return=g,p;case tr:return h=el(h,g.mode,p),h.return=g,h;case tn:var S=h._init;return d(g,S(h._payload),p)}if(li(h)||Gr(h))return h=Bn(h,g.mode,p,null),h.return=g,h;Po(g,h)}return null}function f(g,h,p,S){var C=h!==null?h.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:a(g,h,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case po:return p.key===C?l(g,h,p,S):null;case tr:return p.key===C?u(g,h,p,S):null;case tn:return C=p._init,f(g,h,C(p._payload),S)}if(li(p)||Gr(p))return C!==null?null:c(g,h,p,S,null);Po(g,p)}return null}function m(g,h,p,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(p)||null,a(h,g,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case po:return g=g.get(S.key===null?p:S.key)||null,l(h,g,S,C);case tr:return g=g.get(S.key===null?p:S.key)||null,u(h,g,S,C);case tn:var E=S._init;return m(g,h,p,E(S._payload),C)}if(li(S)||Gr(S))return g=g.get(p)||null,c(h,g,S,C,null);Po(h,S)}return null}function v(g,h,p,S){for(var C=null,E=null,P=h,T=h=0,A=null;P!==null&&T<p.length;T++){P.index>T?(A=P,P=null):A=P.sibling;var D=f(g,P,p[T],S);if(D===null){P===null&&(P=A);break}e&&P&&D.alternate===null&&t(g,P),h=o(D,h,T),E===null?C=D:E.sibling=D,E=D,P=A}if(T===p.length)return n(g,P),X&&jn(g,T),C;if(P===null){for(;T<p.length;T++)P=d(g,p[T],S),P!==null&&(h=o(P,h,T),E===null?C=P:E.sibling=P,E=P);return X&&jn(g,T),C}for(P=r(g,P);T<p.length;T++)A=m(P,g,T,p[T],S),A!==null&&(e&&A.alternate!==null&&P.delete(A.key===null?T:A.key),h=o(A,h,T),E===null?C=A:E.sibling=A,E=A);return e&&P.forEach(function(Q){return t(g,Q)}),X&&jn(g,T),C}function x(g,h,p,S){var C=Gr(p);if(typeof C!="function")throw Error(R(150));if(p=C.call(p),p==null)throw Error(R(151));for(var E=C=null,P=h,T=h=0,A=null,D=p.next();P!==null&&!D.done;T++,D=p.next()){P.index>T?(A=P,P=null):A=P.sibling;var Q=f(g,P,D.value,S);if(Q===null){P===null&&(P=A);break}e&&P&&Q.alternate===null&&t(g,P),h=o(Q,h,T),E===null?C=Q:E.sibling=Q,E=Q,P=A}if(D.done)return n(g,P),X&&jn(g,T),C;if(P===null){for(;!D.done;T++,D=p.next())D=d(g,D.value,S),D!==null&&(h=o(D,h,T),E===null?C=D:E.sibling=D,E=D);return X&&jn(g,T),C}for(P=r(g,P);!D.done;T++,D=p.next())D=m(P,g,T,D.value,S),D!==null&&(e&&D.alternate!==null&&P.delete(D.key===null?T:D.key),h=o(D,h,T),E===null?C=D:E.sibling=D,E=D);return e&&P.forEach(function(de){return t(g,de)}),X&&jn(g,T),C}function k(g,h,p,S){if(typeof p=="object"&&p!==null&&p.type===nr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case po:e:{for(var C=p.key,E=h;E!==null;){if(E.key===C){if(C=p.type,C===nr){if(E.tag===7){n(g,E.sibling),h=i(E,p.props.children),h.return=g,g=h;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===tn&&sf(C)===E.type){n(g,E.sibling),h=i(E,p.props),h.ref=qr(g,E,p),h.return=g,g=h;break e}n(g,E);break}else t(g,E);E=E.sibling}p.type===nr?(h=Bn(p.props.children,g.mode,S,p.key),h.return=g,g=h):(S=Xo(p.type,p.key,p.props,null,g.mode,S),S.ref=qr(g,h,p),S.return=g,g=S)}return s(g);case tr:e:{for(E=p.key;h!==null;){if(h.key===E)if(h.tag===4&&h.stateNode.containerInfo===p.containerInfo&&h.stateNode.implementation===p.implementation){n(g,h.sibling),h=i(h,p.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=el(p,g.mode,S),h.return=g,g=h}return s(g);case tn:return E=p._init,k(g,h,E(p._payload),S)}if(li(p))return v(g,h,p,S);if(Gr(p))return x(g,h,p,S);Po(g,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,p),h.return=g,g=h):(n(g,h),h=Ja(p,g.mode,S),h.return=g,g=h),s(g)):n(g,h)}return k}var Tr=Rm(!0),Lm=Rm(!1),Ss=bn(null),ks=null,cr=null,pc=null;function hc(){pc=cr=ks=null}function mc(e){var t=Ss.current;K(Ss),e._currentValue=t}function ql(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function kr(e,t){ks=e,pc=cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Fe=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(pc!==e)if(e={context:e,memoizedValue:t,next:null},cr===null){if(ks===null)throw Error(R(308));cr=e,ks.dependencies={lanes:0,firstContext:e}}else cr=cr.next=e;return t}var Fn=null;function gc(e){Fn===null?Fn=[e]:Fn.push(e)}function Am(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,gc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ut(e,r)}function Ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nn=!1;function yc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,_&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ut(e,n)}return i=r.interleaved,i===null?(t.next=t,gc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ut(e,n)}function Uo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nc(e,n)}}function af(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Cs(e,t,n,r){var i=e.updateQueue;nn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,c=u=l=null,a=o;do{var f=a.lane,m=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(f=t,m=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(m,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,f=typeof v=="function"?v.call(m,d,f):v,f==null)break e;d=ne({},d,f);break e;case 2:nn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Gn|=s,e.lanes=s,e.memoizedState=d}}function lf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var no={},bt=bn(no),_i=bn(no),Bi=bn(no);function In(e){if(e===no)throw Error(R(174));return e}function vc(e,t){switch(W(Bi,t),W(_i,e),W(bt,no),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ml(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ml(t,e)}K(bt),W(bt,t)}function Rr(){K(bt),K(_i),K(Bi)}function Mm(e){In(Bi.current);var t=In(bt.current),n=Ml(t,e.type);t!==n&&(W(_i,e),W(bt,n))}function xc(e){_i.current===e&&(K(bt),K(_i))}var q=bn(0);function Ps(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ga=[];function wc(){for(var e=0;e<Ga.length;e++)Ga[e]._workInProgressVersionPrimary=null;Ga.length=0}var Ho=Yt.ReactCurrentDispatcher,Ka=Yt.ReactCurrentBatchConfig,Yn=0,ee=null,pe=null,ge=null,Es=!1,xi=!1,Ui=0,Vv=0;function Ee(){throw Error(R(321))}function Sc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function kc(e,t,n,r,i,o){if(Yn=o,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ho.current=e===null||e.memoizedState===null?Iv:Ov,e=n(r,i),xi){o=0;do{if(xi=!1,Ui=0,25<=o)throw Error(R(301));o+=1,ge=pe=null,t.updateQueue=null,Ho.current=$v,e=n(r,i)}while(xi)}if(Ho.current=bs,t=pe!==null&&pe.next!==null,Yn=0,ge=pe=ee=null,Es=!1,t)throw Error(R(300));return e}function Cc(){var e=Ui!==0;return Ui=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?ee.memoizedState=ge=e:ge=ge.next=e,ge}function it(){if(pe===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=ge===null?ee.memoizedState:ge.next;if(t!==null)ge=t,pe=e;else{if(e===null)throw Error(R(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},ge===null?ee.memoizedState=ge=e:ge=ge.next=e}return ge}function Hi(e,t){return typeof t=="function"?t(e):t}function Xa(e){var t=it(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=pe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Yn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,ee.lanes|=c,Gn|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,gt(r,t.memoizedState)||(Fe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ee.lanes|=o,Gn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Qa(e){var t=it(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);gt(o,t.memoizedState)||(Fe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Dm(){}function Vm(e,t){var n=ee,r=it(),i=t(),o=!gt(r.memoizedState,i);if(o&&(r.memoizedState=i,Fe=!0),r=r.queue,Pc(Fm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,Wi(9,Nm.bind(null,n,r,i,t),void 0,null),ve===null)throw Error(R(349));Yn&30||zm(n,t,i)}return i}function zm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Nm(e,t,n,r){t.value=n,t.getSnapshot=r,Im(t)&&Om(e)}function Fm(e,t,n){return n(function(){Im(t)&&Om(e)})}function Im(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function Om(e){var t=Ut(e,1);t!==null&&ht(t,e,1,-1)}function uf(e){var t=St();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:e},t.queue=e,e=e.dispatch=Fv.bind(null,ee,e),[t.memoizedState,e]}function Wi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $m(){return it().memoizedState}function Wo(e,t,n,r){var i=St();ee.flags|=e,i.memoizedState=Wi(1|t,n,void 0,r===void 0?null:r)}function Js(e,t,n,r){var i=it();r=r===void 0?null:r;var o=void 0;if(pe!==null){var s=pe.memoizedState;if(o=s.destroy,r!==null&&Sc(r,s.deps)){i.memoizedState=Wi(t,n,o,r);return}}ee.flags|=e,i.memoizedState=Wi(1|t,n,o,r)}function cf(e,t){return Wo(8390656,8,e,t)}function Pc(e,t){return Js(2048,8,e,t)}function _m(e,t){return Js(4,2,e,t)}function Bm(e,t){return Js(4,4,e,t)}function Um(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hm(e,t,n){return n=n!=null?n.concat([e]):null,Js(4,4,Um.bind(null,t,e),n)}function Ec(){}function Wm(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Sc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ym(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Sc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Gm(e,t,n){return Yn&21?(gt(n,t)||(n=qh(),ee.lanes|=n,Gn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n)}function zv(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=Ka.transition;Ka.transition={};try{e(!1),t()}finally{H=n,Ka.transition=r}}function Km(){return it().memoizedState}function Nv(e,t,n){var r=mn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xm(e))Qm(t,n);else if(n=Am(e,t,n,r),n!==null){var i=Me();ht(n,e,r,i),Zm(n,t,r)}}function Fv(e,t,n){var r=mn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xm(e))Qm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,gt(a,s)){var l=t.interleaved;l===null?(i.next=i,gc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Am(e,t,i,r),n!==null&&(i=Me(),ht(n,e,r,i),Zm(n,t,r))}}function Xm(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function Qm(e,t){xi=Es=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nc(e,n)}}var bs={readContext:rt,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},Iv={readContext:rt,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:cf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wo(4194308,4,Um.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wo(4,2,e,t)},useMemo:function(e,t){var n=St();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=St();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Nv.bind(null,ee,e),[r.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:uf,useDebugValue:Ec,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=uf(!1),t=e[0];return e=zv.bind(null,e[1]),St().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ee,i=St();if(X){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),ve===null)throw Error(R(349));Yn&30||zm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,cf(Fm.bind(null,r,o,e),[e]),r.flags|=2048,Wi(9,Nm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=St(),t=ve.identifierPrefix;if(X){var n=zt,r=Vt;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ui++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Vv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ov={readContext:rt,useCallback:Wm,useContext:rt,useEffect:Pc,useImperativeHandle:Hm,useInsertionEffect:_m,useLayoutEffect:Bm,useMemo:Ym,useReducer:Xa,useRef:$m,useState:function(){return Xa(Hi)},useDebugValue:Ec,useDeferredValue:function(e){var t=it();return Gm(t,pe.memoizedState,e)},useTransition:function(){var e=Xa(Hi)[0],t=it().memoizedState;return[e,t]},useMutableSource:Dm,useSyncExternalStore:Vm,useId:Km,unstable_isNewReconciler:!1},$v={readContext:rt,useCallback:Wm,useContext:rt,useEffect:Pc,useImperativeHandle:Hm,useInsertionEffect:_m,useLayoutEffect:Bm,useMemo:Ym,useReducer:Qa,useRef:$m,useState:function(){return Qa(Hi)},useDebugValue:Ec,useDeferredValue:function(e){var t=it();return pe===null?t.memoizedState=e:Gm(t,pe.memoizedState,e)},useTransition:function(){var e=Qa(Hi)[0],t=it().memoizedState;return[e,t]},useMutableSource:Dm,useSyncExternalStore:Vm,useId:Km,unstable_isNewReconciler:!1};function ut(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Jl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ea={isMounted:function(e){return(e=e._reactInternals)?Qn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Me(),i=mn(e),o=Ft(r,i);o.payload=t,n!=null&&(o.callback=n),t=pn(e,o,i),t!==null&&(ht(t,e,i,r),Uo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Me(),i=mn(e),o=Ft(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=pn(e,o,i),t!==null&&(ht(t,e,i,r),Uo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),r=mn(e),i=Ft(n,r);i.tag=2,t!=null&&(i.callback=t),t=pn(e,i,r),t!==null&&(ht(t,e,r,n),Uo(t,e,r))}};function df(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Fi(n,r)||!Fi(i,o):!0}function qm(e,t,n){var r=!1,i=kn,o=t.contextType;return typeof o=="object"&&o!==null?o=rt(o):(i=Oe(t)?Hn:Le.current,r=t.contextTypes,o=(r=r!=null)?Er(e,i):kn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ea,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ff(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ea.enqueueReplaceState(t,t.state,null)}function eu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},yc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=rt(o):(o=Oe(t)?Hn:Le.current,i.context=Er(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Jl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ea.enqueueReplaceState(i,i.state,null),Cs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Lr(e,t){try{var n="",r=t;do n+=hy(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Za(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function tu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _v=typeof WeakMap=="function"?WeakMap:Map;function Jm(e,t,n){n=Ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Rs||(Rs=!0,du=r),tu(e,t)},n}function e0(e,t,n){n=Ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){tu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){tu(e,t),typeof r!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function pf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _v;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=tx.bind(null,e,t,n),t.then(e,e))}function hf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function mf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ft(-1,1),t.tag=2,pn(n,t,1))),n.lanes|=1),e)}var Bv=Yt.ReactCurrentOwner,Fe=!1;function je(e,t,n,r){t.child=e===null?Lm(t,null,n,r):Tr(t,e.child,n,r)}function gf(e,t,n,r,i){n=n.render;var o=t.ref;return kr(t,i),r=kc(e,t,n,r,o,i),n=Cc(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ht(e,t,i)):(X&&n&&cc(t),t.flags|=1,je(e,t,r,i),t.child)}function yf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Dc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,t0(e,t,o,r,i)):(e=Xo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Fi,n(s,r)&&e.ref===t.ref)return Ht(e,t,i)}return t.flags|=1,e=gn(o,r),e.ref=t.ref,e.return=t,t.child=e}function t0(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Fi(o,r)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Fe=!0);else return t.lanes=e.lanes,Ht(e,t,i)}return nu(e,t,n,r,i)}function n0(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(fr,Be),Be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(fr,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(fr,Be),Be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(fr,Be),Be|=r;return je(e,t,i,n),t.child}function r0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function nu(e,t,n,r,i){var o=Oe(n)?Hn:Le.current;return o=Er(t,o),kr(t,i),n=kc(e,t,n,r,o,i),r=Cc(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ht(e,t,i)):(X&&r&&cc(t),t.flags|=1,je(e,t,n,i),t.child)}function vf(e,t,n,r,i){if(Oe(n)){var o=!0;vs(t)}else o=!1;if(kr(t,i),t.stateNode===null)Yo(e,t),qm(t,n,r),eu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=rt(u):(u=Oe(n)?Hn:Le.current,u=Er(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&ff(t,s,r,u),nn=!1;var f=t.memoizedState;s.state=f,Cs(t,r,s,i),l=t.memoizedState,a!==r||f!==l||Ie.current||nn?(typeof c=="function"&&(Jl(t,n,c,r),l=t.memoizedState),(a=nn||df(t,n,a,r,f,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,jm(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ut(t.type,a),s.props=u,d=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=rt(l):(l=Oe(n)?Hn:Le.current,l=Er(t,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==l)&&ff(t,s,r,l),nn=!1,f=t.memoizedState,s.state=f,Cs(t,r,s,i);var v=t.memoizedState;a!==d||f!==v||Ie.current||nn?(typeof m=="function"&&(Jl(t,n,m,r),v=t.memoizedState),(u=nn||df(t,n,u,r,f,v,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return ru(e,t,n,r,o,i)}function ru(e,t,n,r,i,o){r0(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&nf(t,n,!1),Ht(e,t,o);r=t.stateNode,Bv.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Tr(t,e.child,null,o),t.child=Tr(t,null,a,o)):je(e,t,a,o),t.memoizedState=r.state,i&&nf(t,n,!0),t.child}function i0(e){var t=e.stateNode;t.pendingContext?tf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&tf(e,t.context,!1),vc(e,t.containerInfo)}function xf(e,t,n,r,i){return br(),fc(i),t.flags|=256,je(e,t,n,r),t.child}var iu={dehydrated:null,treeContext:null,retryLane:0};function ou(e){return{baseLanes:e,cachePool:null,transitions:null}}function o0(e,t,n){var r=t.pendingProps,i=q.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(q,i&1),e===null)return Zl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ra(s,r,0,null),e=Bn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ou(n),t.memoizedState=iu,e):bc(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Uv(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=gn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=gn(a,o):(o=Bn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?ou(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=iu,r}return o=e.child,e=o.sibling,r=gn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function bc(e,t){return t=ra({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Eo(e,t,n,r){return r!==null&&fc(r),Tr(t,e.child,null,n),e=bc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Uv(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Za(Error(R(422))),Eo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ra({mode:"visible",children:r.children},i,0,null),o=Bn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Tr(t,e.child,null,s),t.child.memoizedState=ou(s),t.memoizedState=iu,o);if(!(t.mode&1))return Eo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(R(419)),r=Za(o,r,void 0),Eo(e,t,s,r)}if(a=(s&e.childLanes)!==0,Fe||a){if(r=ve,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ut(e,i),ht(r,e,i,-1))}return Mc(),r=Za(Error(R(421))),Eo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=nx.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ue=fn(i.nextSibling),He=t,X=!0,dt=null,e!==null&&(Je[et++]=Vt,Je[et++]=zt,Je[et++]=Wn,Vt=e.id,zt=e.overflow,Wn=t),t=bc(t,r.children),t.flags|=4096,t)}function wf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ql(e.return,t,n)}function qa(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function s0(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(je(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wf(e,n,t);else if(e.tag===19)wf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ps(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),qa(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ps(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}qa(t,!0,n,null,o);break;case"together":qa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Yo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Hv(e,t,n){switch(t.tag){case 3:i0(t),br();break;case 5:Mm(t);break;case 1:Oe(t.type)&&vs(t);break;case 4:vc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(Ss,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?o0(e,t,n):(W(q,q.current&1),e=Ht(e,t,n),e!==null?e.sibling:null);W(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return s0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,n0(e,t,n)}return Ht(e,t,n)}var a0,su,l0,u0;a0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};su=function(){};l0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,In(bt.current);var o=null;switch(n){case"input":i=Rl(e,i),r=Rl(e,r),o=[];break;case"select":i=ne({},i,{value:void 0}),r=ne({},r,{value:void 0}),o=[];break;case"textarea":i=jl(e,i),r=jl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=gs)}Dl(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ai.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ai.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Y("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};u0=function(e,t,n,r){n!==r&&(t.flags|=4)};function Jr(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Wv(e,t,n){var r=t.pendingProps;switch(dc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return Oe(t.type)&&ys(),be(t),null;case 3:return r=t.stateNode,Rr(),K(Ie),K(Le),wc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Co(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dt!==null&&(hu(dt),dt=null))),su(e,t),be(t),null;case 5:xc(t);var i=In(Bi.current);if(n=t.type,e!==null&&t.stateNode!=null)l0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return be(t),null}if(e=In(bt.current),Co(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Pt]=t,r[$i]=o,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(i=0;i<ci.length;i++)Y(ci[i],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":Rd(r,o),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Y("invalid",r);break;case"textarea":Ad(r,o),Y("invalid",r)}Dl(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ko(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ko(r.textContent,a,e),i=["children",""+a]):Ai.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Y("scroll",r)}switch(n){case"input":ho(r),Ld(r,o,!0);break;case"textarea":ho(r),jd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=gs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Pt]=t,e[$i]=r,a0(e,t,!1,!1),t.stateNode=e;e:{switch(s=Vl(n,r),n){case"dialog":Y("cancel",e),Y("close",e),i=r;break;case"iframe":case"object":case"embed":Y("load",e),i=r;break;case"video":case"audio":for(i=0;i<ci.length;i++)Y(ci[i],e);i=r;break;case"source":Y("error",e),i=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),i=r;break;case"details":Y("toggle",e),i=r;break;case"input":Rd(e,r),i=Rl(e,r),Y("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ne({},r,{value:void 0}),Y("invalid",e);break;case"textarea":Ad(e,r),i=jl(e,r),Y("invalid",e);break;default:i=r}Dl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?$h(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ih(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ji(e,l):typeof l=="number"&&ji(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ai.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Y("scroll",e):l!=null&&Qu(e,o,l,s))}switch(n){case"input":ho(e),Ld(e,r,!1);break;case"textarea":ho(e),jd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Sn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?vr(e,!!r.multiple,o,!1):r.defaultValue!=null&&vr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=gs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return be(t),null;case 6:if(e&&t.stateNode!=null)u0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=In(Bi.current),In(bt.current),Co(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,(o=r.nodeValue!==n)&&(e=He,e!==null))switch(e.tag){case 3:ko(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ko(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return be(t),null;case 13:if(K(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Ue!==null&&t.mode&1&&!(t.flags&128))Tm(),br(),t.flags|=98560,o=!1;else if(o=Co(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(R(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(R(317));o[Pt]=t}else br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),o=!1}else dt!==null&&(hu(dt),dt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?me===0&&(me=3):Mc())),t.updateQueue!==null&&(t.flags|=4),be(t),null);case 4:return Rr(),su(e,t),e===null&&Ii(t.stateNode.containerInfo),be(t),null;case 10:return mc(t.type._context),be(t),null;case 17:return Oe(t.type)&&ys(),be(t),null;case 19:if(K(q),o=t.memoizedState,o===null)return be(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Jr(o,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ps(e),s!==null){for(t.flags|=128,Jr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(q,q.current&1|2),t.child}e=e.sibling}o.tail!==null&&se()>Ar&&(t.flags|=128,r=!0,Jr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ps(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Jr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!X)return be(t),null}else 2*se()-o.renderingStartTime>Ar&&n!==1073741824&&(t.flags|=128,r=!0,Jr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=se(),t.sibling=null,n=q.current,W(q,r?n&1|2:n&1),t):(be(t),null);case 22:case 23:return jc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Be&1073741824&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function Yv(e,t){switch(dc(t),t.tag){case 1:return Oe(t.type)&&ys(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rr(),K(Ie),K(Le),wc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xc(t),null;case 13:if(K(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(q),null;case 4:return Rr(),null;case 10:return mc(t.type._context),null;case 22:case 23:return jc(),null;case 24:return null;default:return null}}var bo=!1,Te=!1,Gv=typeof WeakSet=="function"?WeakSet:Set,j=null;function dr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function au(e,t,n){try{n()}catch(r){re(e,t,r)}}var Sf=!1;function Kv(e,t){if(Hl=ps,e=hm(),uc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===e)break t;if(f===n&&++u===i&&(a=s),f===o&&++c===r&&(l=s),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wl={focusedElem:e,selectionRange:n},ps=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,k=v.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:ut(t.type,x),k);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(S){re(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return v=Sf,Sf=!1,v}function wi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&au(t,n,o)}i=i.next}while(i!==r)}}function ta(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function lu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function c0(e){var t=e.alternate;t!==null&&(e.alternate=null,c0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[$i],delete t[Kl],delete t[Av],delete t[jv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function d0(e){return e.tag===5||e.tag===3||e.tag===4}function kf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||d0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gs));else if(r!==4&&(e=e.child,e!==null))for(uu(e,t,n),e=e.sibling;e!==null;)uu(e,t,n),e=e.sibling}function cu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(cu(e,t,n),e=e.sibling;e!==null;)cu(e,t,n),e=e.sibling}var we=null,ct=!1;function Zt(e,t,n){for(n=n.child;n!==null;)f0(e,t,n),n=n.sibling}function f0(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Gs,n)}catch{}switch(n.tag){case 5:Te||dr(n,t);case 6:var r=we,i=ct;we=null,Zt(e,t,n),we=r,ct=i,we!==null&&(ct?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(ct?(e=we,n=n.stateNode,e.nodeType===8?Wa(e.parentNode,n):e.nodeType===1&&Wa(e,n),zi(e)):Wa(we,n.stateNode));break;case 4:r=we,i=ct,we=n.stateNode.containerInfo,ct=!0,Zt(e,t,n),we=r,ct=i;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&au(n,t,s),i=i.next}while(i!==r)}Zt(e,t,n);break;case 1:if(!Te&&(dr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){re(n,t,a)}Zt(e,t,n);break;case 21:Zt(e,t,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,Zt(e,t,n),Te=r):Zt(e,t,n);break;default:Zt(e,t,n)}}function Cf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Gv),t.forEach(function(r){var i=rx.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:we=a.stateNode,ct=!1;break e;case 3:we=a.stateNode.containerInfo,ct=!0;break e;case 4:we=a.stateNode.containerInfo,ct=!0;break e}a=a.return}if(we===null)throw Error(R(160));f0(o,s,i),we=null,ct=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){re(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)p0(t,e),t=t.sibling}function p0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),wt(e),r&4){try{wi(3,e,e.return),ta(3,e)}catch(x){re(e,e.return,x)}try{wi(5,e,e.return)}catch(x){re(e,e.return,x)}}break;case 1:lt(t,e),wt(e),r&512&&n!==null&&dr(n,n.return);break;case 5:if(lt(t,e),wt(e),r&512&&n!==null&&dr(n,n.return),e.flags&32){var i=e.stateNode;try{ji(i,"")}catch(x){re(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&zh(i,o),Vl(a,s);var u=Vl(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?$h(i,d):c==="dangerouslySetInnerHTML"?Ih(i,d):c==="children"?ji(i,d):Qu(i,c,d,u)}switch(a){case"input":Ll(i,o);break;case"textarea":Nh(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?vr(i,!!o.multiple,m,!1):f!==!!o.multiple&&(o.defaultValue!=null?vr(i,!!o.multiple,o.defaultValue,!0):vr(i,!!o.multiple,o.multiple?[]:"",!1))}i[$i]=o}catch(x){re(e,e.return,x)}}break;case 6:if(lt(t,e),wt(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){re(e,e.return,x)}}break;case 3:if(lt(t,e),wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zi(t.containerInfo)}catch(x){re(e,e.return,x)}break;case 4:lt(t,e),wt(e);break;case 13:lt(t,e),wt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Lc=se())),r&4&&Cf(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Te=(u=Te)||c,lt(t,e),Te=u):lt(t,e),wt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(j=e,c=e.child;c!==null;){for(d=j=c;j!==null;){switch(f=j,m=f.child,f.tag){case 0:case 11:case 14:case 15:wi(4,f,f.return);break;case 1:dr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){re(r,n,x)}}break;case 5:dr(f,f.return);break;case 22:if(f.memoizedState!==null){Ef(d);continue}}m!==null?(m.return=f,j=m):Ef(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Oh("display",s))}catch(x){re(e,e.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){re(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:lt(t,e),wt(e),r&4&&Cf(e);break;case 21:break;default:lt(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(d0(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ji(i,""),r.flags&=-33);var o=kf(e);cu(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=kf(e);uu(e,a,s);break;default:throw Error(R(161))}}catch(l){re(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xv(e,t,n){j=e,h0(e)}function h0(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var i=j,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||bo;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Te;a=bo;var u=Te;if(bo=s,(Te=l)&&!u)for(j=i;j!==null;)s=j,l=s.child,s.tag===22&&s.memoizedState!==null?bf(i):l!==null?(l.return=s,j=l):bf(i);for(;o!==null;)j=o,h0(o),o=o.sibling;j=i,bo=a,Te=u}Pf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,j=o):Pf(e)}}function Pf(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Te||ta(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Te)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&lf(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}lf(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&zi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Te||t.flags&512&&lu(t)}catch(f){re(t,t.return,f)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Ef(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function bf(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ta(4,t)}catch(l){re(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){re(t,i,l)}}var o=t.return;try{lu(t)}catch(l){re(t,o,l)}break;case 5:var s=t.return;try{lu(t)}catch(l){re(t,s,l)}}}catch(l){re(t,t.return,l)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var Qv=Math.ceil,Ts=Yt.ReactCurrentDispatcher,Tc=Yt.ReactCurrentOwner,nt=Yt.ReactCurrentBatchConfig,_=0,ve=null,ce=null,ke=0,Be=0,fr=bn(0),me=0,Yi=null,Gn=0,na=0,Rc=0,Si=null,Ne=null,Lc=0,Ar=1/0,jt=null,Rs=!1,du=null,hn=null,To=!1,ln=null,Ls=0,ki=0,fu=null,Go=-1,Ko=0;function Me(){return _&6?se():Go!==-1?Go:Go=se()}function mn(e){return e.mode&1?_&2&&ke!==0?ke&-ke:Dv.transition!==null?(Ko===0&&(Ko=qh()),Ko):(e=H,e!==0||(e=window.event,e=e===void 0?16:om(e.type)),e):1}function ht(e,t,n,r){if(50<ki)throw ki=0,fu=null,Error(R(185));Ji(e,n,r),(!(_&2)||e!==ve)&&(e===ve&&(!(_&2)&&(na|=n),me===4&&sn(e,ke)),$e(e,r),n===1&&_===0&&!(t.mode&1)&&(Ar=se()+500,qs&&Tn()))}function $e(e,t){var n=e.callbackNode;Dy(e,t);var r=fs(e,e===ve?ke:0);if(r===0)n!==null&&Vd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Vd(n),t===1)e.tag===0?Mv(Tf.bind(null,e)):Pm(Tf.bind(null,e)),Rv(function(){!(_&6)&&Tn()}),n=null;else{switch(Jh(r)){case 1:n=tc;break;case 4:n=Qh;break;case 16:n=ds;break;case 536870912:n=Zh;break;default:n=ds}n=k0(n,m0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function m0(e,t){if(Go=-1,Ko=0,_&6)throw Error(R(327));var n=e.callbackNode;if(Cr()&&e.callbackNode!==n)return null;var r=fs(e,e===ve?ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=As(e,r);else{t=r;var i=_;_|=2;var o=y0();(ve!==e||ke!==t)&&(jt=null,Ar=se()+500,_n(e,t));do try{Jv();break}catch(a){g0(e,a)}while(1);hc(),Ts.current=o,_=i,ce!==null?t=0:(ve=null,ke=0,t=me)}if(t!==0){if(t===2&&(i=Ol(e),i!==0&&(r=i,t=pu(e,i))),t===1)throw n=Yi,_n(e,0),sn(e,r),$e(e,se()),n;if(t===6)sn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Zv(i)&&(t=As(e,r),t===2&&(o=Ol(e),o!==0&&(r=o,t=pu(e,o))),t===1))throw n=Yi,_n(e,0),sn(e,r),$e(e,se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:Mn(e,Ne,jt);break;case 3:if(sn(e,r),(r&130023424)===r&&(t=Lc+500-se(),10<t)){if(fs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Gl(Mn.bind(null,e,Ne,jt),t);break}Mn(e,Ne,jt);break;case 4:if(sn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-pt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qv(r/1960))-r,10<r){e.timeoutHandle=Gl(Mn.bind(null,e,Ne,jt),r);break}Mn(e,Ne,jt);break;case 5:Mn(e,Ne,jt);break;default:throw Error(R(329))}}}return $e(e,se()),e.callbackNode===n?m0.bind(null,e):null}function pu(e,t){var n=Si;return e.current.memoizedState.isDehydrated&&(_n(e,t).flags|=256),e=As(e,t),e!==2&&(t=Ne,Ne=n,t!==null&&hu(t)),e}function hu(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function Zv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!gt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sn(e,t){for(t&=~Rc,t&=~na,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function Tf(e){if(_&6)throw Error(R(327));Cr();var t=fs(e,0);if(!(t&1))return $e(e,se()),null;var n=As(e,t);if(e.tag!==0&&n===2){var r=Ol(e);r!==0&&(t=r,n=pu(e,r))}if(n===1)throw n=Yi,_n(e,0),sn(e,t),$e(e,se()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mn(e,Ne,jt),$e(e,se()),null}function Ac(e,t){var n=_;_|=1;try{return e(t)}finally{_=n,_===0&&(Ar=se()+500,qs&&Tn())}}function Kn(e){ln!==null&&ln.tag===0&&!(_&6)&&Cr();var t=_;_|=1;var n=nt.transition,r=H;try{if(nt.transition=null,H=1,e)return e()}finally{H=r,nt.transition=n,_=t,!(_&6)&&Tn()}}function jc(){Be=fr.current,K(fr)}function _n(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Tv(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(dc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ys();break;case 3:Rr(),K(Ie),K(Le),wc();break;case 5:xc(r);break;case 4:Rr();break;case 13:K(q);break;case 19:K(q);break;case 10:mc(r.type._context);break;case 22:case 23:jc()}n=n.return}if(ve=e,ce=e=gn(e.current,null),ke=Be=t,me=0,Yi=null,Rc=na=Gn=0,Ne=Si=null,Fn!==null){for(t=0;t<Fn.length;t++)if(n=Fn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Fn=null}return e}function g0(e,t){do{var n=ce;try{if(hc(),Ho.current=bs,Es){for(var r=ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Es=!1}if(Yn=0,ge=pe=ee=null,xi=!1,Ui=0,Tc.current=null,n===null||n.return===null){me=1,Yi=t,ce=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=ke,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=hf(s);if(m!==null){m.flags&=-257,mf(m,s,a,o,t),m.mode&1&&pf(o,u,t),t=m,l=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(l),t.updateQueue=x}else v.add(l);break e}else{if(!(t&1)){pf(o,u,t),Mc();break e}l=Error(R(426))}}else if(X&&a.mode&1){var k=hf(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),mf(k,s,a,o,t),fc(Lr(l,a));break e}}o=l=Lr(l,a),me!==4&&(me=2),Si===null?Si=[o]:Si.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=Jm(o,l,t);af(o,g);break e;case 1:a=l;var h=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(hn===null||!hn.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=e0(o,a,t);af(o,S);break e}}o=o.return}while(o!==null)}x0(n)}catch(C){t=C,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(1)}function y0(){var e=Ts.current;return Ts.current=bs,e===null?bs:e}function Mc(){(me===0||me===3||me===2)&&(me=4),ve===null||!(Gn&268435455)&&!(na&268435455)||sn(ve,ke)}function As(e,t){var n=_;_|=2;var r=y0();(ve!==e||ke!==t)&&(jt=null,_n(e,t));do try{qv();break}catch(i){g0(e,i)}while(1);if(hc(),_=n,Ts.current=r,ce!==null)throw Error(R(261));return ve=null,ke=0,me}function qv(){for(;ce!==null;)v0(ce)}function Jv(){for(;ce!==null&&!Py();)v0(ce)}function v0(e){var t=S0(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?x0(e):ce=t,Tc.current=null}function x0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Yv(n,t),n!==null){n.flags&=32767,ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,ce=null;return}}else if(n=Wv(n,t,Be),n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);me===0&&(me=5)}function Mn(e,t,n){var r=H,i=nt.transition;try{nt.transition=null,H=1,ex(e,t,n,r)}finally{nt.transition=i,H=r}return null}function ex(e,t,n,r){do Cr();while(ln!==null);if(_&6)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Vy(e,o),e===ve&&(ce=ve=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||To||(To=!0,k0(ds,function(){return Cr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=nt.transition,nt.transition=null;var s=H;H=1;var a=_;_|=4,Tc.current=null,Kv(e,n),p0(n,e),wv(Wl),ps=!!Hl,Wl=Hl=null,e.current=n,Xv(n),Ey(),_=a,H=s,nt.transition=o}else e.current=n;if(To&&(To=!1,ln=e,Ls=i),o=e.pendingLanes,o===0&&(hn=null),Ry(n.stateNode),$e(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Rs)throw Rs=!1,e=du,du=null,e;return Ls&1&&e.tag!==0&&Cr(),o=e.pendingLanes,o&1?e===fu?ki++:(ki=0,fu=e):ki=0,Tn(),null}function Cr(){if(ln!==null){var e=Jh(Ls),t=nt.transition,n=H;try{if(nt.transition=null,H=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,Ls=0,_&6)throw Error(R(331));var i=_;for(_|=4,j=e.current;j!==null;){var o=j,s=o.child;if(j.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(j=u;j!==null;){var c=j;switch(c.tag){case 0:case 11:case 15:wi(8,c,o)}var d=c.child;if(d!==null)d.return=c,j=d;else for(;j!==null;){c=j;var f=c.sibling,m=c.return;if(c0(c),c===u){j=null;break}if(f!==null){f.return=m,j=f;break}j=m}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var k=x.sibling;x.sibling=null,x=k}while(x!==null)}}j=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,j=s;else e:for(;j!==null;){if(o=j,o.flags&2048)switch(o.tag){case 0:case 11:case 15:wi(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,j=g;break e}j=o.return}}var h=e.current;for(j=h;j!==null;){s=j;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,j=p;else e:for(s=h;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ta(9,a)}}catch(C){re(a,a.return,C)}if(a===s){j=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,j=S;break e}j=a.return}}if(_=i,Tn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Gs,e)}catch{}r=!0}return r}finally{H=n,nt.transition=t}}return!1}function Rf(e,t,n){t=Lr(n,t),t=Jm(e,t,1),e=pn(e,t,1),t=Me(),e!==null&&(Ji(e,1,t),$e(e,t))}function re(e,t,n){if(e.tag===3)Rf(e,e,n);else for(;t!==null;){if(t.tag===3){Rf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hn===null||!hn.has(r))){e=Lr(n,e),e=e0(t,e,1),t=pn(t,e,1),e=Me(),t!==null&&(Ji(t,1,e),$e(t,e));break}}t=t.return}}function tx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(ke&n)===n&&(me===4||me===3&&(ke&130023424)===ke&&500>se()-Lc?_n(e,0):Rc|=n),$e(e,t)}function w0(e,t){t===0&&(e.mode&1?(t=yo,yo<<=1,!(yo&130023424)&&(yo=4194304)):t=1);var n=Me();e=Ut(e,t),e!==null&&(Ji(e,t,n),$e(e,n))}function nx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),w0(e,n)}function rx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),w0(e,n)}var S0;S0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ie.current)Fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Fe=!1,Hv(e,t,n);Fe=!!(e.flags&131072)}else Fe=!1,X&&t.flags&1048576&&Em(t,ws,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Yo(e,t),e=t.pendingProps;var i=Er(t,Le.current);kr(t,n),i=kc(null,t,r,e,i,n);var o=Cc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oe(r)?(o=!0,vs(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yc(t),i.updater=ea,t.stateNode=i,i._reactInternals=t,eu(t,r,e,n),t=ru(null,t,r,!0,o,n)):(t.tag=0,X&&o&&cc(t),je(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Yo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=ox(r),e=ut(r,e),i){case 0:t=nu(null,t,r,e,n);break e;case 1:t=vf(null,t,r,e,n);break e;case 11:t=gf(null,t,r,e,n);break e;case 14:t=yf(null,t,r,ut(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),nu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),vf(e,t,r,i,n);case 3:e:{if(i0(t),e===null)throw Error(R(387));r=t.pendingProps,o=t.memoizedState,i=o.element,jm(e,t),Cs(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Lr(Error(R(423)),t),t=xf(e,t,r,n,i);break e}else if(r!==i){i=Lr(Error(R(424)),t),t=xf(e,t,r,n,i);break e}else for(Ue=fn(t.stateNode.containerInfo.firstChild),He=t,X=!0,dt=null,n=Lm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(br(),r===i){t=Ht(e,t,n);break e}je(e,t,r,n)}t=t.child}return t;case 5:return Mm(t),e===null&&Zl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Yl(r,i)?s=null:o!==null&&Yl(r,o)&&(t.flags|=32),r0(e,t),je(e,t,s,n),t.child;case 6:return e===null&&Zl(t),null;case 13:return o0(e,t,n);case 4:return vc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Tr(t,null,r,n):je(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),gf(e,t,r,i,n);case 7:return je(e,t,t.pendingProps,n),t.child;case 8:return je(e,t,t.pendingProps.children,n),t.child;case 12:return je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,W(Ss,r._currentValue),r._currentValue=s,o!==null)if(gt(o.value,s)){if(o.children===i.children&&!Ie.current){t=Ht(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Ft(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ql(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(R(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ql(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}je(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,kr(t,n),i=rt(i),r=r(i),t.flags|=1,je(e,t,r,n),t.child;case 14:return r=t.type,i=ut(r,t.pendingProps),i=ut(r.type,i),yf(e,t,r,i,n);case 15:return t0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Yo(e,t),t.tag=1,Oe(r)?(e=!0,vs(t)):e=!1,kr(t,n),qm(t,r,i),eu(t,r,i,n),ru(null,t,r,!0,e,n);case 19:return s0(e,t,n);case 22:return n0(e,t,n)}throw Error(R(156,t.tag))};function k0(e,t){return Xh(e,t)}function ix(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,n,r){return new ix(e,t,n,r)}function Dc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ox(e){if(typeof e=="function")return Dc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qu)return 11;if(e===Ju)return 14}return 2}function gn(e,t){var n=e.alternate;return n===null?(n=tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Dc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case nr:return Bn(n.children,i,o,t);case Zu:s=8,i|=8;break;case Pl:return e=tt(12,n,t,i|2),e.elementType=Pl,e.lanes=o,e;case El:return e=tt(13,n,t,i),e.elementType=El,e.lanes=o,e;case bl:return e=tt(19,n,t,i),e.elementType=bl,e.lanes=o,e;case Mh:return ra(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ah:s=10;break e;case jh:s=9;break e;case qu:s=11;break e;case Ju:s=14;break e;case tn:s=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=tt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Bn(e,t,n,r){return e=tt(7,e,r,t),e.lanes=n,e}function ra(e,t,n,r){return e=tt(22,e,r,t),e.elementType=Mh,e.lanes=n,e.stateNode={isHidden:!1},e}function Ja(e,t,n){return e=tt(6,e,null,t),e.lanes=n,e}function el(e,t,n){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sx(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Va(0),this.expirationTimes=Va(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Va(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vc(e,t,n,r,i,o,s,a,l){return e=new sx(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=tt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yc(o),e}function ax(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function C0(e){if(!e)return kn;e=e._reactInternals;e:{if(Qn(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(Oe(n))return Cm(e,n,t)}return t}function P0(e,t,n,r,i,o,s,a,l){return e=Vc(n,r,!0,e,i,o,s,a,l),e.context=C0(null),n=e.current,r=Me(),i=mn(n),o=Ft(r,i),o.callback=t??null,pn(n,o,i),e.current.lanes=i,Ji(e,i,r),$e(e,r),e}function ia(e,t,n,r){var i=t.current,o=Me(),s=mn(i);return n=C0(n),t.context===null?t.context=n:t.pendingContext=n,t=Ft(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pn(i,t,s),e!==null&&(ht(e,i,s,o),Uo(e,i,s)),s}function js(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zc(e,t){Lf(e,t),(e=e.alternate)&&Lf(e,t)}function lx(){return null}var E0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Nc(e){this._internalRoot=e}oa.prototype.render=Nc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));ia(e,t,null,null)};oa.prototype.unmount=Nc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kn(function(){ia(null,e,null,null)}),t[Bt]=null}};function oa(e){this._internalRoot=e}oa.prototype.unstable_scheduleHydration=function(e){if(e){var t=nm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<on.length&&t!==0&&t<on[n].priority;n++);on.splice(n,0,e),n===0&&im(e)}};function Fc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function sa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Af(){}function ux(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=js(s);o.call(u)}}var s=P0(t,r,e,0,null,!1,!1,"",Af);return e._reactRootContainer=s,e[Bt]=s.current,Ii(e.nodeType===8?e.parentNode:e),Kn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=js(l);a.call(u)}}var l=Vc(e,0,!1,null,null,!1,!1,"",Af);return e._reactRootContainer=l,e[Bt]=l.current,Ii(e.nodeType===8?e.parentNode:e),Kn(function(){ia(t,l,n,r)}),l}function aa(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=js(s);a.call(l)}}ia(t,s,e,i)}else s=ux(n,t,e,i,r);return js(s)}em=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ui(t.pendingLanes);n!==0&&(nc(t,n|1),$e(t,se()),!(_&6)&&(Ar=se()+500,Tn()))}break;case 13:Kn(function(){var r=Ut(e,1);if(r!==null){var i=Me();ht(r,e,1,i)}}),zc(e,1)}};rc=function(e){if(e.tag===13){var t=Ut(e,134217728);if(t!==null){var n=Me();ht(t,e,134217728,n)}zc(e,134217728)}};tm=function(e){if(e.tag===13){var t=mn(e),n=Ut(e,t);if(n!==null){var r=Me();ht(n,e,t,r)}zc(e,t)}};nm=function(){return H};rm=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};Nl=function(e,t,n){switch(t){case"input":if(Ll(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Zs(r);if(!i)throw Error(R(90));Vh(r),Ll(r,i)}}}break;case"textarea":Nh(e,n);break;case"select":t=n.value,t!=null&&vr(e,!!n.multiple,t,!1)}};Uh=Ac;Hh=Kn;var cx={usingClientEntryPoint:!1,Events:[to,sr,Zs,_h,Bh,Ac]},ei={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dx={bundleType:ei.bundleType,version:ei.version,rendererPackageName:ei.rendererPackageName,rendererConfig:ei.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gh(e),e===null?null:e.stateNode},findFiberByHostInstance:ei.findFiberByHostInstance||lx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{Gs=Ro.inject(dx),Et=Ro}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cx;Ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fc(t))throw Error(R(200));return ax(e,t,null,n)};Ge.createRoot=function(e,t){if(!Fc(e))throw Error(R(299));var n=!1,r="",i=E0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Vc(e,1,!1,null,null,n,!1,r,i),e[Bt]=t.current,Ii(e.nodeType===8?e.parentNode:e),new Nc(t)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=Gh(t),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return Kn(e)};Ge.hydrate=function(e,t,n){if(!sa(t))throw Error(R(200));return aa(null,e,t,!0,n)};Ge.hydrateRoot=function(e,t,n){if(!Fc(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=E0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=P0(t,null,e,1,n??null,i,!1,o,s),e[Bt]=t.current,Ii(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new oa(t)};Ge.render=function(e,t,n){if(!sa(t))throw Error(R(200));return aa(null,e,t,!1,n)};Ge.unmountComponentAtNode=function(e){if(!sa(e))throw Error(R(40));return e._reactRootContainer?(Kn(function(){aa(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1};Ge.unstable_batchedUpdates=Ac;Ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!sa(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return aa(e,t,n,!1,r)};Ge.version="18.3.1-next-f1338f8080-20240426";function b0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b0)}catch(e){console.error(e)}}b0(),bh.exports=Ge;var fx=bh.exports,jf=fx;kl.createRoot=jf.createRoot,kl.hydrateRoot=jf.hydrateRoot;var Re=function(){return Re=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Re.apply(this,arguments)};function jr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var G="-ms-",Ci="-moz-",U="-webkit-",T0="comm",la="rule",Ic="decl",px="@import",R0="@keyframes",hx="@layer",L0=Math.abs,Oc=String.fromCharCode,mu=Object.assign;function mx(e,t){return ye(e,0)^45?(((t<<2^ye(e,0))<<2^ye(e,1))<<2^ye(e,2))<<2^ye(e,3):0}function A0(e){return e.trim()}function Mt(e,t){return(e=t.exec(e))?e[0]:e}function I(e,t,n){return e.replace(t,n)}function Qo(e,t,n){return e.indexOf(t,n)}function ye(e,t){return e.charCodeAt(t)|0}function Mr(e,t,n){return e.slice(t,n)}function kt(e){return e.length}function j0(e){return e.length}function di(e,t){return t.push(e),e}function gx(e,t){return e.map(t).join("")}function Mf(e,t){return e.filter(function(n){return!Mt(n,t)})}var ua=1,Dr=1,M0=0,ot=0,ue=0,Br="";function ca(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ua,column:Dr,length:s,return:"",siblings:a}}function qt(e,t){return mu(ca("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function er(e){for(;e.root;)e=qt(e.root,{children:[e]});di(e,e.siblings)}function yx(){return ue}function vx(){return ue=ot>0?ye(Br,--ot):0,Dr--,ue===10&&(Dr=1,ua--),ue}function mt(){return ue=ot<M0?ye(Br,ot++):0,Dr++,ue===10&&(Dr=1,ua++),ue}function Un(){return ye(Br,ot)}function Zo(){return ot}function da(e,t){return Mr(Br,e,t)}function gu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xx(e){return ua=Dr=1,M0=kt(Br=e),ot=0,[]}function wx(e){return Br="",e}function tl(e){return A0(da(ot-1,yu(e===91?e+2:e===40?e+1:e)))}function Sx(e){for(;(ue=Un())&&ue<33;)mt();return gu(e)>2||gu(ue)>3?"":" "}function kx(e,t){for(;--t&&mt()&&!(ue<48||ue>102||ue>57&&ue<65||ue>70&&ue<97););return da(e,Zo()+(t<6&&Un()==32&&mt()==32))}function yu(e){for(;mt();)switch(ue){case e:return ot;case 34:case 39:e!==34&&e!==39&&yu(ue);break;case 40:e===41&&yu(e);break;case 92:mt();break}return ot}function Cx(e,t){for(;mt()&&e+ue!==47+10;)if(e+ue===42+42&&Un()===47)break;return"/*"+da(t,ot-1)+"*"+Oc(e===47?e:mt())}function Px(e){for(;!gu(Un());)mt();return da(e,ot)}function Ex(e){return wx(qo("",null,null,null,[""],e=xx(e),0,[0],e))}function qo(e,t,n,r,i,o,s,a,l){for(var u=0,c=0,d=s,f=0,m=0,v=0,x=1,k=1,g=1,h=0,p="",S=i,C=o,E=r,P=p;k;)switch(v=h,h=mt()){case 40:if(v!=108&&ye(P,d-1)==58){Qo(P+=I(tl(h),"&","&\f"),"&\f",L0(u?a[u-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:P+=tl(h);break;case 9:case 10:case 13:case 32:P+=Sx(v);break;case 92:P+=kx(Zo()-1,7);continue;case 47:switch(Un()){case 42:case 47:di(bx(Cx(mt(),Zo()),t,n,l),l);break;default:P+="/"}break;case 123*x:a[u++]=kt(P)*g;case 125*x:case 59:case 0:switch(h){case 0:case 125:k=0;case 59+c:g==-1&&(P=I(P,/\f/g,"")),m>0&&kt(P)-d&&di(m>32?Vf(P+";",r,n,d-1,l):Vf(I(P," ","")+";",r,n,d-2,l),l);break;case 59:P+=";";default:if(di(E=Df(P,t,n,u,c,i,a,p,S=[],C=[],d,o),o),h===123)if(c===0)qo(P,t,E,E,S,o,d,a,C);else switch(f===99&&ye(P,3)===110?100:f){case 100:case 108:case 109:case 115:qo(e,E,E,r&&di(Df(e,E,E,0,0,i,a,p,i,S=[],d,C),C),i,C,d,a,r?S:C);break;default:qo(P,E,E,E,[""],C,0,a,C)}}u=c=m=0,x=g=1,p=P="",d=s;break;case 58:d=1+kt(P),m=v;default:if(x<1){if(h==123)--x;else if(h==125&&x++==0&&vx()==125)continue}switch(P+=Oc(h),h*x){case 38:g=c>0?1:(P+="\f",-1);break;case 44:a[u++]=(kt(P)-1)*g,g=1;break;case 64:Un()===45&&(P+=tl(mt())),f=Un(),c=d=kt(p=P+=Px(Zo())),h++;break;case 45:v===45&&kt(P)==2&&(x=0)}}return o}function Df(e,t,n,r,i,o,s,a,l,u,c,d){for(var f=i-1,m=i===0?o:[""],v=j0(m),x=0,k=0,g=0;x<r;++x)for(var h=0,p=Mr(e,f+1,f=L0(k=s[x])),S=e;h<v;++h)(S=A0(k>0?m[h]+" "+p:I(p,/&\f/g,m[h])))&&(l[g++]=S);return ca(e,t,n,i===0?la:a,l,u,c,d)}function bx(e,t,n,r){return ca(e,t,n,T0,Oc(yx()),Mr(e,2,-2),0,r)}function Vf(e,t,n,r,i){return ca(e,t,n,Ic,Mr(e,0,r),Mr(e,r+1,-1),r,i)}function D0(e,t,n){switch(mx(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 4789:return Ci+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+Ci+e+G+e+e;case 5936:switch(ye(e,t+11)){case 114:return U+e+G+I(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+G+I(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+G+I(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return U+e+G+e+e;case 6165:return U+e+G+"flex-"+e+e;case 5187:return U+e+I(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+G+"flex-$1$2")+e;case 5443:return U+e+G+"flex-item-"+I(e,/flex-|-self/g,"")+(Mt(e,/flex-|baseline/)?"":G+"grid-row-"+I(e,/flex-|-self/g,""))+e;case 4675:return U+e+G+"flex-line-pack"+I(e,/align-content|flex-|-self/g,"")+e;case 5548:return U+e+G+I(e,"shrink","negative")+e;case 5292:return U+e+G+I(e,"basis","preferred-size")+e;case 6060:return U+"box-"+I(e,"-grow","")+U+e+G+I(e,"grow","positive")+e;case 4554:return U+I(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return I(I(I(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+G+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4200:if(!Mt(e,/flex-|baseline/))return G+"grid-column-align"+Mr(e,t)+e;break;case 2592:case 3360:return G+I(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Mt(r.props,/grid-\w+-end/)})?~Qo(e+(n=n[t].value),"span",0)?e:G+I(e,"-start","")+e+G+"grid-row-span:"+(~Qo(n,"span",0)?Mt(n,/\d+/):+Mt(n,/\d+/)-+Mt(e,/\d+/))+";":G+I(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Mt(r.props,/grid-\w+-start/)})?e:G+I(I(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kt(e)-1-t>6)switch(ye(e,t+1)){case 109:if(ye(e,t+4)!==45)break;case 102:return I(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+Ci+(ye(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Qo(e,"stretch",0)?D0(I(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return I(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return G+i+":"+o+u+(s?G+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(ye(e,t+6)===121)return I(e,":",":"+U)+e;break;case 6444:switch(ye(e,ye(e,14)===45?18:11)){case 120:return I(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+U+(ye(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+G+"$2box$3")+e;case 100:return I(e,":",":"+G)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return I(e,"scroll-","scroll-snap-")+e}return e}function Ms(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Tx(e,t,n,r){switch(e.type){case hx:if(e.children.length)break;case px:case Ic:return e.return=e.return||e.value;case T0:return"";case R0:return e.return=e.value+"{"+Ms(e.children,r)+"}";case la:if(!kt(e.value=e.props.join(",")))return""}return kt(n=Ms(e.children,r))?e.return=e.value+"{"+n+"}":""}function Rx(e){var t=j0(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function Lx(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ax(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ic:e.return=D0(e.value,e.length,n);return;case R0:return Ms([qt(e,{value:I(e.value,"@","@"+U)})],r);case la:if(e.length)return gx(n=e.props,function(i){switch(Mt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":er(qt(e,{props:[I(i,/:(read-\w+)/,":"+Ci+"$1")]})),er(qt(e,{props:[i]})),mu(e,{props:Mf(n,r)});break;case"::placeholder":er(qt(e,{props:[I(i,/:(plac\w+)/,":"+U+"input-$1")]})),er(qt(e,{props:[I(i,/:(plac\w+)/,":"+Ci+"$1")]})),er(qt(e,{props:[I(i,/:(plac\w+)/,G+"input-$1")]})),er(qt(e,{props:[i]})),mu(e,{props:Mf(n,r)});break}return""})}}var jx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Vr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",V0="active",z0="data-styled-version",fa="6.1.19",$c=`/*!sc*/
`,Ds=typeof window<"u"&&typeof document<"u",Mx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Dx={},pa=Object.freeze([]),zr=Object.freeze({});function N0(e,t,n){return n===void 0&&(n=zr),e.theme!==n.theme&&e.theme||t||n.theme}var F0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Vx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zx=/(^-|-$)/g;function zf(e){return e.replace(Vx,"-").replace(zx,"")}var Nx=/(a)(d)/gi,Lo=52,Nf=function(e){return String.fromCharCode(e+(e>25?39:97))};function vu(e){var t,n="";for(t=Math.abs(e);t>Lo;t=t/Lo|0)n=Nf(t%Lo)+n;return(Nf(t%Lo)+n).replace(Nx,"$1-$2")}var nl,I0=5381,pr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},O0=function(e){return pr(I0,e)};function _c(e){return vu(O0(e)>>>0)}function Fx(e){return e.displayName||e.name||"Component"}function rl(e){return typeof e=="string"&&!0}var $0=typeof Symbol=="function"&&Symbol.for,_0=$0?Symbol.for("react.memo"):60115,Ix=$0?Symbol.for("react.forward_ref"):60112,Ox={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$x={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},B0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_x=((nl={})[Ix]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},nl[_0]=B0,nl);function Ff(e){return("type"in(t=e)&&t.type.$$typeof)===_0?B0:"$$typeof"in e?_x[e.$$typeof]:Ox;var t}var Bx=Object.defineProperty,Ux=Object.getOwnPropertyNames,If=Object.getOwnPropertySymbols,Hx=Object.getOwnPropertyDescriptor,Wx=Object.getPrototypeOf,Of=Object.prototype;function U0(e,t,n){if(typeof t!="string"){if(Of){var r=Wx(t);r&&r!==Of&&U0(e,r,n)}var i=Ux(t);If&&(i=i.concat(If(t)));for(var o=Ff(e),s=Ff(t),a=0;a<i.length;++a){var l=i[a];if(!(l in $x||n&&n[l]||s&&l in s||o&&l in o)){var u=Hx(t,l);try{Bx(e,l,u)}catch{}}}}return e}function Nr(e){return typeof e=="function"}function Bc(e){return typeof e=="object"&&"styledComponentId"in e}function On(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Vs(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Gi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function xu(e,t,n){if(n===void 0&&(n=!1),!n&&!Gi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=xu(e[r],t[r]);else if(Gi(t))for(var r in t)e[r]=xu(e[r],t[r]);return e}function Uc(e,t){Object.defineProperty(e,"toString",{value:t})}function ro(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Yx=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw ro(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat($c);return n},e}(),Jo=new Map,zs=new Map,es=1,Ao=function(e){if(Jo.has(e))return Jo.get(e);for(;zs.has(es);)es++;var t=es++;return Jo.set(e,t),zs.set(t,e),t},Gx=function(e,t){es=t+1,Jo.set(e,t),zs.set(t,e)},Kx="style[".concat(Vr,"][").concat(z0,'="').concat(fa,'"]'),Xx=new RegExp("^".concat(Vr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Qx=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},Zx=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split($c),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(Xx);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(Gx(c,u),Qx(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}},$f=function(e){for(var t=document.querySelectorAll(Kx),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Vr)!==V0&&(Zx(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function qx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var H0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Vr,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Vr,V0),r.setAttribute(z0,fa);var s=qx();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},Jx=function(){function e(t){this.element=H0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw ro(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),e2=function(){function e(t){this.element=H0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),t2=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),_f=Ds,n2={isServer:!Ds,useCSSOMInjection:!Mx},Ns=function(){function e(t,n,r){t===void 0&&(t=zr),n===void 0&&(n={});var i=this;this.options=Re(Re({},n2),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ds&&_f&&(_f=!1,$f(this)),Uc(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(d){var f=function(g){return zs.get(g)}(d);if(f===void 0)return"continue";var m=o.names.get(f),v=s.getGroup(d);if(m===void 0||!m.size||v.length===0)return"continue";var x="".concat(Vr,".g").concat(d,'[id="').concat(f,'"]'),k="";m!==void 0&&m.forEach(function(g){g.length>0&&(k+="".concat(g,","))}),l+="".concat(v).concat(x,'{content:"').concat(k,'"}').concat($c)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return Ao(t)},e.prototype.rehydrate=function(){!this.server&&Ds&&$f(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Re(Re({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new t2(i):r?new Jx(i):new e2(i)}(this.options),new Yx(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ao(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ao(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ao(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),r2=/&/g,i2=/^\s*\/\/.*$/gm;function W0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=W0(n.children,t)),n})}function o2(e){var t,n,r,i=e===void 0?zr:e,o=i.options,s=o===void 0?zr:o,a=i.plugins,l=a===void 0?pa:a,u=function(f,m,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):f},c=l.slice();c.push(function(f){f.type===la&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(r2,n).replace(r,u))}),s.prefix&&c.push(Ax),c.push(Tx);var d=function(f,m,v,x){m===void 0&&(m=""),v===void 0&&(v=""),x===void 0&&(x="&"),t=x,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var k=f.replace(i2,""),g=Ex(v||m?"".concat(v," ").concat(m," { ").concat(k," }"):k);s.namespace&&(g=W0(g,s.namespace));var h=[];return Ms(g,Rx(c.concat(Lx(function(p){return h.push(p)})))),h};return d.hash=l.length?l.reduce(function(f,m){return m.name||ro(15),pr(f,m.name)},I0).toString():"",d}var s2=new Ns,wu=o2(),Y0=he.createContext({shouldForwardProp:void 0,styleSheet:s2,stylis:wu});Y0.Consumer;he.createContext(void 0);function Su(){return w.useContext(Y0)}var G0=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=wu);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Uc(this,function(){throw ro(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=wu),this.name+t.hash},e}(),a2=function(e){return e>="A"&&e<="Z"};function Bf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;a2(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var K0=function(e){return e==null||e===!1||e===""},X0=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!K0(o)&&(Array.isArray(o)&&o.isCss||Nr(o)?r.push("".concat(Bf(i),":"),o,";"):Gi(o)?r.push.apply(r,jr(jr(["".concat(i," {")],X0(o),!1),["}"],!1)):r.push("".concat(Bf(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in jx||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function yn(e,t,n,r){if(K0(e))return[];if(Bc(e))return[".".concat(e.styledComponentId)];if(Nr(e)){if(!Nr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return yn(i,t,n,r)}var o;return e instanceof G0?n?(e.inject(n,r),[e.getName(r)]):[e]:Gi(e)?X0(e):Array.isArray(e)?Array.prototype.concat.apply(pa,e.map(function(s){return yn(s,t,n,r)})):[e.toString()]}function Q0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Nr(n)&&!Bc(n))return!1}return!0}var l2=O0(fa),u2=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Q0(t),this.componentId=n,this.baseHash=pr(l2,n),this.baseStyle=r,Ns.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=On(i,this.staticRulesId);else{var o=Vs(yn(this.rules,t,n,r)),s=vu(pr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=On(i,s),this.staticRulesId=s}else{for(var l=pr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var f=Vs(yn(d,t,n,r));l=pr(l,f+c),u+=f}}if(u){var m=vu(l>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(u,".".concat(m),void 0,this.componentId)),i=On(i,m)}}return i},e}(),Hc=he.createContext(void 0);Hc.Consumer;var il={};function c2(e,t,n){var r=Bc(e),i=e,o=!rl(e),s=t.attrs,a=s===void 0?pa:s,l=t.componentId,u=l===void 0?function(S,C){var E=typeof S!="string"?"sc":zf(S);il[E]=(il[E]||0)+1;var P="".concat(E,"-").concat(_c(fa+E+il[E]));return C?"".concat(C,"-").concat(P):P}(t.displayName,t.parentComponentId):l,c=t.displayName,d=c===void 0?function(S){return rl(S)?"styled.".concat(S):"Styled(".concat(Fx(S),")")}(e):c,f=t.displayName&&t.componentId?"".concat(zf(t.displayName),"-").concat(t.componentId):t.componentId||u,m=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;v=function(S,C){return x(S,C)&&k(S,C)}}else v=x}var g=new u2(n,f,r?i.componentStyle:void 0);function h(S,C){return function(E,P,T){var A=E.attrs,D=E.componentStyle,Q=E.defaultProps,de=E.foldedComponentIds,xe=E.styledComponentId,ae=E.target,vt=he.useContext(Hc),Z=Su(),Pe=E.shouldForwardProp||Z.shouldForwardProp,L=N0(P,vt,Q)||zr,M=function(st,fe,Xe){for(var Ln,at=Re(Re({},fe),{className:void 0,theme:Xe}),Qt=0;Qt<st.length;Qt+=1){var Qe=Nr(Ln=st[Qt])?Ln(at):Ln;for(var At in Qe)at[At]=At==="className"?On(at[At],Qe[At]):At==="style"?Re(Re({},at[At]),Qe[At]):Qe[At]}return fe.className&&(at.className=On(at.className,fe.className)),at}(A,P,L),F=M.as||ae,z={};for(var $ in M)M[$]===void 0||$[0]==="$"||$==="as"||$==="theme"&&M.theme===L||($==="forwardedAs"?z.as=M.forwardedAs:Pe&&!Pe($,F)||(z[$]=M[$]));var xt=function(st,fe){var Xe=Su(),Ln=st.generateAndInjectStyles(fe,Xe.styleSheet,Xe.stylis);return Ln}(D,M),ze=On(de,xe);return xt&&(ze+=" "+xt),M.className&&(ze+=" "+M.className),z[rl(F)&&!F0.has(F)?"class":"className"]=ze,T&&(z.ref=T),w.createElement(F,z)}(p,S,C)}h.displayName=d;var p=he.forwardRef(h);return p.attrs=m,p.componentStyle=g,p.displayName=d,p.shouldForwardProp=v,p.foldedComponentIds=r?On(i.foldedComponentIds,i.styledComponentId):"",p.styledComponentId=f,p.target=r?i.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(C){for(var E=[],P=1;P<arguments.length;P++)E[P-1]=arguments[P];for(var T=0,A=E;T<A.length;T++)xu(C,A[T],!0);return C}({},i.defaultProps,S):S}}),Uc(p,function(){return".".concat(p.styledComponentId)}),o&&U0(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Uf(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Hf=function(e){return Object.assign(e,{isCss:!0})};function Wc(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Nr(e)||Gi(e))return Hf(yn(Uf(pa,jr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?yn(r):Hf(yn(Uf(r,t)))}function ku(e,t,n){if(n===void 0&&(n=zr),!t)throw ro(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,Wc.apply(void 0,jr([i],o,!1)))};return r.attrs=function(i){return ku(e,t,Re(Re({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ku(e,t,Re(Re({},n),i))},r}var Z0=function(e){return ku(c2,e)},b=Z0;F0.forEach(function(e){b[e]=Z0(e)});var d2=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Q0(t),Ns.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Vs(yn(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Ns.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function f2(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Wc.apply(void 0,jr([e],t,!1)),i="sc-global-".concat(_c(JSON.stringify(r))),o=new d2(r,i),s=function(l){var u=Su(),c=he.useContext(Hc),d=he.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(d,l,u.styleSheet,c,u.stylis),he.useLayoutEffect(function(){if(!u.styleSheet.server)return a(d,l,u.styleSheet,c,u.stylis),function(){return o.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,d,f){if(o.isStatic)o.renderStyles(l,Dx,c,f);else{var m=Re(Re({},u),{theme:N0(u,d,s.defaultProps)});o.renderStyles(l,m,c,f)}}return he.memo(s)}function Gt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Vs(Wc.apply(void 0,jr([e],t,!1))),i=_c(r);return new G0(i,r)}const p2=f2`
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
`,h2="modulepreload",m2=function(e){return"/"+e},Wf={},g2=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=m2(o),o in Wf)return;Wf[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const d=i[c];if(d.href===o&&(!s||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":h2,s||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),s)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})};var Yf="popstate";function y2(e={}){function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Cu("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ki(i)}return x2(t,n,null,e)}function te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Rt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function v2(){return Math.random().toString(36).substring(2,10)}function Gf(e,t){return{usr:e.state,key:e.key,idx:t}}function Cu(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Ur(t):t,state:n,key:t&&t.key||r||v2()}}function Ki({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Ur(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function x2(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a="POP",l=null,u=c();u==null&&(u=0,s.replaceState({...s.state,idx:u},""));function c(){return(s.state||{idx:null}).idx}function d(){a="POP";let k=c(),g=k==null?null:k-u;u=k,l&&l({action:a,location:x.location,delta:g})}function f(k,g){a="PUSH";let h=Cu(x.location,k,g);n&&n(h,k),u=c()+1;let p=Gf(h,u),S=x.createHref(h);try{s.pushState(p,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(S)}o&&l&&l({action:a,location:x.location,delta:1})}function m(k,g){a="REPLACE";let h=Cu(x.location,k,g);n&&n(h,k),u=c();let p=Gf(h,u),S=x.createHref(h);s.replaceState(p,"",S),o&&l&&l({action:a,location:x.location,delta:0})}function v(k){return w2(k)}let x={get action(){return a},get location(){return e(i,s)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Yf,d),l=k,()=>{i.removeEventListener(Yf,d),l=null}},createHref(k){return t(i,k)},createURL:v,encodeLocation(k){let g=v(k);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:m,go(k){return s.go(k)}};return x}function w2(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),te(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:Ki(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function q0(e,t,n="/"){return S2(e,t,n,!1)}function S2(e,t,n,r){let i=typeof t=="string"?Ur(t):t,o=Wt(i.pathname||"/",n);if(o==null)return null;let s=J0(e);k2(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=D2(o);a=j2(s[l],u,r)}return a}function J0(e,t=[],n=[],r="",i=!1){let o=(s,a,l=i,u)=>{let c={relativePath:u===void 0?s.path||"":u,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};if(c.relativePath.startsWith("/")){if(!c.relativePath.startsWith(r)&&l)return;te(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let d=It([r,c.relativePath]),f=n.concat(c);s.children&&s.children.length>0&&(te(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),J0(s.children,t,f,d,l)),!(s.path==null&&!s.index)&&t.push({path:d,score:L2(d,s.index),routesMeta:f})};return e.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))o(s,a);else for(let u of eg(s.path))o(s,a,!0,u)}),t}function eg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=eg(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function k2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:A2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var C2=/^:[\w-]+$/,P2=3,E2=2,b2=1,T2=10,R2=-2,Kf=e=>e==="*";function L2(e,t){let n=e.split("/"),r=n.length;return n.some(Kf)&&(r+=R2),t&&(r+=E2),n.filter(i=>!Kf(i)).reduce((i,o)=>i+(C2.test(o)?P2:o===""?b2:T2),r)}function A2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function j2(e,t,n=!1){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,c=o==="/"?t:t.slice(o.length)||"/",d=Fs({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),f=l.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=Fs({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!d)return null;Object.assign(i,d.params),s.push({params:i,pathname:It([o,d.pathname]),pathnameBase:F2(It([o,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(o=It([o,d.pathnameBase]))}return s}function Fs(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=M2(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,{paramName:c,isOptional:d},f)=>{if(c==="*"){let v=a[f]||"";s=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const m=a[f];return d&&!m?u[c]=void 0:u[c]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function M2(e,t=!1,n=!0){Rt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function D2(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Rt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Wt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function V2(e,t="/"){let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ur(e):e;return{pathname:n?n.startsWith("/")?n:z2(n,t):t,search:I2(r),hash:O2(i)}}function z2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ol(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function N2(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function tg(e){let t=N2(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function ng(e,t,n,r=!1){let i;typeof e=="string"?i=Ur(e):(i={...e},te(!i.pathname||!i.pathname.includes("?"),ol("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),ol("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),ol("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?t[d]:"/"}let l=V2(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}var It=e=>e.join("/").replace(/\/\/+/g,"/"),F2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),I2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,O2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function $2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var rg=["POST","PUT","PATCH","DELETE"];new Set(rg);var _2=["GET",...rg];new Set(_2);var Hr=w.createContext(null);Hr.displayName="DataRouter";var ha=w.createContext(null);ha.displayName="DataRouterState";w.createContext(!1);var ig=w.createContext({isTransitioning:!1});ig.displayName="ViewTransition";var B2=w.createContext(new Map);B2.displayName="Fetchers";var U2=w.createContext(null);U2.displayName="Await";var Lt=w.createContext(null);Lt.displayName="Navigation";var io=w.createContext(null);io.displayName="Location";var Kt=w.createContext({outlet:null,matches:[],isDataRoute:!1});Kt.displayName="Route";var Yc=w.createContext(null);Yc.displayName="RouteError";function H2(e,{relative:t}={}){te(oo(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=w.useContext(Lt),{hash:i,pathname:o,search:s}=so(e,{relative:t}),a=o;return n!=="/"&&(a=o==="/"?n:It([n,o])),r.createHref({pathname:a,search:s,hash:i})}function oo(){return w.useContext(io)!=null}function Xt(){return te(oo(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(io).location}var og="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function sg(e){w.useContext(Lt).static||w.useLayoutEffect(e)}function W2(){let{isDataRoute:e}=w.useContext(Kt);return e?iw():Y2()}function Y2(){te(oo(),"useNavigate() may be used only in the context of a <Router> component.");let e=w.useContext(Hr),{basename:t,navigator:n}=w.useContext(Lt),{matches:r}=w.useContext(Kt),{pathname:i}=Xt(),o=JSON.stringify(tg(r)),s=w.useRef(!1);return sg(()=>{s.current=!0}),w.useCallback((l,u={})=>{if(Rt(s.current,og),!s.current)return;if(typeof l=="number"){n.go(l);return}let c=ng(l,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:It([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,o,i,e])}w.createContext(null);function so(e,{relative:t}={}){let{matches:n}=w.useContext(Kt),{pathname:r}=Xt(),i=JSON.stringify(tg(n));return w.useMemo(()=>ng(e,JSON.parse(i),r,t==="path"),[e,i,r,t])}function G2(e,t){return ag(e,t)}function ag(e,t,n,r,i){var h;te(oo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=w.useContext(Lt),{matches:s}=w.useContext(Kt),a=s[s.length-1],l=a?a.params:{},u=a?a.pathname:"/",c=a?a.pathnameBase:"/",d=a&&a.route;{let p=d&&d.path||"";lg(u,!d||p.endsWith("*")||p.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${p}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${p}"> to <Route path="${p==="/"?"*":`${p}/*`}">.`)}let f=Xt(),m;if(t){let p=typeof t=="string"?Ur(t):t;te(c==="/"||((h=p.pathname)==null?void 0:h.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${p.pathname}" was given in the \`location\` prop.`),m=p}else m=f;let v=m.pathname||"/",x=v;if(c!=="/"){let p=c.replace(/^\//,"").split("/");x="/"+v.replace(/^\//,"").split("/").slice(p.length).join("/")}let k=q0(e,{pathname:x});Rt(d||k!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),Rt(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let g=q2(k&&k.map(p=>Object.assign({},p,{params:Object.assign({},l,p.params),pathname:It([c,o.encodeLocation?o.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?c:It([c,o.encodeLocation?o.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,r,i);return t&&g?w.createElement(io.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},g):g}function K2(){let e=rw(),t=$2(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:o},"ErrorBoundary")," or"," ",w.createElement("code",{style:o},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,s)}var X2=w.createElement(K2,null),Q2=class extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?w.createElement(Kt.Provider,{value:this.props.routeContext},w.createElement(Yc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Z2({routeContext:e,match:t,children:n}){let r=w.useContext(Hr);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(Kt.Provider,{value:e},n)}function q2(e,t=[],n=null,r=null,i=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=n==null?void 0:n.errors;if(s!=null){let u=o.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);te(u>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),o=o.slice(0,Math.min(o.length,u+1))}let a=!1,l=-1;if(n)for(let u=0;u<o.length;u++){let c=o[u];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(l=u),c.route.id){let{loaderData:d,errors:f}=n,m=c.route.loader&&!d.hasOwnProperty(c.route.id)&&(!f||f[c.route.id]===void 0);if(c.route.lazy||m){a=!0,l>=0?o=o.slice(0,l+1):o=[o[0]];break}}}return o.reduceRight((u,c,d)=>{let f,m=!1,v=null,x=null;n&&(f=s&&c.route.id?s[c.route.id]:void 0,v=c.route.errorElement||X2,a&&(l<0&&d===0?(lg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),m=!0,x=null):l===d&&(m=!0,x=c.route.hydrateFallbackElement||null)));let k=t.concat(o.slice(0,d+1)),g=()=>{let h;return f?h=v:m?h=x:c.route.Component?h=w.createElement(c.route.Component,null):c.route.element?h=c.route.element:h=u,w.createElement(Z2,{match:c,routeContext:{outlet:u,matches:k,isDataRoute:n!=null},children:h})};return n&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?w.createElement(Q2,{location:n.location,revalidation:n.revalidation,component:v,error:f,children:g(),routeContext:{outlet:null,matches:k,isDataRoute:!0},unstable_onError:r}):g()},null)}function Gc(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function J2(e){let t=w.useContext(Hr);return te(t,Gc(e)),t}function ew(e){let t=w.useContext(ha);return te(t,Gc(e)),t}function tw(e){let t=w.useContext(Kt);return te(t,Gc(e)),t}function Kc(e){let t=tw(e),n=t.matches[t.matches.length-1];return te(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function nw(){return Kc("useRouteId")}function rw(){var r;let e=w.useContext(Yc),t=ew("useRouteError"),n=Kc("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function iw(){let{router:e}=J2("useNavigate"),t=Kc("useNavigate"),n=w.useRef(!1);return sg(()=>{n.current=!0}),w.useCallback(async(i,o={})=>{Rt(n.current,og),n.current&&(typeof i=="number"?e.navigate(i):await e.navigate(i,{fromRouteId:t,...o}))},[e,t])}var Xf={};function lg(e,t,n){!t&&!Xf[e]&&(Xf[e]=!0,Rt(!1,n))}w.memo(ow);function ow({routes:e,future:t,state:n,unstable_onError:r}){return ag(e,void 0,n,r,t)}function fi(e){te(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function sw({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:o=!1}){te(!oo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),a=w.useMemo(()=>({basename:s,navigator:i,static:o,future:{}}),[s,i,o]);typeof n=="string"&&(n=Ur(n));let{pathname:l="/",search:u="",hash:c="",state:d=null,key:f="default"}=n,m=w.useMemo(()=>{let v=Wt(l,s);return v==null?null:{location:{pathname:v,search:u,hash:c,state:d,key:f},navigationType:r}},[s,l,u,c,d,f,r]);return Rt(m!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${c}" because it does not start with the basename, so the <Router> won't render anything.`),m==null?null:w.createElement(Lt.Provider,{value:a},w.createElement(io.Provider,{children:t,value:m}))}function aw({children:e,location:t}){return G2(Pu(e),t)}function Pu(e,t=[]){let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let o=[...t,i];if(r.type===w.Fragment){n.push.apply(n,Pu(r.props.children,o));return}te(r.type===fi,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),te(!r.props.index||!r.props.children,"An index route cannot have child routes.");let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Pu(r.props.children,o)),n.push(s)}),n}var ts="get",ns="application/x-www-form-urlencoded";function ma(e){return e!=null&&typeof e.tagName=="string"}function lw(e){return ma(e)&&e.tagName.toLowerCase()==="button"}function uw(e){return ma(e)&&e.tagName.toLowerCase()==="form"}function cw(e){return ma(e)&&e.tagName.toLowerCase()==="input"}function dw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function fw(e,t){return e.button===0&&(!t||t==="_self")&&!dw(e)}var jo=null;function pw(){if(jo===null)try{new FormData(document.createElement("form"),0),jo=!1}catch{jo=!0}return jo}var hw=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function sl(e){return e!=null&&!hw.has(e)?(Rt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ns}"`),null):e}function mw(e,t){let n,r,i,o,s;if(uw(e)){let a=e.getAttribute("action");r=a?Wt(a,t):null,n=e.getAttribute("method")||ts,i=sl(e.getAttribute("enctype"))||ns,o=new FormData(e)}else if(lw(e)||cw(e)&&(e.type==="submit"||e.type==="image")){let a=e.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||a.getAttribute("action");if(r=l?Wt(l,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||ts,i=sl(e.getAttribute("formenctype"))||sl(a.getAttribute("enctype"))||ns,o=new FormData(a,e),!pw()){let{name:u,type:c,value:d}=e;if(c==="image"){let f=u?`${u}.`:"";o.append(`${f}x`,"0"),o.append(`${f}y`,"0")}else u&&o.append(u,d)}}else{if(ma(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ts,r=null,i=ns,s=e}return o&&i==="text/plain"&&(s=o,o=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:o,body:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Xc(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function gw(e,t,n){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname=`_root.${n}`:t&&Wt(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function yw(e,t){if(e.id in t)return t[e.id];try{let n=await g2(()=>import(e.module),[]);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function vw(e){return e!=null&&typeof e.page=="string"}function xw(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function ww(e,t,n){let r=await Promise.all(e.map(async i=>{let o=t.routes[i.route.id];if(o){let s=await yw(o,n);return s.links?s.links():[]}return[]}));return Pw(r.flat(1).filter(xw).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Qf(e,t,n,r,i,o){let s=(l,u)=>n[u]?l.route.id!==n[u].route.id:!0,a=(l,u)=>{var c;return n[u].pathname!==l.pathname||((c=n[u].route.path)==null?void 0:c.endsWith("*"))&&n[u].params["*"]!==l.params["*"]};return o==="assets"?t.filter((l,u)=>s(l,u)||a(l,u)):o==="data"?t.filter((l,u)=>{var d;let c=r.routes[l.route.id];if(!c||!c.hasLoader)return!1;if(s(l,u)||a(l,u))return!0;if(l.route.shouldRevalidate){let f=l.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((d=n[0])==null?void 0:d.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function Sw(e,t,{includeHydrateFallback:n}={}){return kw(e.map(r=>{let i=t.routes[r.route.id];if(!i)return[];let o=[i.module];return i.clientActionModule&&(o=o.concat(i.clientActionModule)),i.clientLoaderModule&&(o=o.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(o=o.concat(i.hydrateFallbackModule)),i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function kw(e){return[...new Set(e)]}function Cw(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Pw(e,t){let n=new Set,r=new Set(t);return e.reduce((i,o)=>{if(t&&!vw(o)&&o.as==="script"&&o.href&&r.has(o.href))return i;let a=JSON.stringify(Cw(o));return n.has(a)||(n.add(a),i.push({key:a,link:o})),i},[])}function ug(){let e=w.useContext(Hr);return Xc(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Ew(){let e=w.useContext(ha);return Xc(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Qc=w.createContext(void 0);Qc.displayName="FrameworkContext";function cg(){let e=w.useContext(Qc);return Xc(e,"You must render this element inside a <HydratedRouter> element"),e}function bw(e,t){let n=w.useContext(Qc),[r,i]=w.useState(!1),[o,s]=w.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:u,onMouseLeave:c,onTouchStart:d}=t,f=w.useRef(null);w.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let x=g=>{g.forEach(h=>{s(h.isIntersecting)})},k=new IntersectionObserver(x,{threshold:.5});return f.current&&k.observe(f.current),()=>{k.disconnect()}}},[e]),w.useEffect(()=>{if(r){let x=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(x)}}},[r]);let m=()=>{i(!0)},v=()=>{i(!1),s(!1)};return n?e!=="intent"?[o,f,{}]:[o,f,{onFocus:ti(a,m),onBlur:ti(l,v),onMouseEnter:ti(u,m),onMouseLeave:ti(c,v),onTouchStart:ti(d,m)}]:[!1,f,{}]}function ti(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Tw({page:e,...t}){let{router:n}=ug(),r=w.useMemo(()=>q0(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?w.createElement(Lw,{page:e,matches:r,...t}):null}function Rw(e){let{manifest:t,routeModules:n}=cg(),[r,i]=w.useState([]);return w.useEffect(()=>{let o=!1;return ww(e,t,n).then(s=>{o||i(s)}),()=>{o=!0}},[e,t,n]),r}function Lw({page:e,matches:t,...n}){let r=Xt(),{manifest:i,routeModules:o}=cg(),{basename:s}=ug(),{loaderData:a,matches:l}=Ew(),u=w.useMemo(()=>Qf(e,t,l,i,r,"data"),[e,t,l,i,r]),c=w.useMemo(()=>Qf(e,t,l,i,r,"assets"),[e,t,l,i,r]),d=w.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let v=new Set,x=!1;if(t.forEach(g=>{var p;let h=i.routes[g.route.id];!h||!h.hasLoader||(!u.some(S=>S.route.id===g.route.id)&&g.route.id in a&&((p=o[g.route.id])!=null&&p.shouldRevalidate)||h.hasClientLoader?x=!0:v.add(g.route.id))}),v.size===0)return[];let k=gw(e,s,"data");return x&&v.size>0&&k.searchParams.set("_routes",t.filter(g=>v.has(g.route.id)).map(g=>g.route.id).join(",")),[k.pathname+k.search]},[s,a,r,i,u,t,e,o]),f=w.useMemo(()=>Sw(c,i),[c,i]),m=Rw(c);return w.createElement(w.Fragment,null,d.map(v=>w.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...n})),f.map(v=>w.createElement("link",{key:v,rel:"modulepreload",href:v,...n})),m.map(({key:v,link:x})=>w.createElement("link",{key:v,nonce:n.nonce,...x})))}function Aw(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var dg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{dg&&(window.__reactRouterVersion="7.9.1")}catch{}function jw({basename:e,children:t,window:n}){let r=w.useRef();r.current==null&&(r.current=y2({window:n,v5Compat:!0}));let i=r.current,[o,s]=w.useState({action:i.action,location:i.location}),a=w.useCallback(l=>{w.startTransition(()=>s(l))},[s]);return w.useLayoutEffect(()=>i.listen(a),[i,a]),w.createElement(sw,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:i})}var fg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zc=w.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c,viewTransition:d,...f},m){let{basename:v}=w.useContext(Lt),x=typeof u=="string"&&fg.test(u),k,g=!1;if(typeof u=="string"&&x&&(k=u,dg))try{let A=new URL(window.location.href),D=u.startsWith("//")?new URL(A.protocol+u):new URL(u),Q=Wt(D.pathname,v);D.origin===A.origin&&Q!=null?u=Q+D.search+D.hash:g=!0}catch{Rt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let h=H2(u,{relative:i}),[p,S,C]=bw(r,f),E=zw(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i,viewTransition:d});function P(A){t&&t(A),A.defaultPrevented||E(A)}let T=w.createElement("a",{...f,...C,href:k||h,onClick:g||o?t:P,ref:Aw(m,S),target:l,"data-discover":!x&&n==="render"?"true":void 0});return p&&!x?w.createElement(w.Fragment,null,T,w.createElement(Tw,{page:h})):T});Zc.displayName="Link";var Mw=w.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:i=!1,style:o,to:s,viewTransition:a,children:l,...u},c){let d=so(s,{relative:u.relative}),f=Xt(),m=w.useContext(ha),{navigator:v,basename:x}=w.useContext(Lt),k=m!=null&&$w(d)&&a===!0,g=v.encodeLocation?v.encodeLocation(d).pathname:d.pathname,h=f.pathname,p=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;n||(h=h.toLowerCase(),p=p?p.toLowerCase():null,g=g.toLowerCase()),p&&x&&(p=Wt(p,x)||p);const S=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let C=h===g||!i&&h.startsWith(g)&&h.charAt(S)==="/",E=p!=null&&(p===g||!i&&p.startsWith(g)&&p.charAt(g.length)==="/"),P={isActive:C,isPending:E,isTransitioning:k},T=C?t:void 0,A;typeof r=="function"?A=r(P):A=[r,C?"active":null,E?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let D=typeof o=="function"?o(P):o;return w.createElement(Zc,{...u,"aria-current":T,className:A,ref:c,style:D,to:s,viewTransition:a},typeof l=="function"?l(P):l)});Mw.displayName="NavLink";var Dw=w.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:o,method:s=ts,action:a,onSubmit:l,relative:u,preventScrollReset:c,viewTransition:d,...f},m)=>{let v=Iw(),x=Ow(a,{relative:u}),k=s.toLowerCase()==="get"?"get":"post",g=typeof a=="string"&&fg.test(a),h=p=>{if(l&&l(p),p.defaultPrevented)return;p.preventDefault();let S=p.nativeEvent.submitter,C=(S==null?void 0:S.getAttribute("formmethod"))||s;v(S||p.currentTarget,{fetcherKey:t,method:C,navigate:n,replace:i,state:o,relative:u,preventScrollReset:c,viewTransition:d})};return w.createElement("form",{ref:m,method:k,action:x,onSubmit:r?l:h,...f,"data-discover":!g&&e==="render"?"true":void 0})});Dw.displayName="Form";function Vw(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function pg(e){let t=w.useContext(Hr);return te(t,Vw(e)),t}function zw(e,{target:t,replace:n,state:r,preventScrollReset:i,relative:o,viewTransition:s}={}){let a=W2(),l=Xt(),u=so(e,{relative:o});return w.useCallback(c=>{if(fw(c,t)){c.preventDefault();let d=n!==void 0?n:Ki(l)===Ki(u);a(e,{replace:d,state:r,preventScrollReset:i,relative:o,viewTransition:s})}},[l,a,u,n,r,t,e,i,o,s])}var Nw=0,Fw=()=>`__${String(++Nw)}__`;function Iw(){let{router:e}=pg("useSubmit"),{basename:t}=w.useContext(Lt),n=nw();return w.useCallback(async(r,i={})=>{let{action:o,method:s,encType:a,formData:l,body:u}=mw(r,t);if(i.navigate===!1){let c=i.fetcherKey||Fw();await e.fetch(c,n,i.action||o,{preventScrollReset:i.preventScrollReset,formData:l,body:u,formMethod:i.method||s,formEncType:i.encType||a,flushSync:i.flushSync})}else await e.navigate(i.action||o,{preventScrollReset:i.preventScrollReset,formData:l,body:u,formMethod:i.method||s,formEncType:i.encType||a,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[e,t,n])}function Ow(e,{relative:t}={}){let{basename:n}=w.useContext(Lt),r=w.useContext(Kt);te(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),o={...so(e||".",{relative:t})},s=Xt();if(e==null){o.search=s.search;let a=new URLSearchParams(o.search),l=a.getAll("index");if(l.some(c=>c==="")){a.delete("index"),l.filter(d=>d).forEach(d=>a.append("index",d));let c=a.toString();o.search=c?`?${c}`:""}}return(!e||e===".")&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:It([n,o.pathname])),Ki(o)}function $w(e,{relative:t}={}){let n=w.useContext(ig);te(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=pg("useViewTransitionState"),i=so(e,{relative:t});if(!n.isTransitioning)return!1;let o=Wt(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=Wt(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Fs(i.pathname,s)!=null||Fs(i.pathname,o)!=null}const qc=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),ga=w.createContext({}),ya=w.createContext(null),va=typeof document<"u",Wr=va?w.useLayoutEffect:w.useEffect,hg=w.createContext({strict:!1}),Jc=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),_w="framerAppearId",mg="data-"+Jc(_w);function Bw(e,t,n,r){const{visualElement:i}=w.useContext(ga),o=w.useContext(hg),s=w.useContext(ya),a=w.useContext(qc).reducedMotion,l=w.useRef();r=r||o.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;w.useInsertionEffect(()=>{u&&u.update(n,s)});const c=w.useRef(!!(n[mg]&&!window.HandoffComplete));return Wr(()=>{u&&(u.render(),c.current&&u.animationState&&u.animationState.animateChanges())}),w.useEffect(()=>{u&&(u.updateFeatures(),!c.current&&u.animationState&&u.animationState.animateChanges(),c.current&&(c.current=!1,window.HandoffComplete=!0))}),u}function hr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Uw(e,t,n){return w.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):hr(n)&&(n.current=r))},[t])}function Xi(e){return typeof e=="string"||Array.isArray(e)}function xa(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const ed=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],td=["initial",...ed];function wa(e){return xa(e.animate)||td.some(t=>Xi(e[t]))}function gg(e){return!!(wa(e)||e.variants)}function Hw(e,t){if(wa(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Xi(n)?n:void 0,animate:Xi(r)?r:void 0}}return e.inherit!==!1?t:{}}function Ww(e){const{initial:t,animate:n}=Hw(e,w.useContext(ga));return w.useMemo(()=>({initial:t,animate:n}),[Zf(t),Zf(n)])}function Zf(e){return Array.isArray(e)?e.join(" "):e}const qf={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Qi={};for(const e in qf)Qi[e]={isEnabled:t=>qf[e].some(n=>!!t[n])};function Yw(e){for(const t in e)Qi[t]={...Qi[t],...e[t]}}const nd=w.createContext({}),yg=w.createContext({}),Gw=Symbol.for("motionComponentSymbol");function Kw({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&Yw(e);function o(a,l){let u;const c={...w.useContext(qc),...a,layoutId:Xw(a)},{isStatic:d}=c,f=Ww(a),m=r(a,d);if(!d&&va){f.visualElement=Bw(i,m,c,t);const v=w.useContext(yg),x=w.useContext(hg).strict;f.visualElement&&(u=f.visualElement.loadFeatures(c,x,e,v))}return w.createElement(ga.Provider,{value:f},u&&f.visualElement?w.createElement(u,{visualElement:f.visualElement,...c}):null,n(i,a,Uw(m,f.visualElement,l),m,d,f.visualElement))}const s=w.forwardRef(o);return s[Gw]=i,s}function Xw({layoutId:e}){const t=w.useContext(nd).id;return t&&e!==void 0?t+"-"+e:e}function Qw(e){function t(r,i={}){return Kw(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const Zw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function rd(e){return typeof e!="string"||e.includes("-")?!1:!!(Zw.indexOf(e)>-1||/[A-Z]/.test(e))}const Is={};function qw(e){Object.assign(Is,e)}const ao=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Zn=new Set(ao);function vg(e,{layout:t,layoutId:n}){return Zn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Is[e]||e==="opacity")}const _e=e=>!!(e&&e.getVelocity),Jw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},e5=ao.length;function t5(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let o="";for(let s=0;s<e5;s++){const a=ao[s];if(e[a]!==void 0){const l=Jw[a]||a;o+=`${l}(${e[a]}) `}}return t&&!e.z&&(o+="translateZ(0)"),o=o.trim(),i?o=i(e,r?"":o):n&&r&&(o="none"),o}const xg=e=>t=>typeof t=="string"&&t.startsWith(e),wg=xg("--"),Eu=xg("var(--"),n5=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,r5=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Cn=(e,t,n)=>Math.min(Math.max(n,e),t),qn={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Pi={...qn,transform:e=>Cn(0,1,e)},Mo={...qn,default:1},Ei=e=>Math.round(e*1e5)/1e5,Sa=/(-)?([\d]*\.?[\d])+/g,Sg=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,i5=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function lo(e){return typeof e=="string"}const uo=e=>({test:t=>lo(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Jt=uo("deg"),Tt=uo("%"),N=uo("px"),o5=uo("vh"),s5=uo("vw"),Jf={...Tt,parse:e=>Tt.parse(e)/100,transform:e=>Tt.transform(e*100)},ep={...qn,transform:Math.round},kg={borderWidth:N,borderTopWidth:N,borderRightWidth:N,borderBottomWidth:N,borderLeftWidth:N,borderRadius:N,radius:N,borderTopLeftRadius:N,borderTopRightRadius:N,borderBottomRightRadius:N,borderBottomLeftRadius:N,width:N,maxWidth:N,height:N,maxHeight:N,size:N,top:N,right:N,bottom:N,left:N,padding:N,paddingTop:N,paddingRight:N,paddingBottom:N,paddingLeft:N,margin:N,marginTop:N,marginRight:N,marginBottom:N,marginLeft:N,rotate:Jt,rotateX:Jt,rotateY:Jt,rotateZ:Jt,scale:Mo,scaleX:Mo,scaleY:Mo,scaleZ:Mo,skew:Jt,skewX:Jt,skewY:Jt,distance:N,translateX:N,translateY:N,translateZ:N,x:N,y:N,z:N,perspective:N,transformPerspective:N,opacity:Pi,originX:Jf,originY:Jf,originZ:N,zIndex:ep,fillOpacity:Pi,strokeOpacity:Pi,numOctaves:ep};function id(e,t,n,r){const{style:i,vars:o,transform:s,transformOrigin:a}=e;let l=!1,u=!1,c=!0;for(const d in t){const f=t[d];if(wg(d)){o[d]=f;continue}const m=kg[d],v=r5(f,m);if(Zn.has(d)){if(l=!0,s[d]=v,!c)continue;f!==(m.default||0)&&(c=!1)}else d.startsWith("origin")?(u=!0,a[d]=v):i[d]=v}if(t.transform||(l||r?i.transform=t5(e.transform,n,c,r):i.transform&&(i.transform="none")),u){const{originX:d="50%",originY:f="50%",originZ:m=0}=a;i.transformOrigin=`${d} ${f} ${m}`}}const od=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Cg(e,t,n){for(const r in t)!_e(t[r])&&!vg(r,n)&&(e[r]=t[r])}function a5({transformTemplate:e},t,n){return w.useMemo(()=>{const r=od();return id(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function l5(e,t,n){const r=e.style||{},i={};return Cg(i,r,e),Object.assign(i,a5(e,t,n)),e.transformValues?e.transformValues(i):i}function u5(e,t,n){const r={},i=l5(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const c5=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Os(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||c5.has(e)}let Pg=e=>!Os(e);function d5(e){e&&(Pg=t=>t.startsWith("on")?!Os(t):e(t))}try{d5(require("@emotion/is-prop-valid").default)}catch{}function f5(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Pg(i)||n===!0&&Os(i)||!t&&!Os(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function tp(e,t,n){return typeof e=="string"?e:N.transform(t+n*e)}function p5(e,t,n){const r=tp(t,e.x,e.width),i=tp(n,e.y,e.height);return`${r} ${i}`}const h5={offset:"stroke-dashoffset",array:"stroke-dasharray"},m5={offset:"strokeDashoffset",array:"strokeDasharray"};function g5(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?h5:m5;e[o.offset]=N.transform(-r);const s=N.transform(t),a=N.transform(n);e[o.array]=`${s} ${a}`}function sd(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},c,d,f){if(id(e,u,c,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:m,style:v,dimensions:x}=e;m.transform&&(x&&(v.transform=m.transform),delete m.transform),x&&(i!==void 0||o!==void 0||v.transform)&&(v.transformOrigin=p5(x,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(m.x=t),n!==void 0&&(m.y=n),r!==void 0&&(m.scale=r),s!==void 0&&g5(m,s,a,l,!1)}const Eg=()=>({...od(),attrs:{}}),ad=e=>typeof e=="string"&&e.toLowerCase()==="svg";function y5(e,t,n,r){const i=w.useMemo(()=>{const o=Eg();return sd(o,t,{enableHardwareAcceleration:!1},ad(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};Cg(o,e.style,e),i.style={...o,...i.style}}return i}function v5(e=!1){return(n,r,i,{latestValues:o},s)=>{const l=(rd(n)?y5:u5)(r,o,s,n),c={...f5(r,typeof n=="string",e),...l,ref:i},{children:d}=r,f=w.useMemo(()=>_e(d)?d.get():d,[d]);return w.createElement(n,{...c,children:f})}}function bg(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const Tg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Rg(e,t,n,r){bg(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Tg.has(i)?i:Jc(i),t.attrs[i])}function ld(e,t){const{style:n}=e,r={};for(const i in n)(_e(n[i])||t.style&&_e(t.style[i])||vg(i,e))&&(r[i]=n[i]);return r}function Lg(e,t){const n=ld(e,t);for(const r in e)if(_e(e[r])||_e(t[r])){const i=ao.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=e[r]}return n}function ud(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}function Yr(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}const $s=e=>Array.isArray(e),x5=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),w5=e=>$s(e)?e[e.length-1]||0:e;function rs(e){const t=_e(e)?e.get():e;return x5(t)?t.toValue():t}function S5({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){const s={latestValues:k5(r,i,o,e),renderState:t()};return n&&(s.mount=a=>n(r,a,s)),s}const Ag=e=>(t,n)=>{const r=w.useContext(ga),i=w.useContext(ya),o=()=>S5(e,t,r,i);return n?o():Yr(o)};function k5(e,t,n,r){const i={},o=r(e,{});for(const f in o)i[f]=rs(o[f]);let{initial:s,animate:a}=e;const l=wa(e),u=gg(e);t&&u&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let c=n?n.initial===!1:!1;c=c||s===!1;const d=c?a:s;return d&&typeof d!="boolean"&&!xa(d)&&(Array.isArray(d)?d:[d]).forEach(m=>{const v=ud(e,m);if(!v)return;const{transitionEnd:x,transition:k,...g}=v;for(const h in g){let p=g[h];if(Array.isArray(p)){const S=c?p.length-1:0;p=p[S]}p!==null&&(i[h]=p)}for(const h in x)i[h]=x[h]}),i}const ie=e=>e;class np{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function C5(e){let t=new np,n=new np,r=0,i=!1,o=!1;const s=new WeakSet,a={schedule:(l,u=!1,c=!1)=>{const d=c&&i,f=d?t:n;return u&&s.add(l),f.add(l)&&d&&i&&(r=t.order.length),l},cancel:l=>{n.remove(l),s.delete(l)},process:l=>{if(i){o=!0;return}if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let u=0;u<r;u++){const c=t.order[u];c(l),s.has(c)&&(a.schedule(c),e())}i=!1,o&&(o=!1,a.process(l))}};return a}const Do=["prepare","read","update","preRender","render","postRender"],P5=40;function E5(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=Do.reduce((d,f)=>(d[f]=C5(()=>n=!0),d),{}),s=d=>o[d].process(i),a=()=>{const d=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(d-i.timestamp,P5),1),i.timestamp=d,i.isProcessing=!0,Do.forEach(s),i.isProcessing=!1,n&&t&&(r=!1,e(a))},l=()=>{n=!0,r=!0,i.isProcessing||e(a)};return{schedule:Do.reduce((d,f)=>{const m=o[f];return d[f]=(v,x=!1,k=!1)=>(n||l(),m.schedule(v,x,k)),d},{}),cancel:d=>Do.forEach(f=>o[f].cancel(d)),state:i,steps:o}}const{schedule:B,cancel:yt,state:Se,steps:al}=E5(typeof requestAnimationFrame<"u"?requestAnimationFrame:ie,!0),b5={useVisualState:Ag({scrapeMotionValuesFromProps:Lg,createRenderState:Eg,onMount:(e,t,{renderState:n,latestValues:r})=>{B.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),B.render(()=>{sd(n,r,{enableHardwareAcceleration:!1},ad(t.tagName),e.transformTemplate),Rg(t,n)})}})},T5={useVisualState:Ag({scrapeMotionValuesFromProps:ld,createRenderState:od})};function R5(e,{forwardMotionProps:t=!1},n,r){return{...rd(e)?b5:T5,preloadedFeatures:n,useRender:v5(t),createVisualElement:r,Component:e}}function Nt(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const jg=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function ka(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const L5=e=>t=>jg(t)&&e(t,ka(t));function Ot(e,t,n,r){return Nt(e,t,L5(n),r)}const A5=(e,t)=>n=>t(e(n)),vn=(...e)=>e.reduce(A5);function Mg(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const rp=Mg("dragHorizontal"),ip=Mg("dragVertical");function Dg(e){let t=!1;if(e==="y")t=ip();else if(e==="x")t=rp();else{const n=rp(),r=ip();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function Vg(){const e=Dg(!0);return e?(e(),!1):!0}class Rn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function op(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),i=(o,s)=>{if(o.pointerType==="touch"||Vg())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[r]&&B.update(()=>a[r](o,s))};return Ot(e.current,n,i,{passive:!e.getProps()[r]})}class j5 extends Rn{mount(){this.unmount=vn(op(this.node,!0),op(this.node,!1))}unmount(){}}class M5 extends Rn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=vn(Nt(this.node.current,"focus",()=>this.onFocus()),Nt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const zg=(e,t)=>t?e===t?!0:zg(e,t.parentElement):!1;function ll(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,ka(n))}class D5 extends Rn{constructor(){super(...arguments),this.removeStartListeners=ie,this.removeEndListeners=ie,this.removeAccessibleListeners=ie,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=Ot(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:c,globalTapTarget:d}=this.node.getProps();B.update(()=>{!d&&!zg(this.node.current,a.target)?c&&c(a,l):u&&u(a,l)})},{passive:!(r.onTap||r.onPointerUp)}),s=Ot(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=vn(o,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||ll("up",(l,u)=>{const{onTap:c}=this.node.getProps();c&&B.update(()=>c(l,u))})};this.removeEndListeners(),this.removeEndListeners=Nt(this.node.current,"keyup",s),ll("down",(a,l)=>{this.startPress(a,l)})},n=Nt(this.node.current,"keydown",t),r=()=>{this.isPressing&&ll("cancel",(o,s)=>this.cancelPress(o,s))},i=Nt(this.node.current,"blur",r);this.removeAccessibleListeners=vn(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&B.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Vg()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&B.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Ot(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Nt(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=vn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const bu=new WeakMap,ul=new WeakMap,V5=e=>{const t=bu.get(e.target);t&&t(e)},z5=e=>{e.forEach(V5)};function N5({root:e,...t}){const n=e||document;ul.has(n)||ul.set(n,{});const r=ul.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(z5,{root:e,...t})),r[i]}function F5(e,t,n){const r=N5(t);return bu.set(e,n),r.observe(e),()=>{bu.delete(e),r.unobserve(e)}}const I5={some:0,all:1};class O5 extends Rn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:I5[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:d}=this.node.getProps(),f=u?c:d;f&&f(l)};return F5(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some($5(t,n))&&this.startObserver()}unmount(){}}function $5({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const _5={inView:{Feature:O5},tap:{Feature:D5},focus:{Feature:M5},hover:{Feature:j5}};function Ng(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function B5(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function U5(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Ca(e,t,n){const r=e.getProps();return ud(r,t,n!==void 0?n:r.custom,B5(e),U5(e))}let Fg=ie,Pa=ie;const xn=e=>e*1e3,$t=e=>e/1e3,H5={current:!1},Ig=e=>Array.isArray(e)&&typeof e[0]=="number";function Og(e){return!!(!e||typeof e=="string"&&$g[e]||Ig(e)||Array.isArray(e)&&e.every(Og))}const pi=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,$g={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:pi([0,.65,.55,1]),circOut:pi([.55,0,1,.45]),backIn:pi([.31,.01,.66,-.59]),backOut:pi([.33,1.53,.69,.99])};function _g(e){if(e)return Ig(e)?pi(e):Array.isArray(e)?e.map(_g):$g[e]}function W5(e,t,n,{delay:r=0,duration:i,repeat:o=0,repeatType:s="loop",ease:a,times:l}={}){const u={[t]:n};l&&(u.offset=l);const c=_g(a);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}function Y5(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const Bg=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,G5=1e-7,K5=12;function X5(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=Bg(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>G5&&++a<K5);return s}function co(e,t,n,r){if(e===t&&n===r)return ie;const i=o=>X5(o,0,1,e,n);return o=>o===0||o===1?o:Bg(i(o),t,r)}const Q5=co(.42,0,1,1),Z5=co(0,0,.58,1),Ug=co(.42,0,.58,1),q5=e=>Array.isArray(e)&&typeof e[0]!="number",Hg=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Wg=e=>t=>1-e(1-t),cd=e=>1-Math.sin(Math.acos(e)),Yg=Wg(cd),J5=Hg(cd),Gg=co(.33,1.53,.69,.99),dd=Wg(Gg),eS=Hg(dd),tS=e=>(e*=2)<1?.5*dd(e):.5*(2-Math.pow(2,-10*(e-1))),nS={linear:ie,easeIn:Q5,easeInOut:Ug,easeOut:Z5,circIn:cd,circInOut:J5,circOut:Yg,backIn:dd,backInOut:eS,backOut:Gg,anticipate:tS},sp=e=>{if(Array.isArray(e)){Pa(e.length===4);const[t,n,r,i]=e;return co(t,n,r,i)}else if(typeof e=="string")return nS[e];return e},fd=(e,t)=>n=>!!(lo(n)&&i5.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Kg=(e,t,n)=>r=>{if(!lo(r))return r;const[i,o,s,a]=r.match(Sa);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},rS=e=>Cn(0,255,e),cl={...qn,transform:e=>Math.round(rS(e))},$n={test:fd("rgb","red"),parse:Kg("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+cl.transform(e)+", "+cl.transform(t)+", "+cl.transform(n)+", "+Ei(Pi.transform(r))+")"};function iS(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Tu={test:fd("#"),parse:iS,transform:$n.transform},mr={test:fd("hsl","hue"),parse:Kg("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Tt.transform(Ei(t))+", "+Tt.transform(Ei(n))+", "+Ei(Pi.transform(r))+")"},Ae={test:e=>$n.test(e)||Tu.test(e)||mr.test(e),parse:e=>$n.test(e)?$n.parse(e):mr.test(e)?mr.parse(e):Tu.parse(e),transform:e=>lo(e)?e:e.hasOwnProperty("red")?$n.transform(e):mr.transform(e)},J=(e,t,n)=>-n*e+n*t+e;function dl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function oS({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=dl(l,a,e+1/3),o=dl(l,a,e),s=dl(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}const fl=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},sS=[Tu,$n,mr],aS=e=>sS.find(t=>t.test(e));function ap(e){const t=aS(e);let n=t.parse(e);return t===mr&&(n=oS(n)),n}const Xg=(e,t)=>{const n=ap(e),r=ap(t),i={...n};return o=>(i.red=fl(n.red,r.red,o),i.green=fl(n.green,r.green,o),i.blue=fl(n.blue,r.blue,o),i.alpha=J(n.alpha,r.alpha,o),$n.transform(i))};function lS(e){var t,n;return isNaN(e)&&lo(e)&&(((t=e.match(Sa))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Sg))===null||n===void 0?void 0:n.length)||0)>0}const Qg={regex:n5,countKey:"Vars",token:"${v}",parse:ie},Zg={regex:Sg,countKey:"Colors",token:"${c}",parse:Ae.parse},qg={regex:Sa,countKey:"Numbers",token:"${n}",parse:qn.parse};function pl(e,{regex:t,countKey:n,token:r,parse:i}){const o=e.tokenised.match(t);o&&(e["num"+n]=o.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...o.map(i)))}function _s(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&pl(n,Qg),pl(n,Zg),pl(n,qg),n}function Jg(e){return _s(e).values}function e1(e){const{values:t,numColors:n,numVars:r,tokenised:i}=_s(e),o=t.length;return s=>{let a=i;for(let l=0;l<o;l++)l<r?a=a.replace(Qg.token,s[l]):l<r+n?a=a.replace(Zg.token,Ae.transform(s[l])):a=a.replace(qg.token,Ei(s[l]));return a}}const uS=e=>typeof e=="number"?0:e;function cS(e){const t=Jg(e);return e1(e)(t.map(uS))}const Pn={test:lS,parse:Jg,createTransformer:e1,getAnimatableNone:cS},t1=(e,t)=>n=>`${n>0?t:e}`;function n1(e,t){return typeof e=="number"?n=>J(e,t,n):Ae.test(e)?Xg(e,t):e.startsWith("var(")?t1(e,t):i1(e,t)}const r1=(e,t)=>{const n=[...e],r=n.length,i=e.map((o,s)=>n1(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}},dS=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=n1(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}},i1=(e,t)=>{const n=Pn.createTransformer(t),r=_s(e),i=_s(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?vn(r1(r.values,i.values),n):t1(e,t)},Fr=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},lp=(e,t)=>n=>J(e,t,n);function fS(e){return typeof e=="number"?lp:typeof e=="string"?Ae.test(e)?Xg:i1:Array.isArray(e)?r1:typeof e=="object"?dS:lp}function pS(e,t,n){const r=[],i=n||fS(e[0]),o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||ie:t;a=vn(l,a)}r.push(a)}return r}function Ea(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(Pa(o===t.length),o===1)return()=>t[0];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=pS(t,r,i),a=s.length,l=u=>{let c=0;if(a>1)for(;c<e.length-2&&!(u<e[c+1]);c++);const d=Fr(e[c],e[c+1],u);return s[c](d)};return n?u=>l(Cn(e[0],e[o-1],u)):l}function hS(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Fr(0,t,r);e.push(J(n,1,i))}}function o1(e){const t=[0];return hS(t,e.length-1),t}function mS(e,t){return e.map(n=>n*t)}function gS(e,t){return e.map(()=>t||Ug).splice(0,e.length-1)}function Bs({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=q5(r)?r.map(sp):sp(r),o={done:!1,value:t[0]},s=mS(n&&n.length===t.length?n:o1(t),e),a=Ea(s,t,{ease:Array.isArray(i)?i:gS(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}function pd(e,t){return t?e*(1e3/t):0}const yS=5;function s1(e,t,n){const r=Math.max(t-yS,0);return pd(n-e(r),t-r)}const hl=.001,vS=.01,up=10,xS=.05,wS=1;function SS({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o;Fg(e<=xn(up));let s=1-t;s=Cn(xS,wS,s),e=Cn(vS,up,$t(e)),s<1?(i=u=>{const c=u*s,d=c*e,f=c-n,m=Ru(u,s),v=Math.exp(-d);return hl-f/m*v},o=u=>{const d=u*s*e,f=d*n+n,m=Math.pow(s,2)*Math.pow(u,2)*e,v=Math.exp(-d),x=Ru(Math.pow(u,2),s);return(-i(u)+hl>0?-1:1)*((f-m)*v)/x}):(i=u=>{const c=Math.exp(-u*e),d=(u-n)*e+1;return-hl+c*d},o=u=>{const c=Math.exp(-u*e),d=(n-u)*(e*e);return c*d});const a=5/e,l=CS(i,o,a);if(e=xn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const kS=12;function CS(e,t,n){let r=n;for(let i=1;i<kS;i++)r=r-e(r)/t(r);return r}function Ru(e,t){return e*Math.sqrt(1-t*t)}const PS=["duration","bounce"],ES=["stiffness","damping","mass"];function cp(e,t){return t.some(n=>e[n]!==void 0)}function bS(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!cp(e,ES)&&cp(e,PS)){const n=SS(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function a1({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],s={done:!1,value:i},{stiffness:a,damping:l,mass:u,duration:c,velocity:d,isResolvedFromDuration:f}=bS({...r,velocity:-$t(r.velocity||0)}),m=d||0,v=l/(2*Math.sqrt(a*u)),x=o-i,k=$t(Math.sqrt(a/u)),g=Math.abs(x)<5;n||(n=g?.01:2),t||(t=g?.005:.5);let h;if(v<1){const p=Ru(k,v);h=S=>{const C=Math.exp(-v*k*S);return o-C*((m+v*k*x)/p*Math.sin(p*S)+x*Math.cos(p*S))}}else if(v===1)h=p=>o-Math.exp(-k*p)*(x+(m+k*x)*p);else{const p=k*Math.sqrt(v*v-1);h=S=>{const C=Math.exp(-v*k*S),E=Math.min(p*S,300);return o-C*((m+v*k*x)*Math.sinh(E)+p*x*Math.cosh(E))/p}}return{calculatedDuration:f&&c||null,next:p=>{const S=h(p);if(f)s.done=p>=c;else{let C=m;p!==0&&(v<1?C=s1(h,p,S):C=0);const E=Math.abs(C)<=n,P=Math.abs(o-S)<=t;s.done=E&&P}return s.value=s.done?o:S,s}}}function dp({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:c}){const d=e[0],f={done:!1,value:d},m=T=>a!==void 0&&T<a||l!==void 0&&T>l,v=T=>a===void 0?l:l===void 0||Math.abs(a-T)<Math.abs(l-T)?a:l;let x=n*t;const k=d+x,g=s===void 0?k:s(k);g!==k&&(x=g-d);const h=T=>-x*Math.exp(-T/r),p=T=>g+h(T),S=T=>{const A=h(T),D=p(T);f.done=Math.abs(A)<=u,f.value=f.done?g:D};let C,E;const P=T=>{m(f.value)&&(C=T,E=a1({keyframes:[f.value,v(f.value)],velocity:s1(p,T,f.value),damping:i,stiffness:o,restDelta:u,restSpeed:c}))};return P(0),{calculatedDuration:null,next:T=>{let A=!1;return!E&&C===void 0&&(A=!0,S(T),P(T)),C!==void 0&&T>C?E.next(T-C):(!A&&S(T),f)}}}const TS=e=>{const t=({timestamp:n})=>e(n);return{start:()=>B.update(t,!0),stop:()=>yt(t),now:()=>Se.isProcessing?Se.timestamp:performance.now()}},fp=2e4;function pp(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<fp;)t+=n,r=e.next(t);return t>=fp?1/0:t}const RS={decay:dp,inertia:dp,tween:Bs,keyframes:Bs,spring:a1};function Us({autoplay:e=!0,delay:t=0,driver:n=TS,keyframes:r,type:i="keyframes",repeat:o=0,repeatDelay:s=0,repeatType:a="loop",onPlay:l,onStop:u,onComplete:c,onUpdate:d,...f}){let m=1,v=!1,x,k;const g=()=>{k=new Promise(z=>{x=z})};g();let h;const p=RS[i]||Bs;let S;p!==Bs&&typeof r[0]!="number"&&(S=Ea([0,100],r,{clamp:!1}),r=[0,100]);const C=p({...f,keyframes:r});let E;a==="mirror"&&(E=p({...f,keyframes:[...r].reverse(),velocity:-(f.velocity||0)}));let P="idle",T=null,A=null,D=null;C.calculatedDuration===null&&o&&(C.calculatedDuration=pp(C));const{calculatedDuration:Q}=C;let de=1/0,xe=1/0;Q!==null&&(de=Q+s,xe=de*(o+1)-s);let ae=0;const vt=z=>{if(A===null)return;m>0&&(A=Math.min(A,z)),m<0&&(A=Math.min(z-xe/m,A)),T!==null?ae=T:ae=Math.round(z-A)*m;const $=ae-t*(m>=0?1:-1),xt=m>=0?$<0:$>xe;ae=Math.max($,0),P==="finished"&&T===null&&(ae=xe);let ze=ae,st=C;if(o){const at=Math.min(ae,xe)/de;let Qt=Math.floor(at),Qe=at%1;!Qe&&at>=1&&(Qe=1),Qe===1&&Qt--,Qt=Math.min(Qt,o+1),!!(Qt%2)&&(a==="reverse"?(Qe=1-Qe,s&&(Qe-=s/de)):a==="mirror"&&(st=E)),ze=Cn(0,1,Qe)*de}const fe=xt?{done:!1,value:r[0]}:st.next(ze);S&&(fe.value=S(fe.value));let{done:Xe}=fe;!xt&&Q!==null&&(Xe=m>=0?ae>=xe:ae<=0);const Ln=T===null&&(P==="finished"||P==="running"&&Xe);return d&&d(fe.value),Ln&&L(),fe},Z=()=>{h&&h.stop(),h=void 0},Pe=()=>{P="idle",Z(),x(),g(),A=D=null},L=()=>{P="finished",c&&c(),Z(),x()},M=()=>{if(v)return;h||(h=n(vt));const z=h.now();l&&l(),T!==null?A=z-T:(!A||P==="finished")&&(A=z),P==="finished"&&g(),D=A,T=null,P="running",h.start()};e&&M();const F={then(z,$){return k.then(z,$)},get time(){return $t(ae)},set time(z){z=xn(z),ae=z,T!==null||!h||m===0?T=z:A=h.now()-z/m},get duration(){const z=C.calculatedDuration===null?pp(C):C.calculatedDuration;return $t(z)},get speed(){return m},set speed(z){z===m||!h||(m=z,F.time=$t(ae))},get state(){return P},play:M,pause:()=>{P="paused",T=ae},stop:()=>{v=!0,P!=="idle"&&(P="idle",u&&u(),Pe())},cancel:()=>{D!==null&&vt(D),Pe()},complete:()=>{P="finished"},sample:z=>(A=0,vt(z))};return F}function LS(e){let t;return()=>(t===void 0&&(t=e()),t)}const AS=LS(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),jS=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Vo=10,MS=2e4,DS=(e,t)=>t.type==="spring"||e==="backgroundColor"||!Og(t.ease);function VS(e,t,{onUpdate:n,onComplete:r,...i}){if(!(AS()&&jS.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let s=!1,a,l,u=!1;const c=()=>{l=new Promise(p=>{a=p})};c();let{keyframes:d,duration:f=300,ease:m,times:v}=i;if(DS(t,i)){const p=Us({...i,repeat:0,delay:0});let S={done:!1,value:d[0]};const C=[];let E=0;for(;!S.done&&E<MS;)S=p.sample(E),C.push(S.value),E+=Vo;v=void 0,d=C,f=E-Vo,m="linear"}const x=W5(e.owner.current,t,d,{...i,duration:f,ease:m,times:v}),k=()=>{u=!1,x.cancel()},g=()=>{u=!0,B.update(k),a(),c()};return x.onfinish=()=>{u||(e.set(Y5(d,i)),r&&r(),g())},{then(p,S){return l.then(p,S)},attachTimeline(p){return x.timeline=p,x.onfinish=null,ie},get time(){return $t(x.currentTime||0)},set time(p){x.currentTime=xn(p)},get speed(){return x.playbackRate},set speed(p){x.playbackRate=p},get duration(){return $t(f)},play:()=>{s||(x.play(),yt(k))},pause:()=>x.pause(),stop:()=>{if(s=!0,x.playState==="idle")return;const{currentTime:p}=x;if(p){const S=Us({...i,autoplay:!1});e.setWithVelocity(S.sample(p-Vo).value,S.sample(p).value,Vo)}g()},complete:()=>{u||x.finish()},cancel:g}}function zS({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:ie,pause:ie,stop:ie,then:o=>(o(),Promise.resolve()),cancel:ie,complete:ie});return t?Us({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const NS={type:"spring",stiffness:500,damping:25,restSpeed:10},FS=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),IS={type:"keyframes",duration:.8},OS={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},$S=(e,{keyframes:t})=>t.length>2?IS:Zn.has(e)?e.startsWith("scale")?FS(t[1]):NS:OS,Lu=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Pn.test(t)||t==="0")&&!t.startsWith("url(")),_S=new Set(["brightness","contrast","saturate","opacity"]);function BS(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Sa)||[];if(!r)return e;const i=n.replace(r,"");let o=_S.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const US=/([a-z-]*)\(.*?\)/g,Au={...Pn,getAnimatableNone:e=>{const t=e.match(US);return t?t.map(BS).join(" "):e}},HS={...kg,color:Ae,backgroundColor:Ae,outlineColor:Ae,fill:Ae,stroke:Ae,borderColor:Ae,borderTopColor:Ae,borderRightColor:Ae,borderBottomColor:Ae,borderLeftColor:Ae,filter:Au,WebkitFilter:Au},hd=e=>HS[e];function l1(e,t){let n=hd(e);return n!==Au&&(n=Pn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const u1=e=>/^0[^.\s]+$/.test(e);function WS(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||u1(e)}function YS(e,t,n,r){const i=Lu(t,n);let o;Array.isArray(n)?o=[...n]:o=[null,n];const s=r.from!==void 0?r.from:e.get();let a;const l=[];for(let u=0;u<o.length;u++)o[u]===null&&(o[u]=u===0?s:o[u-1]),WS(o[u])&&l.push(u),typeof o[u]=="string"&&o[u]!=="none"&&o[u]!=="0"&&(a=o[u]);if(i&&l.length&&a)for(let u=0;u<l.length;u++){const c=l[u];o[c]=l1(t,a)}return o}function GS({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}function md(e,t){return e[t]||e.default||e}const KS={skipAnimations:!1},gd=(e,t,n,r={})=>i=>{const o=md(r,e)||{},s=o.delay||r.delay||0;let{elapsed:a=0}=r;a=a-xn(s);const l=YS(t,e,n,o),u=l[0],c=l[l.length-1],d=Lu(e,u),f=Lu(e,c);let m={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...o,delay:-a,onUpdate:v=>{t.set(v),o.onUpdate&&o.onUpdate(v)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(GS(o)||(m={...m,...$S(e,m)}),m.duration&&(m.duration=xn(m.duration)),m.repeatDelay&&(m.repeatDelay=xn(m.repeatDelay)),!d||!f||H5.current||o.type===!1||KS.skipAnimations)return zS(m);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const v=VS(t,e,m);if(v)return v}return Us(m)};function Hs(e){return!!(_e(e)&&e.add)}const c1=e=>/^\-?\d*\.?\d+$/.test(e);function yd(e,t){e.indexOf(t)===-1&&e.push(t)}function vd(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class xd{constructor(){this.subscriptions=[]}add(t){return yd(this.subscriptions,t),()=>vd(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const XS=e=>!isNaN(parseFloat(e)),bi={current:void 0};class QS{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:o,timestamp:s}=Se;this.lastUpdated!==s&&(this.timeDelta=o,this.lastUpdated=s,B.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>B.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=XS(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new xd);const r=this.events[t].add(n);return t==="change"?()=>{r(),B.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return bi.current&&bi.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?pd(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ft(e,t){return new QS(e,t)}const d1=e=>t=>t.test(e),ZS={test:e=>e==="auto",parse:e=>e},f1=[qn,N,Tt,Jt,s5,o5,ZS],ni=e=>f1.find(d1(e)),qS=[...f1,Ae,Pn],JS=e=>qS.find(d1(e));function e4(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ft(n))}function wd(e,t){const n=Ca(e,t);let{transitionEnd:r={},transition:i={},...o}=n?e.makeTargetAnimatable(n,!1):{};o={...o,...r};for(const s in o){const a=w5(o[s]);e4(e,s,a)}}function ju(e,t){[...t].reverse().forEach(r=>{const i=e.getVariant(r);i&&wd(e,i),e.variantChildren&&e.variantChildren.forEach(o=>{ju(o,t)})})}function t4(e,t){if(Array.isArray(t))return ju(e,t);if(typeof t=="string")return ju(e,[t]);wd(e,t)}function n4(e,t,n){var r,i;const o=Object.keys(t).filter(a=>!e.hasValue(a)),s=o.length;if(s)for(let a=0;a<s;a++){const l=o[a],u=t[l];let c=null;Array.isArray(u)&&(c=u[0]),c===null&&(c=(i=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&i!==void 0?i:t[l]),c!=null&&(typeof c=="string"&&(c1(c)||u1(c))?c=parseFloat(c):!JS(c)&&Pn.test(u)&&(c=l1(l,u)),e.addValue(l,ft(c,{owner:e})),n[l]===void 0&&(n[l]=c),c!==null&&e.setBaseTarget(l,c))}}function r4(e,t){return t?(t[e]||t.default||t).from:void 0}function i4(e,t,n){const r={};for(const i in e){const o=r4(i,t);if(o!==void 0)r[i]=o;else{const s=n.getValue(i);s&&(r[i]=s.get())}}return r}function o4({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function s4(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function p1(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...a}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(o=r);const u=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const d in a){const f=e.getValue(d),m=a[d];if(!f||m===void 0||c&&o4(c,d))continue;const v={delay:n,elapsed:0,...md(o||{},d)};if(window.HandoffAppearAnimations){const g=e.getProps()[mg];if(g){const h=window.HandoffAppearAnimations(g,d,f,B);h!==null&&(v.elapsed=h,v.isHandoff=!0)}}let x=!v.isHandoff&&!s4(f,m);if(v.type==="spring"&&(f.getVelocity()||v.velocity)&&(x=!1),f.animation&&(x=!1),x)continue;f.start(gd(d,f,m,e.shouldReduceMotion&&Zn.has(d)?{type:!1}:v));const k=f.animation;Hs(l)&&(l.add(d),k.then(()=>l.remove(d))),u.push(k)}return s&&Promise.all(u).then(()=>{s&&wd(e,s)}),u}function Mu(e,t,n={}){const r=Ca(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(p1(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:c,staggerDirection:d}=i;return a4(e,t,u+l,c,d,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[l,u]=a==="beforeChildren"?[o,s]:[s,o];return l().then(()=>u())}else return Promise.all([o(),s(n.delay)])}function a4(e,t,n=0,r=0,i=1,o){const s=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(l4).forEach((u,c)=>{u.notify("AnimationStart",t),s.push(Mu(u,t,{...o,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function l4(e,t){return e.sortNodePosition(t)}function h1(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>Mu(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=Mu(e,t,n);else{const i=typeof t=="function"?Ca(e,t,n.custom):t;r=Promise.all(p1(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))}const u4=[...ed].reverse(),c4=ed.length;function d4(e){return t=>Promise.all(t.map(({animation:n,options:r})=>h1(e,n,r)))}function f4(e){let t=d4(e);const n=h4();let r=!0;const i=(l,u)=>{const c=Ca(e,u);if(c){const{transition:d,transitionEnd:f,...m}=c;l={...l,...m,...f}}return l};function o(l){t=l(e)}function s(l,u){const c=e.getProps(),d=e.getVariantContext(!0)||{},f=[],m=new Set;let v={},x=1/0;for(let g=0;g<c4;g++){const h=u4[g],p=n[h],S=c[h]!==void 0?c[h]:d[h],C=Xi(S),E=h===u?p.isActive:null;E===!1&&(x=g);let P=S===d[h]&&S!==c[h]&&C;if(P&&r&&e.manuallyAnimateOnMount&&(P=!1),p.protectedKeys={...v},!p.isActive&&E===null||!S&&!p.prevProp||xa(S)||typeof S=="boolean")continue;let A=p4(p.prevProp,S)||h===u&&p.isActive&&!P&&C||g>x&&C,D=!1;const Q=Array.isArray(S)?S:[S];let de=Q.reduce(i,{});E===!1&&(de={});const{prevResolvedValues:xe={}}=p,ae={...xe,...de},vt=Z=>{A=!0,m.has(Z)&&(D=!0,m.delete(Z)),p.needsAnimating[Z]=!0};for(const Z in ae){const Pe=de[Z],L=xe[Z];if(v.hasOwnProperty(Z))continue;let M=!1;$s(Pe)&&$s(L)?M=!Ng(Pe,L):M=Pe!==L,M?Pe!==void 0?vt(Z):m.add(Z):Pe!==void 0&&m.has(Z)?vt(Z):p.protectedKeys[Z]=!0}p.prevProp=S,p.prevResolvedValues=de,p.isActive&&(v={...v,...de}),r&&e.blockInitialAnimation&&(A=!1),A&&(!P||D)&&f.push(...Q.map(Z=>({animation:Z,options:{type:h,...l}})))}if(m.size){const g={};m.forEach(h=>{const p=e.getBaseTarget(h);p!==void 0&&(g[h]=p)}),f.push({animation:g})}let k=!!f.length;return r&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(k=!1),r=!1,k?t(f):Promise.resolve()}function a(l,u,c){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(m=>{var v;return(v=m.animationState)===null||v===void 0?void 0:v.setActive(l,u)}),n[l].isActive=u;const f=s(c,l);for(const m in n)n[m].protectedKeys={};return f}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n}}function p4(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Ng(t,e):!1}function An(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function h4(){return{animate:An(!0),whileInView:An(),whileHover:An(),whileTap:An(),whileDrag:An(),whileFocus:An(),exit:An()}}class m4 extends Rn{constructor(t){super(t),t.animationState||(t.animationState=f4(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),xa(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let g4=0;class y4 extends Rn{constructor(){super(...arguments),this.id=g4++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const o=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&o.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const v4={animation:{Feature:m4},exit:{Feature:y4}},hp=(e,t)=>Math.abs(e-t);function x4(e,t){const n=hp(e.x,t.x),r=hp(e.y,t.y);return Math.sqrt(n**2+r**2)}class m1{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=gl(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,m=x4(d.offset,{x:0,y:0})>=3;if(!f&&!m)return;const{point:v}=d,{timestamp:x}=Se;this.history.push({...v,timestamp:x});const{onStart:k,onMove:g}=this.handlers;f||(k&&k(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=ml(f,this.transformPagePoint),B.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:m,onSessionEnd:v,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=gl(d.type==="pointercancel"?this.lastMoveEventInfo:ml(f,this.transformPagePoint),this.history);this.startEvent&&m&&m(d,k),v&&v(d,k)},!jg(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=ka(t),a=ml(s,this.transformPagePoint),{point:l}=a,{timestamp:u}=Se;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(t,gl(a,this.history)),this.removeListeners=vn(Ot(this.contextWindow,"pointermove",this.handlePointerMove),Ot(this.contextWindow,"pointerup",this.handlePointerUp),Ot(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),yt(this.updatePoint)}}function ml(e,t){return t?{point:t(e.point)}:e}function mp(e,t){return{x:e.x-t.x,y:e.y-t.y}}function gl({point:e},t){return{point:e,delta:mp(e,g1(t)),offset:mp(e,w4(t)),velocity:S4(t,.1)}}function w4(e){return e[0]}function g1(e){return e[e.length-1]}function S4(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=g1(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>xn(t)));)n--;if(!r)return{x:0,y:0};const o=$t(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function Ye(e){return e.max-e.min}function Du(e,t=0,n=.01){return Math.abs(e-t)<=n}function gp(e,t,n,r=.5){e.origin=r,e.originPoint=J(t.min,t.max,e.origin),e.scale=Ye(n)/Ye(t),(Du(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=J(n.min,n.max,e.origin)-e.originPoint,(Du(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Ti(e,t,n,r){gp(e.x,t.x,n.x,r?r.originX:void 0),gp(e.y,t.y,n.y,r?r.originY:void 0)}function yp(e,t,n){e.min=n.min+t.min,e.max=e.min+Ye(t)}function k4(e,t,n){yp(e.x,t.x,n.x),yp(e.y,t.y,n.y)}function vp(e,t,n){e.min=t.min-n.min,e.max=e.min+Ye(t)}function Ri(e,t,n){vp(e.x,t.x,n.x),vp(e.y,t.y,n.y)}function C4(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?J(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?J(n,e,r.max):Math.min(e,n)),e}function xp(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function P4(e,{top:t,left:n,bottom:r,right:i}){return{x:xp(e.x,n,i),y:xp(e.y,t,r)}}function wp(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function E4(e,t){return{x:wp(e.x,t.x),y:wp(e.y,t.y)}}function b4(e,t){let n=.5;const r=Ye(e),i=Ye(t);return i>r?n=Fr(t.min,t.max-r,e.min):r>i&&(n=Fr(e.min,e.max-i,t.min)),Cn(0,1,n)}function T4(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Vu=.35;function R4(e=Vu){return e===!1?e=0:e===!0&&(e=Vu),{x:Sp(e,"left","right"),y:Sp(e,"top","bottom")}}function Sp(e,t,n){return{min:kp(e,t),max:kp(e,n)}}function kp(e,t){return typeof e=="number"?e:e[t]||0}const Cp=()=>({translate:0,scale:1,origin:0,originPoint:0}),gr=()=>({x:Cp(),y:Cp()}),Pp=()=>({min:0,max:0}),le=()=>({x:Pp(),y:Pp()});function qe(e){return[e("x"),e("y")]}function y1({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function L4({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function A4(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function yl(e){return e===void 0||e===1}function zu({scale:e,scaleX:t,scaleY:n}){return!yl(e)||!yl(t)||!yl(n)}function Dn(e){return zu(e)||v1(e)||e.z||e.rotate||e.rotateX||e.rotateY}function v1(e){return Ep(e.x)||Ep(e.y)}function Ep(e){return e&&e!=="0%"}function Ws(e,t,n){const r=e-n,i=t*r;return n+i}function bp(e,t,n,r,i){return i!==void 0&&(e=Ws(e,i,r)),Ws(e,n,r)+t}function Nu(e,t=0,n=1,r,i){e.min=bp(e.min,t,n,r,i),e.max=bp(e.max,t,n,r,i)}function x1(e,{x:t,y:n}){Nu(e.x,t.translate,t.scale,t.originPoint),Nu(e.y,n.translate,n.scale,n.originPoint)}function j4(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const l=o.instance;l&&l.style&&l.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&yr(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,x1(e,s)),r&&Dn(o.latestValues)&&yr(e,o.latestValues))}t.x=Tp(t.x),t.y=Tp(t.y)}function Tp(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function rn(e,t){e.min=e.min+t,e.max=e.max+t}function Rp(e,t,[n,r,i]){const o=t[i]!==void 0?t[i]:.5,s=J(e.min,e.max,o);Nu(e,t[n],t[r],s,t.scale)}const M4=["x","scaleX","originX"],D4=["y","scaleY","originY"];function yr(e,t){Rp(e.x,t,M4),Rp(e.y,t,D4)}function w1(e,t){return y1(A4(e.getBoundingClientRect(),t))}function V4(e,t,n){const r=w1(e,n),{scroll:i}=t;return i&&(rn(r.x,i.offset.x),rn(r.y,i.offset.y)),r}const S1=({current:e})=>e?e.ownerDocument.defaultView:null,z4=new WeakMap;class N4{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=le(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=c=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(ka(c,"page").point)},o=(c,d)=>{const{drag:f,dragPropagation:m,onDragStart:v}=this.getProps();if(f&&!m&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Dg(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),qe(k=>{let g=this.getAxisMotionValue(k).get()||0;if(Tt.test(g)){const{projection:h}=this.visualElement;if(h&&h.layout){const p=h.layout.layoutBox[k];p&&(g=Ye(p)*(parseFloat(g)/100))}}this.originPoint[k]=g}),v&&B.update(()=>v(c,d),!1,!0);const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},s=(c,d)=>{const{dragPropagation:f,dragDirectionLock:m,onDirectionLock:v,onDrag:x}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:k}=d;if(m&&this.currentDirection===null){this.currentDirection=F4(k),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",d.point,k),this.updateAxis("y",d.point,k),this.visualElement.render(),x&&x(c,d)},a=(c,d)=>this.stop(c,d),l=()=>qe(c=>{var d;return this.getAnimationState(c)==="paused"&&((d=this.getAxisMotionValue(c).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new m1(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:S1(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&B.update(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!zo(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=C4(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&hr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=P4(i.layoutBox,n):this.constraints=!1,this.elastic=R4(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&qe(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=T4(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!hr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=V4(r,i.root,this.visualElement.getTransformPagePoint());let s=E4(i.layout.layoutBox,o);if(n){const a=n(L4(s));this.hasMutatedConstraints=!!a,a&&(s=y1(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=qe(c=>{if(!zo(c,n,this.currentDirection))return;let d=l&&l[c]||{};s&&(d={min:0,max:0});const f=i?200:1e6,m=i?40:1e7,v={type:"inertia",velocity:r?t[c]:0,bounceStiffness:f,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...o,...d};return this.startAxisValueAnimation(c,v)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(gd(t,r,0,n))}stopAnimation(){qe(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){qe(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){qe(n=>{const{drag:r}=this.getProps();if(!zo(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n];o.set(t[n]-J(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!hr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};qe(s=>{const a=this.getAxisMotionValue(s);if(a){const l=a.get();i[s]=b4({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),qe(s=>{if(!zo(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(J(l,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;z4.set(this.visualElement,this);const t=this.visualElement.current,n=Ot(t,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();hr(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const s=Nt(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(qe(c=>{const d=this.getAxisMotionValue(c);d&&(this.originPoint[c]+=l[c].translate,d.set(d.get()+l[c].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=Vu,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function zo(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function F4(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class I4 extends Rn{constructor(t){super(t),this.removeGroupControls=ie,this.removeListeners=ie,this.controls=new N4(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ie}unmount(){this.removeGroupControls(),this.removeListeners()}}const Lp=e=>(t,n)=>{e&&B.update(()=>e(t,n))};class O4 extends Rn{constructor(){super(...arguments),this.removePointerDownListener=ie}onPointerDown(t){this.session=new m1(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:S1(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Lp(t),onStart:Lp(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&B.update(()=>i(o,s))}}}mount(){this.removePointerDownListener=Ot(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function $4(){const e=w.useContext(ya);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=w.useId();return w.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}const is={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Ap(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ri={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(N.test(e))e=parseFloat(e);else return e;const n=Ap(e,t.target.x),r=Ap(e,t.target.y);return`${n}% ${r}%`}},_4={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Pn.parse(e);if(i.length>5)return r;const o=Pn.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const u=J(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}};class B4 extends he.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;qw(U4),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),is.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||B.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function k1(e){const[t,n]=$4(),r=w.useContext(nd);return he.createElement(B4,{...e,layoutGroup:r,switchLayoutGroup:w.useContext(yg),isPresent:t,safeToRemove:n})}const U4={borderRadius:{...ri,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ri,borderTopRightRadius:ri,borderBottomLeftRadius:ri,borderBottomRightRadius:ri,boxShadow:_4},C1=["TopLeft","TopRight","BottomLeft","BottomRight"],H4=C1.length,jp=e=>typeof e=="string"?parseFloat(e):e,Mp=e=>typeof e=="number"||N.test(e);function W4(e,t,n,r,i,o){i?(e.opacity=J(0,n.opacity!==void 0?n.opacity:1,Y4(r)),e.opacityExit=J(t.opacity!==void 0?t.opacity:1,0,G4(r))):o&&(e.opacity=J(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<H4;s++){const a=`border${C1[s]}Radius`;let l=Dp(t,a),u=Dp(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Mp(l)===Mp(u)?(e[a]=Math.max(J(jp(l),jp(u),r),0),(Tt.test(u)||Tt.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=J(t.rotate||0,n.rotate||0,r))}function Dp(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Y4=P1(0,.5,Yg),G4=P1(.5,.95,ie);function P1(e,t,n){return r=>r<e?0:r>t?1:n(Fr(e,t,r))}function Vp(e,t){e.min=t.min,e.max=t.max}function Ze(e,t){Vp(e.x,t.x),Vp(e.y,t.y)}function zp(e,t,n,r,i){return e-=t,e=Ws(e,1/n,r),i!==void 0&&(e=Ws(e,1/i,r)),e}function K4(e,t=0,n=1,r=.5,i,o=e,s=e){if(Tt.test(t)&&(t=parseFloat(t),t=J(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=J(o.min,o.max,r);e===o&&(a-=t),e.min=zp(e.min,t,n,a,i),e.max=zp(e.max,t,n,a,i)}function Np(e,t,[n,r,i],o,s){K4(e,t[n],t[r],t[i],t.scale,o,s)}const X4=["x","scaleX","originX"],Q4=["y","scaleY","originY"];function Fp(e,t,n,r){Np(e.x,t,X4,n?n.x:void 0,r?r.x:void 0),Np(e.y,t,Q4,n?n.y:void 0,r?r.y:void 0)}function Ip(e){return e.translate===0&&e.scale===1}function E1(e){return Ip(e.x)&&Ip(e.y)}function Z4(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function b1(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Op(e){return Ye(e.x)/Ye(e.y)}class q4{constructor(){this.members=[]}add(t){yd(this.members,t),t.scheduleRender()}remove(t){if(vd(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function $p(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y;if((i||o)&&(r=`translate3d(${i}px, ${o}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:c}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),c&&(r+=`rotateY(${c}deg) `)}const s=e.x.scale*t.x,a=e.y.scale*t.y;return(s!==1||a!==1)&&(r+=`scale(${s}, ${a})`),r||"none"}const J4=(e,t)=>e.depth-t.depth;class ek{constructor(){this.children=[],this.isDirty=!1}add(t){yd(this.children,t),this.isDirty=!0}remove(t){vd(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(J4),this.isDirty=!1,this.children.forEach(t)}}function tk(e,t){const n=performance.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(yt(r),e(o-t))};return B.read(r,!0),()=>yt(r)}function nk(e){window.MotionDebug&&window.MotionDebug.record(e)}function rk(e){return e instanceof SVGElement&&e.tagName!=="svg"}function ik(e,t,n){const r=_e(e)?e:ft(e);return r.start(gd("",r,t,n)),r.animation}const _p=["","X","Y","Z"],ok={visibility:"hidden"},Bp=1e3;let sk=0;const Vn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function T1({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=sk++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Vn.totalNodes=Vn.resolvedTargetDeltas=Vn.recalculatedProjection=0,this.nodes.forEach(uk),this.nodes.forEach(hk),this.nodes.forEach(mk),this.nodes.forEach(ck),nk(Vn)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new ek)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new xd),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=rk(s),this.instance=s;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let d;const f=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=tk(f,250),is.hasAnimatedSinceResize&&(is.hasAnimatedSinceResize=!1,this.nodes.forEach(Hp))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:m,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||c.getDefaultTransition()||wk,{onLayoutAnimationStart:k,onLayoutAnimationComplete:g}=c.getProps(),h=!this.targetLayout||!b1(this.targetLayout,v)||m,p=!f&&m;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||p||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,p);const S={...md(x,"layout"),onPlay:k,onComplete:g};(c.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else f||Hp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,yt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(gk),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const d=this.path[c];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Up);return}this.isUpdating||this.nodes.forEach(fk),this.isUpdating=!1,this.nodes.forEach(pk),this.nodes.forEach(ak),this.nodes.forEach(lk),this.clearAllSnapshots();const a=performance.now();Se.delta=Cn(0,1e3/60,a-Se.timestamp),Se.timestamp=a,Se.isProcessing=!0,al.update.process(Se),al.preRender.process(Se),al.render.process(Se),Se.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(dk),this.sharedNodes.forEach(yk)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,B.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){B.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=le(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!E1(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;s&&(a||Dn(this.latestValues)||c)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),Sk(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return le();const a=s.measureViewportBox(),{scroll:l}=this.root;return l&&(rn(a.x,l.offset.x),rn(a.y,l.offset.y)),a}removeElementScroll(s){const a=le();Ze(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:d}=u;if(u!==this.root&&c&&d.layoutScroll){if(c.isRoot){Ze(a,s);const{scroll:f}=this.root;f&&(rn(a.x,-f.offset.x),rn(a.y,-f.offset.y))}rn(a.x,c.offset.x),rn(a.y,c.offset.y)}}return a}applyTransform(s,a=!1){const l=le();Ze(l,s);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&yr(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Dn(c.latestValues)&&yr(l,c.latestValues)}return Dn(this.latestValues)&&yr(l,this.latestValues),l}removeTransform(s){const a=le();Ze(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Dn(u.latestValues))continue;zu(u.latestValues)&&u.updateSnapshot();const c=le(),d=u.measurePageBox();Ze(c,d),Fp(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Dn(this.latestValues)&&Fp(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Se.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=Se.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=le(),this.relativeTargetOrigin=le(),Ri(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),Ze(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=le(),this.targetWithTransforms=le()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),k4(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ze(this.target,this.layout.layoutBox),x1(this.target,this.targetDelta)):Ze(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=le(),this.relativeTargetOrigin=le(),Ri(this.relativeTargetOrigin,this.target,m.target),Ze(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Vn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||zu(this.parent.latestValues)||v1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Se.timestamp&&(u=!1),u)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;Ze(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,m=this.treeScale.y;j4(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:v}=a;if(!v){this.projectionTransform&&(this.projectionDelta=gr(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=gr(),this.projectionDeltaWithTransform=gr());const x=this.projectionTransform;Ti(this.projectionDelta,this.layoutCorrected,v,this.latestValues),this.projectionTransform=$p(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==f||this.treeScale.y!==m)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),Vn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},d=gr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=le(),m=l?l.source:void 0,v=this.layout?this.layout.source:void 0,x=m!==v,k=this.getStack(),g=!k||k.members.length<=1,h=!!(x&&!g&&this.options.crossfade===!0&&!this.path.some(xk));this.animationProgress=0;let p;this.mixTargetDelta=S=>{const C=S/1e3;Wp(d.x,s.x,C),Wp(d.y,s.y,C),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ri(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),vk(this.relativeTarget,this.relativeTargetOrigin,f,C),p&&Z4(this.relativeTarget,p)&&(this.isProjectionDirty=!1),p||(p=le()),Ze(p,this.relativeTarget)),x&&(this.animationValues=c,W4(c,u,this.latestValues,C,h,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(yt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=B.update(()=>{is.hasAnimatedSinceResize=!0,this.currentAnimation=ik(0,Bp,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Bp),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=s;if(!(!a||!l||!u)){if(this!==s&&this.layout&&u&&R1(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||le();const d=Ye(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+d;const f=Ye(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+f}Ze(a,l),yr(a,c),Ti(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new q4),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const u={};for(let c=0;c<_p.length;c++){const d="rotate"+_p[c];l[d]&&(u[d]=l[d],s.setStaticValue(d,0))}s.render();for(const c in u)s.setStaticValue(c,u[c]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return ok;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=rs(s==null?void 0:s.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=rs(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Dn(this.latestValues)&&(x.transform=c?c({},""):"none",this.hasProjected=!1),x}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),u.transform=$p(this.projectionDeltaWithTransform,this.treeScale,f),c&&(u.transform=c(f,u.transform));const{x:m,y:v}=this.projectionDelta;u.transformOrigin=`${m.origin*100}% ${v.origin*100}% 0`,d.animationValues?u.opacity=d===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const x in Is){if(f[x]===void 0)continue;const{correct:k,applyTo:g}=Is[x],h=u.transform==="none"?f[x]:k(f[x],d);if(g){const p=g.length;for(let S=0;S<p;S++)u[g[S]]=h}else u[x]=h}return this.options.layoutId&&(u.pointerEvents=d===this?rs(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Up),this.root.sharedNodes.clear()}}}function ak(e){e.updateLayout()}function lk(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?qe(d=>{const f=s?n.measuredBox[d]:n.layoutBox[d],m=Ye(f);f.min=r[d].min,f.max=f.min+m}):R1(o,n.layoutBox,r)&&qe(d=>{const f=s?n.measuredBox[d]:n.layoutBox[d],m=Ye(r[d]);f.max=f.min+m,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+m)});const a=gr();Ti(a,r,n.layoutBox);const l=gr();s?Ti(l,e.applyTransform(i,!0),n.measuredBox):Ti(l,r,n.layoutBox);const u=!E1(a);let c=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:m}=d;if(f&&m){const v=le();Ri(v,n.layoutBox,f.layoutBox);const x=le();Ri(x,r,m.layoutBox),b1(v,x)||(c=!0),d.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=v,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function uk(e){Vn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function ck(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function dk(e){e.clearSnapshot()}function Up(e){e.clearMeasurements()}function fk(e){e.isLayoutDirty=!1}function pk(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Hp(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function hk(e){e.resolveTargetDelta()}function mk(e){e.calcProjection()}function gk(e){e.resetRotation()}function yk(e){e.removeLeadSnapshot()}function Wp(e,t,n){e.translate=J(t.translate,0,n),e.scale=J(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Yp(e,t,n,r){e.min=J(t.min,n.min,r),e.max=J(t.max,n.max,r)}function vk(e,t,n,r){Yp(e.x,t.x,n.x,r),Yp(e.y,t.y,n.y,r)}function xk(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const wk={duration:.45,ease:[.4,0,.1,1]},Gp=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),Kp=Gp("applewebkit/")&&!Gp("chrome/")?Math.round:ie;function Xp(e){e.min=Kp(e.min),e.max=Kp(e.max)}function Sk(e){Xp(e.x),Xp(e.y)}function R1(e,t,n){return e==="position"||e==="preserve-aspect"&&!Du(Op(t),Op(n),.2)}const kk=T1({attachResizeListener:(e,t)=>Nt(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),vl={current:void 0},L1=T1({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!vl.current){const e=new kk({});e.mount(window),e.setOptions({layoutScroll:!0}),vl.current=e}return vl.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Ck={pan:{Feature:O4},drag:{Feature:I4,ProjectionNode:L1,MeasureLayout:k1}},Pk=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Ek(e){const t=Pk.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function Fu(e,t,n=1){const[r,i]=Ek(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return c1(s)?parseFloat(s):s}else return Eu(i)?Fu(i,t,n+1):i}function bk(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const o=i.get();if(!Eu(o))return;const s=Fu(o,r);s&&i.set(s)});for(const i in t){const o=t[i];if(!Eu(o))continue;const s=Fu(o,r);s&&(t[i]=s,n||(n={}),n[i]===void 0&&(n[i]=o))}return{target:t,transitionEnd:n}}const Tk=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),A1=e=>Tk.has(e),Rk=e=>Object.keys(e).some(A1),Qp=e=>e===qn||e===N,Zp=(e,t)=>parseFloat(e.split(", ")[t]),qp=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return Zp(i[1],t);{const o=r.match(/^matrix\((.+)\)$/);return o?Zp(o[1],e):0}},Lk=new Set(["x","y","z"]),Ak=ao.filter(e=>!Lk.has(e));function jk(e){const t=[];return Ak.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const Ir={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:qp(4,13),y:qp(5,14)};Ir.translateX=Ir.x;Ir.translateY=Ir.y;const Mk=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,o=getComputedStyle(i),{display:s}=o,a={};s==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{a[u]=Ir[u](r,o)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const c=t.getValue(u);c&&c.jump(a[u]),e[u]=Ir[u](l,o)}),e},Dk=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(A1);let o=[],s=!1;const a=[];if(i.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let c=n[l],d=ni(c);const f=t[l];let m;if($s(f)){const v=f.length,x=f[0]===null?1:0;c=f[x],d=ni(c);for(let k=x;k<v&&f[k]!==null;k++)m?Pa(ni(f[k])===m):m=ni(f[k])}else m=ni(f);if(d!==m)if(Qp(d)&&Qp(m)){const v=u.get();typeof v=="string"&&u.set(parseFloat(v)),typeof f=="string"?t[l]=parseFloat(f):Array.isArray(f)&&m===N&&(t[l]=f.map(parseFloat))}else d!=null&&d.transform&&(m!=null&&m.transform)&&(c===0||f===0)?c===0?u.set(m.transform(c)):t[l]=d.transform(f):(s||(o=jk(e),s=!0),a.push(l),r[l]=r[l]!==void 0?r[l]:t[l],u.jump(f))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,u=Mk(t,e,a);return o.length&&o.forEach(([c,d])=>{e.getValue(c).set(d)}),e.render(),va&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function Vk(e,t,n,r){return Rk(t)?Dk(e,t,n,r):{target:t,transitionEnd:r}}const zk=(e,t,n,r)=>{const i=bk(e,t,r);return t=i.target,r=i.transitionEnd,Vk(e,t,n,r)},Iu={current:null},j1={current:!1};function Nk(){if(j1.current=!0,!!va)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Iu.current=e.matches;e.addListener(t),t()}else Iu.current=!1}function Fk(e,t,n){const{willChange:r}=t;for(const i in t){const o=t[i],s=n[i];if(_e(o))e.addValue(i,o),Hs(r)&&r.add(i);else if(_e(s))e.addValue(i,ft(o,{owner:e})),Hs(r)&&r.remove(i);else if(s!==o)if(e.hasValue(i)){const a=e.getValue(i);!a.hasAnimated&&a.set(o)}else{const a=e.getStaticValue(i);e.addValue(i,ft(a!==void 0?a:o,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const Jp=new WeakMap,M1=Object.keys(Qi),Ik=M1.length,eh=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Ok=td.length;class $k{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>B.render(this.render,!1,!0);const{latestValues:a,renderState:l}=o;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.isControllingVariants=wa(n),this.isVariantNode=gg(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...c}=this.scrapeMotionValuesFromProps(n,{});for(const d in c){const f=c[d];a[d]!==void 0&&_e(f)&&(f.set(a[d],!1),Hs(u)&&u.add(d))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,Jp.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),j1.current||Nk(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Iu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Jp.delete(this.current),this.projection&&this.projection.unmount(),yt(this.notifyUpdate),yt(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=Zn.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&B.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),o()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,i,o){let s,a;for(let l=0;l<Ik;l++){const u=M1[l],{isEnabled:c,Feature:d,ProjectionNode:f,MeasureLayout:m}=Qi[u];f&&(s=f),c(n)&&(!this.features[u]&&d&&(this.features[u]=new d(this)),m&&(a=m))}if((this.type==="html"||this.type==="svg")&&!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:c,dragConstraints:d,layoutScroll:f,layoutRoot:m}=n;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!c||d&&hr(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:o,layoutScroll:f,layoutRoot:m})}return a}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):le()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<eh.length;r++){const i=eh[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o=t["on"+i];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=Fk(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<Ok;r++){const i=td[r],o=this.props[i];(Xi(o)||o===!1)&&(n[i]=o)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=ft(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=ud(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!_e(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new xd),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class D1 extends $k{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:i},o){let s=i4(r,t||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),s&&(s=i(s))),o){n4(this,r,s);const a=zk(this,r,s,n);n=a.transitionEnd,r=a.target}return{transition:t,transitionEnd:n,...r}}}function _k(e){return window.getComputedStyle(e)}class Bk extends D1{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(Zn.has(n)){const r=hd(n);return r&&r.default||0}else{const r=_k(t),i=(wg(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return w1(t,n)}build(t,n,r,i){id(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t,n){return ld(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;_e(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,i){bg(t,n,r,i)}}class Uk extends D1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Zn.has(n)){const r=hd(n);return r&&r.default||0}return n=Tg.has(n)?n:Jc(n),t.getAttribute(n)}measureInstanceViewportBox(){return le()}scrapeMotionValuesFromProps(t,n){return Lg(t,n)}build(t,n,r,i){sd(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){Rg(t,n,r,i)}mount(t){this.isSVGTag=ad(t.tagName),super.mount(t)}}const Hk=(e,t)=>rd(e)?new Uk(t,{enableHardwareAcceleration:!1}):new Bk(t,{enableHardwareAcceleration:!0}),Wk={layout:{ProjectionNode:L1,MeasureLayout:k1}},Yk={...v4,..._5,...Ck,...Wk},V=Qw((e,t)=>R5(e,t,Yk,Hk));function V1(){const e=w.useRef(!1);return Wr(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Gk(){const e=V1(),[t,n]=w.useState(0),r=w.useCallback(()=>{e.current&&n(t+1)},[t]);return[w.useCallback(()=>B.postRender(r),[r]),t]}class Kk extends w.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Xk({children:e,isPresent:t}){const n=w.useId(),r=w.useRef(null),i=w.useRef({width:0,height:0,top:0,left:0});return w.useInsertionEffect(()=>{const{width:o,height:s,top:a,left:l}=i.current;if(t||!r.current||!o||!s)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),w.createElement(Kk,{isPresent:t,childRef:r,sizeRef:i},w.cloneElement(e,{ref:r}))}const xl=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s})=>{const a=Yr(Qk),l=w.useId(),u=w.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:c=>{a.set(c,!0);for(const d of a.values())if(!d)return;r&&r()},register:c=>(a.set(c,!1),()=>a.delete(c))}),o?void 0:[n]);return w.useMemo(()=>{a.forEach((c,d)=>a.set(d,!1))},[n]),w.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),s==="popLayout"&&(e=w.createElement(Xk,{isPresent:n},e)),w.createElement(ya.Provider,{value:u},e)};function Qk(){return new Map}function Zk(e){return w.useEffect(()=>()=>e(),[])}const zn=e=>e.key||"";function qk(e,t){e.forEach(n=>{const r=zn(n);t.set(r,n)})}function Jk(e){const t=[];return w.Children.forEach(e,n=>{w.isValidElement(n)&&t.push(n)}),t}const Zi=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:o=!0,mode:s="sync"})=>{const a=w.useContext(nd).forceRender||Gk()[0],l=V1(),u=Jk(e);let c=u;const d=w.useRef(new Map).current,f=w.useRef(c),m=w.useRef(new Map).current,v=w.useRef(!0);if(Wr(()=>{v.current=!1,qk(u,m),f.current=c}),Zk(()=>{v.current=!0,m.clear(),d.clear()}),v.current)return w.createElement(w.Fragment,null,c.map(h=>w.createElement(xl,{key:zn(h),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:o,mode:s},h)));c=[...c];const x=f.current.map(zn),k=u.map(zn),g=x.length;for(let h=0;h<g;h++){const p=x[h];k.indexOf(p)===-1&&!d.has(p)&&d.set(p,void 0)}return s==="wait"&&d.size&&(c=[]),d.forEach((h,p)=>{if(k.indexOf(p)!==-1)return;const S=m.get(p);if(!S)return;const C=x.indexOf(p);let E=h;if(!E){const P=()=>{d.delete(p);const T=Array.from(m.keys()).filter(A=>!k.includes(A));if(T.forEach(A=>m.delete(A)),f.current=u.filter(A=>{const D=zn(A);return D===p||T.includes(D)}),!d.size){if(l.current===!1)return;a(),r&&r()}};E=w.createElement(xl,{key:zn(S),isPresent:!1,onExitComplete:P,custom:t,presenceAffectsLayout:o,mode:s},S),d.set(p,E)}c.splice(C,0,E)}),c=c.map(h=>{const p=h.key;return d.has(p)?h:w.createElement(xl,{key:zn(h),isPresent:!0,presenceAffectsLayout:o,mode:s},h)}),w.createElement(w.Fragment,null,d.size?c:c.map(h=>w.cloneElement(h)))};function Ou(e){const t=Yr(()=>ft(e)),{isStatic:n}=w.useContext(qc);if(n){const[,r]=w.useState(e);w.useEffect(()=>t.on("change",r),[])}return t}const eC=e=>e&&typeof e=="object"&&e.mix,tC=e=>eC(e)?e.mix:void 0;function nC(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],o=e[2+n],s=e[3+n],a=Ea(i,o,{mixer:tC(o[0]),...s});return t?a(r):a}function z1(e,t){const n=Ou(t()),r=()=>n.set(t());return r(),Wr(()=>{const i=()=>B.update(r,!1,!0),o=e.map(s=>s.on("change",i));return()=>{o.forEach(s=>s()),yt(r)}}),n}function rC(e){bi.current=[],e();const t=z1(bi.current,e);return bi.current=void 0,t}function Ct(e,t,n,r){if(typeof e=="function")return rC(e);const i=typeof t=="function"?t:nC(t,n,r);return Array.isArray(e)?th(e,i):th([e],([o])=>i(o))}function th(e,t){const n=Yr(()=>[]);return z1(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}function iC(e,t,n){var r;if(typeof e=="string"){let i=document;t&&(Pa(!!t.current),i=t.current),n?((r=n[e])!==null&&r!==void 0||(n[e]=i.querySelectorAll(e)),e=n[e]):e=i.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}const os=new WeakMap;let en;function oC(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function sC({target:e,contentRect:t,borderBoxSize:n}){var r;(r=os.get(e))===null||r===void 0||r.forEach(i=>{i({target:e,contentSize:t,get size(){return oC(e,n)}})})}function aC(e){e.forEach(sC)}function lC(){typeof ResizeObserver>"u"||(en=new ResizeObserver(aC))}function uC(e,t){en||lC();const n=iC(e);return n.forEach(r=>{let i=os.get(r);i||(i=new Set,os.set(r,i)),i.add(t),en==null||en.observe(r)}),()=>{n.forEach(r=>{const i=os.get(r);i==null||i.delete(t),i!=null&&i.size||en==null||en.unobserve(r)})}}const ss=new Set;let Li;function cC(){Li=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};ss.forEach(n=>n(t))},window.addEventListener("resize",Li)}function dC(e){return ss.add(e),Li||cC(),()=>{ss.delete(e),!ss.size&&Li&&(Li=void 0)}}function fC(e,t){return typeof e=="function"?dC(e):uC(e,t)}const pC=50,nh=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),hC=()=>({time:0,x:nh(),y:nh()}),mC={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function rh(e,t,n,r){const i=n[t],{length:o,position:s}=mC[t],a=i.current,l=n.time;i.current=e["scroll"+s],i.scrollLength=e["scroll"+o]-e["client"+o],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=Fr(0,i.scrollLength,i.current);const u=r-l;i.velocity=u>pC?0:pd(i.current-a,u)}function gC(e,t,n){rh(e,"x",t,n),rh(e,"y",t,n),t.time=n}function yC(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const i=r.getBoundingClientRect();r=r.parentElement;const o=r.getBoundingClientRect();n.x+=i.left-o.left,n.y+=i.top-o.top}else if(r instanceof SVGGraphicsElement){const{x:i,y:o}=r.getBBox();n.x+=i,n.y+=o;let s=null,a=r.parentNode;for(;!s;)a.tagName==="svg"&&(s=a),a=r.parentNode;r=s}else break;return n}const vC={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},$u={start:0,center:.5,end:1};function ih(e,t,n=0){let r=0;if($u[e]!==void 0&&(e=$u[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(r=t*e),n+r}const xC=[0,0];function wC(e,t,n,r){let i=Array.isArray(e)?e:xC,o=0,s=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,$u[e]?e:"0"]),o=ih(i[0],n,r),s=ih(i[1],t),o-s}const SC={x:0,y:0};function kC(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function CC(e,t,n){let{offset:r=vC.All}=n;const{target:i=e,axis:o="y"}=n,s=o==="y"?"height":"width",a=i!==e?yC(i,e):SC,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:kC(i),u={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let c=!t[o].interpolate;const d=r.length;for(let f=0;f<d;f++){const m=wC(r[f],u[s],l[s],a[o]);!c&&m!==t[o].interpolatorOffsets[f]&&(c=!0),t[o].offset[f]=m}c&&(t[o].interpolate=Ea(t[o].offset,o1(r)),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}function PC(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function EC(e,t,n,r={}){return{measure:()=>PC(e,r.target,n),update:i=>{gC(e,n,i),(r.offset||r.target)&&CC(e,n,r)},notify:()=>t(n)}}const ii=new WeakMap,oh=new WeakMap,wl=new WeakMap,sh=e=>e===document.documentElement?window:e;function bC(e,{container:t=document.documentElement,...n}={}){let r=wl.get(t);r||(r=new Set,wl.set(t,r));const i=hC(),o=EC(t,e,i,n);if(r.add(o),!ii.has(t)){const a=()=>{for(const f of r)f.measure()},l=()=>{for(const f of r)f.update(Se.timestamp)},u=()=>{for(const f of r)f.notify()},c=()=>{B.read(a,!1,!0),B.read(l,!1,!0),B.update(u,!1,!0)};ii.set(t,c);const d=sh(t);window.addEventListener("resize",c,{passive:!0}),t!==document.documentElement&&oh.set(t,fC(t,c)),d.addEventListener("scroll",c,{passive:!0})}const s=ii.get(t);return B.read(s,!1,!0),()=>{var a;yt(s);const l=wl.get(t);if(!l||(l.delete(o),l.size))return;const u=ii.get(t);ii.delete(t),u&&(sh(t).removeEventListener("scroll",u),(a=oh.get(t))===null||a===void 0||a(),window.removeEventListener("resize",u))}}function ah(e,t){Fg(!!(!t||t.current))}const TC=()=>({scrollX:ft(0),scrollY:ft(0),scrollXProgress:ft(0),scrollYProgress:ft(0)});function N1({container:e,target:t,layoutEffect:n=!0,...r}={}){const i=Yr(TC);return(n?Wr:w.useEffect)(()=>(ah("target",t),ah("container",e),bC(({x:s,y:a})=>{i.scrollX.set(s.current),i.scrollXProgress.set(s.progress),i.scrollY.set(a.current),i.scrollYProgress.set(a.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),i}function RC(e){e.values.forEach(t=>t.stop())}function LC(){const e=new Set,t={subscribe(n){return e.add(n),()=>void e.delete(n)},start(n,r){const i=[];return e.forEach(o=>{i.push(h1(o,n,{transitionOverride:r}))}),Promise.all(i)},set(n){return e.forEach(r=>{t4(r,n)})},stop(){e.forEach(n=>{RC(n)})},mount(){return()=>{t.stop()}}};return t}function AC(){const e=Yr(LC);return Wr(e.mount,[]),e}var F1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},lh=he.createContext&&he.createContext(F1),wn=globalThis&&globalThis.__assign||function(){return wn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},wn.apply(this,arguments)},jC=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function I1(e){return e&&e.map(function(t,n){return he.createElement(t.tag,wn({key:n},t.attr),I1(t.child))})}function oe(e){return function(t){return he.createElement(MC,wn({attr:wn({},e.attr)},t),I1(e.child))}}function MC(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,s=jC(e,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),he.createElement("svg",wn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:wn(wn({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&he.createElement("title",null,o),e.children)};return lh!==void 0?he.createElement(lh.Consumer,null,function(n){return t(n)}):t(F1)}function DC(e){return oe({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"}}]})(e)}function VC(e){return oe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"}}]})(e)}function zC(e){return oe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"}}]})(e)}function NC(e){return oe({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"}}]})(e)}function ba(e){return oe({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M104 96H56c-13.3 0-24 10.7-24 24v104H8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h24v104c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm528 128h-24V120c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h24c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM456 32h-48c-13.3 0-24 10.7-24 24v168H256V56c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h128v168c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24z"}}]})(e)}function FC(e){return oe({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"}}]})(e)}function IC(e){return oe({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"}}]})(e)}function OC(e){return oe({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"}}]})(e)}function $C(e){return oe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"}}]})(e)}function _C(e){return oe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"}},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"}}]})(e)}function BC(e){return oe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"}}]})(e)}function Sl(e){return oe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"}}]})(e)}function _u(e){return oe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}},{tag:"line",attr:{x1:"1",y1:"1",x2:"23",y2:"23"}}]})(e)}function Bu(e){return oe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"}}]})(e)}function UC(e){return oe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}}]})(e)}function HC(e){return oe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"}},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"}},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"}},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"}},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"}},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}}]})(e)}function WC(e){return oe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"}}]})(e)}function YC(e){return oe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"}},{tag:"polyline",attr:{points:"17 6 23 6 23 12"}}]})(e)}function GC(e){return oe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"}},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"}},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"}}]})(e)}function as(e){return oe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(e)}function KC(e){return oe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}}]})(e)}const Uu={name:"GYM BUDDY",logoSrc:"/icon-hand-dumbbell-red.png",heroSrc:"/hero-image.png",floatingCards:[{id:"progress",position:"top-left",rotate:-8,zIndex:0,stat:"87%",title:"Progresso Mensal",description:"usuários atingem suas metas de treino com nosso sistema de acompanhamento personalizado.",category:"Resultados"},{id:"users",position:"top-right",rotate:12,zIndex:0,stat:"15k+",title:"Usuários Ativos",description:"pessoas já transformaram seus corpos usando nossa plataforma de treinos inteligentes.",category:"Comunidade"},{id:"workouts",position:"bottom-left",rotate:6,zIndex:0,stat:"200+",title:"Exercícios Disponíveis",description:"diferentes modalidades de treino adaptadas ao seu nível e objetivos pessoais.",category:"Variedade"},{id:"ai",position:"bottom-right",rotate:-15,zIndex:0,stat:"24/7",title:"IA Personal Trainer",description:"assistente inteligente disponível para ajustar seus treinos em tempo real.",category:"Tecnologia"}]},XC=({isOpen:e,onClose:t,onSwitchToSignup:n})=>{const[r,i]=w.useState(!1),[o,s]=w.useState(!1),[a,l]=w.useState(null),[u,c]=w.useState({email:"",password:""}),d=()=>{c({email:"",password:""}),i(!1),l(null),s(!1)},f=()=>{d(),t()},m=async x=>{x.preventDefault(),s(!0),l(null);try{const k=`/api/v1/gymbuddy/usuario/login/email/senha?email=${encodeURIComponent(u.email)}&senha=${encodeURIComponent(u.password)}`;console.log("Fazendo login via proxy:",k);const g=await fetch(k,{method:"GET",headers:{"Content-Type":"application/json"}}),h=g.headers.get("content-type");let p;if(h&&h.includes("application/json"))p=await g.json(),console.log("Response data:",p);else{const S=await g.text();throw console.log("Response text (não JSON):",S),new Error(`Erro na API. Status: ${g.status}. Verifique se a nova API está funcionando.`)}if(p&&p.status===!0)console.log("Login successful:",p),p.token&&localStorage.setItem("authToken",p.token),(p.user||p.data)&&localStorage.setItem("userData",JSON.stringify(p.user||p.data)),f(),alert("Login realizado com sucesso!");else{let S=(p==null?void 0:p.message)||"Erro ao fazer login. Verifique suas credenciais.";S.includes("campos com preenchimento obrigatórios")&&(S="Email ou senha incorretos. Verifique suas credenciais e tente novamente."),console.log("Login error from API:",S),l(S)}}catch(k){console.error("Login error:",k),k instanceof TypeError?k.message.includes("Failed to fetch")?l("Erro de conectividade: Não foi possível conectar ao servidor. Verifique se o servidor está rodando no IP 10.107.144.31:8080"):k.message.includes("NetworkError")?l("Erro de rede: Verifique sua conexão com a internet e se o servidor está acessível."):l("Erro de requisição: "+k.message):l("Erro inesperado: "+k.message)}finally{s(!1)}},v=x=>{c({...u,[x.target.name]:x.target.value})};return y.jsx(Zi,{children:e&&y.jsxs(y.Fragment,{children:[y.jsx(QC,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:f}),y.jsx(ZC,{initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},transition:{duration:.4,ease:"easeOut"},children:y.jsxs(qC,{children:[y.jsx(JC,{onClick:f,children:y.jsx(as,{})}),y.jsxs(e3,{children:[y.jsx(ba,{className:"logo-icon"}),y.jsx("h2",{children:"GYM BUDDY"}),y.jsx("div",{className:"divider"})]}),y.jsx(t3,{children:"FAZER LOGIN"}),y.jsxs(n3,{onSubmit:m,children:[y.jsx(uh,{children:y.jsx(ch,{type:"email",name:"email",placeholder:"Email ou Usuário",value:u.email,onChange:v,required:!0})}),y.jsxs(uh,{children:[y.jsx(ch,{type:r?"text":"password",name:"password",placeholder:"Senha",value:u.password,onChange:v,required:!0}),y.jsx(r3,{type:"button",onClick:()=>i(!r),children:r?y.jsx(_u,{}):y.jsx(Bu,{})})]}),y.jsx(i3,{href:"#",onClick:x=>x.preventDefault(),children:"Esqueci minha senha"}),a&&y.jsx(o3,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},children:a}),y.jsx(s3,{type:"submit",disabled:o,whileHover:o?{}:{scale:1.02},whileTap:o?{}:{scale:.98},children:o?"Entrando...":"Fazer Login"})]}),y.jsxs(a3,{children:["Não possui uma conta? ",y.jsx(l3,{href:"#",onClick:x=>{x.preventDefault(),n()},children:"Criar conta"})]})]})})]})})},QC=b(V.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 9998;
`,ZC=b(V.div)`
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
`,qC=b.div`
  position: relative;
  background: #0A0A0A;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.6rem;
  padding: 3rem;
  width: 90%;
  max-width: 42rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  pointer-events: auto;
`,JC=b.button`
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
`,e3=b.div`
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
`,t3=b.h1`
  color: var(--white);
  font-size: 2.4rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: 0.05em;
`,n3=b.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,uh=b.div`
  position: relative;
`,ch=b.input`
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
`,r3=b.button`
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
`,i3=b.a`
  color: var(--primary);
  font-size: 1.3rem;
  text-align: center;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--primary-dark);
    text-decoration: underline;
  }
`,o3=b(V.div)`
  background: rgba(220, 38, 38, 0.1);
  border: 1px solid rgba(220, 38, 38, 0.3);
  border-radius: 0.8rem;
  padding: 1rem 1.5rem;
  color: #ef4444;
  font-size: 1.4rem;
  text-align: center;
  margin: 1rem 0;
`,s3=b(V.button)`
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
`,a3=b.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.4rem;
  text-align: center;
  margin-top: 2rem;
`,l3=b.a`
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`,Sd=({isOpen:e,onClose:t,onSwitchToLogin:n})=>{const[r,i]=w.useState(!1),[o,s]=w.useState(!1),[a,l]=w.useState({username:"",email:"",confirmEmail:"",password:"",confirmPassword:""}),[u,c]=w.useState(null),[d,f]=w.useState(!1),m=()=>{l({username:"",email:"",confirmEmail:"",password:"",confirmPassword:""}),i(!1),s(!1),c(null)},v=()=>{m(),t()},x=h=>{h.preventDefault(),console.log("Signup attempt:",a)},k=h=>{const p=h.length>=8,S=/[A-Z]/.test(h),C=/\d/.test(h),E=/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(h);return p&&S&&C&&E},g=h=>{const{name:p,value:S}=h.target;l({...a,[p]:S}),p==="password"&&c(S===""?null:k(S))};return y.jsx(Zi,{children:e&&y.jsxs(y.Fragment,{children:[y.jsx(u3,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:v}),y.jsx(c3,{initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},transition:{duration:.4,ease:"easeOut"},children:y.jsxs("div",{children:[y.jsx(d3,{onClick:v,children:y.jsx(as,{})}),y.jsxs(f3,{children:[y.jsx(ba,{className:"logo-icon"}),y.jsx("h2",{children:"GYM BUDDY"}),y.jsx("div",{className:"divider"})]}),y.jsx(p3,{children:"CADASTRAR-SE"}),y.jsxs(h3,{onSubmit:x,children:[y.jsx(oi,{children:y.jsx(si,{type:"text",name:"username",placeholder:"Crie um nome de usuário",value:a.username,onChange:g,required:!0})}),y.jsx(oi,{children:y.jsx(si,{type:"email",name:"email",placeholder:"Insira seu e-mail",value:a.email,onChange:g,required:!0})}),y.jsx(oi,{children:y.jsx(si,{type:"email",name:"confirmEmail",placeholder:"Confirme o email",value:a.confirmEmail,onChange:g,required:!0})}),y.jsxs(oi,{children:[y.jsx(si,{type:r?"text":"password",name:"password",placeholder:"Crie uma senha",value:a.password,onChange:g,required:!0,$isValid:u}),y.jsxs(m3,{initial:{scale:0,opacity:0},animate:{scale:u!==null?[0,1.2,.9,1.05,1]:0,opacity:u!==null?1:0,filter:u!==null?["blur(4px)","blur(0px)"]:"blur(4px)"},exit:{scale:0,opacity:0,filter:"blur(4px)"},transition:{type:"spring",stiffness:260,damping:20,duration:.6,filter:{duration:.3}},whileHover:{scale:1.1,transition:{duration:.2}},$isValid:u,onMouseEnter:()=>u===!1&&f(!0),onMouseLeave:()=>f(!1),children:[y.jsx(V.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:300,damping:15,delay:.1},style:{display:"flex",alignItems:"center",justifyContent:"center"},children:u===!0?y.jsx(BC,{}):y.jsx(as,{})},u?"check":"x"),y.jsx(Zi,{children:d&&u===!1&&y.jsxs(g3,{initial:{opacity:0,scale:.7,y:15,filter:"blur(8px)",rotateX:-15},animate:{opacity:1,scale:1,y:0,filter:"blur(0px)",rotateX:0},exit:{opacity:0,scale:.85,y:8,filter:"blur(4px)",rotateX:10},transition:{duration:.4,ease:[.25,.46,.45,.94],opacity:{duration:.3},filter:{duration:.3},scale:{type:"spring",stiffness:300,damping:20}},children:[y.jsxs("div",{className:"tooltip-header",children:[y.jsx(as,{className:"tooltip-icon"}),y.jsx("span",{children:"Senha inválida"})]}),y.jsxs(V.div,{className:"tooltip-content",initial:"hidden",animate:"visible",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.15}}},children:[y.jsxs(V.div,{className:"requirement",variants:{hidden:{opacity:0,x:-10},visible:{opacity:1,x:0,transition:{duration:.3,ease:"easeOut"}}},children:[y.jsx("span",{className:"bullet",children:"•"}),"Mínimo 8 caracteres"]}),y.jsxs(V.div,{className:"requirement",variants:{hidden:{opacity:0,x:-10},visible:{opacity:1,x:0,transition:{duration:.3,ease:"easeOut"}}},children:[y.jsx("span",{className:"bullet",children:"•"}),"1 letra maiúscula"]}),y.jsxs(V.div,{className:"requirement",variants:{hidden:{opacity:0,x:-10},visible:{opacity:1,x:0,transition:{duration:.3,ease:"easeOut"}}},children:[y.jsx("span",{className:"bullet",children:"•"}),"1 número"]}),y.jsxs(V.div,{className:"requirement",variants:{hidden:{opacity:0,x:-10},visible:{opacity:1,x:0,transition:{duration:.3,ease:"easeOut"}}},children:[y.jsx("span",{className:"bullet",children:"•"}),"1 caractere especial"]})]})]})})]}),y.jsx(dh,{type:"button",onClick:()=>i(!r),children:r?y.jsx(_u,{}):y.jsx(Bu,{})})]}),y.jsxs(oi,{children:[y.jsx(si,{type:o?"text":"password",name:"confirmPassword",placeholder:"Confirme a senha",value:a.confirmPassword,onChange:g,required:!0}),y.jsx(dh,{type:"button",onClick:()=>s(!o),children:o?y.jsx(_u,{}):y.jsx(Bu,{})})]}),y.jsx(y3,{type:"submit",whileHover:{scale:1.02},whileTap:{scale:.98},children:"Cadastrar"})]}),y.jsxs(v3,{children:["Já possui uma conta? ",y.jsx(x3,{href:"#",onClick:h=>{h.preventDefault(),n()},children:"Fazer Login"})]})]})})]})})},u3=b(V.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 9998;
`,c3=b(V.div)`
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
`,d3=b.button`
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
`,f3=b.div`
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
`,p3=b.h1`
  color: var(--white);
  font-size: 2.4rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: 0.05em;
`,h3=b.form`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`,oi=b.div`
  position: relative;
`,si=b.input`
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
`,m3=b(V.div)`
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
`,dh=b.button`
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
`,g3=b(V.div)`
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
`,y3=b(V.button)`
  background: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 2.5rem;
  padding: 1.4rem 2rem;
  font-size: 1.6rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    background: var(--primary-dark);
    box-shadow: 0 8px 24px rgba(227, 6, 19, 0.4);
  }
`,v3=b.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.4rem;
  text-align: center;
  margin-top: 2rem;
`,x3=b.a`
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`,w3=()=>{const[e,t]=w.useState(!1),[n,r]=w.useState(()=>localStorage.getItem("theme")==="dark"),[i,o]=w.useState(!1),[s,a]=w.useState(!1),l=Xt(),u=()=>{o(!1),a(!0)},c=()=>{a(!1),o(!0)};w.useEffect(()=>{const m=()=>{const v=window.scrollY>10;v!==e&&t(v)};return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[e]),w.useEffect(()=>{document.documentElement.setAttribute("data-theme",n?"dark":"light"),localStorage.setItem("theme",n?"dark":"light")},[n]);const d=()=>{r(!n)},f=[{name:"Home",path:"/"},{name:"Sobre nós",path:"/sobre"},{name:"Recursos",path:"/recursos"},{name:"Aplicativo",path:"/app"}];return y.jsxs(S3,{$scrolled:e,children:[y.jsxs("div",{className:"container",children:[y.jsxs(k3,{children:[y.jsx(ba,{className:"icon"}),y.jsx("span",{children:Uu.name})]}),y.jsx(C3,{children:y.jsx(P3,{children:f.map(m=>y.jsx(E3,{children:y.jsxs(b3,{to:m.path,className:l.pathname===m.path?"active":"",children:[y.jsx(V.span,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.3,delay:.1},children:m.name}),l.pathname===m.path&&y.jsx(V.span,{className:"underline",layoutId:"underline",initial:{scaleX:0,opacity:0},animate:{scaleX:1,opacity:1},exit:{scaleX:0,opacity:0},transition:{type:"spring",stiffness:400,damping:30,duration:.6}}),y.jsx(V.div,{className:"nav-glow",initial:{opacity:0,scale:.8},animate:{opacity:l.pathname===m.path?1:0,scale:l.pathname===m.path?1:.8},transition:{duration:.4}})]})},m.path))})}),y.jsxs(R3,{children:[y.jsx(L3,{onClick:()=>o(!0),children:"Login"}),y.jsx(A3,{onClick:()=>a(!0),children:"Cadastro"})]}),y.jsx(T3,{onClick:d,whileHover:{scale:1.1},whileTap:{scale:.95},$isDarkMode:n,children:y.jsx("div",{className:"icon-container",children:y.jsx(Zi,{mode:"wait",children:y.jsx(V.div,{className:"icon-wrapper",initial:{opacity:0,scale:.3,y:10,filter:"blur(4px)"},animate:{opacity:1,scale:1,y:0,filter:"blur(0px)"},exit:{opacity:0,scale:.3,y:-10,filter:"blur(4px)"},transition:{duration:.6,ease:[.25,.46,.45,.94],opacity:{duration:.4},scale:{duration:.5,ease:"backOut"},filter:{duration:.3}},children:n?y.jsx(UC,{className:"theme-icon moon"}):y.jsx(HC,{className:"theme-icon sun"})},n?"moon":"sun")})})})]}),y.jsx(XC,{isOpen:i,onClose:()=>o(!1),onSwitchToSignup:u}),y.jsx(Sd,{isOpen:s,onClose:()=>a(!1),onSwitchToLogin:c})]})},S3=b.header`
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
`,k3=b.div`
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

`,C3=b.nav`
  @media (max-width: 1024px) {
    display: none;
  }
`,P3=b.ul`
  display: flex;
  gap: 3.2rem;
`,E3=b.li``,b3=b(Zc)`
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
`,T3=b(V.button)`
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
`,R3=b.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`,O1=b.button`
  height: 5rem;
  padding: 0 3rem;
  border-radius: 2.5rem;
  font-size: 1.6rem;
  font-weight: 700;
  transition: all 0.2s ease;
`,L3=b(O1)`
  background: transparent;
  color: var(--white);
  border: 1px solid var(--primary);
  
  &:hover {
    background: rgba(255, 0, 0, 0.12);
  }
`,A3=b(O1)`
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
`,j3=()=>{const[e,t]=w.useState(()=>new URLSearchParams(window.location.search).get("grid")==="1");return w.useEffect(()=>{const n=r=>{r.key.toLowerCase()==="g"&&t(i=>!i)};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[]),e?y.jsx(M3,{role:"presentation","aria-hidden":!0,children:y.jsx("div",{className:"container",children:y.jsx(D3,{children:Array.from({length:12}).map((n,r)=>y.jsx(V3,{},r))})})}):null},M3=b.div`
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
`,D3=b.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: var(--gutter);
`,V3=b.div`
  background: rgba(255, 0, 0, 0.08);
  height: 100%;
`,z3=({onOpenSignup:e})=>{const t=Uu.floatingCards,n={progress:YC,users:GC,workouts:$C,ai:KC},r={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15}}},i={hidden:{y:30,opacity:0,scale:.8},visible:{y:0,opacity:1,scale:1,transition:{duration:.8,ease:[.25,.46,.45,.94]}}};return y.jsx(N3,{children:y.jsx("div",{className:"container",children:y.jsxs(F3,{children:[y.jsx(I3,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.9,ease:"easeOut"},children:y.jsxs("h1",{children:[y.jsxs("span",{className:"line no-wrap",children:["O SEU ",y.jsx("span",{className:"highlight",children:"PARCEIRO"})," DA ACADEMIA"]}),y.jsx("br",{className:"title-break"}),y.jsx("span",{className:"line no-wrap",children:"PRONTO PARA A AÇÃO"})]})}),y.jsxs(O3,{as:V.div,initial:{opacity:0,x:40},animate:{opacity:1,x:0},transition:{duration:1.2,ease:"easeOut"},children:[y.jsx("img",{src:Uu.heroSrc,alt:"Homem musculoso",className:"hero-image",onError:o=>{const s=o.currentTarget;s.src.endsWith("/hero-image.png")||(s.src="/hero-image.png")}}),y.jsx($3,{variants:r,initial:"hidden",animate:"visible",children:t.map((o,s)=>{const a=n[o.id];return y.jsx(_3,{className:o.position,style:{"--rot":`${o.rotate||0}deg`,"--dur":`${6+s%5*.3}s`,zIndex:o.zIndex},variants:i,whileHover:{scale:1.08,rotate:0,transition:{duration:.3,ease:"easeOut"}},whileTap:{scale:.95},children:y.jsxs(B3,{children:[y.jsxs("div",{className:"card-header",children:[y.jsx("div",{className:"card-icon",children:y.jsx(a,{})}),y.jsx("span",{className:"category",children:o.category})]}),y.jsxs("div",{className:"card-main",children:[y.jsx("div",{className:"card-stat",children:o.stat}),y.jsx("h3",{className:"card-title",children:o.title})]}),y.jsx("div",{className:"card-footer",children:y.jsxs("div",{className:"card-indicators",children:[y.jsx(WC,{className:"indicator-icon"}),y.jsx(_C,{className:"indicator-icon"})]})})]})},o.id)})})]}),y.jsxs(U3,{initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},transition:{duration:.5,delay:.5},onClick:e,children:[y.jsx("span",{className:"label",children:"Vamos começar"}),y.jsxs("span",{className:"arrows","aria-hidden":"true",children:[y.jsx(Sl,{className:"a1"}),y.jsx(Sl,{className:"a2"}),y.jsx(Sl,{className:"a3"})]})]})]})})})},N3=b.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 12rem 0 6rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%);
`,F3=b.div`
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
`,I3=b(V.div)`
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
`,O3=b.div`
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
`,$3=b(V.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
`,_3=b(V.div)`
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
`,B3=b(V.div)`
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
`,U3=b(V.button)`
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
`,H3=()=>{const[e,t]=w.useState(!1),n=()=>{t(!0)},r=()=>{t(!1)};return y.jsxs(y.Fragment,{children:[y.jsx(V.main,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:y.jsx(z3,{onOpenSignup:n})}),y.jsx(Sd,{isOpen:e,onClose:r,onSwitchToLogin:()=>{}})]})},W3=()=>{const e=w.useRef(null),[t,n]=w.useState(!1),[r,i]=w.useState({x:0,y:0});AC();const{scrollYProgress:o}=N1({target:e,offset:["start end","end start"]}),s=Ct(o,[0,1],[100,-100]),a=Ct(o,[0,1],[-5,5]),l=Ct(o,[0,.5,1],[.8,1.1,.8]);Ct(o,[0,1],[0,-50]),w.useEffect(()=>{const f=m=>{i({x:(m.clientX/window.innerWidth-.5)*20,y:(m.clientY/window.innerHeight-.5)*20})};return window.addEventListener("mousemove",f),()=>window.removeEventListener("mousemove",f)},[]);const u=()=>{n(!1)},c=[{icon:ba,text:"Mais do que um site, um verdadeiro parceiro de treino.",gradient:"linear-gradient(135deg, #E30613 0%, #ff4757 100%)"},{icon:NC,text:"Nada de planos genéricos, tenha uma experiência personalizada.",gradient:"linear-gradient(135deg, #ff6348 0%, #E30613 100%)"},{icon:IC,text:"Com a ajuda de nosso agente IA, nada é impossível.",gradient:"linear-gradient(135deg, #E30613 0%, #ff7979 100%)"},{icon:FC,text:"Treinar não precisa ser difícil. Seja bem-vindo ao Gym Buddy!",gradient:"linear-gradient(135deg, #ff4757 0%, #E30613 100%)"}],d={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut"}}};return y.jsxs(Y3,{ref:e,children:[y.jsxs(G3,{children:[y.jsx(PP,{}),y.jsxs(V.div,{variants:d,initial:"hidden",animate:"visible",children:[y.jsxs(K3,{children:[y.jsx(V.span,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:"Podemos ajudar você a"})," ",y.jsx(X3,{children:y.jsx(V.span,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.3,ease:"easeOut"},children:"cumprir todas as suas metas"})})]}),y.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.6,duration:.8},children:y.jsx(Q3,{children:"Faça parte desse projeto hoje mesmo!"})})]})]}),y.jsx(Z3,{children:y.jsx(q3,{children:y.jsxs(J3,{initial:{opacity:0,y:100},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,ease:"easeOut"},children:[y.jsx(eP,{style:{y:s,rotate:a,scale:l},children:y.jsx("img",{src:"/images/muscular-man.png",alt:"Homem musculoso treinando"})}),y.jsxs(tP,{children:[y.jsxs(nP,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6,delay:.2},children:[y.jsx(rP,{children:"SOBRE NÓS"}),y.jsx(iP,{children:"Transforme seu corpo e mente"})]}),y.jsx(oP,{children:c.map((f,m)=>{const v=f.icon;return y.jsx(V.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6,delay:.3+m*.1,ease:"easeOut"},whileHover:{x:10,scale:1.02},children:y.jsxs(Ta,{whileHover:{boxShadow:"0 20px 40px rgba(227, 6, 19, 0.2)"},children:[y.jsxs(sP,{gradient:f.gradient,children:[y.jsx(V.div,{animate:{rotate:[0,5,-5,0]},transition:{duration:4,repeat:1/0,delay:m*.5},children:y.jsx(v,{})}),y.jsx(aP,{}),y.jsx(uP,{})]}),y.jsxs(cP,{children:[y.jsx(dP,{children:f.text}),y.jsx(fP,{gradient:f.gradient})]})]})},m)})}),y.jsx(fh,{className:"float-1",animate:{y:[-20,20,-20],x:[-10,10,-10]},transition:{duration:6,repeat:1/0,ease:"easeInOut"}}),y.jsx(fh,{className:"float-2",animate:{y:[20,-20,20],x:[10,-10,10]},transition:{duration:8,repeat:1/0,ease:"easeInOut"}})]})]})})}),y.jsx(pP,{children:y.jsx(V.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.6,delay:1},children:y.jsxs(hP,{children:["Torne-se já um membro! Acesse ou crie sua conta na"," ",y.jsxs(mP,{onClick:()=>n(!0),whileHover:{scale:1.05},whileTap:{scale:.95},children:["GymBuddy",y.jsx(yP,{})]})]})})}),y.jsx(Sd,{isOpen:t,onClose:()=>n(!1),onSwitchToLogin:u}),y.jsxs(xP,{children:[y.jsx(SP,{}),y.jsx(kP,{style:{x:r.x,y:r.y}})]})]})},Y3=b.div`
  min-height: 100vh;
  background: var(--background);
  color: var(--white);
  padding-top: 8rem;
  position: relative;
  overflow: hidden;
`,G3=b.section`
  text-align: center;
  padding: 4rem 2rem 6rem;
  max-width: 120rem;
  margin: 0 auto;
  position: relative;
`,K3=b.h1`
  font-size: clamp(3rem, 5vw, 5.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 2rem;
  color: var(--white);
  letter-spacing: -0.02em;
`,X3=b.span`
  background: linear-gradient(135deg, #E30613 0%, #ff4757 50%, #ff6348 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
`,Q3=b.p`
  font-size: clamp(1.6rem, 2.5vw, 2rem);
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  max-width: 60rem;
  margin: 0 auto;
`,Z3=b.section`
  padding: 6rem 2rem;
  position: relative;
  z-index: 1;
`,q3=b.div`
  max-width: 120rem;
  margin: 0 auto;
`,J3=b(V.div)`
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
`,eP=b(V.div)`
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
`,tP=b.div`
  position: relative;
  z-index: 1;
  padding: 5rem;

  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
`,nP=b(V.div)`
  margin-bottom: 4rem;
`,rP=b.div`
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
`,iP=b.h2`
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 800;
  color: var(--white);
  line-height: 1.2;
  margin: 0;
`,oP=b.div`
  display: grid;
  gap: 2.5rem;
  max-width: 60rem;
`,Ta=b(V.div)`
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
`,sP=b.div`
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

  ${Ta}:hover & {
    transform: rotate(5deg) scale(1.1);
  }
`,aP=b.div`
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

  ${Ta}:hover & {
    opacity: 1;
  }
`,lP=Gt`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
`,uP=b.div`
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
    animation: ${lP} 3s ease-out infinite;
  }
`,cP=b.div`
  flex: 1;
`,dP=b.p`
  font-size: 1.7rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
  margin: 0;
`,fP=b.div`
  width: 0;
  height: 2px;
  background: ${e=>e.gradient};
  margin-top: 1rem;
  transition: width 0.3s ease;
  border-radius: 1px;

  ${Ta}:hover & {
    width: 100%;
  }
`,fh=b(V.div)`
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
`,pP=b.section`
  text-align: center;
  padding: 6rem 2rem 8rem;
  max-width: 80rem;
  margin: 0 auto;
`,hP=b.h2`
  font-size: clamp(2.4rem, 4vw, 3.6rem);
  font-weight: 700;
  line-height: 1.3;
  color: var(--white);
  margin: 0;
`,mP=b(V.span)`
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
`,gP=Gt`
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
`,yP=b.div`
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
    animation: ${gP} 3s ease-in-out infinite;
    box-shadow: 0 0 6px var(--primary);
  }
  
  &::after {
    animation-delay: 1.5s;
    left: 8px;
    top: 8px;
  }
`,vP=Gt`
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(-30px) translateX(20px);
  }
  66% {
    transform: translateY(30px) translateX(-20px);
  }
`,xP=b.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`,wP=Gt`
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
`,SP=b.div`
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
    animation: ${wP} 20s linear infinite;
  }
  
  &::before {
    left: 10%;
    animation-delay: 0s;
  }
  
  &::after {
    left: 70%;
    animation-delay: 10s;
  }
`,kP=b(V.div)`
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
  animation: ${vP} 30s ease-in-out infinite;
`,CP=Gt`
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
`,PP=b.div`
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
    animation: ${CP} 8s ease-out infinite;
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
`;function EP(e){return oe({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"}}]})(e)}const bP=()=>{const e=w.useRef(null),[t,n]=w.useState(null),r=Ou(0),i=Ou(0),{scrollYProgress:o}=N1({target:e,offset:["start end","end start"]}),s=Ct(o,[0,1],[0,-100]),a=Ct(o,[0,1],[100,-50]),l=(g,h)=>{const p=g.currentTarget.getBoundingClientRect(),S=(g.clientX-p.left)/p.width,C=(g.clientY-p.top)/p.height;r.set(S),i.set(C)},u=Ct(i,[0,1],[15,-15]),c=Ct(r,[0,1],[-15,15]),d=Ct(r,[0,1],[15,-15]),f=Ct(i,[0,1],[15,-15]),m=[{id:1,title:"CENTRAL DE APOIO PRA INICIANTES",description:"Nosso app é completamente amigável com pessoas inexperientes na academia, fazendo com que o app seja uma abertura de portas à uma comunidade segura para todos.",additionalText:"Queremos fornecer a melhor experiência possível!",icon:OC,gradient:"linear-gradient(135deg, #E30613 0%, #B91C1C 100%)"},{id:2,title:"INTELIGÊNCIA ARTIFICIAL INTEGRADA",description:"No nosso aplicativo, uma inteligência artificial já treinada pra ajudar as pessoas a montarem seus treinos é contar melhor suas calorias está inclusa! Isso fortalece uma praticidade na criação de treinos para pessoas iniciantes, sem ser preciso mais treinos genéricos.",icon:EP,gradient:"linear-gradient(135deg, #DC2626 0%, #991B1B 100%)"},{id:3,title:"CONTROLE COMPLETO DE TREINOS",description:"E por fim, no nosso app, é possível consultar desde à execução dos exercícios até quantas repetições você deverá fazer baseado no SEU objetivo, com tudo relacionado à montagem do treino se adaptando à sua necessidade, seja ela qual for!",icon:zC,gradient:"linear-gradient(135deg, #B91C1C 0%, #7F1D1D 100%)"}],v={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3,delayChildren:.2}}},x={hidden:{opacity:0,y:100,scale:.8,rotateX:45},visible:{opacity:1,y:0,scale:1,rotateX:0,transition:{duration:.8,ease:[.25,.46,.45,.94]}}},k={hidden:{opacity:0,y:-50},visible:{opacity:1,y:0,transition:{duration:1,ease:"easeOut"}}};return y.jsxs(ph,{ref:e,children:[y.jsxs(TP,{style:{y:s},children:[y.jsx(LP,{}),y.jsx(jP,{})]}),y.jsx(MP,{children:y.jsx(V.div,{variants:k,initial:"hidden",animate:"visible",children:y.jsxs(DP,{children:[y.jsx(V.span,{initial:{opacity:0,x:-100},animate:{opacity:1,x:0},transition:{duration:.8,ease:"easeOut"},children:"NOSSOS"})," ",y.jsx(VP,{children:y.jsx(V.span,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{duration:.8,delay:.2,ease:"easeOut"},children:"RECURSOS"})})]})})}),y.jsx(zP,{children:y.jsx(ph,{children:y.jsx(NP,{variants:v,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},style:{y:a},children:m.map((g,h)=>{const p=g.icon;return y.jsx(FP,{variants:x,onMouseMove:S=>l(S,g.id),onMouseEnter:()=>n(g.id),onMouseLeave:()=>{n(null),r.set(.5),i.set(.5)},whileTap:{scale:.95},style:{rotateX:t===g.id?u:0,rotateY:t===g.id?c:0,transformStyle:"preserve-3d"},transition:{type:"spring",stiffness:400,damping:30},children:y.jsxs(Ra,{gradient:g.gradient,style:{transform:t===g.id?"translateZ(50px)":"translateZ(0px)",boxShadow:t===g.id?`${d.get()}px ${f.get()}px 40px rgba(227, 6, 19, 0.5)`:"0 20px 40px rgba(0, 0, 0, 0.3)",transition:"all 0.3s ease"},children:[y.jsx(IP,{}),y.jsx(OP,{style:{background:`radial-gradient(
                          600px circle at ${r.get()*100}% ${i.get()*100}%,
                          rgba(255, 255, 255, 0.15),
                          transparent 40%
                        )`,opacity:t===g.id?1:0}}),y.jsxs($P,{children:[y.jsxs(_P,{children:[y.jsx(V.div,{animate:{rotate:[0,10,-10,0],scale:[1,1.1,1]},transition:{duration:4,repeat:1/0,delay:h*.5},children:y.jsx(p,{})}),y.jsx(UP,{})]}),y.jsx(HP,{children:g.title}),y.jsx(WP,{children:g.description}),g.additionalText&&y.jsx(YP,{children:g.additionalText}),y.jsx(GP,{children:y.jsxs(V.div,{className:"card-number",initial:{opacity:0},whileInView:{opacity:1},transition:{delay:.5},children:["0",g.id]})})]}),y.jsx(KP,{}),y.jsx(QP,{className:`particles-${g.id}`})]})},g.id)})})})})]})},ph=b.div`
  min-height: 100vh;
  background: var(--background);
  color: var(--white);
  padding-top: 8rem;
  position: relative;
  overflow: hidden;
`,TP=b(V.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`,RP=Gt`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
`,LP=b.div`
  position: absolute;
  width: 120%;
  height: 120%;
  background-image: 
    linear-gradient(rgba(227, 6, 19, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(227, 6, 19, 0.05) 1px, transparent 1px);
  background-size: 100px 100px;
  animation: ${RP} 20s linear infinite;
`,AP=Gt`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
`,jP=b.div`
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
    animation: ${AP} 15s ease-in-out infinite;
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
`,MP=b.section`
  text-align: center;
  padding: 6rem 2rem 8rem;
  position: relative;
  z-index: 1;
`,DP=b.h1`
  font-size: clamp(4rem, 8vw, 8rem);
  font-weight: 900;
  line-height: 1;
  margin: 0;
  color: var(--white);
  letter-spacing: -0.02em;
  text-transform: uppercase;
`,VP=b.span`
  background: linear-gradient(135deg, #E30613 0%, #ff4757 50%, #ff6348 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
`,zP=b.section`
  padding: 0 2rem 8rem;
  position: relative;
  z-index: 1;
`,NP=b(V.div)`
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
`,FP=b(V.div)`
  perspective: 1000px;
  transform-style: preserve-3d;
  will-change: transform;
`,Ra=b.div`
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
`,IP=b.div`
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
  
  ${Ra}:hover & {
    opacity: 1;
  }
`,OP=b.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 1;
`,$P=b.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
`,_P=b.div`
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
`,BP=Gt`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`,UP=b.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: inherit;
  animation: ${BP} 3s ease-out infinite;
`,HP=b.h2`
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--white);
  margin-bottom: 2rem;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,WP=b.p`
  font-size: 1.6rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  flex-grow: 1;
`,YP=b.p`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 2rem;
  text-align: center;
  font-style: italic;
`,GP=b.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  .card-number {
    font-size: 4rem;
    font-weight: 900;
    color: rgba(255, 255, 255, 0.2);
    line-height: 1;
  }
`,KP=b.div`
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
  
  ${Ra}:hover & {
    opacity: 1;
  }
`,XP=Gt`
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
`,QP=b.div`
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
    animation: ${XP} 6s ease-out infinite;
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
  
  ${Ra}:hover & {
    &::before,
    &::after {
      animation-play-state: running;
    }
  }
`,ZP=()=>y.jsx(qP,{children:y.jsx(JP,{children:y.jsxs(V.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:[y.jsxs(e6,{children:["Baixe o ",y.jsx("span",{className:"highlight",children:"GYM BUDDY"})]}),y.jsx(t6,{children:"Tenha seu personal trainer no bolso. Disponível para iOS e Android."}),y.jsxs(n6,{children:[y.jsx(V.div,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.6,delay:.3},children:y.jsxs(hh,{href:"#",className:"google-play",whileHover:{scale:1.05,y:-2},whileTap:{scale:.98},children:[y.jsx(VC,{className:"icon"}),y.jsxs("div",{className:"text",children:[y.jsx("span",{className:"small",children:"ANDROID APP ON"}),y.jsx("span",{className:"large",children:"Google Play"})]})]})}),y.jsx(V.div,{initial:{opacity:0,x:30},animate:{opacity:1,x:0},transition:{duration:.6,delay:.4},children:y.jsxs(hh,{href:"#",className:"app-store",whileHover:{scale:1.05,y:-2},whileTap:{scale:.98},children:[y.jsx(DC,{className:"icon"}),y.jsxs("div",{className:"text",children:[y.jsx("span",{className:"small",children:"Download on the"}),y.jsx("span",{className:"large",children:"App Store"})]})]})})]})]})})}),qP=b.div`
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
`,JP=b.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2.4rem;
  text-align: center;
`,e6=b.h1`
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
`,t6=b.p`
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
`,n6=b.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`,hh=b(V.a)`
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
`,No={initial:{opacity:0,scale:.95,y:20,filter:"blur(10px)"},in:{opacity:1,scale:1,y:0,filter:"blur(0px)"},out:{opacity:0,scale:1.05,y:-20,filter:"blur(10px)"}},Fo={type:"tween",ease:[.25,.46,.45,.94],duration:.6},r6=()=>{const e=Xt();return y.jsx(Zi,{mode:"wait",children:y.jsxs(aw,{location:e,children:[y.jsx(fi,{path:"/",element:y.jsx(V.div,{initial:"initial",animate:"in",exit:"out",variants:No,transition:Fo,children:y.jsx(H3,{})})}),y.jsx(fi,{path:"/sobre",element:y.jsx(V.div,{initial:"initial",animate:"in",exit:"out",variants:No,transition:Fo,children:y.jsx(W3,{})})}),y.jsx(fi,{path:"/recursos",element:y.jsx(V.div,{initial:"initial",animate:"in",exit:"out",variants:No,transition:Fo,children:y.jsx(bP,{})})}),y.jsx(fi,{path:"/app",element:y.jsx(V.div,{initial:"initial",animate:"in",exit:"out",variants:No,transition:Fo,children:y.jsx(ZP,{})})})]},e.pathname)})};function i6(){return y.jsxs(jw,{children:[y.jsx(w3,{}),y.jsx(j3,{}),y.jsx(r6,{})]})}kl.createRoot(document.getElementById("root")).render(y.jsxs(he.StrictMode,{children:[y.jsx(p2,{}),y.jsx(i6,{})]}));

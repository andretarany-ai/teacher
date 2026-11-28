var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function O(e,t){return D(e.type,t,e.props)}function ee(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function te(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function ne(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function re(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,re(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+te(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),re(o,r,i,``,function(e){return e})):o!=null&&(ee(o)&&(o=O(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+te(a,u),c+=re(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+te(a,u++),c+=re(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return re(ne(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ie(e,t,n){if(e==null)return e;var r=[],i=0;return re(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ae(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var oe=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function se(e){var t=T.T,n={};n.types=t===null?null:t.types,T.T=n;try{var r=e(),i=T.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(w,oe)}catch(e){oe(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),T.T=t}}function ce(e){var t=T.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else se(ce.bind(null,e))}var le={map:ie,forEach:function(e,t,n){ie(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ie(e,function(){t++}),t},toArray:function(e){return ie(e,function(e){return e})||[]},only:function(e){if(!ee(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=le,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},e.addTransitionType=ce,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!E.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return D(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)E.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return D(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ee,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ae}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=se,e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},e.use=function(e){return T.H.use(e)},e.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},e.useCallback=function(e,t){return T.H.useCallback(e,t)},e.useContext=function(e){return T.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return T.H.useEffect(e,t)},e.useEffectEvent=function(e){return T.H.useEffectEvent(e)},e.useId=function(){return T.H.useId()},e.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.H.useMemo(e,t)},e.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},e.useRef=function(e){return T.H.useRef(e)},e.useState=function(e){return T.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.H.useTransition()},e.version=`19.3.1`})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&A(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&A(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var ee=new MessageChannel,k=ee.port2;ee.port1.onmessage=D,O=function(){k.postMessage(null)}}else O=function(){_(D,0)};function A(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,A(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`),s=Symbol.for(`react.recoverable`),c=Symbol.for(`react.optimistic_key`);function l(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:r===c?c:``+r,children:e,containerInfo:t,implementation:n}}var u=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.browser=function(e){return{$$typeof:s,_reason:e}},e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return l(e,t,null,n)},e.flushSync=function(e){var t=u.T,n=a.p;try{if(u.T=null,a.p=2,e)return e()}finally{u.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??a.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else a.d.m(e)}},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return u.H.useFormState(e,t,n)},e.useFormStatus=function(){return u.H.useHostTransitionStatus()},e.version=`19.3.1`})),o=e(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=i(),r=n(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,S=null;function C(e,t,n){return e===n||e===t&&(x=e,!0)}function w(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function T(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function E(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var D=Object.assign,O=Symbol.for(`react.element`),ee=Symbol.for(`react.transitional.element`),k=Symbol.for(`react.portal`),A=Symbol.for(`react.fragment`),te=Symbol.for(`react.strict_mode`),ne=Symbol.for(`react.profiler`),re=Symbol.for(`react.consumer`),ie=Symbol.for(`react.context`),ae=Symbol.for(`react.forward_ref`),oe=Symbol.for(`react.suspense`),se=Symbol.for(`react.suspense_list`),ce=Symbol.for(`react.memo`),le=Symbol.for(`react.lazy`),ue=Symbol.for(`react.activity`),de=Symbol.for(`react.legacy_hidden`),fe=Symbol.for(`react.memo_cache_sentinel`),pe=Symbol.for(`react.view_transition`),me=Symbol.for(`react.recoverable`),he=Symbol.iterator;function ge(e){return typeof e!=`object`||!e?null:(e=he&&e[he]||e[`@@iterator`],typeof e==`function`?e:null)}var _e=Symbol.for(`react.client.reference`);function ve(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===_e?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case A:return`Fragment`;case ne:return`Profiler`;case te:return`StrictMode`;case oe:return`Suspense`;case se:return`SuspenseList`;case ue:return`Activity`;case pe:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case k:return`Portal`;case ie:return e.displayName||`Context`;case re:return(e._context.displayName||`Context`)+`.Consumer`;case ae:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ce:return t=e.displayName||null,t===null?ve(e.type)||`Memo`:t;case le:t=e._payload,e=e._init;try{return ve(e(t))}catch{}}return null}var ye=Array.isArray,j=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,be={pending:!1,data:null,method:null,action:null},xe=[],Se=-1;function Ce(e){return{current:e}}function we(e){0>Se||(e.current=xe[Se],xe[Se]=null,Se--)}function N(e,t){Se++,xe[Se]=e.current,e.current=t}var Te=Ce(null),Ee=Ce(null),De=Ce(null),Oe=Ce(null);function ke(e,t){switch(N(De,t),N(Ee,e),N(Te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}we(Te),N(Te,e)}function Ae(){we(Te),we(Ee),we(De)}function je(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,N(Oe,e)),t=Te.current;var n=dp(t,e.type);t!==n&&(N(Ee,e),N(Te,n))}function Me(e){Ee.current===e&&(we(Te),we(Ee)),Oe.current===e&&(we(Oe),sh._currentValue=be)}var Ne,Pe;function Fe(e){if(Ne===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ne=t&&t[1]||``,Pe=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ne+e+Pe}var Ie=!1;function Le(e,t){if(!e||Ie)return``;Ie=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ie=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Fe(n):``}function Re(e,t){switch(e.tag){case 26:case 27:case 5:return Fe(e.type);case 16:return Fe(`Lazy`);case 13:return e.child!==t&&t!==null?Fe(`Suspense Fallback`):Fe(`Suspense`);case 19:return Fe(`SuspenseList`);case 0:case 15:return Le(e.type,!1);case 11:return Le(e.type.render,!1);case 1:return Le(e.type,!0);case 31:return Fe(`Activity`);case 30:return Fe(`ViewTransition`);default:return``}}function ze(e){try{var t=``,n=null;do t+=Re(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Be=Object.prototype.hasOwnProperty,Ve=t.unstable_scheduleCallback,He=t.unstable_cancelCallback,Ue=t.unstable_shouldYield,We=t.unstable_requestPaint,Ge=t.unstable_now,Ke=t.unstable_getCurrentPriorityLevel,qe=t.unstable_ImmediatePriority,Je=t.unstable_UserBlockingPriority,Ye=t.unstable_NormalPriority,Xe=t.unstable_LowPriority,Ze=t.unstable_IdlePriority,Qe=t.log,$e=t.unstable_setDisableYieldValue,et=null,tt=null;function nt(e){if(typeof Qe==`function`&&$e(e),tt&&typeof tt.setStrictMode==`function`)try{tt.setStrictMode(et,e)}catch{}}var rt=Math.clz32?Math.clz32:ot,it=Math.log,at=Math.LN2;function ot(e){return e>>>=0,e===0?32:31-(it(e)/at|0)|0}var st=256,ct=262144,lt=4194304;function ut(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function dt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=ut(n))):i=ut(o):i=ut(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=ut(n))):i=ut(o)):i=ut(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function ft(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function pt(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-rt(n),i=1<<r;t|=e[r],n&=~i}return t}function mt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ht(){var e=lt;return lt<<=1,!(lt&62914560)&&(lt=4194304),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _t(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function vt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-rt(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&yt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function yt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-rt(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function bt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function xt(e,t){var n=t&-t;return n=n&42?1:St(n),(n&(e.suspendedLanes|t))===0?n:0}function St(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ct(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function wt(){var e=M.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function Tt(e,t){var n=M.p;try{return M.p=e,t()}finally{M.p=n}}var Et=Math.random().toString(36).slice(2),Dt=`__reactFiber$`+Et,Ot=`__reactProps$`+Et,kt=`__reactContainer$`+Et,At=`__reactEvents$`+Et,jt=`__reactListeners$`+Et,Mt=`__reactHandles$`+Et,Nt=`__reactResources$`+Et,Pt=`__reactMarker$`+Et,Ft=`__reactLoad$`+Et;function It(e){delete e[Dt],delete e[Ot],delete e[jt],delete e[Mt]}function Lt(e){var t;if(t=e[Dt])return t;for(var n=e.parentNode;n;){if(t=n[kt]||n[Dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[Dt])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function Rt(e){if(e=e[Dt]||e[kt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function zt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function P(e){var t=e[Nt];return t||=e[Nt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Bt(e){e[Pt]=!0}function Vt(e){e[Ft]=void 0}var Ht=new Set,Ut={};function Wt(e,t){Gt(e,t),Gt(e+`Capture`,t)}function Gt(e,t){for(Ut[e]=t,e=0;e<t.length;e++)Ht.add(t[e])}var Kt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),qt={},Jt={};function Yt(e){return Be.call(Jt,e)?!0:Be.call(qt,e)?!1:Kt.test(e)?Jt[e]=!0:(qt[e]=!0,!1)}var F=!1;function I(){var e=F;return F=!1,e}function Xt(e,t,n){if(Yt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function Zt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function Qt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function $t(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function en(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function tn(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function nn(e){if(!e._valueTracker){var t=en(e)?`checked`:`value`;e._valueTracker=tn(e,t,``+e[t])}}function rn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=en(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var an=/[\n"\\]/g;function on(e){return e.replace(an,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function sn(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+$t(t)):e.value!==``+$t(t)&&(e.value=``+$t(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):ln(e,$t(n)):o===`number`&&e.value==t?ln(e,$t(e.value)):ln(e,$t(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+$t(s):e.removeAttribute(`name`)}function cn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){nn(e);return}n=n==null?``:``+$t(n),t=t==null?n:``+$t(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),nn(e)}function ln(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function un(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+$t(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function dn(e,t,n){t!=null&&(t=``+$t(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+$t(n)}function fn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(ye(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=$t(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),nn(e)}function pn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function hn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||mn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function gn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,F=!0);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&(hn(e,i,r),F=!0)}else for(var a in t)t.hasOwnProperty(a)&&hn(e,a,t[a])}function _n(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var vn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),yn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bn(e){return yn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function xn(){}var Sn=null;function Cn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wn=null,Tn=null;function En(e){var t=Rt(e);if(t&&(e=t.stateNode)){var n=e[Ot]||null;a:switch(e=t.stateNode,t.type){case`input`:if(sn(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+on(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[Ot]||null;if(!i)throw Error(s(90));sn(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&rn(r)}break a;case`textarea`:dn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}}}var Dn=!1;function On(e,t,n){if(Dn)return e(t,n);Dn=!0;try{return e(t)}finally{if(Dn=!1,(wn!==null||Tn!==null)&&(zd(),wn&&(t=wn,e=Tn,Tn=wn=null,En(t),e)))for(t=0;t<e.length;t++)En(e[t])}}function kn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Ot]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var An=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,jn=!1;if(An)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){jn=!0}}),window.addEventListener(`test`,Mn,Mn),window.removeEventListener(`test`,Mn,Mn)}catch{jn=!1}var Nn=null,Pn=null,Fn=null;function In(){if(Fn)return Fn;var e,t=Pn,n=t.length,r,i=`value`in Nn?Nn.value:Nn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Fn=i.slice(e,1<r?1-r:void 0)}function Ln(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Rn(){return!0}function zn(){return!1}function Bn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Rn:zn,this.isPropagationStopped=zn,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Rn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Rn)},persist:function(){},isPersistent:Rn}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hn=Bn(Vn),Un=D({},Vn,{view:0,detail:0}),Wn=Bn(Un),Gn,Kn,qn,Jn=D({},Un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ar,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==qn&&(qn&&e.type===`mousemove`?(Gn=e.screenX-qn.screenX,Kn=e.screenY-qn.screenY):Kn=Gn=0,qn=e),Gn)},movementY:function(e){return`movementY`in e?e.movementY:Kn}}),Yn=Bn(Jn),Xn=Bn(D({},Jn,{dataTransfer:0})),Zn=Bn(D({},Un,{relatedTarget:0})),Qn=Bn(D({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0})),$n=Bn(D({},Vn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),er=Bn(D({},Vn,{data:0})),tr={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},nr={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},rr={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function ir(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rr[e])?!!t[e]:!1}function ar(){return ir}var or=Bn(D({},Un,{key:function(e){if(e.key){var t=tr[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Ln(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?nr[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ar,charCode:function(e){return e.type===`keypress`?Ln(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Ln(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),sr=Bn(D({},Jn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),cr=Bn(D({},Vn,{submitter:0})),lr=Bn(D({},Un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ar})),ur=Bn(D({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0})),dr=Bn(D({},Jn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),fr=Bn(D({},Vn,{newState:0,oldState:0,source:0})),pr=[9,13,27,32],mr=An&&`CompositionEvent`in window,hr=null;An&&`documentMode`in document&&(hr=document.documentMode);var gr=An&&`TextEvent`in window&&!hr,_r=An&&(!mr||hr&&8<hr&&11>=hr),vr=` `,yr=!1;function br(e,t){switch(e){case`keyup`:return pr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function xr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Sr=!1;function Cr(e,t){switch(e){case`compositionend`:return xr(t);case`keypress`:return t.which===32?(yr=!0,vr):null;case`textInput`:return e=t.data,e===vr&&yr?null:e;default:return null}}function wr(e,t){if(Sr)return e===`compositionend`||!mr&&br(e,t)?(e=In(),Fn=Pn=Nn=null,Sr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return _r&&t.locale!==`ko`?null:t.data;default:return null}}var Tr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Tr[e.type]:t===`textarea`}function Dr(e,t,n,r){wn?Tn?Tn.push(r):Tn=[r]:wn=r,t=Jf(t,`onChange`),0<t.length&&(n=new Hn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Or=null,kr=null;function Ar(e){Vf(e,0)}function jr(e){if(rn(zt(e)))return e}function Mr(e,t){if(e===`change`)return t}var Nr=!1;if(An){var Pr;if(An){var Fr=`oninput`in document;if(!Fr){var Ir=document.createElement(`div`);Ir.setAttribute(`oninput`,`return;`),Fr=typeof Ir.oninput==`function`}Pr=Fr}else Pr=!1;Nr=Pr&&(!document.documentMode||9<document.documentMode)}function Lr(){Or&&(Or.detachEvent(`onpropertychange`,Rr),kr=Or=null)}function Rr(e){if(e.propertyName===`value`&&jr(kr)){var t=[];Dr(t,kr,e,Cn(e)),On(Ar,t)}}function zr(e,t,n){e===`focusin`?(Lr(),Or=t,kr=n,Or.attachEvent(`onpropertychange`,Rr)):e===`focusout`&&Lr()}function Br(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return jr(kr)}function Vr(e,t){if(e===`click`)return jr(t)}function Hr(e,t){if(e===`input`||e===`change`)return jr(t)}function Ur(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Wr=typeof Object.is==`function`?Object.is:Ur;function Gr(e,t){if(Wr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Be.call(t,i)||!Wr(e[i],t[i]))return!1}return!0}function Kr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function qr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jr(e,t){var n=qr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=qr(n)}}function Yr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kr(e.document)}return t}function Zr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Qr=An&&`documentMode`in document&&11>=document.documentMode,$r=null,ei=null,ti=null,ni=!1;function ri(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ni||$r==null||$r!==Kr(r)||(r=$r,`selectionStart`in r&&Zr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ti&&Gr(ti,r)||(ti=r,r=Jf(ei,`onSelect`),0<r.length&&(t=new Hn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=$r)))}function ii(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var ai={animationend:ii(`Animation`,`AnimationEnd`),animationiteration:ii(`Animation`,`AnimationIteration`),animationstart:ii(`Animation`,`AnimationStart`),transitionrun:ii(`Transition`,`TransitionRun`),transitionstart:ii(`Transition`,`TransitionStart`),transitioncancel:ii(`Transition`,`TransitionCancel`),transitionend:ii(`Transition`,`TransitionEnd`)},oi={},si={};An&&(si=document.createElement(`div`).style,`AnimationEvent`in window||(delete ai.animationend.animation,delete ai.animationiteration.animation,delete ai.animationstart.animation),`TransitionEvent`in window||delete ai.transitionend.transition);function ci(e){if(oi[e])return oi[e];if(!ai[e])return e;var t=ai[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in si)return oi[e]=t[n];return e}var li=ci(`animationend`),ui=ci(`animationiteration`),di=ci(`animationstart`),fi=ci(`transitionrun`),pi=ci(`transitionstart`),mi=ci(`transitioncancel`),hi=ci(`transitionend`),gi=new Map,_i=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);_i.push(`scrollEnd`);function vi(e,t){gi.set(e,t),Wt(t,[e])}var yi=0;function bi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=bd.identifierPrefix;var n=yi++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function xi(e){if(e==null||typeof e==`string`)return e;var t=null,n=Od;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function Si(e,t){return e=xi(e),t=xi(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var Ci=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},wi=[],Ti=0,Ei=0;function Di(){for(var e=Ti,t=Ei=Ti=0;t<e;){var n=wi[t];wi[t++]=null;var r=wi[t];wi[t++]=null;var i=wi[t];wi[t++]=null;var a=wi[t];if(wi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ji(n,i,a)}}function Oi(e,t,n,r){wi[Ti++]=e,wi[Ti++]=t,wi[Ti++]=n,wi[Ti++]=r,Ei|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ki(e,t,n,r){return Oi(e,t,n,r),Mi(e)}function Ai(e,t){return Oi(e,null,null,t),Mi(e)}function ji(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-rt(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Mi(e){if(50<kd)throw kd=0,Ad=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ni={};function Pi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fi(e,t,n,r){return new Pi(e,t,n,r)}function Ii(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Li(e,t){var n=e.alternate;return n===null?(n=Fi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ri(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function zi(e,t,n,r,i,a){var o=0;if(r=e,typeof r==`function`)Ii(r)&&(o=1);else if(typeof r==`string`)o=qm(e,n,Te.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case ue:return e=Fi(31,n,t,i),e.elementType=ue,e.lanes=a,e;case A:return Bi(n.children,i,a,t);case te:o=8,i|=24;break;case ne:return e=Fi(12,n,t,i|2),e.elementType=ne,e.lanes=a,e;case oe:return e=Fi(13,n,t,i),e.elementType=oe,e.lanes=a,e;case se:return e=Fi(19,n,t,i),e.elementType=se,e.lanes=a,e;case de:case pe:return e=i|32,e=Fi(30,n,t,e),e.elementType=pe,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case ie:o=10;break a;case re:o=9;break a;case ae:o=11;break a;case ce:o=14;break a;case le:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=Fi(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Bi(e,t,n,r){return e=Fi(7,e,r,t),e.lanes=n,e}function Vi(e,t,n){return e=Fi(6,e,null,t),e.lanes=n,e}function Hi(e){var t=Fi(18,null,null,0);return t.stateNode=e,t}function Ui(e,t,n){return t=Fi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Wi=new WeakMap;function Gi(e,t){if(typeof e==`object`&&e){var n=Wi.get(e);return n===void 0?(t={value:e,source:t,stack:ze(t)},Wi.set(e,t),t):n}return{value:e,source:t,stack:ze(t)}}var Ki=[],qi=0,Ji=null,Yi=0,Xi=[],Zi=0,Qi=null,$i=1,ea=``;function ta(e,t){Ki[qi++]=Yi,Ki[qi++]=Ji,Ji=e,Yi=t}function na(e,t,n){Xi[Zi++]=$i,Xi[Zi++]=ea,Xi[Zi++]=Qi,Qi=e;var r=$i;e=ea;var i=32-rt(r)-1;r&=~(1<<i),n+=1;var a=32-rt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,$i=1<<32-rt(t)+i|n<<i|r,ea=a+e}else $i=1<<a|n<<i|r,ea=e}function ra(e){e.return!==null&&(ta(e,1),na(e,1,0))}function ia(e){for(;e===Ji;)Ji=Ki[--qi],Ki[qi]=null,Yi=Ki[--qi],Ki[qi]=null;for(;e===Qi;)Qi=Xi[--Zi],Xi[Zi]=null,ea=Xi[--Zi],Xi[Zi]=null,$i=Xi[--Zi],Xi[Zi]=null}function aa(e,t){Xi[Zi++]=$i,Xi[Zi++]=ea,Xi[Zi++]=Qi,$i=t.id,ea=t.overflow,Qi=e}var oa=null,L=null,R=!1,sa=null,ca=!1,la=Error(s(519));function ua(e){throw ga(Gi(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),la}function da(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Dt]=e,t[Ot]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<zf.length;n++)Q(zf[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),cn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),fn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||ep(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=xn),t=!0):t=!1,t||ua(e,!0)}function fa(e){for(oa=e.return;oa;)switch(oa.tag){case 5:case 31:case 13:ca=!1;return;case 27:case 3:ca=!0;return;default:oa=oa.return}}function pa(e){if(e!==oa)return!1;if(!R)return fa(e),R=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&L&&ua(e),fa(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));L=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));L=dm(e)}else t===27?(t=L,Sp(e.type)?(e=um,um=null,L=e):L=t):L=oa?lm(e.stateNode.nextSibling):null;return!0}function ma(){L=oa=null,R=!1}function ha(){var e=sa;return e!==null&&(pd===null?pd=e:pd.push.apply(pd,e),sa=null),e}function ga(e){sa===null?sa=[e]:sa.push(e)}var _a=Ce(null),va=null,ya=null;function ba(e,t,n){N(_a,t._currentValue),t._currentValue=n}function xa(e){e._currentValue=_a.current,we(_a)}function Sa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Ca(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Sa(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Sa(o,n,e),o=null}else i.tag===13&&i.memoizedState!==null&&i.memoizedState.dehydrated===null?(i.lanes|=n,o=i.alternate,o!==null&&(o.lanes|=n),Sa(i.return,n,e),o=i.child,o=o===null?null:o.sibling):o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function wa(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;Wr(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===Oe.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}i=i.return}return e!==null&&Ca(t,e,n,r),t.flags|=262144,e!==null}function Ta(e){for(e=e.firstContext;e!==null;){if(!Wr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ea(e){va=e,ya=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Da(e){return ka(va,e)}function Oa(e,t){return va===null&&Ea(e),ka(e,t)}function ka(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ya===null){if(e===null)throw Error(s(308));ya=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ya=ya.next=t;return n}var Aa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ja=t.unstable_scheduleCallback,Ma=t.unstable_NormalPriority,Na={$$typeof:ie,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pa(){return{controller:new Aa,data:new Map,refCount:0}}function Fa(e){e.refCount--,e.refCount===0&&ja(Ma,function(){e.controller.abort()})}function Ia(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var La=null;function Ra(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var za=null,Ba=0,Va=0,Ha=null;function Ua(e,t){if(za===null){var n=za=[];Ba=0,Va=Pf(),Ha={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Ba++,t.then(Wa,Wa),t}function Wa(){if(--Ba===0&&(La=null,za!==null)){Ha!==null&&(Ha.status=`fulfilled`);var e=za;za=null,Va=0,Ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ga(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ka=j.S;j.S=function(e,t){if(gd=Ge(),typeof t==`object`&&t&&typeof t.then==`function`&&Ua(e,t),La!==null)for(var n=bf;n!==null;)Ia(n,La),n=n.next;if(n=e.types,n!==null){for(var r=bf;r!==null;)Ia(r,n),r=r.next;if(Va!==0){r=La,r===null&&(r=La=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Ka!==null&&Ka(e,t)};var qa=Ce(null);function Ja(){var e=qa.current;return e===null?G.pooledCache:e}function Ya(e,t){t===null?N(qa,qa.current):N(qa,t.pool)}function Xa(){var e=Ja();return e===null?null:{parent:Na._currentValue,pool:e}}var Za=Error(s(460)),Qa=Error(s(474)),$a=Error(s(542)),eo={then:function(){}};function to(e){return e=e.status,e===`fulfilled`||e===`rejected`}function no(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(xn,xn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,oo(e),e===void 0&&!(`reason`in t)?Error(s(600)):e;default:if(typeof t.status==`string`)t.then(xn,xn);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,oo(e),e}throw io=t,Za}}function ro(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(io=e,Za):e}}var io=null;function ao(){if(io===null)throw Error(s(459));var e=io;return io=null,e}function oo(e){if(e===Za||e===$a)throw Error(s(483))}var so=null,co=0;function lo(e){var t=co;return co+=1,so===null&&(so=[]),no(so,e,t)}function uo(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function fo(e,t){throw t.$$typeof===O?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function po(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=Li(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Vi(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===A?(e=d(e,t,n.props.children,r,n.key),uo(e,n),e):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===le&&ro(a)===t.type)?(t=i(t,n.props),uo(t,n),t.return=e,t):(t=zi(n.type,n.key,n.props,null,e.mode,r),uo(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ui(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=Bi(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Vi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case ee:return n=zi(t.type,t.key,t.props,null,e.mode,n),uo(n,t),n.return=e,n;case k:return t=Ui(t,e.mode,n),t.return=e,t;case le:return t=ro(t),f(e,t,n)}if(ye(t)||ge(t))return t=Bi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,lo(t),n);if(t.$$typeof===ie)return f(e,Oa(e,t),n);fo(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case ee:return n.key===i?l(e,t,n,r):null;case k:return n.key===i?u(e,t,n,r):null;case le:return n=ro(n),p(e,t,n,r)}if(ye(n)||ge(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,lo(n),r);if(n.$$typeof===ie)return p(e,t,Oa(e,n),r);fo(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case ee:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case k:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case le:return r=ro(r),m(e,t,n,r,i)}if(ye(r)||ge(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,lo(r),i);if(r.$$typeof===ie)return m(e,t,n,Oa(t,r),i);fo(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),R&&ta(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return R&&ta(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),R&&ta(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),R&&ta(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return R&&ta(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),R&&ta(i,g),u}function _(e,r,a,c){if(typeof a==`object`&&a&&a.type===A&&a.key===null&&a.props.ref===void 0&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case ee:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===A){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),uo(c,a),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===le&&ro(l)===r.type){n(e,r.sibling),c=i(r,a.props),uo(c,a),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}a.type===A?(c=Bi(a.props.children,e.mode,c,a.key),uo(c,a),c.return=e,e=c):(c=zi(a.type,a.key,a.props,null,e.mode,c),uo(c,a),c.return=e,e=c)}return o(e);case k:a:{for(l=a.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Ui(a,e.mode,c),c.return=e,e=c}return o(e);case le:return a=ro(a),_(e,r,a,c)}if(ye(a))return h(e,r,a,c);if(ge(a)){if(l=ge(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return _(e,r,lo(a),c);if(a.$$typeof===ie)return _(e,r,Oa(e,a),c);fo(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=Vi(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{co=0;var i=_(e,t,n,r);return so=null,i}catch(t){if(t===Za||t===$a)throw t;var a=Fi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var mo=po(!0),ho=po(!1),go=!1;function _o(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function yo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function bo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Mi(e),ji(e,null,n),t}return Oi(e,r,t,n),Mi(e)}function xo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bt(e,n)}}function So(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Co=!1;function wo(){if(Co){var e=Ha;if(e!==null)throw e}}function To(e,t,n,r){Co=!1;var i=e.updateQueue;go=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===Va&&(Co=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=D({},d,f);break a;case 2:go=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),sd|=o,e.lanes=o,e.memoizedState=d}}function Eo(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function Do(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Eo(n[e],t)}var Oo=Ce(null),ko=Ce(0);function Ao(e,t){e=od,N(ko,e),N(Oo,t),od=e|t.baseLanes}function jo(){N(ko,od),N(Oo,Oo.current)}function Mo(){od=ko.current,we(Oo),we(ko)}var No=Ce(null),Po=null;function Fo(e){var t=e.alternate;N(Bo,Bo.current&1),N(No,e),Po===null&&(t===null||Oo.current!==null||t.memoizedState!==null)&&(Po=e)}function Io(e){N(Bo,Bo.current),N(No,e),Po===null&&(Po=e)}function Lo(e){e.tag===22?(N(Bo,Bo.current),N(No,e),Po===null&&(Po=e)):Ro()}function Ro(){N(Bo,Bo.current),N(No,No.current)}function zo(e){we(No),Po===e&&(Po=null),we(Bo)}var Bo=Ce(0);function Vo(e,t){N(No,No.current),N(Bo,t)}function Ho(e){we(Bo),we(No),Po===e&&(Po=null)}function Uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wo=0,z=null,B=null,Go=null,Ko=!1,qo=!1,Jo=!1,Yo=0,Xo=0,Zo=null,Qo=0;function $o(){throw Error(s(321))}function es(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Wr(e[n],t[n]))return!1;return!0}function ts(e,t,n,r,i,a){return Wo=a,z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j.H=e===null||e.memoizedState===null?vc:yc,Jo=!1,a=n(r,i),Jo=!1,qo&&(a=rs(t,n,r,i)),ns(e),a}function ns(e){j.H=_c;var t=B!==null&&B.next!==null;if(Wo=0,Go=B=z=null,Ko=!1,Xo=0,Zo=null,t)throw Error(s(300));e===null||Ic||(e=e.dependencies,e!==null&&Ta(e)&&(Ic=!0))}function rs(e,t,n,r){z=e;var i=0;do{if(qo&&(Zo=null),Xo=0,qo=!1,25<=i)throw Error(s(301));if(i+=1,Go=B=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}j.H=bc,a=t(n,r)}while(qo);return a}function is(){var e=j.H,t=e.useState()[0];return t=typeof t.then==`function`?ds(t):t,e=e.useState()[0],(B===null?null:B.memoizedState)!==e&&(z.flags|=1024),t}function as(){var e=Yo!==0;return Yo=0,e}function os(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ss(e){if(Ko){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ko=!1}Wo=0,Go=B=z=null,qo=!1,Xo=Yo=0,Zo=null}function cs(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Go===null?z.memoizedState=Go=e:Go=Go.next=e,Go}function ls(){if(B===null){var e=z.alternate;e=e===null?null:e.memoizedState}else e=B.next;var t=Go===null?z.memoizedState:Go.next;if(t!==null)Go=t,B=e;else{if(e===null)throw z.alternate===null?Error(s(467)):Error(s(310));B=e,e={memoizedState:B.memoizedState,baseState:B.baseState,baseQueue:B.baseQueue,queue:B.queue,next:null},Go===null?z.memoizedState=Go=e:Go=Go.next=e}return Go}function us(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ds(e){var t=Xo;return Xo+=1,Zo===null&&(Zo=[]),e=no(Zo,e,t),t=z,(Go===null?t.memoizedState:Go.next)===null&&(t=t.alternate,j.H=t===null||t.memoizedState===null?vc:yc),e}function fs(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return ds(e);if(e.$$typeof===me)return;if(e.$$typeof===ie)return Da(e)}throw Error(s(438,String(e)))}function ps(e){var t=null,n=z.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=z.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=us(),z.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=fe;return t.index++,n}function ms(e,t){return typeof t==`function`?t(e):t}function hs(e){return gs(ls(),B,e)}function gs(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Wo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Va&&(d=!0);else if((Wo&p)===p){u=u.next,p===Va&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,z.lanes|=p,sd|=p;f=u.action,Jo&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,z.lanes|=f,sd|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!Wr(a,e.memoizedState)&&(Ic=!0,d&&(n=Ha,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function _s(e){var t=ls(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Wr(a,t.memoizedState)||(Ic=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function vs(e,t,n){var r=z,i=ls(),a=R;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!Wr((B||i).memoizedState,n);if(o&&(i.memoizedState=n,Ic=!0),i=i.queue,Us(xs.bind(null,r,i,e),[e]),e=i.getSnapshot!==t||o||Go!==null&&!!(Go.memoizedState.tag&1),Rs(e?9:8,{destroy:void 0},bs.bind(null,r,i,n,t),null),e){if(r.flags|=2048,G===null)throw Error(s(349));a||Wo&127||ys(r,t,n)}return n}function ys(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=z.updateQueue,t===null?(t=us(),z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bs(e,t,n,r){t.value=n,t.getSnapshot=r,Ss(t)&&Cs(e)}function xs(e,t,n){return n(function(){Ss(t)&&Cs(e)})}function Ss(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Wr(e,n)}catch{return!0}}function Cs(e){var t=Ai(e,2);t!==null&&Pd(t,e,2)}function ws(e){var t=cs();if(typeof e==`function`){var n=e;if(e=n(),Jo){nt(!0);try{n()}finally{nt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:e},t}function Ts(e,t,n,r){return e.baseState=n,gs(e,B,typeof r==`function`?r:ms)}function Es(e,t,n,r,i){if(mc(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};j.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,Ds(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Ds(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=j.T,o={};o.types=a===null?null:a.types,j.T=o;try{var s=n(i,r),c=j.S;c!==null&&c(o,s),Os(e,t,s)}catch(n){As(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),j.T=a}}else try{a=n(i,r),Os(e,t,a)}catch(n){As(e,t,n)}}function Os(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ks(e,t,n)},function(n){return As(e,t,n)}):ks(e,t,n)}function ks(e,t,n){t.status=`fulfilled`,t.value=n,js(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ds(e,n)))}function As(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,js(t),t=t.next;while(t!==r)}e.action=null}function js(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ms(e,t){return t}function Ns(e,t){if(R){var n=G.formState;if(n!==null){a:{var r=z;if(R){if(L){b:{for(var i=L,a=ca;i.nodeType!==8;)if(!a||(i=lm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){L=lm(i.nextSibling),r=i.data===`F!`;break a}}ua(r)}r=!1}r&&(t=n[0])}}return n=cs(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ms,lastRenderedState:t},n.queue=r,n=dc.bind(null,z,r),r.dispatch=n,r=ws(!1),a=pc.bind(null,z,!1,r.queue),r=cs(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Es.bind(null,z,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Ps(e){return Fs(ls(),B,e)}function Fs(e,t,n){if(t=gs(e,t,Ms)[0],e=hs(ms)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=ds(t)}catch(e){throw e===Za?$a:e}else r=t;t=ls();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(z.flags|=2048,Rs(9,{destroy:void 0},Is.bind(null,i,n),null)),[r,a,e]}function Is(e,t){e.action=t}function Ls(e){var t=ls(),n=B;if(n!==null)return Fs(t,n,e);ls(),t=t.memoizedState,n=ls();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Rs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=z.updateQueue,t===null&&(t=us(),z.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function zs(){return ls().memoizedState}function Bs(e,t,n,r){var i=cs();z.flags|=e,i.memoizedState=Rs(1|t,{destroy:void 0},n,r===void 0?null:r)}function Vs(e,t,n,r){var i=ls();r=r===void 0?null:r;var a=i.memoizedState.inst;B!==null&&r!==null&&es(r,B.memoizedState.deps)?i.memoizedState=Rs(t,a,n,r):(z.flags|=e,i.memoizedState=Rs(1|t,a,n,r))}function Hs(e,t){Bs(8390656,8,e,t)}function Us(e,t){Vs(2048,8,e,t)}function Ws(e){z.flags|=4;var t=z.updateQueue;if(t===null)t=us(),z.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Gs(e){var t=ls().memoizedState;return Ws({ref:t,nextImpl:e}),function(){if(W&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Ks(e,t){return Vs(4,2,e,t)}function qs(e,t){return Vs(4,4,e,t)}function Js(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ys(e,t,n){n=n==null?null:n.concat([e]),Vs(4,4,Js.bind(null,t,e),n)}function Xs(){}function Zs(e,t){var n=ls();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&es(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qs(e,t){var n=ls();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&es(t,r[1]))return r[0];if(r=e(),Jo){nt(!0);try{e()}finally{nt(!1)}}return n.memoizedState=[r,t],r}function $s(e,t,n){return n===void 0||Wo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=Md(),z.lanes|=e,sd|=e,n)}function ec(e,t,n,r){return Wr(n,t)?n:Oo.current===null?!(Wo&106)||Wo&1073741824&&!(q&261930)?(Ic=!0,e.memoizedState=n):(e=Md(),z.lanes|=e,sd|=e,t):(e=$s(e,n,r),Wr(e,t)||(Ic=!0),e)}function tc(e,t,n,r,i){var a=M.p;M.p=a!==0&&8>a?a:8;var o=j.T,s={};s.types=o===null?null:o.types,j.T=s,pc(e,!1,t,n);try{var c=i(),l=j.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?fc(e,t,Ga(c,r),jd(e)):fc(e,t,r,jd(e))}catch(n){fc(e,t,{then:function(){},status:`rejected`,reason:n},jd())}finally{M.p=a,o!==null&&s.types!==null&&(o.types=s.types),j.T=o}}function nc(){}function rc(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=ic(e).queue;tc(e,i,t,be,n===null?nc:function(){return ac(e),n(r)})}function ic(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:be,baseState:be,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:be},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ac(e){var t=ic(e);t.next===null&&(t=e.alternate.memoizedState),fc(e,t.next.queue,{},jd())}function oc(){return Da(sh)}function sc(){return ls().memoizedState}function cc(){return ls().memoizedState}function lc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jd();e=yo(n);var r=bo(t,e,n);r!==null&&(Pd(r,t,n),xo(r,t,n)),t={cache:Pa()},e.payload=t;return}t=t.return}}function uc(e,t,n){var r=jd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},mc(e)?hc(t,n):(n=ki(e,t,n,r),n!==null&&(Pd(n,e,r),gc(n,t,r)))}function dc(e,t,n){fc(e,t,n,jd())}function fc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(mc(e))hc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Wr(s,o))return Oi(e,t,i,0),G===null&&Di(),!1}catch{}if(n=ki(e,t,i,r),n!==null)return Pd(n,e,r),gc(n,t,r),!0}return!1}function pc(e,t,n,r){if(r={lane:2,revertLane:Pf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},mc(e)){if(t)throw Error(s(479))}else t=ki(e,n,r,2),t!==null&&Pd(t,e,2)}function mc(e){var t=e.alternate;return e===z||t!==null&&t===z}function hc(e,t){qo=Ko=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bt(e,n)}}var _c={readContext:Da,use:fs,useCallback:$o,useContext:$o,useEffect:$o,useImperativeHandle:$o,useLayoutEffect:$o,useInsertionEffect:$o,useMemo:$o,useReducer:$o,useRef:$o,useState:$o,useDebugValue:$o,useDeferredValue:$o,useTransition:$o,useSyncExternalStore:$o,useId:$o,useHostTransitionStatus:$o,useFormState:$o,useActionState:$o,useOptimistic:$o,useMemoCache:$o,useCacheRefresh:$o,useEffectEvent:$o},vc={readContext:Da,use:fs,useCallback:function(e,t){return cs().memoizedState=[e,t===void 0?null:t],e},useContext:Da,useEffect:Hs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Bs(4194308,4,Js.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Bs(4194308,4,e,t)},useInsertionEffect:function(e,t){Bs(4,2,e,t)},useMemo:function(e,t){var n=cs();t=t===void 0?null:t;var r=e();if(Jo){nt(!0);try{e()}finally{nt(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=cs();if(n!==void 0){var i=n(t);if(Jo){nt(!0);try{n(t)}finally{nt(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=uc.bind(null,z,e),[r.memoizedState,e]},useRef:function(e){var t=cs();return e={current:e},t.memoizedState=e},useState:function(e){e=ws(e);var t=e.queue,n=dc.bind(null,z,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Xs,useDeferredValue:function(e,t){return $s(cs(),e,t)},useTransition:function(){var e=ws(!1);return e=tc.bind(null,z,e.queue,!0,!1),cs().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=z,i=cs();if(R){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),G===null)throw Error(s(349));q&127||ys(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Hs(xs.bind(null,r,a,e),[e]),r.flags|=2048,Rs(9,{destroy:void 0},bs.bind(null,r,a,n,t),null),n},useId:function(){var e=cs(),t=G.identifierPrefix;if(R){var n=ea,r=$i;n=(r&~(1<<32-rt(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Yo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Qo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:oc,useFormState:Ns,useActionState:Ns,useOptimistic:function(e){var t=cs();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=pc.bind(null,z,!0,n),n.dispatch=t,[e,t]},useMemoCache:ps,useCacheRefresh:function(){return cs().memoizedState=lc.bind(null,z)},useEffectEvent:function(e){var t=cs(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},yc={readContext:Da,use:fs,useCallback:Zs,useContext:Da,useEffect:Us,useImperativeHandle:Ys,useInsertionEffect:Ks,useLayoutEffect:qs,useMemo:Qs,useReducer:hs,useRef:zs,useState:function(){return hs(ms)},useDebugValue:Xs,useDeferredValue:function(e,t){return ec(ls(),B.memoizedState,e,t)},useTransition:function(){var e=hs(ms)[0],t=ls().memoizedState;return[typeof e==`boolean`?e:ds(e),t]},useSyncExternalStore:vs,useId:sc,useHostTransitionStatus:oc,useFormState:Ps,useActionState:Ps,useOptimistic:function(e,t){return Ts(ls(),B,e,t)},useMemoCache:ps,useCacheRefresh:cc,useEffectEvent:Gs},bc={readContext:Da,use:fs,useCallback:Zs,useContext:Da,useEffect:Us,useImperativeHandle:Ys,useInsertionEffect:Ks,useLayoutEffect:qs,useMemo:Qs,useReducer:_s,useRef:zs,useState:function(){return _s(ms)},useDebugValue:Xs,useDeferredValue:function(e,t){var n=ls();return B===null?$s(n,e,t):ec(n,B.memoizedState,e,t)},useTransition:function(){var e=_s(ms)[0],t=ls().memoizedState;return[typeof e==`boolean`?e:ds(e),t]},useSyncExternalStore:vs,useId:sc,useHostTransitionStatus:oc,useFormState:Ls,useActionState:Ls,useOptimistic:function(e,t){var n=ls();return B===null?(n.baseState=e,[e,n.queue.dispatch]):Ts(n,B,e,t)},useMemoCache:ps,useCacheRefresh:cc,useEffectEvent:Gs};function xc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:D({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Sc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=jd(),i=yo(r);i.payload=t,n!=null&&(i.callback=n),t=bo(e,i,r),t!==null&&(Pd(t,e,r),xo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=jd(),i=yo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=bo(e,i,r),t!==null&&(Pd(t,e,r),xo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jd(),r=yo(n);r.tag=2,t!=null&&(r.callback=t),t=bo(e,r,n),t!==null&&(Pd(t,e,n),xo(t,e,n))}};function Cc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Gr(n,r)||!Gr(i,a):!0}function wc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Sc.enqueueReplaceState(t,t.state,null)}function Tc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=D({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ec(e){Ci(e)}function Dc(e){console.error(e)}function Oc(e){Ci(e)}function kc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ac(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function jc(e,t,n){return n=yo(n),n.tag=3,n.payload={element:null},n.callback=function(){kc(e,t)},n}function Mc(e){return e=yo(e),e.tag=3,e}function Nc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ac(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Ac(t,n,r),typeof i!=`function`&&(yd===null?yd=new Set([this]):yd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Pc(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&wa(t,n,i,!0),n=No.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Po===null?Kd():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===eo?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),mf(e,r,i)),!1;case 22:return n.flags|=65536,r===eo?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),mf(e,r,i)),!1}throw Error(s(435,n.tag))}return mf(e,r,i),Kd(),!1}if(R)return t=No.current,t===null?(r!==la&&(t=Error(s(423),{cause:r}),ga(Gi(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Gi(r,n),i=jc(e.stateNode,r,i),So(e,i),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==la&&(e=Error(s(422),{cause:r}),ga(Gi(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=Gi(a,n),fd===null?fd=[a]:fd.push(a),Y!==4&&(Y=2),t===null)return!0;r=Gi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=jc(n.stateNode,r,e),So(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(yd===null||!yd.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Mc(i),Nc(i,e,n,r),So(n,i),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Fc=Error(s(461)),Ic=!1;function Lc(e,t,n,r){t.child=e===null?ho(t,null,n,r):mo(t,e.child,n,r)}function Rc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Ea(t),r=ts(e,t,n,o,a,i),s=as(),e!==null&&!Ic?(os(e,t,i),fl(e,t,i)):(R&&s&&ra(t),t.flags|=1,Lc(e,t,r,i),t.child)}function zc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Ii(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Bc(e,t,a,r,i)):(e=zi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!pl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Gr:n,n(o,r)&&e.ref===t.ref)return fl(e,t,i)}return t.flags|=1,e=Li(a,r),e.ref=t.ref,e.return=t,t.child=e}function Bc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Gr(a,r)&&e.ref===t.ref){if(Ic=!1,t.pendingProps=r=a,pl(e,i))e.flags&131072&&(Ic=!0);else return t.lanes=e.lanes,fl(e,t,i)}}return Jc(e,t,n,r,i)}function Vc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Uc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ya(t,a===null?null:a.cachePool),a===null?jo():Ao(t,a),Lo(t);else return r=t.lanes=536870912,Uc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ya(t,null),jo(),Ro()):(Ya(t,a.cachePool),Ao(t,a),Ro(),t.memoizedState=null);return Lc(e,t,i,n),t.child}function Hc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uc(e,t,n,r,i){var a=Ja();return a=a===null?null:{parent:Na._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ya(t,null),jo(),Lo(t),e!==null&&wa(e,t,r,!0),t.childLanes=i,null}function Wc(e,t){return t=rl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Gc(e,t,n){return mo(t,e.child,null,n),e=Wc(t,t.pendingProps),e.flags|=2,zo(t),t.memoizedState=null,e}function Kc(e,t,n){var r=t.pendingProps,i=!!(t.flags&128);if(t.flags&=-129,e===null){if(R){if(r.mode===`hidden`)return e=Wc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Hc(null,e);if(Io(t),(e=L)?(e=am(e,ca),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Qi===null?null:{id:$i,overflow:ea},retryLane:536870912,hydrationErrors:null},n=Hi(e),n.return=t,t.child=n,oa=t,L=null)):e=null,e===null)throw ua(t);return t.lanes=536870912,null}return Wc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(Io(t),i){if(t.flags&256)t.flags&=-257,t=Gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558))}else if(Ic||wa(e,t,n,!1),i=(n&e.childLanes)!==0,Ic||i){if(Oo.current===null){if(r=G,r!==null&&(o=xt(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,Ai(e,o),Pd(r,e,o),Fc;Kd()}t=Gc(e,t,n)}else e=a.treeContext,L=lm(o.nextSibling),oa=t,R=!0,sa=null,ca=!1,e!==null&&aa(t,e),t=Wc(t,r),t.flags|=134221824;return t}return e=Li(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function qc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Jc(e,t,n,r,i){return Ea(t),n=ts(e,t,n,r,void 0,i),r=as(),e!==null&&!Ic?(os(e,t,i),fl(e,t,i)):(R&&r&&ra(t),t.flags|=1,Lc(e,t,n,i),t.child)}function Yc(e,t,n,r,i,a){return Ea(t),t.updateQueue=null,n=rs(t,r,n,i),ns(e),r=as(),e!==null&&!Ic?(os(e,t,a),fl(e,t,a)):(R&&r&&ra(t),t.flags|=1,Lc(e,t,n,a),t.child)}function Xc(e,t,n,r,i){if(Ea(t),t.stateNode===null){var a=Ni,o=n.contextType;typeof o==`object`&&o&&(a=Da(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Sc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},_o(t),o=n.contextType,a.context=typeof o==`object`&&o?Da(o):Ni,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(xc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Sc.enqueueReplaceState(a,a.state,null),To(t,r,a,i),wo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Tc(n,s);a.props=c;var l=a.context,u=n.contextType;o=Ni,typeof u==`object`&&u&&(o=Da(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&wc(t,a,r,o),go=!1;var f=t.memoizedState;a.state=f,To(t,r,a,i),wo(),l=t.memoizedState,s||f!==l||go?(typeof d==`function`&&(xc(t,n,d,r),l=t.memoizedState),(c=go||Cc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,vo(e,t),o=t.memoizedProps,u=Tc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Ni,typeof l==`object`&&l&&(c=Da(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&wc(t,a,r,c),go=!1,f=t.memoizedState,a.state=f,To(t,r,a,i),wo();var p=t.memoizedState;o!==d||f!==p||go||e!==null&&e.dependencies!==null&&Ta(e.dependencies)?(typeof s==`function`&&(xc(t,n,s,r),p=t.memoizedState),(u=go||Cc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Ta(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,qc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=mo(t,e.child,null,i),t.child=mo(t,null,n,i)):Lc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=fl(e,t,i),e}function Zc(e,t,n,r){return ma(),t.flags|=256,Lc(e,t,n,r),t.child}var Qc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $c(e){return{baseLanes:e,cachePool:Xa()}}function el(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ud),e}function tl(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Bo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(R){if(i?Fo(t):Ro(),(e=L)?(e=am(e,ca),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Qi===null?null:{id:$i,overflow:ea},retryLane:536870912,hydrationErrors:null},n=Hi(e),n.return=t,t.child=n,oa=t,L=null)):e=null,e===null)throw ua(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Ro(),i=t.mode,a=rl({mode:`hidden`,children:a},i),r=Bi(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=$c(n),r.childLanes=el(e,o,n),t.memoizedState=Qc,Hc(null,r)):(Fo(t),nl(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return al(e,t,a,o,r,c,s,n)}return i?(Ro(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Li(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Bi(i,a,n,null),i.flags|=2):i=Li(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Hc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=$c(n):(a=i.cachePool,a===null?a=Xa():(s=Na._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=el(e,o,n),t.memoizedState=Qc,Hc(e.child,r)):(Fo(t),n=e.child,e=n.sibling,n=Li(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function nl(e,t){return t=rl({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function rl(e,t){return e=Fi(22,e,null,t),e.lanes=0,e}function il(e,t,n){return mo(t,e.child,null,n),e=nl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function al(e,t,n,r,i,a,o,c){if(n)return t.flags&256?(Fo(t),t.flags&=-257,il(e,t,c)):t.memoizedState===null?(Ro(),a=i.fallback,o=t.mode,i=rl({mode:`visible`,children:i.children},o),a=Bi(a,o,c,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,mo(t,e.child,null,c),i=t.child,i.memoizedState=$c(c),i.childLanes=el(e,r,c),t.memoizedState=Qc,Hc(null,i)):(Ro(),t.child=e.child,t.flags|=128,null);if(Fo(t),sm(a)){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(i=Error(s(419)),i.stack=``,i.digest=r,ga({value:i,source:null,stack:null})),il(e,t,c)}if(Ic||wa(e,t,c,!1),r=(c&e.childLanes)!==0,Ic||r){if(Oo.current!==null)return il(e,t,c);if(r=G,r!==null&&(i=xt(r,c),i!==0&&i!==o.retryLane))throw o.retryLane=i,Ai(e,i),Pd(r,e,i),Fc;return om(a)||Kd(),il(e,t,c)}return om(a)?(t.flags|=192,t.child=e.child,null):(e=o.treeContext,L=lm(a.nextSibling),oa=t,R=!0,sa=null,ca=!1,e!==null&&aa(t,e),t=nl(t,i.children),t.flags|=134221824,t)}function ol(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Sa(e.return,t,n)}function sl(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Uo(n)===null&&(t=e),e=e.sibling}return t}function cl(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function ll(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function ul(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Bo.current;if(t.flags&128)return Vo(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Vo(t,o),i===`backwards`&&e!==null?(ll(e),Lc(e,t,r,n),ll(e)):Lc(e,t,r,n),r=R?Yi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ol(e,n,t);else if(e.tag===19)ol(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=sl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,ll(t)),cl(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Uo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}cl(t,!0,n,null,a,r);break;case`together`:cl(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=sl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),cl(t,!1,i,n,a,r)}return t.child}function dl(e,t,n){var r=t.pendingProps;return ba(t,t.type,r.value),Lc(e,t,r.children,n),t.child}function fl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sd|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(wa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Li(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Li(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Ta(e)))}function ml(e,t,n){switch(t.tag){case 3:ke(t,t.stateNode.containerInfo),ba(t,Na,e.memoizedState.cache),ma();break;case 27:case 5:je(t);break;case 4:ke(t,t.stateNode.containerInfo);break;case 10:ba(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Io(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Fo(t),t.flags|=128,null;r=wa(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?tl(e,t,n):(Fo(t),e=fl(e,t,n),e===null?null:e.sibling)}Fo(t);break;case 19:if(t.flags&128)return ul(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(wa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return ul(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Vo(t,Bo.current),r)break;return null;case 22:return t.lanes=0,Vc(e,t,n,t.pendingProps);case 24:ba(t,Na,e.memoizedState.cache)}return fl(e,t,n)}function hl(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Ic=!0;else{if(!pl(e,n)&&!(t.flags&128))return Ic=!1,ml(e,t,n);Ic=!!(e.flags&131072)}}else Ic=!1,R&&t.flags&1048576&&na(t,Yi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ro(t.elementType),t.type=e,typeof e==`function`)Ii(e)?(r=Tc(e,r),t.tag=1,t=Xc(null,t,e,r,n)):(t.tag=0,t=Jc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===ae){t.tag=11,t=Rc(null,t,e,r,n);break a}if(i===ce){t.tag=14,t=zc(null,t,e,r,n);break a}if(i===ie){t.tag=10,t.type=e,t=dl(null,t,n);break a}}throw t=ve(e)||e,Error(s(306,t,``))}}return t;case 0:return Jc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Tc(r,t.pendingProps),Xc(e,t,r,i,n);case 3:a:{if(ke(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,vo(e,t),To(t,r,null,n);var o=t.memoizedState;if(r=o.cache,ba(t,Na,r),r!==a.cache&&Ca(t,[Na],n,!0),wo(),r=o.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Zc(e,t,r,n);break a}if(r!==i){i=Gi(Error(s(424)),t),ga(i),t=Zc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(L=lm(e.firstChild),oa=t,R=!0,sa=null,ca=!0,n=ho(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(ma(),r===i){t=fl(e,t,n);break a}Lc(e,t,r,n)}t=t.child}return t;case 26:return qc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:R||(t.stateNode=fp(t.type,t.pendingProps,De.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return je(t),e===null&&R&&(r=t.stateNode=hm(t.type,t.pendingProps,De.current),oa=t,ca=!0,i=L,Sp(t.type)?(um=i,L=lm(r.firstChild)):L=i),Lc(e,t,t.pendingProps.children,n),qc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&R&&((i=r=L)&&(r=rm(r,t.type,t.pendingProps,ca),r===null?i=!1:(t.stateNode=r,oa=t,L=lm(r.firstChild),ca=!1,i=!0)),i||ua(t)),je(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,pp(i,a)?r=null:o!==null&&pp(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=ts(e,t,is,null,null,n),sh._currentValue=i),qc(e,t),Lc(e,t,r,n),t.child;case 6:return e===null&&R&&((e=n=L)&&(n=im(n,t.pendingProps,ca),n===null?e=!1:(t.stateNode=n,oa=t,L=null,e=!0)),e||ua(t)),null;case 13:return tl(e,t,n);case 4:return ke(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mo(t,null,r,n):Lc(e,t,r,n),t.child;case 11:return Rc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,qc(e,t),Lc(e,t,r,n),t.child;case 8:return Lc(e,t,t.pendingProps.children,n),t.child;case 12:return Lc(e,t,t.pendingProps.children,n),t.child;case 10:return dl(e,t,n);case 9:return i=t.type._context,r=t.pendingProps.children,Ea(t),i=Da(i),r=r(i),t.flags|=1,Lc(e,t,r,n),t.child;case 14:return zc(e,t,t.type,t.pendingProps,n);case 15:return Bc(e,t,t.type,t.pendingProps,n);case 19:return ul(e,t,n);case 31:return Kc(e,t,n);case 22:return Vc(e,t,n,t.pendingProps);case 24:return Ea(t),r=Da(Na),e===null?(i=Ja(),i===null&&(i=G,a=Pa(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},_o(t),ba(t,Na,i)):((e.lanes&n)!==0&&(vo(e,t),To(t,null,null,n),wo()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,ba(t,Na,r),r!==i.cache&&Ca(t,[Na],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ba(t,Na,r))),Lc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:R&&ra(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:qc(e,t),Lc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function gl(e){e.flags|=4}function _l(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Ud())e.flags|=8192;else throw io=eo,Qa}}else e.flags&=-16777217}function vl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Ud())e.flags|=8192;else throw io=eo,Qa}}function yl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:ht(),e.lanes|=t,dd|=t)}function bl(e,t){if(!R)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function V(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xl(e,t,n){var r=t.pendingProps;switch(ia(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(t),null;case 1:return V(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),xa(Na),Ae(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(pa(t)?gl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ha())),V(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(gl(t),a===null?(V(t),_l(t,i,null,r,n)):(V(t),vl(t,a))):a?a===e.memoizedState?(V(t),t.flags&=-16777217):(gl(t),V(t),vl(t,a)):(e=e.memoizedProps,e!==r&&gl(t),V(t),_l(t,i,e,r,n)),null;case 27:if(Me(t),n=De.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&gl(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return V(t),t.subtreeFlags&=-33554433,null}e=Te.current,pa(t)?da(t,e):(e=hm(i,r,n),t.stateNode=e,gl(t))}return V(t),t.subtreeFlags&=-33554433,null;case 5:if(Me(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&gl(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return V(t),t.subtreeFlags&=-33554433,null}if(a=Te.current,pa(t))da(t,a);else{var o=lp(De.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[Dt]=t,a[Ot]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(np(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&gl(t)}}return V(t),t.subtreeFlags&=-33554433,_l(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&gl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=De.current,pa(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=oa,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[Dt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||ep(e.nodeValue,n)),e||ua(t,!0)}else e=lp(e).createTextNode(r),e[Dt]=t,t.stateNode=e}return V(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=pa(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[Dt]=t}else ma(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),e=!1}else n=ha(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(zo(t),t):(zo(t),null);if(t.flags&128)throw Error(s(558))}return V(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=pa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[Dt]=t}else ma(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),i=!1}else i=ha(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(zo(t),t):(zo(t),null)}return zo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),yl(t,t.updateQueue),V(t),null);case 4:return Ae(),e===null&&Wf(t.stateNode.containerInfo),t.flags|=67108864,V(t),null;case 10:return xa(t.type),V(t),null;case 19:if(Ho(t),r=t.memoizedState,r===null)return V(t),null;if(i=!!(t.flags&128),a=r.rendering,a===null){if(i)bl(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Uo(e),a!==null){for(t.flags|=128,bl(r,!1),e=a.updateQueue,t.updateQueue=e,yl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ri(n,e),n=n.sibling;return Vo(t,Bo.current&1|2),R&&ta(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ge()>_d&&(t.flags|=128,i=!0,bl(r,!1),t.lanes=4194304)}}else{if(!i){if(e=Uo(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,yl(t,e),bl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!a.alternate&&!R)return V(t),null}else 2*Ge()-r.renderingStartTime>_d&&n!==536870912&&(t.flags|=128,i=!0,bl(r,!1),t.lanes=4194304)}r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ge(),e.sibling=null,a=Bo.current,a=i?a&1|2:a&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||R?Vo(t,a):(n=a,N(No,t),N(Bo,n),Po===null&&(Po=t)),R&&ta(t,r.treeForkCount),e}return V(t),null;case 22:case 23:return zo(t),Mo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(V(t),t.subtreeFlags&6&&(t.flags|=8192)):V(t),n=t.updateQueue,n!==null&&yl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&we(qa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xa(Na),V(t),null;case 25:return null;case 30:return t.flags|=33554432,V(t),null}throw Error(s(156,t.tag))}function Sl(e,t){switch(ia(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xa(Na),Ae(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Me(t),null;case 31:if(t.memoizedState!==null){if(zo(t),t.alternate===null)throw Error(s(340));ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(zo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ho(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Ae(),null;case 10:return xa(t.type),null;case 22:case 23:return zo(t),Mo(),e!==null&&we(qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return xa(Na),null;case 25:return null;default:return null}}function Cl(e,t){switch(ia(t),t.tag){case 3:xa(Na),Ae();break;case 26:case 27:case 5:Me(t);break;case 4:Ae();break;case 31:t.memoizedState!==null&&zo(t);break;case 13:zo(t);break;case 19:Ho(t);break;case 10:xa(t.type);break;case 22:case 23:zo(t),Mo(),e!==null&&we(qa);break;case 24:xa(Na)}}function wl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Tl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function El(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Do(t,n)}catch(t){Z(e,e.return,t)}}}function Dl(e,t,n){n.props=Tc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Ol(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=bi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);h(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function kl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Al(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function jl(e){for(var t=e.return;t!==null&&(Pl(t)&&em(e.stateNode,t.stateNode),!Nl(t));)t=t.return}function Ml(e){for(var t=e.return;t!==null&&(Pl(t)&&tm(e.stateNode,t.stateNode),!Nl(t));)t=t.return}function Nl(e){return e.tag===5||e.tag===3||e.tag===27}function Pl(e){return e&&e.tag===7&&e.stateNode!==null}function Fl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Il(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[Ot]=t}catch(t){Z(e,e.return,t)}}function Ll(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function Rl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Ll(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xn)),Al(e,r),F=!0;else if(i!==4&&(i===27&&(Al(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(zl(e,t,n,r),e=e.sibling;e!==null;)zl(e,t,n,r),e=e.sibling}function Bl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Al(e,r),F=!0;else if(i!==4&&(i===27&&(Al(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Bl(e,t,n,r),e=e.sibling;e!==null;)Bl(e,t,n,r),e=e.sibling}function Vl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[Dt]=e,t[Ot]=n}catch(t){Z(e,e.return,t)}}var Hl=!1,Ul=null;function Wl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Hl=!0)}var Gl=null;function Kl(){var e=Gl;return Gl=null,e}var ql=0;function Jl(e,t,n,r,i){return ql=0,Yl(e.child,t,n,r,i)}function Yl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);Hl=!0,Tp(o,ql===0?t:t+`_`+ql,n),ql++}else e.tag===22&&e.memoizedState!==null||e.tag===30&&i||Yl(e.child,t,n,r,i)&&(a=!0);e=e.sibling}return a}function Xl(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):e.tag===22&&e.memoizedState!==null||e.tag===30&&t||Xl(e.child,t),e=e.sibling}function Zl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Zl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(s(544));var n=t.name;t=Si(t.default,t.share),t!==`none`&&(Jl(e,n,t,null,!1)||Xl(e.child,!1))}e=e.sibling}}function Ql(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=bi(r,n),a=Si(r.default,n.paired?r.share:r.enter);a===`none`?Zl(e):Jl(e,i,a,null,!1)?(Zl(e),n.paired||t||Nd(e,r.onEnter)):Xl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Ql(e,t),e=e.sibling;else Zl(e)}function $l(e){if(Ul!==null&&Ul.size!==0){var t=Ul;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=Si(n.default,n.share);if(a!==`none`&&(Jl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Nd(e,n.onShare)):Xl(e.child,!1)),t.delete(r),t.size===0)break}}}$l(e)}e=e.sibling}}}function eu(e){if(e.tag===30){var t=e.memoizedProps,n=bi(t,e.stateNode),r=Ul===null?void 0:Ul.get(n),i=Si(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Jl(e,n,i,null,!1)?r===void 0?Nd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Ul.delete(n),Nd(e,t.onShare)):Xl(e.child,!1)),Ul!==null&&$l(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)eu(e),e=e.sibling;else Ul!==null&&$l(e)}function tu(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=bi(t,e.stateNode);t=Si(t.default,t.update),e.flags&=-5,t!==`none`&&Jl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&tu(e);e=e.sibling}}function nu(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Xl(e.child,!1))}nu(e)}e=e.sibling}}function ru(e){if(e.tag===30)e.stateNode.paired=null,Xl(e.child,!1),nu(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)ru(e),e=e.sibling;else nu(e)}function iu(e){for(e=e.child;e!==null;)e.tag===30?Xl(e.child,!1):e.subtreeFlags&33554432&&iu(e),e=e.sibling}function au(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&ql<a.length){var l=a[ql],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,ql===0?n:n+`_`+ql,i),s&&e.flags&4||(Gl===null&&(Gl=[]),Gl.push(c,ql===0?r:r+`_`+ql,t.memoizedProps)),ql++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:au(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function ou(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=bi(n,r),a=Si(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;ql=0,i=au(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Nd(e,n.onUpdate))}else e.subtreeFlags&33554432&&ou(e,t);e=e.sibling}}var su=!1,H=!1,cu=!1,lu=!1,uu=typeof WeakSet==`function`?WeakSet:Set,du=null,fu=!1,pu=!1,mu=!1,hu=!1;function gu(e,t,n){if(e=e.containerInfo,sp=gh,e=Xr(e),Zr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,du=t,t=n?9270:1024;du!==null;){if(e=du,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&eu(r[a]);if(e.alternate===null&&e.flags&2)n&&Wl(e),_u(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&eu(r),_u(n);continue}if(r!==null&&r.memoizedState!==null){n&&Wl(e),_u(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,du=r):(n&&tu(e),_u(n))}}Ul=null}function _u(e){for(;du!==null;){var t=du,n=e,r=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(i&1024&&r!==null){n=void 0,i=r.memoizedProps,r=r.memoizedState;var a=t.stateNode;try{var o=Tc(t.type,i);n=a.getSnapshotBeforeUpdate(o,r),a.__reactInternalSnapshotBeforeUpdate=n}catch(e){Z(t,t.return,e)}}break;case 3:if(i&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=bi(r.memoizedProps,r.stateNode),i=t.memoizedProps,i=Si(i.default,i.update),i!==`none`&&Jl(r,n,i,r.memoizedState=[],!0));break;default:if(i&1024)throw Error(s(163))}if(r=t.sibling,r!==null){r.return=t.return,du=r;break}du=t.return}}function vu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Lu(e,n),r&4&&wl(5,n);break;case 1:if(Lu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Tc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&El(n),r&512&&Ol(n,n.return);break;case 3:if(Lu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Do(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Vl(n);case 26:case 5:Lu(e,n),t===null&&r&4&&Fl(n),r&512&&Ol(n,n.return);break;case 12:Lu(e,n);break;case 31:Lu(e,n),r&4&&Eu(e,n);break;case 13:Lu(e,n),r&4&&Du(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_f.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||su,!r){var a=t!==null&&t.memoizedState!==null||H;t=su,i=H,su=r,(H=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),zu(e,n,r)):Lu(e,n),su=t,H=i}break;case 30:Lu(e,n),r&512&&Ol(n,n.return);break;case 7:r&512&&Ol(n,n.return);default:Lu(e,n)}}function yu(e,t){for(e=e.child;e!==null;)bu(e,t),e=e.sibling}function bu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){Z(e,e.return,t)}xu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,F=!0}catch(t){Z(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){Z(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&yu(e,t);break;default:yu(e,t)}}function xu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:bu(n,r);break a;case 22:n.memoizedState===null&&xu(n,r);break a;default:xu(n,r)}}e=e.sibling}}function Su(e){var t=e.alternate;t!==null&&(e.alternate=null,Su(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&It(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,Cu=!1;function wu(e,t,n){for(n=n.child;n!==null;)Tu(e,t,n),n=n.sibling}function Tu(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount==`function`)try{tt.onCommitFiberUnmount(et,n)}catch{}switch(n.tag){case 26:H||kl(n,t),wu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!H&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:H||kl(n,t),Ml(n);var r=U,i=Cu;Sp(n.type)&&(U=n.stateNode,Cu=!1),wu(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),U=r,Cu=i;break;case 5:H||kl(n,t),Ml(n);case 6:if(n.tag===6&&Ml(n),r=U,i=Cu,U=null,wu(e,t,n),U=r,Cu=i,U!==null){if(Cu)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode),F=!0}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode),F=!0}catch(e){Z(n,t,e)}}break;case 18:U!==null&&(Cu?(e=U,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(U,n.stateNode));break;case 4:r=U,i=Cu,U=n.stateNode.containerInfo,Cu=!0,wu(e,t,n),U=r,Cu=i;break;case 0:case 11:case 14:case 15:Tl(2,n,t),H||Tl(4,n,t),wu(e,t,n);break;case 1:H||(kl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Dl(n,t,r)),wu(e,t,n);break;case 21:wu(e,t,n);break;case 22:H=(r=H)||n.memoizedState!==null,wu(e,t,n),H=r;break;case 30:kl(n,t),wu(e,t,n);break;case 7:H||kl(n,t),wu(e,t,n);break;default:wu(e,t,n)}}function Eu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){Z(t,t.return,e)}}}function Du(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){Z(t,t.return,e)}}function Ou(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new uu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new uu),t;default:throw Error(s(435,e.tag))}}function ku(e,t){var n=Ou(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=vf.bind(null,e,t);t.then(r,r)}})}function Au(e,t,n){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var a=r[i],o=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){U=l.stateNode,Cu=!1;break a}break;case 5:U=l.stateNode,Cu=!1;break a;case 3:case 4:U=l.stateNode.containerInfo,Cu=!0;break a}l=l.return}if(U===null)throw Error(s(160));Tu(o,c,a),U=null,Cu=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Mu(t,e,n),t=t.sibling}var ju=null;function Mu(e,t,n){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(i&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var a=0;a<r.length;a++){var o=r[a];o.ref.impl=o.nextImpl}Au(t,e,n),Nu(e),i&4&&(Tl(3,e,e.return),wl(3,e),Tl(5,e,e.return));break;case 1:Au(t,e,n),Nu(e),i&512&&(H||r===null||kl(r,r.return)),i&64&&su&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=ju,Au(t,e,n),Nu(e),i&512&&(H||r===null||kl(r,r.return)),i&4){if(i=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(su)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,i=a.ownerDocument||a;b:switch(t){case`title`:r=i.getElementsByTagName(`title`)[0],(!r||r[Pt]||r[Dt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=i.createElement(t),i.head.insertBefore(r,i.querySelector(`head > title`))),np(r,t,n),r[Dt]=e,Bt(r),t=r;break a;case`link`:if(a=Gm(`link`,`href`,i).get(t+(n.href||``))){for(o=0;o<a.length;o++)if(r=a[o],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(o,1);break b}}r=i.createElement(t),np(r,t,n),i.head.appendChild(r);break;case`meta`:if(a=Gm(`meta`,`content`,i).get(t+(n.content||``))){for(o=0;o<a.length;o++)if(r=a[o],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){a.splice(o,1);break b}}r=i.createElement(t),np(r,t,n),i.head.appendChild(r);break;default:throw Error(s(468,t))}r[Dt]=e,Bt(r),t=r}e.stateNode=t}}else su||Km(a,e.type,e.stateNode)}else e.stateNode=Bm(a,n,e.memoizedProps)}else i===n?n===null&&e.stateNode!==null&&Il(e,e.memoizedProps,r.memoizedProps):(i===null?(t=r.stateNode,t===null||H||t.parentNode.removeChild(t)):i.count--,n===null?su||Km(a,e.type,e.stateNode):Bm(a,n,e.memoizedProps))}break;case 27:Au(t,e,n),Nu(e),i&512&&(H||r===null||kl(r,r.return)),r!==null&&i&4&&Il(e,e.memoizedProps,r.memoizedProps);break;case 5:if(a=cu,cu=!1,Au(t,e,n),cu=a,Nu(e),i&512&&(H||r===null||kl(r,r.return)),e.flags&32){t=e.stateNode;try{pn(t,``),F=!0}catch(t){Z(e,e.return,t)}}i&4&&e.stateNode!=null&&(t=e.memoizedProps,Il(e,t,r===null?t:r.memoizedProps)),i&1024&&(lu=!0);break;case 6:if(Au(t,e,n),Nu(e),i&4){if(e.stateNode===null)throw Error(s(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,F=!0}catch(t){Z(e,e.return,t)}}break;case 3:if(F=!1,Wm=null,a=ju,ju=bm(t.containerInfo),Au(t,e,n),ju=a,Nu(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){Z(e,e.return,t)}lu&&(lu=!1,Pu(e)),F=!1;break;case 4:i=cu,cu=su,r=I(),a=ju,ju=bm(e.stateNode.containerInfo),Au(t,e,n),Nu(e),ju=a,F&&pu&&(mu=!0),F=r,cu=i;break;case 12:Au(t,e,n),Nu(e);break;case 31:Au(t,e,n),Nu(e),i&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 13:Au(t,e,n),Nu(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(hd=Ge()),i&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 22:a=e.memoizedState!==null,o=r!==null&&r.memoizedState!==null;var c=su,l=H,u=cu;su=c||a,cu=u||a,H=l||o,Au(t,e,n),H=l,cu=u,su=c,Nu(e),i&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||r===null||o||su||H||(t=o||H,n=su,r=H,su=a||su,H=t,Ru(e,2),su=n,H=r),!a&&cu||yu(e,a)),i&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,ku(e,n))));break;case 19:Au(t,e,n),Nu(e),i&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 30:i&512&&(H||r===null||kl(r,r.return)),i=I(),a=pu,o=(n&335544064)===n,c=e.memoizedProps,pu=o&&Si(c.default,c.update)!==`none`,Au(t,e,n),Nu(e),o&&r!==null&&F&&(e.flags|=4),pu=a,F=i;break;case 21:break;case 7:i&512&&(H||r===null||kl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Au(t,e,n),Nu(e)}}function Nu(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Ll(r)){n=r;break}r=r.return}r=null;for(var i=e.return;i!==null;){if(Pl(i)){var a=i.stateNode;r===null?r=[a]:r.push(a)}if(Nl(i))break;i=i.return}var o=r;if(n==null)throw Error(s(160));switch(n.tag){case 27:var c=n.stateNode;Bl(e,Rl(e),c,o);break;case 5:var l=n.stateNode;n.flags&32&&(pn(l,``),n.flags&=-33),Bl(e,Rl(e),l,o);break;case 3:case 4:var u=n.stateNode.containerInfo;zl(e,Rl(e),u,o);break;default:throw Error(s(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Pu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Fu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Iu(t,e),t=t.sibling;else ou(t,!1)}function Iu(e,t){var n=e.alternate;if(n===null)Ql(e,!1);else switch(e.tag){case 3:if(hu=fu=!1,Kl(),Fu(t,e),!fu&&!mu){if(e=Gl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),hu=!0}Gl=null;break;case 5:Fu(t,e);break;case 4:r=fu,fu=!1,Fu(t,e),fu&&(mu=!0),fu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Fu(t,e):Ql(e,!1));break;case 30:r=fu,i=Kl(),fu=!1,Fu(t,e),fu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=bi(a,o),o=bi(n.memoizedProps,o);var s=Si(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,ql=0,t=au(e,n,t,o,s,a,!0),ql!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Nd(e,e.memoizedProps.onUpdate),Gl=i):i!==null&&(i.push.apply(i,Gl),Gl=i),fu=e.flags&32?!0:r;break;default:Fu(t,e)}}function Lu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)vu(e,t.alternate,t),t=t.sibling}function Ru(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:Tl(4,n,n.return),Ru(n,r);break;case 1:kl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&Dl(n,n.return,i),Ru(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:kl(n,n.return),n.tag!==5&&n.tag!==27||Ml(n),Ru(n,r);break;case 6:Ml(n);break;case 26:kl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||H||i.parentNode.removeChild(i),Ru(n,r);break;case 22:n.memoizedState===null&&Ru(n,r);break;case 30:kl(n,n.return),Ru(n,r);break;case 7:kl(n,n.return);default:Ru(n,r)}e=e.sibling}}function zu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:zu(i,a,n),wl(4,a);break;case 1:if(zu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)Eo(l[i],c)}catch(e){Z(r,r.return,e)}}s&&o&64&&El(a),Ol(a,a.return);break;case 27:n&2&&Vl(a);case 5:a.tag!==5&&a.tag!==27||jl(a),zu(i,a,n),s&&r===null&&o&4&&Fl(a),Ol(a,a.return);break;case 6:jl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||su||Km(bm(c.ownerDocument),a.type,c),zu(i,a,n),s&&r===null&&o&4&&Fl(a),Ol(a,a.return);break;case 12:zu(i,a,n);break;case 31:zu(i,a,n),s&&o&4&&Eu(i,a);break;case 13:zu(i,a,n),s&&o&4&&Du(i,a);break;case 22:a.memoizedState===null&&zu(i,a,n),Ol(a,a.return);break;case 30:zu(i,a,n),Ol(a,a.return);break;case 7:Ol(a,a.return);default:zu(i,a,n)}t=t.sibling}}function Bu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Fa(n))}function Vu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fa(e))}function Hu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Uu(e,t,n,r),t=t.sibling;else i&&iu(t)}function Uu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&ru(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Hu(e,t,n,r),a&2048&&wl(9,t);break;case 1:Hu(e,t,n,r);break;case 3:Hu(e,t,n,r),i&&hu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Fa(a)));break;case 12:if(a&2048){Hu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Hu(e,t,n,r);break;case 31:Hu(e,t,n,r);break;case 13:Hu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&ru(t),o._visibility&2?Hu(e,t,n,r):(o._visibility|=2,Wu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&ru(s),o._visibility&2?Hu(e,t,n,r):Gu(e,t)),a&2048&&Bu(s,t);break;case 24:Hu(e,t,n,r),a&2048&&Vu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Xl(a.child,!0),Xl(t.child,!0))),Hu(e,t,n,r);break;default:Hu(e,t,n,r)}}function Wu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Wu(a,o,s,c,i),wl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Wu(a,o,s,c,i)):u._visibility&2?Wu(a,o,s,c,i):Gu(a,o),i&&l&2048&&Bu(o.alternate,o);break;case 24:Wu(a,o,s,c,i),i&&l&2048&&Vu(o.alternate,o);break;default:Wu(a,o,s,c,i)}t=t.sibling}}function Gu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Gu(n,r),i&2048&&Bu(r.alternate,r);break;case 24:Gu(n,r),i&2048&&Vu(r.alternate,r);break;default:Gu(n,r)}t=t.sibling}}var Ku=8192;function qu(e,t,n){if(e.subtreeFlags&Ku)for(e=e.child;e!==null;)Ju(e,t,n),e=e.sibling}function Ju(e,t,n){switch(e.tag){case 26:qu(e,t,n),e.flags&Ku&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,ju,e.memoizedState,e.memoizedProps));break;case 5:qu(e,t,n),e.flags&Ku&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=ju;ju=bm(e.stateNode.containerInfo),qu(e,t,n),ju=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ku,Ku=16777216,qu(e,t,n),Ku=r):qu(e,t,n));break;case 30:if((e.flags&Ku)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Ul===null&&(Ul=new Map),Ul.set(r,i)}qu(e,t,n);break;default:qu(e,t,n)}}function Yu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Xu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];du=r,$u(r,e)}Yu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zu(e),e=e.sibling}function Zu(e){switch(e.tag){case 0:case 11:case 15:Xu(e),e.flags&2048&&Tl(9,e,e.return);break;case 3:Xu(e);break;case 12:Xu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Qu(e)):Xu(e);break;default:Xu(e)}}function Qu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];du=r,$u(r,e)}Yu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Tl(8,t,t.return),Qu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Qu(t));break;default:Qu(t)}e=e.sibling}}function $u(e,t){for(;du!==null;){var n=du;switch(n.tag){case 0:case 11:case 15:Tl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Fa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,du=r;else a:for(n=e;du!==null;){r=du;var i=r.sibling,a=r.return;if(Su(r),r===n){du=null;break a}if(i!==null){i.return=a,du=i;break a}du=a}}}var ed={getCacheForType:function(e){var t=Da(Na),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Da(Na).controller.signal}},td=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,nd=null,rd=!1,id=!1,ad=!1,od=0,Y=0,sd=0,cd=0,ld=0,ud=0,dd=0,fd=null,pd=null,md=!1,hd=0,gd=0,_d=1/0,vd=null,yd=null,X=0,bd=null,xd=null,Sd=0,Cd=0,wd=null,Td=null,Ed=null,Dd=null,Od=null,kd=0,Ad=null;function jd(){return W&2&&q!==0?q&-q:j.T===null?wt():Pf()}function Md(){if(ud===0){if(!(q&536870912)||R){var e=ct;ct<<=1,!(ct&3932160)&&(ct=262144),ud=e}else ud=536870912}return e=No.current,e!==null&&(e.flags|=32),ud}function Nd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(bi(e.memoizedProps,n))),Dd===null&&(Dd=[]),Dd.push(t.bind(null,r))}}function Pd(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Vd(e,0),Rd(e,q,ud,!1)),_t(e,n),W&2&&e===G||(e===G&&(!(W&2)&&(cd|=n),Y===4&&Rd(e,q,ud,!1)),Ef(e))}function Fd(e,t,n){if(W&6)throw Error(s(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||ft(e,t),i=r?Yd(e,t):qd(e,t,!0),a=r;do{if(i===0){id&&!r&&Rd(e,t,0,!1);break}if(n=e.current.alternate,a&&!Ld(n))i=qd(e,t,!1),a=!1;else{if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=fd;var l=c.current.memoizedState.isDehydrated;if(l&&(Vd(c,o).flags|=256),o=qd(c,o,!1),o!==2&&o!==6){if(ad&&!l){c.errorRecoveryDisabledLanes|=a,cd|=a,i=4;break a}a=pd,pd=i,a!==null&&(pd===null?pd=a:pd.push.apply(pd,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Vd(e,0),Rd(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Rd(r,t,ud,!rd);break a;case 2:pd=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=hd+300-Ge(),10<i)){if(Rd(r,t,ud,!rd),dt(r,0,!0)!==0)break a;Sd=t,r.timeoutHandle=gp(Id.bind(null,r,n,pd,vd,md,t,ud,cd,dd,rd,a,`Throttled`,-0,0),i);break a}Id(r,n,pd,vd,md,t,ud,cd,dd,rd,a,null,-0,0)}break}}while(1);Ef(e)}function Id(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:xn},Ul=null,Ju(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?hd-Ge():(a&4194048)===a?gd-Ge():0,m=eh(d,m),m!==null)?(Sd=a,e.cancelPendingCommit=m(nf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Rd(e,a,o,!l)):nf(e,t,a,n,r,i,o,s,c,l,u,d)}function Ld(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Wr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rd(e,t,n,r){t=pt(e,t),t&=~ld,t&=~cd,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-rt(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&yt(e,n,t)}function zd(){return W&6?!0:(Df(0,!1),!1)}function Bd(){if(K!==null){if(J===0)var e=K.return;else e=K,ya=va=null,ss(e),so=null,co=0,e=K;for(;e!==null;)Cl(e.alternate,e),e=e.return;K=null}}function Vd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Sd=0,Bd(),G=e,K=n=Li(e.current,null),q=t,J=0,nd=null,rd=!1,id=ft(e,t),ad=!1,dd=ud=ld=cd=sd=Y=0,pd=fd=null,md=!1,od=pt(e,t),Di(),n}function Hd(e,t){z=null,j.H=_c,t===Za||t===$a?(t=ao(),J=3):t===Qa?(t=ao(),J=4):J=t===Fc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,nd=t,K===null&&(Y=1,kc(e,Gi(t,e.current)))}function Ud(){var e=No.current;return e===null?!0:(q&4194048)===q?Po===null:(q&62914560)===q||q&536870912?e===Po:!1}function Wd(){var e=j.H;return j.H=_c,e===null?_c:e}function Gd(){var e=j.A;return j.A=ed,e}function Kd(){Y=4,rd||(q&4194048)!==q&&No.current!==null||(id=!0),!(sd&134217727)&&!(cd&134217727)||G===null||Rd(G,q,ud,!1)}function qd(e,t,n){var r=W;W|=2;var i=Wd(),a=Gd();(G!==e||q!==t)&&(vd=null,Vd(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=nd;switch(J){case 8:Bd(),o=6;break a;case 3:case 2:case 9:case 6:No.current===null&&(t=!0);var l=J;if(J=0,nd=null,$d(e,s,c,l),n&&id){o=0;break a}break;default:l=J,J=0,nd=null,$d(e,s,c,l)}}Jd(),o=Y;break}catch(t){Hd(e,t)}while(1);return t&&e.shellSuspendCounter++,ya=va=null,W=r,j.H=i,j.A=a,K===null&&(G=null,q=0,Di()),o}function Jd(){for(;K!==null;)Zd(K)}function Yd(e,t){var n=W;W|=2;var r=Wd(),i=Gd();G!==e||q!==t?(vd=null,_d=Ge()+500,Vd(e,t)):id=ft(e,t);a:do try{if(J!==0&&K!==null){t=K;var a=nd;b:switch(J){case 1:J=0,nd=null,$d(e,t,a,1);break;case 2:case 9:if(to(a)){J=0,nd=null,Qd(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),Ef(e)},a.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:to(a)?(J=0,nd=null,Qd(t)):(J=0,nd=null,$d(e,t,a,7));break;case 5:var o=null;switch(K.tag){case 26:o=K.memoizedState;case 5:case 27:var c=K;if(o?Ym(o):c.stateNode.complete){J=0,nd=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,ef(u))}break b}}J=0,nd=null,$d(e,t,a,5);break;case 6:J=0,nd=null,$d(e,t,a,6);break;case 8:Bd(),Y=6;break a;default:throw Error(s(462))}}Xd();break}catch(t){Hd(e,t)}while(1);return ya=va=null,j.H=r,j.A=i,W=n,K===null?(G=null,q=0,Di(),Y):0}function Xd(){for(;K!==null&&!Ue();)Zd(K)}function Zd(e){var t=hl(e.alternate,e,od);e.memoizedProps=e.pendingProps,t===null?ef(e):K=t}function Qd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Yc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=Yc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:ss(t);var r=t;r===oa&&(R?(fa(r),r.tag===5&&r.stateNode!=null&&(L=r.stateNode)):(fa(r),R=!0));default:Cl(n,t),t=K=Ri(t,od),t=hl(n,t,od)}e.memoizedProps=e.pendingProps,t===null?ef(e):K=t}function $d(e,t,n,r){ya=va=null,ss(t),so=null,co=0;var i=t.return;try{if(Pc(e,i,t,n,q)){Y=1,kc(e,Gi(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,kc(e,Gi(n,e.current)),K=null;return}t.flags&32768?(R||r===1?e=!0:id||q&536870912?e=!1:(rd=e=!0,(r===2||r===9||r===3||r===6)&&(r=No.current,r!==null&&r.tag===13&&(r.flags|=16384))),tf(t,e)):ef(t)}function ef(e){var t=e;do{if(t.flags&32768){tf(t,rd);return}e=t.return;var n=xl(t.alternate,t,od);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function tf(e,t){do{var n=Sl(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function nf(e,t,n,r,i,a,o,c,l,u,d,f){e.cancelPendingCommit=null;do df();while(X!==0);if(W&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));e===G&&(K=G=null,q=0),xd=t,bd=e,Sd=n,wd=i,Td=r,rf(e,t,n,o,c,l,f)}}function rf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Cd=s,s|=Ei,vt(e,n,s,r,i,a),Dd=null,(n&335544064)===n?(Od=Ra(e),r=10262):(Od=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,yf(Ye,function(){return ff(),null})):(e.callbackNode=null,e.callbackPriority=0),Hl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=j.T,j.T=null,i=M.p,M.p=2,a=W,W|=4;try{gu(e,t,n)}finally{W=a,M.p=i,j.T=r}}X=1,Hl?Ed=Mp(o,e.containerInfo,Od,sf,cf,of,lf,ff,af,null,null):(sf(),cf(),lf())}function af(e){if(X!==0){var t=bd.onRecoverableError;t(e,{componentStack:null})}}function of(){X===3&&(X=0,Iu(xd,bd),X=4)}function sf(){if(X===1){X=0;var e=bd,t=xd,n=Sd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=j.T,j.T=null;var i=M.p;M.p=2;var a=W;W|=4;try{pu=mu=!1,Mu(t,e,n),n=cp;var o=Xr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Yr(s.ownerDocument.documentElement,s)){if(c!==null&&Zr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Jr(s,h),v=Jr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{W=a,M.p=i,j.T=r}}e.current=t,X=2}}function cf(){if(X===2){X=0;var e=bd,t=xd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=j.T,j.T=null;var r=M.p;M.p=2;var i=W;W|=4;try{vu(e,t.alternate,t)}finally{W=i,M.p=r,j.T=n}}X=3}}function lf(){if(X===4||X===3){X=0;var e=Ed;Ed=null,We();var t=bd,n=xd,r=Sd,i=Td,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?X=5:(X=0,xd=bd=null,uf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(yd=null),Ct(r),n=n.stateNode,tt&&typeof tt.onCommitFiberRoot==`function`)try{tt.onCommitFiberRoot(et,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=j.T,a=M.p,M.p=2,j.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{j.T=n,M.p=a}}if(i=Dd,o=Od,Od=null,i!==null&&(Dd=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);Sd&3&&df(),Ef(t),a=t.pendingLanes,r&261930&&a&42?t===Ad?kd++:(kd=0,Ad=t):(kd=0,Ad=null),Df(0,!1)}}function uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Fa(t)))}function df(){return Ed!==null&&(Ed.skipTransition(),Ed=null),sf(),cf(),lf(),ff()}function ff(){if(X!==5)return!1;var e=bd,t=Cd;Cd=0;var n=Ct(Sd),r=j.T,i=M.p;try{M.p=32>n?32:n,j.T=null,n=wd,wd=null;var a=bd,o=Sd;if(X=0,xd=bd=null,Sd=0,W&6)throw Error(s(331));var c=W;if(W|=4,Zu(a.current),Uu(a,a.current,o,n),W=c,Df(0,!1),tt&&typeof tt.onPostCommitFiberRoot==`function`)try{tt.onPostCommitFiberRoot(et,a)}catch{}return!0}finally{M.p=i,j.T=r,uf(e,t)}}function pf(e,t,n){t=Gi(n,t),t=jc(e.stateNode,t,2),e=bo(e,t,2),e!==null&&(_t(e,2),Ef(e))}function Z(e,t,n){if(e.tag===3)pf(e,e,n);else for(;t!==null;){if(t.tag===3){pf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(yd===null||!yd.has(r))){e=Gi(n,e),n=Mc(2),r=bo(t,n,2),r!==null&&(Nc(n,r,t,e),_t(r,2),Ef(r));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new td;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(ad=!0,i.add(n),e=hf.bind(null,e,t,n),t.then(e,e))}function hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Ge()-hd?W&2?ld|=n:Vd(e,0):ld|=n,dd===q&&(dd=0)),Ef(e)}function gf(e,t){t===0&&(t=ht()),e=Ai(e,t),e!==null&&(_t(e,t),Ef(e))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function vf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),gf(e,n)}function yf(e,t){return Ve(e,t)}var bf=null,xf=null,Sf=!1,Cf=!1,wf=!1,Tf=0;function Ef(e){e!==xf&&e.next===null&&(xf===null?bf=xf=e:xf=xf.next=e),Cf=!0,Sf||(Sf=!0,Nf())}function Df(e,t){if(!wf&&Cf){wf=!0;do for(var n=!1,r=bf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-rt(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Mf(r,a))}else a=q,a=dt(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||ft(r,a)||(n=!0,Mf(r,a))}r=r.next}while(n);wf=!1}}function Of(){kf()}function kf(){Cf=Sf=!1;var e=0;Tf!==0&&hp()&&(e=Tf);for(var t=Ge(),n=null,r=bf;r!==null;){var i=r.next,a=Af(r,t);a===0?(r.next=null,n===null?bf=i:n.next=i,i===null&&(xf=n)):(n=r,(e!==0||a&3)&&(Cf=!0)),r=i}X!==0&&X!==5||Df(e,!1),Tf!==0&&(Tf=0)}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-rt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=mt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=dt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&He(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||ft(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&He(r),Ct(n)){case 2:case 8:n=Je;break;case 32:n=Ye;break;case 268435456:n=Ze;break;default:n=Ye}return r=jf.bind(null,e),n=Ve(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&He(r),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(df()&&e.callbackNode!==n)return null;var r=q;return r=dt(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Fd(e,r,t),Af(e,Ge()),e.callbackNode!=null&&e.callbackNode===n?jf.bind(null,e):null)}function Mf(e,t){if(df())return null;Fd(e,t,!0)}function Nf(){bp(function(){W&6?Ve(qe,Of):kf()})}function Pf(){if(Tf===0){var e=Va;e===0&&(e=st,st<<=1,!(st&261888)&&(st=256)),Tf=e}return Tf}function Ff(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:bn(e)}function If(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Ff((i[Ot]||null).action),o=r.submitter;o&&(t=(t=o[Ot]||null)?Ff(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Hn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Tf!==0){var e=new FormData(i,o);rc(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),rc(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Lf=0;Lf<_i.length;Lf++){var Rf=_i[Lf];vi(Rf.toLowerCase(),`on`+(Rf[0].toUpperCase()+Rf.slice(1)))}vi(li,`onAnimationEnd`),vi(ui,`onAnimationIteration`),vi(di,`onAnimationStart`),vi(`dblclick`,`onDoubleClick`),vi(`focusin`,`onFocus`),vi(`focusout`,`onBlur`),vi(fi,`onTransitionRun`),vi(pi,`onTransitionStart`),vi(mi,`onTransitionCancel`),vi(hi,`onTransitionEnd`),Gt(`onMouseEnter`,[`mouseout`,`mouseover`]),Gt(`onMouseLeave`,[`mouseout`,`mouseover`]),Gt(`onPointerEnter`,[`pointerout`,`pointerover`]),Gt(`onPointerLeave`,[`pointerout`,`pointerover`]),Wt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Wt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Wt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Wt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Wt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Wt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var zf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Bf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));function Vf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Ci(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Ci(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[At];n===void 0&&(n=t[At]=new Set);var r=e+`__bubble`;n.has(r)||(Gf(t,e,2,!1),n.add(r))}function Hf(e,t,n){var r=0;t&&(r|=4),Gf(n,e,r,t)}var Uf=`_reactListening`+Math.random().toString(36).slice(2);function Wf(e){if(!e[Uf]){e[Uf]=!0,Ht.forEach(function(t){t!==`selectionchange`&&(Bf.has(t)||Hf(t,!1,e),Hf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uf]||(t[Uf]=!0,Hf(`selectionchange`,!1,t))}}function Gf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!jn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Kf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=Lt(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}On(function(){var r=a,i=Cn(n),o=[];a:{var s=gi.get(e);if(s!==void 0){var c=Hn,u=e;switch(e){case`keypress`:if(Ln(n)===0)break a;case`keydown`:case`keyup`:c=or;break;case`focusin`:u=`focus`,c=Zn;break;case`focusout`:u=`blur`,c=Zn;break;case`beforeblur`:case`afterblur`:c=Zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Yn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Xn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=lr;break;case li:case ui:case di:c=Qn;break;case hi:c=ur;break;case`scroll`:case`scrollend`:c=Wn;break;case`wheel`:c=dr;break;case`copy`:case`cut`:case`paste`:c=$n;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=sr;break;case`submit`:c=cr;break;case`toggle`:case`beforetoggle`:c=fr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=kn(m,p),g!=null&&d.push(qf(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,s=e===`mouseout`||e===`pointerout`,c&&n!==Sn&&(u=n.relatedTarget||n.fromElement)&&(Lt(u)||u[kt]))break a;(s||c)&&(u=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,s?(c=n.relatedTarget||n.toElement,s=r,c=c?Lt(c):null,c!==null&&(f=l(c),d=c.tag,c!==f||d!==5&&d!==27&&d!==6)&&(c=null)):(s=null,c=r),s!==c&&(d=Yn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=sr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=s==null?u:zt(s),h=c==null?u:zt(c),u=new d(g,m+`leave`,s,n,i),u.target=f,u.relatedTarget=h,g=null,Lt(i)===r&&(d=new d(p,m+`enter`,c,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=s&&c?E(s,c,Yf):null,s!==null&&Xf(o,u,s,d,!1),c!==null&&f!==null&&Xf(o,f,c,d,!0)))}a:{if(s=r?zt(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var _=Mr;else if(Er(s)){if(Nr)_=Hr;else{_=Br;var v=zr}}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&_n(r.elementType)&&(_=Mr):_=Vr;if(_&&=_(e,r)){Dr(o,_,n,i);break a}v&&v(e,s,r)}switch(v=r?zt(r):window,e){case`focusin`:(Er(v)||v.contentEditable===`true`)&&($r=v,ei=r,ti=null);break;case`focusout`:ti=ei=$r=null;break;case`mousedown`:ni=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:ni=!1,ri(o,n,i);break;case`selectionchange`:if(Qr)break;case`keydown`:case`keyup`:ri(o,n,i)}var y;if(mr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else Sr?br(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(_r&&n.locale!==`ko`&&(Sr||b!==`onCompositionStart`?b===`onCompositionEnd`&&Sr&&(y=In()):(Nn=i,Pn=`value`in Nn?Nn.value:Nn.textContent,Sr=!0)),v=Jf(r,b),0<v.length&&(b=new er(b,e,null,n,i),o.push({event:b,listeners:v}),y?b.data=y:(y=xr(n),y!==null&&(b.data=y)))),(y=gr?Cr(e,n):wr(e,n))&&(b=Jf(r,`onBeforeInput`),0<b.length&&(v=new er(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:v,listeners:b}),v.data=y)),If(o,e,r,n,i)}Vf(o,t)})}function qf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=kn(e,n),i!=null&&r.unshift(qf(e,i,a)),i=kn(e,t),i!=null&&r.push(qf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Yf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=kn(n,a),l!=null&&o.unshift(qf(n,l,c))):i||(l=kn(n,a),l!=null&&o.push(qf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zf=/\r\n?/g,Qf=/\u0000|\uFFFD/g;function $f(e){return(typeof e==`string`?e:``+e).replace(Zf,`
`).replace(Qf,``)}function ep(e,t){return t=$f(t),$f(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||pn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&pn(e,``+r);else return;break;case`className`:Zt(e,`class`,r);break;case`tabIndex`:Zt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Zt(e,n,r);break;case`style`:gn(e,r,a);return;case`data`:if(t!==`object`){Zt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=bn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=bn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=xn);return;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));a?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=bn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Xt(e,`popover`,r);break;case`xlinkActuate`:Qt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Qt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Qt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Qt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Qt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Qt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Qt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Qt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Qt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Xt(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=vn.get(n)||n,Xt(e,n,r);else return}F=!0}function tp(e,t,n,r,i,a){switch(n){case`style`:gn(e,r,a);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));a?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)pn(e,r);else if(typeof r==`number`||typeof r==`bigint`)pn(e,``+r);else return;break;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=xn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Ut.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),a=n.slice(2,i?n.length-7:void 0),t=e[Ot]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(a,t,i),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,r,i);break a}F=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):Xt(e,n,r)}return}F=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,a,o,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:$(e,t,r,d,n,null)}}cn(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&un(e,!!r,n,!0):un(e,!!r,t,!1);return;case`textarea`:for(o in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:$(e,t,o,c,n,null)}fn(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<zf.length;r++)Q(zf[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,u,r,n,null)}return;default:if(_n(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(F=!0),a=m;break;case`name`:m!==f&&(F=!0),i=m;break;case`checked`:m!==f&&(F=!0),u=m;break;case`defaultChecked`:m!==f&&(F=!0),d=m;break;case`value`:m!==f&&(F=!0),o=m;break;case`defaultValue`:m!==f&&(F=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}sn(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:a!==l&&(F=!0),p=a;break;case`defaultValue`:a!==l&&(F=!0),c=a;break;case`multiple`:a!==l&&(F=!0),o=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?un(e,!!n,n?[]:``,!1):un(e,!!n,t,!0)):un(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:i!==a&&(F=!0),p=i;break;case`defaultValue`:i!==a&&(F=!0),m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&$(e,t,o,i,r,a)}dn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(F=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(_n(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[Dt]=r,n[Ot]=t,np(n,e,t),Bt(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Pt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:D({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=Lt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=E(n,a,T),t===null?t=!1:(h(t,!0,C,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=E(r,a,T),t===null?t=!1:(h(t,!0,w,a,r),a=x,S=x=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(s(566));var t=[];h(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var i=t[r];i.tag===6?(i=b(i),Zp(i,n)):b(i).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),It(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Pt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&$(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===xn&&(e.onclick=null),It(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);It(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=M.d;M.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=zd();return e||t}function Cm(e){var t=Rt(e);t!==null&&t.tag===5&&t.type===`form`?ac(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=on(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),Bt(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+on(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+on(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+on(n.imageSizes)+`"]`)):i+=`[href="`+on(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=D({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[Ft]=!0,o.onload=o.onerror=function(){Vt(o)}),Bt(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+on(r)+`"][href="`+on(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=D({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),Bt(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=P(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=D({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);Bt(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=P(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=D({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Bt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=P(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=D({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Bt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var i=(i=De.current)?bm(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=P(i).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var a=P(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(Fm(e)))?a._p||(o.instance=a,o.state.loading=5):(a=vm.get(e),a||(a={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,a)),Lm(i,e,a,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=P(i).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Pm(e){return`href="`+on(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Ft]){r.loading=1;return}}else t=e.createElement(`link`),t[Ft]=!0,t.onload=t.onerror=Vt.bind(null,t),np(t,`link`,n),Bt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+on(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+on(n.href)+`"]`);if(r)return t.instance=r,Bt(r),r;var i=D({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Bt(r),np(r,`style`,i),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Pm(n.href);var a=e.querySelector(Fm(i));if(a)return t.state.loading|=4,t.instance=a,Bt(a),a;r=Im(n),(i=vm.get(i))&&Hm(r,i),a=(e.ownerDocument||e).createElement(`link`),Bt(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),t.state.loading|=4,Vm(a,n.precedence,e),t.instance=a;case`script`:return a=Rm(n.src),(i=e.querySelector(zm(a)))?(t.instance=i,Bt(i),i):(r=n,(i=vm.get(a))&&(r=D({},n),Um(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),Bt(i),np(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Pt]||a[Dt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Bt(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),Bt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:ie,Provider:null,Consumer:null,_currentValue:be,_currentValue2:be,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=gt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.hiddenUpdates=gt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Fi(3,null,null,t),e.current=a,a.stateNode=e,t=Pa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},_o(a),e}function uh(e){return e?(e=Ni,e):Ni}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=yo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=bo(e,r,t),n!==null&&(Pd(n,e,t),xo(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=Ai(e,67108864);t!==null&&Pd(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=jd();t=St(t);var n=Ai(e,t);n!==null&&Pd(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=j.T;j.T=null;var a=M.p;try{M.p=2,yh(e,t,n,r)}finally{M.p=a,j.T=i}}function vh(e,t,n,r){var i=j.T;j.T=null;var a=M.p;try{M.p=8,yh(e,t,n,r)}finally{M.p=a,j.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Kf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=Rt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=ut(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-rt(o);s.entanglements[1]|=c,o&=~c}Ef(a),!(W&6)&&(_d=Ge()+500,Df(0,!1))}}break;case 31:case 13:s=Ai(a,2),s!==null&&Pd(s,a,2),zd(),ph(a,2)}if(a=bh(r),a===null&&Kf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Kf(e,t,r,null,n)}}function bh(e){return e=Cn(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=Lt(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ke()){case qe:return 2;case Je:return 8;case Ye:case Xe:return 32;case Ze:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Rt(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=Lt(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,Tt(e.priority,function(){hh(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,Tt(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Sn=r,n.target.dispatchEvent(r),Sn=null}else return t=Rt(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=Rt(n);a!==null&&(e.splice(t,3),t-=3,rc(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Ot]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Ot]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;dh(n,jd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),zd(),t[kt]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=wt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=r.version;if(Kh!==`19.3.1`)throw Error(s(527,Kh,`19.3.1`));M.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:j,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{et=Jh.inject(qh),tt=Jh}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=Ec,a=Dc,o=Oc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,i,a,o,Uh),e[kt]=t.current,Wf(e),new Wh(t)}})),c=e(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=n(),u=c(),d=[{id:`a1-01`,emoji:`👋`,title:`Привет! Звуки немецкого`,de:`Hallo! Die Aussprache`,goal:`Здороваться и прощаться, услышать и произнести главные немецкие звуки`,grammar:{title:`Как читать по-немецки`,points:[`Немецкий читается почти так же, как пишется. Выучите 10 правил — и сможете прочитать любое слово.`,`**Все существительные пишутся с большой буквы**: der Tag, die Nacht.`,`Ударение обычно на **первый слог**: GUten MORgen.`],table:[[`Буквы`,`Звук`,`Пример`],[`ei`,`«ай»`,`drei, mein, nein`],[`ie`,`долгое «и»`,`Bier, vier, Liebe`],[`eu / äu`,`«ой»`,`neu, heute, Häuser`],[`sch`,`«ш»`,`Schule, schön`],[`st / sp в начале`,`«шт» / «шп»`,`Straße, Sport`],[`ch`,`мягкое «хь» / «х»`,`ich, Buch`],[`z`,`«ц»`,`Zeit, zehn`],[`w / v`,`«в» / «ф»`,`Wasser, Vater`],[`ä / ö / ü`,`«э» / «ё» / «ю» (губы трубочкой)`,`Mädchen, schön, müde`],[`ß`,`долгое «с»`,`Straße, groß`]]},words:`
hallo|привет
tschüss|пока
ja|да
nein|нет
danke|спасибо
bitte|пожалуйста
der Morgen|утро
der Tag|день
der Abend|вечер
die Nacht|ночь
gut|хорошо
schön|красиво, прекрасно
`,phrases:`
Guten Morgen!|Доброе утро!
Guten Tag!|Добрый день!
Guten Abend!|Добрый вечер!
Gute Nacht!|Спокойной ночи!
Auf Wiedersehen!|До свидания!
Bis morgen!|До завтра!
Wie geht's?|Как дела?
Danke, gut!|Спасибо, хорошо!
Danke schön!|Большое спасибо!
`,gaps:`
Guten {Morgen}!|Доброе утро!|Morgen,Abend,Nacht
Gute {Nacht}!|Спокойной ночи!|Nacht,Tag,Morgen
Danke {schön}!|Большое спасибо!|schön,gut,bitte
Auf {Wiedersehen}!|До свидания!|Wiedersehen,Tschüss,Hallo
Bis {morgen}!|До завтра!|morgen,Abend,gut
`,dialogTitle:`Утром у дома`,dialog:`
A:Guten Morgen!|Доброе утро!
B:Guten Morgen!|Доброе утро!
A:Wie geht's?|Как дела?
B:Danke, gut!|Спасибо, хорошо!
A:Schön! Tschüss!|Прекрасно! Пока!
B:Tschüss! Bis morgen!|Пока! До завтра!
`,roleplay:{role:`приветливая соседка Frau Müller`,situation:`Утро, вы встречаете соседку у подъезда.`,goal:`Поздороваться, спросить «как дела» и попрощаться`}},{id:`a1-02`,emoji:`🙋`,title:`Знакомство`,de:`Wer bist du?`,goal:`Представиться, сказать откуда вы и спросить собеседника`,grammar:{title:`Глагол sein (быть) и местоимения`,points:[`В немецком глагол-связку нельзя пропускать: «Я — Анна» = **Ich bin Anna**.`,`**du** — «ты» (друзья, дети), **Sie** — «Вы» (вежливо, всегда с большой буквы).`,`Глагол **heißen** (зваться): ich heiße, du heißt, Sie heißen. **kommen** (приходить, быть родом): ich komme, du kommst, er kommt.`,`В вопросе с вопросительным словом глагол стоит на **2-м месте**: Wie **heißt** du? Woher **kommst** du?`],table:[[``,`sein`,`kommen`],[`ich`,`bin`,`komme`],[`du`,`bist`,`kommst`],[`er/sie/es`,`ist`,`kommt`],[`wir`,`sind`,`kommen`],[`ihr`,`seid`,`kommt`],[`sie/Sie`,`sind`,`kommen`]]},words:`
ich|я
du|ты
Sie|Вы (вежливо)
heißen|зваться
kommen|приходить; быть родом
wohnen|жить (где-то)
sprechen|говорить
der Name, -n|имя
das Land, -¨er|страна
die Stadt, -¨e|город
Deutschland|Германия
Russland|Россия
woher|откуда
wo|где
`,phrases:`
Ich heiße Anna.|Меня зовут Анна.
Wie heißt du?|Как тебя зовут?
Wie heißen Sie?|Как Вас зовут?
Ich komme aus Russland.|Я из России.
Woher kommst du?|Откуда ты?
Ich wohne in Berlin.|Я живу в Берлине.
Wo wohnen Sie?|Где Вы живёте?
Ich spreche ein bisschen Deutsch.|Я немного говорю по-немецки.
Freut mich!|Очень приятно!
Das ist mein Freund Max.|Это мой друг Макс.
`,gaps:`
Ich {bin} Anna.|Я Анна.|bin,bist,ist
Wie {heißt} du?|Как тебя зовут?|heißt,heiße,heißen
Woher {kommen} Sie?|Откуда Вы?|kommen,kommst,komme
Er {wohnt} in Hamburg.|Он живёт в Гамбурге.|wohnt,wohne,wohnen
Wir {sind} aus Kasachstan.|Мы из Казахстана.|sind,seid,ist
Ich komme {aus} Russland.|Я из России.|aus,in,von
Ich wohne {in} München.|Я живу в Мюнхене.|in,aus,nach
`,dialogTitle:`На языковых курсах`,dialog:`
A:Hallo! Ich bin Lukas. Wie heißt du?|Привет! Я Лукас. Как тебя зовут?
B:Hallo! Ich heiße Anna.|Привет! Меня зовут Анна.
A:Freut mich, Anna! Woher kommst du?|Очень приятно, Анна! Откуда ты?
B:Ich komme aus Russland. Und du?|Я из России. А ты?
A:Ich komme aus Österreich, aus Wien. Wo wohnst du?|Я из Австрии, из Вены. Где ты живёшь?
B:Ich wohne in Berlin.|Я живу в Берлине.
A:Super! Ich auch!|Супер! Я тоже!
`,roleplay:{role:`новый одногруппник на курсах немецкого по имени Lukas из Вены`,situation:`Первый день на языковых курсах в Берлине, перерыв.`,goal:`Представиться, сказать откуда вы и где живёте, узнать то же у собеседника`}},{id:`a1-03`,emoji:`🔢`,title:`Числа и возраст`,de:`Zahlen und Alter`,goal:`Считать до 100, называть возраст и номер телефона`,grammar:{title:`Числа: «один-и-двадцать»`,points:[`0–12 нужно выучить: null, eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, elf, zwölf.`,`13–19: число + zehn: **dreizehn**, vierzehn… (но **sechzehn**, **siebzehn**).`,`Десятки: zwanzig, **dreißig**, vierzig, fünfzig, sechzig, siebzig, achtzig, neunzig, hundert.`,`Главная особенность — **единицы называются первыми**: 21 = **einundzwanzig** («один-и-двадцать»), 47 = siebenundvierzig.`,`Возраст: **Ich bin 25 Jahre alt.** Вопрос: **Wie alt bist du?**`]},words:`
eins|один
zwei|два
drei|три
vier|четыре
fünf|пять
sechs|шесть
sieben|семь
acht|восемь
neun|девять
zehn|десять
zwölf|двенадцать
zwanzig|двадцать
dreißig|тридцать
hundert|сто
das Jahr, -e|год
alt|старый; (о возрасте) лет
die Telefonnummer, -n|номер телефона
`,phrases:`
Wie alt bist du?|Сколько тебе лет?
Ich bin dreißig Jahre alt.|Мне тридцать лет.
Wie ist deine Telefonnummer?|Какой у тебя номер телефона?
Meine Nummer ist null eins sieben neun.|Мой номер ноль-один-семь-девять.
Das kostet zwanzig Euro.|Это стоит двадцать евро.
Ich habe zwei Kinder.|У меня двое детей.
Noch einmal, bitte.|Ещё раз, пожалуйста.
Langsam, bitte!|Медленнее, пожалуйста!
`,gaps:`
Ich bin 25 Jahre alt: fünfund{zwanzig}.|25 — «пять-и-двадцать».|zwanzig,zwölf,zehn
Wie {alt} bist du?|Сколько тебе лет?|alt,viel,Jahr
21 = {einundzwanzig}|21|einundzwanzig,zwanzigeins,eineszwanzig
30 = {dreißig}|30|dreißig,dreizig,dreizehn
16 = {sechzehn}|16|sechzehn,sechszehn,sechzig
`,dialogTitle:`Новый номер`,dialog:`
A:Wie alt bist du?|Сколько тебе лет?
B:Ich bin dreißig Jahre alt. Und du?|Мне тридцать. А тебе?
A:Ich bin achtundzwanzig. Wie ist deine Telefonnummer?|Мне двадцать восемь. Какой у тебя номер?
B:Null eins sieben neun, vier fünf, drei zwei.|Ноль-один-семь-девять, четыре-пять, три-два.
A:Noch einmal, bitte. Langsam!|Ещё раз, пожалуйста. Медленно!
B:Null eins sieben neun – vier fünf – drei zwei.|Ноль-один-семь-девять — четыре-пять — три-два.
A:Danke! Ich rufe dich an.|Спасибо! Я тебе позвоню.
`,roleplay:{role:`сотрудник фитнес-клуба, который заполняет анкету нового клиента`,situation:`Вы записываетесь в спортзал, администратор спрашивает ваши данные.`,goal:`Назвать имя, возраст, номер телефона и номер дома по-немецки`}},{id:`a1-04`,emoji:`👨‍👩‍👧`,title:`Моя семья`,de:`Meine Familie`,goal:`Рассказать о семье, использовать haben и притяжательные местоимения`,grammar:{title:`Глагол haben и mein / dein`,points:[`**haben** (иметь): ich habe, du **hast**, er **hat**, wir haben, ihr habt, sie haben. «У меня есть брат» = **Ich habe einen Bruder.**`,`**mein** (мой) / **dein** (твой) меняются как артикль ein: **mein** Vater, **meine** Mutter, **mein** Kind, **meine** Eltern (мн. ч.).`,`sein (его) / ihr (её): **sein** Bruder, **ihre** Schwester.`],table:[[``,`der`,`die`,`das`,`мн. ч.`],[`мой`,`mein Vater`,`meine Mutter`,`mein Kind`,`meine Eltern`],[`твой`,`dein Bruder`,`deine Schwester`,`dein Baby`,`deine Kinder`]]},words:`
die Familie, -n|семья
der Vater, -¨|отец
die Mutter, -¨|мать
die Eltern|родители
der Bruder, -¨|брат
die Schwester, -n|сестра
der Sohn, -¨e|сын
die Tochter, -¨|дочь
das Kind, -er|ребёнок
der Opa, -s|дедушка
die Oma, -s|бабушка
verheiratet|женат / замужем
ledig|не женат / не замужем
haben|иметь
`,phrases:`
Das ist meine Familie.|Это моя семья.
Ich habe einen Bruder und eine Schwester.|У меня есть брат и сестра.
Hast du Kinder?|У тебя есть дети?
Mein Vater heißt Peter.|Моего отца зовут Петер.
Meine Mutter ist Lehrerin.|Моя мама — учительница.
Ich bin verheiratet.|Я женат / замужем.
Meine Eltern wohnen in Moskau.|Мои родители живут в Москве.
Wie heißt deine Schwester?|Как зовут твою сестру?
`,gaps:`
Ich {habe} zwei Kinder.|У меня двое детей.|habe,hast,hat
{Hast} du Geschwister?|У тебя есть братья и сёстры?|Hast,Habe,Hat
Das ist {meine} Mutter.|Это моя мама.|meine,mein,meinen
Das ist {mein} Vater.|Это мой папа.|mein,meine,meiner
Wie heißt {deine} Schwester?|Как зовут твою сестру?|deine,dein,du
Sie {hat} einen Sohn.|У неё есть сын.|hat,habt,haben
`,dialogTitle:`Фото семьи`,dialog:`
A:Ist das deine Familie?|Это твоя семья?
B:Ja, das ist meine Familie.|Да, это моя семья.
A:Wer ist das?|Кто это?
B:Das ist mein Bruder. Er heißt Ivan.|Это мой брат. Его зовут Иван.
A:Und die Frau hier?|А женщина здесь?
B:Das ist meine Mutter.|Это моя мама.
A:Hast du auch Kinder?|А у тебя есть дети?
B:Ja, ich habe eine Tochter.|Да, у меня есть дочь.
`,roleplay:{role:`любопытная коллега Sabine, которая смотрит ваши семейные фото`,situation:`В обеденный перерыв вы показываете фото семьи на телефоне.`,goal:`Рассказать о 3 членах семьи: кто это, как зовут, где живут`}},{id:`a1-05`,emoji:`🍎`,title:`Еда и напитки`,de:`Essen und Trinken`,goal:`Называть продукты, говорить что вы любите, понять роды der/die/das`,grammar:{title:`Род существительных: der, die, das`,points:[`У каждого существительного есть род: **der** (мужской), **die** (женский), **das** (средний). Учите слова сразу с артиклем!`,`Род часто не совпадает с русским: **das** Mädchen (девочка), **der** Apfel, **die** Milch.`,`Неопределённый артикль: **ein** (der/das), **eine** (die): ein Apfel, eine Banane, ein Ei.`,`Отрицание существительного — **kein/keine**: Ich esse **kein** Fleisch.`,`«Я люблю…» о еде: **Ich esse gern** Pizza. / **Ich trinke gern** Kaffee.`]},words:`
das Brot, -e|хлеб
der Apfel, -¨|яблоко
die Banane, -n|банан
der Käse|сыр
die Milch|молоко
das Wasser|вода
der Kaffee|кофе
der Tee|чай
das Fleisch|мясо
der Fisch, -e|рыба
das Ei, -er|яйцо
die Kartoffel, -n|картофель
das Gemüse|овощи
das Obst|фрукты
essen|есть
trinken|пить
`,phrases:`
Ich esse gern Obst.|Я люблю есть фрукты.
Was trinkst du gern?|Что ты любишь пить?
Ich trinke Kaffee mit Milch.|Я пью кофе с молоком.
Ich esse kein Fleisch.|Я не ем мясо.
Ich habe Hunger.|Я голоден.
Ich habe Durst.|Я хочу пить.
Das schmeckt gut!|Это вкусно!
Zum Frühstück esse ich Brot mit Käse.|На завтрак я ем хлеб с сыром.
`,gaps:`
{Der} Käse ist lecker.|Сыр вкусный.|Der,Die,Das
{Die} Milch ist kalt.|Молоко холодное.|Die,Der,Das
{Das} Brot ist frisch.|Хлеб свежий.|Das,Der,Die
Ich esse {kein} Fleisch.|Я не ем мясо.|kein,keine,nicht
Ich trinke {keine} Milch.|Я не пью молоко.|keine,kein,nicht
Ich esse {gern} Fisch.|Я люблю рыбу.|gern,gut,viel
Ich habe {Durst}.|Я хочу пить.|Durst,Hunger,Wasser
`,dialogTitle:`Что на завтрак?`,dialog:`
A:Ich habe Hunger! Was essen wir?|Я голоден! Что поедим?
B:Ich habe Brot, Käse und Eier.|У меня есть хлеб, сыр и яйца.
A:Super! Und was trinkst du?|Супер! А что ты пьёшь?
B:Ich trinke Tee. Und du?|Я пью чай. А ты?
A:Kaffee mit Milch, bitte.|Кофе с молоком, пожалуйста.
B:Hier, bitte. Guten Appetit!|Вот, пожалуйста. Приятного аппетита!
A:Danke! Das schmeckt gut!|Спасибо! Вкусно!
`,roleplay:{role:`друг, который пригласил вас на завтрак и спрашивает, что вы любите`,situation:`Воскресное утро, вы в гостях у друга, он готовит завтрак.`,goal:`Сказать, что вы любите и не любите есть и пить`}},{id:`a1-06`,emoji:`☕`,title:`В кафе`,de:`Im Café`,goal:`Заказать еду и напитки, спросить цену и оплатить`,grammar:{title:`möchten и винительный падеж (Akkusativ)`,points:[`**Ich möchte** = «Я бы хотел(а)» — вежливо: ich möchte, du möchtest, er möchte, Sie möchten. Второй глагол — в конце: Ich möchte **bezahlen**.`,`После большинства глаголов (haben, möchten, essen, nehmen…) существительное в **Akkusativ**.`,`В Akkusativ меняется **только мужской род**: der → **den**, ein → **einen**, kein → **keinen**. Женский и средний не меняются!`,`Ich nehme **einen** Kaffee, **eine** Cola und **ein** Stück Kuchen.`],table:[[``,`Nominativ`,`Akkusativ`],[`der`,`der / ein Tee`,`den / einen Tee`],[`die`,`die / eine Suppe`,`die / eine Suppe`],[`das`,`das / ein Wasser`,`das / ein Wasser`]]},words:`
das Café, -s|кафе
die Speisekarte, -n|меню
der Kuchen, -|пирог, торт
das Stück, -e|кусок
die Suppe, -n|суп
der Salat, -e|салат
die Rechnung, -en|счёт
der Kellner, -|официант
nehmen|брать
möchten|хотеть (вежливо)
bezahlen|платить
zusammen|вместе
getrennt|раздельно
lecker|вкусный
`,phrases:`
Ich möchte einen Kaffee, bitte.|Я бы хотел(а) кофе, пожалуйста.
Was möchten Sie?|Что Вы желаете?
Ich nehme ein Stück Kuchen.|Я возьму кусок торта.
Die Speisekarte, bitte.|Меню, пожалуйста.
Was kostet der Salat?|Сколько стоит салат?
Die Rechnung, bitte!|Счёт, пожалуйста!
Zusammen oder getrennt?|Вместе или раздельно?
Das macht zwölf Euro fünfzig.|С вас двенадцать евро пятьдесят.
Stimmt so!|Сдачи не надо!
`,gaps:`
Ich möchte {einen} Tee.|Я хотел(а) бы чай.|einen,ein,eine
Ich nehme {eine} Suppe.|Я возьму суп.|eine,einen,ein
Wir {möchten} bezahlen.|Мы хотели бы заплатить.|möchten,möchte,möchtest
Ich nehme {ein} Wasser.|Я возьму воду.|ein,einen,eine
Was {kostet} der Kuchen?|Сколько стоит торт?|kostet,kosten,kostest
Ich möchte {den} Salat.|Я бы хотел(а) этот салат.|den,der,dem
`,dialogTitle:`Заказ в кафе`,dialog:`
A:Guten Tag! Was möchten Sie?|Добрый день! Что Вы желаете?
B:Ich möchte einen Cappuccino, bitte.|Я бы хотел(а) капучино, пожалуйста.
A:Gern. Möchten Sie auch etwas essen?|С удовольствием. Хотите что-нибудь поесть?
B:Ja, ich nehme ein Stück Apfelkuchen.|Да, я возьму кусок яблочного пирога.
A:Sehr gern. … Bitte schön!|Хорошо. … Пожалуйста!
B:Danke! Die Rechnung, bitte.|Спасибо! Счёт, пожалуйста.
A:Das macht sieben Euro achtzig.|С вас семь евро восемьдесят.
B:Acht Euro. Stimmt so!|Восемь евро. Сдачи не надо!
`,roleplay:{role:`официант в венском кафе`,situation:`Вы пришли в уютное кафе в Вене. Официант подходит к столику.`,goal:`Заказать напиток и десерт, спросить цену и попросить счёт`}},{id:`a1-07`,emoji:`⏰`,title:`Мой день`,de:`Mein Tag`,goal:`Говорить о распорядке дня и называть время`,grammar:{title:`Глаголы с отделяемой приставкой и время`,points:[`Некоторые глаголы имеют **отделяемую приставку**: auf|stehen (вставать). Приставка уходит **в конец предложения**: Ich **stehe** um 7 Uhr **auf**.`,`Частые: **aufstehen**, **anfangen** (начинать), **einkaufen** (делать покупки), **fernsehen** (смотреть ТВ), **anrufen** (звонить).`,`Время: **Wie spät ist es?** — Es ist acht Uhr. **halb neun** = 8:30 («половина девятого»), **Viertel nach** acht = 8:15, **Viertel vor** neun = 8:45.`,`Во сколько? — **um** acht Uhr.`,`Порядок слов: глагол всегда на **2-м месте**: **Um 7 Uhr** stehe ich auf. (а не «Um 7 Uhr ich stehe»)`]},words:`
aufstehen|вставать
frühstücken|завтракать
arbeiten|работать
anfangen|начинать
einkaufen|делать покупки
kochen|готовить
fernsehen|смотреть телевизор
schlafen|спать
die Uhr, -en|часы; (время) час
halb|половина
das Viertel, -|четверть
früh|рано
spät|поздно
dann|потом
`,phrases:`
Wie spät ist es?|Который час?
Es ist halb acht.|Сейчас половина восьмого.
Ich stehe um sieben Uhr auf.|Я встаю в семь часов.
Dann frühstücke ich.|Потом я завтракаю.
Die Arbeit fängt um neun Uhr an.|Работа начинается в девять.
Am Abend sehe ich fern.|Вечером я смотрю телевизор.
Ich kaufe nach der Arbeit ein.|Я делаю покупки после работы.
Um elf Uhr gehe ich schlafen.|В одиннадцать я иду спать.
`,gaps:`
Ich stehe um 6 Uhr {auf}.|Я встаю в 6 часов.|auf,an,ein
Der Film fängt um 8 Uhr {an}.|Фильм начинается в 8.|an,auf,ein
Am Samstag kaufe ich {ein}.|В субботу я делаю покупки.|ein,an,auf
Um 7 Uhr {frühstücke} ich.|В 7 я завтракаю.|frühstücke,ich frühstücke,frühstückst
8:30 – Es ist {halb} neun.|Половина девятого.|halb,Viertel,um
Ich komme {um} 10 Uhr.|Я приду в 10 часов.|um,am,im
`,dialogTitle:`Когда встретимся?`,dialog:`
A:Wann stehst du auf?|Когда ты встаёшь?
B:Ich stehe um halb sieben auf.|Я встаю в половине седьмого.
A:So früh! Wann fängt deine Arbeit an?|Так рано! Когда начинается твоя работа?
B:Meine Arbeit fängt um acht Uhr an.|Моя работа начинается в восемь.
A:Und was machst du am Abend?|А что ты делаешь вечером?
B:Ich koche und dann sehe ich fern.|Я готовлю, а потом смотрю телевизор.
A:Gehen wir morgen um sieben ins Kino?|Пойдём завтра в семь в кино?
B:Gute Idee! Bis morgen!|Хорошая идея! До завтра!
`,roleplay:{role:`журналист студенческой газеты, который делает опрос «Мой обычный день»`,situation:`Вас на улице просят ответить на пару вопросов о вашем распорядке дня.`,goal:`Рассказать, когда вы встаёте, работаете, едите и ложитесь спать`}},{id:`a1-08`,emoji:`⚽`,title:`Хобби и свободное время`,de:`Freizeit und Hobbys`,goal:`Рассказать о хобби, сказать что вы умеете и чего не делаете`,grammar:{title:`gern, können и отрицание nicht`,points:[`**gern** = «люблю делать»: Ich spiele **gern** Fußball. **lieber** = больше люблю, **am liebsten** = больше всего.`,`**können** (уметь, мочь): ich **kann**, du **kannst**, er **kann**. Второй глагол — в конце в инфинитиве: Ich **kann** gut **schwimmen**.`,`**nicht** отрицает глагол/прилагательное: Ich tanze **nicht**. **kein** — существительное: Ich habe **keine** Zeit.`,`У некоторых глаголов меняется корень: lesen → du **liest**, er **liest**; fahren → du **fährst**; sprechen → er **spricht**.`]},words:`
das Hobby, -s|хобби
die Freizeit|свободное время
spielen|играть
lesen|читать
schwimmen|плавать
tanzen|танцевать
singen|петь
fotografieren|фотографировать
Rad fahren|кататься на велосипеде
können|мочь, уметь
die Musik|музыка
das Buch, -¨er|книга
der Film, -e|фильм
die Zeit|время
oft|часто
nie|никогда
`,phrases:`
Was machst du in der Freizeit?|Что ты делаешь в свободное время?
Ich lese gern Bücher.|Я люблю читать книги.
Ich spiele gern Gitarre.|Я люблю играть на гитаре.
Kannst du schwimmen?|Ты умеешь плавать?
Ich kann nicht gut singen.|Я не умею хорошо петь.
Am liebsten fahre ich Rad.|Больше всего я люблю кататься на велосипеде.
Ich habe keine Zeit.|У меня нет времени.
Wir gehen oft ins Kino.|Мы часто ходим в кино.
`,gaps:`
Ich {kann} gut tanzen.|Я хорошо танцую (умею).|kann,kannst,können
{Kannst} du Gitarre spielen?|Ты умеешь играть на гитаре?|Kannst,Kann,Könnt
Er {liest} gern Krimis.|Он любит читать детективы.|liest,lest,lese
Ich habe {keine} Zeit.|У меня нет времени.|keine,nicht,kein
Ich schwimme {nicht} gern.|Я не люблю плавать.|nicht,kein,keine
Sie {fährt} gern Rad.|Она любит кататься на велосипеде.|fährt,fahrt,fahre
`,dialogTitle:`Планы на выходные`,dialog:`
A:Was machst du gern in der Freizeit?|Что ты любишь делать в свободное время?
B:Ich lese gern und ich fahre Rad.|Я люблю читать и кататься на велосипеде.
A:Ich spiele Tennis. Kannst du Tennis spielen?|Я играю в теннис. Ты умеешь играть в теннис?
B:Nein, leider nicht. Aber ich schwimme gern.|Нет, к сожалению. Но я люблю плавать.
A:Gehen wir am Samstag schwimmen?|Пойдём в субботу плавать?
B:Am Samstag habe ich keine Zeit. Am Sonntag?|В субботу у меня нет времени. В воскресенье?
A:Sonntag ist super!|Воскресенье — супер!
`,roleplay:{role:`новый знакомый в спортклубе по имени Tim`,situation:`Вы познакомились в раздевалке спортклуба.`,goal:`Рассказать о 2–3 хобби, сказать, что вы умеете и чего не умеете, договориться о встрече`}},{id:`a1-09`,emoji:`🏠`,title:`Квартира`,de:`Meine Wohnung`,goal:`Описать квартиру и комнаты, сказать «есть / нет»`,grammar:{title:`es gibt и прилагательные после sein`,points:[`**Es gibt** + Akkusativ = «есть, имеется»: In der Küche **gibt es einen** Tisch.`,`Прилагательное после sein не меняется: Die Wohnung **ist groß**. Das Zimmer **ist hell**.`,`Слишком = **zu**: Die Miete ist **zu** teuer.`,`Местоимения для вещей по роду: der Tisch → **er**, die Lampe → **sie**, das Bett → **es**: Wie ist das Sofa? — **Es** ist bequem.`]},words:`
die Wohnung, -en|квартира
das Haus, -¨er|дом
das Zimmer, -|комната
die Küche, -n|кухня
das Bad, -¨er|ванная
das Schlafzimmer, -|спальня
der Balkon, -e|балкон
der Tisch, -e|стол
der Stuhl, -¨e|стул
das Bett, -en|кровать
das Sofa, -s|диван
die Lampe, -n|лампа
groß|большой
klein|маленький
hell|светлый
teuer|дорогой
billig|дешёвый
die Miete, -n|арендная плата
`,phrases:`
Meine Wohnung hat drei Zimmer.|В моей квартире три комнаты.
Die Küche ist klein, aber hell.|Кухня маленькая, но светлая.
Es gibt einen Balkon.|Есть балкон.
Im Schlafzimmer gibt es ein Bett und einen Schrank.|В спальне есть кровать и шкаф.
Wie hoch ist die Miete?|Какая арендная плата?
Die Wohnung ist zu teuer.|Квартира слишком дорогая.
Das Sofa ist neu und bequem.|Диван новый и удобный.
Ich wohne im dritten Stock.|Я живу на третьем этаже (по-нашему — на четвёртом).
`,gaps:`
In der Küche gibt es {einen} Tisch.|На кухне есть стол.|einen,ein,eine
Es {gibt} keinen Balkon.|Балкона нет.|gibt,ist,hat
Wie ist das Bett? – {Es} ist bequem.|Какая кровать? — Удобная.|Es,Er,Sie
Wie ist die Lampe? – {Sie} ist modern.|Какая лампа? — Современная.|Sie,Er,Es
Die Miete ist {zu} hoch.|Аренда слишком высокая.|zu,sehr,so
`,dialogTitle:`Осмотр квартиры`,dialog:`
A:Hier ist das Wohnzimmer. Es ist groß und hell.|Вот гостиная. Она большая и светлая.
B:Schön! Gibt es auch einen Balkon?|Красиво! Есть и балкон?
A:Ja, der Balkon ist hier. Und das ist die Küche.|Да, балкон здесь. А это кухня.
B:Die Küche ist sehr klein.|Кухня очень маленькая.
A:Ja, aber sie ist neu.|Да, но она новая.
B:Wie hoch ist die Miete?|Какая арендная плата?
A:Achthundert Euro warm.|Восемьсот евро с коммунальными.
B:Hm, das ist ein bisschen teuer.|Хм, это немного дорого.
`,roleplay:{role:`арендодатель Herr Klein, который показывает квартиру`,situation:`Вы смотрите квартиру в Лейпциге, которую хотите снять.`,goal:`Спросить о комнатах, балконе, мебели и цене аренды`}},{id:`a1-10`,emoji:`🗺️`,title:`В городе`,de:`In der Stadt`,goal:`Спросить дорогу, понять объяснения и использовать повелительное наклонение`,grammar:{title:`Императив и предлоги места`,points:[`Вежливая просьба (Sie): глагол + Sie: **Gehen Sie** geradeaus! **Nehmen Sie** den Bus!`,`Для «ты»: основа глагола: **Geh** geradeaus! **Nimm** die U-Bahn! **Komm** mit!`,`Где? **Wo ist** der Bahnhof? Куда? **Wie komme ich zum** Bahnhof / **zur** Post? (zu + dem = **zum**, zu + der = **zur**).`,`Транспорт: **mit dem** Bus, **mit der** U-Bahn, **mit dem** Fahrrad, **zu Fuß** (пешком).`]},words:`
der Bahnhof, -¨e|вокзал
die Post|почта
die Bank, -en|банк
die Apotheke, -n|аптека
der Supermarkt, -¨e|супермаркет
die Haltestelle, -n|остановка
die Straße, -n|улица
die Ampel, -n|светофор
geradeaus|прямо
links|налево
rechts|направо
weit|далеко
nah|близко
der Bus, -se|автобус
die U-Bahn, -en|метро
zu Fuß|пешком
`,phrases:`
Entschuldigung, wo ist der Bahnhof?|Извините, где вокзал?
Wie komme ich zur Post?|Как мне пройти к почте?
Gehen Sie geradeaus und dann links.|Идите прямо, а потом налево.
An der Ampel gehen Sie rechts.|На светофоре поверните направо.
Ist das weit?|Это далеко?
Nein, nur fünf Minuten zu Fuß.|Нет, всего пять минут пешком.
Nehmen Sie den Bus Nummer zwölf.|Садитесь на автобус номер двенадцать.
Die Apotheke ist neben der Bank.|Аптека рядом с банком.
`,gaps:`
{Gehen} Sie geradeaus!|Идите прямо!|Gehen,Geht,Gehst
Wie komme ich {zum} Bahnhof?|Как пройти к вокзалу?|zum,zur,zu
Wie komme ich {zur} Apotheke?|Как пройти к аптеке?|zur,zum,zu
Ich fahre {mit} dem Bus.|Я еду на автобусе.|mit,in,zu
{Nimm} die U-Bahn!|Садись на метро!|Nimm,Nehmen,Nehmt
Das ist nicht weit, nur fünf Minuten zu {Fuß}.|Недалеко, пять минут пешком.|Fuß,Bus,Weg
`,dialogTitle:`Где вокзал?`,dialog:`
B:Entschuldigung! Wie komme ich zum Bahnhof?|Извините! Как мне пройти к вокзалу?
A:Zum Bahnhof? Gehen Sie hier geradeaus.|К вокзалу? Идите здесь прямо.
B:Geradeaus. Und dann?|Прямо. А потом?
A:An der Ampel gehen Sie links. Dann sehen Sie den Bahnhof.|На светофоре налево. Потом увидите вокзал.
B:Ist das weit?|Это далеко?
A:Nein, zehn Minuten zu Fuß. Oder nehmen Sie den Bus.|Нет, десять минут пешком. Или садитесь на автобус.
B:Vielen Dank!|Большое спасибо!
A:Bitte, gern!|Пожалуйста!
`,roleplay:{role:`местный житель на улице Гейдельберга`,situation:`Вы турист и ищете вокзал, аптеку и хорошее кафе.`,goal:`Спросить дорогу минимум к двум местам и понять ответ`}},{id:`a1-11`,emoji:`🛍️`,title:`Покупки и одежда`,de:`Einkaufen und Kleidung`,goal:`Купить одежду: размер, цвет, цена; использовать «этот» и «какой»`,grammar:{title:`Цвета, welcher? и dieser`,points:[`**Welcher** (какой?) и **dieser** (этот) склоняются как der/die/das: **welcher** Pullover? — **dieser** Pullover; **welche** Jacke? — **diese** Jacke; **welches** Hemd? — **dieses** Hemd.`,`В Akkusativ мужской род: Ich nehme **diesen** Rock.`,`Местоимения в Akkusativ: der Mantel → **ihn**, die Hose → **sie**, das Kleid → **es**: Ich nehme **ihn**!`,`Цвета: rot, blau, grün, gelb, schwarz, weiß, grau, braun. **Die Hose ist zu groß** — брюки слишком большие.`]},words:`
die Kleidung|одежда
die Hose, -n|брюки
das Hemd, -en|рубашка
das Kleid, -er|платье
der Pullover, -|свитер
die Jacke, -n|куртка
der Schuh, -e|ботинок, туфля
die Größe, -n|размер
anprobieren|примерять
passen|подходить (по размеру)
rot|красный
blau|синий
schwarz|чёрный
weiß|белый
grün|зелёный
`,phrases:`
Ich suche eine Jacke.|Я ищу куртку.
Welche Größe haben Sie?|Какой у Вас размер?
Kann ich das anprobieren?|Можно это примерить?
Die Hose passt nicht.|Брюки не подходят.
Haben Sie das auch in Blau?|У Вас есть это и в синем?
Wie viel kostet dieser Pullover?|Сколько стоит этот свитер?
Ich nehme ihn.|Я его беру.
Kann ich mit Karte bezahlen?|Могу я заплатить картой?
`,gaps:`
{Welche} Farbe möchten Sie?|Какой цвет Вы хотите?|Welche,Welcher,Welches
Ich nehme {diesen} Mantel.|Я беру это пальто.|diesen,dieser,dieses
{Dieses} Kleid ist schön.|Это платье красивое.|Dieses,Dieser,Diese
Der Pullover ist toll. Ich nehme {ihn}.|Свитер классный. Беру его.|ihn,er,es
Die Schuhe sind zu klein. Sie {passen} nicht.|Туфли слишком малы. Не подходят.|passen,passt,passe
`,dialogTitle:`В магазине одежды`,dialog:`
A:Guten Tag! Kann ich Ihnen helfen?|Добрый день! Могу я Вам помочь?
B:Ja, ich suche einen Pullover.|Да, я ищу свитер.
A:Welche Größe haben Sie?|Какой у Вас размер?
B:Größe M. Haben Sie den Pullover in Blau?|Размер M. У Вас есть этот свитер в синем?
A:Ja, hier bitte. Die Kabine ist dort.|Да, вот, пожалуйста. Примерочная там.
B:Er passt gut! Wie viel kostet er?|Он хорошо сидит! Сколько он стоит?
A:Neunundvierzig Euro.|Сорок девять евро.
B:Gut, ich nehme ihn.|Хорошо, я его беру.
`,roleplay:{role:`продавец в магазине одежды в Мюнхене`,situation:`Вы хотите купить подарок и себе что-нибудь тёплое на зиму.`,goal:`Найти вещь нужного цвета и размера, примерить и купить`}},{id:`a1-12`,emoji:`📅`,title:`Календарь и погода`,de:`Termine und Wetter`,goal:`Назначить встречу, назвать день, месяц, время года и описать погоду`,grammar:{title:`am, im, um и порядковые числа`,points:[`**am** + день/часть дня: am Montag, am Abend, am Wochenende. **im** + месяц/время года: im Mai, im Sommer. **um** + время: um 3 Uhr.`,`Даты: **der erste** (1-й), **der zweite**, **der dritte**, der vierte… с 20 — **-ste**: der zwanzigste. «Первого мая» = **am ersten Mai**.`,`Погода: **Es regnet** (идёт дождь), **es schneit** (снег), **die Sonne scheint** (светит солнце), **es ist kalt / warm / windig**.`,`Все дни недели, месяцы и времена года — **der**.`]},words:`
der Montag|понедельник
der Dienstag|вторник
der Mittwoch|среда
der Donnerstag|четверг
der Freitag|пятница
der Samstag|суббота
der Sonntag|воскресенье
das Wochenende, -n|выходные
der Termin, -e|встреча (по записи)
der Sommer|лето
der Winter|зима
das Wetter|погода
die Sonne|солнце
der Regen|дождь
kalt|холодный
warm|тёплый
`,phrases:`
Hast du am Freitag Zeit?|У тебя есть время в пятницу?
Am Montag kann ich nicht.|В понедельник я не могу.
Wie wäre es mit Mittwoch um drei?|Как насчёт среды в три?
Mein Geburtstag ist am fünften Mai.|Мой день рождения пятого мая.
Wie ist das Wetter heute?|Какая сегодня погода?
Es regnet und es ist kalt.|Идёт дождь, и холодно.
Im Sommer ist es oft sehr warm.|Летом часто очень тепло.
Die Sonne scheint!|Светит солнце!
`,gaps:`
Ich komme {am} Dienstag.|Я приду во вторник.|am,im,um
Wir fahren {im} August nach Italien.|Мы едем в Италию в августе.|im,am,um
Der Kurs beginnt {um} neun Uhr.|Курс начинается в девять.|um,am,im
Heute {regnet} es.|Сегодня идёт дождь.|regnet,Regen,regnen
Mein Geburtstag ist am {ersten} März.|Мой день рождения 1 марта.|ersten,einen,eins
{Im} Winter schneit es oft.|Зимой часто идёт снег.|Im,Am,Um
`,dialogTitle:`Договоримся о встрече`,dialog:`
A:Hast du am Wochenende Zeit?|У тебя есть время на выходных?
B:Am Samstag arbeite ich. Aber am Sonntag habe ich Zeit.|В субботу я работаю. Но в воскресенье есть время.
A:Super! Machen wir ein Picknick im Park?|Супер! Устроим пикник в парке?
B:Gern! Wie wird das Wetter?|С удовольствием! Какая будет погода?
A:Die Sonne scheint, es wird warm – fünfundzwanzig Grad!|Будет солнце, тепло — двадцать пять градусов!
B:Toll! Um wie viel Uhr?|Здорово! Во сколько?
A:Um zwölf Uhr am Eingang?|В двенадцать у входа?
B:Perfekt, bis Sonntag!|Отлично, до воскресенья!
`,roleplay:{role:`администратор стоматологической клиники`,situation:`Вы звоните, чтобы записаться к зубному врачу.`,goal:`Договориться о дне и времени, которые вам подходят`}},{id:`a1-13`,emoji:`🩺`,title:`Тело и здоровье`,de:`Körper und Gesundheit`,goal:`Сказать, что болит, понять советы врача; модальные глаголы müssen, dürfen, sollen`,grammar:{title:`Модальные глаголы`,points:[`Модальный глагол на 2-м месте, основной глагол — **в конце** в инфинитиве: Sie **müssen** viel Wasser **trinken**.`,`**müssen** — должен (необходимость): ich muss, du musst, er muss. **dürfen** — можно (разрешение): Sie dürfen nicht rauchen. **sollen** — следует (совет/указание другого): Ich soll im Bett bleiben.`,`**wollen** — хотеть (намерение): ich will, du willst.`,`Что болит: **Mein Kopf tut weh.** / **Ich habe Kopfschmerzen.** / **Mir ist schlecht** (меня тошнит).`],table:[[``,`müssen`,`dürfen`,`sollen`,`wollen`],[`ich`,`muss`,`darf`,`soll`,`will`],[`du`,`musst`,`darfst`,`sollst`,`willst`],[`er/sie`,`muss`,`darf`,`soll`,`will`],[`wir/sie`,`müssen`,`dürfen`,`sollen`,`wollen`]]},words:`
der Körper, -|тело
der Kopf, -¨e|голова
der Bauch, -¨e|живот
der Rücken, -|спина
der Hals, -¨e|горло, шея
das Auge, -n|глаз
das Bein, -e|нога
die Hand, -¨e|рука (кисть)
der Arzt, -¨e|врач
krank|больной
gesund|здоровый
das Fieber|температура (жар)
die Tablette, -n|таблетка
wehtun|болеть
müssen|быть должным
dürfen|мочь (иметь разрешение)
`,phrases:`
Was fehlt Ihnen?|Что Вас беспокоит?
Mein Kopf tut weh.|У меня болит голова.
Ich habe Fieber und Halsschmerzen.|У меня температура и болит горло.
Ich bin krank.|Я болен.
Sie müssen im Bett bleiben.|Вам нужно оставаться в постели.
Sie dürfen keinen Sport machen.|Вам нельзя заниматься спортом.
Nehmen Sie dreimal täglich eine Tablette.|Принимайте по таблетке три раза в день.
Gute Besserung!|Выздоравливай!
`,gaps:`
Ich {muss} heute zum Arzt gehen.|Мне нужно сегодня к врачу.|muss,musst,müssen
Hier {darf} man nicht rauchen.|Здесь нельзя курить.|darf,dürfen,darfst
Du {sollst} viel Tee trinken.|Тебе следует пить много чая.|sollst,soll,sollt
Mein Bauch tut {weh}.|У меня болит живот.|weh,krank,schlecht
Sie müssen drei Tage im Bett {bleiben}.|Вам нужно три дня лежать.|bleiben,bleibt,bleibe
Meine Beine {tun} weh.|У меня болят ноги.|tun,tut,tue
`,dialogTitle:`У врача`,dialog:`
A:Guten Tag! Was fehlt Ihnen?|Добрый день! Что Вас беспокоит?
B:Ich habe Kopfschmerzen und Fieber.|У меня болит голова и температура.
A:Seit wann?|С какого времени?
B:Seit zwei Tagen. Und mein Hals tut weh.|Два дня. И горло болит.
A:Sie haben eine Grippe. Sie müssen im Bett bleiben und viel trinken.|У Вас грипп. Вам нужно лежать и много пить.
B:Darf ich arbeiten?|Мне можно работать?
A:Nein, diese Woche nicht. Hier ist ein Rezept.|Нет, на этой неделе нельзя. Вот рецепт.
B:Danke, Frau Doktor. Auf Wiedersehen!|Спасибо, доктор. До свидания!
`,roleplay:{role:`терапевт Dr. Wagner на приёме`,situation:`Вы простудились и пришли к врачу в Германии.`,goal:`Описать симптомы, спросить, можно ли работать и заниматься спортом`}}],f=[{id:`a2-01`,emoji:`🎉`,title:`Что ты делал в выходные?`,de:`Was hast du am Wochenende gemacht?`,goal:`Рассказывать о прошлом в разговорном времени Perfekt (с haben)`,grammar:{title:`Perfekt с haben`,points:[`В разговоре о прошлом немцы используют **Perfekt**: haben (на 2-м месте) + **Partizip II** (в конце): Ich **habe** Pizza **gegessen**.`,`Слабые (правильные) глаголы: **ge- + основа + -t**: machen → **gemacht**, kaufen → **gekauft**, spielen → **gespielt**, arbeiten → **gearbeitet**.`,`Сильные глаголы: **ge- + (изм.) основа + -en**: essen → **gegessen**, trinken → **getrunken**, sehen → **gesehen**, lesen → **gelesen**, schreiben → **geschrieben**.`,`Глаголы на **-ieren** и с неотделяемыми приставками (be-, ver-, er-) — **без ge-**: telefoniert, besucht, verkauft.`,`Отделяемые приставки: ge- в середину: einkaufen → ein**ge**kauft, fernsehen → fern**ge**sehen.`],table:[[`Инфинитив`,`Partizip II`],[`machen`,`gemacht`],[`essen`,`gegessen`],[`trinken`,`getrunken`],[`sehen`,`gesehen`],[`besuchen`,`besucht`],[`einkaufen`,`eingekauft`]]},words:`
gemacht|сделал (machen)
gegessen|съел (essen)
getrunken|выпил (trinken)
gesehen|видел (sehen)
gelesen|прочитал (lesen)
geschrieben|написал (schreiben)
gekauft|купил (kaufen)
besucht|посетил (besuchen)
geschlafen|спал (schlafen)
getroffen|встретил (treffen)
gestern|вчера
letzte Woche|на прошлой неделе
die Party, -s|вечеринка
das Konzert, -e|концерт
`,phrases:`
Was hast du am Wochenende gemacht?|Что ты делал на выходных?
Ich habe meine Oma besucht.|Я навестил бабушку.
Wir haben zusammen gekocht.|Мы вместе готовили.
Ich habe einen Film gesehen.|Я посмотрел фильм.
Am Samstag habe ich lange geschlafen.|В субботу я долго спал.
Hast du schon gegessen?|Ты уже поел?
Gestern habe ich Freunde getroffen.|Вчера я встретил друзей.
Ich habe ein Buch gelesen und Musik gehört.|Я читал книгу и слушал музыку.
`,gaps:`
Ich habe Pizza {gegessen}.|Я ел пиццу.|gegessen,geesst,essen
Wir haben Fußball {gespielt}.|Мы играли в футбол.|gespielt,gespielen,spielt
Was {hast} du gestern gemacht?|Что ты делал вчера?|hast,bist,habt
Sie hat ihre Freundin {besucht}.|Она навестила подругу.|besucht,gebesucht,besuchen
Ich habe im Supermarkt {eingekauft}.|Я сделал покупки в супермаркете.|eingekauft,geeinkauft,einkauft
Er hat einen Brief {geschrieben}.|Он написал письмо.|geschrieben,geschreibt,schreiben
`,dialogTitle:`Понедельник в офисе`,dialog:`
A:Hallo! Wie war dein Wochenende?|Привет! Как прошли выходные?
B:Super! Ich habe meine Eltern besucht.|Супер! Я навестил родителей.
A:Schön! Was habt ihr gemacht?|Здорово! Что вы делали?
B:Wir haben gegrillt und viel geredet. Und du?|Мы жарили гриль и много разговаривали. А ты?
A:Ich habe am Samstag gearbeitet und am Sonntag einen Film gesehen.|Я в субботу работал, а в воскресенье смотрел фильм.
B:Welchen Film hast du gesehen?|Какой фильм ты смотрел?
A:Eine Komödie. Sie war sehr lustig!|Комедию. Очень смешная!
`,roleplay:{role:`коллега по работе Markus в понедельник утром у кофемашины`,situation:`Понедельник, офис, коллега спрашивает о выходных.`,goal:`Рассказать 3–4 предложениями в Perfekt, что вы делали, и спросить коллегу`}},{id:`a2-02`,emoji:`✈️`,title:`Путешествия`,de:`Reisen`,goal:`Рассказывать о поездках: Perfekt с sein, предлоги направления`,grammar:{title:`Perfekt с sein`,points:[`С **sein** образуют Perfekt глаголы **движения** и **смены состояния**: fahren, fliegen, gehen, kommen, laufen, reisen, aufstehen, einschlafen, werden… и сами **sein** и **bleiben**.`,`Ich **bin** nach Spanien **geflogen**. Wir **sind** am Strand **gewesen**. Er **ist** zu Hause **geblieben**.`,`Куда? **nach** + города/страны без артикля (nach Berlin, nach Italien); **in die** + страны с артиклем (in die Schweiz, in die Türkei); **an den** Strand / **ans** Meer; **in die** Berge.`],table:[[`Инфинитив`,`Perfekt`],[`fahren`,`ist gefahren`],[`fliegen`,`ist geflogen`],[`gehen`,`ist gegangen`],[`kommen`,`ist gekommen`],[`sein`,`ist gewesen`],[`bleiben`,`ist geblieben`]]},words:`
die Reise, -n|путешествие
der Urlaub, -e|отпуск
das Flugzeug, -e|самолёт
der Zug, -¨e|поезд
das Hotel, -s|отель
der Koffer, -|чемодан
das Meer, -e|море
der Strand, -¨e|пляж
die Berge|горы
das Ticket, -s|билет
fliegen|лететь
reisen|путешествовать
übernachten|ночевать
geflogen|летал (fliegen)
gefahren|ехал (fahren)
gewesen|был (sein)
`,phrases:`
Wo bist du im Urlaub gewesen?|Где ты был в отпуске?
Ich bin nach Italien geflogen.|Я летал в Италию.
Wir sind mit dem Zug gefahren.|Мы ехали на поезде.
Wir haben in einem kleinen Hotel übernachtet.|Мы ночевали в маленьком отеле.
Ich bin jeden Tag ans Meer gegangen.|Я каждый день ходил к морю.
Das Wetter war fantastisch.|Погода была фантастическая.
Er ist zu Hause geblieben.|Он остался дома.
Wann bist du zurückgekommen?|Когда ты вернулся?
`,gaps:`
Ich {bin} nach Spanien geflogen.|Я летал в Испанию.|bin,habe,war
Wir {haben} viele Fotos gemacht.|Мы сделали много фото.|haben,sind,hatten
Sie ist mit dem Zug {gefahren}.|Она ехала на поезде.|gefahren,gefährt,fahren
Wir fahren {in die} Schweiz.|Мы едем в Швейцарию.|in die,nach,zu
Ich fliege {nach} Wien.|Я лечу в Вену.|nach,in,zu
Bist du schon in Paris {gewesen}?|Ты уже был в Париже?|gewesen,geseint,war
`,dialogTitle:`После отпуска`,dialog:`
A:Du bist so braun! Wo bist du gewesen?|Ты такой загорелый! Где ты был?
B:Ich bin nach Kroatien gefahren.|Я ездил в Хорватию.
A:Toll! Bist du geflogen?|Здорово! Ты летел?
B:Nein, ich bin mit dem Auto gefahren. Das hat zwölf Stunden gedauert.|Нет, ехал на машине. Это заняло двенадцать часов.
A:Wow! Und was hast du dort gemacht?|Ого! А что ты там делал?
B:Ich bin jeden Tag geschwommen und habe viel Fisch gegessen.|Я каждый день плавал и ел много рыбы.
A:Wie war das Wetter?|Какая была погода?
B:Heiß und sonnig – perfekt!|Жарко и солнечно — идеально!
`,roleplay:{role:`старый друг Paul, который давно вас не видел`,situation:`Вы вернулись из путешествия и встретили друга в кафе.`,goal:`Рассказать, куда и на чём вы ездили, где жили и что понравилось (Perfekt с sein и haben)`}},{id:`a2-03`,emoji:`🎁`,title:`Подарки`,de:`Geschenke`,goal:`Говорить кому что дарить: дательный падеж (Dativ)`,grammar:{title:`Dativ — «кому?»`,points:[`Dativ отвечает на вопрос **wem?** (кому?): Ich schenke **meinem Vater** ein Buch.`,`Артикли в Dativ: der → **dem**, die → **der**, das → **dem**, мн. ч. → **den** (+ **-n** у существительного: den Kinder**n**).`,`Местоимения: ich → **mir**, du → **dir**, er → **ihm**, sie → **ihr**, wir → **uns**, ihr → **euch**, Sie → **Ihnen**.`,`Глаголы с Dativ: **geben, schenken, helfen, danken, gefallen** (нравиться), **gehören** (принадлежать), **schmecken**: Das Kleid **gefällt mir**.`],table:[[``,`Nominativ`,`Dativ`],[`der`,`der Mann`,`dem Mann`],[`die`,`die Frau`,`der Frau`],[`das`,`das Kind`,`dem Kind`],[`мн. ч.`,`die Leute`,`den Leuten`]]},words:`
das Geschenk, -e|подарок
der Geburtstag, -e|день рождения
schenken|дарить
geben|давать
helfen|помогать
gefallen|нравиться
gehören|принадлежать
danken|благодарить
die Blume, -n|цветок
die Kette, -n|цепочка
die Uhr, -en|часы
der Gutschein, -e|подарочный сертификат
mir|мне
dir|тебе
ihm|ему
ihr|ей
`,phrases:`
Was schenkst du deiner Mutter?|Что ты подаришь маме?
Ich schenke ihr Blumen.|Я подарю ей цветы.
Kannst du mir helfen?|Можешь мне помочь?
Das Geschenk gefällt mir sehr!|Подарок мне очень нравится!
Wem gehört diese Tasche?|Чья это сумка?
Die Tasche gehört mir.|Сумка моя.
Ich gebe dem Kind einen Apfel.|Я даю ребёнку яблоко.
Alles Gute zum Geburtstag!|С днём рождения!
`,gaps:`
Ich schenke {meinem} Bruder ein Spiel.|Я дарю брату игру.|meinem,meinen,meiner
Er hilft {der} Frau.|Он помогает женщине.|der,die,dem
Das Kleid gefällt {mir}.|Мне нравится платье.|mir,mich,ich
Kannst du {ihm} helfen?|Ты можешь ему помочь?|ihm,ihn,er
Wir danken {Ihnen}!|Мы благодарим Вас!|Ihnen,Sie,Ihr
Ich gebe {den} Kindern Schokolade.|Я даю детям шоколад.|den,die,der
`,dialogTitle:`Подарок для мамы`,dialog:`
A:Nächste Woche hat meine Mutter Geburtstag. Was soll ich ihr schenken?|На следующей неделе у мамы день рождения. Что ей подарить?
B:Schenk ihr doch Blumen!|Подари ей цветы!
A:Blumen habe ich ihr letztes Jahr geschenkt.|Цветы я дарил ей в прошлом году.
B:Und eine Kette? Schmuck gefällt ihr bestimmt.|А цепочку? Украшения ей точно понравятся.
A:Gute Idee! Kannst du mir helfen? Ich verstehe nichts von Schmuck.|Хорошая идея! Поможешь мне? Я ничего не понимаю в украшениях.
B:Klar, ich helfe dir gern. Gehen wir am Samstag zusammen einkaufen.|Конечно, с удовольствием помогу. Пойдём в субботу вместе.
`,roleplay:{role:`продавец в магазине подарков`,situation:`Вы ищете подарки для трёх членов семьи.`,goal:`Объяснить, кому какой подарок вы ищете, используя Dativ (meinem Vater, meiner Schwester…)`}},{id:`a2-04`,emoji:`🛋️`,title:`Где? Куда?`,de:`Wo oder wohin?`,goal:`Описывать расположение предметов: предлоги с Dativ и Akkusativ`,grammar:{title:`Wechselpräpositionen — двойные предлоги`,points:[`Предлоги **in, an, auf, über, unter, vor, hinter, neben, zwischen** требуют двух падежей.`,`**Wo?** (где? — место) → **Dativ**: Das Buch liegt **auf dem** Tisch.`,`**Wohin?** (куда? — направление) → **Akkusativ**: Ich lege das Buch **auf den** Tisch.`,`Пары глаголов: **legen** (класть) → **liegen** (лежать); **stellen** (ставить) → **stehen** (стоять); **hängen** (вешать/висеть); **setzen** (сажать) → **sitzen** (сидеть).`,`Слияния: in dem = **im**, an dem = **am**, in das = **ins**, an das = **ans**.`],table:[[``,`Wohin? (Akk.)`,`Wo? (Dat.)`],[`der Tisch`,`auf den Tisch`,`auf dem Tisch`],[`die Wand`,`an die Wand`,`an der Wand`],[`das Regal`,`ins Regal`,`im Regal`]]},words:`
legen|класть
liegen|лежать
stellen|ставить
stehen|стоять
hängen|вешать; висеть
auf|на (поверхности)
unter|под
neben|рядом с
zwischen|между
hinter|за, позади
vor|перед
über|над
das Regal, -e|полка, стеллаж
der Schrank, -¨e|шкаф
die Wand, -¨e|стена
der Schlüssel, -|ключ
`,phrases:`
Wo ist mein Schlüssel?|Где мой ключ?
Der Schlüssel liegt auf dem Tisch.|Ключ лежит на столе.
Ich lege das Handy auf den Tisch.|Я кладу телефон на стол.
Das Bild hängt an der Wand.|Картина висит на стене.
Stell die Flasche in den Kühlschrank!|Поставь бутылку в холодильник!
Die Katze schläft unter dem Bett.|Кошка спит под кроватью.
Die Lampe steht neben dem Sofa.|Лампа стоит рядом с диваном.
Wohin soll ich den Stuhl stellen?|Куда мне поставить стул?
`,gaps:`
Das Buch liegt auf {dem} Tisch.|Книга лежит на столе.|dem,den,der
Ich lege das Buch auf {den} Tisch.|Я кладу книгу на стол.|den,dem,der
Ich hänge das Bild an {die} Wand.|Я вешаю картину на стену.|die,der,den
Die Milch steht {im} Kühlschrank.|Молоко стоит в холодильнике.|im,ins,in
Ich {stelle} die Vase auf den Tisch.|Я ставлю вазу на стол.|stelle,stehe,liege
Die Katze {liegt} auf dem Sofa.|Кошка лежит на диване.|liegt,legt,stellt
`,dialogTitle:`Переезд`,dialog:`
A:Wohin soll ich den Karton stellen?|Куда поставить коробку?
B:Stell ihn bitte in die Küche, neben den Kühlschrank.|Поставь её, пожалуйста, на кухню, рядом с холодильником.
A:Okay. Und das Bild?|Хорошо. А картину?
B:Häng es an die Wand über dem Sofa.|Повесь её на стену над диваном.
A:Wo ist eigentlich der Hammer?|А где, кстати, молоток?
B:Er liegt im Bad, auf der Waschmaschine.|Он в ванной, на стиральной машине.
A:Gefunden! Sieht toll aus!|Нашёл! Выглядит классно!
`,roleplay:{role:`друг, который помогает вам переезжать и постоянно спрашивает, куда что ставить`,situation:`День переезда в новую квартиру, вокруг коробки.`,goal:`Объяснить, куда поставить/повесить/положить 4 вещи и где лежат инструменты`}},{id:`a2-05`,emoji:`💼`,title:`Работа и профессии`,de:`Arbeit und Beruf`,goal:`Рассказать о работе, объяснить причины: weil, dass`,grammar:{title:`Придаточные с weil и dass`,points:[`В придаточном предложении **спрягаемый глагол уходит в конец**: Ich lerne Deutsch, **weil** ich in Deutschland **arbeite**.`,`**weil** = потому что; **dass** = что (Ich glaube, **dass** der Job interessant **ist**).`,`С модальным или Perfekt в конце стоит вспомогательный глагол: …, weil ich früh aufstehen **muss**. …, dass er gekündigt **hat**.`,`Отделяемые приставки в придаточном не отделяются: …, weil die Arbeit um 7 Uhr **anfängt**.`,`**denn** тоже значит «потому что», но порядок слов обычный: …, **denn** ich **arbeite** in Berlin.`]},words:`
der Beruf, -e|профессия
die Arbeit|работа
die Firma, Firmen|фирма
der Kollege, -n|коллега (м.)
die Kollegin, -nen|коллега (ж.)
der Chef, -s|начальник
das Gehalt, -¨er|зарплата
der Lehrer, -|учитель
der Ingenieur, -e|инженер
die Krankenpflegerin, -nen|медсестра
der Programmierer, -|программист
verdienen|зарабатывать
weil|потому что
dass|что (союз)
interessant|интересный
anstrengend|утомительный
`,phrases:`
Was sind Sie von Beruf?|Кем Вы работаете?
Ich bin Ingenieurin von Beruf.|По профессии я инженер.
Ich arbeite bei einer großen Firma.|Я работаю в большой фирме.
Ich mag meinen Job, weil er interessant ist.|Мне нравится моя работа, потому что она интересная.
Ich glaube, dass das Gehalt gut ist.|Я думаю, что зарплата хорошая.
Meine Kollegen sind sehr nett.|Мои коллеги очень милые.
Ich bin müde, weil ich viel gearbeitet habe.|Я устал, потому что много работал.
Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.|Я учу немецкий, потому что хочу работать в Германии.
`,gaps:`
Ich bleibe zu Hause, weil ich krank {bin}.|Я остаюсь дома, потому что болен.|bin,ist,sein
Er sagt, dass er keine Zeit {hat}.|Он говорит, что у него нет времени.|hat,habe,haben
Ich weiß, {dass} du recht hast.|Я знаю, что ты прав.|dass,weil,denn
Sie ist müde, {weil} sie viel arbeitet.|Она устала, потому что много работает.|weil,dass,denn
Ich lerne viel, {denn} ich habe morgen eine Prüfung.|Я много учусь, ведь завтра экзамен.|denn,weil,dass
Ich komme zu spät, weil der Bus nicht {gekommen ist}.|Я опаздываю, потому что автобус не пришёл.|gekommen ist,ist gekommen,kommt ist
`,dialogTitle:`Новая работа`,dialog:`
A:Ich habe gehört, dass du eine neue Stelle hast!|Я слышал, что у тебя новая работа!
B:Ja! Ich arbeite jetzt als Programmiererin bei einer Firma in München.|Да! Теперь я работаю программистом в фирме в Мюнхене.
A:Gratuliere! Warum hast du gewechselt?|Поздравляю! Почему ты сменила работу?
B:Weil ich mehr verdienen wollte und weil die Arbeit interessanter ist.|Потому что хотела больше зарабатывать и потому что работа интереснее.
A:Und wie sind die Kollegen?|А какие коллеги?
B:Super nett! Ich glaube, dass ich dort viel lernen kann.|Очень милые! Думаю, что смогу там многому научиться.
`,roleplay:{role:`сотрудник кадрового агентства Frau Schneider`,situation:`Первая консультация в кадровом агентстве: вы ищете работу в Германии.`,goal:`Рассказать о профессии и опыте, объяснить, почему ищете новую работу (weil, dass)`}},{id:`a2-06`,emoji:`🏙️`,title:`Город или деревня?`,de:`Stadt oder Land?`,goal:`Сравнивать: сравнительная и превосходная степень`,grammar:{title:`Komparativ и Superlativ`,points:[`Сравнительная степень: **+ er**: schnell → schnell**er**, billig → billig**er**. Сравнение: **als**: Berlin ist größer **als** München. Равенство: **so … wie**: Ich bin **so** groß **wie** du.`,`Превосходная: **am + -sten**: am schnell**sten**, am billig**sten**. Перед существительным: **der schnellste** Zug.`,`Короткие слова часто получают умлаут: alt → **ä**lter → am **ä**ltesten; groß → **gr**ö**ßer**; jung → j**ü**nger.`,`Исключения: **gut → besser → am besten**, **viel → mehr → am meisten**, **gern → lieber → am liebsten**, hoch → höher, nah → näher → am nächsten.`],table:[[``,`Komparativ`,`Superlativ`],[`klein`,`kleiner`,`am kleinsten`],[`alt`,`älter`,`am ältesten`],[`gut`,`besser`,`am besten`],[`viel`,`mehr`,`am meisten`],[`gern`,`lieber`,`am liebsten`]]},words:`
das Land|деревня, сельская местность; страна
das Dorf, -¨er|деревня
die Natur|природа
der Verkehr|движение, транспорт
ruhig|тихий
laut|шумный
schnell|быстрый
langsam|медленный
günstig|выгодный, недорогой
sauber|чистый
gefährlich|опасный
besser|лучше
am besten|лучше всего
mehr|больше
als|чем
wie|как
`,phrases:`
Das Leben auf dem Land ist ruhiger als in der Stadt.|Жизнь в деревне спокойнее, чем в городе.
In der Stadt ist alles schneller.|В городе всё быстрее.
Die Mieten sind in München am höchsten.|Аренда выше всего в Мюнхене.
Ich wohne lieber in der Stadt.|Мне больше нравится жить в городе.
Mein Bruder ist älter als ich.|Мой брат старше меня.
Das Fahrrad ist so schnell wie der Bus.|Велосипед такой же быстрый, как автобус.
Was gefällt dir am besten?|Что тебе нравится больше всего?
Hier gibt es mehr Natur und weniger Verkehr.|Здесь больше природы и меньше транспорта.
`,gaps:`
Berlin ist größer {als} Hamburg.|Берлин больше, чем Гамбург.|als,wie,dann
Anna ist so alt {wie} ich.|Анна такого же возраста, как я.|wie,als,so
Kaffee schmeckt mir {besser} als Tee.|Кофе мне нравится больше чая.|besser,guter,gutter
Im Dorf ist es {ruhiger}.|В деревне тише.|ruhiger,mehr ruhig,ruhigster
Der ICE ist am {schnellsten}.|ICE быстрее всех.|schnellsten,schneller,schnellste
Ich trinke {lieber} Tee.|Я больше люблю чай.|lieber,gerner,mehr gern
`,dialogTitle:`Переезд за город?`,dialog:`
A:Wir wollen aufs Land ziehen. Was denkst du?|Мы хотим переехать за город. Что думаешь?
B:Auf dem Land ist es ruhiger und die Luft ist sauberer.|За городом спокойнее и воздух чище.
A:Ja, und die Häuser sind günstiger als in der Stadt.|Да, и дома дешевле, чем в городе.
B:Aber der Weg zur Arbeit ist länger.|Но дорога на работу длиннее.
A:Stimmt. Mit dem Zug brauche ich eine Stunde.|Верно. На поезде мне нужен час.
B:Für die Kinder ist das Land vielleicht am besten.|Для детей деревня, пожалуй, лучше всего.
`,roleplay:{role:`друг-горожанин, который обожает большой город и спорит с вами`,situation:`Вы обсуждаете, где лучше жить — в мегаполисе или в деревне.`,goal:`Привести 3 сравнения (Komparativ) и назвать, что для вас «am wichtigsten»`}},{id:`a2-07`,emoji:`🪥`,title:`Утро и привычки`,de:`Mein Morgen`,goal:`Описывать рутину с возвратными глаголами`,grammar:{title:`Возвратные глаголы (sich)`,points:[`Русское «-ся» в немецком — местоимение **sich**: sich waschen (умываться), sich anziehen (одеваться).`,`Местоимение меняется по лицам: ich wasche **mich**, du wäschst **dich**, er wäscht **sich**, wir waschen **uns**, ihr wascht **euch**, sie waschen **sich**.`,`Если есть ещё объект, местоимение в Dativ: Ich putze **mir** die Zähne. Ich wasche **mir** die Hände.`,`Глаголы с предлогами: sich freuen **auf** (ждать с радостью) / **über** (радоваться чему-то), sich interessieren **für**, sich ärgern **über**.`],table:[[``,`Akkusativ`,`Dativ`],[`ich`,`mich`,`mir`],[`du`,`dich`,`dir`],[`er/sie/es`,`sich`,`sich`],[`wir`,`uns`,`uns`],[`ihr`,`euch`,`euch`],[`sie/Sie`,`sich`,`sich`]]},words:`
sich waschen|умываться
sich duschen|принимать душ
sich anziehen|одеваться
sich beeilen|торопиться
sich freuen|радоваться
sich ärgern|злиться
sich interessieren|интересоваться
sich ausruhen|отдыхать
sich treffen|встречаться
die Zähne putzen|чистить зубы
sich kämmen|причёсываться
der Wecker, -|будильник
müde|уставший
pünktlich|пунктуальный, вовремя
`,phrases:`
Ich dusche mich jeden Morgen.|Я принимаю душ каждое утро.
Ich putze mir die Zähne.|Я чищу зубы.
Beeil dich, wir sind spät dran!|Поторопись, мы опаздываем!
Ich freue mich auf das Wochenende.|Я жду не дождусь выходных.
Er interessiert sich für Politik.|Он интересуется политикой.
Wir treffen uns um acht vor dem Kino.|Встречаемся в восемь перед кинотеатром.
Ich ärgere mich über den Lärm.|Меня злит шум.
Am Sonntag ruhe ich mich aus.|В воскресенье я отдыхаю.
`,gaps:`
Ich wasche {mich}.|Я умываюсь.|mich,mir,sich
Du musst {dich} beeilen!|Тебе нужно поторопиться!|dich,dir,sich
Er zieht {sich} an.|Он одевается.|sich,ihn,ihm
Wir freuen {uns} auf den Urlaub.|Мы ждём отпуск.|uns,euch,sich
Ich putze {mir} die Zähne.|Я чищу зубы.|mir,mich,sich
Interessierst du dich {für} Kunst?|Ты интересуешься искусством?|für,auf,über
`,dialogTitle:`Утренний хаос`,dialog:`
A:Bist du schon fertig? Wir müssen los!|Ты уже готов? Нам пора!
B:Moment! Ich dusche mich noch.|Минутку! Я ещё в душе.
A:Beeil dich! Der Bus kommt in zehn Minuten.|Поторопись! Автобус через десять минут.
B:Ich ziehe mich schnell an. Wo ist mein Pullover?|Быстро одеваюсь. Где мой свитер?
A:Auf dem Stuhl. Hast du dir die Zähne geputzt?|На стуле. Ты почистил зубы?
B:Ja, ja! Ich bin fertig. Los geht's!|Да-да! Я готов. Поехали!
A:Endlich! Ich freue mich so auf den Ausflug!|Наконец-то! Я так жду эту поездку!
`,roleplay:{role:`фитнес-тренер, который составляет вам режим дня`,situation:`Консультация: тренер хочет понять ваши утренние привычки.`,goal:`Описать своё утро возвратными глаголами и сказать, чему вы радуетесь (sich freuen auf)`}},{id:`a2-08`,emoji:`🧥`,title:`Внешность и характер`,de:`Aussehen und Charakter`,goal:`Описывать людей и вещи: окончания прилагательных`,grammar:{title:`Склонение прилагательных (основное)`,points:[`Перед существительным прилагательное получает окончание. Главное правило: **после der/die/das** чаще всего **-e**, в остальных падежах **-en**: der nett**e** Mann, die nett**e** Frau, das nett**e** Kind; mit dem nett**en** Mann.`,`После **ein/kein/mein** прилагательное «показывает род», если артикль этого не сделал: ein nett**er** Mann, eine nett**e** Frau, ein nett**es** Kind.`,`Akkusativ мужской род: einen nett**en** Mann, den nett**en** Mann.`,`Совет: **-en** — самое частое окончание. Если сомневаетесь в Dativ или мн. ч. — ставьте -en.`],table:[[`Nom.`,`der große Mann`,`ein großer Mann`],[``,`die kleine Frau`,`eine kleine Frau`],[``,`das schöne Kind`,`ein schönes Kind`],[`Akk.`,`den großen Mann`,`einen großen Mann`],[`Dat.`,`dem großen Mann`,`einem großen Mann`]]},words:`
das Aussehen|внешность
der Charakter, -e|характер
die Haare|волосы
blond|светловолосый
lockig|кудрявый
schlank|стройный
hübsch|симпатичный
freundlich|дружелюбный
lustig|весёлый
ehrlich|честный
fleißig|трудолюбивый
faul|ленивый
ernst|серьёзный
geduldig|терпеливый
die Brille, -n|очки
der Bart, -¨e|борода
`,phrases:`
Wie sieht er aus?|Как он выглядит?
Er hat kurze, schwarze Haare.|У него короткие чёрные волосы.
Sie trägt eine runde Brille.|Она носит круглые очки.
Mein Bruder ist ein sehr lustiger Mensch.|Мой брат очень весёлый человек.
Ich suche einen ehrlichen Partner.|Я ищу честного партнёра.
Das ist eine gute Idee!|Это хорошая идея!
Sie hat ein freundliches Lächeln.|У неё дружелюбная улыбка.
Der neue Kollege ist sehr fleißig.|Новый коллега очень трудолюбивый.
`,gaps:`
Das ist ein {netter} Mann.|Это милый мужчина.|netter,nette,netten
Ich habe eine {kleine} Wohnung.|У меня маленькая квартира.|kleine,kleiner,kleines
Sie hat ein {schönes} Kleid.|У неё красивое платье.|schönes,schöne,schöner
Ich kaufe einen {neuen} Computer.|Я покупаю новый компьютер.|neuen,neuer,neue
Der {alte} Mann wohnt hier.|Здесь живёт старый мужчина.|alte,alter,alten
Er spricht mit der {jungen} Frau.|Он говорит с молодой женщиной.|jungen,junge,junger
`,dialogTitle:`Кто это на фото?`,dialog:`
A:Wer ist der Mann mit dem langen Bart?|Кто этот мужчина с длинной бородой?
B:Das ist mein Onkel. Er ist ein sehr lustiger Typ.|Это мой дядя. Он очень весёлый тип.
A:Und die Frau mit der roten Jacke?|А женщина в красной куртке?
B:Das ist meine Cousine. Sie ist klug und sehr ehrlich.|Это моя двоюродная сестра. Она умная и очень честная.
A:Sie sieht sympathisch aus! Hat sie einen Freund?|Она выглядит симпатично! У неё есть парень?
B:Haha, ja, sie hat einen netten Freund aus Spanien.|Ха-ха, да, у неё милый парень из Испании.
`,roleplay:{role:`полицейский, который помогает найти потерявшегося друга (не опасная ситуация)`,situation:`На фестивале вы потеряли друга, полицейский просит описать его.`,goal:`Описать внешность, одежду и характер человека с правильными окончаниями прилагательных`}},{id:`a2-09`,emoji:`🧸`,title:`Детство`,de:`Meine Kindheit`,goal:`Вспоминать прошлое: war, hatte, модальные в прошедшем, als и wenn`,grammar:{title:`Präteritum: sein, haben, модальные; als / wenn`,points:[`Глаголы **sein, haben** и **модальные** в прошлом обычно ставят в **Präteritum**, даже в разговоре: ich **war**, ich **hatte**, ich **konnte**, ich **musste**, ich **wollte**, ich **durfte**.`,`Окончания: ich war, du war**st**, er war, wir war**en**, ihr war**t**, sie war**en**. (1-е и 3-е лицо ед. ч. одинаковые!)`,`**als** — одно событие в прошлом: **Als** ich zehn **war**, bekam ich einen Hund.`,`**wenn** — повторяющееся («каждый раз, когда») или настоящее/будущее: **Wenn** ich Oma besuchte, backte sie Kuchen.`],table:[[``,`sein`,`haben`,`können`,`müssen`],[`ich`,`war`,`hatte`,`konnte`,`musste`],[`du`,`warst`,`hattest`,`konntest`,`musstest`],[`er/sie`,`war`,`hatte`,`konnte`,`musste`],[`wir`,`waren`,`hatten`,`konnten`,`mussten`]]},words:`
die Kindheit|детство
als Kind|в детстве
war|был (sein)
hatte|имел (haben)
konnte|мог
musste|должен был
wollte|хотел
durfte|разрешалось
das Spielzeug, -e|игрушка
der Kindergarten, -¨|детский сад
die Grundschule, -n|начальная школа
der Nachbar, -n|сосед
früher|раньше
damals|тогда
`,phrases:`
Als Kind war ich sehr schüchtern.|В детстве я был очень застенчивым.
Ich hatte einen kleinen Hund.|У меня была маленькая собака.
Als ich sechs war, bin ich in die Schule gekommen.|Когда мне было шесть, я пошёл в школу.
Wenn es geschneit hat, haben wir Schneemänner gebaut.|Когда шёл снег, мы лепили снеговиков.
Ich durfte nicht lange fernsehen.|Мне нельзя было долго смотреть телевизор.
Ich wollte Astronaut werden.|Я хотел стать космонавтом.
Früher konnte ich nicht schwimmen.|Раньше я не умел плавать.
Damals gab es noch keine Handys.|Тогда ещё не было мобильных телефонов.
`,gaps:`
Als Kind {war} ich oft krank.|В детстве я часто болел.|war,bin,wäre
Wir {hatten} einen großen Garten.|У нас был большой сад.|hatten,haben,hatte
{Als} ich klein war, wohnten wir in Kiew.|Когда я был маленьким, мы жили в Киеве.|Als,Wenn,Wann
{Wenn} es regnete, spielten wir drinnen.|Когда шёл дождь, мы играли дома.|Wenn,Als,Wann
Ich {musste} jeden Tag Klavier üben.|Мне приходилось каждый день заниматься на фортепиано.|musste,muss,müsste
Du {warst} ein süßes Kind!|Ты был милым ребёнком!|warst,war,wart
`,dialogTitle:`Старые фото`,dialog:`
A:Bist du das auf dem Foto? Wie alt warst du da?|Это ты на фото? Сколько тебе тогда было?
B:Da war ich ungefähr fünf. Wir wohnten damals auf dem Land.|Тут мне примерно пять. Мы тогда жили в деревне.
A:Süß! Was hast du als Kind gern gemacht?|Мило! Что ты любил делать в детстве?
B:Ich war immer draußen. Wir hatten Hühner und eine Katze.|Я всегда был на улице. У нас были куры и кошка.
A:Und was wolltest du werden?|А кем ты хотел стать?
B:Als ich klein war, wollte ich Tierarzt werden!|Когда я был маленьким, хотел стать ветеринаром!
`,roleplay:{role:`внук, который берёт у вас интервью для школьного проекта «Как жили раньше»`,situation:`Школьный проект о детстве разных поколений.`,goal:`Рассказать о детстве с war/hatte/konnte/musste и предложениями с als и wenn`}},{id:`a2-10`,emoji:`🥂`,title:`Праздники и приглашения`,de:`Feste und Einladungen`,goal:`Вежливо приглашать, принимать и отклонять: Konjunktiv II`,grammar:{title:`Вежливость: würde, könnte, hätte gern`,points:[`Чтобы звучать вежливо, используем **Konjunktiv II**: **Könnten Sie** mir helfen? **Würden Sie** bitte das Fenster schließen? **Ich hätte gern** ein Glas Wasser.`,`**würde + инфинитив** = «бы»: Ich **würde** gern **kommen**, aber ich habe keine Zeit.`,`Предложение: **Hättest du Lust**, ins Kino zu gehen? Совет: **Du solltest** … (тебе следовало бы).`,`Формы: ich würde / könnte / hätte / wäre / sollte, du würdest / könntest / hättest / wärst.`]},words:`
das Fest, -e|праздник
die Einladung, -en|приглашение
einladen|приглашать
feiern|праздновать
die Hochzeit, -en|свадьба
Weihnachten|Рождество
Silvester|Новый год (31 декабря)
Ostern|Пасха
gratulieren|поздравлять
würde|бы (вежливо)
könnte|мог бы
hätte gern|хотел бы (иметь)
leider|к сожалению
die Lust|желание, охота
`,phrases:`
Ich möchte dich zu meiner Party einladen.|Я хочу пригласить тебя на вечеринку.
Hättest du Lust, am Samstag zu kommen?|Не хочешь прийти в субботу?
Ich würde gern kommen, aber ich habe leider keine Zeit.|Я бы с удовольствием пришёл, но, к сожалению, нет времени.
Könntest du einen Salat mitbringen?|Ты мог бы принести салат?
Herzlichen Glückwunsch zur Hochzeit!|Поздравляю со свадьбой!
Frohe Weihnachten und ein gutes neues Jahr!|Счастливого Рождества и хорошего нового года!
Vielen Dank für die Einladung!|Большое спасибо за приглашение!
Würden Sie mir bitte helfen?|Не могли бы Вы мне помочь?
`,gaps:`
{Könnten} Sie mir bitte helfen?|Не могли бы Вы мне помочь?|Könnten,Können,Konnten
Ich {würde} gern mitkommen.|Я бы с удовольствием пошёл.|würde,werde,wurde
Ich {hätte} gern einen Tee.|Я бы хотел чаю.|hätte,habe,hatte
{Hättest} du Lust auf Kino?|Не хочешь в кино?|Hättest,Hast,Hattest
Herzlichen Glückwunsch {zum} Geburtstag!|С днём рождения!|zum,zur,für
Ich lade dich {zu} meiner Party ein.|Приглашаю тебя на вечеринку.|zu,auf,in
`,dialogTitle:`Приглашение на день рождения`,dialog:`
A:Hey! Ich feiere am Samstag meinen dreißigsten Geburtstag. Hättest du Lust zu kommen?|Привет! В субботу я праздную 30-летие. Хочешь прийти?
B:Oh, vielen Dank für die Einladung! Ich komme sehr gern.|Ой, спасибо за приглашение! С удовольствием приду.
A:Super! Könntest du vielleicht einen Kuchen mitbringen?|Супер! Ты не мог бы принести торт?
B:Klar! Welchen Kuchen hättest du gern?|Конечно! Какой торт ты бы хотел?
A:Schokoladenkuchen wäre toll!|Шоколадный был бы супер!
B:Kein Problem. Um wie viel Uhr soll ich da sein?|Без проблем. Во сколько мне быть?
A:Ab acht Uhr. Ich freue mich!|С восьми. Я рад!
`,roleplay:{role:`коллега Julia, которая организует новогоднюю вечеринку`,situation:`Коллега приглашает вас на корпоратив и просит помочь с подготовкой.`,goal:`Вежливо ответить на приглашение, предложить помощь и задать вопросы (könnte, würde, hätte gern)`}}],p=[{id:`b1-01`,emoji:`🧑‍🤝‍🧑`,title:`Люди, которые…`,de:`Menschen, die ich mag`,goal:`Точно описывать людей и вещи с помощью относительных придаточных`,grammar:{title:`Relativsätze — относительные придаточные`,points:[`Относительное местоимение (= «который») похоже на артикль: **der, die, das, die** (мн. ч.). Род берём от слова, к которому относимся, а **падеж — по роли в придаточном**.`,`Der Mann, **der** dort steht, ist mein Chef. (Nom.) / Der Mann, **den** ich gestern getroffen habe… (Akk.) / Der Mann, **dem** ich helfe… (Dat.)`,`Глагол — в конце придаточного. Придаточное выделяется запятыми.`,`С предлогом: Die Frau, **mit der** ich arbeite… Das Haus, **in dem** ich wohne… (= **wo** ich wohne).`,`Внимание: Dativ мн. ч. — **denen**: Die Freunde, mit **denen** ich reise…`],table:[[``,`м.`,`ж.`,`ср.`,`мн.`],[`Nom.`,`der`,`die`,`das`,`die`],[`Akk.`,`den`,`die`,`das`,`die`],[`Dat.`,`dem`,`der`,`dem`,`denen`]]},words:`
der Mensch, -en|человек
die Beziehung, -en|отношения
die Freundschaft, -en|дружба
der Bekannte, -n|знакомый
vertrauen|доверять
sich verlassen auf|полагаться на
zuverlässig|надёжный
hilfsbereit|готовый помочь
neugierig|любопытный
selbstbewusst|уверенный в себе
die Eigenschaft, -en|качество, черта
kennenlernen|знакомиться
sich verstehen|ладить, понимать друг друга
der Streit|ссора
`,phrases:`
Ein guter Freund ist jemand, der immer zuhört.|Хороший друг — это тот, кто всегда выслушает.
Das ist die Frau, die ich im Urlaub kennengelernt habe.|Это женщина, с которой я познакомился в отпуске.
Der Kollege, dem ich geholfen habe, hat mir Schokolade geschenkt.|Коллега, которому я помог, подарил мне шоколад.
Ich suche eine Wohnung, die nicht so teuer ist.|Я ищу квартиру, которая не так дорога.
Das ist das Café, in dem wir uns zum ersten Mal getroffen haben.|Это кафе, в котором мы впервые встретились.
Die Leute, mit denen ich arbeite, sind sehr hilfsbereit.|Люди, с которыми я работаю, очень отзывчивые.
Auf meine Schwester kann ich mich immer verlassen.|На сестру я всегда могу положиться.
Wir verstehen uns sehr gut.|Мы очень хорошо ладим.
`,gaps:`
Der Mann, {der} dort sitzt, ist mein Lehrer.|Мужчина, который там сидит, — мой учитель.|der,den,dem
Das Buch, {das} ich lese, ist spannend.|Книга, которую я читаю, захватывающая.|das,die,dem
Die Frau, {der} ich helfe, ist meine Nachbarin.|Женщина, которой я помогаю, — моя соседка.|der,die,denen
Der Film, {den} wir gesehen haben, war super.|Фильм, который мы посмотрели, был супер.|den,der,dem
Das sind die Freunde, mit {denen} ich reise.|Это друзья, с которыми я путешествую.|denen,den,die
Die Stadt, in {der} ich geboren bin, ist klein.|Город, в котором я родился, маленький.|der,die,dem
`,dialogTitle:`Лучший друг`,dialog:`
A:Wer ist eigentlich dein bester Freund?|А кто вообще твой лучший друг?
B:Das ist Daniel, den ich schon seit der Schule kenne.|Это Даниэль, которого я знаю ещё со школы.
A:Was magst du an ihm?|Что тебе в нём нравится?
B:Er ist jemand, auf den man sich immer verlassen kann.|Он человек, на которого всегда можно положиться.
A:Habt ihr euch nie gestritten?|Вы никогда не ссорились?
B:Doch, einmal – wegen eines Mädchens, das wir beide toll fanden!|Было разок — из-за девушки, которая нам обоим нравилась!
A:Und wer hat gewonnen?|И кто победил?
B:Keiner! Sie hat einen Typen geheiratet, den wir beide nicht kannten.|Никто! Она вышла за парня, которого мы оба не знали.
`,roleplay:{role:`психолог-коуч, проводящий беседу о дружбе и отношениях`,situation:`Вы участвуете в тренинге «Люди в моей жизни».`,goal:`Описать 3 важных человека с помощью относительных придаточных (der/den/dem…)`}},{id:`b1-02`,emoji:`📜`,title:`Истории и легенды`,de:`Geschichten erzählen`,goal:`Рассказывать истории в письменном прошедшем времени (Präteritum)`,grammar:{title:`Präteritum — время рассказов`,points:[`В книгах, новостях, сказках прошлое — в **Präteritum**: Es **war** einmal ein König…`,`Слабые глаголы: основа + **-te**: machen → mach**te**, wohnen → wohn**te**, arbeiten → arbeit**ete**.`,`Сильные глаголы меняют корень, в 1-м/3-м лице без окончания: gehen → **ging**, kommen → **kam**, sehen → **sah**, finden → **fand**, sprechen → **sprach**, nehmen → **nahm**, laufen → **lief**, sitzen → **saß**, stehen → **stand**, rufen → **rief**.`,`Смешанные: denken → **dachte**, bringen → **brachte**, wissen → **wusste**, kennen → **kannte**.`,`Окончания: ich ging, du ging**st**, er ging, wir ging**en**, ihr ging**t**, sie ging**en**.`],table:[[`Инфинитив`,`Präteritum`,`Perfekt`],[`gehen`,`ging`,`ist gegangen`],[`kommen`,`kam`,`ist gekommen`],[`sehen`,`sah`,`hat gesehen`],[`finden`,`fand`,`hat gefunden`],[`denken`,`dachte`,`hat gedacht`],[`werden`,`wurde`,`ist geworden`]]},words:`
das Märchen, -|сказка
die Geschichte, -n|история
der König, -e|король
die Prinzessin, -nen|принцесса
der Wald, -¨er|лес
die Hexe, -n|ведьма
plötzlich|вдруг
endlich|наконец
ging|шёл (gehen)
kam|пришёл (kommen)
sah|увидел (sehen)
fand|нашёл (finden)
sagte|сказал (sagen)
dachte|думал (denken)
lief|бежал (laufen)
wurde|стал (werden)
`,phrases:`
Es war einmal ein armer Müller.|Жил-был бедный мельник.
Eines Tages ging er in den Wald.|Однажды он пошёл в лес.
Plötzlich sah er ein kleines Haus.|Вдруг он увидел маленький домик.
Die Tür war offen, also trat er ein.|Дверь была открыта, поэтому он вошёл.
Er dachte, dass niemand zu Hause war.|Он думал, что никого нет дома.
Da kam eine alte Frau aus der Küche.|Тут из кухни вышла старуха.
Sie lachte und sagte kein Wort.|Она засмеялась и не сказала ни слова.
Und wenn sie nicht gestorben sind, dann leben sie noch heute.|И если они не умерли, то живут и сейчас.
`,gaps:`
Es {war} einmal eine Prinzessin.|Жила-была принцесса.|war,ist,wäre
Der Junge {ging} in den Wald.|Мальчик пошёл в лес.|ging,gehte,gang
Plötzlich {sah} er einen Wolf.|Вдруг он увидел волка.|sah,seht,sehte
Sie {fand} einen goldenen Schlüssel.|Она нашла золотой ключ.|fand,findete,fund
Wir {wohnten} damals in Dresden.|Мы жили тогда в Дрездене.|wohnten,wohnen,wohnte
Er {dachte} lange nach.|Он долго размышлял.|dachte,denkte,dacht
`,dialogTitle:`Странный случай`,dialog:`
A:Du siehst blass aus. Was ist passiert?|Ты бледный. Что случилось?
B:Gestern Nacht hörte ich ein Geräusch in der Küche.|Вчера ночью я услышал шум на кухне.
A:Oh nein! Was hast du gemacht?|О нет! Что ты сделал?
B:Ich nahm eine Taschenlampe und ging langsam nach unten.|Я взял фонарик и медленно спустился вниз.
A:Und? Wer war da?|И? Кто там был?
B:Der Kühlschrank stand offen, und vor ihm saß … meine Katze mit einer Wurst!|Холодильник был открыт, а перед ним сидела… моя кошка с колбасой!
A:Haha! Was für eine Geschichte!|Ха-ха! Вот это история!
`,roleplay:{role:`слушатель у костра, который просит рассказать страшную или смешную историю`,situation:`Вечер у костра в кемпинге, все по очереди рассказывают истории.`,goal:`Рассказать связную историю в Präteritum (минимум 6 предложений), отвечая на уточняющие вопросы`}},{id:`b1-03`,emoji:`♻️`,title:`Экология`,de:`Umwelt und Recycling`,goal:`Описывать процессы: пассивный залог`,grammar:{title:`Passiv: werden + Partizip II`,points:[`Пассив важен, когда интересно **действие**, а не кто его делает: Der Müll **wird getrennt**. (Мусор сортируется.)`,`Präsens: **werden** (2-е место) + Partizip II (в конце): Papier **wird** recycelt. Flaschen **werden** gesammelt.`,`Präteritum: **wurde**: Das Haus **wurde** 1900 **gebaut**.`,`Кем? **von** + Dativ: Die Bäume werden **von** Freiwilligen gepflanzt.`,`С модальными: muss + Partizip II + **werden**: Plastik **muss** reduziert **werden**.`],table:[[``,`werden`,`Präteritum`],[`ich`,`werde`,`wurde`],[`du`,`wirst`,`wurdest`],[`er/sie/es`,`wird`,`wurde`],[`wir/sie`,`werden`,`wurden`]]},words:`
die Umwelt|окружающая среда
der Müll|мусор
trennen|разделять, сортировать
recyceln|перерабатывать
die Verpackung, -en|упаковка
das Plastik|пластик
die Energie, -n|энергия
sparen|экономить
der Klimawandel|изменение климата
schützen|защищать
verschmutzen|загрязнять
die Luft|воздух
erneuerbar|возобновляемый
nachhaltig|устойчивый, экологичный
die Mülltonne, -n|мусорный бак
das Pfand|залог (за бутылку)
`,phrases:`
In Deutschland wird der Müll getrennt.|В Германии мусор сортируют.
Papier wird in die blaue Tonne geworfen.|Бумагу выбрасывают в синий бак.
Für Flaschen wird Pfand bezahlt.|За бутылки платится залог.
Plastik muss reduziert werden.|Пластик нужно сокращать.
Die Luft wird durch Autos verschmutzt.|Воздух загрязняется автомобилями.
Hier wurde ein neuer Park gebaut.|Здесь построили новый парк.
Wie kann Energie gespart werden?|Как можно экономить энергию?
Ich versuche, nachhaltig zu leben.|Я стараюсь жить экологично.
`,gaps:`
Der Müll {wird} jeden Montag abgeholt.|Мусор вывозят каждый понедельник.|wird,werden,ist
Die Flaschen werden {gesammelt}.|Бутылки собирают.|gesammelt,sammeln,gesammelten
Das Haus {wurde} 1890 gebaut.|Дом построен в 1890 году.|wurde,wird,würde
Die Bäume werden {von} Kindern gepflanzt.|Деревья сажают дети.|von,durch,mit
Energie muss gespart {werden}.|Энергию нужно экономить.|werden,wird,worden
Hier {werden} Bio-Produkte verkauft.|Здесь продаются био-продукты.|werden,wird,wurde
`,dialogTitle:`Новый сосед и мусор`,dialog:`
A:Entschuldigung, Sie haben die Flasche in den Restmüll geworfen.|Извините, Вы выбросили бутылку в общий мусор.
B:Oh! Wie wird der Müll hier denn getrennt?|Ой! А как здесь сортируют мусор?
A:Papier kommt in die blaue Tonne, Verpackungen in die gelbe.|Бумага — в синий бак, упаковка — в жёлтый.
B:Und was wird mit Glas gemacht?|А что делают со стеклом?
A:Glas wird zum Container an der Ecke gebracht. Und Pfandflaschen gibt man im Supermarkt zurück.|Стекло относят в контейнер на углу. А бутылки с залогом сдают в супермаркете.
B:Danke! Das wusste ich nicht. Ich bin erst letzte Woche eingezogen.|Спасибо! Я не знал. Я въехал только на прошлой неделе.
`,roleplay:{role:`активист экологической организации, проводящий опрос на улице`,situation:`Опрос о привычках экономии ресурсов и сортировке мусора.`,goal:`Объяснить, как у вас сортируется мусор и экономится энергия, используя пассив`}},{id:`b1-04`,emoji:`🌠`,title:`Мечты и желания`,de:`Wünsche und Träume`,goal:`Говорить о нереальном: если бы…, я бы…`,grammar:{title:`Konjunktiv II — нереальные условия`,points:[`Нереальное условие: **Wenn** ich reich **wäre**, **würde** ich um die Welt **reisen**.`,`Формы: **wäre** (sein), **hätte** (haben), **könnte**, **müsste**, **dürfte**, **wüsste** (wissen), **käme** (kommen), **ginge** (gehen). Для остальных глаголов — **würde + инфинитив**.`,`Желание: **Wenn ich doch** mehr Zeit **hätte**! / **Ich wünschte**, ich **könnte** fliegen.`,`Совет: **An deiner Stelle würde ich** … (На твоём месте я бы…)`,`Порядок: придаточное с wenn первым → главное начинается с глагола: Wenn ich Zeit hätte, **würde** ich kommen.`]},words:`
der Wunsch, -¨e|желание
der Traum, -¨e|мечта, сон
träumen|мечтать, видеть сон
wäre|был бы
hätte|имел бы
würde|бы (вспомогательный)
reich|богатый
die Weltreise, -n|кругосветное путешествие
die Insel, -n|остров
im Lotto gewinnen|выиграть в лотерею
kündigen|уволиться
die Fähigkeit, -en|способность
unsichtbar|невидимый
an deiner Stelle|на твоём месте
`,phrases:`
Wenn ich reich wäre, würde ich ein Haus am Meer kaufen.|Если бы я был богат, я бы купил дом у моря.
Was würdest du machen, wenn du im Lotto gewinnen würdest?|Что бы ты сделал, если бы выиграл в лотерею?
Wenn ich mehr Zeit hätte, würde ich Gitarre lernen.|Если бы у меня было больше времени, я бы учился играть на гитаре.
Ich wünschte, ich könnte fliegen.|Хотел бы я уметь летать.
An deiner Stelle würde ich den Job wechseln.|На твоём месте я бы сменил работу.
Es wäre schön, wenn du mitkommen könntest.|Было бы здорово, если бы ты смог пойти с нами.
Wenn ich unsichtbar wäre, würde ich ins Kino gehen, ohne zu bezahlen.|Если бы я был невидимкой, я бы ходил в кино бесплатно.
Hätte ich das nur gewusst!|Знать бы мне это раньше!
`,gaps:`
Wenn ich Zeit {hätte}, würde ich dich besuchen.|Если бы у меня было время, я бы тебя навестил.|hätte,habe,hatte
Wenn er hier {wäre}, wäre alles einfacher.|Если бы он был здесь, всё было бы проще.|wäre,war,ist
Ich {würde} gern in Italien leben.|Я бы хотел жить в Италии.|würde,wurde,werde
An deiner Stelle {würde} ich zum Arzt gehen.|На твоём месте я бы пошёл к врачу.|würde,werde,wäre
Ich wünschte, ich {könnte} besser singen.|Хотел бы я петь лучше.|könnte,kann,konnte
Wenn ich das {wüsste}, würde ich es dir sagen.|Если бы я это знал, я бы тебе сказал.|wüsste,weiß,wusste
`,dialogTitle:`Если бы…`,dialog:`
A:Stell dir vor, du gewinnst eine Million. Was würdest du machen?|Представь, ты выиграл миллион. Что бы ты сделал?
B:Zuerst würde ich meinen Job kündigen!|Сначала я бы уволился!
A:Haha, und dann?|Ха-ха, а потом?
B:Dann würde ich eine Weltreise machen. Und du?|Потом я бы отправился в кругосветку. А ты?
A:Ich würde meinen Eltern ein Haus kaufen. Und wenn noch Geld übrig wäre, würde ich ein Café eröffnen.|Я бы купил родителям дом. А если бы остались деньги, открыл бы кафе.
B:Ein Café? Da würde ich jeden Tag kommen!|Кафе? Я бы приходил туда каждый день!
`,roleplay:{role:`ведущий весёлого подкаста «Was wäre, wenn…?»`,situation:`Вы гость подкаста, ведущий задаёт фантастические вопросы.`,goal:`Ответить на 4 вопроса «что бы ты сделал, если бы…» в Konjunktiv II и задать свой`}},{id:`b1-05`,emoji:`🎯`,title:`Цели и планы`,de:`Ziele und Pläne`,goal:`Выражать цель и намерение: zu + Infinitiv, um…zu, damit`,grammar:{title:`Инфинитив с zu, um … zu, damit`,points:[`После многих глаголов и выражений — **zu + инфинитив** в конце: Ich habe vor, Spanisch **zu lernen**. Es ist wichtig, regelmäßig **zu üben**. Hast du Lust, ins Kino **zu gehen**?`,`С отделяемой приставкой **zu** внутри: anzufangen, aufzustehen, einzukaufen.`,`Цель «чтобы»: **um … zu**, если субъект один: Ich lerne Deutsch, **um** in Deutschland **zu studieren**.`,`**damit**, если субъекты разные: Ich spreche langsam, **damit** du mich **verstehst**.`,`Модальные глаголы — **без zu**: Ich will lernen (не «zu lernen»).`]},words:`
das Ziel, -e|цель
der Plan, -¨e|план
vorhaben|намереваться
versuchen|пытаться
beschließen|решать
sich vornehmen|ставить себе цель
erreichen|достигать
aufhören|прекращать
die Prüfung, -en|экзамен
bestehen|сдать (экзамен)
um … zu|чтобы (одно лицо)
damit|чтобы (разные лица)
regelmäßig|регулярно
die Motivation|мотивация
`,phrases:`
Ich habe vor, nächstes Jahr in Wien zu studieren.|Я планирую в следующем году учиться в Вене.
Ich versuche, jeden Tag zwanzig Minuten zu lernen.|Я стараюсь заниматься каждый день по двадцать минут.
Ich lerne Deutsch, um bessere Chancen im Beruf zu haben.|Я учу немецкий, чтобы иметь лучшие шансы в профессии.
Ich habe beschlossen, mit dem Rauchen aufzuhören.|Я решил бросить курить.
Es ist nicht leicht, früh aufzustehen.|Нелегко рано вставать.
Ich erkläre es noch einmal, damit alle es verstehen.|Объясню ещё раз, чтобы все поняли.
Ich habe mir vorgenommen, mehr Sport zu machen.|Я решил больше заниматься спортом.
Um die Prüfung zu bestehen, muss ich viel üben.|Чтобы сдать экзамен, мне нужно много практиковаться.
`,gaps:`
Ich habe keine Lust, heute {zu kochen}.|Мне не хочется сегодня готовить.|zu kochen,kochen,gekocht
Er hat vergessen, die Tür {abzuschließen}.|Он забыл запереть дверь.|abzuschließen,zu abschließen,abschließen
Ich spare Geld, {um} ein Auto zu kaufen.|Я коплю деньги, чтобы купить машину.|um,damit,für
Ich gebe dir meine Nummer, {damit} du mich anrufen kannst.|Даю тебе номер, чтобы ты мог мне позвонить.|damit,um,dass
Ich möchte mehr {schlafen}.|Я хочу больше спать.|schlafen,zu schlafen,schlafe
Es ist wichtig, Pausen {zu machen}.|Важно делать перерывы.|zu machen,machen,gemacht
`,dialogTitle:`Новогодние обещания`,dialog:`
A:Hast du dir für das neue Jahr etwas vorgenommen?|Ты что-нибудь пообещал себе на новый год?
B:Ja! Ich habe vor, endlich den B1-Test zu machen.|Да! Я собираюсь наконец сдать экзамен B1.
A:Super! Und wie willst du das schaffen?|Супер! И как ты собираешься это осуществить?
B:Ich versuche, jeden Tag mit einer App zu üben, um meinen Wortschatz zu verbessern.|Стараюсь каждый день заниматься в приложении, чтобы расширить словарный запас.
A:Gute Idee. Ich spreche ab jetzt nur Deutsch mit dir, damit du mehr Praxis hast!|Хорошая идея. С этого момента говорю с тобой только по-немецки, чтобы у тебя было больше практики!
B:Abgemacht! Danke!|Договорились! Спасибо!
`,roleplay:{role:`коуч по личной эффективности`,situation:`Коучинг-сессия: вы ставите цели на год.`,goal:`Назвать 3 цели и объяснить, как и зачем вы их достигнете (vorhaben zu, um…zu, damit)`}},{id:`b1-06`,emoji:`🏢`,title:`Ведомства и бюрократия`,de:`Behörden und Ämter`,goal:`Справиться в учреждении: родительный падеж и предлоги wegen, trotz, während`,grammar:{title:`Genitiv и предлоги с ним`,points:[`**Genitiv** — «чей?»: das Auto **des** Mann**es**, die Tasche **der** Frau, das Spielzeug **des** Kind**es**, die Wohnung **der** Eltern.`,`Артикли: der/das → **des** (+ **-s/-es** у существительного), die/мн. ч. → **der**. Неопределённый: **eines** Freundes, **einer** Freundin.`,`Предлоги с Genitiv (официальный стиль): **wegen** (из-за), **trotz** (несмотря на), **während** (во время), **innerhalb** (в течение), **statt** (вместо).`,`В разговоре часто «von + Dativ»: das Auto **von meinem** Bruder.`]},words:`
die Behörde, -n|ведомство
das Amt, -¨er|учреждение, ведомство
das Formular, -e|бланк, анкета
ausfüllen|заполнять
der Antrag, -¨e|заявление
beantragen|подавать заявление на
die Unterschrift, -en|подпись
der Ausweis, -e|удостоверение личности
die Aufenthaltserlaubnis|вид на жительство
anmelden|регистрировать
die Frist, -en|срок
die Unterlagen|документы
wegen|из-за
trotz|несмотря на
während|во время
`,phrases:`
Ich möchte mich anmelden.|Я хочу зарегистрироваться (по месту жительства).
Welche Unterlagen brauche ich?|Какие документы мне нужны?
Füllen Sie bitte dieses Formular aus.|Заполните, пожалуйста, этот бланк.
Hier fehlt noch Ihre Unterschrift.|Здесь ещё не хватает Вашей подписи.
Wegen des Streiks ist das Amt heute geschlossen.|Из-за забастовки учреждение сегодня закрыто.
Trotz des Termins musste ich zwei Stunden warten.|Несмотря на запись, мне пришлось ждать два часа.
Während der Wartezeit habe ich ein Buch gelesen.|Во время ожидания я читал книгу.
Den Antrag müssen Sie innerhalb eines Monats stellen.|Заявление нужно подать в течение месяца.
`,gaps:`
Das ist das Auto {des} Nachbarn.|Это машина соседа.|des,dem,der
Wegen {des} Regens bleiben wir zu Hause.|Из-за дождя мы остаёмся дома.|des,dem,der
Trotz {der} Kälte gehen wir spazieren.|Несмотря на холод, мы идём гулять.|der,die,dem
Während {des} Urlaubs habe ich viel gelesen.|Во время отпуска я много читал.|des,dem,den
Die Wohnung {meiner} Eltern ist groß.|Квартира моих родителей большая.|meiner,meinen,meine
Sie müssen das Formular {ausfüllen}.|Вам нужно заполнить бланк.|ausfüllen,auszufüllen,ausgefüllt
`,dialogTitle:`В бюро регистрации`,dialog:`
A:Guten Tag. Was kann ich für Sie tun?|Добрый день. Чем могу помочь?
B:Guten Tag. Ich bin umgezogen und möchte mich anmelden.|Добрый день. Я переехал и хочу зарегистрироваться.
A:Haben Sie Ihren Pass und die Wohnungsgeberbestätigung dabei?|У Вас с собой паспорт и подтверждение от арендодателя?
B:Den Pass ja, aber die Bestätigung des Vermieters habe ich leider vergessen.|Паспорт да, а подтверждение арендодателя я, к сожалению, забыл.
A:Ohne die Bestätigung kann ich Sie leider nicht anmelden.|Без подтверждения я, к сожалению, не могу Вас зарегистрировать.
B:Wie lange habe ich dafür Zeit?|Сколько у меня на это времени?
A:Innerhalb von zwei Wochen nach dem Einzug. Machen Sie einfach einen neuen Termin.|В течение двух недель после въезда. Просто запишитесь снова.
`,roleplay:{role:`строгий, но вежливый сотрудник Bürgeramt (бюро регистрации)`,situation:`Вы пришли зарегистрироваться по новому адресу, но не всё взяли.`,goal:`Объяснить ситуацию, выяснить, какие документы нужны и какие сроки`}},{id:`b1-07`,emoji:`📈`,title:`Жизненный путь`,de:`Mein Lebenslauf`,goal:`Рассказывать биографию: последовательность событий, Plusquamperfekt, nachdem, bevor`,grammar:{title:`Plusquamperfekt, nachdem, bevor, seitdem`,points:[`**Plusquamperfekt** — «предпрошедшее»: действие, которое произошло **до** другого в прошлом: hatte/war + Partizip II: Nachdem ich das Abitur **gemacht hatte**, **zog** ich nach Berlin.`,`**nachdem** (после того как): в придаточном — Plusquamperfekt, в главном — Präteritum/Perfekt.`,`**bevor** (прежде чем): Bevor ich nach Deutschland kam, **habe** ich in Kasan gearbeitet.`,`**seitdem** (с тех пор как): Seitdem ich hier wohne, spreche ich jeden Tag Deutsch.`,`**während** как союз (в то время как): Während ich studierte, arbeitete ich im Café.`]},words:`
der Lebenslauf, -¨e|резюме, биография
geboren|родился
die Ausbildung, -en|профессиональное обучение
das Studium|учёба в вузе
der Abschluss, -¨e|диплом, окончание учёбы
die Erfahrung, -en|опыт
das Praktikum, Praktika|стажировка
umziehen|переезжать
sich bewerben|подавать заявку на работу
nachdem|после того как
bevor|прежде чем
seitdem|с тех пор как
anschließend|затем, после этого
die Stelle, -n|должность, место
`,phrases:`
Ich bin 1995 in Nowosibirsk geboren.|Я родился в 1995 году в Новосибирске.
Nachdem ich die Schule beendet hatte, studierte ich Informatik.|После окончания школы я изучал информатику.
Bevor ich nach Deutschland kam, hatte ich nie Deutsch gelernt.|До приезда в Германию я никогда не учил немецкий.
Anschließend habe ich ein Praktikum bei Siemens gemacht.|Затем я прошёл стажировку в Siemens.
Seitdem ich in München lebe, fahre ich viel Fahrrad.|С тех пор как я живу в Мюнхене, много езжу на велосипеде.
Ich habe drei Jahre Berufserfahrung im Marketing.|У меня три года опыта в маркетинге.
Nachdem wir gegessen hatten, gingen wir spazieren.|После того как мы поели, мы пошли гулять.
Während meines Studiums habe ich in einem Café gejobbt.|Во время учёбы я подрабатывал в кафе.
`,gaps:`
Nachdem ich gefrühstückt {hatte}, ging ich zur Arbeit.|Позавтракав, я пошёл на работу.|hatte,habe,hat
Nachdem er angekommen {war}, rief er mich an.|Приехав, он мне позвонил.|war,hatte,ist
{Bevor} du gehst, mach bitte das Licht aus.|Прежде чем уйти, выключи свет.|Bevor,Nachdem,Seitdem
{Seitdem} ich Sport mache, fühle ich mich besser.|С тех пор как занимаюсь спортом, чувствую себя лучше.|Seitdem,Bevor,Während
Ich bin 1990 {geboren}.|Я родился в 1990 году.|geboren,gebären,geborene
Ich habe mich bei einer Firma {beworben}.|Я подал заявку в одну фирму.|beworben,bewerbt,gebewerbt
`,dialogTitle:`Как ты оказался в Германии?`,dialog:`
A:Wie bist du eigentlich nach Deutschland gekommen?|А как ты вообще оказался в Германии?
B:Nachdem ich mein Studium abgeschlossen hatte, bekam ich ein Stipendium in Heidelberg.|После того как я окончил университет, я получил стипендию в Гейдельберге.
A:Hattest du vorher schon Deutsch gelernt?|Ты до этого уже учил немецкий?
B:Ein bisschen. Bevor ich kam, habe ich einen Intensivkurs gemacht.|Немного. Перед приездом прошёл интенсивный курс.
A:Und was hast du nach dem Stipendium gemacht?|А что ты делал после стипендии?
B:Ich habe mich bei mehreren Firmen beworben. Seitdem arbeite ich als Datenanalyst.|Я подавал заявки в несколько фирм. С тех пор работаю аналитиком данных.
`,roleplay:{role:`журналист, который пишет статью об иммигрантах в Германии`,situation:`Интервью о вашем жизненном пути.`,goal:`Рассказать биографию в хронологическом порядке с nachdem, bevor, seitdem`}},{id:`b1-08`,emoji:`🤝`,title:`Собеседование`,de:`Das Vorstellungsgespräch`,goal:`Пройти собеседование: косвенные вопросы, вежливые формулировки`,grammar:{title:`Косвенные вопросы`,points:[`Вежливый вопрос часто начинается с **Können Sie mir sagen, …** / **Ich würde gern wissen, …** / **Wissen Sie, …**.`,`Дальше — придаточное: вопросительное слово + … + **глагол в конце**: Können Sie mir sagen, **wann** die Arbeit **beginnt**?`,`Если вопрос без вопросительного слова (да/нет) — союз **ob** (ли): Ich möchte wissen, **ob** es Homeoffice **gibt**.`,`Сравните: Wie viel **verdiene** ich? → Darf ich fragen, wie viel ich **verdiene**?`]},words:`
das Vorstellungsgespräch, -e|собеседование
die Bewerbung, -en|заявка (на работу)
der Bewerber, -|кандидат
die Stärke, -n|сильная сторона
die Schwäche, -n|слабость
die Teamfähigkeit|умение работать в команде
die Aufgabe, -n|задача
verantwortlich|ответственный
die Probezeit|испытательный срок
das Homeoffice|удалённая работа
die Weiterbildung, -en|повышение квалификации
ob|ли
belastbar|стрессоустойчивый
selbstständig|самостоятельный
`,phrases:`
Erzählen Sie etwas über sich.|Расскажите немного о себе.
Warum möchten Sie bei uns arbeiten?|Почему Вы хотите работать у нас?
Meine Stärke ist, dass ich sehr selbstständig arbeite.|Моя сильная сторона в том, что я очень самостоятельно работаю.
Ich war für ein Team von fünf Personen verantwortlich.|Я отвечал за команду из пяти человек.
Können Sie mir sagen, wie lange die Probezeit dauert?|Не могли бы Вы сказать, сколько длится испытательный срок?
Ich würde gern wissen, ob es Weiterbildungsmöglichkeiten gibt.|Я хотел бы узнать, есть ли возможности повышения квалификации.
Wann könnten Sie bei uns anfangen?|Когда Вы могли бы у нас начать?
Wir melden uns nächste Woche bei Ihnen.|Мы свяжемся с Вами на следующей неделе.
`,gaps:`
Können Sie mir sagen, wann der Zug {abfährt}?|Не скажете, когда отходит поезд?|abfährt,fährt ab,abfahren
Ich weiß nicht, {ob} er kommt.|Не знаю, придёт ли он.|ob,wenn,dass
Darf ich fragen, wie viel ich {verdiene}?|Можно спросить, сколько я буду получать?|verdiene,verdienen,verdient
Wissen Sie, wo das Büro {ist}?|Вы знаете, где офис?|ist,sein,es
Ich möchte wissen, {wann} ich anfangen kann.|Я хотел бы знать, когда могу начать.|wann,wenn,ob
Mich interessiert, {ob} Homeoffice möglich ist.|Мне интересно, возможна ли удалёнка.|ob,dass,wenn
`,dialogTitle:`Собеседование`,dialog:`
A:Herzlich willkommen! Erzählen Sie uns bitte kurz etwas über sich.|Добро пожаловать! Расскажите, пожалуйста, коротко о себе.
B:Gern. Ich bin Projektmanagerin und habe fünf Jahre Erfahrung in der IT-Branche.|Охотно. Я менеджер проектов, у меня пять лет опыта в IT.
A:Was sind Ihre Stärken?|Каковы Ваши сильные стороны?
B:Ich bin belastbar und arbeite gern im Team.|Я стрессоустойчива и люблю работать в команде.
A:Haben Sie noch Fragen an uns?|У Вас есть к нам вопросы?
B:Ja. Ich würde gern wissen, ob man auch im Homeoffice arbeiten kann.|Да. Я бы хотела узнать, можно ли работать удалённо.
A:Ja, zwei Tage pro Woche. Wann könnten Sie anfangen?|Да, два дня в неделю. Когда Вы могли бы начать?
B:Ab dem ersten März.|С первого марта.
`,roleplay:{role:`руководитель отдела Herr Dr. Weber на собеседовании`,situation:`Собеседование на должность в вашей сфере в немецкой компании.`,goal:`Рассказать о себе, назвать сильные стороны и задать 2 косвенных вопроса (ob / wie / wann)`}},{id:`b1-09`,emoji:`🗣️`,title:`Моё мнение`,de:`Meinungen äußern`,goal:`Высказывать мнение, соглашаться и спорить, связывать мысли`,grammar:{title:`Коннекторы: deshalb, trotzdem, obwohl`,points:[`**deshalb / deswegen / darum** (поэтому) — на 1-м месте, глагол сразу после: Es regnet, **deshalb bleibe** ich zu Hause.`,`**trotzdem** (всё равно) — так же: Es regnet, **trotzdem gehe** ich spazieren.`,`**obwohl** (хотя) — придаточное, глагол в конце: **Obwohl** es **regnet**, gehe ich spazieren.`,`Мнение: **Meiner Meinung nach** ist das … / **Ich bin der Meinung, dass** … / **Ich finde (nicht), dass** …`,`Согласие/несогласие: **Da hast du recht.** / **Das sehe ich anders.** / **Einerseits …, andererseits …**`]},words:`
die Meinung, -en|мнение
meiner Meinung nach|по моему мнению
der Vorteil, -e|преимущество
der Nachteil, -e|недостаток
das Argument, -e|аргумент
zustimmen|соглашаться
widersprechen|возражать
überzeugen|убеждать
deshalb|поэтому
trotzdem|тем не менее
obwohl|хотя
einerseits … andererseits|с одной стороны … с другой стороны
die Social Media|соцсети
abhängig|зависимый
`,phrases:`
Meiner Meinung nach sind soziale Medien gefährlich.|По моему мнению, соцсети опасны.
Ich bin der Meinung, dass Kinder kein Handy brauchen.|Я считаю, что детям не нужен телефон.
Da hast du völlig recht.|Тут ты совершенно прав.
Das sehe ich ganz anders.|Я смотрю на это совсем иначе.
Einerseits ist das praktisch, andererseits kostet es viel Zeit.|С одной стороны, это практично, с другой — отнимает много времени.
Obwohl ich wenig Zeit habe, lese ich jeden Abend.|Хотя у меня мало времени, я читаю каждый вечер.
Ich war müde, trotzdem bin ich zur Party gegangen.|Я устал, но всё равно пошёл на вечеринку.
Das Handy ist praktisch, deshalb benutzen es alle.|Телефон удобен, поэтому им все пользуются.
`,gaps:`
Ich bin krank, {deshalb} bleibe ich im Bett.|Я болен, поэтому остаюсь в постели.|deshalb,obwohl,trotzdem
{Obwohl} es kalt ist, trägt er keine Jacke.|Хотя холодно, он без куртки.|Obwohl,Trotzdem,Deshalb
Das Wetter war schlecht, trotzdem {sind} wir gewandert.|Погода была плохая, но мы всё равно пошли в поход.|sind,wir sind,haben
Meiner Meinung {nach} ist das falsch.|По-моему, это неправильно.|nach,von,zu
Es ist teuer, deshalb {kaufe} ich es nicht.|Это дорого, поэтому я это не покупаю.|kaufe,ich kaufe,kaufen
Ich finde, {dass} du recht hast.|Я считаю, что ты прав.|dass,das,ob
`,dialogTitle:`Телефоны в школе`,dialog:`
A:Ich finde, Handys sollten in der Schule verboten sein.|Я считаю, что телефоны в школе нужно запретить.
B:Das sehe ich anders. Handys können beim Lernen helfen.|Я так не считаю. Телефоны могут помогать в учёбе.
A:Einerseits ja, andererseits lenken sie die Schüler ab.|С одной стороны, да, с другой — они отвлекают учеников.
B:Da hast du recht. Trotzdem glaube ich, dass ein Verbot nicht die Lösung ist.|Тут ты прав. Тем не менее я думаю, что запрет — не решение.
A:Und was schlägst du vor?|И что ты предлагаешь?
B:Klare Regeln: Im Unterricht bleibt das Handy in der Tasche, in der Pause darf man es benutzen.|Чёткие правила: на уроке телефон в сумке, на перемене можно пользоваться.
`,roleplay:{role:`собеседник в ток-шоу с противоположным мнением`,situation:`Ток-шоу на тему «Нужен ли 4-дневный рабочий день?»`,goal:`Высказать мнение, привести аргументы с deshalb/obwohl/trotzdem, вежливо возразить`}},{id:`b1-10`,emoji:`🔮`,title:`Будущее`,de:`Die Zukunft`,goal:`Говорить о будущем, прогнозах и предположениях: Futur I`,grammar:{title:`Futur I: werden + инфинитив`,points:[`Для планов немцы часто используют **Präsens + указание времени**: Morgen **fahre** ich nach Köln.`,`**Futur I** = werden + инфинитив в конце — для **прогнозов, обещаний, решений**: In 20 Jahren **werden** Autos selbst **fahren**. Ich **werde** dich anrufen!`,`Futur I + **wohl / wahrscheinlich** = предположение о настоящем: Er **wird wohl** krank **sein**. (Наверное, он болен.)`,`Слова-помощники: **vermutlich, wahrscheinlich, sicher, bestimmt, vielleicht**.`]},words:`
die Zukunft|будущее
die Vergangenheit|прошлое
die Gegenwart|настоящее
werden|становиться; (вспом.) будет
die Prognose, -n|прогноз
die Technik|техника
der Roboter, -|робот
die künstliche Intelligenz|искусственный интеллект
sich verändern|меняться
ersetzen|заменять
wahrscheinlich|вероятно
bestimmt|наверняка
vermutlich|предположительно
in Zukunft|в будущем
`,phrases:`
In zwanzig Jahren werden viele Autos selbst fahren.|Через двадцать лет многие машины будут ездить сами.
Ich werde nächstes Jahr meinen Master machen.|В следующем году я буду получать магистра.
Roboter werden viele Jobs ersetzen.|Роботы заменят много рабочих мест.
Er ist nicht da. Er wird wohl im Stau stehen.|Его нет. Наверное, стоит в пробке.
Ich verspreche dir, ich werde pünktlich sein.|Обещаю тебе, я буду вовремя.
Die Welt wird sich stark verändern.|Мир сильно изменится.
Wahrscheinlich werden wir alle länger arbeiten.|Вероятно, мы все будем работать дольше.
Wie wird die Stadt der Zukunft aussehen?|Как будет выглядеть город будущего?
`,gaps:`
Ich {werde} dich morgen anrufen.|Я позвоню тебе завтра.|werde,würde,wurde
Wir werden im Sommer nach Kanada {fliegen}.|Летом мы полетим в Канаду.|fliegen,geflogen,fliegt
Es {wird} morgen regnen.|Завтра будет дождь.|wird,werdet,wurde
{Wirst} du zur Party kommen?|Ты придёшь на вечеринку?|Wirst,Wird,Werdest
Sie wird wohl müde {sein}.|Она, наверное, устала.|sein,ist,gewesen
Die Preise werden weiter {steigen}.|Цены будут расти дальше.|steigen,gestiegen,steigt
`,dialogTitle:`Мир в 2050 году`,dialog:`
A:Was glaubst du, wie wird die Welt 2050 aussehen?|Как думаешь, каким будет мир в 2050 году?
B:Ich glaube, wir werden kaum noch selbst Auto fahren.|Думаю, мы почти не будем сами водить машины.
A:Und die Arbeit? Werden Roboter unsere Jobs übernehmen?|А работа? Роботы займут наши места?
B:Manche Jobs bestimmt. Aber es wird auch neue Berufe geben.|Некоторые — наверняка. Но появятся и новые профессии.
A:Ich hoffe, wir werden mehr Freizeit haben!|Надеюсь, у нас будет больше свободного времени!
B:Das wäre schön. Aber wahrscheinlich werden wir einfach mehr am Handy sein.|Было бы хорошо. Но, вероятно, мы просто будем больше сидеть в телефоне.
`,roleplay:{role:`футуролог на научно-популярной лекции, который отвечает на вопросы публики`,situation:`После лекции о будущем вы задаёте вопросы и спорите о прогнозах.`,goal:`Сделать 3 прогноза с Futur I и одно предположение с «wird wohl»`}}],m=[{id:`b2-01`,emoji:`🔬`,title:`Наука и технологии`,de:`Wissenschaft und Technik`,goal:`Описывать исследования и изобретения: пассив во всех временах, пассив состояния`,grammar:{title:`Пассив: Perfekt, с модальными, Zustandspassiv`,points:[`Passiv Perfekt: **ist + Partizip II + worden** (не «geworden»!): Das Medikament **ist** 1928 **entdeckt worden**.`,`С модальными в Präteritum: Die Daten **mussten** geprüft **werden**.`,`**Zustandspassiv** (результат): **sein + Partizip II**: Die Tür **ist geöffnet**. (Дверь открыта.) Сравните: Die Tür **wird geöffnet** (её открывают — процесс).`,`Альтернативы пассиву: **man** (Man nimmt an, dass…), **sich lassen** + Inf. (Das **lässt sich** leicht **erklären** = Это легко объяснить), **sein + zu + Inf.** (Das **ist** nicht **zu ändern** = Это нельзя изменить).`],table:[[`Время`,`Пример`],[`Präsens`,`Die Studie wird veröffentlicht.`],[`Präteritum`,`Die Studie wurde veröffentlicht.`],[`Perfekt`,`Die Studie ist veröffentlicht worden.`],[`Modal`,`Die Studie muss veröffentlicht werden.`],[`Zustand`,`Die Studie ist veröffentlicht.`]]},words:`
die Forschung, -en|исследование (сфера)
die Studie, -n|исследование (работа)
die Erfindung, -en|изобретение
entdecken|открывать (обнаруживать)
entwickeln|разрабатывать
veröffentlichen|публиковать
untersuchen|исследовать
das Ergebnis, -se|результат
der Fortschritt, -e|прогресс
die Wirkung, -en|действие, эффект
nachweisen|доказывать
der Versuch, -e|эксперимент; попытка
bahnbrechend|революционный, прорывной
die Nebenwirkung, -en|побочное действие
`,phrases:`
Das Penizillin ist 1928 von Alexander Fleming entdeckt worden.|Пенициллин был открыт в 1928 году Александром Флемингом.
Die Ergebnisse der Studie wurden letzte Woche veröffentlicht.|Результаты исследования опубликовали на прошлой неделе.
Der Impfstoff muss noch gründlich getestet werden.|Вакцину ещё нужно тщательно протестировать.
Das Problem lässt sich nicht so einfach lösen.|Эту проблему не так просто решить.
Die Wirkung ist wissenschaftlich nachgewiesen.|Эффект научно доказан.
Diese Frage ist kaum zu beantworten.|На этот вопрос едва ли можно ответить.
Man geht davon aus, dass die Technik bald billiger wird.|Предполагается, что технология скоро подешевеет.
Das war eine bahnbrechende Erfindung.|Это было прорывное изобретение.
`,gaps:`
Das Gebäude ist 1920 gebaut {worden}.|Здание было построено в 1920 году.|worden,geworden,werden
Das Fenster {ist} schon geöffnet.|Окно уже открыто.|ist,wird,wurde
Das lässt sich leicht {erklären}.|Это легко объяснить.|erklären,erklärt,zu erklären
Die Aufgabe ist bis Freitag zu {erledigen}.|Задачу нужно выполнить до пятницы.|erledigen,erledigt,erledigend
Die Daten mussten geprüft {werden}.|Данные нужно было проверить.|werden,worden,wurden
Die Studie {wurde} 2023 veröffentlicht.|Исследование опубликовано в 2023.|wurde,wird,würde
`,dialogTitle:`Научная новость`,dialog:`
A:Hast du gelesen? Ein neues Material ist entwickelt worden, das Plastik ersetzen kann.|Читал? Разработан новый материал, который может заменить пластик.
B:Ja! Es wird aus Algen hergestellt, oder?|Да! Его производят из водорослей, верно?
A:Genau. Allerdings muss es noch in der Praxis getestet werden.|Именно. Правда, его ещё нужно испытать на практике.
B:Ist schon bekannt, wann es auf den Markt kommt?|Уже известно, когда оно появится на рынке?
A:Das lässt sich noch nicht sagen. Die Produktion ist noch viel zu teuer.|Это пока нельзя сказать. Производство пока слишком дорогое.
B:Trotzdem: Das klingt nach einem echten Fortschritt.|И всё же это звучит как настоящий прогресс.
`,roleplay:{role:`научный журналист, интервьюирующий вас как эксперта`,situation:`Интервью для научно-популярного журнала об изобретении, которое изменило мир (на ваш выбор).`,goal:`Рассказать об изобретении, используя Passiv Perfekt, sich lassen и sein + zu`}},{id:`b2-02`,emoji:`📰`,title:`Новости и СМИ`,de:`Nachrichten und Medien`,goal:`Передавать чужие слова: косвенная речь (Konjunktiv I)`,grammar:{title:`Konjunktiv I — косвенная речь`,points:[`В новостях и официальных текстах чужие слова передают через **Konjunktiv I** — так журналист дистанцируется: Der Minister sagte, er **sei** zufrieden.`,`Образование: основа инфинитива + окончания **-e, -est, -e**: er **habe**, er **komme**, er **könne**, er **werde**. Особый глагол **sein**: ich sei, du sei(e)st, er **sei**, wir seien, sie **seien**.`,`Если форма Konjunktiv I совпадает с индикативом (чаще во мн. ч.: sie haben), используют **Konjunktiv II**: Sie sagten, sie **hätten** keine Zeit.`,`Прошлое: **habe/sei + Partizip II**: Er sagte, er **habe** nichts **gewusst**. Вопросы: Sie fragte, **ob** er komme / **wann** er komme.`],table:[[``,`sein`,`haben`,`können`,`kommen`],[`ich`,`sei`,`(hätte)`,`könne`,`(käme)`],[`er/sie`,`sei`,`habe`,`könne`,`komme`],[`wir/sie`,`seien`,`(hätten)`,`(könnten)`,`(kämen)`]]},words:`
die Nachricht, -en|новость
die Zeitung, -en|газета
der Bericht, -e|сообщение, репортаж
berichten|сообщать
behaupten|утверждать
betonen|подчёркивать
die Quelle, -n|источник
laut|согласно (+ Dat./Gen.)
zufolge|согласно (стоит после слова)
die Pressekonferenz, -en|пресс-конференция
der Sprecher, -|представитель, спикер
die Regierung, -en|правительство
dementieren|опровергать
die Falschmeldung, -en|фейк, ложное сообщение
`,phrases:`
Der Sprecher sagte, die Lage sei unter Kontrolle.|Представитель сказал, что ситуация под контролем.
Die Ministerin betonte, man habe alles getan.|Министр подчеркнула, что сделано всё возможное.
Laut der Polizei gebe es keine Verletzten.|По данным полиции, пострадавших нет.
Er behauptete, er habe von nichts gewusst.|Он утверждал, что ничего не знал.
Die Firma teilte mit, sie werde 500 neue Stellen schaffen.|Фирма сообщила, что создаст 500 новых рабочих мест.
Die Journalistin fragte, ob die Steuern steigen würden.|Журналистка спросила, вырастут ли налоги.
Den Angaben zufolge seien die Preise um drei Prozent gestiegen.|Согласно данным, цены выросли на три процента.
Die Regierung dementierte den Bericht.|Правительство опровергло сообщение.
`,gaps:`
Er sagte, er {sei} krank.|Он сказал, что болен.|sei,ist,wäre
Sie erklärte, sie {habe} keine Zeit.|Она объяснила, что у неё нет времени.|habe,hat,hätte
Der Chef meinte, das Projekt {könne} warten.|Шеф считал, что проект может подождать.|könne,kann,konnte
Die Kinder sagten, sie {hätten} Hunger.|Дети сказали, что голодны.|hätten,haben,habe
Er behauptet, er {sei} gestern zu Hause gewesen.|Он утверждает, что вчера был дома.|sei,habe,wäre
Sie fragte, {ob} ich mitkomme.|Она спросила, пойду ли я с ними.|ob,dass,wenn
`,dialogTitle:`Обсуждаем новости`,dialog:`
A:Hast du die Nachrichten gehört? Der Bürgermeister sei zurückgetreten.|Слышал новости? Мэр якобы ушёл в отставку.
B:Wirklich? Aus welchem Grund?|Правда? По какой причине?
A:Laut der Zeitung habe er Geld aus der Stadtkasse benutzt.|По данным газеты, он использовал деньги из городской казны.
B:Ist das bestätigt oder nur ein Gerücht?|Это подтверждено или только слухи?
A:Sein Sprecher sagt, die Vorwürfe seien völlig falsch.|Его представитель говорит, что обвинения абсолютно ложны.
B:Dann warte ich lieber ab, bis es offizielle Informationen gibt.|Тогда я лучше подожду официальной информации.
`,roleplay:{role:`главный редактор новостного сайта, проверяющий ваш материал`,situation:`Вы стажёр-журналист и пересказываете редактору интервью с политиком.`,goal:`Пересказать 4 высказывания в косвенной речи (Konjunktiv I) и ответить на уточнения`}},{id:`b2-03`,emoji:`📑`,title:`Деловой стиль`,de:`Die Arbeitswelt`,goal:`Понимать и использовать официально-деловой стиль: номинализация`,grammar:{title:`Nominalisierung — номинализация`,points:[`В официальном немецком действия часто выражены **существительными**: «Wenn man den Vertrag unterschreibt» → **Bei der Unterzeichnung des Vertrags**.`,`Как образовать: **инфинитив** → das (Lesen, Arbeiten); **-ung** → die (beantragen → die Beantragung, prüfen → die Prüfung); **корень** → der (beginnen → der Beginn, abschließen → der Abschluss).`,`Союз → предлог: **wenn/als** → bei; **weil** → wegen; **obwohl** → trotz; **nachdem** → nach; **bevor** → vor; **während** → während; **damit/um…zu** → zur/zum.`,`Weil die Kosten steigen → **Wegen der steigenden Kosten**. Um die Qualität zu verbessern → **Zur Verbesserung der Qualität**.`],table:[[`Глагольный стиль`,`Номинальный стиль`],[`Nachdem er angekommen war, …`,`Nach seiner Ankunft …`],[`Weil es regnete, …`,`Wegen des Regens …`],[`Obwohl sie krank war, …`,`Trotz ihrer Krankheit …`],[`Um Kosten zu sparen, …`,`Zur Kostensenkung …`]]},words:`
die Besprechung, -en|совещание
die Verhandlung, -en|переговоры
der Vertrag, -¨e|договор
die Vereinbarung, -en|соглашение
die Durchführung|проведение, реализация
die Umsetzung|воплощение, реализация
die Verbesserung, -en|улучшение
die Kündigung, -en|увольнение, расторжение
die Genehmigung, -en|разрешение
die Zuständigkeit, -en|компетенция, ответственность
zuständig|ответственный (за)
fristgerecht|в установленный срок
hinsichtlich|относительно (+ Gen.)
bezüglich|касательно (+ Gen.)
`,phrases:`
Bei Fragen stehe ich Ihnen gern zur Verfügung.|При возникновении вопросов я в Вашем распоряжении.
Nach Abschluss des Projekts erhalten Sie einen Bericht.|После завершения проекта Вы получите отчёт.
Wegen der hohen Nachfrage verlängern wir das Angebot.|Из-за высокого спроса мы продлеваем предложение.
Zur Verbesserung der Qualität führen wir neue Tests ein.|Для улучшения качества мы вводим новые тесты.
Bezüglich Ihrer Anfrage möchte ich Folgendes mitteilen.|Касательно Вашего запроса хотел бы сообщить следующее.
Für die Umsetzung ist Frau Lange zuständig.|За реализацию отвечает госпожа Ланге.
Die Kündigung muss fristgerecht eingereicht werden.|Заявление об увольнении нужно подать в срок.
Trotz intensiver Verhandlungen kam keine Einigung zustande.|Несмотря на интенсивные переговоры, соглашение не было достигнуто.
`,gaps:`
Nach {der} Besprechung gehen wir essen.|После совещания идём обедать.|der,dem,die
{Bei} Regen fällt das Fest aus.|В случае дождя праздник отменяется.|Bei,Mit,Von
Wegen der {Verspätung} des Zuges kam ich zu spät.|Из-за опоздания поезда я опоздал.|Verspätung,Verspäten,verspätet
Zur {Verbesserung} des Service bitten wir um Feedback.|Для улучшения сервиса просим отзыв.|Verbesserung,Verbessern,verbessern
Vor {Beginn} der Sitzung bitte die Handys ausschalten.|Перед началом заседания выключите телефоны.|Beginn,Beginnung,beginnen
Trotz {seiner} Erfahrung machte er einen Fehler.|Несмотря на опыт, он ошибся.|seiner,seinem,seine
`,dialogTitle:`Деловой звонок`,dialog:`
A:Firma Krause, Lange am Apparat. Was kann ich für Sie tun?|Фирма Краузе, у телефона Ланге. Чем могу помочь?
B:Guten Tag, hier spricht Petrova. Ich rufe bezüglich unserer Vereinbarung vom Montag an.|Добрый день, это Петрова. Звоню по поводу нашей договорённости в понедельник.
A:Ach ja, Frau Petrova. Gibt es Probleme bei der Umsetzung?|Ах да, госпожа Петрова. Есть проблемы с реализацией?
B:Wegen eines Lieferengpasses verzögert sich der Projektstart um eine Woche.|Из-за перебоев с поставками старт проекта переносится на неделю.
A:Verstehe. Ist die Durchführung bis Ende des Monats trotzdem möglich?|Понимаю. Тем не менее проведение до конца месяца возможно?
B:Davon gehen wir aus. Ich schicke Ihnen nach Klärung aller Details eine Bestätigung.|Мы на это рассчитываем. После уточнения деталей пришлю Вам подтверждение.
`,roleplay:{role:`деловой партнёр из немецкой компании-поставщика, Herr Krause`,situation:`Деловые переговоры: поставка задерживается, нужно договориться о новых условиях.`,goal:`Вести разговор в деловом стиле, использовать номинальные конструкции (wegen, bei, nach, zur)`}},{id:`b2-04`,emoji:`📚`,title:`Литература и искусство`,de:`Literatur und Kunst`,goal:`Понимать сложные описания: причастные определения`,grammar:{title:`Partizipialattribute — причастия перед существительным`,points:[`Причастие I (**-end**) = «-ющий/-щий» (одновременность, актив): das **lachende** Kind (смеющийся ребёнок), die **steigenden** Preise.`,`Причастие II = «-нный/-тый» (завершённость, пассив): das **gelesene** Buch (прочитанная книга), die **geschlossene** Tür.`,`Причастие склоняется как прилагательное и может иметь расширения перед собой: die **gestern in Berlin eröffnete** Ausstellung = die Ausstellung, **die gestern in Berlin eröffnet wurde**.`,`Ключ к пониманию: найдите артикль → прыгните к существительному → потом читайте середину.`,`**zu + Partizip I** = «который нужно…»: die **zu lösende** Aufgabe (задача, которую нужно решить).`]},words:`
das Werk, -e|произведение
der Roman, -e|роман
die Erzählung, -en|рассказ, повесть
das Gedicht, -e|стихотворение
die Ausstellung, -en|выставка
das Gemälde, -|картина (живопись)
der Künstler, -|художник, деятель искусства
die Handlung, -en|сюжет
die Figur, -en|персонаж
darstellen|изображать
spannend|захватывающий
beeindruckend|впечатляющий
anspruchsvoll|сложный, требовательный
die Rezension, -en|рецензия
`,phrases:`
Der 1924 erschienene Roman gilt als Meisterwerk.|Вышедший в 1924 году роман считается шедевром.
Die gestern eröffnete Ausstellung zeigt Werke von Paul Klee.|Открывшаяся вчера выставка показывает работы Пауля Клее.
Die Hauptfigur ist ein ständig zweifelnder junger Mann.|Главный герой — постоянно сомневающийся молодой человек.
Das Gemälde stellt eine schlafende Frau dar.|Картина изображает спящую женщину.
Die Handlung ist spannend, aber die Sprache ist anspruchsvoll.|Сюжет захватывающий, но язык сложный.
Das ist ein von vielen Kritikern gelobtes Buch.|Это книга, которую хвалят многие критики.
Die noch zu klärenden Fragen besprechen wir morgen.|Вопросы, которые ещё нужно прояснить, обсудим завтра.
Das Gedicht hat mich tief beeindruckt.|Стихотворение произвело на меня глубокое впечатление.
`,gaps:`
Das {lachende} Kind spielt im Garten.|Смеющийся ребёнок играет в саду.|lachende,gelachte,lachen
Die {geschlossene} Tür ließ sich nicht öffnen.|Закрытая дверь не открывалась.|geschlossene,schließende,geschlossen
Wegen der {steigenden} Preise kaufen wir weniger.|Из-за растущих цен мы покупаем меньше.|steigenden,gestiegen,steigende
Das {gestohlene} Bild wurde gefunden.|Украденную картину нашли.|gestohlene,stehlende,gestohlen
Die zu {lösende} Aufgabe ist schwer.|Задача, которую нужно решить, трудная.|lösende,gelöste,lösen
Ich lese ein von Kafka {geschriebenes} Buch.|Я читаю книгу, написанную Кафкой.|geschriebenes,schreibendes,geschrieben
`,dialogTitle:`После выставки`,dialog:`
A:Wie hat dir die Ausstellung gefallen?|Как тебе выставка?
B:Sehr gut! Besonders das im Eingang hängende Gemälde hat mich beeindruckt.|Очень! Особенно впечатлила картина, висящая у входа.
A:Das mit der tanzenden Frau? Ja, die Farben sind unglaublich.|Та, с танцующей женщиной? Да, цвета невероятные.
B:Wusstest du, dass das Bild erst nach dem Tod des Künstlers bekannt wurde?|Ты знал, что картина стала известна только после смерти художника?
A:Nein! Die bis heute ungeklärte Geschichte des Bildes ist faszinierend.|Нет! До сих пор не разгаданная история картины завораживает.
B:Genau. Darüber möchte ich unbedingt mehr lesen.|Точно. Я обязательно хочу почитать об этом больше.
`,roleplay:{role:`ведущий книжного клуба, обсуждающий прочитанную книгу или фильм`,situation:`Встреча книжного клуба: каждый рассказывает о любимом произведении.`,goal:`Описать сюжет и персонажей, используя минимум 2 причастных определения, и дать оценку`}},{id:`b2-05`,emoji:`🌍`,title:`Общество и окружающий мир`,de:`Gesellschaft und Umwelt`,goal:`Строить сложные связные высказывания: двойные союзы`,grammar:{title:`Zweiteilige Konnektoren — двойные союзы`,points:[`**sowohl … als auch** — как …, так и: **Sowohl** Kinder **als auch** Erwachsene nutzen soziale Medien.`,`**weder … noch** — ни … ни: Er hat **weder** Zeit **noch** Geld.`,`**entweder … oder** — либо … либо: **Entweder** wir handeln jetzt, **oder** es ist zu spät.`,`**nicht nur … sondern auch** — не только … но и.`,`**zwar … aber** — хотя … но: Das Auto ist **zwar** teuer, **aber** umweltfreundlich.`,`**je … desto/umso** — чем … тем: **Je** mehr man liest, **desto** besser **schreibt** man. (после je — глагол в конце, после desto + сравнительная степень — сразу глагол!)`]},words:`
die Gesellschaft, -en|общество
die Gerechtigkeit|справедливость
die Armut|бедность
der Wohlstand|благосостояние
die Ungleichheit, -en|неравенство
die Integration|интеграция
die Verantwortung|ответственность
der Verbrauch|потребление
die Maßnahme, -n|мера
die Ressource, -n|ресурс
sowohl … als auch|как … так и
weder … noch|ни … ни
je … desto|чем … тем
zwar … aber|хотя … но
`,phrases:`
Sowohl die Politik als auch jeder Einzelne trägt Verantwortung.|Ответственность несёт как политика, так и каждый человек.
Er raucht weder noch trinkt er Alkohol.|Он не курит и не пьёт алкоголь.
Entweder wir reduzieren den Verbrauch, oder die Ressourcen gehen aus.|Либо мы сократим потребление, либо ресурсы закончатся.
Das Problem betrifft nicht nur arme, sondern auch reiche Länder.|Проблема касается не только бедных, но и богатых стран.
Die Maßnahme ist zwar teuer, aber langfristig sinnvoll.|Мера хотя и дорогая, но в долгосрочной перспективе разумная.
Je früher wir handeln, desto geringer sind die Kosten.|Чем раньше мы будем действовать, тем ниже будут издержки.
Je mehr ich darüber lese, umso komplizierter finde ich das Thema.|Чем больше я об этом читаю, тем сложнее мне кажется тема.
Die soziale Ungleichheit wächst weltweit.|Социальное неравенство растёт во всём мире.
`,gaps:`
Ich spreche sowohl Englisch {als auch} Deutsch.|Я говорю как по-английски, так и по-немецки.|als auch,noch,oder
Er hat weder Hunger {noch} Durst.|Он не голоден и не хочет пить.|noch,oder,als auch
Entweder du kommst mit, {oder} du bleibst hier.|Либо ты идёшь с нами, либо остаёшься здесь.|oder,noch,aber
Je länger ich warte, {desto} nervöser werde ich.|Чем дольше я жду, тем больше нервничаю.|desto,als,so
Die Wohnung ist zwar klein, {aber} gemütlich.|Квартира хоть и маленькая, но уютная.|aber,sondern,doch
Das ist nicht nur teuer, {sondern} auch schlecht.|Это не только дорого, но и плохо.|sondern,aber,oder
`,dialogTitle:`Дискуссия о городе`,dialog:`
A:Die Stadt will das Zentrum autofrei machen. Was hältst du davon?|Город хочет сделать центр без машин. Что ты об этом думаешь?
B:Ich finde die Idee zwar gut, aber die Umsetzung wird schwierig.|Идея, конечно, хорошая, но реализовать её будет сложно.
A:Warum? Sowohl die Luft als auch die Lebensqualität würden besser.|Почему? Улучшились бы как воздух, так и качество жизни.
B:Schon, aber viele Leute haben weder ein Fahrrad noch eine gute Busverbindung.|Да, но у многих нет ни велосипеда, ни хорошего автобусного сообщения.
A:Dann muss die Stadt eben in den Nahverkehr investieren.|Значит, город должен инвестировать в общественный транспорт.
B:Stimmt. Je besser der Nahverkehr, desto weniger Autos braucht man.|Верно. Чем лучше общественный транспорт, тем меньше нужны машины.
`,roleplay:{role:`модератор городского форума`,situation:`Публичная дискуссия о социальной проблеме вашего города (на выбор).`,goal:`Выразить сложную позицию, используя минимум 3 разных двойных союза`}},{id:`b2-06`,emoji:`🕵️`,title:`Детектив: версии`,de:`Ein Krimi: Vermutungen`,goal:`Выражать предположения и степень уверенности: субъективные модальные глаголы`,grammar:{title:`Субъективное значение модальных глаголов`,points:[`Модальные глаголы могут выражать **степень уверенности** говорящего:`,`**muss** — почти уверен (≈ 90%): Er **muss** zu Hause sein, das Licht brennt.`,`**dürfte** — вероятно (≈ 75%): Das **dürfte** der Täter sein.`,`**kann/könnte** — возможно (≈ 50%): Es **könnte** ein Unfall gewesen sein.`,`**kann nicht** — исключено: Er **kann** nicht der Täter **sein**.`,`**soll** — говорят, что (чужая информация): Er **soll** sehr reich sein. **will** — утверждает о себе: Er **will** nichts gesehen haben.`,`О прошлом: модальный + **Partizip II + haben/sein**: Er **muss** den Schlüssel **verloren haben**. Sie **könnte** schon **weggefahren sein**.`]},words:`
der Krimi, -s|детектив
der Täter, -|преступник
das Opfer, -|жертва
der Zeuge, -n|свидетель
das Alibi, -s|алиби
die Spur, -en|след
der Verdacht|подозрение
verdächtig|подозрительный
der Kommissar, -e|комиссар
ermitteln|расследовать
stehlen|красть
der Einbruch, -¨e|кража со взломом
vermuten|предполагать
die Beweise|доказательства
`,phrases:`
Der Täter muss einen Schlüssel gehabt haben.|У преступника, должно быть, был ключ.
Das dürfte der Gärtner gewesen sein.|Вероятно, это был садовник.
Es könnte auch ein Unfall gewesen sein.|Это мог быть и несчастный случай.
Sie kann es nicht gewesen sein – sie hat ein Alibi.|Это не могла быть она — у неё алиби.
Der Nachbar will nichts gehört haben.|Сосед утверждает, что ничего не слышал.
Der Verdächtige soll ins Ausland geflohen sein.|Подозреваемый, говорят, сбежал за границу.
Die Spuren deuten auf einen Einbruch hin.|Следы указывают на кражу со взломом.
Ohne Beweise können wir niemanden verhaften.|Без доказательств мы никого не можем арестовать.
`,gaps:`
Das Licht brennt. Er {muss} zu Hause sein.|Свет горит. Он должен быть дома.|muss,soll,will
Der Zeuge {will} nichts gesehen haben.|Свидетель утверждает, что ничего не видел.|will,soll,muss
Sie {soll} sehr reich sein, sagt man.|Говорят, она очень богата.|soll,will,darf
Er kann es nicht gewesen {sein}.|Это не мог быть он.|sein,haben,werden
Der Dieb muss durch das Fenster {gekommen} sein.|Вор, должно быть, проник через окно.|gekommen,kommen,gekommt
Das {dürfte} schwierig werden.|Это, вероятно, будет сложно.|dürfte,darf,durfte
`,dialogTitle:`Кто украл картину?`,dialog:`
A:Das Gemälde ist weg, aber die Tür war abgeschlossen.|Картина пропала, но дверь была заперта.
B:Dann muss der Täter einen Schlüssel gehabt haben.|Значит, у преступника должен был быть ключ.
A:Nur der Hausmeister und die Direktorin haben einen Schlüssel.|Ключ есть только у завхоза и директора.
B:Die Direktorin kann es nicht gewesen sein. Sie war zu der Zeit in Paris.|Директор не могла этого сделать. Она была тогда в Париже.
A:Und der Hausmeister will die ganze Nacht geschlafen haben.|А завхоз утверждает, что всю ночь спал.
B:Hm. Er soll Spielschulden haben, sagen die Kollegen.|Хм. Говорят, у него карточные долги — так коллеги говорят.
A:Das dürfte unser Motiv sein!|Это, вероятно, наш мотив!
`,roleplay:{role:`комиссар Kommissarin Brandt, расследующая загадочное исчезновение в отеле`,situation:`Вы детектив-напарник. Комиссар делится уликами и спрашивает ваши версии.`,goal:`Выдвинуть 3 версии с разной степенью уверенности (muss, dürfte, könnte, kann nicht, soll, will)`}},{id:`b2-07`,emoji:`❤️`,title:`Чувства и отношения`,de:`Gefühle und Beziehungen`,goal:`Говорить о чувствах: глаголы с предлогами, da- и wo-слова`,grammar:{title:`Глаголы с предлогами, darauf / worauf`,points:[`Многие глаголы требуют конкретного предлога — учите их вместе: **sich freuen auf** + Akk. (ждать), **sich freuen über** + Akk. (радоваться), **Angst haben vor** + Dat., **sich verlieben in** + Akk., **denken an** + Akk., **sich kümmern um**, **träumen von**, **sich ärgern über**, **sich verlassen auf**.`,`Если речь о **вещи** — местоимённое наречие **da(r) + предлог**: Ich freue mich **darauf**. Ich denke oft **daran**.`,`Вопрос о вещи: **wo(r) + предлог**: **Worauf** freust du dich? **Wovon** träumst du?`,`О **людях** — предлог + местоимение: Ich denke **an dich**. **An wen** denkst du?`,`da-слово может «анонсировать» придаточное: Ich freue mich **darauf**, **dass** du kommst.`]},words:`
das Gefühl, -e|чувство
die Liebe|любовь
die Eifersucht|ревность
die Sehnsucht|тоска (по чему-то)
sich verlieben in|влюбиться в
sich trennen von|расстаться с
sich kümmern um|заботиться о
sich sehnen nach|тосковать по
Angst haben vor|бояться
sich verlassen auf|полагаться на
enttäuscht|разочарованный
erleichtert|испытывающий облегчение
eifersüchtig|ревнивый
darauf|на это / этого (da + auf)
worüber|о чём, чему (wo + über)
`,phrases:`
Ich habe mich auf den ersten Blick in ihn verliebt.|Я влюбилась в него с первого взгляда.
Worüber ärgerst du dich so?|Что тебя так злит?
Ich freue mich schon darauf, dich wiederzusehen.|Я уже жду, когда снова тебя увижу.
Sie hat Angst davor, allein zu sein.|Она боится остаться одна.
Er kümmert sich liebevoll um seine kranke Mutter.|Он с любовью заботится о больной матери.
Ich sehne mich nach meiner Heimat.|Я тоскую по родине.
Auf ihn kann ich mich immer verlassen.|На него я всегда могу положиться.
Nach dem Gespräch war ich sehr erleichtert.|После разговора мне стало намного легче.
`,gaps:`
Ich freue mich {auf} den Urlaub.|Я жду отпуска.|auf,über,für
Sie hat Angst {vor} Spinnen.|Она боится пауков.|vor,von,für
{Worauf} wartest du?|Чего ты ждёшь?|Worauf,Wofür,Auf was
Ich denke oft {daran}.|Я часто об этом думаю.|daran,dafür,an es
Er hat sich {in} seine Kollegin verliebt.|Он влюбился в коллегу.|in,an,mit
An {wen} denkst du gerade?|О ком ты сейчас думаешь?|wen,was,woran
`,dialogTitle:`Откровенный разговор`,dialog:`
A:Du wirkst so nachdenklich. Woran denkst du?|Ты такой задумчивый. О чём думаешь?
B:An Lena. Ich glaube, ich habe mich in sie verliebt.|О Лене. Кажется, я в неё влюбился.
A:Wie schön! Weiß sie davon?|Как здорово! Она об этом знает?
B:Nein. Ich habe Angst davor, unsere Freundschaft kaputt zu machen.|Нет. Я боюсь разрушить нашу дружбу.
A:Das verstehe ich. Aber worauf wartest du? Rede mit ihr!|Понимаю. Но чего ты ждёшь? Поговори с ней!
B:Du hast recht. Ich kümmere mich morgen darum – versprochen.|Ты прав. Займусь этим завтра — обещаю.
`,roleplay:{role:`близкий друг, которому вы рассказываете о сложной ситуации в отношениях`,situation:`Вечерний разговор по душам: у вас дилемма (выдуманная) в отношениях или дружбе.`,goal:`Описать чувства, используя 4+ глагола с предлогами и da-/wo-слова`}},{id:`b2-08`,emoji:`⚖️`,title:`Дебаты: цифровой мир`,de:`Debatte: Digitalisierung`,goal:`Аргументировать как на экзамене B2: структура, Konjunktiv II прошедшего, сожаления`,grammar:{title:`Konjunktiv II Vergangenheit и аргументация`,points:[`Нереальное в прошлом: **hätte/wäre + Partizip II**: Wenn ich das **gewusst hätte**, **wäre** ich nicht **gekommen**.`,`С модальными — двойной инфинитив: Wir **hätten** früher **handeln sollen**. (Нам следовало бы действовать раньше.) Du **hättest** mich **anrufen können**.`,`Структура аргумента: **These** (Ich vertrete die Ansicht, dass…) → **Begründung** (Das liegt daran, dass… / Ein wichtiges Argument ist…) → **Beispiel** (Das zeigt sich zum Beispiel an…) → **Fazit** (Zusammenfassend lässt sich sagen…).`,`Уступка и контраргумент: **Es mag sein, dass … , dennoch …** / **Man darf nicht vergessen, dass …** / **Dem kann ich nur bedingt zustimmen.**`]},words:`
die Digitalisierung|цифровизация
der Datenschutz|защита данных
die Privatsphäre|частная жизнь
die Überwachung|слежка, контроль
der Algorithmus, Algorithmen|алгоритм
abhängig sein von|зависеть от
die These, -n|тезис
die Begründung, -en|обоснование
das Fazit, -s|вывод
einwenden|возражать
vertreten|отстаивать (мнение)
bedingt|отчасти, условно
zusammenfassend|подводя итог
dennoch|тем не менее
`,phrases:`
Ich vertrete die Ansicht, dass Datenschutz wichtiger ist als Bequemlichkeit.|Я придерживаюсь мнения, что защита данных важнее удобства.
Das liegt vor allem daran, dass wir zu viel online preisgeben.|Это связано прежде всего с тем, что мы слишком много раскрываем в сети.
Es mag sein, dass Apps praktisch sind, dennoch sammeln sie unsere Daten.|Возможно, приложения удобны, тем не менее они собирают наши данные.
Dem kann ich nur bedingt zustimmen.|С этим я могу согласиться лишь отчасти.
Man darf nicht vergessen, dass Algorithmen nicht neutral sind.|Нельзя забывать, что алгоритмы не нейтральны.
Wir hätten früher klare Regeln schaffen sollen.|Нам следовало раньше создать чёткие правила.
Wenn ich das gewusst hätte, hätte ich die App nie installiert.|Если бы я это знал, я бы никогда не установил это приложение.
Zusammenfassend lässt sich sagen, dass die Digitalisierung Chancen und Risiken birgt.|Подводя итог, можно сказать, что цифровизация несёт и шансы, и риски.
`,gaps:`
Wenn ich Zeit gehabt {hätte}, wäre ich gekommen.|Если бы у меня было время, я бы пришёл.|hätte,wäre,habe
Wenn du früher aufgestanden {wärst}, hättest du den Bus erreicht.|Если бы ты встал раньше, ты бы успел на автобус.|wärst,hättest,bist
Wir hätten früher handeln {sollen}.|Нам следовало действовать раньше.|sollen,gesollt,sollten
Du hättest mich anrufen {können}!|Ты мог бы мне позвонить!|können,gekonnt,konntest
Es mag sein, dass das stimmt, {dennoch} bin ich skeptisch.|Возможно, это так, тем не менее я настроен скептически.|dennoch,deshalb,obwohl
Das liegt {daran}, dass viele keine Wahl haben.|Это связано с тем, что у многих нет выбора.|daran,davon,dafür
`,dialogTitle:`Дебаты на экзамене`,dialog:`
A:Sollten soziale Netzwerke erst ab 16 Jahren erlaubt sein? Wie sehen Sie das?|Следует ли разрешать соцсети только с 16 лет? Каково Ваше мнение?
B:Ich vertrete die Ansicht, dass eine Altersgrenze sinnvoll wäre.|Я придерживаюсь мнения, что возрастное ограничение было бы разумным.
A:Können Sie das begründen?|Можете это обосновать?
B:Das liegt vor allem daran, dass Jugendliche besonders leicht abhängig werden.|Это связано прежде всего с тем, что подростки особенно легко становятся зависимыми.
A:Es mag sein, aber ein Verbot lässt sich kaum kontrollieren.|Возможно, но запрет вряд ли можно проконтролировать.
B:Dem kann ich nur bedingt zustimmen. Man hätte schon längst eine sichere Altersprüfung einführen können.|С этим я соглашусь лишь отчасти. Давно можно было бы ввести надёжную проверку возраста.
A:Und Ihr Fazit?|И Ваш вывод?
B:Zusammenfassend lässt sich sagen: Schutz ist wichtiger als totale Freiheit.|Подводя итог: защита важнее полной свободы.
`,roleplay:{role:`экзаменатор Goethe-Zertifikat B2 в устной части (Diskussion)`,situation:`Устная часть экзамена B2: дискуссия на тему «Homeoffice für alle?»`,goal:`Построить аргументацию: тезис → обоснование → пример → вывод, отреагировать на контраргумент`}}],h=e=>e.split(`
`).map(e=>e.trim()).filter(Boolean);function g(e){let[t,n]=e.split(`|`).map(e=>e.trim()),[r,i]=t.split(`,`).map(e=>e.trim()),a=r.match(/^(der|die|das)\s+(.+)$/);return a?{g:a[1],de:a[2],ru:n,pl:i||void 0,full:r}:{de:r,ru:n,full:r}}function _(e){let[t,n]=e.split(`|`).map(e=>e.trim());return{de:t,ru:n}}function v(e){let[t,n,r]=e.split(`|`).map(e=>e.trim()),i=t.match(/^(.*)\{(.+?)\}(.*)$/);if(!i)throw Error(`Bad gap: `+e);return{before:i[1],answer:i[2],after:i[3],ru:n,opts:r?r.split(`,`).map(e=>e.trim()):void 0,full:i[1]+i[2]+i[3]}}function y(e){return h(e).map(e=>{let t=e[0],[n,r]=e.slice(2).split(`|`).map(e=>e.trim());return{who:t,de:n,ru:r}})}var b=0;function x(e,t){return t.map(t=>({id:t.id,level:e,index:b++,emoji:t.emoji,title:t.title,de:t.de,goal:t.goal,grammar:t.grammar,words:h(t.words).map(g),phrases:h(t.phrases).map(_),gaps:h(t.gaps).map(v),dialog:y(t.dialog),dialogTitle:t.dialogTitle,roleplay:t.roleplay}))}var S=[{id:`A1`,name:`A1 · Старт`,desc:`С абсолютного нуля: звуки, знакомство, числа, еда, город, покупки`,color:`#22c55e`},{id:`A2`,name:`A2 · Основа`,desc:`Прошедшее время, падежи, придаточные, сравнения, работа и путешествия`,color:`#3b82f6`},{id:`B1`,name:`B1 · Самостоятельность`,desc:`Рассказы, мнения, пассив, сослагательное наклонение, собеседование`,color:`#a855f7`},{id:`B2`,name:`B2 · Свобода`,desc:`Косвенная речь, номинализация, аргументация, сложный синтаксис`,color:`#f97316`}],C=[...x(`A1`,d),...x(`A2`,f),...x(`B1`,p),...x(`B2`,m)],w=e=>C.find(t=>t.id===e),T=C.flatMap(e=>e.words.map(t=>({...t,lesson:e.id}))),E=C.flatMap(e=>e.phrases.map(t=>({...t,lesson:e.id}))),D=e=>(e.g?e.g+` `:``)+e.de;function O(e){let t=e.slice();for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}var ee=(e,t)=>O(e).slice(0,t),k=e=>e[Math.floor(Math.random()*e.length)];function A(e,t=!1){let n=e.toLowerCase().replace(/[.,!?¿¡;:"„“”«»()\-–—]/g,` `).replace(/['’]/g,``).replace(/\s+/g,` `).trim();return t&&(n=n.replace(/ä/g,`ae`).replace(/ö/g,`oe`).replace(/ü/g,`ue`).replace(/ß/g,`ss`)),n}function te(e,t){let n=e.length,r=t.length;if(!n)return r;if(!r)return n;let i=Array.from({length:r+1},(e,t)=>t);for(let a=1;a<=n;a++){let n=[a];for(let o=1;o<=r;o++)n[o]=Math.min(i[o]+1,n[o-1]+1,i[o-1]+(e[a-1]===t[o-1]?0:1));i=n}return i[r]}function ne(e,t){let n=A(e,!0),r=A(t,!0);return!n&&!r?1:1-te(n,r)/Math.max(n.length,r.length)}function re(e,t){let n=Array.isArray(t)?t:[t];for(let t of n)if(A(e)===A(t))return`correct`;for(let t of n)if(A(e,!0)===A(t,!0))return`typo`;for(let t of n){let n=A(e,!0),r=A(t,!0);if(r.length>5&&te(n,r)<=1)return`typo`}return`wrong`}function ie(e,t){let n=A(t,!0).split(` `);return e.split(/\s+/).map(e=>{let t=A(e,!0);return{w:e,ok:!t||n.some(e=>e===t||t.length>4&&te(e,t)<=1)}})}function ae(e){return e.split(/\s+/).filter(Boolean)}var oe=e=>e.replace(/^[„"«(]+|[.,!?;:"“»)]+$/g,``);function se(e){let t=C.filter(t=>t.level===e.level).flatMap(e=>e.words);return t.length>8?t:T}function ce(e,t){let n=O([...t.words,...se(t)].filter(t=>t.ru!==e.ru)),r=Array.from(new Set(n.map(e=>e.ru))).slice(0,3);return{t:`mc`,title:`Что значит это слово?`,prompt:e.full,audio:e.full,options:O([e.ru,...r]),answer:e.ru,key:D(e)}}function le(e,t){let n=O([...t.words,...se(t)].filter(t=>t.full!==e.full&&t.ru!==e.ru)),r=Array.from(new Set(n.map(e=>e.full))).slice(0,3);return{t:`mc`,title:`Выберите перевод на немецкий`,prompt:e.ru,options:O([e.full,...r]),answer:e.full,speakOptions:!0,key:D(e)}}function ue(e,t){let n=O([...t.words,...se(t)].filter(t=>t.ru!==e.ru)),r=Array.from(new Set(n.map(e=>e.ru))).slice(0,3);return{t:`mc`,title:`Послушайте и выберите перевод`,prompt:``,audio:e.full,options:O([e.ru,...r]),answer:e.ru,key:D(e)}}function de(e){return{t:`type`,title:`Напишите по-немецки`,prompt:e.ru,ru:e.ru,answer:[e.full,e.de].filter((e,t,n)=>n.indexOf(e)===t),hint:e.g?`с артиклем (der/die/das)`:void 0,key:D(e)}}function fe(e,t){let n=ae(e.de),r=new Set(n.map(e=>oe(e).toLowerCase())),i=[...t.phrases.map(e=>e.de),...t.words.map(e=>e.de)].flatMap(ae).map(oe).filter(e=>e&&!r.has(e.toLowerCase())),a=Array.from(new Set(i)).slice(0,40);return{t:`build`,ru:e.ru,answer:e.de,tokens:O([...n.map(oe),...ee(a,Math.min(3,Math.max(1,Math.floor(n.length/3))))])}}function pe(e,t){let n=ee([...t.phrases,...E.filter(e=>e.lesson!==t.id)].filter(t=>t.ru!==e.ru).slice(0,30),3).map(e=>e.ru);return{t:`mc`,title:`Послушайте фразу. Что она значит?`,prompt:``,audio:e.de,options:O([e.ru,...n]),answer:e.ru,ru:e.de}}function me(e){return{t:`type`,title:`Напишите, что услышали`,prompt:``,audio:e.de,answer:[e.de],ru:e.ru}}function he(e){let t=[{t:`grammar`,lesson:e}],n=e.words;for(let r=0;r<n.length;r+=4){let i=n.slice(r,r+4);i.forEach(e=>t.push({t:`flash`,word:e})),i.length>=2&&t.push({t:`match`,pairs:i.map(e=>[e.full,e.ru])});let a=k(i);t.push(Math.random()<.5?ce(a,e):ue(a,e))}O(n.filter(e=>e.g)).slice(0,3).forEach(e=>t.push({t:`article`,word:e})),O(n).slice(0,3).forEach(n=>t.push(le(n,e)));let r=e.phrases,i=0;for(let n=0;n<r.length;n+=3){let a=r.slice(n,n+3);a.forEach((e,i)=>t.push({t:`phrase`,de:e.de,ru:e.ru,n:n+i+1,total:r.length}));let o=a.map(t=>{let n=i++%3;return n===0?pe(t,e):n===1?fe(t,e):{t:`speak`,de:t.de,ru:t.ru}});t.push(...O(o))}e.gaps.length&&(t.push({t:`rule`,lesson:e}),O(e.gaps).forEach(n=>t.push({t:`gap`,gap:n,rule:e.grammar})));let a=O(r);if(a[0]&&t.push(fe(a[0],e)),a[1]&&t.push(me(a[1])),O(n).slice(0,2).forEach(e=>t.push(de(e))),e.dialog.length){t.push({t:`script`,title:e.dialogTitle,lines:e.dialog});let n=E.filter(t=>t.lesson===e.id).map(e=>e.de);t.push({t:`dialog`,title:e.dialogTitle,lines:e.dialog,distractors:n})}return t}function ge(e){let t=[],n=O(e.words);return t.push({t:`match`,pairs:n.slice(0,5).map(e=>[e.full,e.ru])}),n.slice(0,4).forEach((n,r)=>t.push(r%2?le(n,e):ue(n,e))),O(e.phrases).slice(0,4).forEach((n,r)=>t.push(r%2?fe(n,e):{t:`speak`,de:n.de,ru:n.ru})),O(e.gaps).slice(0,3).forEach(n=>t.push({t:`gap`,gap:n,rule:e.grammar})),n.filter(e=>e.g).slice(0,2).forEach(e=>t.push({t:`article`,word:e})),n.slice(4,6).forEach(e=>t.push(de(e))),O(t)}function _e(e){let t=[];return e.slice(0,15).forEach((e,n)=>{let r=T.find(t=>D(t)===e);if(!r)return;let i=C.find(e=>e.id===r.lesson),a=n%4;t.push(a===0?ce(r,i):a===1?de(r):a===2?ue(r,i):le(r,i))}),t}function ve(e){return O([...e.phrases,...e.dialog.filter(e=>e.who===`B`)]).slice(0,8).map(e=>({t:`speak`,de:e.de,ru:e.ru}))}function ye(e){let t=O(e.phrases);return[...t.slice(0,3).map(t=>pe(t,e)),...t.slice(3,6).map(me),...O(e.words).slice(0,3).map(t=>ue(t,e))]}var j=typeof window<`u`?window:{},M=()=>!!j.claude?.use,be={},xe={};function Se(e){return M()?(be[e]||(be[e]=Promise.resolve().then(()=>j.claude.use(e)).then(t=>(xe[e]=t||null,t||null)).catch(()=>(xe[e]=null,null))),be[e]):Promise.resolve(null)}var Ce=e=>xe[e];function we(e){M()&&Promise.all([`sample`,`dictation`,`tts`,`db`,`user`].map(e=>Se(e))).then(()=>e?.())}var N={apiKey:``,model:`grok-4-fast-non-reasoning`,endpoint:`https://api.x.ai/v1/chat/completions`,speechRate:.95,voiceURI:``,autoSpeak:!0,unlockAll:!1,dailyGoal:50,showTranslit:!0,grokVoice:`eve`,useGrokVoice:!0,useGrokStt:!0,voiceModel:`grok-voice-latest`},Te={xp:0,lessons:{},srs:{},daily:{},streak:0,lastDay:``,chats:0,spoken:0,mistakes:[]},Ee=`dw.settings.v1`,De=`dw.progress.v1`;function Oe(e,t){try{let n=localStorage.getItem(e);return n?{...t,...JSON.parse(n)}:{...t}}catch{return{...t}}}function ke(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}var Ae=Oe(Ee,N),je=Oe(De,Te),Me=new Set,Ne=()=>Me.forEach(e=>e()),Pe=()=>Ae,Fe=()=>je;function Ie(e){Ae={...Ae,...e},ke(Ee,Ae),Ye(),Ne()}function Le(e){let t=JSON.parse(JSON.stringify(je));je=e(t)||t,ke(De,je),Ye(),Ne()}function Re(){je={...Te,lessons:{},srs:{},daily:{},mistakes:[]},ke(De,je),Ye(),Ne()}var ze=[`apiKey`,`endpoint`,`voiceURI`],Be=`dw.updatedAt.v1`,Ve=Number((()=>{try{return localStorage.getItem(Be)}catch{return 0}})()||0),He=null,Ue=null,We=!1,Ge=!1,Ke=`off`,qe=()=>Ke,Je=e=>{Ke=e,Ne()};function Ye(){Ve=Date.now();try{localStorage.setItem(Be,String(Ve))}catch{}Xe()}function Xe(){He&&(clearTimeout(Ue),Ue=setTimeout(Ze,1500))}async function Ze(){if(!He)return;if(We){Ge=!0;return}We=!0,Je(`saving`);let e={...Ae};for(let t of ze)delete e[t];try{await He.set({progress:je,settings:e,updatedAt:Ve}),Je(`synced`)}catch{Je(`error`)}We=!1,Ge&&(Ge=!1,Ze())}async function Qe(){let[e,t]=await Promise.all([Se(`db`),Se(`user`)]);if(!e||!t)return;Je(`connecting`);let n=null;try{n=await t.id()}catch{}if(!n){Je(`off`);return}He=e.doc(`data/users/${n}/state`);let r=setTimeout(()=>{Ke===`connecting`&&Je(`error`)},1e4),i=!0;He.onSnapshot(e=>{clearTimeout(r);let t=e.exists?e.data():null,n=Number(t?.updatedAt||0);if(t&&n>Ve){je={...Te,...t.progress||{}};let e={};for(let t of ze)e[t]=Ae[t];Ae={...N,...t.settings||{},...e},Ve=n,ke(De,je),ke(Ee,Ae);try{localStorage.setItem(Be,String(n))}catch{}Je(`synced`),Ne()}else i&&(!t||n<Ve)?Ze():Je(`synced`);i=!1},()=>{clearTimeout(r),Je(`error`)})}function $e(){return JSON.stringify(je)}function et(e){je={...Te,...JSON.parse(e)},ke(De,je),Ne()}function tt(){let[,e]=(0,l.useState)(0);return(0,l.useEffect)(()=>{let t=()=>e(e=>e+1);return Me.add(t),()=>{Me.delete(t)}},[]),{settings:Ae,progress:je}}var nt=()=>{let e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`};function rt(e){Le(t=>{let n=nt();if(t.xp+=e,t.daily[n]=(t.daily[n]||0)+e,t.lastDay!==n){let e=new Date;e.setDate(e.getDate()-1);let r=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`;t.streak=t.lastDay===r?t.streak+1:1,t.lastDay=n}})}var it=[0,8,24,72,168,336,720];function at(e){Le(t=>{for(let n of e)t.srs[n]||(t.srs[n]={box:0,due:Date.now()+288e5,seen:0,wrong:0})})}function ot(e,t){Le(n=>{let r=n.srs[e]||{box:0,due:0,seen:0,wrong:0};r.seen++,t?r.box=Math.min(6,r.box+1):(r.box=Math.max(0,r.box-2),r.wrong++),r.due=Date.now()+it[r.box]*36e5+(t?0:6e5),n.srs[e]=r})}function st(){let e=Date.now();return Object.entries(je.srs).filter(([,t])=>t.due<=e).sort((e,t)=>e[1].box-t[1].box).map(([e])=>e)}function ct(e,t){Le(n=>{n.mistakes=[{de:e,ru:t,at:Date.now()},...n.mistakes.filter(t=>t.de!==e)].slice(0,100)})}var lt=`dw.resume.v1`;function ut(){try{return JSON.parse(localStorage.getItem(lt)||`{}`)}catch{return{}}}function dt(e){let t=ut()[e];return t&&Array.isArray(t.queue)&&t.i>0&&t.i<t.queue.length?t:null}function ft(e,t){let n=ut();n[e]=t;try{localStorage.setItem(lt,JSON.stringify(n))}catch{}}function pt(e){let t=ut();if(t[e]){delete t[e];try{localStorage.setItem(lt,JSON.stringify(t))}catch{}}}var mt=`https://api.x.ai/v1`,ht=()=>!!Pe().apiKey,gt=()=>({authorization:`Bearer ${Pe().apiKey}`}),_t=class extends Error{};async function vt(e){let t=``;try{t=await e.text()}catch{}let n=t;try{let e=JSON.parse(t);n=e?.error?.message||e?.error||e?.message||t}catch{}return e.status===401||e.status===403?`Ключ Grok не принят — проверьте его в Профиле.`:e.status===429?`Слишком много запросов к Grok или закончился баланс. Подождите или пополните баланс в console.x.ai.`:`Grok (${e.status}): ${String(n).slice(0,200)}`}var yt=[{id:`eve`,name:`Eve — женский, тёплый`},{id:`ara`,name:`Ara — женский, мягкий`},{id:`rex`,name:`Rex — мужской, уверенный`},{id:`sal`,name:`Sal — нейтральный`},{id:`leo`,name:`Leo — мужской, спокойный`}],bt=new Map,xt=null;async function St(e,t=1){let n=Pe().grokVoice||`eve`,r=`${n}|${t.toFixed(2)}|${e}`,i=bt.get(r);if(i)return i;let a=await fetch(`${mt}/tts`,{method:`POST`,headers:{...gt(),"content-type":`application/json`},body:JSON.stringify({text:e,language:`de`,voice_id:n,speed:Math.min(1.5,Math.max(.7,t)),output_format:{codec:`mp3`,sample_rate:24e3,bit_rate:64e3}})});if(!a.ok)throw new _t(await vt(a));let o=await a.blob(),s=URL.createObjectURL(o.type?o:new Blob([o],{type:`audio/mpeg`}));if(bt.size>300){let e=bt.keys().next().value;URL.revokeObjectURL(bt.get(e)),bt.delete(e)}return bt.set(r,s),s}async function Ct(e,t,n){let r=await St(e,t);wt();let i=new Audio(r);xt=i,i.onended=()=>{xt===i&&(xt=null),n?.()},i.onerror=()=>n?.(),await i.play()}function wt(){if(xt){try{xt.pause()}catch{}xt=null}}async function Tt(e,t=[]){let n=new FormData;n.append(`language`,`de`);for(let e of t.slice(0,50))e.length<=50&&n.append(`keyterm`,e);let r=e.type.includes(`mp4`)?`m4a`:e.type.includes(`ogg`)?`ogg`:e.type.includes(`wav`)?`wav`:`webm`;n.append(`file`,e,`speech.${r}`);let i=await fetch(`${mt}/stt`,{method:`POST`,headers:gt(),body:n});if(!i.ok)throw new _t(await vt(i));let a=await i.json();return{text:String(a.text||``).trim(),words:Array.isArray(a.words)?a.words:[],language:a.language}}async function Et(e){let t=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0}}),n=[`audio/webm;codecs=opus`,`audio/webm`,`audio/mp4`,`audio/ogg`].find(e=>window.MediaRecorder?.isTypeSupported?.(e))||``,r=new MediaRecorder(t,n?{mimeType:n}:void 0),i=[];r.ondataavailable=e=>{e.data.size&&i.push(e.data)};let a=new AudioContext,o=a.createMediaStreamSource(t),s=a.createAnalyser();s.fftSize=1024,o.connect(s);let c=new Float32Array(s.fftSize),l=0,u=!1,d=Date.now(),f=!1,p=Date.now(),m=setInterval(()=>{s.getFloatTimeDomainData(c);let t=0;for(let e of c)t+=e*e;l=Math.sqrt(t/c.length),l>.02&&(u=!0,d=Date.now());let n=Date.now();(u&&n-d>(e.silenceMs??1500)||n-p>(e.maxMs??2e4)||!u&&n-p>8e3)&&h()},100),h=()=>{if(!f){f=!0,clearInterval(m);try{r.stop()}catch{}}};return r.onstop=()=>{t.getTracks().forEach(e=>e.stop()),a.close().catch(()=>{}),e.onStop(u&&i.length?new Blob(i,{type:r.mimeType||`audio/webm`}):null)},r.start(250),{stop:h,level:()=>l}}async function Dt(){let e=await fetch(`${mt}/realtime/client_secrets`,{method:`POST`,headers:{...gt(),"content-type":`application/json`},body:JSON.stringify({expires_after:{seconds:600}})});if(!e.ok)throw new _t(await vt(e));let t=await e.json(),n=t.value||t.client_secret?.value;if(!n)throw new _t(`Grok не выдал токен для голосового режима.`);return n}var Ot=24e3;function kt(e){let t=new Uint8Array(e.buffer,e.byteOffset,e.byteLength),n=``;for(let e=0;e<t.length;e+=32768)n+=String.fromCharCode(...t.subarray(e,e+32768));return btoa(n)}function At(e){let t=atob(e),n=t.length>>1,r=new Float32Array(n);for(let e=0;e<n;e++){let n=t.charCodeAt(2*e)|t.charCodeAt(2*e+1)<<8;n>=32768&&(n-=65536),r[e]=n/32768}return r}function jt(e,t,n){let r=t/n,i=Math.floor(e.length/r),a=new Int16Array(i);for(let t=0;t<i;t++){let n=Math.floor(t*r),i=Math.min(e.length,Math.floor((t+1)*r)),o=0,s=0;for(let t=n;t<i;t++)o+=e[t],s++;let c=Math.max(-1,Math.min(1,s?o/s:0));a[t]=c<0?c*32768:c*32767}return a}async function Mt(e,t,n={}){t.onStatus(`connecting`);let r=Pe(),i=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}}),a=new AudioContext;await a.resume().catch(()=>{});let o=await Dt(),s=new WebSocket(`wss://api.x.ai/v1/realtime?model=${encodeURIComponent(r.voiceModel||`grok-voice-latest`)}`,[`xai-client-secret.${o}`]),c=!1,l=!1,u=0,d=0,f=new Set,p=()=>{f.forEach(e=>{try{e.stop()}catch{}}),f.clear(),d=0},m={},h=``,g=e=>{s.readyState===WebSocket.OPEN&&s.send(JSON.stringify(e))},_=a.createMediaStreamSource(i),v=a.createScriptProcessor(4096,1,1),y=a.createGain();y.gain.value=0,_.connect(v),v.connect(y),y.connect(a.destination),v.onaudioprocess=e=>{let t=e.inputBuffer.getChannelData(0),n=0;for(let e=0;e<t.length;e+=8)n+=t[e]*t[e];u=Math.sqrt(n/(t.length/8)),l||s.readyState!==WebSocket.OPEN||g({type:`input_audio_buffer.append`,audio:kt(jt(t,a.sampleRate,Ot))})};let b=e=>{let n=At(e);if(!n.length)return;let r=a.createBuffer(1,n.length,Ot);r.getChannelData(0).set(n);let i=a.createBufferSource();i.buffer=r,i.connect(a.destination);let o=Math.max(a.currentTime+.02,d);i.start(o),d=o+r.duration,f.add(i),i.onended=()=>{f.delete(i),!f.size&&!c&&t.onStatus(`listening`)}},x=!1,S=()=>{x||(x=!0,n.greet?(g({type:`conversation.item.create`,item:{type:`message`,role:`user`,content:[{type:`input_text`,text:n.greet}]}}),g({type:`response.create`}),t.onStatus(`thinking`)):t.onStatus(`listening`))};s.onopen=()=>{g({type:`session.update`,session:{instructions:e,voice:r.grokVoice||`eve`,turn_detection:{type:`server_vad`},audio:{input:{format:{type:`audio/pcm`,rate:Ot}},output:{format:{type:`audio/pcm`,rate:Ot}}}}}),g({type:`session.update`,session:{audio:{input:{format:{type:`audio/pcm`,rate:Ot},transcription:{model:`grok-transcribe`,...n.keyterms?.length?{keyterms:n.keyterms.slice(0,100).filter(e=>e.length<=50)}:{}}},output:{format:{type:`audio/pcm`,rate:Ot},speed:Math.min(1.5,Math.max(.7,r.speechRate*.95))}}}}),setTimeout(S,2500)};let C=0;s.onmessage=e=>{if(typeof e.data!=`string`)return;let n;try{n=JSON.parse(e.data)}catch{return}switch(n.type){case`input_audio_buffer.speech_started`:p(),t.onStatus(`user-speaking`);break;case`input_audio_buffer.speech_stopped`:t.onStatus(`thinking`);break;case`conversation.item.input_audio_transcription.updated`:case`conversation.item.input_audio_transcription.delta`:(n.transcript||n.delta)&&t.onUserText(n.item_id||`u`,n.transcript??n.delta,!1);break;case`conversation.item.input_audio_transcription.completed`:t.onUserText(n.item_id||`u`,n.transcript||``,!0);break;case`response.created`:h=n.response?.id||String(Date.now()),m[h]=``;break;case`response.output_audio.delta`:case`response.audio.delta`:t.onStatus(`speaking`),b(n.delta||n.audio||``);break;case`response.output_audio_transcript.delta`:case`response.audio_transcript.delta`:case`response.output_text.delta`:case`response.text.delta`:{let e=n.response_id||h;m[e]=(m[e]||``)+(n.delta||``),t.onAiText(e,m[e],!1);break}case`response.output_audio_transcript.done`:case`response.audio_transcript.done`:{let e=n.response_id||h;n.transcript&&(m[e]=n.transcript),t.onAiText(e,m[e]||``,!0);break}case`response.done`:f.size||t.onStatus(`listening`);break;case`session.updated`:C++,C>=1&&S();break;case`error`:{let e=n.error?.message||n.message||`Ошибка голосового режима`;if(/session|transcri|keyterm|speed|param|field|invalid/i.test(e)&&s.readyState===WebSocket.OPEN){console.warn(`Grok voice:`,e),S();break}t.onStatus(`error`,e);break}}},s.onerror=()=>{c||t.onStatus(`error`,`Не удалось подключиться к голосовому режиму Grok.`)},s.onclose=e=>{c||(w(),t.onStatus(`closed`,e.reason||void 0))};let w=()=>{c=!0;try{v.disconnect(),_.disconnect()}catch{}i.getTracks().forEach(e=>e.stop()),p(),a.close().catch(()=>{})};return{close:()=>{if(!c){w();try{s.close()}catch{}t.onStatus(`closed`)}},setMuted:e=>{l=e},sendText:e=>{g({type:`conversation.item.create`,item:{type:`message`,role:`user`,content:[{type:`input_text`,text:e}]}}),g({type:`response.create`}),t.onStatus(`thinking`)},level:()=>u}}var Nt=[];function Pt(){typeof speechSynthesis<`u`&&(Nt=speechSynthesis.getVoices())}typeof speechSynthesis<`u`&&(Pt(),speechSynthesis.onvoiceschanged=Pt);function Ft(){return Pt(),Nt.filter(e=>e.lang.toLowerCase().startsWith(`de`))}var It=()=>typeof speechSynthesis<`u`,Lt=()=>It()||!!Ce(`tts`)||ht();function Rt(){let e=Ce(`tts`);return e?It()&&Ft().length?null:e:null}var zt=0;function P(e,t={}){let n=Pe(),r=++zt;ht()&&n.useGrokVoice&&(!t.lang||t.lang.startsWith(`de`))?(It()&&speechSynthesis.cancel(),Ct(e,(t.rate??1)*n.speechRate,t.onEnd).catch(()=>{r===zt&&Bt(e,t)})):Bt(e,t)}function Bt(e,t){let n=Pe(),r=Rt();if(r){let i=Math.min(1.5,Math.max(.7,(t.rate??1)*n.speechRate));r.speak(e,{language:(t.lang||`de-DE`).slice(0,2),rate:i}).then(()=>t.onEnd?.(),()=>t.onEnd?.());return}if(!It()){t.onEnd?.();return}speechSynthesis.cancel();let i=new SpeechSynthesisUtterance(e);if(i.lang=t.lang||`de-DE`,i.rate=(t.rate??1)*n.speechRate,i.lang.startsWith(`de`)){let e=Ft(),t=e.find(e=>e.voiceURI===n.voiceURI)||e.find(e=>/google|natural|online/i.test(e.name))||e[0];t&&(i.voice=t)}i.onend=()=>t.onEnd?.(),i.onerror=()=>t.onEnd?.(),speechSynthesis.speak(i)}function Vt(){zt++,wt(),It()&&speechSynthesis.cancel();try{Ce(`tts`)?.stop()}catch{}}var Ht=typeof window<`u`?window.SpeechRecognition||window.webkitSpeechRecognition:null,Ut=M()?null:Ht,Wt=()=>ht()&&Pe().useGrokStt&&!!navigator.mediaDevices?.getUserMedia&&typeof MediaRecorder<`u`,Gt=()=>Wt()||!!Ut||!!Ce(`dictation`),Kt=()=>Wt()?`grok`:Ce(`dictation`)?`claude`:Ut?`browser`:`none`;function qt(e){if(Wt())return Yt(e);let t=Ce(`dictation`);if(t)return Jt(t,e);if(!Ut)return e.onError?.(`Распознавание речи не поддерживается этим браузером. Используйте Chrome или Edge.`),null;let n=new Ut;n.lang=`de-DE`,n.interimResults=!0,n.maxAlternatives=5,n.continuous=!!e.continuous,n.onresult=t=>{let n=``,r=!1,i=[];for(let e=0;e<t.results.length;e++){let a=t.results[e];if(n+=a[0].transcript,a.isFinal&&(r=!0),e===t.results.length-1)for(let e=0;e<a.length;e++)i.push(a[e].transcript)}e.onResult(n.trim(),i,r)},n.onerror=t=>{e.onError?.({"not-allowed":`Нет доступа к микрофону. Разрешите его в настройках браузера.`,"no-speech":`Ничего не слышно — попробуйте ещё раз, говорите громче.`,network:`Ошибка сети распознавания речи.`}[t.error]||`Ошибка распознавания: `+t.error)},n.onend=()=>e.onEnd?.();try{n.start()}catch{}return{stop:()=>{try{n.stop()}catch{}}}}function Jt(e,t){let n=``,r=``,i=!1,a=[],o=()=>{if(i)return;i=!0;let e=(n||r).trim();e&&t.onResult(e,[],!0),a.forEach(e=>{try{e()}catch{}}),t.onEnd?.()};return a.push(e.onPartial(({text:e})=>{r=e,t.onResult((n+` `+e).trim(),[],!1)})),a.push(e.onFinal(({text:e})=>{n=(n+` `+e).trim(),r=``,t.onResult(n,[],!1)})),a.push(e.onState(({state:e,reason:n})=>{e===`idle`&&(n===`not_granted`&&t.onError?.(`Доступ к диктовке не разрешён. Его можно включить в меню разрешений артефакта.`),o())})),e.start({language:`de-DE`}).catch(e=>{t.onError?.({not_granted:`Вы не разрешили диктовку. Можно отвечать текстом.`,dismissed:`Запрос на диктовку закрыт — нажмите микрофон ещё раз.`,no_gesture:`Нажмите на микрофон ещё раз.`,unavailable:`Диктовка здесь недоступна (работает в Chrome/Edge и приложении Claude для компьютера).`,rate_limited:`Слишком много запросов диктовки — подождите немного.`}[e?.code]||`Ошибка диктовки: `+(e?.message||e)),o()}),{stop:()=>{e.stop().catch(()=>{}).finally(o)}}}function Yt(e){let t=null,n=!1,r=!1,i=()=>{r||(r=!0,e.onEnd?.())};return Vt(),e.onStage?.(`recording`),Et({onStop:async t=>{if(!t)e.onError?.(`Ничего не слышно — нажмите на микрофон и говорите громче.`),i();else{e.onStage?.(`processing`),e.onAudio?.(t);try{let n=await Tt(t,e.keyterms||[]);n.text?e.onResult(n.text,[],!0):e.onError?.(`Grok не разобрал речь — попробуйте ещё раз.`)}catch(t){e.onError?.(t?.message||`Ошибка распознавания Grok`)}i()}}}).then(e=>{t=e,n&&e.stop()}).catch(t=>{e.onError?.(t?.name===`NotAllowedError`?`Нет доступа к микрофону. Разрешите его в настройках браузера.`:`Микрофон недоступен: `+(t?.message||t)),i()}),{stop:()=>{n=!0,t?.stop()}}}var F=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),I=e(((e,t)=>{t.exports=F()}))();function Xt({text:e,auto:t,big:n,label:r}){let[i,a]=(0,l.useState)(!1),[o,s]=(0,l.useState)(!1),c=(t=i)=>{s(!0),P(e,{rate:t?.6:1,onEnd:()=>s(!1)})};return(0,l.useEffect)(()=>{if(t){let e=setTimeout(()=>c(!1),250);return()=>clearTimeout(e)}},[e]),(0,I.jsxs)(`span`,{className:`audio-group`,children:[(0,I.jsxs)(`button`,{type:`button`,className:`audio-btn`+(n?` big`:``)+(o?` playing`:``),onClick:()=>{c(!1),a(!1)},title:`Прослушать`,children:[`🔊`,r?(0,I.jsx)(`span`,{className:`audio-label`,children:r}):null]}),(0,I.jsx)(`button`,{type:`button`,className:`audio-btn slow`+(n?` big`:``),onClick:()=>{a(!0),c(!0)},title:`Медленно`,children:`🐢`})]})}var Zt=e=>e===`der`?`var(--der)`:e===`die`?`var(--die)`:e===`das`?`var(--das)`:`inherit`;function Qt({w:e,size:t=1}){return(0,I.jsxs)(`span`,{style:{fontSize:`${t}em`},children:[e.g&&(0,I.jsxs)(`span`,{style:{color:Zt(e.g),fontWeight:700},children:[e.g,` `]}),(0,I.jsx)(`span`,{children:e.de})]})}function $t({text:e}){let t=e.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);return(0,I.jsx)(I.Fragment,{children:t.map((e,t)=>e.startsWith(`**`)?(0,I.jsx)(`b`,{children:e.slice(2,-2)},t):e.startsWith("`")?(0,I.jsx)(`code`,{children:e.slice(1,-1)},t):(0,I.jsx)(`span`,{children:e},t))})}function en({text:e}){return(0,I.jsx)(`div`,{className:`md`,children:e.split(`
`).map((e,t)=>{let n=e.trim();return n?/^#{1,3}\s/.test(n)?(0,I.jsx)(`h4`,{children:(0,I.jsx)($t,{text:n.replace(/^#+\s/,``)})},t):/^[-*•]\s/.test(n)?(0,I.jsxs)(`div`,{className:`li`,children:[`• `,(0,I.jsx)($t,{text:n.replace(/^[-*•]\s/,``)})]},t):(0,I.jsx)(`p`,{children:(0,I.jsx)($t,{text:n})},t):(0,I.jsx)(`div`,{style:{height:6}},t)})})}function tn({onChar:e}){return(0,I.jsx)(`div`,{className:`umlauts`,children:[`ä`,`ö`,`ü`,`ß`,`Ä`,`Ö`,`Ü`].map(t=>(0,I.jsx)(`button`,{type:`button`,onMouseDown:e=>e.preventDefault(),onClick:()=>e(t),children:t},t))})}function nn({text:e}){return(0,I.jsxs)(`div`,{className:`spinner-wrap`,children:[(0,I.jsx)(`div`,{className:`spinner`}),e&&(0,I.jsx)(`span`,{children:e})]})}var rn=class extends Error{};function an(e){let t=e.filter(e=>e.role===`system`).map(e=>e.content).join(`

`),n=e.filter(e=>e.role!==`system`),r=[],i=t?`ИНСТРУКЦИИ (следуй им всегда):
`+t+`

---
`:``;n.length&&n[0].role===`user`||r.push({role:`user`,content:i+`(Начало разговора.)`});for(let e of n){let t=r[r.length-1];t&&t.role===e.role?t.content+=`

`+e.content:r.push({...e,content:r.length?e.content:i+e.content})}return r[r.length-1].role!==`user`&&r.push({role:`user`,content:`(Продолжай.)`}),r}async function on(e,t,n){let r=an(t);n.json&&(r[r.length-1].content+="\n\nОтветь ТОЛЬКО валидным JSON-объектом, без пояснений и без ```.");try{return(await e(r,{cache:!1,modelTier:`default`})).text}catch(e){throw new rn({not_granted:`Доступ к ИИ не разрешён. Разрешите его в меню разрешений артефакта и попробуйте снова.`,rate_limited:`Слишком много запросов к ИИ. Подождите минуту и попробуйте снова.`}[e?.code]||`Ошибка ИИ: `+(e?.message||String(e)))}}async function sn(e,t={}){let n=Ce(`sample`);if(n)return on(n,e,t);let r=Pe(),i=!/^https?:/.test(r.endpoint)&&typeof location<`u`&&!/^(localhost|127\.|192\.168\.)/.test(location.hostname)?{...r,endpoint:`https://api.x.ai/v1/chat/completions`}:r,a=/^https?:/.test(i.endpoint);if(a&&!i.apiKey)throw new rn(`Для прямого подключения нужен API-ключ Grok (Настройки → ИИ).`);let o={"content-type":`application/json`};i.apiKey&&(o.authorization=`Bearer ${i.apiKey}`);let s={model:i.model,messages:e,temperature:t.temperature??.7,max_tokens:t.maxTokens??1200,stream:!1};t.json&&(s.response_format={type:`json_object`});let c;try{c=await fetch(i.endpoint,{method:`POST`,headers:o,body:JSON.stringify(s)})}catch{throw new rn(`Не удалось связаться с сервером ИИ. Проверьте интернет и настройки подключения.`)}let l=await c.text(),u=null;try{u=JSON.parse(l)}catch{}if(!c.ok){let e=u?.error?.message||u?.error||l.slice(0,200);throw c.status===401||c.status===403?new rn(`Ключ Grok не принят (`+c.status+`). Проверьте ключ в Настройках. `+(e||``)):c.status===404&&!a?new rn(`Прокси /api/chat не найден. Запустите приложение через «npm run dev» / «npm start» или выберите прямое подключение в Настройках.`):new rn(`Ошибка ИИ (${c.status}): ${typeof e==`string`?e:JSON.stringify(e)}`)}let d=u?.choices?.[0]?.message?.content;if(typeof d!=`string`)throw new rn(`Пустой ответ от ИИ.`);return d}function cn(e){let t=e.replace(/^```(?:json)?/m,``).replace(/```\s*$/m,``).trim();try{return JSON.parse(t)}catch{}let n=t.search(/[[{]/),r=Math.max(t.lastIndexOf(`}`),t.lastIndexOf(`]`));if(n>=0&&r>n)return JSON.parse(t.slice(n,r+1));throw new rn(`ИИ вернул ответ в неожиданном формате. Попробуйте ещё раз.`)}async function ln(e,t={}){return cn(await sn(e,{...t,json:!0}))}var un=()=>Ce(`sample`)?`claude`:`grok`,dn=()=>{if(Ce(`sample`))return!0;if(M())return!1;let e=Pe();return!!e.apiKey||!/^https?:/.test(e.endpoint)&&/^(localhost|127\.|192\.168\.)/.test(location.hostname)},fn=`Ты — дружелюбный и терпеливый преподаватель немецкого языка для русскоговорящих учеников. Объясняешь кратко, понятно, с примерами, на русском языке. Немецкие примеры всегда пиши правильно, с умлаутами и заглавными буквами у существительных.`,pn=Object.fromEntries(`
bis|до
wiedersehen|свидания (auf Wiedersehen — до свидания)
geht's|идёт (= geht es; «Wie geht's?» — как дела?)
geht|идёт (gehen)
ist|есть, является (sein, он/она/оно)
bin|есть, являюсь (sein, я)
bist|есть, являешься (sein, ты)
sind|есть, являемся/являются (sein, мы/они/Вы)
seid|есть (sein, вы)
war|был (sein)
waren|были (sein)
warst|ты был (sein)
das|это; артикль ср. рода
der|артикль м. рода; (Dativ/Genitiv) ж. рода
die|артикль ж. рода / мн. числа
den|артикль м. рода (Akkusativ) / мн. ч. (Dativ)
dem|артикль м./ср. рода (Dativ)
des|артикль м./ср. рода (Genitiv)
ein|один, какой-то (м./ср. род)
eine|одна, какая-то (ж. род)
einen|какой-то (м. род, Akkusativ)
einem|какому-то (Dativ)
einer|какой-то (ж. род, Dativ); кто-то один
eines|какого-то (Genitiv)
kein|никакой, не (м./ср. род)
keine|никакая, не; никаких
keinen|никакого (Akkusativ)
keiner|никто
und|и
oder|или
aber|но
auch|тоже, также
nicht|не
ich|я
du|ты
er|он
sie|она; они
es|оно; это
wir|мы
ihr|вы; её; их
mich|меня
dich|тебя
sich|себя, -ся
uns|нас, нам
euch|вас, вам
mir|мне
dir|тебе
ihm|ему
ihn|его
ihnen|им; (Ihnen) Вам
mein|мой
meine|моя, мои
meinen|моего, моим
meinem|моему
meiner|моей; моих
meines|моего (Genitiv)
dein|твой
deine|твоя, твои
deiner|твоей
sein|быть; его (притяж.)
seine|его (притяж., ж. р./мн. ч.)
seiner|его (Dativ/Genitiv)
unser|наш
unsere|наша, наши
unserer|нашей
in|в
im|в (= in dem)
ins|в (= in das, направление)
aus|из
an|у, на (вертикальной поверхности), к
am|у, в (= an dem); в (день)
ans|к (= an das)
auf|на
mit|с
von|от, из, о
vom|от (= von dem)
zu|к; слишком; (с инфинитивом) — частица
zum|к (= zu dem)
zur|к (= zu der)
nach|после; в (город/страну)
um|в (о времени); вокруг
für|для
ohne|без
bei|у, при
beim|у, при (= bei dem)
seit|с (какого-то времени)
durch|через
ab|с (какого-то момента)
pro|в, за (в неделю/в час)
aufs|на (= auf das)
wie|как
was|что
wer|кто
wo|где
woher|откуда
wohin|куда
wann|когда
warum|почему
welche|какая, какие
welchen|какой (Akkusativ)
welchem|каком
wem|кому
wen|кого
woran|о чём
worauf|на что, чего
hier|здесь, вот
da|там; тут; тогда
dort|там
noch|ещё
schon|уже
sehr|очень
so|так, такой
nur|только
viel|много
viele|многие, много
mehr|больше
etwas|что-то; немного
alles|всё
nichts|ничего
gern|охотно (= люблю делать)
lieber|охотнее, лучше
liebsten|(am liebsten) больше всего
einmal|один раз
noch einmal|ещё раз
dann|потом
jetzt|сейчас
heute|сегодня
immer|всегда
oft|часто
ja|да
nein|нет
doch|же; (в ответ) ещё как, да
mal|-ка, разок
also|итак, значит
denn|ведь, потому что; (в вопросе) же
ganz|совсем, весь
gerade|как раз, сейчас
eigentlich|вообще-то, собственно
vielleicht|может быть
wirklich|действительно
genau|точно
klar|ясно, конечно
super|супер
toll|классно
okay|окей
oh|ой
hm|хм
haha|ха-ха
wow|ого
hey|эй, привет
ach|ах
bisschen|немного (ein bisschen)
deutsch|немецкий (язык)
freund|друг
freundin|подруга
freunde|друзья
freut|радует (freuen; «Freut mich!» — очень приятно)
anna|Анна (имя)
max|Макс (имя)
lukas|Лукас (имя)
peter|Петер (имя)
ivan|Иван (имя)
daniel|Даниэль (имя)
lena|Лена (имя)
paul|Пауль (имя)
petrova|Петрова (фамилия)
krause|Краузе (фамилия)
kafka|Кафка (писатель)
klee|Клее (художник)
alexander|Александр (имя)
fleming|Флеминг (фамилия)
berlin|Берлин
münchen|Мюнхен
hamburg|Гамбург
wien|Вена
moskau|Москва
kiew|Киев
dresden|Дрезден
heidelberg|Гейдельберг
nowosibirsk|Новосибирск
paris|Париж
österreich|Австрия
kasachstan|Казахстан
italien|Италия
spanien|Испания
kroatien|Хорватия
schweiz|Швейцария
kanada|Канада
englisch|английский
siemens|Siemens (компания)
null|ноль
nummer|номер
euro|евро
kostet|стоит (kosten)
kosten|стоить; расходы
rufe|звоню (anrufen: rufe … an)
rief|позвонил (anrufen)
dreizehn|тринадцать
sechzehn|шестнадцать
elf|одиннадцать
einundzwanzig|двадцать один
fünfundzwanzig|двадцать пять
achtundzwanzig|двадцать восемь
neunundvierzig|сорок девять
fünfzig|пятьдесят
achtzig|восемьдесят
achthundert|восемьсот
hast|имеешь (haben)
hat|имеет (haben)
habe|имею (haben)
habt|имеете (haben)
hatte|имел (haben)
hatten|имели (haben)
hattest|ты имел (haben)
frau|женщина; госпожа
mann|мужчина; муж
lehrerin|учительница
geschwister|братья и сёстры
gut|хорошо
hunger|голод (Hunger haben — быть голодным)
durst|жажда (Durst haben — хотеть пить)
schmeckt|на вкус (schmecken; «Das schmeckt gut» — это вкусно)
frühstück|завтрак
eier|яйца
appetit|аппетит (Guten Appetit — приятного аппетита)
frisch|свежий
stimmt|верно (stimmen; «Stimmt so!» — сдачи не надо)
macht|делает; (о сумме) составляет
cappuccino|капучино
apfelkuchen|яблочный пирог
gehen|идти
gehe|иду (gehen)
gehst|идёшь (gehen)
kino|кино, кинотеатр
idee|идея
fängt|начинает (anfangen: fängt … an)
sehe|вижу (sehen; fernsehen: sehe … fern)
sehen|видеть
siehst|видишь; (siehst … aus) выглядишь
sieht|видит; (sieht … aus) выглядит
fern|далеко; (fernsehen) смотреть ТВ
kaufe|покупаю (kaufen; einkaufen: kaufe … ein)
kaufen|покупать
machst|делаешь (machen)
machen|делать
mache|делаю (machen)
mach|делай (machen)
kann|могу, может (können)
kannst|можешь (können)
fahre|еду (fahren)
fährt|едет (fahren)
fahren|ехать
gitarre|гитара
rad|велосипед (Rad fahren — кататься на велосипеде)
fahrrad|велосипед
tennis|теннис
bücher|книги
liest|читает (lesen)
gibt|даёт (geben; «es gibt» — есть, имеется)
gab|было, имелось (es gab)
hoch|высокий
neu|новый
neue|новая
neuen|новый (Akk.), новые
neuer|новый
neues|новое
bequem|удобный
dritten|третьем (dritte)
stock|этаж
wohnzimmer|гостиная
modern|современный
nimm|возьми (nehmen)
minuten|минуты
vielen|многим; «Vielen Dank» — большое спасибо
dank|спасибо (Vielen Dank)
entschuldigung|извините
fuß|нога (zu Fuß — пешком)
suche|ищу (suchen)
dieses|этот (ср. род)
dieser|этот (м. род)
diese|эта, эти
diesen|этот (Akk.)
karte|карта; (банковская) карточка
m|M (размер)
kabine|примерочная
farbe|цвет
mantel|пальто
wird|становится; (будущее время) будет
fahren|ехать
ersten|первое (число), первого
fünften|пятое (число)
märz|март
mai|май
august|август
regnet|идёт дождь (regnen)
regnete|шёл дождь
regnen|идти (о дожде)
scheint|светит (scheinen)
schneit|идёт снег (schneien)
geschneit|шёл снег
park|парк
eingang|вход
perfekt|отлично, идеально
picknick|пикник
grad|градус
kurs|курс
beginnt|начинается (beginnen)
muss|должен (müssen)
musst|должен (ты)
man|«мы/люди» (безличное: man sagt — говорят)
woche|неделя
wochen|недели
darf|можно, разрешено (dürfen)
weh|больно (wehtun: tut … weh)
tut|делает; (tut weh) болит
tun|делать; (tun weh) болят
bleiben|оставаться
bleibe|остаюсь
bleibt|остаётся
bleibst|остаёшься
fehlt|не хватает (fehlen; «Was fehlt Ihnen?» — что Вас беспокоит?)
sport|спорт
rauchen|курить
raucht|курит
halsschmerzen|боль в горле
kopfschmerzen|головная боль
dreimal|три раза
täglich|ежедневно
besserung|выздоровление (Gute Besserung — выздоравливай)
grippe|грипп
rezept|рецепт
doktor|доктор
sollst|должен, следует тебе (sollen)
soll|должен (по чьему-то указанию)
sollen|следует, должны
sollten|следовало бы
lange|долго
dein|твой
gearbeitet|работал (arbeiten)
gegrillt|жарил на гриле
geredet|разговаривал (reden)
komödie|комедия
pizza|пицца
fußball|футбол
eingekauft|сделал покупки (einkaufen)
brief|письмо
jeden|каждый (Akk.)
jeder|каждый
auto|машина, автомобиль
autos|машины
gegangen|пошёл, ходил (gehen)
stunden|часы (длительность)
stunde|час
fantastisch|фантастический
geblieben|остался (bleiben)
zurückgekommen|вернулся (zurückkommen)
braun|загорелый; коричневый
gedauert|длился (dauern)
geschwommen|плавал (schwimmen)
heiß|жаркий, горячий
sonnig|солнечный
fotos|фотографии
foto|фото
gefällt|нравится (gefallen)
deiner|твоей
tasche|сумка
verstehe|понимаю (verstehen)
verstehen|понимать
nächste|следующая
nächstes|следующее (nächstes Jahr — в следующем году)
schmuck|украшения
kindern|детям (Kinder, Dativ)
schokolade|шоколад
schenk|подари (schenken)
letztes|прошлый (letztes Jahr)
letzte|прошлая, последняя
spiel|игра
hilft|помогает (helfen)
handy|мобильный телефон
handys|мобильные телефоны
bild|картина
bildes|картины (Genitiv)
kühlschrank|холодильник
katze|кошка
stell|поставь (stellen)
flasche|бутылка
flaschen|бутылки
gefunden|нашёл (finden)
schläft|спит (schlafen)
karton|коробка
häng|повесь (hängen)
hammer|молоток
waschmaschine|стиральная машина
vase|ваза
glaube|верю, думаю (glauben)
glaubst|веришь, думаешь
recht|право; (recht haben) быть правым
mag|нравится, люблю (mögen)
magst|любишь (mögen)
lernen|учить, учиться
lerne|учу (lernen)
job|работа
jobs|рабочие места
sagt|говорит (sagen)
sagen|сказать
nett|милый, приятный
netten|милого, милыми
netter|милый
ingenieurin|инженер (женщина)
programmiererin|программистка
gewechselt|сменил (wechseln)
wechseln|менять
leben|жить; жизнь
lebe|живу
weniger|меньше
denkst|думаешь (denken)
denke|думаю
länger|дольше, длиннее
besten|лучше всего (am besten)
weg|путь, дорога; прочь
brauche|нуждаюсь, мне нужно (brauchen)
brauchen|нуждаться
braucht|нуждается, нужен
höchsten|выше всего (am höchsten)
älter|старше
wollen|хотеть
will|хочу, хочет (wollen)
willst|хочешь
wolltest|ты хотел
ziehen|переезжать; тянуть
ziehe|(ziehe … an) надеваю
zieht|(zieht sich an) одевается
häuser|дома
größer|больше (крупнее)
ice|ICE (скоростной поезд)
schnellsten|быстрее всех (am schnellsten)
freue|радуюсь (sich freuen)
freuen|радоваться
zähne|зубы
dusche|принимаю душ; душ
putze|чищу (putzen)
geputzt|почистил
beeil|поторопись (sich beeilen)
beeilen|торопиться
interessiert|интересуется (sich interessieren)
interessierst|интересуешься
politik|политика
fertig|готов, закончил
los|вперёд! («Los geht's!» — поехали!)
dran|(spät dran sein) опаздывать
treffen|встречаться
ärgere|злюсь (sich ärgern)
lärm|шум
ruhe|(ruhe mich aus) отдыхаю
moment|момент; минутку
ausflug|поездка, экскурсия
wasche|мою, умываю (waschen)
kunst|искусство
trägt|носит (tragen)
spricht|говорит (sprechen)
kurze|короткие
runde|круглая
partner|партнёр
lächeln|улыбка; улыбаться
langen|длинной (lang)
onkel|дядя
typ|тип, парень
typen|парня
cousine|двоюродная сестра
klug|умный
sympathisch|симпатичный
computer|компьютер
jungen|молодой (Dativ); мальчика
junge|мальчик; молодой
junger|молодой
wenn|если, когда (каждый раз)
schule|школа
gebaut|построен (bauen)
üben|упражняться
garten|сад
schüchtern|застенчивый
hund|собака
schneemänner|снеговики
astronaut|космонавт
ungefähr|примерно
süß|милый, сладкий
süßes|милое
draußen|на улице
hühner|куры
tierarzt|ветеринар
drinnen|внутри, дома
klavier|фортепиано
hättest|имел бы (ты) (hätten)
könntest|мог бы (ты)
problem|проблема
probleme|проблемы
mitbringen|принести с собой
herzlichen|сердечные (Herzlichen Glückwunsch — поздравляю)
herzlich|сердечно (Herzlich willkommen — добро пожаловать)
glückwunsch|поздравление
mitkommen|пойти вместе
mitkomme|пойду вместе
frohe|радостные (Frohe Weihnachten — счастливого Рождества)
dreißigsten|тридцатый
schokoladenkuchen|шоколадный торт
lade|приглашаю (einladen: lade … ein)
verlassen|покидать; (sich verlassen auf) полагаться на
jemand|кто-то
leute|люди
denen|которым (Dativ мн. ч.)
beide|оба
zuhört|выслушивает (zuhören)
kennengelernt|познакомился (kennenlernen)
geholfen|помог (helfen)
bester|лучший
kenne|знаю (kennen)
kannten|знали (kennen)
gestritten|ссорились (streiten)
mädchens|девочки (Genitiv)
gewonnen|выиграл (gewinnen)
geheiratet|женился, вышла замуж (heiraten)
sitzt|сидит (sitzen)
nachbarin|соседка
tür|дверь
offen|открытый
armer|бедный
trat|вошёл, шагнул (treten; trat ein)
niemand|никто
niemanden|никого
lachte|засмеялся (lachen)
wort|слово
gestorben|умер (sterben)
blass|бледный
passiert|случилось (passieren)
hörte|услышал (hören)
geräusch|шум, звук
nahm|взял (nehmen)
taschenlampe|фонарик
unten|внизу
stand|стоял (stehen)
glas|стекло; стакан
saß|сидел (sitzen)
wurst|колбаса
wolf|волк
goldenen|золотой
erst|только; сначала
papier|бумага
tonne|бак, контейнер
geworfen|брошен (werfen)
reduziert|сокращён (reduzieren)
reduzieren|сокращать
restmüll|остаточный (несортируемый) мусор
gelbe|жёлтая
container|контейнер
ecke|угол
gebracht|принесён, отнесён (bringen)
pfandflaschen|бутылки с залогом
zurück|назад, обратно
wusste|знал (wissen)
eingezogen|въехал (einziehen)
abgeholt|забран, вывезен (abholen)
gesammelt|собран (sammeln)
bäume|деревья
gepflanzt|посажен (pflanzen)
bio-produkte|био-продукты
verkauft|продаётся, продан (verkaufen)
würdest|бы (ты) (würde)
gewusst|знал (wissen)
geld|деньги
wünschte|хотел бы, желал (wünschen)
lotto|лотерея
gewinnen|выигрывать
gewinnst|выигрываешь
million|миллион
zuerst|сначала
übrig|оставшийся (übrig sein — оставаться)
eröffnen|открыть (кафе, магазин)
besuchen|навестить, посетить
einfacher|проще
wüsste|знал бы (wissen)
leicht|лёгкий, легко
alle|все
schaffen|справиться, успеть; создать
vergessen|забыть
anrufen|позвонить
chancen|шансы
vorgenommen|наметил, решил (sich vornehmen)
app|приложение
praxis|практика
studieren|учиться в вузе
beschlossen|решил (beschließen)
aufzuhören|прекратить (aufhören)
aufzustehen|вставать (aufstehen)
erkläre|объясняю (erklären)
erklären|объяснить
b1-test|экзамен B1
wortschatz|словарный запас
verbessern|улучшить
abgemacht|договорились
abzuschließen|запереть (abschließen)
wichtig|важно
pausen|перерывы
pause|перерыв
bestätigung|подтверждение
einfach|просто
warten|ждать
warte|жду; подожди
wartest|ждёшь
innerhalb|в течение
monats|месяца (Genitiv)
pass|паспорт
spazieren|гулять (spazieren gehen)
füllen|заполнять (ausfüllen: füllen … aus)
streiks|забастовки (Genitiv)
geschlossen|закрыт (schließen)
wartezeit|время ожидания
umgezogen|переехал (umziehen)
wohnungsgeberbestätigung|подтверждение от арендодателя
dabei|при себе, с собой
vermieters|арендодателя (Genitiv)
dafür|для этого
einzug|въезд
kälte|холод
gelernt|учил, выучил (lernen)
abgeschlossen|окончил (abschließen)
stipendium|стипендия
beworben|подал заявку (sich bewerben)
licht|свет
beendet|закончил (beenden)
studierte|учился (studieren)
informatik|информатика
berufserfahrung|опыт работы
marketing|маркетинг
gejobbt|подрабатывал (jobben)
bekam|получил (bekommen)
vorher|до этого, заранее
intensivkurs|интенсивный курс
mehreren|нескольких
firmen|фирмы
datenanalyst|аналитик данных
angekommen|прибыл (ankommen)
fühle|чувствую (fühlen)
wissen|знать
fragen|спрашивать
fragte|спросил
frage|вопрос; спрашиваю
erzählen|рассказывать
team|команда
möglich|возможно
personen|человек (лиц)
dauert|длится (dauern)
weiterbildungsmöglichkeiten|возможности повышения квалификации
melden|сообщать; (sich melden) связаться
willkommen|добро пожаловать
kurz|коротко
projektmanagerin|менеджер проектов
it-branche|IT-отрасль
abfährt|отправляется (abfahren)
büro|офис
finde|нахожу, считаю (finden)
soziale|социальные
praktisch|практичный, удобный
völlig|полностью
anders|иначе
einerseits|с одной стороны
andererseits|с другой стороны
benutzen|пользоваться
benutzt|использовал
verbot|запрет
klare|чёткие
regeln|правила
schlecht|плохо
falsch|неправильно
medien|медиа, СМИ
wenig|мало
verboten|запрещено
lenken|(lenken ab) отвлекают
schüler|ученики
lösung|решение
schlägst|(schlägst vor) предлагаешь (vorschlagen)
unterricht|урок, занятия
gewandert|ходили в поход (wandern)
kaum|едва ли, почти не
preise|цены
selbst|сам, сами
wohl|наверное
welt|мир
steigen|расти, подниматься
gestiegen|выросли (steigen)
master|магистратура
stau|пробка
verspreche|обещаю (versprechen)
versprochen|обещано
stark|сильно
verändern|менять; (sich verändern) меняться
übernehmen|взять на себя, занять
manche|некоторые
hoffe|надеюсь (hoffen)
wirst|будешь (werden)
lässt|позволяет; (lässt sich) можно
ließ|(ließ sich) удалось/можно было
davon|об этом, от этого
worden|(пассив) был (… worden)
getestet|протестирован
bekannt|известный
fenster|окно
daten|данные
penizillin|пенициллин
ergebnisse|результаты
impfstoff|вакцина
gründlich|тщательно
lösen|решать
lösende|которую нужно решить (zu lösende)
wissenschaftlich|научно
nachgewiesen|доказан (nachweisen)
beantworten|отвечать на
bald|скоро
material|материал
algen|водоросли
hergestellt|изготовлен (herstellen)
allerdings|правда, однако
markt|рынок
produktion|производство
klingt|звучит (klingen)
echten|настоящий
gebäude|здание
geöffnet|открыт (öffnen)
öffnen|открывать
erledigen|выполнить, сделать
geprüft|проверен (prüfen)
sei|(Konjunktiv I от sein) якобы является, был бы
seien|(Konjunktiv I) являются
lage|положение, ситуация
kontrolle|контроль
ministerin|министр (женщина)
getan|сделано (tun)
polizei|полиция
verletzten|пострадавшие, раненые
behauptete|утверждал (behaupten)
teilte|(teilte mit) сообщила (mitteilen)
journalistin|журналистка
steuern|налоги
angaben|данные, сведения
prozent|процент
bürgermeister|мэр
zurückgetreten|ушёл в отставку (zurücktreten)
grund|причина
stadtkasse|городская казна
bestätigt|подтверждено
gerücht|слух
vorwürfe|обвинения
offizielle|официальные
informationen|информация
erklärte|объяснила
meinte|считал (meinen)
projekt|проект
projekts|проекта
verfügung|распоряжение (zur Verfügung stehen — быть в распоряжении)
erhalten|получать
hohen|высокого
nachfrage|спрос
verlängern|продлевать
angebot|предложение
qualität|качество
führen|(führen … ein) вводим (einführen)
einführen|ввести
tests|тесты
anfrage|запрос
folgendes|следующее
mitteilen|сообщить
eingereicht|подан (einreichen)
intensiver|интенсивных
einigung|соглашение
zustande|(zustande kommen) состояться, быть достигнутым
apparat|аппарат («am Apparat» — у телефона)
lieferengpasses|перебоев с поставками
verzögert|(sich verzögern) задерживается
projektstart|старт проекта
ende|конец
schicke|пришлю (schicken)
klärung|прояснение
aller|всех
details|детали
fällt|(fällt aus) отменяется (ausfallen)
verspätung|опоздание
service|сервис
feedback|отзыв
beginn|начало
sitzung|заседание
ausschalten|выключить
machte|сделал (machen)
fehler|ошибка
beeindruckt|впечатлил (beeindrucken)
besonders|особенно
darüber|об этом
erschienene|вышедший (erscheinen)
gilt|считается (gelten)
meisterwerk|шедевр
eröffnete|открывшаяся
zeigt|показывает (zeigen)
hauptfigur|главный герой
ständig|постоянно
zweifelnder|сомневающийся
schlafende|спящая
dar|(stellt … dar) изображает (darstellen)
sprache|язык
kritikern|критиками
gelobtes|хвалимый, расхваленный (loben)
klärenden|(zu klärenden) которые нужно прояснить
besprechen|обсуждать
tief|глубоко
hängende|висящая
tanzenden|танцующей
farben|цвета, краски
unglaublich|невероятно
wusstest|знал ли ты (wissen)
tod|смерть
ungeklärte|не выясненная
faszinierend|завораживающий
unbedingt|обязательно
lachende|смеющийся
geschlossene|закрытая
steigenden|растущих
gestohlene|украденная
schwer|трудный, тяжёлый
geschriebenes|написанная
je|чем (je … desto)
sowohl|как (sowohl … als auch)
weder|ни (weder … noch)
zwar|хотя (zwar … aber)
desto|тем (je … desto)
umso|тем (je … umso)
entweder|либо (entweder … oder)
sondern|а, но (после отрицания)
als|чем; когда (в прошлом); в качестве
sinnvoll|разумный
handeln|действовать
schwierig|сложный
nahverkehr|общественный транспорт
einzelne|отдельный (человек)
alkohol|алкоголь
betrifft|касается (betreffen)
arme|бедные
länder|страны
langfristig|в долгосрочной перспективе
geringer|ниже, меньше
komplizierter|сложнее
thema|тема
wächst|растёт (wachsen)
weltweit|во всём мире
zentrum|центр
autofrei|без машин
hältst|(hältst … davon) думаешь об этом (halten von)
lebensqualität|качество жизни
busverbindung|автобусное сообщение
eben|просто, именно
investieren|инвестировать
nervöser|нервнее
gemütlich|уютный
hausmeister|завхоз, дворник
direktorin|директор (женщина)
gärtner|садовник
unfall|несчастный случай
ausland|заграница
geflohen|сбежал (fliehen)
deuten|(deuten auf … hin) указывают на
hin|туда; (hindeuten) указывать
verhaften|арестовать
ganze|весь, целый
spielschulden|карточные долги
motiv|мотив
brennt|горит (brennen)
dieb|вор
daran|об этом, на этом
verliebt|влюблён (sich verlieben)
angst|страх (Angst haben — бояться)
davor|перед этим; этого (Angst davor)
blick|взгляд
ärgerst|злишься (sich ärgern)
wiederzusehen|снова увидеть
allein|один, в одиночестве
kümmert|заботится (sich kümmern)
kümmere|позабочусь, займусь
liebevoll|с любовью
sehne|тоскую (sich sehnen)
heimat|родина
gespräch|разговор
wirkst|выглядишь, кажешься (wirken)
nachdenklich|задумчивый
kaputt|сломанный (kaputt machen — разрушить)
rede|говори (reden)
darum|об этом; поэтому
spinnen|пауки
ansicht|мнение, взгляд
wichtiger|важнее
allem|(vor allem) прежде всего
bequemlichkeit|удобство
online|онлайн
preisgeben|раскрывать, выдавать
apps|приложения
sammeln|собирать
algorithmen|алгоритмы
neutral|нейтральный
installiert|установил (installieren)
risiken|риски
birgt|несёт в себе (bergen)
netzwerke|сети
erlaubt|разрешено
altersgrenze|возрастное ограничение
begründen|обосновать
jugendliche|подростки
kontrollieren|контролировать
längst|давно
sichere|надёжная
altersprüfung|проверка возраста
schutz|защита
totale|полная, тотальная
freiheit|свобода
aufgestanden|встал (aufstehen)
wärst|был бы (ты)
skeptisch|скептический
wahl|выбор
`.split(`
`).map(e=>e.trim()).filter(Boolean).map(e=>{let t=e.indexOf(`|`);return[e.slice(0,t).toLowerCase(),e.slice(t+1)]})),mn=[{de:`Wie geht's`,ru:`как дела? (букв. «как идёт?»)`},{de:`Wie geht es`,ru:`как дела / как поживаете`},{de:`Freut mich`,ru:`очень приятно (при знакомстве)`},{de:`Auf Wiedersehen`,ru:`до свидания`},{de:`Bis morgen`,ru:`до завтра`},{de:`Gute Nacht`,ru:`спокойной ночи`},{de:`Danke schön`,ru:`большое спасибо`},{de:`Vielen Dank`,ru:`большое спасибо`},{de:`Guten Appetit`,ru:`приятного аппетита`},{de:`Stimmt so`,ru:`сдачи не надо`},{de:`Das macht`,ru:`с вас (о сумме)`},{de:`Wie spät ist es`,ru:`который час?`},{de:`es gibt`,ru:`есть, имеется`},{de:`gibt es`,ru:`есть ли, имеется`},{de:`zu Fuß`,ru:`пешком`},{de:`tut weh`,ru:`болит`},{de:`tun weh`,ru:`болят`},{de:`Was fehlt Ihnen`,ru:`что Вас беспокоит?`},{de:`Gute Besserung`,ru:`выздоравливай(те)`},{de:`Hunger haben`,ru:`быть голодным`},{de:`habe Hunger`,ru:`я голоден`},{de:`habe Durst`,ru:`хочу пить`},{de:`Rad fahren`,ru:`кататься на велосипеде`},{de:`fahre Rad`,ru:`катаюсь на велосипеде`},{de:`am liebsten`,ru:`больше всего (люблю)`},{de:`von Beruf`,ru:`по профессии`},{de:`spät dran`,ru:`опаздываем`},{de:`Los geht's`,ru:`поехали!`},{de:`recht`,ru:``},{de:`recht haben`,ru:`быть правым`},{de:`hast recht`,ru:`ты прав`},{de:`Herzlichen Glückwunsch`,ru:`поздравляю!`},{de:`Alles Gute`,ru:`всего хорошего; (zum Geburtstag) с днём рождения`},{de:`kein Problem`,ru:`без проблем`},{de:`Lust`,ru:``},{de:`Hättest du Lust`,ru:`не хочешь ли ты…? (есть ли у тебя желание)`},{de:`Es war einmal`,ru:`жил-был (начало сказки)`},{de:`eines Tages`,ru:`однажды`},{de:`an deiner Stelle`,ru:`на твоём месте`},{de:`Meiner Meinung nach`,ru:`по моему мнению`},{de:`zur Verfügung`,ru:`в распоряжении (стоять к услугам)`},{de:`kam keine Einigung zustande`,ru:`соглашение не было достигнуто`},{de:`am Apparat`,ru:`у телефона`},{de:`vor allem`,ru:`прежде всего`},{de:`auf den ersten Blick`,ru:`с первого взгляда`},{de:`Das liegt daran`,ru:`это связано с тем`},{de:`Was hältst du davon`,ru:`что ты об этом думаешь?`},{de:`im Lotto gewinnen`,ru:`выиграть в лотерею`},{de:`ins Kino`,ru:`в кино`},{de:`zu Hause`,ru:`дома`},{de:`nach Hause`,ru:`домой`},{de:`Was ist passiert`,ru:`что случилось?`},{de:`Ich auch`,ru:`я тоже`},{de:`Und du`,ru:`а ты?`},{de:`Und Sie`,ru:`а Вы?`}].filter(e=>e.ru),hn=e=>e.replace(/^[„"«(¿¡]+|[.,!?;:"“»)…]+$/g,``),gn=null;function _n(){let e=[];for(let t of C)for(let n of t.words){let t=n.de.trim();(!/\s/.test(t)||n.g)&&e.push({key:t.toLowerCase(),full:n.full,ru:n.ru,verb:!n.g&&/(en|ln|rn)$/.test(t)&&t===t.toLowerCase()})}return e}function vn(e){let t=hn(e),n=t.toLowerCase();if(!n)return{de:e,ru:null};if(pn[n])return{de:t,ru:pn[n]};gn||=_n();let r=gn.find(e=>e.key===n);if(r)return{de:t,base:r.full.toLowerCase()===n?void 0:r.full,ru:r.ru};for(let e of gn){if(!e.verb)continue;let r=e.key.replace(/(en|n)$/,``);if(!(r.length<3)&&[r+`e`,r+`st`,r+`t`,r+`est`,r+`et`,r+`te`,r+`ten`,`ge`+r+`t`,`ge`+r+`en`].includes(n))return{de:t,base:e.full,ru:e.ru}}let i=gn.find(e=>!e.verb&&e.key.length>3&&(n===e.key+`n`||n===e.key+`en`||n===e.key+`e`||n===e.key+`s`||n===e.key+`er`||n===e.key+`es`));if(i)return{de:t,base:i.full,ru:i.ru};let a=gn.find(e=>!e.verb&&e.key.length>2&&e.key===e.key.toLowerCase()&&[`e`,`en`,`er`,`es`,`em`].some(t=>n===e.key+t));return a?{de:t,base:a.full,ru:a.ru}:{de:t,ru:null}}var yn=[`an`,`auf`,`aus`,`ein`,`mit`,`fern`,`zu`,`ab`,`vor`,`los`,`zurück`,`weg`,`nach`,`her`,`hin`,`dar`,`kennen`,`statt`,`teil`];function bn(e,t){gn||=_n();for(let n of gn){if(!n.verb||!n.key.startsWith(e)||n.key.length<=e.length+2)continue;let r=n.key.slice(e.length),i=r.replace(/(en|n)$/,``),a=new Set([r,i+`e`,i+`st`,i+`t`,i+`te`,i+`ten`]);if(t.some(e=>a.has(e)))return{de:e,base:n.full,ru:`приставка глагола «${n.full}» — ${n.ru}`}}for(let[n,r]of Object.entries(pn)){if(r.includes(`(${e}`)&&t.includes(n))return{de:e,ru:`приставка глагола: ${r}`};let i=r.match(RegExp(`\\((${e}\\p{L}+)`,`u`));if(i&&t.includes(n))return{de:e,base:i[1],ru:`приставка глагола «${i[1]}» (стоит в конце предложения)`}}return{de:e,ru:`отделяемая приставка глагола: в предложении она уходит в конец`}}function xn(e){let t=e.toLowerCase(),n=mn.filter(e=>t.includes(e.de.toLowerCase())),r=e.split(/\s+/).filter(Boolean);return{idioms:n,words:r.map((e,t)=>{let n=hn(e).toLowerCase();if((/[.,!?;:]$/.test(e)||t===r.length-1)&&t>1&&yn.includes(n)){let i=bn(n,r.slice(0,t).map(e=>hn(e).toLowerCase()));if(i)return{...i,de:hn(e)}}return vn(e)})}}function Sn({ex:e,onResult:t}){let n=e.lesson;return(0,I.jsxs)(`div`,{className:`ex grammar-card`,children:[(0,I.jsxs)(`div`,{className:`kicker`,children:[n.level,` · Урок `,n.index+1]}),(0,I.jsxs)(`h2`,{children:[n.emoji,` `,n.title]}),(0,I.jsx)(`div`,{className:`de-title`,children:n.de}),(0,I.jsxs)(`p`,{className:`goal`,children:[`🎯 `,n.goal]}),(0,I.jsxs)(`div`,{className:`g-box`,children:[(0,I.jsxs)(`h3`,{children:[`📘 `,n.grammar.title]}),n.grammar.points.map((e,t)=>(0,I.jsx)(`p`,{children:(0,I.jsx)($t,{text:e})},t)),n.grammar.table&&(0,I.jsx)(`div`,{className:`table-wrap`,children:(0,I.jsx)(`table`,{children:(0,I.jsx)(`tbody`,{children:n.grammar.table.map((e,t)=>(0,I.jsx)(`tr`,{children:e.map((e,n)=>t===0?(0,I.jsx)(`th`,{children:e},n):(0,I.jsx)(`td`,{children:e},n))},t))})})})]}),(0,I.jsxs)(`p`,{className:`muted`,children:[`В уроке: `,n.words.length,` слов · `,n.phrases.length,` фраз · диалог «`,n.dialogTitle,`»`]}),(0,I.jsx)(`button`,{className:`btn primary wide`,onClick:()=>t({ok:!0,auto:!0}),children:`Поехали! →`})]})}function Cn({ex:e,onResult:t}){let n=e.word,[r,i]=(0,l.useState)(null),[a,o]=(0,l.useState)(null);return(0,I.jsxs)(`div`,{className:`ex flash`,children:[(0,I.jsx)(`div`,{className:`kicker`,children:`Новое слово`}),(0,I.jsxs)(`div`,{className:`flash-card`,style:{borderColor:n.g?Zt(n.g):void 0},children:[(0,I.jsx)(`div`,{className:`flash-de`,children:(0,I.jsx)(Qt,{w:n,size:1})}),n.pl&&(0,I.jsxs)(`div`,{className:`muted`,children:[`мн. ч.: `,n.pl===`-`?`нет / так же`:n.pl]}),(0,I.jsx)(`div`,{className:`flash-ru`,children:n.ru}),(0,I.jsx)(Xt,{text:n.full,auto:!0,big:!0}),n.g&&(0,I.jsx)(`div`,{className:`gender-hint`,style:{color:Zt(n.g)},children:n.g===`der`?`♂ мужской род`:n.g===`die`?`♀ женский род`:`⚪ средний род`})]}),Gt()&&(0,I.jsxs)(`button`,{className:`btn mic-small`+(a?` rec`:``),onClick:()=>{if(a){a.stop();return}let e=qt({onResult:(e,t,r)=>{if(!r)return;let a=[e,...t].some(e=>ne(e,n.de)>.7||ne(e,n.full)>.7);i(a)},onEnd:()=>o(null),onError:()=>o(null)});o(e)},children:[a?`⏺ Слушаю…`:`🎤 Произнести`,` `,r===!0&&`✅`,` `,r===!1&&`🔁 ещё раз`]}),(0,I.jsx)(`button`,{className:`btn primary wide`,onClick:()=>t({ok:!0,auto:!0}),children:`Запомнил(а) →`})]})}function wn({ex:e,onResult:t,locked:n}){let[r,i]=(0,l.useState)(null);(0,l.useEffect)(()=>i(null),[e]);let a=a=>{n||r||(i(a),e.speakOptions&&P(a),t({ok:a===e.answer,correct:e.answer,user:a,question:e.prompt||e.audio||``,key:e.key}))};return(0,I.jsxs)(`div`,{className:`ex`,children:[(0,I.jsx)(`div`,{className:`kicker`,children:e.title}),(0,I.jsxs)(`div`,{className:`prompt`,children:[e.audio&&!e.prompt?(0,I.jsx)(Xt,{text:e.audio,auto:!0,big:!0}):null,e.prompt&&(0,I.jsx)(`span`,{className:`prompt-text`,children:e.prompt}),e.audio&&e.prompt?(0,I.jsx)(Xt,{text:e.audio,auto:!0}):null]}),(0,I.jsx)(`div`,{className:`options`,children:e.options.map((t,n)=>(0,I.jsxs)(`button`,{className:`option`+(r?t===e.answer?` right`:t===r?` wrong`:` dim`:``),onClick:()=>a(t),children:[(0,I.jsx)(`span`,{className:`opt-n`,children:n+1}),` `,t]},t))})]})}function Tn({ex:e,onResult:t,locked:n}){let[r,i]=(0,l.useState)(null);(0,l.useEffect)(()=>i(null),[e]);let a=e.word,o=e=>{n||r||(i(e),P(a.full),t({ok:e===a.g,correct:a.full,user:e+` `+a.de,question:`Артикль: `+a.de}))};return(0,I.jsxs)(`div`,{className:`ex`,children:[(0,I.jsx)(`div`,{className:`kicker`,children:`Какой артикль?`}),(0,I.jsx)(`div`,{className:`prompt`,children:(0,I.jsx)(`span`,{className:`prompt-text big`,children:a.de})}),(0,I.jsx)(`div`,{className:`muted center`,children:a.ru}),(0,I.jsx)(`div`,{className:`articles`,children:[`der`,`die`,`das`].map(e=>(0,I.jsx)(`button`,{className:`article-btn `+e+(r?e===a.g?` right`:e===r?` wrong`:` dim`:``),onClick:()=>o(e),children:e},e))}),(0,I.jsxs)(`p`,{className:`tip`,children:[`💡 Подсказка: -ung, -heit, -keit, -schaft, -ion → `,(0,I.jsx)(`b`,{style:{color:`var(--die)`},children:`die`}),`; -chen, -lein → `,(0,I.jsx)(`b`,{style:{color:`var(--das)`},children:`das`}),`; дни, месяцы, времена года → `,(0,I.jsx)(`b`,{style:{color:`var(--der)`},children:`der`})]})]})}function En({ex:e,onResult:t}){let n=(0,l.useMemo)(()=>O(e.pairs.map(e=>e[0])),[e]),r=(0,l.useMemo)(()=>O(e.pairs.map(e=>e[1])),[e]),[i,a]=(0,l.useState)(null),[o,s]=(0,l.useState)(null),[c,u]=(0,l.useState)(new Set),[d,f]=(0,l.useState)([]),p=(0,l.useRef)(0);(0,l.useEffect)(()=>{if(i&&o){if(e.pairs.some(e=>e[0]===i&&e[1]===o)){let n=new Set(c);n.add(i),n.add(o),u(n),n.size===e.pairs.length*2&&setTimeout(()=>t({ok:p.current<2,auto:!0}),400)}else p.current++,f([i,o]),setTimeout(()=>f([]),500);a(null),s(null)}},[i,o]);let m=(e,t)=>`match-btn`+(c.has(e)?` done`:``)+(t===e?` sel`:``)+(d.includes(e)?` bad`:``);return(0,I.jsxs)(`div`,{className:`ex`,children:[(0,I.jsx)(`div`,{className:`kicker`,children:`Соедините пары`}),(0,I.jsxs)(`div`,{className:`match-grid`,children:[(0,I.jsx)(`div`,{children:n.map(e=>(0,I.jsx)(`button`,{className:m(e,i),disabled:c.has(e),onClick:()=>{a(e),P(e)},children:e},e))}),(0,I.jsx)(`div`,{children:r.map(e=>(0,I.jsx)(`button`,{className:m(e,o),disabled:c.has(e),onClick:()=>s(e),children:e},e))})]})]})}function Dn({ex:e,onResult:t,locked:n}){let r=(0,l.useMemo)(()=>e.tokens.map((e,t)=>({t:e,i:t})),[e]),[i,a]=(0,l.useState)([]);return(0,l.useEffect)(()=>a([]),[e]),(0,I.jsxs)(`div`,{className:`ex`,children:[(0,I.jsx)(`div`,{className:`kicker`,children:`Соберите предложение по-немецки`}),(0,I.jsx)(`div`,{className:`prompt`,children:(0,I.jsx)(`span`,{className:`prompt-text`,children:e.ru})}),(0,I.jsxs)(`div`,{className:`build-line`,children:[i.map(e=>(0,I.jsx)(`button`,{className:`chip in`,disabled:n,onClick:()=>a(i.filter(t=>t!==e)),children:r[e].t},e)),!i.length&&(0,I.jsx)(`span`,{className:`muted`,children:`Нажимайте на слова ниже…`})]}),(0,I.jsx)(`div`,{className:`bank`,children:r.map(({t:e,i:t})=>(0,I.jsx)(`button`,{className:`chip`+(i.includes(t)?` used`:``),disabled:n||i.includes(t),onClick:()=>{a([...i,t]),P(e,{rate:1.1})},children:e},t))}),(0,I.jsx)(`button`,{className:`btn primary wide`,disabled:!i.length||n,onClick:()=>{let n=i.map(e=>r[e].t).join(` `);t({ok:A(n)===A(e.answer),correct:e.answer,user:n,question:e.ru})},children:`Проверить`})]})}function On({ex:e,onResult:t,locked:n}){let[r,i]=(0,l.useState)(``),a=(0,l.useRef)(null);(0,l.useEffect)(()=>{i(``),a.current?.focus()},[e]);let o=()=>{if(!r.trim()||n)return;let i=re(r,e.answer);t({ok:i!==`wrong`,typo:i===`typo`,correct:e.answer[0],user:r,question:e.prompt||e.ru,key:e.key})};return(0,I.jsxs)(`div`,{className:`ex`,children:[(0,I.jsx)(`div`,{className:`kicker`,children:e.title}),(0,I.jsxs)(`div`,{className:`prompt`,children:[e.audio&&(0,I.jsx)(Xt,{text:e.audio,auto:!0,big:!0}),e.prompt&&(0,I.jsx)(`span`,{className:`prompt-text`,children:e.prompt})]}),e.hint&&(0,I.jsx)(`div`,{className:`muted center`,children:e.hint}),(0,I.jsx)(`input`,{ref:a,className:`text-input`,value:r,disabled:n,onChange:e=>i(e.target.value),onKeyDown:e=>e.key===`Enter`&&o(),placeholder:`Пишите по-немецки…`,autoCapitalize:`off`,autoComplete:`off`,spellCheck:!1}),(0,I.jsx)(tn,{onChar:e=>{i(r+e),a.current?.focus()}}),(0,I.jsx)(`button`,{className:`btn primary wide`,disabled:!r.trim()||n,onClick:o,children:`Проверить`})]})}function kn({ex:e,onResult:t,locked:n}){let r=e.gap,i=(0,l.useMemo)(()=>r.opts?O(r.opts.includes(r.answer)?r.opts:[r.answer,...r.opts]):null,[e]),[a,o]=(0,l.useState)(``),s=(0,l.useRef)(null);(0,l.useEffect)(()=>o(``),[e]);let c=e=>{if(n||!e.trim())return;let i=re(e,r.answer.split(`/`));i!==`wrong`&&P(r.full),t({ok:i!==`wrong`,typo:i===`typo`,correct:r.full,user:r.before+e+r.after,question:r.ru})};return(0,I.jsxs)(`div`,{className:`ex`,children:[(0,I.jsx)(`div`,{className:`kicker`,children:`Заполните пропуск`}),(0,I.jsxs)(`div`,{className:`gap-sentence`,children:[r.before,(0,I.jsx)(`span`,{className:`gap-slot`+(a?` filled`:``),children:a||`____`}),r.after]}),(0,I.jsx)(`div`,{className:`muted center`,children:r.ru}),(r.before+r.after).trim().split(/\s+/).length>1&&(0,I.jsxs)(`details`,{className:`rule-hint`,children:[(0,I.jsx)(`summary`,{children:`📖 Слова в предложении (без ответа)`}),(0,I.jsx)(Mn,{de:(r.before+` `+r.after).replace(/\s+/g,` `).trim(),compact:!0})]}),e.rule&&(0,I.jsxs)(`details`,{className:`rule-hint`,children:[(0,I.jsxs)(`summary`,{children:[`💡 Подсказка: правило «`,e.rule.title,`»`]}),e.rule.points.map((e,t)=>(0,I.jsx)(`p`,{children:(0,I.jsx)($t,{text:e})},t)),e.rule.table&&(0,I.jsx)(`div`,{className:`table-wrap`,children:(0,I.jsx)(`table`,{children:(0,I.jsx)(`tbody`,{children:e.rule.table.map((e,t)=>(0,I.jsx)(`tr`,{children:e.map((e,n)=>t===0?(0,I.jsx)(`th`,{children:e},n):(0,I.jsx)(`td`,{children:e},n))},t))})})})]}),i?(0,I.jsx)(`div`,{className:`bank`,children:i.map(e=>(0,I.jsx)(`button`,{className:`chip`+(a===e?` sel`:``),disabled:n,onClick:()=>{o(e)},children:e},e))}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`input`,{ref:s,className:`text-input`,value:a,disabled:n,onChange:e=>o(e.target.value),onKeyDown:e=>e.key===`Enter`&&c(a),placeholder:`Впишите слово`,autoCapitalize:`off`,autoComplete:`off`,spellCheck:!1}),(0,I.jsx)(tn,{onChar:e=>{o(a+e),s.current?.focus()}})]}),(0,I.jsx)(`button`,{className:`btn primary wide`,disabled:!a||n,onClick:()=>c(a),children:`Проверить`})]})}function An({ex:e,onResult:t,locked:n}){let[r,i]=(0,l.useState)(``),[a,o]=(0,l.useState)(null),[s,c]=(0,l.useState)(``),[u,d]=(0,l.useState)(``),[f,p]=(0,l.useState)(0),[m,h]=(0,l.useState)(null),[g,_]=(0,l.useState)(null),[v,y]=(0,l.useState)(null),[b,x]=(0,l.useState)(!1),S=(0,l.useRef)({text:``,score:0});(0,l.useEffect)(()=>{i(``),p(0),d(``),h(null),_(null),y(null),S.current={text:``,score:0}},[e]);let C=Gt(),w=()=>{if(a){a.stop();return}d(``),i(``),y(null),h(null);let n=qt({onStage:e=>c(e),onAudio:e=>_(t=>(t&&URL.revokeObjectURL(t),URL.createObjectURL(e))),onResult:(t,n,r)=>{if(i(t),r){let r={text:t,score:0};for(let i of[t,...n]){let t=ne(i,e.de);t>r.score&&(r={text:i,score:t})}S.current=r,i(r.text)}},onEnd:()=>{o(null),c(``);let n=S.current;if(!n.text)return;p(e=>e+1);let r=ie(e.de,n.text),i=r.filter(e=>e.ok).length/r.length,a=Math.round(Math.max(n.score,i)*100);h(a),a>=80&&(Le(e=>{e.spoken++}),setTimeout(()=>t({ok:!0,correct:e.de,user:n.text}),900))},onError:e=>{d(e),o(null),c(``)}});o(n)},T=async()=>{x(!0);try{let t=await sn([{role:`system`,content:fn+` Ты фонетист, помогаешь с немецким произношением. Отвечай коротко, списком, 3–5 пунктов.`},{role:`user`,content:`Мне нужно было сказать: «${e.de}». Система распознавания речи услышала: «${r}». Совпадение ${m}%.
Определи, какие слова/звуки я, скорее всего, произнёс неправильно (по расхождениям в распознанном тексте), и дай конкретные советы: как правильно артикулировать эти звуки (ü, ö, ä, ch, r, z, ei/ie, долгие/краткие гласные, ударение). Покажи проблемные слова с подсказкой произношения русскими буквами. Если всё совпало — похвали и дай один совет для более естественного звучания (интонация, связность).`}],{temperature:.3,maxTokens:500});y(t)}catch(e){y(`⚠️ `+e.message)}x(!1)},E=r?ie(e.de,r):null;return(0,I.jsxs)(`div`,{className:`ex`,children:[(0,I.jsx)(`div`,{className:`kicker`,children:`Скажите вслух 🎙️`}),(0,I.jsxs)(`div`,{className:`prompt column`,children:[(0,I.jsx)(`div`,{className:`say-text`,children:E&&m!==null?E.map((e,t)=>(0,I.jsxs)(`span`,{className:e.ok?`w-ok`:`w-bad`,children:[e.w,` `]},t)):e.de}),(0,I.jsx)(`div`,{className:`muted`,children:e.ru}),(0,I.jsx)(Xt,{text:e.de,auto:!0})]}),C?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`button`,{className:`mic`+(s===`recording`?` rec`:``),disabled:n||s===`processing`,onClick:w,children:s===`processing`?`⏳`:a?`⏹`:`🎤`}),(0,I.jsx)(`div`,{className:`center muted`,children:s===`processing`?`Grok распознаёт речь…`:a?`Говорите… запись остановится сама после паузы`:`Нажмите на микрофон и произнесите фразу`}),m!==null&&!a&&(0,I.jsxs)(`div`,{className:`pron-score `+(m>=80?`good`:m>=50?`mid`:`low`),children:[(0,I.jsxs)(`b`,{children:[m,`%`]}),` `,m>=80?`Отлично звучит!`:m>=50?`Почти! Обратите внимание на красные слова.`:`Попробуйте ещё раз — сначала послушайте эталон.`]}),r&&!a&&(0,I.jsxs)(`div`,{className:`heard`,children:[`Grok услышал: «`,r,`»`]}),!a&&(g||r)&&(0,I.jsxs)(`div`,{className:`row-btns center`,children:[g&&(0,I.jsx)(`button`,{className:`btn small`,onClick:()=>new Audio(g).play(),children:`▶ Моя запись`}),(0,I.jsx)(`button`,{className:`btn small`,onClick:()=>P(e.de),children:`🔊 Как надо`}),r&&dn()&&!v&&(0,I.jsx)(`button`,{className:`btn small`,disabled:b,onClick:T,children:b?`Анализирую…`:`🤖 Разбор произношения`})]}),v&&(0,I.jsx)(`div`,{className:`card`,children:(0,I.jsx)(en,{text:v})})]}):(0,I.jsx)(`div`,{className:`warn center`,children:`Распознавание речи недоступно. Добавьте ключ Grok в Профиле — тогда проверка произношения работает в любом браузере, включая iPhone. Пока можно прочитать фразу вслух и проверить себя.`}),u&&(0,I.jsx)(`div`,{className:`warn center`,children:u}),(0,I.jsxs)(`div`,{className:`row-btns`,children:[(!C||f>=2)&&!n&&m!==null&&m<80&&(0,I.jsx)(`button`,{className:`btn`,onClick:()=>t({ok:!0,auto:!1,correct:e.de,user:r||`(самопроверка)`}),children:`Засчитать и дальше`}),!C&&!n&&(0,I.jsx)(`button`,{className:`btn`,onClick:()=>t({ok:!0,auto:!1,correct:e.de,user:`(самопроверка)`}),children:`Я произнёс(ла) ✓`}),!n&&(0,I.jsx)(`button`,{className:`btn ghost`,onClick:()=>t({ok:!0,auto:!0,skipped:!0}),children:`Не могу говорить сейчас`})]})]})}function jn({ex:e,onResult:t}){let[n,r]=(0,l.useState)([]),[i,a]=(0,l.useState)(0),[o,s]=(0,l.useState)(null),[c,u]=(0,l.useState)(null),[d,f]=(0,l.useState)(!1),[p,m]=(0,l.useState)(null),h=(0,l.useRef)(0),g=(0,l.useRef)(null),_=e.lines.filter(e=>e.who===`B`).map(e=>e.de);(0,l.useEffect)(()=>{g.current?.scrollIntoView({behavior:`smooth`,block:`end`})},[n,o]),(0,l.useEffect)(()=>{if(i>=e.lines.length){s(null);return}let t=e.lines[i];if(t.who===`A`){s(null);let e=setTimeout(()=>{r(e=>[...e,t]),P(t.de,{onEnd:()=>a(e=>e===i?e+1:e)})},500),n=setTimeout(()=>a(e=>e===i?e+1:e),1700+t.de.length*70);return()=>{clearTimeout(e),clearTimeout(n)}}{let n=[..._.filter(e=>e!==t.de),...e.distractors.filter(e=>e!==t.de)];s(O([t.de,...ee(Array.from(new Set(n)),2)]))}},[i]);let v=t=>{let n=e.lines[i];n&&n.who===`B`&&(t===n.de||ne(t,n.de)>.8?(u(null),r(e=>[...e,n]),P(n.de),setTimeout(()=>a(e=>e+1),400)):(h.current++,u(t),setTimeout(()=>u(null),700)))},y=()=>{if(p){p.stop();return}let t=e.lines[i];if(!t)return;let n=qt({onResult:(e,n,r)=>{r&&([e,...n].some(e=>ne(e,t.de)>.7)?(Le(e=>{e.spoken++}),v(t.de)):(u(`🎤 `+e),setTimeout(()=>u(null),1500)))},onEnd:()=>m(null),onError:()=>m(null)});m(n)},b=i>=e.lines.length;return(0,I.jsxs)(`div`,{className:`ex dialog`,children:[(0,I.jsxs)(`div`,{className:`kicker`,children:[`Диалог: `,e.title]}),(0,I.jsxs)(`label`,{className:`toggle`,children:[(0,I.jsx)(`input`,{type:`checkbox`,checked:d,onChange:e=>f(e.target.checked)}),` показывать перевод`]}),(0,I.jsxs)(`div`,{className:`chat-box`,children:[n.map((e,t)=>(0,I.jsxs)(`div`,{className:`bubble `+(e.who===`A`?`them`:`me`),onClick:()=>P(e.de),children:[(0,I.jsx)(`div`,{children:e.de}),d&&(0,I.jsx)(`div`,{className:`tr`,children:e.ru})]},t)),o&&i<e.lines.length&&e.lines[i].who===`B`&&(0,I.jsxs)(`div`,{className:`dialog-choices`,children:[(0,I.jsxs)(`div`,{className:`muted`,children:[`Ваш ответ (`,e.lines[i].ru,`):`]}),o.map(e=>(0,I.jsx)(`button`,{className:`option`+(c===e?` wrong`:``),onClick:()=>v(e),children:e},e)),Gt()&&(0,I.jsx)(`button`,{className:`btn mic-small`+(p?` rec`:``),onClick:y,children:p?`⏺ Слушаю…`:`🎤 Ответить голосом`}),c?.startsWith(`🎤`)&&(0,I.jsxs)(`div`,{className:`warn`,children:[`Распознано: `,c.slice(2),` — попробуйте ещё раз`]})]}),(0,I.jsx)(`div`,{ref:g})]}),b&&(0,I.jsx)(`button`,{className:`btn primary wide`,onClick:()=>t({ok:h.current<3,auto:!0}),children:`Диалог завершён 🎉 Дальше →`})]})}function Mn({de:e,compact:t}){let n=(0,l.useMemo)(()=>xn(e),[e]);return(0,I.jsxs)(`div`,{className:`gloss`+(t?` compact`:``),children:[n.idioms.map(e=>(0,I.jsxs)(`div`,{className:`idiom`,children:[(0,I.jsx)(`b`,{children:e.de}),` — `,e.ru,` `,(0,I.jsx)(`span`,{className:`muted small`,children:`(устойчивое выражение)`})]},e.de)),(0,I.jsx)(`div`,{className:`gloss-grid`,children:n.words.map((e,t)=>(0,I.jsxs)(`button`,{className:`gloss-cell`,onClick:()=>P(e.base||e.de),title:`Прослушать`,children:[(0,I.jsx)(`span`,{className:`g-de`,children:e.de}),e.base&&e.base.toLowerCase()!==e.de.toLowerCase()&&(0,I.jsxs)(`span`,{className:`g-base`,children:[`← `,e.base]}),(0,I.jsx)(`span`,{className:`g-ru`,children:e.ru||`—`})]},t))})]})}var Nn=(()=>{try{return JSON.parse(localStorage.getItem(`dw.explain.v1`)||`{}`)}catch{return{}}})();function Pn({ex:e,onResult:t}){let[n,r]=(0,l.useState)(Nn[e.de]||null),[i,a]=(0,l.useState)(!1),[o,s]=(0,l.useState)(null),[c,u]=(0,l.useState)(null);return(0,l.useEffect)(()=>{r(Nn[e.de]||null),s(null)},[e]),(0,I.jsxs)(`div`,{className:`ex flash`,children:[(0,I.jsxs)(`div`,{className:`kicker`,children:[`Новая фраза `,e.n,`/`,e.total]}),(0,I.jsxs)(`div`,{className:`flash-card phrase-card`,children:[(0,I.jsx)(`div`,{className:`phrase-de`,children:e.de}),(0,I.jsx)(`div`,{className:`flash-ru`,children:e.ru}),(0,I.jsx)(Xt,{text:e.de,auto:!0,big:!0}),(0,I.jsx)(`div`,{className:`muted small`,children:`Разбор по словам (нажмите на слово, чтобы услышать):`}),(0,I.jsx)(Mn,{de:e.de}),n&&(0,I.jsx)(`div`,{className:`explain-box`,children:(0,I.jsx)(en,{text:n})}),(0,I.jsxs)(`div`,{className:`row-btns center`,children:[!n&&dn()&&(0,I.jsx)(`button`,{className:`btn small`,disabled:i,onClick:async()=>{a(!0);try{let t=await sn([{role:`system`,content:fn+` Объясняй для новичка, очень коротко: 3–5 пунктов.`},{role:`user`,content:`Разбери немецкую фразу «${e.de}» (перевод: «${e.ru}»): почему слова стоят в таком порядке, какие формы глаголов/артикли/падежи здесь использованы и почему, что важно запомнить. Дай 1–2 похожие фразы с переводом по образцу.`}],{temperature:.3,maxTokens:600});Nn[e.de]=t;try{localStorage.setItem(`dw.explain.v1`,JSON.stringify(Nn))}catch{}r(t)}catch(e){r(`⚠️ `+e.message)}a(!1)},children:i?`Разбираю…`:`🤖 Подробнее: почему так?`}),Gt()&&(0,I.jsxs)(`button`,{className:`btn small`+(c?` rec`:``),onClick:()=>{if(c){c.stop();return}s(null);let t=qt({onResult:(t,n,r)=>{r&&s([t,...n].some(t=>ne(t,e.de)>.75))},onEnd:()=>u(null),onError:()=>u(null)});u(t)},children:[c?`⏺ Слушаю…`:`🎤 Повторить вслух`,` `,o===!0&&`✅`,` `,o===!1&&`🔁`]})]})]}),(0,I.jsx)(`p`,{className:`muted small center`,children:`Запомните фразу — дальше будут задания на неё.`}),(0,I.jsx)(`button`,{className:`btn primary wide`,onClick:()=>t({ok:!0,auto:!0}),children:`Понятно →`})]})}function Fn({ex:e,onResult:t}){let n=e.lesson.grammar;return(0,I.jsxs)(`div`,{className:`ex`,children:[(0,I.jsx)(`div`,{className:`kicker`,children:`Правило перед практикой`}),(0,I.jsxs)(`h2`,{children:[`📘 `,n.title]}),(0,I.jsxs)(`div`,{className:`g-box`,children:[n.points.map((e,t)=>(0,I.jsx)(`p`,{children:(0,I.jsx)($t,{text:e})},t)),n.table&&(0,I.jsx)(`div`,{className:`table-wrap`,children:(0,I.jsx)(`table`,{children:(0,I.jsx)(`tbody`,{children:n.table.map((e,t)=>(0,I.jsx)(`tr`,{children:e.map((e,n)=>t===0?(0,I.jsx)(`th`,{children:e},n):(0,I.jsx)(`td`,{children:e},n))},t))})})})]}),(0,I.jsx)(`p`,{className:`muted`,children:`Дальше — предложения с пропусками на это правило. Если забудете, в каждом задании можно открыть подсказку с правилом (ответа там нет).`}),(0,I.jsx)(`button`,{className:`btn primary wide`,onClick:()=>t({ok:!0,auto:!0}),children:`К практике →`})]})}function In({ex:e,onResult:t}){let[n,r]=(0,l.useState)(!1),[i,a]=(0,l.useState)({}),[o,s]=(0,l.useState)({});return(0,l.useEffect)(()=>{a({}),s({})},[e]),(0,I.jsxs)(`div`,{className:`ex dialog`,children:[(0,I.jsxs)(`div`,{className:`kicker`,children:[`Прочитайте диалог: `,e.title]}),(0,I.jsx)(`p`,{className:`muted small`,children:`Прочитайте и послушайте каждую реплику. 📖 — разбор по словам. Потом вы сыграете роль справа (синие реплики) сами.`}),(0,I.jsxs)(`label`,{className:`toggle`,children:[(0,I.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>{r(e.target.checked),a({})}}),` Скрыть перевод — проверить себя`]}),(0,I.jsx)(`div`,{className:`chat-box`,children:e.lines.map((e,t)=>(0,I.jsxs)(`div`,{className:`bubble `+(e.who===`A`?`them`:`me`),children:[(0,I.jsxs)(`div`,{className:`script-line`,children:[(0,I.jsx)(`span`,{onClick:()=>P(e.de),children:e.de}),(0,I.jsx)(`button`,{className:`mini`,onClick:()=>P(e.de),children:`🔊`}),(0,I.jsx)(`button`,{className:`mini`,onClick:()=>s({...o,[t]:!o[t]}),children:`📖`}),n&&!i[t]&&(0,I.jsx)(`button`,{className:`mini`,onClick:()=>a({...i,[t]:!0}),children:`перевод`})]}),(!n||i[t])&&(0,I.jsx)(`div`,{className:`tr`,children:e.ru}),o[t]&&(0,I.jsx)(Mn,{de:e.de,compact:!0})]},t))}),(0,I.jsx)(`button`,{className:`btn primary wide`,onClick:()=>t({ok:!0,auto:!0}),children:`Теперь моя роль →`})]})}var Ln=[`Отлично!`,`Super!`,`Prima!`,`Sehr gut!`,`Wunderbar!`,`Klasse!`,`Genau!`,`Richtig!`],Rn=e=>JSON.stringify(e).slice(0,400);function zn({title:e,items:t,onExit:n,onFinish:r,level:i,saveKey:a,initial:o}){let[s,c]=(0,l.useState)(o?.queue||t),[u,d]=(0,l.useState)(o?.i||0),[f,p]=(0,l.useState)(null),[m,h]=(0,l.useState)(0),[g,_]=(0,l.useState)(null),[v,y]=(0,l.useState)(!1),[b,x]=(0,l.useState)(!1),S=(0,l.useRef)(o?.stats||{total:0,correct:0,mistakes:0,spoken:0}),C=(0,l.useRef)(new Set(o?.retried||[]));(0,l.useEffect)(()=>{a&&u>0&&ft(a,{queue:s,i:u,stats:S.current,retried:[...C.current],savedAt:Date.now()})},[u,s]);let w=s[u],T=e=>![`grammar`,`flash`,`dialog`,`phrase`,`rule`,`script`].includes(e.t),E=()=>{p(null),_(null),u+1>=s.length?(a&&pt(a),r(S.current)):d(u+1)},D=e=>{if(!f){if(T(w)&&!e.skipped&&(S.current.total++,e.ok?S.current.correct++:S.current.mistakes++,w.t===`speak`&&e.ok&&S.current.spoken++),e.key&&ot(e.key,e.ok),e.ok)T(w)&&h(e=>e+1);else{if(e.correct&&e.question){let t=/[а-яё]/i;t.test(e.correct)&&!t.test(e.question)?ct(e.question,e.correct):t.test(e.correct)||ct(e.correct,e.question)}!C.current.has(Rn(w))&&w.t!==`match`&&w.t!==`dialog`&&(C.current.add(Rn(w)),c(e=>[...e,w])),h(0)}e.auto?E():p(e)}};(0,l.useEffect)(()=>{let e=e=>{f&&(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),E())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)});let O=async()=>{if(f){y(!0);try{let e=await sn([{role:`system`,content:fn+` Отвечай коротко: 3–6 предложений, можно списком. Уровень ученика: `+(i||`A1`)+`.`},{role:`user`,content:`Задание: «${f.question||``}». Правильный ответ: «${f.correct}». Мой ответ: «${f.user||``}». Объясни, почему мой ответ неверный и какое правило здесь работает. Дай 1-2 похожих примера.`}],{temperature:.4,maxTokens:500});_(e)}catch(e){_(`⚠️ `+e.message)}y(!1)}},ee=Math.round(u/s.length*100),k={onResult:D,locked:!!f};return(0,I.jsxs)(`div`,{className:`player`,children:[(0,I.jsxs)(`div`,{className:`player-top`,children:[(0,I.jsx)(`button`,{className:`icon-btn`,"aria-label":`Выйти`,onClick:()=>x(!0),children:`✕`}),(0,I.jsx)(`div`,{className:`bar`,children:(0,I.jsx)(`div`,{className:`bar-fill`,style:{width:ee+`%`}})}),m>=3&&(0,I.jsxs)(`div`,{className:`combo`,children:[`🔥 `,m]})]}),(0,I.jsx)(`div`,{className:`player-title muted`,children:e}),b&&(0,I.jsxs)(`div`,{className:`exit-confirm card`,children:[(0,I.jsx)(`b`,{children:`Выйти из урока?`}),(0,I.jsx)(`span`,{className:`muted small`,children:a?`Место сохранится: вы продолжите с задания ${u+1} из ${s.length}.`:`Результат этой тренировки не сохранится.`}),(0,I.jsxs)(`div`,{className:`row-btns`,children:[(0,I.jsx)(`button`,{className:`btn`,onClick:()=>x(!1),children:`Остаться`}),(0,I.jsx)(`button`,{className:`btn danger`,onClick:n,children:`Выйти`})]})]}),(0,I.jsxs)(`div`,{className:`player-body`,children:[w.t===`grammar`&&(0,I.jsx)(Sn,{ex:w,...k}),w.t===`flash`&&(0,I.jsx)(Cn,{ex:w,...k}),w.t===`mc`&&(0,I.jsx)(wn,{ex:w,...k}),w.t===`article`&&(0,I.jsx)(Tn,{ex:w,...k}),w.t===`match`&&(0,I.jsx)(En,{ex:w,...k}),w.t===`build`&&(0,I.jsx)(Dn,{ex:w,...k}),w.t===`type`&&(0,I.jsx)(On,{ex:w,...k}),w.t===`gap`&&(0,I.jsx)(kn,{ex:w,...k}),w.t===`speak`&&(0,I.jsx)(An,{ex:w,...k}),w.t===`dialog`&&(0,I.jsx)(jn,{ex:w,...k}),w.t===`phrase`&&(0,I.jsx)(Pn,{ex:w,...k}),w.t===`rule`&&(0,I.jsx)(Fn,{ex:w,...k}),w.t===`script`&&(0,I.jsx)(In,{ex:w,...k})]},u),f&&(0,I.jsx)(`div`,{className:`feedback `+(f.ok?`ok`:`bad`),children:(0,I.jsxs)(`div`,{className:`fb-inner`,children:[(0,I.jsx)(`div`,{className:`fb-title`,children:f.ok?f.typo?`✅ Верно, но есть опечатка`:`✅ `+Ln[Math.floor(Math.random()*Ln.length)]:`❌ Не совсем`}),(!f.ok||f.typo)&&f.correct&&(0,I.jsxs)(`div`,{className:`fb-correct`,children:[`Правильно: `,(0,I.jsx)(`b`,{children:f.correct}),` `,(0,I.jsx)(`button`,{className:`audio-btn`,onClick:()=>P(f.correct),children:`🔊`})]}),g&&(0,I.jsx)(`div`,{className:`fb-explain`,children:(0,I.jsx)(en,{text:g})}),v&&(0,I.jsx)(nn,{text:`ИИ объясняет…`}),(0,I.jsxs)(`div`,{className:`row-btns`,children:[!f.ok&&dn()&&!g&&!v&&(0,I.jsx)(`button`,{className:`btn`,onClick:O,children:`🤖 Почему?`}),(0,I.jsx)(`button`,{className:`btn primary`,onClick:E,autoFocus:!0,children:`Продолжить →`})]})]})})]})}function Bn({go:e}){return M()?(0,I.jsxs)(`div`,{className:`card warn-card`,children:[(0,I.jsx)(`h3`,{children:`🤖 ИИ пока недоступен`}),(0,I.jsx)(`p`,{children:`Разговоры, проверка письма и новые задания работают через встроенного ИИ Claude. Если вы отклонили запрос доступа, откройте меню разрешений артефакта и разрешите его, затем перезагрузите страницу. ИИ доступен, когда вы вошли в свой аккаунт Claude.`}),(0,I.jsx)(`button`,{className:`btn`,onClick:()=>{Se(`permissions`).then(e=>e?.manage?.()).catch(()=>{})},children:`Открыть разрешения`})]}):(0,I.jsxs)(`div`,{className:`card warn-card`,children:[(0,I.jsx)(`h3`,{children:`🔑 Нужен ключ Grok`}),(0,I.jsxs)(`p`,{children:[`Разговоры, проверка письма и генерация заданий работают через ИИ Grok. Добавьте API-ключ в настройках (или в файл `,(0,I.jsx)(`code`,{children:`.env`}),` на сервере).`]}),(0,I.jsx)(`button`,{className:`btn primary`,onClick:e,children:`Открыть настройки`})]})}var Vn={A1:`Используй только очень простые короткие предложения (5–8 слов), настоящее время, базовую лексику A1. Говори медленно и дружелюбно.`,A2:`Используй простые предложения уровня A2: настоящее время, Perfekt, модальные глаголы, weil/dass. Не более 2 предложений за раз.`,B1:`Говори на уровне B1: естественно, но понятно, придаточные предложения допустимы. 1–3 предложения.`,B2:`Говори на уровне B2: естественный разговорный немецкий, идиомы допустимы, но поясняй сложное. 1–4 предложения.`};function Hn({level:e,title:t,role:n,situation:r,goal:i,words:a,onExit:o}){let{settings:s}=tt(),[c,u]=(0,l.useState)([]),[d,f]=(0,l.useState)(``),[p,m]=(0,l.useState)(!1),[h,g]=(0,l.useState)(``),[_,v]=(0,l.useState)(null),[y,b]=(0,l.useState)({}),[x,S]=(0,l.useState)(!1),[C,w]=(0,l.useState)(``),[T,E]=(0,l.useState)(null),[D,O]=(0,l.useState)(!1),ee=(0,l.useRef)(null),k=(0,l.useRef)(null),A=`Ты играешь роль в ролевой игре для изучения немецкого языка.
Роль: ${n}. Ситуация: ${r}. Цель ученика: ${i}.
Уровень ученика: ${e}. ${Vn[e]||Vn.A1}
${a?.length?`По возможности используй слова из урока: `+a.slice(0,20).join(`, `)+`.`:``}
Ты одновременно персонаж и ОПЫТНЫЙ УЧИТЕЛЬ НЕМЕЦКОГО для русскоговорящего ученика. Реплика персонажа (поле reply) — всегда по-немецки, коротко, с одним встречным вопросом, чтобы ученик знал, что ответить.
Если ученик написал по-русски или вставил русские слова — НЕ продолжай разговор по-русски: в correction дай, как это сказать по-немецки (corrected — полная немецкая фраза, explanation — короткое пояснение по-русски, например «"чай" — der Tee; после möchte нужен Akkusativ: einen»), а в reply по-немецки мягко попроси повторить фразу целиком.
Если ученик задаёт вопрос о языке (грамматика, слово), коротко ответь в explanation поля correction по-русски с немецким примером (corrected можно оставить равным его фразе), а в reply продолжи сценку.
Если ученик пишет «не знаю», «помоги», «?» — дай в suggestions две простые фразы, которые он может сказать, и подбодри его в reply.
Если в последней реплике ученика есть ошибка (грамматика, порядок слов, артикль, падеж, форма глагола, лексика), заполни correction: исправленный вариант и короткое объяснение по-русски — какое правило нарушено. Если ошибок нет — correction = null. Мелкие ошибки пунктуации и регистра игнорируй.
Отвечай строго JSON-объектом:
{"reply":"реплика по-немецки","translation":"перевод реплики на русский","correction":null или {"corrected":"исправленная фраза ученика","explanation":"почему, по-русски"},"suggestions":[{"de":"возможный ответ ученика","ru":"перевод"},{"de":"...","ru":"..."}],"goal_done":true/false}`,te=e=>[{role:`system`,content:A},...e.map(e=>({role:e.role,content:e.role===`assistant`?JSON.stringify({reply:e.de}):e.de}))],ne=async e=>{m(!0),g(``);try{let t=te(e);e.length||t.push({role:`user`,content:`(Начни разговор первой репликой в своей роли. correction = null.)`});let n=await ln(t,{temperature:.8,maxTokens:600}),r={role:`assistant`,de:String(n.reply||``),ru:n.translation,suggestions:Array.isArray(n.suggestions)?n.suggestions:[]},i=[...e];if(n.correction&&i.length&&i[i.length-1].role===`user`&&(n.correction.corrected||n.correction.explanation)){let e=i[i.length-1];(n.correction.corrected.trim()!==e.de.trim()||n.correction.explanation)&&(i[i.length-1]={...e,correction:n.correction})}n.goal_done&&O(!0),u([...i,r]),S(!1),Pe().autoSpeak&&P(r.de)}catch(e){g(e instanceof rn?e.message:String(e))}m(!1)};(0,l.useEffect)(()=>(dn()&&ne([]),()=>Vt()),[]),(0,l.useEffect)(()=>{let e=ee.current?.parentElement;e&&e.scrollTo({top:e.scrollHeight,behavior:`smooth`})},[c,p,x]);let re=(e=d)=>{let t=e.trim();if(!t||p)return;let n=[...c,{role:`user`,de:t}];u(n),f(``),ne(n)},ie=()=>{if(_){_.stop();return}Vt();let e=``,t=qt({onStage:e=>w(e),onResult:t=>{e=t,f(t)},onEnd:()=>{v(null),w(``),e&&(Le(e=>{e.spoken++}),re(e))},onError:e=>{g(e),v(null)}});v(t)},ae=async()=>{let t=c.filter(e=>e.role===`user`);if(t.length<2)o();else{m(!0);try{E(await qn(e,r,i,c.map(e=>({me:e.role===`user`,text:e.de})),t.length))}catch(e){g(e.message)}m(!1)}};if(!dn())return(0,I.jsxs)(`div`,{className:`page`,children:[(0,I.jsx)(`button`,{className:`btn ghost`,onClick:o,children:`← Назад`}),(0,I.jsx)(Bn,{go:o})]});if(T)return(0,I.jsx)(Jn,{summary:T,onExit:o});let oe=[...c].reverse().find(e=>e.role===`assistant`);return(0,I.jsxs)(`div`,{className:`page chat-page`,children:[(0,I.jsxs)(`div`,{className:`chat-head`,children:[(0,I.jsx)(`button`,{className:`icon-btn`,onClick:o,children:`←`}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`div`,{className:`chat-title`,children:t}),(0,I.jsxs)(`div`,{className:`muted small`,children:[`🎯 `,i,` `,D&&`✅`]})]}),(0,I.jsxs)(`label`,{className:`toggle small`,children:[(0,I.jsx)(`input`,{type:`checkbox`,checked:s.autoSpeak,onChange:e=>Ie({autoSpeak:e.target.checked})}),`🔊`]})]}),(0,I.jsxs)(`div`,{className:`chat-scroll`,children:[(0,I.jsxs)(`div`,{className:`situation`,children:[`🎭 `,r]}),c.map((e,t)=>(0,I.jsxs)(`div`,{className:`turn `+e.role,children:[(0,I.jsxs)(`div`,{className:`bubble `+(e.role===`assistant`?`them`:`me`),children:[(0,I.jsx)(`div`,{children:e.de}),e.role===`assistant`&&(0,I.jsxs)(`div`,{className:`bubble-tools`,children:[(0,I.jsx)(`button`,{onClick:()=>P(e.de),children:`🔊`}),(0,I.jsx)(`button`,{onClick:()=>P(e.de,{rate:.6}),children:`🐢`}),(0,I.jsx)(`button`,{onClick:()=>b({...y,[t]:!y[t]}),children:`RU`})]}),y[t]&&e.ru&&(0,I.jsx)(`div`,{className:`tr`,children:e.ru})]}),e.correction&&(0,I.jsxs)(`div`,{className:`correction`,children:[e.correction.corrected&&e.correction.corrected.trim()!==e.de.trim()?(0,I.jsxs)(I.Fragment,{children:[`✏️ Лучше: `,(0,I.jsx)(`b`,{children:e.correction.corrected}),` `,(0,I.jsx)(`button`,{className:`audio-btn`,onClick:()=>P(e.correction.corrected),children:`🔊`})]}):(0,I.jsx)(I.Fragment,{children:`💡 Учитель:`}),(0,I.jsx)(`div`,{className:`muted`,children:e.correction.explanation})]})]},t)),p&&(0,I.jsx)(nn,{text:`Собеседник печатает…`}),x&&oe?.suggestions?.length?(0,I.jsxs)(`div`,{className:`hints`,children:[(0,I.jsx)(`div`,{className:`muted`,children:`Можно ответить так:`}),oe.suggestions.map((e,t)=>(0,I.jsxs)(`button`,{className:`option`,onClick:()=>{f(e.de),k.current?.focus()},children:[e.de,(0,I.jsx)(`div`,{className:`tr`,children:e.ru})]},t))]}):null,h&&(0,I.jsxs)(`div`,{className:`warn`,children:[h,` `,(0,I.jsx)(`button`,{className:`btn small`,onClick:()=>ne(c),children:`Повторить`})]}),(0,I.jsx)(`div`,{ref:ee})]}),(0,I.jsxs)(`div`,{className:`chat-input`,children:[(0,I.jsxs)(`div`,{className:`chat-tools`,children:[(0,I.jsx)(`button`,{className:`btn small`,onClick:()=>S(!x),disabled:!oe,children:`💡 Подсказка`}),(0,I.jsx)(`button`,{className:`btn small`,onClick:ae,disabled:p,children:`🏁 Завершить и оценить`})]}),(0,I.jsxs)(`div`,{className:`input-row`,children:[(0,I.jsx)(`textarea`,{ref:k,rows:1,value:d,onChange:e=>f(e.target.value),placeholder:C===`recording`?`🎙️ Говорите… (пауза — и отправлю)`:C===`processing`?`⏳ Grok распознаёт…`:`Ответьте по-немецки или нажмите 🎤`,onKeyDown:e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),re())}}),Gt()&&(0,I.jsx)(`button`,{className:`mic sm`+(_?` rec`:``),onClick:ie,children:_?`⏹`:`🎤`}),(0,I.jsx)(`button`,{className:`btn primary`,onClick:()=>re(),disabled:p||!d.trim(),children:`➤`})]}),(0,I.jsx)(tn,{onChar:e=>{f(d+e),k.current?.focus()}})]})]})}async function Un(e,t){let n=e.words.map(e=>e.full+` — `+e.ru).join(`; `),r=(await ln([{role:`system`,content:`Ты — дружелюбный и терпеливый преподаватель немецкого языка для русскоговорящих учеников. Объясняешь кратко, понятно, с примерами, на русском языке. Немецкие примеры всегда пиши правильно, с умлаутами и заглавными буквами у существительных.`},{role:`user`,content:`Составь 12 НОВЫХ разнообразных упражнений по немецкому для уровня ${e.level}.
Тема урока: ${e.title} (${e.de}). Грамматика: ${e.grammar.title}. ${t?`Особый фокус: `+t+`.`:``}
Слова урока: ${n}.
Используй смесь типов:
- "mc": вопрос с 4 вариантами {"type":"mc","question":"вопрос по-русски или немецкая фраза","options":["..","..","..",".."],"answer":"точно один из options"}
- "gap": {"type":"gap","sentence":"немецкое предложение с ___ на месте пропуска (ровно один ___)","answer":"слово","options":["3-4 варианта включая answer"],"ru":"перевод"}
- "build": {"type":"build","de":"немецкое предложение 4-9 слов","ru":"перевод"}
- "speak": {"type":"speak","de":"фраза для произношения","ru":"перевод"}
Минимум 4 gap, 3 build, 3 mc, 2 speak. Всё грамматически безупречно, лексика уровня ${e.level}.
Верни JSON: {"exercises":[...]}`}],{temperature:.9,maxTokens:2500})).exercises||[],i=[];for(let e of r)try{if(e.type===`mc`&&Array.isArray(e.options)&&e.options.includes(e.answer))i.push({t:`mc`,title:`Выберите правильный вариант`,prompt:e.question,options:O(e.options),answer:e.answer});else if(e.type===`gap`&&typeof e.sentence==`string`&&e.sentence.includes(`___`)){let[t,n]=e.sentence.split(`___`),r=Array.isArray(e.options)&&e.options.length>1?e.options:void 0;i.push({t:`gap`,gap:{before:t,after:n??``,answer:e.answer,ru:e.ru||``,opts:r,full:t+e.answer+(n??``)}})}else if(e.type===`build`&&e.de){let t=String(e.de).split(/\s+/).map(e=>e.replace(/^[„"«(]+|[.,!?;:"“»)]+$/g,``));i.push({t:`build`,ru:e.ru,answer:e.de,tokens:O(t)})}else e.type===`speak`&&e.de&&i.push({t:`speak`,de:e.de,ru:e.ru||``})}catch{}if(i.length<3)throw new rn(`ИИ вернул слишком мало корректных заданий. Попробуйте ещё раз.`);return O(i)}function Wn({lesson:e,onExit:t}){let[n,r]=(0,l.useState)(null),[i,a]=(0,l.useState)(``),[o,s]=(0,l.useState)(!1),[c,u]=(0,l.useState)(null),[d,f]=(0,l.useState)(``),p=(0,l.useRef)(null),m=async()=>{s(!0),f(``),u(null),a(``);try{let t=await ln([{role:`system`,content:fn},{role:`user`,content:`Придумай одно короткое письменное задание по немецкому для уровня ${e.level} по теме «${e.title}» (грамматика: ${e.grammar.title}). Задание на русском, ${e.level===`A1`?`3–5 простых предложений`:e.level===`A2`?`5–7 предложений`:`80–150 слов`}. Например: письмо другу, ответ на объявление, описание, мнение. Верни JSON {"task":"текст задания","hints":["полезная немецкая фраза 1","фраза 2","фраза 3"]}`}],{temperature:1});r(t)}catch(e){f(e.message)}s(!1)};return(0,l.useEffect)(()=>{dn()&&m()},[]),dn()?(0,I.jsxs)(`div`,{className:`page`,children:[(0,I.jsx)(`button`,{className:`btn ghost`,onClick:t,children:`← Назад`}),(0,I.jsxs)(`h2`,{children:[`✍️ Письмо: `,e.title]}),o&&!n&&(0,I.jsx)(nn,{text:`Придумываю задание…`}),n&&(0,I.jsxs)(`div`,{className:`card`,children:[(0,I.jsxs)(`p`,{children:[(0,I.jsx)(`b`,{children:`Задание:`}),` `,n.task]}),n.hints?.length>0&&(0,I.jsx)(`div`,{className:`hint-chips`,children:n.hints.map((e,t)=>(0,I.jsx)(`span`,{className:`chip static`,onClick:()=>P(e),children:e},t))})]}),n&&!c&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`textarea`,{ref:p,className:`writing`,value:i,onChange:e=>a(e.target.value),placeholder:`Schreiben Sie hier…`,rows:8,spellCheck:!1}),(0,I.jsx)(tn,{onChar:e=>{a(i+e),p.current?.focus()}}),(0,I.jsxs)(`div`,{className:`muted small`,children:[`Слов: `,i.trim()?i.trim().split(/\s+/).length:0]}),(0,I.jsxs)(`div`,{className:`row-btns`,children:[(0,I.jsx)(`button`,{className:`btn`,onClick:m,disabled:o,children:`🔄 Другое задание`}),(0,I.jsx)(`button`,{className:`btn primary`,onClick:async()=>{s(!0),f(``);try{let t=await ln([{role:`system`,content:fn+` Ты внимательный экзаменатор Goethe-Institut.`},{role:`user`,content:`Уровень: ${e.level}. Задание: ${n?.task}
Текст ученика:
"""${i}"""
Проверь текст. Верни JSON: {"score":0-100,"level_estimate":"A1/A2/B1/B2","corrected":"полностью исправленный текст","mistakes":[{"wrong":"фрагмент","right":"исправление","why":"объяснение по-русски"}],"praise":"что хорошо","improved":"улучшенная, более естественная версия текста того же уровня","tip":"главный совет"}`}],{temperature:.2,maxTokens:2e3});u(t),rt(15+Math.round((t.score||0)/10))}catch(e){f(e.message)}s(!1)},disabled:o||i.trim().split(/\s+/).length<3,children:o?`Проверяю…`:`✅ Проверить`})]})]}),c&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{className:`card center`,children:[(0,I.jsxs)(`div`,{className:`score-big`,children:[c.score,(0,I.jsx)(`small`,{children:`/100`})]}),(0,I.jsxs)(`div`,{className:`muted`,children:[`Оценка уровня: `,c.level_estimate]})]}),c.praise&&(0,I.jsxs)(`div`,{className:`card`,children:[(0,I.jsx)(`h3`,{children:`👍`}),(0,I.jsx)(`p`,{children:c.praise})]}),c.mistakes?.length>0&&(0,I.jsxs)(`div`,{className:`card`,children:[(0,I.jsx)(`h3`,{children:`✏️ Ошибки`}),c.mistakes.map((e,t)=>(0,I.jsxs)(`div`,{className:`mistake`,children:[(0,I.jsx)(`s`,{children:e.wrong}),` → `,(0,I.jsx)(`b`,{children:e.right}),(0,I.jsx)(`div`,{className:`muted`,children:e.why})]},t))]}),(0,I.jsxs)(`div`,{className:`card`,children:[(0,I.jsx)(`h3`,{children:`✅ Исправленный текст`}),(0,I.jsx)(`p`,{className:`de-text`,children:c.corrected}),(0,I.jsx)(`button`,{className:`btn small`,onClick:()=>P(c.corrected),children:`🔊 Прослушать`})]}),c.improved&&(0,I.jsxs)(`div`,{className:`card`,children:[(0,I.jsx)(`h3`,{children:`🌟 Как сказал бы носитель`}),(0,I.jsx)(`p`,{className:`de-text`,children:c.improved})]}),c.tip&&(0,I.jsxs)(`div`,{className:`card`,children:[(0,I.jsx)(`h3`,{children:`💡 Совет`}),(0,I.jsx)(`p`,{children:c.tip})]}),(0,I.jsxs)(`div`,{className:`row-btns`,children:[(0,I.jsx)(`button`,{className:`btn`,onClick:()=>u(null),children:`Переписать`}),(0,I.jsx)(`button`,{className:`btn primary`,onClick:m,children:`Новое задание`})]})]}),d&&(0,I.jsx)(`div`,{className:`warn`,children:d})]}):(0,I.jsxs)(`div`,{className:`page`,children:[(0,I.jsx)(`button`,{className:`btn ghost`,onClick:t,children:`← Назад`}),(0,I.jsx)(Bn,{go:t})]})}function Gn({level:e,topic:t,words:n,onExit:r,onQuiz:i}){let[a,o]=(0,l.useState)(null),[s,c]=(0,l.useState)(!1),[u,d]=(0,l.useState)(``),[f,p]=(0,l.useState)({}),[m,h]=(0,l.useState)(-1),g=async()=>{c(!0),d(``),o(null),p({});try{let r=await ln([{role:`system`,content:fn},{role:`user`,content:`Напиши увлекательную короткую историю на немецком для уровня ${e} на тему «${t}». ${e===`A1`?`8–10 очень простых предложений.`:e===`A2`?`10–12 предложений.`:`12–16 предложений, живой сюжет, диалоги.`} Используй слова: ${n.slice(0,15).join(`, `)}. Сюжет с неожиданным поворотом или юмором.
Верни JSON: {"title":"заголовок по-немецки","title_ru":"...","sentences":[{"de":"...","ru":"..."}],"glossary":[{"de":"слово","ru":"перевод"}],"questions":[{"q":"вопрос на понимание по-русски","options":["4 варианта по-русски"],"answer":"правильный вариант"}]} — 4 вопроса.`}],{temperature:1,maxTokens:2500});o(r)}catch(e){d(e.message)}c(!1)};(0,l.useEffect)(()=>(dn()&&g(),()=>Vt()),[]);let _=(e=0)=>{!a||e>=a.sentences.length?h(-1):(h(e),P(a.sentences[e].de,{rate:.9,onEnd:()=>_(e+1)}))};return dn()?(0,I.jsxs)(`div`,{className:`page`,children:[(0,I.jsx)(`button`,{className:`btn ghost`,onClick:r,children:`← Назад`}),s&&(0,I.jsx)(nn,{text:`Пишу историю…`}),u&&(0,I.jsxs)(`div`,{className:`warn`,children:[u,` `,(0,I.jsx)(`button`,{className:`btn small`,onClick:g,children:`Повторить`})]}),a&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`h2`,{children:[`📖 `,a.title]}),(0,I.jsxs)(`div`,{className:`muted`,children:[a.title_ru,` · нажмите на предложение, чтобы увидеть перевод`]}),(0,I.jsx)(`div`,{className:`row-btns`,children:(0,I.jsx)(`button`,{className:`btn`,onClick:()=>m>=0?(Vt(),h(-1)):_(0),children:m>=0?`⏹ Стоп`:`▶️ Слушать всю историю`})}),(0,I.jsx)(`div`,{className:`card story`,children:a.sentences.map((e,t)=>(0,I.jsxs)(`span`,{className:`story-s`+(m===t?` playing`:``),onClick:()=>{p({...f,[t]:!f[t]}),P(e.de)},children:[e.de,f[t]&&(0,I.jsxs)(`span`,{className:`tr inline`,children:[` (`,e.ru,`)`]}),` `]},t))}),a.glossary?.length>0&&(0,I.jsxs)(`div`,{className:`card`,children:[(0,I.jsx)(`h3`,{children:`📝 Словарик`}),(0,I.jsx)(`div`,{className:`gloss`,children:a.glossary.map((e,t)=>(0,I.jsxs)(`div`,{onClick:()=>P(e.de),children:[(0,I.jsx)(`b`,{children:e.de}),` — `,e.ru]},t))})]}),(0,I.jsxs)(`div`,{className:`row-btns`,children:[(0,I.jsx)(`button`,{className:`btn`,onClick:g,children:`🔄 Другая история`}),a.questions?.length>0&&(0,I.jsx)(`button`,{className:`btn primary`,onClick:()=>i(a.questions.filter(e=>e.options?.includes(e.answer)).map(e=>({t:`mc`,title:`Вопрос по истории`,prompt:e.q,options:O(e.options),answer:e.answer}))),children:`❓ Проверить понимание`})]})]})]}):(0,I.jsxs)(`div`,{className:`page`,children:[(0,I.jsx)(`button`,{className:`btn ghost`,onClick:r,children:`← Назад`}),(0,I.jsx)(Bn,{go:r})]})}function Kn({onExit:e,context:t}){let[n,r]=(0,l.useState)([]),[i,a]=(0,l.useState)(``),[o,s]=(0,l.useState)(!1),c=(0,l.useRef)(null);(0,l.useEffect)(()=>{let e=c.current?.parentElement;e&&e.scrollTo({top:e.scrollHeight,behavior:`smooth`})},[n,o]);let u=async(e=i)=>{if(!e.trim()||o)return;let c=[...n,{role:`user`,content:e}];r(c),a(``),s(!0);try{let e=await sn([{role:`system`,content:fn+` Используй короткие разделы, списки и примеры с переводом. `+(t?`Контекст: ученик сейчас изучает `+t:``)},...c],{temperature:.5,maxTokens:1200});r([...c,{role:`assistant`,content:e}])}catch(e){r([...c,{role:`assistant`,content:`⚠️ `+e.message}])}s(!1)};return dn()?(0,I.jsxs)(`div`,{className:`page chat-page`,children:[(0,I.jsxs)(`div`,{className:`chat-head`,children:[(0,I.jsx)(`button`,{className:`icon-btn`,onClick:e,children:`←`}),(0,I.jsx)(`div`,{className:`chat-title`,children:`👩‍🏫 Спросить учителя`})]}),(0,I.jsxs)(`div`,{className:`chat-scroll`,children:[!n.length&&(0,I.jsxs)(`div`,{className:`hints`,children:[(0,I.jsx)(`div`,{className:`muted`,children:`Задайте любой вопрос о немецком языке. Например:`}),[`Когда использовать der, die, das?`,`Чем отличается Perfekt от Präteritum?`,`Объясни Akkusativ и Dativ простыми словами`,`Как запомнить порядок слов в придаточном?`,`Какие предлоги требуют Dativ?`].map(e=>(0,I.jsx)(`button`,{className:`option`,onClick:()=>u(e),children:e},e))]}),n.map((e,t)=>(0,I.jsx)(`div`,{className:`bubble `+(e.role===`user`?`me`:`them wide`),children:e.role===`assistant`?(0,I.jsx)(en,{text:e.content}):e.content},t)),o&&(0,I.jsx)(nn,{text:`Учитель думает…`}),(0,I.jsx)(`div`,{ref:c})]}),(0,I.jsx)(`div`,{className:`chat-input`,children:(0,I.jsxs)(`div`,{className:`input-row`,children:[(0,I.jsx)(`textarea`,{rows:1,value:i,onChange:e=>a(e.target.value),placeholder:`Ваш вопрос…`,onKeyDown:e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),u())}}),(0,I.jsx)(`button`,{className:`btn primary`,onClick:()=>u(),disabled:o||!i.trim(),children:`➤`})]})})]}):(0,I.jsxs)(`div`,{className:`page`,children:[(0,I.jsx)(`button`,{className:`btn ghost`,onClick:e,children:`← Назад`}),(0,I.jsx)(Bn,{go:e})]})}async function qn(e,t,n,r,i){let a=await ln([{role:`system`,content:fn},{role:`user`,content:`Оцени мою часть диалога на немецком (уровень ${e}, ситуация: ${t}, цель: ${n}). Это мог быть голосовой разговор: мои реплики — результат распознавания речи, поэтому не придирайся к пунктуации и регистру, но отметь вероятные ошибки произношения, если слова распознаны странно.
Диалог:
${r.map(e=>(e.me?`Я: `:`Собеседник: `)+e.text).join(`
`)}
Верни JSON: {"score":0-100,"goal_reached":true/false,"praise":"что получилось хорошо (по-русски)","mistakes":[{"wrong":"...","right":"...","why":"..."}],"tips":["совет 1","совет 2"],"useful_phrases":[{"de":"...","ru":"..."}]}`}],{temperature:.3,maxTokens:1500}),o=10+Math.min(25,i*2)+(a.goal_reached?10:0);return rt(o),Le(e=>{e.chats++}),a._xp=o,a}function Jn({summary:e,onExit:t}){return(0,I.jsxs)(`div`,{className:`page`,children:[(0,I.jsx)(`h2`,{children:`🏁 Итоги разговора`}),(0,I.jsxs)(`div`,{className:`card center`,children:[(0,I.jsxs)(`div`,{className:`score-big`,children:[e.score??`—`,(0,I.jsx)(`small`,{children:`/100`})]}),(0,I.jsx)(`div`,{children:e.goal_reached?`🎯 Цель достигнута!`:`Цель пока не достигнута — попробуйте ещё раз`}),(0,I.jsxs)(`div`,{className:`xp-gain`,children:[`+`,e._xp,` XP`]})]}),e.praise&&(0,I.jsxs)(`div`,{className:`card`,children:[(0,I.jsx)(`h3`,{children:`👍 Хорошо получилось`}),(0,I.jsx)(`p`,{children:e.praise})]}),e.mistakes?.length>0&&(0,I.jsxs)(`div`,{className:`card`,children:[(0,I.jsx)(`h3`,{children:`✏️ Ошибки`}),e.mistakes.map((e,t)=>(0,I.jsxs)(`div`,{className:`mistake`,children:[(0,I.jsx)(`s`,{children:e.wrong}),` → `,(0,I.jsx)(`b`,{children:e.right}),` `,(0,I.jsx)(`button`,{className:`audio-btn`,onClick:()=>P(e.right),children:`🔊`}),(0,I.jsx)(`div`,{className:`muted`,children:e.why})]},t))]}),e.tips?.length>0&&(0,I.jsxs)(`div`,{className:`card`,children:[(0,I.jsx)(`h3`,{children:`💡 Советы`}),e.tips.map((e,t)=>(0,I.jsxs)(`p`,{children:[`• `,e]},t))]}),e.useful_phrases?.length>0&&(0,I.jsxs)(`div`,{className:`card`,children:[(0,I.jsx)(`h3`,{children:`🗣 Полезные фразы`}),e.useful_phrases.map((e,t)=>(0,I.jsxs)(`div`,{className:`phrase-row`,onClick:()=>P(e.de),children:[`🔊 `,(0,I.jsx)(`b`,{children:e.de}),` — `,e.ru]},t))]}),(0,I.jsx)(`button`,{className:`btn primary wide`,onClick:t,children:`Готово`})]})}var Yn={A1:`Absolute beginner: use only very short, simple present-tense sentences (5–8 words) and basic A1 vocabulary. Repeat key words. Explain almost everything in Russian.`,A2:`Elementary: simple sentences, present tense, Perfekt, modal verbs, weil/dass. Max 2 sentences per turn.`,B1:`Intermediate: natural but clear German, subordinate clauses are fine. Push the student to speak in full sentences and give reasons.`,B2:`Upper-intermediate: natural spoken German, idioms allowed; challenge the student with follow-up questions and ask them to argue and justify.`},Xn={connecting:`Подключаюсь к Grok…`,listening:`Слушаю — говорите по-немецки`,"user-speaking":`Слышу вас…`,thinking:`Grok думает…`,speaking:`Grok говорит (можно перебить)`,closed:`Разговор завершён`,error:`Ошибка`};function Zn({level:e,title:t,role:n,situation:r,goal:i,words:a,onExit:o,goSettings:s}){let[c,u]=(0,l.useState)(`idle`),[d,f]=(0,l.useState)(``),[p,m]=(0,l.useState)([]),[h,g]=(0,l.useState)(!1),[_,v]=(0,l.useState)(null),[y,b]=(0,l.useState)(!1),[x,S]=(0,l.useState)(0),C=(0,l.useRef)(null),w=(0,l.useRef)(null);(0,l.useEffect)(()=>()=>C.current?.close(),[]),(0,l.useEffect)(()=>{let e=w.current;e&&e.scrollTo({top:e.scrollHeight,behavior:`smooth`})},[p]),(0,l.useEffect)(()=>{if(!C.current||c===`closed`||c===`idle`)return;let e=setInterval(()=>S(Math.min(1,(C.current?.level()||0)*8)),120);return()=>clearInterval(e)},[c]);let T=(e,t,n,r)=>{m(i=>{let a=i.findIndex(n=>n.id===e&&n.me===t);if(a>=0){let e=i.slice();return e[a]={...e[a],text:n,final:r},e}return[...i,{id:e,me:t,text:n,final:r}]})},E=e===`B2`?`simple German`:`Russian`,D=`You are an experienced, warm and patient GERMAN TEACHER giving a one-on-one SPOKEN practice lesson to a Russian-speaking student. This is a voice call: keep every turn short (1–3 sentences), speak clearly and a bit slower than natural.

STUDENT LEVEL: ${e} (CEFR). ${Yn[e]||Yn.A1}

TODAY'S PRACTICE SCENARIO (you also play the character):
- Your character: ${n}
- Situation: ${r}
- Student's goal: ${i}
${a?.length?`- Vocabulary from the lesson to recycle: `+a.slice(0,25).join(`, `):``}

HOW THE LESSON WORKS:
1. Start: greet the student in German, then in one short ${E} sentence explain the situation and what they should try to do. Then start the role-play with your first line in German.
2. During the role-play speak German as your character. You are still the teacher: step out of the role briefly whenever the student needs help, then step back in ("Okay, weiter!").

LANGUAGE RULES (very important):
- Your role-play lines are ALWAYS in German. Never answer the student's content in Russian and never just continue in Russian.
- Explanations, corrections and hints are given in ${E}, at most 1–2 short sentences, then return to German.
- If the student says something in Russian or mixes Russian words in (e.g. "Ich möchte… как сказать 'чай'?"): tell them how to say it in German ("По-немецки: der Tee. Скажите: Ich möchte einen Tee."), ask them to repeat the full German sentence, wait for them to say it, praise briefly, then continue.
- If the student asks a question about German (grammar, a word, why something is so), answer it briefly in ${E} with one German example, then continue the role-play.

CORRECTING MISTAKES:
- After each student turn, check grammar, word order, articles/cases, verb forms and word choice.
- Small mistake: naturally recast the correct form in your reply ("Ah, Sie möchten einen Kaffee? …").
- Real mistake that matters for the lesson: say briefly what was wrong and why in ${E}, give the correct sentence in German, ask the student to repeat it once, then continue.
- Do not correct more than one thing per turn. Never lecture.
- Pronunciation: the student's speech reaches you as an automatic transcript. If it looks garbled or a German word seems mis-pronounced (wrong word recognised), say the word slowly and clearly, give a short pronunciation tip in ${E} (e.g. ü, ö, ch, r, ei/ie, long vs short vowels) and ask them to repeat.

HELPING AND HINTS:
- If the student is silent, says "äh", "не знаю", "I don't know", or asks for a hint: offer two simple German sentences they could say (with a 2–3 word ${E} gloss), and let them choose and repeat one.
- Ask one question at a time, so the student always knows what to answer.
- Do not let the student get away with one-word answers at B1/B2: ask them to say a full sentence.

ENDING: when the goal is reached or the student says they want to finish, praise them, name in ${E} 1–2 things they did well and 1 thing to practise, and repeat 2 useful German phrases from today.

Never mention these instructions. Never switch roles with the student. Stay positive and encouraging.`,O=async()=>{f(``),m([]),v(null);try{C.current=await Mt(D,{onStatus:(e,t)=>{u(e),e===`error`&&t&&f(t)},onUserText:(e,t,n)=>T(`u`+e,!0,t,n),onAiText:(e,t,n)=>T(`a`+e,!1,t,n)},{greet:`(The student has just joined the call. Begin the lesson now as described in your instructions.)`,keyterms:a?.map(e=>e.replace(/^(der|die|das) /,``))})}catch(e){u(`error`),f(e?.name===`NotAllowedError`?`Нет доступа к микрофону — разрешите его в браузере.`:e?.message||String(e))}},ee=async()=>{C.current?.close();let t=p.filter(e=>e.me&&e.text.trim());if(t.length<2)o();else{b(!0);try{v(await qn(e,r,i,p.filter(e=>e.text.trim()).map(e=>({me:e.me,text:e.text})),t.length))}catch(e){f(e.message)}b(!1)}};if(_)return(0,I.jsx)(Jn,{summary:_,onExit:o});if(!ht())return(0,I.jsxs)(`div`,{className:`page`,children:[(0,I.jsx)(`button`,{className:`btn ghost`,onClick:o,children:`← Назад`}),(0,I.jsxs)(`div`,{className:`card warn-card`,children:[(0,I.jsx)(`h3`,{children:`🔑 Нужен ключ Grok`}),(0,I.jsx)(`p`,{children:`Голосовой разговор работает через Grok Voice. Вставьте ключ в Профиле.`}),(0,I.jsx)(`button`,{className:`btn primary`,onClick:s,children:`Вставить ключ`})]})]});let k=c!==`idle`&&c!==`closed`&&c!==`error`;return(0,I.jsxs)(`div`,{className:`page chat-page`,children:[(0,I.jsxs)(`div`,{className:`chat-head`,children:[(0,I.jsx)(`button`,{className:`icon-btn`,onClick:()=>{C.current?.close(),o()},children:`←`}),(0,I.jsxs)(`div`,{children:[(0,I.jsxs)(`div`,{className:`chat-title`,children:[`📞 `,t]}),(0,I.jsxs)(`div`,{className:`muted small`,children:[`🎯 `,i]})]})]}),(0,I.jsxs)(`div`,{className:`chat-scroll`,ref:w,children:[(0,I.jsxs)(`div`,{className:`situation`,children:[`🎭 `,r,(0,I.jsx)(`br`,{}),(0,I.jsx)(`span`,{className:`small`,children:`Говорите голосом, как по телефону. Grok сам поймёт, когда вы закончили фразу. Его можно перебивать.`})]}),p.filter(e=>e.text.trim()).map(e=>(0,I.jsx)(`div`,{className:`bubble `+(e.me?`me`:`them`)+(e.final?``:` live`),children:e.text},(e.me?`m`:`t`)+e.id)),y&&(0,I.jsx)(nn,{text:`Grok оценивает разговор…`}),d&&(0,I.jsx)(`div`,{className:`warn`,children:d})]}),(0,I.jsxs)(`div`,{className:`live-panel`,children:[(0,I.jsx)(`div`,{className:`orb `+c,style:{"--lvl":String(c===`user-speaking`||c===`listening`?x:0)},children:(0,I.jsx)(`span`,{children:c===`speaking`?`🔊`:c===`thinking`?`💭`:c===`connecting`?`⏳`:h?`🔇`:`🎙️`})}),(0,I.jsx)(`div`,{className:`center muted`,children:c===`idle`?`Нажмите «Позвонить», чтобы начать`:Xn[c]}),(0,I.jsxs)(`div`,{className:`row-btns center`,children:[k?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`button`,{className:`btn`,onClick:()=>{let e=!h;g(e),C.current?.setMuted(e)},children:h?`🎙️ Включить микрофон`:`🔇 Выключить микрофон`}),(0,I.jsx)(`button`,{className:`btn`,onClick:()=>C.current?.sendText(`(The student pressed the HINT button. As the teacher, briefly suggest two simple German sentences they could say right now, each with a short `+E+` translation, and ask them to say one.)`),children:`💡 Подсказка`})]}):(0,I.jsxs)(`button`,{className:`btn primary big`,onClick:O,children:[`📞 `,c===`idle`?`Позвонить`:`Позвонить снова`]}),(k||p.length>0)&&(0,I.jsx)(`button`,{className:`btn danger`,onClick:ee,disabled:y,children:`🏁 Завершить и оценить`})]})]})]})}function Qn(){let e=Fe(),t=Pe(),n=C.filter((n,r)=>t.unlockAll||e.lessons[n.id]?.done||r<2).map(e=>e.id),r=T.filter(e=>n.includes(e.lesson));return r.length>=10?r:T.filter(e=>e.lesson.startsWith(`a1`))}var $n=e=>Number(localStorage.getItem(`dw.best.`+e)||0),er=(e,t)=>{try{t>$n(e)&&localStorage.setItem(`dw.best.`+e,String(t))}catch{}};function tr(e,t,n){let[r,i]=(0,l.useState)(e);return(0,l.useEffect)(()=>{if(!t)return;i(e);let r=setInterval(()=>i(e=>e<=1?(clearInterval(r),n(),0):e-1),1e3);return()=>clearInterval(r)},[t]),r}function nr({title:e,desc:t,gameKey:n,children:r,score:i,running:a,setRunning:o,left:s,onExit:c}){let[u,d]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{a?d(!1):i>0&&d(!0)},[a]),(0,I.jsxs)(`div`,{className:`page`,children:[(0,I.jsx)(`button`,{className:`btn ghost`,onClick:c,children:`← Игры`}),(0,I.jsx)(`h2`,{children:e}),a?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{className:`game-hud`,children:[(0,I.jsxs)(`span`,{children:[`⏱ `,s]}),(0,I.jsxs)(`span`,{children:[`⭐ `,i]})]}),r]}):(0,I.jsxs)(`div`,{className:`card center`,children:[(0,I.jsx)(`p`,{children:t}),u&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`div`,{className:`score-big`,children:i}),(0,I.jsxs)(`div`,{className:`muted`,children:[`Рекорд: `,$n(n)]})]}),(0,I.jsxs)(`button`,{className:`btn primary wide`,onClick:()=>o(!0),children:[u?`Ещё раз`:`Старт`,` ▶`]})]})]})}function rr({onExit:e}){let[t,n]=(0,l.useState)(!1),[r,i]=(0,l.useState)(0),[a,o]=(0,l.useState)(null),[s,c]=(0,l.useState)(``),u=(0,l.useRef)([]),d=(0,l.useRef)(0),f=tr(60,t,()=>{n(!1),er(`artikel`,d.current),rt(Math.round(d.current/2))});(0,l.useEffect)(()=>{t&&(u.current=O(Qn().filter(e=>e.g)),d.current=0,i(0),o(u.current.pop()||null))},[t]);let p=e=>{if(!a)return;let t=e===a.g;t?(d.current++,i(d.current)):P(a.full),c(t?`ok`:`bad`),setTimeout(()=>c(``),250),u.current.length||(u.current=O(Qn().filter(e=>e.g))),o(u.current.pop()||null)};return(0,I.jsx)(nr,{title:`⚡ Artikel-Blitz`,desc:`60 секунд: выберите правильный артикль для как можно большего числа слов. Ошибся — услышишь правильный вариант.`,gameKey:`artikel`,score:r,running:t,setRunning:n,left:f,onExit:e,children:a&&(0,I.jsxs)(`div`,{className:`card center game-card `+s,children:[(0,I.jsx)(`div`,{className:`prompt-text big`,children:a.de}),(0,I.jsx)(`div`,{className:`muted`,children:a.ru}),(0,I.jsx)(`div`,{className:`articles`,children:[`der`,`die`,`das`].map(e=>(0,I.jsx)(`button`,{className:`article-btn `+e,onClick:()=>p(e),children:e},e))})]})})}function ir({onExit:e}){let[t,n]=(0,l.useState)(!1),[r,i]=(0,l.useState)(0),[a,o]=(0,l.useState)(null),[s,c]=(0,l.useState)(``),u=(0,l.useRef)(0),d=tr(60,t,()=>{n(!1),er(`sprint`,u.current),rt(Math.round(u.current/2))}),f=()=>{let e=Qn(),t=k(e),n=O([t.ru,...ee(Array.from(new Set(e.filter(e=>e.ru!==t.ru).map(e=>e.ru))),3)]);o({w:t,opts:n})};(0,l.useEffect)(()=>{t&&(u.current=0,i(0),f())},[t]);let p=e=>{if(!a)return;let t=e===a.w.ru;t&&(u.current++,i(u.current)),c(t?`ok`:`bad`),setTimeout(()=>c(``),250),f()};return(0,I.jsx)(nr,{title:`🏃 Wort-Sprint`,desc:`60 секунд на перевод как можно большего числа слов из пройденных уроков.`,gameKey:`sprint`,score:r,running:t,setRunning:n,left:d,onExit:e,children:a&&(0,I.jsxs)(`div`,{className:`card center game-card `+s,children:[(0,I.jsxs)(`div`,{className:`prompt-text big`,children:[(0,I.jsxs)(`span`,{style:{color:Zt(a.w.g)},children:[a.w.g,` `]}),a.w.de]}),(0,I.jsx)(`div`,{className:`options`,children:a.opts.map(e=>(0,I.jsx)(`button`,{className:`option`,onClick:()=>p(e),children:e},e))})]})})}function ar(e){let t=[`null`,`eins`,`zwei`,`drei`,`vier`,`fünf`,`sechs`,`sieben`,`acht`,`neun`,`zehn`,`elf`,`zwölf`,`dreizehn`,`vierzehn`,`fünfzehn`,`sechzehn`,`siebzehn`,`achtzehn`,`neunzehn`],n=[``,``,`zwanzig`,`dreißig`,`vierzig`,`fünfzig`,`sechzig`,`siebzig`,`achtzig`,`neunzig`];if(e<20)return t[e];if(e<100){let r=Math.floor(e/10),i=e%10;return(i?(i===1?`ein`:t[i])+`und`:``)+n[r]}if(e<1e3){let n=Math.floor(e/100),r=e%100;return(n===1?`ein`:t[n])+`hundert`+(r?ar(r):``)}let r=Math.floor(e/1e3),i=e%1e3;return(r===1?`ein`:ar(r))+`tausend`+(i?ar(i):``)}function or({onExit:e}){let[t,n]=(0,l.useState)(!1),[r,i]=(0,l.useState)(0),[a,o]=(0,l.useState)(0),[s,c]=(0,l.useState)(``),[u,d]=(0,l.useState)(100),[f,p]=(0,l.useState)(``),m=(0,l.useRef)(0),h=tr(90,t,()=>{n(!1),er(`zahlen`,m.current),rt(m.current)}),g=()=>{let e=Math.floor(Math.random()*u);o(e),c(``),setTimeout(()=>P(String(e)),200)};(0,l.useEffect)(()=>{t&&(m.current=0,i(0),p(``),g())},[t]);let _=()=>{re(s,String(a))===`correct`?(m.current++,i(m.current),p(`✅`)):p(`❌ ${a} — ${ar(a)}`),g()};return(0,I.jsx)(nr,{title:`🔢 Zahlen hören`,desc:`90 секунд: слушайте число и вводите его цифрами. Отличная тренировка для цен, телефонов и времени.`,gameKey:`zahlen`,score:r,running:t,setRunning:n,left:h,onExit:e,children:(0,I.jsxs)(`div`,{className:`card center`,children:[!t&&null,(0,I.jsxs)(`div`,{className:`row-btns center`,children:[(0,I.jsx)(`button`,{className:`audio-btn big`,onClick:()=>P(String(a)),children:`🔊`}),(0,I.jsx)(`button`,{className:`audio-btn big`,onClick:()=>P(String(a),{rate:.6}),children:`🐢`})]}),(0,I.jsx)(`input`,{className:`text-input`,inputMode:`numeric`,value:s,autoFocus:!0,onChange:e=>c(e.target.value.replace(/\D/g,``)),onKeyDown:e=>e.key===`Enter`&&s&&_(),placeholder:`Число`}),(0,I.jsx)(`button`,{className:`btn primary wide`,disabled:!s,onClick:_,children:`OK`}),(0,I.jsx)(`div`,{className:`muted`,children:f}),(0,I.jsx)(`div`,{className:`row-btns center`,children:[20,100,1e3,1e4].map(e=>(0,I.jsxs)(`button`,{className:`btn small`+(u===e?` primary`:``),onClick:()=>d(e),children:[`до `,e]},e))})]})})}function sr({onExit:e}){let[t,n]=(0,l.useState)(!1),[r,i]=(0,l.useState)(0),[a,o]=(0,l.useState)(null),[s,c]=(0,l.useState)([]),u=(0,l.useRef)(0),d=tr(120,t,()=>{n(!1),er(`satz`,u.current),rt(u.current*2)}),f=()=>{let e=Fe(),t=Pe(),n=k(C.filter((n,r)=>t.unlockAll||e.lessons[n.id]?.done||r<2).flatMap(e=>e.phrases).filter(e=>e.de.split(` `).length>=3));o({...n,toks:O(n.de.split(` `))}),c([])};return(0,l.useEffect)(()=>{t&&(u.current=0,i(0),f())},[t]),(0,l.useEffect)(()=>{a&&s.length===a.toks.length&&(s.map(e=>a.toks[e]).join(` `)===a.de?(u.current++,i(u.current),P(a.de),setTimeout(f,600)):setTimeout(()=>c([]),500))},[s]),(0,I.jsx)(nr,{title:`🧩 Satz-Puzzle`,desc:`2 минуты: собирайте предложения из пройденных уроков в правильном порядке.`,gameKey:`satz`,score:r,running:t,setRunning:n,left:d,onExit:e,children:a&&(0,I.jsxs)(`div`,{className:`card`,children:[(0,I.jsx)(`div`,{className:`prompt-text center`,children:a.ru}),(0,I.jsx)(`div`,{className:`build-line`,children:s.map(e=>(0,I.jsx)(`button`,{className:`chip in`,onClick:()=>c(s.filter(t=>t!==e)),children:a.toks[e]},e))}),(0,I.jsx)(`div`,{className:`bank`,children:a.toks.map((e,t)=>(0,I.jsx)(`button`,{className:`chip`+(s.includes(t)?` used`:``),disabled:s.includes(t),onClick:()=>c([...s,t]),children:e},t))}),(0,I.jsx)(`button`,{className:`btn ghost small`,onClick:f,children:`Пропустить`})]})})}var cr=[{id:`artikel`,name:`⚡ Artikel-Blitz`,desc:`der, die или das — на скорость`,C:rr},{id:`sprint`,name:`🏃 Wort-Sprint`,desc:`Перевод слов на время`,C:ir},{id:`zahlen`,name:`🔢 Zahlen hören`,desc:`Аудирование чисел`,C:or},{id:`satz`,name:`🧩 Satz-Puzzle`,desc:`Порядок слов в предложении`,C:sr}],lr=[{n:`home`,icon:`🗺️`,label:`Путь`},{n:`review`,icon:`🔁`,label:`Повтор`},{n:`talk`,icon:`💬`,label:`Разговор`},{n:`games`,icon:`🎮`,label:`Игры`},{n:`profile`,icon:`👤`,label:`Профиль`}],ur=(e,t,n)=>n||e.index===0||!!t.lessons[C[e.index-1].id]?.done||!!t.lessons[e.id];function dr(){let[e,t]=(0,l.useState)({n:`home`}),{progress:n,settings:r}=tt(),i=e=>{t(e),window.scrollTo(0,0)},[,a]=(0,l.useState)(0);(0,l.useEffect)(()=>{we(()=>a(e=>e+1)),Qe()},[]),(0,l.useEffect)(()=>{document.body.classList.toggle(`in-player`,e.n===`play`)},[e.n]);let o=(e,t,n,r,a,o,s)=>{(t.length||s)&&i({n:`play`,title:e,items:t,back:n,lessonId:r,full:a,level:o,initial:s})},s=(e,t)=>{let n=t.total?t.correct/t.total:1,r=Math.round(5+t.correct*1.5+(n>=.9?10:0));if(e.full&&(r+=15),rt(r),e.lessonId&&e.full){let t=w(e.lessonId);Le(e=>{let r=e.lessons[t.id]||{done:!1,best:0,stars:0,times:0},i=n>=.9?3:n>=.7?2:1;e.lessons[t.id]={done:!0,best:Math.max(r.best,Math.round(n*100)),stars:Math.max(r.stars,i),times:r.times+1}}),at(t.words.map(D))}i({n:`result`,stats:t,xp:r,lessonId:e.lessonId,back:e.back,full:e.full})},c=null;switch(e.n){case`home`:c=(0,I.jsx)(fr,{go:i});break;case`lesson`:{let t=w(e.id);c=(0,I.jsx)(pr,{l:t,go:i,startPlay:o});break}case`play`:c=(0,I.jsx)(zn,{title:e.title,items:e.items,level:e.level,saveKey:e.full&&e.lessonId?e.lessonId:void 0,initial:e.initial,onExit:()=>i(e.back),onFinish:t=>s(e,t)},e.title+(e.initial?.savedAt||``));break;case`result`:c=(0,I.jsx)(mr,{r:e,go:i});break;case`review`:c=(0,I.jsx)(hr,{go:i,startPlay:o});break;case`talk`:c=(0,I.jsx)(_r,{go:i});break;case`roleplay`:c=(0,I.jsx)(Hn,{...e,onExit:()=>i(e.back)});break;case`live`:c=(0,I.jsx)(Zn,{...e,onExit:()=>i(e.back),goSettings:()=>i({n:`profile`})});break;case`writing`:c=(0,I.jsx)(Wn,{lesson:w(e.id),onExit:()=>i({n:`lesson`,id:e.id})});break;case`story`:{let t=w(e.id);c=(0,I.jsx)(Gn,{level:t.level,topic:t.title+` / `+t.de,words:t.words.map(e=>e.full),onExit:()=>i({n:`lesson`,id:t.id}),onQuiz:e=>o(`Понимание текста`,e,{n:`story`,id:t.id},void 0,!1,t.level)});break}case`tutor`:c=(0,I.jsx)(Kn,{onExit:()=>i(e.back),context:e.context});break;case`games`:c=(0,I.jsx)(vr,{go:i});break;case`game`:{let t=cr.find(t=>t.id===e.id).C;c=(0,I.jsx)(t,{onExit:()=>i({n:`games`})});break}case`profile`:c=(0,I.jsx)(yr,{go:i})}let u=![`play`,`roleplay`,`tutor`,`live`].includes(e.n),d=n.daily[nt()]||0;return(0,I.jsxs)(`div`,{className:`app`,children:[u&&(0,I.jsxs)(`header`,{className:`topbar`,children:[(0,I.jsxs)(`div`,{className:`logo`,onClick:()=>i({n:`home`}),children:[`🇩🇪 `,(0,I.jsx)(`b`,{children:`Deutsch Weg`})]}),(0,I.jsxs)(`div`,{className:`stats`,children:[(0,I.jsxs)(`span`,{title:`Дней подряд`,children:[`🔥 `,n.streak]}),(0,I.jsxs)(`span`,{title:`Опыт`,children:[`⭐ `,n.xp]}),(0,I.jsxs)(`span`,{title:`Цель дня`,className:d>=r.dailyGoal?`goal-done`:``,children:[`🎯 `,Math.min(d,r.dailyGoal),`/`,r.dailyGoal]})]})]}),(0,I.jsx)(`main`,{className:u?`with-tabs`:``,children:c}),u&&(0,I.jsx)(`nav`,{className:`tabs`,children:lr.map(t=>(0,I.jsxs)(`button`,{className:e.n===t.n||t.n===`home`&&e.n===`lesson`?`active`:``,onClick:()=>i({n:t.n}),children:[(0,I.jsx)(`span`,{className:`tab-ic`,children:t.icon}),t.label,t.n===`review`&&st().length>0&&(0,I.jsx)(`span`,{className:`badge`,children:st().length})]},t.n))})]})}function fr({go:e}){let{progress:t,settings:n}=tt(),r=C.filter(e=>t.lessons[e.id]?.done).length,i=C.find(e=>!t.lessons[e.id]?.done),[a,o]=(0,l.useState)(i?.level||`A1`),s=r===0&&!n.unlockAll;return(0,I.jsxs)(`div`,{className:`page`,children:[s&&(0,I.jsxs)(`div`,{className:`card hero`,children:[(0,I.jsx)(`h2`,{children:`Willkommen! 👋`}),(0,I.jsxs)(`p`,{children:[`Это курс немецкого с нуля до уровня `,(0,I.jsx)(`b`,{children:`B2`}),`: `,C.length,` уроков, `,T.length,`+ слов, диалоги, голосовые задания и ИИ-собеседник.`]}),(0,I.jsx)(`p`,{className:`muted`,children:`Каждый урок — короткая порция грамматики, новые слова с озвучкой, игры, сборка фраз, произношение и живой диалог. Пройденные слова возвращаются в «Повторе» по системе интервальных повторений.`}),(0,I.jsxs)(`div`,{className:`row-btns`,children:[(0,I.jsx)(`button`,{className:`btn primary`,onClick:()=>e({n:`lesson`,id:C[0].id}),children:`Начать с нуля →`}),(0,I.jsx)(`button`,{className:`btn`,onClick:()=>Ie({unlockAll:!0}),children:`Я уже знаю основы — открыть всё`})]})]}),!s&&i&&(0,I.jsxs)(`div`,{className:`card continue`,onClick:()=>e({n:`lesson`,id:i.id}),children:[(0,I.jsx)(`div`,{className:`muted small`,children:`Продолжить`}),(0,I.jsxs)(`div`,{className:`continue-title`,children:[i.emoji,` `,i.title]}),(0,I.jsxs)(`div`,{className:`muted small`,children:[i.level,` · урок `,i.index+1,` из `,C.length,dt(i.id)?` · остановились на задании ${dt(i.id).i+1}`:``]}),(0,I.jsx)(`div`,{className:`bar`,children:(0,I.jsx)(`div`,{className:`bar-fill`,style:{width:r/C.length*100+`%`}})})]}),!ht()&&!M()&&(0,I.jsxs)(`div`,{className:`card key-cta`,onClick:()=>e({n:`profile`}),children:[`🔑 `,(0,I.jsx)(`b`,{children:`Вставьте ключ Grok`}),`, чтобы включить голосовые разговоры, проверку произношения, озвучку голосом Grok и ИИ-задания →`]}),st().length>0&&(0,I.jsxs)(`div`,{className:`card review-cta`,onClick:()=>e({n:`review`}),children:[`🔁 Пора повторить `,(0,I.jsx)(`b`,{children:st().length}),` слов — это займёт пару минут →`]}),S.map(r=>{let s=C.filter(e=>e.level===r.id),c=s.filter(e=>t.lessons[e.id]?.done).length;return(0,I.jsxs)(`section`,{className:`level`,children:[(0,I.jsxs)(`div`,{className:`level-head`,style:{borderColor:r.color},onClick:()=>o(a===r.id?null:r.id),children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`h2`,{style:{color:r.color},children:r.name}),(0,I.jsx)(`div`,{className:`muted small`,children:r.desc})]}),(0,I.jsxs)(`div`,{className:`level-count`,children:[c,`/`,s.length,` `,a===r.id?`▲`:`▼`]})]}),a===r.id&&(0,I.jsx)(`div`,{className:`path`,children:s.map((a,o)=>{let s=t.lessons[a.id],c=ur(a,t,n.unlockAll),l=i?.id===a.id;return(0,I.jsxs)(`div`,{className:`node-row `+(o%4==1?`r1`:o%4==3?`r3`:`r0`),children:[(0,I.jsx)(`button`,{className:`node`+(s?.done?` done`:``)+(c?``:` locked`)+(l?` next`:``),style:{"--c":r.color},onClick:()=>c&&e({n:`lesson`,id:a.id}),disabled:!c,children:(0,I.jsx)(`span`,{className:`node-emoji`,children:c?a.emoji:`🔒`})}),(0,I.jsxs)(`div`,{className:`node-label`+(c?` clickable`:``),onClick:()=>c&&e({n:`lesson`,id:a.id}),children:[(0,I.jsx)(`b`,{children:a.title}),(0,I.jsx)(`div`,{className:`muted small`,children:a.de}),s?.done&&(0,I.jsxs)(`div`,{className:`stars`,children:[`★`.repeat(s.stars),`☆`.repeat(3-s.stars)]})]})]},a.id)})})]},r.id)})]})}function pr({l:e,go:t,startPlay:n}){let{progress:r}=tt(),i=r.lessons[e.id],a=dt(e.id),o={n:`lesson`,id:e.id},[s,c]=(0,l.useState)(!1),[u,d]=(0,l.useState)(``),[f,p]=(0,l.useState)(`words`),m=async()=>{c(!0),d(``);try{n(`ИИ-задания: `+e.title,await Un(e,``),o,e.id,!1,e.level)}catch(e){d(e.message)}c(!1)},h=C[e.index-1],g=C[e.index+1];return(0,I.jsxs)(`div`,{className:`page`,children:[(0,I.jsxs)(`div`,{className:`row-between`,children:[(0,I.jsx)(`button`,{className:`btn ghost`,onClick:()=>t({n:`home`}),children:`← Карта`}),(0,I.jsxs)(`div`,{className:`row-btns`,children:[h&&(0,I.jsx)(`button`,{className:`btn ghost small`,onClick:()=>t({n:`lesson`,id:h.id}),children:`‹`}),g&&(0,I.jsx)(`button`,{className:`btn ghost small`,onClick:()=>t({n:`lesson`,id:g.id}),children:`›`})]})]}),(0,I.jsxs)(`div`,{className:`lesson-hero`,children:[(0,I.jsx)(`div`,{className:`lesson-emoji`,children:e.emoji}),(0,I.jsxs)(`div`,{children:[(0,I.jsxs)(`div`,{className:`kicker`,children:[e.level,` · Урок `,e.index+1]}),(0,I.jsx)(`h1`,{children:e.title}),(0,I.jsx)(`div`,{className:`de-title`,children:e.de}),(0,I.jsxs)(`p`,{className:`goal`,children:[`🎯 `,e.goal]}),i?.done&&(0,I.jsxs)(`div`,{className:`stars`,children:[`★`.repeat(i.stars),`☆`.repeat(3-i.stars),` `,(0,I.jsxs)(`span`,{className:`muted small`,children:[`лучший результат `,i.best,`%`]})]})]})]}),a?(0,I.jsxs)(`div`,{className:`resume-box`,children:[(0,I.jsxs)(`button`,{className:`btn primary big`,onClick:()=>n(e.title,[],o,e.id,!0,e.level,a),children:[`▶ Продолжить урок (задание `,a.i+1,` из `,a.queue.length,`)`]}),(0,I.jsx)(`button`,{className:`btn`,onClick:()=>{pt(e.id),n(e.title,he(e),o,e.id,!0,e.level)},children:`Начать заново`})]}):(0,I.jsx)(`button`,{className:`btn primary wide big`,onClick:()=>n(e.title,he(e),o,e.id,!0,e.level),children:i?.done?`🔄 Пройти урок заново`:`▶ Начать урок`}),(0,I.jsx)(`h3`,{className:`section-title`,children:`Тренировки`}),(0,I.jsxs)(`div`,{className:`grid-actions`,children:[(0,I.jsxs)(`button`,{className:`action`,disabled:!i?.done,onClick:()=>n(`Тренировка: `+e.title,ge(e),o,e.id,!1,e.level),children:[(0,I.jsx)(`span`,{children:`🏋️`}),`Быстрая тренировка`]}),(0,I.jsxs)(`button`,{className:`action`,onClick:()=>n(`Произношение: `+e.title,ve(e),o,e.id,!1,e.level),children:[(0,I.jsx)(`span`,{children:`🎙️`}),`Произношение`]}),(0,I.jsxs)(`button`,{className:`action`,disabled:!i?.done,onClick:()=>n(`Аудирование: `+e.title,ye(e),o,e.id,!1,e.level),children:[(0,I.jsx)(`span`,{children:`🎧`}),`Аудирование`]}),(0,I.jsxs)(`button`,{className:`action`,onClick:()=>n(`Диалог`,[{t:`dialog`,title:e.dialogTitle,lines:e.dialog,distractors:e.phrases.map(e=>e.de)}],o,e.id,!1,e.level),children:[(0,I.jsx)(`span`,{children:`🎭`}),`Диалог`]})]}),!i?.done&&(0,I.jsx)(`p`,{className:`muted small`,children:`Быстрая тренировка и аудирование откроются после прохождения урока.`}),(0,I.jsx)(`h3`,{className:`section-title`,children:`С ИИ-преподавателем 🤖`}),(0,I.jsxs)(`div`,{className:`grid-actions`,children:[(0,I.jsxs)(`button`,{className:`action ai`,onClick:()=>t({n:`live`,level:e.level,title:e.roleplay.role,role:e.roleplay.role,situation:e.roleplay.situation,goal:e.roleplay.goal,words:e.words.map(e=>e.full),back:o}),children:[(0,I.jsx)(`span`,{children:`📞`}),`Голосовой разговор`]}),(0,I.jsxs)(`button`,{className:`action ai`,onClick:()=>t({n:`roleplay`,level:e.level,title:e.roleplay.role,role:e.roleplay.role,situation:e.roleplay.situation,goal:e.roleplay.goal,words:e.words.map(e=>e.full),back:o}),children:[(0,I.jsx)(`span`,{children:`💬`}),`Чат-разговор`]}),(0,I.jsxs)(`button`,{className:`action ai`,onClick:m,disabled:s,children:[(0,I.jsx)(`span`,{children:`✨`}),s?`Генерирую…`:`Новые задания`]}),(0,I.jsxs)(`button`,{className:`action ai`,onClick:()=>t({n:`writing`,id:e.id}),children:[(0,I.jsx)(`span`,{children:`✍️`}),`Письмо с проверкой`]}),(0,I.jsxs)(`button`,{className:`action ai`,onClick:()=>t({n:`story`,id:e.id}),children:[(0,I.jsx)(`span`,{children:`📖`}),`Мини-история`]}),(0,I.jsxs)(`button`,{className:`action ai`,onClick:()=>t({n:`tutor`,back:o,context:`урок «${e.title}», грамматика: ${e.grammar.title} (уровень ${e.level})`}),children:[(0,I.jsx)(`span`,{children:`👩‍🏫`}),`Спросить учителя`]})]}),s&&(0,I.jsx)(nn,{text:`Grok составляет упражнения…`}),u&&(0,I.jsx)(`div`,{className:`warn`,children:u}),!dn()&&(0,I.jsx)(Bn,{go:()=>t({n:`profile`})}),(0,I.jsxs)(`div`,{className:`seg`,children:[(0,I.jsxs)(`button`,{className:f===`words`?`active`:``,onClick:()=>p(`words`),children:[`Слова (`,e.words.length,`)`]}),(0,I.jsxs)(`button`,{className:f===`phrases`?`active`:``,onClick:()=>p(`phrases`),children:[`Фразы (`,e.phrases.length,`)`]}),(0,I.jsx)(`button`,{className:f===`grammar`?`active`:``,onClick:()=>p(`grammar`),children:`Грамматика`})]}),f===`words`&&(0,I.jsx)(`div`,{className:`list`,children:e.words.map(e=>(0,I.jsxs)(`div`,{className:`list-row`,onClick:()=>P(e.full),children:[(0,I.jsxs)(`span`,{children:[`🔊 `,(0,I.jsx)(Qt,{w:e}),e.pl&&e.pl!==`-`?(0,I.jsxs)(`span`,{className:`muted small`,children:[` (`,e.pl,`)`]}):null]}),(0,I.jsx)(`span`,{className:`muted`,children:e.ru})]},e.full))}),f===`phrases`&&(0,I.jsx)(`div`,{className:`list`,children:e.phrases.map(e=>(0,I.jsxs)(`div`,{className:`list-row col`,onClick:()=>P(e.de),children:[(0,I.jsxs)(`span`,{children:[`🔊 `,e.de]}),(0,I.jsx)(`span`,{className:`muted small`,children:e.ru})]},e.de))}),f===`grammar`&&(0,I.jsxs)(`div`,{className:`card`,children:[(0,I.jsxs)(`h3`,{children:[`📘 `,e.grammar.title]}),e.grammar.points.map((e,t)=>(0,I.jsx)(`p`,{dangerouslySetInnerHTML:{__html:e.replace(/\*\*([^*]+)\*\*/g,`<b>$1</b>`)}},t)),e.grammar.table&&(0,I.jsx)(`div`,{className:`table-wrap`,children:(0,I.jsx)(`table`,{children:(0,I.jsx)(`tbody`,{children:e.grammar.table.map((e,t)=>(0,I.jsx)(`tr`,{children:e.map((e,n)=>t===0?(0,I.jsx)(`th`,{children:e},n):(0,I.jsx)(`td`,{children:e},n))},t))})})})]})]})}function mr({r:e,go:t}){let n=e.stats.total?Math.round(e.stats.correct/e.stats.total*100):100,r=n>=90?3:n>=70?2:1,i=e.lessonId?w(e.lessonId):void 0,a=i&&e.full?C[i.index+1]:void 0;return(0,l.useEffect)(()=>{P(n>=90?`Ausgezeichnet!`:n>=70?`Sehr gut!`:`Gut gemacht!`)},[]),(0,I.jsxs)(`div`,{className:`page center result`,children:[(0,I.jsx)(`div`,{className:`result-emoji`,children:n>=90?`🏆`:n>=70?`🎉`:`💪`}),(0,I.jsx)(`h1`,{children:n>=90?`Ausgezeichnet!`:n>=70?`Sehr gut!`:`Gut gemacht!`}),e.full&&(0,I.jsxs)(`div`,{className:`stars big`,children:[`★`.repeat(r),`☆`.repeat(3-r)]}),(0,I.jsxs)(`div`,{className:`result-stats`,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsxs)(`b`,{children:[`+`,e.xp]}),(0,I.jsx)(`span`,{children:`XP`})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsxs)(`b`,{children:[n,`%`]}),(0,I.jsx)(`span`,{children:`точность`})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsxs)(`b`,{children:[e.stats.correct,`/`,e.stats.total]}),(0,I.jsx)(`span`,{children:`ответов`})]}),e.stats.spoken>0&&(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`b`,{children:e.stats.spoken}),(0,I.jsx)(`span`,{children:`сказано вслух`})]})]}),e.full&&i&&(0,I.jsxs)(`div`,{className:`card`,children:[(0,I.jsxs)(`p`,{children:[`Слова урока добавлены в `,(0,I.jsx)(`b`,{children:`интервальное повторение`}),` 🔁. Закрепите тему:`]}),(0,I.jsxs)(`div`,{className:`row-btns center`,children:[(0,I.jsx)(`button`,{className:`btn`,onClick:()=>t({n:`live`,level:i.level,title:i.roleplay.role,role:i.roleplay.role,situation:i.roleplay.situation,goal:i.roleplay.goal,words:i.words.map(e=>e.full),back:{n:`lesson`,id:i.id}}),children:`📞 Поговорить голосом`}),(0,I.jsx)(`button`,{className:`btn`,onClick:()=>t({n:`roleplay`,level:i.level,title:i.roleplay.role,role:i.roleplay.role,situation:i.roleplay.situation,goal:i.roleplay.goal,words:i.words.map(e=>e.full),back:{n:`lesson`,id:i.id}}),children:`💬 Чат с ИИ`}),(0,I.jsx)(`button`,{className:`btn`,onClick:()=>t({n:`writing`,id:i.id}),children:`✍️ Написать текст`})]})]}),(0,I.jsxs)(`div`,{className:`row-btns center`,children:[(0,I.jsx)(`button`,{className:`btn`,onClick:()=>t(e.back),children:`Назад`}),a&&(0,I.jsxs)(`button`,{className:`btn primary`,onClick:()=>t({n:`lesson`,id:a.id}),children:[`Следующий урок: `,a.emoji,` `,a.title,` →`]})]})]})}function hr({go:e,startPlay:t}){let{progress:n}=tt(),r=st(),i=Object.keys(n.srs),a=[0,0,0,0,0,0,0];for(let e of Object.values(n.srs))a[e.box]++;let o=Object.entries(n.srs).filter(([,e])=>e.wrong>=2).sort((e,t)=>t[1].wrong-e[1].wrong).map(([e])=>e),[s,c]=(0,l.useState)(!1);return(0,I.jsxs)(`div`,{className:`page`,children:[(0,I.jsx)(`h1`,{children:`🔁 Повторение`}),(0,I.jsx)(`p`,{className:`muted`,children:`Слова возвращаются к вам через растущие интервалы: 8 ч → 1 день → 3 дня → неделя → 2 недели → месяц. Так они переходят в долговременную память.`}),(0,I.jsxs)(`div`,{className:`card center`,children:[(0,I.jsx)(`div`,{className:`score-big`,children:r.length}),(0,I.jsxs)(`div`,{className:`muted`,children:[`слов ждут повторения · всего в словаре `,i.length]}),(0,I.jsx)(`button`,{className:`btn primary wide`,disabled:!r.length,onClick:()=>t(`Повторение`,_e(r),{n:`review`}),children:`Повторить сейчас`}),(0,I.jsx)(`button`,{className:`btn wide`,disabled:i.length<4,onClick:()=>t(`Случайное повторение`,_e([...i].sort(()=>Math.random()-.5)),{n:`review`}),children:`Повторить случайные слова`}),o.length>=3&&(0,I.jsxs)(`button`,{className:`btn wide`,onClick:()=>t(`Трудные слова`,_e(o),{n:`review`}),children:[`😤 Трудные слова (`,o.length,`)`]})]}),i.length>0&&(0,I.jsxs)(`div`,{className:`card`,children:[(0,I.jsx)(`h3`,{children:`Сила памяти`}),(0,I.jsx)(`div`,{className:`boxes`,children:a.map((e,t)=>(0,I.jsxs)(`div`,{className:`box-col`,children:[(0,I.jsx)(`div`,{className:`box-bar`,style:{height:Math.max(4,e/Math.max(1,i.length)*120)+`px`,opacity:.4+t*.1}}),(0,I.jsx)(`span`,{children:e}),(0,I.jsx)(`small`,{children:[`новые`,`8ч`,`1д`,`3д`,`7д`,`14д`,`30д`][t]})]},t))})]}),n.mistakes.length>0&&(0,I.jsxs)(`div`,{className:`card`,children:[(0,I.jsx)(`h3`,{children:`Мои недавние ошибки`}),n.mistakes.slice(0,s?100:8).map((e,t)=>(0,I.jsxs)(`div`,{className:`list-row col`,onClick:()=>P(e.de),children:[(0,I.jsxs)(`span`,{children:[`🔊 `,e.de]}),(0,I.jsx)(`span`,{className:`muted small`,children:e.ru})]},t)),n.mistakes.length>8&&(0,I.jsx)(`button`,{className:`btn ghost small`,onClick:()=>c(!s),children:s?`Свернуть`:`Показать все`})]}),!i.length&&(0,I.jsxs)(`div`,{className:`card`,children:[(0,I.jsx)(`p`,{children:`Пройдите первый урок — и слова появятся здесь.`}),(0,I.jsx)(`button`,{className:`btn primary`,onClick:()=>e({n:`home`}),children:`К урокам`})]})]})}var gr=[{title:`☕ Новый знакомый`,role:`дружелюбный немец по имени Jonas, 28 лет, из Гамбурга`,situation:`Вы познакомились в кафе на языковой встрече (Sprachcafé).`,goal:`Рассказать о себе и узнать о собеседнике 3 факта`},{title:`🏠 Соседка по квартире`,role:`соседка по WG по имени Lena, студентка`,situation:`Вы только что въехали в общую квартиру (WG) в Берлине.`,goal:`Договориться об уборке и покупках`},{title:`🚆 Попутчик в поезде`,role:`пожилой разговорчивый пассажир Herr Schulz`,situation:`Вы едете на поезде ICE из Мюнхена в Берлин.`,goal:`Поддержать small talk 5+ реплик`},{title:`💼 Собеседование`,role:`HR-менеджер компании TechNord GmbH, Frau Becker`,situation:`Собеседование на должность в немецкой IT-компании.`,goal:`Рассказать об опыте и задать 2 вопроса о работе`},{title:`🩺 У врача`,role:`врач общей практики Dr. Wagner`,situation:`Вы пришли к врачу, потому что плохо себя чувствуете.`,goal:`Описать симптомы и понять рекомендации`},{title:`🗳 Дебаты`,role:`оппонент в дискуссии, вежливый, но с противоположным мнением`,situation:`Дискуссия: «Нужно ли запретить автомобили в центре города?»`,goal:`Аргументировать свою позицию 3 аргументами`}];function _r({go:e}){let{progress:t,settings:n}=tt(),[r,i]=(0,l.useState)(()=>C.find(e=>!t.lessons[e.id]?.done)?.level||`A1`),a=C.filter(e=>ur(e,t,n.unlockAll)),o={n:`talk`};return(0,I.jsxs)(`div`,{className:`page`,children:[(0,I.jsx)(`h1`,{children:`💬 Разговорная практика`}),(0,I.jsxs)(`p`,{className:`muted`,children:[`📞 `,(0,I.jsx)(`b`,{children:`Голосом`}),` — живой разговор с Grok, как по телефону: вы говорите, он отвечает голосом и мягко поправляет. 💬 `,(0,I.jsx)(`b`,{children:`Чат`}),` — переписка (можно надиктовать) с исправлением каждой ошибки и подсказками.`]}),!dn()&&(0,I.jsx)(Bn,{go:()=>e({n:`profile`})}),(0,I.jsxs)(`div`,{className:`card`,children:[(0,I.jsx)(`h3`,{children:`Ваш уровень для свободных сценариев`}),(0,I.jsx)(`div`,{className:`seg`,children:[`A1`,`A2`,`B1`,`B2`].map(e=>(0,I.jsx)(`button`,{className:r===e?`active`:``,onClick:()=>i(e),children:e},e))}),!Gt()&&(0,I.jsx)(`p`,{className:`warn small`,children:`Голосовой ввод здесь недоступен (работает в Chrome/Edge и в приложении Claude на компьютере) — отвечайте текстом, озвучка ответов работает.`})]}),(0,I.jsxs)(`button`,{className:`card tutor-cta`,onClick:()=>e({n:`tutor`,back:o}),children:[`👩‍🏫 `,(0,I.jsx)(`b`,{children:`Спросить учителя`}),` — любые вопросы о грамматике и словах на русском`]}),(0,I.jsx)(`h3`,{className:`section-title`,children:`Свободные сценарии`}),(0,I.jsx)(`div`,{className:`scenarios`,children:gr.map(t=>(0,I.jsxs)(`div`,{className:`scenario`,children:[(0,I.jsx)(`b`,{children:t.title}),(0,I.jsx)(`span`,{className:`muted small`,children:t.situation}),(0,I.jsxs)(`span`,{className:`small`,children:[`🎯 `,t.goal]}),(0,I.jsxs)(`div`,{className:`scn-btns`,children:[(0,I.jsx)(`button`,{className:`btn small primary`,onClick:()=>e({n:`live`,level:r,title:t.title,role:t.role,situation:t.situation,goal:t.goal,back:o}),children:`📞 Голосом`}),(0,I.jsx)(`button`,{className:`btn small`,onClick:()=>e({n:`roleplay`,level:r,title:t.title,role:t.role,situation:t.situation,goal:t.goal,back:o}),children:`💬 Чат`})]})]},t.title))}),(0,I.jsx)(`h3`,{className:`section-title`,children:`Сценарии из уроков`}),(0,I.jsx)(`div`,{className:`scenarios`,children:a.map(t=>{let n={level:t.level,title:t.emoji+` `+t.title,role:t.roleplay.role,situation:t.roleplay.situation,goal:t.roleplay.goal,words:t.words.map(e=>e.full),back:o};return(0,I.jsxs)(`div`,{className:`scenario`,children:[(0,I.jsxs)(`b`,{children:[t.emoji,` `,t.title,` `,(0,I.jsx)(`span`,{className:`lvl`,children:t.level})]}),(0,I.jsx)(`span`,{className:`muted small`,children:t.roleplay.situation}),(0,I.jsxs)(`span`,{className:`small`,children:[`🎯 `,t.roleplay.goal]}),(0,I.jsxs)(`div`,{className:`scn-btns`,children:[(0,I.jsx)(`button`,{className:`btn small primary`,onClick:()=>e({n:`live`,...n}),children:`📞 Голосом`}),(0,I.jsx)(`button`,{className:`btn small`,onClick:()=>e({n:`roleplay`,...n}),children:`💬 Чат`})]})]},t.id)})})]})}function vr({go:e}){return(0,I.jsxs)(`div`,{className:`page`,children:[(0,I.jsx)(`h1`,{children:`🎮 Игры`}),(0,I.jsx)(`p`,{className:`muted`,children:`Короткие игры на скорость по словам из пройденных уроков.`}),(0,I.jsx)(`div`,{className:`scenarios`,children:cr.map(t=>(0,I.jsxs)(`button`,{className:`scenario game`,onClick:()=>e({n:`game`,id:t.id}),children:[(0,I.jsx)(`b`,{children:t.name}),(0,I.jsx)(`span`,{className:`muted small`,children:t.desc}),(0,I.jsxs)(`span`,{className:`small`,children:[`🏆 рекорд: `,$n(t.id)]})]},t.id))})]})}function yr({go:e}){let{progress:t,settings:n}=tt(),[r,i]=(0,l.useState)(``),[a,o]=(0,l.useState)(``),[s,c]=(0,l.useState)(!1),[u,d]=(0,l.useState)(Ft());(0,l.useEffect)(()=>{let e=setTimeout(()=>d(Ft()),500);return()=>clearTimeout(e)},[]);let f=C.filter(e=>t.lessons[e.id]?.done).length,p=[];for(let e=27;e>=0;e--){let n=new Date;n.setDate(n.getDate()-e);let r=`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,`0`)}-${String(n.getDate()).padStart(2,`0`)}`;p.push({d:r,xp:t.daily[r]||0})}let m=async()=>{i(`⏳ Проверяю…`);try{let e=await sn([{role:`user`,content:`Antworte mit genau einem kurzen deutschen Satz: Bist du bereit?`}],{maxTokens:40});i(`✅ Работает! Grok: `+e)}catch(e){i(`❌ `+e.message)}},h=f<13?`A1`:f<23?`A2`:f<33?`B1`:`B2`;return(0,I.jsxs)(`div`,{className:`page`,children:[(0,I.jsx)(`h1`,{children:`👤 Профиль`}),(0,I.jsxs)(`div`,{className:`result-stats`,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`b`,{children:t.xp}),(0,I.jsx)(`span`,{children:`XP`})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`b`,{children:t.streak}),(0,I.jsx)(`span`,{children:`дней подряд`})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsxs)(`b`,{children:[f,`/`,C.length]}),(0,I.jsx)(`span`,{children:`уроков`})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`b`,{children:Object.keys(t.srs).length}),(0,I.jsx)(`span`,{children:`слов`})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`b`,{children:t.spoken}),(0,I.jsx)(`span`,{children:`сказано вслух`})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`b`,{children:t.chats}),(0,I.jsx)(`span`,{children:`разговоров с ИИ`})]})]}),(0,I.jsxs)(`div`,{className:`card`,children:[(0,I.jsxs)(`h3`,{children:[`Текущий уровень: `,h]}),(0,I.jsx)(`div`,{className:`bar`,children:(0,I.jsx)(`div`,{className:`bar-fill`,style:{width:f/C.length*100+`%`}})})]}),(0,I.jsxs)(`div`,{className:`card`,children:[(0,I.jsx)(`h3`,{children:`Активность за 4 недели`}),(0,I.jsx)(`div`,{className:`heat`,children:p.map(e=>(0,I.jsx)(`div`,{title:e.d+`: `+e.xp+` XP`,className:`heat-cell`,style:{opacity:e.xp?Math.min(1,.25+e.xp/100):.08}},e.d))})]}),(0,I.jsx)(`h2`,{children:`⚙️ Настройки`}),un()===`claude`||M()?(0,I.jsxs)(`div`,{className:`card form`,children:[(0,I.jsx)(`h3`,{children:`🤖 ИИ-преподаватель`}),(0,I.jsx)(`p`,{children:un()===`claude`?`✅ Встроенный ИИ Claude подключён — ключ не нужен.`:`⏳ ИИ недоступен: разрешите доступ в меню разрешений артефакта.`}),(0,I.jsxs)(`p`,{className:`muted small`,children:[`Синхронизация прогресса: `,{off:`выключена (вы не вошли в аккаунт) — прогресс хранится только в этом браузере`,connecting:`подключение…`,synced:`☁️ сохранено в аккаунте — прогресс одинаковый на телефоне и компьютере`,saving:`сохраняю…`,error:`⚠️ нет связи, прогресс сохранён в браузере и отправится позже`}[qe()]]}),(0,I.jsx)(`button`,{className:`btn`,onClick:m,children:`Проверить ИИ`}),r&&(0,I.jsx)(`p`,{className:`small`,children:r})]}):(0,I.jsxs)(`div`,{className:`card form`,id:`grok`,children:[(0,I.jsx)(`h3`,{children:`🤖 Grok (xAI)`}),(0,I.jsxs)(`label`,{children:[`API-ключ Grok`,(0,I.jsx)(`input`,{id:`grok-key`,type:`password`,value:n.apiKey,placeholder:`xai-…`,autoComplete:`off`,onChange:e=>Ie({apiKey:e.target.value.trim()})})]}),(0,I.jsx)(`p`,{className:`muted small`,children:`Ключ хранится только в этом браузере и отправляется только на api.x.ai. Получить: console.x.ai → API Keys. На каждом устройстве (телефон, компьютер) ключ вводится один раз.`}),(0,I.jsx)(`button`,{className:`btn primary`,onClick:m,disabled:!n.apiKey,children:`Проверить ключ`}),r&&(0,I.jsx)(`p`,{className:`small`,children:r}),(0,I.jsxs)(`label`,{children:[`Голос Grok для озвучки и разговоров`,(0,I.jsx)(`select`,{id:`grok-voice`,value:n.grokVoice,onChange:e=>{Ie({grokVoice:e.target.value}),setTimeout(()=>P(`Hallo! Schön, dass du Deutsch lernst.`),50)},children:yt.map(e=>(0,I.jsx)(`option`,{value:e.id,children:e.name},e.id))})]}),(0,I.jsxs)(`label`,{className:`toggle`,children:[(0,I.jsx)(`input`,{type:`checkbox`,checked:n.useGrokVoice,onChange:e=>Ie({useGrokVoice:e.target.checked})}),` Озвучивать немецкий голосом Grok (естественнее, чем голос браузера)`]}),(0,I.jsxs)(`label`,{className:`toggle`,children:[(0,I.jsx)(`input`,{type:`checkbox`,checked:n.useGrokStt,onChange:e=>Ie({useGrokStt:e.target.checked})}),` Распознавать мою речь через Grok (точнее, работает и на iPhone)`]}),(0,I.jsxs)(`details`,{children:[(0,I.jsx)(`summary`,{className:`small`,children:`Дополнительно`}),(0,I.jsxs)(`label`,{children:[`Модель для текста и анализа`,(0,I.jsx)(`input`,{id:`grok-model`,value:n.model,onChange:e=>Ie({model:e.target.value.trim()}),list:`models`}),(0,I.jsxs)(`datalist`,{id:`models`,children:[(0,I.jsx)(`option`,{value:`grok-4-fast-non-reasoning`}),(0,I.jsx)(`option`,{value:`grok-4-fast-reasoning`}),(0,I.jsx)(`option`,{value:`grok-4`}),(0,I.jsx)(`option`,{value:`grok-3-mini`})]})]}),(0,I.jsxs)(`label`,{children:[`Модель голосового разговора`,(0,I.jsx)(`input`,{id:`grok-voice-model`,value:n.voiceModel,onChange:e=>Ie({voiceModel:e.target.value.trim()})})]}),(0,I.jsxs)(`label`,{children:[`Подключение для текста`,(0,I.jsxs)(`select`,{id:`grok-endpoint`,value:/^https?:/.test(n.endpoint)?`direct`:`proxy`,onChange:e=>Ie({endpoint:e.target.value===`direct`?`https://api.x.ai/v1/chat/completions`:`/api/chat`}),children:[(0,I.jsx)(`option`,{value:`direct`,children:`Напрямую к api.x.ai (для GitHub Pages)`}),(0,I.jsx)(`option`,{value:`proxy`,children:`Через свой сервер /api/chat`})]})]})]})]}),(0,I.jsxs)(`div`,{className:`card form`,children:[(0,I.jsx)(`h3`,{children:`🔊 Голос и речь`}),(0,I.jsxs)(`p`,{className:`muted small`,children:[`Сейчас озвучка: `,ht()&&n.useGrokVoice?`голос Grok`:`голос браузера`,` · распознавание речи: `,{grok:`Grok`,claude:`диктовка Claude`,browser:`браузер`,none:`недоступно — добавьте ключ Grok`}[Kt()]]}),!Lt()&&(0,I.jsx)(`p`,{className:`warn`,children:`Озвучка недоступна в этом браузере.`}),(0,I.jsxs)(`label`,{children:[`Голос браузера (если Grok выключен)`,(0,I.jsxs)(`select`,{value:n.voiceURI,onChange:e=>{Ie({voiceURI:e.target.value}),setTimeout(()=>P(`Hallo! Wie geht es dir?`),50)},children:[(0,I.jsx)(`option`,{value:``,children:`Автоматически`}),u.map(e=>(0,I.jsxs)(`option`,{value:e.voiceURI,children:[e.name,` (`,e.lang,`)`]},e.voiceURI))]})]}),(0,I.jsxs)(`label`,{children:[`Скорость речи: `,n.speechRate.toFixed(2),(0,I.jsx)(`input`,{type:`range`,min:.6,max:1.3,step:.05,value:n.speechRate,onChange:e=>Ie({speechRate:Number(e.target.value)})})]}),(0,I.jsx)(Xt,{text:`Guten Tag! Ich bin Ihre Deutschlehrerin.`,label:` Тест`}),(0,I.jsxs)(`label`,{className:`toggle`,children:[(0,I.jsx)(`input`,{type:`checkbox`,checked:n.autoSpeak,onChange:e=>Ie({autoSpeak:e.target.checked})}),` Озвучивать ответы ИИ автоматически`]})]}),(0,I.jsxs)(`div`,{className:`card form`,children:[(0,I.jsx)(`h3`,{children:`📚 Обучение`}),(0,I.jsxs)(`label`,{children:[`Цель на день (XP)`,(0,I.jsx)(`select`,{value:n.dailyGoal,onChange:e=>Ie({dailyGoal:Number(e.target.value)}),children:[20,50,100,150,250].map(e=>(0,I.jsxs)(`option`,{value:e,children:[e,` XP — `,e<=20?`легко`:e<=50?`нормально`:e<=100?`серьёзно`:`интенсив`]},e))})]}),(0,I.jsxs)(`label`,{className:`toggle`,children:[(0,I.jsx)(`input`,{type:`checkbox`,checked:n.unlockAll,onChange:e=>Ie({unlockAll:e.target.checked})}),` Открыть все уроки (для тех, кто не с нуля)`]})]}),(0,I.jsxs)(`div`,{className:`card form`,children:[(0,I.jsx)(`h3`,{children:`💾 Данные`}),a&&(0,I.jsx)(`p`,{className:`small`,children:a}),(0,I.jsxs)(`div`,{className:`row-btns`,children:[!M()&&(0,I.jsx)(`button`,{className:`btn`,onClick:()=>{let e=new Blob([$e()],{type:`application/json`}),t=document.createElement(`a`);t.href=URL.createObjectURL(e),t.download=`deutsch-weg-progress.json`,t.click()},children:`Экспорт прогресса`}),!M()&&(0,I.jsxs)(`label`,{className:`btn`,children:[`Импорт`,(0,I.jsx)(`input`,{type:`file`,accept:`application/json`,hidden:!0,onChange:async e=>{let t=e.target.files?.[0];if(t)try{et(await t.text()),o(`Прогресс загружен`)}catch{o(`Неверный файл`)}}})]}),s?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`span`,{className:`small`,children:`Удалить весь прогресс без возможности восстановления?`}),(0,I.jsx)(`button`,{className:`btn`,onClick:()=>c(!1),children:`Отмена`}),(0,I.jsx)(`button`,{className:`btn danger`,onClick:()=>{Re(),c(!1),e({n:`home`})},children:`Да, удалить`})]}):(0,I.jsx)(`button`,{className:`btn danger`,onClick:()=>c(!0),children:`Сбросить прогресс`})]})]})]})}var br=class extends l.Component{state={err:null};static getDerivedStateFromError(e){return{err:e}}render(){return this.state.err?(0,I.jsxs)(`div`,{className:`page`,style:{padding:24},children:[(0,I.jsx)(`h2`,{children:`😵 Что-то пошло не так`}),(0,I.jsx)(`p`,{className:`muted`,children:String(this.state.err.message)}),(0,I.jsx)(`button`,{className:`btn primary`,onClick:()=>{this.setState({err:null}),location.hash=``,location.reload()},children:`Перезагрузить`})]}):this.props.children}};(0,u.createRoot)(document.getElementById(`root`)).render((0,I.jsx)(br,{children:(0,I.jsx)(dr,{})}));
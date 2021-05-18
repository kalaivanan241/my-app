(this["webpackJsonpmy-personal-pwa"]=this["webpackJsonpmy-personal-pwa"]||[]).push([[0],{41:function(e,n,o){"use strict";n.a=function(e,n){"granted"===Notification.permission?(console.log("before callback"),navigator.serviceWorker.getRegistration().then((function(o){console.log("handle notification"),null===o||void 0===o||o.showNotification(e,n)}))):"denied"===Notification.permission||Notification.requestPermission((function(e){console.log("Notification permission status:",e)}))}},58:function(e,n,o){},59:function(e,n,o){},65:function(e,n,o){"use strict";o.r(n);var t=o(0),i=o.n(t),a=o(8),c=o.n(a),r=(o(58),o(93)),s=o(92),l=(o(59),o(23)),u=o(96),d=o(88),f=o(89),g=o(90),v=o(91),h=Object(t.createContext)({updateAvailable:!1}),b=o(6),p=function(){var e=Object(t.useContext)(h).updateAvailable,n=Object(t.useState)(!1),o=Object(l.a)(n,2),i=o[0],a=o[1];Object(t.useEffect)((function(){console.log("update available"),i&&a(!0)}),[e]);var c=function(){a(!1)};return Object(b.jsxs)(u.a,{open:i,onClose:c,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(b.jsx)(d.a,{id:"alert-dialog-title",children:"Use Google's location service?"}),Object(b.jsx)(f.a,{children:Object(b.jsx)(g.a,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),Object(b.jsxs)(v.a,{children:[Object(b.jsx)(s.a,{onClick:c,color:"secondary",children:"Disagree"}),Object(b.jsx)(s.a,{onClick:function(){window.location.reload(),a(!0)},color:"primary",autoFocus:!0,children:"Agree"})]})]})},j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){if("serviceWorker"in navigator){if(new URL("/my-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/my-app","/service-worker.js");j?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(o){var t=o.headers.get("content-type");404===o.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):O(n,e)}))}}function O(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var m=function(e){var n=e.timeout,o=void 0===n?1e3:n,t=i.a.useState(!1),a=Object(l.a)(t,2),c=a[0],r=a[1],s=i.a.useState(null),u=Object(l.a)(s,2),d=u[0],f=u[1];i.a.useEffect((function(){console.log("registration available");var e=window.setInterval((function(){d&&(console.log("registration available, update"),d.update())}),o);return function(){return clearInterval(e)}}),[d]);var g=function(e){f(e)},v=function(){console.log("update available"),r(!0)};return i.a.useEffect((function(){return w({onSuccess:g,onUpdate:v}),function(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}}),[]),{updateAvailable:c}},k=function(e){var n=e.children,o=m({timeout:1e3});return Object(b.jsx)(h.Provider,{value:o,children:n})},x=o(41),y=i.a.lazy((function(){return Promise.all([o.e(3),o.e(4)]).then(o.bind(null,147))})),S=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(k,{children:Object(b.jsxs)(t.Suspense,{fallback:Object(b.jsx)(r.a,{}),children:[Object(b.jsx)(y,{}),Object(b.jsx)(p,{}),Object(b.jsx)(s.a,{onClick:function(){Object(x.a)("Notification Success",{body:"Here is a notification body"})},children:"Notify-1"})]})})})},W=function(e){e&&e instanceof Function&&o.e(5).then(o.bind(null,145)).then((function(n){var o=n.getCLS,t=n.getFID,i=n.getFCP,a=n.getLCP,c=n.getTTFB;o(e),t(e),i(e),a(e),c(e)}))};c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),W()}},[[65,1,2]]]);
//# sourceMappingURL=main.2c8c15ce.chunk.js.map
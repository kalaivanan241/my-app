(this["webpackJsonpmy-personal-pwa"]=this["webpackJsonpmy-personal-pwa"]||[]).push([[6],{179:function(t,e,a){"use strict";var n=a(167),c=a.n(n),r=a(170),i=a(171),o=a(25),s=a(0),u=a(189);u.a.initializeApp({apiKey:"AIzaSyC-tzfeKC1QSFSZbyAcgNxw7nNa5Bqm0Zs",authDomain:"my-pwa-ab0ee.firebaseapp.com",projectId:"my-pwa-ab0ee",storageBucket:"my-pwa-ab0ee.appspot.com",messagingSenderId:"726616032493",appId:"1:726616032493:web:789aec950bde86366ab8e4",measurementId:"G-4V4DXTD4MX"});var l=null===u.a||void 0===u.a?void 0:u.a.firestore();e.a=function(t){var e=Object(s.useState)(!1),a=Object(o.a)(e,2),n=a[0],u=a[1];function j(){return(j=Object(i.a)(c.a.mark((function e(){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,l.collection(t).limit(50).get();case 3:return a=e.sent,n=a.docs.map((function(t){return Object(r.a)(Object(r.a)({},t.data()),{},{id:t.id})})),u(!1),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=Object(i.a)(c.a.mark((function e(a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,l.collection(t).add(Object(r.a)({},a));case 3:return n=e.sent,u(!1),e.abrupt("return",Object(r.a)(Object(r.a)({},n),{},{id:n.id}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(i.a)(c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,l.collection(t).doc(a.id).set(Object(r.a)({},a));case 3:u(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=Object(i.a)(c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,l.collection(t).doc(a.id).delete();case 3:u(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return{getData:function(){return j.apply(this,arguments)},addData:function(t){return d.apply(this,arguments)},updateData:function(t){return p.apply(this,arguments)},deleteData:function(t){return b.apply(this,arguments)},loading:n}}},256:function(t,e,a){"use strict";a.r(e);var n=a(190),c=a(167),r=a.n(c),i=a(171),o=a(25),s=a(0),u=a(179),l=a(8),j=a(157),d=a(85),p=a(245),b=a(39),h=a(248),O=a(252),f=a(251),m=a(247),x=a(249),g=a(250),v=a(216),y=a(165),w=a(152),k=a(135),D=a(28),S=a(4),C=Object(k.a)({table:{minWidth:300}}),N=function(t){var e=t.loading,a=t.savingList,n=C(),c=Object(l.f)();return Object(S.jsx)(S.Fragment,{children:e?Object(S.jsx)(p.a,{}):Object(S.jsxs)("div",{children:[Object(S.jsxs)(j.a,{p:2,children:[Object(S.jsx)(j.a,{children:Object(S.jsx)(w.a,{onClick:function(){return c.push(D.b)},children:"Update"})}),Object(S.jsx)(d.a,{elevation:3,children:Object(S.jsxs)(v.a,{data:a,children:[Object(S.jsx)(v.b,{valueField:"amount",argumentField:"category",name:"category",outerRadius:.75}),Object(S.jsx)(v.c,{text:"Asset allocation"}),Object(S.jsx)(y.a,{})]})})]}),Object(S.jsx)(j.a,{p:2,children:Object(S.jsx)(m.a,{component:d.a,children:Object(S.jsxs)(h.a,{className:n.table,"aria-label":"simple table",children:[Object(S.jsx)(x.a,{children:Object(S.jsxs)(g.a,{children:[Object(S.jsx)(f.a,{children:Object(S.jsx)(b.a,{variant:"h6",children:"Category"})}),Object(S.jsx)(f.a,{align:"right",children:Object(S.jsx)(b.a,{variant:"h6",children:"Amount"})}),Object(S.jsx)(f.a,{align:"center",children:Object(S.jsx)(b.a,{variant:"h6",children:"Date"})})]})}),Object(S.jsx)(O.a,{children:a.map((function(t){return Object(S.jsxs)(g.a,{children:[Object(S.jsx)(f.a,{component:"th",scope:"row",children:t.category}),Object(S.jsx)(f.a,{align:"right",children:null===t||void 0===t?void 0:t.amount}),Object(S.jsx)(f.a,{align:"right",children:null===t||void 0===t?void 0:t.updatedDate})]},t.category)}))})]})})})]})})},A=a(170),F=a(260),I=a(258),W=a(241),L=a(253),T=a(243),z=a(255),E=Object(k.a)((function(t){return Object(F.a)({container:{marginTop:"2rem",padding:"2rem",boxSizing:"border-box",position:"relative"},formControl:{margin:t.spacing(1),minWidth:120},selectEmpty:{marginTop:t.spacing(2)},root:{display:"flex",flexWrap:"wrap"},margin:{margin:t.spacing(1)},withoutLabel:{marginTop:t.spacing(3)},textField:{width:"25ch"}})})),U=function(t){t.loading;var e,a=t.savingList,n=t.onUpdate,c=Object(l.f)(),r=E(t),i=Object(s.useState)(""),u=Object(o.a)(i,2),j=u[0],p=u[1],b=Object(s.useState)("0"),h=Object(o.a)(b,2),O=h[0],f=h[1],m=function(){return a.find((function(t){return t.category===j}))};Object(s.useEffect)((function(){var t=m();f(t?t.amount.toString():"0")}),[j]);return Object(S.jsxs)(d.a,{elevation:2,className:r.container,children:[Object(S.jsxs)(T.a,{fullWidth:!0,className:r.formControl,children:[Object(S.jsx)(I.a,{htmlFor:"category",children:"Category"}),Object(S.jsxs)(z.a,{native:!0,value:j,onChange:function(t){p(t.target.value)},inputProps:{name:"category",id:"category"},children:[Object(S.jsx)("option",{"aria-label":"None",value:""}),null===(e=t.savingList)||void 0===e?void 0:e.map((function(t){return Object(S.jsx)("option",{"aria-label":"None",value:t.category,children:t.category},t.category)}))]})]}),Object(S.jsxs)(T.a,{fullWidth:!0,className:r.margin,children:[Object(S.jsx)(I.a,{htmlFor:"standard-adornment-amount",children:"Amount"}),Object(S.jsx)(W.a,{id:"standard-adornment-amount",value:O,onChange:function(t){return f(t.target.value)},startAdornment:Object(S.jsx)(L.a,{position:"start",children:"$"})})]}),Object(S.jsx)(T.a,{fullWidth:!0,className:r.margin,children:Object(S.jsx)(w.a,{variant:"contained",color:"primary",onClick:function(){var t=m();t?n(Object(A.a)(Object(A.a)({},t),{},{amount:Number(O),updatedAt:(new Date).toISOString().split("T")[0]})):f("0")},children:"Update"})}),Object(S.jsx)(T.a,{fullWidth:!0,className:r.margin,children:Object(S.jsx)(w.a,{variant:"contained",color:"secondary",onClick:function(){return c.push(D.c)},children:"cancel"})})]})};e.default=function(){var t=Object(l.f)(),e=Object(u.a)("savings"),a=e.loading,c=e.getData,j=e.updateData,d=Object(s.useState)([]),p=Object(o.a)(d,2),b=p[0],h=p[1],O=Object(s.useState)([]),f=Object(o.a)(O,2),m=f[0],x=f[1],g=function(){var t=Object(i.a)(r.a.mark((function t(){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c();case 2:e=t.sent,h(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(s.useEffect)((function(){g()}),[]),Object(s.useEffect)((function(){if(b.length){var t=b.map((function(t){return{amount:t.amount,category:t.category,updatedDate:t.updatedAt}}));x(t)}}),[b]);var v=function(){var e=Object(i.a)(r.a.mark((function e(a){var c,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j(a);case 3:c=Object(n.a)(b),i=b.findIndex((function(t){return t.category===a.category})),c.splice(i,1,a),h(c),t.push(D.c),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)(l.c,{children:[Object(S.jsx)(l.a,{exact:!0,path:D.c,component:function(){return Object(S.jsx)(N,{loading:a,savingList:m})}}),Object(S.jsx)(l.a,{path:D.b,component:function(){return Object(S.jsx)(U,{loading:a,savingList:b,onUpdate:v})}})]})}}}]);
//# sourceMappingURL=6.d497e958.chunk.js.map
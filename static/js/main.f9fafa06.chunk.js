(this.webpackJsonpsuperchat=this.webpackJsonpsuperchat||[]).push([[0],{22:function(e,t,a){},24:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(4),s=a.n(n),r=a(13),i=a.n(r),o=(a(22),a(12)),u=a.n(o),d=a(14),l=a(9),p=(a(24),a(8)),j=(a(25),a(28),a(15)),b=a(16);p.a.apps.length||p.a.initializeApp({apiKey:"AIzaSyA5iPkYigcQOsWI9zL0GGL7OwPr5cv1gBw",authDomain:"superchat-ff4a8.firebaseapp.com",databaseURL:"https://superchat-ff4a8.firebaseio.com",projectId:"superchat-ff4a8",storageBucket:"superchat-ff4a8.appspot.com",messagingSenderId:"227744905208",appId:"1:227744905208:web:07fdfe0c4b6781512fc80d",measurementId:"G-396BE5F9TP"});var h=p.a.auth(),f=p.a.firestore();function m(){return Object(c.jsxs)("div",{class:"login",children:[Object(c.jsx)("h2",{children:"Selecione um metodo de login"}),Object(c.jsx)("button",{className:"auth__button google",onClick:function(){var e=new p.a.auth.GoogleAuthProvider;h.signInWithPopup(e)},children:"Login com Google"})]})}function g(){var e=f.collection("messages"),t=e.orderBy("createdAt","desc").limit(25),a=Object(b.a)(t,{idField:"id"}),s=Object(l.a)(a,1)[0],r=Object(n.useState)(""),i=Object(l.a)(r,2),o=i[0],j=i[1],m=function(){var t=Object(d.a)(u.a.mark((function t(a){var c,n,s,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),c=h.currentUser,n=c.uid,s=c.photoURL,r=c.displayName,t.next=4,e.add({text:o,createdAt:p.a.firestore.FieldValue.serverTimestamp(),uid:n,displayName:r,photoURL:s});case 4:j("");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"feed",children:s&&s.map((function(e){return Object(c.jsx)(O,{message:e},e.id)}))}),Object(c.jsxs)("form",{onSubmit:m,children:[Object(c.jsx)("input",{value:o,onChange:function(e){return j(e.target.value)},placeholder:"Diga alguma coisa!"}),Object(c.jsx)("button",{type:"submit",disabled:!o,children:"\ud83d\udc8c"})]})]})}function O(e){var t=e.message,a=t.text,n=t.uid,s=t.photoURL,r=t.displayName,i=n===h.currentUser.uid?"sent":"received";return Object(c.jsxs)("div",{className:"message ".concat(i),children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("img",{src:s||"https://api.adorable.io/avatars/23/abott@adorable.png"}),Object(c.jsx)("span",{children:r})]}),Object(c.jsx)("p",{children:a})]})}var v=function(){var e=Object(j.a)(h),t=Object(l.a)(e,1)[0];return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("section",{children:t?Object(c.jsx)(g,{}):Object(c.jsx)(m,{})})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),x()}},[[30,1,2]]]);
//# sourceMappingURL=main.f9fafa06.chunk.js.map
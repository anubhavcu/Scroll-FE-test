(this["webpackJsonpshaadi-frontend"]=this["webpackJsonpshaadi-frontend"]||[]).push([[0],{62:function(e,t,n){},82:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(18),r=n.n(s),i=n(7),o=n(86),j=n(90),l=n(91),b=n(21),u=n(1),d=function(){var e=Object(c.useContext)(R),t=e.isLogin,n=e.setIsLogin,a=Object(c.useState)(""),s=Object(i.a)(a,2),r=s[0],d=s[1];return Object(c.useEffect)((function(){d(t?"SignOut":"Login")}),[t]),Object(u.jsx)("header",{children:Object(u.jsx)(j.a,{bg:"dark",variant:"dark",expand:"lg",collapseOnSelect:!0,children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(b.b,{to:t?"/home":"/",className:"text-link",children:Object(u.jsx)(j.a.Brand,{children:"Shaadi.com - FE "})}),Object(u.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(u.jsx)(l.a,{className:"ms-auto",children:Object(u.jsxs)(l.a.Link,{className:"customHover ",children:[Object(u.jsx)("i",{className:"fas fa-user-plus m-2 "}),Object(u.jsx)(b.b,{to:"/",onClick:function(){return n(!1)},className:"text-link",children:r})]})})})]})})})},O=n(92),x=n(87),h=n(88),m=n(49),p=[{id:1,userName:"foo",password:"bar"},{id:2,userName:"anubhav",password:"1234"}],f=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),o=r[0],j=r[1],l=Object(c.useContext)(R),d=l.isLogin,f=l.setIsLogin;console.log(d);var g=function(){console.log("button clicked "),p.find((function(e){return e.userName===n}))?f(!0):alert("enter valid credentials ...")};return Object(u.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"100px"},children:Object(u.jsxs)(O.a,{onSubmit:g,style:{width:"40rem",border:"2px solid grey",padding:"50px",borderRadius:"30px"},children:[Object(u.jsx)("h3",{className:"m-3",children:"Enter your details to continue.. "}),Object(u.jsxs)(O.a.Group,{className:"m-3",children:[Object(u.jsx)(O.a.Label,{children:"Username"}),Object(u.jsx)(O.a.Control,{type:"text",placeholder:"Enter username",value:n,onChange:function(e){return a(e.target.value)}})]}),Object(u.jsxs)(O.a.Group,{className:"m-3",children:[Object(u.jsx)(O.a.Label,{children:"Password"}),Object(u.jsx)(O.a.Control,{type:"password",placeholder:"Password",value:o,onChange:function(e){return j(e.target.value)}})]}),Object(u.jsx)(b.b,{to:"/home",children:Object(u.jsx)(x.a,{className:"m-3",variant:"primary",type:"submit",onClick:g,children:"Login"})}),Object(u.jsx)(h.a,{className:"",children:Object(u.jsxs)(m.a,{className:"ms-3",children:["Don't have an account ? Register"," ",Object(u.jsx)(b.b,{to:"/register",style:{color:"blue"},children:"here"})]})})]})})},g=n(6),v=(n(62),n(37)),N=n.n(v),L=n(26),w=n(50),y=n(51),S=n.n(y),k=(n(82),function(e){var t=e.data;return Object(u.jsx)("div",{className:"parent-container",children:Object(u.jsxs)("div",{className:"card-container customHover",children:[Object(u.jsxs)("div",{className:"details",children:[t.name.first," ",t.name.last]}),Object(u.jsx)("div",{className:"image",children:Object(u.jsx)("img",{src:t.picture.thumbnail,alt:""})})]})})}),C=n(89),E=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(1),r=Object(i.a)(s,2),j=r[0],l=r[1],b=Object(c.useState)(!1),d=Object(i.a)(b,2),O=d[0],x=d[1];Object(c.useEffect)((function(){h()}),[j]);var h=function(){var e=Object(w.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,S.a.get("https://randomuser.me/api/?results=".concat(20));case 3:t=e.sent,n=t.data,console.log(n.results),a((function(e){return[].concat(Object(L.a)(e),Object(L.a)(n.results))})),x(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return window.onscroll=function(){window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&l((function(e){return e+1}))},Object(u.jsxs)(o.a,{children:[n.map((function(e){return Object(u.jsx)(k,{data:e})})),O&&Object(u.jsx)(C.a,{animation:"border",role:"status",children:Object(u.jsx)("span",{className:"visually-hidden",children:"Loading..."})})]})},I=function(){return Object(u.jsx)("div",{children:"Register"})},H=n(3),P=function(e){var t=e.isLogin;e.component,Object(H.a)(e,["isLogin","component"]);return t?Object(u.jsx)(E,{}):Object(u.jsx)(g.a,{to:"/"})},R=a.a.createContext(),T=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return console.log(n),Object(u.jsx)(R.Provider,{value:{isLogin:n,setIsLogin:a},children:Object(u.jsxs)(b.a,{children:[Object(u.jsx)(d,{}),Object(u.jsx)(o.a,{children:Object(u.jsxs)(g.d,{children:[Object(u.jsx)(g.b,{path:"/",element:Object(u.jsx)(f,{}),exact:!0}),Object(u.jsx)(g.b,{path:"/register",element:Object(u.jsx)(I,{})}),Object(u.jsx)(g.b,{exact:!0,path:"/home",element:Object(u.jsx)(P,{isLogin:n})})]})})]})})};n(83);r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(T,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.53a72ab2.chunk.js.map
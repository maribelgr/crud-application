(this["webpackJsonpcrud-application"]=this["webpackJsonpcrud-application"]||[]).push([[0],{72:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(9),r=n.n(a),i=n(60),s=n(31),o=n.n(s),j=n(42),b=n(32),l=(n(72),n(55)),u=n.n(l),d=n(128),h=n(140),O=n(141),p=n(132),x=n(133),f=n(134),m=n(135),v=n(136),g=n(137),w=n(142),C=n(138),k=n(139),N=n(6),S=Object(d.a)((function(e){return{modal:{position:"absolute",width:400,padding:"3%",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.spacing(2,4,3),top:"50%",left:"50%",transform:"translate(-50%, -50%)"},icons:{cursor:"pointer"},inputMaterial:{width:"100%"}}}));var y=function(){var e=S(),t=Object(c.useState)([]),n=Object(b.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(!1),s=Object(b.a)(i,2),l=s[0],d=s[1],y=Object(c.useState)(""),T=Object(b.a)(y,2),J=T[0],M=T[1],A=Object(c.useState)(""),E=Object(b.a)(A,2),F=E[0],B=E[1],I=function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("http://hello-world.innocv.com/api/user/").then((function(e){r(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){d(!l)};Object(c.useEffect)(Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:case"end":return e.stop()}}),e)}))),[]);var U=Object(N.jsxs)("div",{className:e.modal,children:[Object(N.jsx)("h3",{children:"Crear Nuevo Usuario"}),Object(N.jsx)(h.a,{className:e.inputMaterial,label:"Nombre",onChange:function(e){M(e.currentTarget.value),console.log(J)}}),Object(N.jsx)("br",{}),Object(N.jsx)(h.a,{className:e.inputMaterial,label:"Fecha de Nacimiento",onChange:function(e){B(e.currentTarget.value),console.log(F)}}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsxs)("div",{align:"right",children:[Object(N.jsx)(O.a,{color:"primary",onClick:function(e,t){return fetch("https://hello-world.innocv.com/api/user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,birthdate:t})}).then((function(e){return e.json()})).then((function(e){return e}))},children:"A\xf1adir"}),Object(N.jsx)(O.a,{onClick:P,children:"Cancelar"})]})]});return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)("br",{}),Object(N.jsx)(O.a,{onClick:P,children:"Crear nuevo usuario"}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)(p.a,{children:Object(N.jsxs)(x.a,{children:[Object(N.jsx)(f.a,{children:Object(N.jsxs)(m.a,{children:[Object(N.jsx)(v.a,{children:"Nombre"}),Object(N.jsx)(v.a,{children:"Fecha de nacimiento"}),Object(N.jsx)(v.a,{children:"Opciones"})]})}),Object(N.jsx)(g.a,{children:a.map((function(e){return Object(N.jsxs)(m.a,{children:[Object(N.jsx)(v.a,{children:e.name}),Object(N.jsx)(v.a,{children:e.birthdate}),Object(N.jsxs)(v.a,{children:[Object(N.jsx)(C.a,{}),"\xa0\xa0\xa0",Object(N.jsx)(k.a,{})]})]},e.id)}))})]})}),Object(N.jsx)(w.a,{open:l,onClose:P,children:U})]})};r.a.render(Object(N.jsx)(i.a,{children:Object(N.jsx)(y,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.bf13fab0.chunk.js.map
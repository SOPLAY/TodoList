(this["webpackJsonptodolist-app-ts"]=this["webpackJsonptodolist-app-ts"]||[]).push([[0],{25:function(n,t,e){},26:function(n,t,e){},31:function(n,t,e){"use strict";e.r(t);var i,o,a,c,r,s,d,l,b,p,f,x,j=e(3),u=e(0),h=e.n(u),g=e(10),O=e.n(g),m=(e(25),e(26),e(4)),v=e(8),y=e(1),w=e(5),k=JSON.parse(localStorage.getItem("todos")||"0"),C=Object(w.b)({key:"todolistAtoms",default:k.length>0?k:[{id:1,state:!0,value:"TodoList \uc791\uc131!"}]}),S=Object(w.b)({key:"todoId",default:k.length>0?k[k.length-1]:2}),I=e.p+"static/media/plus-solid.fa2e1a3c.svg",z=e(2),F=m.a.div(i||(i=Object(j.a)(["\n  position: relative;\n  display: flex;\n  background-color: #fff;\n  min-width: 600px;\n  min-height: 80px;\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);\n  align-items: center;\n"]))),J=m.a.input(o||(o=Object(j.a)(["\n  width: 400px;\n  height: 40px;\n  margin-left: 50px;\n  font-size: 2.1rem;\n  border: none;\n  &:focus {\n    outline: none;\n  }\n"]))),T=m.a.button(a||(a=Object(j.a)(["\n  display: flex;\n  position: absolute;\n  text-align: center;\n  right: 0;\n  width: 80px;\n  height: 80px;\n  background-color: #4dabf7;\n  text-align: center;\n  justify-content: center;\n  border: none;\n  transition: 0.25s;\n  &:hover {\n    background-color: #339af0;\n  }\n  &:active {\n    background-color: #1971c2;\n  }\n"]))),L=function(){var n,t=Object(u.useState)(""),e=Object(y.a)(t,2),i=e[0],o=e[1],a=Object(w.c)(C),c=Object(y.a)(a,2),r=c[0],s=c[1],d=Object(w.c)(S),l=Object(y.a)(d,2),b=l[0],p=l[1],f=function(){if(i){var n={id:b,state:!0,value:i};p(b+1),s([].concat(Object(v.a)(r),[n])),o("")}};return Object(z.jsxs)(F,{children:[Object(z.jsx)(J,{value:i,onChange:function(n){return o(n.target.value)},placeholder:"\ud560 \uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694!",onKeyPress:function(n){"Enter"===n.key&&f()}}),Object(z.jsx)(T,{onClick:f,children:Object(z.jsx)("img",{src:I,alt:"+"})}),(n=r,void localStorage.setItem("todos",JSON.stringify(n)))]})},P=h.a.memo(L),B=e.p+"static/media/check-solid.5dcf9568.svg",E=e.p+"static/media/check-solid-act.24a70ca2.svg",N=e.p+"static/media/trash-alt-solid.6346df54.svg",R=m.a.div(c||(c=Object(j.a)(["\n  position: relative;\n  display: flex;\n  width: 500px;\n  height: 50px;\n  margin-bottom: 10px;\n  align-items: center;\n"]))),A=m.a.img(r||(r=Object(j.a)(["\n  margin-left: 15px;\n  width: 20px;\n  opacity: 0.25;\n"]))),D=m.a.img(s||(s=Object(j.a)(["\n  margin-left: 15px;\n  width: 20px;\n  opacity: 1;\n"]))),K=m.a.img(d||(d=Object(j.a)(["\n  position: absolute;\n  right: 15px;\n  height: 20px;\n  opacity: 0.25;\n  transition: 0.25s;\n  &:hover {\n    opacity: 1;\n  }\n"]))),M=m.a.div(l||(l=Object(j.a)(["\n  user-select: none;\n  width: 400px;\n  margin-left: 15px;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 30px;\n  line-height: 35px;\n  cursor: default;\n"]))),q=m.a.div(b||(b=Object(j.a)(["\n  display: flex;\n"]))),G=function(n){var t=n.id,e=n.value,i=n.state,o=Object(w.c)(C),a=Object(y.a)(o,2),c=a[0],r=a[1];return Object(z.jsxs)(R,{children:[Object(z.jsxs)(q,{onClick:function(){return function(){var n={id:t,value:e,state:!i};r(c.map((function(e){return e.id===t?n:e})))}()},children:[i?Object(z.jsx)(A,{src:B}):Object(z.jsx)(D,{src:E}),Object(z.jsx)(M,{children:e})]}),Object(z.jsx)(K,{src:N,onClick:function(){return function(n){r(c.filter((function(t){return t.id!==n})))}(t)}})]})},H=h.a.memo(G),Q=m.a.div(p||(p=Object(j.a)(["\n  margin-top: 20px;\n  width: 600px;\n  height: 600px;\n  background-color: #fff;\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);\n  padding: 40px 50px;\n  box-sizing: border-box;\n  overflow: auto;\n"]))),U=function(){var n=Object(w.d)(C);return Object(z.jsx)(Q,{children:n.map((function(n){return Object(z.jsx)(H,{id:n.id,value:n.value,state:n.state},n.id)}))})},V=h.a.memo(U),W=m.a.div(f||(f=Object(j.a)(['\n  display: flex;\n  background-color: #4dabf7;\n  min-width: 600px;\n  min-height: 80px;\n\n  font-family: "Roboto";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 2.75rem;\n  justify-content: center;\n  align-items: center;\n  color: #ffffff;\n\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);\n\n  margin-bottom: 20px;\n'])));function X(){return Object(z.jsx)(W,{children:"Todo list"})}var Y=m.a.div(x||(x=Object(j.a)(["\n  width: 600px;\n  height: 700px;\n  margin: 0 auto;\n  margin-top: 6em;\n"])));var Z,$=function(){return Object(z.jsxs)(Y,{children:[Object(z.jsx)(X,{}),Object(z.jsx)(P,{}),Object(z.jsx)(V,{})]})},_=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,32)).then((function(t){var e=t.getCLS,i=t.getFID,o=t.getFCP,a=t.getLCP,c=t.getTTFB;e(n),i(n),o(n),a(n),c(n)}))},nn=m.a.div(Z||(Z=Object(j.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #e7f5ff;\n"])));O.a.render(Object(z.jsx)(h.a.StrictMode,{children:Object(z.jsx)(w.a,{children:Object(z.jsx)(nn,{children:Object(z.jsx)($,{})})})}),document.getElementById("root")),_()}},[[31,1,2]]]);
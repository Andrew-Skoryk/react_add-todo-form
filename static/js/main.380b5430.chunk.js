(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(9),s=a(2),c=a(6),o=a(1),l=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),d=a(8),u=a.n(d),m=(a(15),a(0)),j=function(e){var t=e.user,a=t.name,n=t.email;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},b=(a(17),function(e){var t=e.todo,a=t.title,n=t.completed,i=t.user,r=t.id;return Object(m.jsxs)("article",{"data-id":r,className:u()("TodoInfo",{"TodoInfo--completed":n}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:a}),i&&Object(m.jsx)(j,{user:i})]})}),h=(a(18),function(e){var t=e.todos;return Object(m.jsx)("ul",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(b,{todo:e})},e.id)}))})});function O(e){return l.find((function(t){return t.id===e}))||null}var f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:O(e.userId)})})),p=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(0),c=Object(s.a)(i,2),d=c[0],u=c[1],j=Object(o.useState)(f),b=Object(s.a)(j,2),p=b[0],x=b[1],v=Object(o.useState)(!1),y=Object(s.a)(v,2),I=y[0],S=y[1],N=Object(o.useState)(!1),g=Object(s.a)(N,2),C=g[0],_=g[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){var t={id:p.reduce((function(e,t){return e.id>t.id?e:t})).id+1,title:a,completed:!1,userId:d,user:O(+d)};S(!a),_(!d),e.preventDefault(),d&&a&&(x([].concat(Object(r.a)(p),[t])),n(""),u(0))},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("label",{htmlFor:"titleInput",children:["Title:",Object(m.jsx)("input",{type:"text","data-cy":"titleInput",id:"titleInput",value:a,placeholder:"Enter a title",onChange:function(e){var t=e.target.value.replace(/[^a-z\u0430-\u044f\s\d]/gi,"");n(t),S(!t)}})]}),I&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("label",{htmlFor:"userInput",children:["User:",Object(m.jsxs)("select",{"data-cy":"userSelect",id:"userInput",value:d,onChange:function(e){var t=e.target.value;u(+t),_(!+t)},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),l.map((function(e){var t=e.id,a=e.name;return Object(m.jsx)("option",{value:t,children:a},t)}))]})]}),C&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(h,{todos:p})]})};i.a.render(Object(m.jsx)(p,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.380b5430.chunk.js.map
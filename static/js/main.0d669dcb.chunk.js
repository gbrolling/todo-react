(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{189:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(72),i=c.n(s),o=c(27),r=c(6),d=c(2),j=c(9),l="todos",u=function(){var e=localStorage.getItem(l)||"";try{return JSON.parse(e)}catch(t){return[]}},b=c(1),h=Object(n.createContext)({todos:[],addTodo:function(){},removeTodo:function(){},toggle:function(){}}),O=function(e){var t=Object(n.useState)(u),c=Object(j.a)(t,2),a=c[0],s=c[1];Object(n.useEffect)((function(){var e;(null===(e=a)||void 0===e?void 0:e.length)>=0&&localStorage.setItem(l,JSON.stringify(e))}),[a]);return Object(b.jsx)(h.Provider,{value:{todos:a,addTodo:function(e){var t={id:a.length+1,title:e,done:!1};s([].concat(Object(d.a)(a),[t]))},removeTodo:function(e){var t=a.indexOf(e);s(a.filter((function(e,c){return c!==t})))},toggle:function(e){var t=a.indexOf(e);a[t].done=!e.done,s(Object(d.a)(a))}},children:e.children})},x=function(){return Object(b.jsx)("div",{className:"uk-container",children:Object(b.jsxs)("nav",{className:"uk-navbar",children:[Object(b.jsx)("div",{className:"uk-navbar-left"}),Object(b.jsx)(o.b,{to:"/",className:"uk-navbar-item uk-logo",children:"My Todos"}),Object(b.jsx)("div",{className:"uk-navbar-right",children:Object(b.jsx)("ul",{className:"uk-navbar-nav",children:Object(b.jsx)("li",{children:Object(b.jsx)(o.b,{to:"/create",children:Object(b.jsx)("span",{"uk-icon":"icon: plus; ratio: 1.2"})})})})})]})})},m=function(e){var t=Object(n.useContext)(h),c=t.removeTodo,a=t.toggle;return Object(b.jsxs)("tr",{className:"uk-animation-slide-bottom-medium",children:[Object(b.jsx)("td",{className:"uk-width-auto",children:Object(b.jsx)("label",{children:Object(b.jsx)("input",{type:"checkbox",className:"uk-checkbox",checked:e.todo.done,onChange:function(t){a(e.todo)}})})}),Object(b.jsx)("td",{className:"uk-width-expand",children:e.todo.title}),Object(b.jsx)("td",{className:"uk-width-auto",children:Object(b.jsx)("button",{className:"uk-icon-button uk-button-danger","uk-icon":"trash",onClick:function(){return t=e.todo,void c(t);var t}})})]})},v=function(){var e=Object(n.useContext)(h).todos;return Object(b.jsxs)("table",{className:"uk-table",children:[Object(b.jsx)("caption",{children:"Lista de tarefas"}),Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:"Tarefas"}),Object(b.jsx)("th",{})]})}),Object(b.jsx)("tbody",{children:null===e||void 0===e?void 0:e.map((function(e){return Object(b.jsx)(m,{todo:e},e.id)}))})]})},f=c(46),k=c(16),g=c(77),N=c(48),p=N.a().shape({title:N.b().required("Tarefa inv\xe1lida")}),S=function(){var e,t=Object(n.useContext)(h).addTodo,c=Object(k.d)({resolver:Object(g.a)(p)}),a=c.register,s=c.handleSubmit,i=c.formState.errors;return Object(b.jsxs)("form",{onSubmit:s((function(e,c){t(e.title),c.target.reset(),window.location.href="/"})),children:[Object(b.jsx)("h4",{children:"Nova tarefa"}),Object(b.jsxs)("div",{className:"uk-margin uk-width-1-1",children:[Object(b.jsx)("input",Object(f.a)(Object(f.a)({},a("title")),{},{type:"text",name:"title",id:"title",placeholder:"Nova tarefa...",className:"uk-input"})),Object(b.jsx)("span",{children:Object(b.jsx)("small",{children:Object(b.jsx)("strong",{className:"uk-text-danger",children:null===(e=i.title)||void 0===e?void 0:e.message})})})]}),Object(b.jsx)("div",{className:"uk-width-1-1",children:Object(b.jsx)("button",{type:"submit",className:"uk-button uk-button-primary",children:"Salvar"})})]})},T=function(){return Object(b.jsx)(O,{className:"uk-light",children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(x,{}),Object(b.jsx)("div",{className:"uk-container",children:Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{path:"/create",children:Object(b.jsx)(S,{})}),Object(b.jsxs)(r.a,{path:"/",children:[Object(b.jsx)("h4",{children:"Minha lista de tarefas"}),Object(b.jsx)(v,{})]})]})})]})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,190)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(T,{})}),document.getElementById("root")),w()}},[[189,1,2]]]);
//# sourceMappingURL=main.0d669dcb.chunk.js.map
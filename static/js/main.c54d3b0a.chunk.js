(this.webpackJsonpcontactlist=this.webpackJsonpcontactlist||[]).push([[0],{30:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(17),i=c.n(s),r=c(9),l=c(23),j=c(24),d=(c(30),c(7)),o=c(2),b=c(18),u=c(0),O=function(){return Object(u.jsx)("div",{className:"ui fixed menu",children:Object(u.jsx)("div",{className:"ui container ",children:Object(u.jsx)("h1",{children:"Contact Manager"})})})},m=c(19),h=c(20),x=c(25),f=c(22),v=function(e){Object(x.a)(c,e);var t=Object(f.a)(c);function c(){var e;Object(m.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={name:"",email:""},e.add=function(t){t.preventDefault(),""!==e.state.name&&""!==e.state.email?(e.props.addContactHandeler(e.state),e.setState({name:"",email:""}),e.props.history.push("/")):alert("All the fields are mandatory")},e}return Object(h.a)(c,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"ui main",children:[Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("h1",{children:"AddContact"}),Object(u.jsxs)("form",{className:"ui form",onSubmit:this.add,children:[Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{children:"Name"}),Object(u.jsx)("input",{type:"text",name:"name",placeholder:"Name",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})}})]}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{children:"Email"}),Object(u.jsx)("input",{type:"text",name:"email",placeholder:"Email",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}})]}),Object(u.jsx)("button",{className:"ui button blue",children:"Add"})]})]})}}]),c}(n.a.Component),p=c.p+"static/media/user.5f0f9e4a.svg",N=function(e){var t=e.contacts,c=t.id,a=t.name,n=t.email;return Object(u.jsxs)("div",{className:"item",children:[Object(u.jsx)("img",{className:"ui avatar images",src:p,alt:"user",height:25,weight:25}),Object(u.jsx)("div",{className:"content",children:Object(u.jsxs)(d.b,{to:{pathname:"/contact/".concat(c),state:{contact:e.contacts}},children:[Object(u.jsx)("div",{className:"header",children:a}),Object(u.jsx)("div",{children:n})]})}),Object(u.jsx)("i",{className:"trash alternate outline icon",style:{color:"red",marginTop:"7px"},onClick:function(){return e.clickHandler(c)}})]})},g=function(e){console.log(e.contacts);var t=function(t){e.getContactId(t)},c=e.contacts.map((function(e){return Object(u.jsx)(N,{contacts:e,clickHandler:t},e.id)}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"main",children:[Object(u.jsxs)("h1",{children:["ContactList",Object(u.jsx)(d.b,{to:"/add",children:Object(u.jsx)("button",{style:{float:"right"},className:"ui button blue right",children:"Add Contact"})})]}),Object(u.jsx)("div",{className:"ui celled list",children:c})]})]})},C=function(e){var t=e.location.state.contact,c=t.name,a=t.email;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:"main",children:Object(u.jsxs)("div",{className:"ui card centered",children:[Object(u.jsx)("div",{className:"image",children:Object(u.jsx)("img",{src:p,alt:"user"})}),Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("div",{className:"header",children:c}),Object(u.jsx)("div",{className:"description",children:a})]}),Object(u.jsx)("div",{className:"center-div",children:Object(u.jsx)(d.b,{to:"/",children:Object(u.jsx)("button",{style:{float:"center"},className:"ui button blue center",children:"Back to Contact List"})})})]})})]})};var y=function(){var e="contacts",t=Object(a.useState)([]),c=Object(j.a)(t,2),n=c[0],s=c[1],i=function(e){console.log(e),s([].concat(Object(l.a)(n),[Object(r.a)({id:Object(b.uuid)()},e)]))},m=function(e){var t=n.filter((function(t){return t.id!==e}));s(t)};return Object(a.useEffect)((function(){var t=JSON.parse(localStorage.getItem(e));t&&s(t)}),[]),Object(a.useEffect)((function(){localStorage.setItem(e,JSON.stringify(n))}),[n]),Object(u.jsx)("div",{className:"ui container ",children:Object(u.jsxs)(d.a,{children:[Object(u.jsx)(O,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",render:function(e){return Object(u.jsx)(g,Object(r.a)(Object(r.a)({},e),{},{contacts:n,getContactId:m}))}}),Object(u.jsx)(o.a,{path:"/add",render:function(e){return Object(u.jsx)(v,Object(r.a)(Object(r.a)({},e),{},{addContactHandeler:i}))}}),Object(u.jsx)(o.a,{path:"/contact/:id",component:C})]})]})})};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.c54d3b0a.chunk.js.map
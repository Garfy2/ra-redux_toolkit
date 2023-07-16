(this["webpackJsonpra_thunk-2"]=this["webpackJsonpra_thunk-2"]||[]).push([[0],{37:function(e,t,r){},38:function(e,t,r){"use strict";r.r(t);var n,c=r(0),a=r.n(c),i=r(16),s=r.n(i),o=r(4),u=r(17),l=r(15),d=r(3),v=r(1),j=function(e){var t=e.onFilter,r=Object(c.useState)(""),n=Object(u.a)(r,2),a=n[0],i=n[1];return Object(v.jsx)("div",{className:"filter-services",children:Object(v.jsxs)("label",{className:"filter-services_label",children:[Object(v.jsx)("span",{className:"filter-services_text",children:"Search"}),Object(v.jsx)("input",{type:"text",className:"filter-services_input",onChange:function(e){var r=e.target.value;i(r),t(r)},value:a})]})})},b=function(e){var t=e.radius,r=e.width,n=e.color,c=2.5*t;return Object(v.jsx)("svg",{className:"loading-spinner",viewBox:"0 0 ".concat(c," ").concat(c),children:Object(v.jsx)("circle",{className:"path",cx:c/2,cy:c/2,r:t,fill:"none",strokeWidth:r,stroke:n})})},p=function(e){var t=e.type,r=e.onInputChange,n=e.onFormSubmit,c=e.isLoading,a=Object(o.c)((function(e){return e["".concat(t,"Service")].service}));return Object(v.jsxs)("div",{className:"form_container",children:[c&&Object(v.jsx)("div",{className:"loading_wrapper",children:Object(v.jsx)(b,{radius:"20",width:"5",color:"rgb(210, 70, 75)"})}),Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(a)},className:"add-service_form",children:[Object(v.jsx)(f,{label:"Name",name:"name",inputValue:a.name,onInputChange:r,type:"text"}),Object(v.jsx)(f,{label:"Price",name:"price",inputValue:a.price,onInputChange:r,type:"number"}),Object(v.jsx)(f,{label:"Description",name:"content",inputValue:a.content,onInputChange:r,type:"text"}),Object(v.jsx)("button",{type:"submit",className:"form_submit",children:"Save"})]})]})},f=function(e){var t=e.name,r=e.label,n=e.inputValue,c=e.onInputChange,a=e.type;return Object(v.jsxs)("label",{className:"form_label",children:[Object(v.jsx)("span",{className:"form_label_text",children:r}),Object(v.jsx)("input",{onChange:function(e){var r=e.target.value;c(t,"number"===a?+r:r)},className:"form_input",value:n,type:a})]})},m=function(e){var t=e.message;return Object(v.jsx)("div",{className:"error-message",children:t})},h=r(6),O=r(5),x=r.n(O),g=r(12),S=r(9);function y(e){return k.apply(this,arguments)}function k(){return(k=Object(g.a)(x.a.mark((function e(t){var r,n,c,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.url,n=t.method,c=t.data,e.next=3,fetch(r,{method:n,body:JSON.stringify(c)});case 3:if((a=e.sent).ok){e.next=6;break}throw new Error(a.statusText);case 6:return e.next=8,a.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N,w,_=Object(S.b)("serviceList/fetchServices",function(){var e=Object(g.a)(x.a.mark((function e(t,r){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.rejectWithValue,e.prev=1,e.next=4,y({url:"https://ra-thunk-backend.herokuapp.com/api/services"});case 4:return c=e.sent,e.abrupt("return",c);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r){return e.apply(this,arguments)}}()),E=Object(S.b)("editService/fetchRemoveService",function(){var e=Object(g.a)(x.a.mark((function e(t,r){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.dispatch,e.prev=1,e.next=4,fetch("".concat("https://ra-thunk-backend.herokuapp.com/api/services","/").concat(t),{method:"DELETE"});case 4:n(I(t)),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,r){return e.apply(this,arguments)}}()),C=Object(S.c)({name:"serviceList",initialState:{services:[],loading:!1,error:null},reducers:{addService:function(e,t){var r=t.payload,n=r.id,c=r.name,a=r.price,i=r.content,s={id:n,name:c,price:Number(a),content:i};e.services.push(s)},removeService:function(e,t){var r=t.payload;e.services=e.services.filter((function(e){return e.id!==r}))},editService:function(e,t){var r=t.payload,n=e.services.findIndex((function(e){return e.id===r.id}));e.services[n]=r}},extraReducers:(n={},Object(h.a)(n,_.pending,(function(e){e.loading=!0,e.error=null})),Object(h.a)(n,_.fulfilled,(function(e,t){var r=t.payload;e.services=r,e.loading=!1,e.error=null})),Object(h.a)(n,_.rejected,(function(e,t){var r=t.payload;e.error=r,e.loading=!1})),n)}),F=C.actions,L=F.addService,I=F.removeService,V=F.editService,R=C.reducer,W={service:{id:"",name:"",price:"",content:""},loading:!1,error:null},A=Object(S.b)("editService/fetchFullService",function(){var e=Object(g.a)(x.a.mark((function e(t,r){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.rejectWithValue,e.prev=1,e.next=4,y({url:"".concat("https://ra-thunk-backend.herokuapp.com/api/services","/").concat(t)});case 4:return c=e.sent,e.abrupt("return",c);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r){return e.apply(this,arguments)}}()),T=Object(S.b)("editService/fetchEditService",function(){var e=Object(g.a)(x.a.mark((function e(t,r){var n,c,a,i,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.service,c=t.history,a=r.dispatch,i=r.rejectWithValue,e.prev=2,e.next=5,y({url:"".concat("https://ra-thunk-backend.herokuapp.com/api/services","/").concat(n.id),method:"PUT",data:n});case 5:return s=e.sent,a(V(s)),a(B()),c.push("/services"),e.abrupt("return",s);case 12:return e.prev=12,e.t0=e.catch(2),e.abrupt("return",i(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,r){return e.apply(this,arguments)}}()),D=Object(S.c)({name:"editService",initialState:W,reducers:{getService:function(e,t){var r=t.payload;e.service=r},changeEditServiceField:function(e,t){var r=t.payload,n=r.name,c=r.value;e.service[n]=c},resetEditForm:function(e){e.service=W.service,e.loading=!1,e.error=null}},extraReducers:(N={},Object(h.a)(N,A.fulfilled,(function(e,t){var r=t.payload;e.service=r})),Object(h.a)(N,T.pending,(function(e){e.loading=!0,e.error=null})),Object(h.a)(N,T.fulfilled,(function(e){e.service=W.service,e.loading=!1,e.error=null})),Object(h.a)(N,T.rejected,(function(e,t){var r=t.payload;e.error=r,e.loading=!1})),N)}),J=D.actions,P=(J.getService,J.changeEditServiceField),B=J.resetEditForm,M=D.reducer,U=function(e){var t=e.id,r=Object(o.b)(),n=Object(d.g)(),a=Object(o.c)((function(e){return e.editService})),i=a.loading,s=a.error;return Object(c.useEffect)((function(){r(A(t))}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(p,{type:"edit",onInputChange:function(e,t){r(P({name:e,value:t}))},onFormSubmit:function(e){var t=e.id,c=e.name,a=e.price,i=e.content;c&&a&&i?r(T({service:{id:t,name:c,price:a,content:i},history:n})):console.log("\u0422\u0443\u0442 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043a\u0430\u043a\u0430\u044f-\u043d\u0438\u0431\u0443\u0434\u044c \u043c\u043e\u0434\u0430\u043b\u043a\u0430 \u0438\u043b\u0438 \u043f\u043e\u043f\u0430\u043f")},isLoading:i}),s&&Object(v.jsx)(m,{message:s})]})},q={service:{name:"",price:"",content:""},loading:!1,error:null},z=Object(S.b)("addService/fetchAddService",function(){var e=Object(g.a)(x.a.mark((function e(t,r){var n,c,a,i,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.service,c=t.history,a=r.dispatch,i=r.rejectWithValue,e.prev=2,e.next=5,y({url:"".concat("https://ra-thunk-backend.herokuapp.com/api/services"),method:"POST",data:n});case 5:return s=e.sent,a(L(s)),a(B()),c.push("/services"),e.abrupt("return",s);case 12:return e.prev=12,e.t0=e.catch(2),e.abrupt("return",i(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,r){return e.apply(this,arguments)}}()),G=Object(S.c)({name:"addService",initialState:q,reducers:{changeAddServiceField:function(e,t){var r=t.payload,n=r.name,c=r.value;e.service[n]=c}},extraReducers:(w={},Object(h.a)(w,z.pending,(function(e){e.loading=!0,e.error=null})),Object(h.a)(w,z.fulfilled,(function(e){e.service=q.service,e.loading=!1,e.error=null})),Object(h.a)(w,z.rejected,(function(e,t){var r=t.payload;e.error=r,e.loading=!1})),w)}),H=G.actions.changeAddServiceField,K=G.reducer,Q=function(){var e=Object(d.g)(),t=Object(o.b)(),r=Object(o.c)((function(e){return e.addService})),n=r.loading,c=r.error;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(p,{type:"add",onInputChange:function(e,r){t(H({name:e,value:r}))},onFormSubmit:function(r){var n=r.name,c=r.price,a=r.content;n&&c&&a?t(z({service:{name:n,price:c,content:a},history:e})):console.log("\u0422\u0443\u0442 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043a\u0430\u043a\u0430\u044f-\u043d\u0438\u0431\u0443\u0434\u044c \u043c\u043e\u0434\u0430\u043b\u043a\u0430 \u0438\u043b\u0438 \u043f\u043e\u043f\u0430\u043f")},isLoading:n}),c&&Object(v.jsx)(m,{message:c})]})},X=function(){return Object(v.jsx)(Z,{isOpen:!0,children:Object(v.jsx)(Q,{})})},Y=function(e){var t=e.match;return Object(v.jsx)(Z,{isOpen:!0,children:Object(v.jsx)(U,{id:t.params.id})})},Z=function(e){var t=e.children,r=e.isOpen,n=Object(o.b)(),a=Object(d.g)(),i=Object(c.useRef)(),s=function(){n(B()),a.push("/services")};return function(e,t){Object(c.useEffect)((function(){var r=function(r){var n=e.current;n&&!n.contains(r.target)&&t(r)};return document.addEventListener("mousedown",r),document.addEventListener("touchstart",r),function(){document.removeEventListener("mousedown",r),document.removeEventListener("touchstart",r)}}),[t,e])}(i,s),r&&Object(v.jsx)("div",{className:"modal_wrapper",children:Object(v.jsxs)("div",{className:"modal",ref:i,children:[Object(v.jsx)("button",{className:"modal_close-btn",onClick:s,children:"\xd7"}),t]})})},$=r(21),ee=function(e){var t=e.services;return Object(v.jsx)("ul",{className:"service-list",children:t.map((function(e,t){return Object(c.createElement)(te,Object($.a)(Object($.a)({},e),{},{key:t}))}))})},te=function(e){var t=e.name,r=e.price,n=e.id,c=Object(o.b)();return Object(v.jsxs)("li",{className:"service-item",children:[Object(v.jsxs)("div",{className:"service-item_info",children:[Object(v.jsx)("div",{className:"service-item_name",children:t}),Object(v.jsxs)("div",{className:"service-item_price",children:[r," \u20bd"]})]}),Object(v.jsxs)("div",{className:"service-item_controls",children:[Object(v.jsx)(l.b,{to:"".concat("/services","/").concat(n),children:Object(v.jsx)(re,{label:"Edit"})}),Object(v.jsx)(re,{onClick:function(){c(E(n))},label:"Remove"})]})]})},re=function(e){var t=e.onClick,r=e.label;return Object(v.jsx)("button",{onClick:t,className:"service-item_btn",children:r})},ne=(r(37),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.serviceList})),r=t.services,n=t.loading,a=t.error,i=Object(c.useState)(""),s=Object(u.a)(i,2),p=s[0],f=s[1];return Object(c.useEffect)((function(){e(_())}),[e]),Object(v.jsxs)(l.a,{children:[Object(v.jsx)(d.b,{exact:!0,path:["/"],children:Object(v.jsx)(d.a,{to:"/services"})}),n?Object(v.jsx)(b,{radius:"20",width:"5",color:"rgb(210, 70, 75)"}):a?Object(v.jsx)(m,{message:a}):Object(v.jsxs)("div",{className:"services-app",children:[Object(v.jsx)(l.b,{to:"".concat("/services","/add"),className:"add-service_link",children:Object(v.jsx)("button",{className:"add-service_btn",children:"Add new service"})}),Object(v.jsx)(j,{onFilter:function(e){var t=function(e,t){return e?t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})):null}(e,r);f(t)}}),Object(v.jsx)(ee,{services:p||r}),Object(v.jsxs)(d.d,{children:[Object(v.jsx)(d.b,{path:"".concat("/services","/add"),component:X}),Object(v.jsx)(d.b,{path:"".concat("/services","/:id"),component:Y})]})]})]})}),ce=Object(S.a)({reducer:{serviceList:R,addService:K,editService:M}});s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(o.a,{store:ce,children:Object(v.jsx)(ne,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.e0e9e3d2.chunk.js.map
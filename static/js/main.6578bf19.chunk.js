(this["webpackJsonpresty-app"]=this["webpackJsonpresty-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(7),o=n.n(l),c=(n(14),n(1)),u=n(2),i=n(4),s=n(3),m=(n(15),n(5)),h=n.n(m),d=n(8),p=(n(17),"get"),E=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handelInput=function(e){var t=e.target.value;console.log(e.target.value),a.setState({url:t})},a.handleMethod=function(e){p=e.target.value,console.log("method from select",p,e.target.value)},a.handleClick=function(){var e=Object(d.a)(h.a.mark((function e(t){var n,r,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.state.url,a.setState({results:n,method:p}),e.next=4,fetch(a.state.url);case 4:return r=e.sent,e.next=7,r.json();case 7:l=e.sent,console.log(l);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={results:"",url:"",method:""},a}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("div",{id:"inputDiv"},r.a.createElement("p",null,"URL: "),r.a.createElement("input",{type:"text",placeholder:"https://localhost:3000/categories",onChange:this.handelInput}),r.a.createElement("button",{onClick:this.handleClick},"Go!")),r.a.createElement("form",{onClick:this.handleMethod,id:"form"},r.a.createElement("input",{type:"radio",id:"get",name:"method",value:"get",defaultChecked:!0}),r.a.createElement("label",{htmlFor:"get"},"GET"),r.a.createElement("input",{type:"radio",id:"post",name:"method",value:"post"}),r.a.createElement("label",{htmlFor:"post"},"POST"),r.a.createElement("input",{type:"radio",id:"put",name:"method",value:"put"}),r.a.createElement("label",{htmlFor:"put"},"PUT"),r.a.createElement("input",{type:"radio",id:"delete",name:"method",value:"delete"}),r.a.createElement("label",{htmlFor:"delete"},"DELETE")),r.a.createElement("div",{id:"result"},r.a.createElement("p",null,this.state.method," ",this.state.results)))}}]),n}(r.a.Component),f=(n(18),function(){return r.a.createElement("footer",null,"&copy 2020")}),v=(n(19),function(){return r.a.createElement("header",null,r.a.createElement("h1",null," RESTy"))}),g=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement(E,null),r.a.createElement(f,null))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.6578bf19.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(t,e,n){t.exports=n(238)},238:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(51),c=n.n(r),s=n(11),l=n(6),i=n(18),p=n(25),u=n(103),m=n.n(u),d=n(241),h=n(52),b=n(104),f=n(28),y=n.n(f),v=n(41),E=n.n(v),j="fetch_posts",O="fetch_post",g="create_post",k="delete_post",P="https://reduxblog.herokuapp.com/api",N="?key=hu53yin";var w=Object(l.c)({posts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case k:return y.a.omit(t,e.payload);case O:return Object(b.a)({},t,Object(h.a)({},e.payload.data.id,e.payload.data));case j:return y.a.mapKeys(e.payload.data,"id");default:return t}},form:d.a}),C=n(29),x=n(30),S=n(33),D=n(31),F=n(34),_=function(t){function e(){return Object(C.a)(this,e),Object(S.a)(this,Object(D.a)(e).apply(this,arguments))}return Object(F.a)(e,t),Object(x.a)(e,[{key:"componentDidMount",value:function(){this.props.fetchPosts()}},{key:"renderPosts",value:function(){return y.a.map(this.props.posts,function(t){return o.a.createElement("li",{className:"list-group-item",key:t.id},o.a.createElement(i.b,{to:"/posts/".concat(t.id)},t.title))})}},{key:"render",value:function(){return console.log(this.props.posts),o.a.createElement("div",null,o.a.createElement("div",{className:"text-xs-right"},o.a.createElement(i.b,{className:"btn btn-primary",to:"/posts/new"},"Add a Post")),o.a.createElement("h3",null,"Posts"),o.a.createElement("ul",{className:"list-group"},this.renderPosts()))}}]),e}(a.Component);var J=Object(s.b)(function(t){return{posts:t.posts}},{fetchPosts:function(){var t=E.a.get("".concat(P,"/posts").concat(N));return{type:j,payload:t}}})(_),M=n(240),T=n(239),q=function(t){function e(){return Object(C.a)(this,e),Object(S.a)(this,Object(D.a)(e).apply(this,arguments))}return Object(F.a)(e,t),Object(x.a)(e,[{key:"renderField",value:function(t){var e=t.meta,n=e.touched,a=e.error,r="form-group ".concat(n&&a?"has-danger":"");return o.a.createElement("div",{className:r},o.a.createElement("label",null,t.label),o.a.createElement("input",Object.assign({className:"form-control",type:"text"},t.input)),o.a.createElement("div",{className:"text-help"},n?a:""))}},{key:"onSubmit",value:function(t){var e=this;this.props.createPost(t,function(){e.props.history.push("/")})}},{key:"render",value:function(){var t=this.props.handleSubmit;return o.a.createElement("form",{onSubmit:t(this.onSubmit.bind(this))},o.a.createElement(M.a,{label:"Title For Post",name:"title",component:this.renderField}),o.a.createElement(M.a,{label:"Post Content",name:"content",component:this.renderField}),o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),o.a.createElement(i.b,{to:"/",className:"btn btn-danger"},"Cancel"))}}]),e}(a.Component);var A=Object(T.a)({validate:function(t){var e={};return t.title||(e.title="Enter a title"),t.categories||(e.categories="Enter some categories"),t.content||(e.content="Enter some content please"),e},form:"PostsNewForm"})(Object(s.b)(null,{createPost:function(t,e){var n=E.a.post("".concat(P,"/posts").concat(N),t).then(function(){return e()});return{type:g,payload:n}}})(q)),B=function(t){function e(){return Object(C.a)(this,e),Object(S.a)(this,Object(D.a)(e).apply(this,arguments))}return Object(F.a)(e,t),Object(x.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.id;this.props.fetchPost(t)}},{key:"onDeleteClick",value:function(){var t=this,e=this.props.match.params.id;this.props.deletePost(e,function(){t.props.history.push("/")})}},{key:"render",value:function(){var t=this.props.post;return t?o.a.createElement("div",null,o.a.createElement(i.b,{to:"/"},"Back To Posts"),o.a.createElement("button",{className:"btn btn-danger pull-xs-right",onClick:this.onDeleteClick.bind(this)},"Delete Post"),o.a.createElement("h3",null,t.title),o.a.createElement("p",null,t.content)):o.a.createElement("div",null,"Loading...")}}]),e}(a.Component);var K=Object(s.b)(function(t,e){return{post:t.posts[e.match.params.id]}},{fetchPost:function(t){var e=E.a.get("".concat(P,"/posts/").concat(t).concat(N));return{type:O,payload:e}},deletePost:function(t,e){return E.a.delete("".concat(P,"/posts/").concat(t).concat(N)).then(function(){return e()}),{type:k,payload:t}}})(B),L=Object(l.a)(m.a)(l.d);c.a.render(o.a.createElement(s.a,{store:L(w)},o.a.createElement(i.a,null,o.a.createElement("div",null,o.a.createElement(p.c,null,o.a.createElement(p.a,{path:"/posts/new",component:A}),o.a.createElement(p.a,{path:"/posts/:id",component:K}),o.a.createElement(p.a,{path:"/",component:J}))))),document.querySelector(".container"))}},[[108,1,2]]]);
//# sourceMappingURL=main.f5b9e0fe.chunk.js.map
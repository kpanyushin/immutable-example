(this["webpackJsonpimmutable-example"]=this["webpackJsonpimmutable-example"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(7),r=n.n(i),c=(n(14),n(8)),m=n(1),s=n(2),u=n(4),l=n(3),d=n(5),b=function(t){function e(){return Object(m.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("ul",null,this.props.items.map((function(t){return o.a.createElement("li",{key:t.id},t.value)})))}}]),e}(a.PureComponent),h=(n(15),function(t){function e(){var t,n;Object(m.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(o)))).state={items:[]},n.nextItemId=0,n.makeItem=function(){return{id:n.nextItemId++,value:Math.random()}},n.addItemImmutably=function(){var t=n.makeItem();n.setState({items:[].concat(Object(c.a)(n.state.items),[t])})},n.addItemMutably=function(){var t=n.makeItem();n.state.items.push(t),n.setState({items:n.state.items})},n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement(a.Fragment,null,o.a.createElement("button",{className:"button",onClick:this.addItemImmutably},"Add item immutably (good)"),o.a.createElement("button",{className:"button",onClick:this.addItemMutably},"Add item mutably (bad)"),o.a.createElement(b,{items:this.state.items}))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.2ed7c37f.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(2),s=n.n(r),c=(n(14),n(3)),i=n(4),l=n(6),u=n(5),m=n(7),h=(n(15),n(16),function(e){return a.a.createElement("div",{className:"card-container"},a.a.createElement("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:""}),a.a.createElement("h2",null," ",e.monster.name," ",e.monster.id))}),d=function(e){return console.log(e),a.a.createElement("div",{className:"card-list"},e.monsters.map(function(e){return a.a.createElement(h,{key:e.id,monster:e})}))},f=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return a.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),p=(n(18),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={string:"Hola Omar",estado:1,monsters:[],searchField:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){console.log("Hola")}},{key:"componentDidMount",value:function(){var e=this;console.log("Primero"),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({monsters:t})})}},{key:"cambiaNombre",value:function(){1===this.state.estado?this.setState({string:"Adios OmaR",estado:2}):this.setState({string:"Hola OmaR",estado:1})}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,o=t.searchField,r=n.filter(function(e){return e.name.toLowerCase().includes(o.toLowerCase())});return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Monster Rolodex"),a.a.createElement(f,{placeholder:"Search Monsters",handleChange:function(t){e.setState({searchField:t.target.value},function(){})}}),a.a.createElement(d,{monsters:r}))}}]),t}(a.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.6db5b769.chunk.js.map
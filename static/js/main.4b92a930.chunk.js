(this.webpackJsonprecipedia=this.webpackJsonprecipedia||[]).push([[0],{12:function(n,e,t){n.exports=t(20)},20:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(8),i=t.n(a),c=t(2),u=t(1);function l(){var n=Object(c.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n\n  body {\n    background-color: ",";\n    color: ",";\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }"]);return l=function(){return n},n}var s={background:"#FCF9ED",background2:"white",text:"#665C84",text2:"white",accent:"#FF7657",accent2:"#FFBA5A"},m=Object(u.b)(l(),(function(n){return n.theme.background}),(function(n){return n.theme.text})),f=t(5);function d(){var n=function(){var n=Object(r.useState)(window.innerWidth),e=Object(f.a)(n,2),t=e[0],o=e[1];return Object(r.useEffect)((function(){var n=function(){return o(window.innerWidth)};return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}})),t}();return n<600?"mobile":n<960?"tablet":"desktop"}function b(){var n=Object(c.a)(["\n  @import url('https://fonts.googleapis.com/css2?family=Handlee&display=swap');\n  font-size: 2rem;\n  font-weight: normal;\n  font-family: 'Handlee', cursive;\n  color: ",";\n"]);return b=function(){return n},n}var v=u.c.div(b(),s.text);function g(){var n=d();return o.a.createElement(v,{device:n},"Recipedia")}t(19);function h(){var n=Object(c.a)(["\n  background: none;\n  border: none;\n"]);return h=function(){return n},n}var w=u.c.button(h());function p(n){var e=n.onClick,t=d();return o.a.createElement(w,{onClick:e},o.a.createElement("box-icon",{name:"search",color:s.text,size:"mobile"===t?"md":"lg"}))}function k(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin: ",";\n"]);return k=function(){return n},n}var E=u.c.main(k(),(function(n){return"mobile"===n.device?"1rem 1.25rem":"3rem 3.25rem"}));var y=function(){return o.a.createElement(u.a,{theme:s},o.a.createElement(E,null,o.a.createElement(m,null),o.a.createElement(g,null),o.a.createElement(p,{onClick:function(){return console.log("search button clicked")}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.4b92a930.chunk.js.map
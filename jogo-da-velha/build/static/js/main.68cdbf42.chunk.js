(this["webpackJsonpjogo-da-velha"]=this["webpackJsonpjogo-da-velha"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),l=n.n(r),o=(n(3),n(1));var u=function(){var e=Array(9).fill(""),t=Object(a.useState)(e),n=Object(o.a)(t,2),r=n[0],l=n[1],u=Object(a.useState)("X"),i=Object(o.a)(u,2),s=i[0],m=i[1],f=Object(a.useState)(null),E=Object(o.a)(f,2),v=E[0],d=E[1],b=function(){r.every((function(e){return""!==e}))&&d("E")};return Object(a.useEffect)((function(){[[r[0],r[1],r[2]],[r[3],r[4],r[5]],[r[6],r[7],r[8]],[r[0],r[3],r[6]],[r[1],r[4],r[7]],[r[2],r[4],r[8]],[r[0],r[4],r[8]],[r[2],r[4],r[6]]].forEach((function(e){e.every((function(e){return"O"===e}))&&d("O"),e.every((function(e){return"X"===e}))&&d("X")})),b()}),[r]),c.a.createElement("main",null,c.a.createElement("h1",{className:"title"},"Jogo da Velha"),c.a.createElement("div",{className:"board ".concat(v?"game-over":"")},r.map((function(e,t){return c.a.createElement("div",{key:t,className:"cell ".concat(e),onClick:function(){return function(e){return l(r.map((function(t,n){return n===e?s:t}))),v?(alert("Jogo finalizado!"),null):r[e]?(alert("Esse espa\xe7o j\xe1 foi preenchido!"),null):void m("X"===s?"O":"X")}(t)}}," ",e," ")}))),v&&c.a.createElement("footer",null,c.a.createElement("h2",{className:"winner-message"},c.a.createElement("span",{className:v}," ",v)," venceu!"),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){m(v),l(e),d(null)}}," Jogar novamente!"),c.a.createElement("button",null))))};l.a.render(c.a.createElement(c.a.StrictMode,null," ",c.a.createElement(u,null)," "),document.getElementById("root"))},3:function(e,t,n){},5:function(e,t,n){e.exports=n(10)}},[[5,1,2]]]);
//# sourceMappingURL=main.68cdbf42.chunk.js.map
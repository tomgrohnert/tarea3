(this.webpackJsonptarea3=this.webpackJsonptarea3||[]).push([[0],{43:function(e,t,n){e.exports=n(58)},48:function(e,t,n){},54:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(28),l=n.n(i),c=(n(48),n(7)),r=n(42),s=Object(r.a)("wss://tarea-3-websocket.2021-2.tallerdeintegracion.cl",{path:"/trucks/"}),u=n(8),m=n(64),p=n(65),d=n(61),E=n(66),g=n(63),b=(n(54),n(62)),f=(new u.Icon({iconUrl:"../public/truck.png",iconSize:[25,25]}),[{code:"CAT013",position:[0,0],origin:[0,0],destination:[0,0],engine:"",truck:"",capacity:0,staff:[{},{},{}],status:"ok"},{code:"CAT015",position:[0,0],origin:[0,0],destination:[0,0],engine:"",truck:"",capacity:0,staff:[{},{},{}],status:"ok"},{code:"KOM401",position:[0,0],origin:[0,0],destination:[0,0],engine:"",truck:"",capacity:0,staff:[{},{},{}],status:"ok"},{code:"KOM500",position:[0,0],origin:[0,0],destination:[0,0],engine:"",truck:"",capacity:0,staff:[{},{},{}],status:"ok"},{code:"KOM501",position:[0,0],origin:[0,0],destination:[0,0],engine:"",truck:"",capacity:0,staff:[{},{},{}],status:"ok"}]);function k(){var e=Object(a.useState)([0,0]),t=Object(c.a)(e,2),n=(t[0],t[1]),i=Object(a.useState)(null),l=Object(c.a)(i,2),r=l[0],u=l[1];function k(e){s.emit("FIX",{code:e.code}),s.once("FIX",(function(t){console.log(t),t.code===e.code&&(e.status="ok")}))}return s.emit("TRUCKS"),s.once("TRUCKS",(function(e){for(var t=0;t<e.length;t++){var n=[e[t].origin[0],e[t].origin[1]];f[t].origin[0]=n[0],f[t].origin[1]=n[1],f[t].destination[0]=e[t].destination[0],f[t].destination[1]=e[t].destination[1],f[t].engine=e[t].engine,f[t].truck=e[t].truck,f[t].capacity=e[t].capacity;for(var a=0;a<e[t].staff.length;a++)f[t].staff[a]=e[t].staff[a]}})),Object(a.useEffect)((function(){s.on("POSITION",(function(e){var t=[e.position[0],e.position[1]];n(t),"CAT013"===e.code&&"ok"===f[0].status?(f[0].position[0]=t[0],f[0].position[1]=t[1]):"CAT015"===e.code&&"ok"===f[1].status?(f[1].position[0]=t[0],f[1].position[1]=t[1]):"KOM401"===e.code&&"ok"===f[2].status?(f[2].position[0]=t[0],f[2].position[1]=t[1]):"KOM500"===e.code&&"ok"===f[3].status?(f[3].position[0]=t[0],f[3].position[1]=t[1]):"KOM501"===e.code&&"ok"===f[4].status&&(f[4].position[0]=t[0],f[4].position[1]=t[1])}))}),[s]),Object(a.useEffect)((function(){s.on("FAILURE",(function(e){console.log(e);var t="Falla ";"CAT013"===e.code&&"ok"===f[0].status?f[0].status=t.concat(e.source):"CAT015"===e.code&&"ok"===f[1].status?f[1].status=t.concat(e.source):"KOM401"===e.code&&"ok"===f[2].status?f[2].status=t.concat(e.source):"KOM500"===e.code&&"ok"===f[3].status?f[3].status=t.concat(e.source):"KOM501"===e.code&&"ok"===f[4].status&&(f[4].status=t.concat(e.source))}))}),[s]),o.a.createElement("div",null,o.a.createElement(m.a,{center:[-21.9,-68.8],zoom:10},o.a.createElement(p.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),f.map((function(e){return o.a.createElement(d.a,{key:e.code,position:[e.position[0],e.position[1]],onClick:function(){u(e)}})})),r&&o.a.createElement(E.a,{position:[r.position[0],r.position[1]],onClose:function(){u(null)}},o.a.createElement("div",null,o.a.createElement("h2",null,r.code),o.a.createElement("p",null,"Engine:",r.engine),o.a.createElement("p",null,"Truck:",r.truck))),f.map((function(e){return o.a.createElement(g.a,{key:e.code,positions:[e.origin,e.destination]})}))),o.a.createElement(b.a,{direction:"row",height:"size-800",gap:"size-100"},o.a.createElement("div",{style:{border:"2px solid black"}},o.a.createElement("h1",null,"Camion ",f[0].code," "),o.a.createElement("p",null,o.a.createElement("b",null,"Origen:")," ",f[0].origin[0],", ",f[0].origin[1]),o.a.createElement("p",null,o.a.createElement("b",null,"Destino:")," ",f[0].destination[0],", ",f[0].destination[1]),o.a.createElement("p",null,o.a.createElement("b",null,"Status:")," ",f[0].status),o.a.createElement("button",{onClick:function(){return k(f[0])}},o.a.createElement("b",null,"Arreglar"))),o.a.createElement("div",{style:{border:"2px solid black"}},o.a.createElement("h1",null,"Camion ",f[1].code," "),o.a.createElement("p",null,o.a.createElement("b",null,"Origen:")," ",f[1].origin[0],", ",f[1].origin[1]),o.a.createElement("p",null,o.a.createElement("b",null,"Destino:")," ",f[1].destination[0],", ",f[1].destination[1]),o.a.createElement("p",null,o.a.createElement("b",null,"Status:")," ",f[1].status),o.a.createElement("button",{onClick:function(){return k(f[1])}},o.a.createElement("b",null,"Arreglar"))),o.a.createElement("div",{style:{border:"2px solid black"}},o.a.createElement("h1",null,"Camion ",f[2].code," "),o.a.createElement("p",null,o.a.createElement("b",null,"Origen:")," ",f[2].origin[0],", ",f[2].origin[1]),o.a.createElement("p",null,o.a.createElement("b",null,"Destino:")," ",f[2].destination[0],", ",f[2].destination[1]),o.a.createElement("p",null,o.a.createElement("b",null,"Status:")," ",f[2].status),o.a.createElement("button",{onClick:function(){return k(f[2])}},o.a.createElement("b",null,"Arreglar"))),o.a.createElement("div",{style:{border:"2px solid black"}},o.a.createElement("h1",null,"Camion ",f[3].code," "),o.a.createElement("p",null,o.a.createElement("b",null,"Origen:")," ",f[3].origin[0],", ",f[3].origin[1]),o.a.createElement("p",null,o.a.createElement("b",null,"Destino:")," ",f[3].destination[0],", ",f[3].destination[1]),o.a.createElement("p",null,o.a.createElement("b",null,"Status:")," ",f[3].status),o.a.createElement("button",{onClick:function(){return k(f[3])}},o.a.createElement("b",null,"Arreglar"))),o.a.createElement("div",{style:{border:"2px solid black"}},o.a.createElement("h1",null,"Camion ",f[4].code," "),o.a.createElement("p",null,o.a.createElement("b",null,"Origen:")," ",f[4].origin[0],", ",f[4].origin[1]),o.a.createElement("p",null,o.a.createElement("b",null,"Destino:")," ",f[4].destination[0],", ",f[4].destination[1]),o.a.createElement("p",null,o.a.createElement("b",null,"Status:")," ",f[4].status),o.a.createElement("button",{onClick:function(){return k(f[4])}},o.a.createElement("b",null,"Arreglar")))))}var O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),a(e),o(e),i(e),l(e)}))};l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),O()}},[[43,1,2]]]);
//# sourceMappingURL=main.9eeae44e.chunk.js.map
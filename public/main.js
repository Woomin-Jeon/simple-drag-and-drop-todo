!function(t){var n={};function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(o,i,function(n){return t[n]}.bind(null,i));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n){document.getElementById("app").innerHTML="\n  <input id='id_input' type='text' />\n  <input id='password_input' type='text' />\n  <button id='login_button' type='button'>로그인</button>\n  <br/>\n  <input id='todo_input' type='text' />\n  <button id='todo_button' type='button'>입력</button>\n";document.getElementById("login_button").addEventListener("click",async()=>{const t=document.getElementById("id_input").value,n=document.getElementById("password_input").value;await fetch("http://localhost:3000/auth/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t,password:n})})});document.getElementById("todo_button").addEventListener("click",async()=>{const t=document.getElementById("todo_input").value,n=(await fetch("http://localhost:3000/todo",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:t})}),document.getElementById("contents")),e=await fetch("http://localhost:3000/todo"),o=await e.json();n.innerHTML=`\n    <div id='todos'>\n      ${o.map(t=>`<div>${t.content}</div>`).join("")}\n    </div>\n  `})}]);
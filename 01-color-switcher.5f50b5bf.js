!function(){var t,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");var a=function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))};e.addEventListener("click",(function(){t=setInterval(a,1e3),e.disabled=!0})),n.addEventListener("click",(function(){clearInterval(t),e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.5f50b5bf.js.map

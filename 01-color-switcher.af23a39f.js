!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");var n=function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))};t.addEventListener("click",(function(){intervalId=setInterval(n,1e3),t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(intervalId),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.af23a39f.js.map

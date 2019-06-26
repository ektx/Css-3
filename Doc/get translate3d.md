```js
var myElement = document.querySelector('.hello');
myElement.style.transform = "translateX(" + (-200) + "px) scaleX(" + 1.6 + ") scaleY(" + 1.2 + ")";

function getTranslateX() {
  var style = window.getComputedStyle(myElement);
  var matrix = new WebKitCSSMatrix(style.webkitTransform);
  console.log('translateX: ', matrix.m41);
}

document.querySelector('button').addEventListener('click', getTranslateX);
```
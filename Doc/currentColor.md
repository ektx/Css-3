# currentColor

currentColorr 当前颜色;用于让元素自动继承父级或自己的相应颜色

``` css
/* 继承自己的颜色 */
body {
  color: red;
  border: 1px solid currentColor; /* 边框继承红色 */
  box-shadow: 0 0 0 40px currentColor; /* 阴影继承红色 */
}

div.inner {
  color: currentColor; /* 文字继承 body 颜色 */
}
```



### 参考

[currentColor](http://www.zhangxinxu.com/wordpress/2014/10/currentcolor-css3-powerful-css-keyword/)

[使用CSS的currentColor变量扩展颜色级联](http://www.w3cplus.com/css3/extending-the-color-cascade-with-the-css-currentcolor-variable.html)

[..](http://simurai.com/blog/2014/05/04/cssconf/)


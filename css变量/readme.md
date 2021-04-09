# css 变量

## 使用

```css
/* 先定义 */
:root {
	--foo: red;

	/* 大小写敏感 以下是2个不同的属性 */
	--main: #09f;
	--Main: yellow;

	--10vh: 10vh;
	--80vh: 80;
}

body {
  height: var(--10vh);
  background-color: var(--main);
}
```



## 判断方法

```js
let isSupported = window.CSS && window.CSS.supports && window.CSS.supports('--test', 0)
```



## 参考
### 英文
[CSS Variables: Why Should You Care?](https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care)
[Winning with CSS Variables](https://vgpena.github.io/winning-with-css-variables/)
[It’s Time To Start Using CSS Custom Properties](https://www.smashingmagazine.com/2017/04/start-using-css-custom-properties/)
[Why I'm Excited About Native CSS Variables](https://philipwalton.com/articles/why-im-excited-about-native-css-variables/)

### 中文
[CSS 变量教程](http://www.ruanyifeng.com/blog/2017/05/css-variables.html)
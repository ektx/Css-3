# Css 命名规范

## BEM

BEM(block:块 element:元素 modifier:修饰符)是指将块,元素和修饰符进行分离.

HTML

```html
<button class="button">
  normal button
</button>
<button class="button button--state-success">
  Success button
</button>
<button class="button button-state-danger">
  Danger button
</button>
```

CSS

```css
.button {
  display: inline-block;
  border-radius: 3px;
  padding: 7px 12px;
  border: 1px solid #DDD;
  background-image: line-gradient(#eee, #ddd);
  font: 700 13px/18px Hevetica, arial;
}
.button--state-success {
  color: #fff;
  background: #569e3d linear-gradient(#79d858, #569e3d) repeat-x;
  border-color: #4a993e;
}
.button-state-danger {
  color: #900;
}
```

### 参考

[BEM](http://getbem.com/introduction/)

[BEM思想之彻底弄清BEM语法](http://www.w3cplus.com/css/mindbemding-getting-your-head-round-bem-syntax.html)

## SUIT

### 参考

[SUIT](https://suitcss.github.io/)

[Css分层](http://www.w3cplus.com/css/css-layers.html)
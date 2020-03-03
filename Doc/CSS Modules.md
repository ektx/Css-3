# Css Modules

```vue
<template>
  <div>
    <p :class="{[{$style.bold: !isRead}, {[$style.red]: isRed } ]}">
      Am I red?
    </p>
    <p :class="[$style.red, $style.bold]">
      Red and bold
    </p>
  </div>
</template>
```

生成：

```html
<div>
  <!-- isRed: true -->
  <p class="red_xdf">
  <!-- isRed: false -->
  <p class="bold">
    Am I red?
  </p>
  <p class="red_xdf bold_ikj">
    Red and bold
  </p>
</div>
```

> 这里我们要注意 $style.bold ，在没有使用`[]`包含时，它会生成一个单纯的样式名

```css
<style module>
.red {
  color: red;
}
.bold {
  font-weight: bold;
}
</style>
```

生成：

```css
<style>
.red_xdf {
  color: red;
}
.bold_ikj {
  font-weight: bold;
}
</style>
```



# 参考

[CSS Modules]([https://vue-loader.vuejs.org/zh/guide/css-modules.html#%E7%94%A8%E6%B3%95](https://vue-loader.vuejs.org/zh/guide/css-modules.html#用法))  

[github css-modules](https://github.com/css-modules/css-modules)  


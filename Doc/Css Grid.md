# Css Grid

### Gird

```html
  <div class="grid-box"></div>
```

声名一个网格布局

```css
.grid-box {
  display: grid;
}
```



#### Grid-template-columns

用来把网格指定列的宽度

```diff
.grid-box {
    display: grid;
+   /* 定义一个 5行 每个宽度为 100px 网格 */
+   grid-template-columns: 100px 100px 100px 100px 100px;
}
```

#### grid-template-rows

用来设置网格每行的大小

```diff
.grid-box {
    display: grid;
    /* 定义一个 5行 每个宽度为 100px 网格 */
    grid-template-columns: 100px 100px 100px 100px 100px;
+   /* 定义网格行大小 */
+   grid-template-rows: 100px 100px 100px 100px;
}
```

如果,我们想用弹性的布局,可以使用 __fr__ ,如：`grid-template-rows: 1fr 2fr 1fr;`

在使用弹性布局时,你要给 `.grid-box` 添加下高度

```diff
.grid-box {
    display: grid;
+   height: 300px;
    /* 定义一个 5行 每个宽度为 100px 网格 */
    grid-template-columns: 100px 100px 100px 100px 100px;
    /* 定义网格行大小 */
    grid-template-rows: 100px 100px 100px 100px;
}
```



#### Grid-gap

指定每个区域间的间距

```diff
.grid-box {
	display: grid;
    height: 300px;
    /* 定义一个 5行 每个宽度为 100px 网格 */
    grid-template-columns: 100px 100px 100px 100px 100px;
    /* 定义网格行大小 */
    grid-template-rows: 100px 100px 100px 100px;
+	/* 列间距 */
+	grid-column-gap: 5px;
+	/* 行间距 */
+   grid-row-gap: 1em;
}
```



## 参考

[CSS Grid布局这样玩](http://web.jobbole.com/91146/)

# Css Grid

### Gird

声名一个网格布局

```css
.gird-box {
  display: grid;
}
```



### Grid-template-columns

用来把网格指定列的宽度

```css
.grid-box {
  ...
  /* 定义网格列大小 */
  grid-template-columns: 100px 100px 100px 100px 100px;
  /* 定义网格行大小 */
  grid-template-rows: 100px 100px 100px 100px;
}
```

我们如果想用弹性的布局,可以使用

`grid-template-rows: 1fr 2fr 1fr;`

在使用弹性布局时,你要给 `.grid-box` 添加下高度



### Grid-gap

指定每个区域间的间距

```css
.grid-box {
  ...
  /* 列间距 */
  grid-column-gap: 5px;
  /* 行间距 */
  grid-row-gap: 1em;
}
```



## 参考

[](http://web.jobbole.com/91146/)
# 滤镜效果

## backdrop-filter

[backdrop-filter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/backdrop-filter) CSS 属性可以让你为一个元素后面区域添加图形效果（如模糊或颜色偏移）。 **因为它适用于元素背后的所有元素，为了看到效果，必须使元素或其背景至少部分透明。**

```css
/* 关键词值 */
backdrop-filter: none;

/* 指向 SVG 滤镜的 URL */
backdrop-filter: url(commonfilters.svg#filter);

/* <filter-function> 滤镜函数值 */
backdrop-filter: blur(2px);
backdrop-filter: brightness(60%);
backdrop-filter: contrast(40%);
backdrop-filter: drop-shadow(4px 4px 10px blue);
backdrop-filter: grayscale(30%);
backdrop-filter: hue-rotate(120deg);
backdrop-filter: invert(70%);
backdrop-filter: opacity(20%);
backdrop-filter: sepia(90%);
backdrop-filter: saturate(80%);

/* 多重滤镜 */
backdrop-filter: url(filters.svg#filter) blur(4px) saturate(150%);

/* 全局值 */
backdrop-filter: inherit;
backdrop-filter: initial;
backdrop-filter: unset;
```

# Css 媒体查询

## 引用方式

### HTML引用

##### 默认调用样式方式

``` html
<!-- 默认引用样式 -->
<link rel="stylesheet" type="text/css" href="myStyelName.css" />
```

##### 使用 `Media` 类型关键字

``` html
<!-- 引用打印样式 -->
<link rel="stylesheet" type="text/css" href="print.css" media="print" />
<!-- 引用最大宽度为800时样式 -->
<link rel="stylesheet" media="max-width:800px" href="style.css" />
```

| 参数     | 说明   |
| ------ | ---- |
| print  | 打印样式 |
| screen | 屏幕样式 |

##### 使用 `Media` 设备大小关键字

| 参数                       | 说明                  |
| ------------------------ | ------------------- |
| max-width:800px          | 最大宽度,这里是说最大宽度为800px |
| min-width:400px          | 最小宽度                |
| device-width:400px       | 设备宽度                |
| max-device-width: 400px  | 最大设备宽度              |
| min-device-width: 400px  | 最小设备宽度              |
| device-height: 400px     | 设备高度                |
| max-device-height: 400px | 最大设备高度              |
| min-device-height: 400px | 最小设备高度              |

##### 使用 `Media` 视网膜查询关键字

``` html
<!-- 对视网膜为 2 的设备 -->
<link rel="stylesheet" media="only screen and (-webkit-min-device-pixel-ratio:2)" href="ios.css" />
```



### Css内引用

``` css
/* 屏幕样式 */
@import url("style.css") screen;
/* 打印样式 */
@import url("print.css") print;
```

##### 使用`media` 进行横屏与竖屏区分样式

``` css
/* 横屏(landscape)时  */
@media (min-width: 700px) and (orientation: landscape) { ... }
/* 竖屏(portrait)时 */
@media tv and (orientation: portrait) { ... }
```



### XML引用

``` xml
<?xml-stylesheet rel="stylesheet" href="style.css" ?>
```



## 关键字使用说明

### not

用来排除指定的媒体类型

``` html
<link rel="stylesheet" type="text/css" media="not print and (max-width:1200px)" href="print.css" />
```



### and

多个条件组合

``` html
<link rel="stylesheet" type="text/css" media="only screen and (-webkit-min-device-pixel-ratio:2) href="retina.css" />
```



### only

only用来定某种特定的媒体类型，可以用来排除不支持媒体查询的浏览器。其实only很多时候是用来对那些不支持Media Query但却支持Media Type的设备隐藏样式表的。其主要有：支持媒体特性（Media Queries）的设备，正常调用样式，此时就当only不存在；对于不支持媒体特性(Media Queries)但又支持媒体类型(Media Type)的设备，这样就会不读了样式，因为其先读only而不是screen；另外不支持Media Qqueries的浏览器，不论是否支持only，样式都不会被采用。

``` html
<link rel="stylesheet" type="text/css" media="only screen and (-webkit-min-device-pixel-ratio:2) href="retina.css" />
```



### 逗号的使用

- html 中使用

``` html
<!-- 用于手持设备或是屏幕大于960px的设备 -->
<link rel="stylesheet" type="text/css" href="style.css" media="handheld and (max-width:480px), screen and (min-width:960px)" />
```

- Css 中使用

``` css
@media screen, print {
    body { line-height: 14px}
}
```



## 参考资料

[css3 Media Queries](http://www.w3cplus.com/content/css3-media-queries)

[Media Moz](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)


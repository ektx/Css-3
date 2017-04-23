# Flexbox 布局的兼容性

浏览器兼容写法

```css
/* 子无素-平均分栏 */
.flexInner {
    -webkit-box-flex: 1;		/* old - ios 6-, safari 3.1-6 */
    -moz-box-flex: 1;			/* old - firefox 19- */
    -webkit-flex: 1;			/* Chrome */
    -ms-flex: 1;				/* IE 10 */
    flex: 1;					/* New, Spec - Opera 12.1, FireFox 20+ */
}

/* 父元素-排列(主轴) */
.flexBox {
    display: box;				/* old - Andriod 4.4- */
    display: -webkit-box;		 /* old - ios 6-, safari 3.1-6 */
    display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;      /* TWEENER - IE 10 */
    display: -webkit-flex;     /* NEW - Chrome */
    display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */
  
    /* 09版 横向 */
    -webkit-box-orient: horizontal;
    /* 12版 横向 */
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    -o-flex-direction: row;
    flex-direction: row;
  
    /* 09版 纵向 */
    -webkit-box-orient: vertical;
    /* 12版 纵向 */
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;
  	
  	/* 子元素对齐方式 注意 flex-direction 为 row时 */
    /* 09版 */
    -webkit-box-pack: center;
    /* 12版 */
    -webkit-justify-content: center;
    -moz-justify-content: center;
    -ms-justify-content: center;
    -o-justify-content: center;
    justify-content: center;
    /* 其它取值如下：
        align-items     主轴原点方向对齐
        flex-end        主轴延伸方向对齐
        space-between   等间距排列，首尾不留白
        space-around    等间距排列，首尾留白
     */
}


```

### 参考

[flexbox布局的兼容性](http://www.ayqy.net/blog/flexbox%E5%B8%83%E5%B1%80%E7%9A%84%E5%85%BC%E5%AE%B9%E6%80%A7/)

[Using Flexbox: Mixing Old and New for the Best Browser Support](https://css-tricks.com/using-flexbox/)
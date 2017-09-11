# SVGTool
Ver 1.0 2015.10.03
Ver 2.0 2017.09.11
轻量级小库，封装了一些HTML5标准下常用的可视化可交互的SVG。

> 喜欢轻洁的代码，自己用的方法喜欢自己封，于是就有了这个小库。

- 平台标准：HTML5
- 主要语言：JavaScript、SVG


## 使用方法

### STEP 00: 在head标签中引入SVGTool.js

    <script src="SVGTool.js"></script>

### STEP 01：在body标签中添加root节点

    <div id="root"></div>

    id值必须为"root",否则创建根节点时会出错

### STEP 02：在初始化函数中创建根节点

    <body onload = "init()">

    //------------------------------
    <script>
        var svg; // <---- 定义全局变量方便其它函数调用
        function init()
        {
            svg = new SVG("svg01", "100%", "100%");
        }
    </script>

### STEP 03：添加想要的图形

    var c1 = svg.addCircleNode("c02", 200, 100, 50, "rgba(5,100,10,0.4)", 0, "yellow");

### STEP 04：添加需要的事件

    c1.onclick = function () { alert("!")};

----

## API

构造函数：

- SVG(id, width, height)


通用形式：
- addXxxxNode: 添加并返回SVG节点, 由全局对象svg调用。


----

## 基本形状节点

- 矩形

		addRectNode(id, x, y, rx, ry, w, h, fillColor, strokeWidth, strokeColor);

- 圆形

		addCircleNode(id, cx, cy, r, fillColor, strokeWidth, strokeColor);

- 椭圆形

		addEllipseNode(id, cx, cy, rx, ry, fillColor, strokeWidth, strokeColor);

- 线段

		addLineNode(id, x1, y1, x2, y2, strokeWidth, strokeColor);

- 多边形

		addPolygonNode(id, points, fillColor, strokeWidth, strokeColor);

- 折线

		addPolylineNode(id, points, fillColor, strokeWidth, strokeColor);

- 路径

		addPathNode(id, d, strokeWidth, strokeColor);

- 字符串

        addString(x, y, str);

        说明：这个方法其实不算SVG，但是现实图形的时候往往也会有字符串显示需求，所以附加在这里。

## 滤镜

- 高斯模糊

        filterGuassianBlur(id, r);

## 渐变填充

- 线性渐变

        fillLinearGradient(id, x1, y1, x2, y2, offsets, colors);

- 放射性渐变

        radialGradient(id, cx, cy, r, fx, fy, offsets, colors, opacities);

## 交互变换

- 获取鼠标位置

    getMousePos(event);

- 交换填充色和描边色

	swapColor();

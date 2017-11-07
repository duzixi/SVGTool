# SVGTool

SVGTool is a lightweight JavaScript library which contains commonly used interactible SVG object under the HTML5 stardard.
轻量级小库，封装了一些HTML5标准下常用的可视化可交互的SVG。

Ver 1.0.0 2015.10.03

Ver 2.0.0 2017.11.07


## HOW TO USE 使用方法

### STEP 00: Include the library in your code. 在head标签中引入SVGTool.js

```html
    <script src="SVGTool.js"></script>
```

### STEP 01：Add div tag with id named "root". 在body标签中添加root节点

```html
    <div id="root"></div>
```
    id值必须为"root",否则创建根节点时会出错

### STEP 02：Create svg note in initial function. 在初始化函数中创建根节点

```javascript
    <body onload = "init()">

    //------------------------------
    <script>
        var svg; // <---- Should be global. 定义全局变量方便其它函数调用
        function init()
        {
            svg = new SVG("svg01", "100%", "100%");
        }
    </script>
```

### STEP 03：Add shape whatever you want. 添加想要的图形

```javascript
    var c1 = svg.addCircleNode("c02", 200, 100, 50, "rgba(5,100,10,0.4)", 0, "yellow");
```

### STEP 04：Add event to the svg node. 添加需要的事件

```javascript
    c1.onclick = function () { alert("!") };
```

See the index.html for more information. 运行查看index.html获得更多信息。

----

## API

Constructor 构造函数：

        SVG(id, width, height) 


Uniform format 通用形式：添加并返回SVG节点, 由全局对象svg调用。

        .addXxxxNode

----

## 基本形状节点

- 矩形

		.addRectNode(id, x, y, rx, ry, w, h, fillColor, strokeWidth, strokeColor);

- 圆形

		.addCircleNode(id, cx, cy, r, fillColor, strokeWidth, strokeColor);

- 椭圆形

		.addEllipseNode(id, cx, cy, rx, ry, fillColor, strokeWidth, strokeColor);

- 线段

		.addLineNode(id, x1, y1, x2, y2, strokeWidth, strokeColor);

- 多边形

		.addPolygonNode(id, points, fillColor, strokeWidth, strokeColor);

- 折线

		.addPolylineNode(id, points, fillColor, strokeWidth, strokeColor);

- 路径

		.addPathNode(id, d, strokeWidth, strokeColor);

- 字符串

        .addString(x, y, str);

说明：这个方法其实不算SVG，但是现实图形的时候往往也会有字符串显示需求，所以附加在这里。

----

## 笛卡尔坐标系中的点线面

- 点
        
        Point(x, y)

- 线段
        
        Segment(p0, p1)

- 多边形
        
        Polygon(arrPoints)

- 通用绘制函数
        
        .add(obj)

----

## 画布

- 画坐标系底格

        .drawCoordinate();

- 画布内容放大缩小

        .scale();

- 画布内容移动

        .move();

----


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

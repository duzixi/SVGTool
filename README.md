# SVGTool
轻量级小库，封装了一些HTML5标准下常用的可视化可交互的SVG。

> 只是喜欢干净的代码，自己用的函数喜欢自己封，于是就有了这个小库。

- 平台标准：HTML5
- 主要语言：JavaScript、SVG

函数类型：

- svgXxxx**Node**: 返回SVG**节点**

		基本用法：创建节点后添加到SVG环境下

    	// 创建根节点
    	var svgRoot = svgRootNode("svg01", "100%", "100%");
    	root.appendChild(svgRoot);
    
    	// 创建SVG形状
    	var c1 = svgCircleNode("c02", 200, 100, 50, "rgba(5,100,10,0.4)", 0, "yellow");
    	svgRoot.appendChild(c1);
    
    	// 给SVG形状添加事件
    	c1.onclick = clickMe;
    	c1.onmouseover = touchMe;

----
## 通用

- SVG根节点

		svgRootNode(id, width, height);

## 基本形状节点

- 矩形

		svgRectNode(id, x, y, rx, ry, w, h, fillColor, strokeWidth, strokeColor);

- 圆形


		svgCircleNode(id, cx, cy, r, fillColor, strokeWidth, strokeColor);

- 椭圆形

		svgEllipseNode(id, cx, cy, rx, ry, fillColor, strokeWidth, strokeColor);

- 线段

		svgLineNode(id, x1, y1, x2, y2, strokeWidth, strokeColor);

- 多边形

		svgPolygonNode(id, points, fillColor, strokeWidth, strokeColor);

- 折线

		svgPolylineNode(id, points, fillColor, strokeWidth, strokeColor);

- 路径

		svgPathNode(id, d, strokeWidth, strokeColor);


## 滤镜

- 高斯模糊

        filterGuassianBlur(id, r);

## 渐变填充

- 线性渐变

        fillLinearGradient(id, x1, y1, x2, y2, offsets, colors);

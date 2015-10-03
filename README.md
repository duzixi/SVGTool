# SVGTool
轻量级小库，封装了一些HTML5标准下常用的可视化可交互的SVG。

> 只是喜欢干净的代码，自己用的函数喜欢自己封，于是就有了这个小库。

- 平台标准：HTML5
- 主要语言：JavaScript、SVG

函数类型：

- svgXxxx :  返回SVG格式的**字符串**

    基本用法：用'+'拼接后赋值给innerHTML使用。

        xxxx.innerHTML = SVG头 + 滤镜 + 基本形状 + SVG尾;

- svgXxxx**Node**: 返回SVG**节点**

	基本用法：创建节点后添加到SVG环境下

----
## 通用

- SVG头

        svgHEAD(id, height)

- SVG尾

        svgFOOT()

## 基本形状

- 矩形

        svgRect(id, x, y, rx, ry, w, h, fillColor, strokeWidth, strokeColor);
		svgRectNode(id, x, y, rx, ry, w, h, fillColor, strokeWidth, strokeColor);

- 圆形

        svgCircle(id, cx, cy, r, fillColor, strokeWidth, strokeColor);
		svgCircleNode(id, cx, cy, r, fillColor, strokeWidth, strokeColor);

- 椭圆形

        svgEllipse(id, cx, cy, rx, ry, fillColor, strokeWidth, strokeColor);
		svgEllipseNode(id, cx, cy, rx, ry, fillColor, strokeWidth, strokeColor);

- 线段

        svgLine(id, x1, y1, x2, y2, strokeWidth, strokeColor);
		svgLineNode(id, x1, y1, x2, y2, strokeWidth, strokeColor);

- 多边形

        svgPolygon(id, points, fillColor, strokeWidth, strokeColor);
		svgPolygonNode(id, points, fillColor, strokeWidth, strokeColor);

- 折线

        svgPolyline(id, points, fillColor, strokeWidth, strokeColor);
		svgPolylineNode(id, points, fillColor, strokeWidth, strokeColor);

- 路径

        svgPath(id, d, strokeWidth, strokeColor);
		svgPathNode(id, d, strokeWidth, strokeColor);


## 滤镜

- 高斯模糊

        filterGuassianBlur(id, r);

## 渐变填充

- 线性渐变

        fillLinearGradient(id, x1, y1, x2, y2, offsets, colors);

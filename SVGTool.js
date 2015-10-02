//
// SVGTool.js
// 
// 封装了常用的SVG方法。
// 
// 注意：SVG用DOM动态节点添加的方式无法显示，只能用字符串拼接的方式对innerHTML赋值。
// (C) 2015 duzixi.com

/* 通用 */
function svgHEAD(id, height){
	var head = '<svg id="' + id + '"';
	head += 'xmlns="http://www.w3.org/2000/svg"';
	head += 'version="1.1" ';
	head += 'height="' + height + '">';
	return head;
}

function svgFOOT(){
	var foot = '</svg>';
	return foot;
}

/* 基本形状 */

// •矩形 <rect>
function svgRect(id, x, y, rx, ry, w, h, fillColor, strokeWidth, strokeColor){
	var svg = '<rect id="' + id + '"';
	
	// 坐标
	svg +=    ' x = "' + x + '"';
	svg +=    ' y = "' + y + '"';
	
	// 形状
	if(rx && ry) {
		svg += ' rx = "' + rx + '"';
		svg += ' ry = "' + ry + '"';
	}
	svg +=    ' width="' + w + '"';
	svg +=    ' height="' + h + '"';

	// 颜色
	svg +=    ' style="fill:' + fillColor + ';';

	// 描边
	svg +=    ' stroke:' + strokeColor + ';';
	svg +=    ' stroke-width:' + strokeWidth + ';"';

	svg +=    '></rect>';
	return svg;
}

// •圆形 <circle>
//	示例：<circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red"/>
function svgCircle(id, cx, cy, r, fillColor, strokeWidth, strokeColor){
	var svg = '<circle id="' + id + '"';

	// 坐标
	svg +=    ' cx = "' + cx + '"';
	svg +=    ' cy = "' + cy + '"';

	// 半径
	svg +=    ' r = "' + r + '"';

	// 颜色
	svg +=    ' fill="' + fillColor + '"';

	// svg +=    ' fill = "rgba(5,100,10,0.2)"';

	// 描边
	svg +=    ' stroke="' + strokeColor + '"';
	svg +=    ' stroke-width="' + strokeWidth + '"';
	
	svg += '></circle>';
	return svg;
}

// •椭圆 <ellipse>
//  示例：<ellipse cx="300" cy="150" rx="200" ry="80" style="fill:rgb(200,100,50); stroke:rgb(0,0,100);stroke-width:2"/>
function svgEllipse(id, cx, cy, rx, ry, fillColor, strokeWidth, strokeColor) {
	var svg = '<ellipse id="' + id + '"';
	
	// 坐标
	svg +=    ' cx = "' + cx + '"';
	svg +=    ' cy = "' + cy + '"';

	// 半径
	svg +=    ' rx = "' + rx + '"';
	svg +=    ' ry = "' + ry + '"';

	// 颜色 ??? 
	svg +=    ' style="fill:' + fillColor + ';';

	// 描边
	svg +=    ' stroke:' + strokeColor + ';';
	svg +=    ' stroke-width:' + strokeWidth + ';"';

	svg +=    '></ellipse>';
	return svg;
}

// •线 <line>
// 示例：<line x1="0" y1="0" x2="300" y2="300" style="stroke:rgb(99,99,99);stroke-width:2"/>
function svgLine(id, x1, y1, x2, y2, strokeWidth, strokeColor){
	var svg = '<line id="' + id + '"';

	// 坐标
	svg +=    ' x1 = "' + x1 + '"';
	svg +=    ' y1 = "' + y1 + '"';
	svg +=    ' x2 = "' + x2 + '"';
	svg +=    ' y2 = "' + y2 + '"';

	// 描边
	svg +=    ' stroke:' + strokeColor + ';';
	svg +=    ' stroke-width:' + strokeWidth + ';"';

	svg +=    '></line>';
	return svg;
}

// •多边形 <polygon>
// 示例：<polygon points="220,100 300,210 170,250" style="fill:#cccccc; stroke:#000000;stroke-width:1"/>
function svgPolygon(id, points, fillColor, strokeWidth, strokeColor){
	var svg = '<polygon id="' + id + '"';
	
	// 坐标
	svg += ' points="' + points + '"';
	
	// 颜色 
	svg +=    ' style="fill:' + fillColor + ';';

	// 描边
	svg +=    ' stroke:' + strokeColor + ';';
	svg +=    ' stroke-width:' + strokeWidth + ';"';
	
	svg +=    '></polygon>';
	return svg;
}


// •折线 <polyline>
// 示例：<polyline points="0,0 0,20 20,20 20,40 40,40 40,60" style="fill:white;stroke:red;stroke-width:2"/>
function svgPolyLine(id, points, fillColor, strokeWidth, strokeColor){
	var svg = '<polyline id="' + id + '"';

	svg += points;

	// 颜色 
	svg +=    ' style="fill:' + fillColor + ';';

	// 描边
	svg +=    ' stroke:' + strokeColor + ';';
	svg +=    ' stroke-width:' + strokeWidth + ';"';

	svg +=    '></polyline>';
	return svg;
}


// •路径 <path>
/*
下面的命令可用于路径数据：
•M = moveto
•L = lineto
•H = horizontal lineto
•V = vertical lineto
•C = curveto
•S = smooth curveto
•Q = quadratic Belzier curve
•T = smooth quadratic Belzier curveto
•A = elliptical Arc
•Z = closepath
*/

// 示例：
/* 螺旋
<path d="M153 334
C153 334 151 334 151 334
C151 339 153 344 156 344
C164 344 171 339 171 334
C171 322 164 314 156 314
C142 314 131 322 131 334
C131 350 142 364 156 364
C175 364 191 350 191 334
C191 311 175 294 156 294
C131 294 111 311 111 334
C111 361 131 384 156 384
C186 384 211 361 211 334
C211 300 186 274 156 274"
style="fill:white;stroke:red;stroke-width:2"/>
*/
function svgPath(id, d, strokeWidth, strokeColor) {
	var svg = '<path id="' + id + '"';
	
	// 路径（好复杂...）
	svg += ' d="' + d + '';
	
	// 描边
	svg +=    ' stroke:' + strokeColor + ';';
	svg +=    ' stroke-width:' + strokeWidth + ';"';

	return svg;
}

/*
方法                       描述

// 访问
getElementById()           返回带有指定 ID 的元素。 
getElementsByTagName()     返回包含带有指定标签名称的所有元素的节点列表（集合/节点数组）。 
getElementsByClassName()   返回包含带有指定类名的所有元素的节点列表。 

// 
appendChild()              把新的子节点添加到指定节点。 
removeChild()              删除子节点。 
replaceChild()             替换子节点。 
insertBefore()             在指定的子节点前面插入新的子节点。 

createAttribute()          创建属性节点。 
createElement()            创建元素节点。 
createTextNode()           创建文本节点。 

getAttribute()             返回指定的属性值。 
setAttribute()             把指定属性设置或修改为指定的值。 
*/

/*

元素类型  NodeType

元素 1 
属性 2 
文本 3 
注释 8 
文档 9 
*/
//
// SVGTool.js
// 
// (C) 2015-2017 duzixi.com
// 
// 2015.10.03 Created by 杜子兮
// 2017.09.08 Edited by 杜子兮 实现面向对象封装
// 
// 封装了常用的SVG方法。
// 包括：基本形状、滤镜、渐变填充等

/* 通用 */

function SVG(id, width, height) {
	this.XMLNS = "http://www.w3.org/2000/svg"; // 命名空间
	var svgNode = document.createElementNS(this.XMLNS, "svg");
	svgNode.id = id;
	svgNode.setAttribute("xmlns", this.XMLNS);
	svgNode.setAttribute("version", "1.1");
	svgNode.setAttribute("width", width);
	svgNode.setAttribute("height", height);
	root.appendChild(svgNode);
	this.rootNode = svgNode;
	this.defsNode = document.createElement("defs");
	this.rootNode.appendChild(this.defsNode);
	this.nodeNum = 0;
}

/* 基本形状 */

// •矩形 <rect>
SVG.prototype.addRectNode = function (id, x, y, rx, ry, w, h, fillColor, strokeWidth, strokeColor){
	var svgNode = document.createElementNS(this.XMLNS, "rect");
	
	svgNode.id = id;
	
	svgNode.setAttribute("x", x);
	svgNode.setAttribute("y", y);
	svgNode.setAttribute("rx", rx);
	svgNode.setAttribute("ry", ry);
	svgNode.setAttribute("width", w);
	svgNode.setAttribute("height", h);

	svgNode.style.fill = fillColor;
	svgNode.style.stroke = strokeColor;
	svgNode.style.strokeWidth = strokeWidth;
	this.rootNode.appendChild(svgNode);
	return svgNode;
}

// •圆形 <circle>
//	示例：<circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red"/>
SVG.prototype.addCircleNode =  function (id, cx, cy, r, fillColor, strokeWidth, strokeColor){
	var svgNode = document.createElementNS(this.XMLNS, "circle");
	
	svgNode.id = id;
	
	svgNode.setAttribute("cx", cx);
	svgNode.setAttribute("cy", cy);
	svgNode.setAttribute("r", r);

	svgNode.style.fill = fillColor;
	svgNode.style.stroke = strokeColor;
	svgNode.style.strokeWidth = strokeWidth;
	this.rootNode.appendChild(svgNode);
	return svgNode;
}

// •椭圆 <ellipse>
//  示例：<ellipse cx="300" cy="150" rx="200" ry="80" style="fill:rgb(200,100,50); stroke:rgb(0,0,100);stroke-width:2"/>
SVG.prototype.addEllipseNode = function (id, cx, cy, rx, ry, fillColor, strokeWidth, strokeColor) {
	var svgNode = document.createElementNS(this.XMLNS, "ellipse");
	
	svgNode.id = id;
	
	svgNode.setAttribute("cx", cx);
	svgNode.setAttribute("cy", cy);
	svgNode.setAttribute("rx", rx);
	svgNode.setAttribute("rx", rx);

	svgNode.style.fill = fillColor;
	svgNode.style.stroke = strokeColor;
	svgNode.style.strokeWidth = strokeWidth;
	this.rootNode.appendChild(svgNode);
	return svgNode;
}

// •线 <line>
// 示例：<line x1="0" y1="0" x2="300" y2="300" style="stroke:rgb(99,99,99);stroke-width:2"/>
SVG.prototype.addLineNode = function (id, x1, y1, x2, y2, strokeWidth, strokeColor){
	var svgNode = document.createElementNS(this.XMLNS, "line");
	
	svgNode.id = id;
	
	svgNode.setAttribute("x1", x1);
	svgNode.setAttribute("y1", y1);
	svgNode.setAttribute("x2", x2);
	svgNode.setAttribute("y2", y2);

	svgNode.style.stroke = strokeColor;
	svgNode.style.strokeWidth = strokeWidth;
	this.rootNode.appendChild(svgNode);
	return svgNode;
}

// •多边形 <polygon>
// 示例：<polygon points="220,100 300,210 170,250" style="fill:#cccccc; stroke:#000000;stroke-width:1"/>
SVG.prototype.addPolygonNode = function (id, points, fillColor, strokeWidth, strokeColor){
	var svgNode = document.createElementNS(this.XMLNS, "polygon");
	
	svgNode.id = id;
	
	svgNode.setAttribute("points", points);

	svgNode.style.fill = fillColor;
	svgNode.style.stroke = strokeColor;
	svgNode.style.strokeWidth = strokeWidth;
	this.rootNode.appendChild(svgNode);
	return svgNode;
}

// •折线 <polyline>
// 示例：<polyline points="0,0 0,20 20,20 20,40 40,40 40,60" style="fill:white;stroke:red;stroke-width:2"/>
SVG.prototype.addPolylineNode = function (id, points, fillColor, strokeWidth, strokeColor){
	var svgNode = document.createElementNS(this.XMLNS, "polyline");
	
	svgNode.id = id;
	
	svgNode.setAttribute("points", points);

	svgNode.style.fill = fillColor;
	svgNode.style.stroke = strokeColor;
	svgNode.style.strokeWidth = strokeWidth;
	this.rootNode.appendChild(svgNode);
	return svgNode;

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
C153 334 151 334 151 334 C151 339 153 344 156 344 C164 344 171 339 171 334 C171 322 164 314 156 314 C142 314 131 322 131 334
C131 350 142 364 156 364 C175 364 191 350 191 334 C191 311 175 294 156 294 C131 294 111 311 111 334 C111 361 131 384 156 384
C186 384 211 361 211 334 C211 300 186 274 156 274"
style="fill:white;stroke:red;stroke-width:2"/>
*/
SVG.prototype.addPathNode = function (id, d, strokeWidth, strokeColor) {
	var svgNode = document.createElementNS(this.XMLNS, "path");
	
	svgNode.id = id;
	
	svgNode.setAttribute("d", d);

	svgNode.style.stroke = strokeColor;
	svgNode.style.strokeWidth = strokeWidth;

	this.rootNode.appendChild(svgNode);
	return svgNode;
}

/* 滤镜 */
// 说明：滤镜是CSS的一种样式，两者配合使用，效果最佳。

/* 在 SVG 中，可用的滤镜有：
•feBlend
•feColorMatrix
•feComponentTransfer
•feComposite
•feConvolveMatrix
•feDiffuseLighting
•feDisplacementMap
•feFlood
•feGaussianBlur
•feImage
•feMerge
•feMorphology
•feOffset
•feSpecularLighting
•feTile
•feTurbulence
•feDistantLight
•fePointLight
•feSpotLight
*/

// 高斯模糊
// 示例：
// SVG:
//	   <defs><filter id="Gaussian_Blur"><feGaussianBlur in="SourceGraphic" stdDeviation="10" /></filter></defs>
// CSS:
//	   filter:url(#Gaussian_Blur);
SVG.prototype.filterGuassianBlur = function (id, r) {

	var filterNode = document.createElement("filter");
	filterNode.setAttribute("id", id);
	this.defsNode.appendChild(filterNode);

	var feNode = document.createElement("feGaussianBlur");
	feNode.setAttribute("in", "SourceGraphic");
	feNode.setAttribute("stdDeviation", r);
	filterNode.appendChild(feNode);

	// var filter = '<defs><filter id="' + id + '">';
	// filter += '<feGaussianBlur in="SourceGraphic" stdDeviation="' + r + '" /></filter></defs>';
	// return filter;
}

// 添加文字

/* 渐变填充 */
// 说明：渐变填充是一种自定义的特殊颜色，可以直接作为参数传入上面的函数中使用，也可在CSS中指定使用。

// 线性渐变
// 示例：
// SVG:
	// <defs>
	// <linearGradient id="orange_red" x1="0%" y1="0%" x2="100%" y2="0%">
	// <stop offset="0%" style="stop-color:rgb(255,255,0); stop-opacity:1"/>
	// <stop offset="100%" style="stop-color:rgb(255,0,0); stop-opacity:1"/>
	// </linearGradient>
	// </defs>
// CSS:
	// fill:url(#orange_red)
SVG.prototype.fillLinearGradient = function (id, x1, y1, x2, y2, offsets, colors) {
	var filterNode = document.createElement("linearGradient");
	this.defsNode.appendChild(filterNode);
	filterNode.setAttribute("id", id);
	filterNode.setAttribute("x1", x1);
	filterNode.setAttribute("y1", y1);
	filterNode.setAttribute("x2", x2);
	filterNode.setAttribute("y2", y2);
	for(var i = 0; i < offsets.length; i++){
		var stopNode = document.createElement("stop");
		filterNode.appendChild(stopNode);
		stopNode.setAttribute("offset", offsets[i]);
		stopNode.setAttribute("stype", "stop-color:" + colors[i]);
	}

	// var fill = '<defs>';
	// fill += '<linearGradient id="' + id + '" x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '">';

	// for(var i = 0; i < offsets.length; i++){
	// 	fill += ' <stop offset="'+offsets[i]+'%" style="stop-color:'+colors[i]+'"/>';
	// }

	// fill += '</linearGradient>';
	// fill += '</defs>';
	// return fill;
}

// 放射性渐变
// 示例：
// SVG:
// <defs>
// <radialGradient id="grey_blue" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
// <stop offset="0%" style="stop-color:rgb(200,200,200); stop-opacity:0"/>
// <stop offset="100%" style="stop-color:rgb(0,0,255); stop-opacity:1"/>
// </radialGradient>
// </defs>

SVG.prototype.radialGradient = function (id, cx, cy, r, fx, fy, offsets, colors, opacities){
	var filterNode = document.createElement("radialGradient");
	this.defsNode.appendChild(filterNode);
	filterNode.setAttribute("id", id);
	filterNode.setAttribute("cx", cx);
	filterNode.setAttribute("cy", cy);
	filterNode.setAttribute("r", r);
	filterNode.setAttribute("fx", fx);
	filterNode.setAttribute("fy", fy);
	for(var i = 0; i < offsets.length; i++){
		var stopNode = document.createElement("stop");
		filterNode.appendChild(stopNode);
		stopNode.setAttribute("offset", offsets[i]);
		stopNode.setAttribute("stype", "stop-color:" + colors[i] + "; stop-opacity:" + opacities[i]);
	}
}

/* 添加字符串 */
SVG.prototype.addString = function (x, y, str) {
	var divNode = document.createElement("div");
	root.appendChild(divNode);
	divNode.setAttribute("style","position: absolute;left:" + x + "px;top:" + y + "px;");
	divNode.innerHTML = str;
	return divNode;
}

// ------------------- 交互变换 ------------------------

// 获取鼠标位置
function getMousePos(event) {
    var e = event || window.event;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || e.clientX + scrollX;
    var y = e.pageY || e.clientY + scrollY;
    // alert('x: ' + x + '\ny: ' + y);
    return { 'x': x, 'y': y };
}

// 交换填充色和描边色（技巧：描边粗细设置为0可以达到变换颜色的效果）
function swapColor(obj) {
	var tempColor = obj.style.fill;
	obj.style.fill = obj.style.stroke;
	obj.style.stroke = tempColor;
}

// 判断是PC端还是移动端 PC端：true 移动端：false
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
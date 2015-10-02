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
function svgRect(id, w, h, fillColor, strokeWidth, strokeColor){
	var rect = '<rect id="' + id + '"';
	rect +=    ' width="' + w + '"';
	rect +=    ' height="' + h + '"';
	rect +=    ' style="fill:' + fillColor + ';';
	rect +=    ' stroke:' + strokeColor + ';';
	rect +=    ' stroke-width:' + strokeWidth + ';"';
	rect +=    '></rect>';
	return rect;
}

// •圆形 <circle>

// •椭圆 <ellipse>

// •线 <line>

// •折线 <polyline>

// •多边形 <polygon>

// •路径 <path>


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
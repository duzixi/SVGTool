// 定义浏览器类型
if(typeof BrowserType == "undefined"){
    var BrowserType = {};
    BrowserType.IE = 0;
    BrowserType.Firefox = 1;
    BrowserType.Safari = 2;
}

// XML构造函数
XML = function (filePath) {
	this.filePath = filePath;
	
	var xmlDoc;
	var isOk;
 	try{ // IE浏览器
 		xmlDoc = new ActiveXObject("microsoft.XMLDOM");
 		xmlDoc.async = false;
 		isOk = xmlDoc.load(this.filePath);
        xmlDoc.setProperty('SelectionLanguage','XPath'); 
        this.browsertype = BrowserType.IE;
 	}catch(e){
 		try{ // Firefox, Mozilla, Opera, 其他浏览器
 			xmlDoc = document.implementation.createDocument("","",null);
 			xmlDoc.async = false;
 			isOk = xmlDoc.load(this.filePath);
            this.browsertype = BrowserType.Firefox;
 		}catch(e){
 			try{ // Chrome,Safari 浏览器
 				var xmlhttp = new window.XMLHttpRequest();  
         		xmlhttp.open("GET",this.filePath,false);  
         		xmlhttp.send(null);  
                // alert(xmlhttp.responseText); // 如果有responseText 但没有responseXML 就是XML格式或编码问题
         		xmlDoc = xmlhttp.responseXML;
         		isOk = true;
                this.browsertype = BrowserType.Safari;
     		} catch (e){  
     			isOk = false;
     		}  
 		}
 	}

 	if(isOk){
 		this.xmlDoc = xmlDoc;
 		this.root = xmlDoc.documentElement; 
 	} else {
 		alert("文件" + this.filePath + "载入失败");
 	}
}

// 返回根节点名
XML.prototype.getRootName = function () {
	return this.root.nodeName;
}

// 返回单一节点
XML.prototype.getSingleNode = function(nodeName) {
    
    if (this.browsertype == BrowserType.IE) {
        return this.root.selectSingleNode(nodeName);
    } else {
        var nsResolver = this.xmlDoc.createNSResolver (this.root);
        return this.xmlDoc.evaluate(nodeName, this.root, nsResolver, XPathResult.ANY_TYPE, null).iterateNext();
    }
}

// 返回子节点个数
XML.prototype.childCount = function(nodeName) {
    var childNodes = this.cleanEmptyTextNode(this.getSingleNode(nodeName).childNodes);
    return childNodes.length;
}

// 判断是否为空的文本节点
XML.prototype.isEmpty = function (node){
    if (node == null) {
        return false;
    }
    return node.nodeType == 3 && /\s/.test(node.nodeValue);
}

// 清除子节点中的空文本节点并返回父节点
XML.prototype.cleanEmptyTextNode = function (childNodes) {
    var parentNode = childNodes[0].parentNode;
    for(var i = 0; i < childNodes.length; i++) { 
        //如果是文本节点，并且值为空，则删除该节点 
        if(this.isEmpty(childNodes[i])) { 
            parentNode.removeChild(childNodes[i]);        
        }
    } 
    return parentNode;
}

// 获取子节点名称
XML.prototype.getChildNames = function(nodeName) {
    var names = new Array();
    var node = this.getSingleNode(nodeName);

    node = this.cleanEmptyTextNode(node.childNodes);

    var count = node.childNodes.length;
    for (var i = 0; i < count; i++) {
       names[i] = node.childNodes[i].tagName;
    }
    return names;
}

// 获取子节点属性
XML.prototype.getChildAttributes = function (nodeName, attribute) {
    var attributes = new Array();
    var node = this.getSingleNode(nodeName);

    node = this.cleanEmptyTextNode(node.childNodes);

    var count = node.childNodes.length;
    for (var i = 0; i < count; i++) {
       attributes[i] = node.childNodes[i].getAttribute(attribute);
    }
    return attributes;
}

// 选择子节点文本中包含特定关键字
XML.prototype.selectNodeContains = function (keyword) {
    // 先对关键字做字符串处理
    keyword.replace(/'/g,"");
    keyword.replace(/"/g,"");
    var xPath="//*[contains(text(),'" + keyword + "')]";

    if (this.browsertype == BrowserType.IE) {
        return this.root.selectNodes(xPath);
    } else {
        var arr = new Array();
        var nsResolver = this.xmlDoc.createNSResolver (this.root);
        var result = this.xmlDoc.evaluate(xPath, this.root, nsResolver, XPathResult.ANY_TYPE, null);
        var node = result.iterateNext(); //枚举第一个元素
        if(!this.isEmpty(node)) { 
            arr[arr.length] = node;
        }
        
        while (node) {
            node = result.iterateNext(); //枚举下一个元素
            if (!node) {
                break;
            }
            if(!this.isEmpty(node)) { 
                arr[arr.length] = node;
            }
        }
        return arr;
    }
    
}
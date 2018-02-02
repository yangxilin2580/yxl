//1. 随机出现的16进制颜色值:
   		function color(){
   	        var arr=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
   	        var result="#"
   	       	for(var i=0;i<6;i++){
   	       	var  num=Math.floor(Math.random()*16);
   	       	result+=arr[num];
   	    	}
   	    		return result;
   	   	}
   	   	var liList=document.getElementById('top').getElementsByTagName('li')
   	   		for (var i=0;i<liList.length;i++){
   	   			liList[i].style.backgroundColor=color()
   	   		}

// 2.通过选择器获取元素节点的函数：
		function getobj(selector){
			var str=selector.slice(1)
			if(selector[0]=="#"){
				return document.getElementById(str)
			}
			if(selector[0]=="."){
				return document.getElementsByClassName(str)
			}
			if(selector[0]!=="#" && selector[0]!=="."){
				return document.getElementsByTagName(selector)
			}
		}
			// console.log(getobj("#dian"))
			// console.log(getobj(".name"))
			// console.log(getobj("li"))
// 3.给节点绑定事件的函数：
		function bindEvent(nodeList,eventType,fn){
			if(arguments.length==2){
				fn=arguments[1]
				eventType="onclick"
			}
			for(var i=0;i<nodeList.length;i++){
				nodeList[i][eventType]=fn
			}
		}

//4.封装的insertAfter
		function insertAfter(newElement,targetElement){  
    		var parent=targetElement.parentNode;  
    		if(parent.lastChild==targetElement){  
        		parent.appendChild(newElement);  
   			}
   			else{  
        		parent.insertBefore(newElement,targetElement.nextSibling);  
    		}  
		} 					
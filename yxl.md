###yxl库中文文档###

**1. getobj(selector)**

- **使用说明：**通过选择器获取节点对象。
  
>  调用方法：getobj("#类名"/".类名"/"标签名")

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

**2. bindEvent(nodeList,eventType,fn)**

- **使用说明：**为每个nodeList绑定某个事件，可传三个参数或两个参数（默认为onclick点击事件）

- 注意：必须按顺序传参数。

> 调用方法：bindEvent(nodeList,"事件类型",function(){执行事件})

       function bindEvent(nodeList,eventType,fn){
			if(arguments.length==2){
				fn=arguments[1]
				eventType="onclick"
			}
			for(var i=0;i<nodeList.length;i++){
				nodeList[i][eventType]=fn
			}
		}
		// bindEvent(nodeList,"onclick",function(){
		// 	alert(1)
		// })

**3. insertAfter(newElement,targetElement)**

- **使用说明：**向一个节点后插入一个节点。

> 调用方法：insertAfter(插入元素,插入位置) 

       function insertAfter(newElement,targetElement){  
    		var parent=targetElement.parentNode;  
    		if(parent.lastChild==targetElement){  
        		parent.appendChild(newElement);  
   			}
   			else{  
        		parent.insertBefore(newElement,targetElement.nextSibling);  
    		}  
		} 
		// insertAfter(newElement,targetElement) 

**4. color()**

- **使用说明：**随机出现的16进制颜色值

> 调用方法：color()
 
       function color(){
   	        var arr=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
   	        var result="#"
   	       	for(var i=0;i<6;i++){
   	       	var  num=Math.floor(Math.random()*16);
   	       	result+=arr[num];
   	    	}
   	    		return result;
   	   	}
   	   	// var liList=document.getElementById('top').getElementsByTagName('li')
   	   	// 	for (var i=0;i<liList.length;i++){
   	   	// 		liList[i].style.backgroundColor=color()
   	   	// 	}
   
**5.nextBrotherNode(brother)**

- **使用说明：**重新实现nextSibling 该函数期望传入一个node节点,返回离它最近的下一个兄弟元素节点
> 调用方法：nextBrotherNode(brother)

       function nextBrotherNode(brother){
    	while(brother.nextSibling.nodeType!=1){
    		brother = brother.nextSibling
    		if(brother.nextSibling.nodeType==1){
    			return brother.nextSibling
    		}
    	}
    }
 
**6. allchild(all)**

- **使用说明：**寻找子元素节点 该函数期望传入一个node节点，返回该节点里面的所有子元素节点
>  调用方法：allchild(all)

       function allchild(all){
    	for(var a=0;a<all.childNodes.length;a++){
    		if(all.childNodes[a].nodeType==1){
    			console.log(all.childNodes[a])
    		}
    	}
    }			








- **粗体** (`Ctrl+B`) and *斜体* (`Ctrl+I`)
- 引用 (`Ctrl+Q`)
- 代码块 (`Ctrl+K`)
- 标题 1, 2, 3 (`Ctrl+1`, `Ctrl+2`, `Ctrl+3`)
- 列表 (`Ctrl+U` and `Ctrl+Shift+O`)


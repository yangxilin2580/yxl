// 1.通过选择器获取元素节点的函数：
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
// 2.给节点绑定事件的函数：
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
//3.封装的insertAfter
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
//4. 随机出现的16进制颜色值:
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
        //  for (var i=0;i<liList.length;i++){
        //    liList[i].style.backgroundColor=color()
        //  }
//5.重新实现nextSibling 该函数期望传入一个node节点,返回离它最近的下一个兄弟元素节点
    function nextBrotherNode(brother){
    	while(brother.nextSibling.nodeType!=1){
    		brother = brother.nextSibling
    		if(brother.nextSibling.nodeType==1){
    			return brother.nextSibling
    		}
    	}
    }
//6.寻找子元素节点 该函数期望传入一个node节点，返回该节点里面的所有子元素节点
	function allchild(all){
    	for(var a=0;a<all.childNodes.length;a++){
    		if(all.childNodes[a].nodeType==1){
    			console.log(all.childNodes[a])
    		}
    	}
    }	
//7.操作cookie的函数：
    //1.获取到要找的属性在字符串中的起始位startIndex
    //2.获取到要找的属性所对应的属性值在字符串中的终止位置endIndex
    //3.从起始位startIndex，截取到终止位endIndex
    //4.以=为切割点，将第三步截取到的字符串切割为长度2的数组，数组下标[1]就是寻找属性对应的属性值.

    //getCookie函数传一个参数string类型
    function getCookie(string){
        var str=document.cookie
        var startIndex=str.indexOf(string)
        var endIndex=str.indexOf(";",startIndex)
        if(endIndex==-1){
            endIndex=str.length;
        }
        var neirong=str.slice(startIndex,endIndex)
        var result=neirong.split("=")[1]
        return result;
    }
        // console.log(getCookie("sex"))

    //setCookie函数传两个参数：一个参数为对象(包含属性名和属性值),一个为生命周期的日期为Number类型
    function setCookie(neirong,day){
        var date =new Date()
        date.setDate(day)
        for(var i in neirong){
            document.cookie=i + "=" + neirong[i] + ";"+"expires="+date;
        }   
    }
    // setCookie({secondname:"linn"},15)

    //removeCookie函数传一个cookie的name是string类型
    function removeCookie(cookieName){
        var date=new Date()
        date.setDate(date.getDate()-1)
        document.cookie=cookieName+"=q;expires="+date;
    }
    //removeCookie("secondname")	
//8.弹出框插件
		
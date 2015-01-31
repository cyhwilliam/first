// window.onload = function(){
// 	var btSwitch=document.getElementById('imgSwitch');
// 	btSwitch.onClick =function(){
// 		Switch();
// 	   }
//     }
    var timer = null;
    function Switch(){
    clearInterval(timer);
	var obj=document.getElementsByTagName('body')[0];
	var btn=[7];
	var i=0;
	var board=[10000];
    
	timer=setInterval(function(){
        if (obj.className == "bg2") 
        	{
        		var i=0;
        		for(i=0;i<=7;i++){
        		btn[i]=document.getElementsByClassName('btn')[i];
        		btn[i].style.color="#6666cc";
        	    }
                i=0;
                while(document.getElementsByClassName('board')[i]!=null){
                    board[i]=document.getElementsByClassName('board')[i];
                    board[i].style.boxShadow = '0px 0px 20px #9966cc';
                    board[i].style.border = '1px solid #9966cc';
                    i++;
                }
        		obj.className = "bg1";
                clearInterval(timer);
            }
        else 
        	{   
        		var i=0;
        		for(i=0;i<=7;i++){
        		btn[i]=document.getElementsByClassName('btn')[i];
        		btn[i].style.color="#ff6666";
        	    }
                i=0;
                while(document.getElementsByClassName('board')[i]!=null){
                    board[i]=document.getElementsByClassName('board')[i];
                    board[i].style.boxShadow = '0px 0px 20px #ffff00';
                    board[i].style.border = '1px solid #ffff00';
                    i++;
                }
        	    // alert("mmd");
        		obj.className = "bg2";
                clearInterval(timer);
            }
       },100) 

    }
    


    function Add(){
           var obj=document.getElementsByTagName('body')[0];
    	   var odiv = document.createElement('div');
    	   odiv.className='board';
    	   odiv.id="divnew";
    	   odiv.innerHTML='<p1 id="p1"></p1><textarea id="p3">Title</textarea></br><textarea id="p2">Please put your first blog here.....</textarea><input type="button" id="readmore" onClick="Readmore(this);" value="readmore"></input><button id="deletethis" onClick="DeleteThis(this);">delete</button>';
    	   /*为何非要在一行呢？==*/
           if(obj.className=="bg2"){odiv.style.boxShadow = '0px 0px 20px #ffff00';
                    odiv.style.border = '1px solid #ffff00';}
            else{ odiv.style.boxShadow = '0px 0px 20px #9966cc';
                    odiv.style.border = '1px solid #9966cc';}
    	   odiv.style.height=0;/*加上单位就没有动画了*/
    	   var body=document.body;
    	   body.insertBefore(odiv,body.firstChild);
    	   var divnew =document.getElementById('divnew');
    	   // alert(divnew.offsetHeight);
              
    	   divnew.style.height=divnew.offsetHeight+170+'px';
    	   

    }
    function Delete(){
    	var body=document.body;
        if(body.firstChild.id=='divnew') 
        	body.firstChild.id="divnow";
        var divnow =document.getElementById('divnow');
        divnow.style.height=200;
        divnow.style.height=divnow.offsetHeight-180+'px';
    	window.setTimeout('Delete2()', 500);
    	
    }
    function Delete2(){
    	var body=document.body;
    	if(body.firstChild.id=="divnow"){
    	body.removeChild(body.firstChild);
        }
	}  
    

    function DeleteThis(obj){
        var body=obj.parentNode;
        body.id="divmmd";
        body.style.height=200;
        body.style.height=body.offsetHeight-180+'px';
        window.setTimeout('DeleteThis2()', 500);
    }
    var body=document.body;
    var ss=body.firstChild;
    function DeleteThis2(){
        clearInterval(timer);
        timer=setInterval(function(){
        if(ss.id=="divmmd"){
        body.removeChild(body.firstChild);
        clearInterval(timer);
        }
        else{ss=ss.nextNode;}
        },1);
        clearInterval(timer);
    
    }

	function Clear(){
		alert("Do you want to clear all?");
		var body=document.body;
		while(body.firstChild.id=="divnew"){
			body.removeChild(body.firstChild);
		}
	}
    
    function Top(){
    	clearInterval(timer);
    	var top=document.documentElement.scrollTop;
    	var speed=top/40;
    	speed=speed>0?Math.ceil(speed):Math.floor(speed);
    	window.scrollBy(0,-speed);
    	timer=setInterval('Top()', 1);
    	if(document.documentElement.scrollTop==0)
    		clearInterval(timer);
    }
    
    function Bottom(){
    	clearInterval(timer);
    	var top=document.documentElement.scrollHeight-document.documentElement.scrollTop;
    	var speed=0.025*top;
    	speed=speed>0?Math.ceil(speed):Math.floor(speed);
    	window.scrollBy(0,speed);
    	timer=setInterval('Bottom()', 1);
    	 if(document.documentElement.scrollTop==document.documentElement.scrollHeight-10000)
    	 	{
    	 		alert(top);

    	 		clearInterval(timer);
    	 	}
    }
    var topd=null;
    function Up(){
    	topd=document.documentElement.scrollTop;
        Up1();
    }
    function Up1(){
    	clearInterval(timer);
    	var top=document.documentElement.scrollTop-topd+400;
    	var speed=top/40;
    	speed=speed>0?Math.ceil(speed):Math.floor(speed);
    	window.scrollBy(0,-speed);
    	timer=setInterval('Up1()', 1);
    	alert(scrollTop);
    	if(document.documentElement.scrollTop==topd-400)
    		{
    			clearInterval(timer);
    		}
    }
    

    function Down(){
    	topd=document.documentElement.scrollTop;
        Down1();
    }
    function Down1(){
    	clearInterval(timer);
    	var top=-document.documentElement.scrollTop+topd+400;
    	var speed=top/40;
    	speed=speed>0?Math.ceil(speed):Math.floor(speed);
    	window.scrollBy(0,speed);
    	timer=setInterval('Down1()', 1);
    	alert(scrollTop);
    	if(document.documentElement.scrollTop==topd+400)
    		{
    			clearInterval(timer);
    		}
    }


    function Readmore(obj){
        // alert(obj.previousSibling.id);

    	if(obj.parentNode.style.height != '500px')
    	  {obj.parentNode.style.height = '500px';
    	   obj.previousSibling.style.height='400px';
           obj.value="shorten";}
        else{obj.parentNode.style.height = '200px';
             obj.previousSibling.style.height='100px';
             obj.value="readmore";}
    }
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
	timer=setInterval(function(){
        if (obj.className == "bg2") 
        	{
        		obj.className = "bg1";
                clearInterval(timer);
            }
        else 
        	{
        		obj.className = "bg2";
                clearInterval(timer);
            }
       },1)

    }
    
    function Add(){
    	var odiv = document.createElement('div');
    	odiv.className='board';
    	odiv.id="divnew";
    	odiv.innerHTML='<p1 id="p1"></p1><textarea id="p3">Title</textarea></br><textarea id="p2">Please put your first blog here.....</textarea> ';
    	/*为何非要在一行呢？==*/
    	var body=document.body;
    	body.insertBefore(odiv,body.firstChild);
    }
    function Delete(){
    	var body=document.body;
    	if(body.firstChild.id=="divnew"){
    		
    	
    	body.removeChild(body.firstChild);
    	if(body.firstChild.id=="divnew"){
    	body.removeChild(body.firstChild);//针对节点进行判断处理==
        }
    }
}
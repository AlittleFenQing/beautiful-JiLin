window.onload=function(){
			var container =document.getElementById('container');
			var list =document.getElementById('list');
			var word =document.getElementById('word');
			var buttons=document.getElementById('buttons').getElementsByTagName('span');
			var prev =document.getElementById('prev');
			var next =document.getElementById('next');
			var index=1;
			var animated=false;
			var timer;
			var len=3;
			
				function shopbutton(){
				for (var i = 0; i < buttons.length; i++) {
					if (buttons[i].className=='on') {
						buttons[i].className='';
						break;
					}
				}
				buttons[index-1].className='on';
			}
			
			function animate(offset){
				animated=true;
				var newleft=parseInt(list.style.left)+ offset;
				var time=300;
				var interval=10;
				var speed=offset/(time/interval);
				function go(){
					if((speed<0)&&(parseInt(list.style.left)>newleft)||(speed>0)&&(parseInt(list.style.left)<newleft))
	                {   list.style.left=parseInt(list.style.left)+speed+'%';
	                    setTimeout(go,interval);
	                }
					else{
						animated= false;
                        list.style.left=newleft + '%';
                        if (newleft>-100) {
                	        list.style.left=-100*len+'%';
                        }
                        if (newleft<-100*len) {
                	        list.style.left=-100+'%';
                        }
                    }
                }
                go();
            }
            function play(){
            	timer=setInterval(function(){
            		next.onclick();
            	},4000);

            }
            function stop(){
            	clearInterval(timer);
            }
			next.onclick=function(){
				if (index==3) {
					index=1;
				}
				else{
					index+=1;
				}
				shopbutton();
				if (animated==false) {
					animate(-100);
				}
				

			}
			prev.onclick=function(){
				if (index==1) {
					index=3;
				}
				else{
					index-=1;
				}
				shopbutton();
				if (animated==false) {
					animate(+100);
				}
			}
		for (var i = 0; i < buttons.length; i++) {
				if (this.className=="on") {
					return;
				}
				buttons[i].onclick=function(){
					var myIndex=parseInt(this.getAttribute('index'));
					var offset=-100*(myIndex-index);
					
					index=myIndex;
					shopbutton();
					if (animated==false) {
						animate(offset);
					}
					
				}
			}
			container.onmouseover=stop;
			container.onmouseout=play;
			play();

		}
	
 			
		
		

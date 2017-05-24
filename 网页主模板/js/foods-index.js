var kaorou =document.getElementsByClassName('kaorou')[0];
var animation_kaorou_top_bottom =document.getElementsByClassName('animation_kaorou_top_bottom')[0];
var animation_kaorou_right_left =document.getElementsByClassName('animation_kaorou_right_left')[0];
var animation_kaorou_left_right =document.getElementsByClassName('animation_kaorou_left_right')[0];
var animation_kaorou_bottom_top =document.getElementsByClassName('animation_kaorou_bottom_top')[0];
var dui1 =document.getElementsByClassName('dui1')[0];
var dui2 =document.getElementsByClassName('dui2')[0];
var dui3 =document.getElementsByClassName('dui3')[0];
var dui2_1 =document.getElementsByClassName('dui2-1')[0];
var dui2_2=document.getElementsByClassName('dui2-2')[0];

animation_kaorou_right_left.onclick=function () {
	kaorou.style.cssText="position: relative;z-index: 20;width: 604px;height: 604px;margin-top:-150px;margin-left:30%;display: block;transform: rotate(45deg);";
	dui1.style.cssText="width: 25%;height: 25%;transform: rotateY(360deg);position: relative;top: 0px;left:72%;z-index: 30;;";
	dui2.style.cssText="position: relative;top:100px;left: 50%;z-index: 31;;";
	dui3.style.cssText="width: 15%;height: 15%;position: relative;top:600px;left: -40%;z-index: 30;;";
	dui2_1.innerText="甲一方媚娘火锅";
	dui2_2.innerText="龙潭区江北遵义东路65号";
}
animation_kaorou_top_bottom.onclick=function () {
	kaorou.style.cssText="position: relative;z-index: 20;width: 604px;height: 604px;margin-left:30%;display: block;transform: rotate(45deg);";
	dui1.style.cssText="width: 25%;height: 25%;transform: rotateY(180deg);position: relative;top: 0px;left:5%;z-index: 30;";
	dui2.style.cssText="position: relative;top:100px;left: -18%;z-index: 31;";
	dui3.style.cssText="width: 15%;height: 15%;position: relative;top:600px;left: 40%;z-index: 30;";
	dui2_1.innerText="缘生泰火锅";
	dui2_2.innerText="龙潭区遵义东路51号";


}
animation_kaorou_left_right.onclick=function () {
	kaorou.style.cssText="position: relative;z-index: 20;width: 604px;height: 604px;margin-left:30%;display: block;transform: rotate(45deg);";
	dui1.style.cssText="width: 25%;height: 25%;transform: rotate(180deg);position: relative;top: 600px;left:2%;z-index: 30;";
	dui2.style.cssText="position: relative;top:700px;left: -20%;z-index: 31;";
	dui3.style.cssText="width: 15%;height: 15%;position: relative;top:100px;left:40%;z-index: 30;";
	dui2_1.innerText="川尚品概念火锅";
	dui2_2.innerText="龙潭区遵义东路42号";

}
animation_kaorou_bottom_top.onclick=function () {
	kaorou.style.cssText="position: relative;z-index: 20;width: 604px;height: 604px;margin-left:30%;display: block;transform: rotate(45deg);";
	dui1.style.cssText="width: 25%;height: 25%;transform: rotateX(180deg);position: relative;top: 700px;left:70%;z-index: 30;";
	dui2.style.cssText="position: relative;top:780px;left: 47%;z-index: 31;";
	dui3.style.cssText="width: 15%;height: 15%;position: relative;top:0px;left:-30%;z-index: 30;";
	dui2_1.innerText="川奇火锅楼";
	dui2_2.innerText="龙潭区承德街商贸小区1号楼B-11号";

}
$(document).ready(function(){
			var a,b,c;
			a=$(window).height();	
			$(window).scroll(function(){		
				var b=$(this).scrollTop();
				$(".animation").each(function(){
					c=$(this).offset().top;							
					if(a+b>c){
						$(this).addClass("bottom");
						$(this).addClass("right_left");
						$(this).addClass("left_right");
						$(this).addClass("bottom_top");
						$(this).addClass("kaorou_top_bottom");
						$(this).addClass("kaorou_left_right");
						$(this).addClass("kaorou_right_left");
						$(this).addClass("kaorou_bottom_top");

					}
					else{
						$(this).removeClass("bottom");
						$(this).removeClass("right_left");
						$(this).removeClass("left_right");
						$(this).removeClass("bottom_top");
						$(this).removeClass("kaorou_top_bottom");
						$(this).removeClass("kaorou_left_right");
						$(this).removeClass("kaorou_right_left");
						$(this).removeClass("kaorou_bottom_top");
					}
				});	
			});
						
		});

var Nav = function () {
		    var nav = $('.nav'), burger = $('.burger'), page = $('.page'), section = $('.section'), link = nav.find('.nav__link'), navH = nav.innerHeight(), isOpen = true, hasT = false;
		    var toggleNav = function () {
		        nav.toggleClass('nav--active');
		        burger.toggleClass('burger--close');
		        shiftPage();
		    };
		    var shiftPage = function () {
		        if (!isOpen) {
		            page.css({
		                'transform': 'translateY(' + navH + 'px)',
		                '-webkit-transform': 'translateY(' + navH + 'px)'
		            });
		            isOpen = true;
		        } else {
		            page.css({
		                'transform': 'none',
		                '-webkit-transform': 'none'
		            });
		            isOpen = false;
		        }
		    };
		    var switchPage = function (e) {
		        var self = $(this);
		        var i = self.parents('.nav__item').index();
		        var s = section.eq(i);
		        var a = $('section.section--active');
		        var t = $(e.target);
		        if (!hasT) {
		            if (i == a.index()) {
		                return false;
		            }
		            a.addClass('section--hidden').removeClass('section--active');
		            s.addClass('section--active');
		            hasT = true;
		            a.on('transitionend webkitTransitionend', function () {
		                $(this).removeClass('section--hidden');
		                hasT = false;
		                a.off('transitionend webkitTransitionend');
		            });
		        }
		        return false;
		    };
		    var keyNav = function (e) {
		        var a = $('section.section--active');
		        var aNext = a.next();
		        var aPrev = a.prev();
		        var i = a.index();
		        if (!hasT) {
		            if (e.keyCode === 37) {
		                if (aPrev.length === 0) {
		                    aPrev = section.last();
		                }
		                hasT = true;
		                aPrev.addClass('section--active');
		                a.addClass('section--hidden').removeClass('section--active');
		                a.on('transitionend webkitTransitionend', function () {
		                    a.removeClass('section--hidden');
		                    hasT = false;
		                    a.off('transitionend webkitTransitionend');
		                });
		            } else if (e.keyCode === 39) {
		                if (aNext.length === 0) {
		                    aNext = section.eq(0);
		                }
		                aNext.addClass('section--active');
		                a.addClass('section--hidden').removeClass('section--active');
		                hasT = true;
		                aNext.on('transitionend webkitTransitionend', function () {
		                    a.removeClass('section--hidden');
		                    hasT = false;
		                    aNext.off('transitionend webkitTransitionend');
		                });
		            } else {
		                return;
		            }
		        }
		    };
		    var bindActions = function () {
		        burger.on('click', toggleNav);
		        link.on('click', switchPage);
		        $(document).on('ready', function () {
		            page.css({
		                'transform': 'translateY(' + navH + 'px)',
		                '-webkit-transform': 'translateY(' + navH + 'px)'
		            });
		        });
		        $('body').on('keydown', keyNav);
		    };
		    var init = function () {
		        bindActions();
		    };
		    return { init: init };
		}();
		Nav.init();

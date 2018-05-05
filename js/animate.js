$(function(){
	$("#page1").height($(window).height());
//	$("#page2").height($(window).height());
//	$("#page3").height($(window).height());
//	$("#page4").height($(window).height());
//	$("#page5").height($(window).height());
//	$("#page6").height($(window).height());
//	$("#page7").height($(window).height());
//	$("#page8").height($(window).height());

////	
//$('.active .tex_box').style.top = (document.documentElement.scrollTop + (document.documentElement.clientHeight - $(this).offsetHeight) / 2) + "px"; 
//$('.active .tex_box').style.left = (document.documentElement.scrollLeft + (document.documentElement.clientWidth - $(this).offsetWidth) / 2) + "px"; 

	
	var $S_li=$('.servers_box li');
	var $wrapper=$('.portfolio-wrapper');
	var $ser_grid=$('.ser-grid');
	var $news_item= $('.news_item');
	var $about_item=$('.about_item');
	var $rl=$('.res>li')	
	animate($S_li);
	animate($wrapper);
	animate($ser_grid);
	animate($about_item);
	click_addClass($rl);	
	
















	function animate(obj){
		for(var i=0;i<obj.length;i++){
		obj.eq(i).on('mouseover',function(){
			$(this).addClass('actives');
		});
		obj.eq(i).on('mouseleave',function(){
			$(this).removeClass('actives');
		});
	}			
	}	
	function click_addClass(obj){
		for(var i=0;i<obj.length;i++){
		obj.eq(i).on('click',function(){
			$(this).addClass('actives').siblings().removeClass('actives');
		});
		}
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})


$(document).ready(function(){
	$(".one-box").mouseover(function(){
		$(this).addClass("green-xian");
	}).end().mouseout(function(){
		$(".one-box").removeClass("green-xian");
	});
	
//banner
	var bant = setInterval(banmove, 3000);
	var now = 0;
	var next = 0;
	function banmove(){
		next = now+1;
		if(next==$(".lun-inner-img").length){
			next=0;
		}
		$(".lun-inner-img").eq(now).css("display", "none").removeClass("lun-active");
		$(".lun-inner-img").eq(next).css("display", "block").addClass("lun-active");
		now = next;
	}
	
	
	
//轮播
	var ow = $(".lunbo li.col").outerWidth(true);
	$("ul.lunbo").width($(".lunbo li.col").length * ow)
	var t = setInterval(move,2000);
	var n = 0;
//	var flag = true;
	function move(){
		n++;
		if(n > $(".lunbo li.col").length/2){
			$(".lunbo").animate({"left": 0}, 200);
			n = 0;
		}
		$(".lunbo").stop(true, true).animate({left: -ow * n},600)
	}
	$(".next").click(function(){
		move();
	});
	
//thirds left
	$(".tabs-nav li").on("click", function(){
		$(".tabs-nav li").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab-content").css("display", "none").eq($(this).index()).css("display", "block");
	})
	
//right
	var rt=setInterval(rmove, 3000);
	var i = 0;
	function rmove(){
		if(i >= $(".pinglun-inner li").length){
			i=0;
		}
		$(".pinglun-inner li").animate({"opacity": 0}, 600).css("display", "none")
		$(".pinglun-inner li").eq(i).css("display", "block").animate({"opacity": 1}, 600)
		i++;
	}
	
});

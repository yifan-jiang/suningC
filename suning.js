$("#site").hover(
	function(){
		$("#site span").css({"transform":"rotate("+180+"deg)"});
		$("#site #item").show();
		$("#site").css({"background-color":"#fff"});
	},
	function(){
	}
);
$("#item #close").click(
	function(){
		$("#site #item").hide();
		$("#site").css({"background-color":"#f5f5f5"});
		$("#site span").css({"transform":"rotate(-"+360+"deg)"});
	}
);
$("#text").click(
	function(){
		$("#recent").show();
	}
);
$("#recent #close").click(
	function(){
		$("#recent").hide();
	}
);
$("#list").hover(
	function(){
		$("#list span").css({"transform":"rotate("+180+"deg)"});
		$("#list ul").show();
		$("#list").css({"border":"1px solid #eee","border-bottom":"none","background-color":"#fff"});
	},
	function(){
		$("#list span").css({"transform":"rotate(-"+360+"deg)"});
		$("#list ul").hide();
		$("#list").css({"border":"none","background-color":"#f5f5f5"});
	}
);
$("#yigou").hover(
	function(){
		$("#yigou span").css({"transform":"rotate("+180+"deg)"});
		$("#yigou ul").show();
		$("#yigou").css({"border":"1px solid #eee","border-bottom":"none","background-color":"#fff"});
	},
	function(){
		$("#yigou span").css({"transform":"rotate(-"+360+"deg)"});
		$("#yigou ul").hide();
		$("#yigou").css({"border":"none","background-color":"#f5f5f5"});
	}
);
$("#phone").hover(
	function(){
		$("#phone span").css({"transform":"rotate("+180+"deg)"});
		$("#phone>div").show();
		$("#phone").css({"border":"1px solid #eee","border-bottom":"none","background-color":"#fff"});
	},
	function(){
		$("#phone span").css({"transform":"rotate(-"+360+"deg)"});
		$("#phone>div").hide();
		$("#phone").css({"border":"none","background-color":"#f5f5f5"});
	}
);
$("#service").hover(
	function(){
		$("#service span").css({"transform":"rotate("+180+"deg)"});
		$("#service ul").show();
		$("#service").css({"border":"1px solid #eee","border-bottom":"none","background-color":"#fff"});
	},
	function(){
		$("#service span").css({"transform":"rotate(-"+360+"deg)"});
		$("#service ul").hide();
		$("#service").css({"border":"none","background-color":"#f5f5f5"});
	}
);
$("#list1").children("li").each(function(item){
	$("#list1").children("li").eq(item).hover(function(){
		$("#list1").children("li").eq(item).find("#num").show();
		$("#list1").children("li").eq(item).css({"background-color":"#fff"});
		$("#list1").children("li").eq(item).children("a").css({"color":"#000"});
	},
	function(){
		$("#list1").children("li").eq(item).find("#num").hide();
		$("#list1").children("li").eq(item).css({"background-color":"#2b2b2b"});
		$("#list1").children("li").eq(item).children("a").css({"color":"#fff"});
	})
});
/**********************************************/
$(document).ready(function(){
	var length;
	var currentIndex=0;
	var interval;
	var hasStarted=false;
	var t=3000;
	length=$(".slider-panel").length;
	$(".slider-panel:not(:first)").hide();
	$("#slider-item:first").addClass("slider-item-selected");
	$(".slider-page").hide();
	$(".slider-panel,.slider-pre,.slider-next").hover(function(){
		stop();
		$(".slider-page").show();
	},function(){
		start();
		$(".slider-page").hide();
	});
	$("#slider-item").hover(function(){
		stop();
		var preIndex=$("#slider-item").removeClass("slider-item-selected").index();
		currenIndex=$(this).index();
	},function(){
		start();
	});
	$(".slider-pre").bind("click",function(){
		pre();
	});
	$(".slider-next").bind("click",function(){
		next();
	});
	function pre(){
		var preIndex=currentIndex;
		currentIndex=(--currentIndex+length)%length;
		play(preIndex,currentIndex);
	}
	function next(){
		var preIndex=currentIndex;
		currentIndex=++currentIndex%length;
		play(preIndex,currentIndex);
	}
	function play(preIndex,currentIndex){
		$(".slider-panel").eq(preIndex).fadeOut(500).parent().children().eq(currentIndex).fadeIn(800);
		$("#slider-item").eq(currentIndex).addClass("slider-item-selected");
		$("#slider-item").eq(preIndex).removeClass("slider-item-selected");
		switch (currentIndex)
		{
		case 0:$(".slider").css("background-color","#ec1a3f;");break;
		case 1:$(".slider").css("background-color","#e0183c");break;
		case 2:$(".slider").css("background-color","#f53d9f");break;
		case 3:$(".slider").css("background-color","#e90044");break;
		case 4:$(".slider").css("background-color","#fa25a1");break;
		case 5:$(".slider").css("background-color","#e6101c");break;
		case 6:$(".slider").css("background-color","#6f00ff");break;
		case 7:$(".slider").css("background-color","#0da1e7");break;
		case 8:$(".slider").css("background-color","#ff5f08");break;
		case 9:$(".slider").css("background-color","#e31140");break;
		case 10:$(".slider").css("background-color","#f01100");break;
		}
	}
	function start(){
		if(!hasStarted){
			hasStarted=true;
			interval=setInterval(next,t);
		}
	}
	function stop(){
		clearInterval(interval);
		hasStarted=false;
	}
	start();
});


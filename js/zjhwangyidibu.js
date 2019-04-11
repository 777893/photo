$(function(){
	$(".zjhdibutop1").eq(0).css("border","none");
	$(".zjhdibutop1").eq(2).css("border","none");
	$(".zjhdibutop1").eq(1).css({"border-top":"none","border-bottom":"none"});
	
	$("#zjhqq").hover(function(){
    	$("#zjhdibu5").show();
    	},function(){
    	$("#zjhdibu5").hide();
  	});
  	/*隐藏显示的二维码*/
  	$("#zjhweixin").hover(function(){
    	$("#zjhdibu6").show();
    	},function(){
    	$("#zjhdibu6").hide();
  	});
  	
  	$("#zjhdibutopa").mouseover(function(){
  		$("#zjhkefu1").hide();
  		$("#zjhkefu2").show();
  	});
  	$("#zjhdibutopa").mouseout(function(){
  		$("#zjhkefu1").show();
  		$("#zjhkefu2").hide();
  	});
  	
  	$("#zjhdibutopb").mouseover(function(){
  		$("#zjhfankui1").hide();
  		$("#zjhfankui2").show();
  	});
  	$("#zjhdibutopb").mouseout(function(){
  		$("#zjhfankui1").show();
  		$("#zjhfankui2").hide();
  	});
	
	
	$(".zjhdibuxiaozi").last().css("border-right","none");
	
})

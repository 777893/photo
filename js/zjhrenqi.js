
		$(document).ready(function(){
			/*鼠标放上去变颜色*/
			$("#zjhrqtop1,#zjhrqtop4").hover(function(){
				$(this).css("color","#D2691E");
			},function(){
				$(this).css("color","#000000");
			});
			
			$("a").hover(function(){
				$(this).css("color","#D2691E");
			},function(){
				$(this).css("color","#000000");
			});
			
			/*编辑推荐与热销总榜切换*/
			$("#zjhrqtop2").bind("click",bg1=function(){
				$(this).css({"color":"#D2691E","border-bottom":"2px solid #D2691E"});
				$("#zjhrqtop3").css({"color":"black","border-bottom":"none"});
			}).bind("click",c=function(){
				$("#zjhbianji").show();
				$("#zjhrexiao").hide();
			});
			$("#zjhrqtop3").bind("click",bg2=function(){
				$(this).css({"color":"#D2691E","border-bottom":"2px solid #D2691E"});
				$("#zjhrqtop2").css({"color":"black","border-bottom":"none"});
			}).bind("click",d=function(){
				$("#zjhbianji").hide();
				$("#zjhrexiao").show();
			});
			
			/*马桶右边的6哥哥div布局*/
			$(".zjhbianjiyou2,.zjhbianjiyou3,.zjhbianjiyou5,.zjhbianjiyou6").css("margin-left","10px");
			$(".zjhbianjiyou4,.zjhbianjiyou5,.zjhbianjiyou6").css("margin-top","10px");
			
			
			
			
			
			
		})

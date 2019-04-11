

		$(document).ready(function(){
			/*客户服务二级菜单*/
  			$("#zjhqi").hover(function(){
   			$("#yincang").show();
   		 },function(){
   			$("#yincang").hide();
  			});
  			
  			/*二维码*/
  			$("#zjhalltop4 li:last").mousemove(function(){
  				$("#zjherweima").show();
  			});
  			$("#zjhalltop4 li:last").mouseout(function(){
  				$("#zjherweima").hide();
  			});
  			
  			$("#zjhinputxiala li a").css("color","darkslateblue");
  			
  			/*input框获得焦点与失去焦点的显示与隐藏*/
  			$("#zjhinput").focus(function(){
  				$("#zjhinputxiala li,#zjhinputxiala").show();
  			});
  			$("#zjhinput").blur(function(){
  				$("#zjhinputxiala li,#zjhinputxiala").hide();
  			});
  			
  			$("#zjhinputxiala li a:eq(1)").css("color","red");
  			$("#zjhinputxiala li a:eq(3)").css("color","red");
  			
  			/*鼠标放上去添加背景颜色*/
  			$("#zjhinputxiala li").mousemove(function(){
  				$(this).addClass("zjhcolor");
  			});
  			$("#zjhinputxiala li").mouseout(function(){
  				$(this).removeClass("zjhcolor");
  			});
  			
  			/*主题栏*/
  			$("#zjhzhutilanul li a").mouseover(function(){
  				$(this).css("color","#DEB887")
  			});
  			$("#zjhzhutilanul li a").mouseout(function(){
  				$(this).css("color","black");
  			});
  			
  			
		});
		function AutoScroll(obj) { 
		$(obj).find("ul:first").animate({ 
		marginTop: "-35px" 
		}, 1000, function() { 
		$(this).css({ marginTop: "0px" }).find("li:first").appendTo(this); 
		}); 
		} 
		$(document).ready(function() { 
		setInterval('AutoScroll("#zjhalltop3")', 1000) 
		});
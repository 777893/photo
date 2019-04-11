$(function(){
			$('#Tab li:first').css("color","black");
			$('#Tab li:last').css("color","#A9A9A9");
			$('#Tab li:first').bind("click",function(){
				$('#denglu').show();
				$('#Tab li:first').css("color","black");
				$('#zhuce').hide();
				$('#Tab li:last').css("color","#A9A9A9");
			})
			$('#Tab li:last').bind("click",function(){
				$('#zhuce').show();
				$('#Tab li:last').css("color","black");
				$('#denglu').hide();
				$('#Tab li:first').css("color","#A9A9A9");
			})
			
})
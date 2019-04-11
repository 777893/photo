		var lgtel = ['13211111111'];
		var lgpwd = ['111'];
		$(function(){
			$('#btn').click(function(){//注册按钮
				var zctel = $('#zctel').val();
				var zcpwd = $('#zcpwd').val();
				var zcpwod = $('#zcpwod').val();
				lgtel[lgtel.length] = zctel;
				if(zcpwd == zcpwod){
					lgpwd[lgpwd.length] = zcpwd;
					alert("注册成功");
					$('#denglu').show();
					$('#Tab li:first').css("color","black");
					$('#zhuce').hide();
					$('#Tab li:last').css("color","#A9A9A9");
					lgtel.push(zctel);
					lgpwd.push(lgpwd);
				}else{
					alert("两次密码不一致，请重新输入");
				}
			})
			$('#btnn').click(function(){//登陆按钮
				
			})
			
		})
		jigsaw.init(document.getElementById('captcha'), function () {
    		var tel = $('#tel').val();
				var pwd = $('#pwd').val();
				for (var i = 0; i < lgtel.length; i++) {
					if(lgtel[i] == tel){
						if(lgpwd[i] == pwd){
							alert("登陆成功！！！");
						}else{
							alert("登陆失败！！！");
						}
					}
				}
		})
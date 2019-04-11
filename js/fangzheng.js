$(function(){
			$('#fz-a').hover(function(){
				$(this).css('color','#b5a17a');
			},function(){
				$(this).css('color','black');
			})
			$('#fz-b').hover(function(){
				$(this).css('color','#b5a17a');
			},function(){
				$(this).css('color','black');
			})
			//改变立即购买背景颜色
			$('#fz-cc8').hover(function(){
				$('#fz-cc8').css('background-color','#FF3333');
			},function(){
				$(this).css('background-color','#be4141')
			})
			$('#fz-cc15').hover(function(){
				$('#fz-cc15').css('background-color','#FF3333');
			},function(){
				$(this).css('background-color','#be4141')
			})
			$('#fz-cc22').hover(function(){
				$('#fz-cc22').css('background-color','#FF3333');
			},function(){
				$(this).css('background-color','#be4141')
			})
			$('#fz-cc29').hover(function(){
				$('#fz-cc29').css('background-color','#FF3333');
			},function(){
				$(this).css('background-color','#be4141')
			})
			//改变小标题颜色
			$('#fz-cc2 a').hover(function(){
				$(this).css('color','#b5a17a');
			},function(){
				$(this).css('color','black')
			})
			$('#fz-cc9 a').hover(function(){
				$(this).css('color','#b5a17a');
			},function(){
				$(this).css('color','black')
			})
			$('#fz-cc16 a').hover(function(){
				$(this).css('color','#b5a17a');
			},function(){
				$(this).css('color','black')
			})
			$('#fz-cc23 a').hover(function(){
				$(this).css('color','#b5a17a');
			},function(){
				$(this).css('color','black')
			})
			
			
		})
		
		var hh = 2;
     	var mm = 30;
     	var ss = 60;
        function fun(){
     	ss--;
     	if(ss==0){
     		mm--;
     		ss = 60;
     	}else if(mm==0){
     		hh--;
     	    mm = 59;
     	}
     	sss = ss + "";
     	$("#hour").text(hh);
     	$("#min").text(mm);
     	$("#son").text(sss);
     	

        }
        setInterval(fun,1000);

$(function(){
			$('#fz-d').hover(function(){
				$(this).css('color','#b5a17a')
			},function(){
				$(this).css('color','black')
			})
			$('#fz-d1').hover(function(){
				$(this).css('color','#b5a17a')
			},function(){
				$(this).css('color','black')
			})
			$('#fz-d2').hover(function(){
				$(this).css('color','#b5a17a')
			},function(){
				$(this).css('color','black')
			})
			$('#fz-d8').hover(function(){
				$(this).css('color','#b5a17a')
			},function(){
				$(this).css('color','black')
			})
			$('a').hover(function(){
				$(this).css('color','#b5a17a')
			},function(){
				$(this).css('color','black')
			})
			
		})

	$(function(){
			$('#fz-g').hover(function(){
				$(this).css('color','#b5a17a')
			},function(){
				$(this).css('color','black')
			})
			$('#fz-g1').hover(function(){
				$(this).css('color','#b5a17a')
			},function(){
				$(this).css('color','black')
			})
			$('#fz-g2').hover(function(){
				$(this).css('color','#b5a17a')
			},function(){
				$(this).css('color','black')
			})
			$('#fz-g8').hover(function(){
				$(this).css('color','#b5a17a')
			},function(){
				$(this).css('color','black')
			})
			$('a').hover(function(){
				$(this).css('color','#b5a17a')
			},function(){
				$(this).css('color','black')
			})
			
		})
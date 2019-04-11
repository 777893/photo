$(function(){
	var clickLeftNum = 0;
	var clickRightNum = 0;
	$('#left').click(function(){
		if(clickLeftNum<=3){
			clickLeftNum++;
		    clickRightNum--;
		    left = -1065*clickLeftNum+'px';
		    $('#ex1').animate({'margin-left':left});
		}
	})
	$('#right').click(function(){
		clickRightNum++;
		if(clickRightNum >= 1){
			clickRightNum = 0;
		}else{
		    clickLeftNum--;
		    right = 1100*clickRightNum+'px';
		    $('#ex1').animate({'margin-left':right});
		   }
		
	})
	$(function(){
		$("#ex5 li").mouseover(function(){
			$(this).css({"background-color":"#F4F0EA","box-shadow":"10px 10px 10px #F4F0EA"});
		})
		$("#ex5 li").mouseout(function(){
			$(this).css({"background-color":"white","box-shadow":"0px 0px 0px "});
		})
	})
})

   $(function(){
   	var a = document.getElementsByName('commodity');
   	var price = document.getElementsByName('price');
   	var num = document.getElementsByName('num');
   	var showPrice = document.getElementsByName('showPrice');
   	var del = document.getElementsByName('del');
   	var add = $("input[value ='＋']");
   	var reduce = $("input[value ='—']");
   	var UnitPrice = 0;
   	$(function(){
   		/*初始状态下显示每件商品的小计*/
   		$(function(){
   			var Total = 0;
   			for (var i = 0; i < a.length; i++) {
   				var price1 = "";
   			    price1 = price[i].innerHTML.substring(1,4);
   			    price2 = parseFloat(price1);
   				var price3 = price2 * num[i].value;
   				price3 ="￥" + price3+".00"
   				showPrice[i].innerHTML = price3;
   			}
   		})
   		
   		$(function(){
   			$('a').click(function(){
   				if($(this).parent().prevAll().eq(5).children().is(':checked')){
   					$(this).parent().parent().parent().remove();
   					var Total = 0;
   					UnitPrice = 0;
   			       for (var i = 0; i < a.length; i++) {
   			       		price = document.getElementsByName('price');
                        showPrice = document.getElementsByName('showPrice');
   						var price1 = "";
   			    		price1 = price[i].innerHTML.substring(1,4);
   			   			price2 = parseFloat(price1);
   						var price3 = price2 * num[i].value;
   						UnitPrice = UnitPrice + price3;
   						price3 ="￥" + price3+".00"
   						showPrice[i].innerHTML = price3;
   						document.getElementById('Total').innerHTML = "￥" + UnitPrice+".00";
   			          }
   				}else{
   					$(this).parent().parent().parent().remove();
   				}
   			})
   		})
   		
   		$(function(){
   			$("input[value ='＋']").click(function(){
   				for (var i = 0; i < price.length; i++) {
   					if($(price[i]).html()==$(this).parent().prev().html()){
   						var num1 = $(this).prev().val();
   						var num2 = parseFloat(num1)+1;
   						$(this).prev().val(num2);
   			                if ($(this).parent().prevAll().eq(3).children().is(':checked')) {
   			                    var Total = 0
   			                    UnitPrice = 0;
   			                    for (var i = 0; i < a.length; i++) {
   			                        if(a[i].checked){
   			             	            var price1 = "";
   			  			       		     price1 = price[i].innerHTML.substring(1,4);
   			    			   		     price2 = parseFloat(price1);
   							   		     var price3 = price2 * num[i].value;
   							       		 UnitPrice = UnitPrice + price3;
   							       		 price3 ="￥" + price3+".00"
   							       		 showPrice[i].innerHTML = price3;
   							       		 document.getElementById('Total').innerHTML = "￥" + UnitPrice+".00";
   								     		   }
   						        		}   
   			            } else{
   			            	    var Total = 0
   			                    for (var i = 0; i < a.length; i++) {
   			             	             var price1 = "";
   			  			       		     price1 = price[i].innerHTML.substring(1,4);
   			    			   		     price2 = parseFloat(price1);
   							   		     var price3 = price2 * num[i].value;
   							       		 price3 ="￥" + price3+".00"
   							       		 showPrice[i].innerHTML = price3;								     		  
   						        		}   
   			            }

   					}
   				}
   			})
   			$("input[value ='—']").click(function(){
   				for (var i = 0; i < price.length; i++) {
   					if($(price[i]).html()==$(this).parent().prev().html()){
   						var num1 = $(this).next().val();
   						var num2 = parseFloat(num1)-1;
   						if(num2 <= 1){
   							num2 = 1;
   						}
   						/*$(this).prev().val(num2);*/
   						$(this).next().val(num2);
   			                if ($(this).parent().prevAll().eq(3).children().is(':checked')) {
   			                    var Total = 0
   			                    UnitPrice = 0; 
   			                    for (var i = 0; i < a.length; i++) {
   			                        if(a[i].checked){
   			             	             var price1 = "";
   			  			       		     price1 = price[i].innerHTML.substring(1,4);
   			    			   		     price2 = parseFloat(price1);
   							   		     var price3 = price2 * num[i].value;
   							       		 UnitPrice = UnitPrice + price3;
   							       		 price3 ="￥" + price3+".00"
   							       		 showPrice[i].innerHTML = price3;
   							       		 document.getElementById('Total').innerHTML = "￥" + UnitPrice+".00";
   								     		   }
   						        		}   
   			            } else{
   			            	    var Total = 0
   			                    for (var i = 0; i < a.length; i++) {
   			             	             var price1 = "";
   			  			       		     price1 = price[i].innerHTML.substring(1,4);
   			    			   		     price2 = parseFloat(price1);
   							   		     var price3 = price2 * num[i].value;
   							       		 price3 ="￥" + price3+".00"
   							       		 showPrice[i].innerHTML = price3;								     		  
   						        		}   
   			            }
   						
   						
   					}
   				}
   			})
   		})
   		
   		$(a).click(
   			function(){
   			var Total = 0
   			for (var i = 0; i < a.length; i++) {
   			if(a[i].checked){
   				var price1 = "";
   			    price1 = price[i].innerHTML.substring(1,4);
   			    price2 = parseFloat(price1);
   				var price3 = price2 * num[i].value;
   				UnitPrice = UnitPrice + price3;
   				price3 ="￥" + price3+".00"
   				showPrice[i].innerHTML = price3;
   				document.getElementById('Total').innerHTML = "￥" + UnitPrice+".00";;
   			}
   		}   
   		     UnitPrice = 0;
   			}
   		)
   	})
   	$('#checkbox1').click(function(){
   		if(document.getElementById('checkbox1').checked){
   			var Total = 0;
   			for (var i = 0; i < a.length; i++) {
   				a[i].checked = true;
   				var price1 = "";
   			    price1 = price[i].innerHTML.substring(1,4);
   			    price2 = parseFloat(price1);
   				var price3 = price2 * num[i].value;
   				UnitPrice = UnitPrice + price3;
   				price3 ="￥" + price3+".00"
   				showPrice[i].innerHTML = price3;
   				document.getElementById('Total').innerHTML = "￥" + UnitPrice+".00";;
   			}
   			  
   		}else{
   			for (var i = 0; i < a.length; i++) {
   				a[i].checked = false;
   				document.getElementById('Total').innerHTML = "￥0.00";
   				UnitPrice = 0;
   			}
   		}
   	})
   })

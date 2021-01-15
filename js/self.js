$(function(){
	// 点击问号是弹出提示框
	$('.mains1-right3').click(function(){
		$('.mains1-rightTip').css('display','block');
	})
	// 点击X关闭提示框
	$('.rightTip-close2').click(function(){
		// console.log(1111)
		$('.mains1-rightTip').css('display','none');
	})
	$('.rightTip-bun').click(function(){
		$('.mains1-rightTip').css('display','none');
	})
	// 
	$('.contentChoose1').click(function(){
		/* $('.self-contents2').stop().hide();
		$('.self-contents1').stop().show(); */
		$('.self-contents2').css('display','none');
		$('.self-contents1').css('display','block');
		$(this).css('color','#32a5e7').siblings().css('color','#333');
		
	})
	
	$('.contentChoose2').click(function(){
		/* $('.self-contents1').stop().hide();
		$('.self-contents2').stop().show(); */
		$('.self-contents1').css('display','none');
		$('.self-contents2').css('display','block');
		$(this).css('color','#32a5e7').siblings().css('color','#333');
	})
	
})
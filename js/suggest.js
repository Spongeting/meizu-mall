$(function() {
	// 第一部分手机的选项卡
	// 选项卡 jQuery中this 将li中对应的div中写在li里面，当滑过出现(滑过的时候开始让div隐藏 当鼠标滑过哪一个div是就让哪一个出现) 滑出隐藏
	$('.index-nav-navs-ul li').hover(function() {
		//滑过
		$(this).find('.index-choose1').stop().slideDown(100);

	}, function() {
		//滑出
		// var i = $(this).index();
		$(this).find('.index-choose1').stop().slideUp(100);
	});

	//个人中心选项卡
	console.log($('.index-nav-selfs'));
	$('.index-nav-selfs').hover(function() {
		// 滑过
		$('.index-nav-selfs-ul').stop().slideDown(100);
	}, function() {
		$('.index-nav-selfs-ul').stop().slideUp(100);
	})
	//
	$('.rights-Bun .rights-Bun1').click(function() {
		$(this).parent().siblings('.rights-Box').find('.rights-Box1').eq($(this).index()).stop().show().siblings().stop()
			.hide()
	})
	// 
	$('.rights2-typeHide .rights2-typeHide1').hover(function() {
		$(this).css('background', '#efefef');
	}, function() {
		$(this).css('background', '#fff');
	})
	
	var isNow = false; //初始状态是隐藏的
	$('.rights2-typecontent2').click(function() {
		if (isNow) {
			$('.rights2-typeHide').stop().hide();
			isNow = false;
		} else {
			$('.rights2-typeHide').stop().show();
			isNow = true;
		}
	})
	// 赋值
	$('.rights2-typeHide .rights2-typeHide1').click(function() {
		console.log($(this).html());
		$('.rights2-typecontent2').val($(this).html());
	})
	//页尾选项卡
	//微信二维码
	$('.index-footers2-rightImg2').hover(function() {
		$('.index-footers2-rightImg1').stop().show(100);
	}, function() {
		$('.index-footers2-rightImg1').stop().hide(100);
	})
	$('.index-footers2-rightImg4').hover(function() {
		$('.index-footers2-rightImg3').stop().show(100);
	}, function() {
		$('.index-footers2-rightImg3').stop().hide(100);
	})
	
	$('.rights2-question2').blur(function(){
		var Zhi = $('.rights2-question2').val();
		console.log(Zhi);
		if(Zhi == ''){
			$('.rights2-question3').html('请细描述您遇到的问题!');
			$('.rights2-question3').css({
				color:'red',
				fontSize:'12px'
			})
		}
	})
})

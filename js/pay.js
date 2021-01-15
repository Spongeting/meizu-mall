$(function(){
	$('.money1-sp2').hover(function(){
		$('.money1-sp2-Hide').stop().show(200);
	},function(){
		$('.money1-sp2-Hide').stop().hide(200);
	})
	// 点击订单详情时 滑出 订单详情页面
	var isDetails = false;
	$('.content1-details').click(function(){
		if(isDetails){
			$('.content1-Hide').stop().hide(500);
			isDetails = false;
		}else{
			$('.content1-Hide').stop().show(500);
			isDetails = true;
		}
	})
	// 点击下载支付宝时弹出下载页面
	$('.content2-er3-sp1').click(function(){
		$('.content2-er3Hide').css('display','block');
	})
	// 点击关闭下载页面的X是 关闭整个页面
	$('.er3Hide-close').click(function(){
		$('.content2-er3Hide').css('display','none');
	})
	// 点击关闭的提示按钮 关闭提示框
	$('.Ma2-onName2Tip-close').click(function(){
		$('.Ma2-onName2Tip').css('display','none');
	})
	// 点击X关闭提示框 显示默认字体
	$('.Ma2-onPass2Tip-close').click(function(){
		$('.Ma2-onPass2Tip').css('display','none');
		$('.Ma2-onPass3').css('display','block');
	})
	// 账号密码为空时显示提示 点击下一步是提示
	$('.Ma2-onNext').click(function(){
		var isNull = $('.Ma2-onName2In').val();
		var isKong = $('.Ma2-onPass2In').val();
		console.log(isKong);
		if(isNull == ''){
			$('.Ma2-onName2Tip').css('display','block');
		}if(isKong == ''){
			$('.Ma2-onPass3').css('display','none');
			$('.Ma2-onPass2Tip').css('display','block');
		}
	})
	// 点击登录账户付款时  滑出相应的账户付款界面
	$('.content2-BunsOn').click(function(){
		$('.content2-Bigbox').animate({
			left:'-985px'
		},1000)
	})
	
	$('.content2-Ma2-Bun').click(function(){
		$('.content2-Bigbox').animate({
			left:'0px'
		},1000)
	})
})
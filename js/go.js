$(function(){
	$('.go-tip-box-close').click(function(){
		$('.go-tip-box').css('display','none')
	})
	//手机号码验证
	$('.go-checkNum-In').change(function(){
		console.log(/^1\d{10}$/.test($('.go-checkNum-In').val()));
		if(/^1\d{10}$/.test($('.go-checkNum-In').val())){
			$('.go-tip-box').css('display','none');
		}else{
			$('.go-tip-box').css('display','block');
		}
	})
	
	//获取随机验证码
	function checkCode(n){
		var checksArr = '';
		for(n; n>0; n--){
			var checkQ = parseInt(Math.random()*3+1);
			var checkNum = parseInt(Math.random()*9+48);
			var checkBig = parseInt(Math.random()*25+65);
			var checkSm = parseInt(Math.random()*25+97);
			checksArr += checkQ == 1 ? String.fromCharCode(checkNum) : checkQ == 2 ? String.fromCharCode(checkBig) : String.fromCharCode(checkSm);
		}
		return checksArr;
	}
	// console.log(checkCode(5))
	//点击获取验证码时显示默认验证码
	$('.go-check2').click(function(){
		$('.go-check3').val('Ab8fd');
	})
	//点击看不清楚时  显示随机验证码
	$('.go-check4').click(function(){
		$('.go-check3').val(checkCode(5));
	})
	
	//验证码是否输入正确
	$('.go-check1-t2').change(function(){
		// console.log($('.post-checkHides'));
		if($('.go-check1-t2').val().length != $('.go-check3').val().length){
			$('.go-checkHides').css('display','block');
		}else if($('.go-check1-t2').val() != $('.go-check3').val()){
			$('.go-checkHides').css('display','block');
		};
	})
	//当点击密码或者号码有误的提示框的X时 让整个提示框隐藏
	$('.go-checkHides-close').click(function(){
		$('.go-checkHides').css('display','none')
	})
	// 滑过微信图标显示
	$('.on-footerTop-righta').hover(function(){
		$('.on-right-w').css('display','block');
	},function(){
		$('.on-right-w').css('display','none');
	})
	//点击立即注册  弹出注册成功 跳转页面.....
})

$(function(){
	//当点击密码或者号码有误的提示框的X时 让整个提示框隐藏
	$('.post-tip-box-close').click(function(){
		$('.post-tip-box').css('display','none')
	})
	
	//手机号码验证
	$('.post-checkNum-In').change(function(){
		console.log(/^1\d{10}$/.test($('.post-checkNum-In').val()));
		if(/^1\d{10}$/.test($('.post-checkNum-In').val())){
			$('.post-tip-box').css('display','none');
		}else{
			$('.post-tip-box').css('display','block');
		}
	})
	//密码验证
	$('.post-checkPass-In').change(function(){
		// console.log($('.post-checkPass-In').val().length>=6 && $('.post-checkPass-In').val().length<=16);
		if($('.post-checkPass-In').val().length>=6 && $('.post-checkPass-In').val().length<=16){
			$('.post-tip-box').css('display','none');
		}else{
			$('.post-tip-box').css('display','block');
		}
	})
	
	//验证码
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
	$('.post-check2').click(function(){
		$('.post-check3').val('Ab8fd');
	})
	//点击看不清楚时  显示随机验证码
	$('.post-check4').click(function(){
		$('.post-check3').val(checkCode(5));
	})
	
	//验证码是否输入正确
	$('.post-check1-t2').change(function(){
		// console.log($('.post-checkHides'));
		if($('.post-check1-t2').val().length != $('.post-check3').val().length){
			$('.post-checkHides').css('display','block');
		}else if($('.post-check1-t2').val() != $('.post-check3').val()){
			$('.post-checkHides').css('display','block');
		};
	})
	//当点击密码或者号码有误的提示框的X时 让整个提示框隐藏
	$('.post-checkHides-close').click(function(){
		$('.post-checkHides').css('display','none')
	})
	//选项卡
	// var s = true;
	// console.log($('.post-choose').eq(2))
	$('.post-Title span').click(function(){
		$('.post-choose .k').eq($(this).index()).css('display','block').siblings().css('display','none');
		
	})
	// 滑过微信图标显示
	$('.on-footerTop-righta').hover(function(){
		$('.on-right-w').css('display','block');
	},function(){
		$('.on-right-w').css('display','none');
	})
})
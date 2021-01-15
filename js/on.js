$(function(){
	
	// 鼠标滑过每一个li时 背景颜色变化
	$('.on-main-cyCode-Hidedown-ul li').hover(function(){
		$(this).css('background','#e5d3d3');
	},function(){
		$(this).css('background','#fff');
	})
	// 当点击向下的按钮时 各一个 弹出隐藏的号码前缀提示框
	var a = false;//隐藏
	$('.on-main-cyCode-down').click(function(){
		if(a){
			$('.on-main-cyCode-Hidedown').stop().hide(1000);
			a = false;
		}else{
			$('.on-main-cyCode-Hidedown').stop().show(1000);
			a = true;
		}
	})
	
	//验证手机号码
	$('.on-main-cyCodeIn2').blur(function(){
		// console.log(/^1\d{10}$/.test($('.on-main-cyCodeIn2').val()));
		if(/^1\d{10}$/.test($('.on-main-cyCodeIn2').val())){
			$('.on_check').css('display','block');
			$('.on-tip-box').css('display','none');
		}else if($('.on-main-cyCodeIn2').val() == ''){
			$('.on-tip-box').css('display','block');
		}else{
			$('.on-tip-box').css('display','block');
		}
	})
	
	//当点击输入有误的提示框的X时 让整个提示框隐藏
	$('.on-tip-box-close').click(function(){
		$('.on-tip-box').css('display','none')
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
	$('.on_check2').click(function(){
		$('.on_check3').val('Ab8fd');
	});
	//点击看不清楚时  显示随机验证码
	$('.on_check4').click(function(){
		$('.on_check3').val(checkCode(5));
	});
	
	//验证码是否输入正确
	$('.on-onBun-a').click(function(){
		// 验证手机号码
	var Cnum = $('.on-main-cyCodeIn2').blur(function(){
			// console.log(/^1\d{10}$/.test($('.on-main-cyCodeIn2').val()));
			if(/^1\d{10}$/.test($('.on-main-cyCodeIn2').val())){
				$('.on_check').css('display','block');
				$('.on-tip-box').css('display','none');
			}else if($('.on-main-cyCodeIn2').val() == ''){
				$('.on-tip-box').css('display','block');
			}else{
				$('.on-tip-box').css('display','block');
			}
		})
		// 验证码
	var vCode =	function(){
		if($('.on_check1_t2').val() != $('.on_check3').val()){
				$('.on-checkHides').css('display','block');
			}else{
				$('.on-checkHides').css('display','none');
			}
	}
	vCode();
	var isTrue = /^1\d{10}$/.test($('.on-main-cyCodeIn2').val());
	if(isTrue == true && $('.on_check1_t2').val() == $('.on_check3').val()){
		console.log(123)
		localStorage.setItem('user','12345678');
		location.assign('http://127.0.0.1:8848/item/index.html');
	}
})
	
	
	//当点击密码或者号码有误的提示框的X时 让整个提示框隐藏
	$('.on-checkHides-close').click(function(){
		$('.on-checkHides').css('display','none')
	})
	//当点击电话前缀的时候把值付给前缀的input
	$('.on-main-cyCode-Hidedown-ul li ').click(function(){
		 $('.on-main-cyCodeIn1').val($(this).find('.on-main-cyCode-Hidedown-t2').html());
	})
	// 滑过简体中文是显示 滑出隐藏
	$('.on-footerTop-left-lang').hover(function(){
		$('.on-footerTop-leftHide').css('display','block');
	},function(){
		$('.on-footerTop-leftHide').css('display','none');
	})
	// 滑过微信图标显示
	$('.on-footerTop-righta').hover(function(){
		$('.on-right-w').css('display','block');
	},function(){
		$('.on-right-w').css('display','none');
	})
})
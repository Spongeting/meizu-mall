$(function() {
	// 点击用户中心时出现隐藏的下拉框
	$('.cart-header-userp').hover(function() {
		$('.cart-header-userHide').stop().slideDown();
	}, function() {
		$('.cart-header-userHide').stop().slideUp();
	})
	// 点击添加新地址的时候 弹出 地址框
	$('.address-add1').click(function() {
		$('.address-addTan').stop().show();
	})
	// 点击新增地址的X时 关闭整个对话框
	$('.addTans-header-close').click(function() {
		$('.address-addTan').stop().hide();
	})
	// 输入姓名不正确的时候提示
	$('.name2-In').blur(function() {
		// console.log($('.name2-In').val().length)
		if ($('.name2-In').val().length > 15) {
			$('.name2-Tips').html('输入的姓名长度不正确！');
			$('.name2-Tips').css({
				color: 'red',
				fontSize: '8px'
			})
		} else if ($('.name2-In').val() == '') {
			$('.name2-Tips').html('姓名不能为空！');
			$('.name2-Tips').css({
				color: 'red',
				fontSize: '8px'
			})
		}
	})
	// 输入手机号码不正确时
	// console.log($('.name4-In').val());
	$('.name4-In').blur(function() {
		if (/^1\d{10}$/.test($('.name4-In').val())) {} else if ($('.name4-In').val() == '') {
			$('.name4-Tips').html('手机号码不能为空！');
			$('.name4-Tips').css({
				color: 'red',
				fontSize: '8px'
			})
		} else {
			$('.name4-Tips').html('手机号码输入有误！');
			$('.name4-Tips').css({
				color: 'red',
				fontSize: '8px'
			})
		}
	})
	// 点击对应的对应的li改变背景颜色
	$('.sheng-InHide-ul li').hover(function() {
		$(this).css('background', '#e5d3d3');
	}, function() {
		$(this).css('background', '#fff');
	})
	// 省份时 出现隐藏的省份下拉框
	var isShengIn = false;
	$('.sheng-In').click(function() {
		if (isShengIn) {
			$('.sheng-InHide').stop().hide(100);
			isShengIn = false;
		} else {
			$('.sheng-InHide').stop().show(100);
			isShengIn = true;
		}
	})
	// 点击省份对应的div时 将值付给input
	$('.sheng-InHide-ul li').click(function() {
		$('.sheng-In').val($(this).html());
	})


	// 点击对应的对应的li改变背景颜色
	$('.city-InHide-ul li').hover(function() {
		$(this).css('background', '#e5d3d3');
	}, function() {
		$(this).css('background', '#fff');
	})
	// 点击市区时 出现隐藏的市区下拉框
	var isCityIn = false
	$('.city-In').click(function() {
		if (isShengIn) {
			$('.city-InHide').stop().hide(100);
			isShengIn = false;
		} else {
			$('.city-InHide').stop().show(100);
			isShengIn = true;
		}
	})
	// 点击市区对应的div时 将值付给input
	$('.city-InHide-ul li').click(function() {
		$('.city-In').val($(this).html());
	})


	// 点击对应的对应的li改变背景颜色
	$('.qu-InHide-ul li').hover(function() {
		$(this).css('background', '#e5d3d3');
	}, function() {
		$(this).css('background', '#fff');
	})

	// 点击区乡镇时 出现隐藏的区乡镇下拉框
	var isQuIn = false
	$('.qu-In').click(function() {
		if (isShengIn) {
			$('.qu-InHide').stop().hide(100);
			isShengIn = false;
		} else {
			$('.qu-InHide').stop().show(100);
			isShengIn = true;
		}
	})
	// 点击区乡镇对应的div时 将值付给input
	$('.qu-InHide-ul li').click(function() {
		$('.qu-In').val($(this).html());
	})

	// 点击对应的对应的li改变背景颜色
	$('.zhen-InHide-ul li').hover(function() {
		$(this).css('background', '#e5d3d3');
	}, function() {
		$(this).css('background', '#fff');
	})

	// 点击区乡镇时 出现隐藏的区乡镇下拉框
	var isQuIn = false
	$('.zhen-In').click(function() {
		if (isShengIn) {
			$('.zhen-InHide').stop().hide(100);
			isShengIn = false;
		} else {
			$('.zhen-InHide').stop().show(100);
			isShengIn = true;
		}
	})
	// 点击区乡镇对应的div时 将值付给input
	$('.zhen-InHide-ul li').click(function() {
		$('.zhen-In').val($(this).html());
	})
	//判断详细地址的情况
	$('.addDetails2-In').blur(function() {
		var i = $('.addDetails2-In').val().length;
		console.log(i);
		if (i < 4 || i > 50) {
			$('.addDetails2-Tip').html('地址输入错误！');
			$('.addDetails2-Tip').css({
				color: 'red',
				fontSize: '8px'
			})
		} else {
			$('.addDetails2-Tip').html('');
		}
	})
	// 当点击取消的时候关闭整个对话框
	// $('.addTans-bottom2').click(function(){
	// 	$('.address-addTan').stop().hide();
	// })

	//当点击确认这个对话框是 将整个值传递给新增的地址
	//新建一个li插入到新增地址内

	$('.addTans-bottom1').click(function() {
		var getName = $('.name2-In').val(); //获取收货人姓名
		var getNumber = $('.name4-In').val(); //获取收货人电话
		var getSheng = $('.sheng-In').val(); //获取地址省份
		var getCity = $('.city-In').val(); //获取城市
		var getQu = $('.qu-In').val(); //获取区
		var getZhen = $('.zhen-In').val(); //获取镇
		var getDetails = $('.addDetails2-In').val(); //获取详细地址
		var box = $(
			'<li class="address-add2" >' +
			'<div class="add2-Name">' +
			'<span class="add2-Name1">收货人' + getName + '</span>' +
			'<span class="add2-Name2">' + getNumber + '</span>' +
			'</div>' +
			'<div class="add2-address">' + getSheng + getCity + getQu + getZhen + '</div>' +
			'<div class="add2-remove">X</div>' +
			'</li>'
		)
		$('.address-add1').before(box);
		$('.address-addTan').stop().hide()
	})
	// 点击收货人信息的X时 移除整个div
	$('.address-add').on('click', '.add2-remove', function(e) {
		$(this).parent().remove();
	})
	// 使用回购金是下滑出现
	var isBackmoney = false;
	$('.content1-title').click(function() {
		if (isBackmoney) {
			$('.content1-hide').stop().slideUp();
			isBackmoney = false;
		} else {
			$('.content1-hide').stop().slideDown();
			isBackmoney = true;

		}
	})

	var isKa = false;
	$('.content2-title').click(function() {
		if (isKa) {
			$('.content2-hide').stop().slideUp();
			isKa = false;
		} else {
			$('.content2-hide').stop().slideDown();
			isKa = true;

		}
	})
	//点击更多支付方式的时候
	$('.payTyep2').click(function() {
		$('.payTyep2').css('display', 'none');
		$('.payTyep3').css('display', 'block');
	})
	// 点击分期时
	$('.payTyep1-hide-ul li').click(function() {
		$(this).css({
			color: '#00c3f5',
			borderColor: '#00C3F5'
		}).siblings().css({
			color: '#999',
			borderColor: '#efefef'
		})
	})
	// 点击其他支付方式是 隐藏花呗下拉框
	$('.pay-main-type').find('#other').click(function() {
		$('.payTyep1-hide').css('display', 'none');
	})
	$('.pay-main-type').find('.payTyep1').click(function() {
		$('.payTyep1-hide').css('display', 'block');
	})
	// 当点击时出现对应的银行卡的详细信息
	$('.pay-main2-content-ul li').click(function() {
		$('.main2-contentHide .contentHide1').css('display', 'none');
		$('.main2-contentHide').css('display', 'block');
		$('.main2-contentHide .contentHide1').eq($(this).index()).css('display', 'block');
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

	// 侧边栏
	//滑过App时，改变app背景色同时显示二维码
	$('.cart-rightLan-App').hover(function() {
		$('.cart-rightLan-App').css('background', '#716b6b');
		$('.cart-rightLan-AppHide').stop().show(100);
	}, function() {
		$('.cart-rightLan-App').css('background', '#d8d8d8');
		$('.cart-rightLan-AppHide').stop().hide(100);
	})

	//侧边栏的滚动事件
	$(window).scroll(function() {
		var newScroll = $(document).scrollTop();
		if (newScroll >= 500) {
			$('.cart-rightLan').css({
				display: 'block',
				position: 'fixed',
				bottom: '100px'
			});
		} else {
			$('.cart-rightLan').css('display', 'none');
		}
	})
})

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
	$('.index-nav-selfs').hover(function() {
		// 滑过
		$('.index-nav-selfs-ul').stop().slideDown(100);
	}, function() {
		$('.index-nav-selfs-ul').stop().slideUp(100);
	})
	//滚动事件
	$(window).scroll(function() {
		var newScroll = $(document).scrollTop();
		if (newScroll >= 200) {
			$('.details-scroHide').css({
				display: 'block',
				position: 'fixed',
				top: '0'
			});
		} else {
			$('.details-scroHide').css('display', 'none');
		}
	})
	// 右侧的盒子 点击li 出现对应的大图片 
	$('.details-boothSm li').click(function() {
		//console.log($('.details-boothBig img'))
		//$('.details-boothBig img').eq($(this).index()).css('display','block').siblings().css('display','none');
		$(this).parent().siblings().find('img').eq($(this).index()).css('display', 'block').siblings().css('display',
			'none');
	})

	// 点击满减活动 优惠券后面的标签时 显示领取优惠券界面
	$('.details-left-sellPriceDiscount2').click(function() {
		$('.details-left-sellHide').css('display', 'block');
	})
	// 当点击X时 关闭领取优惠券界面
	$('.details-left-sellHide-close').click(function() {
		// console.log(1111)
		$('.details-left-sellHide').css('display', 'none');
	})
	// 点击型号时 变换字体颜色和边框颜色
	$('.details-left-type3-content span').click(function() {
		$(this).css({
			color: '#000',
			borderColor: '#000'
		}).siblings().css({
			color: '#595959',
			borderColor: '#bfbfbf'
		});
		// 点击颜色时 改变右边图片
		$('.details-rightOne').find('.details-boothImg').eq($(this).index()).stop().show().siblings().stop().hide();
	})

	// 点击内存大小改变颜色
	$('.details-left-type4-content1').click(function() {
		$(this).css({
			color: '#000',
			borderColor: '#000'
		}).siblings().css({
			color: '#595959',
			borderColor: '#bfbfbf'
		});
	})

	$('.details-left-type5-span').click(function() {
		$(this).css({
			color: '#000',
			borderColor: '#000'
		}).siblings().css({
			color: '#595959',
			borderColor: '#bfbfbf'
		});
	})
	// 点击套餐出现对应的赠品
	console.log($('.details-left-type5-contentHide'))
	$('.details-left-type5-span').click(function() {
		$('.details-left-type5-contentHide').find('div').eq($(this).index()).stop().show().siblings().stop().hide();
	})
	// 点击花呗改变边框颜色
	$('.details-left-type-huabei-content1').click(function() {
		$(this).css('border-color', '#000').siblings().css('border-color', '#bfbfbf')
	})
	// 当减少商品数量时 最小要等于1 最大等于3
	$('.details-left-buyCount-content1').click(function() {
		if (i > 1) {
			i--;
			$('.details-left-buyCount-content2').html(i);
		}
	})
	$('.details-left-buyCount-content3').click(function() {
		if (i < 3) {
			i++;
			$('.details-left-buyCount-content2').html(i);
		}
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
})

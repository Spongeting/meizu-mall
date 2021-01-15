
$(function(){
	// 点击用户中心时出现隐藏的下拉框
	$('.cart-header-userp').hover(function(){
		$('.cart-header-userHide').stop().slideDown();
	},function(){
		$('.cart-header-userHide').stop().slideUp();
	})
	// 购物车
	var cartList = [
			{
				proId: 1,
				price:3699,
				msg1:'魅族 17',
				msg2:'全网通公开版 AG梦幻独角兽 8+128GB',
				count:1,
				totalPrice:3699,
				img:'cart1.png'
			},
			{
				proId: 2,
				price:3699,
				msg1:'魅族 17',
				msg2:'全网通公开版 十七度灰 8+128GB',
				count:1,
				totalPrice:3699,
				img:'cart2.png'
			},
			{
				proId: 3,
				price:129,
				msg1:'魅族 EP3C 耳机',
				msg2:'白色',
				count:1,
				totalPrice:129,
				img:'cart3.png'
			},
			{
				proId: 4,
				price:299,
				msg1:'魅族防飞溅声波电动牙刷',
				msg2:'白色',
				count:1,
				totalPrice:299,
				img:'cart4.png'
			},
		];
		
	cartList.map(function(item) {
		$(`<div class="cart-list">
			<div>
				<input type="checkbox" name=""  class="cart-listCheckbox" />
			</div>
			<div class = 'cartListInfo'>
				<a href="details.html" target="_blank" class="cartListInfo-a">
					<img src="./img/cart/${item.img}" class="cartListInfo-img">
				</a>
				<a href="details.html" target="_blank" id = 'cartListInfoP'>
					<p class="cartListInfoP1">${item.msg1}</p>
					<p class="cartListInfoP2">${item.msg2}</p>
				</a>
			</div>
			<div class = 'cartListPrice'>${item.price}.00元</div>
				<div class = 'cartListCount'>
					<div class = 'cartListCountWid'>
						<p type="button" class = 'cartListCountRe'>-</p>
						<input type="" name="" class = 'cartListCountVal' value="${item.count}" />
						<p type="button"  class = 'cartListCountAdd'>+</p>
					</div>
				</div>
				<div>
					<span  class = 'cartListAllPrice'>${item.totalPrice}.00元</span>
				</div>
				<div class = 'cartListModify'>删除</div>
			</div>`
		).appendTo($('.cart-mains'));
	})
	
	//计算
	var goodsSelect = []
	var count=0;
		//单个商品的复选框点击事件
	$('.cart-listCheckbox').click(function(){
		//可以获取当前元素在class的index
		var index = $('.cart-listCheckbox').index(this);
		if( this.checked ){
			count++;
			goodsSelect.push(cartList[index]);
			$('#cartSelectNum').html('已选择'+goodsSelect.length+'件商品');
		}else{
			count--;
			var i = goodsSelect.indexOf(cartList[index]);
			goodsSelect.splice(i, 1);
			$('#cartSelectNum').html('已选择'+goodsSelect.length+'件商品');
			// console.log(goodsSelect.length);
		}
			//当全选泽时，全选框的状态改为true
		if( count == cartList.length ){
			$('#cart-listAll')[0].checked = true;
		}else {
			$('#cart-listAll')[0].checked = false;
		}
		//
		//改变总价结算的方法
		console.log()
		changeTotalPrice();
	});
		//全选的复选框点击事件
	$('#cart-listAll').click(function(){
		console.log(this.checked)
		if( this.checked ){
			$('.cart-listCheckbox').prop('checked', true);
			goodsSelect = cartList.concat();
		} else {
			$('.cart-listCheckbox').prop('checked', false);
			goodsSelect = [];
		}
		changeTotalPrice();
		$('#cartSelectNum').html('已选择'+cartList.length+'商品');
	})
		//- 的点击事件
	$('.cartListCountRe').click(function(){
		//通过index传this下标得到this为第几个class
		var index = $('.cartListCountRe').index(this);
		cartList[index].count--;
		//不操作数组，直接dom操作，从dom获取数据
		if( cartList[index].count <= 0 ){
			cartList[index].count = 0
		}
		$('.cartListCountVal').eq(index).val(cartList[index].count);
		OneGoodsPrice(index);
		changeTotalPrice();
	})
	
	//+ 的点击事件
	$('.cartListCountAdd').click(function(){
		//通过index传this下标得到this为第几个class
		var index = $('.cartListCountAdd').index(this);
		cartList[index].count++;
		//如果有最大库存就判断
		// if( cartList[index].count <= 0 ){
		// 	cartList[index].count = 0;
		// }
		$('.cartListCountVal').eq(index).val(cartList[index].count);
		OneGoodsPrice(index);
		changeTotalPrice();
	});
	
	
	//点击删除按键
	$('.cartListModify').click(function(){
		var index = $('.cartListModify').index(this);
		//js remove（）
		$('.cart-list')[index].remove();
		var i = goodsSelect.indexOf(cartList[index]);
		if(i>-1){
			goodsSelect.splice(i, 1);
		}
		cartList.splice(index, 1);
		changeTotalPrice();
	})
	
	//单个商品的总价
	function OneGoodsPrice(index){
		cartList[index].totalPrice = cartList[index].count * cartList[index].price;
		$('.cartListAllPrice').eq(index).html(cartList[index].totalPrice);
	}
	
	//把选中的购物车里面的单价和数量算出总价
	function changeTotalPrice(){
		var total = 0;
		for(var i = 0; i < goodsSelect.length; i++ ){
			total += goodsSelect[i].totalPrice;
		}
		$('#cartTotalP').html(total);
	}
	
	// 尾部
	$('.index-footers2-rightImg2').hover(function(){
		$('.index-footers2-rightImg1').stop().show(100);
	},function(){
		$('.index-footers2-rightImg1').stop().hide(100);
	})
	$('.index-footers2-rightImg4').hover(function(){
		$('.index-footers2-rightImg3').stop().show(100);
	},function(){
		$('.index-footers2-rightImg3').stop().hide(100);
	})
	
	// 侧边栏
	//滑过App时，改变app背景色同时显示二维码
	$('.cart-rightLan-App').hover(function(){
		$('.cart-rightLan-App').css('background','#716b6b');
		$('.cart-rightLan-AppHide').stop().show(100);
	},function(){
		$('.cart-rightLan-App').css('background','#d8d8d8');
		$('.cart-rightLan-AppHide').stop().hide(100);
	})
	
	//侧边栏的滚动事件
	$(window).scroll(function(){
		var newScroll = $(document).scrollTop();
		if(newScroll >= 500){
			$('.cart-rightLan').css({
				display:'block',
				position:'fixed',
				bottom:'100px'
			});
		}else{
				$('.cart-rightLan').css('display','none');
		}
	})
})
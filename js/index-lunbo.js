$(function() {
	var timer = null;
	var imgShow = 0; //图片下标
	var itemWidth = 1349;
	var imgCount = $('#clickShow div').length;
				
	//定时器
	timer=setInterval(imgMove,2000);
				
	function imgMove(){
	//如果最后一张就是第0张否则就+1
		if(imgShow < $('#clickShow div').length-1){
			imgShow++;
		}else{
			imgShow = 0;
		}
		$('#imgShow div').eq(imgShow).fadeIn(1000);
		if(imgShow == 0){
			$('#imgShow div').eq(length-1).fadeOut(1000);
		}else{
			$('#imgShow div').eq(imgShow-1).fadeOut(1000);
		}
	};
	//点击改变背景图
	$('#clickShow div').click(function(e) {
		clearInterval(timer);
		imgShow = $(this).index();
		$('#imgShow div').fadeOut(1000);
		$('#imgShow div').eq(imgShow).fadeIn(1000);
		changeImgShow();
	});
	
	$('#banner').eq(0).mouseover(function(){
		clearInterval(timer);
	})	;
	$('#banner').eq(0).mouseout(function(){
			timer=setInterval(imgMove,2000);
		});			
	//提出方法，显示当前图片，和下面方块
	function changeImgShow(){
		$('#clickShow div').css({
			background: '#999'
		});
		$('#clickShow div').eq(imgShow).css({
			background: '#000'
		})
	}
})
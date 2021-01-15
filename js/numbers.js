$(function(){

	var numArr = [
		{
			img1:'number-main1.png',
			img2:'number-main8.png',
			img3:'number-main9.png',
			img4:'number-main10.png',
			imgs1:'number-main2.png',
			title1:'月白',
			imgs2:'number-main3.png',
			title2:'乌金',
			imgs3:'number-main4.png',
			title3:'天青',
			imgs4:'number-main5.png',
			title4:'月白天青',
			tip1:'魅族 17 Pro',
			tip2:'【限时6期免息 每月716起 | 购机赠壳膜套装】高通骁龙 865 + UFS 3.1 + LPDDR5 | 6400W 全场景 AR 专业影像系统 | 煅烧陶瓷机身 | mSmart 5G 快省稳系统方案',
			tip3:'￥',
			tip4:'4299'
		},
		{
			img1:'number-main11.png',
			img2:'number-main12.png',
			img3:'number-main13.jpg',
			img4:'number-main14.jpg',
			img5:'number-main15.jpg',
			imgs1:'number-main5.png',
			title1:'AG梦幻独角兽',
			imgs2:'number-main6.png',
			title2:'松深入墨',
			imgs3:'number-main7.png',
			title3:'十七度灰',
			imgs4:'number-main3.png',
			title4:'AG星际灰',
			imgs5:'number-main6.png',
			title5:'AG原野绿',
			tip1:'魅族 17',
			tip2:'【限时6期免息 每月616起 | 购机赠壳膜套装】高通骁龙 865 | UFS 3.1 高速闪存 | 6400W 全场景影像系统 | 重量平衡设计 | mSmart 5G 快省稳系统方案 | 30W有线超充',
			tip3:'￥',
			tip4:'3699'
		},
		{
			img1:'number-main12.png',
			img2:'number-main13.jpg',
			img3:'number-main11.png',
			img4:'number-main14.jpg',
			img5:'number-main15.jpg',
			imgs1:'number-main6.png',
			title1:'松深入墨',
			imgs2:'number-main7.png',
			title2:'AG星际灰',
			imgs3:'number-main5.png',
			title3:'AG梦幻独角兽',
			imgs4:'number-main3.png',
			title4:'AG星际灰',
			imgs5:'number-main6.png',
			title5:'AG原野绿',
			tip1:'【联通5G套餐】魅族 17',
			tip2:'【购魅族17赠全新壳膜套装 | 联通5G资费套餐享50%补贴】高通骁龙 865 | UFS 3.1 高速闪存 | 6400W 全场景影像系统 | 重量平衡设计 | mSmart 5G 快省稳系统方案 | 30W有线超充',
			tip3:'￥',
			tip4:'3699'
		},
		{
			img1:'number-main8.png',
			img2:'number-main1.png',
			img3:'number-main9.png',
			img4:'number-main10.png',
			imgs1:'number-main3.png',
			title1:'十七度灰',
			imgs2:'number-main2.png',
			title2:'月白',
			imgs3:'number-main4.png',
			title3:'天青',
			imgs4:'number-main5.png',
			title4:'月白天青',
			tip1:'【联通5G套餐】魅族 17 Pro',
			tip2:'【限时领券立省200 | 联通5G资费套餐享50%补贴】高通骁龙 865 | UFS 3.1 高速闪存 | 6400W 全场景影像系统 | 重量平衡设计 | mSmart 5G 快省稳系统方案 | 30W有线超充',
			tip3:'￥',
			tip4:'4299'
		},
		{
			img1:'number-main9.png',
			img2:'number-main8.png',
			img3:'number-main1.png',
			img4:'number-main10.png',
			imgs1:'number-main4.png',
			title1:'天青',
			imgs2:'number-main3.png',
			title2:'十七度灰',
			imgs3:'number-main2.png',
			title3:'月白',
			imgs4:'number-main5.png',
			title4:'月白天青',
			tip1:'【超值套餐】魅族 17 Pro',
			tip2:'【听觉盛宴 超值套餐】高通骁龙 865 + UFS 3.1 + LPDDR5 | 6400W 全场景 AR 专业影像系统 | 煅烧陶瓷机身 | mSmart 5G 快省稳系统方案',
			tip3:'￥',
			tip4:'4548'
		},
		{
			img1:'number-main8.png',
			img2:'number-main1.png',
			img3:'number-main9.png',
			img4:'number-main10.png',
			imgs1:'number-main3.png',
			title1:'十七度灰',
			imgs2:'number-main2.png',
			title2:'月白',
			imgs3:'number-main4.png',
			title3:'天青',
			imgs4:'number-main5.png',
			title4:'月白天青',
			tip1:'【老用户专享】魅族 17 Pro',
			tip2:'【限时6期免息 | 老用户专享 18个月超长保修】5G旗舰 | 高通骁龙 865 + UFS 3.1 + LPDDR5',
			tip3:'￥',
			tip4:'4299'
		},
		{
			img1:'number-main14.jpg',
			img2:'number-main12.png',
			img3:'number-main13.jpg',
			img4:'number-main11.png',
			img5:'number-main15.jpg',
			imgs1:'number-main3.png',
			title1:'AG星际灰',
			imgs2:'number-main6.png',
			title2:'松深入墨',
			imgs3:'number-main7.png',
			title3:'十七度灰',
			imgs4:'number-main5.png',
			title4:'AG梦幻独角兽',
			imgs5:'number-main6.png',
			title5:'AG原野绿',
			tip1:'【老用户专享】魅族 17',
			tip2:'【限时6期免息 | 购魅族17赠全新壳膜套装 | 老用户专享 18个月超长保修】5G旗舰  |  高通骁龙 865 + UFS 3.1 高速闪存  |  6400W 全场景影像系统',
			tip3:'￥',
			tip4:'3699'
		},
		{
			img1:'number-main16.png',
			img2:'number-main10.png',
			img3:'number-main11.png',
			img4:'number-main9.png',
			imgs1:'number-main4.png',
			title1:'天青',
			imgs2:'number-main5.png',
			title2:'月白天青',
			imgs3:'number-main5.png',
			title3:'AG梦幻独角兽',
			imgs4:'number-main2.png',
			title4:'天青',
			tip1:'魅族 17 Pro 晓芳窑艺术典藏版',
			tip2:'这艺术 科技极了',
			tip3:'￥',
			tip4:'9999'
		},
		{
			img1:'number-main17.png',
			img2:'number-main13.jpg',
			img3:'number-main15.jpg',
			img4:'number-main12.png',
			imgs1:'number-main3.png',
			title1:'AG星际灰',
			imgs2:'number-main7.png',
			title2:'十七度灰',
			imgs3:'number-main6.png',
			title3:'AG原野绿',
			imgs4:'number-main6.png',
			title4:'松深入墨',
			tip1:'魅族 17 航母限定版',
			tip2:'高通骁龙 865 + UFS 3.1 高速闪存 | 6400W 全场景影像系统 | 定制三星 Super AMOLED 90 帧直屏 | 4500mAh 超大电池 + 30W 快充 | 智能全功能 NFC',
			tip3:'￥',
			tip4:'4299'
		},
		{
			img1:'number-main18.png',
			img2:'number-main20.png',
			img3:'number-main22.png',
			img4:'number-main12.png',
			imgs1:'number-main19.png',
			title1:'极光紫',
			imgs2:'number-main21.png',
			title2:'湖光绿',
			imgs3:'number-main23.png',
			title3:'日光橙',
			imgs4:'number-main6.png',
			title4:'极光绿',
			imgs5:'number-main6.png',
			tip1:'魅族 16T',
			tip2:'6.5英寸极边全面屏 | 骁龙855旗舰处理器 | 4500mAh续航怪兽 | UFS 3.0 高速闪存 | 「双」·立体声扬声器 | 超广角 AI 三摄 | 线性振动马达 | 全球频段',
			tip3:'￥',
			tip4:'1999'
		},
		{
			img1:'number-main24.png',
			img2:'number-main26.png',
			img3:'number-main28.png',
			img4:'number-main30.png',
			imgs1:'number-main25.png',
			title1:'黑之谧镜',
			imgs2:'number-main27.png',
			title2:'梦幻独角兽',
			imgs3:'number-main29.png',
			title3:'暮光森林',
			imgs4:'number-main31.png',
			title4:'白色物语',
			tip1:'魅族 16s Pro',
			tip2:'高通骁龙 855 Plus  | 索尼 4800W 像素超广角 AI 三摄 | 极边全面屏 | Flyme8 尝鲜体验 | 极速屏下指纹 | 全功能NFC',
			tip3:'￥',
			tip4:'2699'
		},
		{
			img1:'number-main32.png',
			img2:'number-main34.png',
			img3:'number-main36.png',
			img4:'number-main38.png',
			imgs1:'number-main33.png',
			title1:'骑士黑',
			imgs2:'number-main35.png',
			title2:'亚特兰蒂斯',
			imgs3:'number-main37.png',
			title3:'珊瑚橙',
			imgs4:'number-main39.png',
			title4:'冰丝白',
			tip1:'魅族 16Xs',
			tip2:'极边全面屏 | 4800W AI三摄 | 疾速屏下指纹 | 4000mAh大电池 | 高通骁龙675 | Onemind 3.0 | 绚丽多彩新色系',
			tip3:'￥',
			tip4:'1499'
		},
		{
			img1:'number-main40.png',
			img2:'number-main26.png',
			img3:'number-main30.png',
			img4:'number-main38.png',
			imgs1:'number-main39.png',
			title1:'凝光白',
			imgs2:'number-main27.png',
			title2:'梦幻独角兽',
			imgs3:'number-main31.png',
			title3:'白色物语',
			imgs4:'number-main39.png',
			title4:'冰丝白',
			tip1:'魅族 16s 白夜童话限量礼盒',
			tip2:'以梦为马 乘风破浪',
			tip3:'￥',
			tip4:'3099'
		},
		{
			img1:'number-main41.png',
			img2:'number-main42.png',
			img3:'number-main43.png',
			img4:'number-main26.png',
			imgs1:'number-main25.png',
			title1:'骑士黑',
			imgs2:'number-main29.png',
			title2:'幻影蓝',
			imgs3:'number-main39.png',
			title3:'凝光白',
			imgs4:'number-main27.png',
			title4:'梦幻独角兽',
			tip1:'魅族 16s',
			tip2:'高通骁龙855 | 4800W光学防抖 | 对称式AMOLED全面屏 | 极速屏下指纹 | 全功能NFC',
			tip3:'￥',
			tip4:'2699'
		},
		{
			img1:'number-main44.png',
			img2:'number-main45.png',
			img3:'number-main46.png',
			img4:'number-main26.png',
			imgs1:'number-main3.png',
			title1:'幻黑',
			imgs2:'number-main35.png',
			title2:'星耀蓝',
			imgs3:'number-main39.png',
			title3:'皓白',
			imgs4:'number-main27.png',
			title4:'梦幻独角兽',
			tip1:'魅族 Note9',
			tip2:'骁龙675 | 后置4800万 | 前置2000万 | 独家定制水滴设计全面屏 | 4000mAh大容量电池 | 18W mCharge快充 ',
			tip3:'￥',
			tip4:'1199'
		},
		{
			img1:'number-main47.png',
			img2:'number-main48.png',
			img3:'number-main49.png',
			img4:'number-main50.png',
			imgs1:'number-main33.png',
			title1:'曜黑',
			imgs2:'number-main52.png',
			title2:'灰蓝',
			imgs3:'number-main51.png',
			title3:'烟紫',
			imgs4:'number-main53.png',
			title4:'焰红',
			tip1:'魅族 Note8',
			tip2:'骁龙632 | 6.0 英寸全面屏 | 3600mAh 大电池 | mCharge 快充加持 | Dual PD 全像素双核对焦 |人脸指纹双解锁',
			tip3:'￥',
			tip4:'999'
		},
		{
			img1:'number-main54.png',
			img2:'number-main55.png',
			img3:'number-main56.png',
			img4:'number-main26.png',
			imgs1:'number-main25.png',
			title1:'亮黑',
			imgs2:'number-main31.png',
			title2:'玉白',
			imgs3:'number-main35.png',
			title3:'幻蓝',
			imgs4:'number-main27.png',
			title4:'梦幻独角兽',
			tip1:'魅族 X8',
			tip2:'骁龙710 | 6.2寸定制浅刘海屏 | 89.6%屏占比 | 旗舰双摄 | 人脸+指纹双解锁',
			tip3:'￥',
			tip4:'1298'
		},
		{
			img1:'number-main57.png',
			img2:'number-main58.png',
			img3:'number-main46.png',
			img4:'number-main41.png',
			imgs1:'number-main3.png',
			title1:'磨砂黑',
			imgs2:'number-main2.png',
			title2:'纯白',
			imgs3:'number-main39.png',
			title3:'皓白',
			imgs4:'number-main25.png',
			title4:'骑士黑',
			tip1:'魅族 V8 标配版',
			tip2:'5.7英寸HD+全面屏 智能美颜',
			tip3:'￥',
			tip4:'799'
		},
		{
			img1:'number-main59.png',
			img2:'number-main61.png',
			img3:'number-main62.png',
			img4:'number-main63.png',
			imgs1:'number-main52.png',
			title1:'灰蓝',
			imgs2:'number-main60.png',
			title2:'雅金',
			imgs3:'number-main33.png',
			title3:'曜黑',
			imgs4:'number-main51.png',
			title4:'烟紫',
			tip1:'魅族 V8 高配版',
			tip2:'Helio P22 处理器 | 5.7 英寸全面屏 | 后置双摄组合 | 双色温双闪光灯 | 人脸+指纹双解锁',
			tip3:'￥',
			tip4:'898'
		},
		{
			img1:'number-main64.png',
			img2:'number-main65.png',
			img3:'number-main66.png',
			img4:'number-main67.png',
			img5:'number-main68.png',
			imgs1:'number-main33.png',
			title1:'曜石黑',
			imgs2:'number-main31.png',
			title2:'汝窑白',
			imgs3:'number-main60.png',
			title3:'晨曦金',
			imgs4:'number-main52.png',
			title4:'云山蓝',
			imgs5:'number-main51.png',
			title5:'烟晶紫',
			tip1:'魅族 16 X',
			tip2:'骁龙710 | 屏幕下指纹 | 对称式全面屏 | 前置2000万像素 + AI人脸识别 | 后置索尼2000万像素双摄 + 光学防抖',
			tip3:'￥',
			tip4:'1598'
		},
		{
			img1:'number-main69.png',
			img2:'number-main70.png',
			img3:'number-main71.png',
			img4:'number-main77.png',
			imgs1:'number-main39.png',
			title1:'静夜白',
			imgs2:'number-main33.png',
			title2:'静夜黑',
			imgs3:'number-main29.png',
			title3:'极光蓝',
			imgs4:'number-main60.png',
			title4:'香槟金',
			tip1:'魅族 16th Plus',
			tip2:'骁龙845 | 屏幕下指纹 | 前后2000万像素摄像头 | 6.5英寸屏幕 | 4×4 MIMO 天线 | mEngine | 超线性双扬声器',
			tip3:'￥',
			tip4:'2698'
		},
		{
			img1:'number-main70.png',
			img2:'number-main69.png',
			img3:'number-main71.png',
			img4:'number-main77.png',
			imgs1:'number-main33.png',
			title1:'静夜黑',
			imgs2:'number-main39.png',
			title2:'远山白',
			imgs3:'number-main29.png',
			title3:'极光蓝',
			imgs4:'number-main60.png',
			title4:'香槟金',
			tip1:'魅族 16th',
			tip2:'骁龙845 | 屏幕下指纹 | 前后2000万像素摄像头 | 6.0英寸屏幕 | mEngine | 超线性双扬声器 |  铜管散热',
			tip3:'￥',
			tip4:'2298'
		},
		{
			img1:'number-main72.png',
			img2:'number-main74.png',
			img3:'number-main75.png',
			img4:'number-main70.png',
			imgs1:'number-main33.png',
			title1:'曜石黑',
			imgs2:'number-main60.png',
			title2:'香槟金',
			imgs3:'number-main73.png',
			title3:'珊瑚红',
			imgs4:'number-main33.png',
			title4:'静夜黑',
			tip1:'魅蓝 6T',
			tip2:'双摄全面屏，游戏长续航',
			tip3:'￥',
			tip4:'799'
		},
		{
			img1:'number-main76.png',
			img2:'number-main77.png',
			img3:'number-main78.png',
			img4:'number-main70.png',
			imgs1:'number-main33.png',
			title1:'玄武灰',
			imgs2:'number-main60.png',
			title2:'雅金',
			imgs3:'number-main73.png',
			title3:'砚墨',
			imgs4:'number-main33.png',
			title4:'静夜黑',
			tip1:'魅族 15 Plus',
			tip2:'三星8895处理器 2000万暗光双摄',
			tip3:'￥',
			tip4:'1798'
		},
		{
			img1:'number-main79.png',
			img2:'number-main80.png',
			img3:'number-main81.png',
			img4:'number-main69.png',
			imgs1:'number-main33.png',
			title1:'砂砾黑',
			imgs2:'number-main60.png',
			title2:'砂砾金',
			imgs3:'number-main73.png',
			title3:'朱雀红',
			imgs4:'number-main39.png',
			title4:'远山白',
			tip1:'魅族 M15',
			tip2: '骁龙626 前置2000万AI智能美颜',
			tip3:'￥',
			tip4:'1398'
		},
		{
			img1:'number-main82.png',
			img2:'number-main83.png',
			img3:'number-main84.png',
			img4:'number-main85.png',
			imgs1:'number-main33.png',
			title1:'曜黑',
			imgs2:'number-main60.png',
			title2:'雅金',
			imgs3:'number-main52.png',
			title3:'黛蓝',
			imgs4:'number-main2.png',
			title4:'汝窑白',
			tip1:'魅族 15',
			tip2:'骁龙660 | 2000万暗光双摄 | 3倍无损变焦 | mEngine触感引擎 | 立体声扬声器',
			tip3:'￥',
			tip4:'1498'
		},
		{
			img1:'number-main86.png',
			img2:'number-main87.png',
			img3:'number-main88.png',
			img4:'number-main85.png',
			imgs1:'number-main60.png',
			title1:'香槟金',
			imgs2:'number-main33.png',
			title2:'曜石黑',
			imgs3:'number-main52.png',
			title3:'丹青',
			imgs4:'number-main2.png',
			title4:'汝窑白',
			tip1:'魅蓝 E3',
			tip2:'骁龙636处理器 全系6G大运存',
			tip3:'￥',
			tip4:'1799'
		},
		{
			img1:'number-main89.png',
			img2:'number-main90.png',
			img3:'number-main91.png',
			img4:'number-main92.png',
			imgs1:'number-main60.png',
			title1:'香槟金',
			imgs2:'number-main33.png',
			title2:'磨砂黑',
			imgs3:'number-main31.png',
			title3:'月光银',
			imgs4:'number-main52.png',
			title4:'淡钴蓝',
			tip1:'魅蓝 S6',
			tip2:'Exynos 7872疾速游戏芯片 侧面指纹解锁',
			tip3:'￥',
			tip4:'999'
		}
	];
	for(var i = 0; i<numArr.length;i++){
		$(							
			`<li>
				<a href="details.html" class="number-lists-a">
					<div class="number-lists-imgs">
						<img src="./img/number/${numArr[i].img1}" class="number-lists-Oneimg1" style="display: block;" >
						<img src="./img/number/${numArr[i].img2}" class="number-lists-Oneimg1" >
						<img src="./img/number/${numArr[i].img3}" class="number-lists-Oneimg1" >
						<img src="./img/number/${numArr[i].img4}" class="number-lists-Oneimg1" >
					</div>
					<ul class="number-lists-Onecolor">
						<li>
							<img src="./img/number/${numArr[i].imgs1}" class="number-lists-Oneimg2" title="${numArr[i].title1}" >
						</li>
						<li>
							<img src="./img/number/${numArr[i].imgs2}" class="number-lists-Oneimg3" title="${numArr[i].title2}">
						</li>
						<li>
							<img src="./img/number/${numArr[i].imgs3}" class="number-lists-Oneimg4" title="${numArr[i].title3}">
						</li>
						<li>
							<img src="./img/number/${numArr[i].imgs4}" class="number-lists-Oneimg5" title="${numArr[i].title4}">
						</li>
					</ul>
					<h3 class="number-lists-OneTip1">${numArr[i].tip1}</h3>
					<p class="number-lists-OneTip2">${numArr[i].tip2}</p>
					<p class="number-lists-OneTip3">
					<i class="number-lists-OneTip3-i1">${numArr[i].tip3}</i>
						${numArr[i].tip4}
					</p>
				</a>
			</li>`
		).appendTo($('.number-lists-ul'))
		
		
		if(numArr[i].imgs5 && numArr[i].img5){
			$(`
				<li>
					<img src="./img/number/${numArr[i].imgs5}" class="number-lists-Oneimg5" title="${numArr[i].title5}">
				</li>
			`).appendTo($('.number-lists-Onecolor')[i]);
			
			$(`
				<img src="./img/number/${numArr[i].img5}" class="number-lists-Oneimg1" >
			`).appendTo($('.number-lists-imgs')[i]);
		}
	}
	//思路：首先当划过对应的li的时候 显示四个按钮 离开隐藏
	 $('.number-lists-ul li').hover(function(){
		$(this).find('.number-lists-a ul').css('opacity','1');
	},function(){
		$(this).find('.number-lists-a ul').css('opacity','0');
	});
	
	//思路 找到所有小按钮 点击那个让他对应的图片下标变为那个
	$('.number-lists-Onecolor li').hover(function(){
		$(this).parent().siblings().find('img').eq($(this).index()).stop().show().siblings().stop().hide();
	})
	
	// 
	// main下的选项卡
	$('.number-recoBun span').click(function(){
		$('.number-recoBox-list ul').eq($(this).index()).stop().show().siblings().stop().hide();
		$(this).css('background','#999').siblings().css('background','#fff');
	})
	//当鼠标滑过li时 让图片放大
	$('.number-recoBox-list ul li').hover(function(){
		$(this).find('img').css('transform','scale(1.2,1.2)');
	},function(){
		$(this).find('img').css('transform','scale(1,1)');
	})
})	
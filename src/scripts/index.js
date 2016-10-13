//js的入口文件

//引入zepto
var $ = require('./components/zepto-modules/_custom');
//console.log($)

//引入iscroll
var IScroll=require('./components/iscroll/iscroll.js');
$('.swiper-container').show();
$('#mainContent').hide();

$('#aBtn').on('tap',function(){
	$('.swiper-container').hide();
	$('#mainContent').show();
	//需要进行post请求，然后请求/api/skill,并且将数据列表显示在iscroll上
	$.post('/api/skill', function(response){
		var html='';
		for(var i=0;i<response.length;i++){
			html+='<li>'+response[i].name+'</li>';
		}
		$('#scroller ul').html(html);


    	//console.log(response)
    	//调用iscroll
		myScroll = new IScroll('#wrapper', { mouseWheel: true, tap: true });
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
 	});

	//调用iscroll
	//myScroll = new IScroll('#wrapper', { mouseWheel: true, tap: true });
	//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
})

//引入swiper

var Swiper=require('./components/swiper/swiper-3.3.1.min.js');

//打印文件
//console.log(Swiper)

//引入swiper动画
var SwiperAnimate=require('./components/swiper/swiper.animate1.0.2.min.js');

var mySwiper = new Swiper ('.swiper-container', {
	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	  SwiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
	  SwiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
	}, 
	onSlideChangeEnd: function(swiper){ 
	  SwiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	} 
})  


$('#footer .footer_con li').on('tap',function(){
	var apiTarget = $(this).attr('id');
	$.post('/api/'+apiTarget, function(response){
		var html='';
		console.log(apiTarget)
		if(apiTarget === 'skill'){
			for(var i=0;i<response.length;i++){
				html+="<li class='icon-arrow'><div class='pic_icon'><div class='picon_border'><img src="+response[i].images+"></div></div><div class='pic_txt'><span>"+response[i].category+"</span><span>"+response[i].name+"</span><span>"+response[i].time+"</span><span>"+response[i].level+"</span></li>";
			}
		}else if(apiTarget === 'project'){
			for(var i=0;i<response.length;i++){
				html+="<li class='icon-arrowPro'><div class='iconPro-top'><div class='left'><div class='left-border'><img src="+response[i].image+"></div></div><div class='right'><span>"+response[i].category+"</span><span>"+response[i].name+"</span><a>"+response[i].url+"</a></div></div><div class='iconPro-bottom'><span>"+response[i].description+"</span><span>"+response[i].detail+"</span><span>"+response[i].tech+"</span></div></li>";
			}
		}else if(apiTarget === 'work'){
			for(var i=0;i<response.length;i++){
				html+="<li class='icon-arrowWor'><div class='pic_icon'><div class='picon_border'><img src="+response[i].images+"></div></div><div class='pic_txt'><span>"+response[i].category+"</span><span>"+response[i].name+"</span><span>"+response[i].time+"</span><span>"+response[i].level+"</span></li>";
			}
		}else if(apiTarget === 'like'){
			for(var i=0;i<response.length;i++){
				html+="<li class='icon-arrowLik'><div class='pic_icon'><div class='picon_border'><img src="+response[i].images+"></div></div><div class='pic_txt'><span>"+response[i].category+"</span><span>"+response[i].name+"</span><span>"+response[i].time+"</span><span>"+response[i].level+"</span></li>";
			}
		}else if(apiTarget === 'mine'){
			for(var i=0;i<response.length;i++){
				html+="<li class='icon-arrowMin'><div class='pic_icon'><div class='picon_border'><img src="+response[i].images+"></div></div><div class='pic_txt'><span>"+response[i].category+"</span><span>"+response[i].name+"</span><span>"+response[i].time+"</span><span>"+response[i].level+"</span></li>";
			}
		}
		
		$('#scroller ul').html(html);

    	//调用iscroll
		myScroll = new IScroll('#wrapper', { mouseWheel: true, tap: true });
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
 	});
})

var interval = setInterval(function(){
	if(document.readyState === 'complete'){
		clearInterval(interval);
		$('#preload').hide();
		$('.swiper-container').show();
		mySwiper.updateContainerSize();
		mySwiper.updateSlidesSize();
	}else {
		$('#preload').show();
	}
},1000)



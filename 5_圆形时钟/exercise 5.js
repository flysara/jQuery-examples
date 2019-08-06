
	$(function(){
		
		var date=new Date();//获取时间
		var seconds=date.getSeconds();
		var mins=date.getMinutes();
		var hours=date.getHours();
		//设置秒针
		setInterval(function(){
			var secdeg=seconds*6;//每一秒秒针走过的读数是6°
			
			//给秒针块添加旋转度数属性
			$("#sechand").css({
					"-moz-transform":"rotate("+secdeg+"deg)",
					"-webkit-transform":"rotate("+secdeg+"deg)",
					"transform":"rotate("+secdeg+"deg)"
				});
			},1000);//设置时间间隔，每一秒执行
		
		//设置分针
		setInterval(function(){
			var mindeg=mins*6;//每一分分针走过的读数是6°
			
			//给分针块添加旋转度数属性
			$("#minhand").css({
					"-moz-transform":"rotate("+mindeg+"deg)",
					"-webkit-transform":"rotate("+mindeg+"deg)",
					"transform":"rotate("+mindeg+"deg)"
				});
			},1000);//设置时间间隔，每一分执行
		
		
		//设置时针
		setInterval(function(){
			
			var hourdeg=(hours%12)*30+mins/2;//时针走过的读数是它本身加上分针的二分之一.二分之一是这样来的：30/60*分钟数就是度数
			
		//给时针块添加旋转度数属性
			$("#hourhand").css({
				"-moz-transform":"rotate("+hourdeg+"deg)",
				"-webkit-transform":"rotate("+hourdeg+"deg)",
				"transform":"rotate("+hourdeg+"deg)"
			});
		},1000);//设置时间间隔，每一分执行
		
	});
$(document).ready(function(){
	var stt= 0;
	starImg = $("img.img-slider:first").attr("stt");
	endImg = $("img.img-slider:last").attr("stt");
	$("img.img-slider").each(function(){
		if($(this).is(':visible')){
			stt = $(this).attr("stt");
		}
	});
	$("#next").click(function(){
		if(stt==endImg){
			stt=-1;

		}
		next=++stt;
		$("img.img-slider").hide();
		$("img.img-slider").eq(next).show();

	});
	$("#prev").click(function(){
		if(stt==0){
			stt=endImg;
			prev= stt++;
		}	
		prev=--stt;
		$("img.img-slider").hide();
		$("img.img-slider").eq(prev).show();
	});

	setInterval(function(){
		$("#next").click();
	},3000);

});

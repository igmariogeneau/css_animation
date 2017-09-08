$(function() {
	"use strict";
	$(".animation").mouseover(function() {
		$(".bloc1").css("animation", "bloc1 0.5s forwards linear");	
		$(".bloc2").css("animation", "bloc2 1s forwards linear");
		$(".bloc3").css("animation", "bloc3 1.5s forwards linear");	
	});
	$(".animation").mouseout(function() {
		$(".bloc3").css("animation", "bloc3R 1.5s backwards linear");	
		$(".bloc2").css("animation", "bloc2R 1s backwards 0.5s linear");
		$(".bloc1").css("animation", "bloc1R 0.5s backwards 1s linear");
	});
});

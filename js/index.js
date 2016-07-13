$(document).ready(
	function(){
		$(".choose a").each(function(index,elem){
		$(this).click(function(){
				$(".choose li").removeClass("choosed");
				$(".choose li").eq(index).addClass("choosed");
				$(".choose i").removeClass("rankingIcon");
				$(".choose i").eq(index).addClass("rankingIcon");
			})
		});
		$(".choose input").focus(function(){
			$(".priceRange").css("background","#fff");
			$("#chooseSure").css("display","inline-block");
		})
		$("#chooseSure").click(function(){
			$(".priceRange").css("background","#F4F5F7");
			$(this).css("display","none");
		})
	var closeShare = document.getElementById("closeShare");
	var slideBar = document.getElementsByClassName("slideWrap")[0];
	closeShare.onclick = function(){
		slideBar.style.display = "none";
	}
	}
);
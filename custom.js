$(document).ready(function() {
	$("#nav").click(function(){
		$("h1").animate({
		//opacity: "50%",
		fontSize: "200%",
		margin: "35% 0 0 0"
		}, 1500);
		$("#nav").animate({
		//opacity: "50%",
		fontSize: "100%",
		}, 1500);
	});
	$("#nav").on('click', 'span', function() {
		$("#background img").removeClass("opaque");

		var newImage = $(this).index();

		$("#background img").eq(newImage).addClass("opaque");

		$("#nav span").removeClass("selected");
		$(this).addClass("selected");
	});
	/*$("a#link1").click(function() {
			$("#background").css("background", "url(img/image_1.jpg) no-repeat center center fixed");
			$("#background").css("-webkit-background-size", "cover");
			$("#background").css("-moz-background-size", "cover");
			$("#background").css("-o-background-size", "cover");
			$("#background").css("background-size", "cover");
		});
	$("a#link2").click(function() {
			$("#background").css("background", "url(img/image_2.jpg) no-repeat center center fixed");
			$("#background").css("-webkit-background-size", "cover");
			$("#background").css("-moz-background-size", "cover");
			$("#background").css("-o-background-size", "cover");
			$("#background").css("background-size", "cover");
		});
	$("a#link3").click(function() {
			$("#background").css("background", "url(img/image_3.jpg) no-repeat center center fixed");
			$("#background").css("-webkit-background-size", "cover");
			$("#background").css("-moz-background-size", "cover");
			$("#background").css("-o-background-size", "cover");
			$("#background").css("background-size", "cover");
		});
	$("a#link4").click(function() {
			$("#background").css("background", "url(img/image_4.jpg) no-repeat center center fixed");
			$("#background").css("-webkit-background-size", "cover");
			$("#background").css("-moz-background-size", "cover");
			$("#background").css("-o-background-size", "cover");
			$("#background").css("background-size", "cover");
		});
	$("a#link5").click(function() {
			$("#background").css("background", "url(img/image_5.jpg) no-repeat center center fixed");
			$("#background").css("-webkit-background-size", "cover");
			$("#background").css("-moz-background-size", "cover");
			$("#background").css("-o-background-size", "cover");
			$("#background").css("background-size", "cover");
		});
	$("a#link6").click(function() {
			$("#background").css("background", "url(img/image_6.jpg) no-repeat center center fixed");
			$("#background").css("-webkit-background-size", "cover");
			$("#background").css("-moz-background-size", "cover");
			$("#background").css("-o-background-size", "cover");
			$("#background").css("background-size", "cover");
		});*/
});
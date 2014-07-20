/*jshint
	browser: true, node: false, smarttabs: true,
	nonew: true, asi: true, maxcomplexity: 8,
	unused: true, undef: true, funcscope: true,
	laxcomma: true, multistr: true, devel: true
*/
/*globals
	$:false
*/
$(document).ready(function() {
	$("#content").addClass("open")
})

$(".menu").on("click", ".nav-menu", function() {
	toggleMenu()
})

var toggleMenu = function toggleMenu () {
	var $menu = $(".navigation")
	  , $content = $("#content")
	if($menu.hasClass("open")) {
		$menu.removeClass("open")
		$content.addClass("open")
	} else {
		$menu.addClass("open")
		$content.removeClass("open")
	}
}
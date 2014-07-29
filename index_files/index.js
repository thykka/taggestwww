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
	var locHash = document.location.hash
	if(locHash !== ""){
		scrollToElement(locHash)
	} else {
		indicate(".page")
	}
})

$(".menu").on("click", ".nav-menu", function() {
	toggleMenu()
})
$(".menu").on("click", ".nav-item", function(evt) {
	evt.preventDefault()
	var $target = $(evt.target)
	var hit = $target.closest("a").attr("href")
	if(hit !== undefined) { // clicks at .a
		scrollToElement(hit)
		toggleMenu()
	} else { // clicks at .nav-item
		if($target.hasClass("nav-item")) {
			hit = $target.children("a").attr("href")
			scrollToElement(hit)
		}
	}
})
$(window).on("scroll", function() {
	var scrollTop = $("html").scrollTop() +
		$(".nav-item.current").position().top +
		$(".nav-menu").height()
		, page = null
		, elementTop
	$(".page").each(function(e, el) {
		elementTop = $(el).position().top
		page = (elementTop <= scrollTop ) ? el : page
	})
	indicate(page)
})
var indicate = function indicate (element) {
	var navItem = null
	$(".nav-item a").each(function(e, el){
		navItem = (
			$(el).attr("href") == "#" + $(element).attr("id")
		) ? $(el).parent() : navItem;
	})
	if(navItem !== null) {
		$(".nav-item").each(function(e, el){
			$(el).removeClass("current")
		})
		$(navItem).addClass("current")
	}
}
var scrollToElement = function scrollToElement (element) {
	$("html,body").animate({
		scrollTop: Math.round($(element).position().top)
	}, { duration: 300, ease: "easeout" } )
	indicate(element)
}
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
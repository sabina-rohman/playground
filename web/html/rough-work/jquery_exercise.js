$("div").css("background", "purple");

$(".highlight").css("width", "200px");

$("#third").css("border", "3px solid orange");

$("div:first-of-type").css('color', 'pink');

// $("div:first-of-type") is built in css selector
// $("div:first") is a jQuery shortcut . it is bit slower

var styles = {
	fontSize: "40px",
	background: "rgba(34, 160, 88,0.5)",
	border: "3px solid,orange"
}

$('h1').css(styles);
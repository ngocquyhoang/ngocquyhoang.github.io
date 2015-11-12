$(document).ready(function() {
	setHeight();
	setHeightHome();
	ExcontentCenter();
	ExSETHEIGHT();
	$("body").mCustomScrollbar({theme:"dark-thin",scrollButtons:{enable:true}});
	$(".experience-box").mCustomScrollbar({theme:"light-thin",scrollButtons:{enable:true}});
	$('.show-me-button').click(function() {
		homeShow();
	});
});
function  setHeight () {
	var height = $( window ).height();
	$('.container, .about, .experience').height(height);
}
function setHeightHome () {
	var height = $( window ).height();
	$('.home').height(height-79);
}
function homeShow () {
	$('.show-me-button p').hide();
	$('.show-me-button .avatar').show(1000);
	$('.details-me').delay(1000).show(500);
	$('.home .show-me-button').css('background-color','rgba(255,255,255,1.0)');
	$('.details-me .slat-text').delay(1500).show("slide",{direction:'up'}, 1500);
	$('.details-me .name').delay(3000).show("slide",{direction:'right'}, 1500);
	$('.details-me .job-1').delay(4500).show("slide",{direction:'right'}, 1500);
	$('.details-me .job-2').delay(6000).show("slide",{direction:'right'}, 1500);
}
function ExcontentCenter () {
	var width = $(window).width();
	$('.experience-content').css('left',width/2-500);
}
function ExSETHEIGHT () {
	var height_ex = $('.experience-content').height();
	$('.experience-box').height(height_ex);
}

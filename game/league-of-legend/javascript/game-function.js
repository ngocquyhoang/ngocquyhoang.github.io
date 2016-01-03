/*author @ngocquyhoang*/
$(document).ready(function(){
	// show select lever...
	$('.select-lever').delay(1000).slideDown(500, "linear");
	flipCard();
	xxxx();
});
// audio control...
function muteAudio () {
	var control = $(".control-bar .mute i");
	var video = $('.background-video .tristana-dragon');
    video.prop('muted', !video.prop('muted'));
    if (video.prop('muted') == true) {
		control.removeClass('fa-volume-up');
		control.addClass('fa-volume-off');
    } else{
    	control.removeClass('fa-volume-off');
		control.addClass('fa-volume-up');
    };
};
// game control...
function gameControl () {
	$('div.pause-game').slideDown(500, "linear");
	control = $(".control-bar .pause i");
	control.removeClass('fa-pause-circle');
	control.addClass('fa-play-circle');
	// game pause...
};
function resumeGame () {
	$('div.pause-game').slideUp(500, "linear");
	control = $(".control-bar .pause i");
	control.removeClass('fa-play-circle');
	control.addClass('fa-pause-circle');
	// resume game...
}
function startGame (gameLever) {
	// hide select game lever...
	$('.select-lever').slideUp(500, "linear");
	// body...
}
function resetGame () {
	// reset game...
	$('div.pause-game').slideUp(500, "linear");
}
function mainGame () {
	
}
function flipCard () {
	$(".card").flip();
}
function xxxx () {
	$('.game-card .game-card-box .card').click(function() {
	  $(this).addClass("correct");
	});
}
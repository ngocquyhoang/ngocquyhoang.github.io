// on document ready
$(document).ready(function(){
	muteBackgroundAudio();
});
// audio control
function muteBackgroundAudio() {
	var videoAudioControl = $(".audio-control .mute i");
	var videoBackground = $('.background-video .tristana-dragon');
	videoAudioControl.click( function (){
		// mute video
	    videoBackground.prop('muted', !videoBackground.prop('muted'));
	    // change icon
	    if (videoBackground.prop('muted') == true) {
			videoAudioControl.removeClass('fa-volume-up');
			videoAudioControl.addClass('fa-volume-off');
	    } else{
	    	videoAudioControl.removeClass('fa-volume-off');
			videoAudioControl.addClass('fa-volume-up');
	    };
	});
};
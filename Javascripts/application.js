$(document).ready(function() {
	setHeight();
});
$(document).resize(function() {
	setHeight();
});
function  setHeight () {
	var height = $( window ).height();
	$('.home').height(height-79);
}
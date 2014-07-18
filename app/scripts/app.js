$(window).load(function(){
	$('#huh').delay(1000).removeClass('hide');
});

$(document).ready(function(){
	function mouseHover(){
	$('#wrap').on('mouseover', function(){

		var anims = ['on', 'the', 'ball'];

		var ranAnim = Math.floor(Math.random()*anims.length);

		console.log(anims[ranAnim]);

		$('.counter, #dash, .stroke, .arm, .leg').addClass(anims[ranAnim]);
		$('#wrap').off('mouseover');

		setTimeout(function(){
			console.log(anims[ranAnim]);
			$('.counter, #dash, .stroke, .arm, .leg').removeClass(anims[ranAnim]);
			mouseHover();
		}, 5000);

	});
	};
	mouseHover();
});

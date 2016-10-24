var imgArray = [

"https://media.giphy.com/media/q8FtyBZlcNPEI/giphy.gif",
"https://media.giphy.com/media/yCdmeyPCU2b1C/giphy.gif",
"https://media.giphy.com/media/ZJhFJc54MLamY/giphy.gif",
"https://media.giphy.com/media/XN2XJFDrHwCZi/giphy.gif",
"https://media.giphy.com/media/gWaKXZ1X8rHOM/giphy.gif",
"https://media.giphy.com/media/10dSLrHtg2XqU0/giphy.gif",
"https://media.giphy.com/media/XpQ19FA1Ak2kw/giphy.gif",
"https://media.giphy.com/media/3o7aTzMVVDlj57mf9S/giphy.gif",
"https://media.giphy.com/media/3o72EXwxMhN72EAO7C/giphy.gif",
"https://media.giphy.com/media/67S6gC0pQyivC/giphy.gif",

];



$(document).ready(function () {

    // take the array and loop through and add each thumbnail to the thumbs holder
    $.each(imgArray, function (key, value) {

    	$('#imgThumbs').append('<img class="imgthumbitem" id="img-' + key + '" src="' + value + '"/>');

    });
    
    
    
    
	// SETUP THE CLICK FUNCTION FOR THE THUMBNAILS
	$('.imgthumbitem').click(function () {
		var clickedID = $(this).attr('id');
		
		$('.imgthumbitem').removeClass('imgthumbitem-highlight');
		
		$(this).toggleClass('imgthumbitem-highlight');

			// FADE OUT THE MAIN IMAGE DISPLAY AND WHEN BACKGROUND CHANGED FADE BACK IN
			$('#imgDisplay').animate({
				opacity: 0
			}, 200, function () {
				// Animation complete.
				$(this).css('background-image', 'url(' + $('#' + clickedID).attr('src') + ')');
				$('#imgDisplay').animate({
					opacity: 1
				}, 300);
			});
		});
	
	
	if ($(imgArray).length > -1){
		$('#img-0').click();
	};
	
});
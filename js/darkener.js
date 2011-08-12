// credits: richard maloney 2006
function getTintedColor(color, v) {
    if (color.length > 6) {
        color = color.substring(1, color.length)
    }
    var rgb = parseInt(color, 16);
    var r = Math.abs(((rgb >> 16) & 0xFF) + v);
    if (r > 255) r = r - (r - 255);
    var g = Math.abs(((rgb >> 8) & 0xFF) + v);
    if (g > 255) g = g - (g - 255);
    var b = Math.abs((rgb & 0xFF) + v);
    if (b > 255) b = b - (b - 255);
    r = Number(r < 0 || isNaN(r)) ? 0: ((r > 255) ? 255: r).toString(16);
    if (r.length == 1) r = '0' + r;
    g = Number(g < 0 || isNaN(g)) ? 0: ((g > 255) ? 255: g).toString(16);
    if (g.length == 1) g = '0' + g;
    b = Number(b < 0 || isNaN(b)) ? 0: ((b > 255) ? 255: b).toString(16);
    if (b.length == 1) b = '0' + b;
    return "#" + r + g + b;
}

$('#before input').change(function() {
    updateAfterBox();

});

var darkenHeading = "<h1><span style='color: #11cd8a;'>Darken</span><span style='color: #CCC'>My</span>Colour</h1><h2> Enter your hex colour - get a darkened version.</h2>";
var lightenHeading = "<h1><span style='color: #11cd8a;'>Lighten</span><span style='color: #CCC'>My</span>Colour</h1><h2> Enter your hex colour - get a lightened version.</h2>";
var MODE = "lighten";

$('#change-mode').click(function() {
	
	if (MODE == "lighten")
	{
    	$('#color-container header').html(lightenHeading);
    	$('body').css('background', '#CCC');
    	$('#before input, #after').css('border', '10px solid #000');
		$('header h2').css('color', '#000');
		
		MODE = "darken";
	}
	else if (MODE == "darken")
	{
		$('#color-container header').html(darkenHeading);
		$('body').css('background', '#222');
		$('#before input, #after').css('border', '10px solid #FFF');
		$('header h2').css('color', '#f2f2f2');
		
		MODE = "lighten";
	}
	

	updateAfterBox(); 
});

// Tint the before box depending on the MODE
function tintBeforeColor() {
	if (MODE == "lighten")
	{
		return getTintedColor($('#before input').val(), -50);
	}
	else if (MODE == "darken")
	{
		return getTintedColor($('#before input').val(), 50);
	}
}

// Update after box with new background color and text
function updateAfterBox() {

    $('#before input').focus();
    // get tinted colour
    var original = $('#before input').val();
    var tinted = tintBeforeColor();

    // remove #
    tinted = tinted.substring(1, tinted.length);

    $('#after').css('background', '#' + tinted);
    $('#after').css('color', '#' + original);
    $('#after h2').text(tinted);

    $('.color').css('color', '#' + tinted);
}

$(document).ready(function() {

	$('body').css('background', '#666');
    $('#before input').val('11CD8A');
    updateAfterBox();
});

$(function() {
  $('.errors').hide();
  $('input.text-input').css({backgroundColor:"#FFFFFF"});
  $('input.text-input').focus(function(){
    $(this).css({backgroundColor:"#FFF"});
  });
  $('input.text-input').blur(function(){
    $(this).css({backgroundColor:"#FFFFFF"});
  });

  $('textarea.text-input').blur(function(){
    $(this).css({backgroundColor:"#FFFFFF"});
  });
  $('textarea.text-input').focus(function(){
    $(this).css({backgroundColor:"#FFFFFF"});
  });

  $(".button").click(function() {
		// validate and process form
		// first hide any error messages
    $('.errors').hide();
		
	  var firstname = $("input#firstname").val();
		if (firstname == "") {
      $("label#firstname_error").show();
      $("input#firstname").focus();
      return false;
    }
		var surname = $("input#surname").val();
		if (surname == "") {
      $("label#surname_error").show();
      $("input#surname").focus();
      return false;
    }
		var title = $("input#title").val();
		if (title == "") {
      $("label#title_error").show();
      $("input#title").focus();
      return false;
    }
    
    	var content = $("textarea#content").val();
		if (content == "") {
      $("label#content_error").show();
      $("textarea#content").focus();
      return false;
    }
		
		var dataString = 'firstname='+ firstname + '&surname=' + surname + '&title=' + title + '&content=' + content;
		//alert (dataString);return false;
		
		$.ajax({
      type: "POST",
      url: "poster.php",
      data: dataString,
      success: function() {
        $('article').html("<div id='message'></div>");
        $('#message').html("<h2>Message has been successfully submitted!</h2>")
        .hide()
        .fadeIn(1500, function() {});
      }
     });
    return false;
	});
});
runOnLoad(function(){
  $("input#firstname").select().focus();
});

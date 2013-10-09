/* Reverses the characters in the input text*/

var reverseString = function(text){
var result='';
    for (var index=text.length -1; index >= 0; index--){
        result += text[index];
}
    return result;
//  return text.split('').reverse().join('');
    }


$(document).ready(function() {	
	$('.execute-reverse-string').click(function() {
		var text = $('#reverse-input').val(); 
	$('#reverse-output').val(reverseString(text));
	// prevent the form from submitting
		return false;
	});
	$('.reset-reverse-string').click(function() {
	$('#reverse-input, #reverse-output').val(''); 
		return false;
	});
});
	
/*
 * Takes an input array of text items and returns a list of the
 * elements that are longer than length
 */
	
	var filterWordLength = function(list, length) {
    var result = [];
    for(var index = 0; index < list.length; index++) {
    var element = list[index];
    if ((typeof element === 'string') && (element.length > length)) {
    result.push(element);
    }
    }
    return result;
    } 
	
	$(document).ready(function() {
		
	$('.add-filter-string').click(function() { 
		var text = $('#new-filter-string').val();
		if(text) {
			$('.filter-string-list').append('<li>' + text + '</li>');
		}
		return false;
	});	

	//Take Off List / Event (Handler) Delegation  

  $('.filter-string-list').click('li', function(ev) {
    $(ev.target).remove();
  });
  $('.execute-filter-list').click(function() {
    var list = [];
    $('.filter-string-list li').each(function() {
      list.push($(this).text());
    });
    var length = parseInt($('#filter-length').val());
    var results = filterWordLength(list, length);
    $('.filter-results').text(JSON.stringify(results));
  });
});
 




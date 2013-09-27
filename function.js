document.write('<h4>Implementation: Word Count</h4>');

var wordCount = function(text) {
  // \W matches non-word characters, match one or more
  var tokens = text.split(/\W+/);
  // account for empty elements at the start or end of the list
  var count = tokens.length;
  if(tokens[0] === '') {
    count--;
  }
  if(tokens[tokens.length - 1] === '') {
    count--;
  }
  return count;
}

document.write('test 1: ' + wordCount('one two three '));
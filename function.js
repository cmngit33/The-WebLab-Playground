/* Reverse The Order Of A String #1 */
document.write('<h4>Reverse String #1</h4>');

var reverseString = function(text){
var result='';
    for (var index=text.length -1; index >= 0; index--)
        result += text[index];

    return result;         
    }
document.write(reverseString("hello"));
console.log(reverseString("hello"));
//alert(reverse("hello"));


/* Reverse The Order Of A String #2 */
document.write('<h4>Reverse String #2</h4>');

var reverseString = function(text) {
    var result = '';
    for(var index = text.length -1; index >= 0; index--){
        result += text[index];
    }
    return result;
    }
document.write('<p>hello -> ' + reverseString('hello') + '</p>');                        
             


/* Length: Looping Through An Array: Which Ones Are A Particular Length */
/* Take an Input Array of Text Items and returns a List of the 
Elements That Are Longer Than Length  [] Means Array */

document.write('<h4>Looping Through An Array #1</h4>');

var textLength = function(list, length) {
    var result = [];
    for(var index = 0; index < list.length; index++) {
       if(list[index].length > length) {
    result.push(list[index]);
    }
    }
    return result;
}    
    var fragments = [
    "short",
    "longer",
    "a bit longer",
    "much longer"
    ];

console.log(textLength(fragments, 5));
document.write(textLength(fragments, 5));


document.write('<h4>Looping Through An Array #2</h4>');

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
    var testWords = [
    "short",
    "longer",
    "a bit longer",
    "much longer",
    "unbelieveably longer"
    ];
 document.write('<p>7 -> ' + filterWordLength(testWords, 7) + '</p>');




/* Good Morning, Good Afternoon, Good Evening 
Morning is midnight to noon, Afternoon is noon to 5pm, 
Evening is 5 pm to midnight */

document.write('<h4>Good Morning</h4>');

var dateGreeting = function(date) {
    var hours = date.getHours();
    if(hours < 12) {
        return 'Good Morning!';
    }
    else if(hours < 17) {
        return 'Good Afternoon!';
    }    
    else {
        return 'Good Evening!';
    }
}
var morning = new Date(2013, 8, 30, 2, 34);
document.write('<p>' + morning.toString() +
    ' -> ' + dateGreeting(morning) + '</p>');

var afternoon = new Date(2013, 8, 30, 13, 00);
document.write('<p>' + afternoon.toString() +
    ' -> ' + dateGreeting(afternoon) + '</p>');

var evening = new Date(2013, 8, 30, 21, 00);
document.write('<p>' + evening.toString() +
    ' -> ' + dateGreeting(evening) + '</p>');



/* 
* Given a Dollar Amount, Compute the Change Required to tender to Customer,
* Returned Value Looks Like: {"dollar": 1, "quarters": 2, etc }
*/

document.write('<h4>Getting Change</h4>');

var makeChange = function(amount) {
    var change = {};

    var denominations = [
        { name: 'hundreds', value: 10000 },
        { name: 'fifties', value: 5000 },  
        { name: 'twenties', value: 2000 },
        { name: 'tens', value: 1000 },
        { name: 'fives', value: 500 },
        { name: 'ones', value: 100 },
        { name: 'quarters', value: 25 },
        { name: 'dimes', value: 100 },
        { name: 'nickels', value: 5 },
        { name: 'pennies', value: 1 }
    ];    
// convert to pennies to make the math easier
  amount *= 100;
  for(var index = 0; index < denominations.length; index++) {
    var current = denominations[index];
    if(amount >= current.value) {
      var number = parseInt(amount / current.value);
      amount -= number * current.value;
      change[current.name] = number;
    }
  }
return change;
}
document.write('<p>7.23 -> ' + JSON.stringify(makeChange(7.23)) + '</p>');
document.write('<p>1234.56 -> ' + JSON.stringify(makeChange(1234.56)) + '</p>');
    


/* Word Count */
document.write('<h4>Word Count Example</h4>');

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
document.write('test 1: ' + wordCount(' one  two three'));




/* Adding: the First Number to the Second Number*/
document.write('<h4>Fibonacci</h4>');

function fibonacci(size) {   
var first = 0, second = 1, next, count = 2, result = [first, second];    
if(size === 0)     
	return [];   
else if(size === 1)     
	return [0];    

// collect results up to the requested size   
while(count++ < size) {     
	next = first + second;     
	first = second;     
	second = next;     
	result.push(next);   
}     
return result; 
} 

document.write(fibonacci(10));




document.write('<h4>Movie Sort</h4>');

var movies = [
    'The Shawshank Redemption,1994,1043071',
    'The Godfather,1972,732416',
    'The Godfather: Part II,1974,474640',
    'Pulp Fiction,1994,806431',
    'The Dark Knight,2008,1017508',
    '12 Angry Men,1957,255846',
    'Schindler\'s List,1993,528900',
    'The Lord of the Rings: The Return of the King,2003,738931',
    'Fight Club,1999,791186',
    'Star Wars: Episode V - The Empire Strikes Back,1980,503348'
];


/*
 * Takes a formatted list of movies, parses the data, and
 * returns the movies sorted by year released
 */
var movieSort = function(movies) {
  var results = [];
  for(var index = 0; index < movies.length; index++) {
    var items = movies[index].split(',');
    var movie = {
      title: items[0],
      year: parseInt(items[1]),
      votes: parseInt(items[2])
    };
    results.push(movie);
}
var sortMovies = function(lhs, rhs) {
    if(lhs.year < rhs.year) {
        return -1;
        }
    else if(lhs.year > rhs.year) {
        return 1;             
        }
    else if(lhs.votes < rhs.votes) {
        return -1;
    }
    else if(lhs.votes > rhs.votes) {
        return 1;
    }
    else {
        return 0;
    }
  }
  return results.sort(sortMovies);
}
 
document.write('<pre>' +
    JSON.stringify(movieSort(movies), null, ' ') + '</pre>');






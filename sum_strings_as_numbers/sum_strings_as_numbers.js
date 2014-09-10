/*
Description:

Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
*/

function sumStrings(a,b) { 
  console.log('a: ', a, "\nb: ", b);
  if ( a === '' ) a = '0';
  if ( b === '' ) b = '0';
  a = a.split('').reverse();
  b = b.split('').reverse();
  console.log('a: ', a, "\nb: ", b);
  var i = 0, remainder = 0, next, result = [];
  while( i < a.length || i < b.length ){
    next = (parseInt(a[i]) || 0) + (parseInt(b[i]) || 0);
    console.log(a[i], " : ", b[i], " next : ", next);
    if (remainder){ next += 1; remainder = 0 }
    if ( next >= 10 ) {next -= 10; remainder = 1}
    result.push(next.toString());
    i++;
  }
  if (remainder){result.push('1');}
  return result.reverse().join('').replace(/^0+/, '');
}
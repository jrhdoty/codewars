/*Description:

Write a function that returns all of the sublists of a list or Array.

Your function should be pure; it cannot modify its input.

Example:

power([1,2,3]);
// => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
*/

var power = function(arr){
  var set = [];
  var powerSetRec = function(curr, i){
    if ( i >= arr.length ){
      set.push(curr);
      return;
    }
    powerSetRec(curr, i+1);
    var copy = curr.slice(0);
    copy.push(arr[i]);
    powerSetRec(copy, i+1);
  };

  powerSetRec([], 0);
  return set;
};


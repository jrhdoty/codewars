var MinHeap = require('./simple_min_heap_implementation.js').MinHeap;
var expect  = require('chai').expect;

describe("Min Heap", function(){
  var heap;
  var numItems;
  var values;

  beforeEach(function(){
    numItems = 100;
    heap = new MinHeap();
    values = [];
    for ( var i = 0; i < numItems; i++){
      values.push(Math.floor(Math.random()*1000));
    }

    for ( i = 0; i < numItems; i++ ){
      heap.push(values[i]);
    }
  });

  it('should contain all of the pushed items', function(){
    for ( var i = 0; i < numItems; i++){
      expect(heap.heap.indexOf(values[i])).to.not.equal(-1);
    }
  });

  it('should pop items off in the correct order', function(){
    values.sort(function(a, b){if ( a > b) {return 1;} return -1;});
    for ( var i = 0; i < numItems; i++ ){
      expect(heap.pop()).to.equal(values.shift());
    }
  });

});
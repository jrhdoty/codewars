/*
Heap

Heap is a data structure, that takes elements in arbitrary order, and returns them in a sorted order one by one.

Implementing a min heap

In this kata, we will implement a min heap, it is going to have 2 methods:

push

Takes a value and adds it to a heap

pop

Finds the smallest value in the heap, removes it from the heap, and returns it

var heap = new MinHeap();
heap.push(4);
heap.push(1);
heap.push(7);
heap.push(9);
heap.push(2);
console.log( heap.pop()); // 1
console.log( heap.pop()); // 2
console.log( heap.pop()); // 4
console.log( heap.pop()); // 7
console.log( heap.pop()); // 9
Please note that for this kata we do not assess the effiency of your implementation, so anything that acts like a heap will pass the tests.
*/

function MinHeap(){
  this.heap = [];
}

MinHeap.prototype.push = function(val){
  this.heap.push(val);
  
  var idxNew = this.heap.length-1,
      idxParent = this._getParent(idxNew);
      
  while ( true ){
    if ( idxNew === 0 || val > this.heap[idxParent] ) { return;} 
    this._swap(idxNew, idxParent);
    idxNew = idxParent;
    idxParent = this._getParent(idxParent);
  }
};

MinHeap.prototype.pop = function(){
  if (this.heap.length === 0){return;}
  var result = this.heap[0];
  this.heap[0] = this.heap.pop();

  var idx = 0,  
      left = idx+1,
      right = idx+2;

  while( true ){
    if ((this.heap[left] === undefined || 
         this.heap[idx] <= this.heap[left]) && 
       (this.heap[right] === undefined || 
        this.heap[idx] <= this.heap[right])){
      return result;
    } else if (this.heap[right] === undefined || this.heap[left] < this.heap[right]){
      this._swap(idx, left);
      idx = left;
      left = this._getLeftIdx(idx);
      right = this._getRightIdx(idx);
    } else {
      this._swap(idx, right);
      idx = right;
      left = this._getLeftIdx(idx);
      right = this._getRightIdx(idx);
    }
  }
};

MinHeap.prototype._swap = function(idx1, idx2){
  var temp = this.heap[idx1];
  this.heap[idx1] = this.heap[idx2];
  this.heap[idx2] = temp;
};

MinHeap.prototype._getLeftIdx = function(idx){
  return  (idx+1)*2 -1;
};

MinHeap.prototype._getRightIdx = function(idx){
  return (idx+1)*2;
};

MinHeap.prototype._getParent = function(idx){
  if (idx === 0){ return -1; }
  return Math.floor((idx-1)/2);
};

module.exports.MinHeap = MinHeap;
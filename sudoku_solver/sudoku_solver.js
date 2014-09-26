function sudoku(puzzle) {
  //return the solved puzzle as a 2d array of 9 x 9 
}

var preprocess = function(puzzle){
    for ( var i = 0; i < puzzle.length; i++ ){
      for ( var j = 0; j < puzzle.length; j++ ){
        puzzle = puzzle[i][j] === 0 ? new Tile(puzzle[i][j], true) : new Tile(puzzle[i][j], false)
      }
    }
};

var Tile = function(value, mutable){
  this.value = value;
  this.mutable = mutable;
};

var squareViolation = function(puzzle, i, j){
  var mem = {}
    
}


var rowViolation = function(puzzle, i){
  var mem = {};
  for (j = 0; j < puzzle.length; j++){
    if(mem[puzzle[i][j]]) return true;
    if(puzzle[i][j] !== 0) mem[puzzle[i][j]] = true;
  }
  return false;
}

var columnViolation = function(puzzle, i){
  var mem = {};
  for (j = 0; j < puzzle.length; j++){
    if(mem[puzzle[j][i]]) return true;
    if(puzzle[j][i] !== 0) mem[puzzle[j][i]] = true;
  }
  return false;
}
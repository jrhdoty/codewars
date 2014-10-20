/*
The problem

In this kata, you're going write a function called pointInPoly to test if a point is inside a polygon.

Points will be represented as [x,y] arrays.

The polygon will be an array of points which are the polygon's vertices. The last point in the array connects back to the first point.

You can assume:

The polygon will be a valid simple polygon. 
That is, it will have at least three points, none of its edges will cross 
each other, and exactly two edges will meet at each vertex.
In the tests, the point will never fall exactly on an edge of the polygon.
*/

//Return true if point is inside poly, and false if it is not

//let's try ray casting
function pointInPoly(poly, point) {
  var count = 0;
  for (var i = 0; i < poly.length; i++){
    var startSide = poly[i];
    var endSide = poly[(i+1)%poly.length];
    if ( rayIntersection(point, startSide, endSide) ){
      count++;
    } else{
    }
  }
  if (count % 2 === 0){
    return false;
  }
  return true;
}

function rayIntersection(point, start, end){
  var minY, maxY, shifted;
  if (start[1] < end[1]){
    minY = start;
    maxY = end;
  } else {
    maxY = start;
    minY = end;  
  }

  //avoid issue of intersection with a vertex
  if (point[1] === minY[1] || point[1] === maxY[1]){
    shifted = [point[0], point[1]];
    shifted[1]+= 0.000001;
    point = shifted;
  }

  //if above max point or below min point, no intersection
  if (point[1] > maxY[1] || point[1] < minY[1]) {
    return false;
  }

  //if to the left of min point then intersection
  if (point[0] < Math.min(start[0], end[0])) {
    return true;
  }

  //if to the right of max point, then no intersection
  if (point[0] > Math.max(start[0], end[0])) {
    return false;
  }

  //if slope from bottom point to target is less than
  //slope of bottom point to top point, then intersection
  var pointSlope = point[0] !== minY[0] ? (point[1]-minY[1])/(point[0]-minY[0]) : 0;
  var edgeSlope  = maxY[0] !== minY[0] ? (maxY[1]-minY[1])/(maxY[0]-minY[0]) : 0;

  if ( pointSlope > edgeSlope ){
    return  true;
  }
  return false;
}




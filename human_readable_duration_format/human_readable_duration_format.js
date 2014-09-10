function formatDuration (seconds) {
  // Complete this function
  if (seconds === 0) return 'now';
  var years   = units(seconds, 31536000, "year"),
      days    = units(years.remainder, 86400, "day"),
      hours   = units(days.remainder, 3600, "hour"),
      minutes = units(hours.remainder, 60, "minute"),
      secs    = units(minutes.remainder, 1, "second");
  
  var arr = [years, days, hours, minutes, secs];
  arr = arr.filter(function(item){
    return !!item.value;
  });

  var result = arr[0].str;
  if ( arr.length === 1){return result;}

  for ( var i = 1; i < arr.length - 1; i++ ){
    result = result + ", " + arr[i].str;
  }
  result = result + " and " + arr[arr.length-1].str;
  return result;
} 

var units = function(numerator, divisor, unit){
  var result = {};
  result.value = Math.floor(numerator/divisor);
  result.remainder = numerator - result.value*divisor;
  if (result.value === 0){return result;}

  result.str  = ""+result.value+" "+unit;
  if (result.value > 1) result.str = result.str + "s";
  return result;
};

console.log(formatDuration(1));    //"1 second"
console.log(formatDuration(62));   //"1 minute and 2 seconds");
console.log(formatDuration(120));  //"2 minutes");
console.log(formatDuration(3600)); //"1 hour");
console.log(formatDuration(3662)); // "1 hour, 1 minute and 2 seconds");

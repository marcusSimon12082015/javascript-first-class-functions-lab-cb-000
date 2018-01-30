function countdown(callback){
  window.setTimeout(callback,2000);
}
function createMultiplier(multiplierValue){
   return function f(n){ return n * multiplierValue;}
}
function multiplier(multiplierValue,value){
  return multiplierValue * value;
}

var doublerWithBind = multiplier.bind(null,2);
var triplerWithBind = multipler.bind(null,3);

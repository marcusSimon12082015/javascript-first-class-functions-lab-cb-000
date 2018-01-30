function countdown(callback){
  window.setTimeout(callback,2000);
}
function createMultiplier(multiplierValue){
   return function f(n){ return n * multiplierValue;}
}
function multiplier(multiplierValue,value){
  return multiplierValue * value;
}

var doubler = multipler.bind(null,2);
var tripler = multipler.bind(null,3);

var doublerWithBind = doubler;
var triplerWithBind = tripler;

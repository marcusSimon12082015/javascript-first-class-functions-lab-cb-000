function countdown(callback){
  window.setTimeout(callback,2000);
}
function createMultiplier(multiplierValue){
   return function f(n){ return n * multiplierValue;}
}
function multiplier(multiplierValue,value){
  return multiplierValue * value;
}

var doubler = multipler(value);
var tripler = multipler(value);

var doublerWithBind = doubler.bind(null,2);
var triplerWithBind = tripler.bind(null,3);

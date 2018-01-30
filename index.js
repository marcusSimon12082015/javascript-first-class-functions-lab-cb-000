function countdown(callback){
  window.setTimeout(callback,2000);
}
function createMultiplier(multiplierValue){
   return function f(n){ return n * multiplierValue;}
}
function multiplier(multiplierValue,value){
  return multiplierValue * value;
}

function doubler(value){
  return value * 2;
}

function tripler(value){
  return value * 3;
}


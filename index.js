function countdown(callback){
  window.setTimeout(callback,2000);
}
function createMultiplier(multiplierValue){
   return function(n){ console.log(n * multiplierValue)};
}

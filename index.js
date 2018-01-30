function countdown(callback){
  window.setTimeout(callback,2000);
}
function createMultiplier(multiplierValue){
   function(n){ return n * multiplierValue};
}

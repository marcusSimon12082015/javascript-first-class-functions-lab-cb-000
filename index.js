function countdown(callback){
  window.setTimeout(callback,2000);
}
 function createMultiplier(number){
   let doubler = 2;
   return function(){ number * 2};
 }

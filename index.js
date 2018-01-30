function countdown(callback){
  window.setTimeout(callback,2000);
}
function createMultiplier(number){
   return function(n){number * n};
 }

function countdown(callback){
  window.setTimeout(callback,2000);
}
function createMultiplier(number){
   var doubler = function(){ number * 2};
   return doubler;
 }

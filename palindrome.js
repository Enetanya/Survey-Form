
function palindrome(str) {
let sample = str.toLowerCase().split(/\W/).join("").
replace(/_/g,"");
let r = "";
let k = "";
for (let l = 0;l < sample.length;l++){
  r += sample[l];}
for (let l = sample.length-1;l > -1;l--){
  k += sample[l];}
  if ( r === k){ return true;}
  else { return false;}
}

console.log(palindrome(" eye"));
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
   let l = 0;
   let r = letters.length - 1;
    let ans = letters[0]
   while(l<=r){
    let m = Math.floor((l+r)/2);

    if(letters[m]>target){
         ans = letters[m]
        r = m - 1;
    }else{
        l = m+1;
    }

   }

   return ans;
};
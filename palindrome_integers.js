/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x<0){
        return false;
    }
        let orginial = x     
        let reverse = 0;
        while(x != 0){
          reverse = (reverse * 10) + (x % 10);
          x = x/10|0
        }
          return reverse == orginial ? true : false
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
      let n1 = 0;//1,1,2
    let n2 = 1;//1,2,3

    for (let i = 0; i <= n; i++) {
        let n3 = n1 + n2;
        n1 = n2;
        n2 = n3
    }

    return n1;
};
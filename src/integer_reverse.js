/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var sign = '';
    var xArr = x.toString().split('');
    var result = 0;

    if(xArr[0] === '-' || xArr[0] === '+'){
        sign = xArr.splice(0, 1)[0];
    }
    result = xArr.reverse().join('') - 0;
    if(result > Math.pow(2, 31)-1){
        return 0;
    }
    return `${sign}${result}`-0
};

// console.log(reverse(123));
// console.log(reverse(-123));
// console.log(reverse(120));
console.log(reverse(1430000009));
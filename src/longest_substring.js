/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var subStr = '';
    var tempSubStr = '';
    var strArr = [];
    var longestStrLenght = 0;

    for(var i=0; i<s.length; i++){
        subStr = subStr.concat(s[i]);
        tempSubStr = s.slice(i+1);
        
        if(tempSubStr.length > 0){
            for(var j=0; j<tempSubStr.length; j++){
                if(!subStr.includes(tempSubStr[j])){
                    subStr = subStr.concat(tempSubStr[j])
                    if(j === tempSubStr.length-1){
                        strArr.push(subStr);
                        subStr = ''; 
                    }
                }else{
                    strArr.push(subStr);
                    subStr = '';
                    break;
                }
            }
        }else {
            strArr.push(subStr);
        }
    }
    strArr.forEach(e => {
        if(e.length > longestStrLenght){
            longestStrLenght = e.length;
        }
    })
    return longestStrLenght;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('1'));

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var obj = {};

    for(var i=0; i<nums.length;){
        if(obj[nums[i]]){
            nums.splice(i, 1);
        }else{
            obj[nums[i]] = true;
            i++;
        }
    }
    return nums.length;
}

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

// nums.forEach((element, index) => {
//     console.log(element, obj[element])

//     if(obj[element]){
//         nums.splice(index, 1);
//         console.log(nums)
//     }else{
//         obj[element] = true;
//     }
// });
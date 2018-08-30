var twoSum = function(nums, target) {
    var indexArr = [];
    var numsCopy = nums.concat();
    var j;
    
    nums.forEach((ele, i)=>{
        numsCopy.splice(i, 1);
        console.log(numsCopy);
        if(numsCopy.some((data, index)=> {
            j = index;
        
            return data+ele === target
        })){
            indexArr=[j, i]
        }
        numsCopy = nums.concat();
        
    })
    console.log(indexArr);
    return indexArr;

};

twoSum([1,2,3,4], 0);
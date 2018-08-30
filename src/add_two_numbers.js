var addTwoNumbers = function(l1, l2) {
    var obj2Arr = function(obj) {
        var arr = [];
        for(i=obj; obj !== null;) {
            arr.push(obj.val);
            obj = obj.next
        }
   
        return arr;
    }
    var sum = function(arr1, arr2){
        var temp1 = [];
        var temp2 = [];
        var carryNum = 0;
        var carryNumInMax = 0;

        if(arr1.length > arr2.length){
            temp1 = arr1;
            temp2 = arr2;
        }else{
            temp1 = arr2;
            temp2 = arr1; 
        }
        temp1 = temp1.map((data, i) =>{
            data = (data + (temp2[i] || 0)) + carryNum;
            carryNum = parseInt(data/10);
            data = data - carryNum*10;
            if(i === temp1.length-1){
                carryNumInMax = carryNum;
            }
            return data;
        })
        if(carryNumInMax !== 0){
            temp1.push(carryNumInMax);
        }

        return temp1;
    }
    
    var arrFirst = obj2Arr(l1);
    var arrSecond = obj2Arr(l2);
    
    return sum(arrFirst, arrSecond);
};

// console.log(addTwoNumbers([9,2,4,3], [7,5, 6, 4])); //[8, 7, 0, 8]
var test1 = {val: 2, next:{val:4,next:{val: 3, next: null}}}
var test2 = {val: 5, next:{val:6,next:{val: 4, next: null}}}
var result = {val: 7, next:{val:0,next:{val: 8, next: null}}}

var test3 = {val: 3, next:{val:4,next:{val: 3, next: {val: 1, next: {val: 1, next: null}}}}}
var test4 = {val: 8, next:{val:9,next:{val: 9, next: null}}}

var test5 = {val: 1, next:{val:0,next:{val: 0, next: {val:0,next:{val: 0, next: {val:0,next:{val: 0, 
    next: {val:0,next:{val: 0,next: {val:0,next:{val: 0, next: {val:0,next:{val: 0, next: {val:0,next:{val: 0, 
        next: {val:0,next:{val: 0,next: {val:0,next:{val: 0, next: {val:0,next:{val: 0, next: {val:0,next:{val: 0, 
    next: {val:0,next:{val: 1,next: null}}}}}}}}}}}}}}}}}}}}}}}}}
var test6 = {val: 5, next:{val:6,next:{val: 4, next: null}}}
// console.log(addTwoNumbers(test1, test2));
// console.log(addTwoNumbers(test3, test4));
console.log(addTwoNumbers(test5, test6));

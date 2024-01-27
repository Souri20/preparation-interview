// #########Duplicate elements#############

//  list=[2,3,5,6,7,5,5,5,2];

// let res = list.filter((val,index,arr)=>{return arr.indexOf(val)!== index}
// )
// console.log(res)

// #######  MAX MIN ##########3 

// arrNum =[2,3,5,6,72,1,100];

// const maxfunc =(arr)=>{
    
//     let a = arr.reduce((pre,cur)=>{
//         return pre>cur?pre:cur;
//     })
//     return a

// }
// console.log(maxfunc(arrNum))

// ######### second largest value ###########
// let arr = [2,3,4,5,67,4];
// let res =arr.sort()
// console.log(res[res.length-2])
// // second method

// let arrNum = [2,4,56,4,2,100]

// const secondLargest =(arr)=>{
//     let largest = Math.max(...arr)
//     let indexOfLargest = arr.indexOf(largest)
//     arr.splice(indexOfLargest,1)
//     return largestSecond = Math.max(...arr)
// }
// console.log(secondLargest(arrNum))


// ######### splice #############
arr = [2,3,45,64,100.300]
arr.splice(2,1)
console.log(arr)


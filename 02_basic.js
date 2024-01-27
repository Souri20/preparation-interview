// ####### find and filter #########
// const obj =[
//     {'name':'Sourabh','age':25},
//     {'name':'Ram','age':22},
//     {'name':'Rakesh','age':30}

// ] 
// let res = obj.filter((item)=>{
//     return item.age >= 25
// })
// console.log(res)
// let res1 = obj.find((item)=>{
//     return item.age >=25
// })
// console.log(res1)


// ####### missing number in array ############
arr = [1,4,6,8,9,10 ]
// console.log(arr.indexOf(100))
const missingNumber = (arr)=>{
    let smval = Math.min(...arr)
    let bgval = Math.max(...arr)
    let missingvals =[]
    for (i=smval; i<bgval;i++){
        if(arr.indexOf(i)<0){
            missingvals.push(i)
        }
    }
    return missingvals
}
console.log(missingNumber(arr))
// // sum of all elements

// let arr=[2,4,6,43,2]

// let Sum =(arr)=>{
//     let sum =0;
//     arr.forEach((val)=>{
//         sum +=val
//     })
//     console.log(sum)
//     return sum
    
// }
// Sum(arr)


// factorial 

let findFactorial=(num)=>{
    let sum =1
    if(num ===1) {
        return 1
    }else{
   
        for(i=1; i<=num; i++){
            sum = sum *i

        }
    }
    return sum

}


console.log(findFactorial(6))
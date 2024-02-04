// sum of all elements

let arr=[2,4,6,43,2]

let Sum =(arr)=>{
    let sum =0;
    arr.forEach((val)=>{
        sum +=val
    })
    console.log(sum)
    return sum
    
}
Sum(arr)
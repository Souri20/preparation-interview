// // ######## reverse of string ###########

// let str = "    helloworld"
// let spli = str.trim().split("").reverse().join("")
// console.log(spli)


// ###### longest word in sentence #######

// str = "i have been working hard lately"
// let words = str.split(" ")
// let lengthyWord = words[0]
// for (let word= 1; word < words.length ; word++){
//    if(words[word].length > lengthyWord.length){
//     lengthyWord = words[word]
//    } 
// }
// console.log(lengthyWord)

// ######### Palindrom ###########  Arrow function cannot call before function but normal functions can call

// let word = "racecar"
// checkPalindrom(word)
// function checkPalindrom(str){
//     let chekWord = str.split("").reverse().join("")
//     return str === chekWord

// }
// const checkPalindrom =(str)=>{
//         let chekWord = str.split("").reverse().join("")
//         return str === chekWord
// }
// console.log(checkPalindrom(word))


// ### duplicate #######
// let list = [3,5,4,32,2 ,4,4]

// let res = list.filter((val,index,arr)=>{
//     return arr.indexOf(val)!== index
// })
// console.log(res)
// notDupli=[]
// dupli =[]
// for (let i=0; i<list.length ; i++){
//     if(!notDupli.includes(list[i])){
//         notDupli.push(list[i])
//     }
//     else{
//         dupli.push(list[i])
//     }

// }
// console.log(notDupli)

// ### anagram ####################      eg. roop and poor are anagram of eachother
// let words = "poor, roop"
// let newWord1 =""
// let newWord2 =""
// let list = words.split(",")
// list.forEach((val,index)=>{
//     if (index === 0){
//         newWord1 = val.trim().split("").sort().join('')
//     }
//     if (index === 1){
//         newWord2 = val.trim().split("").sort().join('')
//     }
       
// })
// // console.log(newWord1)
// if (newWord1 === newWord2){
//     console.log("true")
// }
// else{
//     console.log("false")
// }
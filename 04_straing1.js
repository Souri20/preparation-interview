//  ######### find how many vowels in string #######

let str = "i love you"
let vowel =['i','o','e','u','a']
count =0;
for(let word of str){
    if (vowel.includes(word)){
        count +=1
    }
}
console.log(count)
// prime number

let checkPrime=(num)=>{
   if(num%2 == 0){
        return false
    }else if ( num>2){
        for(let i=2; i<=num/2; i++ ){
            if(num % i == 0){
                return false
                

            }else{
                return true
            }
        }
    }
}

console.log(checkPrime(19))
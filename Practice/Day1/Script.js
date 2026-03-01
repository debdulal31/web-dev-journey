function evenOrOdd(number){

    if(number%2===0){
        console.log(`The ${number} is even`);
    }else{
        console.log(`The ${number} is odd`)
    }
}

function sumOfNumbers(n){
    let sum=0;
    for(let i=0;i<n;i++){
        sum=sum+i;
    }
    console.log(`The sum of number is ${sum}`);
}
function factorialOfANumber(n){
    let factorial=1;
    for(i=1;i<=n;i++){
        factorial=factorial*i;
    }
    console.log(`The factorial of ${n} is ${factorial}`)

}
// evenOrOdd(10);
// sumOfNumbers(10);
// factorialOfANumber(5);
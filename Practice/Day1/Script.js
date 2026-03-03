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
function reverseTheNumber(number){
    let reverse=0;
    while(number>0){
        let digit=number%10;
        reverse=reverse*10+digit;
        number=Math.floor(number/10);
    }
    console.log(`The reverse of ${number} is ${reverse}`)
}
function primeOrNot(number){
    if(number<=1){
        console.log(`${number} is not prime`);
        return;
    }
    for(i=2;i<number/2;i++){
        if (number%i==0) {
            console.log(`${number} is not a prime number`);
            return;
        }
            
        
    }
    console.log(`${number} is  a prime number`);

}
function largest(a,b){
    if (a===b) {
        console.log("Both are equal")
    }
   else if (a>b) {
        console.log(`${a} is larger than ${b}`);
    }else{
        console.log(`${b} is larger than ${a}`);
    }
}
function largestAmongThreeNumber(num1,num2,num3){
    return (num1>num2?(num1>num3?`${num1} is largest`:`${num3} is largest`):(num2>num3?`${num2} is largest`:`${num3} is largest`))
}
// function secondLargestAmongThree(a,b,c){
//     let max=0;
//     let secondMax=0;
//     if (a>=b) {
//         max=a ;
//         secondMax=b;
//         if (b>=c) {
//             secondMax=b;
//         }
//         else{
//             secondMax=c;
//         }
//     }else if (a>=c) {
//         secondMax=a;
//     }else if(c>=b){

//         secondMax=b;
//     }
//     else{
//         secondMax=c;
//     }
//     console.log(`second larget is ${secondMax}`);
// }

// function secondLargestAmongThree(a, b, c) {

//     if ((a >= b && a <= c) || (a >= c && a <= b)) {
//         return a;
//     }

//     if ((b >= a && b <= c) || (b >= c && b <= a)) {
//         return b;
//     }

//     return c;
// }

function secondLargestAmongThree(a, b, c) {
    let arr = [a, b, c];
    arr.sort((x, y) => y - x);
    return arr[1];
}

// evenOrOdd(10);
// sumOfNumbers(10);
// factorialOfANumber(5);
//reverseTheNumber(1234);
// primeOrNot(21);
// largest(10,20);

// console.log(largestAmongThreeNumber(31,3,7));
// secondLargestAmongThree(3,10,20);
console.log("Second largest is", secondLargestAmongThree(10, 13, 20));
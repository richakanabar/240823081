// const b=7
// if (b%2==0)
// {
//     console.log("number is even")
// }
// else
// {
//     console.log("number is odd")
// }
// console.log("Done..")

//2
// var num1=5
// var num2=10

// if (num1 >= num2)
// {
//     console.log("Num1 is bigger")
// }
// else
// {
//     console.log("Num2 is bigger")
// }

//3
// var year=2020
// if (year%4==0)
// {
//     console.log("Leap Year")
// }
// else
// {
//     console.log("Not a leap year")
// }

//4
// var no=5
// var sum=0
// for(var i=1;i<=no;i++)
// {
//     sum+=i
// }
// console.log("Sum of factorial is:",sum)

//5
// var no=4
// var fact=1
// for(var i=no;i>0;i--)
// {
//     fact*=i
// }
// console.log("Factorail of given number is ",fact)

//6
// var no=3
// for(var i=1;i<=10;i++)
// {
//     console.log("3 *",i,"=",no*i)
// }


//7

// let num1 = 1234;
// let result = num1.toString().split('').reverse().join('');
// console.log(result);

//8 palindrome
// var num = 121;
// var strNum = num.toString();
// var isPalindrome = true; 

// for (var i = 0; i < strNum.length / 2; i++) {
//     if (strNum[i] !== strNum[strNum.length - 1 - i]) {
//         isPalindrome = false;  
//         break;  
//     }
// }

// if (isPalindrome) {
//     console.log('Palindrome');
// } else {
//     console.log('Not Palindrome');
// }


//9 prime
// const num = 11; 
// let isPrime = true;

// if (num <= 1) {
//     isPrime = false; 
// } else {
//     for (let i = 2; i <= num / 2; i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }

// if (isPrime) {
//     console.log(`${num} is a prime number.`);
// } else {
//     console.log(`${num} is not a prime number.`);
// }


//10 count didgits in num
let num = 12345;
let count = 0;

if (num === 0) {
    count = 1; 
} else {
  
    if (num < 0) {
        num = -num;
    }
    while (num > 0) {
        num = (num - (num % 10)) / 10;
        count++;
    }
}
console.log(count)
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

// var num=1234
// var rem,rev=0
// while (num!=0){
//     rem=num%10
//     rev=rev*10+rem
//     num=Math.floor(num/10)
// }
// console.log(rev)

//8 palindrome
// var num=121
// var rem,rev=0
// var sm=num
// while (num!=0){
//     rem=num%10
//     rev=rev*10+rem
//     num=Math.floor(num/10)
// }
// if(sm==rev){
//     console.log("Palindrome:"+rev)
// }
// else{
//     console.log("Not palindrome:"+rev)
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
// let num = 12345
// let count = 0
// while (num!=0){
//     num=Math.floor(num/10)
//     count++
// }
// console.log(count)

//11 sum of digit
// var sum=0,r
// var no=123

// while(no>0){
//     r=no%10
//     sum=sum+r
//     no=Math.floor(no/10)
// }
// console.log(sum)

//12 armstrong
// var num = 153
// var rem=0
// var a=0
// var r=num
// var len=num.toString().length
// while(num!=0){
//     rem=num%10
//     a=a+Math.pow(rem,len)
//     num=Math.floor(num/10)
// }
// if(r==a){
//     console.log("Armstring",a)
// }
// else{
//     console.log("Not armstring",a)
// }


// 13. Generate Fibonacci Series
// Definition: Generate the first n Fibonacci numbers.
// Input: 5
// Output: 0 1 1 2 3
// var num=5
// var a=0
// var b=1
// for(var i=0;i<=5;i++){
//     console.log(a)
//     c=a+b
//     a=b
//     b=c
// }


// 14. Check Vowel or Consonant
// Definition: Determine if a given character is a vowel.
// Input: a
// Output: Vowel
// var input='a'
// var vowels=['a','e','i','o','u','A','E','I','O','U']
// for (var i =0;i<vowels.length;i++)
// {
//     if (input==vowels[i])
//     {
//         console.log("vowel")
//         break;
//     }else{
//         console.log("constant")
//         break;
//     }
// }

// 15. Simple Calculator
// Definition: Perform +, -, *, / between two numbers.
// Input: 4 + 2
// Output: 6

// var input="4 + 2"
// var d=input.split(" ")
// var num1=parseInt(d[0])
// var op=(d[1])
// var num2=parseInt(d[2])

// if(op=="+")     
// {
//     console.log("Addition is :",(num1+num2))
// }
// else if(op=="-")     
// {
//     console.log("Substraction is :",(num1-num2))
// }
// else if(op=="/")     
// {
//     console.log("Division is :",(num1/num2))
// }
// else if(op=="*")     
// {
//     console.log(" Multiplication is :",(num1*num2))
// }
// else if(op=="%")     
// {
//     console.log("Modulus  is :",(num1%num2))
// }

// 16. Find GCD (HCF)
// Definition: Calculate the greatest common divisor of two numbers.
// Input: 20 28
// Output: 4

// var num1=20
// var num2=28
// var div,num=0

// if(num1<num2){
//     num=num1
// }
// else{
//     num=num2
// }
// for(var i=2;i<=num;i++){
//     if(num1%i==0 && num2%i==0){
//         div=i
//     }
// }
// console.log(div)

// 17. Check Perfect Number
// Definition: A number whose sum of divisors equals itself.
// Input: 28
// Output: Perfect
 

// 18. Print All Divisors
// Definition: Display all positive divisors of a number.
// Input: 10
// Output: 1 2 5 10

// 19. Number is Positive, Negative or Zero
// Definition: Check if number is +ve, -ve, or zero.
// Input: -5
// Output: Negative

// 20. Find Power (Exponentiation)
// Definition: Compute a raised to the power b (a^b).
// Input: 2 3
// Output: 8
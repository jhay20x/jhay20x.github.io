function isEvenOrOdd(num) {
    
    if (num % 2 == 0) {
        console.log(`${num} is a Even Number.`);
    }
    else{
        console.log(`${num} is an Odd Number.`);
    }
}

function isNumberOrNot(num) {

    if (isNaN(num)) {
        console.log(`${num} is Not Number.`);
    }
    else{
        console.log(`${num} is a Number.`);
    }
}

function findLargestTwoNumber(num1,num2) {
    
    if (num1 > num2){
        console.log(`${num1} is the largest number.`)
    } 
    else if (num2 > num1){
        console.log(`${num2} is the largest number.`)
    }
    else{
        console.log(`${num1} is equal to ${num2}.`)
    }
}

function findLargestThreeNumber(num1,num2,num3) {

    if ((num1 == num2) && (num1 == num3) && (num2 == num3)){
        console.log(`${num1},${num2},${num3} are all equal numbers.`)
    }
    else if (num1 > num2 && num1 > num3){
        console.log(`${num1} is the largest number.`)
    } 
    else if (num2 > num3){
        console.log(`${num2} is the largest number.`)
    }
    else{
        console.log(`${num3} is the largest number.`)
    }
    
}

function findTriangleType(num1,num2,num3) {

    if ((num1 == num2) && (num1 == num3)){
        console.log(`Equilateral Triangle.`)
    }
    else if ((num1 == num2) || (num2 == num3) || (num1 == num3)){
        console.log(`Isosceles Triangle.`)
    }
    else{
        console.log(`Scalene Triangle.`)
    }
    
}

function checkInRange(num1,num2,num3) {

    if (num1 >= num2 && num1 <= num3){
        console.log(`${num1} is between the range of ${num2} and ${num3}.`)
    }
    else{
        console.log(`${num1} is outside the range of ${num2} and ${num3}.`)
    }
    
}

function evalNumbers(num1,num2,op) {

   if (op == "addition"){
        console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`)
    }    
    else if (op == "subtraction"){
        console.log(`Difference of ${num1} and ${num2} is ${num1 - num2}`)
    }    
    else if (op == "multiplication"){
        console.log(`Product of ${num1} and ${num2} is ${num1 * num2}`)
    }    
    else if (op == "division"){
        console.log(`Quotient of ${num1} and ${num2} is ${num1 / num2}`)
    }    
    else if (op == "modulus"){
        console.log(`Remainder of ${num1} and ${num2} is ${num1 % num2}`)
    }
    else{
        console.log(`${op} is an invalid operation.`)
    }
}

function checkLeapYear(num) {

    if (isNaN(num)){
        console.log(`The input is not a number. Cannot validate.`)
    }
    else if (((num % 4 == 0) && (num % 100 != 0)) || (num % 400 == 0)){
        console.log(`Year ${num} is a leap year.`)
    }
    else{
        console.log(`${num} is not a leap year.`)
    }
}

function findGrade(grade,name) {

    if (name == ""){
        console.log(`Please enter your name first.`)
    }
    else if (grade >= 90 && grade <= 100){
        console.log(`${name}, you have received S grade.`)
    }
    else if (grade >= 80 && grade < 90){
        console.log(`${name}, you have received A grade.`)
    }
    else if (grade >= 70 && grade < 80){
        console.log(`${name}, you have received B grade.`)
    }
    else if (grade >= 60 && grade < 70){
        console.log(`${name}, you have received C grade.`)
    }
    else if (grade >= 50 && grade < 60){
        console.log(`${name}, you have received D grade.`)
    }
    else if (grade >= 40 && grade < 50){
        console.log(`${name}, you have received E grade.`)
    }
    else if (grade >= 0 && grade < 40){
        console.log(`${name}, you have Failed.`)
    }
    else{
        console.log(`Invalid marks of ${grade}`)
    }
}

function findDaysInMonth(month,year) {

    if (month < 1 || month > 12){
        console.log(`Invalid Month of Value ${month}`)
        return
    }

    if (month == 2){
        if(isLeapYear(year)){
            console.log(`The Month has 29 Days.`)
        }
        else{
            console.log(`The Month has 28 Days.`)
        }
    }
    else if (month == 4 || month == 6 || month == 9 || month == 11){
        console.log(`The Month has 30 Days.`)
    }
    else{
        console.log(`The Month has 31 Days.`)
    }
}

function isLeapYear(year){
    return (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
}

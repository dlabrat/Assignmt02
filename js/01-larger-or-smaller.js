//Larger or Smaller?
//Usage: Use simple conditional statements

let oneNum = parseInt(prompt("What is the first number? "))
let secondNum = parseInt(prompt("What is your other number? "))
let winNum

if (oneNum > secondNum){
    winNum = oneNum
    document.write(winNum+" is the larger number.")
}
else if (secondNum > oneNum) {
    winNum = secondNum
    document.write(winNum+" is the larger number.")
}
else {
    document.write("The numbers are equal.")
}
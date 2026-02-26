//The “Grade Assigner” Application
//Usage: Use else if or switch statements

let grade =parseInt(prompt('Enter the student\'s grade: '))
if ((grade<0)||(grade>100)) {
    console.log('Only numbers 0 to 100 are accepted.')
} 
else if (grade >= 90) {
    console.log('You received an A')
}
else if (grade >= 80) {
    console.log('You received an B')
}
else if (grade >= 70) {
    console.log('You received an C')
}
else if (grade>=60) {
    console.log('You received an D')    
}
else {
    console.log('You received an F')
}
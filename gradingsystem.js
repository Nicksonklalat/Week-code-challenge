// Initialize studentMarks with a valid score (between 0 and 100)
let studentScore = 38; // Example score

// Function to determine the grade based on studentMarks
function determineGrade() {
    if (studentScore >= 0 && studentScore <= 100) {
        if (studentScore > 79) {
            console.log('GRADE A');
        } else if (studentScore >= 60) {
            console.log('GRADE B');
        } else if (studentScore >= 50) {
            console.log('GRADE C');
        } else if (studentScore >= 40) {
            console.log('GRADE D');
        } else {
            console.log('GRADE E');
        }
    } else {
        console.log('Invalid Student Score');
    }
}

// Call the grading function to determine and print the grade
determineGrade();

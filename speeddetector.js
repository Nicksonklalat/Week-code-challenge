function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPenaltyPoint = 5;
    const pointsPerKmAboveLimit = 1;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        // Calculate penalty points
        let penaltyPoints = Math.floor((speed - speedLimit) / kmPerPenaltyPoint);
        
        // Print total penalty points
        console.log(`Points: ${penaltyPoints}`);
        
        // Check if license should be suspended
        if (penaltyPoints > 12) {
            console.log("License suspended");
        }
    }
}
checkSpeed(80);  

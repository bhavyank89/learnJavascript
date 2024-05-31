// Logical OR (||)
let aadharCard = prompt("Do You have AadharCard. If yes enter 1. If no enter 0");
let votingCard = prompt("Do You have VotingCard. If yes enter 1. If no enter 0");

//Condition = If a person have either aadharCard or votingCard he enter the club
if (votingCard === 1 || aadharCard === 1) {
    console.log("Your can enter club");
}
else {
    console.log("You cannot enter club");
}
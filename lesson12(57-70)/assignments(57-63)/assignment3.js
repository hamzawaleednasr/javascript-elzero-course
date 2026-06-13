function ageInTime(theAge) {
  if (theAge < 10 || theAge > 100) {
    console.log("Age out of range");
    return;
  }

  console.log(`Months: ${theAge * 12}`);
  console.log(`Weeks: ${theAge * 12 * 4}`);
  console.log(`Days: ${theAge * 12 * 30}`);
  console.log(`Hours: ${theAge * 12 * 30 * 24}`);
  console.log(`Minutes: ${theAge * 12 * 30 * 24 * 60}`);
  console.log(`Seconds: ${theAge * 12 * 30 * 24 * 60 * 60}`);
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

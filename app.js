// let userInput = document.getElementById('date');

// userInput.max = new Date().toISOString().split("T")[0];


// let result = document.getElementById('result');

// function calculateAge() {
//     let birthDate = new Date(userInput.vale);

//     let d1 = birthDate.getDate();
//     let m1 = birthDate.getMonth() + 1; //Cause indexing start from 0 thats why added + 1 to indictae mont 1 is jan
//     let y1 = birthDate.getFullYear();

//     let today = new Date;  //from today to birthdate , for calculation

//     let d2 = today.getDate();
//     let m2 = today.getMonth() + 1;
//     let y2 = today.getFullYear();

//     let d3, m3, y3; //to store the differences
//     y3 = y2 - y1;

//     if (m2 >= m1) {
//         m3 = m2 - m1;
//     }
//     else {
//         y3--;
//         m3 = 12 + m2 - m1;
//     }

//     if (d2 >= d1) {
//         d3 = d2 - d1;
//     }
//     else {
//         m3--;
//         d3 = getDateInMonths(y1, m1) + d2 - d1;
//     }
//     if (m3 < 0) {
//         m3 = 11;
//         y3--;
//     }

//     if (isNaN(y3) || isNaN(m3) || isNaN(d3)) {
//         result.innerHTML = `Please select your DOB`;
//     } else {
//         result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`;
//     }
//     // result.innerHTML=`Yor are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old.`;

// }

// function getDateInMonths(year, month) {
//     return new Date(year, month, 0).getDate();  //this will return the last day of month 
// }


// userInput.addEventListener("click", calculateAge);

let userInput = document.getElementById('date');

userInput.max = new Date().toISOString().split("T")[0];

let result = document.getElementById('result');

function calculateAge() {
  // Get the user's birth date.
  let birthDate = new Date(userInput.value);

  // Get the current date.
  let today = new Date();

  // Calculate the difference between the two dates in years, months, and days.
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth() + 1;
  let ageDays = today.getDate() - birthDate.getDate();

  // If the user's birthday has not passed yet this year, subtract one from the age in years.
  if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
    ageYears--;
  }

  // If the user's birthday has passed this month, but the user has not yet had a birthday this year, subtract one from the age in months.
  if (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate()) {
    ageMonths--;
  }

  // If the age in days is negative, add the number of days in the previous month to the age in days.
  if (ageDays < 0) {
    ageDays += new Date(today.getFullYear(), today.getMonth() - 1, 0).getDate();
    ageMonths--;
  }

  // Display the age to the user.
  result.innerHTML = `You are <span>${ageYears}</span> years, <span>${ageMonths}</span> months, and <span>${ageDays}</span> days old.`;
}

// Add an event listener to the date input field to calculate the age when the user clicks on it.
userInput.addEventListener("click", calculateAge);

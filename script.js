// Sample data for freelancers
const freelancers = [
  { name: "Alice", occupation: "Writer", startingPrice: 30 },
  { name: "Bob", occupation: "Teacher", startingPrice: 50 }
];

const possibleNames = ["Carol", "Dave", "Eve"];
const possibleOccupations = ["Programmer", "Graphic Designer", "Editor"];
const startingPrices = [70, 40, 60];

// Function to render freelancers onto the page
function renderFreelancers() {
  const freelancersList = document.getElementById('freelancersList');
  freelancersList.innerHTML = ''; // Clear the list before rendering new data
  
  freelancers.forEach(freelancer => {
    const freelancerInfo = document.createElement('div');
    freelancerInfo.innerHTML = `
      <p>Name: ${freelancer.name}</p>
      <p>Occupation: ${freelancer.occupation}</p>
      <p>Starting Price: $${freelancer.startingPrice}</p>
    `;
    freelancersList.appendChild(freelancerInfo);
  });
  
  // Update the average price display
  const averagePriceDisplay = document.getElementById('averagePriceDisplay');
  averagePriceDisplay.textContent = `The average starting price is $${calculateAverageStartingPrice()}.`;
}

// Function to calculate average starting price of freelancers
function calculateAverageStartingPrice() {
  const total = freelancers.reduce((acc, freelancer) => acc + freelancer.startingPrice, 0);
  return (total / freelancers.length).toFixed(2);
}

// Function to generate a random freelancer
function generateRandomFreelancer() {
  const name = possibleNames[Math.floor(Math.random() * possibleNames.length)];
  const occupation = possibleOccupations[Math.floor(Math.random() * possibleOccupations.length)];
  const startingPrice = startingPrices[Math.floor(Math.random() * startingPrices.length)];
  
  return { name, occupation, startingPrice };
}

// Interval to add a new freelancer every few seconds
setInterval(() => {
  const newFreelancer = generateRandomFreelancer();
  freelancers.push(newFreelancer);
  renderFreelancers(); // Rerender the freelancers list with the new data
}, 3000); // Every 3 seconds

// Initial render of freelancers on page load
renderFreelancers();


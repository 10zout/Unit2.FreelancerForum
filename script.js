const freelancers = [
  { name: "Alice", occupation: "Writer", startingPrice: 30 },
  { name: "Bob", occupation: "Teacher", startingPrice: 50 }
];

const possibleNames = ["Carol", "Dave", "Eve"];
const possibleOccupations = ["Programmer", "Graphic Designer", "Editor"];
const startingPrices = [70, 40, 60];

function renderFreelancers() {
  const freelancersList = document.getElementById('freelancersList');
  freelancersList.innerHTML = ''; 
  
  freelancers.forEach(freelancer => {
    const freelancerInfo = document.createElement('div');
    freelancerInfo.innerHTML = `
      <p>Name: ${freelancer.name}</p>
      <p>Occupation: ${freelancer.occupation}</p>
      <p>Starting Price: $${freelancer.startingPrice}</p>
    `;
    freelancersList.appendChild(freelancerInfo);
  });
  
  const averagePriceDisplay = document.getElementById('averagePriceDisplay');
  averagePriceDisplay.textContent = `The average starting price is $${calculateAverageStartingPrice()}.`;
}

function calculateAverageStartingPrice() {
  const total = freelancers.reduce((acc, freelancer) => acc + freelancer.startingPrice, 0);
  return (total / freelancers.length).toFixed(2);
}

function generateRandomFreelancer() {
  const name = possibleNames[Math.floor(Math.random() * possibleNames.length)];
  const occupation = possibleOccupations[Math.floor(Math.random() * possibleOccupations.length)];
  const startingPrice = startingPrices[Math.floor(Math.random() * startingPrices.length)];
  
  return { name, occupation, startingPrice };
}

setInterval(() => {
  const newFreelancer = generateRandomFreelancer();
  freelancers.push(newFreelancer);
  renderFreelancers();}, 3000); 

renderFreelancers();


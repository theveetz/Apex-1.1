// Set the base URL of your backend API
const API_BASE_URL = 'http://apex-5.ap-southeast-2.elasticbeanstalk.com/';

// Function to fetch data from the backend API
function fetchData() {
  fetch(`${API_BASE_URL}/api/endpoint`)  // Replace '/api/endpoint' with your actual endpoint
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      // Display the fetched data on the webpage
      document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
      document.getElementById('output').textContent = 'Error fetching data: ' + error.message;
    });
}

// Add an event listener to a button to fetch data when clicked
document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('fetchDataButton').addEventListener('click', fetchData);
});

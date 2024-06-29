const API_BASE_URL = 'http://apex-5.ap-southeast-2.elasticbeanstalk.com';

function fetchData() {
  console.log('Fetch Data button clicked'); // Log when the button is clicked
  fetch(`${API_BASE_URL}/api/endpoint`)  // Replace '/api/endpoint' with your actual endpoint
    .then(response => {
      console.log('Received response', response); // Log the response
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log('Data fetched successfully', data); // Log the fetched data
      document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error); // Log any errors
      document.getElementById('output').textContent = 'Error fetching data: ' + error.message;
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed'); // Log when the DOM is fully loaded
  document.getElementById('fetchDataButton').addEventListener('click', fetchData);
});

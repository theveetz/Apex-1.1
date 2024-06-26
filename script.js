document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const address = document.getElementById('address').value;
    const apiUrl = 'https://your-elastic-beanstalk-url/api/transactions';
    fetch(`${apiUrl}?address=${address}`)
        .then(response => response.json())
        .then(data => {
            let resultHTML = "<h3>Transactions</h3><ul>";
            data.forEach(tx => {
                resultHTML += `<li>${tx.tx_hash}: ${tx.amount}</li>`;
            });
            resultHTML += "</ul>";
            document.getElementById('results').innerHTML = resultHTML;
        });
});

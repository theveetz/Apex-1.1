document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const address = document.getElementById('address').value;
    const apiUrl = 'apex-5.ap-southeast-2.elasticbeanstalk.com ';
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

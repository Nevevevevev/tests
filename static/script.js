function callPython() {
  fetch('/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ a: 5, b: 3 })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('result').innerText = 'Result: ' + data.result;
  })
  .catch(error => console.error('Error:', error));
}

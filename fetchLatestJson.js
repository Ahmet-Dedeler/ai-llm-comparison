const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://raw.githubusercontent.com/BerriAI/litellm/refs/heads/main/model_prices_and_context_window.json'; // Update with the correct URL

https.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    fs.writeFileSync(path.join(__dirname, 'model_prices_and_context_window.json'), data);
    console.log('JSON file has been updated.');
  });
}).on('error', (err) => {
  console.error('Error fetching the JSON file:', err);
});
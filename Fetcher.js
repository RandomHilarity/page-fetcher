const request = require('request');
const consoleInput = process.argv.slice(2);
const fs = require('fs');

const pageFetcher = function() {
  let URL = consoleInput[0];
  let filepath = consoleInput[1];

  request(URL, (error, response, body) => {
    fs.writeFile(filepath, body, () => {
      console.log(`Downloaded and saved ${body.length} bytes to ${filepath}`);
    });
  });
};

pageFetcher();
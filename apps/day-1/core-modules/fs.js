const fs = require('fs');
const path = require('path');

console.log('begin');

const filePath = path.resolve(__dirname, 'fs-demo.txt');

// Read file Sync
// const fileContent = fs.readFileSync('fs-demo.txt', { encoding: 'utf8' });
// console.log('fileContent:', fileContent);

// Read file Async
fs.readFile(filePath, 'utf8', (err, fileContent) => {
  if (err) {
    console.log('Error while reading file.');
    console.log('Error:', err);
    return;
  }

  console.log('fileContent:', fileContent);
});

console.log('end');

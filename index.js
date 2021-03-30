const { readdirSync, rename } = require('fs');
const { resolve } = require('path');
const Crypto = require('crypto');

function randomString(size = 4) {  
  return Crypto
    .randomBytes(size)
    .toString('base64')
    .slice(0, size)
}

for(let folder = 20; folder < 32; folder++) {

  
  // Get path to image directory
  const imageDirPath = resolve(__dirname, `[set ${folder}]`);
  
  // Get an array of the files inside the folder
  const files = readdirSync(imageDirPath);
  
  // Loop through each file that was retrieved
  files.forEach(file => rename(
    imageDirPath + `/${file}`,
    imageDirPath + `/${file}` + randomString() + '.jpg',
    err => console.log(err)
    ));
    
  }
const fs = require('fs');

function fileSize(fileName, cb) {
  if (typeof fileName !== 'string') {
    return process.nextTick(
      cb,
      new TypeError('argument should be error')
      ); // This makes it async
  }

  fs.stat(fileName, (err, stats) => {
    if (err) {
      return cb(err);
    }
    return cb(null, stats.size);
  })
}

// 1. fileSize as async
fileSize(__filename, (err, size) => {
  if (err) {
    throw err;
  }
  console.log(`File ${__filename} size in kb: ${size / 1024}`)
});

// 2. fileSize as async
fileSize(1, (err, size) => {
  if (err) {
    throw err;
  }
  console.log(`File ${__filename} size in kb: ${size / 1024}`)
});

console.log('Hello');
'use strict';

const fs = require('fs');

module.exports = (path, callback) => 
  fs.readFile(
    path,
    (error, dataBuffer) => {
      if (error) return callback(error);
      return callback(null, dataBuffer.toString('utf8'));
    },
  );

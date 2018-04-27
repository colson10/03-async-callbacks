'use strict';

const fileReader = require('./lib/reader');
const logger = require('./lib/logger');

const bobPath = `${__dirname}/assets/bob-ross-quotes.txt`;
const hipsterPath = `${__dirname}/assets/hipster-ipsum.txt`;
const saganPath = `${__dirname}/assets/sagan-ipsum.txt`;

const files = [bobPath, hipsterPath, saganPath];
const resultsArray = [];

const readFileArrayAsync = (fileArray, currentIndex, callback) => {
  if (currentIndex >= fileArray.length) return callback();

  const currentFilePath = fileArray[currentIndex];

  try {
    return fileReader(currentFilePath, (error, data) => {
      if (error) {
        logger.log(logger.ERROR, error);
      }
      resultsArray.push(data);
      readFileArrayAsync(fileArray, currentIndex + 1, callback);
    });
  } catch (error) {
    logger.log(logger.ERROR, error);
    callback(error);
  }
  return undefined;
};

readFileArrayAsync(files, 0, () => {
  logger.log(logger.INFO, 'We have pushed all files to the results array.');
  return resultsArray;
});

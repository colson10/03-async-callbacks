'use strict';

const reader = require('../lib/reader');

describe('reader.test.js', () => {
  test('Should return the text inside the bob ross quotes files', (done) => {
    reader(`${__dirname}/../assets/bob-ross-quotes.txt`, (error, data) => {
      expect(error).toBeNull();
      expect(data).toEqual('Happy trees');
      done();
    });
  });
  test('Should return the text inside the hipster ipsum file', (done) => {
    reader(`${__dirname}/../assets/hipster-ipsum.txt`, (error, data) => {
      expect(error).toBeNull();
      expect(data).toEqual('helvetica drinking vinegar fanny pack');
      done();
    });
  });
  test('Should return the text inside the sagan ipsum file', (done) => {
    reader(`${__dirname}/../assets/sagan-ipsum.txt`, (error, data) => {
      expect(error).toBeNull();
      expect(data).toEqual('Cosmic ocean rogue');
      done();
    });
  });
});

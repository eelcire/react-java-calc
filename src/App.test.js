import React from 'react';
import * as math from 'mathjs'
import axios from 'axios'

test('should compute addition properly', () => {
  const answer = math.evaluate(12 + 11)
  expect(answer).toBe(23);
});

test('should compute subtraction properly', () => {
  const answer = math.evaluate(23 - 8)
  expect(answer).toBe(15);
});

test('should compute multiplication properly', () => {
  const answer = math.evaluate(15 * 5)
  expect(answer).toBe(75);
});

test('should compute division properly', () => {
  const answer = math.evaluate(75 / 10)
  expect(answer).toBe(7.5);
});
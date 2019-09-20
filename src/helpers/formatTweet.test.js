import formatTweet from './formatTweet';

test('formatTweet - returns object from tweet text', () => {
  const text = 'Hello World';
  expect(formatTweet(text)).toEqual({
    html: 'Hello World',
    text: 'Hello World',
  });
});

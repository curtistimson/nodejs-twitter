import Twitter from 'twitter';
import getTweets from './getTweets';

jest.mock('twitter');

beforeEach(() => {
  Twitter.mockClear();
});

it('Ensures Twitter object is called', () => {
  getTweets();
  expect(Twitter).toHaveBeenCalledTimes(1);
});

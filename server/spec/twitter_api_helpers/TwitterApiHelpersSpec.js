const {
  bearerToken,
  getTweets,
  getTweetCount,
  updateTechDoc,
} = require('./../../background_worker/twitter_api_helpers');

const mocks = require('./TwitterApiHelpersMock');

describe('bearerToken', () => {
  it('returns reject promise with undefined key', async () => {
    await expectAsync(bearerToken()).toBeRejected();
    await expectAsync(
      bearerToken(mocks.undefinedKey, mocks.fakeSecret)
    ).toBeRejected();
  });

  it('returns undefined with invalid key', async () => {
    const token = await bearerToken(mocks.fakeKey, mocks.fakeSecret);
    const token2 = await bearerToken(mocks.fakeKey);
    await expectAsync(bearerToken(mocks.fakeKey)).toBeResolved();

    expect(token).toBeUndefined();
    expect(token2).toBeUndefined();
  });

  it('returns valid token with valid key', async () => {
    const token = await bearerToken(mocks.validKey, mocks.validSecret);

    expect(token).toBeTruthy();
  });
});

describe('getTweets', () => {
  afterEach(() => {
    mocks.requestConfig.auth.bearer = undefined;
  });

  it('returns resolved promise with invalid token', async () => {
    await expectAsync(getTweets(mocks.requestConfig)).toBeResolved();
  });

  it('returns tweets when given a valid token', async () => {
    const token = await bearerToken(mocks.validKey, mocks.validSecret);
    mocks.requestConfig.auth.bearer = token;

    const tweets = await getTweets(mocks.requestConfig);

    expect(tweets.meta).toBeTruthy();
  });
});

describe('getTweetCount', () => {
  const mockGetTweets = (string) => {
    return mocks[string];
  };

  fit('returns # of tweets when given a query with no next_token', async () => {
    spyOn(getTweetCount, 'getTweets').and.callFake(mockGetTweets);
    const totalTweets = await getTweetCount('tweets1');

    expect(totalTweets).toEqual(14);
  });

  it('returns total # of tweets when given a query with more than 100 results', () => {
    expect({}).toEqual({});
  });
});

const helpers = require('./../../background_worker/twitter_api_helpers');
const mocks = require('./TwitterApiHelpersMock');

describe('bearerToken', () => {
  it('returns reject promise with undefined key', async () => {
    await expectAsync(helpers.bearerToken()).toBeRejected();
    await expectAsync(
      helpers.bearerToken(mocks.undefinedKey, mocks.fakeSecret)
    ).toBeRejected();
  });

  it('returns undefined with invalid key', async () => {
    const token = await helpers.bearerToken(mocks.fakeKey, mocks.fakeSecret);
    const token2 = await helpers.bearerToken(mocks.fakeKey);
    await expectAsync(helpers.bearerToken(mocks.fakeKey)).toBeResolved();

    expect(token).toBeUndefined();
    expect(token2).toBeUndefined();
  });

  it('returns valid token with valid key', async () => {
    const token = await helpers.bearerToken(mocks.validKey, mocks.validSecret);

    expect(token).toBeTruthy();
  });
});

describe('getTweets', () => {
  afterEach(() => {
    mocks.requestConfig.auth.bearer = undefined;
  });

  it('returns resolved promise with invalid token', async () => {
    await expectAsync(helpers.getTweets(mocks.requestConfig)).toBeResolved();
  });

  it('returns tweets when given a valid token', async () => {
    const token = await helpers.bearerToken(mocks.validKey, mocks.validSecret);
    mocks.requestConfig.auth.bearer = token;

    const tweets = await helpers.getTweets(mocks.requestConfig);

    expect(tweets.meta).toBeTruthy();
  });
});

describe('getTweetCount', () => {
  it('returns # of tweets when given a query with no next_token', async () => {
    const getTweets = jasmine
      .createSpy('getTweets() spy')
      .and.returnValue(mocks.tweets1);
    const totalTweets = await helpers.getTweetCount(
      mocks.requestConfig,
      getTweets
    );
    expect(totalTweets).toEqual(6);
  });
});

// describe('updateTechDoc', () => {
//   beforeEach(async () => {
//     this.javData = await TechModel.find({ name: mocks.techName });
//   });

//   afterEach(async () => {
//     await TechModel.replaceOne(
//       { name: mocks.techName },
//       {
//         counts: this.javData[0].counts,
//         timestamps: this.javData[0].timestamps,
//         name: this.javData[0].name,
//       }
//     );
//   });

//   it('returns an object with mongoose data upon successfully inserting data', async () => {
//     const updatedJavData = await helpers.updateTechDoc(
//       mocks.techName,
//       mocks.tweetCount
//     );

//     expect(updatedJavData.ok).toBe(1);
//   });
// });

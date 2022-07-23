import { NftEntity } from '../entities/nft.entities';
import { InMemoryCollectionProvider } from '../stubs/inmemory-collection.provider';
import { FindMatchingNFT } from './find-matching-nft';
import * as boredApesClubCollectionTenItems from '../stubs/bored-apes-10-items.js';
// import * as boredApesClubCollection from '../stubs/bored-apes-collection.json';

describe('FindMatchingNFT', () => {
  it('should be defined', () => expect(FindMatchingNFT).toBeDefined());
  it('should return an error if not called with an itemId argument', async () => {
    const inMemoryProviderCollection = new InMemoryCollectionProvider([]);
    const findMatchingNFT = new FindMatchingNFT(inMemoryProviderCollection);
    const res = await findMatchingNFT.execute({ itemId: null });

    expect(res.isErr).toBeTruthy();
    expect(res.unwrapErr()).toStrictEqual(
      new Error('you must provide an NFT item id'),
    );
  });
  it('should return the most look alike ape', async () => {
    const itemId = '3478';
    const boredApesClubCollectionTenItemsEntities = (
      boredApesClubCollectionTenItems as []
    ).map(({ id, metadata }) => NftEntity.create({ id, metadata }));
    const inMemoryProviderCollection = new InMemoryCollectionProvider(
      boredApesClubCollectionTenItemsEntities,
    );
    const findMatchingNFT = new FindMatchingNFT(inMemoryProviderCollection);
    const res = await findMatchingNFT.execute({ itemId });
    const expectedResultItemId = '9183';

    expect(res.isOk).toBeTruthy();
    expect(res.unwrap()).toBe(expectedResultItemId);
  });
  it('should return a dictionary with pairs of most look alike apes', () => {
    const boredApesClubCollectionTenItemsEntities = (
      boredApesClubCollectionTenItems as []
    ).map(({ id, metadata }) => NftEntity.create({ id, metadata }));
    const inMemoryProviderCollection = new InMemoryCollectionProvider([]);
    const findMatchingNFT = new FindMatchingNFT(inMemoryProviderCollection);
    const res = findMatchingNFT.getLookAlikeDictionary(
      boredApesClubCollectionTenItemsEntities,
    );

    expect(res).toEqual(
      expect.objectContaining({
        '3478': {
          '239': 1,
          '4486': 1,
          '4883': 1,
          '5109': 1,
          '5496': 3,
          '6619': 4,
          '8288': 2,
          '9183': 5,
          '9319': 1,
        },
      }),
    );
  });
  it('should get the id with the biggest number', () => {
    const dictionary = {
      '239': 1,
      '4486': 1,
      '4883': 1,
      '5109': 1,
      '5496': 3,
      '6619': 4,
      '8288': 2,
      '9183': 5,
      '9319': 1,
    };
    const inMemoryProviderCollection = new InMemoryCollectionProvider([]);
    const findMatchingNFT = new FindMatchingNFT(inMemoryProviderCollection);
    const res = findMatchingNFT.getMostLookAlike(dictionary);

    expect(res).toEqual('9183');
  });
  // it('should return the most look alike ape tt', async () => {
  //   const itemId = '2655';
  //   const boredApesClubCollectionTenItemsEntities = (
  //     boredApesClubCollection as []
  //   ).map(({ id, metadata }) => NftEntity.create({ id, metadata }));
  //   const inMemoryProviderCollection = new InMemoryCollectionProvider(
  //     boredApesClubCollectionTenItemsEntities,
  //   );
  //   const findMatchingNFT = new FindMatchingNFT(inMemoryProviderCollection);
  //   const res = await findMatchingNFT.execute({ itemId });
  //   const expectedResultItemId = '9183';

  //   expect(res.isOk).toBeTruthy();
  //   console.log(res.unwrap())
  // });
});

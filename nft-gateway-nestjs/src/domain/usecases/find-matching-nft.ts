import { Ok, Result, Err } from 'oxide.ts';
import { NftEntity } from '../entities/nft.entities';
import { CollectionProviderPort } from '../ports/collection.provider.port';

export class FindMatchingNFT {
  constructor(private readonly collectionProvider: CollectionProviderPort) {}
  async execute(props: { itemId }): Promise<Result<NftEntity[], Error>> {
    if (!props.itemId) return Err(new Error('you must provide an NFT item id'));

    const nftEntitiesCollection =
      await this.collectionProvider.fetchCollection();

    const foundNftEntity = nftEntitiesCollection.find(
      (nftEntity) => nftEntity.getPropsCopy().id === props.itemId,
    );

    const lookAlikeDictionary = this.getLookAlikeDictionary(
      nftEntitiesCollection,
    );

    const mostLookAlike = this.getMostLookAlike(
      lookAlikeDictionary[foundNftEntity.getPropsCopy().id],
    );

    return Ok(mostLookAlike);
  }

  getLookAlikeDictionary(collection: NftEntity[]) {
    return collection.reduce((acc, nftEntity) => {
      const { id, metadata: metadataRoot } = nftEntity.getPropsCopy();

      acc[id] = collection.reduce((acc1, nft) => {
        const { id: id1, metadata } = nft.getPropsCopy();
        if (id === id1) return acc1;
        acc1[id1] = metadataRoot.attributes.reduce((acc2, attribute) => {
          const found = metadata.attributes.find(
            (e) =>
              e.trait_type === attribute.trait_type &&
              e.value === attribute.value,
          );
          if (found) {
            return (acc2 += 1);
          }
          return acc2;
        }, 0);

        return acc1;
      }, {});
      return acc;
    }, {});
  }

  getMostLookAlike(dictionary) {
    return Object.entries(dictionary).reduce(
      (acc, [key, value]) => {
        if (Number(value) > acc.value) return { id: key, value };
        return acc;
      },
      { id: null, value: 0 },
    ).id;
  }
}

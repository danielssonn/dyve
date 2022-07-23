import { NftEntity } from '../entities/nft.entities';
import { CollectionProviderPort } from '../ports/collection.provider.port';

export class InMemoryCollectionProvider implements CollectionProviderPort {
  collection: NftEntity[];
  constructor(collection) {
    this.collection = collection;
  }

  async fetchCollection() {
    return this.collection;
  }
}

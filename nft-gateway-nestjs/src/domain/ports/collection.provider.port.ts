import { NftEntity } from '../entities/nft.entities';

export interface CollectionProviderPort {
  fetchCollection(): Promise<NftEntity[]>;
}

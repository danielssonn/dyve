import { UUID } from '../../infrastructure/ddd/domain/value-objects/uuid.value-object';
import { Entity } from '../../infrastructure/ddd/domain/base-classes/entity.base';

export interface NftProps {
  id: string;
  metadata: { attributes: { trait_type: string; value: string }[] };
}

export class NftEntity extends Entity<NftProps> {
  public validate(): void {
    return;
  }
  protected readonly _id: UUID;

  static create(create: NftProps): NftEntity {
    const id = UUID.generate();
    const props: NftProps = { ...create };
    const nftEntity = new NftEntity({ id, props });

    return nftEntity;
  }
}

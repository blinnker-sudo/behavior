import { Injectable } from '@nestjs/common';
import { RegisterBehavior } from '../behavior';
import { Behavior, BehaviorContext } from '../contracts';

@Injectable()
@RegisterBehavior('load.catalogs.sat')
export class LoadCatalogsSatBehavior implements Behavior {
  readonly name = 'load.catalogs.sat';

  async execute(_ctx: BehaviorContext): Promise<{ catalogs: string[] }> {
    return { catalogs: ['regimen-fiscal', 'cfdi-uso'] };
  }
}

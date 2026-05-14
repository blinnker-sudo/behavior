import { Injectable } from '@nestjs/common';
import { Behavior, BehaviorContext } from '../contracts';

@Injectable()
export class LoadCatalogsSatBehavior implements Behavior {
  readonly name = 'load.catalogs.sat';

  async execute(_ctx: BehaviorContext): Promise<{ catalogs: string[] }> {
    return { catalogs: ['regimen-fiscal', 'cfdi-uso'] };
  }
}

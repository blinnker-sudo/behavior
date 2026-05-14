import { Injectable } from '@nestjs/common';
import { Behavior, BehaviorContext } from '../contracts';

@Injectable()
export class RequestDocumentsBehavior implements Behavior {
  readonly name = 'request.documents';

  async execute(_ctx: BehaviorContext): Promise<{ requested: string[] }> {
    return { requested: ['ine', 'comprobante-domicilio', 'rfc'] };
  }
}

import { Injectable } from '@nestjs/common';
import { RegisterBehavior } from '../behavior';
import { Behavior, BehaviorContext } from '../contracts';

@Injectable()
@RegisterBehavior('request.documents')
export class RequestDocumentsBehavior implements Behavior {
  readonly name = 'request.documents';

  async execute(_ctx: BehaviorContext): Promise<{ requested: string[] }> {
    return { requested: ['ine', 'comprobante-domicilio', 'rfc'] };
  }
}

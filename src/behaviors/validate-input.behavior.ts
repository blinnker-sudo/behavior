import { Injectable } from '@nestjs/common';
import { RegisterBehavior } from '../behavior';
import { Behavior, BehaviorContext } from '../contracts';

@Injectable()
@RegisterBehavior('validate.input')
export class ValidateInputBehavior implements Behavior {
  readonly name = 'validate.input';

  async execute(ctx: BehaviorContext): Promise<{ valid: true }> {
    if (!ctx.metadata.requestId) {
      throw new Error('requestId requerido');
    }
    return { valid: true };
  }
}

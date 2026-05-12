import { Injectable } from '@nestjs/common';
import { RegisterBehavior } from '../behavior';
import { Behavior, BehaviorContext } from '../contracts';

@Injectable()
@RegisterBehavior('validate.rfc')
export class ValidateRfcBehavior implements Behavior {
  readonly name = 'validate.rfc';

  async execute(_ctx: BehaviorContext): Promise<{ rfcValid: boolean }> {
    return { rfcValid: true };
  }
}

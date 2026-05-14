import { Injectable } from '@nestjs/common';
import { Behavior, BehaviorContext } from '../contracts';

@Injectable()
export class ValidateRfcBehavior implements Behavior {
  readonly name = 'validate.rfc';

  async execute(_ctx: BehaviorContext): Promise<{ rfcValid: boolean }> {
    return { rfcValid: true };
  }
}

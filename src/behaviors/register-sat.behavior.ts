import { Injectable } from '@nestjs/common';
import { Behavior, BehaviorContext } from '../contracts';

@Injectable()
export class RegisterSatBehavior implements Behavior {
  readonly name = 'register.sat';

  async execute(_ctx: BehaviorContext): Promise<{ satRef: string }> {
    return { satRef: `SAT-${Date.now()}` };
  }
}

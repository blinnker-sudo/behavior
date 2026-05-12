import { Injectable } from '@nestjs/common';
import { RegisterBehavior } from '../behavior';
import { Behavior, BehaviorContext } from '../contracts';

@Injectable()
@RegisterBehavior('register.sat')
export class RegisterSatBehavior implements Behavior {
  readonly name = 'register.sat';

  async execute(_ctx: BehaviorContext): Promise<{ satRef: string }> {
    return { satRef: `SAT-${Date.now()}` };
  }
}

import { Injectable } from '@nestjs/common';
import { RegisterBehavior } from '../behavior';
import { Behavior, BehaviorContext } from '../contracts';

@Injectable()
@RegisterBehavior('persist.application')
export class PersistApplicationBehavior implements Behavior {
  readonly name = 'persist.application';

  async execute(_ctx: BehaviorContext): Promise<{ applicationId: string }> {
    return { applicationId: `APP-${Date.now()}` };
  }
}

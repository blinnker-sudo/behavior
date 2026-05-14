import { Injectable } from '@nestjs/common';
import { Behavior, BehaviorContext } from '../contracts';

@Injectable()
export class PersistApplicationBehavior implements Behavior {
  readonly name = 'persist.application';

  async execute(_ctx: BehaviorContext): Promise<{ applicationId: string }> {
    return { applicationId: `APP-${Date.now()}` };
  }
}

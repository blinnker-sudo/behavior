import { Injectable } from '@nestjs/common';
import { RegisterBehavior } from '../behavior';
import { Behavior, BehaviorContext } from '../contracts';

@Injectable()
@RegisterBehavior('notify.email')
export class NotifyEmailBehavior implements Behavior {
  readonly name = 'notify.email';

  async execute(_ctx: BehaviorContext): Promise<{ notified: boolean }> {
    return { notified: true };
  }
}

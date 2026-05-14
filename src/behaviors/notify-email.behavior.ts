import { Injectable } from '@nestjs/common';
import { Behavior, BehaviorContext } from '../contracts';

@Injectable()
export class NotifyEmailBehavior implements Behavior {
  readonly name = 'notify.email';

  async execute(_ctx: BehaviorContext): Promise<{ notified: boolean }> {
    return { notified: true };
  }
}

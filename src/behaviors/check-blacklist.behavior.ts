import { Injectable } from '@nestjs/common';
import { RegisterBehavior } from '../behavior';
import { Behavior, BehaviorContext } from '../contracts';

@Injectable()
@RegisterBehavior('check.blacklist')
export class CheckBlacklistBehavior implements Behavior {
  readonly name = 'check.blacklist';

  async execute(_ctx: BehaviorContext): Promise<{ blacklisted: boolean }> {
    return { blacklisted: false };
  }
}

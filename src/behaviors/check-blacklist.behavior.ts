import { Injectable } from '@nestjs/common';
import { Behavior, BehaviorContext } from '../contracts';

@Injectable()
export class CheckBlacklistBehavior implements Behavior {
  readonly name = 'check.blacklist';

  async execute(_ctx: BehaviorContext): Promise<{ blacklisted: boolean }> {
    return { blacklisted: false };
  }
}

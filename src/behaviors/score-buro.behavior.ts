import { Injectable } from '@nestjs/common';
import { Behavior, BehaviorContext } from '../contracts';

@Injectable()
export class ScoreBuroBehavior implements Behavior {
  readonly name = 'score.buro';

  async execute(_ctx: BehaviorContext): Promise<{ score: number }> {
    return { score: 720 };
  }
}

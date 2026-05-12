import { Injectable } from '@nestjs/common';
import { RegisterBehavior } from '../behavior';
import { Behavior, BehaviorContext } from '../contracts';

@Injectable()
@RegisterBehavior('score.buro')
export class ScoreBuroBehavior implements Behavior {
  readonly name = 'score.buro';

  async execute(_ctx: BehaviorContext): Promise<{ score: number }> {
    return { score: 720 };
  }
}

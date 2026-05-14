import { Injectable } from '@nestjs/common';
import { Behavior, BehaviorContext } from '../contracts';

@Injectable()
export class RenderCreditFormMxBehavior implements Behavior {
  readonly name = 'render.credit.form.mx';

  async execute(_ctx: BehaviorContext): Promise<{ form: string }> {
    return { form: 'credit-mx-v1' };
  }
}

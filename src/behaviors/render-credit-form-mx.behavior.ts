import { Injectable } from '@nestjs/common';
import { RegisterBehavior } from '../behavior';
import { Behavior, BehaviorContext } from '../contracts';

@Injectable()
@RegisterBehavior('render.credit.form.mx')
export class RenderCreditFormMxBehavior implements Behavior {
  readonly name = 'render.credit.form.mx';

  async execute(_ctx: BehaviorContext): Promise<{ form: string }> {
    return { form: 'credit-mx-v1' };
  }
}

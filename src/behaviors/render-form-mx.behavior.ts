import { Injectable } from '@nestjs/common';
import { RegisterBehavior } from '../behavior';
import { Behavior, BehaviorContext } from '../contracts';

@Injectable()
@RegisterBehavior('render.form.mx')
export class RenderFormMxBehavior implements Behavior {
  readonly name = 'render.form.mx';

  async execute(_ctx: BehaviorContext): Promise<{ form: string }> {
    return { form: 'onboarding-mx-v1' };
  }
}

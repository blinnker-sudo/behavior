import { Injectable } from '@nestjs/common';
import { Behavior, BehaviorContext } from '../contracts';

@Injectable()
export class RenderFormMxBehavior implements Behavior {
  readonly name = 'render.form.mx';

  async execute(_ctx: BehaviorContext): Promise<{ form: string }> {
    return { form: 'onboarding-mx-v1' };
  }
}

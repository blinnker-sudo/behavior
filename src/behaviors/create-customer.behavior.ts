import { Injectable } from '@nestjs/common';
import { RegisterBehavior } from '../behavior';
import { Behavior, BehaviorContext } from '../contracts';

@Injectable()
@RegisterBehavior('create.customer')
export class CreateCustomerBehavior implements Behavior {
  readonly name = 'create.customer';

  async execute(_ctx: BehaviorContext): Promise<{ customerId: string }> {
    return { customerId: `MX-${Date.now()}` };
  }
}

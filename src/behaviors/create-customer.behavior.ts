import { Injectable } from '@nestjs/common';
import { Behavior, BehaviorContext } from '../contracts';

@Injectable()
export class CreateCustomerBehavior implements Behavior {
  readonly name = 'create.customer';

  async execute(_ctx: BehaviorContext): Promise<{ customerId: string }> {
    return { customerId: `MX-${Date.now()}` };
  }
}

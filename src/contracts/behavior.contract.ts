import { Step } from './country-config.contract';

export interface BehaviorMetadata {
  country: string;
  flow: string;
  step: Step;
  requestId: string;
  correlationId?: string;
  attempts: number;
}

export interface BehaviorContext<TInput = unknown> {
  input: TInput;
  state: Record<string, unknown>;
  metadata: BehaviorMetadata;
}

export interface Behavior<TInput = unknown, TOutput = unknown> {
  readonly name: string;
  execute(ctx: BehaviorContext<TInput>): Promise<TOutput>;
}

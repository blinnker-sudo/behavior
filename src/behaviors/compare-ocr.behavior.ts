import { Injectable, Logger } from '@nestjs/common';
import {
  Behavior,
  BehaviorContext,
  DataWorkflowDto,
} from '../contracts';
import { OcrService } from '../services';

interface CompareOcrResult {
  valid: boolean;
  reason?: string;
  ocrFields?: number;
}

@Injectable()
export class CompareOcrBehavior
  implements Behavior<DataWorkflowDto, CompareOcrResult>
{
  readonly name = 'compare.ocr';
  private readonly logger = new Logger(CompareOcrBehavior.name);

  constructor(private readonly ocrService: OcrService) {}

  async execute(
    ctx: BehaviorContext<DataWorkflowDto>,
  ): Promise<CompareOcrResult> {
    const correlationId = ctx.input.data?.correlationId;

    if (!correlationId) {
      this.logger.warn(
        { requestId: ctx.metadata.requestId },
        'No vino correlationId en data',
      );
      return { valid: false, reason: 'missing-correlation-id' };
    }

    const response = await this.ocrService.getDataOcr(correlationId);
    const fields = response.data ?? [];

    if (fields.length === 0) {
      return { valid: false, reason: 'ocr-empty', ocrFields: 0 };
    }

    const nombreCampo = fields.find((f) => f.field_name === 'nombre');
    if (!nombreCampo?.text) {
      return {
        valid: false,
        reason: 'missing-nombre',
        ocrFields: fields.length,
      };
    }

    return { valid: true, ocrFields: fields.length };
  }
}

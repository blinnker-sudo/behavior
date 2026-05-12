import { Injectable } from '@nestjs/common';
import { DocumentDataOcrResponse } from '../contracts';

@Injectable()
export class OcrService {
  async getDataOcr(correlationId: string): Promise<DocumentDataOcrResponse> {
    return {
      data: [
        { field_name: 'nombre', name: 'Nombre', text: `Juan Pérez ${correlationId}` },
        { field_name: 'rfc', name: 'RFC', text: 'XAXX010101000' },
      ],
    };
  }
}

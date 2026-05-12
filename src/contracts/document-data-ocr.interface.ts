export interface DocumentDataOcr {
  field_name?: string;
  name?: string;
  text?: string;
}

export interface DocumentDataOcrResponse {
  data?: DocumentDataOcr[];
}

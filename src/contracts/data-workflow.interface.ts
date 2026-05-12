export interface DataWorkflowDto {
  flow: string;
  requestId: string;
  data?: DataDto;
}

export interface DataDto {
  name: string;
  correlationId: string;
}

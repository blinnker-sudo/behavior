import { Module, Provider } from '@nestjs/common';
import { OcrService } from './services';
import {
  ValidateInputBehavior,
  CreateCustomerBehavior,
  RequestDocumentsBehavior,
  RenderFormMxBehavior,
  LoadCatalogsSatBehavior,
  ValidateRfcBehavior,
  RegisterSatBehavior,
  NotifyEmailBehavior,
  CheckBlacklistBehavior,
  RenderCreditFormMxBehavior,
  ScoreBuroBehavior,
  PersistApplicationBehavior,
  CompareOcrBehavior,
} from './behaviors';

const behaviors: Provider[] = [
  ValidateInputBehavior,
  CreateCustomerBehavior,
  RequestDocumentsBehavior,
  RenderFormMxBehavior,
  LoadCatalogsSatBehavior,
  ValidateRfcBehavior,
  RegisterSatBehavior,
  NotifyEmailBehavior,
  CheckBlacklistBehavior,
  RenderCreditFormMxBehavior,
  ScoreBuroBehavior,
  PersistApplicationBehavior,
  CompareOcrBehavior,
];

@Module({
  providers: [OcrService, ...behaviors],
  exports: [OcrService, ...behaviors],
})
export class MexicoModule {}

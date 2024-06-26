import { Module } from '@nestjs/common';
import { HashService } from './hash.service';

const providers = [HashService];

@Module({
  providers,
  exports: [...providers],
})
export class UtilsModule {}

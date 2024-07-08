import { SetMetadata } from '@nestjs/common';

export const KEY_SKIP_PASSPORT_LOCAL_AUTH = 'skip-passport-local-auth';
export const skipPassportLocalAuth = () =>
  SetMetadata(KEY_SKIP_PASSPORT_LOCAL_AUTH, true);

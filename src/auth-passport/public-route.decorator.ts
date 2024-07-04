import { SetMetadata } from '@nestjs/common';

export const NO_PASSPORT_LOCAL_AUTH = 'no-passport-local-auth';
export const noPassportLocalAuth = () => SetMetadata(NO_PASSPORT_LOCAL_AUTH, true);
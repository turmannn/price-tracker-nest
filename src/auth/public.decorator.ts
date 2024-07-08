import { SetMetadata } from '@nestjs/common';

export const KEY_SKIP_AUTH = 'skip-auth';
export const skipAuth = () => SetMetadata(KEY_SKIP_AUTH, true);

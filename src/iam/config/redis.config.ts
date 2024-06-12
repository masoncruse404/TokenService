import { registerAs } from '@nestjs/config';

export const REDIS_CONFIG_KEY = 'redis';

export default registerAs(REDIS_CONFIG_KEY, () => {
  const port = parseInt(process.env.REDIS_PORT || '6379', 10);

  return {
    host: process.env.REDIS_HOST || 'redis',
    port,
  };
});
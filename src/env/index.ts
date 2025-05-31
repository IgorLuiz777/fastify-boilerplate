import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
  JWT_SECRET: z.string(),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error('Variaveis de ambiente inválidas!');

  throw new Error('Variaveis de ambiente inválidas!');
}

export const env = _env.data;

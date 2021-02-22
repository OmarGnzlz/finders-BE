import { registerAs } from '@nestjs/config';

const config = () => {
  return {
    secretKey: process.env.SECRET_KEY,
  };
};

export default registerAs('secret', () => ({
  configSecret: config(),
}));

import * as dotenv from 'dotenv'
import configSecret from '../config/config'
dotenv.config()
const secret: any = configSecret().configSecret.secretKey

export const jwtConstants = {
  secret: secret,
  expires: '99999999s'
};

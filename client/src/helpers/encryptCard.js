import { createCipheriv, createDecipheriv, randomBytes} from 'crypto';
require('dotenv').config();
const algorithm = 'aes-256-ctr';
const key = 'b2df428b9929d3ace7c598bbf4e496b2';
const inputEncoding = 'utf8';
const outputEncoding = 'hex';

// encrypts the credit card number using the aes-256 algorithm.
// as referred to in the read me file, the encryption would
// usually be done on the server.
export const encryptCard = value => {
  const iv = new Buffer(randomBytes(16));
  const cipher = createCipheriv(algorithm, key, iv);
  let crypted = cipher.update(value, inputEncoding, outputEncoding);
  
  crypted += cipher.final(outputEncoding);
  
  return `${iv.toString('hex')}:${crypted.toString()}`;
}

// this decrypts the credit card number and returns the original number.
export const decryptCard  = value => {
  const textParts = value.split(':');
  const IV = new Buffer(textParts.shift(), outputEncoding);
  const encryptedText = new Buffer(textParts.join(':'), outputEncoding);
  const decipher = createDecipheriv(algorithm,key, IV);
  let decrypted = decipher.update(encryptedText,  outputEncoding, inputEncoding);
  
  decrypted += decipher.final(inputEncoding);
  
  return decrypted.toString();
}
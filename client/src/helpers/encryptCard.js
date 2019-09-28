import { createCipheriv, createDecipheriv, randomBytes} from 'crypto';
const algorithm = 'aes-256-ctr';
const key = 'b2df428b9929d3ace7c598bbf4e496b2';
const inputEncoding = 'utf8';
const outputEncoding = 'hex';

export const encryptCard = value => {
  const iv = new Buffer(randomBytes(16));
  const cipher = createCipheriv(algorithm, key, iv);
  let crypted = cipher.update(value, inputEncoding, outputEncoding);
  
  crypted += cipher.final(outputEncoding);
  
  return `${iv.toString('hex')}:${crypted.toString()}`;
}


export const decryptCard  = value => {
  const textParts = value.split(':');
  const IV = new Buffer(textParts.shift(), outputEncoding);
  const encryptedText = new Buffer(textParts.join(':'), outputEncoding);
  const decipher = createDecipheriv(algorithm,key, IV);
  let decrypted = decipher.update(encryptedText,  outputEncoding, inputEncoding);
  
  decrypted += decipher.final(inputEncoding);
  
  return decrypted.toString();
}
import crypto from 'crypto';

export const encryptCard = (value) => {
  const cipher = crypto.createCipher('aes128', 'credit card');
  let encrypted = cipher.update(value, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

export const decryptCard = (value) => {
  const decipher = crypto.createDecipher('aes128','a password');
  let decrypted = decipher.update(value,'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
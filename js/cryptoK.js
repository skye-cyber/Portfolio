const CryptoJS = require('crypto-js');

function hide_key(apiKey, password) {
  // Derive a 32-byte key from the password
  const key = CryptoJS.SHA256(password + "PhantomJoker15").toString(CryptoJS.enc.Hex);

  // Generate a random IV (16 bytes for AES)
  const iv = CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Hex);

  // Encrypt the API key
  const encrypted = CryptoJS.AES.encrypt(apiKey, key, {
    iv: CryptoJS.enc.Hex.parse(iv),
                                         mode: CryptoJS.mode.CBC,
                                         padding: CryptoJS.pad.Pkcs7
  });

  // Return the IV and encrypted data as a single object
  return {
    iv: iv,
    encryptedData: encrypted.toString()
  };
}

export function decryptData(encryptedObject, password) {
  // Destructure IV and encrypted data
  const { iv, encryptedData } = encryptedObject;
  // Check if the IV and encryptedData exist
  if (!iv) {
    throw new Error("IV is missing or undefined");
  }
  if (!encryptedData) {
    throw new Error("Encrypted data is missing or undefined");
  }

  // Derive the key from the password
  const key = CryptoJS.SHA256(password + "PhantomJoker15").toString(CryptoJS.enc.Hex);
  // Decrypt the data
  const decrypted = CryptoJS.AES.decrypt(encryptedData, key, {
    iv: CryptoJS.enc.Hex.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  }).toString(CryptoJS.enc.Utf8);
  return decrypted;
}

export function getKey(){
  const str = '51@rekoJmotnahP@71nogard@eyksws'
  const Kdata = {
    iv: '49d7eb1b5844c1ab07634ee027222800',
    encryptedData: 'U2FsdGVkX1/23YF5hgHFQR+9rGGRl72YD0YoX29j8uoYwZ5LvSMVcRbKeKNV9356qEaDDnwe0zS12bFbOCuZew=='
  }
  const rts = str.split('').reverse().join('');
  const yek = decryptData(Kdata, rts);
  const key = yek.split('').reverse().join('');
  return key
}

export function getSID(){
  const str = 'sjliame@ecivres@eyksws'
  const Kdata = {
    iv: '48f85512a881ad6780cf55f77f496518',
    encryptedData: 'U2FsdGVkX194A8QF1hOHdZ3gHsaKCFJv+g19gxveHiQ='
  }
  const rts = str.split('').reverse().join('');
  const yek = decryptData(Kdata, rts);
  const key = yek.split('').reverse().join('');
  return key
}

export function getTID(){
  const str = 'sjliame@etalpmet@eyksws'
  const Kdata = {
    iv: 'e5b5493538f5f57f61ed6a08c7440eda',
    encryptedData: 'U2FsdGVkX1+VNcBXtPzHk+quOntpCAZ7KTzYJ3CFO/2fiSNwiBwTnl+6FgBGAZtd'
  }
  const rts = str.split('').reverse().join('');
  const yek = decryptData(Kdata, rts);
  const key = yek.split('').reverse().join('');
  return key
}

console.log(getTID())
/*
const api = 'template_oj43cmr'.split('').reverse().join('');
const pass = "swskye@template@emailjs"
console.log(pass.split('').reverse().join(''))
//const pass = "51@rekoJmotnahP@71nogard@eyksws".split('').reverse().join('');
const cipherKey = hide_key(api, pass);
console.log(`cipherKey: ${cipherKey.encryptedData}`);
function key(){
  const cipherKey1 = {
    iv: '49d7eb1b5844c1ab07634ee027222800',
    encryptedData: 'U2FsdGVkX1/23YF5hgHFQR+9rGGRl72YD0YoX29j8uoYwZ5LvSMVcRbKeKNV9356qEaDDnwe0zS12bFbOCuZew=='
  }
const decrypted = decryptData(cipherKey, pass);
console.log(`Decrypted: ${decrypted.split('').reverse().join('')}`);
}
key()
console.log(cipherKey)
*/


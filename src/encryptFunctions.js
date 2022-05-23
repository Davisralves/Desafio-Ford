export const reverseWord = (word) => word.split('').reverse().join('');


export const ascEncrypt = (word) => {
  let encryptedWord = [];
  for(let index = 0; index < word.length; index += 1) {
    const CharCode =  word.charCodeAt(index);
    let newCharCode = 0;
    if(CharCode === 90 || CharCode === 89) {
      newCharCode = CharCode - 25;
    }
    if(CharCode === 9 || CharCode === 8 ) {
      newCharCode = CharCode - 10;
    }
    else {
      newCharCode = CharCode + 2;
    }
    encryptedWord.push(newCharCode);
  }
  return String.fromCharCode(...encryptedWord);
}

export const ascDecrypt = (word) => {
  let decryptedWord = [];
  for(let index = 0; index < word.length; index += 1) {
    const CharCode =  word.charCodeAt(index);
    let newCharCode = 0;
    if(CharCode === 65 || CharCode === 66) {
      newCharCode = CharCode + 25;
    }
    if(CharCode === 0 || CharCode === 1 ) {
      newCharCode = CharCode + 10;
    }
    else {
      newCharCode = CharCode - 2;
    }
    decryptedWord.push(newCharCode);
  }
  return String.fromCharCode(...decryptedWord);
}


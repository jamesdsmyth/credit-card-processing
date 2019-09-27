import luhn from 'luhn';

export const formValidation = (value, name) => {
  let reg = null;

  switch(name) {
    case 'name':
      value = removeAllWhiteSpace(value);
        
      if(value.length === 0) {
        return false;
      } else {
        reg = new RegExp(/^[a-zA-Z ]+$/);
        return reg.test(value);
      }

    case 'cardNumber':
        value = removeAllWhiteSpace(value);
        
        if(value.length === 0) {
          return false;
        } else {
          return luhn.validate(value);
        }
    
    case 'limit':
      reg = new RegExp(/^\d*[1-9]\d*$/);
      return reg.test(value);

    default: 
      return;
  }
}

const removeAllWhiteSpace = (value) => value.replace(/\s/g,'');
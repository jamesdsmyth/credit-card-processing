import luhn from 'luhn';

// on input change, we will validate the numbers and letters values.
// An example is we will not allow numbers in the name, but allow spaces.
export const onInputChangeValidation = (e) => {
  const validation = e.target.dataset.validation;
  const value = e.target.value;

  if(validation === 'numbers') {
    let numbers = value.replace(/\D/g,'');

    // check if a min value attr exists and if so we set it to just that.
    if(e.target.dataset.minvalue) {
      if(parseInt(numbers) < e.target.dataset.minvalue) {
        numbers = e.target.dataset.minvalue;
      }
    }

    return numbers;
  } else {
    const letters = value.replace(/[^A-Za-z\s]/g,'')
    return letters;
  }
}

// on clicking submit, we need to check all the values in each field.
// the validation we return true or false for each input depending on type
export const formValidation = (value, name) => {
  let reg = null;

  switch(name) {
    case 'name':
      value = removeAllWhiteSpace(value);
        reg = new RegExp(/^[a-zA-Z ]+$/);
        return reg.test(value);

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
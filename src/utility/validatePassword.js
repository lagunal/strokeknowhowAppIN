
  //Password Validation
  const validatePassword = (text) => {

    //let reg = '[ \t]+$';
    let minLength = 4;
    let valid = true;
    let error = '';

    text = text.trim();

    if( text.length < minLength ){
      valid = false;
      error = 'At least ' + minLength + ' characters';
    }

    this.setState({password:text, enterButtonDisabled:!valid, passwordError: error});
    return valid;
  }
  
  export default validatePassword;
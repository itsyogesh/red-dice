import express from 'express';
import Validator from 'validator';

let router = express.Router();

router.post('/', (req, res) =>{
  console.log(req.body);
  const { errors, isValid } = validateInput(req.body);

  if(!isValid){
    res.status(400).json(errors);
  }
});

function validateInput(data){
  let errors = {};

  if(Validator.isNull(data.username)){
    errors.username = 'Username is required';
  }

  if(Validator.isNull(data.email)){
    errors.email = 'Email is required';
  }

  if(!Validator.isEmail(data.email)){
    errors.email = 'Email is invalid'
  }

  if(Validator.isNull(data.password)){
    errors.password = 'Password is required';
  }

  if(Validator.isNull(data.passwordConfirmation)){
    errors.passwordConfirmation = 'Confirm Password is required';
  }

  if(!Validator.equals(data.password, data.passwordConfirmation)){
    errors.passwordConfirmation = 'Passwords must match';
  }

  if(Validator.isNull(data.timezone)){
    errors.timezone = 'Timezone is required';
  }

  return {
    errors,
    isValid : (Object.keys(errors).length === 0) ? true : false
  }
}

export default router;

import React, { Component } from 'react';
import SignupForm from './SignupForm';

class SignupPage extends Component {
    render(){
    return (
        <div className="row signup-form">
          <div className="col-md-6 offset-md-3">
            <h1> Join our community </h1>
            <SignupForm />
          </div>
        </div>
    )
  }
}

export default SignupPage;

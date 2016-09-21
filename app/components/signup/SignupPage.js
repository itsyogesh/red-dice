import React, { Component, PropTypes } from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';

class SignupPage extends Component {
    render(){
      const { userSignupRequest } = this.props;
      return (
          <div className="row signup-form">
            <div className="col-md-6 offset-md-3">
              <h1> Join our community </h1>
              <SignupForm userSignupRequest={userSignupRequest} />
            </div>
          </div>
      )
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return {};
}


export default connect(null, { userSignupRequest })(SignupPage);

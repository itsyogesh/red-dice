import React, { Component, PropTypes } from 'react';
import timezones from '../../data/timezones';

class SignupForm extends Component {
  constructor(props){
      super(props);

      this.state = {
        username : "",
        email: "",
        password: "",
        passwordConfirmation: "",
        timezone: ""
      }

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    this.props.userSignupRequest(this.state);
  }

  render() {
    const options = Object.keys(timezones).map(function(val){
      return (
        <option key={timezones[val]} value={timezones[val]}>{val}</option>
      )
    })
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            value={this.state.username}
            onChange={this.onChange}
            type="text"
            name="username"
            className="form-control" />
        </div>

        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            name="email"
            className="form-control" />
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            name="password"
            className="form-control" />
        </div>

        <div className="form-group">
          <label className="control-label">Confirm Password</label>
          <input
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
            type="password"
            name="passwordConfirmation"
            className="form-control" />
        </div>

        <div className="form-group">
          <label className="control-label">Timezone</label>
          <select
            value={this.state.timezone}
            onChange={this.onChange}
            name="timezone"
            className="form-control">
            <option value="" disabled>Choose your timezone</option>
            {options}
          </select>
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Sign Up
          </button>
        </div>

      </form>
    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default SignupForm;

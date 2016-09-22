import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import timezones from '../../data/timezones';
import TextFieldGroup from '../common/TextFieldGroup';

class SignupForm extends Component {
  constructor(props){
      super(props);

      this.state = {
        username : "",
        email: "",
        password: "",
        passwordConfirmation: "",
        timezone: "",
        errors: {},
        isLoading: false
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
    this.setState({errors: {}, isLoading: true});
    this.props.userSignupRequest(this.state).then(
      () => {},
      ({ data }) => this.setState({ errors: data , isLoading: false})
    );
  }

  render() {
    const { errors } = this.state;
    const options = Object.keys(timezones).map(function(val){
      return (
        <option key={timezones[val]} value={timezones[val]}>{val}</option>
      )
    })
    return (
      <form onSubmit={this.onSubmit}>
        <TextFieldGroup
          field="username"
          value={this.state.username}
          onChange={this.onChange}
          error={errors.username}
          label="Username"
        />
      
        <TextFieldGroup
          field="email"
          value={this.state.email}
          onChange={this.onChange}
          error={errors.email}
          label="Email"
        />

        <TextFieldGroup
          field="password"
          value={this.state.password}
          onChange={this.onChange}
          error={errors.password}
          label="Password"
          type="password"
        />

        <TextFieldGroup
          field="passwordConfirmation"
          value={this.state.passwordConfirmation}
          onChange={this.onChange}
          error={errors.passwordConfirmation}
          label="Confirm Password"
          type="password"
        />

        <div className={classNames("form-group", {"has-danger": errors.timezone})}>
          <label className="col-form-label">Timezone</label>
          <select
            value={this.state.timezone}
            onChange={this.onChange}
            name="timezone"
            className={classNames("form-control", {"form-control-danger": errors.timezone})}>
            <option value="" disabled>Choose your timezone</option>
            {options}
          </select>
          {errors.timezone && <div className="form-control-feedback">{errors.timezone}</div>}
        </div>

        <div className="form-group">
          <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
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

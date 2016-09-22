import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import timezones from '../../data/timezones';

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
        <div className={classNames("form-group", {"has-danger": errors.username})}>
          <label className="col-form-label">Username</label>
          <input
            value={this.state.username}
            onChange={this.onChange}
            type="text"
            name="username"
            className={classNames("form-control", {"form-control-danger": errors.username})} />
          {errors.username && <div className="form-control-feedback">{errors.username}</div>}
        </div>

        <div className={classNames("form-group", {"has-danger": errors.email})}>
          <label className="col-form-label">Email</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            name="email"
            className={classNames("form-control", {"form-control-danger": errors.email})} />
          {errors.email && <div className="form-control-feedback">{errors.email}</div>}
        </div>

        <div className={classNames("form-group", {"has-danger": errors.password})}>
          <label className="col-form-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            name="password"
            className={classNames("form-control", {"form-control-danger": errors.password})} />
          {errors.password && <div className="form-control-feedback">{errors.password}</div>}
        </div>

        <div className={classNames("form-group", {"has-danger": errors.passwordConfirmation})}>
          <label className="col-form-label">Confirm Password</label>
          <input
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
            type="password"
            name="passwordConfirmation"
            className={classNames("form-control", {"form-control-danger": errors.passwordConfirmation})} />
          {errors.passwordConfirmation && <div className="form-control-feedback">{errors.passwordConfirmation}</div>}
        </div>

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

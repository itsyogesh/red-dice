import React, { PropTypes } from 'react';
import classNames from 'classnames';

const TextFieldGroup = ({field, value, label, error, type, onChange}) => {
  return (
    <div className={classNames("form-group", {"has-danger": error})}>
      <label className="col-form-label">{label}</label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        name={field}
        className={classNames("form-control", {"form-control-danger": error})} />
      {error && <div className="form-control-feedback">{error}</div>}
    </div>
  )
}

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;

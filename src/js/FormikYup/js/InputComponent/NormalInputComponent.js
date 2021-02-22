import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputProps: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
  }).isRequired,
  form: PropTypes.shape({
    validateField: PropTypes.func,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
};

function NormalInputComponent(props) {
  const {
    type,
    placeholder,
    inputProps,
    form,
    meta,
  } = props;

  const changeValueAndValidate = async (e) => {
    await inputProps.onChange(e);
    form.validateField(inputProps.name, inputProps.value);
  };

  const validateOnBlur = (e) => {
    inputProps.onBlur(e);
    if (!meta.error) {
      form.validateField(inputProps.name, inputProps.value);
    }
  };

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={inputProps.value}
        name={inputProps.name}
        onBlur={(e) => validateOnBlur(e)}
        onChange={(e) => changeValueAndValidate(e)}
      />
      {meta.touched && meta.error && (
        <div className="error_message">{meta.error}</div>
      )}
    </div>

  );
}

NormalInputComponent.propTypes = propTypes;

export default NormalInputComponent;

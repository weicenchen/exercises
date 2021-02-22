import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  placeholder: PropTypes.string.isRequired,
  validate: PropTypes.func.isRequired,
  inputProps: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.arrayOf(
      PropTypes.shape({
        skill: PropTypes.string,
      }),
    ),
    form: PropTypes.shape({
      setFieldValue: PropTypes.func,
      setFieldError: PropTypes.func,
      setFieldTouched: PropTypes.func,
    }),
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
};

function SkillsInputComponent(props) {
  const {
    placeholder,
    validate,
    inputProps,
    meta,
  } = props;

  const setFieldError = (value) => {
    inputProps.form.setFieldError(inputProps.name, validate(value));
  };

  const setFieldValue = (value) => {
    inputProps.form.setFieldValue(inputProps.name, value);
  };

  const setTouched = () => {
    if (!meta.touched) {
      inputProps.form.setFieldTouched(inputProps.name, true);
    }
  };

  const keyPressFunction = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (e.target.value !== '') {
        const newValue = [...inputProps.value, { skill: e.target.value }];
        setFieldValue(newValue);
        e.target.value = '';
        if (meta.error) {
          setFieldError(newValue);
        }
      }
    }
  };

  const removeSkillsItem = (itemIndex) => {
    inputProps.value.splice(itemIndex, 1);
    setFieldValue(inputProps.value);
    if (inputProps.value.length === 0) {
      setFieldError(inputProps.value);
    }
  };

  const renderSkillTag = (skillList) => {
    let tagGroupElement;
    if (skillList.length === 0) {
      tagGroupElement = null;
    } else {
      tagGroupElement = skillList.map((item, index) => (
        <button
          type="button"
          key={item.skill}
          onClick={() => removeSkillsItem(index)}
        >
          {`${item.skill} / remove`}
        </button>
      ));
    }
    return (
      <div>
        {tagGroupElement}
      </div>
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        name={inputProps.name}
        onFocus={setTouched}
        onKeyPress={(e) => keyPressFunction(e)}
        onBlur={() => setFieldError(inputProps.value)}
      />
      {meta.touched && meta.error ? (
        <div className="error_message">{meta.error}</div>
      ) : renderSkillTag(inputProps.value)}
    </div>

  );
}

SkillsInputComponent.propTypes = propTypes;

export default SkillsInputComponent;

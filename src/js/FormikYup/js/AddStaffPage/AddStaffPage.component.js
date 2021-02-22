import React from 'react';
import PropTypes from 'prop-types';
import {
  Formik,
  Field,
  Form,
  FieldArray,
} from 'formik';
import * as Yup from 'yup';

import NormalInputComponent from '../InputComponent/NormalInputComponent';
import SkillsInputComponent from '../InputComponent/SkillsInputComponent';

const initialValues = {
  staffs: [
    {
      name: '',
      email: '',
      age: '',
      skills: [],
    },
  ],
};

const staffsSchema = Yup.object().shape({
  staffs: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too short')
          .required('Required name'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required email'),
        age: Yup.number()
          .min(18, 'Too young!!!')
          .max(65, 'Too old!!!')
          .required('Required age'),
        skills: Yup.array()
          .min(1, 'At least 1 skill'),
      }),
    )
    .min(1, 'At least 1 staff!!!'),
});

const propTypes = {
  handleAddToStaffSkillList: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
    replace: PropTypes.func,
  }).isRequired,
};

class AddStaffPage extends React.Component {
  validateName = (value) => {
    let errors;
    if (!value) {
      errors = 'Required name';
    } else if (value.length < 2) {
      errors = 'Too short!!!';
    }
    return errors;
  }

  validateEmail = (value) => {
    let errors;
    if (!value) {
      errors = 'Required email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      errors = 'Invalid email address';
    }
    return errors;
  }

  validateAge = (value) => {
    let errors;
    if (!value) {
      errors = 'Required age';
    } else if (value < 18) {
      errors = 'Too young!!!';
    } else if (value > 65) {
      errors = 'Too old!!!';
    }
    return errors;
  }

  validateSkills = (value) => {
    let errors;
    if (value.length === 0) {
      errors = 'At least 1 skill';
    }
    return errors;
  }

  submitValidate = (values) => {
    const { handleAddToStaffSkillList, history } = this.props;
    handleAddToStaffSkillList(values.staffs);
    history.push('/edit-staff-skill');
  };

  render() {
    return (
      <div>
        <h1>Create staff form of the team</h1>
        <Formik
          validationSchema={staffsSchema}
          initialValues={initialValues}
          onSubmit={this.submitValidate}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({
            values,
            errors,
            validateField,
          }) => (
            <Form>
              <FieldArray name="staffs">
                {({ remove, push }) => (
                  <div>
                    {values.staffs.length > 0
                      && values.staffs.map((staffs, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <div className="singleStaffForm" key={index}>
                          <div>
                            <label htmlFor={`staffs.${index}.name`}>Name</label>
                            <Field
                              name={`staffs.${index}.name`}
                              validate={this.validateName}
                            >
                              {({
                                field,
                                form,
                                meta,
                              }) => (
                                <NormalInputComponent
                                  type="text"
                                  placeholder="fill name"
                                  inputProps={{
                                    ...field,
                                  }}
                                  form={form}
                                  meta={meta}
                                />
                              )}
                            </Field>
                          </div>
                          <div>
                            <label htmlFor={`staffs.${index}.email`}>Email</label>
                            <Field
                              name={`staffs.${index}.email`}
                              validate={this.validateEmail}
                            >
                              {({
                                field,
                                form,
                                meta,
                              }) => (
                                <NormalInputComponent
                                  type="email"
                                  placeholder="fill email"
                                  inputProps={{
                                    ...field,
                                  }}
                                  form={form}
                                  meta={meta}
                                />
                              )}
                            </Field>
                          </div>
                          <div>
                            <label htmlFor={`staffs.${index}.age`}>Age</label>
                            <Field
                              name={`staffs.${index}.age`}
                              validate={this.validateAge}
                            >
                              {({
                                field,
                                form,
                                meta,
                              }) => (
                                <NormalInputComponent
                                  type="number"
                                  placeholder="fill age"
                                  inputProps={{
                                    ...field,
                                  }}
                                  form={form}
                                  meta={meta}
                                />
                              )}
                            </Field>
                          </div>
                          <div>
                            <label htmlFor={`staffs.${index}.skills`}>Skills</label>
                            <Field
                              name={`staffs.${index}.skills`}
                              id={`staffs.${index}.skills`}
                              validate={this.validateName}
                            >
                              {({
                                field: { name, value },
                                form,
                                meta,
                              }) => (
                                <SkillsInputComponent
                                  placeholder="fill skills and press enter"
                                  validate={this.validateSkills}
                                  validateField={validateField}
                                  inputProps={{
                                    name,
                                    value,
                                    form,
                                  }}
                                  meta={meta}
                                />
                              )}
                            </Field>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="secondary"
                              onClick={() => remove(index)}
                            >
                              X
                            </button>
                          </div>
                        </div>
                      ))}

                    <button
                      type="button"
                      className="secondary"
                      onClick={() => push(
                        {
                          name: '',
                          email: '',
                          age: '',
                          skills: [],
                        },
                      )}
                    >
                      Add staff
                    </button>
                    {typeof errors.staffs === 'string' ? <div className="error_message">{errors.staffs}</div> : null}
                  </div>
                )}
              </FieldArray>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

AddStaffPage.propTypes = propTypes;

export default AddStaffPage;

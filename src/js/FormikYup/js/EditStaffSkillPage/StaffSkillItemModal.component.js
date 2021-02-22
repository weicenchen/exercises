import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  Formik,
  Field,
  Form,
  ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

import SkillsInputComponent from '../InputComponent/SkillsInputComponent';

const ModalWrapper = styled.div`
  position: fixed;
  top: 10%;
  bottom: 10%;
  left: 15%;
  right: 15%;
  z-index: 30;
  text-align: center;
  padding-top: 5%;
  background: yellow;
`;

const FieldGroup = styled.div`
  display:flex;
  margin: 0 25%;
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
`;

const propTypes = {
  handleEditStaffSkillList: PropTypes.func.isRequired,
  handleModalDetail: PropTypes.func.isRequired,
  modalItem: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        skill: PropTypes.string,
      }),
    ),
  }).isRequired,
  modalIndex: PropTypes.number.isRequired,
};

class StaffSkillItemModal extends React.Component {
  staffSchema = Yup.object({
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
  });

  constructor(props) {
    super(props);
    this.state = {
      initialValues: props.modalItem,
    };
  }

  validateSkills = (value) => {
    let errors;
    if (value.length === 0) {
      errors = 'At least 1 skill';
    }
    return errors;
  }

  handleCloseModal = () => {
    const { handleModalDetail } = this.props;
    handleModalDetail(false);
  }

  submit = (values) => {
    const {
      handleEditStaffSkillList,
      modalIndex,
    } = this.props;
    handleEditStaffSkillList(modalIndex, values);
    this.handleCloseModal();
  };

  render() {
    const { initialValues } = this.state;

    if (initialValues) {
      return (
        <ModalWrapper>
          <h1>Edit staff skill</h1>
          <Formik
            validationSchema={this.staffSchema}
            initialValues={initialValues}
            onSubmit={this.submit}
          >
            {() => (
              <Form>
                <FieldGroup>
                  <div>
                    <label htmlFor="name">Name</label>
                    <Field name="name" />
                    <ErrorMessage component="div" name="name" className="error_message" />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" />
                    <ErrorMessage component="div" name="email" className="error_message" />
                  </div>
                </FieldGroup>
                <FieldGroup>
                  <div>
                    <label htmlFor="age">Age</label>
                    <Field name="age" type="number" />
                    <ErrorMessage component="div" name="age" className="error_message" />
                  </div>
                  <div>
                    <label htmlFor="skills">Skills</label>
                    <Field
                      name="skills"
                    >
                      {({
                        field: { name, value },
                        form,
                        meta,
                      }) => (
                        <SkillsInputComponent
                          placeholder="fill skills and press enter"
                          validate={this.validateSkills}
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
                </FieldGroup>
                <ButtonGroup>
                  <button type="submit">OK</button>
                  <button type="button" onClick={this.handleCloseModal}>CANCEL</button>
                </ButtonGroup>

              </Form>
            )}
          </Formik>

        </ModalWrapper>
      );
    }
    return null;
  }
}

StaffSkillItemModal.propTypes = propTypes;

export default StaffSkillItemModal;

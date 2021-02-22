import React from 'react';
import * as Yup from 'yup';
import LoadingOverlay from 'react-loading-overlay';

const inputValidation = /^[\u4e00-\u9fa5A-Za-z0-9!@#$%^&*()_+{}:<>?~`,.|;'[\]=-\s\n]+$/;
const inputWithEmptyStringValidation = /^$|^[\u4e00-\u9fa5A-Za-z0-9!@#$%^&*()_+{}:<>?~`,.|;'[\]=-\s\n]+$/;

class StringFormPage extends React.Component {
  stringSchemaSync = Yup.string()
    .required('Required!!!')
    .min(2, 'Too short!')
    .max(5, 'Too long!');

  stringSchemaAsync = Yup.string()
    .required('Required!!!')
    .min(2, 'Too short!')
    .max(5, 'Too long!')
    .matches(inputValidation, 'No special characters!!')
    .matches(inputWithEmptyStringValidation, 'No space!!');

  constructor(props) {
    super(props);
    this.state = {
      valueSync: '',
      isErrorSync: false,
      errorMessageSync: '',
      isAsyncValidating: false,
      valueAsync: '',
      isErrorAsync: false,
      errorMessageAsync: '',
    };
  }

  syncValidation = (e) => {
    try {
      this.stringSchemaSync.validateSync(e.target.value);
      this.setState({
        isErrorSync: false,
        errorMessageSync: '',
      });
    } catch (error) {
      if (error.errors) {
        this.setState({
          isErrorSync: true,
          errorMessageSync: error.errors ? error.errors : null,
        });
      }
    } finally {
      this.setState({ valueSync: e.target.value });
    }
  };

  syncSubmit = () => {
    const { valueSync, isErrorSync } = this.state;
    if (!isErrorSync) {
      alert(valueSync);
      this.setState({ valueSync: '' });
    }
  };

  asyncValidation = (e) => {
    this.setState({
      isAsyncValidating: true,
      isErrorAsync: false,
      errorMessageAsync: '',
      valueAsync: e.target.value,
    });
    const { valueAsync } = this.state;
    setTimeout(() => {
      this.stringSchemaAsync.validate(valueAsync)
        .then((value) => {
          console.log(value);
        })
        .catch((err) => {
          this.setState({
            isErrorAsync: !!err.errors,
            errorMessageAsync: err.errors ? err.errors : null,
          });
        })
        .finally(() => {
          this.setState({ isAsyncValidating: false });
        });
    }, 300);
  };

  render() {
    const {
      valueSync,
      isErrorSync,
      errorMessageSync,
      isAsyncValidating,
      valueAsync,
      isErrorAsync,
      errorMessageAsync,
    } = this.state;
    return (
      <LoadingOverlay
        active={isAsyncValidating}
        spinner
        text="Loading..."
      >
        <div>
          <h3>String Form Sync</h3>
          <input
            type="text"
            placeholder="name"
            value={valueSync}
            onBlur={this.syncValidation}
            onChange={this.syncValidation}
          />
          {isErrorSync ? (<span className="error_message">{errorMessageSync}</span>) : null}
          <button type="button" onClick={this.syncSubmit}>Submit</button>
        </div>
        <div>
          <h3>String Form Async</h3>
          <input
            type="text"
            placeholder="name"
            value={valueAsync}
            onBlur={this.asyncValidation}
            onChange={this.asyncValidation}
          />
          {isErrorAsync ? (<span className="error_message">{errorMessageAsync}</span>) : null}
          <button type="button">Submit</button>
        </div>
      </LoadingOverlay>
    );
  }
}

export default StringFormPage;

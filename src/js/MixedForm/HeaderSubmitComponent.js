/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

class HeaderSubmitComponent extends React.Component {
  // constructor(props) {
  //   super(props);

  // }

  submitForm = () => {
    const { onFormSubmit } = this.props;
    onFormSubmit();
  };

  sortReverseAll = () => {
    const { onSortReverseAll } = this.props;
    onSortReverseAll();
  }

  render() {
    const { title } = this.props;
    return (
      <header>
        <h1>
          {title}
          <button
            type="button"
            onClick={this.submitForm}
          >
            Submit
          </button>
          <button
            type="button"
            onClick={this.sortReverseAll}
          >
            Sort Reverse All
          </button>
        </h1>
      </header>
    );
  }
}

HeaderSubmitComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onSortReverseAll: PropTypes.func.isRequired,
};

export default HeaderSubmitComponent;

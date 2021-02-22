/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

class SingleFormView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      isSort: false,
    };
  }

  inputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  addItem = () => {
    const { inputValue } = this.state;
    const { onAddItem } = this.props;
    onAddItem(inputValue);
    this.setState({ inputValue: '' });
  };

  sortFormReverse = () => {
    const { isSort } = this.state;
    this.setState({ isSort: !isSort });
  };

  render() {
    const { inputValue, isSort } = this.state;
    const { formTitle, children } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>{formTitle}</th>
            <th>
              <input
                type="text"
                placeholder="Fill the item"
                onChange={this.inputChange}
                value={inputValue}
              />
              <button
                type="button"
                onClick={this.addItem}
              >
                Add Item
              </button>
              <button
                type="button"
                onClick={this.sortFormReverse}
              >
                Sort Reverse
              </button>
            </th>
          </tr>
        </thead>
        {children(isSort)}
      </table>
    );
  }
}

SingleFormView.propTypes = {
  formTitle: PropTypes.string.isRequired,
  onAddItem: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

export default SingleFormView;

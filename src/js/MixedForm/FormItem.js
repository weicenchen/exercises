/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

function FormItem(props) {
  const { itemIn, index, onRemove } = props;

  const removeItem = (number) => {
    onRemove(number);
  };

  return (
    <tr key={itemIn}>
      <td>{itemIn}</td>
      <td>
        {' '}
        <button
          type="button"
          onClick={() => removeItem(index)}
        >
          Delete
        </button>
        {' '}
      </td>
    </tr>
  );
}

FormItem.propTypes = {
  itemIn: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default FormItem;

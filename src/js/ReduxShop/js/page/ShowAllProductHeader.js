import React from 'react';

import Cart from './container/Cart.container';
import UserName from './container/UserName.container';

function ShowAllProductHeader() {
  return (
    <div>
      <Cart />
      <UserName />
    </div>
  );
}

export default ShowAllProductHeader;

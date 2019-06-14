import React from 'react';

const Menu = props => {
  return (
    <div className="menu">
      <button
        type="button"
        className="btn btn-info"
        onClick={() => props.onClick()}
      >
        GENERATE SALAD OF THE DAY
      </button>
    </div>
  );
};

export default Menu;

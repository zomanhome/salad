import React from 'react';

import './spinner.scss';

const Spinner = () => {
  return (
    <div className="lds-css ng-scope spinner">
      <div className="lds-pacman">
        <div>
          <div />
          <div />
          <div />
        </div>
        <div>
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};

export default Spinner;

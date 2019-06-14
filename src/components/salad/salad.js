import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from '../spinner';
import Info from './info';

import './salad.scss';

class Salad extends Component {
  render() {
    const salad = this.props.salad;
    let spinner, content;

    if (this.props.hello) {
      spinner = Object.keys(salad).length === 0 ? <Spinner /> : null;
      content = Object.keys(salad).length === 0 ? null : <Info info={salad} />;
    } else {
      spinner = null;
      content = null;
    }

    return (
      <div className="salad">
        {spinner}
        {content}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    salad: state.salad,
    hello: state.hello
  };
};

export default connect(mapStateToProps)(Salad);

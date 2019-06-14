import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  delSaladAction,
  setStartdAction,
  getSaladAction
} from '../../actions/salad';
import Menu from '../menu';
import Salad from '../salad';

import './app.scss';

class App extends Component {
  onClick = () => {
    if (!this.props.hello) {
      document.querySelector('.jumbotron > span').hidden = true;
      this.props.setStart();
    }
    this.props.delSalad();
    this.props.setSalad();
  };

  render() {
    return (
      <div className="app">
        <Menu onClick={this.onClick} />
        <div className="jumbotron">
          <span>Click on "GENERATE SALAD OF THE DAY" button to load data</span>
          <Salad />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setStart: setStartdAction,
  delSalad: delSaladAction,
  setSalad: getSaladAction
};

const mapStateToProps = state => {
  return {
    hello: state.hello
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

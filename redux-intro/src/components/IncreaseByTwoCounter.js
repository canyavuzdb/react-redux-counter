import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { inccreaseByTwoCounter } from '../redux/actions/counterActions';
import { connect } from 'react-redux';

class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.props.dispatch(inccreaseByTwoCounter());
          }}
        >
          2 arttir
        </button>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(inccreaseByTwoCounter, dispatch) };
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);

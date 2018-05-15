import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saloonListAll, saloonList } from '../actions';

import { SaloonList } from '../components/saloon-list';

class SaloonListContainer extends Component {
  componentWillMount() {
    this.props.saloonListAll()
  }
  render() {
    console.log(this.props);
    return (
      <div>
       <SaloonList saloons={this.props.saloons.saloonList} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    saloons: state.saloons
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ saloonListAll, saloonList }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SaloonListContainer);
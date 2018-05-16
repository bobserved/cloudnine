import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saloonListAll, saloonList } from '../actions';

import { SaloonList } from '../components/saloon-list';
import { Header } from '../components/header';

import { IMAGES, FILTER } from '../constants';

class SaloonListContainer extends Component {
  state = {
    selected: null
  }
  componentWillMount() {
    this.props.saloonListAll()
  }
  filter = (event) => {
    let val = event.value;
    if(val === 'all') {
      this.props.saloonListAll();
      this.setState({ selected: event });
    } else {
      this.props.saloonList(val);
      this.setState({ selected: event });
    }
}
  render() {
    const options = FILTER.options;
    const defaultOption = options[0];
    return (
      <div>
        <Header
          leftIcon={<img className="header__icon header__icon--rotate" src={IMAGES.RIGHT_ARROW} alt="Nav Icon" />}
          rightIcon={<img className="header__icon" src={IMAGES.CONTROLS} alt="Filter Icon" />}
          absolute={false}
          title="Hår"
        />
        <SaloonList
          saloons={this.props.saloons.saloonList}
          options={options}
          defaultOption={this.state.selected ? this.state.selected : null}
          filter={this.filter}
        />
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
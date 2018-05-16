import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { salonListAll, salonList } from '../actions';

import { SalonList } from '../components/salon-list';
import { Header } from '../components/header';

import { IMAGES, FILTER } from '../constants';

class SalonListContainer extends Component {
  state = {
    selected: null
  }
  componentWillMount() {
    this.props.salonListAll()
  }
  filter = (event) => {
    let val = event.value;
    if(val === 'all') {
      this.props.salonListAll();
      this.setState({ selected: event });
    } else {
      this.props.salonList(val);
      this.setState({ selected: event });
    }
}
  render() {
    const options = FILTER.options;
    return (
      <div>
        <Header
          leftIcon={<img className="header__icon header__icon--rotate" src={IMAGES.RIGHT_ARROW} alt="Nav Icon" />}
          rightIcon={<img className="header__icon" src={IMAGES.CONTROLS} alt="Filter Icon" />}
          absolute={false}
          title="Hår"
        />
        <SalonList
          salons={this.props.salons.salonList}
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
    salons: state.salons
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ salonListAll, salonList }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SalonListContainer);
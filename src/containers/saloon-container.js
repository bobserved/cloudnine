import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saloonDetail, resetSaloonDetail } from '../actions';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import StarRatingComponent from 'react-star-rating-component';

import { IMAGES } from '../constants';


class SaloonContainer extends Component {
    
    componentWillMount() {
        this.props.saloonDetail(this.props.match.params.id);
    }
    componentWillUnmount() {
      this.props.resetSaloonDetail();
    }
    saloonTemplate = (data) => (
      data.saloonData ? (
        <div className="saloon-detail">
          <div className="saloon-detail__background-img" style={{
            backgroundImage:`url(${data.saloonData[0].cover})`
          }}>
            <h3 className="saloon-detail__name">{data.saloonData[0].name}</h3>
            <div className="saloon-detail__rating">
              <StarRatingComponent 
                name="rate-saloon-1" 
                starCount={5}
                value={4}
                starColor="#b8a153"
              />
              <p className="saloon-detail__rating-details">(32)</p>
            </div>
          </div>
          <Tabs>
            <TabList>
              <Tab>Info</Tab>
              <Tab>Schema</Tab>
            </TabList>
            <TabPanel>
              <div className="saloon-detail__description">
                <div className="saloon-detail__row">
                  <img className="saloon-detail__icon" src={IMAGES.MAP_POINTER} alt="Map Icon" />
                  <p className="saloon-detail__text">{data.saloonData[0].address}, {data.saloonData[0].zip} {data.saloonData[0].city}</p>
                </div>
                <div className="saloon-detail__row">
                  <img className="saloon-detail__icon" src={IMAGES.CLOCK} alt="Clock Icon" />
                  <p className="saloon-detail__text">Öppet till {data.saloonData[0]["closing-hour"]} idag</p>
                </div>
                <div className="saloon-detail__row">
                  <img className="saloon-detail__icon" src={IMAGES.PHONE} alt="Phone Icon" />
                  <p className="saloon-detail__text">{data.saloonData[0].phone}</p>
                </div>
                <div className="saloon-detail__row">
                  <img className="saloon-detail__icon" src={IMAGES.WEB} alt="Internet Icon" />
                  <p className="saloon-detail__text">{data.saloonData[0].web}</p>
                </div>
                <div className="saloon-detail__info">
                  <p className="saloon-detail__text">{data.saloonData[0].info}</p>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Schema</h2>
            </TabPanel>
          </Tabs>
      </div> ) : null
    )
    render(){
      console.log(this.props)
        return (
          <div>
            {this.saloonTemplate(this.props.saloons)}
          </div>
        );
    }
};

const mapStateToProps = (state) => {
  return {
    saloons: state.saloons
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ saloonDetail, resetSaloonDetail }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SaloonContainer);
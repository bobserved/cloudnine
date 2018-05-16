import React,{ Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { salonDetail, resetSalonDetail } from '../actions';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import StarRatingComponent from 'react-star-rating-component';

import { Header } from '../components/header';
import { IMAGES } from '../constants';

class SalonContainer extends Component {
    
    componentWillMount() {
        this.props.salonDetail(this.props.match.params.id);
    }
    componentWillUnmount() {
      this.props.resetSalonDetail();
    }
    salonTemplate = (data) => (
      data.salonData ? (
        <div className="salon-detail">
          <div className="salon-detail__background-img" style={{
            backgroundImage:`url(${data.salonData.cover})`
          }}>
            <h3 className="salon-detail__name">{data.salonData.name}</h3>
            <div className="salon-detail__rating">
              <StarRatingComponent 
                name="rate-salon-1" 
                starCount={5}
                value={4}
                starColor="#b8a153"
              />
              <p className="salon-detail__rating-details">(32)</p>
            </div>
          </div>
          <Tabs>
            <TabList>
              <Tab>Info</Tab>
              <Tab>Schema</Tab>
            </TabList>
            <TabPanel>
              <div className="salon-detail__description">
                <div className="salon-detail__row">
                  <img className="salon-detail__icon" src={IMAGES.MAP_POINTER} alt="Map Icon" />
                  <p className="salon-detail__text">{data.salonData.address}, {data.salonData.zip} {data.salonData.city}</p>
                </div>
                <div className="salon-detail__row">
                  <img className="salon-detail__icon" src={IMAGES.CLOCK} alt="Clock Icon" />
                  <p className="salon-detail__text">Öppet till {data.salonData["closing-hour"]} idag</p>
                </div>
                <div className="salon-detail__row">
                  <img className="salon-detail__icon" src={IMAGES.PHONE} alt="Phone Icon" />
                  <p className="salon-detail__text">{data.salonData.phone}</p>
                </div>
                <div className="salon-detail__row">
                  <img className="salon-detail__icon" src={IMAGES.WEB} alt="Internet Icon" />
                  <p className="salon-detail__text">{data.salonData.web}</p>
                </div>
                <div className="salon-detail__info">
                  <p className="salon-detail__text">{data.salonData.info}</p>
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
        return (
          <div>
            <Header
              leftIcon={<img className="header__icon header__icon--rotate" src={IMAGES.RIGHT_ARROW_WHITE} alt="Nav Icon" />}
              rightIcon={<img className="header__icon" src={IMAGES.HEART} alt="Heart Icon" />}
              absolute={true}
            />
            {this.salonTemplate(this.props.salons)}
          </div>
        );
    }
};

const mapStateToProps = (state) => {
  return {
    salons: state.salons
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ salonDetail, resetSalonDetail }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SalonContainer);
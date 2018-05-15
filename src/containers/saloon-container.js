import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saloonDetail, resetSaloonDetail } from '../actions';

import StarRatingComponent from 'react-star-rating-component';


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
          <div className="saloon-detail_description">
            <p>{data.saloonData[0].address}</p>
          </div>
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
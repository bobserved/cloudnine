import React from 'react';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import { IMAGES } from '../constants';

export const SalonListItem = (props) => {
  return (
    (
      <Link to={`/salons/${props.id}`} key={props.id} className="salon-item" >
        <div
          className="salon-item__thumbnail"
          style={{ backgroundImage:`url(${props.thumbnail})`}}
        ></div>
        <div className="salon-item__mid-details">
          <h3 className="salon-item__name">{props.name}</h3>
          <div className="salon-item__rating">
            <StarRatingComponent 
              name="rate-salon-1" 
              starCount={5}
              value={4}
              starColor="#b8a153"
            />
            <p className="salon-item__rating-details">(32)</p>
          </div>
          <p className="salon-item__address">{props.address}</p>
        </div>
        <div className="salon-item__right-details">
          <div className="salon-item__price-details">
            <p className="salon-item__price">{props.price} {props.currency}</p>
            <p className="salon-item__duration">{props.duration} {props.unit}</p>
          </div>
          <img className="salon-item__arrow" src={`${IMAGES.RIGHT_ARROW}`} alt="right arrow" />
        </div>
     </Link>
     )
  );
};
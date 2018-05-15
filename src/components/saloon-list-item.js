import React from 'react';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import { IMAGES } from '../constants';

export const SaloonListItem = (props) => {
  return (
    (
      <Link to={`/saloons/${props.id}`} key={props.id} className="saloon-item" >
        <div
          className="saloon-item__thumbnail"
          style={{ backgroundImage:`url(${props.thumbnail})`}}
        ></div>
        <div className="saloon-item__mid-details">
          <h3 className="saloon-item__name">{props.name}</h3>
          <div className="saloon-item__rating">
            <StarRatingComponent 
              name="rate-saloon-1" 
              starCount={5}
              value={4}
              starColor="#b8a153"
            />
            <p className="saloon-item__rating-details">(32)</p>
          </div>
          <p className="saloon-item__address">{props.address}</p>
        </div>
        <div className="saloon-item__right-details">
          <div className="saloon-item__price-details">
            <p className="saloon-item__price">{props.price} {props.currency}</p>
            <p className="saloon-item__duration">{props.duration} {props.unit}</p>
          </div>
          <img className="saloon-item__arrow" src={`${IMAGES.RIGHT_ARROW}`} alt="right arrow" />
        </div>
     </Link>
     )
  );
};
import React from 'react';
import { SaloonListItem } from './saloon-list-item.js';

export const SaloonList = (props) => {
    return (
        <div className="saloon-list">
            { props.saloons && props.saloons.length > 0 ?
                props.saloons.map( item => <SaloonListItem key={item.id} {...item} /> ) : null
            }
        </div>
    )
}
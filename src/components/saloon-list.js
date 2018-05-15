import React from 'react';
import { SaloonListItem } from './saloon-list-item.js';
import { Filter } from './filter';

export const SaloonList = (props) => {
    const options = [
        { value: 'all', label: 'All' },
        { value: '0-249', label: 'Pris 0 - 249 kr', className: 'myOptionClassName' },
        { value: '250-500', label: 'Pris 250 - 500 kr' }
      ]
      const defaultOption = options[0]
    return (
        <div className="saloon-list">
            <Filter
                options={options}
                onChange={props.filter}
                value={defaultOption}
                placeholder="Filtrera"
            />
            { props.saloons && props.saloons.length > 0 ?
                props.saloons.map( item => <SaloonListItem key={item.id} {...item} /> ) : null
            }
        </div>
    )
}
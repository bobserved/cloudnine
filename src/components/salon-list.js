import React from 'react';
import { SalonListItem } from './salon-list-item.js';
import { Filter } from './filter';
import { FILTER } from '../constants';

export const SalonList = (props) => {
	return (
		<div className="salon-list">
			<Filter
				options={props.options}
				onChange={props.filter}
				value={props.defaultOption}
				placeholder={FILTER.placeholder}
			/>
			{ props.salons && props.salons.length > 0 ?
				props.salons.map( item => <SalonListItem key={item.id} {...item} /> ) : null
			}
		</div>
	)
}
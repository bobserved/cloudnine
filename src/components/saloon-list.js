import React from 'react';
import { SaloonListItem } from './saloon-list-item.js';
import { Filter } from './filter';
import { FILTER } from '../constants';

export const SaloonList = (props) => {
	return (
		<div className="saloon-list">
			<Filter
				options={props.options}
				onChange={props.filter}
				value={props.defaultOption}
				placeholder={FILTER.placeholder}
			/>
			{ props.saloons && props.saloons.length > 0 ?
				props.saloons.map( item => <SaloonListItem key={item.id} {...item} /> ) : null
			}
		</div>
	)
}
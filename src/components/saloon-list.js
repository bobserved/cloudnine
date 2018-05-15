import React from 'react';
import { Link } from 'react-router-dom';

export const SaloonList = (props) =>{
    return (
        <div className="saloon_container">
            { props.saloons && props.saloons.length > 0 ?
                props.saloons.map( item => (
                 <Link to={`/saloons/${item.id}`} key={item.id} className="saloons_item" >
                   
                    <div className="cover">
                       <div>
                           {item.name}
                       </div>
                    </div>
                </Link>
                )) : null
            }
    
        </div>
    )
}
import React from 'react';
import './item-list.css'

const ItemList = (props) => {

    const { onItemSelected, data, children: renderLabel } = props;

    const items = data.map((item) => {
        const { id } = item;
        const label = renderLabel(item);
        return (
            <li
                onClick={() => onItemSelected(id)}
                key={id}
                className="list-group-item">
                {label}
            </li>
        )
    });

    return(
        <div className="card">
            <ul className="list-group list-group-flush">
                {items}
            </ul>
        </div>
    )
};

export default ItemList;
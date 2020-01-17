import React from 'react';

const Filter = props => (
    <li className="app__filter">
        <h3>{props.filter.name}</h3>
        <ul>
            {Object.values(props.filter.entry).map(entry => {
                return <li><a href={entry.value} data-link={entry.value} data-label={entry.label} onClick={props.handleSelectFilter}>{entry.label}</a></li>
            })}
        </ul>
    </li>
);

export default Filter;
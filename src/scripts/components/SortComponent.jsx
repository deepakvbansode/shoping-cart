import React from 'react';
export const SortComponents = (props) => (
<div>
    <h1>Sort By</h1>
    <ul>
        {Object.keys(props.sortOptions).map((key) => <li key={key}>{props.sortOptions[key]}</li>)}
    </ul>
</div>
) ;

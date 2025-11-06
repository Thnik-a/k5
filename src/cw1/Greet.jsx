import React from 'react';

const Greet = (props) => {
    return (
        <div>
            <h3>Cześć, {props.imie}, {props.wiek}</h3>
        </div>
    );
};

export default Greet;
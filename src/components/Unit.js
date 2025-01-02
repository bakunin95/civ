import React from 'react';

const Unit = ({ unit, onClick }) => {
    return (
        <div
            onClick={() => onClick(unit)}
            style={{
                backgroundColor: 'gray',
                padding: '10px',
                margin: '5px',
                cursor: 'pointer',
            }}
        >
            Unit {unit.id}
        </div>
    );
};

export default Unit;

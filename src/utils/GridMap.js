import React from 'react';

const GridMap = () => {
    const [mapData, setMapData] = React.useState([
        ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass'],
        ['grass', 'water', 'forest', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass'],
        ['grass', 'grass', 'grass', 'forest', 'forest', 'forest', 'forest', 'forest', 'forest', 'grass'],
        ['grass', 'grass', 'forest', 'grass', 'water', 'grass', 'water', 'grass', 'grass', 'grass'],
        ['grass', 'forest', 'grass', 'forest', 'grass', 'water', 'grass', 'forest', 'grass', 'forest'],
        ['forest', 'water', 'forest', 'grass', 'water', 'grass', 'water', 'grass', 'water', 'forest'],
        ['forest', 'grass', 'forest', 'forest', 'forest', 'forest', 'forest', 'grass', 'forest', 'forest'],
        ['water', 'forest', 'forest', 'water', 'grass', 'grass', 'grass', 'forest', 'grass', 'forest'],
        ['forest', 'forest', 'forest', 'grass', 'grass', 'grass', 'forest', 'forest', 'forest', 'forest'],
        ['forest', 'forest', 'forest', 'forest', 'water', 'forest', 'water', 'grass', 'forest', 'forest'],
    ]);

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr' }}>
            {mapData.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'grid', gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr' }}>
                    {row.map((tile, tileIndex) => (
                        <div
                            key={tileIndex}
                            style={{
                                backgroundColor: tile === 'grass' ? 'green' : tile === 'water' ? 'blue' : 'brown',
                                padding: '10px',
                                border: '1px solid black',
                            }}
                        >
                            {tile}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default GridMap;
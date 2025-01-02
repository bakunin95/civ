import React, { useState } from 'react';
import AiPlayer from './components/AiPlayer';
import Map from './components/Map';
import City from './components/City';
import Unit from './components/Unit';

const App = () => {
    const [map, setMap] = useState({
        landType: Math.floor(Math.random() * 3),
        x: Math.floor(Math.random() * 10),
        y: Math.floor(Math.random() * 10)
    });
    const [units, setUnits] = useState([
        { id: 1, x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10) },
        { id: 2, x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10) }
    ]);
    const [resources, setResources] = useState(100);

    return (
        <div>
            <Map map={map} />
            <AiPlayer map={map} units={units} resources={resources} />
            <City />
            <Unit />
        </div>
    );
};

export default App;
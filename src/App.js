import React from 'react';
import Bar from './Bar/bar'
import './App.css';

function App() {
    return ( < div className = "App" >
        <Bar itemType = { 'essentials' }
        barName = { 'Clothing' }
        barAmount = { 300 }
        colour = { '#008000' }
        /> </div>
    );
}

export default App;
import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';

const App = () => {
    const cardData = data.map(card => {
       return(
        <Card 
            key={card.id}
            {...card}
        />
       )
    })

    return (
        <div>
            <Navbar />
           <section className="card--data">
             {cardData}
           </section>
        </div>
    );
}

export default App;

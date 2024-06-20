import React from 'react';
import Footer from '../../pages/Footer';
import "./Events.css"

const Events = () => {
  return (
    <div className='principal-div div-events'>
        <section>
            <img className='section-events-img' />
            <p><strong>Nome do evento</strong></p>
            <p>Descrição do evento</p>
        </section>

        <section>
            <img className='section-events-img' />
            <p><strong>Nome do evento</strong></p>
            <p>Descrição do evento</p>
        </section>

        <section>
            <img className='section-events-img' />
            <p><strong>Nome do evento</strong></p>
            <p>Descrição do evento</p>
        </section>
        
        <Footer />
        
    </div>
  );
};

export default Events;
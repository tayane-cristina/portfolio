import React from 'react';
import './PizzaGhost.css'
import Footer from '../pages/Footer';
import { useState, useEffect } from 'react';

const PizzaGhost = () => {

    const url = "http://localhost:3000/products"

    const [products, setProducts] = useState([]);
    const theBestFlavors = products.filter((flavor) => flavor.rate >= 4)

    useEffect(() => {
        async function fetchData() {

            const res = await fetch(url);
            const data = await res.json();

            setProducts(data)
        }
        fetchData()
    },[])
        
    console.log(products)

  return (
      <div className='pizzaghost principal-div'>
        <header className='pizzaghost-header'>
            <h1>Pizza GHOST</h1>
            <section className='pizzaghost-search'>
                <input className='pizzaghost-input-search' type='text' placeholder='Pizza de...'></input>
                <button className='pizzaghost-search-button' type='button'>Buscar</button>
            </section>
        </header>

        <div className='pizzaghost-content'>
            <aside className='pizzaghost-menu-navigator'>
                <h2>Menu de navegação do site</h2>
            
                <ul className='pizzaghost-ul-service'>
                    <li className='pizzaghost-li-service'>Item</li>
                    <li className='pizzaghost-li-service'>Item</li>
                    <li className='pizzaghost-li-service'>Item</li>
                    <li className='pizzaghost-li-service'>Item</li>
                    <li className='pizzaghost-li-service'>Item</li>
                </ul>
            </aside>

            <main className='pizzaghost-main'>
                <section className='pizzaghost-maketing'>
                    <button className='pizzaghost-marketing-button' type='button'>-</button>
                    <img className='pizzaghost-marketing-img' src='https://www.copaenergia.com.br/wp-content/uploads/2023/11/iStock-468515806.jpg' alt='imagem de pessoas em pizzaria'/>
                    <button className='pizzaghost-marketing-button' type='button'>+</button>
                </section>

                <section className='pizzaghost-thebest'>
                    <h3>Top 5</h3>
                    <ul className='pizzaghost-ul-thebest'>
                        {theBestFlavors.map((theBest, index) => (
                            <li className='pizzaghost-li-thebest' key={index}>
                                <img src={theBest.image} alt={`Pizza de ${theBest.displayName}`} className='pizzaghost-li-thebest-img'/>
                                <p><strong>{theBest.displayName}</strong></p>
                                <p>{theBest.description}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className='pizzaghost-all-section'>
                    <h4>Todas os pratos</h4>
                    <select>
                        <option>Salgadas</option>
                        <option>Doces</option>
                        <option>Gourmet</option>
                    </select>

                    <section className='pizzaghost-all'>
                        <ul className='pizzaghost-ul-all'>
                            {products.map((item, index) => (
                                <li className='pizzaghost-li-all' key={index}>
                                    <img className='pizzaghost-li-all-img' src={item.image} alt={`Pizza de ${item.displayName}`} />
                                    <p><strong>{item.displayName}</strong></p>
                                    <p>{item.description}</p>
                                </li>
                            ))}
                           
                        </ul>
                    </section>
                </section>
            </main> 
        </div>

        <Footer />
    </div>
  );
};

export default PizzaGhost;
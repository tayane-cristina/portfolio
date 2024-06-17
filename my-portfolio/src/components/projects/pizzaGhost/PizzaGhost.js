import React from 'react';

const PizzaGhost = () => {
  return (
    <div className='pizzaghost principal-div'>

        <header>
            <h1>Header com o título do restaurante</h1>
            <section className='pizzaghost-search'>
                <input type='text'></input>
                <button type='button'>Buscar</button>
            </section>
        </header>

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

        <section className='pizzaghost-maketing'>
            <button type='button'>Anterior</button>
            <img src='' alt='imagem de pessoas em pizzaria'/>
            <button type='button'>Próximo</button>
        </section>

        <section className='pizzaghost-thebest'>
            <ul className='pizzaghost-ul-thebest'>
                <li className='pizzaghost-li-thebest-img'><img src='' alt='IMG pizza mais vendida'/></li>
                <li className='pizzaghost-li-thebest-img'><img src='' alt='IMG pizza mais vendida'/></li>
                <li className='pizzaghost-li-thebest-img'><img src='' alt='IMG pizza mais vendida'/></li>
                <li className='pizzaghost-li-thebest-img'><img src='' alt='IMG pizza mais vendida'/></li>
                <li className='pizzaghost-li-thebest-img'><img src='' alt='IMG pizza mais vendida'/></li>
            </ul>
        </section>

        <main>
            <h3>Todas os pratos</h3>
           <select>
            <option>Salgadas</option>
            <option>Doces</option>
            <option>Gourmet</option>
           </select>

           <section className='pizzaghost-all'>
            <ul className='pizzaghost-ul-all'>
                <li className='pizzaghost-li-all'>
                    <img src='' alt='pizza' />
                    <span><strong>Pizza</strong></span>
                    <p>Description</p>
                </li>
                <li className='pizzaghost-li-all'>
                    <img src='' alt='pizza' />
                    <span><strong>Pizza</strong></span>
                    <p>Description</p>
                </li>
                <li className='pizzaghost-li-all'>
                    <img src='' alt='pizza' />
                    <span><strong>Pizza</strong></span>
                    <p>Description</p>
                </li>
                <li className='pizzaghost-li-all'>
                    <img src='' alt='pizza' />
                    <span><strong>Pizza</strong></span>
                    <p>Description</p>
                </li>
                <li className='pizzaghost-li-all'>
                    <img src='' alt='pizza' />
                    <span><strong>Pizza</strong></span>
                    <p>Description</p>
                </li>
                <li className='pizzaghost-li-all'>
                    <img src='' alt='pizza' />
                    <span><strong>Pizza</strong></span>
                    <p>Description</p>
                </li>
            </ul>
           </section>
        </main>

        <footer>
            <section className='pizzaghost-social'>
                <ul className='pizzaghost-ul-social'>
                    <li className='pizzaghost-li-social'>Facebook</li>
                    <li className='pizzaghost-li-social'>Instagram</li>
                    <li className='pizzaghost-li-social'>WhatsApp</li>
                </ul>
            </section>

            <section className='pizzaghost-where'>
                <p>Nos encontre em...</p>
            </section>

            <section className='pizzaghost-footer-logo'>
                <img src='' alt=''/>
            </section>
        </footer>
      
    </div>
  );
};

export default PizzaGhost;
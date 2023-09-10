const Home = () => {
    return <div>
        <div className="header-navbar">
            <nav>
                <ul className="ul-header">
                    <li className="li-home">Home</li>
                    <li className="li-home">About</li>
                    <li className="li-home">Projects</li>
                    <li className="li-home">Experiences</li>
                    <li className="li-home">Contact</li>
                </ul>
            </nav>
        </div>
        <div className="personal-presentation">
            <div className="presentation-in-text">
                <h1 className="principal-title">
                    <span className="hello">Hello</span>, I am Tayane Cristina!
                </h1>
                <p>I want to be a Web Developer, I'm 22 years old and I study programming on my own. 
                    Browse my page and see everything I can do.
                </p>
                <div className="header-buttons">
                    <button className="learn-more">Learn more</button>
                    <button className="get-contact">Get in contact</button>
                </div>
            </div>
            <div className="presentation-in-image">
                <img src="https://img.freepik.com/vetores-premium/conceito-de-processo-criativo-de-design-grafico_23-2148106487.jpg?w=826" alt="imagem"></img>
            </div>
        </div>
        
    </div>
};

export default Home;
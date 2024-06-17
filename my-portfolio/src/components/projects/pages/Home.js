const Home = () => {
    return <div>
        <div className="header-navbar">
            <nav className="nav-header">
                <ul className="contacts">
                    <li className="contacts-li"><a href="https://github.com/tayane-cristina">
                        <img 
                        className="icon" 
                        src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png?ga=GA1.1.2089675641.1676983403" 
                        alt="icone-github">
                        </img>
                        </a>
                    </li>
                    <li className="contacts-li"><a href="https://www.linkedin.com/in/tayane-cristina-alves-dos-santos-002334272/">
                        <img 
                        className="icon" 
                        src="https://cdn-icons-png.flaticon.com/128/61/61109.png?ga=GA1.1.2089675641.1676983403" 
                        alt="icone-linkedin">
                        </img>
                        </a>
                    </li>
                    <li className="contacts-li"><a href="tel:+5521968908287">
                        <img 
                        className="icon"
                        src="https://cdn-icons-png.flaticon.com/128/733/733641.png?ga=GA1.1.2089675641.1676983403" 
                        alt="icone-whatsapp">
                        </img>
                        </a>
                    </li>
                </ul>
                <ul className="ul-header">
                    <li className="li-home"><a className="a-topics" href="#home">Home</a></li>
                    <li className="li-home"><a className="a-topics" href="#About">About</a></li>
                    <li className="li-home"><a className="a-topics" href="#Projects">Projects</a></li>
                </ul>
            </nav>
        </div>
        <div className="personal-presentation">
            <div className="presentation-in-text">
                <h1 className="principal-title">
                    <span className="hello">Hello</span>, I am Tayane Cristina!
                </h1>
                <p className="presentation-text">I want to be a Web Developer, I'm 22 years old and I study programming on my own. 
                    Browse my page and see everything I can do.
                </p>
                <div className="header-buttons">
                    <button className="learn-more">Learn more</button>
                    <button className="get-contact">Get in contact</button>
                </div>
            </div>
        </div>
        
    </div>
};

export default Home;
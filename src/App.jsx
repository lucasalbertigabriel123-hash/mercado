import Header from './components/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Offers from './sections/Offers'
import Careers from './sections/Careers'
import Categories from './sections/Categories'
import Stores from './sections/Stores'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Categories />
        <About />
        <Offers />
        <Careers />
        <Stores />
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div>
            <h2>Mercado Alberti</h2>
            <p>Mercado Alberti, no coração do Sarandi.</p>
          </div>

          <div className="footer-links">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre nós</a>
            <a href="#ofertas">Ofertas</a>
            <a href="#trabalhe">Trabalhe Conosco</a>
            <a href="#lojas">Nossas Lojas</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Mercado Alberti. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  )
}

export default App
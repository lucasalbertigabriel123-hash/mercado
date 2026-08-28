function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <a href="#inicio" className="logo">
          <span>Mercado</span>
          <strong>Alberti</strong>
        </a>

        <nav className="nav">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre nós</a>
          <a href="#trabalhe">Trabalhe Conosco</a>
        </nav>

        <a href="#ofertas" className="ofertas-button">
          Ofertas
        </a>

      </div>
    </header>
  )
}

export default Header
import logoAlberti from '../assets/logo-alberti.png'

function Hero() {
  return (
    <section className="hero" id="inicio">

      <div className="hero-container">

        <div className="hero-content">

          <div className="hero-tag">
            <span></span>
            MERCADO ALBERTI
          </div>

          <h1>
            O preço bom
            <br />
            <strong>mora aqui.</strong>
          </h1>

          <p className="hero-description">
            Promoções toda semana, produtos de qualidade
            e aquele atendimento que faz parte do Sarandi.
          </p>

          <div className="hero-buttons">

            <a
              href="https://www.instagram.com/mercado_alberti/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button-primary"
            >
              Ver ofertas
              <span>↗</span>
            </a>

            <a
              href="#sobre"
              className="hero-button-secondary"
            >
              Conheça o Alberti
              <span>↓</span>
            </a>

          </div>

        </div>


        <div className="hero-visual">

          <div className="hero-circle hero-circle-one"></div>

          <div className="hero-circle hero-circle-two"></div>


          <div className="hero-card">

            <div className="hero-card-top">
              <span>OFERTAS</span>
              <span>DA SEMANA</span>
            </div>


            <div className="hero-card-logo">

              <img
                src={logoAlberti}
                alt="Logo Mercado Alberti"
              />

            </div>


            <div className="hero-card-bottom">

              <span>Mercado Alberti</span>

              <span>
                ♥ Sarandi
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero
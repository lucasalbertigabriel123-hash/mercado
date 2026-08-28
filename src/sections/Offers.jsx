function Offers() {
  return (
    <section className="offers" id="ofertas">

      <div className="offers-container">

        <div className="offers-content">

          <span className="section-tag">
            OFERTAS
          </span>

          <h2>
            Quer saber das
            <br />
            ofertas da semana?
          </h2>

          <p>
            Acompanhe nossas ofertas, novidades e produtos
            diretamente pelo Instagram do Mercado Alberti.
          </p>

          <a
            href="https://www.instagram.com/mercado_alberti/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-button"
          >
            Acompanhar no Instagram
            <span>↗</span>
          </a>

        </div>

        <div className="offers-box">
          <div className="offers-box-inner">
            <span>@</span>
            <strong>OFERTAS</strong>
            <small>toda semana</small>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Offers
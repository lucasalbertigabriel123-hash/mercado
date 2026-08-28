function Stores() {
  const stores = [
    {
      number: '01',
      address: 'Av. Faria Lobato, 153',
      location: 'Esquina com Toledo Piza',
      hours: [
        { day: 'Seg - Sex', time: '07:30 - 20:30' },
        { day: 'Sábado', time: '08:00 - 20:30' },
        { day: 'Dom / Feriado', time: '08:00 - 13:00' }
      ],
      parking: 'Estacionamento no terreno (atrás) e na rua'
    },
    {
      number: '02',
      address: 'Av. Faria Lobato, 535',
      location: 'Esquina com Av. 21 de Abril',
      hours: [
        { day: 'Seg - Sab', time: '08:00 - 20:00' },
        { day: 'Dom / Feriado', time: '08:00 - 13:00' }
      ],
      parking: 'Estacionamento na rua'
    }
  ]

  return (
    <section className="stores" id="lojas">

      <div className="section-container">

        <div className="stores-heading">
          <div>
            <span className="section-number">03</span>
            <p className="section-label">NOSSAS LOJAS</p>
          </div>

          <h2>
            Visite o Mercado Alberti
            <br />
            no Sarandi.
          </h2>

          <p className="section-description">
            Duas lojas prontas para atender você com
            qualidade, variedade e os melhores preços do bairro.
          </p>
        </div>

        <div className="stores-grid">
          {stores.map((store) => (
            <div className="store-card" key={store.number}>

              <div className="store-header">
                <span className="store-number">{store.number}</span>
                <h3>{store.address}</h3>
              </div>

              <p className="store-location">
                {store.location}
              </p>

              <div className="store-hours">
                <h4>Horários</h4>
                <ul>
                  {store.hours.map((hour, index) => (
                    <li key={index}>
                      <span className="day">{hour.day}</span>
                      <span className="time">{hour.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="store-parking">
                <span className="parking-icon">🅿️</span>
                <p>{store.parking}</p>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  )
}

export default Stores

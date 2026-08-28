function Categories() {
  const categories = [
    {
      number: '01',
      title: 'Mercearia',
      text: 'Tudo para as compras do dia a dia.'
    },
    {
      number: '02',
      title: 'Hortifruti',
      text: 'Produtos para deixar sua mesa completa.'
    },
    {
      number: '03',
      title: 'Bebidas',
      text: 'Opções para todos os momentos.'
    },
    {
      number: '04',
      title: 'Açougue',
      text: 'Qualidade para suas refeições.'
    }
  ]

  return (
    <section className="categories">

      <div className="section-container">

        <div className="section-heading">

          <div>
            <span className="section-number">
              01
            </span>

            <p className="section-label">
              O QUE VOCÊ ENCONTRA
            </p>
          </div>

          <h2>
            Tudo o que você precisa,
            <br />
            perto de você.
          </h2>

          <p className="section-description">
            Do básico para a sua casa aos produtos para
            aquele momento especial. No Alberti, você
            encontra praticidade em um só lugar.
          </p>

        </div>

        <div className="categories-grid">

          {categories.map((category) => (
            <div className="category-card" key={category.number}>

              <span className="category-number">
                {category.number}
              </span>

              <div className="category-content">

                <h3>
                  {category.title}
                </h3>

                <p>
                  {category.text}
                </p>

              </div>

              <span className="category-arrow">
                →
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Categories
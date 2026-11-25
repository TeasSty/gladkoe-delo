import { BOOK_URL, VK_URL, complexes, cosmo } from '../data'

export function Prices() {
  return (
    <section className="prices" id="prices" aria-labelledby="prices-title">
      <div className="section-head">
        <p className="eyebrow">Прайс</p>
        <h2 id="prices-title">Комплексы и косметология</h2>
        <p className="section-lead">
          Актуальные позиции из VK Маркета. Полный прайс и запись — в одном касании.
        </p>
      </div>

      <div className="price-block">
        <h3>Лазерные комплексы</h3>
        <ul className="price-list">
          {complexes.map((item) => (
            <li key={item.name}>
              <div>
                <span className="price-name">{item.name}</span>
                {item.hit ? <span className="hit">хит</span> : null}
              </div>
              <span className="price-value">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="price-block">
        <h3>Косметология</h3>
        <ul className="price-list">
          {cosmo.map((item) => (
            <li key={item.name}>
              <span className="price-name">{item.name}</span>
              <span className="price-value muted">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="price-actions">
        <a className="btn btn-teal" href={BOOK_URL} target="_blank" rel="noreferrer">
          Записаться
        </a>
        <a className="text-link" href={VK_URL} target="_blank" rel="noreferrer">
          Открыть прайс во VK →
        </a>
      </div>
    </section>
  )
}

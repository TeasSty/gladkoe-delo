import { BOOK_URL, PHONE, PHONE_HREF, UDS_URL } from '../data'

export function Booking() {
  return (
    <section className="booking" id="booking" aria-labelledby="booking-title">
      <div className="booking-panel">
        <p className="eyebrow light">Запись</p>
        <h2 id="booking-title">Готовы к первой вспышке?</h2>
        <p>
          Запись через YClients / Taplink. Выберите филиал, зону или комплекс — администратор
          подтвердит время.
        </p>
        <div className="hero-cta">
          <a className="btn btn-light" href={BOOK_URL} target="_blank" rel="noreferrer">
            Открыть запись
          </a>
          <a className="btn btn-outline-light" href={PHONE_HREF}>
            {PHONE}
          </a>
        </div>
        <a className="uds-link" href={UDS_URL} target="_blank" rel="noreferrer">
          Забрать 500 бонусов в UDS →
        </a>
      </div>
    </section>
  )
}

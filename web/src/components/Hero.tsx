import { BOOK_URL } from '../data'

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Главный экран">
      <div className="hero-media" aria-hidden="true">
        <img src="/images/hero.jpg" alt="" />
        <div className="hero-flash" />
        <div className="hero-shade" />
      </div>
      <div className="hero-content">
        <img
          className="hero-logo"
          src="/images/logo.jpg"
          alt="Гладкое дело"
          width={132}
          height={132}
        />
        <p className="hero-kicker">Центр эстетики лица и тела · Дубна</p>
        <h1>Гладкость — дело курса</h1>
        <p className="hero-lead">Лазер · LPG · косметология · два адреса</p>
        <div className="hero-cta">
          <a className="btn btn-teal" href={BOOK_URL} target="_blank" rel="noreferrer">
            Записаться
          </a>
          <a className="btn btn-ghost" href="#branches">
            Выбрать филиал
          </a>
        </div>
      </div>
    </section>
  )
}

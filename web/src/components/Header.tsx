import { BOOK_URL, PHONE, PHONE_HREF } from '../data'

export function Header() {
  return (
    <header className="site-header">
      <a className="brand-lockup" href="#top" aria-label="Гладкое дело — наверх">
        <img src="/images/logo.jpg" alt="Гладкое дело" width={44} height={44} />
      </a>

      <div className="header-mid">
        <a className="header-meta" href="#branches">
          <span className="header-meta-place">Дубна</span>
          <span className="header-meta-dot" aria-hidden="true" />
          <span>2 адреса</span>
        </a>
        <nav className="site-nav" aria-label="Разделы">
          <a href="#zones">Зоны</a>
          <a href="#prices">Цены</a>
          <a href="#branches">Филиалы</a>
        </nav>
      </div>

      <div className="header-actions">
        <a className="phone-link" href={PHONE_HREF}>
          {PHONE}
        </a>
        <a className="btn btn-teal" href={BOOK_URL} target="_blank" rel="noreferrer">
          Записаться
        </a>
      </div>
    </header>
  )
}

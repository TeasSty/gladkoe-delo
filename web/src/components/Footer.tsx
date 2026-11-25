import { PHONE_HREF, VK_URL, branches } from '../data'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src="/images/logo.jpg" alt="" width={56} height={56} />
        <div>
          <strong>Гладкое дело</strong>
          <p>Центр эстетики лица и тела Алисы Евдокимовой</p>
        </div>
      </div>
      <div className="footer-cols">
        <div>
          <p className="footer-label">Адреса</p>
          {branches.map((b) => (
            <p key={b.id}>{b.address}</p>
          ))}
        </div>
        <div>
          <p className="footer-label">Связь</p>
          <p>
            <a href={PHONE_HREF}>+7 (995) 508-08-05</a>
          </p>
          <p>
            <a href={VK_URL} target="_blank" rel="noreferrer">
              VK сообщество
            </a>
          </p>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Гладкое дело · Дубна</p>
    </footer>
  )
}

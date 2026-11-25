import { BOOK_URL, PHONE_HREF, branches } from '../data'

export function Branches() {
  return (
    <section className="branches" id="branches" aria-labelledby="branches-title">
      <div className="section-head">
        <p className="eyebrow">Два адреса</p>
        <h2 id="branches-title">Выберите филиал</h2>
        <p className="section-lead">Один бренд, два кабинета на пр-те Боголюбова. Запись — в удобный.</p>
      </div>
      <div className="branch-row">
        {branches.map((branch) => (
          <article className="branch" key={branch.id}>
            <h3>{branch.title}</h3>
            <p>{branch.address}</p>
            <p className="branch-meta">{branch.hours}</p>
            <div className="branch-actions">
              <a className="btn btn-teal" href={BOOK_URL} target="_blank" rel="noreferrer">
                Записаться сюда
              </a>
              <a className="text-link" href={branch.map} target="_blank" rel="noreferrer">
                На карте
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="branch-phone">
        Или сразу по телефону:{' '}
        <a href={PHONE_HREF}>+7 (995) 508-08-05</a>
      </p>
    </section>
  )
}

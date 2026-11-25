import { stripItems } from '../data'

export function GalleryStrip() {
  return (
    <section className="gallery-strip" id="zones" aria-labelledby="zones-title">
      <div className="section-head">
        <p className="eyebrow">Лента процедур</p>
        <h2 id="zones-title">Зоны и процедуры</h2>
        <p className="section-lead">
          Одна лента — три направления центра. Листайте кадры и выбирайте, с чего начать курс.
        </p>
      </div>
      <div className="strip-track" tabIndex={0} aria-label="Галерея процедур">
        {stripItems.map((item) => (
          <article className="strip-frame" key={item.id}>
            <div className="strip-media">
              <img src={item.image} alt="" />
            </div>
            <div className="strip-copy">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

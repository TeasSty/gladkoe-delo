export function Directions() {
  return (
    <section className="directions" aria-labelledby="dir-title">
      <div className="directions-grid">
        <div>
          <p className="eyebrow">Как устроен курс</p>
          <h2 id="dir-title">Вспышка. Пауза. Гладкость.</h2>
          <p className="section-lead">
            Лазер работает циклами роста волос. Мы собираем план по зонам, ведём абонементы и
            подсказываем, когда возвращаться — без гонки и лишнего шума.
          </p>
        </div>
        <ol className="protocol">
          <li>
            <span>01</span>
            <div>
              <strong>Зона или комплекс</strong>
              <p>S / M / L и отдельные зоны — как удобнее по времени и бюджету.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <strong>Филиал</strong>
              <p>Боголюбова 22А или 39 — один телефон, два кабинета.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <strong>Курс</strong>
              <p>Серия вспышек с паузами. Бонусы UDS — за возвращения.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  )
}

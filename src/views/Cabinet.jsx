const React = require('react');
const Layout = require('./Layout');

function Cabinet({ user, userCards }) {
  return (
    <Layout user={user}>
      <div className="cabinetMine">
        <div>
          <h2>Добавить карточку на продажу</h2>
          <div className="cabitetInput">
            <form method="POST" action="/cabinet" className="cabinetForm">
              <div className="mb-3">
                <label htmlFor="exampleInputTitle" className="form-label">Наименование</label>
                <textarea type="title" name="title" className="form-control" id="exampleInputTitle" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputCost" className="form-label">Цена</label>
                <textarea type="cost" name="cost" className="form-control" id="exampleInputCost" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputURL" className="form-label">Ссылка на обложку</label>
                <textarea type="link" name="link" className="form-control" id="exampleInputURL" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputURL" className="form-label">Описание</label>
                <textarea type="description" name="description" className="form-control" id="exampleInputDescription" />
              </div>
              <label htmlFor="exampleInputURL" className="form-label">Состояние</label>
              <select name="condition" className="form-select" aria-label="Default select example">
                <option selected>Идельное</option>
                <option value="Хорошее">Хорошее</option>
                <option value="Удовлетворительное">Удовлетворительное</option>
                <option value="Плохое">Плохое</option>

              </select>
              <button type="submit" className="btn btn-primary">Загрузить</button>
            </form>
          </div>
        </div>

        <div className="cabinetCards">
          <div className="row row-cols-1 row-cols-md-2 g-4">

            {userCards.map((card) => (
              <div className="col">
                <div className="card">
                  <img src={card.link} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">Наименование:{card.title}</p>
                    <p className="card-text">Цена:{card.cost}</p>
                    <p className="card-text">Состояние:{card.condition}</p>
                    <a style={{ marginTop: 20, marginRight: 20 }} href={`/change/${card.id}`} className="btn btn-warning">Редактировать</a>
                    <a style={{ marginTop: 20, marginRight: 20 }} href={`/cabinet/delete/${card.id}`} className="btn btn-warning">Удалить</a>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Cabinet;

const React = require('react');
const Layout = require('./Layout');

function Cabinet({ user }) {
  return (
    <Layout user={user}>
      <div className="cabinetMine">
      <div>
        <h2>Добавить карточку на продажу</h2>
        <div className="cabitetInput">
          <form method="POST" action="/cabinet" className='cabinetForm'>
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
              <option value="1">Хорошее</option>
              <option value="2">Удовлетворительное</option>
              <option value="3">Плохое</option>

            </select>
            <button type="submit" className="btn btn-primary">Загрузить</button>
          </form>
        </div>
      </div>

      <div className="cabinetCards">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <img src="https://www.goha.ru/s/E:Ca/6X/MghqAkRsIR.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Наименование:</p>
                <p className="card-text">Цена:</p>
                <p className="card-text">Состояние:</p>
                <p className="card-text">Где находится:</p>
                <button type="submit" name="delCard" className="btn btn-primary">Удалить карточку</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="https://www.goha.ru/s/E:CL/eX/SP0SMskkme.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Наименование:</p>
                <p className="card-text">Цена:</p>
                <p className="card-text">Состояние:</p>
                <p className="card-text">Где находится:</p>
                <button type="submit" name="delCard" className="btn btn-primary">Удалить карточку</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="https://mtgsale.ru/cardImage/M19/RUS/154.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Наименование:</p>
                <p className="card-text">Цена:</p>
                <p className="card-text">Состояние:</p>
                <p className="card-text">Где находится:</p>
                <button type="submit" name="delCard" className="btn btn-primary">Удалить карточку</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="https://mtgsale.ru/cardImage/M19/RUS/296.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Наименование:</p>
                <p className="card-text">Цена:</p>
                <p className="card-text">Состояние:</p>
                <p className="card-text">Где находится:</p>
                <button type="submit" name="delCard" className="btn btn-primary">Удалить карточку</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

    </Layout>
  );
}

module.exports = Cabinet;

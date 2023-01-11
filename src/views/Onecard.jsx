const React = require('react');
const Layout = require('./Layout');

function Onecard({ user, oneCard }) {
  return (
    <Layout user={user}>
      <div className="cabinetMine">
        <div>
          <div className="cabitetInput">
            <form method="POST" action={`/cabinet/save/${oneCard.id}`} className="cabinetForm">
              <div className="mb-3">
                <label htmlFor="exampleInputTitle" className="form-label">Наименование</label>
                <textarea type="title" name="title" className="form-control" id="exampleInputTitle" placeholder="Наименование" value={oneCard.title}/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputCost" className="form-label">Цена</label>
                <textarea type="cost" name="cost" className="form-control" id="exampleInputCost" value={oneCard.cost}/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputURL" className="form-label">Ссылка на обложку</label>
                <textarea type="link" name="link" className="form-control" id="exampleInputURL" value={oneCard.link}/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputURL" className="form-label">Описание</label>
                <textarea type="description" name="description" className="form-control" id="exampleInputDescription" value={oneCard.description}/>
              </div>
              <label htmlFor="exampleInputURL" className="form-label">Состояние</label>
              <select name="condition" className="form-select" aria-label="Default select example">
                <option selected>Идельное</option>
                <option value="Хорошее">Хорошее</option>
                <option value="Удовлетворительное">Удовлетворительное</option>
                <option value="Плохое">Плохое</option>
              </select>
              <button type="submit" className="btn btn-primary">Сохранить</button>
            </form>
          </div>
        </div>

        <div className="cabinetCards">
          <div className="row row-cols-1 row-cols-md-2 g-4">
              <div className="col">
                <div className="card">
                  <img src={oneCard.link} className="card-img-top" alt="..." />
                </div>
              </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Onecard;

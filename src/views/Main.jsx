/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

function Main({ allCard, user }) {
  return (
    <Layout user={user}>
    <label htmlFor="exampleInputURL" className="form-label filter" key="filter-label"></label>
      <select className="form-select filter" aria-label="Default select example" key="filter" placeholder="Фильтровать">
        <option selected>Фильтровать</option>
        <option value="1">Москва</option>
        <option value="2">Рига</option>
        <option value="3">Омск</option>
        <option value="4">Курск</option>
      </select>
              <input type="title" name="title" className="form-control search" id="exampleInputTitle" placeholder="Поиск"/>
      {user ? (
        <div className="d-flex flex-row row row-cols-2 row-cols-md-5 g-2 g-lg-3 ">
          {allCard.map((card) => (
            <div className="d-flex flex-row bd-highlight mb-3 d-flex justify-content-around row-cols-1 row-cols-md-2 g-4 cardAll">
              <div className="col-sm-6 ">
                <div className="card ">
                  <div className="card-body cardbody mainCards">
                    <a href={`/${card.id}`}><h6 className="text-center">{card.title}</h6></a>
                    <img src={card.link} className="card-img-top cardimg" alt="card-img" />
                    <h5 className="text-center">{card.status }</h5>
                    <button type="submit" className="btn btn-primary center-block btnBuy">Добавить в корзину</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="d-flex flex-row row row-cols-1 row-cols-md-5 g-6">
          {allCard.map((card) => (
            <div className="d-flex flex-row bd-highlight mb-3 d-flex justify-content-around row row-cols-1 row-cols-md-2 g-4 cardAll">
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <a href={`/${card.id}`}><h6 className="text-center">{card.title}</h6></a>
                    <img src={card.link} className="card-img-top cardimg" alt="card-img" />
                    <h5 className="text-center">{card.status }</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
}

module.exports = Main;

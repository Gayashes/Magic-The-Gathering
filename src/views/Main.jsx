/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

function Main({ allCard, user }) {
  return (
    <Layout user={user}>
      <label htmlFor="exampleInputURL" className="form-label filter" key="filter-label" />
      <input type="text" data-cardid="maincardAll" className="form-control filter cities" placeholder="Фильровать по городу" name="city" list="cities" />
      <datalist id="cities">
        <option value="Москва" />
        <option value="Москва и МО" />
        <option value="Санкт-Петербург" />
        <option value="Севастополь" />
        <option value="Владивосток" />
        <option value="Екатеринбург" />
      </datalist>
      <input type="title" name="title" className="form-control search" id="exampleInputTitle" placeholder="Поиск" />
      {user ? (
        <form method="POST" action="/basket" id="cardForm">
          <div className="d-flex flex-row row row-cols-2 row-cols-md-5 g-2 g-lg-3 ">
            {allCard.map((card) => (
              <div className="d-flex flex-row bd-highlight mb-3 d-flex justify-content-around row-cols-1 row-cols-md-2 g-4 cardAll">
                <div className="col-sm-6 ">
                  <div className="card maincardAll">
                    <div className="card-body cardbody mainCards">
                      <a className="oneCard" href={`/onecard/${card.id}`}>
                        <img src={card.link} className="card-img-top cardimg" alt="card-img" />
                      </a>
                      <h5 className="text-center">{card.status }</h5>
                      <a href={`/onecard/${card.id}`} className="cardtitle">{card.title}</a>
                      <h5 className="text-center">{card.location}</h5>

                      <button id={card.id} data-userid={card.user_id} type="click" className="btn btn-secondary center-block btnBuy">Добавить в корзину</button>

                      <h5 className="text-center">
                        Стоимость:
                        {card.cost}
                        $
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </form>
      ) : (
        <div className="d-flex flex-row row row-cols-2 row-cols-md-5 g-2 g-lg-3">
          {allCard.map((card) => (
            <div className="d-flex flex-row bd-highlight mb-3 d-flex justify-content-around row-cols-1 row-cols-md-2 g-4 cardAll">
              <div className="col-sm-6">
                <div className="card maincardAll">
                  <div className="card-body cardbody mainCards">
                    <a className="oneCard" href={`/onecard/${card.id}`}>
                      <img src={card.link} className="card-img-top cardimg" alt="card-img" />
                    </a>
                    <h5 className="text-center">{card.status }</h5>
                    <a href={`/${card.id}`} className="cardtitle">{card.title}</a>
                    <h5 className="text-center">{card.location}</h5>
                    <h5 className="text-center">
                      Стоимость:
                      {card.cost}
                      $
                    </h5>
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

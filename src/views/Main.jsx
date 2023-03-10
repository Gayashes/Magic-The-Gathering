/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

function Main({ allCard, user }) {
  return (
    <Layout user={user}>
      <div className='vsefiltr'>
      <form className="maimFilter" method="POST" action="/filter">
        {/* <label htmlFor="exampleInputURL" className="form-label filter" key="filter-label" /> */}
        {/* <h6 type="text" data-cardid="maincardAll" className="form-control filter cities"  name="city" list="cities">Фильтровать по городу</h6> */}
        <h4>Фильтровать по городу </h4>
        <div className="newdivfilt1">
        <select name="filter" id="citiesSelect">
          <option />
          <option>Москва</option>
          <option>МО</option>
          <option>Санкт-Петербург</option>
          <option>Севастополь</option>
          <option>Владивосток</option>
          <option>Екатеринбург</option>
          <option>Астрахань</option>
        </select>
        <button id="filterfetch" type="click" className="btn btn-primary">Загрузить</button>
        </div>
      </form>
      <form className="searchPost" method="POST" action="/search">
      <h4>Фильтровать по названию</h4>
        <input type="title" name="titlesearch" className="form-control search" id="123" placeholder="Поиск" />
        <button id="searchfetch" type="click" className="btn btn-primary">Поиск</button>

      </form>
      </div>
      <div className="scrollform">

        {user ? (
          <form method="POST" action="/basket" id="cardForm">
            <div className="content d-flex flex-row row row-cols-2 row-cols-md-5 g-2 g-lg-3 ">
              {allCard.map((card) => (
                <div className="d-flex flex-row bd-highlight mb-3 d-flex justify-content-b row-cols-1 row-cols-md-2 g-4 cardAll">
                  <div className="col-sm-6 ">
                    <div className="card maincardAll">
                      <div className="card-body cardbody mainCards">
                        <a className="oneCard" href={`/onecard/${card.id}`}>
                          <img src={card.link} className="card-img-top cardimg" alt="card-img" />
                        </a>
                        <p className="text-center status">{card.status}</p>
                        <a href={`/onecard/${card.id}`} className="cardtitle" style={{ color: '#af8b4c' }}>{card.title}</a>
                        <h5 className="text-center">{card.location}</h5>
                        { card.status ? (
                          <button id={card.id} data-userid={card.user_id} type="click" className="btn center-block btnBuy">Добавить в корзину</button>
                        ) : (
                    <button id={card.id} data-userid={card.user_id} type="click" className="btn center-block btnBuy" disabled="true">Добавлено</button>
                        ) }
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
          <div className="content d-flex flex-row row row-cols-2 row-cols-md-5 g-2 g-lg-3">
            {allCard.map((card) => (
              <div className="d-flex flex-row bd-highlight mb-3 d-flex justify-content-between row-cols-1 row-cols-md-2 g-4 cardAll">
                <div className="col-sm-6">
                  <div className="card maincardAll">
                    <div className="card-body cardbody mainCards">
                      <a className="oneCard" href={`/onecard/${card.id}`}>
                        <img src={card.link} className="card-img-top cardimg" alt="card-img" />
                      </a>

                      <h5 className="text-center status">{card.status }</h5>
                      <a href={`/${card.id}`} className="cardtitle" style={{ color: '#af8b4c' }}>{card.title}</a>

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

      </div>

    </Layout>
  );
}

module.exports = Main;

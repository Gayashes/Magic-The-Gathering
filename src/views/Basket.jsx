/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
const React = require('react');
const Layout = require('./Layout');

function Basket({ user, userBasket }) {
  return (
    <Layout user={user}>

      <div className="basket">
        <h1>
          Отличный выбор,
          {' '}
          {user}
        </h1>
        <div id="basketcardForm">
          <div className="d-flex flex-row row row-cols-2 row-cols-md-5 g-2 g-lg-3 ">
            {userBasket.map((card) => (
              <div className="d-flex flex-row bd-highlight mb-3 d-flex justify-content-around row-cols-1 row-cols-md-2 g-4 cardAll">
                <div className="col-sm-6 ">
                  <div className="card maincardAll">
                    <div className="card-body cardbody mainCards">
                      <img src={card.Card.link} className="card-img-top cardimg" alt="card-img" />
                      <h5 className="text-center">{card.Card.status }</h5>
                      <a href={`/${card.Card.id}`} className="cardtitle">{card.Card.title}</a>
                      <h5 className="text-center">{card.Card.location}</h5>
                    </div>
                    <button id={card.id} data-userid={card.user_id} type="click" className="btn btn-outline-danger busketdelete">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button type="button" className="btn-success">Оформить заказ</button>
      </div>

    </Layout>
  );
}

module.exports = Basket;

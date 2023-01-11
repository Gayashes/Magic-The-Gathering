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
        <form method='POST' action="/basket" id="cardForm">
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
                </div>
              </div>
            </div>
          ))}
        </div>
        </form>
        <button type="button" className="btn-success">Оформить заказ</button>
      </div>

    </Layout>
  );
}

module.exports = Basket;

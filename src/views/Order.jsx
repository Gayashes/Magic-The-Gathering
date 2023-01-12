/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
const React = require('react');
const Layout = require('./Layout');

function Basket({ user, userBasket, sum }) {
  return (
    <Layout user={user}>
      <div className="basket">
        <h1>
          Ваш заказ,
          {' '}
          {user}
          , на сумму
          {' '}
          { sum }
          {' '}
          $ ;
        </h1>
        <table>
          <tr>
            <td>Цена</td>
            <td>Наименование</td>
            <td>Состояние</td>
            <td>Локация</td>
            <td>E-mail продавца</td>
          </tr>

          {userBasket.map((card) => (
            <tr>
              <td>{card.Card.cost}</td>
              <td>{card.Card.title}</td>
              <td>{card.Card.condition}</td>
              <td>{card.Card.location}</td>
              <td>{card.Card.email}</td>
            </tr>
          ))}
        </table>
        <div>
          <a style={{ marginTop: 20, marginRight: 20 }} id="orderBtn" href="/order/send" className="btn btn-warning">Купить</a>
        </div>

      </div>
    </Layout>
  );
}

module.exports = Basket;

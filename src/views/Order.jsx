/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
const React = require('react');
const Layout = require('./Layout');

function Basket({ user, userBasket, sum }) {
  return (
    <Layout user={user}>
      <div className="basket">
        <h1 className="sizeorder">
          Ваш заказ,
          {' '}
          {user}
<<<<<<< HEAD
          ;
=======
          , на сумму
          { sum }
          {' '}
          $ ;
>>>>>>> b6b00378419248a51b49faf05659dc9af2cce44e
        </h1>
        <table className="sizeorder">
          <div className="orderDiv">
            <tr>
              <td className="orderstat">Цена</td>
              <td className="orderstat">Наименование</td>
              <td className="orderstat">Состояние</td>
              <td className="orderstat">Локация</td>
              <td className="orderstat">E-mail продавца</td>
            </tr>
          </div>
          {userBasket.map((card) => (
            <div className="orderDiv">
              <tr>
                <td className="orderstat">{card['Card.cost']}</td>
                <td className="orderstat">{card['Card.title']}</td>
                <td className="orderstat">{card['Card.condition']}</td>
                <td className="orderstat">{card['Card.location']}</td>
                <td className="orderstat">{card['Card.email']}</td>
                
              </tr>
            </div>
            
          ))}
          
        </table>
        <div className="buyorderDiv">
          <a style={{ marginTop: 20, marginRight: 20 }} id="orderBtn" href="/order/send" className="btn btn-warning buyorder">Купить</a>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Basket;

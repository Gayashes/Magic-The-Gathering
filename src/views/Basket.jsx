const React = require('react');
const Layout = require('./Layout');

function Basket({ user, basket }) {
  return (
    <Layout user={user}>

      <div className="basket">
        <h1>Отличный выбор, {user}</h1>
       
          <button type="button" className="btn-success">Оформить заказ</button>
        </div>

      </div>
    </Layout>
  );
}

module.exports = Basket;

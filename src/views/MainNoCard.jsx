/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

function MainNoCard({ user }) {
  return (
    <Layout user={user}>
      <h2 className="text-center">Нет карточек в продаже, создайте первую в личном кабинете!</h2>
    </Layout>
  );
}

module.exports = MainNoCard;

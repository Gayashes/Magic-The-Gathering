/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

module.exports = function Error({ message, error, user }) {
  return (
    <Layout user={user}>
      <h1>{message}</h1>
      <h2>{error.status}</h2>
      <pre>{error.stack}</pre>
    </Layout>
  );
};

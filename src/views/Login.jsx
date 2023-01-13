/* eslint-disable jsx-a11y/no-redundant-roles */
const React = require('react');

const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <div className="form">
        <form className="form-horizontal" role="form" method="POST">
          <div className="form-group">
            <div className="form-group">
              <label htmlFor="inputEmail3" className="col-sm-2 control-label">Логин</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" placeholder="Логин" name="name" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword3" className="col-sm-2 control-label">Пароль</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" placeholder="Пароль" name="password" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10" />
            </div>
          </div>
          <div className="hint">
              <h5>
                Ещё не зарегестрированы?
                {' '}
                <a href="/registration">Зарегестрироваться</a>
              </h5>
            </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default btn-sm">Войти</button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

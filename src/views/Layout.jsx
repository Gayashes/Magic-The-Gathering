const React = require('react');

function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || 'MagicGathering'}</title>
        <link rel="stylesheet" href="https://unpkg.com/purecss@2.1.0/build/pure-min.css" integrity="sha384-yHIFVG6ClnONEA5yB5DJXfW2/KC173DIQrYoZMEtBvGzmf0PKiGyNEqe9N6BNDBH" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/css/style.css" />

      </head>
      <body>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand">
              <img src="/images/download.png" width="60" height="60" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link" aria-current="page" href="/#">Регистрация</a>
              </div>
            </div>
          </div>
        </nav>
        <div className="container">{children}</div>

        <footer className="bg-light text-center text-lg-start footer">
          <div className="text-center p-3">
            <p> Наши контактные данные </p>
            <a className="firstcode" href="https://elbrusboot.camp/" style={{ color: 'rgba(237, 195, 60, 0.872)' }}>Elbrus 2022</a>
          </div>
        </footer>
      </body>
    </html>
  );
}

module.exports = Layout;

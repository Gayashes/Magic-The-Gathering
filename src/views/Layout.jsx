/* eslint-disable jsx-a11y/alt-text */
const React = require('react');

function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="images/download.png" type="image/png" />
        <title>MagicGathering</title>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
        <script defer src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossOrigin="anonymous" />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://unpkg.com/purecss@2.1.0/build/pure-min.css" integrity="sha384-yHIFVG6ClnONEA5yB5DJXfW2/KC173DIQrYoZMEtBvGzmf0PKiGyNEqe9N6BNDBH" crossOrigin="anonymous" />
        <link rel="stylesheet" defer href="/css/style.css" />
        <script defer src="/js/application.js" />
      </head>
      <body>
        { user ? (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">
                  <img src="/images/download.png" width="60" height="50" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <a className="nav-link" aria-current="page" href="/cabinet">
                      Ваш личный кабинет,
                      {user}
                    </a>
                  </div>
                  <div className="navbar-nav">
                    <a className="nav-link" aria-current="page" href="/logout">
                      Выйти
                    </a>
                  </div>
                  <div className="navbar-nav">
                    <a className="nav-link" aria-current="page" href="/basket">
                      Корзина
                    </a>
                  </div>
                </div>
              </div>
            </nav>
        )
          : (
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img src="/images/download.png" width="60" height="50" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-link" aria-current="page" href="/login">Присоединяйся к миру магии!</a>
                </div>
              </div>
            </div>
          </nav>
          )}

        <div className="container">{children}</div>

        <footer className="bg-light text-center text-lg-start footer">
          <div className="text-center p-3">
            <p style={{ color: '#af8b4c' }}>Prodused by</p>
            <div className="footerProdused" style={{ color: '#af8b4c' }}>
              <div><a href="https://github.com/m-DZEN" style={{ color: '#af8b4c' }}>Maxim Voronin</a></div>
              <div><a href="https://github.com/vladmalovich" style={{ color: '#af8b4c' }}>Vladimir Malovichko</a></div>
              <div><a href="https://github.com/Gayashes" style={{ color: '#af8b4c' }}>Gayane Nalbandyan</a></div>
              <div><a href="https://github.com/Khramklen" style={{ color: '#af8b4c' }}>Elena Khramkova</a></div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

module.exports = Layout;

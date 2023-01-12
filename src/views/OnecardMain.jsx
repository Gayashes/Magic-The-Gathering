const React = require('react');
const Layout = require('./Layout');

function OnecardMain({ user, oneCard }) {
  return (
    <Layout user={user}>
      <link rel="stylesheet" defer href="/css/cardOne.css" />
      <div className="containerOne bd-highlight d-flex justify-content-between row-cols-1  cardOne">
              <div className="containerOne col-sm-6">
                <div className="card cardOne ">
                    <img src={oneCard.link} className="card-img-top cardimg" alt="card-img" />
                  <div className="card-body cardbody mainCards">
                    <h5 className="text-center">{oneCard.status }</h5>
                    <h5 className="card-title">{oneCard.title}</h5>
                    <h5 className="text-center">{oneCard.location}</h5>
                    <h5 className="text-center">{oneCard.description}</h5>
                    <h5 className="text-center">Стоимость:{oneCard.cost}$</h5>
                    <h5 className="text-center">Состояние карточки:{oneCard.condition}</h5>
                  </div>
                </div>
              </div>
            </div>
    </Layout>
  );
}

module.exports = OnecardMain;

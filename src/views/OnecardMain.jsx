const React = require('react');
const Layout = require('./Layout');

function OnecardMain({ user, oneCard }) {
  return (
    <Layout user={user}>
      <div className="bd-highlight d-flex justify-content-center row-cols-1 align-items-center cardOne">
              <div className="col-sm-6 ">
                <div className="card cardOne ">
                  <div className="card-body cardbody mainCards">
                    <img src={oneCard.link} className="card-img-top cardimg" alt="card-img" />
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

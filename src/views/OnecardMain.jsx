const React = require('react');
const Layout = require('./Layout');

function OnecardMain({ user, oneCard }) {
  return (
    <Layout user={user}>
      <div className="d-flex flex-row bd-highlight mb-3 d-flex justify-content-around row-cols-1 row-cols-md-2 g-4 cardAll">
              <div className="col-sm-6 ">
                <div className="card maincardAll">
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

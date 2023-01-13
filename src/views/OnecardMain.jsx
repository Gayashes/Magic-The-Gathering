const React = require('react');
const Layout = require('./Layout');

function OnecardMain({ user, oneCard }) {
  return (
    <Layout user={user}>
      <link rel="stylesheet" defer href="/css/cardOne.css" />
      <div className="containerOne ">
              <div className="containerOne col-sm-6 " >
                    <img src={oneCard.link} className="card-img-top cardimg " alt="card-img" />
                <div className="card cardOne ">
                  <div className="card-body cardbody mainCards">
                    <h5 className="text">{oneCard.status }</h5>
                    <h5 className="card-title"><p className='desc'>Название:</p>{oneCard.title}</h5>
                    <h5 className="text"><p className='desc'>Город:</p>{oneCard.location}</h5>
                    <h5 className="text"><p className='desc'>Описание:</p>{oneCard.description}</h5>
                    <h5 className="text"><p className='desc'>Стоимость:</p>{oneCard.cost}$</h5>
                    <h5 className="text"><p className='desc'>Состояние карточки:</p>{oneCard.condition}</h5>
                  </div>
                </div>
              </div>
            </div>
    </Layout>
  );
}

module.exports = OnecardMain;

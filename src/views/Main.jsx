/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

function Main({ allCard, user }) {
  return (
    <Layout user={user}>
      { user ? ()}
      {allCard.map((card) => (
       <div className="d-flex flex-row bd-highlight mb-3 d-flex justify-content-around row row-cols-1 row-cols-md-2 g-4">
       <div className="col-sm-6">
         <div className="card">
           <div className="card-body">
           <img src={card.link} className="card-img-top " />
             <h5 className="text-center">{card.status }</h5>
             <a href={`/${card.id}`}><h6 className="text-center">{card.title}</h6></a>
           </div>
         </div>
       </div>
     </div>
      ))}

    </Layout>
  );
}

module.exports = Main;

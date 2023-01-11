// const btnBuy = document.querySelectorAll('.btnBuy');
// console.log(btnBuy);
// btnBuy?.addEventListener('click', async (event) => {
//   const btnid = event.target.id;
//   console.log(btnid);
//   // const response = await fetch('/basket' {
//   //     method: 'PUT',
//   //     headers: { 'Content-Type: application/json'},
//   //     body: JSON.stringify({ btnid })
//   // })
//   // const responseJson = await response.json();
// });

// const filterCity = document.querySelectorAll('.maincardAll');
// const city = document.querySelector('.cities');
// city.addEventListener('click', async (event) => {
//   const filterClass = event.target.dataset['cardid'];
//   console.log(filterClass);

//   filterCity.forEach(elem => {
//     elem.classList.remove('hide')
//     if (!elem.classList.contains(filterClass)){
//     elem.classList.add('hide')
//   }
// })
// })

document.querySelector('.search').oninput = function () {
  const value = this.value.trim();
  const searchCard = document.querySelectorAll('.cardAll div');
  if (searchCard !== '') {
    searchCard.forEach((element) => {
      if (element.innerText.search((RegExp(value, 'gi'))) === -1) {
        element.classList.add('hide');
      } else {
        element.classList.remove('hide');
      }
    });
  } else {
    searchCard.forEach((element) => {
      element.classList.remove('hide');
    });
  }
};

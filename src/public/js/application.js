/* eslint-disable camelcase */
const ordBtn = document.querySelector('#orderBtn');
const btnBuy = document.querySelector('#cardForm');
const delBtn = document.querySelector('#basketcardForm');

// СКРИПТ ОТПРАВКИ ПИСЬМА

console.log(ordBtn);
ordBtn?.addEventListener('click', (event) => {
  alert('Письмо о Вашем заказе сформировано и отправлено продавцу')
  console.log(event);
});

// ФЕТЧ УДАЛЕНИЯ КАРТОЧКИ ИЗ КОРЗИНЫ

// console.log(delBtn);
delBtn?.addEventListener('click', async (e) => {
  
  // const val = e.target.classlist.contains('busketdelete');
  const card_id = e.target.id;
  // console.log('val', val);
  if (e.target.tagName === 'BUTTON') {
    console.log('@@@@@@@@@', e.target);
    e.target.closest('.maincardAll').remove();
    await fetch(`/basket/delete/${card_id}`, {
      method: 'POST',
    });
  }
  // const user_id = e.target.dataset.userid;
  // console.log(val);
});

// ФЕТЧ ДОБАВЛЕННИЯ КАРТОЧКИ В КОРЗИНУ ИЗ МЭЙНА

btnBuy?.addEventListener('click', async (event) => {
  const card_id = event.target.id;
  const user_id = event.target.dataset.userid;

  const response = await fetch('/basket', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_id, card_id }),
  });
  const post = await response.json();
});

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

// document.querySelector('.search').oninput = function () {
//   const value = this.value.trim();
//   const searchCard = document.querySelectorAll('.cardAll div');
//   if (searchCard !== '') {
//     searchCard.forEach((element) => {
//       if (element.innerText.search(value) === -1) {
//         element.classList.add('hide');
//       } else {
//         element.classList.remove('hide');
//       }
//     });
//   } else {
//     searchCard.forEach((element) => {
//       element.classList.remove('hide');
//     });
//   }
// };

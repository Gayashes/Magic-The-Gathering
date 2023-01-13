/* eslint-disable camelcase */
const ordBtn = document.querySelector('#orderBtn');
const btnBuy = document.querySelector('#cardForm');
console.log(btnBuy);
const delBtn = document.querySelector('#basketcardForm');

// СКРИПТ ОТПРАВКИ ПИСЬМА

console.log(ordBtn);
ordBtn?.addEventListener('click', (event) => {
  alert('Письмо о Вашем заказе сформировано и отправлено продавцу')
  console.log(event);
});

// ФЕТЧ УДАЛЕНИЯ КАРТОЧКИ ИЗ КОРЗИНЫ

delBtn?.addEventListener('click', async (e) => {
  const card_id = e.target.id;
  if (e.target.tagName === 'BUTTON') {
    e.target.closest('.maincardAll').remove();
    await fetch(`/basket/delete/${card_id}`, {
      method: 'POST',
    });
  }
});

// ФЕТЧ ДОБАВЛЕННИЯ КАРТОЧКИ В КОРЗИНУ ИЗ МЭЙНА

btnBuy?.addEventListener('click', async (event) => {
  const card_id = event.target.id;
  const user_id = event.target.dataset.userid;
  if (event.target.tagName === 'BUTTON') {
    console.log('============+++айдишники', card_id, user_id);
    event.target.innerText = 'ДОБАВЛЕНО';
    event.target.disabled = true;
    const response = await fetch('/basket', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id, card_id }),
    });
    const post = await response.json();
  }
});

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


const searchCard = document.querySelectorAll('.cardAll div');
console.log(searchCard);
const statusBuy = document.querySelectorAll('.status');
console.log(statusBuy);
console.log(statusBuy.value)

if (statusBuy.status === 'false') {
  searchCard.forEach((element) => {
    element.classList.add('hide');
  });
}


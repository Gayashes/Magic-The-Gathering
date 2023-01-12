/* eslint-disable camelcase */
const btnBuy = document.querySelector('#cardForm');
const delBtn = document.querySelector('#basketcardForm');
// console.log(delBtn);
delBtn?.addEventListener('click', async (e) => {
  // const val = e.target.classlist.contains('busketdelete');

  const card_id = e.target.id;
  // console.log('val', val);
  if (e.target.tagName === 'BUTTON') {
    // console.log('@@@@@@@@@', e.target.id);
    await fetch(`/basket/delete/${card_id}`, {
      method: 'POST',
    });
  }
  // const user_id = e.target.dataset.userid;
  // console.log(val);
});
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

document.querySelector('.search').oninput = function () {
  const value = this.value.trim();
  const searchCard = document.querySelectorAll('.cardAll div');
  if (searchCard !== '') {
    searchCard.forEach((element) => {
      if (element.innerText.search(value) === -1) {
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

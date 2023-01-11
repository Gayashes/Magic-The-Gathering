/* eslint-disable no-param-reassign */
const f = require('session-file-store');

const btnBuy = document.querySelector('#cardForm');
const delBtn = document.querySelectorAll('.busketdelete');

function insertMark(string, pos, len) {
  return `${string.slice(0, pos)}<mark>${string.slice(pos, pos + len)}</mark>${string.slice(pos + len)}`;
}
document.querySelector('.cities').oninput = function () {
  const val = this.value.trim();
  const cityname = document.querySelectorAll('#cities');
  if (val != '') {
    cityname.forEach((elem) => {
      if (elem.innerText.search(val) === -1) {
        elem.classList.add('hide');
        elem.innerHTML = elem.innerText;
      } else {
        elem.classList.remove('hide');
        const str = elem.innerText;
        elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
      }
    });
  }
  else {
    cityname.forEach((elem) => {
      elem.classList.remove('hide');
      elem.innerHTML = elem.innerText;
    })
  } 
};
btnBuy?.addEventListener('click', async (event) => {
  const card_id = event.target.id;
  const user_id = event.target.dataset.userid;

  console.log(card_id, user_id);

  const response = await fetch('/basket', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_id, card_id }),
  });
  const post = await response.json();
});

/*
const filterCity = document.querySelectorAll('.maincardAll');
const city = document.querySelector('.cities');
city.addEventListener('click', async (event) => {
  const filterClass = event.target.dataset.cardid;
  console.log(filterClass);

  filterCity.forEach((elem) => {
    elem.classList.remove('hide');
    if (!elem.classList.contains(filterClass)) {
      elem.classList.add('hide');
    }
  });
});
*/

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

delBtn?.addEventListener('click', (e) => {
  const val = e.target.getAttribute('data-userid');
  fetch(`/basket/${val}`, {
    method: 'DELETE',
  })
    .then((res) => window.location.reload());
});

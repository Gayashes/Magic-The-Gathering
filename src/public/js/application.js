const btnBuy = document.querySelector('#cardForm');

console.log(btnBuy);

btnBuy.addEventListener('click', async (event) => {
  event.preventDefault();
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

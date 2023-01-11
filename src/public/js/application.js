const btnBuy = document.querySelectorAll('.btnBuy');
console.log(btnBuy);
btnBuy?.addEventListener('click', async (event) => {
  const btnid = event.target.id;
  console.log(btnid);
  // const response = await fetch('/basket' {
  //     method: 'PUT',
  //     headers: { 'Content-Type: application/json'},
  //     body: JSON.stringify({ btnid })
  // })
  // const responseJson = await response.json();
});

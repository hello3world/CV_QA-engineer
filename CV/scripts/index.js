const chk = document.querySelector('#chk');
console.log(chk);
chk.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
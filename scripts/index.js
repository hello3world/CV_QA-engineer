const chk = document.querySelector("#chk");
let mail = document.getElementById("icon_mail");
let geo = document.getElementById("icon_geo");

chk.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (mail.src.endsWith("mail.png")) {
    // Если отображается первое изображение, заменяем его на второе
    mail.src = "./images/icon/mail_white.png";
  } else {
    // Иначе, если отображается второе изображение, заменяем его на первое
    mail.src = "./images/icon/mail.png";
  }

  if (geo.src.endsWith("geo.png")) {
    // Если отображается первое изображение, заменяем его на второе
    geo.src = "./images/icon/geo_white.png";
  } else {
    // Иначе, если отображается второе изображение, заменяем его на первое
    geo.src = "./images/icon/geo.png";
  }
});

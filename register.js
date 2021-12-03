
function saveData() {
  let name, email, password;
  name = document.getElementById("username").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  let confirm_email0 = document.forms["register-form"]["email"].value;
  let confirm_email1 = document.forms["register-form"]["confirm-email"].value;

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  if (
    user_records.some((v) => {
      return v.email == email;
    })
  ) {
    alert("Użytkownik o takim adresie email już istnieje");
  } else if (
    user_records.some((v) => {
      return v.name == name;
    })
  ) {
    alert("Użytkownik o takim loginie już istnieje");
  } else if (confirm_email0 != confirm_email1) {
    alert("Adresy email są różne. Sprawdź pola jeszcze raz");
    return false;
  } else {
    user_records.push({
      name: name,
      email: email,
      password: password,
    });
    localStorage.setItem("users", JSON.stringify(user_records));
    alert("Zarejestrowano!");
    window.open("main-page.html", "_blank");
  }
}

/*
checkwork = () => {
  const username_hook = document.getElementById("username").value;
};*/

let validate_emails = () => {
  let email = document.forms["register-form"]["email"].value;
  let confirm_email = document.forms["register-form"]["confirm-email"].value;
  if (email != confirm_email) {
    alert("Adresy email są różne. Sprawdź pola jeszcze raz");
    return false;
  }
};

let user_name = document.getElementById("username");
let user_paswrd = document.getElementById("password");
let user_email = document.getElementById("email");

let store_data = () => {
  let input_name = localStorage.setItem("username", user_name.value);
  let input_password = localStorage.setItem("password", user_paswrd.value);
  let input_email = localStorage.setItem("email", user_email.value);
  let stored_data = [input_name, input_password, input_email];
};

let check_data = () => {
  let stored_name = localStorage.getItem("username");
  let stored_paswrd = localStorage.getItem("password");

  let user_name = document.getElementById("user-name");
  let user_passwrd = document.getElementById("pass-word");

  if (user_name.value == stored_name && user_passwrd.value == stored_passwrd) {
    window.location.href = "/main-page.html";
  } else {
    alert("Błedne dane logowania");
  }
};

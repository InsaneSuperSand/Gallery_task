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

function saveData() {
  let name, email, password;
  name = document.getElementById("username").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  if (
    user_records.some((v) => {
      return v.email == email;
    })
  ) {
    alert("Email wykorzystany");
  } else {
    user_records.push({
      name: name,
      email: email,
      password: password,
    });
    localStorage.setItem("users", JSON.stringify(user_records));
    window.open("main-page.html", "_blank");
  }
}

/*

var ID = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return "_" + Math.random().toString(36).substr(2, 9);
};

var user_name = document.getElementById("username");
var user_paswrd = document.getElementById("password");
var user_email = document.getElementById("email");

let store_data = () => {
  let id = ID();
  let input_username = localStorage.setItem(`username${id}`, user_name.value);
  let input_password = localStorage.setItem(`password${id}`, user_paswrd.value);
  let input_email = localStorage.setItem(`email${id}`, user_email.value);
};

let check_data = () => {
  let stored_name = localStorage.getItem("username");
  let stored_passwrd = localStorage.getItem("password");

  let user_name = document.getElementById("user-name");
  let user_passwrd = document.getElementById("pass-word");

  if (user_name.value == stored_name && user_passwrd.value == stored_passwrd) {
    alert("Błedne dane logowania");
  } else {
    window.location = "main-page.html";
  }
};
*/

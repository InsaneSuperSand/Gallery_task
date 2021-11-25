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
  sessionStorage.setItem("email", `${email}`);
  document.getElementById("demo").innerHTML = sessionStorage.getItem("email");
};

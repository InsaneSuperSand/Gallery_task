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
  }
}

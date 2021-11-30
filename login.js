function check_data() {
  const name = document.getElementById("user-name").value;
  const password = document.getElementById("pass-word").value;

  let user_records = JSON.parse(localStorage.getItem("users")) || [];

  if (
    user_records.find((user) => {
      return user.name == name && user.password == password;
    })
  ) {
     alert("Zalogowano");

    window.open("main-page.html", "_blank");
  } else {
    alert("Zły adres email bądź hasło");
  }
}

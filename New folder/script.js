const loginbtn= document.getElementById("loginbtn");
const username=document.getElementById("username");
const password=document.getElementById("passwors");

const correctUsername = "admin";
    const correctPassword = "12345";

loginBtn.addEventListener("click", function () {
      const username = usernameInput.value.trim();
      const password = passwordInput.value;

      const isLoggedIn = (username === correctUsername && password === correctPassword) ? true : false;

      messageDiv.textContent = isLoggedIn ? "wellcome" : "wrong password";
      messageDiv.className = isLoggedIn ? "success" : "error";

      console.log(isLoggedIn ? "login successful" : "login unsuccessful");
    });

    
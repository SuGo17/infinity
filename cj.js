const a = document.querySelector(".nav-links");
const b = document.querySelector(".nav-icon");
b.addEventListener("click", () => {
  a.classList.toggle("close");
  const c = b.getAttribute("name");
  if (c == "menu") {
    b.setAttribute("name", "close");
  } else {
    b.setAttribute("name", "menu");
  }
});

// --------------------------------------implementing-Signin---------------------------------------------
const loginBtn = document.querySelector(".login-btn");

let user = {
  name: "SuGo",
  email: "test@gmail.com",
  password: "test@123",
};

loginBtn?.addEventListener("click", () => {
  const email = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  if (email === user.email && password === user.password) {
    window.location.replace("content-page.html");
  }
});

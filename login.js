const container = document.getElementById("container");
const signUpBtn = document.getElementById("signUp");
const signInBtn = document.getElementById("signIn");

// animasi pindah form
const showSignUp = () => container.classList.add("active");
const showSignIn = () => container.classList.remove("active");

signUpBtn.addEventListener("click", showSignUp);

signInBtn.addEventListener("click", showSignIn);



// =======================
// SIGN UP
// =======================
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("suName").value;
  const email = document.getElementById("suEmail").value;
  const password = document.getElementById("suPassword").value;

  // simpan ke localStorage
  const user = {
    name: name,
    email: email,
    password: password
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Akun berhasil dibuat!");

  // pindah ke login
  showSignIn();
});

// =======================
// LOGIN
// =======================
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("liEmail").value;
  const password = document.getElementById("liPassword").value;

  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (savedUser && email === savedUser.email && password === savedUser.password) {
    // tandai sudah login
    localStorage.setItem("isLogin", "true");

    // redirect ke halaman utama
    window.location.href = "index.html";
  } else {
    alert("Email atau password salah!");
  }
});
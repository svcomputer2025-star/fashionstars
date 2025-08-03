let users = {};
let currentUser = null;
let generatedOTP = "";

// Toggle sidebar
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("hidden");
}

// Show Register / Login
function showRegister() {
  document.getElementById("login-section").classList.add("hidden");
  document.getElementById("register-section").classList.remove("hidden");
}
function showLogin() {
  document.getElementById("register-section").classList.add("hidden");
  document.getElementById("login-section").classList.remove("hidden");
}

// OTP
function sendOTP() {
  generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
  alert("Your OTP: " + generatedOTP);
  document.getElementById("otp-section").classList.remove("hidden");
}

function verifyOTP() {
  const enteredOTP = document.getElementById("reg-otp").value;
  if (enteredOTP === generatedOTP) {
    const name = document.getElementById("reg-name").value;
    const mobile = document.getElementById("reg-mobile").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;
    const address = document.getElementById("reg-address").value;

    users[email] = { name, mobile, email, password, address };
    alert("Registration successful");
    showLogin();
  } else {
    alert("Invalid OTP");
  }
}

// Login
function loginUser() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  const user = users[email];

  if (user && user.password === password) {
    currentUser = user;
    showShoppingPage();
  } else {
    document.getElementById("login-msg").innerText = "Invalid credentials";
  }
}

// Show shopping
function showShoppingPage() {
  document.getElementById("login-section").classList.add("hidden");
  document.getElementById("register-section").classList.add("hidden");
  document.getElementById("shopping-section").classList.remove("hidden");

  document.getElementById("profile-name").innerText = currentUser.name;
  document.getElementById("profile-email").value = currentUser.email;
  document.getElementById("profile-mobile").value = currentUser.mobile;
  document.getElementById("profile-address").value = currentUser.address;
}

// Add to cart
function addToCart(btn) {
  const item = btn.parentElement.querySelector("h3").innerText;
  const cart = document.getElementById("cartItems");
  const li = document.createElement("li");
  li.innerText = item;
  cart.appendChild(li);
}

// Like
function toggleLike(icon) {
  icon.classList.toggle("ri-heart-fill");
  icon.classList.toggle("ri-heart-line");
  const item = icon.parentElement.querySelector("h3").innerText;
  const liked = document.getElementById("likedItems");
  const li = document.createElement("li");
  li.innerText = item;
  liked.appendChild(li);
}

// Profile
function showProfileForm() {
  document.getElementById("profileForm").classList.toggle("hidden");
}

function logoutUser() {
  currentUser = null;
  document.getElementById("shopping-section").classList.add("hidden");
  showLogin();
}

// Cart
function showCart() {
  document.getElementById("cartSection").classList.toggle("hidden");
}

function showLikedItems() {
  document.getElementById("likedSection").classList.toggle("hidden");
}

// Search
function searchProducts() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const products = document.querySelectorAll(".product-card");

  products.forEach(p => {
    const name = p.querySelector("h3").innerText.toLowerCase();
    p.style.display = name.includes(input) ? "block" : "none";
  });
}

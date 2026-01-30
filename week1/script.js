console.log("JavaScript is linked and working!");

const form = document.querySelector("form");
const nameInput = document.querySelector('input[placeholder="enter your full name"]');
const emailInput = document.querySelector('input[placeholder="enter your email id"]');
const phoneInput = document.querySelector('input[placeholder="1234567890"]');
const submitBtn = document.getElementById("submit");
const body = document.body;

function showMessage(message, type = "error") {
  let oldMsg = document.querySelector(".form-message");
  if (oldMsg) oldMsg.remove();
  const msg = document.createElement("p");
  msg.className = "form-message";
  msg.style.marginTop = "8px";
  msg.style.color = type === "error" ? "#f87171" : "#22c55e";
  msg.style.fontSize = "0.8rem";
  msg.textContent = message;
  form.appendChild(msg);
  setTimeout(() => msg.remove(), 3000);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  if (name === "") {
    showMessage("Please enter your full name");
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    showMessage("Enter a valid email address");
    return;
  }
  if (phone.length !== 10 || isNaN(phone)) {
    showMessage("Enter a valid 10-digit phone number");
    return;
  }
  showMessage("Form submitted successfully!", "success");
  form.reset();
});

const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙 Toggle Dark Mode";
toggleBtn.style.position = "fixed";
toggleBtn.style.bottom = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.padding = "8px 12px";
toggleBtn.style.border = "none";
toggleBtn.style.borderRadius = "6px";
toggleBtn.style.backgroundColor = "#38bdf8";
toggleBtn.style.color = "#0f172a";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.fontSize = "0.8rem";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
  updateMode();
});

function updateMode() {
  if (body.classList.contains("dark-mode")) {
    body.style.backgroundColor = "#f8fafc";
    body.style.color = "#0f172a";
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    body.style.backgroundColor = "#0f172a";
    body.style.color = "#e2e8f0";
    toggleBtn.textContent = "🌙 Dark Mode";
  }
}

if (localStorage.getItem("darkMode") === "true") {
  body.classList.add("dark-mode");
}
updateMode();

const profileImg = document.querySelector("#profile img");
profileImg.addEventListener("mouseenter", () => {
  const info = document.createElement("p");
  info.textContent = "Hi, I'm Ameeksha — a Web Developer Beginner 💻";
  info.className = "hover-info";
  info.style.color = "#38bdf8";
  info.style.fontSize = "0.9rem";
  info.style.marginTop = "6px";
  document.querySelector("#profile").appendChild(info);
});

profileImg.addEventListener("mouseleave", () => {
  const info = document.querySelector(".hover-info");
  if (info) info.remove();
});

const skillsList = document.querySelector("#skills ul");
const counter = document.createElement("p");
counter.textContent = `You have listed ${skillsList.children.length} skills.`;
counter.style.color = "#38bdf8";
counter.style.marginTop = "10px";
skillsList.after(counter);

const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    localStorage.setItem("lastSection", link.getAttribute("href"));
  });
});

const lastSection = localStorage.getItem("lastSection");
if (lastSection) {
  setTimeout(() => {
    document.querySelector(lastSection)?.scrollIntoView({ behavior: "smooth" });
  }, 500);
}

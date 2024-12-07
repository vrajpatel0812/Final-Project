document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = e.target.getAttribute("href");

    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

document.getElementById("contactForm")?.addEventListener("submit", (e) => {e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  alert(`Thanks, ${name}! Your message has been sent.`);
});

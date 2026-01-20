function scrollContato() {
  document.getElementById("contato").scrollIntoView({ behavior: "smooth" });
}

/* ANIMAÇÃO SCROLL */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* PARALLAX IMAGE */
const heroImage = document.querySelector(".hero-image img");

window.addEventListener("scroll", () => {
  const img = document.querySelector(".parallax-img");
  const scrollY = window.scrollY;

  img.style.transform = `translateY(${scrollY * 0.15}px)`;
});

/* FORM */
const form = document.getElementById("form");
const msg = document.getElementById("msg");

form.addEventListener("submit", e => {
  e.preventDefault();
  msg.innerText = "Mensagem enviada com sucesso!";
  form.reset();
});

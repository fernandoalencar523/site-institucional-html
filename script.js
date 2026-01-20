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

/* FORM */
const form = document.getElementById("form");
const msg = document.getElementById("msg");

form.addEventListener("submit", e => {
  e.preventDefault();
  msg.innerText = "Mensagem enviada com sucesso!";
  form.reset();
});

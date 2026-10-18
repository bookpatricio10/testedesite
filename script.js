/* ===============================
   MENU MOBILE
================================ */
const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
   menu.classList.toggle("active");

   menuButton.textContent = menu.classList.contains("active") ? "x" : "☰";
});

/* Fecha o menu ao clicar em um link */
document.querySelectorAll(".menu a").forEach(link => {
   link.addEventListener("click", () => {
      menu.classList.remove("active");

      menuButton.textContent = "☰";
   });
});

/* ===============================
   MÁSCARA DE CEP
================================ */
const cepInput = document.getElementById("cep");

cepInput.addEventListener("input", (event) => {
   let value = event.target.value.slice(0, 9).replace(/\D/g, "");

   if (value.length > 5) {
      value = value.substring(0, 5) + "-" + value.substring(5, 8);
   }

   event.target.value = value;
});

/* ===============================
   CONSULTA DE COBERTURA
================================ */
const coverageForm = document.getElementById("coverageForm");
const coverageResult = document.getElementById("coverageResult");

coverageForm.addEventListener("submit", (event) => {
   event.preventDefault();

   const cep = cepInput.value.slice(0,9).replace(/\D/g, "");

   if (cep.length !== 8) {
      coverageResult.innerHTML = `<span style="color: #ff8b8b;">Digite um CEP válido.</span>`;

      return;
   }

   coverageResult.innerHTML = `<span style="color: #6eade7;">Verificando cobertura para o CEP ${cepInput.value}...</span>`;

   setTimeout(() => {
      coverageResult.innerHTML = `<span style="color: #6ee7b7;">✓ Temos cobertura nessa região! Nossa equipe pode entrar em contato com você.</span>`;
   }, 1500);
});

/* ===============================
   FAQ
================================ */
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
   question.addEventListener("click", () => {
      const currentItem = question.parentElement;

      document.querySelectorAll(".faq-item").forEach(item => {
         if (item !== currentItem) {
            item.classList.remove("active");
         }
      });
      currentItem.classList.toggle("active");
   });
});

/* ===============================
   BOTÕES DOS PLANOS
================================ */
const planButtons = document.querySelectorAll(".plan-button");

planButtons.forEach(button => {
   button.addEventListener("click", (event) => {
      event.preventDefault();

      const plan = event.currentTarget.closest(".plan-card").querySelector("h3").textContent;
      const message = `Olá! Tenho interesse no plano ${plan}. Gostaria de saber mais informações.`;
      const phoneNumber = "5591999999999";
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      window.open(url, "_blank");
   });
});

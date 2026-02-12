const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert("Merci! Votre demande a bien été envoyée. On vous contacte rapidement.");
    form.reset();
  });
}

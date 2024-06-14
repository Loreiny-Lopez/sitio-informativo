// porque todo debe tener funcionalidad

const form = document.querySelector('#contact-form');
const responseDiv = document.querySelector('#response');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://formsubmit.co/kyomitengu@gmail.com', true);
  xhr.send(formData);

  responseDiv.innerHTML = 'Gracias por su mensaje, este se ha enviado.';
  form.reset();
});
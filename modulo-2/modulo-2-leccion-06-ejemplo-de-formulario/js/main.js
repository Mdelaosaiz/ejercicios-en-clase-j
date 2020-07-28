'use strict';

const inputPassword = document.querySelector('.js-input-password');
const inputEmail = document.querySelector('.js-input-email');
const submitButton = document.querySelector('.js-submit-button');
const formDetails = document.querySelector('.js-form-user');
// creo un objeto vacío donde guardaré los name de los input como clave y los values de los inputs como valor
const formData = {};

// creo una función genérica que se queda con el name del input que emite el evento keyup y con el value de ese input
function setFormData(ev) {
  // guardo en una constante el atributo name y el value del input que emite el evento
  const inputName = ev.currentTarget.name;
  console.log('Nombre del input:', inputName);
  const inputValue = ev.currentTarget.value;
  console.log('Valor del input:', inputValue);
  // guardo en mi objeto las propiedades que le vienen por las variables
  formData[inputName] = inputValue;
  console.log('Objeto', formData);
}

// creo una función que sea la encargada de enviar los datos
function sendData(ev) {
  // evito el envíe el formulario y el navegador navegue a la URL que hemos puesto en form > action
  ev.preventDefault();
  console.log(
    `El email de mi usuario es ${formData.email} y mi contraseña es ${formData.password}`
  );
}

inputPassword.addEventListener('keyup', setFormData);
inputEmail.addEventListener('keyup', setFormData);
submitButton.addEventListener('click', sendData);
// aquí estamos manejando el evento submit que se lanza cuando clickamos en el botón
// y cuando pulsamos la tecla intro en uno de los campos de texto
formDetails.addEventListener('submit', sendData);

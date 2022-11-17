const form = document.getElementById('form');
const campos = document.querySelectorAll('.input');
const spans = document.querySelectorAll('.span');

const emailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function setError(index) {
  campos[index].style.border = '2px solid #b61f0e';
  spans[index].style.display = 'block';
}

function removeError(index) {
  campos[index].style.border = '';
  spans[index].style.display = 'none';
}

function nameValidate() {
  if (campos[0].value.length < 10) {
    setError(0);
  } else {
    removeError(0);
  }
}

function cpf() {
  if (campos[2].value.length < 11) {
    setError(2);
  } else {
    removeError(2);
  }
}

/* construir função da API Validação CEP */

function emailValidate() {
  if (!emailRegex.test(campos[6].value)) {
    setError(6);
  } else {
    removeError(6);
  }
}

function alarm() {
  alert('Faltam informações!');
}

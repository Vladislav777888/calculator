import { refs } from './refs';
import { getBoxColor } from './getBoxColor';

const STORAGE_HDD_PRICE = 0.01;
const STORAGE_SDD_PRICE = 0.02;
const TRANSFER_PRICE = 0.01;

refs.inputSrorage.addEventListener('input', changeStorageValue);
refs.inputTransfer.addEventListener('input', changeTransferValue);
refs.linkSdd.addEventListener('click', handleLinkSdd);
refs.linkHdd.addEventListener('click', handleLinkHdd);

refs.linkHdd.classList.add('active');

// Переменные для вычисления цен
let boxStorageLength = 0;
let boxTransferLength = 0;

// Функция для отработки сторэдж-инпута
function changeStorageValue(evt) {
  refs.inputStorageValue.textContent = evt.target.value;

  if (refs.linkHdd.classList.contains('active')) {
    boxStorageLength = evt.target.value * STORAGE_HDD_PRICE;
  } else {
    boxStorageLength = evt.target.value * STORAGE_SDD_PRICE;
  }

  let sum = boxStorageLength + boxTransferLength;

  // калькулятор для широких экранов
  if (window.innerWidth >= 646) {
    getStylesForBigDevices(sum);
  }

  // калькулятор для узких экранов
  if (window.innerWidth < 646) {
    getStylesForLittleDevices(sum);
  }
}

// Функция для отработки трансфер-инпута
function changeTransferValue(evt) {
  refs.inputTransferValue.textContent = evt.target.value;

  boxTransferLength = evt.target.value * TRANSFER_PRICE;
  let sum = boxStorageLength + boxTransferLength;

  // калькулятор для широких экранов
  if (window.innerWidth >= 646) {
    getStylesForBigDevices(sum);
  }

  // калькулятор для узких экранов
  if (window.innerWidth < 646) {
    getStylesForLittleDevices(sum);
  }
}

// Функция для отработки клика на опцию SSD
function handleLinkSdd() {
  refs.linkHdd.classList.remove('active');
  refs.linkSdd.classList.add('active');

  boxStorageLength *= 2;
  let sum = boxStorageLength + boxTransferLength;

  // калькулятор для широких экранов
  if (window.innerWidth >= 646) {
    getStylesForBigDevices(sum);
  }

  // калькулятор для узких экранов
  if (window.innerWidth < 646) {
    getStylesForLittleDevices(sum);
  }
}

// Функция для отработки клика на опцию HDD
function handleLinkHdd() {
  refs.linkHdd.classList.add('active');
  refs.linkSdd.classList.remove('active');

  boxStorageLength /= 2;
  let sum = boxStorageLength + boxTransferLength;

  // калькулятор для широких экранов
  if (window.innerWidth >= 646) {
    getStylesForBigDevices(sum);
  }

  // калькулятор для узких экранов
  if (window.innerWidth < 646) {
    getStylesForLittleDevices(sum);
  }
}

// Функция для задания стилей для широких экранов
function getStylesForBigDevices(sum) {
  if (sum > 10) {
    refs.bunnyValue.style.right = '-35px';
    refs.bunnyValue.textContent = '10$';
    refs.bunnyBox.style.width = `50px`;

    getBoxColor();
    return;
  }

  refs.bunnyBox.style.width = `${sum * 5}px`;

  if (sum % 1 === 0) {
    refs.bunnyValue.style.right = '-35px';
    refs.bunnyValue.textContent = `${sum.toFixed(0)}$`;
  } else {
    refs.bunnyValue.style.right = '-60px';
    refs.bunnyValue.textContent = `${sum.toFixed(2)}$`;
  }

  getBoxColor();
}

// Функция для задания стилей для узких экранов
function getStylesForLittleDevices(sum) {
  if (sum > 10) {
    refs.bunnyValue.textContent = '10$';
    refs.bunnyBox.style.height = `50px`;

    getBoxColor();
    return;
  }

  refs.bunnyBox.style.height = `${sum * 5}px`;

  if (sum % 1 === 0) {
    refs.bunnyValue.textContent = `${sum.toFixed(0)}$`;
  } else {
    refs.bunnyValue.textContent = `${sum.toFixed(2)}$`;
  }

  getBoxColor();
}

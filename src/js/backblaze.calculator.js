import { refs } from './refs';

const STORAGE_PRICE = 0.005;
const TRANSFER_PRICE = 0.01;

// Переменные для вычисления цен
let boxStorageLength = 0;
let boxTransferLength = 0;

refs.inputSrorage.addEventListener('input', changeStorageValue);
refs.inputTransfer.addEventListener('input', changeTransferValue);

// Функция для отработки сторэдж-инпута
function changeStorageValue(evt) {
  refs.inputStorageValue.textContent = evt.target.value;

  boxStorageLength = evt.target.value * STORAGE_PRICE;
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

// Функция для задания стилей для широких экранов
function getStylesForBigDevices(sum) {
  if (sum <= 7) {
    refs.backblazeValue.style.right = '-25px';
    refs.backblazeValue.textContent = '7$';
    refs.backblazeBox.style.width = `35px`;

    return;
  }

  refs.backblazeBox.style.width = `${sum * 5}px`;

  if (sum % 1 === 0) {
    refs.backblazeValue.style.right = '-35px';
    refs.backblazeValue.textContent = `${sum.toFixed(0)}$`;
  } else {
    refs.backblazeValue.style.right = '-60px';
    refs.backblazeValue.textContent = `${sum.toFixed(2)}$`;
  }
}

// Функция для задания стилей для узких экранов
function getStylesForLittleDevices(sum) {
  if (sum <= 7) {
    refs.backblazeValue.textContent = '7$';
    refs.backblazeBox.style.height = `35px`;
    return;
  }

  refs.backblazeBox.style.height = `${sum * 5}px`;

  if (sum % 1 === 0) {
    refs.backblazeValue.textContent = `${sum.toFixed(0)}$`;
  } else {
    refs.backblazeValue.textContent = `${sum.toFixed(2)}$`;
  }
}

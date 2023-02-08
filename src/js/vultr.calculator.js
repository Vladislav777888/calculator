import { refs } from './refs';
import { getBoxColor } from './getBoxColor';

const STORAGE_PRICE = 0.01;
const TRANSFER_PRICE = 0.01;

//  Переменные для вычисления цен
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
  if (sum <= 5) {
    refs.vultrValue.style.right = '-25px';
    refs.vultrValue.textContent = '5$';
    refs.vultrBox.style.width = `25px`;

    getBoxColor();
    return;
  }

  refs.vultrBox.style.width = `${sum * 5}px`;

  if (sum % 1 === 0) {
    refs.vultrValue.style.right = '-35px';
    refs.vultrValue.textContent = `${sum.toFixed(0)}$`;
  } else {
    refs.vultrValue.style.right = '-60px';
    refs.vultrValue.textContent = `${sum.toFixed(2)}$`;
  }

  getBoxColor();
}

// Функция для задания стилей для узких экранов
function getStylesForLittleDevices(sum) {
  if (sum <= 5) {
    refs.vultrValue.textContent = '5$';
    refs.vultrBox.style.height = `25px`;

    getBoxColor();
    return;
  }

  refs.vultrBox.style.height = `${sum * 5}px`;

  if (sum % 1 === 0) {
    refs.vultrValue.textContent = `${sum.toFixed(0)}$`;
  } else {
    refs.vultrValue.textContent = `${sum.toFixed(2)}$`;
  }

  getBoxColor();
}

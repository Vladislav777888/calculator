import { refs } from './refs';
import { getBoxColor } from './getBoxColor';

const STORAGE_PRICE_FREE = 0;
const STORAGE_MULTI_PRICE = 0.06;
const STORAGE_SINGLE_PRICE = 0.03;
const TRANSFER_PRICE_FREE = 0;
const TRANSFER_PRICE_PAID = 0.02;

refs.inputSrorage.addEventListener('input', changeStorageValue);
refs.inputTransfer.addEventListener('input', changeTransferValue);
refs.linkSingle.addEventListener('click', handleLinkSingle);
refs.linkMulti.addEventListener('click', handleLinkMulti);

refs.linkMulti.classList.add('active');
let boxStorageLength = 0;
let boxTransferLength = 0;

function changeStorageValue(evt) {
  refs.inputStorageValue.textContent = evt.target.value;

  if (
    refs.linkMulti.classList.contains('active') &&
    !(evt.target.value >= 75)
  ) {
    boxStorageLength = evt.target.value * STORAGE_PRICE_FREE;
  }

  if (refs.linkMulti.classList.contains('active') && evt.target.value > 75) {
    boxStorageLength =
      evt.target.value * STORAGE_MULTI_PRICE - 75 * STORAGE_MULTI_PRICE;
  }

  if (
    refs.linkSingle.classList.contains('active') &&
    !(evt.target.value >= 75)
  ) {
    boxStorageLength = evt.target.value * STORAGE_PRICE_FREE;
  }

  if (refs.linkSingle.classList.contains('active') && evt.target.value > 75) {
    boxStorageLength =
      evt.target.value * STORAGE_SINGLE_PRICE - 75 * STORAGE_SINGLE_PRICE;
  }

  let sum = boxStorageLength + boxTransferLength;

  // калькулятор для широких экранов
  if (window.innerWidth >= 646) {
    refs.scalewayBox.style.width = `${sum * 5}px`;

    if (sum % 1 === 0) {
      refs.scalewayValue.style.right = '-35px';
      refs.scalewayValue.textContent = `${sum.toFixed(0)}$`;
    } else {
      refs.scalewayValue.style.right = '-60px';
      refs.scalewayValue.textContent = `${sum.toFixed(2)}$`;
    }
  }

  // калькулятор для узких экранов
  if (window.innerWidth < 646) {
    refs.scalewayBox.style.height = `${sum * 5}px`;

    if (sum % 1 === 0) {
      refs.scalewayValue.textContent = `${sum.toFixed(0)}$`;
    } else {
      refs.scalewayValue.textContent = `${sum.toFixed(2)}$`;
    }
  }

  // getBoxColor();
}

function changeTransferValue(evt) {
  refs.inputTransferValue.textContent = evt.target.value;

  if (
    refs.linkMulti.classList.contains('active') &&
    !(evt.target.value >= 75)
  ) {
    boxTransferLength = evt.target.value * TRANSFER_PRICE_FREE;
  }

  if (refs.linkMulti.classList.contains('active') && evt.target.value > 75) {
    boxTransferLength =
      evt.target.value * TRANSFER_PRICE_PAID - 75 * TRANSFER_PRICE_PAID;
  }

  if (
    refs.linkSingle.classList.contains('active') &&
    !(evt.target.value >= 75)
  ) {
    boxTransferLength = evt.target.value * TRANSFER_PRICE_FREE;
  }

  if (refs.linkSingle.classList.contains('active') && evt.target.value > 75) {
    boxTransferLength =
      evt.target.value * TRANSFER_PRICE_PAID - 75 * TRANSFER_PRICE_PAID;
  }

  let sum = boxStorageLength + boxTransferLength;

  // калькулятор для широких экранов
  if (window.innerWidth >= 646) {
    refs.scalewayBox.style.width = `${sum * 5}px`;

    if (sum % 1 === 0) {
      refs.scalewayValue.style.right = '-35px';
      refs.scalewayValue.textContent = `${sum.toFixed(0)}$`;
    } else {
      refs.scalewayValue.style.right = '-60px';
      refs.scalewayValue.textContent = `${sum.toFixed(2)}$`;
    }
  }

  // калькулятор для узких экранов
  if (window.innerWidth < 646) {
    refs.scalewayBox.style.height = `${sum * 5}px`;

    if (sum % 1 === 0) {
      refs.scalewayValue.textContent = `${sum.toFixed(0)}$`;
    } else {
      refs.scalewayValue.textContent = `${sum.toFixed(2)}$`;
    }
  }

  // getBoxColor();
}

function handleLinkSingle() {
  refs.linkSingle.classList.add('active');
  refs.linkMulti.classList.remove('active');

  if (boxStorageLength === 0) {
    getBoxColor();
    return;
  } else {
    boxStorageLength /= 2;
  }

  let sum = boxStorageLength + boxTransferLength;

  // калькулятор для широких экранов
  if (window.innerWidth >= 646) {
    refs.scalewayBox.style.width = `${sum * 5}px`;

    if (sum % 1 === 0) {
      refs.scalewayValue.style.right = '-35px';
      refs.scalewayValue.textContent = `${sum.toFixed(0)}$`;
    } else {
      refs.scalewayValue.style.right = '-60px';
      refs.scalewayValue.textContent = `${sum.toFixed(2)}$`;
    }
  }

  // калькулятор для узких экранов
  if (window.innerWidth < 646) {
    refs.scalewayBox.style.height = `${sum * 5}px`;

    if (sum % 1 === 0) {
      refs.scalewayValue.textContent = `${sum.toFixed(0)}$`;
    } else {
      refs.scalewayValue.textContent = `${sum.toFixed(2)}$`;
    }
  }

  getBoxColor();
}

function handleLinkMulti() {
  refs.linkMulti.classList.add('active');
  refs.linkSingle.classList.remove('active');

  if (boxStorageLength === 0) {
    getBoxColor();
    return;
  } else {
    boxStorageLength *= 2;
  }

  let sum = boxStorageLength + boxTransferLength;

  // калькулятор для широких экранов
  if (window.innerWidth >= 646) {
    refs.scalewayBox.style.width = `${sum * 5}px`;

    if (sum % 1 === 0) {
      refs.scalewayValue.style.right = '-35px';
      refs.scalewayValue.textContent = `${sum.toFixed(0)}$`;
    } else {
      refs.scalewayValue.style.right = '-60px';
      refs.scalewayValue.textContent = `${sum.toFixed(2)}$`;
    }
  }

  // калькулятор для узких экранов
  if (window.innerWidth < 646) {
    refs.scalewayBox.style.height = `${sum * 5}px`;

    if (sum % 1 === 0) {
      refs.scalewayValue.textContent = `${sum.toFixed(0)}$`;
    } else {
      refs.scalewayValue.textContent = `${sum.toFixed(2)}$`;
    }
  }

  getBoxColor();
}

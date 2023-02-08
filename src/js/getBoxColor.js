import { refs } from './refs';

export function getBoxColor() {
  let backblazeSum = Number(
    parseFloat(refs.backblazeValue.textContent).toFixed(2)
  );
  let bunnySum = Number(parseFloat(refs.bunnyValue.textContent).toFixed(2));
  let scalewaySum = Number(
    parseFloat(refs.scalewayValue.textContent).toFixed(2)
  );
  let vultsSum = Number(parseFloat(refs.vultrValue.textContent).toFixed(2));

  const minSum = Math.min(backblazeSum, scalewaySum, bunnySum, vultsSum);

  if (minSum === backblazeSum) {
    refs.backblazeBox.style.backgroundColor = 'red';
  } else {
    refs.backblazeBox.style.backgroundColor = 'gray';
  }

  if (minSum === bunnySum) {
    refs.bunnyBox.style.backgroundColor = 'orange';
  } else {
    refs.bunnyBox.style.backgroundColor = 'gray';
  }

  if (minSum === scalewaySum) {
    refs.scalewayBox.style.backgroundColor = 'violet';
  } else {
    refs.scalewayBox.style.backgroundColor = 'gray';
  }

  if (minSum === vultsSum) {
    refs.vultrBox.style.backgroundColor = 'blue';
  } else {
    refs.vultrBox.style.backgroundColor = 'gray';
  }
}

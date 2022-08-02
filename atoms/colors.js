import { atom } from 'recoil';

let defaultColor = 'red';

if (typeof window !== 'undefined') {
  defaultColor = localStorage.getItem('defaultColor');
}

const colorsState = atom({
  key: 'fontState',
  default: {
    defaultColor,
  },
});

export { colorsState };

import { atom } from 'recoil';

const linkToPreviewState = atom({
  key: 'linkPreviewState',
  default: '',
});

export { linkToPreviewState };

import { atom } from 'recoil';

export const mode = atom<boolean>({
  key: 'mode',
  default: false,
});

import LetterZSVG from 'assets/images/zoovu-z.svg';
import LetterOSVG from 'assets/images/zoovu-o.svg';
import LetterVSVG from 'assets/images/zoovu-v.svg';
import LetterUSVG from 'assets/images/zoovu-u.svg';

const MAX_NUMBER = 5;

export const getCardIcon = (keyCard: string) => {
  switch (keyCard) {
    case 'z':
      return LetterZSVG;
    case 'o':
      return LetterOSVG;
    case 'v':
      return LetterVSVG;
    case 'u':
      return LetterUSVG;
    default:
      return null;
  }
};

export const getValueCard = (value: Number) => {
  switch (value) {
    case 0:
      return 'z';
    case 1:
      return 'o';
    case 2:
      return 'o';
    case 3:
      return 'v';
    case 4:
      return 'u';
    default:
      return 'x';
  }
};

export const draggableAreaEmpty = (value: Number) => value >= MAX_NUMBER || value < 0;

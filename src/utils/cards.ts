const MAX_NUMBER = 5;
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

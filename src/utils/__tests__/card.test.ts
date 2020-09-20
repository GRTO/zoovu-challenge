import { draggableAreaEmpty, getCardIcon, getValueCard } from 'utils/cards';
import LetterZSVG from 'assets/images/zoovu-z.svg';
import LetterOSVG from 'assets/images/zoovu-o.svg';
import LetterVSVG from 'assets/images/zoovu-v.svg';
import LetterUSVG from 'assets/images/zoovu-u.svg';

describe('Testing cards utils file', () => {
  it('Testing getValueCard values', () => {
    expect(getValueCard(0)).toEqual('z');
    expect(getValueCard(1)).toEqual('o');
    expect(getValueCard(2)).toEqual('o');
    expect(getValueCard(3)).toEqual('v');
    expect(getValueCard(4)).toEqual('u');
    // Verify the default value
    expect(getValueCard(8)).toEqual('x');
  });

  it('Draggable area is empty', () => {
    expect(draggableAreaEmpty(5)).toBeTruthy();
    expect(draggableAreaEmpty(0)).toBeFalsy();
  });

  it('Verify cards icons', () => {
    expect(getCardIcon('z')).toEqual(LetterZSVG);
    expect(getCardIcon('o')).toEqual(LetterOSVG);
    expect(getCardIcon('v')).toEqual(LetterVSVG);
    expect(getCardIcon('u')).toEqual(LetterUSVG);
    expect(getCardIcon('x')).toEqual(null);
  });
});

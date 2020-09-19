import React from 'react';
import { Icon } from '../Icon/Icon';
import { CardGameStyles } from './CardGame.theme';
import LetterZSVG from 'assets/images/zoovu-z.svg';
import LetterOSVG from 'assets/images/zoovu-o.svg';
import LetterVSVG from 'assets/images/zoovu-v.svg';
import LetterUSVG from 'assets/images/zoovu-u.svg';

interface ICardGameProps {
  keyCard: string;
}

const getCardIcon = (keyCard: string) => {
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

export const CardGame: React.FC<ICardGameProps> = ({ keyCard }) => {
  const letterIcon = getCardIcon(keyCard);
  const cardGameStyles = CardGameStyles();
  return (
    <>
      {letterIcon ? (
        <div css={cardGameStyles.cardGameContainer}>
          <Icon src={letterIcon} size={{ height: '7rem', width: '7rem' }} />
        </div>
      ) : (
        <div css={cardGameStyles.emptyCardGameContainer} />
      )}
    </>
  );
};

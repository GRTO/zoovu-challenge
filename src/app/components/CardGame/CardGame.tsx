import React from 'react';
import { getCardIcon } from 'utils/cards';
import { Icon } from '../Icon/Icon';
import { CardGameStyles } from './CardGame.theme';

export interface ICardGameProps {
  keyCard: string;
}

export const CardGame: React.FC<ICardGameProps> = ({ keyCard }) => {
  const letterIcon = getCardIcon(keyCard);
  const cardGameStyles = CardGameStyles();
  return (
    <>
      {letterIcon ? (
        <div id={`card-id-${letterIcon}`} css={cardGameStyles.cardGameContainer}>
          <Icon src={letterIcon} size={{ height: '7rem', width: '7rem' }} />
        </div>
      ) : (
        <div id={`card-emtpy-id`} css={cardGameStyles.emptyCardGameContainer} />
      )}
    </>
  );
};

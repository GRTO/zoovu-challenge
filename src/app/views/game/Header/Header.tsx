import React from 'react';
import { useStoreContext } from 'store';
import { Icon } from 'app/components/Icon/Icon';
import { HeaderStyles } from './Header.theme';
import RegularClockSVG from 'assets/images/regular_clock.svg';
import useTimer from 'hooks/useTimer';
import { observer } from 'mobx-react';

export const Header: React.FC = observer(() => {
  const { User, Gamer } = useStoreContext();
  const headerStyles = HeaderStyles();
  const nameString = `Good luck, ${User.userName || 'Your name here'}!`;

  // A custom hook to handle properly the timer.
  const { seconds, stopTimer, addToTimer, startTimer, resetTimer } = useTimer();

  React.useEffect(() => {
    if (Gamer.isGameCompleted) {
      console.log('here');
      // Stop the timer when the user won the game
      stopTimer();
      // If the user won the game, reset after 10 seconds
      setTimeout(() => {
        resetTimer();
        Gamer.resetGame();
      }, 10000);
    }
  }, [Gamer.isGameCompleted]);

  React.useEffect(() => {
    // Start the time when the user click in any card
    if (Gamer.isGameStarted) {
      startTimer();
    }
  }, [Gamer.isGameStarted]);

  React.useEffect(() => {
    // Observe when the user commits an error in the final position,
    if (Gamer.countMistakes > 0) {
      addToTimer();
    }
  }, [Gamer.countMistakes]);

  return (
    <div css={headerStyles.headerContainer}>
      <div css={headerStyles.nameContainer}>{nameString}</div>
      <div css={headerStyles.timerContainer}>
        <Icon src={RegularClockSVG} css={headerStyles.iconStyle} />
        <div>
          Your Score: {seconds} second{seconds !== 1 ? 's' : ''}
        </div>
      </div>
    </div>
  );
});

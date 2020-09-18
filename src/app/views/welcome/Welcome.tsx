import React from 'react';
import { Button } from 'app/components/Button/Button';
import { Input } from 'app/components/Input/Input';
import { ButtonGameStyles, WelcomeStyles } from './Welcome.theme';
import { Icon } from 'app/components/Icon/Icon';
import ArrowRightSVG from 'assets/images/arrow-right.svg';
import { useStoreContext } from 'store';
import { ROUTES_URLS } from 'app/routes/Routes';
import { withRouter } from 'react-router-dom';
import history from 'utils/history';

const ContentButtonGo = () => {
  const buttonGameStyles = ButtonGameStyles();
  return (
    <div css={buttonGameStyles.containerButton}>
      <div css={buttonGameStyles.contentButton}>Let's Go</div>
      <Icon src={ArrowRightSVG} />
    </div>
  );
};

const Welcome = withRouter(() => {
  const welcomeStyles = WelcomeStyles();
  const { User } = useStoreContext();
  const placeholder = 'Your name here';
  const [nameValue, setNameValue] = React.useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setNameValue(value);
  };

  const goGameView = () => {
    User.setName(nameValue);
    history.push({ pathname: ROUTES_URLS.GAME_PATH });
  };

  return (
    <div css={welcomeStyles.welcomeContainer}>
      <div css={welcomeStyles.welcomeTitle}>Hello friend, tell me your name...</div>
      <div>
        <Input placeholder={placeholder} onChange={handleChange} />
      </div>
      <div>
        <Button onClick={goGameView}>
          <ContentButtonGo />
        </Button>
      </div>
    </div>
  );
});

export default Welcome;

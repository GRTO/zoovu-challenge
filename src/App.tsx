import React from 'react';
import { Router } from 'react-router-dom';
import styled from '@emotion/styled';
import history from 'utils/history';
import { ThemeProvider } from 'emotion-theming';
import { theme } from 'styles/theme';
import { Button } from 'app/components/Button/Button';
import { store, StoreContext } from 'store';

const AppWrapper = styled.div<{}>({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  height: '100%',
});

const App = () => (
  <StoreContext.Provider value={store}>
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Router history={history}>
          <Button onClick={() => console.log('Here')}>
            <div>My Button</div>
          </Button>
        </Router>
      </AppWrapper>
    </ThemeProvider>
  </StoreContext.Provider>
);
export default App;

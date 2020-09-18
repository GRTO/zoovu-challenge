import React from 'react';
import { Router } from 'react-router-dom';
import styled from '@emotion/styled';
import history from 'utils/history';
import { ThemeProvider } from 'emotion-theming';
import { theme } from 'styles/theme';
import { store, StoreContext } from 'store';
import { AppRouter } from 'app/routes/Routes';

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
          <AppRouter />
        </Router>
      </AppWrapper>
    </ThemeProvider>
  </StoreContext.Provider>
);
export default App;

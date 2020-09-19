import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import { theme } from 'styles/theme';
import { store, StoreContext } from 'store';
import { AppRouter } from 'app/routes/Routes';
import { Provider } from 'mobx-react';

const AppWrapper = styled.div<{}>({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  height: '100%',
});

const App = () => (
  <StoreContext.Provider value={store}>
    <Provider {...store}>
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <Router>
            <AppRouter />
          </Router>
        </AppWrapper>
      </ThemeProvider>
    </Provider>
  </StoreContext.Provider>
);
export default App;

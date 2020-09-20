import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { ICardGameProps, CardGame } from '../CardGame/CardGame';
import { ThemeProvider } from 'emotion-theming';
import { theme } from 'styles/theme';

describe('Testing CardGame component', () => {
  it('Check is the content of the card represents an card (Z O O V U)', () => {
    const cardGame = (
      <ThemeProvider theme={theme}>
        <CardGame keyCard={'z'} />
      </ThemeProvider>
    );
    const cardGameWrapper = mount(cardGame);
    const cardGamerObject = cardGameWrapper.find(`div[id='card-id-z']`);
    expect(cardGamerObject).not.toBeUndefined();
  });

  it('Check is the content represents an empty slot', () => {
    const cardGame = (
      <ThemeProvider theme={theme}>
        <CardGame keyCard={'-'} />
      </ThemeProvider>
    );
    const cardGameWrapper = mount(cardGame);
    const cardGamerObject = cardGameWrapper.find(`div[id='card-emtpy-id']`);
    expect(cardGamerObject).not.toBeUndefined();
  });
});

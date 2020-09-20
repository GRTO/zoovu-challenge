import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { IButtonProps, Button } from '../Button/Button';
import { ThemeProvider } from 'emotion-theming';
import { theme } from 'styles/theme';

let buttonWrapper: ReactWrapper<IButtonProps>;
let buttonClickFn: jest.SpyInstance;

afterEach(() => {
  jest.restoreAllMocks();
  jest.resetAllMocks();
  buttonClickFn.mockRestore();
});

describe('Testing Button component', () => {
  beforeEach(() => {
    // Mock onClick function
    buttonClickFn = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });

  it('Check is the content has expected the expected value', () => {
    const button = (
      <ThemeProvider theme={theme}>
        <Button onClick={buttonClickFn as any}>
          <div id={`Button-testing`}>This is a test Button</div>
        </Button>
      </ThemeProvider>
    );
    buttonWrapper = mount(button);
    const textButton = buttonWrapper.find(`div[id='Button-testing']`).text();
    expect(textButton).toEqual('This is a test Button');
  });

  it('Button has been clicked', () => {
    const button = (
      <ThemeProvider theme={theme}>
        <Button onClick={buttonClickFn as any}>
          <div id={`Button-testing`}>This is a test Button</div>
        </Button>
      </ThemeProvider>
    );
    buttonWrapper = mount(button);
    buttonWrapper.simulate('click');
    // Calling click
    expect(buttonClickFn).toHaveBeenCalled();
  });
});

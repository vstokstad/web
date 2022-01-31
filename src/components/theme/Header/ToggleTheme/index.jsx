import React, { useContext } from 'react';
import { Wrapper } from './styles';
import Moon from '../../../common/Icons/Moon';
import Sun from '../../../common/Icons/Sun';
import { ThemeContext } from '../../../../providers/ThemeProvider';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Wrapper type='button' onClick={toggleTheme} theme={theme}>
      {theme === 'light' ? <Moon /> : <Sun />}
    </Wrapper>
  );
};

export default ToggleTheme;
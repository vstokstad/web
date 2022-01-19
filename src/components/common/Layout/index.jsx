import React, { useContext } from 'react';
import { Footer } from '../../theme';
import { Global } from './styles';
import './fonts.css';
import { ThemeContext } from '../../../providers/ThemeProvider';


export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Global theme={theme} />
      {children}
      <Footer />
    </>
  );
};
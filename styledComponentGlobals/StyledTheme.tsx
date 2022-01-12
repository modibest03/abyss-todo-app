import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { ThemeTypes } from '../utils/types';

const darkTheme: DefaultTheme = {
  body: '#011627',
  text: '#fff',
  border: '2px solid #fff',
  sliderPoint: 'flex-start',
};

const lightTheme: DefaultTheme = {
  body: '#fff',
  text: '#000',
  border: '2px solid #011627',
  sliderPoint: 'flex-end',
};

const StyledTheme: React.FC<ThemeTypes> = ({ children }) => {
  const { themeMode } = useSelector((state: RootState) => state.app);
  return (
    <ThemeProvider theme={themeMode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default StyledTheme;

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import StyledGlobalStyle from '../styledComponentGlobals/StyledGlobal';
import StyledTheme from '../styledComponentGlobals/StyledTheme';
import { ToastProvider } from 'react-toast-notifications';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <StyledTheme>
        <StyledGlobalStyle />
        <ToastProvider
          autoDismiss
          autoDismissTimeout={7000}
          placement='top-center'
        >
          <Component {...pageProps} />
        </ToastProvider>
      </StyledTheme>
    </Provider>
  );
}

export default MyApp;

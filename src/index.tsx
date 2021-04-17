import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ResetCSS } from '@pancakeswap-libs/uikit';
import GlobalStyle from './style/Global';
import 'bootstrap/dist/css/bootstrap.min.css';
import Providers from './Providers';
import 'inter-ui';
import './i18n';
import App from 'App';

// if( 'ethereum' in window ) {
//     (window.ethereum as any).autoRefreshOnNetworkChange = false;
// }

// window.addEventListener('error', () => {
//     localStorage?.removeItem('redux_localstorage_simple_lists');
// });

ReactDOM.render(
    <StrictMode>
        <Providers>
            <>
            </>
            <ResetCSS />
            <GlobalStyle />
            <App />
        </Providers>
    </StrictMode>,
    document.getElementById('root')
);

import React, { useEffect, lazy } from 'react'
import { Router, Redirect, Route, Switch } from 'react-router-dom'
import { ResetCSS } from '@pancakeswap-libs/uikit'



import SuspenseWithChunkError from './components/SuspenseWithChunkError';
import PageLoader from './components/PageLoader'
import GlobalStyle from './style/Global'
import history from './routerHistory'
import Doc from 'pages/Doc';
import News from 'pages/News';
import Blog from 'pages/Blog';
import Footer from 'components/Footer';

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Home = lazy(() => import('./pages/Home'))

const App: React.FC = () => {
  // Monkey patch warn() because of web3 flood
  // To be removed when web3 1.3.5 is released
    useEffect(() => {
        console.warn = () => null
    }, [])

    return (
        <Router history={history}>
            <ResetCSS />
            <GlobalStyle />
            <SuspenseWithChunkError fallback={<PageLoader />}>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/whitepaper" >
                        <Doc />
                    </Route>
                    <Route path="/blog" >
                        <Blog />
                    </Route>
                    <Route path="/news" >
                        <News />
                    </Route>
                </Switch>
            </SuspenseWithChunkError>
            <Footer/>
        </Router>
    )
}

export default React.memo(App)

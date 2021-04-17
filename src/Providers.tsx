import React from 'react'
// import { ModalProvider } from '@pancakeswap-libs/uikit'
import { Web3ReactProvider } from '@web3-react/core'
import { Provider } from 'react-redux'
import { ThemeContextProvider } from './ThemeContext'

const Providers: React.FC = ({ children }) => {
  return (
        <ThemeContextProvider>
            {children}
        </ThemeContextProvider>
  )
}

export default Providers

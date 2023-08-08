import React from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import theme from './theme/chakra-theme.ts'
import { AuthProvider } from './providers/AuthProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS={false}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)

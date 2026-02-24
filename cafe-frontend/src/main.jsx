import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import TOP from './component/TOP.jsx';
import Nav from './component/Nav.jsx';
import Footer from './component/Footer.jsx';
import StoreDataContextProvider from '../context/StoreDataContext.jsx';
import {BrowserRouter} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <StoreDataContextProvider>
    <TOP/>
    <Nav/>
    <App />
    <Footer/>
    </StoreDataContextProvider>
    </BrowserRouter>
  </StrictMode>,
)

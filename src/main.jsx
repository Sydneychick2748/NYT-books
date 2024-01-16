import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorBoundary from "./ErrorBoundary";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary fallback =" this is an invalid combination. please refresh the page and try again "/>
    <App />
  </React.StrictMode>,
)

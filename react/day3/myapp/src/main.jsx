import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import 'bootstrap/dist/css/bootstrap.css'
// Named Export

let myRoot = createRoot(document.getElementById('root'))
myRoot.render(
  <StrictMode>
    <App />
  </StrictMode>,
)

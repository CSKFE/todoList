import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App/index'
const container = document.querySelector('#root')
const wrap = createRoot(container)
wrap.render(<App />)

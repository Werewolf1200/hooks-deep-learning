import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { HooksApp } from "./HooksApp";
import { CounterApp } from "./01-useState/CounterApp";
import { CounterCustomHook } from "./01-useState/CounterCustomHook";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HooksApp />
    <CounterApp />
    <CounterCustomHook />
  </React.StrictMode>,
)

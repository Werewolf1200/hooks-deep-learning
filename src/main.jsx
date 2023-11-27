import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { HooksApp } from "./HooksApp";
import { CounterApp } from "./01-useState/CounterApp";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { CustomHookForm } from "./02-useEffect/CustomHookForm";
import { CounterCustomHook } from "./01-useState/CounterCustomHook";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HooksApp />
    <CounterApp />
    <CounterCustomHook />
    <SimpleForm />
    <CustomHookForm />
    <MultipleCustomHooks />
  </React.StrictMode>,
)

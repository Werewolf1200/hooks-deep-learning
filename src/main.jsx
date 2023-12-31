import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import './index.css'
import { HooksApp } from "./HooksApp";
import { CounterApp } from "./01-useState/CounterApp";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { CustomHookForm } from "./02-useEffect/CustomHookForm";
import { CounterCustomHook } from "./01-useState/CounterCustomHook";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { Layout } from "./05-useLayoutEffect/Layout";
import { Memorize } from "./06-memos/Memorize";
import { MemoHook } from "./06-memos/MemoHook";
import { CallbackHook } from './06-memos/CallbackHook';
import { Padre } from './07-tarea-memo/Padre';
import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from "./09-useContext/MainApp";

import './08-useReducer/intro-reducer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <MainApp />
  </BrowserRouter>
)
  /*

  <React.StrictMode>
    <HooksApp />
    <CounterApp />
    <CounterCustomHook />
    <SimpleForm />
    <CustomHookForm />
    <MultipleCustomHooks />
    <FocusScreen />
    <Layout />
    <Memorize />
    <MemoHook />
    <CallbackHook />
    <Padre />
    <TodoApp />
  </React.StrictMode>
  
  */


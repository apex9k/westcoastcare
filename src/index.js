import React from 'react';
import {createRoot}  from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link, HashRouter} from 'react-router-dom';

import App from "./App";
import "./index.css";


const root = createRoot(document.getElementById("root"))
root.render(
    <HashRouter>
        <App />
    </HashRouter>
    )
document.getElementById('root');






import React from 'react';
import {createRoot}  from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import App from "./App";
import "./index.css";


const root = createRoot(document.getElementById("root"))
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    )
document.getElementById('root');






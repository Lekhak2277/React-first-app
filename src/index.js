import React from "react";
import ReactDOM from 'react-dom';
import User from "./User";
import App from "./App";
import Love from "./Love"
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    BrowserRouter,
  } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render
(
    <>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    
    <br></br>
    <Love/>
    </>
);
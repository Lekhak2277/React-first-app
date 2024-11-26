import React, {useEffect,useState} from "react";
import User from "./User";
import {Test,Dove} from './Test';
import Home from './Home';
import About from './About';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    Routes,
  } from "react-router-dom";
  import Header from "./Header";
  import Error from './Error';


function App()
{
    const [toggle,funtcion_name] = useState(false);
    return (
        <>
        <div>
            <button onClick={()=>{funtcion_name(!toggle)}}>TOGGLE</button>
            

            {/* THE BELOW LINE IS CONDITIONAL RENDERIN LIKE IF ELSE STATEMENTS WE  USE IN OTHER PROGRAMMING LANGUAGES */}
            
            {toggle && <Test />}
        </div>

        {/* FIRT WE NEED TO INSTALL REACT ROUTER DOM BEFORE WE USE IT IN OUR CODE THE COMMAND FOR INSTALLING THE CODE IS 

        npm install react-router-dom

        THEN VISIT reactrouter.com/overview TO KNOW HOW TO USE */}
        <Routes>
            <Route path="/" element = 
            {
                <>
                <Header/>
                <Home/>
                </>
            }>

            </Route>


            <Route path="/about" element = 
            {
                <>
                <Header/>
                <About/>
                </>
            }>

            </Route>
            <Route path="*" element={<Error/>}>

            </Route>
        


        </Routes>
       
        </>



        );

}

export default App


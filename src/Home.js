import React from 'react';
import Header from './Header';
import {useNavigate} from 'react-router-dom';

function Home()
{
    const navigate = useNavigate();

    const handleClick =()=>
    {
        navigate("/about")
    }

    return(<>
    <p>FILE FOR ROUTING AND THIS IS FOR HOME PAGE</p>
    <h1>THIS IS HOME PAGE</h1>
    <button onClick={handleClick}>GO TO ABOUT PAGE USING usenavigate method</button>
    </>
    );
}

export default Home
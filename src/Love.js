import React, { useState } from 'react';
import { Dove } from './Test';


function Love()
{
    const [toggle,fun_name]=useState(false);
    return(<>
    <div>
        <button onClick={()=>fun_name(!toggle)}>Love</button>
        {/* {toggle && <Dove/>} */}
    </div>
    </>);
}

export default Love
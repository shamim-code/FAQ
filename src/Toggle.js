import React, { useState } from 'react'

export default function Toggle() {

    const [toggle,setToggle]= useState(true);
    console.log(toggle);

  return (
    <div>

        {
            toggle ? <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
            </p> : null
        }

        

        <button onClick={()=>{
            setToggle(!toggle);
        }}>

            {toggle ? "Hide" : "Show"}
        </button>
      
    </div>
  )
}

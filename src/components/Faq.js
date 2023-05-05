import React, { useState } from 'react'

export default function Faq(props) {

   let title, desc;
   title = props.title;
   desc = props.desc;


   //eita object gula print kore
   console.log(props.faz);


  // kinto eigula kaj korche na
  //  const faq = props.faq;
  //  const { t, i, d } = faq ;


   const [flag, setFalg]= useState(false);

  return (
  

    <div className='container'>

          <div>

          <h3>{title}</h3>
          
          {
            flag ? <p>{desc}</p> : null
          }

          </div>

          <button onClick={()=>{
            setFalg(!flag);
          }}>

            {
              flag ? "-" : "+"
            }

          </button>

    </div>
  )
}

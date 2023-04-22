import React from 'react'

//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import { BsSearch } from 'react-icons/bs';





export const Sidebar = () => {
  return (

   <div className="candela">
      <input type="text"  placeholder="       Buscar"></input>
      
       <i className="buscar"><BsSearch/></i>
      

    </div>

  
  )
};

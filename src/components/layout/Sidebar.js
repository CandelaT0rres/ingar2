import React from 'react';
import '../../';
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import { BsSearch } from 'react-icons/bs';





export const Sidebar = () => {
  return (

   <div className="container">
      <input type="text" placeholder="       Buscar" ></input>
      
       <i className="emoji"><BsSearch/></i>
      

    </div>

  
  )
};

import React from 'react'

import { Table } from 'react-bootstrap';


export const Home = () => {
  return (
    <div className='home'>
       
       
       <img src="./img/ingarPe.png" alt="scania" className='fijado'/>

           

      <div className='Principal'>
        
      

        <Table className= 'table '>

         

          <tbody className= 'tbody'>
            <tr >
            <td  style={{ color: 'none' }} className= 'td'> <img src="./img/scaniaSF.png" alt="scania" className='imagenG  nUno'/> </td>
            <td className= 'td'> <img src="./img/volvoSF.png" alt="volvo" className='imagenG nDos'/> </td>
            </tr>
          </tbody>

          <tbody className= 'tbody'>
          <tr>
            <td className= 'td'>  <img src="./img/volskInicio.png" alt="volk" className='imagenG  nTres'/></td>
            <td className= 'td'> <img src="./img/mercedesSF.png" alt="mercedes" className='imagenG  nCuatro'/></td>
            </tr>
          </tbody>

          <tbody className= 'tbody'>
          <tr>
            <td className= 'td'> <img src="./img/ivecoSF.png" alt="iveco" className='imagenG nCinco'/></td>
            <td className= 'td'><img src="./img/john.png" alt="john" className='imagenG nSeis'/></td>
            </tr>
          </tbody>  
        </Table>
    
      </div>
 
      
      
      <h1 className='titulo s-center shadowed-consulting slide-in-text-uno '>
        <span className='ingar shadowed-text'>INGAR</span> CONSULTING



      </h1>
      <p className='descripcion s-center slide-in-text-dos'> Oferta de perfiles técnicos especializados y esenciales </p>
     
   
    </div>

   
  )
};

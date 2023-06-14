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
            <td className= 'td'>  <a href='https://www.scania.com/ar/es/home/services/repair-and-maintenance/scania-parts.html' target='_blank'>  <img src="./img/scaniaSF.png" alt="scania" className='imagenG  nUno'/> </a></td>
            <td className= 'td'> <a href='https://www.volvorepuestos.com.ar/' target='_blank'> <img src="./img/volvoSF.png" alt="volvo" className='imagenG nDos'/></a></td>
            </tr>
          </tbody>

          <tbody className= 'tbody'>
          <tr>
            <td className= 'td'> <a href='https://vwcamionesybuses.com.ar/' target='_blank'><img src="./img/volskInicio.png" alt="volk" className='imagenG  nTres'/></a> </td>
            <td className= 'td'> <a href='https://www.deere.es/es/index.html' target='_blank'><img src="./img/john.png" alt="john" className='imagenG nCuatro'/> </a></td>
            </tr>
          </tbody>

          <tbody className= 'tbody'>
          <tr>
            <td className= 'td'> <a href='https://www.iveco.com/argentina/pages/home-page.aspx' target='_blank'><img src="./img/ivecoSF.png" alt="iveco" className='imagenG nCinco'/>  </a></td>
            <td className= 'td'> <a href='https://www.mercedes-benz.com.ar/passengercars.html'target='_blank'> <img src="./img/mercedesSF.png" alt="mercedes" className='imagenG  nSeis'/> </a></td>
   
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

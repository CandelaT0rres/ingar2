import React from 'react'
import { Table } from 'react-bootstrap';


export const Home = () => {
  return (

    <div className='contenidoHome'>
 <h1 className='titulo s-center'> <span className='ingar'>INGAR</span> CONSULTING</h1>
        <p className='descripcion s-center'> Oferta de perfiles técnicos especializados y esenciales </p>
  
      <div className='grafico'>

       
        

        <div >
          <Table className='table'>


           <td className='td circulos numeroUno '><img src="./img/scaniaSF.png" alt="scania" className='imagenG '/></td>
            <td className='td circulos numeroDos'><img src="./img/volvoSF.png" alt="volvo" className='imagenG '/></td>
            


            
            <td  className='td circulos numeroTres'> <img src="./img/volskInicio.png" alt="volk" className='imagenG '/></td>
            <td className='td circulos numeroCuatro'> <img src="./img/mercedesSF.png" alt="mercedes" className='imagenG '/></td>
            

            
            <td className='td circulos numeroCinco '> <img src="./img/ivecoSF.png" alt="iveco" className='imagenG '/></td>
            <td className='td circulos numeroSeis'> <img src="./img/john.png" alt="john" className='imagenG '/></td>
          

          </Table>

        </div>

    

    


     

</div>
</div>

   
  )
};

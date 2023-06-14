import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


export const Services = () => {
  return (

    <div className='services'>
      <h3 className='oferta'>Oferta en programas de capacitación</h3> 
      <div className='services-inicio'>

        <div className='services-contenido'>
          
        <div className='img-texto'>
        <img src="./img/ts.png"className='img-fluid w-60 h-auto nuestros-servicios'/>
        </div>

        </div>
         
     
     
        <div className='service-info'>

          <p className='parrafo'>Capacitación enfocada a:</p>
          <p className='parrafo'>Mecánicos, técnicos e Ingenieros para Mantenimiento Específico.
            Profesionales en Administración de Almacén y Control de Stock.
            Jefaturas de Mantenimiento y Planificación.
            Liderazgo, Management y visión de futuro para Gerentes y Supervisores 
          </p>
          <p className='parrafo'>
            Trabajamos con nuestros clientes para adecuar nuestra oferta de capacitación a sus necesidades.
          </p>
          <p className='parrafo'>
            INGAR UNIVERSITY - Campus propio de capacitación online. 
          </p>
      
        </div>

      </div>
     
    
    <div className='carruselDeServicios'>

      <Carousel>
        <Carousel.Item>
          <img
            className="img-fluid d-block w-90 imagen"
            src="./img/capacitaciones.png"
          />
       
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid d-block w-90 imagen"
            src="./img/gerencia.png"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid d-block w-90 imagen"
            src="./img/organizaciones.png"
          />
        </Carousel.Item>
      </Carousel>
    
    </div>



   

  

    </div>
    

  )
};



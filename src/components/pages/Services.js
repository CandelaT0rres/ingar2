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


  <div className='services-inicio'>



      
    <div className='service-info'>

      <p className='parrafo'>En INGAR CONSULTING nos dedicamos a diseñar soluciones para nuestros clientes
      y generar el camino para conseguir ese liderazgo deseado y necesario</p>
      <p className='parrafo'>Ventajas financieras tales como:</p>

      <p className='parrafo'>
        El mantenimiento pasa a ser una inversión en lugar de un costo fijo.
        Cero costos de alquiler y amortización de inmuebles y bienes de uso.
        No son necesarias inversiones en herramientas tecnológicas, telefónicas, etc.
        Cero inversión en capacitación y formación académica.
        Estructuras jerárquicas sencillas y dinámicas.
        Información actualizada.
        Incluye leasing de equipos de diagnóstico.
        Disminución del impacto ambiental.
      </p>
   </div>

    <div className='services-contenido'>
      <div className='img-texto'>
        <img src="./img/ventajaClientes.png"className='img-fluid w-90 h-auto'/>
      </div>
    </div>

  
  
  </div>
   
  <div className='services-contenido'>
      <div className='img-texto'>
        <img src="./img/cuadroCompleto.png"className='img-fluid w-90 h-auto imagenCuadro'/>
      </div>
    </div>
  

    </div>
    

  )
};



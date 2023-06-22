import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


export const About = () => {
  
  
  return (
    <div className='About ms-4 boton nav-link fw-bold fs-3'>
    

      <div className='contenedorDelSectorUno'>

      <div className='inicioUno-info'>
    
        <p className='parrafo-inicio p-1 titulo-inicio'>NUESTRO COMIENZO</p>
        <p className='parrafo-inicio p-1'> INGAR Consulting nace a principios del año 2015 fruto de observar y analizar las necesidades básicas del Mercado de Maquinaria Pesada y la industria dell Transporte</p>

        <p className='parrafo-inicio titulo-inicio p-2'> MERCADO ACTUAL</p>
        <p className='parrafo-inicio p-2'>Encontramos un mercado con alta demanda de perfiles técnicos especializados en el mantenimiento de Maquinaria pesada y Vehículos Pesados.
        Este tipo de perfiles son escasos a nivel internacional.</p>

        <p className='parrafo-inicio titulo-inicio p-3'>NUESTRAS IDEAS</p>
        <p className='parrafo-inicio p-3'>Desarrollamos nuestro porfatolio de productos y servicios en tres pilares que sirven de base para construír soluciones específicas y duraderas a las siguientes necesidades</p>
        <p className='parrafo-inicio p-3'>Capacitación Inteligente: En habiliades blandas, duras y específicas. Asesoramiento: Nuestros técnicos e ingenieros brindan soporte técnico en campo y soporte front office. Gerenciamiento: Focalizandonos en las necesidades de nuestros clientes y socios de negocios para las areas de mantenimiento y confiabilidad </p>
     
              
      </div>

      <div className='inicioUno'>
       

        <div className='carruselDeAbout'>

<Carousel>
  <Carousel.Item>
    <img
      className="img-fluid d-block w-90 imagenCarruselAboutUno"
      src="./img/InicioUnoF.png"
    />
 
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img-fluid d-block w-90 imagenCarruselAboutDos"
      src="./img/InicioDosF.png"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img-fluid d-block w-90 imagenCarruselAboutTres"
      src="./img/InicioTresF.png"
    />
  </Carousel.Item>
</Carousel>

</div>


      </div>
   
      </div>

    
<div className='contenedorDelSectorUno'>

<div className='inicioUno-info'>

  <div className='foto'>
    <img
      className="img-fluid d-block w-90 misionDiv "
      src="./img/misionDiv.png"
    />
  </div>
        
</div>

<div className='inicioUno'>
 
<div className='carruselDeAbout'>

  <Carousel>
    <Carousel.Item>  
    <p className='parrafo-inicio titulo-inicio carrusel-parrafo'>MISIÓN</p>
    <p className='parrafo-inicio carrusel-parrafo'>Transformarnos en el prestador de Servicio de Ingenieria, Mantenimiento y Procesos, proveyendo soluciones innovadoras у económicamente rentables, generando valores, beneficios y experiencia a nuestros</p>
    </Carousel.Item>
    <Carousel.Item>
    <p className='parrafo-inicio titulo-inicio carrusel-parrafo'>OBJETIVO</p>
    <p className='parrafo-inicio carrusel-parrafo'>Crecimiento efectivo y eficiente de acuerdo a nuestras Reglas de Calidad. Expandir nuestros mercados y negocios haciendo actividades más complejas que nuestros competidores Alcanzar estas actividades complejas teniendo en cuenta las correctas valoraciones de los riesgos y ventajas competitivas.</p>
    </Carousel.Item>
    <Carousel.Item>
    <p className='parrafo-inicio titulo-inicio carrusel-parrafo'>VISIÓN</p>
    <p className='parrafo-inicio carrusel-parrafo'>Alcanzar una posición de liderazgo Mundial de las firmas Consultoras, focalizados en brindar Servicios de Ingeniería de acuerdo a nuestra Misión, trabajando de acuerdo a nuestros Valores teniendo en cuenta el mantenimiento de nuestros Objetivos</p>
    </Carousel.Item>
    <Carousel.Item>  
    <p className='parrafo-inicio titulo-inicio carrusel-parrafo'>VALORES</p>
    <p className='parrafo-inicio carrusel-parrafo '>  Profesionalismo siempre que llevamos a cabo nuestras tareas. Respeto y Diversidad. Seremos los motores de cambio de nuestros Clientes</p>
    </Carousel.Item>
  </Carousel>

</div>


</div>

</div>
          
      
     
    </div>
  )
};

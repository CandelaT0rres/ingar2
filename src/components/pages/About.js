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


     



       <div>
       <img src="./img/misiones.png" alt="ingar" className='img-fluid w-40 h-auto misiones'/>
       </div>
         

         
       <section className="row inicio-home-background section-2-home container-fluid">
          <article className= "col-12 container ">
                        
            <div className="p-4 texto2">
              <h1 className="text-dark fw-bold text-center m-4 ingar">Nuestros números</h1>
              
            </div>

          </article>

        </section>


        <div>
       <img src="./img/CHAT.png" alt="ingar" className='img-fluid w-40 h-auto misiones'/>


       </div>


       <section className="row inicio-home-background section-2-home container-fluid">
          <article className= "col-12 container ">
                        
            <div className="p-4 texto2">
              <h1 className="text-dark fw-bold text-center m-4 ingar">Contactanos</h1>
              
            </div>

          </article>

        </section>
         

   
      <section>
        <a href='http://c2200184.ferozo.com/INGAR-Corporativo.mp4'> Para saber más sobre nosotros </a>
      </section>

      <section>
        <a href='https://anyflip.com/nyqxt/vnvm/'> Premio castrol- bp </a>
      </section>

    </div>
  )
};

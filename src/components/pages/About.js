//import React from 'react'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';





export const About = () => {
  

  const [open, setOpen] = useState(false);
  return (
    <div className='About ms-4 boton nav-link fw-bold fs-5'>
      
      <h1 className='aboutLetra'> Sobre nosotros </h1>

      <div className= 'contenedor1'> 
       <>
          <Button 
            className='button'
            size="lg"
            variant="info"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            
            >
            Nuestra Historia
         </Button>
          <div style={{ minHeight: '150px' }}>
            <Collapse in={open} dimension="width">
              <div id="example-collapse-text" className='parrafo1' >
                <Card body style={{ width: '800px' }}>

                <p class="fst-italic ">
                INGAR Consulting nace a principios del año 2015 fruto de observar y analizar las necesidades básicas del Mercado de Maquinaria Pesada y la Industria del Transporte.
                  Producto del análisis encontramos en la interrupción de la formación técnica como propuesta educativa formal el principal inconveniente en el momento de disponer de personal calificado.
                  Encontramos un Mercado con alta demanda de Perfiles Técnicos especializados en el Mantenimiento de Maquinaria pesada y Vehículos Pesados.
                  Este tipo de perfiles son escasos a nivel internacional. El mundo cambió, hoy día la multiplicación del conocimiento se produce en menos de una generación, por lo tanto, el principal foco de atención es la oferta de perfiles técnicos especializados y esenciales para atender esta creciente demanda.
                </p>
                </Card> 
              </div>
            </Collapse>
          </div>
       </>
     </div>


     <div className='contenedor2'> 
       <>
          <div style={{ minHeight: '150px' }}>
            <Collapse in={open} dimension="width">
              <div id="example-collapse-text" className='parrafo1'>
                <Card body style={{ width: '800px' }}>
                <p class="fst-italic">
                Las organizaciones que no cuenten con Recursos suficientes y entrenados en su Staff perderán posicionamiento estratégico en manos de la competencia.
                Enfocados en el contexto actual desarrollamos nuestro Portafolio de Productos & Servicios en tres pilares que sirven de base para construir soluciones especificas y duraderas a las siguientes necesidades:
                CAPACITACIÓN INTELIGENTE
                En Habilidades blandas, duras y específicas.
                ASESORAMIENTO
                Nuestros Técnicos e Ingenieros brindan soporte técnico en Campo y Soporte Front Office.
                GERENCIAMIENTO
                Focalizándonos en las necesidades de nuestros Clientes y Socios de Negocio para las Áreas de Mantenimiento y Confiabilidad.
                </p>
                </Card>
              </div>
            </Collapse>
          </div>
       </>
     </div> 

    
       <div>
       <img src="./img/ingar2.png" alt="Descripción de mi imagen" className='img-fluid w-40 h-auto'/>
       </div>


      

      <section>
        <a href='http://c2200184.ferozo.com/INGAR-Corporativo.mp4'> Para saber más sobre nosotros </a>
      </section>

      <section>
        <a href='https://anyflip.com/nyqxt/vnvm/'> Premio castrol- bp </a>
      </section>

    </div>
  )
};

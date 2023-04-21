import React from 'react'

export const Services = () => {
  return (
    <div className='services'>
      <h1>Servicios</h1>  

      <div class='containerServices'>
        <div class='row'>

          <div class='col p-3 mb-2 bg-transparent text-dark' >
           SERVICIO
          </div>

          <div class='col p-3 mb-2 bg-warning text-dark'>
            GOLD
          </div>

          <div class='col p-3 mb-2 bg-secondary text-white'>
            SILVER
          </div>

          <div class='col p-3 mb-2 bg-info text-white'>
            BRONCE
          </div>
        </div>

        <div class='row'>

          <div class='col p-3 mb-2 bg-transparent text-dark'> 
            Consulta técnica 09:00hs a 17:00hs 
          </div>


          <div class='col p-3 mb-2 bg-warning text-dark'> 
            Consulta técnica
          </div>

          <div class='col p-3 mb-2 bg-secondary text-white'> 
            Consulta técnica
          </div>

          <div class='col p-3 mb-2 bg-info text-white'> 
            Consulta técnica
          </div>

        </div>


        

      </div>

    </div>

  )
};



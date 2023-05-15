import {
    faArrowUp,
    faBars,
    faCake,
    faCoffee,
    faPhone,
    faLocationDot,
    faEnvelope,
  
  } from '@fortawesome/free-solid-svg-icons'
  import React from 'react'
  import { IconUno } from '../components/IconUno'
  
  export const App = () => {
    return (
      <>
        <h1>añadir iconos de FA en react</h1>
        <IconUno css='icon' icon={faCake} />
        <IconUno  css='icon' icon={faCoffee} />
        <IconUno  css='icon' icon={faPhone} />
        <IconUno  css='icon' icon={faBars} />
        <IconUno  css='icon' icon={faArrowUp} />
        <IconUno  css='icon' icon={faLocationDot} />
        <IconUno  css='icon' icon={faEnvelope} />
      </>






    )



  
  }


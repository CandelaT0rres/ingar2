import React from 'react'
import { IconUno } from '../IconUno'
import 'animate.css'
import { 
  faLocationDot,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'


//import Button from "react-bootstrap/Button";



export const Contact = () => {
  return (
   <div className= 'contact'>
  
        <div className= 'content'> 
            <h1 className= 'logo'>Contactate con <span>nosotros</span></h1>

            <div className= 'contact-wrapper'>  
                <div className= 'contact-form'>
                    <h3>Contactanos</h3>

                    <form id="contact-form" action='' method='post'>
                        <p>
                        <label>Nombre</label>
                        <input type='text' className='nombre' name="nombre" required></input>
                        </p>

                        <p>
                        <label>Email</label>
                        <input type='email' className='email' name="email" required ></input>
                        </p>

                        <p>
                        <label>Teléfono</label>
                        <input type='tel' className='telefono' name="tel" required></input>
                        </p>
                           
                        <p>
                        <label>Asunto</label>
                        <input type='text' className='asunto' name="asunto" required></input>
                        </p>

                        <p>
                        <label>Mensaje</label>
                        <textarea type='textarea' className='mensaje'name="mensaje"  rows={'3'} required></textarea>
                        </p>


                        <p>
                        <button type='submit'>
                          Enviar
                        </button>
                        </p>
                    </form>

                </div>
                <div className='contact-info'>
                   <h4>Más información</h4>

                   <ul>
                   <li><i><IconUno  css='icon' icon={faLocationDot}/> Uruguay 654, 8° P 11, CABA</i> </li>
                   <li><i><IconUno  css='icon' icon={faPhone}/>+54 9 11 5656 8006</i> </li>
                   <li><i><IconUno  css='icon' icon={faEnvelope}/> </i>info@ingarconsultores.com</li>
                   </ul>
                

                    <p> INGAR.com</p>
                
                </div>

            <div>


                        
            </div>


            </div>
        </div>
  </div>
  )
};

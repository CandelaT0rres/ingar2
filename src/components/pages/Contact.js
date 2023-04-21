import React from 'react'
//import Button from "react-bootstrap/Button";


export const Contact = () => {
  return (
   <div className= 'contact'>
        <div className= 'content'> 
            <h1 className= 'logo'>Contactate con <span>nosotros</span></h1>

            <div className= 'contact-wrapper'>  
                <div className= 'contact-from'>
                    <h3>Contactanos</h3>

                    <form action=''>
                        <p>
                        <label for='nombre'>Nombre</label>
                        <input type='text' className='nombre'></input>
                        </p>

                        <p>
                        <label>Email:</label>
                        <input type='email' className='email' ></input>
                        </p>

                        <p>
                        <label>Teléfono</label>
                        <input type='tel' className='telefono'></input>
                        </p>
                           
                        <p>
                        <label>Asunto</label>
                        <input type='text' className='asunto'></input>
                        </p>

                        <p>
                        <label>Mensaje</label>
                        <textarea type='textarea' className='mensaje' rows={'3'}></textarea>
                        </p>


                        <p>
                        <button type='submit'>
                          Enviar
                        </button>
                        </p>
                    </form>

                </div>
                <div className= 'contact-info'>
                   <h4>Más información</h4>

                   <ul>
                     <li>
                     
                     </li>
                   </ul>



                </div>

            <div>


                        
            </div>


            </div>
        </div>
  </div>
  )
};

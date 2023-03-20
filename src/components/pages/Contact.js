import React from 'react'
import Button from "react-bootstrap/Button";

export const Contact = () => {
  return (
    <div>
    <h1> Contacto </h1>  

    <div className='container'>
          <div>
              <form>
                  <h3 className='display-5 text-primary text-center'>CONTACTO</h3>
                  <div className='form-group'>
                      <label className="form-label">Nombre:</label>
                      <input type='text' placeholder='Introducir nombre' maxLength={'20'} id='nombre' className='form-control'></input>
                  </div>
                  <div className='form-group'>
                      <label>Email:</label>
                      <input type='email' placeholder='Introducir correo' maxLength={'20'} id='email' className='form-control'></input>
                  </div>
                  <div className='form-group'>
                      <label>Teléfono de contacto:</label>
                      <input type='number' placeholder='Introducir teléfono' maxLength={'20'} id='telefono' className='form-control'></input>  
                  </div>
                  <div className='form-group'>
                      <label>Mensaje:</label>
                      <input type='text' placeholder='Introducir mensaje' id='mensaje' className='form-control'></input>
                  </div>
                  <div className='form-group'>
                      <Button variant="outline-success btn-block">Guardar</Button> 
                      <Button variant="outline-info btn-block" >Limpiar</Button> 
                      <Button variant="outline-danger btn-block" >Borrar</Button>   
                  </div>
                 
              </form>
          </div>
    </div>
  </div>
  )
};

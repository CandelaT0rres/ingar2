import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Contact extends Component {
    render () {
        return (
            <div>
              <h1> Contacto </h1>  

              <div class='container'>
                    <div>
                        <form action='' method='POST'>
                            <h3 class='display-5 text-primary text-center'>CONTACTO</h3>
                            <div class='form-group'>
                                <label class="form-label">Nombre:</label>
                                <input type='text' placeholder='Introducir nombre' maxLength={'20'} id='nombre' class='form-control'></input>
                            </div>
                            <div class='form-group'>
                                <label>Email:</label>
                                <input type='email' placeholder='Introducir correo' maxLength={'20'} id='email' class='form-control'></input>
                            </div>
                            <div class='form-group'>
                                <label>Teléfono de contacto:</label>
                                <input type='number' placeholder='Introducir teléfono' maxLength={'20'} id='telefono' class='form-control'></input>  
                            </div>
                            <div class='form-group'>
                                <label>Mensaje:</label>
                                <input type='text' placeholder='Introducir mensaje' id='mensaje' class='form-control'></input>
                            </div>
                            <div class='form-group'>
                                <Button variant="outline-success btn-block">Guardar</Button> 
                                <Button variant="outline-info btn-block" >Limpiar</Button> 
                                <Button variant="outline-danger btn-block" >Borrar</Button> 
                                <a href='' class='btn btn-danger btn-block'>Limpiar</a>  
                            </div>
                           
                        </form>
                    </div>
              </div>
            </div>
        )
    }
}
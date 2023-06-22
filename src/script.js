//import React from 'react';

document.getElementById("contact-form").addEventListener("submit", function(event) {
    var nombreInput = document.getElementsByName("nombre")[0].value;
    var emailInput = document.getElementsByName("email")[0].value;
    var mensajeInput = document.getElementsByName("mensaje")[0].value;
    var asuntoInput = document.getElementsByName("asunto")[0].value;
    var telefonoInput = document.getElementsByName("telefono")[0].value;
    // Validaciones personalizadas
    if (nombreInput.trim() === "") {
      alert("Por favor, ingresa tu nombre.");
      event.preventDefault(); // Evita el envío del formulario
      return;
    }
  
    if (!isValidEmail(emailInput)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      event.preventDefault(); // Evita el envío del formulario
      return;
    }
  
    if (mensajeInput.trim() === "") {
      alert("Por favor, ingresa un mensaje.");
      event.preventDefault(); // Evita el envío del formulario
      return;
    }
    if (asuntoInput.trim() === "") {
        alert("Por favor, ingresa un asunto.");
        event.preventDefault(); // Evita el envío del formulario
        return;
    }
    if (!isValidPhone(telefonoInput)) {
        alert("Por favor, ingresa un número de teléfono válido (formato: XXX-XXXXXXX).");
        event.preventDefault();
        return;
    }
    
    

  });
  
  function isValidEmail(email) {
    // Validación del formato del correo electrónico utilizando una expresión regular
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidPhone(telefono) {
    var phoneRegex = /^\d{3}-\d{7}$/;
    return phoneRegex.test(telefono);
  }
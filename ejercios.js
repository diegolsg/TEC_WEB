// Función para mostrar el modal con el mensaje deseado
function mostrarModal(mensaje) {
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");
  
    modalBody.innerHTML = mensaje;
    modal.style.display = "block";
  }
  
  // Función para cerrar el modal
  function cerrarModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  // Ejercicio 1: Permutación
  function permuta() {
    let a = parseInt(prompt("Introduce el valor de 'a':", "5"));
    let b = parseInt(prompt("Introduce el valor de 'b':", "10"));
  
    if (!isNaN(a) && !isNaN(b)) {
      [a, b] = [b, a];
      mostrarModal(`Después de la permutación: a = ${a}, b = ${b}`);
    } else {
      mostrarModal("Por favor, introduce valores válidos.");
    }
  }
  
  // Ejercicio 2: Cuenta hasta un número ingresado
  function cuenta() {
    let max = parseInt(prompt("Introduce un número hasta el cual contar:", "10"));
  
    if (!isNaN(max) && max >= 0) {
      let resultado = "";
      for (let i = 0; i <= max; i++) {
        resultado += i + " ";
      }
      mostrarModal(`Cuenta: ${resultado}`);
    } else {
      mostrarModal("Por favor, introduce un número válido mayor o igual a 0.");
    }
  }
  
  // Ejercicio 3: Verificar si el número es positivo, negativo o nulo
  function verifica() {
    let numero = parseInt(prompt("Introduce un número:", "0"));
  
    if (!isNaN(numero)) {
      let mensaje = "";
      if (numero > 0) {
        mensaje = "El número es positivo";
      } else if (numero < 0) {
        mensaje = "El número es negativo";
      } else {
        mensaje = "El número es nulo";
      }
      mostrarModal(mensaje);
    } else {
      mostrarModal("Por favor, introduce un número válido.");
    }
  }
  
// Abre el modal con el contenido correspondiente
function abrirModal(ejercicio) {
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");
  
    let contenido = "";
  
    if (ejercicio === "permuta") {
      contenido = `
        <h2>Permutación de variables</h2>
        <form onsubmit="realizarPermutacion(event)">
          <label for="varA">Valor de A:</label>
          <input type="number" id="varA" required>
          <br>
          <label for="varB">Valor de B:</label>
          <input type="number" id="varB" required>
          <br><br>
          <button type="submit">Permutar</button>
        </form>`;
    } else if (ejercicio === "cuenta") {
      contenido = `
        <h2>Cuenta hasta un número</h2>
        <form onsubmit="realizarCuenta(event)">
          <label for="numCuenta">Número máximo:</label>
          <input type="number" id="numCuenta" min="0" required>
          <br><br>
          <button type="submit">Contar</button>
        </form>`;
    } else if (ejercicio === "verifica") {
      contenido = `
        <h2>Verificar número</h2>
        <form onsubmit="verificarNumero(event)">
          <label for="numero">Introduce un número:</label>
          <input type="number" id="numero" required>
          <br><br>
          <button type="submit">Verificar</button>
        </form>`;
    }
  
    modalBody.innerHTML = contenido;
    modal.style.display = "flex";
  }
  
 
  function cerrarModal() {
    document.getElementById("modal").style.display = "none";
  }
  
 
  function realizarPermutacion(event) {
    event.preventDefault();
    let a = parseInt(document.getElementById("varA").value);
    let b = parseInt(document.getElementById("varB").value);
    [a, b] = [b, a];
  
    document.getElementById("modal-body").innerHTML = `
      <h2>Resultado de Permutación</h2>
      <p>A: ${a}, B: ${b}</p>
      <button onclick="cerrarModal()">Cerrar</button>`;
  }
  
 
  function realizarCuenta(event) {
    event.preventDefault();
    const numCuenta = parseInt(document.getElementById("numCuenta").value);
    const resultado = Array.from({ length: numCuenta + 1 }, (_, i) => i).join(", ");
  
    document.getElementById("modal-body").innerHTML = `
      <h2>Resultado de la Cuenta</h2>
      <p>${resultado}</p>
      <button onclick="cerrarModal()">Cerrar</button>`;
  }
  

  function verificarNumero(event) {
    event.preventDefault();
    const numero = parseInt(document.getElementById("numero").value);
    const mensaje = numero > 0 ? "Positivo" : numero < 0 ? "Negativo" : "Nulo";
  
    document.getElementById("modal-body").innerHTML = `
      <h2>Resultado</h2>
      <p>El número es: ${mensaje}</p>
      <button onclick="cerrarModal()">Cerrar</button>`;
  }
  
function simularPeticionAPI() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Datos recibidos correctamente");
    }, 5000); // Simula 5 segundos de espera
  });
}

async function obtenerDatos() {
  try {
    const resultado = await simularPeticionAPI();
    console.log(resultado);
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
}

// Ejecutar la función
obtenerDatos();

const persona = {
    nombre: "Ivan Isay",
    edad: 37 ,
    direccion:{
        ciudad: "QRO",
        pais: "MX",
    }
};
const {nombre, edad, direccion: {ciudad}} = persona;
console.log("Hola me, " + nombre + ". y tengo  " + edad + " años. Soy de " + ciudad);
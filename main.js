
console.log("Hola Mundo")

let papitas = 10;
while (papitas){
console.log(`Tengo ${papitas} papitas`),
papitas--;
}



// while(true){
//     if(prompt("Ingrese un número") ==3){
//         break;
//     }

// }

// while(true){
//     let numero1 = prompt("Ingrese un número")
//     if(numero1==3 || numero1== 10){
//         break;
//     }
// }

while(true){
    let usuario = prompt("Ingrese un usuario")
    let contrasena = prompt("Ingrese Contraseña")
    if(usuario== "Rafael" && contrasena== 123){
        alert("Bienvenido")
        break;
    } else{
        alert(`El usuario ${usuario} o la contraseña ${contrasena} están errados`);
        continue;
    }
}


// do{
// console.log("Hola Mundo While")
    
// }while(false);

// while(false){
//     console.log("Hola");

// }


// do{
//     let usuario = prompt("Ingrese el usuario");
//     let contrasena = prompt("Ingrese el contraseña");
//     var bandera = {
//         usuario: usuario!="Rafael",
//         contrasena: contrasena!="1234",
//         condicion: usuario!="Rafael" || contrasena!="1234"
//     };
//     if(!bandera.condicion) alert(`Bienvenido Usario`);
//     if(bandera.usuario) alert(`El usuario ${usuario} no existe`);
//     if(bandera.contrasena) alert(`La contraseña ${contrasena} no existe`);

// }while(bandera.condicion);


import Auto from "./ClaseAutos";


export default class RegistroAutomotor{
    automovil(array:Auto[]){
        console.log(`Automovil:`, array);
    }

    consultar(marca: string, array: Auto[]){
        let automovilDisp = array.find (automovil => automovil.marca === marca)
        if (automovilDisp) {
            console.log (marca, `existe en el registro`, automovilDisp)
            return automovilDisp
        } else {
            console.log (marca, `no existe en el registro`)
        }
 }
    alta(auto: Auto, array: Auto[]){
    if(array.push(auto)){
        console.log('Se ha añadido ', auto.marca, ' a la base de datos', array);
    } else{
        console.log('El auto', auto.marca , ' No se ha podido añadir al registro');
    
    }
}

    actualizar(marca: string, array: Auto[], dato: string){
    let modificarAuto = this.consultar(marca, array)
    if(modificarAuto){
        modificarAuto.marca = dato;
        console.log('El automovil', marca, ' ha sido modificado, se llama ', dato);
    }
    else {console.log('El automovil no se modifico');
  }   
    }

    borrar(marca: string, array: Auto[]): any {
    let autoEncontrado = array.findIndex(automovil => automovil.marca == marca);
    if(autoEncontrado >= 0){  
        array.splice(autoEncontrado, 1)
        console.log('Automovil eliminado', marca);
        console.log(array);
        return array;
    } else {

     console.log('Automovil', marca, 'no ha sido eliminado');
    }

    
}
}



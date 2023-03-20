export default class Matriz {
    mtz: number [][];
    constructor(fila: number, colum: number){
       
    this.mtz= new Array (fila)
       for (let i = 0; i < fila; i++){
       this.mtz[i] = new Array (colum);
    }
    }
        get(fila:number, colum:number){
        console.log(this.mtz[fila][colum])
    }

        set(fila:number, colum:number, valor:any){
        this.mtz[fila] [colum] = valor;
        console.log("Agrego ", valor," su ubicacion es", fila, "y", colum)
        }
    }
    
   
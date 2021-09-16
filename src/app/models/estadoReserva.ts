export class EstadoReserva{

    public nombre = "";
    public color="";

	constructor( 
		
		){
    }
    
    public asignarValores(init?: Partial<EstadoReserva>) {
        Object.assign(this, init);
    }
}
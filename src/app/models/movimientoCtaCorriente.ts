export class MovimientoCtaCorriente{

    public ventaId ="";
    public servicioId="";
    public metodoPago =[];
    public createdAt="";
    
    public fotoCtaCorriente:any;
    
    public cajaId=""
    public movimientoCajaId="";

	constructor(
        public id:string,
        public clienteid:string,
        public ctaCorrienteId:string,
        public motivo:string,
        public metodo:string,
        public monto:number,
		public vendedorId:string, 
        public vendedorNombre:string
		){

    }
    
    public asignarValores(init?: Partial<MovimientoCtaCorriente>) {
        Object.assign(this, init);
    }
}
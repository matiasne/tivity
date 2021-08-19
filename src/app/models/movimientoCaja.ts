export enum EnumTipoMovimientoCaja {
    ingreso = 1, 
    egreso = 2, 
    devolucion = 3,  
    pago = 4,
    apertura = 5, 
    cierre = 6
}


export class MovimientoCaja{

    public servicioId =""; 
    public ventaId="";
    public pagareId ="";
    public ctaCorrienteId ="";    
    public movimientoCtaCorrienteId="";
    public createdAt = new Date();
    public isCierre = false;
    public fotoCaja:any; //Estado de la caja al momento de realizar el movimiento
    public pedidoId = "";

	constructor(
        public id:any,
        public tipo:EnumTipoMovimientoCaja,
        public clienteId:any,
        public cajaId:any,
        public metodoPago:string,
        public monto:number,
        public motivo:string,
		public creadorId:"", 
        public creadorNombre:""
		){
    }
    
    public asignarValores(init?: Partial<MovimientoCaja>) {
        Object.assign(this, init);
    }
}
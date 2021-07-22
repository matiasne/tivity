export enum EnumAfipTiposComprobantes {
    facturaA = 1, 
    notaDebitoA = 2, 
    notaCreditoA = 3,
    reciboA =4,
    notaVentaAlContadoA = 5,
    facturaB = 6, 
    notaDebitoB = 7, 
    notaCreditoB = 8,
    reciboB =9,
    notaVentaAlContadoB = 10,
    facturaC = 11, 
    notaDebitoC = 12, 
    notaCreditoC = 13,
    reciboC =14,
    notaVentaAlContadoC = 15,
}


export enum EnumAfipTiposDocumentos {
    cuit = 80, 
    cuil = 86, 
    cdi =87,
    dni = 96,
    consumidorFinal = 99
}

export enum EnumAfipAlicuotasIva {
    porcentaje_0 = 3,
    porcentaje_10_5 = 4,
    porcentaje_21 = 5,
    porcentaje_27 = 6,
    porcentaje_5 = 7,
    porcentaje_2_5 = 8
}

export enum EnumAfipConceptos {
    productos = 1,
    servicios = 2,
    productosServicios = 3
}

export enum EnumAfipPersonaJuridica {
    monotributista = 1,
    responsableInscripto = 2,
    ivaExcento=3
}

export enum EnumAfipMoneda {
    pesos = "PES",
    dolar = "DOL",
}


export class IvaItem {
    public Id ="";
    public BaseImp="";
    public Importe="";   
    
    public asignarValores(init?: Partial<IvaItem>) {
        Object.assign(this, init);
    }
}

export class CbteAsoc{
    public Tipo ="";
    public PtoVta ="";
    public Nro="";
    public Cuit="";

    public asignarValores(init?: Partial<CbteAsoc>) {
        Object.assign(this, init);
    }
}

export class TributoItem{
    public Id ="";
    public Desc="";
    public BaseImp="";
    public Alic="";
    public Importe ="";

    public asignarValores(init?: Partial<TributoItem>) {
        Object.assign(this, init);
    }
}

export class Opcionales{
    public Id="";
    public Valor="";

    public asignarValores(init?: Partial<Opcionales>) {
        Object.assign(this, init);
    }
}

export class Compradores{
    public DocTipo ="";
    public DocNro="";
    public Porcentaje="";

    public asignarValores(init?: Partial<Compradores>) {
        Object.assign(this, init);
    }
}

export class AfipVoucher{
    public CantReg ="0";
    public PtoVta="1";
    public CbteTipo="";
    public Concepto = 0;
    public DocTipo=0; //esto se agrega cuando es un adquirido
    public DocNro=""; //esto se agrega cuando es un adquirido
    public CbteDesde=0; //esto se agrega cuando es un adquirido
    public CbteHasta=0; //esto se agrega cuando es un adquirido
    public CbteFch=0; //esto se agrega cuando es un adquirido
    public FchServDesde=null;
    public FchServHasta=null;
    public FchVtoPago=null;
    public ImpTotal=""; //esto se agrega cuando es un adquirido
    public ImpTotConc=""; //esto se agrega cuando es un adquirido
    public ImpNeto=""; //esto se agrega cuando es un adquirido
    public ImpOpEx=""; //esto se agrega cuando es un adquirido
    public ImpIVA=""; //esto se agrega cuando es un adquirido
    public ImpTrib=""; //esto se agrega cuando es un adquirido
    public MonId=""; //esto se agrega cuando es un adquirido
    public MonCotiz=""; //esto se agrega cuando es un adquirido
    [Iva: string]: any;
    
    //public Iva?=[]; //esto se agrega cuando es un adquirido
    

	constructor(
		
		){
    }
    
    public asignarValores(init?: Partial<AfipVoucher>) {
        Object.assign(this, init);
    }
}
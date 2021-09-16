



export class Division{
    public id="";
    public nombre="";

	constructor(
		
		){
            
	}

    public asignarValores(init?: Partial<Division>) {
        Object.assign(this, init);
    }
}


export class Subdivision{
    public id="";
    public nombre="";
    public divisiones = [{
        nombre:""
    }];

	constructor(
		
		){
            
	}
}
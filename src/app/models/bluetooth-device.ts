

export class BluettothDevice{
    public id ="";
    public address = "";
    public name="";
    public class ="";
    constructor(
		
		){
    }
    
    public asignarValores(init?: Partial<BluettothDevice>) {
        Object.assign(this, init);
    }
}
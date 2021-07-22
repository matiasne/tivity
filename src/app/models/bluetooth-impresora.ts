import { BehaviorSubject } from "rxjs";
import { BluettothDevice } from "./bluetooth-device";

export class BluettothImpresora extends BluettothDevice{
    public conexionActual = false;
    public tamanoPapel = "55" //55 80 88
    public alias = "";
    public bluetoothStatusConnection:BehaviorSubject<any> = new BehaviorSubject(false);
    
	constructor(
		
		){
            super()
    }
    
    public asignarValores(init?: Partial<BluettothDevice>) {
        Object.assign(this, init);
    }
}
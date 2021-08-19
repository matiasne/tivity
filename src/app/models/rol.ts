import { DocumentReference } from 'angularfire2/firestore';


export enum Permisos {
    Oculto = 'Oculto', //no se muestra en menu.
    Visible = 'Visible', //se muestra pero no editable.
    Editor = 'Editor', //se muestra y es editable.
}

export class Rol{
    public id="";
    public estado ="";
    public comercioId ="";
    public comercioRef:DocumentReference;
    public userEmail="";
    public userId =""; 
    public rol="";
    public comercioNombre="";
    public adminEmail="";

    public permisos={
        alcanceOtros:Permisos.Visible,
        cobro:Permisos.Visible,
        catalogo:Permisos.Visible,
        pedidos:Permisos.Visible,
        comandas:Permisos.Visible,
        reservas:Permisos.Visible,
        clientes:Permisos.Visible,
        ctasCorrinentes:Permisos.Visible,
        cajas:Permisos.Visible,
        subscripciones:Permisos.Visible,
        configuracion:Permisos.Visible,
    }

	constructor(
		
		){
    }
    
    public asignarValores(init?: Partial<Rol>) {
        Object.assign(this, init);
    }
}
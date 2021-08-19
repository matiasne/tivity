import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthenticationService } from './authentication.service';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';
import { Permisos, Rol } from '../models/rol';
import { ComerciosService } from './comercios.service';
import { BaseService } from './base.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService extends BaseService {
  
  public rolSubject = new BehaviorSubject <any>("");
  private collectionGroup:string;
  private comercioId=""

  constructor(
    private firestore: AngularFirestore,
    private auth:AuthenticationService,
    private comerciosService:ComerciosService
    ) {     
      super(firestore); 
      this.comerciosService.getSelectedCommerce().subscribe(data=>{
        // let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId'); 
        if(data){
          
          this.setPath('comercios/'+data.id+'/roles')   
          console.log(this.path)
         }
        
      })
      
  }

  init(){
    this.setPath('comercios/'+this.comerciosService.getSelectedCommerceId()+'/roles')   
  }

  getRolValue(){
    return this.rolSubject.value;
  }

  getRol(): Observable<any>{
    return this.rolSubject.asObservable();
  }

  setRol(rol:Rol){
    this.rolSubject.next(rol);    
  }
    
  
  public create(data) {    
    return this.firestore.collection(this.path).doc(data.userEmail).set({...data,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  } 

  public get(documentId: string) {  
    this.setPath('comercios/'+this.comerciosService.getSelectedCommerceId()+'/roles')   
    return this.firestore.collection(this.path).doc(documentId).snapshotChanges();
  }

  public getAllTipos() {       
    this.setPath('comercios/'+this.comerciosService.getSelectedCommerceId()+'/roles')   
    return this.firestore.collection('roles_tipos').snapshotChanges();
  }

  public getAll() {   
    this.collectionGroup = "roles";
    return this.firestore.collectionGroup(this.collectionGroup).snapshotChanges();
  }

  public getAllRolesbyUser(id) {  
    
    this.collectionGroup = "roles";
    return this.firestore.collectionGroup(this.collectionGroup, ref => ref.where('userId', '==', id)).get(/*{ source: 'server' }*/)
    .pipe(
      map(actions => {
        const data = [];       
        actions.forEach(a => {
          const item = a.data() ;
          item.id = a.id;
          console.log(a.ref.parent.parent)
          data.push(item);
        });
        return data;
      })
    )

  }  

  public getAllRolesbyEmail(email) {  
    
    this.collectionGroup = "roles";
    return this.firestore.collectionGroup(this.collectionGroup, ref => ref.where('userEmail', '==', email)).snapshotChanges(/*{ source: 'server' }*/)
    .pipe(
      map(actions => {
        const data = [];       
        actions.forEach(a => {
          const item:any = a.payload.doc.data() ;
          item.id =  a.payload.doc.id;
          data.push(item);
        });
        return data;
      })
    )

  }  

//La pantalla HOME necesita esta diferencia!!!!!!
  public getAllRolesbyEmailGET(email) {  
    
    this.collectionGroup = "roles";
    return this.firestore.collectionGroup(this.collectionGroup, ref => ref.where('userEmail', '==', email)).get(/*{ source: 'server' }*/)
    .pipe(
      map(actions => {
        const data = [];       
        actions.forEach(a => {
          
          const item:any = a.data() ;
          item.id =  a.id;
          data.push(item);
        });
        return data;
      })
    )

  }  
  

  
  getAllRolesbyComercio(comercioId){     
    this.setPath('comercios/'+comercioId+'/roles')   
   
    return this.firestore.collection(this.path).snapshotChanges().pipe(
      map(actions => {
        const data = [];       
        actions.forEach(a => {
          const item:any = a.payload.doc.data() ;
          item.id = a.payload.doc.id;
          data.push(item);
        });
        return data;
      })
    )
  }

  public setUserAsAdmin(comercioId){ 
    
    this.setPath('comercios/'+comercioId+'/roles')   
 
    let rol = new Rol();

    rol.rol = "Administrador";
    rol.userEmail = this.auth.getEmail();
    rol.userId = this.auth.getUID();
    rol.comercioId = comercioId;

    rol.permisos.cajas = Permisos.Editor;
    rol.permisos.catalogo=Permisos.Editor;
    rol.permisos.pedidos=Permisos.Editor;
    rol.permisos.comandas=Permisos.Editor;
    rol.permisos.reservas=Permisos.Editor;
    rol.permisos.clientes=Permisos.Editor;
    rol.permisos.ctasCorrinentes=Permisos.Editor;
    rol.permisos.cajas=Permisos.Editor;
    rol.permisos.subscripciones=Permisos.Editor;
    rol.permisos.configuracion=Permisos.Editor;



    this.firestore.collection(this.path).add(Object.assign({}, rol));       
  } 

  public getAllOwnerId(){
    this.collectionGroup = "roles";
    
    return this.firestore.collectionGroup(this.collectionGroup, ref=>ref.where("rol","==","owner")).snapshotChanges();
  }


 
}

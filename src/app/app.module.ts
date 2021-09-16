import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { Camera } from '@ionic-native/camera/ngx';
import { Crop } from '@ionic-native/crop/ngx'

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { FCM } from '@ionic-native/fcm/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ComponentsModule } from './Components/components.module';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin

import { Network } from '@ionic-native/network/ngx';

import { Printer, PrintOptions } from '@ionic-native/printer/ngx';
import { FormComercioPage } from './form-comercio/form-comercio.page';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { HTTPInterceptorService } from './Services/http-interceptor.service';

import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import {AutosizeModule} from 'ngx-autosize'

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { CalendarModule } from 'ion2-calendar';

import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links/ngx'
import { NFC, Ndef } from '@ionic-native/nfc/ngx';

import { AppVersion } from '@ionic-native/app-version/ngx';
import { OpenNativeSettings } from '@ionic-native/open-native-settings/ngx';

import { PapaParseModule } from 'ngx-papaparse';
import { File } from '@ionic-native/file/ngx';
import { DirectivesModule } from './Directives/directives.module';
import { Serial } from '@ionic-native/serial/ngx';

import { ColorPickerModule } from 'ngx-color-picker';

const firebaseConfig = {
  apiKey: "AIzaSyAenr8VfNta7u8NL5J4jpMtosnENy-Gcqc",
  authDomain: "comercios-admin-socialup.firebaseapp.com",
  databaseURL: "https://comercios-admin-socialup.firebaseio.com",
  projectId: "comercios-admin-socialup",
  storageBucket: "comercios-admin-socialup.appspot.com",
  messagingSenderId: "1050852063833",
  appId: "1:1050852063833:web:a2db077836d55afc5ccf48",
  measurementId: "G-29X2FKN2TL"
}; 


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
]);

@NgModule({
  declarations: [
    AppComponent,
       
  ],
  entryComponents: [
    
  ],
  imports: [
    FormsModule,
    ComponentsModule,
    DirectivesModule,
    ReactiveFormsModule,
    BrowserModule,
    NgxQRCodeModule, 
    ColorPickerModule,
    HttpClientModule,
    ImageCropperModule,
    FullCalendarModule, 
    CalendarModule,    
    PapaParseModule,
    IonicModule.forRoot(),
    AppRoutingModule,  
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(), 
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    
   // ServiceWorkerModule.register('combined-sw.js', { enabled: environment.production })  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AutosizeModule,
    GooglePlus,
    FileTransfer,
    Crop,
    Camera,
    ImagePicker,
    BluetoothSerial,
    FirebaseDynamicLinks,
    Deeplinks,
    File,
    Serial,
    NFC,
    Ndef,
    File,
    FCM,
    AppVersion,
    OpenNativeSettings,
    AngularFirestore, 
    BarcodeScanner,
    CallNumber,
    EmailComposer,
    SpeechRecognition,
    Network,
    Printer,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPInterceptorService,
      multi: true
    },  
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}

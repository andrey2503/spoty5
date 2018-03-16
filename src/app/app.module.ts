import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
import { InicioPage } from '../pages/inicio/inicio';
import { PerfilesPage } from '../pages/perfiles/perfiles';
import { PerfilDetallePage } from '../pages/perfil-detalle/perfil-detalle';
import { ContactoPage } from '../pages/contacto/contacto';
import { AcercaPage } from '../pages/acerca/acerca';
import { PlaylistPage } from '../pages/playlist/playlist';
import { CancionesPage } from '../pages/canciones/canciones';
import { CancionPopoverPage } from '../pages/cancion-popover/cancion-popover';
// import este modulo para las peticiones de los providers
import { HttpClientModule } from '@angular/common/http';
import { DeezerServiceProvider } from '../providers/deezer-service/deezer-service';
import { TecnoPlayerComponent } from '../components/tecno-player/tecno-player';
@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    PerfilesPage,
    PerfilDetallePage,
    ContactoPage,
    AcercaPage,
    PlaylistPage,
    CancionesPage,
    TecnoPlayerComponent,
    CancionPopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    PerfilesPage,
    PerfilDetallePage,
    ContactoPage,
    AcercaPage,
    PlaylistPage,
    CancionesPage,
    TecnoPlayerComponent,
    CancionPopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DeezerServiceProvider
  ]
})
export class AppModule {}

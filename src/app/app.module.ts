import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { PrincipalPage } from '../pages/principal/principal';
import { AjustesPage  } from '../pages/ajustes/ajustes';
import { Ajustes2Page  } from '../pages/ajustes2/ajustes2';
import { ModalPage  } from '../pages/modal/modal';
import { Pagina2Page  } from '../pages/pagina2/pagina2';
import { Pagina3Page  } from '../pages/pagina3/pagina3';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PrincipalPage
    ,AjustesPage 
    ,Ajustes2Page 
    ,ModalPage 
    ,Pagina2Page 
    ,Pagina3Page
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp , { backButtonText: 'Atras' })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PrincipalPage
    ,AjustesPage 
    ,Ajustes2Page 
    ,ModalPage 
    ,Pagina2Page 
    ,Pagina3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

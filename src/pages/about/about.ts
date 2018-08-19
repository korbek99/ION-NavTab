import { Component } from '@angular/core';
import { NavController , ModalController} from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { NavParams } from 'ionic-angular/navigation/nav-params';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,
              private modalCtrl:ModalController ,
              public navParams:NavParams 
   ) {

  }

  mostrar_modal()
  {

   let modal = this.modalCtrl.create(ModalPage , { nombre:"Fernando" , edad:30 } );
   modal.present();

   modal.onDidDismiss( parametros =>{

    if( parametros )
    {
      console.log("Data del Modal");
      console.log( parametros );
    }else{
      console.log("Se cerro el modal sin parametros");
    }
 

   })

  }
}

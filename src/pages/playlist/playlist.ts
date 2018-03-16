import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, ModalController } from 'ionic-angular';

import {CancionesPage} from '../canciones/canciones';
import { DeezerServiceProvider } from '../../providers/deezer-service/deezer-service';
import { PerfilDetallePage } from '../perfil-detalle/perfil-detalle';

/**
 * Generated class for the PlaylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html',
  providers:[DeezerServiceProvider]
})
export class PlaylistPage {
  public user: any;
  public playlist:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ds: DeezerServiceProvider,
     public loadingCtrl:LoadingController,
     public modalCtrl: ModalController
     ) {
  	this.user=this.navParams.get('user');
    this.playlist = [];
    
  }

  ionViewDidLoad() {
    let loader=this.loadingCtrl.create();
    loader.present();
    this.ds.getUsuarioPlayList(this.user.id).subscribe(data=>{
      this.playlist= data['data'];
      loader.dismiss();
    });
    console.log('update ionViewDidLoad PlaylistPage');
  }

  goToSongs(playlist){
  	this.navCtrl.push(CancionesPage,{playlist:playlist});
  }//end to goToSongs

  goToPerfilDetalle(user,playlist){
   let modal= this.modalCtrl.create(PerfilDetallePage,{
     user:user,
     playlist:playlist
   });
   modal.present();
   modal.onDidDismiss(data=>console.log(data));
  }// fin de Gotroperfildetalle
}

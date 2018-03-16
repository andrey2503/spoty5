import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';

import { PlaylistPage } from '../playlist/playlist';
/**
 * Generated class for the PerfilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 import { DeezerServiceProvider } from '../../providers/deezer-service/deezer-service';
 import { Observable } from 'rxjs';
 import 'rxjs/add/observable/merge';
@IonicPage()
@Component({
  selector: 'page-perfiles',
  templateUrl: 'perfiles.html',
  providers:[DeezerServiceProvider]
})
export class PerfilesPage {
// se inyecta el servio al constructor
public usuarios:any;
public loader:any;
public valor:any;
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public ds: DeezerServiceProvider,
     public loadingCtrl:LoadingController
     ) {
    this.usuarios=[];
    this.loader=this.loadingCtrl.create();
  }//fin del constructor

  ionViewDidLoad() {
    this.loader.present();
    // this.loader.dismiss();
    this.ds.getProfilesID().subscribe(usersID=>{
      // usersID.map(usersID=>{
      //   this.ds.getDetalleUsuario(usersID).subscribe(user=>{
      //     this.usuarios.push(user); 
      //   });
      // });
      this.valor=usersID;
      let sources= this.valor.map(userID=>this.ds.getDetalleUsuario(userID));
      console.log(sources);
      Observable.merge(...sources).subscribe(
        data=>this.usuarios.push(data),
        error=>console.log(error),
        ()=>this.loader.dismiss()
        );
    });// fin de la peticion
    // console.log('ionViewDidLoad PerfilesPage');

  }// fin de ionViewDIdoad


  goToPlayList(user){
  	this.navCtrl.push(PlaylistPage,{user: user});
  }// end to gotoplaylist

}

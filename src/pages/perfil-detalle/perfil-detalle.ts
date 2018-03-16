import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';

/**
 * Generated class for the PerfilDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil-detalle',
  templateUrl: 'perfil-detalle.html',
})
export class PerfilDetallePage {
  user:any;
  playlist:any;
  totalCanciones:number;
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public viewCtrl:ViewController
  	) {
  	this.user= this.navParams.get("user");
  	this.playlist= this.navParams.get("playlist");
  	this.totalCanciones=0;
  	this.playlist.map(playlist=>this.totalCanciones+=playlist.nb_tracks);
  	console.log(this.user);
  	console.log(this.playlist);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilDetallePage');
  }

  close(){
  	this.viewCtrl.dismiss({retornar:"parametros la padre"});
  }

}

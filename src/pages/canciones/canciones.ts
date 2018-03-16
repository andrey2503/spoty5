import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,PopoverController } from 'ionic-angular';

/**
 * Generated class for the CancionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 import { DeezerServiceProvider } from '../../providers/deezer-service/deezer-service';
 import { CancionPopoverPage } from '../cancion-popover/cancion-popover';
//  import { Observable } from 'rxjs';
@IonicPage()
@Component({
  selector: 'page-canciones',
  templateUrl: 'canciones.html',
  providers:[DeezerServiceProvider]
})
export class CancionesPage {
  public playlist: any;
  public songs:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ds:DeezerServiceProvider,
    public loadingCtrl:LoadingController,
    public popOverCtrl: PopoverController
    ) {
  	this.playlist= this.navParams.get('playlist');
  	this.songs=[];
  }

  ionViewDidLoad() {
    let loader=this.loadingCtrl.create();
    loader.present();
  	this.ds.getPlayListSongs(this.playlist.id).subscribe(data=> {
      this.songs=data['data'];
  		loader.dismiss();
  	});
  }// fin de oionview

  openCancionPopOver(){
    let popover=this.popOverCtrl.create(CancionPopoverPage,{});
    popover.present({
      ev:event
    });
  }// end to openCancionPopOver

}

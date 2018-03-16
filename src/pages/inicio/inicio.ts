import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController  } from 'ionic-angular';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//provider
 import { DeezerServiceProvider } from '../../providers/deezer-service/deezer-service';
//  import { Observable } from 'rxjs';
 import 'rxjs/add/observable/merge';

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
  providers:[DeezerServiceProvider]
})
export class InicioPage {
  // public valor:any;
  public cancionesBuscadas:any;  
  public loader:any;
  public cancion:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public ds: DeezerServiceProvider,
    public loadingCtrl:LoadingController
  ) {
    this.loader=this.loadingCtrl.create();
    this.cancionesBuscadas=[];
  }

  ionViewDidLoad() {
    console.log('InicioPage Activa');
  }

  buscar(buscar){
    console.log(buscar.target.value);
    let val = buscar.target.value;
    this.ds.getSongs(val).subscribe(data=>{
      // this.valor=data;
      console.log(data);
      this.cancionesBuscadas=data['data'];
      // this.cancionesBuscadas.push(data);
    });// fin de la peticion

  }//buscar

  getSongId(id){
    this.ds.getSongById(id).subscribe(data=>{
      this.cancion=data;
      console.log(data);
      console.log(data);
      
    });
  }// edn to getSongId
  

}//en class

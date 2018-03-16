import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map';
// import 'rxjs';
// esto es util si quiero ver los datos dentro de los arreglos en el map
// import { Observable } from 'rxjs';
/*
  Generated class for the DeezerServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeezerServiceProvider {
	public deezerAPI:string;
  constructor(public http: HttpClient) {
  	// direccion que se usara en la app compilada
  	this.deezerAPI="https://api.deezer.com/";
  	// proxi, se usa para la app en desarrollo en local host
  	// this.deezerAPI="deezerAPI/";
    console.log('Hello DeezerServiceProvider Provider');
  }

  getProfilesID(){
  	// console.log(this.http.get('https://api.myjson.com/bins/w076v'));
  	// this.http.get('https://api.myjson.com/bins/w076v')
  	// .subscribe(users=>{
  	// 	console.log(users);
  	// 	users.map(userID=>{
  	// 		this.getDetalleUsuario(userID);
  	// 	});

  	// });
  	// return this.http.get('https://api.myjson.com/bins/w076v').subscribe(users=>{});
  	return this.http.get('https://api.myjson.com/bins/w076v');
  }// end to getProfilesID

  getDetalleUsuario(userID){
  	// this.http.get(this.deezerAPI+"user/"+userID)
  	// .subscribe(data=>{
  	// 	console.log("perfil del usuario");
  	// 	console.log(data);
  	// });
  // return this.http.get(this.deezerAPI+"user/"+userID).subscribe(data=>{});
  console.log(this.deezerAPI+"user/"+userID);
  return this.http.get(this.deezerAPI+"user/"+userID);	
  }// fin de getDetalleUsuario

  getUsuarioPlayList(userID){
    // return this.http.get(this.deezerAPI+"user/"+userID+"/playlists");
    console.log(this.deezerAPI+"user/"+userID+"/playlists");
  	return this.http.get(this.deezerAPI+"user/"+userID+"/playlists");
  }// fin de getUsuarioPlayList

  getPlayListSongs(playlistID){
     console.log(this.deezerAPI+"playlist/"+playlistID+"/tracks");
    return this.http.get(this.deezerAPI+"playlist/"+playlistID+"/tracks");
  }// fin de getPlayListSongs
}

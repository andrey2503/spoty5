import { Component ,Input , OnInit, OnDestroy } from '@angular/core';
import { Events } from 'ionic-angular';
/**
 * Generated class for the TecnoPlayerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tecno-player',
  templateUrl: 'tecno-player.html'
})
export class TecnoPlayerComponent implements OnInit,OnDestroy{
  @Input() titulo:string;
  @Input() artista:string;
  @Input() album:string;
  @Input() cover:string;
  @Input() audioSrc:any;
  // text: string;
  public audio:HTMLAudioElement;	
  public ready:boolean;
  public playing:boolean;
  public audioPos:number;
  public audioDuration:number;
  constructor(public events:Events) {
  	this.playing=false;
  	this.ready=false;
  	this.audioPos=0;
  }

  ngOnDestroy(){
     this.events.unsubscribe('cambio:volumen');
  }

  ngOnInit(){
  	this.audio= new Audio();
  	this.audio.src= this.audioSrc;
  	this.audio.load();
  	this.audio.oncanplaythrough=()=> {
  		this.ready=true;
  		this.audioDuration=this.audio.duration;
  	}
  	// console.log(this.titulo+" /"+ this.album);
  	this.audio.ontimeupdate=(events)=>{
  		this.audioPos=this.audio.currentTime;
  		console.log(this.audioPos);

  	}// fin de ontimeupdate
  	this.audio.onended=()=>{
  		this.audioPos=0;
  		this.playing=false;
  	}
    this.events.subscribe('cambio:volumen',(volumen)=>{
      console.log("subcrito al evento "+volumen);
      this.audio.volume=volumen/100;
    });
  }// fin del metodo
  togglePlay(){
  	if(!this.playing){
  		this.audio.play();
  	}else{
  		this.audio.pause();
  	}
  	this.playing=!this.playing;
  }// fin de togglePlay
}

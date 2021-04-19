import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  ngOnInit(){
    this.initheure()
  }

  constructor() {}
  
  private daysArray =['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  private date = new Date()
 public hour:any;
 public minute:string|undefined;
 public heurdep:any=0;
 public minutedep:any=0;
 public seconde:any;
 public ampm:string|undefined;
 public day:string|undefined;
 initheure(){
  setInterval(()=>{
    const date = new Date();
    this.updateDate(date);
  }, 1000);
  this.day = this.daysArray[this.date.getDay()];
}
private updateDate(date: Date){
  const hours = date.getHours();
  this.ampm = hours >= 24 ? 'AM':'PM';
  this.hour = hours % 24;
  this.hour = this.hour ? this.hour : 12;
  this.hour = this.hour < 10 ? '0' + this.hour : this.hour;

  const minutes = date.getMinutes();
  this.minute = minutes < 10 ? '0' + minutes : minutes.toString();
  const secondes = date.getSeconds();
  this.seconde = secondes < 10 ? '0' + secondes : secondes.toString();
 

}
public centi = 0;
public sec = 0;
public min = 0;
public h = 0;
public loc:any;
public compt = 0;
public reglage = 0;

 chrono()
  {
    this.centi++;
    this.centi*10;//=======pour passer en dixièmes de sec
    //=== on remet à zéro quand on passe à 1seconde, 1min, 1heure, 1jour
    if (this.centi > 9) {
      this.centi = 0;
      this.sec++;
    }
              
    if (this.sec > 59) {
      this.sec = 0;
      this.min++;
    }
              
    if (this.min > 59) {
      this.min = 0;
      this.h++;
    }
              
    //======
    
    //================ On ajoute un zero pour avoir 1h01:05sec
    var sec_:any;
    var min_:any;
    if (this.sec < 10) {
      sec_ = "0" + this.sec;
    }
    else {
       sec_ = this.sec;
    }
      
    if (this.min < 10) {
       min_ = "0" + this.min;
    }
    else {
       min_ = this.min;
    }
    //===============
              
    var loc = this.h + ":" + min_ + ":" + sec_ + ":" + this.centi;
    //================= Pour que cela s'affiche dans l'élément "time"
    //@ts-ignore
    document.getElementById("time").innerHTML = loc;
    //=================lancement du chrono
     //@ts-ignore
    this.reglage = window.setTimeout(this.chrono(),100);
  } 


 debut()  //== Activation et désactivation des boutons
  {
     //@ts-ignore
      document.parametre.lance.disabled = "disabled";
       //@ts-ignore
      document.parametre.pause.disabled = "";
       //@ts-ignore
      document.parametre.zero.disabled = "";
       //@ts-ignore
      document.parametre.interme.disabled = "";
  }
 arret() 
  {	
     //@ts-ignore
      window.clearTimeout(this.reglage); // arrêter le temps
       //@ts-ignore
      document.parametre.lance.disabled = "";
       //@ts-ignore
      document.parametre.pause.disabled = "disabled";
       //@ts-ignore
      document.parametre.zero.disabled = "";
       //@ts-ignore
      document.parametre.interme.disabled = "";
  }
  //=============
 raz() //====pour remettre à zéro
  { 
     //@ts-ignore
      document.parametre.zero.disabled = "disabled";
       //@ts-ignore
      document.parametre.interme.disabled = "disabled";
      this.centi =0;
      this.sec = 0;
      this.min = 0;
      this.h = 0; 
      this.loc = this.h + ":" + this.min+ "0:" + this.sec + "0:" + this.centi;
       //@ts-ignore	
      document.getElementById("time").innerHTML = loc;
       //@ts-ignore
      document.getElementById('presenter').style.visibility='hidden';
  }
  
   inter() //====Pour afficher les temps intermédiaires
  {
    this.centi;
    this.sec ;
    this.min ;
    this.h ;
    this.loc;
    //======on reprend la condition pour que ily ait 1h01 et 05 sec
    if (this.sec < 10) {
       //@ts-ignore
      var sec_ = "0" + this.sec;
    }
    else {
       //@ts-ignore
     var	sec_ = this.sec;
    }
      
    if (this.min < 10) {
      var min_ = "0" + this.min;
    }
    else {
       //@ts-ignore
      var min_ = this.min;
    }
    
    ///=====================
     this.loc = this.h + ":" + min_ + ":" + sec_ + ":" + this.centi;
     //=====================
      //@ts-ignore
    document.getElementById('presenter').style.visibility='visible';
    // pour afficher les temps intermédiaire si on clique dessus
    if(this.compt == 0)
     //@ts-ignore
    document.getElementById("interm1").innerHTML = loc ;
    else if(this.compt == 1)
     //@ts-ignore
    document.getElementById("interm2").innerHTML = loc ;
    else if(this.compt == 2)
     //@ts-ignore
    document.getElementById("interm3").innerHTML = loc ;
    else if(this.compt == 3)
     //@ts-ignore
    document.getElementById("interm4").innerHTML = loc ;
     
    else if(this.compt == 4)
     //@ts-ignore
    document.getElementById("interm5").innerHTML = loc ;

    this.compt++;
    //=====================
  }
  
 effacer()
  {
     //@ts-ignore
    document.getElementById("interm1").innerHTML = "" ;
     //@ts-ignore
    document.getElementById("interm2").innerHTML = "" ;
     //@ts-ignore
    document.getElementById("interm3").innerHTML = "" ;
     //@ts-ignore
    document.getElementById("interm4").innerHTML = "" ;
     //@ts-ignore
    document.getElementById("interm5").innerHTML = "" ;
     //@ts-ignore
    compt= 0
  }
}

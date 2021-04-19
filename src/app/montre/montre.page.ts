import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-montre',
  templateUrl: './montre.page.html',
  styleUrls: ['./montre.page.scss'],
})
export class MontrePage implements OnInit {

  constructor() { }
 
 
  ngOnInit() {
  }
  public tem:any='';
  public tab=[];

  saveHoure(){
  if(this.tem !== ''){
    this.tab.push(this.tem)
    console.log(this.tab)
    this.tem='';
  }else{
    alert('veuiller renseigner une heure correcte svp!!!')
  }
  }
  supprHoure(idsuppr:any){
    this.tab.splice(idsuppr, 1)
    }
  
  
}


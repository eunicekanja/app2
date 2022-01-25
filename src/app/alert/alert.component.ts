import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  buttonStatus=false;
  userName=''
  constructor() { }

  ngOnInit(): void {
  }
  addInput(event:any){
    this.userName=event.target.value;
  }
  checkInput(){
   if(this.userName===''){
     this.buttonStatus=true;
   }
  }
}

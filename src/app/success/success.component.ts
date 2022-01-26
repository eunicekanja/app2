import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  color='red'
  num=0;
  inputValue:any=''
  colorArray=[
    'red',
    'blue',
    'yellow',
    'green',
    'purple'
  ]
  constructor() { }
  getInput(event:any){
    this.inputValue=event.target.value;
    console.log(this.inputValue)
  }
  getColor(){
    this.num=Math.floor(Math.random()*5);
    document.body.style.backgroundColor=this.colorArray[this.num]
    console.log(this.num)
  }
  ngOnInit(): void {
  }

}

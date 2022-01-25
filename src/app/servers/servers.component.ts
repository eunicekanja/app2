import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServer=true;
  serverCreationStatus='No server created yet';
  serverName='';
  serverCreated=false;
  constructor() { 
    setTimeout(() => {
      this.allowServer=false;
    }, 3000);
  }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreationStatus='Server is created with the name ' + this.serverName;
    this.serverCreated=true;
  }
  onUpdateServer(event:any){
    this.serverName=event.target.value;
    console.log(event)
  }
  name='nelly ngina'
}

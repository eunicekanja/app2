import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl:'./server.component.html',
    styles:[`
    .Online{
        color:white;
    }`]
}
)


export class ServerComponent{
    name='eunice wambui'
    id=10
    serverStatus:string='';
    constructor(){
        this.serverStatus=Math.random() >0.5 ? 'Offline':'Online'
    }
    getstatus(){
        return this.serverStatus
    }
    getColor(){
        return this.serverStatus ==='Online' ? 'green':'red'
    }
}

import { Component } from "@angular/core";

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent {
    allowNewServer = false;
    serverCreationStatus = 'No server was created';
    serverCreated = false;
    serverName = 'nothing';
    servers = ['Test Server', 'Test Server 2'];

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    onCreateServer(){
        this.servers.push(this.serverName);
        this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
        this.serverCreated = true;
    }

    onUpdateServerName(event: any){
        this.serverName = event.target.value;
    }
}
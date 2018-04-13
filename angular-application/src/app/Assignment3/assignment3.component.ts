import { Component } from "@angular/core";

@Component({
    selector: 'app-assignment3',
    templateUrl: './assignment3.component.html',
})
export class Assignment3Component{
    showSecret = false;

    log = [];

    onToggleDetails() {
        this.showSecret = !this.showSecret;
        this.log.push(this.log.length - 1)
    }
}
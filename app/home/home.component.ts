import { Component } from '@angular/core';
import { Auth } from '../services/auth.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/home/home.template.html'
})

export class HomeComponent {
    private book = false;
    constructor(private auth: Auth) {

    }
    bookTicket() {
        this.book = true;
    }
}
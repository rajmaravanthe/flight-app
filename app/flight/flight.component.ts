import { Component } from '@angular/core';

import { flightDetails } from '../interfaces/flight.interface';
import { ListService } from '../services/list.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/flight/flight.template.html'
})

export class FlightComponent {
    flightDetails: flightDetails;
    momentValue = new Date();
    dateValidation = true;
    showDateValidation = false;
    constructor(private _listService: ListService) {

    }

    ngOnInit() {
        this.flightDetails = {
            flightFrom: '',
            flightTo: '',
            airlines: '',
            dateTimeDeparture: this.momentValue,
            dateTimeArrival: this.momentValue
        };
    }

    public setMoment(status, moment: any): any {
        if (status === 'departure') {
            this.flightDetails.dateTimeDeparture = moment;
        } else {
            this.flightDetails.dateTimeArrival = moment;
        }

        if (new Date(this.flightDetails.dateTimeArrival) > new Date(this.flightDetails.dateTimeDeparture)) {
            this.dateValidation = false;
        } else {
            this.showDateValidation = true;
            this.dateValidation = true;
        }
    }

    submit(form) {
        if (!form.valid) {
            return;
        }
        this._listService.addList(form.value);
        form.reset();
        this.reset();
    }

    reset() {
        this.flightDetails.dateTimeDeparture = new Date();
        this.flightDetails.dateTimeArrival = new Date();
        this.dateValidation = true;
        this.showDateValidation = false;
    }
}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routes';
import { FormsModule } from '@angular/forms';
import { DateTimePickerModule } from 'ng-pick-datetime';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FlightComponent } from './flight/flight.component';
import { StatusComponent } from './status/status.component';

import { ListService } from './services/list.service';
import { SearchFilter } from './filters/search.filter';
 
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FlightComponent,
        StatusComponent,
        SearchFilter
    ],
    providers: [
        appRoutingProviders,
        AUTH_PROVIDERS,
        ListService
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        FormsModule,
        DateTimePickerModule
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }

import { Injectable } from '@angular/core';

@Injectable()
export class ListService {

  Arraylist: any[] = [];

  /** Add list in the array List. */
  addList(arrayListDetail: any) {
    if (localStorage.getItem("FlightDetails")) {
      this.Arraylist = JSON.parse(localStorage.getItem("FlightDetails"));
    }
    this.Arraylist.unshift(arrayListDetail);
    localStorage.setItem("FlightDetails", JSON.stringify(this.Arraylist));
  }

  /**Get the list list from the array. */
  getList(): any[] {
    return JSON.parse(localStorage.getItem("FlightDetails"));
  }

}

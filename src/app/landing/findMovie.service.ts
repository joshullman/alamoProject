import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

import { Theater } from "./theater";
import { MessageService } from "../message.service";


@Injectable({
  providedIn: "root"
})
export class FindMovieService {
  // theaters: Array<any>;
  constructor(private messageService: MessageService) { }

  // setTheaters(CINEMAS): Array<any> {
  //   // TODO: send the message _after_ fetching the heroes
  //   this.messageService.add("TheaterService: fetched theaters");
  //   this.theaters = of(CINEMAS)
  //   // hack to get around typescript whining,
  //   return this.theaters
  // }

  // getTheaters(): Array<any> {
  //   return this.theaters
  // }

  // getTheater(id: number | string) {
  //   return this.getTheaters().pipe(
  //     map((theaters: Theater[]) => theaters.find(cinema => cinema.id === id))
  //   );
  // }

}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

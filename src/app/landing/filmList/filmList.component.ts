import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

import { Theater } from '../theater';

@Component({
  selector: 'filmList',
  templateUrl: './filmList.component.html',
  styleUrls: ['./filmList.component.css']
})

export class FilmListComponent implements OnInit {
  @Input() selectedTheater: Theater
  @Input() films: Array<any>
  @Input() selectedFilmId: number
  @Input() selectFilm: any

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let prop in changes) {
      this[prop] = changes[prop].currentValue
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
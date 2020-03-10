import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

import { Theater } from '../theater';

@Component({
  selector: 'theaterList',
  templateUrl: './theaterList.component.html',
  styleUrls: ['./theaterList.component.css']
})

export class TheaterListComponent implements OnInit {
  @Input() theaters: Theater[]
  @Input() selectedTheaterId: number
  @Input() selectTheater: any

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
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FindMovieComponent } from './findMovie/findMovie.component';

const routes: Routes = [
  { path: 'austin/theaters', component: FindMovieComponent, },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FindMovieRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
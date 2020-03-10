import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TheaterListComponent } from './theaterList/theaterList.component';
import { FilmListComponent } from './filmList/filmList.component';


import { FindMovieComponent } from './findMovie/findMovie.component';
import { HeaderComponent } from './header/header.component';

import { FindMovieRoutingModule } from './findMovie-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FindMovieRoutingModule
  ],
  declarations: [
    TheaterListComponent,
    FilmListComponent,
    FindMovieComponent,
    HeaderComponent
  ]
})
export class FindMovieModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
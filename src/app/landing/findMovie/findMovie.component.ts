import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { FindMovieService } from '../findMovie.service';

@Component({
  selector: 'findMovie',
  templateUrl: './findMovie.component.html',
  styleUrls: ['./findMovie.component.css']
})
export class FindMovieComponent implements OnInit {
  selectedTheaterId: number;
  selectedFilmId: number;
  selectedTheater: Object
  selectedTheaterFilms: Array<any>
  theaters: Array<any>;
  films: Array<any>;
  data: Object;
  loading: boolean;
  allSessions: Array<any>;

  constructor(
    private service: FindMovieService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  getTheater = (id: number | string) => {
    return this.theaters.find(theater => theater.id === id)
  }

  selectTheater = (id: number) => {
    this.selectedTheaterId = id
    this.selectedTheater = this.getTheater(id)
  }

  selectFilm = (id: number) => {
    this.selectedFilmId = id
  }

  ngOnInit() {
    this.loading = true;
    this.http.get<any>('https://drafthouse.com/s/mother/v1/page/market/main/austin').subscribe(({ data }) => {
      this.loading = false;
      this.data = data;
      this.allSessions = (data.sessions || []).filter(session => session.status !== "PAST")
      this.films = (data.films || [])
      let validTheaters = (data.market.cinemas || []).filter(theater => theater.status === "OPEN")
      let sortedTheaters = validTheaters.sort((a, b) => a.name.localeCompare(b.name))
      sortedTheaters.map(theater => {
        theater.sessions = this.allSessions.filter(session => session.cinemaId === theater.id)
        let films = []
        theater.sessions.forEach(session => {
          let filmId = session.filmHeadOfficeCode
          if (!films.find(film => film.headOfficeCode === filmId))
            films.push(this.films.find(film => film.headOfficeCode === filmId))
          theater.films = films.sort((a, b) => a.title.localeCompare(b.title))
        })
      })
      this.theaters = sortedTheaters
      this.selectTheater(sortedTheaters[0].id)
    })
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
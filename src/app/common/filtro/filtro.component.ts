import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {

  localeString: string = 'es';
  viewDate: any;

  constructor() { }

  ngOnInit(): void {
    moment.locale(this.localeString);
    this.viewDate = moment();
  }

}

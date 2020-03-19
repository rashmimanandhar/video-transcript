import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Moment from meeting with Two Pillars';
  id = '';
  timeStamp = 0;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (Object.keys(params).length === 0 || Object.keys(params)[0] !== 'id') {
      } else {
        this.id = params.id;
      }
    });
  }

  ngOnInit(): void {
  }

}

import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  receiveTimeStamp($event: number) {
    this.timeStamp = $event;
  }
}

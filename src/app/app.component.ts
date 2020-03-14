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

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      console.log(Object.keys(params));
      if (Object.keys(params).length === 0 || Object.keys(params)[0] !== 'id') {
        console.log('no params available');
      } else {
        this.id = params.id;
      }
    });
  }

}

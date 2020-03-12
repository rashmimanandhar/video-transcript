import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  videoSrc = '';

  constructor(@Inject('BASE_API_URL') private baseUrl: string) {
  }

  ngOnInit(): void {
    this.videoSrc = this.baseUrl + '4d79041e-f25f-421d-9e5f-3462459b9934.mp4';
  }

}

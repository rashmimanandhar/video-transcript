import {Component, ElementRef, Inject, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  videoSrc = '';
  timeStamp = {};
  @Input() id: string;
  @ViewChild('video') videoPlayerRef: ElementRef;
  validVideo = true;

  constructor(@Inject('BASE_API_URL') private baseUrl: string) {
  }

  ngOnInit(): void {
    this.videoSrc = this.baseUrl + this.id + '.mp4';

  }

  updateTimeStamp() {
    this.timeStamp = this.videoPlayerRef.nativeElement.currentTime;
    console.log(this.timeStamp);
  }

  handleError() {
    this.validVideo = false;
    console.log('Video not found');
  }
}

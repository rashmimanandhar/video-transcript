import {Component, ElementRef, EventEmitter, Inject, Input, OnInit, Output, ViewChild} from '@angular/core';
import {VideoService} from './video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  videoSrc = '';
  timeStamp = 0;
  @Input() id: string;
  @ViewChild('video') videoPlayerRef: ElementRef;
  validVideo = true;

  constructor(@Inject('BASE_API_URL') private baseUrl: string, private videoService: VideoService) {
  }

  ngOnInit(): void {
    this.videoSrc = this.baseUrl + this.id + '.mp4';

  }

  updateTimeStamp() {
    this.timeStamp = this.videoPlayerRef.nativeElement.currentTime;
    this.videoService.timeStampUpdated.emit(this.timeStamp);
  }

  handleError() {
    this.validVideo = false;
    console.log('Video not found');
  }
}

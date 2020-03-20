import {Component, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {TranscriptService} from './transcript.service';
import {Transcript} from './transcript';
import {VideoService} from '../video/video.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.scss']
})
export class TranscriptComponent implements OnInit, OnDestroy {
  transcript: Array<Transcript> = [];
  @Input() id: string;
  currentTimeStamp: number;
  speakers;
  speakerColors: Array<string> = ['#ee6eff', '#00a7d1'];
  private transcriptSubscription: Subscription;

  constructor(private transcriptService: TranscriptService,
              @Inject('BASE_API_URL') private baseUrl: string,
              private videoService: VideoService) {
  }

  ngOnInit(): void {
    this.videoService.timeStampUpdated.subscribe((timestamp) => {
      this.currentTimeStamp = timestamp;
    });
    this.transcriptSubscription = this.transcriptService.getTranscript(this.id).subscribe(transcript => {
      console.log('observable');
      this.transcript = transcript.sort((a, b) => {
        return a.time - b.time;
      });
      this.speakers = [...new Set(this.transcript.map((t) => {
        return t.speaker;
      }))];
    }, (error) => {
      console.log(error.message);
    }, () => {
      console.log('complete');
    });
  }

  getSpeakerColor(speakerName) {
    const indexOfSpeaker = this.speakers.indexOf(speakerName);
    if (indexOfSpeaker >= 0) {
      return this.speakerColors[indexOfSpeaker];
    } else {
      return 'black';
    }
  }

  ngOnDestroy(): void {
    this.transcriptSubscription.unsubscribe();
  }

}

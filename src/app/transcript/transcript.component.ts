import {Component, Inject, Input, OnInit} from '@angular/core';
import {TranscriptService} from './transcript.service';
import {Transcript} from './transcript';

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.scss']
})
export class TranscriptComponent implements OnInit {
  transcript: Array<Transcript> = [];
  @Input() id: string;
  speakers;
  speakerColors: Array<string> = ['#ee6eff', '#00a7d1'];

  constructor(private transcriptService: TranscriptService, @Inject('BASE_API_URL') private baseUrl: string) {
  }

  ngOnInit(): void {
    this.transcriptService.getTranscript(this.id).subscribe(transcript => {
      this.transcript = transcript.sort((a, b) => {
        return a.time - b.time;
      });
      this.speakers = [...new Set(this.transcript.map((t) => {
        return t.speaker;
      }))];


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

}

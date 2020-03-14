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

  constructor(private transcriptService: TranscriptService, @Inject('BASE_API_URL') private baseUrl: string) {
  }

  ngOnInit(): void {
    this.transcriptService.getTranscript(this.id).subscribe(transcript => {
      this.transcript = transcript.sort((a, b) => {
        return a.time - b.time;
      });


    });
  }

}

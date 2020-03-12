import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {TranscriptService} from './transcript.service';

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.scss']
})
export class TranscriptComponent implements OnInit {
  transcript = {};

  constructor(private transcriptService: TranscriptService, @Inject('BASE_API_URL') private baseUrl: string) {
  }

  ngOnInit(): void {
    this.transcriptService.getTranscript('4d79041e-f25f-421d-9e5f-3462459b9934').subscribe(transcript => {
      this.transcript =  transcript;
    });
  }

}

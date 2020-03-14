import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Transcript} from './transcript';

@Injectable({
  providedIn: 'root'
})
export class TranscriptService {

  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: string) {
  }

  getTranscript(id) {
    return this.http.get<Array<Transcript>>(this.baseUrl + id + '.json');
  }
}

import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranscriptService {

  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: string) {
  }

  getTranscript(id) {
    return this.http.get(this.baseUrl + id + '.json');
  }
}

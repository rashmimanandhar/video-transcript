import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {environment} from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranscriptComponent } from './transcript/transcript.component';
import { VideoComponent } from './video/video.component';
import { HttpClientModule} from '@angular/common/http';


export function getAPIBaseUrl() {
  return environment.baseUrl + 'api/';
}

@NgModule({
  declarations: [
    AppComponent,
    TranscriptComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: 'BASE_API_URL', useFactory: getAPIBaseUrl,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

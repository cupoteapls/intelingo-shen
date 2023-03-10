import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Story } from '../shared/story.model'

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  selectedStory: Story;
  readonly baseURL = 'https://api.openai.com/v1/completions';



  postStory(stry: Story){
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Authorization', 'Bearer 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');
    
    return this.http.post(this.baseURL, stry,  { 'headers': headers });
  }


  constructor(private http: HttpClient) {
    this.selectedStory = new Story("text-davinci-003", "", 1, 640);
   }

}

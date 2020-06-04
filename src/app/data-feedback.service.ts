import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataFeedbackService {

  private REST_API_SERVER = "https://client.thefrontline.biz/api/v1/survey/";
  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
  
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public sendPostRequest(feedbackData){
  
     this.httpClient.post(this.REST_API_SERVER,feedbackData);
  }
}

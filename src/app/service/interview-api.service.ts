import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { apiResponseModel } from '../model/language.model';
import { LanguageTopic } from '../model/language.model';

@Injectable({
  providedIn: 'root'
})
export class InterviewApiService {

  constructor(private http:HttpClient){}
  apiEndpoint:string = "https://freeapi.gerasim.in/api/Interview/"
  

  apiGetAllLanguage():Observable<apiResponseModel>{
    return this.http.get<apiResponseModel>(this.apiEndpoint+"GetAllLanguage")
  }

  apiGetLanguageTopic(id:number):Observable<apiResponseModel>{
    return this.http.get<apiResponseModel>(this.apiEndpoint+"GetLanguageTopicById?id="+id)
  }
   apiGetQuestionByTopinId(id:number):Observable<apiResponseModel>{
    return this.http.get<apiResponseModel>(this.apiEndpoint+"GetQuestionByTopicId?id="+id)
  }
  GetAllQuestionsByLanguageId(id:number):Observable<apiResponseModel>{
    return this.http.get<apiResponseModel>(this.apiEndpoint+"GetAllQuestionsByLanguageId?id="+id)
  }
}



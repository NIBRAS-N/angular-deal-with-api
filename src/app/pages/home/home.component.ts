import { Component,inject } from '@angular/core';
import { InterviewApiService } from '../../service/interview-api.service';
import { apiResponseModel, dataOfApiModel ,LanguageTopic ,Question} from '../../model/language.model';
import { OnInit } from '@angular/core';
import { Observable , map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionCardComponent } from '../question-card/question-card.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule,QuestionCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{

  //for old system
  languageList : dataOfApiModel[] = []
  service = inject(InterviewApiService)
  //using asyc|pipe system
  topicList$ : Observable<LanguageTopic[]> | undefined;
  questionList$: Observable<Question[]> | undefined;
  selectedLanguageId:number = 0;
  selectedLanguageTopicId:number = 0;

  ngOnInit(): void {
      this.loadLanguage();
  }

  loadLanguage(){
    
    this.service.apiGetAllLanguage().subscribe((res:apiResponseModel)=>{this.languageList=res.data});
    // this.service.apiGetAllLanguage().subscribe((res)=>res);
    setTimeout(()=>{console.log(this.languageList)},1000)  
  }

  onLanguageChange(e:any){
    // debugger;
    this.getQuestByLen(e);
    this.topicList$= this.service.apiGetLanguageTopic(e).pipe(map((res:apiResponseModel)=>{return res.data}))

    
  }
  onTopicChange(e:any){
    this.questionList$ =  this.service.apiGetQuestionByTopinId(e).pipe(
      map((item:apiResponseModel)=>{return item.data})
    )
  }
  getQuestByLen(e:any){
    this.questionList$=this.service.GetAllQuestionsByLanguageId(e).pipe(map((res:apiResponseModel)=>{return res.data}));
  }
}

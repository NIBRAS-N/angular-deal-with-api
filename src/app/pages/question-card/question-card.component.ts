import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Question } from '../../model/language.model';

@Component({
  selector: 'app-question-card',
  standalone: true,
  imports: [],
  templateUrl: './question-card.component.html',
  styleUrl: './question-card.component.css'
})
export class QuestionCardComponent {
  @Input() question:Question={ question:"",
    answer:"",
    topicName: "",
    languageTopicId:0,
    questionId:0,
    language:"",
    languageId:0,
    orderNo:0,
    logo:"",
    tags:""};

  
}

export interface dataOfApiModel {
    languageId: number,
    language: string,
    logo: string,
    youtubePlayListUrl: string
}

export interface apiResponseModel {
    message:string,
    result:true,
    data:any
}

export interface LanguageTopic {

    languageTopicId: number;
    languageId: number;
    topicName: string;
    orderNo: number;
    youtubeVideoUrl: string;

}

export interface Question{
    question:string,
    answer:string,
    topicName: string,
    languageTopicId:number,
    questionId:number,
    language:string,
    languageId:number,
    orderNo:number,
    logo:string,
    tags:string
}
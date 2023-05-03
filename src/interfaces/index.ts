
export interface IPreviewFestivalItem{
    festivalNumber:number;
    festivalName:string;
    festivalType:string;
    festivalDurationStart: string;
    festivalDurationEnd:string;
    festivalTime:string | null;
    festivalArea:string;
    festivalCost:string;
    onelineReviewAverage: number | null; 
    festivalInformation:string |null;
    festivalImformationUrl:string|null;
}

export interface IUser {
    id: string;
    password: string;
    profileUrl: string;
    nickname: string;
    telNumber: string;
    adminCheck: boolean | null;
    reportUser: boolean | null;
    interestedFestival: string | null;
}

export interface IBoard {
    boardNumber: number;
    boardTitle: string;
    boardContent: string;
    boardImgUrl: string;
    boardWriteDatetime: string;
    viewCount: number;
    recommendCount: number;
    commentCount: number;
    writerId: string;
    writerProfileUrl: string;
    writerNickname: string;
    festivalNumber: number;
}

export interface IComment {
    numbercommentNumber: number;
    commentContent: string;
    numberboardNumber: number;
    writerId: string;
    writeDatetime: string;
    writerProfileUrl: string;
    writerNickname: string;
}

export interface IInterstedFestival {
    numbersequence: number;
    userId: string;
    interestedFestivalType: string;
}

export interface IOneLineReview {
    festivalNumber: number;
    userId: string;
    average: number;
    oneLineReviewContent: string;
    userProfileUrl: string;
    userNickname: string;
    writeDatetime: string;
}

export interface IRecommend {
    userId: string;
    boardNumber: number;
    userProfileUrl: string;
    userNickname: string;
}

export interface ISearchwordLog {
    sequence: number;
    searchWord: string;
}

export interface IPfestivalReviewBoard{
      boardNumber:number;
      boardTitle:string;
      boardContent:string;
      boardImgUrl:string;
      boardWriteDatetime:string;
      viewCount:number;
      recommendCount:number;
      commentCount:number;
      writerId:string;
      writerProfileUrl:number;
      writerNickname:number;
      festivalNumber:number;
    

}


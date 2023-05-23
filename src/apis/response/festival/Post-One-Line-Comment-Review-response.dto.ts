import { Comment } from "src/interfaces";

interface Dto {

    festival: {
        festivalNumber:number;
        userId:string;
        average:number;
        userProfileUrl:string | null;
        oneLineReviewContent:string;
        userNickname:string;
        writeDatetime:string;
    };
    
    commentList: Comment[]
}

export default Dto
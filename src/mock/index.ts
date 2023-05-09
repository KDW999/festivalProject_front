import { IPreviewFestivalItem, IPreviewFestivalSimpleListItem, IOneLineReview, IPfestivalReviewBoard, User, IUser } from "src/interfaces";

export const SIMPLELIST: IPreviewFestivalItem[] = [ //? 타입 통일
    {
        festivalNumber: 1,
        festivalName: '나고야 눈 축제',
        festivalType:"들어가지 않는 내용",
        festivalDurationStart: '2023-01-05',
        festivalDurationEnd: '2023-02-05',
        festivalArea: '일본',
        festivalTime:"들어가지 않는 내용",
        onelineReviewAverage: 10,
        festivalCost:"무료",
        festivalInformationUrl: 'https://dimg04.c-ctrip.com/images/1mj1g12000an36ieh3923.png',
        festivalInformation: '들어가지 않는 내용'
    },
    {
        festivalNumber: 2,
        festivalName: '나고야 눈 축제',
        festivalType:"들어가지 않는 내용",
        festivalDurationStart: '2023-02-05',
        festivalDurationEnd: '2023-03-05',
        festivalArea: '일본',
        festivalTime:"들어가지 않는 내용",
        onelineReviewAverage: 10,
        festivalCost:"무료",
        festivalInformationUrl: 'https://dimg04.c-ctrip.com/images/1mj1g12000an36ieh3923.png',
        festivalInformation: '들어가지 않는 내용'
    },
    {
        festivalNumber: 3,
        festivalName: '나고야 눈 축제',
        festivalType:"들어가지 않는 내용",
        festivalDurationStart: '2023-03-05',
        festivalDurationEnd: '2023-04-05',
        festivalArea: '일본',
        festivalTime:"들어가지 않는 내용",
        onelineReviewAverage: 10,
        festivalCost:"무료",
        festivalInformationUrl: 'https://dimg04.c-ctrip.com/images/1mj1g12000an36ieh3923.png',
        festivalInformation: '들어가지 않는 내용'
    },
    {
        festivalNumber: 4,
        festivalName: '나고야 눈 축제',
        festivalType:"들어가지 않는 내용",
        festivalDurationStart: '2023-04-05',
        festivalDurationEnd: '2023-05-05',
        festivalArea: '일본',
        festivalTime:"들어가지 않는 내용",
        onelineReviewAverage: 10,
        festivalCost:"무료",
        festivalInformationUrl: 'https://dimg04.c-ctrip.com/images/1mj1g12000an36ieh3923.png',
        festivalInformation: '들어가지 않는 내용'
    },
    {
        festivalNumber: 5,
        festivalName: '나고야 눈 축제',
        festivalType:"들어가지 않는 내용",
        festivalDurationStart: '2023-05-05',
        festivalDurationEnd: '2023-06-05',
        festivalArea: '일본',
        festivalTime:"들어가지 않는 내용",
        onelineReviewAverage: 10,
        festivalCost:"무료",
        festivalInformationUrl: 'https://dimg04.c-ctrip.com/images/1mj1g12000an36ieh3923.png',
        festivalInformation: '들어가지 않는 내용'
    },
    {
        festivalNumber: 6,
        festivalName: '나고야 눈 축제',
        festivalType:"들어가지 않는 내용",
        festivalDurationStart: '2023-06-05',
        festivalDurationEnd: '2023-07-05',
        festivalArea: '일본',
        festivalTime:"들어가지 않는 내용",
        onelineReviewAverage: 10,
        festivalCost:"무료",
        festivalInformationUrl: 'https://dimg04.c-ctrip.com/images/1mj1g12000an36ieh3923.png',
        festivalInformation: '들어가지 않는 내용'
    },
    {
        festivalNumber: 7,
        festivalName: '나고야 눈 축제',
        festivalType:"들어가지 않는 내용",
        festivalDurationStart: '2023-07-05',
        festivalDurationEnd: '2023-08-05',
        festivalArea: '일본',
        festivalTime:"들어가지 않는 내용",
        onelineReviewAverage: 10,
        festivalCost:"무료",
        festivalInformationUrl: 'https://dimg04.c-ctrip.com/images/1mj1g12000an36ieh3923.png',
        festivalInformation: '들어가지 않는 내용'
    },
    {
        festivalNumber: 8,
        festivalName: '진주 논개제',
        festivalType:"들어가지 않는 내용",
        festivalDurationStart: '2023-05-05',
        festivalDurationEnd: '2023-05-08',
        festivalArea: '진주',
        festivalTime:"들어가지 않는 내용",
        onelineReviewAverage: 10,
        festivalCost:"성인 2000원",
        festivalInformationUrl: 'https://search.pstatic.net/common?type=n&size=174x250&quality=85&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20230413_299%2F1681356027553AhOvU_JPEG%2F110_1908146_manual_image_url_1681356027538.jpg',
        festivalInformation: '들어가지 않는 내용'
    },
    {
        festivalNumber: 9,
        festivalName: '진주',
        festivalType:"들어가지 않는 내용",
        festivalDurationStart: '2023-05-05',
        festivalDurationEnd: '2023-05-08',
        festivalArea: '진주',
        festivalTime:"들어가지 않는 내용",
        onelineReviewAverage: 10,
        festivalCost:"성인 2000원",
        festivalInformationUrl: 'https://search.pstatic.net/common?type=n&size=174x250&quality=85&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20230413_299%2F1681356027553AhOvU_JPEG%2F110_1908146_manual_image_url_1681356027538.jpg',
        festivalInformation: '들어가지 않는 내용'
    },
]



export const ONELINEREVIEW_LIST: IOneLineReview[] = [
    {
        festivalNumber: 1,
        userId: 'kdw@123',
        average: 4,
        oneLineReviewContent: '좋은 듯 나쁜 듯',
        userProfileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVwzP0WK98dRLF3LRCTBU9aOBFwf-oqm4Uw&usqp=CAU',
        userNickname: 'KoreaIT Man',
        writeDatetime: '2023-05-02'
    },
    {
        festivalNumber: 1,
        userId: 'kdw@456',
        average: 2,
        oneLineReviewContent: '평범',
        userProfileUrl: '',
        userNickname: 'Beam Man',
        writeDatetime: '2023-05-03'
    },
    {
        festivalNumber: 1,
        userId: 'kdw@456',
        average: 5,
        oneLineReviewContent: '처음 가봤는데 좋아요',
        userProfileUrl: '',
        userNickname: 'Muyaho',
        writeDatetime: '2023-05-03'
    },
    {
        festivalNumber: 1,
        userId: 'kdw@456',
        average: 3,
        oneLineReviewContent: '평범',
        userProfileUrl: '',
        userNickname: 'Beam Man2',
        writeDatetime: '2023-05-03'
    },
    {
        festivalNumber: 1,
        userId: 'kdw@456',
        average: 2,
        oneLineReviewContent: '평범',
        userProfileUrl: '',
        userNickname: 'Beam Man3',
        writeDatetime: '2023-05-03'
    },
    {
        festivalNumber: 1,
        userId: 'kdw@456',
        average: 2,
        oneLineReviewContent: '평범',
        userProfileUrl: '',
        userNickname: 'Beam Man3',
        writeDatetime: '2023-05-03'
    }
]

export const SIGN_UP_CHECKBOX_LIST: IPreviewFestivalItem[] = [
    {
        festivalNumber: 1,
        festivalName: '테스트축제이름',
        festivalType: '테스트축제타입1',
        festivalDurationStart: '2023-01-01',
        festivalDurationEnd: '2023-02-01',
        festivalTime: '08',
        festivalArea: '테스트지역',
        festivalCost: '무료',
        onelineReviewAverage: null,
        festivalInformation: null,
        festivalInformationUrl: null
    }, {
        festivalNumber: 1,
        festivalName: '테스트축제이름',
        festivalType: '테스트축제타입2',
        festivalDurationStart: '2023-01-01',
        festivalDurationEnd: '2023-02-01',
        festivalTime: '08',
        festivalArea: '테스트지역',
        festivalCost: '무료',
        onelineReviewAverage: null,
        festivalInformation: null,
        festivalInformationUrl: null
    }, {
        festivalNumber: 1,
        festivalName: '테스트축제이름',
        festivalType: '테스트축제타입3',
        festivalDurationStart: '2023-01-01',
        festivalDurationEnd: '2023-02-01',
        festivalTime: '08',
        festivalArea: '테스트지역',
        festivalCost: '무료',
        onelineReviewAverage: null,
        festivalInformation: null,
        festivalInformationUrl: null
    }, {
        festivalNumber: 1,
        festivalName: '테스트축제이름',
        festivalType: '테스트축제타입4',
        festivalDurationStart: '2023-01-01',
        festivalDurationEnd: '2023-02-01',
        festivalTime: '08',
        festivalArea: '테스트지역',
        festivalCost: '무료',
        onelineReviewAverage: null,
        festivalInformation: null,
        festivalInformationUrl: null
    }, {
        festivalNumber: 1,
        festivalName: '테스트축제이름',
        festivalType: '테스트축제타입5',
        festivalDurationStart: '2023-01-01',
        festivalDurationEnd: '2023-02-01',
        festivalTime: '08',
        festivalArea: '테스트지역',
        festivalCost: '무료',
        onelineReviewAverage: null,
        festivalInformation: null,
        festivalInformationUrl: null
    },

];
export const FESTIVALLIST: IPreviewFestivalItem[] =
    [
        {
            festivalNumber: 1,
            festivalName: "빙어축제",
            festivalType: "얼음",
            festivalDurationStart: "2023-01-01",
            festivalDurationEnd: "2023-01-15",
            festivalTime: "08:00~18:00",
            festivalArea: "광주",
            festivalCost: "무료",
            onelineReviewAverage: 10,
            festivalInformationUrl: "https://search.pstatic.net/common?type=n&size=174x250&quality=85&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20221222_86%2F1671684709584YyuPG_JPEG%2F2937394_image2_1.jpg",
            festivalInformation: "대자연과 함께하는 '인제빙어축제' 인제 빙어축제는 자연환경이 선물해 준 광활한 벌판 속에서 빙어를 잡고, 겨울 놀이터에서 다함께 즐기며 하나되는 축제이다.1997년 1회를 시작으로 관광객들의 많은 관심과 참여속에서 점점 더 발전하고 변화하고 있는 인제빙어축제는 시대에 발맞춰 여러가지 프로그램들을 개발하고 있다. 천혜의 자연을 배경으로 겨울철 소양강 최상류로 찾아드는 빙어떼의 아름다운 귀환과 즐거운 추억을 인제빙어축제와 함께 만들어 가시기 바란다."
        },
        {
            festivalNumber: 2,
            festivalName: "방어축제",
            festivalType: "지역",
            festivalDurationStart: "2023-01-01",
            festivalDurationEnd: "2023-01-15",
            festivalTime: "08:00~18:00",
            festivalArea: "광주",
            festivalCost: "무료",
            onelineReviewAverage: 10,
            festivalInformationUrl: "https://search.pstatic.net/common?type=n&size=174x250&quality=85&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20230419_187%2F1681867631467bIKbx_JPEG%2F2975155_image2_1.jpg",
            festivalInformation: "대자연과 함께하는 '인제빙어축제' 인제 빙어축제는 자연환경이 선물해 준 광활한 벌판 속에서 빙어를 잡고, 겨울 놀이터에서 다함께 즐기며 하나되는 축제이다.1997년 1회를 시작으로 관광객들의 많은 관심과 참여속에서 점점 더 발전하고 변화하고 있는 인제빙어축제는 시대에 발맞춰 여러가지 프로그램들을 개발하고 있다. 천혜의 자연을 배경으로 겨울철 소양강 최상류로 찾아드는 빙어떼의 아름다운 귀환과 즐거운 추억을 인제빙어축제와 함께 만들어 가시기 바란다."
        }
        ,
    ]
    
export const USER:User = {
    userId:"qwer1234",
    password:'qwer1234',
    nickname:"a",
    telNumber:"000-0000-0000",
    profileUrl:"",
    interestedFestivalType:['얼음', '꽃']
    }

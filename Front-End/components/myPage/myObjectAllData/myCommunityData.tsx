interface FindProjectObjectData{
    id: number;
    category: {};
    views: number;
    likes: any[];
    Wishs: boolean;
    title: string;
    subTitle: string;
    writer: string;
    createdDate: string;
}

/** 커뮤니티 객체 더미 데이터 */

export const DummyData: FindProjectObjectData[] = [
    {
        id: 1,
        category: {1:'freeBoard'},
        views: 1234,
        likes: [1234, true],
        Wishs: true,
        title: 'GETCODE 커뮤니티 게시글 제목',
        subTitle: 'GETCODE 커뮤니티 게시글 내용 커뮤니티 게시글 내용 커뮤니티 게시글 내용 커뮤니티 게시글 내용',
        writer: '닉네임',
        createdDate: '2022-12-23',
    },
    {
        id: 2,
        category: {1:'freeBoard'},
        views: 1234,
        likes: [1234, false],
        Wishs: false,
        title: 'GETCODE 커뮤니티 게시글 제목',
        subTitle: 'GETCODE 커뮤니티 게시글 내용 커뮤니티 게시글 내용 커뮤니티 게시글 내용 커뮤니티 게시글 내용',
        writer: '닉네임',
        createdDate: '2022-12-23',
    },
    {
        id: 3,
        category: {1:'freeBoard'},
        views: 1234,
        likes: [1234, false],
        Wishs: false,
        title: 'GETCODE 커뮤니티 게시글 제목',
        subTitle: 'GETCODE 커뮤니티 게시글 내용 커뮤니티 게시글 내용 커뮤니티 게시글 내용 커뮤니티 게시글 내용',
        writer: '닉네임',
        createdDate: '2022-12-23',
    },
    {
        id: 4,
        category: {2:'QnA'},
        views: 1234,
        likes: [1234, true],
        Wishs: true,
        title: 'GETCODE 커뮤니티 게시글 제목',
        subTitle: 'GETCODE 커뮤니티 게시글 내용 커뮤니티 게시글 내용 커뮤니티 게시글 내용 커뮤니티 게시글 내용',
        writer: '닉네임',
        createdDate: '2022-12-23',
    },
    {
        id: 5,
        category: {2:'QnA'},
        views: 1234,
        likes: [1234, false],
        Wishs: false,
        title: 'GETCODE 커뮤니티 게시글 제목',
        subTitle: 'GETCODE 커뮤니티 게시글 내용 커뮤니티 게시글 내용 커뮤니티 게시글 내용 커뮤니티 게시글 내용',
        writer: '닉네임',
        createdDate: '2022-12-23',
    },
    {
        id: 6,
        category: {2:'QnA'},
        views: 1234,
        likes: [1234, false],
        Wishs: true,
        title: 'GETCODE 커뮤니티 게시글 제목',
        subTitle: 'GETCODE 커뮤니티 게시글 내용 커뮤니티 게시글 내용 커뮤니티 게시글 내용 커뮤니티 게시글 내용',
        writer: '닉네임',
        createdDate: '2022-12-23',
    },
    {
        id: 7,
        category: {3: 'counseling'},
        views: 1234,
        likes: [1234, false],
        Wishs: true,
        title: 'GETCODE 커뮤니티 게시글 제목',
        subTitle: 'GETCODE 커뮤니티 게시글 내용 커뮤니티 게시글 내용 커뮤니티 게시글 내용 커뮤니티 게시글 내용',
        writer: '닉네임',
        createdDate: '2022-12-23',
    },
    {
        id: 8,
        category: {3: 'counseling'},
        views: 1234,
        likes: [1234, true],
        Wishs: true,
        title: 'GETCODE 커뮤니티 게시글 제목',
        subTitle: 'GETCODE 커뮤니티 게시글 내용 커뮤니티 게시글 내용 커뮤니티 게시글 내용 커뮤니티 게시글 내용',
        writer: '닉네임',
        createdDate: '2022-12-23',
    },
    {
        id: 9,
        category: {3: 'counseling'},
        views: 1234,
        likes: [1234, false],
        Wishs: false,
        title: 'GETCODE 커뮤니티 게시글 제목',
        subTitle: 'GETCODE 커뮤니티 게시글 내용 커뮤니티 게시글 내용 커뮤니티 게시글 내용 커뮤니티 게시글 내용',
        writer: '닉네임',
        createdDate: '2022-12-23',
    },
]
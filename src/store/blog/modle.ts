export interface blogItem {
    _id: string;
    avatarUrl: string;
    date: string;
    diyTags: Array<any>;
    htmlDom: string;
    likes: Array<any>;
    replys: Array<any>;
    tags: Array<any>;
    test: string;
    title: string;
    user: string;
}

export interface hotsItem {
    _id: string;
    sizeOfLikes: number;
    title: string;
    date: string;
}
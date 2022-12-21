export interface IPost {
    likes: [],
    _id: string,
    text: string,
    userId: {
        themes: [],
        posts: [],
        _id: string,
        tel: string,
        email: string,
        username: string,
        password: string,
        created_at: string,
        updatedAt: string,
        __v: number,
    },
    themeId: {
        subscribers: [],
        posts: [],
        _id: string,
        themeName: string,
        userId: string,
        created_at: string,
        updatedAt: string,
        __v: number
    },
    created_at: string,
    updatedAt: string,
    __v: number
}
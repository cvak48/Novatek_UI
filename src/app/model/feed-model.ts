export interface FeedModel{
    authorName: string,
    authorLink: string,
    action: string,
    message: string,
    attachments: any[],
    likes: number
}
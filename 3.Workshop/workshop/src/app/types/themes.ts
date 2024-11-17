import { User } from "./users";

export interface Theme {
    subscribers: string[];
    posts: string[];
    _id: string;
    themeName:string;
    userId: User;
    created_at: string;
    updatedAt:string;
    __v:number;
}
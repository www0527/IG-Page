export type itemProps = {
    name: string,
    avatar: string;
}

export type IGUserProps = {
    size?: "medium" | "small";
    showFollow?: boolean;
    isFollowing?: boolean;
    account?: string;
    location?: string;
    avatar?: string;
    id?: number;
};

export type IGPostProps = {
    account?: string;
    location?: string;
    avatar?: string;
    photo: string;
    likes: number;
    description: string;
    hashTags: string;
    createTime: string;
};

export type IGPost = {
    id: number;
    location: string;
    account: string;
    avatar: string;
    photo: string;
    likes: number;
    description: string;
    hashTags: string;
    createTime: string;
};

export type IGStory = {
    id: number;
    name: string;
    avatar: string;
};

export type Friend = {
    id: number;
    location: string;
    account: string;
    isFollowing: boolean;
    avatar: string;
};

export type friendState = {
    friends: Friend[];
};

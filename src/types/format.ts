export interface SnsContent {
    title: string;
    author: string;
    content: Content<'text' | 'image' | 'video'>[];
    date: Date;
    source: string;
}

export interface Text {
    text: string;
}

export interface Image {
    url: string;
}

export interface Video {
    url: string;
}

export interface Content<T extends 'text' | 'image' | 'video'> {
    type: T;
    text?: T extends 'text' ? string : never;
    url?: T extends 'image' | 'video' ? string : never;
}

export interface MarkdownConent {
    title: string;
    author: string;
    article: string;
    date: string;
    content: string;
    source: string;
    length: number;
}

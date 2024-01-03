export interface SnsContent {
    title: string;
    author: string;
    content: Content[];
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

export interface Content extends Text, Image, Video {
    type: 'text' | 'image' | 'video';
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

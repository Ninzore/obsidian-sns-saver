import { SnsContent, MarkdownConent } from './types/format';

export class Formatter {
    async format(snsContent: SnsContent): Promise<MarkdownConent> {
        try {
            const content = snsContent.content.map(content => {
                switch (content.type) {
                    case 'text':
                        return content.text;
                    case 'image':
                        return `![](${content.url})`;
                    case 'video':
                        return `![](${content.url})`;
                    default:
                        return '';
                }
            }).join('\n');

            return {
                title: snsContent.title,
                author: snsContent.author,
                article: '',
                date: snsContent.date.toISOString(),
                content: content,
                source: snsContent.source,
                length: content.length,
            };

        }
        catch (e) {
            console.error(e);
            throw e;
        }
    }
}

import { SnsContent } from "../types/format";
import { download } from '../utils';

export class Extractor {
    constructor(
        public url: string
    ) {
    }

    async run() {
        try {
            const resp = await this.request();
            const snsContent = this.extract(resp);
            if (snsContent.content.some(content => content.type !== 'text')) {
                await this.download(snsContent);
            }
            return await this.format(snsContent);
        }
        catch (e) {
            console.error(e);
            throw e;
        }
    }

    async request(): Promise<any> {
        try {
            return await this._request(this.url);
        }
        catch (e) {
            console.error(e);
            throw e;
        }
    }

    extract(response: any): SnsContent {
        try {
            return this._extract(response);
        }
        catch (e) {
            console.error(e);
            throw e;
        }
    }

    async download(SnsContent: SnsContent) {
        try {
            for (const content of SnsContent.content) {
                // TO DO
            }
        }
        catch (e) {
            console.error(e);
            throw e;
        }
    }

    /*
    * @param {string} url
    * this method should be implemented by subclasses
    */
    async _request(url: string): Promise<any> {
        throw new Error("Not implemented");
    }

    /*
    * @param {string} url
    * this method should be implemented by subclasses
    */
    _extract(response: any): SnsContent {
        throw new Error("Not implemented");
    }
}
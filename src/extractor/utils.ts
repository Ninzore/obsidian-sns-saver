import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';
import { requestUrl } from 'obsidian';

const MAX_SIZE = 100 * 1024 * 1024;
const ACCEPT_TYPE = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'mp4', 'webm'];
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36';

interface RequestOption<T extends 'GET' | 'POST' | 'PUT' | 'DELETE'> {
    method: T;
    body?: T extends 'POST' | 'PUT' | 'DELETE' ? string | ArrayBuffer : never;
    params?: { [key: string]: any; };
    headers?: {
        'User-Agent'?: string;
        'Accept'?: string;
        'Cookies'?: string;
        'Authorization'?: string;
    };
    responseType?: '' | 'text' | 'json' | 'document' | 'blob' | 'arraybuffer' | 'stream';
}

export async function request(
    url: string,
    requestOption: RequestOption<'GET' | 'POST' | 'PUT' | 'DELETE'>
): Promise<any> {
    const params = requestOption.params
        ? new URLSearchParams(requestOption.params).toString()
        : '';

    return requestUrl({
        url: `${url}?${params}`,
        method: requestOption.method,
        body: requestOption.body,
        headers: requestOption.headers
    }).then(res => {
        if (requestOption.responseType === 'json') {
            return res.json();
        }
        else if (requestOption.responseType === 'stream') {
            return res.arrayBuffer;
        }
        else {
            try {
                const resJson = JSON.parse(res.text);
                return resJson;
            }
            catch (e) {
                return res.text;
            }
        }
    });
}

export async function download(url: string, filepath: string): Promise<fs.PathLike> {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            responseType: 'stream',
            headers: {
                'User-Agent': UA,
                'accept': 'image/jpeg,image/jpg,image/png,,image/gif,image/avif,image/webp,image/apng'
            }
        }).then(res => {
            const mime = res.headers['content-type'];
            const subtype = mime.split('/')[1];

            if (!ACCEPT_TYPE.some(supported => supported == subtype)) {
                reject('Only support these file types: ' + ACCEPT_TYPE.join(', '));
            }
            else if (parseInt(res.headers['content-length']) > MAX_SIZE) {
                reject(`File size too large, it should less than ${MAX_SIZE / 1024 / 1024}MB} `);
            }
            else {
                const output = `${filepath}.${subtype} `;
                const writer = fs.createWriteStream(output);
                res.data.pipe(writer);
                writer.on('finish', () => {
                    resolve(path.resolve(output));
                });
                writer.on('error', (e) => {
                    reject('download error' + e);
                });
            }
        }).catch(err => {
            console.error(err);
            throw err;
        });
    });
}

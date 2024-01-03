import axios from 'axios';
import { Extractor } from './commonExtractor';
import { Weibo } from './types/weiboRespInterface';
import { SnsContent } from './types/format';

const MOBILE_WEIBO_REG = new RegExp(/weibo\.(com|cn)\/(status|detail)\/(\d{16})/);

export class WeiboExtractor extends Extractor {

    /**
     * @param {string} id weibo id
     * @returns {} no return
     */
    async getSingleWeibo(id: string): Promise<Weibo> {
        return axios.get(
            "https://api.weibo.cn/2/guest/statuses_show",
            {
                params: {
                    id: id,
                    isGetLongText: 1
                }
            }
        ).then(res => {
            return res.data as Weibo;
        });
    }

    async _request(url: string): Promise<Weibo> {
        let id = '';
        if (MOBILE_WEIBO_REG.test(url)) {
            const tmp = MOBILE_WEIBO_REG.exec(url);
            id = tmp && tmp[3] ? tmp[3] : '';
        }
        else {
            throw Error('Invalid url');
        }
        return await this.getSingleWeibo(id);
    }


    override _extract(resp: Weibo): Promise<SnsContent> {
        // TO DO
    }
}

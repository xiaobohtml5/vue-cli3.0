/**
 * Create by 肖波 on 2019/07/03.
 */
import tld from 'tldjs'
const HOST = window.location.host
const DOMAINS = {
    'prod': {
        origin: ''
    },
    'pre': {
        origin: ''
    },
    'test': {
        origin: ''
    },
    'dev': {
        origin: ''
    }
}

// 获取域名
function createDomain (host) {
    let DOMAIN = {}
    let topDomain = tld.getDomain(host)
    switch (topDomain) {
        case '':
            DOMAIN = DOMAINS['prod']
            break
        case '':
            DOMAIN = DOMAINS['pre']
            break
        case '':
            DOMAIN = DOMAINS['test']
            break
        case '':
            DOMAIN = DOMAINS['dev']
            break
        default:
            DOMAIN = DOMAINS['dev']
    }
    DOMAIN.tld = topDomain || 'dev'
    return DOMAIN
}
export const DOMAIN = createDomain(HOST)

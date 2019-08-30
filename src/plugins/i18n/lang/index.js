import ZH from './zh'
import EN from './en'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

export default {
    'zh-CN': {
        ...ZH,
        ...zhLocale // 或者用 Object.assign({ message: '你好' }, zhLocale)
    },
    'en': {
        ...EN,
        ...enLocale // 或者用 Object.assign({ message: 'hello' }, enLocale)
    }
}
/**
 * Create by 肖波 on 2019/07/03.
 */
const path = require('path')

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: '',
    indexPath: 'index.html',
    filenameHashing: true,
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '装备服务',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            // chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        // subpage: 'src/subpage/main.js'
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('css', resolve('src/assets/css'))
            .set('img', resolve('src/assets/images'))
            .set('components', resolve('src/components'))
            .set('mixins', resolve('src/mixins'))
            .set('plugins', resolve('src/plugins'))
            .set('views', resolve('src/views'))
            .set('api', resolve('src/api'))
    },
    devServer: {
        port: 8080,
        host: '', // 或者本地ip
        // 跨域代理,3.0不可以模块化拆分写
        proxy: {
            '/a': {
                target: '10.1.60.27:8082',
                ws: true,
                changeOrigin: true
            }
        }
    },
}
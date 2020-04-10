/**
 * @author  wuwg
 * @createTime  2019-08-01
 * @updateTime  2019-08-01
 * @description 反向代理配置
 * 目的： 很简单，两个字，跨域。
 * 'http://localhost:8080/api' ===> 'http://www.abc.com/api'
 * https://github.com/chimurai/http-proxy-middleware#options
 *
 * @update  
 * 1.2020-02-10:  将  export  default  修改为node模块 module.exports
 */
module.exports = {
    '/api': {
        // 目标接口域名
        target: 'http://172.16.192.165:8080',
        // 如果是https接口，需要配置这个参数
        // secure: false,
        // proxy websockets
        // ws: true,
        // 是否跨域
        changeOrigin: true,
        // 重写接口
        // pathRewrite: function (path, req) { return path.replace('/api', '/base/api') }
        pathRewrite: {
            '^/api': '/'
        },
        // 重写路由
      /*  router: {
            // when request.headers.host == 'dev.localhost:3000',
            // override target 'http://www.example.org' to 'http://localhost:8000'
            'dev.localhost:3000': 'http://localhost:8000'
        }*/
    },
    //   代理多个target地址,
    '/ips': {
        target: 'http://pv.sohu.com',
        changeOrigin: true,
        pathRewrite: {
            '^/ips': ''
        }
    }
}

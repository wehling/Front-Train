// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// index.js
// 注意babel-polyfill会影响打包大小，非常影响性能， 20200228-wuwg，
// 解决方案可以参考doc>问题处理文档>babel-polyfill太大问题.md
import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
// 全局组件
import './components/common/index.js';
// 全局指令
import './js/app/directive/fdDirective.js';
// 全局过滤器
import './js/app/filter/fdFilter.js';
// 全局消息
import './js/app/message/fdMessage.js';
// 全局配置
import './js/config.js';
// 全局方法类
import FdGlobal from './js/app/common/fdGlobal.js';
// ArteryUI start
import '@com.thunisoft.artery/artery-ui/dist/styles/artery-ui.css';
import ArteryUI from '@com.thunisoft.artery/artery-ui';

import echarts from 'echarts';

// 开始时间
// const startTime = new Date().getTime();
// 全局对象
window.fdGlobal = new FdGlobal();
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts
// window.fdGlobal.performance.start(startTime);
// window.fdGlobal.performance.execute('【app start】:');
/* eslint-disable no-new */
Vue.use(ArteryUI);
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>',
    beforeCreate() {
        // 开始时间
        this.beforeCreateTime = window.fdGlobal.performance.getCurrentTime();
    },
    created() {
        window.fdGlobal.performance.execute('【app created】:', this.beforeCreateTime);
        window.fdGlobal.performance.execute('【app created】:');
    },
    mounted() {
        window.fdGlobal.performance.execute('【app mounted】:', this.beforeCreateTime);
        window.fdGlobal.performance.execute('【app mounted】:');
    }
});

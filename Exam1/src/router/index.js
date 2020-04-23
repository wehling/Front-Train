import Vue from 'vue';
import Router from 'vue-router';
import pageExam from '@/pages/page-exam/index.vue';
// 使用路由
Vue.use(Router);
// 导出路由模块
export default new Router({
    routes: [
        {
            path: '/',
            name: 'pageExam',
            component: pageExam
        }
    ]
});

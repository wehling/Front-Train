import Vue from 'vue';
import Router from 'vue-router';
import pageA from '@/pages/page-a/index.vue';
import pageB from '@/pages/page-b/index.vue';
import pageUnit from '@/pages/page-unit/index.vue';
// 测试自定义组件引用
import pageVueTest from '@/pages/page-test/index.vue';
// 测试界面
const pageTest = {template: '<h1>测试页面</h1>'};
// 使用路由
Vue.use(Router);
// 导出路由模块
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/a'
        },
        {
            path: '/a',
            name: 'pageA',
            component: pageA
        },
        {
            path: '/b',
            name: 'pageB',
            component: pageB
        },
        {
            path: '/unit',
            name: 'pageUnit',
            component: pageUnit
        },
        {
            path: '/test',
            name: 'pageTest',
            component: pageTest
        },
        {
          path: '/vuetest',
          name: 'vueTest',
          component: pageVueTest
        }
    ]
});

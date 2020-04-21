/**
 *@version 1.0.1
 *@author wuwg
 *@createTime 2019/8/28 - 10:57
 *@updateTime 2019/8/28 - 10:57
 *@see [jsDoc中文文档]{@link  http://www.dba.cn/book/jsdoc/JSDOCKuaiBiaoQianBLOCKTAGS/CONSTRUCTS.html}
 @description template 模板组件的描述，这是一个组件编写的模板，大家写组件之前可以直接复制此模板，修改文件名即可
 */
import templateExtend from './extend/template-extend.js';
// 导出模块
export default {
    name: 'vccTemplate',
    // components
    components: {},
    // directives
    directives: {},
    // filters
    filters: {},
    mixins: [templateExtend],
    template: '<div></div>',
    // render
    render() {
        // render 方法
    },
    props: {
        property1:{
            type: String,
            default: '1'
        },
        property2:{
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            user: '张三',
            age: 25
        };
    },
    computed: {
        // computed
        userInfo() {
            return `用户名：${this.user}；年龄：${this.age}`;
        }
    },
    // watch
    watch: {},
    activated() {
        // activated
    },
    deactivated() {
        // deactivated
    },
    beforeCreate() {
        // beforeCreate
    },
    created() {
        // created
    },
    beforeMount() {
        // beforeMount
    },
    mounted() {
        // mounted
    },
    beforeUpdate() {
        // beforeUpdate
    },
    updated() {
        // updated
    },
    beforeDestroy() {
        // beforeDestroy
    },
    destroyed() {
        // destroyed
    },
    methods: {

        /**
         * @function
         * @memberof module:template
         * @description 一个实例方法,触发【getUserInfo】事件
         * @return {undefined} 无返回值
         */
        method1() {
            this.counter += 1;
            this.$emit('getUserInfo', this.userInfo);
        }
    }
};


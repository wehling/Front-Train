import Header from '@/components/test/vue-test/header';
import Footer from '@/components/test/vue-test/footer';

export default {
    name: 'next',
    data() {
        return {
            header_show:true,
            footer_show:true
        };
    },
    components: {
        'app-header':Header,
        'app-footer':Footer
    },
    methods:{
        clickGoto(path) {
            this.$router.push({path:path});
        },
        // 是否显示头部
        header:function (bool) {
            this.header_show = bool;
        },
        // 是否显示底部
        footer:function (bool) {
            this.footer_show = bool;
        }
    }
};

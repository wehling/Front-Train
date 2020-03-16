<template>
  <div id="app">

    <img src="./images/logo.png" alt="华宇信息">
    <h1>前后端分离工程结构</h1>
    <ul class="fd-nav">
      <li><button @click="clickGoto('/a')">页面A</button></li>
      <li><button @click="clickGoto('/b')">页面B</button></li>
      <li><button @click="clickGoto('unit')">单元测试页面</button></li>
    </ul>
    <div>
      <app-header v-if="header_show"></app-header>
      我是在App.vue中的header，footer
<!--      <router-view @header="header" @footer="footer"></router-view>-->
      <app-footer v-if="footer_show"></app-footer>
    </div>
    <ul class="fd-nav">
      <li><button @click="clickGoto('/vuetest')" style="background: red">自定义，通关请点我一下</button></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/test/vue-test/header';
import Footer from './components/test/vue-test/footer';
export default {
    name: 'App',
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
</script>

<style lang="less">
  @import "./css/index.less";
</style>

<template>
  <div id="app">

    <img src="./images/logo.png" alt="华宇信息">
    <h1>前后端分离工程结构</h1>
    <ul class="fd-nav">
      <li><button @click="clickGoto('/a')">页面A</button></li>
      <li><button @click="clickGoto('/b')">页面B</button></li>
      <li><button @click="clickGoto('unit')">单元测试页面</button></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App',
    methods:{
        clickGoto(path) {
            this.$router.push({path:path});
        }
    }
};
</script>

<style lang="less">
  @import "./css/index.less";
</style>

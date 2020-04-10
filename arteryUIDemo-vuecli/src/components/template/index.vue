<template>
    <div class="fd-template">
        <h1>tamplate</h1>
        <p>{{userInfo}}</p>
        <button @click="method1">click</button>
        <router-link  to="/upload">upload</router-link>
    </div>
</template>
<!--js-->
<script src="index.js"></script>
<!--样式表-->
<style lang="less">
    @import "index.less";
</style>


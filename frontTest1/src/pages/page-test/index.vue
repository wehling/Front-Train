<template>
  <div class="fd-test">
    <app-header v-if="header_show"></app-header>
    我是在page-test/index.vue中的header，footer，点击“自定义”出来的
    <app-footer v-if="footer_show"></app-footer>
    <button @click="clickGoto('/next')">另一页</button>
  </div>
</template>
<script src="./index.js"></script>


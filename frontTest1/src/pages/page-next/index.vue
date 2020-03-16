<template>
  <div class="fd-next">
    <app-header v-if="header_show"></app-header>
    我是在page-next/index.vue中的header，footer，点击“另一页”出来的，我是最后啦！
    <app-footer v-if="footer_show"></app-footer>
    <router-view/>
  </div>
</template>
<script src="./index.js"></script>

<template>
  <div id="app">
    <router-view class="fd-main"/>
  </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {};
    },
    methods:{
        clickGoto(path) {
            this.$router.push({path:path});
        }
    }
};
</script>


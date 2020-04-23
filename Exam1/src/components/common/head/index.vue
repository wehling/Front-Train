<template>
    <aty-row class="fd-header">
      <aty-col class="fd-xtalk">
          <span><aty-icon type="android-list"></aty-icon>系统案例库</span>
      </aty-col>
        <aty-col class="fd-yq">
          <aty-icon type="home"></aty-icon>分析页
          <aty-icon type="edit"></aty-icon>表单页
          <aty-icon type="document-text"></aty-icon>列表页
          <aty-icon type="document-text"></aty-icon>详情页
          <aty-icon type="android-mail"></aty-icon>结果页
          <aty-icon type="alert"></aty-icon>异常页
          <aty-icon type="android-contact"></aty-icon>个人页
        </aty-col>
        <aty-col class="fd-end">
          <aty-icon type="android-home"></aty-icon>
          <aty-icon type="android-notifications"></aty-icon>
        </aty-col>
      </aty-col>
    </aty-row>
</template>

<script>
  export default {}
</script>
<style scoped>
  .fd-xtalk {
    width:30%;
    display:inline-block !important;
    font-size: 30px;
    margin-left: 10%;
  }
  .fd-yq {
    width:50%;
    display:inline-block !important;
    font-size: 20px;
  }
  .fd-end {
    width:20%;
    font-size: 20px;
  }
  .fd-header {
    background-color: #08092b;
    color: white;
    height: 60px;
    display: flex;
    align-items: center;
  }
  .aty-icon {
    margin: 8px;
  }
  .fd-date {
    width: 100%;
  }
  #form {
    background-color: whitesmoke;
    text-align: center;
  }
</style>

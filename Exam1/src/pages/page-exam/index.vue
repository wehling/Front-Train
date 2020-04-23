<template>
  <div class="fd-main">
    <div class="fd-top">
      <div class="fd-logo"></div>
    </div>
    <div class="fd-bottom">

      <div class="fd-content">
        <div class="fd-tg"></div>
        <div class="fd-content1">
          <div class="fd-content1-left">
            <div class="fd-content1-left-top">
              <div class="fd-title-img">
                <span class="fd-ywbl">业务办理</span>
              </div>
            </div>
            <div class="fd-content1-left-bottom">
                        <span class="fd-img1">
                            <div class="fd-img1-list">
                                <span class="fd-item-img"></span>
                                <div class="fd-list-item">
                                    <span class="fd-item-icon"></span>
                                    <div class="fd-img1-title">
                                        <h3>释放管理</h3>
                                    </div>
                                    <div class="fd-img1-con">
                                        <ul>
                                            <li>预释放（1）</li>
                                            <li>待提请（1） </li>
                                            <li>已提请（1） </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </span>
              <span class="fd-img2">
                            <div class="fd-img1-list">
                                <div class="fd-list-item1">
                                    <div class="fd-img1-title">
                                        <h3>离间确认</h3>
                                    </div>
                                    <div class="fd-img2-con"></div>
                                </div>
                            </div>
                        </span>
              <span class="fd-img3">
                            <div class="fd-img1-list">
                                <div class="fd-list-item1">
                                    <div class="fd-img2-title">
                                        <h3>释放登记</h3>
                                    </div>
                                    <div class="fd-img3-con"></div>
                                </div>
                            </div>
                        </span>
            </div>
          </div>
          <div class="fd-content1-right">
            <div class="fd-content1-right-top">
              <div class="fd-title-img">
                <span class="fd-xxtx">消息提醒</span>
              </div>

            </div>
            <div class="fd-content1-right-bottom">
              <div class="fd-img4-con">
                <ul>
                  <li>【释放管理】一监区一分监区李四(1234545112)待处理 &nbsp;&nbsp;&nbsp;&nbsp;<span>2020-04-12</span></li>
                  <li>【释放管理】一监区一分监区李四(1234545112)待处理 &nbsp;&nbsp;&nbsp;&nbsp;<span>2020-04-12</span></li>
                  <li>【释放管理】一监区一分监区李四(1234545112)待处理 &nbsp;&nbsp;&nbsp;&nbsp;<span>2020-04-12</span></li>
                  <li>【释放管理】一监区一分监区李四(1234545112)待处理 &nbsp;&nbsp;&nbsp;&nbsp;<span>2020-04-12</span></li>
                  <li>【释放管理】一监区一分监区李四(1234545112)待处理 &nbsp;&nbsp;&nbsp;&nbsp;<span>2020-04-12</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="fd-content2">
          <div class="fd-content2-title">
            <div class="fd-title-img">
              <span class="fd-sjtj">数据统计</span>
            </div>
          </div>
          <div class="fd-content2-echars">
            <div id="js-bar" class="fd-content2-echars-left"></div>
            <div id="js-line" class="fd-content2-echars-mid"></div>
            <div id="js-pie" class="fd-content2-echars-right"></div>
          </div>
        </div>
        <div class="fd-content3" id="list">
          <!--                <div class="fd-content3-search">-->
          <!--&lt;!&ndash;                    <aty-input :label-width=75 label="输入框名称" placeholder="默认文字"></aty-input>&ndash;&gt;-->
          <!--                </div>-->
          <div class="fd-content3-list">
            <div class="fd-table">
              <aty-row class='fd-flex'>
                <aty-col span='8'>
                  <aty-input label="罪犯姓名/编号：" :label-width="150" placeholder="请输入"></aty-input>
                </aty-col>
                <aty-col span='8'>
                  <aty-date-picker  label="入监教育考核截至日期：" :label-width="150" placeholder="选择日期"></aty-date-picker>
                </aty-col>
                <aty-col class="fd-form-btn" span='8'>
                  <aty-button type="primary" text='查询'></aty-button>
                  <aty-button type="ghost" text='重置'></aty-button>
                </aty-col>
                <aty-col class="fd-btn-green" span='8'>
                  <aty-button class="fd-green-btn" icon="plus-circled" text="填写入监教育通过日期" type="primary"></aty-button>
                  <aty-button class="fd-green-btn" icon="plus-circled" text="加入分流名单" type="primary"></aty-button>
                </aty-col>
              </aty-row>
              <aty-row>
                <aty-table :pageable-data="list" @load-data="loadData">
                  <aty-table-column type="selection" reserve-selection width="40"></aty-table-column>
                  <aty-table-column type="index" label="序号" width="50"></aty-table-column>
                  <aty-table-column prop="zfxm" label="罪犯姓名" width="120"></aty-table-column>
                  <aty-table-column prop="zfbh" label="罪犯编号" width="150"></aty-table-column>
                  <aty-table-column prop="qklf" label="前科累犯" width="120"></aty-table-column>
                  <aty-table-column prop="bcqk" label="病残情况" width="150"></aty-table-column>
                  <aty-table-column prop="bqwhcd" label="捕前文化程度" width="150"></aty-table-column>
                  <aty-table-column prop="tc" label="特长" width="120"></aty-table-column>
                  <aty-table-column prop="xqzr" label="刑期止日" width="150"></aty-table-column>
                  <aty-table-column prop="rjrq" label="入监日期" width="120"></aty-table-column>
                  <aty-table-column prop="rjjykhjzrq" label="入监教育考核截止日期" width="170"></aty-table-column>
                </aty-table>
              </aty-row>

              <aty-pagination class="fd-page" :total="10" show-total show-elevator></aty-pagination>

            </div>
            <!--                    <div class="fd-page">-->
            <!--                        <aty-pagination class="fd-page" :total="10" show-total show-elevator></aty-pagination>-->
            <!--                    </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="less">
  *{
    margin: 0;
    padding: 0;
    /*width: 100%;*/
    height: 100%;
    overflow: unset;
  }

  .fd-main {
    position: relative;
    padding-top: 55px;
    width: 100%;
    height: 100%;
    background: url("../../images/icon/bg.png");
  }
  /*头部*/
  .fd-top {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 55px;
    background: url("../../images/icon/icon-logo.png") no-repeat;
  }
  .fd-logo {
    /*position: absolute;*/
    /*margin: auto;*/
    /*top: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    /*bottom: 0;*/
    /*width: 80%;*/
    /*background: yellow;*/
  }

  /*内容*/
  .fd-bottom {
    position: relative;
    /*padding-left: 200px;*/
    width: 100%;
    height: 100%;
    /*background: url("icon/top-bg.png") no-repeat;*/
  }
  .fd-tg {
    width: 100%;
    height: 34px;
    background:url("../../images/icon/top-bg.png") no-repeat;
    background-size: 100%;
  }
  .fd-content {
    /*position: absolute;*/
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 80%;
    border-radius: 5px;
    background: url("../../images/icon/top-bg.png") no-repeat;
    background-size: 100%;

  }
  /*内容1*/
  .fd-content1 {
    width: 100%;
    height: 20%;
    background: #FFF;
  }
  /*内容-左*/
  .fd-content1-left {
    width: 59%;
    height: 100%;
    /*background: #ff9900;*/
    float: left;
    border-right: 1px solid;
  }
  .fd-content1-left-top {
    width: 100%;
    height: 10%;
    /*background: yellow;*/
  }
  .fd-ywbl {
    padding-left: 20px;
    background: url("../../images/icon/icon-ywbl.png")no-repeat;
  }
  .fd-xxtx {
    padding-left: 20px;
    background: url("../../images/icon/icon-xxtx.png")no-repeat;
  }
  .fd-sjtj {
    padding-left: 20px;
    background: url("../../images/icon/icon-sjtj.png")no-repeat;
  }
  .fd-title-img {
    margin-left: 10px;
  }
  .fd-content1-left-bottom {
    width: 100%;
    height: 90%;
    /*background: cornflowerblue;*/
  }
  .fd-item-img {
    position: relative;
    display: inline-block;
    top: -137px;
    left: -6px;
    width: 30px;
    height: 30px;
    background: url("../../images/icon/icon-sfgl.png") no-repeat;
  }
  .fd-img1 {
    display: inline-block;
    width: 33%;
    height: 100%;
    /*background: #00cc66;*/
  }
  .fd-img2 {
    display: inline-block;
    width: 33%;
    height: 100%;
    /*background: #ff9900;*/
  }
  .fd-img3 {
    display: inline-block;
    width: 32%;
    height: 100%;
    /*background: #fff;*/
  }
  /*内容-右*/
  .fd-content1-right {
    width: 40%;
    height: 100%;
    /*background: #00cc66;*/
    float: left;
  }
  .fd-content1-right-top {
    width: 100%;
    height: 10%;
    /*background: yellow;*/
  }
  .fd-content1-right-bottom {
    width: 100%;
    height: 90%;
    /*background: gray;*/
  }
  .fd-img1-list {
    margin: 0 auto;
    margin-top: 13px;
    width: 200px;
    height: 150px;
    /*background: gray;*/
  }
  .fd-list-item {
    display: inline-block;
    position: relative;
    top: -48px;
    width: 60%;
    height: 100%;
    /*background: red;*/
  }
  .fd-btn-green.aty-col.aty-col-span-8 {
    position: relative;
    top: 5px;
    left: 50px;
  }
  .fd-green-btn {
    background-color: #2dcc88;
    border: 0;
  }
  .fd-list-item1 {
    display: inline-block;
    margin-left: 60px;
    width: 60%;
    height: 100%;
    /*background: red;*/
  }
  .fd-img1-title {
    width: 100%;
    height: 20%;
    color: #277AFF;
    /*background: blue;*/
  }
  .fd-img2-title {
    width: 100%;
    height: 20%;
    color: #ffaf44;
    /*background: blue;*/
  }
  .fd-img1-con {
    width: 100%;
    height: 80%;
    /*background: beige;*/
  }
  .fd-img1-con li {
    height: 37px;
    border-bottom: 1px dashed;
  }
  .fd-img2-con {
    display: inline-block;
    margin-left: 13px;
    margin-top: 20px;
    width: 100%;
    height: 80%;
    background: url("../../images/icon/icon-ljqr.png")no-repeat;
  }
  .fd-img3-con {
    display: inline-block;
    margin-left: 13px;
    margin-top: 20px;
    width: 100%;
    height: 80%;
    background: url("../../images/icon/icon-sfdj.png")no-repeat;
  }

  .fd-img4-con li {
    height: 34px;
    border-bottom: 1px dashed;
  }

  /*内容2*/
  .fd-content2 {
    width: 100%;
    height: 30%;
    /*background: #49d864;*/
  }
  .fd-content2-title {
    margin-top: 15px;
    width: 100%;
    height: 10%;
    background: #FFF;
  }
  .fd-content2-echars {
    width: 100%;
    height: 90%;
    background: #FFFFFF;
    float: left;
  }
  .fd-content2-echars-left {
    width: 33%;
    height: 100%;
    /*background: #ff9900;*/
    float: left;
  }
  .fd-content2-echars-mid {
    width: 33%;
    height: 100%;
    /*background: pink;*/
    float: left;
  }
  .fd-content2-echars-right {
    width: 34%;
    height: 100%;
    /*background: papayawhip;*/
    float: left;
  }
  /*内容3*/
  .fd-content3 {
    width: 100%;
    height: 50%;
    background: #FFF;
  }
  /*.fd-content3-search {*/
  /*    margin-top: 15px;*/
  /*    width: 100%;*/
  /*    height: 14%;*/
  /*background: yellow;*/
  /*}*/
  .fd-content3-list {
    margin-top: 15px;
    width: 100%;
    height: 100%;
    /*background: yellowgreen;*/
  }
  .fd-flex {
    margin-bottom: 10px;
  }
  .fd-table {
    /*display: table-cell;*/
    /*text-align: center;*/
    margin: 0 auto;
    width: 100%;
    height: 93%;
    /*background: red;*/
  }
  .fd-page {
    text-align: right;
    padding-right: 30px;
    width: 100%;
    height: 61px;
    line-height: 61px;
    /*background: yellow;*/
  }
  .fd-form-btn.aty-col.aty-col-span-8 {
    display: inline-block;
    text-align: center;
  }
</style>

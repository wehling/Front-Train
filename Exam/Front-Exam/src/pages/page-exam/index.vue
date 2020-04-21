<template>
  <div class="fd-main">
    <div class="fd-top">
      <div class="fd-logo"></div>
    </div>
    <div class="fd-bottom">
      <div class="fd-content">
        <div class="fd-content1">
          <div class="fd-content1-left">
            <div class="fd-content1-left-top">业务办理</div>
            <div class="fd-content1-left-bottom">
              <span class="fd-img1"></span>
              <span class="fd-img2"></span>
              <span class="fd-img3"></span>
            </div>
          </div>
          <div class="fd-content1-right">
            <div class="fd-content1-right-top"></div>
            <div class="fd-content1-right-bottom"></div>
          </div>
        </div>
        <div class="fd-content2">
          <div class="fd-content2-title">数据统计</div>
          <div class="fd-content2-echars">
            <div id="js-bar" class="fd-content2-echars-left"></div>
            <div id="js-line" class="fd-content2-echars-mid"></div>
            <div id="js-pie" class="fd-content2-echars-right"></div>
          </div>
        </div>
        <div class="fd-content3" id="list">
          <div class="fd-content3-search">

          </div>
          <div class="fd-content3-list">
            <aty-table :pageable-data="rs1">
              <aty-table-column type="selection" reserve-selection label="序号"></aty-table-column>
              <aty-table-column prop="bt" label="标题"></aty-table-column>
              <aty-table-column prop="ly" label="来源"></aty-table-column>
              <aty-table-column prop="rq" label="日期"></aty-table-column>
              <aty-table-column prop="jg" label="价格"></aty-table-column>
              <aty-table-column prop="ys" label="加载用时"></aty-table-column>
              <aty-table-column prop="dz" label="地址"></aty-table-column>
            </aty-table>
            <aty-pagination class="fd-page" :total="10" show-total show-elevator></aty-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>

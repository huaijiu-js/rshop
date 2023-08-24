<template>
  <view class="hua-swpier" hover-class="none">
    <swiper indicator-dots autoplay circular>
      <swiper-item v-for="o in 4" :key="o">
        <image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
      </swiper-item>
    </swiper>
  </view>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.hua-swpier {
  swiper {
    height: 300rpx;
  }
}
</style>

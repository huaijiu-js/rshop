<template>
  <view class="hua-swpier" hover-class="none">
    <swiper indicator-dots autoplay circular>
      <swiper-item v-for="item in list" :key="item.id">
        <image :src="item.imgUrl" />
      </swiper-item>
    </swiper>
  </view>
</template>

<script lang="ts" setup>
import type { BannerItem } from '@/types/home'

defineProps<{
  list: BannerItem[]
}>()
</script>

<style scoped lang="scss">
.hua-swpier {
  swiper {
    height: 300rpx;
  }
}
</style>

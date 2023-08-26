<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { getHomeBannerApi, getHomeCategoryAPI, getHomeHotAPI } from '@/services'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home.d'
import { ref } from 'vue'
/* 引入子组件 */
import navbar from './components/navbar.vue'
import HomeTypes from './components/HomeTypes.vue'
import HotPanel from './components/HotPanel.vue'
import kong from '@/components/kong.vue'
import type { huaLikeIns } from '@/types/component.d.ts'
const bannerList = ref<BannerItem[]>([])
const cateList = ref<CategoryItem[]>([])
const hotList = ref<HotItem[]>([])
const flag = ref(false)
const show = ref(false)
/* 获取首页广告 参数默认值为1 */
const getHomeBanner = async () => {
  const res = await getHomeBannerApi()
  bannerList.value = res.result
}
/* 获取分类图标 */
const getCategoryItem = async () => {
  const res = await getHomeCategoryAPI()
  cateList.value = res.result
}
/* 获取推荐图标 */
const getHomeHot = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}
const guessRef = ref<huaLikeIns>()
const onScrolltolower = () => {
  guessRef.value?.guess()
}
const refresh = async () => {
  flag.value = true
  show.value = true
  guessRef.value?.resetData()
  await Promise.all([getHomeBanner(), getCategoryItem(), getHomeHot(), guessRef.value?.guess()])
  flag.value = false
  show.value = false
}
onLoad(async () => {
  show.value = true
  await Promise.all([getHomeBanner(), getCategoryItem(), getHomeHot()])
  show.value = false
})
</script>

<template>
  <!-- 自定义nvbar -->
  <navbar></navbar>

  <!-- eslint-disable -->
  <scroll-view class="scroll-view" scroll-y @scrolltolower="onScrolltolower" :refresher-enabled="true"
    @refresherrefresh="refresh" :refresher-triggered="flag">
    <kong v-if="show"></kong>
    <!-- 自定义轮播图 -->
    <huaSwiper :list="bannerList"></huaSwiper>
    <!-- 分类列表 -->
    <HomeTypes :list="cateList"></HomeTypes>
    <!-- 热门推荐 -->
    <HotPanel :list="hotList"></HotPanel>
    <!-- 猜你喜欢 -->
    <huaLike ref="guessRef"></huaLike>
  </scroll-view>
</template>

<style lang="scss">
//
page {
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  height: 100%;

  .scroll-view {
    flex: 1;
  }
}
</style>

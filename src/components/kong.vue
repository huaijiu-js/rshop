<!-- eslint-disable prettier/prettier -->
<template name="skeleton">
  <view is="components/huaSwiper">
    <view class="hua-swpier huaSwiper--hua-swpier data-v-76e1329a huaSwiper--data-v-76e1329a" hover-class="none">
      <swiper :autoplay="false" :circular="true" :indicator-dots="true" class="data-v-76e1329a huaSwiper--data-v-76e1329a"
        :current="0">
        <swiper-item class="data-v-76e1329a huaSwiper--data-v-76e1329a" style="
            position: absolute;
            width: 100%;
            height: 100%;
            transform: translate(0%, 0px) translateZ(0px);
          ">
          <image class="data-v-76e1329a huaSwiper--data-v-76e1329a sk-image"></image>
        </swiper-item>
      </swiper>
    </view>
  </view>
  <view is="pages/index/components/HomeTypes">
    <view class="category HomeTypes--category">
      <navigator class="category-item HomeTypes--category-item" hover-class="none">
        <image class="icon HomeTypes--icon sk-image"></image>
        <text class="text HomeTypes--text sk-transparent sk-text-14-2857-953 sk-text">居家</text>
      </navigator>
      <navigator class="category-item HomeTypes--category-item" hover-class="none">
        <image class="icon HomeTypes--icon sk-image"></image>
        <text class="text HomeTypes--text sk-transparent sk-text-14-2857-406 sk-text">锦鲤</text>
      </navigator>
      <navigator class="category-item HomeTypes--category-item" hover-class="none">
        <image class="icon HomeTypes--icon sk-image"></image>
        <text class="text HomeTypes--text sk-transparent sk-text-14-2857-69 sk-text">服饰</text>
      </navigator>
      <navigator class="category-item HomeTypes--category-item" hover-class="none">
        <image class="icon HomeTypes--icon sk-image"></image>
        <text class="text HomeTypes--text sk-transparent sk-text-14-2857-828 sk-text">母婴</text>
      </navigator>
      <navigator class="category-item HomeTypes--category-item" hover-class="none">
        <image class="icon HomeTypes--icon sk-image"></image>
        <text class="text HomeTypes--text sk-transparent sk-text-14-2857-598 sk-text">个护</text>
      </navigator>
      <navigator class="category-item HomeTypes--category-item" hover-class="none">
        <image class="icon HomeTypes--icon sk-image"></image>
        <text class="text HomeTypes--text sk-transparent sk-text-14-2857-299 sk-text">严选</text>
      </navigator>
      <navigator class="category-item HomeTypes--category-item" hover-class="none">
        <image class="icon HomeTypes--icon sk-image"></image>
        <text class="text HomeTypes--text sk-transparent sk-text-14-2857-23 sk-text">数码</text>
      </navigator>
      <navigator class="category-item HomeTypes--category-item" hover-class="none">
        <image class="icon HomeTypes--icon sk-image"></image>
        <text class="text HomeTypes--text sk-transparent sk-text-14-2857-214 sk-text">运动</text>
      </navigator>
      <navigator class="category-item HomeTypes--category-item" hover-class="none">
        <image class="icon HomeTypes--icon sk-image"></image>
        <text class="text HomeTypes--text sk-transparent sk-text-14-2857-721 sk-text">杂项</text>
      </navigator>
      <navigator class="category-item HomeTypes--category-item" hover-class="none">
        <image class="icon HomeTypes--icon sk-image"></image>
        <text class="text HomeTypes--text sk-transparent sk-text-14-2857-113 sk-text">品牌</text>
      </navigator>
    </view>
  </view>
  <view is="pages/index/components/HotPanel">
    <view class="panel HotPanel--panel hot HotPanel--hot">
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-934 sk-text">特惠推荐</text>
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-889 sk-text">精选全攻略</text>
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-6 sk-text">爆款推荐</text>
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-935 sk-text">最受欢迎</text>
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-811 sk-text">一站买全</text>
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-41 sk-text">精心优选</text>
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-442 sk-text">新鲜好物</text>
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-455 sk-text">生活加分项</text>
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
    </view>
  </view>
</template>

<style scoped>
.sk-transparent {
  color: transparent !important;
}

/* eslint-disable */
.sk-text-0-0000-183 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25.7813rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-503 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-text-14-2857-6 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-text-14-2857-643 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-text-14-2857-505 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-text-14-2857-222 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-text-14-2857-965 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-text-14-2857-342 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-text-14-2857-822 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-text-14-2857-759 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-text-14-2857-829 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-text-14-2857-910 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}

.sk-text-14-2857-892 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 42.6563rpx;
  position: relative !important;
}

.sk-text-14-2857-649 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}

.sk-text-14-2857-770 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 42.6563rpx;
  position: relative !important;
}

.sk-text-14-2857-177 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}

.sk-text-14-2857-602 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 42.6563rpx;
  position: relative !important;
}

.sk-text-14-2857-878 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}

.sk-text-14-2857-134 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 42.6563rpx;
  position: relative !important;
}

.sk-text-14-2857-76 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}

.sk-image {
  background: #efefef !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}

.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>

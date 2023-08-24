import huaSwiper from './huaSwiper.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    huaSwiper: typeof huaSwiper
  }
}

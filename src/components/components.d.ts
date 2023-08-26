import huaSwiper from './huaSwiper.vue'
import huaLike from './huaLike.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    huaSwiper: typeof huaSwiper
    huaLike: typeof huaLikeVue
  }
}

export type huaLikeIns = InstanceType<typeof huaLike>

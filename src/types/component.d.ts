import huaSwiper from './huaSwiper.vue'
import huaLike from './huaLike.vue'

/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
declare module 'vue' {
  export interface GlobalComponents {
    huaSwiper: typeof huaSwiper
    huaLike: typeof huaLike
  }
}

export type huaLikeIns = InstanceType<typeof huaLike>

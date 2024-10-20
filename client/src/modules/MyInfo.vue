<!-- HomePage 个人信息展示模块 -->

<script setup>
import { useThemeStore } from '@/store/theme.js'
import { computed } from 'vue'

const themeStore = useThemeStore()
const isDark = computed(() => themeStore.isDark)
</script>

<template>
  <div class="info-body bg-base-100 opacity-80 rounded-2xl "
    style="border: 2px solid transparent;border-radius: 16px;background-clip: padding-box, border-box;background-origin: padding-box, border-box; opacity: 0.9;"
    :style="(isDark ? 'background-image: linear-gradient(to right, #222, #222), linear-gradient(134deg,#767D94 0%,#91A4C6 100%)' : 'background-image: linear-gradient(to right, #F3E7E9, #E3EEFF), linear-gradient(90deg,#FFDCD2 0%,#FFF5C7 100%)')">
    <div class="join w-full">
      <div class="join-item">
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
    </div>
  </div>


</template>
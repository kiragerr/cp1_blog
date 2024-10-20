<!-- 站点数据统计 -->

<script setup>
import { useThemeStore } from '@/store/theme.js'
import { computed } from 'vue'

const themeStore = useThemeStore()
const isDark = computed(() => themeStore.isDark)
</script>

<template>
  <div class="data-list flex ">
    <div class="stats shadow m-2">
      <div class="stat">
        <div class="stat-figure text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="inline-block h-8 w-8 stroke-current">
            <path fill="currentColor"
              d="M16 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7m10 28h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z" />
          </svg>
        </div>
        <div class="stat-title">今日访问量</div>
        <div class="stat-value text-primary">12.3K</div>
        <div class="stat-desc">21% more than yesterday</div>
      </div>
    </div>
    <div class="stats shadow m-2">
      <div class="stat">
        <div class="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="inline-block h-8 w-8 stroke-current">
            <path fill="currentColor"
              d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9" />
          </svg>
        </div>
        <div class="stat-title">总浏览数</div>
        <div class="stat-value text-secondary">4.56M</div>
        <div class="stat-desc">54% more than yesterday</div>
      </div>

    </div>
    <div class="stats shadow m-2">
      <div class="stat">
        <div class="stat-figure text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="inline-block h-8 w-8 stroke-current">
            <path fill="currentColor"
              d="M4 24h10v2H4zm0-6h10v2H4zm22-4H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M6 6v6h20V6zm20 22h-6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2m-6-8v6h6v-6z" />
          </svg>
        </div>
        <div class="stat-title">文章总数</div>
        <div class="stat-value text-primary">78.9K</div>
        <div class="stat-desc">昨日发布新文章: 90</div>
      </div>
    </div>
  </div>

</template>
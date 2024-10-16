<script setup>
import { useRouter, } from 'vue-router'
import { onMounted, ref, watchEffect, onBeforeMount, computed } from 'vue'
import { useThemeStore } from './store/theme.js'
const router = useRouter()

const themeStore = useThemeStore()
const theme = computed(() => themeStore.theme)
onBeforeMount(() => {
  const localTheme = window.localStorage.getItem('theme')
  if (localTheme == 'dark' || localTheme == 'cupcake') {
    themeStore.setTheme(localTheme)
  } else {
    themeStore.setTheme('cupcake')
  }
})

</script>

<template>
  <div :data-theme="theme">

    <router-view v-slot="{ Component }">
      <Transition name="fade">
        <component :is="Component" />
      </Transition>
    </router-view>

  </div>

</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
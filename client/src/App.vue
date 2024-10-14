<script setup>
import { useRouter, } from 'vue-router'
import { onMounted, ref, watchEffect } from 'vue'
const router = useRouter()

const theme = ref(
  window.localStorage.getItem('theme') || 'dark'
)
watchEffect(() => {
  window.localStorage.setItem('theme', theme.value)
})

onMounted(() => {
  router.push('/')
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
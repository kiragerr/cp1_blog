<!-- 首页 -->

<script setup>
import { onMounted } from 'vue'
import useAction from './IndexPage.js'

onMounted(() => {
  // 组件挂载后添加插入canvas
  const createCanvas = useAction()
  createCanvas(document.getElementById('useAction'))

})
</script>


<template>
  <div bodyDiv class="bg-opacity-40">
    <div class="hero min-h-screen" style="background-image: url(api);">
      <!-- 背景内容 -->
      <div class="hero-overlay bg-opacity-10"
        style="background-image: linear-gradient(120deg,#362B6C 10.42%,#7A96B1 73.72%)" id="useAction">
        <!-- canvas插入 -->
      </div>
      <div class="hero-content text-neutral-content text-center">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">标题</h1>
          <p class="mb-5">
            标签
          </p>
          <router-link to="Home" class="btn btn-default" style="background-image: url(xx);">进入博客</router-link>
        </div>
      </div>
    </div>

  </div>
</template>


<style>
canvas {
  position: fixed;
  width: 100%;
  height: 100%;
}
</style>
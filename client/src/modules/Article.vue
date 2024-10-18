<!-- HomePage 文章渲染组件 -->
<script setup>
import { ref } from 'vue'

defineProps({
  artID: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: false,
    default: '无标题'
  },
  summary: {
    type: String,
    required: false,
    default: '无摘要'
  },
  content: {
    type: String,
    required: false,
    default: '无内容'
  },
  author: {
    type: String,
    required: false,
    default: '匿名'
  },
  date: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: false,
    default: 'https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp' // tempImg
  }
})

</script>

<template>
  <div class="card card-side bg-base-100 shadow-xl">
    <figure>
      <img :src="imgUrl" alt="image" class="img-responsive rounded-xl w-36 h-32 object-cover" />
    </figure>
    <div class="card-body h-32" style="width: 45rem;">
      <h2 class="card-title">{{ title }}</h2>
      <p>{{ summary }}</p>
      <p class="overflow-ellipsis">{{ content }}</p>
    </div>
  </div>
</template>
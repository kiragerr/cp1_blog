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
  },
  tags: {
    type: Array,
    required: false,
    default: () => [{ text: "未分类", cololr: "default" }]
  },
  views: {
    type: Number,
    required: true,
  }
})

</script>

<template>
  <div
    class="card card-side bg-base-100 shadow-xl mb-1 hover:bg-base-200 hover:shadow-lg cursor-pointer active:bg-base-300 transition-transform translate-y-0 active:translate-y-0.5"
    style="opacity: 0.8;">
    <figure>
      <img :src="imgUrl" alt="image" class="img-responsive rounded-xl w-36 h-36 object-cover" />
    </figure>
    <div class="card-body h-36" style="width: 45rem;gap:0">
      <h2 class="card-title">{{ title }}
        <div class="float-start">
          <span class="float-left badge badge-outline mr-2" :class="`${tag.color}`" v-for="tag in tags">{{
        tag.text
      }}</span>
        </div>
      </h2>
      <p class="text-sm text-gray-500">{{ author }} | {{ date }} | {{ views }} 次阅读</p>
      <p class="truncate overflow-hidden max-w-lg max-h-8 text-left">{{ content }}</p>
    </div>
  </div>
</template>
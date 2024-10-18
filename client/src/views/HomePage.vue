<!-- 主页 -->

<script setup>
import HeaderNav from "@/modules/HeaderNav.vue";
import AnyWhere from "@/modules/AnyWhere.vue";
import MyInfo from "@/modules/MyInfo.vue";
import useAction from "@/views/canvas.js";

import Article from "@/modules/Article.vue";

import { ref, onMounted, computed } from "vue";

import { useThemeStore } from "@/store/theme";
const themeStore = useThemeStore();
const isDark = computed(() => themeStore.isDark);

import { tempArticles } from "@/store/tempData.js";

const artReady = ref(false);

onMounted(() => {
  const createCanvas = useAction("useCanvas");
  createCanvas(document.querySelector("#useCanvas"));

  if (tempArticles) {
    artReady.value = true;
  }
});


</script>

<template>

  <!-- 一层 -->
  <div class="z1">

    <div class="hero min-h-screen" style="background-image: url(xx);">
      <div class="hero-overlay"
        :style="(isDark ? `background-image: linear-gradient(358deg,#7B869F 0%,#3A5067 100%` : 'background-image: linear-gradient(184deg,#F6C0B1 0%,#F4EFD9 100%)')"
        id="useCanvas">
      </div>
      <div class="hero-content text-neutral-content text-center">
        <div class="max-w-md flex flex-col items-center text-center">

          <!-- HeaderNav.Vue -->
          <div class="hander-nav">
            <HeaderNav />
          </div>

          <!-- AnyWhere.Vue -->
          <div class="any-where">
            <AnyWhere />
          </div>

          <!-- 文章列表 -->
          <div class="article-list ">
            <div class="article">
              <Article v-if="artReady" v-for="art in tempArticles" :artID="art.artID" :title="art.title"
                :content="art.content" :author="art.author" :imgUrl="art.imgUrl" :date="art.date"
                :summary="art.summary" />
            </div>
          </div>

          <!-- 左侧 /// -->
          <div class="left-list">

          </div>

          <!-- 右侧 MyInfo.Vue -->
          <div class="my-info">
            <MyInfo />
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
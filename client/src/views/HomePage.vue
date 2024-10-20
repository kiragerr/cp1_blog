<!-- 主页 -->

<script setup>
import HeaderNav from "@/modules/HeaderNav.vue";
import Essay from "@/modules/Essay.vue";
import MyInfo from "@/modules/MyInfo.vue";
import useAction from "@/views/canvas.js";
import WebData from "@/modules/WebData.vue";
import Article from "@/modules/Article.vue";
import ArtFilter from "@/modules/ArtFilter.vue";

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

    <div class="hero min-h-screen relative" style="background-image: url(xx);">
      <div class="hero-overlay"
        :style="(isDark ? `background-image: linear-gradient(358deg,#7B869F 0%,#3A5067 100%` : 'background-image: linear-gradient(184deg,#F6C0B1 0%,#F4EFD9 100%)')"
        id="useCanvas">
      </div>
      <div class="hero-content text-neutral-content text-center max-w-full ">
        <div class="max-w-md flex flex-col items-center text-center">

          <!-- HeaderNav.Vue -->
          <div class="hander-nav">
            <HeaderNav />
          </div>


          <div class="mid mt-2">
            <!-- webData.Vue -->
            <div class=" web-data">
              <WebData />
            </div>

            <!-- 文章筛选 -->
            <div class="art-filter mb-1">
              <ArtFilter />
            </div>

            <!-- 文章列表 -->
            <div class="article-list"
              style="border: 2px solid transparent;border-radius: 16px;background-clip: padding-box, border-box;background-origin: padding-box, border-box; opacity: 0.9;"
              :style="(isDark ? 'background-image: linear-gradient(to right, #222, #222), linear-gradient(134deg,#767D94 0%,#91A4C6 100%)' : 'background-image: linear-gradient(to right, #F3E7E9, #E3EEFF), linear-gradient(90deg,#FFDCD2 0%,#FFF5C7 100%)')">
              <div class="article">
                <Article v-if="artReady" v-for="art in tempArticles" :artID="art.artID" :title="art.title"
                  :content="art.content" :author="art.author" :imgUrl="art.imgUrl" :date="art.date" :tags="art.tags"
                  :views="art.views" class="last:mb-0" />
              </div>
            </div>

          </div>

          <!-- 左侧 /// -->
          <div class="left-list">

          </div>

          <!-- 右侧 MyInfo.Vue -->
          <div class="my-info absolute top-24 right-12 w-1/5">
            <MyInfo />
          </div>


        </div>
      </div>
    </div>
  </div>
</template>
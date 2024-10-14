<!-- 主页 -->

<script setup>
import HeaderNav from "@/modules/HeaderNav.vue";
import AnyWhere from "@/modules/AnyWhere.vue";
import MyInfo from "@/modules/MyInfo.vue";

</script>

<template>

  <!-- 一层 -->
  <div class="z1">
    <!-- HeaderNav.Vue -->
    <div class="hander-nav">
      <HeaderNav />
    </div>
    <!-- AnyWhere.Vue -->
    <div class="any-where">
      <AnyWhere />
    </div>
    <!-- 左侧 文章列表 -->
    <div class="left-list">

    </div>
    <!-- 右侧 MyInfo.Vue -->
    <div class="my-info">
      <MyInfo />
    </div>
  </div>
</template>
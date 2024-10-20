<!-- 文章筛选工具栏 -->

<script setup>
import { ref, onMounted } from 'vue'
import { tempMenuTabs, tempTagTabs } from "@/store/tempData.js"

function changeTagColor(e) {
  console.log(e)
  const forLabel = document.querySelector(`label[data-label='${e.target.id}']`)
  if (e.target.checked) {
    forLabel.classList.remove('badge-outline')
  } else {
    forLabel.classList.add('badge-outline')

  }
}

</script>

<template>
  <div class="filter-body bg-base-100 rounded-xl opacity-80 flex flex-row justify-between">
    <div class="tag-filter m-auto">
      <label class="" v-for="tag in tempTagTabs"
        :class="(`${tag.color} badge badge-sm m-1 hover:badge-ghost badge-outline`)" :for="(`tag-${tag.value}`)"
        :data-label="`tag-${tag.value}`">
        {{ tag.value }}
      </label>
      <input type="checkbox" v-for="tag in tempTagTabs" :name="`tag-${tag.value}`" :id="`tag-${tag.value}`"
        :data-color="tag.color" class="hidden" @change="changeTagColor" />
    </div>
    <div class="type-filter">
      <select class="select select-sm w-24 max-w-xs min-h-full h-full">
        <option disabled selected>筛选</option>
        <option v-for=" option in tempMenuTabs " :value="option.text">{{ option.text }}</option>
      </select>
    </div>
  </div>
</template>

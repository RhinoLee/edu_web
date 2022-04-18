<script setup>
const props = defineProps({
  title: {
    type: String
  },
  icon: {
    type: String
  },
})
</script>
<template>
  <div class="flex items-center justify-center">
    <h2 class="font-bold text-3xl text-edu-blue">{{ title }}</h2>
    <div v-if="icon" class="ml-[15px]"><img src="@/assets/images/image/img_books.svg"></div>
  </div>
</template>
<script setup>
import { defineProps } from "vue"
const props = defineProps({
  isOpen: {
    type: Boolean,
  }
})
</script>

<template>
  <div :class="{ 'mask-open': isOpen }" class="fixed opacity-0 top-0 -left-[100%] w-screen h-screen bg-edu-mask transition duration-500 z-10"></div>
</template>

<style scoped>
.mask-open {
  left: 0;
  opacity: 1;
}
</style>
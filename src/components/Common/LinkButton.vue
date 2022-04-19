<script setup>
import { onMounted, reactive } from "vue"
const props = defineProps({
  btnClass: {
    type: Array
  },
  btnLink: {
    type: String
  },
  icon: {
    type: String
  },
  iconClass: {
    type: Array
  }
})

const activeStyle = reactive({ style: {} })
let timeout = null

function buttonEnter(e) {
  clearTimeout(timeout)
  activeStyle.style = {}

  const enterX = Math.round((e.offsetX / e.target.offsetWidth) * 100)
  const enterY = Math.round((e.offsetY / e.target.offsetHeight) * 100)

  timeout = setTimeout(() => {
    activeStyle.style = {
      width: "600px",
      height: "600px",
      left: enterX + '%',
      top: enterY + '%',
    }
  }, 5)
}

function buttonLeave(e) {
  const leaveX = Math.round((e.offsetX / e.target.offsetWidth) * 100)
  const leaveY = Math.round((e.offsetY / e.target.offsetHeight) * 100)

  activeStyle.style = {
    width: "0px",
    height: "0px",
    left: leaveX + '%',
    top: leaveY + '%',
  }
}

</script>
<template>
  <!-- with icon -->
  <a v-if="icon" @mouseenter="buttonEnter" @mouseleave="buttonLeave" :href="btnLink" :class="btnClass"
    class="relative flex justify-center items-center border border-edu-blue rounded overflow-hidden z-10">
    <div :class="iconClass"><img class="block h-full" :src="icon">
    </div>
    <p class="text-edu-blue text-base xl:text-lg">
      <slot></slot>
    </p>
    <div
      class="absolute block w-0 h-0 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 bg-edu-yellow z-[-1] rounded-full"
      :style="activeStyle.style">
    </div>
  </a>

  <!-- without icon -->
  <a v-else @mouseenter="buttonEnter" @mouseleave="buttonLeave" :href="btnLink" :class="btnClass" class="relative inline-block border border-edu-blue rounded text-edu-blue overflow-hidden z-10
    
    ">
    <slot></slot>
    <div
      class="absolute block w-0 h-0 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 bg-edu-yellow z-[-1] rounded-full"
      :style="activeStyle.style">
    </div>
  </a>
</template>


<style scoped>
</style>
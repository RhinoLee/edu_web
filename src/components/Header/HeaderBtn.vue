<script setup>
import { defineProps } from "vue"
const props = defineProps({
  hasBorder: {
    type: Boolean
  },
  hasArrow: {
    type: Boolean
  },
  active: {
    type: Boolean
  },
})

const btnActive = "bg-edu-blue scale-[1.01] z-10"
const btnActiveChild = "after:content-[''] after:block after:absolute after:left-0 after:w-full after:h-[1px] after:bg-edu-yellow"
</script>

<template>
  <button 
    class="group flex-1 hover:bg-edu-blue hover:scale-[1.01] hover:z-10 transition duration-300"
    :class="[{ 'border-l-[1px]': hasBorder }, { 'bg-edu-bg': !active }, active ? btnActive : '']"
  >
    <div class=" inline-block w-auto justify-center items-center py-4 relative
            group-hover:after:content-[''] group-hover:after:block group-hover:after:absolute group-hover:after:left-0 
            group-hover:after:w-full group-hover:after:h-[1px] group-hover:after:bg-edu-yellow
          "
          :class="[ active ? btnActiveChild : '' ]" 
          >
      <p class="inline-block edu-blue text-base lg:text-lg text-edu-blue font-bold group-hover:text-white"
          :class="[ active ? 'text-white' : '' ]"
          >
        <slot></slot>
      </p>
      <svg v-if="hasArrow" class="inline-block ml-4 mb-[6px] stroke-edu-blue group-hover:stroke-white"
        :class="[ active ? 'stroke-white' : '' ]"
        xmlns="http://www.w3.org/2000/svg" width="15.001" height="8.915" viewBox="0 0 15.001 8.915">
        <path id="Path_22" data-name="Path 22" d="M832,94.933l6.087,6.087,6.086-6.087"
          transform="translate(-830.586 -93.519)" fill="none" stroke-linecap="round" stroke-width="2" />
      </svg>
    </div>
  </button>
</template>
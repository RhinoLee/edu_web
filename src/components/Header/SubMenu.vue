<script setup>
const props = defineProps({
  nowMenuItem: {
    type: Object
  }
})
</script>
<template>
  <div v-if="nowMenuItem && nowMenuItem.picMenu.length > 0 || nowMenuItem && nowMenuItem.subMenu.length > 0"
    :class="{ 'menu-open': !!nowMenuItem }" class="hidden sm:block bg-edu-blue pt-[45px] pb-[20px]">
    <div class="w-[93%] md:[80%] 2xl:max-w-[1200px] mx-auto flex">
      <div class="w-[70%] pr-[10px] lg:pr-[20px] border-white border-r">
        <div class="flex w-full">
          <div v-for="(item, idx) in nowMenuItem.picMenu" :key="idx"
            class="w-2/6 pl-[5px] pr-[5px] lg:pl-[10px] lg:pr-[10px]">
            <a :href="item.link" class="group flex w-full flex-col items-center">
              <div class="w-full mb-[10px]"><img class="w-full" :src="item.pic"></div>
              <p class="relative text-white text-sm lg:text-base
                group-hover:after:content-[''] group-hover:after:block group-hover:after:absolute group-hover:after:left-0 
                group-hover:after:w-full group-hover:after:h-[1px] group-hover:after:bg-edu-yellow
                ">
                {{ item.title }}</p>
            </a>
          </div>
        </div>
      </div>
      <div class="w-[30%] pl-[15px] lg:pl-[30px]">
        <div class="pb-6" v-for="(item, idx) in nowMenuItem.subMenu" :key="idx">
          <a :href="item.link" class="text-white text-sm lg:text-bas relative
            hover:after:content-[''] hover:after:block hover:after:absolute hover:after:left-0 
            hover:after:w-full hover:after:h-[1px] hover:after:bg-edu-yellow">
            {{ item.title }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
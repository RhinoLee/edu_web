<script setup>
const props = defineProps({
  nowMenuItem: {
    type: Object
  }
})
</script>
<template>
  <div :class="{ 'top-[100%]': nowMenuItem, 'opacity-100': nowMenuItem, 'opacity-0': !nowMenuItem, '-top-[250px]': !nowMenuItem }" class="absolute left-0 w-full h-[250px] transition-all duration-700 z-10 bg-edu-blue">
    <div v-if="nowMenuItem"
      class="sm:block bg-edu-blue pt-[45px] pb-[20px]">
      <div class="w-[93%] md:[80%] 2xl:max-w-[1200px] mx-auto flex">
        <div class="w-[70%] pr-[10px] lg:pr-[20px] border-white border-r">
          <div class="flex w-full">
            <!-- 有圖片的項目 -->
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
          <!-- 沒圖片的項目 -->
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
  </div>
</template>
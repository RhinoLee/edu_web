<script setup>
import LinkButton from "@/components/Common/LinkButton.vue"
const newsList = [
  {
    date: "2022-10-22",
    title: "明光義塾最新官網上線了！明光義塾最新官網上線了！"
  },
  {
    date: "2022-10-23",
    title: "明光義塾最新官網上線了"
  },
  {
    date: "2022-10-24",
    title: "明光義塾最新官網上線了！明光義塾最新官網上線了！"
  },
]
</script>
<template>
  <div class="pb-[65px]">
    <div class="container mb-[35px] relative">
      <div class="grid grid-cols tablet:grid-cols-4 rounded overflow-hidden">
        <div class="tablet:col-start-1 tablet:col-span-1 flex justify-center items-center bg-edu-blue">
          <h2 class="text-xl md:text-2xl lg:text-4xl text-white py-[18px] sm:py-[25px] tablet:py-[55px]">最新公告</h2>
        </div>
        <div class="tablet:col-start-2 tablet:col-span-3 bg-edu-bg">
          <ul class="py-[18px] px-[22px] lg:py-[25px] lg:px-[53px]">
            <li v-for="(news, idx) in newsList" :key="idx" class="py-[7px]">
              <a href="#" class="flex flex-col sm:flex-row sm:items-center group">
                <span class="block text-edu-blue relative pb-[1px]
                sm:group-hover:after:block sm:group-hover:after:absolute sm:group-hover:after:left-0 sm:group-hover:after:bottom-0 sm:group-hover:after:w-full sm:group-hover:after:h-[1px] sm:group-hover:after:bg-[#323232]
                ">{{ news.date }}</span>
                <span class="block sm:pl-[35px] relative pb-[1px]
                sm:group-hover:after:block sm:group-hover:after:absolute sm:group-hover:after:left-0 sm:group-hover:after:bottom-0 sm:group-hover:after:w-full sm:group-hover:after:h-[1px] group-hover:after:bg-[#323232]
                ">{{ news.title }}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="w-82px absolute -right-[20px] bottom-[5px]">
          <img class="w-full" src="@/assets/images/image/img_news.svg" alt="">
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center">
      <LinkButton :btnClass="['px-[35px]', 'py-[12px]']" btnLink="#">公告一覽</LinkButton>
    </div>
  </div>
</template>
<script setup>
import HoverCard from "@/components/Common/HoverCard.vue"
import icon_person_1 from "@/assets/images/image/img_here.svg"
import icon_person_2 from "@/assets/images/image/img_middle.svg"
import icon_person_3 from "@/assets/images/image/img_high.svg"
const courses = [
  {
    icon: icon_person_3,
    title: "小學生的個別指導",
    content: "不管是想培養讀書習慣 或是針對國中升學都能 加以對應"
  },
  {
    icon: icon_person_2,
    title: "國中生的個別指導",
    content: "不管是想培養讀書習慣 或是針對國中升學都能 加以對應"
  },
  {
    icon: icon_person_3,
    title: "高中生的個別指導",
    content: "不管是想培養讀書習慣 或是針對國中升學都能 加以對應"
  },
]
</script>

<template>
  <div class="pt-[73px] pb-[76px]">
    <div class="container">
      <div class="flex items-center justify-center mb-[40px]">
        <h2 class="h2">個別指導課程</h2>
        <div class="ml-[15px]"><img src="@/assets/images/image/img_books.svg"></div>
      </div>

      <div class="grid sm:grid-cols-2 tablet:grid-cols-3 gap-x-4 gap-y-4">
        <div v-for="(course, idx) in courses" :key="idx">
          <HoverCard>
            <a href="#" class="flex items-center py-4 px-7 bg-white lg:py-6 xl:px-10">
              <div class="w-[60px] h-[80px] lg:w-[80px] lg:h-[100px] xl:w-[100px] xl:h-[120px] mr-[14px] lg:mr-[26px]">
                <img class="h-full w-full object-contain" :src="course.icon" alt="">
              </div>
              <div class="flex-1">
                <h3
                  class="pb-3.5 text-edu-blue text-base font-bold tracking-wider md:text-lg xl:text-xl xl:tracking-[.08em]">
                  {{ course.title }}</h3>
                <p class="text-sm tracking-widest leading-7 xl:text-base">{{ course.content }}</p>
              </div>
            </a>
          </HoverCard>

        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import H2 from "@/components/StyleUtils/Title.vue"
import icon_books from "@/assets/images/image/img_books.svg"
import icon_person_1 from "@/assets/images/image/img_here.svg"
import icon_person_2 from "@/assets/images/image/img_middle.svg"
const courses = [
  {
    icon: icon_person_1,
    title: "小學生的個別指導",
    content: "不管是想培養讀書習慣 或是針對國中升學都能 加以對應"
  },
  {
    icon: icon_person_2,
    title: "國中生的個別指導",
    content: "不管是想培養讀書習慣 或是針對國中升學都能 加以對應"
  },
  {
    icon: icon_person_1,
    title: "高中生的個別指導",
    content: "不管是想培養讀書習慣 或是針對國中升學都能 加以對應"
  },
]
</script>

<template>
  <div class="pt-[73px] pb-[76px]">
    <div class="container"> 
      <div class="mb-[40px]">
        <H2 title="個別指導課程" :icon="icon_books"></H2>
      </div>

      <div class="grid sm:grid-cols-2 tablet:grid-cols-3 gap-x-4 gap-y-4">
        <div v-for="(course, idx) in courses" :key="idx" 
          class="flex items-center bg-edu-bg py-4 px-7 lg:py-6 xl:px-10">
          <div class="w-[45px] lg:w-[60px] xl:w-[80px] mr-[14px] lg:mr-[26px]">
            <img :src="course.icon" alt="">
          </div>
          <div class="flex-1">
            <h3 class="pb-3.5 text-edu-blue text-base xl:text-xl">{{ course.title }}</h3>
            <p class="text-sm xl:text-base">{{ course.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import H2 from "@/components/StyleUtils/Title.vue"
import img_teach_1 from "@/assets/images/image/img_teach_1.png"
import img_teach_2 from "@/assets/images/image/img_teach_2.png"
import img_teach_3 from "@/assets/images/image/img_teach_3.png"
import img_teach_4 from "@/assets/images/image/img_teach_4.png"
const courseInfos = [
  {
    pic: img_teach_1,
    title: "量身訂做的上課模式",
    content: "上課時間、課程內容的難易度等，為你量身訂做專屬的學習計畫！"
  },
  {
    pic: img_teach_2,
    title: "明光義塾的上課流程",
    content: "非填鴨式的個別指導上課方式，培養獨立思考與解決問題的能力。"
  },
  {
    pic: img_teach_3,
    title: "段考複習課程規劃",
    content: "目標設定＋複習檢討＋開放自習，讓你每次段考成績進步看得見！"
  },
  {
    pic: img_teach_4,
    title: "大考總複習課程",
    content: "根據學生的需求規劃總複習進度，個別指導能讓大考準備更有效率！"
  },
]
</script>
<template>
  <div class="py-[70px]">
    <div class="container">
      <div class="mb-[40px]">
        <H2 title="60年的教學經驗，造就出真正的個別指導。" icon=""></H2>
      </div>

      <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 lg:gap-y-0">
        <div v-for="(info, idx) in courseInfos" :key="idx" class="shadow-md">
          <div><img class="w-full" :src="info.pic" alt=""></div>
          <div class="bg-edu-bg py-[20px] px-[16px]">
            <h3 class="relative text-edu-blue text-xl text-center mb-[15px] pb-[15px] font-bold
            after:conent-[''] after:absolute after:block after:w-[60px] after:h-[1px] after:bg-edu-blue after:bottom-0 after:left-1/2 after:-translate-x-1/2
            ">
              {{ info.title }}
            </h3>
            <p>{{ info.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
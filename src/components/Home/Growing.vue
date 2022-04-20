<script setup>
import LinkButton from "@/components/Common/LinkButton.vue"
</script>
<template>
  <div class="w-full mb-[90px] h-[350px] xl:h-0 xl:pt-[30%] bg-growing bg-no-repeat bg-cover relative 2xl:pt-[400px]">
    <div class="absolute top-1/2 left-1/2 -translate-y-1/2  -translate-x-1/2 container
    xl:-translate-y-0 xl:top-[30px]
    ">
      <div class="lg:w-[70%] xl:w-[60%]">
        <div class="flex items-end mb-[40px]">
          <h2 class="h2 pb-[12px] md:pb-[20px] relative md:tracking-wider
          after:block after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#707070]
          ">
          我在明光義塾的成長
          </h2>
          <div class="ml-[40px] -mb-[16px] w-[180px] sm:w-[220px]"><img class="w-full" src="@/assets/images/image/img_together.svg">
          </div>
        </div>
        <p class="tracking-wider md:leading-7 2xl:text-lg">
          學生的成長與笑容、家長的信賴與期待，一直以來都是促使明光不斷前進的最大原動力。 讓我們一起來看看，學生們在明光義塾上課後，一步一步找回學習成就感的心路歷程吧！
        </p>
        <div class="flex mt-[20px] xl:mt-[40px]">
          <LinkButton :btnClass="['px-9', 'py-3']" btnLink="#">瞭解更多</LinkButton>
        </div>
      </div>
    </div>
  </div>
</template>
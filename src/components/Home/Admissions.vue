<script setup>
import LinkButton from "@/components/Common/LinkButton.vue"
</script>
<template>
  <div class="bg-edu-bg">
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:w-2/4 md:min-h-[250px]">
        <img class="w-full md:h-full object-cover" src="@/assets/images/image/img_intro.png" alt="">
      </div>
      <div class="w-full md:w-2/4 md:min-h-[250px] flex flex-col justify-between box-border
        pt-[30px] pb-[20px] pl-[25px] pr-[25px]
        xl:pt-[60px] xl:pb-[43px] xl:pl-[44px] xl:pr-[44px]
      ">
        <p class="text-edu-text">承襲日本明光義塾60年的個別指導教學經驗，明光義塾自2016年開始在台灣開設教室以來，至今足跡已遍佈全台北中南地區，教室數更達80餘間，正式成為教學經驗、教室數量、學生人數皆台灣第一的個別指導。 未來也將不斷邁進，期待自立學習的種子能在每位孩子的學習路上萌芽。</p>
        <div class="flex mt-[20px] justify-end">
          <LinkButton :btnClass="['px-9', 'py-3']" btnLink="#">瞭解更多</LinkButton>
        </div>
      </div>
    </div>
  </div>
</template>
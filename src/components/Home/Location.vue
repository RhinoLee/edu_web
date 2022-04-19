<script setup>
import LinkButton from "@/components/Common/LinkButton.vue"
</script>
<template>
  <div class="pt-[70px]">
    <div class="container">
      <div class="flex flex-wrap justify-center items-center w-full border-2 border-edu-blue rounded-md pt-[26px] pb-[26px] pl-[22px] pr-[22px] xl:pl-[32px] xl:pr-[32px] shadow-md">
        <div class="w-[80px]">
          <div><img class="w-full" src="@/assets/images/image/img_here.svg" alt=""></div>
        </div>
        <h3 class="w-[100%] mt-[10px] ml-[15px] mr-[20px] text-sm text-center sm:w-fit sm:mt-0 sm:text-base xl:ml-[25px] xl:mr-[52px]">距離你最近的明光義塾在這裡！</h3>
        <div class="flex flex-wrap w-[100%] mt-[20px] sm:flex-nowrap lg:mt-0 lg:flex-1 justify-center items-center">
          <div class="w-[100%] sm:w-[44%] relative">
            <div class="select-arrow"></div>
            <select class="w-full py-[16px] pr-[16px] sm:py-[20px] sm:pr-[34px] text-center border border-edu-boder rounded appearance-none bg-transparent">
              <option value="">縣市</option>
              <option value="台南市">台南市</option>
              <option value="台中市">台中市</option>
              <option value="台北市">台北市</option>
            </select>
          </div>
          <div class="w-[100%] sm:w-[44%] sm:ml-[14px] relative">
            <div class="select-arrow"></div>
            <select class="w-full mt-[10px] py-[16px] pr-[16px] sm:mt-0 sm:py-[20px] sm:pr-[34px] text-center border border-edu-boder rounded appearance-none bg-transparent">
              <option value="">區域</option>
              <option value="">區域</option>
              <option value="">區域</option>
              <option value="">區域</option>
              <option value="">區域</option>
            </select>
          </div>
          <div class="w-[100%] sm:w-[12%] sm:ml-[14px] text-center">
            <LinkButton :btnClass="['w-full', 'mt-[20px]', 'px-[16px]', 'py-[16px]', 'sm:mt-0', 'sm:px-[20px]', 'sm:py-[20px]']" btnLink="#">GO!</LinkButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
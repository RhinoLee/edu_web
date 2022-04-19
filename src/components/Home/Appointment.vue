<script setup>
import LinkButton from "@/components/Common/LinkButton.vue"
import icon_free from "@/assets/images/icon/icon_free.svg"
import icon_class from "@/assets/images/icon/icon_class.svg"
import icon_info from "@/assets/images/icon/icon_info.svg"
</script>
<template>
  <div class="mb-[74px]">
    <div class="container">
      <div
        class="relative flex flex-wrap justify-center items-center w-full border-2 border-edu-blue rounded-md pt-[24px] pb-[24px] pl-[22px] pr-[22px] xl:pl-[32px] xl:pr-[32px] shadow-md">
        <div class="w-[100%] lg:w-[30%] flex items-center">
          <div class="relative w-[82px]">
            <div class="absolute w-[82px] left-0 -top-[130px] lg:-top-[100px]"><img class="w-full"
                src="@/assets/images/image/img_reserve.svg" alt=""></div>
          </div>
          <h3 class="pl-[25px] text-sm text-edu-blue fonr-bold text-right sm:text-base xl:text-lg">
            立即線上預約！</h3>
        </div>
        <div
          class="w-[100%] lg:w-[70%] grid grid-cols-1 gap-y-[18px] md:grid-cols-3 md:gap-y-0 gap-x-[22px] mt-[20px] lg:mt-0 lg:flex-1">
          <div>
            <LinkButton btnLink="#" :icon="icon_free" :iconClass="['h-[26px]', 'mr-[5px]']"
              :btnClass="['px-[38px]', 'py-[20px]']">免費體驗</LinkButton>
          </div>
          <div>
            <LinkButton btnLink="#" :icon="icon_class" :iconClass="['h-[26px]', 'mr-[5px]']"
              :btnClass="['px-[38px]', 'py-[20px]']">課程諮詢</LinkButton>
          </div>
          <div>
            <LinkButton btnLink="#" :icon="icon_info" :iconClass="['h-[26px]', 'mr-[5px]']"
              :btnClass="['px-[38px]', 'py-[20px]']">課程諮詢</LinkButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
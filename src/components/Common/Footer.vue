<script setup>
import Logo from "@/components/Common/Logo.vue"
import icon_footer_1 from "@/assets/images/icon/icon_footer_1.svg"
import icon_footer_2 from "@/assets/images/icon/icon_footer_2.svg"
import icon_footer_3 from "@/assets/images/icon/icon_footer_3.svg"
import icon_footer_4 from "@/assets/images/icon/icon_footer_4.svg"
import icon_footer_5 from "@/assets/images/icon/icon_footer_5.svg"

const footerNav = [
  {
    icon: icon_footer_1,
    title: "聯絡我們",
    link: "#"
  },
  {
    icon: icon_footer_2,
    title: "夥伴招募",
    link: "#"
  },
  {
    icon: icon_footer_3,
    title: "隱私權政策",
    link: "#"
  },
  {
    icon: icon_footer_4,
    title: "自動扣款設定",
    link: "#"
  },
  {
    icon: icon_footer_5,
    title: "MEST",
    link: "#"
  },
]
</script>
<template>
  <div>
    <div class="relative pt-[50px] pb-[54px] lg:pb-[74px] bg-edu-bg">
      <div class="w-[210px] sm:w-[260px] mx-auto mb-[35px] lg:mb-[55px]">
        <Logo></Logo>
      </div>
      <div>
        <ul class="flex flex-col justify-center mx-auto md:flex-row">
          <li v-for="(item, idx) in footerNav" :key="idx" class="flex justify-center items-center px-[10px] py-[5px] lg:px-[20px] md:py-0">
            <div class="mr-[6px] lg:mr-[12px] h-[16px] lg:h-[20px]"><img class="h-full" :src="item.icon" alt=""></div>
            <a class="relative block pb-[1px] lg:text-lg text-edu-blue
            hover:after:block hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[1px] hover:after:bg-[#323232]
            " 
            :href="item.link">
              {{ item.title }}
            </a>
          </li>
        </ul>
      </div>
      <!-- icons -->
      <div class="absolute w-[130px] lg:w-[200px] 2xl:w-[200px] left-[20px] bottom-[-5px]"><img class="w-full" src="@/assets/images/image/img_footercs.svg" alt=""></div>
      <div class="absolute w-[30px] xl:w-[45px] right-[40px] bottom-0"><img class="w-full" src="@/assets/images/image/img_footerpeople.svg" alt=""></div>
      <div class="absolute w-[35px] xl:w-[50px] right-[118px] bottom-0"><img class="w-full" src="@/assets/images/image/img_footerbm.svg" alt=""></div>
    </div>
    <!-- copyright -->
    <div class="bg-edu-blue text-center">
      <p class="text-white text-sm py-[8px]">Copyright &copy; 明光義塾 All Rights reservrd.</p>
    </div>
  </div>
</template>
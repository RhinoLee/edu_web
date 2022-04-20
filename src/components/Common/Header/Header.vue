<script setup>
import { onMounted, reactive, ref, computed } from "vue"
import { useRouter } from "vue-router"
import HeaderBtn from "@/components/Common/Header/HeaderBtn.vue"
import MobileNav from "@/components/Common/Header/MobileNav.vue"
import SubMenu from "@/components/Common/Header/SubMenu.vue"
import Mask from "@/components/Common/Header/Mask.vue"
import Logo from "@/components/Common/Logo.vue"

import icon_free from '@/assets/images/icon/icon_free.svg'
import icon_class from '@/assets/images/icon/icon_class.svg'
import icon_info from '@/assets/images/icon/icon_info.svg'
import img_header_1 from '@/assets/images/image/img_header_1.png'
import img_header_2 from '@/assets/images/image/img_header_2.png'
import img_header_3 from '@/assets/images/image/img_header_3.png'

const router = useRouter()
const isOpen = ref(false)
const nowMenuIdx = ref(null)

const topNavItems = [
  {
    icon: icon_free,
    title: "免費體驗",
    link: "#",
  },
  {

    icon: icon_class,
    title: "課程諮詢",
    link: "#",
  },
  {

    icon: icon_info,
    title: "資料索取",
    link: "#",
  },
]
const nestNavItems = [
  {
    title: "關於明光義塾",
    hasIcon: true,
    hasBorder: false,
    link: "",
    picMenu: [
      {
        title: "明光義塾的教學理念",
        pic: img_header_1,
        link: "#"
      },
      {
        title: "量身定做的教學方式",
        pic: img_header_2,
        link: "#"
      },
      {
        title: "有助自助學習的原創教材",
        pic: img_header_3,
        link: "#"
      },
    ],
    subMenu: [
      {
        title: "提升理解程度的教學筆記",
        link: "#"
      },
      {
        title: "最新公告",
        link: "#"
      },
    ]
  },
  {
    title: "個別指導課程",
    hasIcon: true,
    hasBorder: true,
    link: "",
    picMenu: [
      {
        title: "個別指導課程 - 1",
        pic: img_header_3,
        link: "#"
      },
      {
        title: "個別指導課程 - 2",
        pic: img_header_2,
        link: "#"
      },
    ],
    subMenu: [
      {
        title: "個別指導課程 - 3",
        link: "#"
      },
      {
        title: "個別指導課程 - 4",
        link: "#"
      },
    ]
  },
  {
    title: "教室資訊",
    hasIcon: true,
    hasBorder: true,
    link: "",
    picMenu: [
      {
        title: "個別指導課程 - 1",
        pic: img_header_2,
        link: "#"
      },
    ],
    subMenu: [
      {
        title: "個別指導課程 - 2",
        link: "#"
      },
      {
        title: "個別指導課程 - 3",
        link: "#"
      },
    ]
  },
  {
    title: "常見問題",
    hasIcon: false,
    hasBorder: true,
    link: "#",
    picMenu: [],
    subMenu: []
  },
]

const nowMenuItem = computed(() => {
  if (nowMenuIdx.value === null) return null
  return nestNavItems[nowMenuIdx.value]
})

function toggleNav() {
  isOpen.value = !isOpen.value
}

function clickMask() {
  isOpen.value = false
}

function menuTrigger(idx) {
  if (idx === nowMenuIdx.value) {
    return nowMenuIdx.value = null
  }

  nowMenuIdx.value = idx

  // 只有單層，無 submenu
  if (nowMenuItem.value && nowMenuItem.value.link) {
    router.push({ path: nowMenuItem.value.link })
    return nowMenuIdx.value = null
  }
}

</script>
<template>
  <header class="relative bg-white">
    <!-- header-top -->
    <div
      class="relative z-20 bg-white">
      <div class=" flex flex-wrap py-2 max-w-[90%] mx-auto lg:flex-nowrap lg:items-center lg:justify-between 2xl:px-[80px] 2xl:max-w-[1200px]">
        <!-- 左側 -->
        <div class="flex flex-col sm:flex-row w-[100%] lg:w-auto items-center justify-center">
          <!-- logo -->
          <div href="#" class="flex justify-between items-center w-full mb-2 sm:mb-0 sm:w-auto">
            <Logo></Logo>
          </div>
          <p class="hidden text-base xl:text-lg text-edu-blue sm:block sm:pl-3.5">台灣市佔第一個別指導補習班</p>
        </div>
        <!-- 右側 -->
        <div class="hidden w-[100%] lg:w-auto items-center justify-center mt-4 mb-4 lg:mt-0 lg:mb-0 sm:flex">
          <a href="#" class="nav-item-top" v-for="(item, idx) in topNavItems" :key="idx">
            <div class="h-[26px] mr-[5px]"><img class="block h-full" :src="item.icon" alt="課程諮詢">
            </div>
            <p class="text-edu-blue text-base xl:text-lg">{{ item.title }}</p>
          </a>
        </div>
      </div>

    </div>

    <!-- header-bottom-nav -->
    <div class="relative hidden bg-edu-bg shadow:xl z-20 sm:block">
      <div class="container flex">
        <HeaderBtn v-for="(item, idx) in nestNavItems" :key="idx" :hasBorder="item.hasBorder" :hasArrow="item.hasIcon"
          :active="idx === nowMenuIdx" @click="menuTrigger(idx)">
          {{ item.title }}</HeaderBtn>
      </div>
    </div>

    <!-- header-botom-nav-menu -->
    <SubMenu :nowMenuItem="nowMenuItem"></SubMenu>
  </header>
  <!-- burger-menu -->
  <button @click="toggleNav" class="sm:hidden absolute top-[12px] right-[20px] z-20">menu</button>
  <!-- mobile-menu -->
  <MobileNav :isOpen="isOpen" :topNavItems="topNavItems" :nestNavItems="nestNavItems"></MobileNav>
  <Mask :isOpen="isOpen" @click="clickMask"></Mask>
</template>

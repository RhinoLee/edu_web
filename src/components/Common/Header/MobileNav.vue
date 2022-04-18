<script setup>
import { ref, computed } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const props = defineProps({
  isOpen: {
    type: Boolean,
  },
  topNavItems: {
    type: Array,
  },
  nestNavItems: {
    type: Array,
  },
})

const nowMenuIdx = ref(null)

const nowMenuItem = computed(() => {
  if (nowMenuIdx.value === null) return null
  return props.nestNavItems[nowMenuIdx.value]
})

function menuTrigger(idx) {
  if (idx === nowMenuIdx.value) {
    return nowMenuIdx.value = null
  }

  nowMenuIdx.value = idx

  if (nowMenuItem.value && nowMenuItem.value.link) {
    return router.push({ path: nowMenuItem.value.link })
  }
}

</script>

<template>
  <nav :class="{ 'nav-open': isOpen }"
    class="absolute top-0 -left-[260px] w-[260px] xs:-left-[300px] xs:w-[300px] h-screen pt-6 bg-edu-bg sm:hidden transition-all duration-700 z-20">
    <ul>

      <li v-for="(item, idx) in topNavItems" :key="idx">
        <a :href="item.link" class="nav-item-top">
          <div class="w-[20px] mr-[5px]">
            <img class="block w-full" :src="item.icon" alt="item.title">
          </div>
          <p class="text-edu-blue text-base lg:text-lg">{{ item.title }}</p>
        </a>
      </li>

      <li v-for="(item, index) in nestNavItems" :key="index" class="px-3.5 py-2.5">
        <a @click.prevent="menuTrigger(index)" href="#" class="inline-block py-1 text-edu-blue text-base lg:text-lg">{{
          item.title
        }}</a>
        <ul v-if="item.picMenu.length > 0 || item.subMenu.length > 0" class="pl-4">
          <li v-for="(sub1, idx) in item.picMenu" :key="'sub1' + idx" :class="{ 'sub-menu-open': nowMenuIdx === index }"
            class="h-0 overflow-hidden transition-all duration-500">
            <a class="inline-block py-1" :href="sub1.link">{{ sub1.title }}</a>
          </li>

          <li v-for="(sub2, idx) in item.subMenu" :key="'sub2' + idx" :class="{ 'sub-menu-open': nowMenuIdx === index }"
            class="h-0 overflow-hidden transition-all duration-500">
            <a class="inline-block py-1" :href="sub2.link">{{ sub2.title }}</a>
          </li>

        </ul>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/* mobile-nav */
.nav-open {
  left: 0;
}

.sub-menu-open {
  height: 30px;
}
</style>
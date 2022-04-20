<script setup>
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';
</script>

<template>
  <swiper :modules="[Pagination]" :slides-per-view="1" :pagination="{ clickable: true }">
    <swiper-slide>
      <div class="2xl:max-h-[500px]">
        <img class="w-full 2xl:h-full 2xl:object-cover" src="@/assets/images/image/banner.png" alt="">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="2xl:max-h-[500px]">
        <img class="w-full 2xl:h-full 2xl:object-cover" src="@/assets/images/image/banner.png" alt="">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="2xl:max-h-[500px]">
        <img class="w-full 2xl:h-full 2xl:object-cover" src="@/assets/images/image/banner.png" alt="">
      </div>
    </swiper-slide>
  </swiper>

</template>